# 🚨 OAuth Client Error 401: invalid_client - Troubleshooting Guide

## Current Issue
You're getting "OAuth client was not found" with Error 401: invalid_client.

## 🔍 Root Cause Analysis

This error typically occurs due to one of these issues:

### 1. **Google Cloud Project Issues**
- Project might be disabled or suspended
- OAuth consent screen not properly configured
- APIs not enabled

### 2. **Client ID Configuration Issues**
- Client ID doesn't exist in the specified project
- Client ID was deleted or regenerated
- Wrong project selected in Google Cloud Console

### 3. **Domain Authorization Issues**
- Required domains not added to authorized origins
- Case sensitivity in domain names
- Protocol mismatch (http vs https)

## 🛠️ Step-by-Step Fix

### Step 1: Verify Google Cloud Project

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Select the correct project** (make sure you're in the right project)
3. **Check project status** - ensure it's active and not suspended

### Step 2: Verify OAuth Consent Screen

1. **Navigate to**: APIs & Services > OAuth consent screen
2. **Check status**: Should be "In production" or "Testing"
3. **Verify app information**: Make sure all required fields are filled
4. **Test users**: If in testing mode, add your email as a test user

### Step 3: Verify OAuth 2.0 Client

1. **Navigate to**: APIs & Services > Credentials
2. **Find your OAuth 2.0 Client ID**: `640081892183-slnhnidcf46vqm3rodl4cq13qgv7gi0h.apps.googleusercontent.com`
3. **Click on it** to open configuration
4. **Verify it exists and is enabled**

### Step 4: Check Authorized JavaScript Origins

**Required Origins** (add these exactly):
```
http://localhost:3000
http://localhost:3001
https://bk-hash.github.io
```

**How to add**:
1. Click on your OAuth 2.0 Client ID
2. Scroll to "Authorized JavaScript origins"
3. Click "ADD URI" for each domain above
4. Click "SAVE"

### Step 5: Verify APIs are Enabled

1. **Navigate to**: APIs & Services > Library
2. **Search for**: "Google Identity"
3. **Ensure enabled**: Google Identity API should be enabled

## 🔄 Alternative Solutions

### Option 1: Create New OAuth Client

If the current client is corrupted:

1. **Go to**: APIs & Services > Credentials
2. **Click**: "CREATE CREDENTIALS" > "OAuth 2.0 Client IDs"
3. **Select**: "Web application"
4. **Name**: "CCSP Quiz Web Client v2"
5. **Add origins**:
   ```
   http://localhost:3000
   http://localhost:3001
   https://bk-hash.github.io
   ```
6. **Copy new Client ID** to your .env file

### Option 2: Use Different Google Account

Sometimes the issue is account-related:

1. **Try signing in** with a different Google account
2. **Use incognito mode** to test
3. **Clear browser cookies** for accounts.google.com

### Option 3: Check Project Billing

1. **Go to**: Billing in Google Cloud Console
2. **Verify**: Project has billing enabled (required for some APIs)

## 🧪 Testing Steps

### 1. Test with Bypass Mode (Currently Enabled)
- Your app should now work with a test user
- This proves the app logic is correct

### 2. Test OAuth Client ID Manually
Visit this URL (replace YOUR_DOMAIN):
```
https://accounts.google.com/o/oauth2/auth?client_id=640081892183-slnhnidcf46vqm3rodl4cq13qgv7gi0h.apps.googleusercontent.com&redirect_uri=YOUR_DOMAIN&response_type=code&scope=openid%20email%20profile
```

### 3. Use Google OAuth Playground
1. Go to: https://developers.google.com/oauthplayground/
2. Enter your Client ID in settings
3. Test if it works there

## ⚡ Quick Fix Commands

**Restart development server** (to pick up bypass mode):
```bash
# Stop current server (Ctrl+C)
npm start
```

**Redeploy with bypass mode**:
```bash
npm run deploy
```

## 📞 When to Contact Google Support

If none of the above works:
1. **Project quota issues**
2. **Account suspension**
3. **Regional restrictions**
4. **Billing problems**

## 🎯 Current Status

✅ **Bypass mode enabled** - Your app should work immediately
🔄 **OAuth troubleshooting** - Follow steps above to fix
📧 **Your Client ID**: `640081892183-slnhnidcf46vqm3rodl4cq13qgv7gi0h.apps.googleusercontent.com`

## 🔍 Debug Information

Check browser console for additional error details:
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Look for OAuth-related errors
4. Check Network tab for failed requests

The bypass mode will let you use all app features while you resolve the OAuth configuration.
