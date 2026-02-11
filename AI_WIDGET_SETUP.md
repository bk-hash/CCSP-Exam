# Enabling the AI Study Assistant Widget

## Quick Enable (Development/Testing)

If you want to see and test the AI Assistant widget locally:

### Step 1: Create .env file
```bash
cp .env.example .env
```

### Step 2: Edit .env file
Set these variables:
```env
# Enable AI Assistant
REACT_APP_ENABLE_AI=true

# Set a demo endpoint (for UI testing without backend)
REACT_APP_AI_API_ENDPOINT=https://demo-endpoint.example.com/ai
```

### Step 3: Start the application
```bash
npm start
```

### Step 4: Look for the widget
You should now see a **🤖 floating button** in the bottom-right corner of the screen!

## What You'll See

When enabled, the AI Assistant widget appears as:
- A **circular floating button** with a robot icon (🤖) in the bottom-right corner
- Clicking it opens a **chat window** (400px × 600px)
- The chat window has:
  - Welcome message
  - Suggested prompts (quick action buttons)
  - Message input field
  - Dark theme styling

## Widget Features

- **Floating Button**: Always visible in bottom-right corner
- **Keyboard Support**: 
  - Press `Escape` to close the chat
  - Press `Tab` to navigate
  - Press `Enter` to send messages
- **Responsive**: Works on mobile and desktop
- **Accessible**: Screen reader compatible with ARIA labels

## Without Backend Setup

The widget will render and be interactive, but won't be able to:
- Send actual messages to AI
- Get AI responses
- Save conversation history to cloud

You can still:
- See the UI
- Open/close the chat
- Type messages
- Test the interface

## With Full Backend Setup

For a fully functional AI assistant, you need to:

1. **Set up Firebase Functions** (see README.md)
2. **Choose an AI Provider**:
   - Option A: OpenAI API (get key from platform.openai.com)
   - Option B: Azure OpenAI Service (see AZURE_OPENAI_INTEGRATION.md)
3. **Configure the API endpoint** in `.env`:
   ```env
   REACT_APP_AI_API_ENDPOINT=https://your-actual-endpoint.com/ai
   ```

## Troubleshooting

### Widget Not Showing?

Check these in order:

1. **Is the feature enabled?**
   ```bash
   # In .env file
   REACT_APP_ENABLE_AI=true  # Must be exactly 'true' (lowercase)
   ```

2. **Did you restart the dev server?**
   ```bash
   # Stop the server (Ctrl+C) and restart
   npm start
   ```

3. **Check browser console**
   - Open DevTools (F12)
   - Look for warnings like:
     - "AI Assistant is enabled but REACT_APP_AI_API_ENDPOINT is not configured"
     - "Feature 'AI_ASSISTANT' not found"

4. **Verify .env file location**
   - Must be in project root (same directory as package.json)
   - File name is exactly `.env` (with the dot)
   - Not `.env.example` (that's just a template)

5. **Check for z-index conflicts**
   - Widget uses z-index 9998 (button) and 9999 (chat window)
   - Should be above most other elements

### Widget Shows But Doesn't Work?

If the widget appears but doesn't respond to AI queries:

1. **Backend not configured** - This is expected if you haven't set up Firebase Functions
2. **Check API endpoint** - Make sure `REACT_APP_AI_API_ENDPOINT` points to a valid endpoint
3. **Check browser console** - Look for network errors or API errors

## Disabling the Widget

To hide the widget again:

```env
# In .env file
REACT_APP_ENABLE_AI=false
```

Or simply remove/comment out the line:
```env
# REACT_APP_ENABLE_AI=true
```

Then restart the dev server.

## Production Deployment

For production:

1. Set environment variables in your hosting platform (Vercel, Netlify, Firebase Hosting, etc.)
2. DO NOT commit `.env` file to git (it's in .gitignore)
3. Configure `REACT_APP_ENABLE_AI=true` only when backend is ready
4. Ensure API endpoint is properly secured

## More Information

- Full setup guide: See `README.md` → "🤖 AI Study Assistant" section
- Azure OpenAI setup: See `AZURE_OPENAI_INTEGRATION.md`
- Quick Azure setup: See `AZURE_QUICKSTART.md`
