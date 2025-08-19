import React, { useState } from 'react';
import { useProgress, useTheme } from '../contexts';

const QuickStats = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { progress, getOverallProgress } = useProgress();
  const { theme } = useTheme();
  const stats = getOverallProgress();

  const quickStatItems = [
    { label: 'Accuracy', value: `${Math.round(stats.accuracy)}%`, color: theme.success },
    { label: 'Answered', value: stats.totalAnswered, color: theme.primary },
    { label: 'Streak', value: `${progress.streakDays}d`, color: '#ff9800' },
    { label: 'Bookmarks', value: progress.bookmarkedQuestions.length, color: '#e91e63' }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: isExpanded ? '20px' : '10px',
      transform: 'translateY(-50%)',
      background: theme.cardBackground,
      border: `1px solid ${theme.border}`,
      borderRadius: '12px',
      padding: isExpanded ? '16px' : '8px',
      boxShadow: `0 4px 16px ${theme.shadow}`,
      zIndex: 998,
      transition: 'all 0.3s ease',
      cursor: isExpanded ? 'default' : 'pointer',
      width: isExpanded ? '200px' : '40px',
      height: isExpanded ? 'auto' : '40px'
    }}
    onClick={() => !isExpanded && setIsExpanded(true)}
    onMouseLeave={() => setIsExpanded(false)}
    >
      {!isExpanded ? (
        <div style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          color: theme.primary,
          lineHeight: '24px'
        }}>
          📊
        </div>
      ) : (
        <>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <span style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: theme.text
            }}>
              Quick Stats
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: theme.textSecondary,
                cursor: 'pointer',
                fontSize: '0.8rem',
                padding: '0'
              }}
            >
              ✕
            </button>
          </div>
          
          <div style={{
            display: 'grid',
            gap: '8px'
          }}>
            {quickStatItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px 0'
                }}
              >
                <span style={{
                  fontSize: '0.8rem',
                  color: theme.textSecondary
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  color: item.color
                }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          
          {/* Progress Ring */}
          <div style={{
            marginTop: '12px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{ position: 'relative', width: '50px', height: '50px' }}>
              <svg width="50" height="50" style={{ transform: 'rotate(-90deg)' }}>
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke={theme.border}
                  strokeWidth="4"
                />
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke={theme.success}
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - stats.completion / 100)}`}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
              </svg>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                color: theme.text
              }}>
                {Math.round(stats.completion)}%
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuickStats;
