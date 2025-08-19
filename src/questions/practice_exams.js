// Practice Exam questions
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
    domain: "Practice Exam 1",
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
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which protocol is recommended for secure API communication in cloud applications?",
    options: [
      "A. HTTP",
      "B. FTP",
      "C. TLS",
      "D. SMTP"
    ],
    correctAnswer: "C",
    explanation: "TLS provides encryption and integrity for API communications, making it the recommended protocol.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the main benefit of using role-based access control (RBAC) in cloud platforms?",
    options: [
      "A. Simplifies user management",
      "B. Reduces network latency",
      "C. Increases storage capacity",
      "D. Automates patch management"
    ],
    correctAnswer: "A",
    explanation: "RBAC simplifies user management by assigning permissions based on roles rather than individuals.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the purpose of prototypes in the Agile Manifesto?",
    options: [
      "A. To quickly test and validate ideas",
      "B. To increase encryption overhead",
      "C. To configure RAID arrays",
      "D. To manage privileged users"
    ],
    correctAnswer: "A",
    explanation: "Prototypes in the Agile Manifesto are used to quickly test and validate ideas.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "You are the security manager for a software development firm. Your company is interested in using a managed cloud service provider for hosting its testing environment. Previous releases have shipped with major flaws that were not detected in the testing phase; leadership wants to avoid repeating that problem. What tool, technique, or technology might you suggest to aid in identifying programming errors?",
    options: [
      "A. Vulnerability scans",
      "B. Open source review",
      "C. Service Organization Control (SOC) audits",
      "D. Regulatory review"
    ],
    correctAnswer: "A",
    explanation: "Vulnerability scans are effective for identifying programming errors and security flaws before deployment.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "It is important to prevent which group from being present during the testing phase?",
    options: [
      "A. Senior management",
      "B. Marketing department personnel",
      "C. Finance analysts",
      "D. Programmers who worked on the software"
    ],
    correctAnswer: "D",
    explanation: "Programmers who worked on the software should not be present during testing to ensure unbiased results and effective error detection.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "When adopting an Agile development style, which aspect may be decreased?",
    options: [
      "A. Speed of development",
      "B. Thoroughness of documentation",
      "C. Availability of prototypes",
      "D. Customer collaboration"
    ],
    correctAnswer: "B",
    explanation: "Agile development often reduces the thoroughness of documentation in favor of working software.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In Agile development, whose involvement must be increased?",
    options: [
      "A. Security personnel",
      "B. Budget and finance representatives",
      "C. Members of the user group",
      "D. Senior management"
    ],
    correctAnswer: "C",
    explanation: "Agile development requires increased involvement from members of the user group to ensure the software meets user needs.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which trait typifies Agile development style?",
    options: [
      "A. Reliance on a concrete plan formulated during the Define phase",
      "B. Rigorous, repeated security testing",
      "C. Isolated programming experts for specific functional elements",
      "D. Short, iterative work periods"
    ],
    correctAnswer: "D",
    explanation: "Agile development is characterized by short, iterative work periods, allowing for rapid feedback and adaptation.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which trait is also typical of Agile development style?",
    options: [
      "A. Daily meetings",
      "B. A specific shared toolset",
      "C. Defined plans that dictate all efforts",
      "D. Addressing customer needs with an exhaustive initial contract"
    ],
    correctAnswer: "A",
    explanation: "Agile development often involves daily meetings (Scrums) to coordinate and review progress.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which API programming style should programmers concentrate on for the frontend interface when the backend is optimized for XML requests?",
    options: [
      "A. Simple Object Access Protocol (SOAP)",
      "B. Representational state transfer (REST)",
      "C. Security Assertion Markup Language (SAML)",
      "D. Data loss prevention or data leak protection (DLP)"
    ],
    correctAnswer: "A",
    explanation: "SOAP is a web service programming format that requires the use of XML, making it suitable for backends optimized for XML requests.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which is NOT addressed by STRIDE threat modeling?",
    options: [
      "A. External parties presenting false credentials",
      "B. External parties illicitly modifying information",
      "C. Participants able to deny a transaction",
      "D. Users unprepared for secure operation by lack of training"
    ],
    correctAnswer: "D",
    explanation: "STRIDE does not address user security training; it focuses on technical threats.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Deploying encryption, DLP, and DRM in the cloud environment will most likely reduce what?",
    options: [
      "A. External threats",
      "B. Internal threats",
      "C. Software vulnerabilities",
      "D. Quality of service"
    ],
    correctAnswer: "D",
    explanation: "Additional security measures can reduce productivity and quality of service due to overhead.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "For every new application created under ISO 27034 certification, what must also be created?",
    options: [
      "A. Organizational normative framework (ONF)",
      "B. Application normative framework (ANF)",
      "C. Intrinsic normative framework (INF)",
      "D. Service Organization Control (SOC) 3 report"
    ],
    correctAnswer: "B",
    explanation: "ISO 27034 compliance requires an Application Normative Framework (ANF) for every application.",
    domain: "Practice Exam 1",
    type: "multiple-choice",
    difficulty: "medium"
  },
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
  }
];

export default questions;
