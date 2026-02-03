import React, { useState, useEffect, Suspense, lazy } from "react";
import { ThemeProvider, ProgressProvider, SessionProvider, AuthProvider, useTheme, useAuth } from "./contexts";
import { StatsProvider } from "./contexts/StatsContext";
import ThemeToggle from "./components/ThemeToggle";
import StudyTimer from "./components/StudyTimer";
import ResponsiveNav from "./components/ResponsiveNav";
import StudyTips from "./components/StudyTips";
import QuickStats from "./components/QuickStats";
import LoginScreen from "./components/LoginScreen";
import UserProfile from "./components/UserProfile";
import UserDashboard from "./components/UserDashboard";
import MobileHeader from "./components/MobileHeader";
import MobileBottomNav from "./components/MobileBottomNav";
const PricingSection = lazy(() => import("./components/PricingPage"));
const AdminPanel = lazy(() => import("./components/AdminPanel"));
const QuizSection = lazy(() => import("./QuizSection"));
const FlashcardSection = lazy(() => import("./FlashcardSection"));
const AllDomainsQuizSection = lazy(() => import("./AllDomainsQuizSection"));
const PracticeExamsSection = lazy(() => import("./components/PracticeExamsSection"));

function AppContent({ section, setSection }) {
  const { theme } = useTheme();
  const { user, isLoading } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Motivational messages that rotate
  const motivationalMessages = [
    "Self empowerment requires self investment",
    "Every expert was once a beginner", 
    "Security is not a product, but a process",
    "Knowledge is the best defense against threats",
    "Your dedication today shapes your expertise tomorrow",
    "Practice makes permanent, perfect practice makes perfect",
    "The cloud is not just technology, it's transformation",
    "Continuous learning is the key to cybersecurity mastery"
  ];
  
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  // Rotate messages every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => 
        (prevIndex + 1) % motivationalMessages.length
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [motivationalMessages.length]);

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Show login screen if user is not authenticated
  if (isLoading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: theme.background,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Segoe UI", Arial, sans-serif',
          color: theme.text
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              border: `3px solid ${theme.textSecondary}`,
              borderTop: '3px solid #4285f4',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }}
          />
          <p style={{ color: theme.textSecondary }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }
  
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
        paddingBottom: isMobile ? "80px" : "40px", // Extra space for mobile bottom nav
        position: "relative"
      }}
    >
      {/* Desktop/Tablet Components */}
      {!isMobile && (
        <>
          <UserProfile />
          <ThemeToggle />
          <StudyTimer isActive={section !== "Dashboard"} />
          <StudyTips />
          <QuickStats />
        </>
      )}
      
      {/* Mobile Header */}
      {isMobile ? (
        <MobileHeader 
          currentMessageIndex={currentMessageIndex}
          motivationalMessages={motivationalMessages}
        />
      ) : (
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
          boxShadow: `0 2px 12px 0 ${theme.shadow}`,
          transition: "all 0.5s ease"
        }}>
          🚀 {motivationalMessages[currentMessageIndex]}
        </header>
      )}
      
      {/* Navigation */}
      {isMobile ? (
        <MobileBottomNav section={section} setSection={setSection} />
      ) : (
        <ResponsiveNav section={section} setSection={setSection} />
      )}
      
      <div style={{ 
        width: "100%", 
        display: "flex", 
        justifyContent: "center", 
        padding: isMobile ? "20px 16px" : "0 20px",
        marginTop: isMobile ? "0" : "0"
      }}>
        <div style={{ 
          width: "100%", 
          maxWidth: section === "Dashboard" ? "1200px" : "800px",
          transition: "max-width 0.3s ease"
        }}>
          <Suspense fallback={<div style={{padding:24,textAlign:'center'}}>Loading section...</div>}>
            {section === "Dashboard" && <UserDashboard setSection={setSection} />}
            {section === "Quiz" && <QuizSection />}
            {section === "PracticeExams" && <PracticeExamsSection />}
            {section === "Flashcards" && <FlashcardSection />}
            {section === "AllDomainsQuiz" && <AllDomainsQuizSection />}
            {section === "Pricing" && <PricingSection />}
            {section === "Admin" && <AdminPanel />}
          </Suspense>
        </div>
      </div>

      {/* Mobile-only floating action components */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          zIndex: 90
        }}>
          <QuickStats />
          <ThemeToggle />
        </div>
      )}
    </div>
  );
}

function App() {
  const [section, setSection] = useState("Dashboard");

  return (
    <ThemeProvider>
      <ProgressProvider>
        <SessionProvider>
          <AuthProvider>
            <StatsProvider>
              <AppContent section={section} setSection={setSection} />
            </StatsProvider>
          </AuthProvider>
        </SessionProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;