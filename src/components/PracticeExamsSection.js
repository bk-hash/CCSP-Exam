import React, { useEffect, useState } from "react";
import practiceExam1Questions from "../questions/practice_exam1";
import practiceExam2Questions from "../questions/practice_exam2";
import finalExam1Questions from "../questions/final_exam1";
import finalExam2Questions from "../questions/final_exam2";
import finalExam3Questions from "../questions/final_exam3";
import Quiz from "./Quiz";
import { useProgress } from '../contexts';
import { useAuth } from '../contexts/AuthContext';
import { useStats } from '../contexts/StatsContext';
import UpgradePrompt from './UpgradePrompt';

const exams = [
  {
    id: "final-exam-1",
    title: "Final Exam 1",
    badge: "New bank",
    series: "final",
    description: "First third of the new CCSP Question Master bank.",
    questions: finalExam1Questions
  },
  {
    id: "final-exam-2",
    title: "Final Exam 2",
    badge: "New bank",
    series: "final",
    description: "Second third of the new CCSP Question Master bank.",
    questions: finalExam2Questions
  },
  {
    id: "final-exam-3",
    title: "Final Exam 3",
    badge: "New bank",
    series: "final",
    description: "Final third of the new CCSP Question Master bank.",
    questions: finalExam3Questions
  },
  {
    id: "practice-exam-1",
    title: "Practice Exam 1",
    badge: "Classic",
    series: "classic",
    description: "Existing full-length practice set.",
    questions: practiceExam1Questions
  },
  {
    id: "practice-exam-2",
    title: "Practice Exam 2",
    badge: "Classic",
    series: "classic",
    description: "Existing full-length practice set.",
    questions: practiceExam2Questions
  }
];

const difficultyFilters = ["all", "easy", "medium", "hard"];
const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "accuracy", label: "Highest accuracy" },
  { value: "recent", label: "Most recent" },
  { value: "questions", label: "Most questions" },
  { value: "title", label: "Title A-Z" }
];

function PracticeExamsSection() {
  const [selectedExam, setSelectedExam] = useState("final-exam-1");
  const [searchTerm, setSearchTerm] = useState("");
  const [seriesFilter, setSeriesFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const { user, isDemoUser } = useAuth();
  const { getExamSeriesProgress } = useProgress();
  const { getExamSeriesStats } = useStats();

  const enrichedExams = exams.map((exam) => {
    const progress = getExamSeriesProgress(exam.id);
    const stats = getExamSeriesStats(exam.id);
    const difficulties = exam.questions.reduce((accumulator, question) => {
      const key = (question.difficulty || 'medium').toLowerCase();
      accumulator[key] = (accumulator[key] || 0) + 1;
      return accumulator;
    }, {});

    return {
      ...exam,
      progress,
      stats,
      difficulties
    };
  });

  const filteredExams = enrichedExams.filter((exam) => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchesSearch = !normalizedSearch || exam.title.toLowerCase().includes(normalizedSearch) || exam.description.toLowerCase().includes(normalizedSearch);
    const matchesSeries = seriesFilter === "all" || exam.series === seriesFilter;
    const matchesDifficulty = difficultyFilter === "all" || Boolean(exam.difficulties[difficultyFilter]);

    return matchesSearch && matchesSeries && matchesDifficulty;
  }).sort((leftExam, rightExam) => {
    const leftAccuracy = leftExam.stats?.accuracy ?? (leftExam.progress?.answered ? Math.round((leftExam.progress.correct / leftExam.progress.answered) * 100) : -1);
    const rightAccuracy = rightExam.stats?.accuracy ?? (rightExam.progress?.answered ? Math.round((rightExam.progress.correct / rightExam.progress.answered) * 100) : -1);
    const leftRecent = leftExam.stats?.lastStudiedAt || leftExam.progress?.lastAttemptedAt || '';
    const rightRecent = rightExam.stats?.lastStudiedAt || rightExam.progress?.lastAttemptedAt || '';

    switch (sortBy) {
      case "accuracy":
        return rightAccuracy - leftAccuracy || leftExam.title.localeCompare(rightExam.title);
      case "recent":
        return rightRecent.localeCompare(leftRecent) || leftExam.title.localeCompare(rightExam.title);
      case "questions":
        return rightExam.questions.length - leftExam.questions.length || leftExam.title.localeCompare(rightExam.title);
      case "title":
        return leftExam.title.localeCompare(rightExam.title);
      default:
        return (rightExam.series === "final") - (leftExam.series === "final") || leftExam.title.localeCompare(rightExam.title);
    }
  });

  const currentExam = enrichedExams.find(e => e.id === selectedExam) || filteredExams[0] || enrichedExams[0];

  useEffect(() => {
    if (filteredExams.length > 0 && !filteredExams.some((exam) => exam.id === selectedExam)) {
      setSelectedExam(filteredExams[0].id);
    }
  }, [filteredExams, selectedExam]);

  const handleSelectExam = (examId) => {
    setSelectedExam(examId);
  };

  return (
    <div>
      <div style={{ marginBottom: 28, textAlign: "center" }}>
        <div
          style={{
            fontSize: "1.45rem",
            fontWeight: 700,
            color: "#e8f5e9",
            fontFamily: '"Segoe UI", Arial, sans-serif',
            marginBottom: 8
          }}
        >
          Exam Library
        </div>
        <div
          style={{
            color: "#b8c7d9",
            fontSize: "1rem",
            fontFamily: '"Segoe UI", Arial, sans-serif'
          }}
        >
          Launch one of the new final exams or switch back to the original practice sets.
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(220px, 1.4fr) repeat(3, minmax(140px, 0.8fr))",
          gap: 12,
          marginBottom: 16
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search exam title or description"
          style={{
            width: "100%",
            fontSize: "1rem",
            color: "#fff",
            background: "#1d2731",
            border: "2px solid #31404f",
            borderRadius: 12,
            padding: "12px 14px",
            outline: "none"
          }}
        />
        <button
          type="button"
          onClick={() => setSeriesFilter(seriesFilter === "all" ? "final" : seriesFilter === "final" ? "classic" : "all")}
          style={{
            border: "2px solid #31404f",
            borderRadius: 12,
            background: "#1d2731",
            color: "#fff",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          {seriesFilter === "all" ? "All series" : seriesFilter === "final" ? "Final exams" : "Classic exams"}
        </button>
        <button
          type="button"
          onClick={() => setDifficultyFilter(difficultyFilter === "all" ? "easy" : difficultyFilter === "easy" ? "medium" : difficultyFilter === "medium" ? "hard" : "all")}
          style={{
            border: "2px solid #31404f",
            borderRadius: 12,
            background: "#1d2731",
            color: "#fff",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          {difficultyFilter === "all" ? "All difficulties" : `${difficultyFilter[0].toUpperCase()}${difficultyFilter.slice(1)} included`}
        </button>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          style={{
            width: "100%",
            fontSize: "0.95rem",
            color: "#fff",
            background: "#1d2731",
            border: "2px solid #31404f",
            borderRadius: 12,
            padding: "12px 14px",
            outline: "none",
            cursor: "pointer"
          }}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value} style={{ color: "#111" }}>
              Sort: {option.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
        {difficultyFilters.map((filter) => {
          const isActive = filter === difficultyFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setDifficultyFilter(filter)}
              style={{
                border: isActive ? "2px solid #66bb6a" : "2px solid #31404f",
                background: isActive ? "#244a39" : "#1d2731",
                color: "#fff",
                borderRadius: 999,
                padding: "8px 14px",
                fontSize: "0.88rem",
                fontWeight: 700,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                cursor: "pointer"
              }}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginBottom: 24
        }}
      >
        {filteredExams.map((exam) => {
          const isSelected = exam.id === selectedExam;
          const accuracy = exam.stats?.accuracy ?? (exam.progress?.answered ? Math.round((exam.progress.correct / exam.progress.answered) * 100) : null);
          return (
            <button
              key={exam.id}
              type="button"
              onClick={() => handleSelectExam(exam.id)}
              style={{
                textAlign: "left",
                border: isSelected ? "2px solid #66bb6a" : "2px solid #2c3440",
                borderRadius: 16,
                padding: 18,
                background: isSelected ? "linear-gradient(135deg, #1f3b2d 0%, #244a39 100%)" : "linear-gradient(135deg, #1b2028 0%, #232b36 100%)",
                color: "#fff",
                cursor: "pointer",
                boxShadow: isSelected ? "0 10px 30px rgba(67, 160, 71, 0.18)" : "0 8px 20px rgba(0, 0, 0, 0.18)",
                transition: "transform 0.2s ease, border 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, gap: 12 }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, fontFamily: '"Segoe UI", Arial, sans-serif' }}>
                  {exam.title}
                </div>
                <span
                  style={{
                    background: isSelected ? "#66bb6a" : "#39424e",
                    color: isSelected ? "#102415" : "#d7e2ef",
                    borderRadius: 999,
                    padding: "4px 10px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase"
                  }}
                >
                  {exam.badge}
                </span>
              </div>
              <div style={{ color: "#b8c7d9", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: 14 }}>
                {exam.description}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                {Object.entries(exam.difficulties).map(([level, count]) => (
                  <span
                    key={level}
                    style={{
                      borderRadius: 999,
                      padding: "4px 10px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      background: "rgba(255,255,255,0.08)",
                      color: "#dfe9f5",
                      textTransform: "uppercase"
                    }}
                  >
                    {level} {count}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#dfe9f5", fontSize: "0.92rem" }}>
                <span>{exam.questions.length} questions</span>
                <span>{accuracy === null ? (isSelected ? "Selected" : "Open exam") : `${accuracy}% accuracy`}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#9fb4c9", fontSize: "0.88rem", marginTop: 10 }}>
                <span>{exam.progress?.answered || 0} answered</span>
                <span>{exam.stats?.lastStudiedAt || exam.progress?.lastAttemptedAt ? "Recently attempted" : exam.series === "final" ? "Final series" : "Classic series"}</span>
              </div>
            </button>
          );
        })}
      </div>

      {filteredExams.length === 0 && (
        <div style={{ marginBottom: 24, textAlign: "center", color: "#b8c7d9" }}>
          No exams match the current search and filters.
        </div>
      )}

      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <select
          value={selectedExam}
          onChange={e => handleSelectExam(e.target.value)}
          style={{
            fontSize: "1.08rem",
            fontWeight: 500,
            fontFamily: '"Segoe UI", Arial, sans-serif',
            color: "#fff",
            background: "#23303b",
            border: "2px solid #355066",
            borderRadius: 8,
            padding: "10px 18px",
            outline: "none",
            cursor: "pointer",
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.18)",
            transition: "border 0.2s"
          }}
        >
          {filteredExams.map(exam => (
            <option
              key={exam.id}
              value={exam.id}
              style={{
                color: "#222",
                fontFamily: '"Segoe UI", Arial, sans-serif'
              }}
            >
              {exam.title} ({exam.questions.length})
            </option>
          ))}
        </select>
      </div>
      
      {isDemoUser(user) ? (
        <UpgradePrompt
          title="🎯 Practice Exams - Premium Only"
          subtitle="Premium unlocks the full exam library, including Final Exam 1, Final Exam 2, and Final Exam 3"
          feature="practice exams"
          currentCount={0}
          maxCount={5}
        />
      ) : (
        currentExam && currentExam.questions && currentExam.questions.length > 0 ? (
          <Quiz
            questions={currentExam.questions}
            showScore={true}
            sessionKey={`practice-exam-${currentExam.id}`}
            quizTitle={currentExam.title}
            examSeriesKey={currentExam.id}
            allowDomainFilter={false}
          />
        ) : (
          <div style={{ 
            textAlign: "center", 
            fontSize: "1.3rem", 
            color: "#e53935",
            marginTop: 40
          }}>
            No questions available for this exam.
          </div>
        )
      )}
    </div>
  );
}

export default PracticeExamsSection;
