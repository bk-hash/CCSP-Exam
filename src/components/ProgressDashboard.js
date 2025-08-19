import React from 'react';
import { useProgress, useTheme } from '../contexts';

const ProgressDashboard = () => {
  const { progress, getOverallProgress, getWeakAreas } = useProgress();
  const { theme } = useTheme();
  const overallProgress = getOverallProgress();
  const weakAreas = getWeakAreas();

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const CircularProgress = ({ value, size = 120, strokeWidth = 8, label, color = theme.primary }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
        <div style={{ position: 'relative', width: size, height: size }}>
          <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={theme.border}
              strokeWidth={strokeWidth}
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 0.5s ease-in-out'
              }}
            />
          </svg>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: theme.text
          }}>
            {Math.round(value)}%
          </div>
        </div>
        <div style={{
          marginTop: '8px',
          fontSize: '0.9rem',
          color: theme.textSecondary,
          textAlign: 'center'
        }}>
          {label}
        </div>
      </div>
    );
  };

  return (
    <div style={{
      background: theme.cardBackground,
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '24px',
      boxShadow: `0 4px 12px ${theme.shadow}`,
      border: `1px solid ${theme.border}`
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        📊 Study Progress Dashboard
      </h2>

      {/* Progress Circles */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginBottom: '32px',
        gap: '20px'
      }}>
        <CircularProgress 
          value={overallProgress.completion} 
          label="Completion" 
          color={theme.primary}
        />
        <CircularProgress 
          value={overallProgress.accuracy} 
          label="Accuracy" 
          color={theme.success}
        />
        <CircularProgress 
          value={Math.min(progress.streakDays * 10, 100)} 
          label={`${progress.streakDays} Day Streak`}
          color="#ff9800"
        />
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{
          background: theme.background,
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center',
          border: `1px solid ${theme.border}`
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.primary }}>
            {overallProgress.totalAnswered}
          </div>
          <div style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>
            Questions Answered
          </div>
        </div>

        <div style={{
          background: theme.background,
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center',
          border: `1px solid ${theme.border}`
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.success }}>
            {overallProgress.totalCorrect}
          </div>
          <div style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>
            Correct Answers
          </div>
        </div>

        <div style={{
          background: theme.background,
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center',
          border: `1px solid ${theme.border}`
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff9800' }}>
            {formatTime(progress.totalStudyTime)}
          </div>
          <div style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>
            Study Time
          </div>
        </div>

        <div style={{
          background: theme.background,
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center',
          border: `1px solid ${theme.border}`
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e91e63' }}>
            {progress.bookmarkedQuestions.length}
          </div>
          <div style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>
            Bookmarked
          </div>
        </div>
      </div>

      {/* Domain Progress */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: theme.text,
          marginBottom: '16px'
        }}>
          📚 Domain Progress
        </h3>
        <div style={{ display: 'grid', gap: '12px' }}>
          {Object.entries(progress.domainProgress).map(([domain, data]) => {
            const percentage = data.total > 0 ? (data.answered / data.total * 100) : 0;
            const accuracy = data.answered > 0 ? (data.correct / data.answered * 100) : 0;
            
            return (
              <div key={domain} style={{
                background: theme.background,
                padding: '12px 16px',
                borderRadius: '8px',
                border: `1px solid ${theme.border}`
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontWeight: '600', color: theme.text }}>{domain}</span>
                  <span style={{ color: theme.textSecondary, fontSize: '0.9rem' }}>
                    {data.answered}/{data.total} ({Math.round(percentage)}%)
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: theme.border,
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${percentage}%`,
                    height: '100%',
                    background: accuracy >= 70 ? theme.success : accuracy >= 50 ? '#ff9800' : theme.error,
                    transition: 'width 0.3s ease'
                  }} />
                </div>
                {data.answered > 0 && (
                  <div style={{
                    marginTop: '4px',
                    fontSize: '0.8rem',
                    color: theme.textSecondary
                  }}>
                    Accuracy: {Math.round(accuracy)}%
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Weak Areas */}
      {weakAreas.length > 0 && (
        <div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: theme.text,
            marginBottom: '16px'
          }}>
            🎯 Areas for Improvement
          </h3>
          <div style={{ display: 'grid', gap: '8px' }}>
            {weakAreas.slice(0, 3).map((area, index) => (
              <div key={area.domain} style={{
                background: theme.background,
                padding: '12px 16px',
                borderRadius: '8px',
                border: `1px solid ${theme.border}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ color: theme.text }}>
                  #{index + 1} {area.domain}
                </span>
                <span style={{
                  color: area.accuracy < 50 ? theme.error : '#ff9800',
                  fontWeight: 'bold'
                }}>
                  {Math.round(area.accuracy)}% accuracy
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressDashboard;
