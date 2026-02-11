# 🛡️ CCSP Quiz Application

An interactive quiz and flashcard application for studying CCSP (Certified Cloud Security Professional) certification content.

## ✨ Features

- **🔐 Google OAuth Authentication** - Secure login with Google accounts
- **📚 Interactive Quizzes** - Multiple choice questions across all 6 CCSP domains
- **🎯 Flashcard Mode** - Study with interactive flashcards
- **📊 Progress Tracking** - Monitor your learning progress and performance
- **🌙 Dark/Light Theme** - Customizable theme for comfortable studying
- **📱 Responsive Design** - Works on desktop, tablet, and mobile devices
- **⏱️ Study Timer** - Track your study sessions
- **📈 Performance Analytics** - Detailed statistics on your quiz performance

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Cloud Console account (for OAuth setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ccsp-quiz-flashcards.git
   cd ccsp-quiz-flashcards
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Google OAuth Authentication**
   - Copy `.env.example` to `.env`
   - Follow the [Google OAuth Setup Guide](./GOOGLE_OAUTH_SETUP.md)
   - Update `.env` with your Google Client ID

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Sign in with your Google account to start studying!

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here.apps.googleusercontent.com
```

### Google OAuth Setup

For detailed OAuth setup instructions, see [GOOGLE_OAUTH_SETUP.md](./GOOGLE_OAUTH_SETUP.md)

## 📖 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## 🤖 AI Study Assistant

An optional AI-powered study assistant to help with CCSP exam preparation.

### Features
- Real-time chat with AI tutor
- Ask questions about cloud security concepts
- Get explanations for quiz answers
- Generate practice questions
- Personalized study recommendations

### AI Provider Options

This application supports **two AI providers**:

#### Option 1: Standard OpenAI API (Default)
- ✅ Easy to set up
- ✅ Direct access to latest models
- ✅ No Azure subscription needed

#### Option 2: Azure OpenAI Service
- ✅ Enterprise-grade security and compliance
- ✅ Data stays in your Azure tenant
- ✅ Integrated with Azure billing
- ✅ **Compatible with Microsoft Copilot infrastructure**
- ℹ️ Requires Azure subscription and Azure OpenAI access

**📘 For Microsoft Copilot for Office 365 users:** See [AZURE_OPENAI_INTEGRATION.md](./AZURE_OPENAI_INTEGRATION.md) for detailed guidance on using Azure OpenAI Service.

### Setup

1. **Enable the feature in `.env`:**
   ```env
   REACT_APP_ENABLE_AI=true
   REACT_APP_AI_API_ENDPOINT=your-firebase-function-url
   ```

2. **Set up Firebase Functions:**
   ```bash
   cd functions
   npm install
   ```

3. **Choose and configure your AI provider:**

   **Option A: Standard OpenAI API**
   
   Using Firebase CLI:
   ```bash
   firebase functions:config:set \
     ai.provider="openai" \
     openai.key="sk-your-openai-api-key"
   ```
   
   Or set environment variables:
   ```bash
   export AI_PROVIDER=openai
   export OPENAI_API_KEY=sk-your-openai-api-key
   ```

   **Option B: Azure OpenAI Service**
   
   Using Firebase CLI:
   ```bash
   firebase functions:config:set \
     ai.provider="azure" \
     azure.openai.key="your-azure-key" \
     azure.openai.endpoint="https://your-resource.openai.azure.com" \
     azure.openai.deployment="your-deployment-name" \
     azure.openai.version="2024-02-15-preview"
   ```
   
   Or set environment variables:
   ```bash
   export AI_PROVIDER=azure
   export AZURE_OPENAI_API_KEY=your-azure-key
   export AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com
   export AZURE_OPENAI_DEPLOYMENT_NAME=your-deployment-name
   export AZURE_OPENAI_API_VERSION=2024-02-15-preview
   ```

4. **Deploy Firebase Functions:**
   ```bash
   firebase deploy --only functions:ai
   ```

5. **Update API endpoint in `.env`:**
   ```env
   REACT_APP_AI_API_ENDPOINT=https://us-central1-your-project.cloudfunctions.net/ai
   ```

### Usage

- Click the 🤖 button in the bottom-right corner
- Ask questions about CCSP concepts
- Use suggested prompts for quick actions
- Chat history is saved locally in your browser

### Disable AI

To completely disable the AI feature, set in `.env`:
```env
REACT_APP_ENABLE_AI=false
```

The app will function normally without the AI assistant.

### Cost Considerations

**OpenAI API:**
- GPT-4 Turbo: ~$0.01 per 1K input tokens, ~$0.03 per 1K output tokens
- Average conversation: ~$0.02

**Azure OpenAI Service:**
- Similar pricing to OpenAI Direct
- Billed through Azure subscription
- Enterprise discounts may apply

Monitor your usage in your provider's dashboard and set appropriate rate limits.

### Switching Between Providers

You can switch between OpenAI and Azure OpenAI at any time by:
1. Updating the `AI_PROVIDER` environment variable
2. Redeploying Firebase Functions
3. No code changes required!

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
