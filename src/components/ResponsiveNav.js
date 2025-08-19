import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ResponsiveNav = ({ section, setSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { key: "Dashboard", label: "📊 Dashboard", shortLabel: "📊" },
    { key: "Quiz", label: "📝 Quiz", shortLabel: "📝" },
    { key: "PracticeExams", label: "🎯 Practice Exams", shortLabel: "🎯" },
    { key: "Flashcards", label: "📚 Flashcards", shortLabel: "📚" },
    { key: "AllDomainsQuiz", label: "🌐 All Domains", shortLabel: "🌐" }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div style={{ 
        width: "100%", 
        display: "flex", 
        justifyContent: "center", 
        marginBottom: 32,
        flexWrap: "wrap",
        gap: "8px",
        padding: "0 20px"
      }} className="desktop-nav">
        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-nav { display: flex !important; }
          }
          @media (min-width: 769px) {
            .mobile-nav { display: none !important; }
          }
        `}</style>
        {navItems.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setSection(key)}
            style={{
              padding: "12px 24px",
              fontWeight: 600,
              fontSize: "1rem",
              background: section === key ? theme.primary : theme.cardBackground,
              color: section === key ? "#fff" : theme.text,
              border: `1px solid ${section === key ? theme.primary : theme.border}`,
              borderRadius: 10,
              cursor: "pointer",
              boxShadow: section === key ? `0 4px 12px ${theme.shadow}` : "none",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => {
              if (section !== key) {
                e.target.style.background = theme.cardBackgroundHover;
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (section !== key) {
                e.target.style.background = theme.cardBackground;
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div style={{ 
        width: "100%", 
        marginBottom: 32,
        padding: "0 20px"
      }} className="mobile-nav">
        {/* Mobile Menu Button */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: isMenuOpen ? "16px" : "0"
        }}>
          <div style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            color: theme.text
          }}>
            {navItems.find(item => item.key === section)?.label || "Navigation"}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: theme.cardBackground,
              border: `1px solid ${theme.border}`,
              borderRadius: "8px",
              padding: "8px 12px",
              color: theme.text,
              cursor: "pointer",
              fontSize: "1.2rem"
            }}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div style={{
            background: theme.cardBackground,
            borderRadius: "12px",
            border: `1px solid ${theme.border}`,
            overflow: "hidden",
            boxShadow: `0 4px 12px ${theme.shadow}`
          }}>
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => {
                  setSection(key);
                  setIsMenuOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  fontSize: "1rem",
                  fontWeight: section === key ? "600" : "normal",
                  background: section === key ? theme.primary : "transparent",
                  color: section === key ? "#fff" : theme.text,
                  border: "none",
                  borderBottom: `1px solid ${theme.border}`,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  if (section !== key) {
                    e.target.style.background = theme.cardBackgroundHover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (section !== key) {
                    e.target.style.background = "transparent";
                  }
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: theme.cardBackground,
        borderTop: `1px solid ${theme.border}`,
        padding: "8px 0",
        display: "flex",
        justifyContent: "space-around",
        zIndex: 1000,
        boxShadow: `0 -2px 12px ${theme.shadow}`
      }} className="mobile-nav">
        {navItems.map(({ key, shortLabel }) => (
          <button
            key={key}
            onClick={() => setSection(key)}
            style={{
              background: "none",
              border: "none",
              color: section === key ? theme.primary : theme.textSecondary,
              cursor: "pointer",
              fontSize: "1.5rem",
              padding: "8px",
              borderRadius: "8px",
              transition: "all 0.2s ease"
            }}
          >
            {shortLabel}
          </button>
        ))}
      </div>
    </>
  );
};

export default ResponsiveNav;
