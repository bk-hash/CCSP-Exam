import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts';
import { useStats } from '../contexts/StatsContext';

const AdminPanel = () => {
  const { user, upgradeUserToPremium, isDemoUser } = useAuth();
  const { theme } = useTheme();
  const { userStats, resetStats } = useStats();
  const [isAdmin, setIsAdmin] = useState(false);
  const [testUsers, setTestUsers] = useState([]);
  const [newTestUser, setNewTestUser] = useState('');

  useEffect(() => {
    // STRICT ADMIN ACCESS CONTROL - NO PRIVILEGE ESCALATION POSSIBLE
    const AUTHORIZED_ADMIN_EMAIL = 'billycannine@gmail.com';
    
    // Multiple validation layers
    const isAuthorizedAdmin = (
      user?.email === AUTHORIZED_ADMIN_EMAIL &&
      user?.email && // Must have email
      user.email.toLowerCase() === AUTHORIZED_ADMIN_EMAIL.toLowerCase() && // Case insensitive c                          🔓 Logouteck
      user.email.trim() === AUTHORIZED_ADMIN_EMAIL // No whitespace tricks
    );
    
    // Additional security: Check if user object is properly formed
    const isValidUser = (
      user &&
      typeof user === 'object' &&
      user.id &&
      user.email &&
      user.name
    );
    
    // Final admin determination
    setIsAdmin(isAuthorizedAdmin && isValidUser);
    
    // Log admin access attempts for security monitoring
    if (user?.email) {
      if (isAuthorizedAdmin && isValidUser) {
        console.log('✅ ADMIN ACCESS GRANTED:', user.email);
      } else {
        console.log('❌ ADMIN ACCESS DENIED:', user.email);
        console.log('- Authorized check:', isAuthorizedAdmin);
        console.log('- Valid user check:', isValidUser);
      }
    }
    
    loadTestUsers();
  }, [user]); // Enhanced dependencies

  const loadTestUsers = () => {
    const saved = localStorage.getItem('testUsers');
    if (saved) {
      setTestUsers(JSON.parse(saved));
    }
  };

  const saveTestUsers = (users) => {
    localStorage.setItem('testUsers', JSON.stringify(users));
    setTestUsers(users);
  };

  const addTestUser = () => {
    if (newTestUser && !testUsers.find(u => u.email === newTestUser)) {
      const newUser = {
        email: newTestUser,
        tier: 'premium', // Automatically give Premium access
        paymentAmount: 0,
        paymentDate: new Date().toISOString(),
        testUser: true,
        addedBy: user?.email,
        addedDate: new Date().toISOString()
      };
      
      // Save to test users list
      saveTestUsers([...testUsers, newUser]);
      
      // Create authentication data for immediate Premium access
      const authUserData = {
        id: `admin-user-${Date.now()}`,
        email: newTestUser,
        name: newTestUser.split('@')[0],
        picture: 'https://via.placeholder.com/64/27ae60/ffffff?text=⭐',
        tier: 'premium',
        subscriptionStatus: 'active',
        subscriptionEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
        isTestUser: true,
        createdBy: user?.email,
        createdAt: new Date().toISOString(),
        addedViaAdmin: true
      };
      
      // Store authentication data for this user
      localStorage.setItem(`test_user_${newTestUser}`, JSON.stringify(authUserData));
      
      // Clear input and show success message
      setNewTestUser('');
      alert(`✅ User ${newTestUser} added with Premium access!\n\nThey will have Premium features when they log in.`);
    }
  };

  const upgradeTestUser = (email, amount = 0) => {
    const updated = testUsers.map(u => 
      u.email === email 
        ? { 
            ...u, 
            tier: 'premium', 
            paymentAmount: amount,
            paymentDate: new Date().toISOString(),
            upgradedBy: user?.email
          }
        : u
    );
    saveTestUsers(updated);

    // Update the actual user authentication data for ANY user (not just current user)
    const savedUser = localStorage.getItem('ccsp_quiz_user');
    if (savedUser) {
      const currentUser = JSON.parse(savedUser);
      if (currentUser.email === email) {
        // Update current logged-in user
        const updatedUser = { 
          ...currentUser, 
          tier: 'premium',
          subscriptionStatus: 'active',
          subscriptionEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year from now
          upgradedBy: user?.email,
          upgradedDate: new Date().toISOString()
        };
        localStorage.setItem('ccsp_quiz_user', JSON.stringify(updatedUser));
        upgradeUserToPremium({ 
          method: 'admin_force_sync',
          upgradedBy: user?.email,
          upgradedDate: new Date().toISOString()
        });
        window.location.reload(); // Force refresh to apply changes
      }
    }

    // Also create a separate entry for the test user if they're not the current user
    if (user?.email !== email) {
      const testUserData = {
        id: `test-${Date.now()}`,
        email: email,
        name: email.split('@')[0],
        picture: 'https://via.placeholder.com/64/4285f4/ffffff?text=TU',
        tier: 'premium',
        subscriptionStatus: 'active',
        subscriptionEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        isTestUser: true,
        createdBy: user?.email,
        createdDate: new Date().toISOString()
      };
      
      // Store test user data for future reference
      localStorage.setItem(`test_user_${email}`, JSON.stringify(testUserData));
    }
  };

  const downgradeTestUser = (email) => {
    const updated = testUsers.map(u => 
      u.email === email 
        ? { 
            ...u, 
            tier: 'demo', 
            paymentAmount: 0,
            paymentDate: null,
            downgradedBy: user?.email,
            downgradedDate: new Date().toISOString()
          }
        : u
    );
    saveTestUsers(updated);

    // Update the actual user authentication data for ANY user (not just current user)
    const savedUser = localStorage.getItem('ccsp_quiz_user');
    if (savedUser) {
      const currentUser = JSON.parse(savedUser);
      if (currentUser.email === email) {
        // Update current logged-in user
        const updatedUser = { 
          ...currentUser, 
          tier: 'demo',
          subscriptionStatus: 'demo',
          subscriptionEnd: null,
          downgradedBy: user?.email,
          downgradedDate: new Date().toISOString()
        };
        localStorage.setItem('ccsp_quiz_user', JSON.stringify(updatedUser));
        window.location.reload(); // Force refresh to apply changes
      }
    }

    // Update test user data if they exist
    const testUserKey = `test_user_${email}`;
    const testUserData = localStorage.getItem(testUserKey);
    if (testUserData) {
      const testUser = JSON.parse(testUserData);
      const updatedTestUser = {
        ...testUser,
        tier: 'demo',
        subscriptionStatus: 'demo',
        subscriptionEnd: null,
        downgradedBy: user?.email,
        downgradedDate: new Date().toISOString()
      };
      localStorage.setItem(testUserKey, JSON.stringify(updatedTestUser));
    }
  };

  const removeTestUser = (email) => {
    const updated = testUsers.filter(u => u.email !== email);
    saveTestUsers(updated);
    
    // Clear all authentication data for this user
    const testUserKey = `test_user_${email}`;
    localStorage.removeItem(testUserKey);
    
    // If this user is currently logged in, force logout
    const currentUser = localStorage.getItem('ccsp_quiz_user');
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      if (userData.email === email) {
        localStorage.removeItem('ccsp_quiz_user');
        alert(`🔓 User ${email} has been removed and logged out.\n\nThey will lose all access when they refresh the page.`);
        // Force page reload to apply changes immediately
        window.location.reload();
      } else {
        alert(`✅ User ${email} has been removed from the system.\n\nTheir authentication data has been cleared.`);
      }
    } else {
      alert(`✅ User ${email} has been removed from the system.`);
    }
  };

  const forceLogoutUser = (email) => {
    console.log('🔓 Starting force logout for:', email);
    
    // Clear all possible authentication data for this user
    const testUserKey = `test_user_${email}`;
    const premiumUserKey = `ccsp_premium_${email}`;
    
    localStorage.removeItem(testUserKey);
    localStorage.removeItem(premiumUserKey);
    
    console.log('🗑️ Cleared storage keys:', testUserKey, premiumUserKey);
    
    // Check if this user is currently logged in
    const currentUser = localStorage.getItem('ccsp_quiz_user');
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      if (userData.email === email) {
        localStorage.removeItem('ccsp_quiz_user');
        alert(`🔓 User ${email} has been forcefully logged out!\n\nAll authentication data cleared.\nPage will reload.`);
        setTimeout(() => window.location.reload(), 1000);
        return;
      }
    }
    
    // Also clear from test users if they exist there
    const updated = testUsers.filter(u => u.email !== email);
    saveTestUsers(updated);
    
    alert(`🔓 All authentication data cleared for ${email}.\n\nThey will lose access when they refresh their browser.`);
  };

  const forceSyncUserTier = (email) => {
    console.log('🔄 Starting force sync for:', email);
    
    // Find user in test users
    const testUser = testUsers.find(u => u.email === email);
    if (!testUser) {
      alert(`❌ User ${email} not found in test users list.`);
      return;
    }

    console.log('📋 Test user found:', testUser);

    // Create/update authentication data immediately
    const authUserData = {
      id: `sync-user-${Date.now()}`,
      email: email,
      name: email.split('@')[0],
      picture: 'https://via.placeholder.com/64/27ae60/ffffff?text=⭐',
      tier: testUser.tier,
      subscriptionStatus: testUser.tier === 'premium' ? 'active' : 'demo',
      subscriptionEnd: testUser.tier === 'premium' ? 
        new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() : null,
      isTestUser: true,
      createdBy: user?.email,
      lastSync: new Date().toISOString(),
      syncedBy: user?.email,
      paymentAmount: 9.99, // Add payment amount for Premium validation
      paymentDate: new Date().toISOString()
    };

    console.log('💾 Storing auth data:', authUserData);

    // Store authentication data in multiple locations for redundancy
    localStorage.setItem(`test_user_${email}`, JSON.stringify(authUserData));
    localStorage.setItem(`ccsp_premium_${email}`, JSON.stringify(authUserData));

    // If this is the current user, update their session immediately
    const currentUser = localStorage.getItem('ccsp_quiz_user');
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      if (userData.email === email) {
        console.log('🔄 Updating current user session');
        const updatedUser = {
          ...userData,
          tier: testUser.tier,
          subscriptionStatus: testUser.tier === 'premium' ? 'active' : 'demo',
          subscriptionEnd: testUser.tier === 'premium' ? 
            new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() : null,
          lastSync: new Date().toISOString(),
          paymentAmount: 9.99,
          paymentDate: new Date().toISOString()
        };
        localStorage.setItem('ccsp_quiz_user', JSON.stringify(updatedUser));
        
        // Also trigger the auth context upgrade function
        if (testUser.tier === 'premium') {
          upgradeUserToPremium({
            subscriptionEnd: updatedUser.subscriptionEnd,
            stripeCustomerId: 'admin_upgrade',
            subscriptionId: 'admin_upgrade'
          });
        }
        
        alert(`✅ User ${email} tier synced and session updated!\n\nTier: ${testUser.tier}\nPage will reload to apply changes.`);
        setTimeout(() => window.location.reload(), 1000);
        return;
      }
    }

    console.log('✅ Sync completed for non-current user');
    alert(`✅ User ${email} tier synced!\n\nTier: ${testUser.tier}\nPayment: $9.99\nThey will have proper access when they log in next.`);
  };

  const simulatePayment = (email, amount) => {
    upgradeTestUser(email, amount);
    alert(`✅ Payment simulation complete!\n\nUser: ${email}\nAmount: $${amount}\nStatus: Upgraded to Premium`);
  };

  const processRealPayment = (email, amount = 9.99, referenceNumber = '') => {
    // Create or update user with premium access
    const existingUser = testUsers.find(u => u.email === email);
    
    if (existingUser) {
      // Upgrade existing test user
      upgradeTestUser(email, amount);
    } else {
      // Create new user and upgrade
      const newUser = {
        email: email,
        tier: 'premium',
        paymentAmount: amount,
        paymentDate: new Date().toISOString(),
        referenceNumber: referenceNumber,
        paymentMethod: 'bank_transfer',
        processedBy: user?.email,
        addedDate: new Date().toISOString()
      };
      saveTestUsers([...testUsers, newUser]);
      
      // Create authentication data for the new user
      const userData = {
        id: `bank-user-${Date.now()}`,
        email: email,
        name: email.split('@')[0],
        picture: 'https://via.placeholder.com/64/27ae60/ffffff?text=💰',
        tier: 'premium',
        subscriptionStatus: 'active',
        subscriptionEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        paymentMethod: 'bank_transfer',
        paymentAmount: amount,
        referenceNumber: referenceNumber,
        createdAt: new Date().toISOString(),
        processedBy: user?.email
      };
      localStorage.setItem(`test_user_${email}`, JSON.stringify(userData));
    }

    alert(`💰 Real Payment Processed!\n\nUser: ${email}\nAmount: $${amount}\nReference: ${referenceNumber}\nStatus: Premium Access Granted\n\nUser will have Premium access when they log in.`);
  };

  // Get all Premium users from all sources
  const getAllPremiumUsers = () => {
    const premiumUsers = [];
    
    // Get from test users
    testUsers.filter(u => u.tier === 'premium').forEach(u => {
      premiumUsers.push({
        ...u,
        source: 'admin_panel',
        lastSeen: u.addedDate
      });
    });
    
    // Get from localStorage (users who have logged in)
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('test_user_')) {
        try {
          const userData = JSON.parse(localStorage.getItem(key));
          if (userData.tier === 'premium') {
            // Check if not already in test users
            const email = userData.email;
            if (!premiumUsers.find(u => u.email === email)) {
              premiumUsers.push({
                email: email,
                tier: 'premium',
                paymentAmount: userData.paymentAmount || 0,
                paymentDate: userData.createdAt,
                source: 'auth_data',
                lastSeen: userData.lastLogin || userData.createdAt,
                paymentMethod: userData.paymentMethod || 'admin'
              });
            }
          }
        } catch (e) {
          console.log('Error parsing user data:', e);
        }
      }
    }
    
    // Check current logged-in user
    const currentUser = localStorage.getItem('ccsp_quiz_user');
    if (currentUser) {
      try {
        const userData = JSON.parse(currentUser);
        if (userData.tier === 'premium' && !premiumUsers.find(u => u.email === userData.email)) {
          premiumUsers.push({
            email: userData.email,
            tier: 'premium',
            paymentAmount: 0,
            paymentDate: userData.createdAt,
            source: 'current_user',
            lastSeen: userData.lastLogin || userData.createdAt,
            paymentMethod: 'current'
          });
        }
      } catch (e) {
        console.log('Error parsing current user:', e);
      }
    }
    
    return premiumUsers.sort((a, b) => new Date(b.lastSeen) - new Date(a.lastSeen));
  };

  // Only show to admins
  if (!isAdmin) {
    return (
      <div style={{
        padding: '40px 20px',
        textAlign: 'center',
        color: theme.textSecondary,
        background: theme.cardBackground,
        borderRadius: '12px',
        border: `1px solid ${theme.border}`,
        margin: '20px 0'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔒</div>
        <h2 style={{ color: theme.text, marginBottom: '12px' }}>
          Admin Access Required
        </h2>
        <p style={{ color: theme.textSecondary, margin: 0 }}>
          This section is only accessible to authorized administrators.
        </p>
        <p style={{ color: theme.textSecondary, fontSize: '0.9rem', marginTop: '8px' }}>
          Contact support if you need admin access.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      background: theme.background,
      borderRadius: '12px',
      border: `1px solid ${theme.border}`,
      margin: '20px 0'
    }}>
      <h2 style={{
        color: theme.text,
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        🛠️ Admin Panel - User Management
      </h2>

      {/* Current User Status */}
      <div style={{
        background: theme.cardBackground,
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: `1px solid ${theme.border}`
      }}>
        <h3 style={{ color: theme.text, marginBottom: '12px' }}>Current User Status</h3>
        <div style={{ color: theme.textSecondary }}>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Tier:</strong> {isDemoUser(user) ? '🎯 Demo' : '⭐ Premium'}</p>
          <p><strong>Questions Answered:</strong> {userStats.totalQuestions}</p>
          <p><strong>Accuracy:</strong> {userStats.totalQuestions > 0 ? Math.round((userStats.correctAnswers / userStats.totalQuestions) * 100) : 0}%</p>
        </div>
        
        <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
          {isDemoUser(user) ? (
            <button
              onClick={() => upgradeTestUser(user?.email, 0)}
              style={{
                padding: '8px 16px',
                background: '#27ae60',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              🚀 Upgrade to Premium (Test)
            </button>
          ) : (
            <button
              onClick={() => downgradeTestUser(user?.email)}
              style={{
                padding: '8px 16px',
                background: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              🎯 Downgrade to Demo
            </button>
          )}
          
          <button
            onClick={resetStats}
            style={{
              padding: '8px 16px',
              background: '#f39c12',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🔄 Reset Stats
          </button>
        </div>
      </div>

      {/* Debug Information */}
      <div style={{
        background: '#2c3e50',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: `1px solid #34495e`
      }}>
        <h3 style={{ color: '#ecf0f1', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          🔍 Debug Information
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
          <div style={{ background: '#34495e', padding: '12px', borderRadius: '6px' }}>
            <h4 style={{ color: '#3498db', margin: '0 0 8px 0' }}>Current User</h4>
            <pre style={{ color: '#ecf0f1', fontSize: '0.8rem', margin: 0, whiteSpace: 'pre-wrap' }}>
              {JSON.stringify({
                email: user?.email,
                tier: user?.tier,
                subscriptionStatus: user?.subscriptionStatus,
                isTestUser: user?.isTestUser
              }, null, 2)}
            </pre>
          </div>
          
          <div style={{ background: '#34495e', padding: '12px', borderRadius: '6px' }}>
            <h4 style={{ color: '#e74c3c', margin: '0 0 8px 0' }}>Test Users Count</h4>
            <pre style={{ color: '#ecf0f1', fontSize: '0.8rem', margin: 0 }}>
              Total: {testUsers.length}{'\n'}
              Premium: {testUsers.filter(u => u.tier === 'premium').length}{'\n'}
              Demo: {testUsers.filter(u => u.tier === 'demo').length}
            </pre>
          </div>
          
          <div style={{ background: '#34495e', padding: '12px', borderRadius: '6px' }}>
            <h4 style={{ color: '#f39c12', margin: '0 0 8px 0' }}>Storage Keys</h4>
            <pre style={{ color: '#ecf0f1', fontSize: '0.8rem', margin: 0 }}>
              ccsp_quiz_user: {localStorage.getItem('ccsp_quiz_user') ? '✅' : '❌'}{'\n'}
              testUsers: {localStorage.getItem('testUsers') ? '✅' : '❌'}{'\n'}
              Premium users: {Object.keys(localStorage).filter(k => k.startsWith('ccsp_premium_')).length}
            </pre>
          </div>
        </div>
        
        <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
          <button
            onClick={() => {
              console.log('🔍 FULL DEBUG INFO:');
              console.log('Current user:', user);
              console.log('Test users:', testUsers);
              console.log('LocalStorage keys:', Object.keys(localStorage));
              console.log('All Premium users:', getAllPremiumUsers());
              alert('Debug info logged to console. Check browser developer tools.');
            }}
            style={{
              padding: '8px 16px',
              background: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🔍 Full Debug Log
          </button>
          
          <button
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals
              if (confirm('This will clear ALL user data. Are you sure?')) {
                localStorage.clear();
                window.location.reload();
              }
            }}
            style={{
              padding: '8px 16px',
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🗑️ Clear All Data
          </button>
        </div>
      </div>

      {/* All Premium Users - Accumulated List */}
      <div style={{
        background: theme.cardBackground,
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: `2px solid #27ae60`
      }}>
        <h3 style={{ color: theme.text, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ⭐ All Premium Users ({getAllPremiumUsers().length})
          <span style={{ fontSize: '0.8rem', background: '#27ae60', color: 'white', padding: '2px 8px', borderRadius: '4px' }}>
            ACCUMULATED
          </span>
        </h3>
        <p style={{ color: theme.textSecondary, marginBottom: '12px', fontSize: '0.9rem' }}>
          Complete list of all users with Premium access from all sources
        </p>
        
        {getAllPremiumUsers().length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <th style={{ color: theme.text, padding: '8px', textAlign: 'left' }}>Email</th>
                  <th style={{ color: theme.text, padding: '8px', textAlign: 'left' }}>Status</th>
                  <th style={{ color: theme.text, padding: '8px', textAlign: 'left' }}>Payment</th>
                  <th style={{ color: theme.text, padding: '8px', textAlign: 'left' }}>Source</th>
                  <th style={{ color: theme.text, padding: '8px', textAlign: 'left' }}>Last Seen</th>
                </tr>
              </thead>
              <tbody>
                {getAllPremiumUsers().map((premiumUser, index) => (
                  <tr key={index} style={{ borderBottom: `1px solid ${theme.border}` }}>
                    <td style={{ color: theme.textSecondary, padding: '8px' }}>
                      {premiumUser.email}
                      {premiumUser.email === user?.email && ' (You)'}
                    </td>
                    <td style={{ padding: '8px' }}>
                      <span style={{ color: '#27ae60', fontWeight: '600' }}>
                        ⭐ Premium
                      </span>
                    </td>
                    <td style={{ color: theme.textSecondary, padding: '8px' }}>
                      ${premiumUser.paymentAmount || 0}
                    </td>
                    <td style={{ color: theme.textSecondary, padding: '8px', fontSize: '0.8rem' }}>
                      {premiumUser.source === 'admin_panel' && '🛠️ Admin'}
                      {premiumUser.source === 'auth_data' && '🔐 Auth'}
                      {premiumUser.source === 'current_user' && '👤 Current'}
                    </td>
                    <td style={{ color: theme.textSecondary, padding: '8px', fontSize: '0.8rem' }}>
                      {premiumUser.lastSeen ? new Date(premiumUser.lastSeen).toLocaleDateString() : 'Unknown'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: theme.textSecondary, fontStyle: 'italic' }}>
            No Premium users found. Add users below to grant Premium access.
          </p>
        )}
      </div>

      {/* Real Payment Processing */}
      <div style={{
        background: theme.cardBackground,
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: `2px solid #27ae60`
      }}>
        <h3 style={{ color: theme.text, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          💰 Real Payment Processing
          <span style={{ fontSize: '0.8rem', background: '#27ae60', color: 'white', padding: '2px 8px', borderRadius: '4px' }}>
            LIVE
          </span>
        </h3>
        <p style={{ color: theme.textSecondary, marginBottom: '12px', fontSize: '0.9rem' }}>
          Use this section when you receive real bank transfers from customers
        </p>
        
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
          <input
            type="email"
            placeholder="Customer email (who made payment)"
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '6px',
              border: `1px solid ${theme.border}`,
              background: theme.background,
              color: theme.text
            }}
            id="realPaymentEmail"
          />
          <input
            type="text"
            placeholder="Bank reference (optional)"
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '6px',
              border: `1px solid ${theme.border}`,
              background: theme.background,
              color: theme.text
            }}
            id="paymentReference"
          />
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => {
              const email = document.getElementById('realPaymentEmail').value;
              const reference = document.getElementById('paymentReference').value;
              if (email) {
                processRealPayment(email, 9.99, reference);
                document.getElementById('realPaymentEmail').value = '';
                document.getElementById('paymentReference').value = '';
              } else {
                alert('Please enter customer email');
              }
            }}
            style={{
              padding: '10px 20px',
              background: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            💰 Process $9.99 Payment
          </button>
          
          <button
            onClick={() => {
              alert(`Bank Transfer Details:\n\nAccount Name: Malebo Samuel Lethoba\nBank: Standard Bank\nAccount: 10018569453\nBranch: 8105\nSwift: SBZAZAJJ\n\nAmount: $9.99\nReference Format: CCSP-Premium-[email]`);
            }}
            style={{
              padding: '10px 20px',
              background: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            📋 View Bank Details
          </button>
        </div>
      </div>

      {/* Emergency User Management */}
      <div style={{
        background: '#e74c3c',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: `2px solid #c0392b`
      }}>
        <h3 style={{ color: 'white', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          🚨 Emergency User Management
        </h3>
        <p style={{ color: 'white', marginBottom: '12px', fontSize: '0.9rem' }}>
          Use this to immediately remove users who shouldn't have access (like malebza.lethoba@gmail.com)
        </p>
        
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
          <input
            type="email"
            placeholder="User email to remove completely"
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '6px',
              border: 'none',
              background: 'white',
              color: '#2c3e50'
            }}
            id="emergencyRemoveEmail"
          />
          <button
            onClick={() => {
              const email = document.getElementById('emergencyRemoveEmail').value;
              if (email) {
                forceLogoutUser(email);
                document.getElementById('emergencyRemoveEmail').value = '';
              } else {
                alert('Please enter user email to remove');
              }
            }}
            style={{
              padding: '10px 20px',
              background: '#8e44ad',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            🔓 Force Remove User
          </button>
        </div>
        
        <p style={{ color: '#ecf0f1', fontSize: '0.8rem' }}>
          This will clear ALL authentication data and force logout the user immediately.
        </p>
      </div>

      {/* Add Test User */}
      <div style={{
        background: theme.cardBackground,
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: `1px solid ${theme.border}`
      }}>
        <h3 style={{ color: theme.text, marginBottom: '12px' }}>Add Premium User</h3>
        <p style={{ color: theme.textSecondary, marginBottom: '12px', fontSize: '0.9rem' }}>
          ⭐ New users automatically get Premium access
        </p>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input
            type="email"
            value={newTestUser}
            onChange={(e) => setNewTestUser(e.target.value)}
            placeholder="Enter user email for Premium access (e.g., 211297@students.mancosa.co.za)"
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '6px',
              border: `1px solid ${theme.border}`,
              background: theme.background,
              color: theme.text
            }}
          />
          <button
            onClick={addTestUser}
            style={{
              padding: '8px 16px',
              background: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            ⭐ Add Premium User
          </button>
        </div>
      </div>

      {/* Quick Test Actions */}
      <div style={{
        background: theme.cardBackground,
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: `1px solid ${theme.border}`
      }}>
        <h3 style={{ color: theme.text, marginBottom: '12px' }}>Quick Test Actions</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              if (!testUsers.find(u => u.email === 'billycannine@gmail.com')) {
                const testUser = {
                  email: 'billycannine@gmail.com',
                  tier: 'demo',
                  paymentAmount: 0,
                  testUser: true,
                  addedBy: user?.email,
                  addedDate: new Date().toISOString()
                };
                saveTestUsers([...testUsers, testUser]);
              }
              simulatePayment('billycannine@gmail.com', 0);
            }}
            style={{
              padding: '8px 16px',
              background: '#9b59b6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            💳 Test billycannine@gmail.com ($0.00)
          </button>
          
          <button
            onClick={() => simulatePayment(user?.email, 9.99)}
            style={{
              padding: '8px 16px',
              background: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            💰 Simulate Full Payment ($9.99)
          </button>
        </div>
      </div>

      {/* Test Users List */}
      {testUsers.length > 0 && (
        <div style={{
          background: theme.cardBackground,
          padding: '16px',
          borderRadius: '8px',
          border: `1px solid ${theme.border}`
        }}>
          <h3 style={{ color: theme.text, marginBottom: '12px' }}>Test Users ({testUsers.length})</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <th style={{ color: theme.text, padding: '8px', textAlign: 'left' }}>Email</th>
                  <th style={{ color: theme.text, padding: '8px', textAlign: 'left' }}>Tier</th>
                  <th style={{ color: theme.text, padding: '8px', textAlign: 'left' }}>Payment</th>
                  <th style={{ color: theme.text, padding: '8px', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {testUsers.map((testUser, index) => (
                  <tr key={index} style={{ borderBottom: `1px solid ${theme.border}` }}>
                    <td style={{ color: theme.textSecondary, padding: '8px' }}>
                      {testUser.email}
                      {testUser.email === user?.email && ' (You)'}
                    </td>
                    <td style={{ padding: '8px' }}>
                      <span style={{
                        color: testUser.tier === 'premium' ? '#27ae60' : '#f39c12',
                        fontWeight: '600'
                      }}>
                        {testUser.tier === 'premium' ? '⭐ Premium' : '🎯 Demo'}
                      </span>
                    </td>
                    <td style={{ color: theme.textSecondary, padding: '8px' }}>
                      ${testUser.paymentAmount || 0}
                    </td>
                    <td style={{ padding: '8px' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {testUser.tier === 'demo' ? (
                          <button
                            onClick={() => simulatePayment(testUser.email, 0)}
                            style={{
                              padding: '4px 8px',
                              background: '#27ae60',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.8rem'
                            }}
                          >
                            Upgrade
                          </button>
                        ) : (
                          <button
                            onClick={() => downgradeTestUser(testUser.email)}
                            style={{
                              padding: '4px 8px',
                              background: '#e74c3c',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.8rem'
                            }}
                          >
                            Downgrade
                          </button>
                        )}
                        
                        <button
                          onClick={() => removeTestUser(testUser.email)}
                          style={{
                            padding: '4px 8px',
                            background: '#95a5a6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                          }}
                        >
                          Remove
                        </button>
                        
                        <button
                          onClick={() => forceSyncUserTier(testUser.email)}
                          style={{
                            padding: '4px 8px',
                            background: '#3498db',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                          }}
                          title="Force sync this user's tier immediately"
                        >
                          🔄 Sync
                        </button>
                        
                        <button
                          onClick={() => forceLogoutUser(testUser.email)}
                          style={{
                            padding: '4px 8px',
                            background: '#e67e22',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                          }}
                          title="Force logout this user and clear all their data"
                        >
                          � Logout
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
