import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const StudyTimer = ({ isActive, onTimeUpdate }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    let interval;
    if (isRunning && isActive) {
      interval = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime + 1;
          if (onTimeUpdate) {
            onTimeUpdate(newTime);
          }
          return newTime;
        });
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, isActive, onTimeUpdate]);

  useEffect(() => {
    if (isActive) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  }, [isActive]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      background: theme.cardBackground,
      border: `1px solid ${theme.border}`,
      borderRadius: '12px',
      padding: '12px 16px',
      boxShadow: `0 4px 12px ${theme.shadow}`,
      zIndex: 1000,
      minWidth: '120px',
      textAlign: 'center'
    }}>
      <div style={{
        fontSize: '0.8rem',
        color: theme.textSecondary,
        marginBottom: '4px'
      }}>
        Study Time
      </div>
      <div style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: theme.text,
        fontFamily: 'monospace'
      }}>
        {formatTime(time)}
      </div>
      <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '8px',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{
            padding: '4px 8px',
            border: 'none',
            borderRadius: '4px',
            background: isRunning ? theme.error : theme.success,
            color: 'white',
            fontSize: '0.7rem',
            cursor: 'pointer'
          }}
        >
          {isRunning ? '⏸️' : '▶️'}
        </button>
        <button
          onClick={reset}
          style={{
            padding: '4px 8px',
            border: 'none',
            borderRadius: '4px',
            background: theme.textSecondary,
            color: 'white',
            fontSize: '0.7rem',
            cursor: 'pointer'
          }}
        >
          🔄
        </button>
      </div>
    </div>
  );
};

export default StudyTimer;
