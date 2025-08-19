import React, { useState } from "react";
import { ThemeProvider, ProgressProvider, SessionProvider, useTheme } from "./contexts";
import { ThemeToggle, StudyTimer, ProgressDashboard } from "./components";
import ResponsiveNav from "./components/ResponsiveNav";
import StudyTips from "./components/StudyTips";
import QuickStats from "./components/QuickStats";
import QuizSection from "./QuizSection";
import FlashcardSection from "./FlashcardSection";
import AllDomainsQuizSection from "./AllDomainsQuizSection";
import PracticeExamsSection from "./components/PracticeExamsSection";

function AppContent({ section, setSection }) {
  const { theme } = useTheme();
  
  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.background,
        fontFamily: '"Segoe UI", Arial, sans-serif',
        color: theme.text,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.3s ease",
        paddingBottom: "80px" // Space for mobile bottom nav
      }}
    >
      <ThemeToggle />
      <StudyTimer isActive={section !== "Dashboard"} />
      <StudyTips />
      <QuickStats />
      
      <header style={{
        width: "100%",
        background: theme.gradient,
        padding: "32px 0 24px 0",
        marginBottom: 32,
        textAlign: "center",
        fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
        fontWeight: 700,
        letterSpacing: "0.03em",
        color: "#fff",
        boxShadow: `0 2px 12px 0 ${theme.shadow}`
      }}>
        🚀 The road to being a Cyber Security Architect starts here
      </header>
      
      <ResponsiveNav section={section} setSection={setSection} />
      
      <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "0 20px" }}>
        <div style={{ 
          width: "100%", 
          maxWidth: section === "Dashboard" ? "1200px" : "800px",
          transition: "max-width 0.3s ease"
        }}>
          {section === "Dashboard" && <ProgressDashboard />}
          {section === "Quiz" && <QuizSection />}
          {section === "PracticeExams" && <PracticeExamsSection />}
          {section === "Flashcards" && <FlashcardSection />}
          {section === "AllDomainsQuiz" && <AllDomainsQuizSection />}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [section, setSection] = useState("Dashboard");

  return (
    <ThemeProvider>
      <ProgressProvider>
        <SessionProvider>
          <AppContent section={section} setSection={setSection} />
        </SessionProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;