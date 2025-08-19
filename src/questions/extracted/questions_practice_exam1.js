// Practice Exam 1 Questions extracted from CCSP Practice Tests.txt and test practice.txt
const questions = [
  {
    question: "Alice is the CEO for a software company; she is considering migrating the operation from the current traditional on-premises environment into the cloud. Which cloud service model should she most likely consider for her company’s purposes?",
    options: [
      "A. Platform as a service (PaaS)",
      "B. Software as a service (SaaS)",
      "C. Function as a service (FaaS)",
      "D. Infrastructure as a service (IaaS)"
    ],
    correctAnswer: "B",
    explanation: "Software as a service (SaaS) is typically the most suitable model for organizations looking to migrate operations to the cloud, as it provides ready-to-use applications without the need to manage infrastructure.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which aspect of cloud computing should Alice be most concerned about when migrating her company’s operations?",
    options: [
      "A. Multitenancy",
      "B. Metered service",
      "C. Elasticity",
      "D. Resource pooling"
    ],
    correctAnswer: "A",
    explanation: "Multitenancy is a key concern in cloud computing as it involves sharing resources among multiple customers, which can introduce security and privacy risks.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "According to the Payment Card Industry Data Security Standard (PCI DSS), what can you never store for any length of time?",
    options: [
      "A. Cardholder name",
      "B. The credit card verification (CCV) number",
      "C. Billing address",
      "D. Expiration date"
    ],
    correctAnswer: "B",
    explanation: "PCI DSS prohibits storing the credit card verification (CCV) number to reduce the risk of fraud and unauthorized access.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "The Payment Card Industry Data Security Standard (PCI DSS) distinguishes merchants by different tiers, based on what?",
    options: [
      "A. Number of transactions per year",
      "B. Dollar value of transactions per year",
      "C. Jurisdiction",
      "D. Type of business"
    ],
    correctAnswer: "A",
    explanation: "PCI DSS merchant tiers are primarily based on the number of transactions processed per year.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is usually considered the difference between business continuity (BC) efforts and disaster recovery (DR) efforts?",
    options: [
      "A. BC involves a recovery time objective (RTO), and DR involves a recovery point objective (RPO)",
      "B. BC is for events caused by humans, whereas DR is for natural disasters",
      "C. BC is about maintaining critical functions during a disruption, and DR is about recovering to normal operations after a disruption",
      "D. BC involves protecting human assets, whereas DR is about protecting property"
    ],
    correctAnswer: "C",
    explanation: "Business continuity focuses on maintaining critical functions during disruptions, while disaster recovery is about restoring normal operations after a disruption.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  }
];

export default questions;
