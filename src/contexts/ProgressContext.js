import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('ccsp-progress');
    return saved ? JSON.parse(saved) : {
      questionsAnswered: {},
      correctAnswers: {},
      incorrectAnswers: {},
      studySessions: [],
      bookmarkedQuestions: [],
      totalStudyTime: 0,
      streakDays: 0,
      lastStudyDate: null,
      domainProgress: {
        'Domain 1': { answered: 0, correct: 0, total: 153 },
        'Domain 2': { answered: 0, correct: 0, total: 131 },
        'Domain 3': { answered: 0, correct: 0, total: 134 },
        'Domain 4': { answered: 0, correct: 0, total: 128 },
        'Domain 5': { answered: 0, correct: 0, total: 103 },
        'Domain 6': { answered: 0, correct: 0, total: 81 }
      }
    };
  });

  useEffect(() => {
    localStorage.setItem('ccsp-progress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (questionId, domain, isCorrect, timeSpent = 0) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      
      // Update question tracking
      newProgress.questionsAnswered[questionId] = true;
      if (isCorrect) {
        newProgress.correctAnswers[questionId] = true;
        delete newProgress.incorrectAnswers[questionId];
      } else {
        newProgress.incorrectAnswers[questionId] = true;
        delete newProgress.correctAnswers[questionId];
      }

      // Update domain progress
      if (domain && newProgress.domainProgress[domain]) {
        if (!newProgress.questionsAnswered[questionId]) {
          newProgress.domainProgress[domain].answered += 1;
        }
        if (isCorrect) {
          newProgress.domainProgress[domain].correct += 1;
        }
      }

      // Update study time
      newProgress.totalStudyTime += timeSpent;

      // Update streak
      const today = new Date().toDateString();
      if (newProgress.lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (newProgress.lastStudyDate === yesterday.toDateString()) {
          newProgress.streakDays += 1;
        } else if (newProgress.lastStudyDate !== today) {
          newProgress.streakDays = 1;
        }
        newProgress.lastStudyDate = today;
      }

      return newProgress;
    });
  };

  const bookmarkQuestion = (questionId) => {
    setProgress(prev => ({
      ...prev,
      bookmarkedQuestions: prev.bookmarkedQuestions.includes(questionId)
        ? prev.bookmarkedQuestions.filter(id => id !== questionId)
        : [...prev.bookmarkedQuestions, questionId]
    }));
  };

  const getOverallProgress = () => {
    const totalQuestions = Object.values(progress.domainProgress).reduce((sum, domain) => sum + domain.total, 0);
    const totalAnswered = Object.keys(progress.questionsAnswered).length;
    const totalCorrect = Object.keys(progress.correctAnswers).length;
    
    return {
      totalQuestions,
      totalAnswered,
      totalCorrect,
      accuracy: totalAnswered > 0 ? (totalCorrect / totalAnswered * 100) : 0,
      completion: (totalAnswered / totalQuestions * 100)
    };
  };

  const getWeakAreas = () => {
    return Object.entries(progress.domainProgress)
      .map(([domain, data]) => ({
        domain,
        accuracy: data.answered > 0 ? (data.correct / data.answered * 100) : 0,
        answered: data.answered,
        total: data.total
      }))
      .filter(area => area.answered > 0)
      .sort((a, b) => a.accuracy - b.accuracy);
  };

  const resetProgress = () => {
    setProgress({
      questionsAnswered: {},
      correctAnswers: {},
      incorrectAnswers: {},
      studySessions: [],
      bookmarkedQuestions: [],
      totalStudyTime: 0,
      streakDays: 0,
      lastStudyDate: null,
      domainProgress: {
        'Domain 1': { answered: 0, correct: 0, total: 153 },
        'Domain 2': { answered: 0, correct: 0, total: 131 },
        'Domain 3': { answered: 0, correct: 0, total: 134 },
        'Domain 4': { answered: 0, correct: 0, total: 128 },
        'Domain 5': { answered: 0, correct: 0, total: 103 },
        'Domain 6': { answered: 0, correct: 0, total: 81 }
      }
    });
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      updateProgress,
      bookmarkQuestion,
      getOverallProgress,
      getWeakAreas,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
