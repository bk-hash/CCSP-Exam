# CCSP Quiz - Quick Setup Script (PowerShell)

Write-Host "🚀 CCSP Quiz - Quick Setup Script" -ForegroundColor Cyan
Write-Host ""

# Check if .env exists
if (-not (Test-Path .env)) {
    Write-Host "Creating .env file from template..." -ForegroundColor Yellow
    if (Test-Path .env.example) {
        Copy-Item .env.example .env
    }
}

Write-Host "Enabling bypass mode for immediate testing..." -ForegroundColor Yellow
Write-Host ""

# Create .env with bypass enabled
$envContent = @"
# Google OAuth Configuration
# Replace with your actual Google Client ID from Google Cloud Console
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here.apps.googleusercontent.com

# TEMPORARY: Bypass authentication for testing
# Set to true to skip OAuth and use a test user
REACT_APP_BYPASS_AUTH=true

# For production GitHub Pages deployment, you'll need to:
# 1. Go to https://console.cloud.google.com/
# 2. Create a new project or select existing project
# 3. Enable Google Identity API
# 4. Create OAuth 2.0 client credentials
# 5. Add your GitHub Pages domain to authorized origins
# 6. Replace the client ID above with your actual client ID
# 7. Set REACT_APP_BYPASS_AUTH=false
"@

$envContent | Out-File -FilePath .env -Encoding UTF8

Write-Host "✅ Configuration complete!" -ForegroundColor Green
Write-Host "🔧 Bypass mode enabled - you can now test all features" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "  1. Run: npm start" -ForegroundColor White
Write-Host "  2. Open: http://localhost:3000" -ForegroundColor White
Write-Host "  3. Start studying! 📚" -ForegroundColor White
Write-Host ""
Write-Host "💡 For production deployment with real OAuth:" -ForegroundColor Yellow
Write-Host "  - See GOOGLE_OAUTH_SETUP.md for detailed instructions" -ForegroundColor White
Write-Host "  - Set REACT_APP_BYPASS_AUTH=false when ready" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to continue"
