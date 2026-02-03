#!/bin/bash

# 🚀 Deploy CCSP Quiz App to Firebase Hosting
# Run this script to deploy your app to GCP Firebase (FREE)

echo "🔥 Firebase Deployment Script for CCSP Quiz App"
echo "================================================"

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
else
    echo "✅ Firebase CLI found"
fi

# Check if user is logged in
echo "🔐 Checking Firebase authentication..."
firebase projects:list > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "🔑 Please login to Firebase..."
    firebase login
fi

# Build the React app
echo "📦 Building React app..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

# Deploy to Firebase
echo "🚀 Deploying to Firebase Hosting..."
firebase deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "🌐 Your app is now live on Firebase Hosting"
    echo ""
    echo "📋 Next steps:"
    echo "   • Check your deployment: firebase hosting:channel:list"
    echo "   • Add custom domain: firebase hosting:channel:deploy production"
    echo "   • View analytics: https://console.firebase.google.com"
    echo ""
    echo "💰 Cost: FREE (within generous limits)"
    echo "🔒 HTTPS: Enabled by default"
    echo "🌍 CDN: Global distribution"
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi
