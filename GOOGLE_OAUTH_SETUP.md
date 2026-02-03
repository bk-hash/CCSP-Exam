# Google OAuth Setup Guide

This guide will help you set up Google OAuth authentication for your CCSP Quiz application.

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" at the top
3. Click "NEW PROJECT"
4. Enter project name: "CCSP Quiz App"
5. Click "CREATE"

## Step 2: Enable Google Identity API

1. In your project, go to "APIs & Services" > "Library"
2. Search for "Google Identity"
3. Click on "Google Identity" 
4. Click "ENABLE"

## Step 3: Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Select "External" user type
3. Click "CREATE"
4. Fill in required fields:
   - App name: "CCSP Quiz Application"
   - User support email: Your email
   - Developer contact information: Your email
5. Click "SAVE AND CONTINUE"
6. Skip "Scopes" page (click "SAVE AND CONTINUE")
7. Add test users if needed
8. Click "SAVE AND CONTINUE"

## Step 4: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "CREATE CREDENTIALS" > "OAuth 2.0 Client IDs"
3. Select "Web application"
4. Name: "CCSP Quiz Web Client"
5. Add Authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - `http://localhost:3001` (for development)
   - `https://yourusername.github.io` (replace with your GitHub username)
6. Add Authorized redirect URIs:
   - `http://localhost:3000/CCSP-Exam` (for development)
   - `http://localhost:3001/CCSP-Exam` (for development)  
   - `https://yourusername.github.io/CCSP-Exam` (replace with your GitHub username)
7. Click "CREATE"

## Step 5: Configure Environment Variables

1. Copy the Client ID from the credentials you just created
2. Open `.env` file in your project root
3. Replace `your_google_client_id_here.apps.googleusercontent.com` with your actual Client ID

Example:
```
REACT_APP_GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
```

## Step 6: Test Authentication

1. Start your development server: `npm start`
2. Navigate to your app
3. You should see the login screen
4. Click "Sign in with Google" to test

## Step 7: Deploy to GitHub Pages

1. Make sure your GitHub Pages domain is added to authorized origins
2. Update your `.env` file with the production Client ID if different
3. Run `npm run deploy` to deploy to GitHub Pages
4. Test authentication on your live site

## Security Notes

- Never commit your actual Client ID to a public repository
- For production, consider using GitHub Secrets for environment variables
- Regularly review and rotate your OAuth credentials
- Monitor usage in Google Cloud Console

## Troubleshooting

### "Origin not allowed" error
- Make sure your domain is added to authorized JavaScript origins
- Check that the protocol (http/https) matches exactly

### "Redirect URI mismatch" error  
- Verify redirect URIs in Google Cloud Console match your app URLs
- Include the full path including `/CCSP-Exam`

### Authentication not working
- Check browser console for errors
- Verify Client ID is correctly set in `.env`
- Ensure Google Identity API is enabled
