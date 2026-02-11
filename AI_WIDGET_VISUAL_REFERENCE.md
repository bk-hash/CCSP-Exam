# AI Assistant Widget - Visual Reference

## What You Should See

When the AI Assistant widget is enabled (`REACT_APP_ENABLE_AI=true`), here's what appears:

### Floating Button (Bottom-Right Corner)

```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│                                     │
│                               ┌───┐ │
│                               │🤖 │ │  ← Floating Button
│                               └───┘ │     (60×60px, circular)
└─────────────────────────────────────┘
```

**Button Details:**
- **Position**: Fixed at bottom-right corner (20px from bottom, 20px from right)
- **Size**: 60px × 60px
- **Shape**: Circular (border-radius: 50%)
- **Color**: Gradient from indigo to purple (#4F46E5 → #7C3AED)
- **Icon**: 🤖 (robot emoji, 28px font size)
- **Shadow**: Blue-purple glow effect
- **Hover Effect**: Scales to 1.1× with enhanced shadow
- **Z-Index**: 9998 (should appear above most content)

### Chat Window (When Open)

```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│   ┌──────────────────────────┐    │
│   │ 🤖 AI Study Assistant  ✕ │    │  ← Header (gradient)
│   ├──────────────────────────┤    │
│   │                          │    │
│   │  Welcome! I'm your AI    │    │
│   │  study assistant...      │    │
│   │                          │    │  ← Message List
│   │  [Suggested Prompts...]  │    │
│   │                          │    │
│   ├──────────────────────────┤    │
│   │ Type your question... ⮕  │    │  ← Input Field
│   └──────────────────────────┘    │
│                               ✕    │  ← Close Button (×)
└─────────────────────────────────────┘
```

**Chat Window Details:**
- **Position**: Above floating button (bottom: 90px, right: 20px)
- **Size**: 400px wide × 600px tall
- **Background**: Dark theme (#1F2937)
- **Border Radius**: 16px (rounded corners)
- **Shadow**: Dark shadow with blur
- **Animation**: Slides in from bottom (0.3s ease-out)
- **Z-Index**: 9999 (appears above floating button)

### Visual Characteristics

#### Colors (Dark Theme)
- **Background**: `#1F2937` (dark gray)
- **Secondary**: `#374151` (medium gray)
- **Primary**: `#4F46E5` (indigo)
- **Accent**: `#7C3AED` (purple)
- **Text**: `#E5E7EB` (light gray)
- **Borders**: `#4B5563` (gray)

#### Typography
- **Header**: Bold, larger font
- **Messages**: Regular weight, readable size
- **Input**: Comfortable input size

#### Interactive Elements
- **Buttons**: Hover effects with scale and shadow
- **Input Field**: Focus outline in indigo
- **Suggested Prompts**: Clickable pills with hover effect
- **Close Button**: Hover effect on header close button

## Responsive Behavior

### Desktop (>768px)
- Full 400px width
- 600px height
- Fixed bottom-right position

### Mobile (≤768px)
- Adapts width to screen
- Maintains readability
- May reduce height on very small screens
- Still bottom-right positioned

## Accessibility Features

- **Keyboard Navigation**: Full tab support
- **ARIA Labels**: Screen reader friendly
- **Focus Indicators**: Visible focus outlines
- **Escape Key**: Closes the chat window
- **Enter Key**: Sends messages
- **High Contrast**: Readable color combinations

## States

### Closed State
- Only floating button visible
- Shows 🤖 icon
- Aria-expanded: false
- No chat window rendered

### Open State
- Floating button shows ✕ (close icon)
- Chat window visible and animated
- Aria-expanded: true
- Welcome message displayed

### Loading State
- Loading indicator in messages
- Input disabled during API calls
- Animated dots or spinner

### Error State
- Error messages in chat
- Fallback to local storage
- User-friendly error text

## Expected Behavior

1. **On Page Load** (with feature enabled):
   - Floating button appears immediately
   - No chat window (starts closed)
   - Button animates subtly on hover

2. **Click Floating Button**:
   - Chat window slides in from bottom
   - Button icon changes to ✕
   - Focus moves to chat window

3. **In Chat Window**:
   - See welcome message
   - See suggested prompts
   - Can type in input field
   - Can click prompts
   - Can send messages

4. **Click Close** (× or floating button):
   - Chat window slides out
   - Button icon back to 🤖
   - Chat state persists (local storage)

## Troubleshooting Visual Issues

### Widget Not Visible?

1. **Check Feature Flag**
   ```javascript
   // In browser console (F12)
   console.log(process.env.REACT_APP_ENABLE_AI); // Should be 'true'
   ```

2. **Check Element in DOM**
   ```javascript
   // In browser console
   document.querySelector('.ai-assistant-floating-button');
   // Should return the button element, not null
   ```

3. **Check Z-Index Conflicts**
   ```javascript
   // Check if something is covering it
   const button = document.querySelector('.ai-assistant-floating-button');
   console.log(window.getComputedStyle(button).zIndex); // Should be '9998'
   ```

4. **Check CSS Loading**
   ```javascript
   // Verify styles are applied
   const button = document.querySelector('.ai-assistant-floating-button');
   console.log(window.getComputedStyle(button).background);
   // Should show gradient
   ```

### Widget Appears But Looks Wrong?

- **Check CSS file imported**: `src/features/ai-assistant/styles/ai-assistant.css`
- **Check for CSS conflicts**: Other styles might override
- **Check theme compatibility**: Widget designed for dark theme
- **Verify viewport**: Ensure not zoomed in/out significantly

## Testing the Widget

### Quick Visual Test Checklist

- [ ] Floating button appears in bottom-right corner
- [ ] Button is circular and has gradient background
- [ ] Button shows 🤖 emoji
- [ ] Hovering button makes it scale up slightly
- [ ] Clicking button opens chat window
- [ ] Chat window has header with title and close button
- [ ] Chat window has dark theme (#1F2937 background)
- [ ] Welcome message appears
- [ ] Suggested prompts are visible
- [ ] Input field is at the bottom
- [ ] Clicking close button (×) closes chat
- [ ] Button icon changes to ✕ when open
- [ ] Pressing Escape key closes chat

## Screenshots Locations

(Screenshots would be added here when available)

Expected screenshots:
1. Widget closed state (just floating button)
2. Widget open state (chat window visible)
3. Mobile view
4. Dark/light theme compatibility

## Summary

The AI Assistant widget is a **polished, professional-looking** chat interface that:
- Looks modern with gradient colors and smooth animations
- Follows accessibility best practices
- Integrates seamlessly into the app
- Provides clear visual feedback for all interactions
- Works on both desktop and mobile devices

When enabled, it should be **immediately obvious** with the prominent 🤖 button in the corner.
