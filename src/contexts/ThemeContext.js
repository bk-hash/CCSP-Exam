import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  dark: {
    background: '#151922',
    cardBackground: '#23272f',
    cardBackgroundHover: '#2a2f38',
    primary: '#2196f3',
    primaryHover: '#1976d2',
    success: '#43a047',
    error: '#e53935',
    text: '#ffffff',
    textSecondary: '#b0b3b8',
    border: '#3a3f4b',
    shadow: 'rgba(0, 0, 0, 0.3)',
    gradient: 'linear-gradient(90deg, #2196f3 0%, #43e97b 100%)'
  },
  light: {
    background: '#f5f7fa',
    cardBackground: '#ffffff',
    cardBackgroundHover: '#f8f9fa',
    primary: '#2196f3',
    primaryHover: '#1976d2',
    success: '#43a047',
    error: '#e53935',
    text: '#2c3e50',
    textSecondary: '#6c757d',
    border: '#e9ecef',
    shadow: 'rgba(0, 0, 0, 0.1)',
    gradient: 'linear-gradient(90deg, #2196f3 0%, #43e97b 100%)'
  }
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('ccsp-theme');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('ccsp-theme', JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{
      theme,
      isDark,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
