import React, { useState } from "react";

function Flashcards({ flashcards }) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  if (!flashcards || flashcards.length === 0)
    return <div style={{ fontSize: "1.3rem", textAlign: "center" }}>No flashcards available.</div>;

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
          transition: "background 0.3s",
          textAlign: "center"
        }}
      >
        {showBack ? card.back : card.front}
      </div>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <button onClick={prev} style={{ marginRight: 16, padding: "8px 16px", borderRadius: 6, background: "#2196f3", color: "#fff", border: "none" }}>Previous</button>
        <button onClick={next} style={{ padding: "8px 16px", borderRadius: 6, background: "#2196f3", color: "#fff", border: "none" }}>Next</button>
      </div>
      <div style={{ marginTop: 10, color: "#90caf9", textAlign: "center" }}>
        Card {index + 1} of {flashcards.length}
      </div>
    </div>
  );
}

export default Flashcards;