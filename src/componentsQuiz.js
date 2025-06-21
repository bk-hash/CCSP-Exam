import React, { useState } from "react";

function Quiz({ questions }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  if (!questions || questions.length === 0) return <div>No questions available.</div>;

  const q = questions[current];

  const handleSelect = (option) => {
    setSelected(option);
    setShowResult(true);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % questions.length);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div style={{ background: "#222", padding: 24, borderRadius: 12, marginTop: 32, minWidth: 350 }}>
      <h3 style={{ color: "#2196f3" }}>{q.question}</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {q.options.map((opt, idx) => {
          const letter = opt[0];
          let bg = "#333";
          if (showResult) {
            if (letter === q.correctAnswer) bg = "#2e7d32"; // green
            else if (selected === letter) bg = "#c62828"; // red
          } else if (selected === letter) {
            bg = "#1976d2"; // blue highlight
          }
          return (
            <li
              key={opt}
              style={{
                background: bg,
                color: "#fff",
                margin: "8px 0",
                padding: "12px 16px",
                borderRadius: 8,
                cursor: showResult ? "default" : "pointer",
                border: letter === q.correctAnswer ? "2px solid #43a047" : "2px solid transparent",
                transition: "background 0.2s"
              }}
              onClick={() => !showResult && handleSelect(letter)}
            >
              {opt}
            </li>
          );
        })}
      </ul>
      {showResult && (
        <div style={{ marginTop: 16 }}>
          {selected === q.correctAnswer ? (
            <span style={{ color: "#43a047", fontWeight: "bold" }}>Correct!</span>
          ) : (
            <span style={{ color: "#e53935", fontWeight: "bold" }}>Incorrect.</span>
          )}
          <div style={{ color: "#90caf9", marginTop: 8 }}>{q.explanation}</div>
          <button
            style={{
              marginTop: 16,
              background: "#2196f3",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: 6,
              cursor: "pointer"
            }}
            onClick={handleNext}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;