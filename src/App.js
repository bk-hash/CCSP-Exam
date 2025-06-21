import React, { useState } from "react";
import QuizSection from "./QuizSection";
import FlashcardSection from "./FlashcardSection";
import AllDomainsQuizSection from "./AllDomainsQuizSection"; // <-- ADD THIS LINE

function App() {
  const [section, setSection] = useState("Quiz");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#151922",
        fontFamily: '"Segoe UI", Arial, sans-serif',
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <header style={{
        width: "100%",
        background: "linear-gradient(90deg, #2196f3 0%, #43e97b 100%)",
        padding: "32px 0 24px 0",
        marginBottom: 32,
        textAlign: "center",
        fontSize: "2.1rem",
        fontWeight: 700,
        letterSpacing: "0.03em",
        color: "#fff",
        boxShadow: "0 2px 12px 0 rgba(33,150,243,0.10)"
      }}>
        The road to being a Cyber Security Architect starts here
      </header>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <button
          onClick={() => setSection("Quiz")}
          style={{
            marginRight: 16,
            padding: "12px 32px",
            fontWeight: 600,
            fontSize: "1.15rem",
            background: section === "Quiz" ? "#2196f3" : "#23272f",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            boxShadow: section === "Quiz" ? "0 2px 8px 0 rgba(33,150,243,0.18)" : "none",
            transition: "all 0.2s"
          }}
        >
          Quiz
        </button>
        <button
          onClick={() => setSection("Flashcards")}
          style={{
            marginRight: 16,
            padding: "12px 32px",
            fontWeight: 600,
            fontSize: "1.15rem",
            background: section === "Flashcards" ? "#2196f3" : "#23272f",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            boxShadow: section === "Flashcards" ? "0 2px 8px 0 rgba(33,150,243,0.18)" : "none",
            transition: "all 0.2s"
          }}
        >
          Flashcards
        </button>
        <button
          onClick={() => setSection("AllDomainsQuiz")}
          style={{
            padding: "12px 32px",
            fontWeight: 600,
            fontSize: "1.15rem",
            background: section === "AllDomainsQuiz" ? "#2196f3" : "#23272f",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            boxShadow: section === "AllDomainsQuiz" ? "0 2px 8px 0 rgba(33,150,243,0.18)" : "none",
            transition: "all 0.2s"
          }}
        >
          All Domains Quiz
        </button>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 600 }}>
          {section === "Quiz" && <QuizSection />}
          {section === "Flashcards" && <FlashcardSection />}
          {section === "AllDomainsQuiz" && <AllDomainsQuizSection />} {/* <-- ADD THIS LINE */}
        </div>
      </div>
    </div>
  );
}

export default App;