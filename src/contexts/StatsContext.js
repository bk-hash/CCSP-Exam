import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const StatsContext = createContext();

const createDefaultStats = () => ({
  totalQuestions: 0,
  correctAnswers: 0,
  studyStreak: 0,
  weeklyProgress: [],
  domainStrengths: {
    domain1: { correct: 0, total: 0, percentage: 0 },
    domain2: { correct: 0, total: 0, percentage: 0 },
    domain3: { correct: 0, total: 0, percentage: 0 },
    domain4: { correct: 0, total: 0, percentage: 0 },
    domain5: { correct: 0, total: 0, percentage: 0 },
    domain6: { correct: 0, total: 0, percentage: 0 }
  },
  examSeriesStats: {},
  lastStudyDate: null,
  dailyGoal: 10,
  weeklyGoal: 50,
  monthlyGoal: 200
});

const mergeStatsState = (savedStats) => ({
  ...createDefaultStats(),
  ...savedStats,
  domainStrengths: {
    ...createDefaultStats().domainStrengths,
    ...(savedStats?.domainStrengths || {})
  },
  examSeriesStats: savedStats?.examSeriesStats || {}
});

const getDomainKey = (domain) => {
  if (typeof domain !== 'string') {
    return null;
  }

  const match = domain.match(/Domain\s+(\d+)/i);
  return match ? `domain${match[1]}` : null;
};

export const useStats = () => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error('useStats must be used within a StatsProvider');
  }
  return context;
};

export const StatsProvider = ({ children }) => {
  const { user } = useAuth();
  const [userStats, setUserStats] = useState(createDefaultStats());

  // Load user stats when user changes
  useEffect(() => {
    if (user?.email) {
      const savedStats = localStorage.getItem(`userStats_${user.email}`);
      if (savedStats) {
        setUserStats(mergeStatsState(JSON.parse(savedStats)));
      }
    }
  }, [user]);

  // Save stats to localStorage whenever they change
  useEffect(() => {
    if (user?.email) {
      localStorage.setItem(`userStats_${user.email}`, JSON.stringify(userStats));
    }
  }, [userStats, user]);

  const updateQuestionStats = (domain, isCorrect, metadata = {}) => {
    const today = new Date().toDateString();
    
    setUserStats(prev => {
      const newStats = { ...prev };
      
      // Update total questions and correct answers
      newStats.totalQuestions += 1;
      if (isCorrect) {
        newStats.correctAnswers += 1;
      }

      // Update domain strength
      const domainKey = getDomainKey(domain);
      if (domainKey) {
        const domainStats = prev.domainStrengths[domainKey] || { correct: 0, total: 0, percentage: 0 };
        const nextDomainStats = {
          correct: domainStats.correct + (isCorrect ? 1 : 0),
          total: domainStats.total + 1
        };

        newStats.domainStrengths[domainKey] = {
          ...nextDomainStats,
          percentage: Math.round((nextDomainStats.correct / nextDomainStats.total) * 100)
        };
      }

      if (metadata.examSeriesKey) {
        const currentSeries = prev.examSeriesStats?.[metadata.examSeriesKey] || {
          title: metadata.examSeriesTitle || metadata.examSeriesKey,
          attempts: 0,
          correct: 0,
          total: 0,
          lastStudiedAt: null
        };

        const nextSeries = {
          ...currentSeries,
          title: metadata.examSeriesTitle || currentSeries.title,
          attempts: currentSeries.attempts + 1,
          correct: currentSeries.correct + (isCorrect ? 1 : 0),
          total: currentSeries.total + 1,
          lastStudiedAt: new Date().toISOString()
        };

        newStats.examSeriesStats = {
          ...prev.examSeriesStats,
          [metadata.examSeriesKey]: {
            ...nextSeries,
            accuracy: Math.round((nextSeries.correct / nextSeries.total) * 100)
          }
        };
      }

      // Update study streak
      if (prev.lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const wasYesterday = prev.lastStudyDate === yesterday.toDateString();
        
        newStats.studyStreak = wasYesterday ? prev.studyStreak + 1 : 1;
        newStats.lastStudyDate = today;
      }

      // Update weekly progress
      const currentWeek = getWeekNumber(new Date());
      const weeklyIndex = newStats.weeklyProgress.findIndex(w => w.week === currentWeek);
      
      if (weeklyIndex >= 0) {
        newStats.weeklyProgress[weeklyIndex].questions += 1;
        if (isCorrect) {
          newStats.weeklyProgress[weeklyIndex].correct += 1;
        }
      } else {
        newStats.weeklyProgress.push({
          week: currentWeek,
          questions: 1,
          correct: isCorrect ? 1 : 0
        });
      }

      // Keep only last 12 weeks
      newStats.weeklyProgress = newStats.weeklyProgress.slice(-12);

      return newStats;
    });
  };

  const updateFlashcardStats = (domain, difficulty) => {
    const today = new Date().toDateString();
    
    setUserStats(prev => {
      const newStats = { ...prev };
      
      // Update study streak for flashcards too
      if (prev.lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const wasYesterday = prev.lastStudyDate === yesterday.toDateString();
        
        newStats.studyStreak = wasYesterday ? prev.studyStreak + 1 : 1;
        newStats.lastStudyDate = today;
      }

      return newStats;
    });
  };

  const getWeeklyProgress = () => {
    return userStats.weeklyProgress.map(week => ({
      ...week,
      accuracy: week.questions > 0 ? Math.round((week.correct / week.questions) * 100) : 0
    }));
  };

  const getDailyProgress = () => {
    const today = new Date().toDateString();
    const todayQuestions = userStats.lastStudyDate === today ? 
      userStats.weeklyProgress[userStats.weeklyProgress.length - 1]?.questions || 0 : 0;
    
    return {
      completed: todayQuestions,
      goal: userStats.dailyGoal,
      percentage: Math.min((todayQuestions / userStats.dailyGoal) * 100, 100)
    };
  };

  const getOverallAccuracy = () => {
    return userStats.totalQuestions > 0 
      ? Math.round((userStats.correctAnswers / userStats.totalQuestions) * 100)
      : 0;
  };

  const getExamSeriesStats = (examSeriesKey) => {
    if (!examSeriesKey) {
      return userStats.examSeriesStats || {};
    }

    return userStats.examSeriesStats?.[examSeriesKey] || null;
  };

  const getWeakestDomains = () => {
    return Object.entries(userStats.domainStrengths)
      .map(([domain, data]) => ({ 
        domain, 
        accuracy: data?.percentage || 0,
        correct: data?.correct || 0,
        total: data?.total || 0
      }))
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3);
  };

  const getStrongestDomains = () => {
    return Object.entries(userStats.domainStrengths)
      .map(([domain, data]) => ({ 
        domain, 
        accuracy: data?.percentage || 0,
        correct: data?.correct || 0,
        total: data?.total || 0
      }))
      .sort((a, b) => b.accuracy - a.accuracy)
      .slice(0, 3);
  };

  const resetStats = () => {
    setUserStats(createDefaultStats());
  };

  const value = {
    userStats,
    updateQuestionStats,
    updateFlashcardStats,
    getWeeklyProgress,
    getDailyProgress,
    getOverallAccuracy,
    getExamSeriesStats,
    getWeakestDomains,
    getStrongestDomains,
    resetStats
  };

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  );
};

// Helper function to get week number
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}
