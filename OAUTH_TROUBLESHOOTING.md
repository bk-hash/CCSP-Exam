# Troubleshooting Google OAuth "GeneralOAuthFlow" Error

If you're seeing a `flowName=GeneralOAuthFlow` error, this guide will help you resolve it.

## Common Causes and Solutions

### 1. **Domain Authorization Issues**

**Problem**: Your domain is not authorized in Google Cloud Console.

**Solution**:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Credentials"
3. Click on your OAuth 2.0 Client ID
4. Add these domains to **Authorized JavaScript origins**:
   ```
   http://localhost:3000
   http://localhost:3001
   https://yourusername.github.io
   ```

### 2. **Client ID Configuration**

**Problem**: Incorrect or missing Client ID.

**Solution**:
1. Verify your `.env` file contains the correct Client ID:
   ```env
   REACT_APP_GOOGLE_CLIENT_ID=your_actual_client_id.apps.googleusercontent.com
   ```
2. Make sure there are no extra spaces or quotes around the Client ID
3. Restart your development server after changing `.env`

### 3. **Browser Cookie/Security Issues**

**Problem**: Browser blocking third-party cookies or security restrictions.

**Solutions**:
- **Chrome**: Go to Settings > Privacy and security > Cookies > Allow all cookies (temporarily)
- **Firefox**: Disable Enhanced Tracking Protection for localhost
- **Safari**: Disable "Prevent cross-site tracking" temporarily
- Try in Incognito/Private browsing mode
- Clear browser cache and cookies

### 4. **Development vs Production Domains**

**Problem**: Different domains between development and production.

**Solution**:
Update your Google Cloud Console with all domains:

**For Development**:
```
http://localhost:3000
http://localhost:3001
```

**For Production (GitHub Pages)**:
```
https://yourusername.github.io
```

### 5. **OAuth Consent Screen Configuration**

**Problem**: OAuth consent screen not properly configured.

**Solution**:
1. Go to "APIs & Services" > "OAuth consent screen"
2. Ensure app is published or add test users
3. For testing: Add your email to "Test users"
4. For production: Submit for verification or keep internal

### 6. **Network/Firewall Issues**

**Problem**: Corporate firewall or network blocking Google OAuth.

**Solutions**:
- Try from a different network
- Use mobile hotspot for testing
- Check with IT department about Google domains

## Quick Fix Steps

1. **Verify Environment**:
   ```bash
   # Check your .env file
   cat .env
   
   # Should show something like:
   # REACT_APP_GOOGLE_CLIENT_ID=123456789-abc123.apps.googleusercontent.com
   ```

2. **Clear Browser Data**:
   - Clear cookies for localhost and accounts.google.com
   - Disable ad blockers temporarily
   - Try incognito mode

3. **Restart Development Server**:
   ```bash
   # Stop current server (Ctrl+C)
   npm start
   ```

4. **Test with Different Browser**:
   - Try Chrome, Firefox, Edge
   - Disable extensions temporarily

## Alternative Authentication Method

If OAuth continues to fail, you can temporarily disable authentication:

1. **Create a bypass for development**:
   ```javascript
   // In AuthContext.js, add this for testing:
   const BYPASS_AUTH = process.env.REACT_APP_BYPASS_AUTH === 'true';
   
   if (BYPASS_AUTH) {
     setUser({
       id: 'test-user',
       email: 'test@example.com',
       name: 'Test User',
       picture: 'https://via.placeholder.com/32'
     });
   }
   ```

2. **Add to .env**:
   ```env
   REACT_APP_BYPASS_AUTH=true
   ```

## Production Deployment Checklist

Before deploying to GitHub Pages:

- [ ] Client ID configured for production domain
- [ ] `.env` file not committed to repository
- [ ] OAuth consent screen configured
- [ ] Authorized origins include GitHub Pages URL
- [ ] Test authentication on live site

## Still Having Issues?

1. **Check Google Cloud Console Logs**:
   - Go to "Logging" > "Logs Explorer"
   - Filter by your project
   - Look for OAuth-related errors

2. **Enable Debug Mode**:
   ```javascript
   // Add to AuthContext.js
   console.log('Client ID:', GOOGLE_CLIENT_ID);
   console.log('Is Initialized:', isInitialized);
   ```

3. **Test with Google's OAuth Playground**:
   - Visit: https://developers.google.com/oauthplayground/
   - Test your Client ID there first

4. **Contact Support**:
   - Google Cloud Support
   - Check Stack Overflow for similar issues
   - Review Google Identity documentation

Remember: OAuth issues are often related to domain configuration and browser security settings. Most problems can be resolved by carefully checking your Google Cloud Console setup.
