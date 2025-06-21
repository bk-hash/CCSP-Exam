module.exports = [
  {
    question: "What is the purpose of a SIEM system?",
    options: [
      "A. Automate backups",
      "B. Monitor and analyze security events",
      "C. Encrypt data",
      "D. Manage IAM roles"
    ],
    correctAnswer: "B",
    explanation: "SIEM systems monitor and analyze security events for incident detection.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which tool is used for monitoring AWS cloud activities?",
    options: [
      "A. CloudWatch",
      "B. Splunk",
      "C. Azure Sentinel",
      "D. Kubernetes"
    ],
    correctAnswer: "A",
    explanation: "CloudWatch is AWS’s native tool for monitoring cloud activities and logs.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "During an incident, an S3 bucket is compromised. What should the security team do FIRST to preserve evidence?",
    options: [
      "A. Delete the bucket",
      "B. Snapshot the bucket and analyze logs",
      "C. Restore from backup",
      "D. Enable public access"
    ],
    correctAnswer: "B",
    explanation: "Snapshotting the bucket and analyzing logs preserves evidence for forensic analysis.",
    domain: "Cloud Security Operations",
    type: "scenario-based",
    difficulty: "hard"
  },
  {
    question: "Incident response includes a preparation phase.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Preparation is the first phase of incident response, involving planning and training.",
    domain: "Cloud Security Operations",
    type: "true-false",
    difficulty: "easy"
  },
  {
    question: "Match the operation to its tool: 1. Incident Response, 2. Monitoring, 3. Patching; A. CloudTrail, B. SOAR, C. Automated patch management.",
    options: [
      "1-B, 2-A, 3-C",
      "1-A, 2-B, 3-C",
      "1-C, 2-A, 3-B",
      "1-B, 2-C, 3-A"
    ],
    correctAnswer: "1-B, 2-A, 3-C",
    explanation: "SOAR aids incident response, CloudTrail monitors activities, and patch management automates updates.",
    domain: "Cloud Security Operations",
    type: "matching",
    difficulty: "medium"
  },
  {
    question: "What is the primary purpose of a cloud access security broker (CASB)?",
    options: [
      "A. To manage physical data centers",
      "B. To provide visibility and control over cloud services",
      "C. To develop application code",
      "D. To monitor network performance"
    ],
    correctAnswer: "B",
    explanation: "A CASB provides visibility and control over cloud services, ensuring compliance and security.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key component of an incident response plan?",
    options: [
      "A. Regular backups",
      "B. User training",
      "C. Defined roles and responsibilities",
      "D. Network segmentation"
    ],
    correctAnswer: "C",
    explanation: "Defined roles and responsibilities ensure effective coordination during incident response.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using automated incident response tools?",
    options: [
      "A. Increased manual intervention",
      "B. Faster response times",
      "C. Reduced need for monitoring",
      "D. Simplified compliance"
    ],
    correctAnswer: "B",
    explanation: "Automated incident response tools enable faster response times to security incidents.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a common challenge in cloud security operations?",
    options: [
      "A. Managing physical hardware",
      "B. Ensuring compliance across multiple environments",
      "C. Reducing network latency",
      "D. Simplifying application development"
    ],
    correctAnswer: "B",
    explanation: "Ensuring compliance across multiple environments can be challenging in cloud security operations.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the primary goal of a cloud security operations center (CSOC)?",
    options: [
      "A. To develop application code",
      "B. To monitor and respond to security incidents",
      "C. To manage physical data centers",
      "D. To optimize network performance"
    ],
    correctAnswer: "B",
    explanation: "A CSOC monitors and responds to security incidents to protect cloud environments.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which of the following best describes the concept of threat hunting?",
    options: [
      "A. Waiting for alerts to respond",
      "B. Proactively searching for threats in the environment",
      "C. Automating incident response",
      "D. Conducting regular backups"
    ],
    correctAnswer: "B",
    explanation: "Threat hunting involves proactively searching for threats in the environment to enhance security.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary consideration when implementing a cloud-based logging solution?",
    options: [
      "A. Reducing storage costs",
      "B. Ensuring log integrity and availability",
      "C. Managing physical servers",
      "D. Optimizing application performance"
    ],
    correctAnswer: "B",
    explanation: "Ensuring log integrity and availability is critical for effective incident response and compliance.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-native security solution?",
    options: [
      "A. Increased reliance on physical hardware",
      "B. Enhanced scalability and flexibility",
      "C. Simplified compliance with all regulations",
      "D. Reduced need for monitoring"
    ],
    correctAnswer: "B",
    explanation: "Cloud-native security solutions offer enhanced scalability and flexibility to adapt to changing threats.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when managing security in a multi-cloud environment?",
    options: [
      "A. Ensuring consistent security policies",
      "B. Reducing network latency",
      "C. Managing physical servers",
      "D. Simplifying application development"
    ],
    correctAnswer: "A",
    explanation: "Ensuring consistent security policies across multiple cloud environments is a key challenge.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a key component of a cloud security posture management (CSPM) solution?",
    options: [
      "A. Automated backups",
      "B. Continuous monitoring and assessment",
      "C. User training",
      "D. Network segmentation"
    ],
    correctAnswer: "B",
    explanation: "Continuous monitoring and assessment are essential for maintaining a strong security posture in the cloud.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the primary purpose of a cloud incident response team?",
    options: [
      "A. To develop application code",
      "B. To monitor network performance",
      "C. To respond to and manage security incidents",
      "D. To manage physical data centers"
    ],
    correctAnswer: "C",
    explanation: "A cloud incident response team is responsible for responding to and managing security incidents.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which of the following best describes the concept of security as code?",
    options: [
      "A. Implementing security measures manually",
      "B. Integrating security practices into the development process",
      "C. Relying on third-party security tools",
      "D. Conducting regular audits"
    ],
    correctAnswer: "B",
    explanation: "Security as code integrates security practices into the development process to enhance security.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using threat intelligence in cloud security operations?",
    options: [
      "A. Reducing storage costs",
      "B. Enhancing incident response capabilities",
      "C. Simplifying application development",
      "D. Managing physical servers"
    ],
    correctAnswer: "B",
    explanation: "Threat intelligence enhances incident response capabilities by providing context and insights into potential threats.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key consideration when designing a cloud security training program?",
    options: [
      "A. Focusing solely on technical skills",
      "B. Ensuring relevance to the organization's cloud environment",
      "C. Reducing training costs",
      "D. Simplifying compliance"
    ],
    correctAnswer: "B",
    explanation: "Ensuring relevance to the organization's cloud environment is critical for effective security training.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when implementing a cloud-based data loss prevention (DLP) solution?",
    options: [
      "A. Ensuring compatibility with on-premises systems",
      "B. Reducing network latency",
      "C. Managing physical servers",
      "D. Simplifying application development"
    ],
    correctAnswer: "A",
    explanation: "Ensuring compatibility with on-premises systems can be a challenge when implementing a cloud-based DLP solution.",
    domain: "Cloud Security Operations",
    type: "multiple-choice",
    difficulty: "hard"
  }
];