import React, { useMemo } from "react";
import Quiz from "./components/Quiz";
import domain1 from "./questions/domain1";
import domain2 from "./questions/domain2";
import domain3 from "./questions/domain3";
import domain4 from "./questions/domain4";
import domain5 from "./questions/domain5";
import domain6 from "./questions/domain6";

// Shuffle helper
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function AllDomainsQuizSection() {
  // Combine and shuffle all questions only once per mount
  const allQuestions = useMemo(() => {
    const combined = [
      ...domain1,
      ...domain2,
      ...domain3,
      ...domain4,
      ...domain5,
      ...domain6
    ];
    return shuffleArray(combined);
  }, []);

  return (
    <div>
      <h2 style={{ color: "#2196f3", textAlign: "center" }}>All Domains Quiz</h2>
      <Quiz questions={allQuestions} showScore={true} />
    </div>
  );
}

export default AllDomainsQuizSection;