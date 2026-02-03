import React, { useState } from "react";
import practiceExam1Questions from "../questions/practice_exam1";
import practiceExam2Questions from "../questions/practice_exam2";
import Quiz from "./Quiz";
import { useAuth } from '../contexts/AuthContext';
import UpgradePrompt from './UpgradePrompt';

function PracticeExamsSection() {
  const [selectedExam, setSelectedExam] = useState("Practice Exam 1 (120)");
  const { user, isDemoUser } = useAuth();
  
  const exams = [
    {
      title: "Practice Exam 1 (120)",
      questions: practiceExam1Questions
    },
    {
      title: "Practice Exam 2 (120)", 
      questions: practiceExam2Questions
    }
  ];

  const currentExam = exams.find(e => e.title === selectedExam);

  return (
    <div>
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <span
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#43a047",
            fontFamily: '"Segoe UI", Arial, sans-serif',
            letterSpacing: "0.01em",
            marginRight: 12,
            verticalAlign: "middle"
          }}
        >
          Choose an exam:
        </span>
        <select
          value={selectedExam}
          onChange={e => setSelectedExam(e.target.value)}
          style={{
            fontSize: "1.08rem",
            fontWeight: 500,
            fontFamily: '"Segoe UI", Arial, sans-serif',
            color: "#fff",
            background: "#388e3c",
            border: "2px solid #43a047",
            borderRadius: 8,
            padding: "10px 18px",
            outline: "none",
            cursor: "pointer",
            boxShadow: "0 2px 8px 0 rgba(67,160,71,0.10)",
            transition: "border 0.2s"
          }}
        >
          {exams.map(exam => (
            <option
              key={exam.title}
              value={exam.title}
              style={{
                color: "#222",
                fontFamily: '"Segoe UI", Arial, sans-serif'
              }}
            >
              {exam.title}
            </option>
          ))}
        </select>
      </div>
      
      {isDemoUser(user) ? (
        <UpgradePrompt
          title="🎯 Practice Exams - Premium Only"
          subtitle="Full-length practice exams are available with Premium access"
          feature="practice exams"
          currentCount={0}
          maxCount={2}
        />
      ) : (
        currentExam && currentExam.questions && currentExam.questions.length > 0 ? (
          <Quiz questions={currentExam.questions} showScore={true} sessionKey={`practice-exam-${selectedExam}`} />
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
