# CCSP Quiz App Deployment Script for GitHub Pages (PowerShell)

Write-Host "🚀 Deploying CCSP Quiz App to GitHub Pages..." -ForegroundColor Cyan

# Check if .env file exists
if (-not (Test-Path .env)) {
    Write-Host "❌ Error: .env file not found!" -ForegroundColor Red
    Write-Host "📋 Please create .env file with your Google Client ID" -ForegroundColor Yellow
    Write-Host "💡 Copy .env.example to .env and update with your credentials" -ForegroundColor Yellow
    exit 1
}

# Check if Google Client ID is configured
$envContent = Get-Content .env -Raw
if ($envContent -match "your_google_client_id_here") {
    Write-Host "❌ Error: Google Client ID not configured!" -ForegroundColor Red
    Write-Host "📋 Please update .env file with your actual Google Client ID" -ForegroundColor Yellow
    Write-Host "💡 See GOOGLE_OAUTH_SETUP.md for instructions" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Environment configuration verified" -ForegroundColor Green

# Build the app
Write-Host "🔨 Building application..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

# Deploy to GitHub Pages
Write-Host "📤 Deploying to GitHub Pages..." -ForegroundColor Cyan
npm run deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your app is live at: https://yourusername.github.io/CCSP-Exam" -ForegroundColor Cyan
    Write-Host "📝 Don't forget to update authorized origins in Google Cloud Console" -ForegroundColor Yellow
} else {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    exit 1
}
