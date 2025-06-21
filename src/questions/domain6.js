const questions = [
  {
    question: "What is a primary goal of compliance in a cloud environment?",
    options: [
      "A. Optimizing application performance",
      "B. Ensuring adherence to regulatory requirements",
      "C. Reducing storage costs",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Compliance in a cloud environment ensures adherence to regulatory requirements, such as GDPR or HIPAA, to avoid legal and financial penalties.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which regulation mandates strict data protection for personal data of EU residents in a cloud environment?",
    options: [
      "A. HIPAA",
      "B. GDPR",
      "C. PCI DSS",
      "D. SOX"
    ],
    correctAnswer: "B",
    explanation: "The General Data Protection Regulation (GDPR) mandates strict data protection for personal data of EU residents, impacting cloud operations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of conducting a risk assessment in a cloud environment?",
    options: [
      "A. Reducing storage costs",
      "B. Identifying and prioritizing security risks",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A risk assessment identifies and prioritizes security risks in a cloud environment, enabling effective mitigation strategies.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary challenge in achieving compliance in a multi-cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Aligning with diverse regulatory requirements",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Aligning with diverse regulatory requirements across multiple cloud providers is a key challenge in achieving compliance.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based audit program?",
    options: [
      "A. To optimize application performance",
      "B. To verify compliance with security standards",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based audit program verifies compliance with security standards and regulatory requirements.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates legal risks associated with data sovereignty in a cloud environment?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Ensuring data residency in compliant regions",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Ensuring data residency in compliant regions mitigates legal risks associated with data sovereignty regulations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when managing third-party risks in a cloud environment?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Assessing vendor compliance with security standards",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Assessing vendor compliance with security standards is critical to manage third-party risks in a cloud environment.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based compliance management tool?",
    options: [
      "A. Reducing storage costs",
      "B. Streamlining regulatory adherence processes",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A compliance management tool streamlines regulatory adherence processes, ensuring efficient cloud compliance.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when addressing e-discovery requirements in a cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring timely data retrieval across distributed systems",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring timely data retrieval across distributed cloud systems is a key challenge for e-discovery compliance.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based data protection impact assessment (DPIA)?",
    options: [
      "A. Monitoring application performance",
      "B. Evaluating risks to personal data processing",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A DPIA evaluates risks to personal data processing, ensuring compliance with regulations like GDPR.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of implementing a cloud-based governance framework?",
    options: [
      "A. Reducing storage costs",
      "B. Establishing policies for compliance and risk management",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A governance framework establishes policies for compliance and risk management in a cloud environment.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary consideration when ensuring compliance with PCI DSS in a cloud environment?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Securing cardholder data environments",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Securing cardholder data environments is critical for compliance with PCI DSS in a cloud environment.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based risk management program?",
    options: [
      "A. To optimize application performance",
      "B. To identify and mitigate potential threats",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A risk management program identifies and mitigates potential threats to ensure secure cloud operations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when ensuring compliance in a global cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Navigating diverse international regulations",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Navigating diverse international regulations is a key challenge in ensuring compliance in a global cloud environment.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based audit trail system?",
    options: [
      "A. Reducing storage costs",
      "B. Providing evidence for compliance audits",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "An audit trail system provides evidence for compliance audits, supporting regulatory adherence in the cloud.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with non-compliance in a cloud environment?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Conducting regular compliance assessments",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Conducting regular compliance assessments mitigates risks of non-compliance by identifying and addressing gaps.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based data retention policy?",
    options: [
      "A. To optimize application performance",
      "B. To comply with legal and regulatory requirements",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A data retention policy ensures compliance with legal and regulatory requirements for data storage and deletion.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based risk assessment tool?",
    options: [
      "A. Reducing storage costs",
      "B. Automating risk identification and prioritization",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A risk assessment tool automates risk identification and prioritization, improving efficiency in cloud compliance.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when managing legal risks in a cloud-based SaaS environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring provider compliance with regulations",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring provider compliance with regulations is a key challenge in managing legal risks in a SaaS environment.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based compliance officer?",
    options: [
      "A. Monitoring application performance",
      "B. Overseeing adherence to regulatory requirements",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A compliance officer oversees adherence to regulatory requirements, ensuring cloud operations meet legal standards.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing a cloud-based data breach notification policy?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring timely reporting to authorities",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring timely reporting to authorities is critical for compliance with data breach notification requirements.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based legal compliance framework?",
    options: [
      "A. Reducing storage costs",
      "B. Ensuring consistent regulatory adherence",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A legal compliance framework ensures consistent regulatory adherence across cloud operations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based vendor risk management program?",
    options: [
      "A. To optimize application performance",
      "B. To assess and mitigate third-party risks",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A vendor risk management program assesses and mitigates risks associated with third-party providers in the cloud.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when ensuring compliance with HIPAA in a cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Protecting electronic protected health information (ePHI)",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Protecting ePHI is a key challenge for HIPAA compliance in a cloud environment, requiring stringent security controls.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based compliance reporting tool?",
    options: [
      "A. Reducing storage costs",
      "B. Generating evidence for regulatory audits",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A compliance reporting tool generates evidence for regulatory audits, supporting cloud compliance efforts.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with cloud-based data transfers across borders?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using standard contractual clauses",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Standard contractual clauses mitigate risks by ensuring compliance with cross-border data transfer regulations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based privacy policy?",
    options: [
      "A. To optimize application performance",
      "B. To outline data handling practices",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A privacy policy outlines data handling practices, ensuring transparency and compliance with privacy regulations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based regulatory tracking tool?",
    options: [
      "A. Reducing storage costs",
      "B. Monitoring changes in compliance requirements",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A regulatory tracking tool monitors changes in compliance requirements, ensuring cloud operations remain compliant.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when managing compliance in a cloud-based IaaS environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring customer-managed compliance controls",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring customer-managed compliance controls is a key challenge in IaaS, as customers are responsible for significant compliance aspects.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based risk register?",
    options: [
      "A. Monitoring application performance",
      "B. Documenting and tracking identified risks",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A risk register documents and tracks identified risks, supporting risk management in a cloud environment.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing a cloud-based compliance training program?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring staff understand regulatory requirements",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring staff understand regulatory requirements is critical for a cloud-based compliance training program.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based legal risk assessment tool?",
    options: [
      "A. Reducing storage costs",
      "B. Identifying potential legal exposures",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A legal risk assessment tool identifies potential legal exposures, supporting compliance in cloud operations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based incident reporting policy?",
    options: [
      "A. To optimize application performance",
      "B. To ensure consistent reporting of security incidents",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "An incident reporting policy ensures consistent reporting of security incidents, supporting compliance and risk management.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when managing compliance in a cloud-based PaaS environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring customer-managed application compliance",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring customer-managed application compliance is a key challenge in PaaS, as customers control application-level compliance.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based compliance automation tool?",
    options: [
      "A. Reducing storage costs",
      "B. Streamlining compliance processes",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A compliance automation tool streamlines compliance processes, reducing manual effort in cloud operations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with cloud-based vendor lock-in?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Negotiating exit strategies in contracts",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Negotiating exit strategies in contracts mitigates risks associated with vendor lock-in in a cloud environment.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based data classification policy for compliance?",
    options: [
      "A. To optimize application performance",
      "B. To ensure proper handling of sensitive data",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A data classification policy ensures proper handling of sensitive data, supporting compliance with regulatory requirements.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based compliance dashboard?",
    options: [
      "A. Reducing storage costs",
      "B. Providing real-time compliance insights",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A compliance dashboard provides real-time insights into compliance status, supporting effective cloud management.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when managing compliance in a cloud-based hybrid environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring consistent compliance across environments",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring consistent compliance across on-premises and cloud environments is a key challenge in hybrid cloud setups.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based compliance audit team?",
    options: [
      "A. Monitoring application performance",
      "B. Conducting assessments for regulatory adherence",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A compliance audit team conducts assessments to ensure regulatory adherence in cloud operations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing a cloud-based risk mitigation strategy?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Prioritizing risks based on impact",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Prioritizing risks based on impact is critical for an effective cloud-based risk mitigation strategy.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based regulatory compliance tool?",
    options: [
      "A. Reducing storage costs",
      "B. Simplifying adherence to multiple regulations",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A regulatory compliance tool simplifies adherence to multiple regulations, streamlining cloud compliance efforts.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based legal risk management framework?",
    options: [
      "A. To optimize application performance",
      "B. To address potential legal exposures",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A legal risk management framework addresses potential legal exposures, ensuring compliance in cloud operations.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when managing compliance in a cloud-based multi-tenant environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring tenant-specific compliance requirements",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring tenant-specific compliance requirements is a key challenge in multi-tenant cloud environments.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based compliance incident response plan?",
    options: [
      "A. Reducing storage costs",
      "B. Rapidly addressing compliance violations",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A compliance incident response plan rapidly addresses compliance violations, minimizing legal and regulatory risks.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with cloud-based intellectual property protection?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Establishing clear contractual agreements",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Establishing clear contractual agreements mitigates risks associated with intellectual property protection in the cloud.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based compliance monitoring system?",
    options: [
      "A. To optimize application performance",
      "B. To track adherence to regulatory requirements",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A compliance monitoring system tracks adherence to regulatory requirements, ensuring ongoing compliance in the cloud.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based risk mitigation tool?",
    options: [
      "A. Reducing storage costs",
      "B. Automating risk response processes",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A risk mitigation tool automates risk response processes, improving efficiency in cloud compliance and risk management.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when ensuring compliance with SOX in a cloud environment?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Maintaining accurate financial reporting controls",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Maintaining accurate financial reporting controls is critical for SOX compliance in a cloud environment.",
    domain: "Legal, Risk, and Compliance",
    type: "multiple-choice",
    difficulty: "medium"
  }
];
export default questions;