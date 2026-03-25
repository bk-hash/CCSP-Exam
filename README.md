# 🛡️ CCSP Quiz Application

An interactive quiz and flashcard application for studying CCSP (Certified Cloud Security Professional) certification content.

## ✨ Features

- **🔐 Google OAuth Authentication** - Secure login with Google accounts
- **🤖 AI Learning Assistant** - Get instant help with CCSP concepts powered by GPT-4, Claude, or Gemini
- **📚 Interactive Quizzes** - Multiple choice questions across all 6 CCSP domains
- **🎯 Flashcard Mode** - Study with interactive flashcards
- **📊 Progress Tracking** - Monitor your learning progress and performance
- **🌙 Dark/Light Theme** - Customizable theme for comfortable studying
- **📱 Responsive Design** - Works on desktop, tablet, and mobile devices
- **⏱️ Study Timer** - Track your study sessions
- **📈 Performance Analytics** - Detailed statistics on your quiz performance
- **💡 Context-Aware Help** - AI understands which questions you're studying for better assistance

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

4. **[Optional] Set up AI Learning Assistant**
   - Get an API key from OpenAI, Google AI, or Anthropic
   - Add to `.env`: `REACT_APP_AI_API_KEY=your_key_here`
   - See [AI Assistant Setup Guide](./AI_ASSISTANT_SETUP.md) for details

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Sign in with your Google account to start studying!
   - Click the 🤖 button to chat with the AI assistant!

## 🔧 Configuration
# Required - Google OAuth
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here.apps.googleusercontent.com

# Optional - AI Assistant
REACT_APP_AI_PROVIDER=openai
REACT_APP_AI_API_KEY=your_ai_api_key_here
```

### Google OAuth Setup

For detailed OAuth setup instructions, see [GOOGLE_OAUTH_SETUP.md](./GOOGLE_OAUTH_SETUP.md)

### AI Learning Assistant Setup (Optional)

The AI assistant enhances your learning experience by providing instant explanations and answering questions about CCSP concepts.

**Quick Setup:**
1. Choose a provider: OpenAI, Google AI, or Anthropic
2. Get an API key from your chosen provider
3. Add to `.env`: `REACT_APP_AI_API_KEY=your_key_here`
4. Restart the dev server

**Full documentation:** [AI_ASSISTANT_SETUP.md](./AI_ASSISTANT_SETUP.md)

**Note:** The app works perfectly without AI - it's an optional enhancement!
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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
