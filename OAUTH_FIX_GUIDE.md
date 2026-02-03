# OAuth Error 401: invalid_client - Complete Fix Guide

## Problem
You're seeing `Error 401: invalid_client` because Google can't find your OAuth client or the domain isn't authorized.

## Root Cause
Your Google Cloud Console project needs to have authorized JavaScript origins configured for the domains you're using.

## Step-by-Step Solution

### Step 1: Access Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account (billycannine@gmail.com)
3. Select your project or create a new one

### Step 2: Navigate to OAuth Credentials
1. In the left sidebar, click **APIs & Services**
2. Click **Credentials**
3. Find your OAuth 2.0 Client ID: `640081892183-slnhnidcf46vqm3rodl4cq13qgv7gi0h.apps.googleusercontent.com`
4. Click the pencil/edit icon next to it

### Step 3: Add Authorized JavaScript Origins
Add these URLs to the **Authorized JavaScript origins** section:

```
http://localhost:3000
http://localhost:3001
https://bk-hash.github.io
```

### Step 4: Add Authorized Redirect URIs (if needed)
Add these URLs to the **Authorized redirect URIs** section:

```
http://localhost:3000
http://localhost:3001
https://bk-hash.github.io/ccsp-quiz-flashcards
```

### Step 5: Save Changes
1. Click **Save** at the bottom
2. Wait 5-10 minutes for changes to propagate

### Step 6: Test the Fix
1. Open `oauth-test.html` in your browser
2. Click "Test OAuth Login"
3. You should now see the Google login popup

### Step 7: Disable Bypass Mode
Once OAuth is working:
1. Open `.env` file
2. Change `REACT_APP_BYPASS_AUTH=true` to `REACT_APP_BYPASS_AUTH=false`
3. Restart the development server

## Quick Test Commands
```bash
# Test locally
npm start

# Test the oauth-test.html page
# Open in browser: http://localhost:3000/oauth-test.html
```

## Troubleshooting

### If error persists:
1. Check if the Google Identity API is enabled in your project
2. Verify the Client ID matches exactly
3. Make sure you're accessing from an authorized domain
4. Clear browser cache and cookies
5. Try incognito/private browsing mode

### Enable Google Identity API:
1. Go to [APIs & Services > Library](https://console.cloud.google.com/apis/library)
2. Search for "Google Identity"
3. Click "Google Identity" and click "Enable"

## Current Status
- ✅ Client ID configured: `640081892183-slnhnidcf46vqm3rodl4cq13qgv7gi0h.apps.googleusercontent.com`
- ✅ Bypass mode enabled (app works with test user)
- ❌ Authorized domains not configured (causing the 401 error)
- ❌ Real OAuth login not working

## Next Steps
1. Follow steps 1-5 above to add authorized domains
2. Test with `oauth-test.html`
3. Disable bypass mode when working
4. Deploy to GitHub Pages with working OAuth

---
*Generated on: ${new Date().toLocaleString()}*
