import React, { useEffect } from 'react';

function Confetti() {
  const pieces = new Array(18).fill(0).map((_, i) => ({
    left: `${5 + i * 5}%`,
    delay: `${Math.random() * 0.6}s`,
    bg: ['#f44336','#e91e63','#ffeb3b','#4caf50','#2196f3','#ff9800'][i % 6]
  }));

  return (
    <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {pieces.map((p, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            left: p.left,
            top: '-10%',
            width: 10,
            height: 18,
            background: p.bg,
            transform: 'rotate(15deg)',
            borderRadius: 2,
            animation: `fall 1.8s ${p.delay} linear forwards`
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          to { transform: translateY(120vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function ResultModal({ percent, finalScore, total, reviewList = [], onRestart = () => {}, onClose = () => {}, onReview = () => {} }) {
  useEffect(() => {
    // small side-effect if needed later
    return () => {};
  }, []);

  const advice = percent >= 85
    ? 'Excellent work — you should move to advanced practice and timed exams.'
    : percent >= 60
      ? 'Good job — review weak areas and repeat this quiz.'
      : 'Focus on core domains using flashcards and targeted reviews before retaking the quiz.';

  return (
    <div style={{ position: 'relative', padding: 28, borderRadius: 12, background: '#23272f', color: '#fff', maxWidth: 920, margin: '40px auto', boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}>
      <Confetti />
      <div style={{ textAlign: 'center', padding: '8px 16px' }}>
        <h2 style={{ margin: 8 }}>🎉 Quiz Complete</h2>
        <div style={{ fontSize: 48, fontWeight: 800, margin: '8px 0', color: percent >= 80 ? '#4caf50' : percent >= 60 ? '#ffa726' : '#e53935' }}>{percent}%</div>
        <div style={{ marginBottom: 12 }}>{finalScore} out of {total} correct</div>
        <div style={{ margin: '12px auto', maxWidth: 720, color: '#bcd' }}>{advice}</div>

        <div style={{ marginTop: 18 }}>
          <button onClick={onRestart} style={{ marginRight: 10, padding: '10px 18px', borderRadius: 8, border: 'none', background: '#43a047', color: '#fff', fontWeight: 700 }}>Start New</button>
          <button onClick={() => onReview(reviewList)} style={{ marginRight: 10, padding: '10px 18px', borderRadius: 8, border: 'none', background: '#1976d2', color: '#fff', fontWeight: 700 }}>Review Incorrect</button>
          <button onClick={onClose} style={{ padding: '10px 18px', borderRadius: 8, border: '1px solid #666', background: 'transparent', color: '#fff', fontWeight: 700 }}>Close</button>
        </div>

        {reviewList && reviewList.length > 0 && (
          <div style={{ textAlign: 'left', marginTop: 24 }}>
            <h3 style={{ marginBottom: 8, color: '#ffb74d' }}>Quick Review ({reviewList.length})</h3>
            {reviewList.slice(0,5).map((r, i) => (
              <div key={i} style={{ background: '#181c24', padding: 12, borderRadius: 8, marginBottom: 8, border: '1px solid #333' }}>
                <div style={{ fontWeight: 700 }}>{r.question}</div>
                <div style={{ color: '#e57373' }}>Your: {r.userAnswer || '—'}</div>
                <div style={{ color: '#81c784' }}>Answer: {r.options?.find(o => o[0] === r.correctAnswer) || r.correctAnswer}</div>
              </div>
            ))}
            {reviewList.length > 5 && <div style={{ marginTop: 8, color: '#90caf9' }}>Showing first 5 items. Use Review to see full list.</div>}
          </div>
        )}
      </div>
    </div>
  );
}
