# Quick Integration Guide: Adding "Ask AI" to Quiz Questions

## Simple 3-Step Integration

### Step 1: Import the Component

Add this import to your Quiz component (e.g., `src/components/Quiz.js`):

```javascript
import QuickAIHelp from './QuickAIHelp';
```

### Step 2: Add the Button

Place the button where you want it to appear. Common locations:

**Option A: Below the question (Recommended)**
```javascript
<div>
  <h3>{question.question}</h3>
  
  {/* Add the AI help button here */}
  <QuickAIHelp 
    question={question.question}
    domain={question.domain}
    selectedAnswer={selected}
    correctAnswer={question.correctAnswer}
    explanation={question.explanation}
  />
  
  {/* Your existing options/answers code */}
</div>
```

**Option B: Next to "Submit" or "Next" button**
```javascript
<div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
  <button onClick={handleSubmit}>Submit Answer</button>
  
  <QuickAIHelp 
    question={currentQuestion.question}
    domain={currentQuestion.domain}
    selectedAnswer={selectedAnswer}
    correctAnswer={currentQuestion.correctAnswer}
    explanation={currentQuestion.explanation}
  />
</div>
```

**Option C: In explanation/results section (After answering)**
```javascript
{showResult && (
  <div>
    <p>Your answer: {selectedAnswer}</p>
    <p>Correct answer: {correctAnswer}</p>
    <p>{explanation}</p>
    
    {/* Ask AI for more details */}
    <QuickAIHelp 
      question={question.question}
      domain={question.domain}
      selectedAnswer={selectedAnswer}
      correctAnswer={correctAnswer}
      explanation={explanation}
    />
  </div>
)}
```

### Step 3: Test It!

1. Start your development server: `npm start`
2. Navigate to a quiz
3. Click the "🤖 Ask AI for Help" button
4. The AI assistant will open with context about the question

## Full Example

Here's a complete example showing integration in a quiz question component:

```javascript
import React, { useState } from 'react';
import { useTheme } from '../contexts';
import QuickAIHelp from './QuickAIHelp';

function QuizQuestion({ question, onAnswer }) {
  const { theme } = useTheme();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
    onAnswer(selectedAnswer === question.correctAnswer);
  };

  return (
    <div style={{ 
      padding: '24px', 
      background: theme.cardBackground,
      borderRadius: '12px' 
    }}>
      {/* Question */}
      <h3 style={{ marginBottom: '20px', color: theme.text }}>
        {question.question}
      </h3>

      {/* Options */}
      <div style={{ marginBottom: '20px' }}>
        {question.options.map((option, idx) => (
          <label 
            key={idx}
            style={{
              display: 'block',
              padding: '12px',
              marginBottom: '8px',
              background: selectedAnswer === option ? theme.primary : theme.background,
              color: selectedAnswer === option ? '#fff' : theme.text,
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={showResult}
            />
            {' '}{option}
          </label>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {!showResult && (
          <button 
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            style={{
              padding: '10px 20px',
              background: theme.primary,
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: selectedAnswer ? 'pointer' : 'not-allowed',
              fontWeight: 600
            }}
          >
            Submit Answer
          </button>
        )}
        
        {/* AI Help Button - Always visible */}
        <QuickAIHelp 
          question={question.question}
          domain={question.domain}
          selectedAnswer={selectedAnswer}
          correctAnswer={showResult ? question.correctAnswer : null}
          explanation={showResult ? question.explanation : null}
        />
      </div>

      {/* Result/Explanation */}
      {showResult && (
        <div style={{ 
          marginTop: '20px', 
          padding: '16px',
          background: selectedAnswer === question.correctAnswer 
            ? 'rgba(76, 175, 80, 0.1)' 
            : 'rgba(244, 67, 54, 0.1)',
          borderRadius: '8px'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '8px' }}>
            {selectedAnswer === question.correctAnswer 
              ? '✅ Correct!' 
              : '❌ Incorrect'}
          </p>
          <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>
          <p style={{ marginTop: '12px' }}>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default QuizQuestion;
```

## Conditional Display

### Show AI button only after answering:
```javascript
{showResult && (
  <QuickAIHelp 
    question={question.question}
    domain={question.domain}
    selectedAnswer={selectedAnswer}
    correctAnswer={question.correctAnswer}
    explanation={question.explanation}
  />
)}
```

### Show AI button only for incorrect answers:
```javascript
{showResult && selectedAnswer !== question.correctAnswer && (
  <QuickAIHelp 
    question={question.question}
    domain={question.domain}
    selectedAnswer={selectedAnswer}
    correctAnswer={question.correctAnswer}
    explanation={question.explanation}
  />
)}
```

### Show AI button only for premium users:
```javascript
import { useAuth } from '../contexts';

function QuizComponent() {
  const { user } = useAuth();
  
  return (
    <>
      {/* ... your quiz code ... */}
      
      {user?.tier === 'premium' && (
        <QuickAIHelp 
          question={question.question}
          domain={question.domain}
          selectedAnswer={selectedAnswer}
          correctAnswer={question.correctAnswer}
          explanation={question.explanation}
        />
      )}
    </>
  );
}
```

## Styling Customization

The QuickAIHelp button uses your theme automatically, but you can wrap it for custom styling:

```javascript
<div style={{ marginTop: '16px', textAlign: 'center' }}>
  <QuickAIHelp 
    question={question.question}
    domain={question.domain}
    selectedAnswer={selectedAnswer}
    correctAnswer={question.correctAnswer}
    explanation={question.explanation}
  />
</div>
```

## What Gets Sent to AI?

When a user clicks "Ask AI for Help", the following context is shared:

```javascript
{
  type: 'question',
  question: "The actual question text",
  domain: "Cloud Concepts, Architecture and Design",
  selectedAnswer: "User's selected answer (if any)",
  correctAnswer: "Correct answer (if revealed)",
  explanation: "Explanation text (if revealed)"
}
```

This context helps the AI provide more relevant and specific help!

## Next Steps

1. **Add to main quiz component:** `src/components/Quiz.js`
2. **Add to flashcard component:** `src/components/Flashcards.js`
3. **Add to practice exams:** `src/components/PracticeExamsSection.js`
4. **Customize per your UX needs**

That's it! The AI assistant is now integrated with contextual help. 🚀
