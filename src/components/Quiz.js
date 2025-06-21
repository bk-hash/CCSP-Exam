import React, { useState } from "react";

function Quiz({ questions, showScore = false }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrect, setIncorrect] = useState([]);

  if (!questions || questions.length === 0)
    return <div style={{ fontSize: "1.3rem", textAlign: "center" }}>No questions available.</div>;

  const q = questions[current];

  const handleSelect = (option) => {
    if (!showResult) {
      setSelected(option);
      setShowResult(true);
      if (option === q.correctAnswer) {
        setScore((s) => s + 1);
      } else {
        setIncorrect((arr) => [
          ...arr,
          {
            ...q,
            userAnswer: option
          }
        ]);
      }
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  // Show score and review if requested and quiz is finished
  if (showScore && current === questions.length - 1 && showResult) {
    const finalScore = score + (selected === q.correctAnswer ? 1 : 0);
    const percent = Math.round((finalScore / questions.length) * 100);
    let color = "#ffa726"; // orange
    if (percent > 80) color = "#43a047"; // green
    else if (percent < 50) color = "#e53935"; // red

    // Add last question to incorrect if needed
    let reviewList = incorrect;
    if (selected !== q.correctAnswer) {
      reviewList = [
        ...incorrect,
        {
          ...q,
          userAnswer: selected
        }
      ];
    }

    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <h2>Your Score</h2>
        <div style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          color,
          margin: "24px 0"
        }}>
          {percent}%
        </div>
        <div style={{ fontSize: "1.2rem", color: "#fff" }}>
          {finalScore} out of {questions.length} correct
        </div>
        {reviewList.length > 0 && (
          <div style={{ marginTop: 40, textAlign: "left", maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            <h3 style={{ color: "#e53935", marginBottom: 16 }}>Review Incorrect Answers</h3>
            {reviewList.map((item, idx) => (
              <div key={idx} style={{
                background: "#181c24",
                borderRadius: 10,
                padding: 20,
                marginBottom: 24,
                border: "2px solid #e53935"
              }}>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>{item.question}</div>
                <div>
                  <span style={{ color: "#e53935", fontWeight: 500 }}>Your answer: </span>
                  <span>{item.options.find(opt => opt[0] === item.userAnswer) || item.userAnswer}</span>
                </div>
                <div>
                  <span style={{ color: "#43a047", fontWeight: 500 }}>Correct answer: </span>
                  <span>{item.options.find(opt => opt[0] === item.correctAnswer)}</span>
                </div>
                <div style={{ color: "#90caf9", marginTop: 8 }}>
                  <strong>Explanation:</strong> {item.explanation}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // --- Progress Tracking UI ---
  const progressPercent = Math.round(((current + (showResult ? 1 : 0)) / questions.length) * 100);

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
      {/* Progress Bar and Score */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>
          Question {current + 1} of {questions.length}
        </div>
        <div style={{
          background: "#333",
          borderRadius: 8,
          height: 12,
          width: "100%",
          marginBottom: 8,
          overflow: "hidden"
        }}>
          <div style={{
            width: `${progressPercent}%`,
            background: "#43a047",
            height: "100%",
            borderRadius: 8,
            transition: "width 0.3s"
          }} />
        </div>
        <div style={{ fontSize: "1rem", color: "#90caf9" }}>
          Score: {score} / {questions.length}
        </div>
      </div>
      {/* End Progress Bar and Score */}

      <div
        style={{
          marginBottom: 32,
          padding: "24px 20px",
          background: "#181c24",
          borderRadius: 12,
          boxShadow: "0 2px 8px 0 rgba(33,150,243,0.08)",
          fontSize: "1.18rem",
          fontWeight: 500,
          letterSpacing: "0.01em",
          textAlign: "center"
        }}
      >
        {q.question}
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
        {q.options.map((opt) => {
          const letter = opt[0];
          let bg = "#23272f";
          let border = "2px solid transparent";
          if (showResult) {
            if (letter === q.correctAnswer && selected === letter) {
              bg = "#2e7d32";
              border = "2px solid #43a047";
            } else if (selected === letter && letter !== q.correctAnswer) {
              bg = "#c62828";
              border = "2px solid #e53935";
            } else if (letter === q.correctAnswer) {
              bg = "#2e7d32";
              border = "2px solid #43a047";
            }
          } else if (selected === letter) {
            bg = "#1976d2";
          }
          return (
            <li
              key={opt}
              style={{
                background: bg,
                color: "#fff",
                margin: "18px 0",
                padding: "20px 28px",
                borderRadius: 12,
                cursor: showResult ? "default" : "pointer",
                border: border,
                transition: "background 0.2s, border 0.2s",
                fontSize: "1.08rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
                boxShadow: "0 2px 8px 0 rgba(33,150,243,0.08)"
              }}
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
            style={{
              marginTop: 28,
              background: "#2196f3",
              color: "#fff",
              border: "none",
              padding: "14px 32px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: "1.08rem",
              fontWeight: 600,
              boxShadow: "0 2px 8px 0 rgba(33,150,243,0.12)"
            }}
            onClick={handleNext}
          >
            {current === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;