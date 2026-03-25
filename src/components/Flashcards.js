import React, { useState } from "react";
import { useAuth } from '../contexts/AuthContext';
import { useStats } from '../contexts/StatsContext';
import UpgradePrompt from './UpgradePrompt';
import ResultModal from './ResultModal';

function Flashcards({ flashcards }) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [knownSet, setKnownSet] = useState(new Set());
  const [showModal, setShowModal] = useState(false);
  const [showReviewList, setShowReviewList] = useState(false);
  const { user, getUserLimits, isDemoUser, isLoading } = useAuth();
  const { updateFlashcardStats } = useStats();

  if (!flashcards || flashcards.length === 0)
    return <div style={{ fontSize: "1.3rem", textAlign: "center" }}>No flashcards available.</div>;

  // Don't show demo controls while loading or if user is null
  if (isLoading || !user) {
    return <div style={{ fontSize: "1.3rem", textAlign: "center" }}>Loading...</div>;
  }

  // Apply content gating for demo users
  const limits = getUserLimits(user?.tier);
  const limitedFlashcards = limits.flashcardsPerDomain === -1 
    ? flashcards 
    : flashcards.slice(0, limits.flashcardsPerDomain);

  console.log('🔍 Flashcards Debug:', {
    userEmail: user?.email,
    userTier: user?.tier,
    isDemoUserResult: isDemoUser(user),
    limits: limits,
    totalFlashcards: flashcards.length,
    limitedFlashcards: limitedFlashcards.length
  });

  const card = limitedFlashcards[index];

  const next = () => {
    setShowBack(false);
    setIndex((i) => (i + 1) % limitedFlashcards.length);
  };

  const prev = () => {
    setShowBack(false);
    setIndex((i) => (i - 1 + limitedFlashcards.length) % limitedFlashcards.length);
  };

  const markKnown = () => {
    setKnownSet((s) => new Set([...s, index]));
    // advance to next card automatically when marking known
    setTimeout(() => next(), 120);
  };

  const finishSession = () => {
    setShowModal(true);
  };

  const handleRestart = () => {
    setIndex(0);
    setShowBack(false);
    setKnownSet(new Set());
    setShowModal(false);
    setShowReviewList(false);
  };

  const unknownCards = limitedFlashcards.filter((_, i) => !knownSet.has(i));

  return (
    <>
      {/* Upgrade Prompt for Demo Users */}
      {isDemoUser(user) && (
        <UpgradePrompt
          title="📚 Unlock All Flashcards"
          subtitle="You're viewing limited flashcards in demo mode"
          feature="flashcards"
          currentCount={limitedFlashcards.length}
          maxCount={limits.flashcardsPerDomain}
        />
      )}

      <div
      style={{
        background: "#23272f",
        padding: 40,
        borderRadius: 18,
        minHeight: 380,
        width: "100%",
        maxWidth: 900,
        margin: "40px auto 40px auto",
        boxShadow: "0 8px 32px 0 rgba(33,150,243,0.10)",
        fontSize: "1.13rem",
        border: "2px solid #222",
        color: "#fff",
        fontFamily: '"Segoe UI", Arial, sans-serif',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div
        onClick={() => {
          setShowBack(!showBack);
          // Track flashcard interaction
          if (!showBack) {
            updateFlashcardStats(card.domain || 1, 'medium');
          }
        }}
        style={{
          cursor: "pointer",
          border: "2px solid #2196f3",
          borderRadius: 10,
          padding: 32,
          minHeight: 100,
          color: "#fff",
          background: showBack ? "#1976d2" : "#333",
          fontSize: 18,
          marginBottom: 16,
          transition: "background 0.3s",
          textAlign: "center"
        }}
      >
        {showBack ? card.back : card.front}
      </div>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <button onClick={prev} style={{ marginRight: 12, padding: "8px 14px", borderRadius: 6, background: "#2196f3", color: "#fff", border: "none" }}>Previous</button>
        <button onClick={next} style={{ marginRight: 12, padding: "8px 14px", borderRadius: 6, background: "#2196f3", color: "#fff", border: "none" }}>Next</button>
        <button onClick={markKnown} style={{ marginRight: 12, padding: "8px 14px", borderRadius: 6, background: "#43a047", color: "#fff", border: "none" }}>I know this</button>
        <button onClick={finishSession} style={{ padding: "8px 14px", borderRadius: 6, background: "#ffb300", color: "#111", border: "none" }}>Finish Session</button>
      </div>
      <div style={{ marginTop: 10, color: "#90caf9", textAlign: "center" }}>
        Card {index + 1} of {limitedFlashcards.length}
      </div>
    </div>
    {showModal && (
      <ResultModal
        percent={Math.round((knownSet.size / limitedFlashcards.length) * 100)}
        finalScore={knownSet.size}
        total={limitedFlashcards.length}
        reviewList={unknownCards}
        onRestart={handleRestart}
        onReview={() => { setShowReviewList(true); setShowModal(false); }}
        onClose={() => setShowModal(false)}
      />
    )}

    {showReviewList && (
      <div style={{ background: "#23272f", padding: 24, borderRadius: 12, maxWidth: 920, margin: "24px auto" }}>
        <h3 style={{ color: '#ffb74d' }}>Review Unknown Cards ({unknownCards.length})</h3>
        {unknownCards.map((c, i) => (
          <div key={i} style={{ background: '#181c24', padding: 12, borderRadius: 8, marginBottom: 8 }}>
            <div style={{ fontWeight: 700 }}>{c.front}</div>
            <div style={{ color: '#90caf9', marginTop: 6 }}>{c.back}</div>
          </div>
        ))}
        <div style={{ marginTop: 12 }}>
          <button onClick={() => setShowReviewList(false)} style={{ padding: '8px 12px', borderRadius: 6, background: '#2196f3', color: '#fff', border: 'none' }}>Back</button>
        </div>
      </div>
    )}
    </>
  );
}

export default Flashcards;