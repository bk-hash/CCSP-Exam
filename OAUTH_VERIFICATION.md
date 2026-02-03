# 🔧 Google Cloud Console Configuration Verification

## ✅ Required Authorized JavaScript Origins

Please verify these domains are added to your OAuth 2.0 client in Google Cloud Console:

### Development Domains:
```
http://localhost:3000
http://localhost:3001
```

### Production Domain (GitHub Pages):
```
https://bk-hash.github.io
```

## 📋 How to Add/Verify Domains:

1. **Go to Google Cloud Console**:
   - Navigate to: https://console.cloud.google.com/
   - Select your project

2. **Open Credentials**:
   - Go to "APIs & Services" > "Credentials"
   - Click on your OAuth 2.0 Client ID

3. **Add Authorized JavaScript Origins**:
   ```
   http://localhost:3000
   http://localhost:3001
   https://bk-hash.github.io
   ```

4. **Save Changes**:
   - Click "Save" at the bottom

## 🌐 Production Deployment Notes:

When deploying to GitHub Pages, your app will be hosted at:
```
https://bk-hash.github.io/CCSP-Exam
```

Make sure this domain is included in your authorized origins.

## 🔍 Testing OAuth:

1. **Local Testing**: http://localhost:3001/CCSP-Exam
2. **Production Testing**: https://bk-hash.github.io/CCSP-Exam

## ⚠️ Common Issues:

- **"redirect_uri_mismatch"**: Domain not in authorized origins
- **"origin_mismatch"**: JavaScript origin not authorized
- **"invalid_client"**: Client ID incorrect or project issues

Your current Client ID: `640081892183-slnhnidcf46vqm3rodl4cq13qgv7gi0h.apps.googleusercontent.com`
