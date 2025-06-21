import React, { useState } from "react";

function Flashcards({ flashcards }) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  if (!flashcards || flashcards.length === 0) return <div>No flashcards available.</div>;

  const card = flashcards[index];

  const next = () => {
    setShowBack(false);
    setIndex((i) => (i + 1) % flashcards.length);
  };

  const prev = () => {
    setShowBack(false);
    setIndex((i) => (i - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div style={{ background: "#222", padding: 24, borderRadius: 12, marginTop: 32, minWidth: 350, textAlign: "center" }}>
      <div
        onClick={() => setShowBack(!showBack)}
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
          transition: "background 0.3s"
        }}
      >
        {showBack ? card.back : card.front}
      </div>
      <button onClick={prev} style={{ marginRight: 16, padding: "8px 16px", borderRadius: 6, background: "#2196f3", color: "#fff", border: "none" }}>Previous</button>
      <button onClick={next} style={{ padding: "8px 16px", borderRadius: 6, background: "#2196f3", color: "#fff", border: "none" }}>Next</button>
      <div style={{ marginTop: 10, color: "#90caf9" }}>
        Card {index + 1} of {flashcards.length}
      </div>
    </div>
  );
}

export default Flashcards;