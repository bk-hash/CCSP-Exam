import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const SessionContext = createContext();

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export const SessionProvider = ({ children }) => {
  const [sessionState, setSessionState] = useState({});

  // Save session state to sessionStorage whenever it changes
  useEffect(() => {
    if (Object.keys(sessionState).length > 0) {
      sessionStorage.setItem('ccsp_quiz_session', JSON.stringify(sessionState));
    }
  }, [sessionState]);

  // Load session state from sessionStorage on mount
  useEffect(() => {
    const savedSession = sessionStorage.getItem('ccsp_quiz_session');
    if (savedSession) {
      try {
        setSessionState(JSON.parse(savedSession));
      } catch (error) {
        console.warn('Failed to parse saved session:', error);
        sessionStorage.removeItem('ccsp_quiz_session');
      }
    }
  }, []);

  const saveQuizSession = useCallback((sessionType, state) => {
    setSessionState(prev => ({
      ...prev,
      [sessionType]: {
        ...state,
        timestamp: Date.now(),
        isActive: true
      }
    }));
  }, []);

  const getQuizSession = useCallback((sessionType) => {
    return sessionState[sessionType] || null;
  }, [sessionState]);

  const clearQuizSession = useCallback((sessionType) => {
    setSessionState(prev => {
      const newState = { ...prev };
      delete newState[sessionType];
      return newState;
    });
    
    // Also clear from sessionStorage if no sessions remain
    if (Object.keys(sessionState).length === 1) {
      sessionStorage.removeItem('ccsp_quiz_session');
    }
  }, [sessionState]);

  const clearAllSessions = useCallback(() => {
    setSessionState({});
    sessionStorage.removeItem('ccsp_quiz_session');
  }, []);

  const hasActiveSession = useCallback((sessionType) => {
    const session = sessionState[sessionType];
    return session && session.isActive && session.timestamp;
  }, [sessionState]);

  // Check if any session is older than 24 hours and clean up
  const cleanupExpiredSessions = useCallback(() => {
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    setSessionState(prev => {
      const newState = {};
      Object.entries(prev).forEach(([key, session]) => {
        if (now - session.timestamp < twentyFourHours) {
          newState[key] = session;
        }
      });
      return newState;
    });
  }, []);

  // Cleanup expired sessions on mount
  useEffect(() => {
    cleanupExpiredSessions();
  }, [cleanupExpiredSessions]);

  const value = {
    saveQuizSession,
    getQuizSession,
    clearQuizSession,
    clearAllSessions,
    hasActiveSession,
    sessionState
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
