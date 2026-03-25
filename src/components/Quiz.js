import React, { useState, useEffect } from "react";
import { useProgress, useSession } from '../contexts';
import { useAuth } from '../contexts/AuthContext';
import { useStats } from '../contexts/StatsContext';
import UpgradePrompt from './UpgradePrompt';
import ResultModal from './ResultModal';

function Quiz({
  questions,
  showScore = false,
  sessionKey = "default-quiz",
  quizTitle = "Quiz",
  examSeriesKey = null,
  allowDomainFilter = true
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrect, setIncorrect] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [showReviewList, setShowReviewList] = useState(false);
  
  const { updateProgress } = useProgress();
  const { saveQuizSession, getQuizSession, clearQuizSession } = useSession();
  const { user, getUserLimits, isDemoUser } = useAuth();
  const { updateQuestionStats } = useStats();

  // Load session on component mount ONLY
  useEffect(() => {
    const savedSession = getQuizSession(sessionKey);
    if (savedSession && savedSession.isActive) {
      // Restore session state
      setCurrent(savedSession.current || 0);
      setSelected(savedSession.selected || null);
      setShowResult(savedSession.showResult || false);
      setScore(savedSession.score || 0);
      setIncorrect(savedSession.incorrect || []);
      setSelectedDomain(savedSession.selectedDomain || "All");
      setShuffledQuestions(savedSession.shuffledQuestions || []);
      setShuffledOptions(savedSession.shuffledOptions || []);
      setStartTime(savedSession.startTime || Date.now());
    }
    setSessionLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionKey]); // Only depend on sessionKey

  // Initialize questions when domain changes or on first load
  useEffect(() => {
    if (!sessionLoaded) return;
    
    // Check if we already have questions for this domain from session
    if (shuffledQuestions.length > 0 && 
        (selectedDomain === "All" || shuffledQuestions[0]?.domain === selectedDomain)) {
      return;
    }
    
    // Initialize fresh questions
    const effectiveDomain = allowDomainFilter ? selectedDomain : "All";
    const filtered = effectiveDomain === "All"
      ? [...questions]
      : questions.filter((q) => q.domain === effectiveDomain);
    
    if (filtered.length > 0) {
      // Apply content gating for demo users
      const limits = getUserLimits(user?.tier);
      const limitedQuestions = limits.questionsPerDomain === -1 
        ? filtered 
        : filtered.slice(0, limits.questionsPerDomain);
      
      const shuffled = shuffleArray(limitedQuestions);
      setShuffledQuestions(shuffled);
      setCurrent(0);
      setScore(0);
      setIncorrect([]);
      setSelected(null);
      setShowResult(false);
      setStartTime(Date.now());
    }
  }, [selectedDomain, allowDomainFilter, questions, sessionLoaded, shuffledQuestions, getUserLimits, user?.tier]);

  // Update shuffled options when current question changes
  useEffect(() => {
    if (shuffledQuestions.length > 0 && shuffledQuestions[current]) {
      setShuffledOptions(shuffleArray([...shuffledQuestions[current].options]));
    }
  }, [current, shuffledQuestions]);

  // Save session state (debounced to prevent infinite loops)
  useEffect(() => {
    if (!sessionLoaded || shuffledQuestions.length === 0) return;
    
    const timeoutId = setTimeout(() => {
      saveQuizSession(sessionKey, {
        current,
        selected,
        showResult,
        score,
        incorrect,
        selectedDomain,
        shuffledQuestions,
        shuffledOptions,
        startTime,
        questionsLength: shuffledQuestions.length
      });
    }, 100); // Debounce saves by 100ms

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, selected, showResult, score, incorrect.length, selectedDomain, sessionLoaded]);

  // clear session shortly after completion (avoid causing render side-effects directly inside render)
  useEffect(() => {
    const isCompletedLocal = showScore && shuffledQuestions.length > 0 && current === shuffledQuestions.length - 1 && showResult;
    if (!isCompletedLocal) return;
    const tid = setTimeout(() => clearQuizSession(sessionKey), 120);
    return () => clearTimeout(tid);
  }, [showScore, shuffledQuestions.length, current, showResult, clearQuizSession, sessionKey]);

  if (!shuffledQuestions || shuffledQuestions.length === 0)
    return <div style={{ fontSize: "1.3rem", textAlign: "center" }}>No questions available.</div>;

  const q = shuffledQuestions[current];

  const handleSelect = (option) => {
    if (!showResult) {
      const correctLetter = q.correctAnswer;
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      const isCorrect = option === correctLetter;
      
      setSelected(option);
      setShowResult(true);
      
      // Update progress tracking
      const questionId = `${sessionKey}-${current}-${q.question.substring(0, 50)}`;
      const trackingMetadata = examSeriesKey ? {
        examSeriesKey,
        examSeriesTitle: quizTitle,
        totalQuestions: shuffledQuestions.length
      } : {};

      updateProgress(questionId, q.domain, isCorrect, timeSpent, trackingMetadata);
      
      // Update user statistics
      updateQuestionStats(q.domain, isCorrect, trackingMetadata);
      
      if (isCorrect) {
        setScore((s) => s + 1);
      } else {
        setIncorrect((arr) => [...arr, { ...q, userAnswer: option }]);
      }
    }
  };

  const handleNext = () => {
    if (current + 1 < shuffledQuestions.length) {
      setCurrent((prev) => prev + 1);
    } else if (selectedDomain !== "All") {
      setCurrent(0); // Restart domain
    } else {
      setCurrent(0); // Restart all
    }
    setSelected(null);
    setShowResult(false);
    setStartTime(Date.now()); // Reset timer for next question
  };

  const startNewQuiz = () => {
    // Clear the current session
    clearQuizSession(sessionKey);
    
    // Reset all state to start fresh
    const effectiveDomain = allowDomainFilter ? selectedDomain : "All";
    const filtered = effectiveDomain === "All"
      ? [...questions]
      : questions.filter((q) => q.domain === effectiveDomain);
    const shuffled = shuffleArray(filtered);
    setShuffledQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setIncorrect([]);
    setSelected(null);
    setShowResult(false);
    setStartTime(Date.now());
  };

  const progressPercent = Math.round(((current + (showResult ? 1 : 0)) / shuffledQuestions.length) * 100);

  if (showScore && shuffledQuestions.length > 0 && current === shuffledQuestions.length - 1 && showResult) {
    const finalScore = score + (selected === q.correctAnswer ? 1 : 0);
    const percent = Math.round((finalScore / shuffledQuestions.length) * 100);

    let reviewList = incorrect;
    if (selected !== q.correctAnswer) {
      reviewList = [...incorrect, { ...q, userAnswer: selected }];
    }

    if (showReviewList) {
      return (
        <div style={{ background: "#23272f", padding: 40, borderRadius: 18, minHeight: 380, width: "100%", maxWidth: 900, margin: "40px auto", boxShadow: "0 8px 32px 0 rgba(33,150,243,0.10)", fontSize: "1.13rem", border: "2px solid #222", color: "#fff", fontFamily: "'Segoe UI', Arial, sans-serif" }}>
          <h3 style={{ color: "#e53935", marginBottom: 16 }}>Review Incorrect Answers</h3>
          {reviewList.map((item, idx) => (
            <div key={idx} style={{ background: "#181c24", borderRadius: 10, padding: 20, marginBottom: 24, border: "2px solid #e53935" }}>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>{item.question}</div>
              <div><span style={{ color: "#e53935", fontWeight: 500 }}>Your answer: </span><span>{item.options.find(opt => opt[0] === item.userAnswer) || item.userAnswer}</span></div>
              <div><span style={{ color: "#43a047", fontWeight: 500 }}>Correct answer: </span><span>{item.options.find(opt => opt[0] === item.correctAnswer)}</span></div>
              <div style={{ color: "#90caf9", marginTop: 8 }}><strong>Explanation:</strong> {item.explanation}</div>
            </div>
          ))}
          <div style={{ marginTop: 12 }}>
            <button onClick={() => setShowReviewList(false)} style={{ padding: '10px 16px', borderRadius: 8, background: '#2196f3', color: '#fff', border: 'none' }}>Back</button>
          </div>
        </div>
      );
    }

    return (
      <ResultModal
        percent={percent}
        finalScore={finalScore}
        total={shuffledQuestions.length}
        reviewList={reviewList}
        onRestart={() => { startNewQuiz(); }}
        onReview={() => { setShowReviewList(true); }}
        onClose={() => { startNewQuiz(); }}
      />
    );
  }

  // Check if we have an active session and show session restore UI
  const savedSession = getQuizSession(sessionKey);
  const hasSession = savedSession && savedSession.isActive && savedSession.current > 0;

  return (
    <div style={{ 
      background: "#23272f", 
      padding: 40, 
      borderRadius: 18, 
      minHeight: 380, 
      width: "100%", 
      maxWidth: 900, 
      margin: "40px auto", 
      boxShadow: "0 8px 32px 0 rgba(33,150,243,0.10)", 
      fontSize: "1.13rem", 
      border: "2px solid #222", 
      color: "#fff", 
      fontFamily: "'Segoe UI', Arial, sans-serif", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center" 
    }}>
      {/* Session Restore Notice */}
      {hasSession && (
        <div style={{
          background: "#1976d2",
          padding: "16px 20px",
          borderRadius: 8,
          marginBottom: 24,
          border: "2px solid #2196f3"
        }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            📚 Session Restored
          </div>
          <div style={{ fontSize: "0.95rem", marginBottom: 12 }}>
            You were at question {current + 1} of {shuffledQuestions.length}
            {allowDomainFilter ? ` (${selectedDomain})` : ` in ${quizTitle}`}
          </div>
          <button
            onClick={startNewQuiz}
            style={{
              background: "#fff",
              color: "#1976d2",
              border: "none",
              padding: "8px 16px",
              borderRadius: 6,
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Start Fresh Quiz
          </button>
        </div>
      )}
      
      <div style={{ marginBottom: 24 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>
          {allowDomainFilter ? `Domain: ${selectedDomain}` : quizTitle} | Question {current + 1} of {shuffledQuestions.length}
        </div>
        <div style={{ background: "#333", borderRadius: 8, height: 12, width: "100%", marginBottom: 8, overflow: "hidden" }}>
          <div style={{ width: `${progressPercent}%`, background: "#43a047", height: "100%", borderRadius: 8, transition: "width 0.3s" }} />
        </div>
        <div style={{ fontSize: "1rem", color: "#90caf9" }}>Score: {score} / {shuffledQuestions.length}</div>
      </div>
      {/* Upgrade Prompt for Demo Users */}
      {isDemoUser(user) && (
        <UpgradePrompt
          title="🚀 Unlock All Questions"
          subtitle="You're viewing limited questions in demo mode"
          feature="questions"
          currentCount={shuffledQuestions.length}
          maxCount={getUserLimits(user?.tier).questionsPerDomain}
        />
      )}
      <div style={{ marginBottom: 32, padding: "24px 20px", background: "#181c24", borderRadius: 12, boxShadow: "0 2px 8px 0 rgba(33,150,243,0.08)", fontSize: "1.18rem", fontWeight: 500, letterSpacing: "0.01em", textAlign: "center" }}>
        {q.question}
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
        {shuffledOptions.map((opt) => {
          const letter = opt[0];
          console.log("Rendering - Option:", letter, "Correct:", q.correctAnswer, "Question:", q.question); // Debug
          let bg = "#23272f";
          let border = "2px solid transparent";
          if (showResult) {
            if (letter === q.correctAnswer) {
              bg = "#2e7d32"; // Correct answer green
              border = "2px solid #43a047";
            }
            if (selected === letter) {
              bg = letter === q.correctAnswer ? "#2e7d32" : "#c62828"; // Correct or incorrect selected
              border = letter === q.correctAnswer ? "2px solid #43a047" : "2px solid #e53935";
            }
          } else if (selected === letter) {
            bg = "#1976d2"; // Selected but not submitted
          }
          return (
            <li
              key={letter}
              style={{ background: bg, color: "#fff", margin: "18px 0", padding: "20px 28px", borderRadius: 12, cursor: showResult ? "default" : "pointer", border, transition: "background 0.2s, border 0.2s", fontSize: "1.08rem", fontWeight: 500, letterSpacing: "0.01em", boxShadow: "0 2px 8px 0 rgba(33,150,243,0.08)" }}
              onClick={() => handleSelect(letter)}
            >
              {opt}
            </li>
          );
        })}
      </ul>
      {showResult && (
        <div style={{ marginTop: 16, fontSize: "1.08rem", textAlign: "center" }}>
          {selected === q.correctAnswer ? (
            <span style={{ color: "#43a047", fontWeight: "bold", fontSize: "1.2rem" }}>Correct!</span>
          ) : (
            <span style={{ color: "#e53935", fontWeight: "bold", fontSize: "1.2rem" }}>Incorrect.</span>
          )}
          <div style={{ color: "#90caf9", marginTop: 12, fontSize: "1.05rem" }}>{q.explanation}</div>
          <button
            style={{ marginTop: 28, background: "#2196f3", color: "#fff", border: "none", padding: "14px 32px", borderRadius: 8, cursor: "pointer", fontSize: "1.08rem", fontWeight: 600, boxShadow: "0 2px 8px 0 rgba(33,150,243,0.12)" }}
            onClick={handleNext}
          >
            {current === shuffledQuestions.length - 1 ? (allowDomainFilter ? "Finish Domain" : "Finish Exam") : "Next Question"}
          </button>
        </div>
      )}
      {allowDomainFilter && (
        <div style={{ marginTop: 20 }}>
          <select value={selectedDomain} onChange={(e) => { setCurrent(0); setSelectedDomain(e.target.value); setScore(0); setIncorrect([]); }}>
            <option value="All">All Domains</option>
            {[...new Set(questions.map((q) => q.domain))].map((domain) => (
              <option key={domain} value={domain}>{domain}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Fixed destructuring assignment
  }
  return newArray;
};

export default Quiz;