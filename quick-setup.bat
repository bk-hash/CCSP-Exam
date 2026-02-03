@echo off
echo 🚀 CCSP Quiz - Quick Setup Script
echo.

REM Check if .env exists
if not exist .env (
    echo Creating .env file from template...
    copy .env.example .env
)

echo Enabling bypass mode for immediate testing...
echo.

REM Create .env with bypass enabled
(
echo # Google OAuth Configuration
echo # Replace with your actual Google Client ID from Google Cloud Console
echo REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here.apps.googleusercontent.com
echo.
echo # TEMPORARY: Bypass authentication for testing
echo # Set to true to skip OAuth and use a test user
echo REACT_APP_BYPASS_AUTH=true
echo.
echo # For production GitHub Pages deployment, you'll need to:
echo # 1. Go to https://console.cloud.google.com/
echo # 2. Create a new project or select existing project
echo # 3. Enable Google Identity API
echo # 4. Create OAuth 2.0 client credentials
echo # 5. Add your GitHub Pages domain to authorized origins
echo # 6. Replace the client ID above with your actual client ID
echo # 7. Set REACT_APP_BYPASS_AUTH=false
) > .env

echo ✅ Configuration complete!
echo 🔧 Bypass mode enabled - you can now test all features
echo.
echo 📋 Next steps:
echo   1. Run: npm start
echo   2. Open: http://localhost:3000
echo   3. Start studying! 📚
echo.
echo 💡 For production deployment with real OAuth:
echo   - See GOOGLE_OAUTH_SETUP.md for detailed instructions
echo   - Set REACT_APP_BYPASS_AUTH=false when ready
echo.
pause
