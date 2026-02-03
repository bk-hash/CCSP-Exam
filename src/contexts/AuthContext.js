import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();

// User tier constants (moved outside component to avoid re-creation)
export const USER_TIERS = {
  DEMO: 'demo',
  PREMIUM: 'premium'
};

export const DEMO_LIMITS = {
  questionsPerDomain: 5,
  flashcardsPerDomain: 10,
  practiceExams: 0,
  domains: 6 // Total domains available in demo
};

export const PREMIUM_LIMITS = {
  questionsPerDomain: -1, // Unlimited
  flashcardsPerDomain: -1, // Unlimited
  practiceExams: -1, // Unlimited
  domains: -1 // All domains
};

// Approved users who get automatic Premium access
const APPROVED_USERS = [
  'billycannine@gmail.com',
  '211297@students.mancosa.co.za',
  'malebza.lethoba@gmail.com'
];

const isApprovedUser = (email) => {
  return APPROVED_USERS.includes(email?.toLowerCase()?.trim());
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  // Replace with your actual Google Client ID
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID_HERE";
  
  // Development bypass option - only for localhost
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const BYPASS_AUTH = process.env.REACT_APP_BYPASS_AUTH === 'true' && isLocalhost;
  
  // Production fallback for testing - GitHub Pages doesn't support environment variables easily
  const isGitHubPages = window.location.hostname.includes('github.io');
  const PRODUCTION_FALLBACK = isGitHubPages;
  
  // Validate Client ID format
  const isValidClientId = GOOGLE_CLIENT_ID && 
    GOOGLE_CLIENT_ID !== "YOUR_GOOGLE_CLIENT_ID_HERE" && 
    GOOGLE_CLIENT_ID.includes('.apps.googleusercontent.com');

  // Check if user is in approved list for direct access
  // (using the external function)

  // Helper functions for subscription management
  const getUserLimits = (userTier) => {
    return userTier === USER_TIERS.PREMIUM ? PREMIUM_LIMITS : DEMO_LIMITS;
  };

  const isPremiumUser = (user) => {
    return user?.tier === USER_TIERS.PREMIUM;
  };

  const isDemoUser = (user) => {
    const result = user?.tier === USER_TIERS.DEMO || !user?.tier;
    console.log('🔍 isDemoUser check:', {
      email: user?.email,
      tier: user?.tier,
      USER_TIERS_DEMO: USER_TIERS.DEMO,
      USER_TIERS_PREMIUM: USER_TIERS.PREMIUM,
      isDemoResult: result
    });
    return result;
  };

  const canAccessFeature = (user, feature, count = 0) => {
    const limits = getUserLimits(user?.tier || USER_TIERS.DEMO);
    
    switch (feature) {
      case 'questions':
        return limits.questionsPerDomain === -1 || count < limits.questionsPerDomain;
      case 'flashcards':
        return limits.flashcardsPerDomain === -1 || count < limits.flashcardsPerDomain;
      case 'practiceExams':
        return limits.practiceExams === -1 || count < limits.practiceExams;
      default:
        return isDemoUser(user); // Default to demo access
    }
  };

  const upgradeUserToPremium = (subscriptionData) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      tier: USER_TIERS.PREMIUM,
      subscriptionStatus: 'active',
      subscriptionEnd: subscriptionData?.subscriptionEnd || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      stripeCustomerId: subscriptionData?.stripeCustomerId || null,
      subscriptionId: subscriptionData?.subscriptionId || null,
      premiumUpgradeDate: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setUser(updatedUser);
    
    // Save to multiple storage locations for persistence
    localStorage.setItem('ccsp_quiz_user', JSON.stringify(updatedUser));
    localStorage.setItem(`ccsp_premium_${user.email}`, JSON.stringify({
      tier: 'premium',
      upgradeDate: new Date().toISOString(),
      subscriptionEnd: updatedUser.subscriptionEnd
    }));
    
    // Also save to testUsers for admin panel sync
    const testUsers = JSON.parse(localStorage.getItem('testUsers') || '[]');
    const existingUserIndex = testUsers.findIndex(u => u.email === user.email);
    
    const userRecord = {
      email: user.email,
      name: user.name,
      tier: 'premium',
      subscriptionStatus: 'active',
      lastUpgrade: new Date().toISOString(),
      upgradeMethod: subscriptionData?.method || 'demo'
    };
    
    if (existingUserIndex >= 0) {
      testUsers[existingUserIndex] = { ...testUsers[existingUserIndex], ...userRecord };
    } else {
      testUsers.push(userRecord);
    }
    
    localStorage.setItem('testUsers', JSON.stringify(testUsers));
    
    console.log('✅ User upgraded to Premium with persistence:', updatedUser);
    console.log('📦 Premium data saved to multiple locations for:', user.email);
  };

  console.log('🔧 Auth Debug Info:');
  console.log('- Client ID configured:', !!GOOGLE_CLIENT_ID);
  console.log('- Client ID valid format:', isValidClientId);
  console.log('- Bypass mode:', BYPASS_AUTH);
  console.log('- GitHub Pages mode:', isGitHubPages);
  console.log('- Production fallback:', PRODUCTION_FALLBACK);
  console.log('- Browser:', navigator.userAgent.includes('Chrome') ? 'Chrome' : 'Other');
  console.log('- Client ID preview:', GOOGLE_CLIENT_ID ? GOOGLE_CLIENT_ID.substring(0, 20) + '...' : 'None');

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error parsing JWT:', error);
      return null;
    }
  };

  const handleCredentialResponse = useCallback((response) => {
    try {
      // Decode the JWT token to get user info
      const userObject = parseJwt(response.credential);
      
      console.log('🔐 Processing login for:', userObject.email);
      
      // Check multiple data sources for this user
      const existingUserData = localStorage.getItem('ccsp_quiz_user');
      const testUserData = localStorage.getItem(`test_user_${userObject.email}`);
      const premiumUserData = localStorage.getItem(`ccsp_premium_${userObject.email}`);
      const testUsers = JSON.parse(localStorage.getItem('testUsers') || '[]');
      const testUserRecord = testUsers.find(u => u.email === userObject.email);
      
      console.log('📋 Data sources found:', {
        existingUser: !!existingUserData,
        testUser: !!testUserData,
        premiumUser: !!premiumUserData,
        testRecord: !!testUserRecord
      });
      
      let userData;
      
      // PRIORITY 1: Check premium user data (highest priority)
      if (premiumUserData) {
        const premiumUser = JSON.parse(premiumUserData);
        console.log('🌟 Found premium user data:', premiumUser);
        userData = {
          id: userObject.sub,
          email: userObject.email,
          name: userObject.name,
          picture: userObject.picture,
          given_name: userObject.given_name,
          family_name: userObject.family_name,
          tier: 'premium', // Force Premium tier
          subscriptionStatus: 'active',
          subscriptionEnd: premiumUser.subscriptionEnd || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          lastLogin: new Date().toISOString(),
          restoredFrom: 'premium_storage'
        };
        console.log('✅ Premium status restored from premium storage');
        console.log('⭐ Loading premium user with tier:', premiumUser.tier);
      }
      // PRIORITY 2: Check admin test users list
      else if (testUserRecord) {
        console.log('🎯 Found admin test user record:', testUserRecord);
        userData = {
          id: userObject.sub,
          email: userObject.email,
          name: userObject.name,
          picture: userObject.picture,
          given_name: userObject.given_name,
          family_name: userObject.family_name,
          tier: testUserRecord.tier,
          subscriptionStatus: testUserRecord.tier === 'premium' ? 'active' : 'demo',
          subscriptionEnd: testUserRecord.tier === 'premium' ? 
            new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() : null,
          createdAt: testUserRecord.addedDate || new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          isTestUser: true,
          addedBy: testUserRecord.addedBy,
          paymentAmount: testUserRecord.tier === 'premium' ? 9.99 : 0,
          paymentDate: testUserRecord.paymentDate || testUserRecord.addedDate,
          restoredFrom: 'admin_panel'
        };
        console.log('✅ Admin user restored with tier:', testUserRecord.tier);
        
        // If this is Premium, also save to premium storage for future persistence
        if (testUserRecord.tier === 'premium') {
          localStorage.setItem(`ccsp_premium_${userObject.email}`, JSON.stringify({
            tier: 'premium',
            upgradeDate: testUserRecord.addedDate || new Date().toISOString(),
            subscriptionEnd: userData.subscriptionEnd
          }));
          console.log('💾 Premium status saved to premium storage for future persistence');
        }
      } 
      // PRIORITY 3: Check test user data
      else if (testUserData) {
        const testUser = JSON.parse(testUserData);
        userData = {
          ...testUser,
          id: userObject.sub,
          email: userObject.email,
          name: userObject.name,
          picture: userObject.picture,
          given_name: userObject.given_name,
          family_name: userObject.family_name,
          lastLogin: new Date().toISOString()
        };
        console.log('🎯 Loading test user with tier:', testUser.tier);
      } 
      // PRIORITY 4: Check existing stored auth data
      else if (existingUserData) {
        const existingUser = JSON.parse(existingUserData);
        userData = {
          ...existingUser,
          id: userObject.sub,
          email: userObject.email,
          name: userObject.name,
          picture: userObject.picture,
          given_name: userObject.given_name,
          family_name: userObject.family_name,
          lastLogin: new Date().toISOString()
        };
        console.log('🔄 Loading existing user with tier:', existingUser.tier);
      } 
      // PRIORITY 5: Check if this is an approved user (gets automatic Premium)
      else if (isApprovedUser(userObject.email)) {
        console.log('⭐ Creating approved user with automatic Premium access');
        userData = {
          id: userObject.sub,
          email: userObject.email,
          name: userObject.name,
          picture: userObject.picture,
          given_name: userObject.given_name,
          family_name: userObject.family_name,
          tier: USER_TIERS.PREMIUM,
          subscriptionStatus: 'active',
          subscriptionEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          isApprovedUser: true,
          restoredFrom: 'approved_user_list'
        };
        
        // Save Premium status to all storage locations for persistence
        localStorage.setItem(`ccsp_premium_${userObject.email}`, JSON.stringify({
          tier: 'premium',
          upgradeDate: new Date().toISOString(),
          subscriptionEnd: userData.subscriptionEnd
        }));
        
        // Also add to testUsers for admin panel
        const testUsers = JSON.parse(localStorage.getItem('testUsers') || '[]');
        testUsers.push({
          email: userObject.email,
          name: userObject.name,
          tier: 'premium',
          subscriptionStatus: 'active',
          addedDate: new Date().toISOString(),
          addedBy: 'system_approved_user'
        });
        localStorage.setItem('testUsers', JSON.stringify(testUsers));
        
        console.log('✅ Approved user Premium access saved to all storage locations');
      }
      // PRIORITY 6: New user with demo tier
      else {
        userData = {
          id: userObject.sub,
          email: userObject.email,
          name: userObject.name,
          picture: userObject.picture,
          given_name: userObject.given_name,
          family_name: userObject.family_name,
          tier: USER_TIERS.DEMO,
          subscriptionStatus: 'demo',
          subscriptionEnd: null,
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        };
        console.log('🎯 New user created with demo tier:', userData);
      }
      
      console.log('✅ Final user data:', userData);
      setUser(userData);
      localStorage.setItem('ccsp_quiz_user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error processing credential response:', error);
    }
  }, []);

  // If bypass is enabled, simulate logged in user
  useEffect(() => {
    if (BYPASS_AUTH) {
      console.log('⚠️ Authentication bypassed for development');
      setUser({
        id: 'dev-user-123',
        email: 'developer@example.com',
        name: 'Development User',
        picture: 'https://via.placeholder.com/64/4285f4/ffffff?text=DEV',
        given_name: 'Dev',
        family_name: 'User',
        tier: USER_TIERS.PREMIUM, // Give dev user premium access
        subscriptionStatus: 'dev',
        subscriptionEnd: null,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      });
      setIsLoading(false);
      setIsInitialized(true);
      return;
    }
  }, [BYPASS_AUTH]);

  useEffect(() => {
    const initializeGoogleAuth = () => {
      if (window.google && window.google.accounts) {
        try {
          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
            auto_select: false,
            cancel_on_tap_outside: true,
            use_fedcm_for_prompt: false, // Better Chrome compatibility
          });
          setIsInitialized(true);
          setIsLoading(false);
          console.log('✅ Google Auth initialized successfully');
        } catch (error) {
          console.error('❌ Error initializing Google Auth:', error);
          setIsInitialized(false);
          setIsLoading(false);
        }
      } else {
        console.log('⏳ Google Auth not ready yet');
        setIsLoading(false);
      }
    };

    // Enhanced script loading with better error handling
    const loadGoogleScript = () => {
      const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('📦 Google Script loaded');
        // Add a small delay for Chrome compatibility
        setTimeout(initializeGoogleAuth, 500);
      };
      
      script.onerror = (error) => {
        console.error('❌ Failed to load Google Script:', error);
        setIsLoading(false);
        setIsInitialized(false);
      };
      
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    };

    // Only load Google script if we have a valid client ID
    if (isValidClientId) {
      const cleanup = loadGoogleScript();
      return cleanup;
    } else {
      console.log('⚠️ Invalid or missing Google Client ID, skipping Google Auth');
      setIsLoading(false);
      setIsInitialized(false);
    }
  }, [BYPASS_AUTH, isValidClientId, GOOGLE_CLIENT_ID, handleCredentialResponse]);

  const signIn = () => {
    // If Google Auth not available or not working, provide fallback
    if (!window.google || !isInitialized || !isValidClientId) {
      console.log('⚠️ Google Auth not available, showing fallback login');
      showFallbackLogin();
      return;
    }

    if (window.google && isInitialized) {
      try {
        // First try the prompt method
        window.google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            console.log('Prompt not displayed:', notification.getNotDisplayedReason());
            console.log('Skipped moment:', notification.getSkippedReason());
            // If prompt fails, show fallback
            showFallbackLogin();
          }
        });
      } catch (error) {
        console.error('Error during sign in:', error);
        showFallbackLogin();
      }
    } else {
      console.error('Google Auth not initialized or available');
      showFallbackLogin();
    }
  };

  const showFallbackLogin = () => {
    // eslint-disable-next-line no-restricted-globals
    const email = prompt(`Google Sign-In not available.\n\nFor approved users, enter your email:\n\nApproved emails:\n- billycannine@gmail.com\n- 211297@students.mancosa.co.za\n- malebza.lethoba@gmail.com`);
    
    if (email && isApprovedUser(email)) {
      const userData = createUserFromEmail(email);
      setUser(userData);
      localStorage.setItem('ccsp_quiz_user', JSON.stringify(userData));
    } else if (email) {
      alert(`Sorry, ${email} is not an approved user.\n\nContact billycannine@gmail.com for access.`);
    }
  };

  const createUserFromEmail = (email) => {
    // Check if user exists in admin panel
    const testUsers = JSON.parse(localStorage.getItem('testUsers') || '[]');
    const testUserRecord = testUsers.find(u => u.email === email);
    
    return {
      id: `fallback-${Date.now()}`,
      email: email,
      name: email.split('@')[0],
      picture: 'https://via.placeholder.com/64/4285f4/ffffff?text=' + email.charAt(0).toUpperCase(),
      given_name: email.split('@')[0],
      family_name: '',
      tier: testUserRecord?.tier || (isApprovedUser(email) ? 'premium' : 'demo'),
      subscriptionStatus: testUserRecord?.tier === 'premium' || isApprovedUser(email) ? 'active' : 'demo',
      subscriptionEnd: testUserRecord?.tier === 'premium' || isApprovedUser(email) ? 
        new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() : null,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      loginMethod: 'fallback',
      isApprovedUser: isApprovedUser(email)
    };
  };

  const signOut = () => {
    if (window.google && user) {
      window.google.accounts.id.disableAutoSelect();
    }
    
    // Save Premium status before logout if user has it
    if (user && user.tier === 'premium') {
      console.log('💾 Preserving Premium status for:', user.email);
      localStorage.setItem(`ccsp_premium_${user.email}`, JSON.stringify({
        tier: 'premium',
        preservedAt: new Date().toISOString(),
        subscriptionEnd: user.subscriptionEnd
      }));
      
      // Also preserve in testUsers
      const testUsers = JSON.parse(localStorage.getItem('testUsers') || '[]');
      const existingUserIndex = testUsers.findIndex(u => u.email === user.email);
      
      const userRecord = {
        email: user.email,
        name: user.name,
        tier: 'premium',
        subscriptionStatus: 'active',
        preservedAt: new Date().toISOString()
      };
      
      if (existingUserIndex >= 0) {
        testUsers[existingUserIndex] = { ...testUsers[existingUserIndex], ...userRecord };
      } else {
        testUsers.push(userRecord);
      }
      
      localStorage.setItem('testUsers', JSON.stringify(testUsers));
    }
    
    setUser(null);
    localStorage.removeItem('ccsp_quiz_user');
    console.log('🚪 User signed out, Premium status preserved if applicable');
  };

  // Check for existing user session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('ccsp_quiz_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        
        // Multi-layer Premium status check for persistence
        console.log('🔍 Checking Premium status for:', userData.email);
        console.log('📊 Current user tier:', userData.tier);
        
        // Check 1: Admin panel users
        const testUsers = JSON.parse(localStorage.getItem('testUsers') || '[]');
        const testUserRecord = testUsers.find(u => u.email === userData.email);
        console.log('🔍 Admin panel record:', testUserRecord);
        
        // Check 2: Premium storage
        const premiumData = localStorage.getItem(`ccsp_premium_${userData.email}`);
        const premiumRecord = premiumData ? JSON.parse(premiumData) : null;
        console.log('🔍 Premium storage record:', premiumRecord);
        
        // Check 3: Approved users list
        const isApprovedUserCheck = isApprovedUser(userData.email);
        console.log('🔍 Is approved user:', isApprovedUserCheck);
        
        // Determine if user should have Premium access
        let shouldUpdate = false;
        let updateReason = '';
        
        if (testUserRecord && testUserRecord.tier === 'premium') {
          console.log('✅ Premium status confirmed via admin panel');
          shouldUpdate = userData.tier !== 'premium';
          updateReason = 'admin panel';
        } else if (premiumRecord && premiumRecord.tier === 'premium') {
          console.log('✅ Premium status confirmed via premium storage');
          shouldUpdate = userData.tier !== 'premium';
          updateReason = 'premium storage';
        } else if (isApprovedUserCheck) {
          console.log('✅ Premium status confirmed via approved users list');
          shouldUpdate = userData.tier !== 'premium';
          updateReason = 'approved user';
        }
        
        console.log('🔄 Should update user to Premium:', shouldUpdate, 'Reason:', updateReason);
        
        if (shouldUpdate) {
          console.log('🔄 Restoring Premium access for:', userData.email);
          console.log('📊 Before update - tier:', userData.tier);
          userData.tier = USER_TIERS.PREMIUM;
          userData.subscriptionStatus = 'active';
          userData.subscriptionEnd = userData.subscriptionEnd || 
            new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();
          userData.restoredAt = new Date().toISOString();
          
          localStorage.setItem('ccsp_quiz_user', JSON.stringify(userData));
          console.log('✅ Premium access restored successfully');
          console.log('📊 After update - tier:', userData.tier);
        }
        
        setUser(userData);
        console.log('👤 User loaded with tier:', userData.tier);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('ccsp_quiz_user');
      }
    }
  }, []);

  const value = {
    user,
    signIn,
    signOut,
    isLoading,
    isInitialized,
    // Subscription functions
    isPremiumUser,
    isDemoUser,
    canAccessFeature,
    upgradeUserToPremium,
    getUserLimits,
    // Constants
    USER_TIERS,
    DEMO_LIMITS,
    PREMIUM_LIMITS
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
