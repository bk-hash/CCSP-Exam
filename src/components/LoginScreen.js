import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts';
import OAuthSetupHelper from './OAuthSetupHelper';
import SignUpForm from './SignUpForm';

const LoginScreen = () => {
  const { signIn, isLoading, isInitialized } = useAuth();
  const { theme } = useTheme();
  const [buttonRendered, setButtonRendered] = React.useState(false);
  const [authError, setAuthError] = React.useState(null);
  const [showSignUp, setShowSignUp] = React.useState(false);

  // Check if we have a valid Google Client ID
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const bypassAuth = process.env.REACT_APP_BYPASS_AUTH === 'true';
  const hasValidClientId = clientId && 
    clientId !== 'YOUR_GOOGLE_CLIENT_ID_HERE' && 
    clientId.includes('.apps.googleusercontent.com');

  React.useEffect(() => {
    // Show helpful error messages for common setup issues
    if (!bypassAuth && !hasValidClientId) {
      setAuthError('Google OAuth not configured. Please set up your Client ID or enable bypass mode.');
    } else if (!bypassAuth && hasValidClientId && !isInitialized && !isLoading) {
      setAuthError('Google OAuth initialization failed. Please check your Client ID and network connection.');
    }
  }, [bypassAuth, hasValidClientId, isInitialized, isLoading]);

  const handleSignIn = () => {
    if (isInitialized) {
      try {
        signIn();
      } catch (error) {
        setAuthError('Authentication failed. Please try again.');
        console.error('Sign in error:', error);
      }
    }
  };

  const renderGoogleButton = React.useCallback(() => {
    if (window.google && isInitialized && !buttonRendered) {
      try {
        const buttonContainer = document.getElementById("google-signin-button");
        if (buttonContainer) {
          // Clear any existing content
          buttonContainer.innerHTML = '';
          
          window.google.accounts.id.renderButton(
            buttonContainer,
            {
              theme: theme.name === 'dark' ? 'filled_black' : 'outline',
              size: 'large',
              width: 300,
              height: 50,
              text: 'signin_with',
              shape: 'rectangular',
              logo_alignment: 'left'
            }
          );
          setButtonRendered(true);
        }
      } catch (error) {
        console.error('Error rendering Google button:', error);
        setAuthError('Unable to load Google sign-in. Please check your internet connection.');
      }
    }
  }, [isInitialized, theme.name, buttonRendered]);

  React.useEffect(() => {
    if (isInitialized && !isLoading && !buttonRendered) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(renderGoogleButton, 100);
      return () => clearTimeout(timer);
    }
  }, [isInitialized, isLoading, buttonRendered, renderGoogleButton]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: theme.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Segoe UI", Arial, sans-serif',
        color: theme.text,
        padding: '20px'
      }}
    >
      <div
        style={{
          background: theme.cardBackground,
          padding: '40px',
          borderRadius: '16px',
          boxShadow: `0 8px 32px ${theme.shadow}`,
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%'
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              marginBottom: '10px',
              background: theme.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            🛡️ CCSP Quiz
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: theme.textSecondary,
              lineHeight: '1.6'
            }}
          >
            Master cloud security concepts with interactive quizzes and flashcards
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              marginBottom: '15px',
              color: theme.text
            }}
          >
            Sign in to continue
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              color: theme.textSecondary,
              marginBottom: '25px'
            }}
          >
            Access your personalized study progress and track your learning journey
          </p>
        </div>

        {authError && (
          <div
            style={{
              background: '#fee',
              border: '1px solid #fcc',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '20px',
              color: '#c33',
              fontSize: '0.9rem',
              textAlign: 'center'
            }}
          >
            ⚠️ {authError}
            <button
              onClick={() => setAuthError(null)}
              style={{
                background: 'none',
                border: 'none',
                color: '#c33',
                cursor: 'pointer',
                marginLeft: '10px',
                fontSize: '1rem'
              }}
            >
              ✕
            </button>
          </div>
        )}

        {isLoading ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                border: `2px solid ${theme.textSecondary}`,
                borderTop: '2px solid #4285f4',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}
            />
            <span style={{ marginLeft: '10px', color: theme.textSecondary }}>
              Loading...
            </span>
          </div>
        ) : (
          <>
            <div
              id="google-signin-button"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            />
            
            {isInitialized && (
              <button
                onClick={handleSignIn}
                style={{
                  background: '#4285f4',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  width: '100%',
                  marginTop: '10px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#3367d6';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#4285f4';
                }}
              >
                🔐 Alternative Sign In
              </button>
            )}
            
            <div style={{ 
              margin: '20px 0', 
              textAlign: 'center',
              color: theme.textSecondary 
            }}>
              <span>Don't have an account? </span>
              <button
                onClick={() => setShowSignUp(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#4285f4',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                Create Account
              </button>
            </div>
          </>
        )}

        {showSignUp && (
          <SignUpForm onClose={() => setShowSignUp(false)} />
        )}

        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            background: theme.background,
            borderRadius: '8px',
            border: `1px solid ${theme.border}`
          }}
        >
          <h3
            style={{
              fontSize: '1.1rem',
              marginBottom: '10px',
              color: theme.text
            }}
          >
            Why sign in?
          </h3>
          <ul
            style={{
              textAlign: 'left',
              fontSize: '0.9rem',
              color: theme.textSecondary,
              lineHeight: '1.6',
              paddingLeft: '20px'
            }}
          >
            <li>Track your study progress across sessions</li>
            <li>Save your quiz performance and accuracy</li>
            <li>Access personalized learning recommendations</li>
            <li>Sync your data across devices</li>
          </ul>
        </div>
      </div>

      {/* Show setup helper if OAuth is not configured */}
      {!bypassAuth && !hasValidClientId && (
        <OAuthSetupHelper />
      )}

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoginScreen;
