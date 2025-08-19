import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const StudyTips = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();

  const tips = [
    {
      title: "📝 Active Learning",
      content: "Don't just read - actively engage with questions. Try to answer before looking at options.",
      category: "Study Method"
    },
    {
      title: "🔄 Spaced Repetition",
      content: "Review questions you got wrong after 1 day, then 3 days, then 1 week. This builds long-term retention.",
      category: "Memory"
    },
    {
      title: "🎯 Focus on Weak Areas",
      content: "Spend more time on domains where your accuracy is below 70%. Use the dashboard to identify these areas.",
      category: "Strategy"
    },
    {
      title: "⏰ Consistent Schedule",
      content: "Study for 30-45 minutes daily rather than cramming. Consistency builds better retention than intensity.",
      category: "Habit"
    },
    {
      title: "📚 Understand, Don't Memorize",
      content: "Focus on understanding the 'why' behind security concepts rather than memorizing answers.",
      category: "Comprehension"
    },
    {
      title: "🎮 Gamify Your Learning",
      content: "Set daily goals like '20 questions' or 'improve accuracy by 5%'. Track your streak!",
      category: "Motivation"
    },
    {
      title: "🔍 Practice with Purpose",
      content: "Use Practice Exams to simulate real test conditions. Time yourself and avoid distractions.",
      category: "Test Prep"
    },
    {
      title: "📖 Read Explanations Carefully",
      content: "Even for correct answers, read explanations to deepen understanding and catch edge cases.",
      category: "Learning"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 10000); // Change tip every 10 seconds

    return () => clearInterval(interval);
  }, [tips.length]);

  if (!isVisible) return null;

  const tip = tips[currentTip];

  return (
    <div style={{
      position: 'fixed',
      bottom: '100px',
      right: '20px',
      maxWidth: '300px',
      background: theme.cardBackground,
      border: `1px solid ${theme.border}`,
      borderRadius: '12px',
      padding: '16px',
      boxShadow: `0 4px 16px ${theme.shadow}`,
      zIndex: 999,
      transform: 'translateX(0)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '8px'
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: theme.primary,
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          💡 Study Tip
        </div>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: theme.textSecondary,
            cursor: 'pointer',
            fontSize: '1rem',
            padding: '0',
            lineHeight: '1'
          }}
        >
          ✕
        </button>
      </div>
      
      <div style={{
        fontSize: '1rem',
        fontWeight: '600',
        color: theme.text,
        marginBottom: '8px'
      }}>
        {tip.title}
      </div>
      
      <div style={{
        fontSize: '0.9rem',
        color: theme.textSecondary,
        lineHeight: '1.4',
        marginBottom: '12px'
      }}>
        {tip.content}
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{
          fontSize: '0.7rem',
          color: theme.textSecondary,
          background: theme.background,
          padding: '2px 8px',
          borderRadius: '12px'
        }}>
          {tip.category}
        </span>
        
        <div style={{
          display: 'flex',
          gap: '4px'
        }}>
          {tips.map((_, index) => (
            <div
              key={index}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: index === currentTip ? theme.primary : theme.border,
                transition: 'background 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
      
      <div style={{
        marginTop: '12px',
        display: 'flex',
        gap: '8px'
      }}>
        <button
          onClick={() => setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length)}
          style={{
            flex: 1,
            padding: '6px',
            background: theme.background,
            border: `1px solid ${theme.border}`,
            borderRadius: '6px',
            color: theme.text,
            cursor: 'pointer',
            fontSize: '0.8rem'
          }}
        >
          ← Previous
        </button>
        <button
          onClick={() => setCurrentTip((prev) => (prev + 1) % tips.length)}
          style={{
            flex: 1,
            padding: '6px',
            background: theme.background,
            border: `1px solid ${theme.border}`,
            borderRadius: '6px',
            color: theme.text,
            cursor: 'pointer',
            fontSize: '0.8rem'
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default StudyTips;
