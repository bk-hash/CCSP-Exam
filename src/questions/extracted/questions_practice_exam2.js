// Practice Exam 2 Questions extracted from CCSP Practice Tests.txt and test practice.txt
const questions = [
  {
    question: "Which cloud security control is most effective against data exfiltration attacks?",
    options: [
      "A. Data Loss Prevention (DLP)",
      "B. Network segmentation",
      "C. Encryption at rest",
      "D. Multi-factor authentication"
    ],
    correctAnswer: "A",
    explanation: "DLP solutions monitor and block unauthorized data transfers, making them highly effective against exfiltration.",
    domain: "Practice Exam 2",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the best way to ensure compliance with GDPR in a cloud environment?",
    options: [
      "A. Store all data in the US",
      "B. Use encryption for all data",
      "C. Ensure data residency in the EU",
      "D. Disable user access logs"
    ],
    correctAnswer: "C",
    explanation: "GDPR requires personal data of EU residents to be stored within the EU or in compliant regions.",
    domain: "Practice Exam 2",
    type: "multiple-choice",
    difficulty: "medium"
  }
];

export default questions;
