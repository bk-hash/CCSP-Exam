#!/bin/bash

# CCSP Quiz App Deployment Script for GitHub Pages

echo "🚀 Deploying CCSP Quiz App to GitHub Pages..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "📋 Please create .env file with your Google Client ID"
    echo "💡 Copy .env.example to .env and update with your credentials"
    exit 1
fi

# Check if Google Client ID is configured
if grep -q "your_google_client_id_here" .env; then
    echo "❌ Error: Google Client ID not configured!"
    echo "📋 Please update .env file with your actual Google Client ID"
    echo "💡 See GOOGLE_OAUTH_SETUP.md for instructions"
    exit 1
fi

echo "✅ Environment configuration verified"

# Build the app
echo "🔨 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "🌐 Your app is live at: https://yourusername.github.io/CCSP-Exam"
    echo "📝 Don't forget to update authorized origins in Google Cloud Console"
else
    echo "❌ Deployment failed"
    exit 1
fi
