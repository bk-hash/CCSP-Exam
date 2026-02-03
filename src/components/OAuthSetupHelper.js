import React from 'react';
import { useTheme } from '../contexts';

const OAuthSetupHelper = () => {
  const { theme } = useTheme();

  const steps = [
    {
      title: "1. Create Google Cloud Project",
      description: "Go to Google Cloud Console and create a new project",
      link: "https://console.cloud.google.com/",
      action: "Create Project"
    },
    {
      title: "2. Enable Google Identity API",
      description: "In APIs & Services > Library, search and enable Google Identity",
      details: "This allows your app to use Google sign-in"
    },
    {
      title: "3. Configure OAuth Consent Screen",
      description: "Set up your app's consent screen with basic information",
      details: "Use 'External' type for public access"
    },
    {
      title: "4. Create OAuth 2.0 Credentials",
      description: "Generate Client ID for web application",
      details: "Add authorized JavaScript origins: http://localhost:3000, http://localhost:3001, https://yourusername.github.io"
    },
    {
      title: "5. Update Environment File",
      description: "Copy your Client ID to .env file",
      details: "REACT_APP_GOOGLE_CLIENT_ID=your_client_id_here.apps.googleusercontent.com"
    }
  ];

  return (
    <div
      style={{
        background: theme.cardBackground,
        border: `1px solid ${theme.border}`,
        borderRadius: '12px',
        padding: '24px',
        margin: '20px 0',
        maxWidth: '600px'
      }}
    >
      <h3
        style={{
          color: theme.text,
          fontSize: '1.3rem',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        🔧 OAuth Setup Required
      </h3>
      
      <p
        style={{
          color: theme.textSecondary,
          marginBottom: '20px',
          lineHeight: '1.5'
        }}
      >
        To use Google authentication, you need to set up OAuth credentials. This is a one-time setup process.
      </p>

      <div style={{ marginBottom: '20px' }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              background: theme.background,
              border: `1px solid ${theme.border}`,
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '12px'
            }}
          >
            <h4
              style={{
                color: theme.text,
                fontSize: '1rem',
                marginBottom: '8px',
                fontWeight: '600'
              }}
            >
              {step.title}
            </h4>
            <p
              style={{
                color: theme.textSecondary,
                fontSize: '0.9rem',
                marginBottom: step.details ? '8px' : '0',
                lineHeight: '1.4'
              }}
            >
              {step.description}
            </p>
            {step.details && (
              <p
                style={{
                  color: theme.textSecondary,
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  background: theme.cardBackground,
                  padding: '8px',
                  borderRadius: '4px',
                  border: `1px solid ${theme.border}`
                }}
              >
                💡 {step.details}
              </p>
            )}
            {step.link && (
              <a
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '8px',
                  padding: '6px 12px',
                  background: '#4285f4',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}
              >
                {step.action || 'Open Link'} →
              </a>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #0284c7',
          borderRadius: '8px',
          padding: '16px',
          marginTop: '20px'
        }}
      >
        <h4
          style={{
            color: '#0c4a6e',
            fontSize: '1rem',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ⚡ Quick Testing Option
        </h4>
        <p
          style={{
            color: '#0c4a6e',
            fontSize: '0.9rem',
            marginBottom: '12px'
          }}
        >
          Want to test the app immediately? Enable bypass mode:
        </p>
        <code
          style={{
            display: 'block',
            background: '#1e293b',
            color: '#e2e8f0',
            padding: '12px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontFamily: 'monospace'
          }}
        >
          # In your .env file:<br/>
          REACT_APP_BYPASS_AUTH=true
        </code>
        <p
          style={{
            color: '#0c4a6e',
            fontSize: '0.8rem',
            marginTop: '8px',
            fontStyle: 'italic'
          }}
        >
          This will let you use all app features with a test user while you set up OAuth.
        </p>
      </div>
    </div>
  );
};

export default OAuthSetupHelper;
