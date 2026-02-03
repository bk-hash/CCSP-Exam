# 🚀 Deploy CCSP Quiz App to Firebase Hosting (FREE)

## 📋 Prerequisites
- Google account
- Node.js installed
- Your React app built and ready

## 🔧 Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

## 🔐 Step 2: Login to Firebase
```bash
firebase login
```

## 🏗️ Step 3: Initialize Firebase Project
```bash
# Navigate to your project directory
cd E:\Study\CSSP\ Study\ccsp_quiz\ccsp-quiz-flashcards

# Initialize Firebase
firebase init hosting
```

### Configuration Options:
- **Use existing project or create new**: Create new project
- **Project name**: `ccsp-quiz-app` (or your preferred name)
- **Public directory**: `build` (this is where React builds go)
- **Single-page app**: `Yes`
- **Automatic builds with GitHub**: `No` (optional)

## 📦 Step 4: Build Your React App
```bash
npm run build
```

## 🚀 Step 5: Deploy to Firebase
```bash
firebase deploy
```

## 🌐 Step 6: Access Your App
Your app will be available at:
`https://your-project-name.web.app`

---

## 💰 Free Tier Limits
- **Storage**: 10 GB (your app is ~2MB)
- **Transfers**: 360 MB/day (thousands of users)
- **Custom domain**: FREE
- **SSL certificates**: FREE
- **Global CDN**: FREE

## 🔄 Auto-Deploy Setup (Optional)
Set up automatic deployment when you push to GitHub:

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set public directory: `build`
4. Enable auto-deploy on main branch

## 🎯 Benefits for Your CCSP App
- ✅ **Fast global delivery**
- ✅ **Automatic HTTPS**
- ✅ **Free custom domain support**
- ✅ **Perfect for React SPAs**
- ✅ **99.9% uptime SLA**
- ✅ **Built-in analytics**
