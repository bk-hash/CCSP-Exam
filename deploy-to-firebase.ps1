# 🚀 Deploy CCSP Quiz App to Firebase Hosting
# Run this script to deploy your app to GCP Firebase (FREE)

Write-Host "🔥 Firebase Deployment Script for CCSP Quiz App" -ForegroundColor Yellow
Write-Host "================================================" -ForegroundColor Yellow

# Check if Firebase CLI is installed
try {
    firebase --version | Out-Null
    Write-Host "✅ Firebase CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ Firebase CLI not found. Installing..." -ForegroundColor Red
    npm install -g firebase-tools
}

# Check if user is logged in
Write-Host "🔐 Checking Firebase authentication..." -ForegroundColor Cyan
try {
    firebase projects:list | Out-Null
} catch {
    Write-Host "🔑 Please login to Firebase..." -ForegroundColor Yellow
    firebase login
}

# Build the React app
Write-Host "📦 Building React app..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed. Please fix errors and try again." -ForegroundColor Red
    exit 1
}

# Deploy to Firebase
Write-Host "🚀 Deploying CCSP Quiz App to Firebase Hosting..." -ForegroundColor Green
Write-Host "Project: seraphic-vertex-450208-p8" -ForegroundColor Yellow
Write-Host "URL: https://seraphic-vertex-450208-p8.web.app" -ForegroundColor Yellow
firebase deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your app is now live on Firebase Hosting" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Next steps:" -ForegroundColor Yellow
    Write-Host "   • Check your deployment: firebase hosting:channel:list"
    Write-Host "   • Add custom domain: firebase hosting:channel:deploy production"
    Write-Host "   • View analytics: https://console.firebase.google.com"
    Write-Host ""
    Write-Host "💰 Cost: FREE (within generous limits)" -ForegroundColor Green
    Write-Host "🔒 HTTPS: Enabled by default" -ForegroundColor Green
    Write-Host "🌍 CDN: Global distribution" -ForegroundColor Green
} else {
    Write-Host "❌ Deployment failed. Please check the errors above." -ForegroundColor Red
    exit 1
}
