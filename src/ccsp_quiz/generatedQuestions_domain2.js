module.exports = [
  {
    question: "Which encryption standard is commonly used for data at rest in cloud environments?",
    options: ["A. AES-256", "B. RSA-2048", "C. DES", "D. MD5"],
    correctAnswer: "A",
    explanation: "AES-256 is the standard for encrypting data at rest due to its strength and compliance with regulations.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is the BEST method to ensure HIPAA compliance for encryption keys in a public cloud?",
    options: [
      "A. Provider-managed keys",
      "B. Customer-managed keys with HSM",
      "C. No encryption",
      "D. Shared keys with provider",
    ],
    correctAnswer: "B",
    explanation: "Customer-managed keys with HSM ensure control over keys, critical for HIPAA compliance.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "A financial institution uses a SaaS platform for customer data. An audit reveals data is stored outside the EU, violating GDPR. What should the CISO prioritize?",
    options: [
      "A. Encrypt all data",
      "B. Implement DLP",
      "C. Sign DPAs with SCCs",
      "D. Move to a private cloud",
    ],
    correctAnswer: "C",
    explanation: "GDPR requires Data Processing Agreements (DPAs) with Standard Contractual Clauses (SCCs) for cross-border data transfers.",
    domain: "Cloud Data Security",
    type: "scenario-based",
    difficulty: "hard"
  },
  {
    question: "Data masking is used to protect sensitive data in production environments.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Data masking is used in non-production environments to protect sensitive data during testing or development.",
    domain: "Cloud Data Security",
    type: "true-false",
    difficulty: "easy"
  },
  {
    question: "Match the data protection technique to its purpose: 1. Encryption, 2. Tokenization, 3. DLP; A. Monitor data exfiltration, B. Secure data at rest, C. Replace sensitive data with tokens.",
    options: [
      "1-B, 2-C, 3-A",
      "1-A, 2-B, 3-C",
      "1-C, 2-A, 3-B",
      "1-B, 2-A, 3-C",
    ],
    correctAnswer: "1-B, 2-C, 3-A",
    explanation: "Encryption secures data at rest, tokenization replaces sensitive data, and DLP monitors exfiltration.",
    domain: "Cloud Data Security",
    type: "matching",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key consideration when implementing data encryption in the cloud?",
    options: [
      "A. Key management practices",
      "B. Network bandwidth availability",
      "C. User training programs",
      "D. Application performance metrics"
    ],
    correctAnswer: "A",
    explanation: "Key management practices are crucial for ensuring the security and accessibility of encrypted data in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the primary purpose of data loss prevention (DLP) solutions?",
    options: [
      "A. To encrypt data at rest",
      "B. To monitor and control data transfers",
      "C. To manage user access",
      "D. To perform regular backups"
    ],
    correctAnswer: "B",
    explanation: "DLP solutions monitor and control data transfers to prevent unauthorized access and data breaches.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a common method for protecting sensitive data in cloud applications?",
    options: [
      "A. Data masking",
      "B. Public access",
      "C. Unencrypted storage",
      "D. Open APIs"
    ],
    correctAnswer: "A",
    explanation: "Data masking is a technique used to protect sensitive data by obfuscating it in non-production environments.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a primary challenge in ensuring data security in multi-cloud environments?",
    options: [
      "A. Managing multiple vendor contracts",
      "B. Ensuring consistent security policies",
      "C. Reducing operational costs",
      "D. Optimizing application performance"
    ],
    correctAnswer: "B",
    explanation: "Ensuring consistent security policies across multiple cloud providers is a significant challenge in multi-cloud environments.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a key benefit of using encryption for data in transit?",
    options: [
      "A. Improved application performance",
      "B. Enhanced data confidentiality",
      "C. Simplified user access",
      "D. Reduced storage costs"
    ],
    correctAnswer: "B",
    explanation: "Encryption for data in transit enhances data confidentiality by protecting it from interception during transmission.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "True or False: The use of strong passwords is sufficient to protect sensitive data in cloud environments.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "While strong passwords are important, they are not sufficient alone; additional security measures like MFA are necessary.",
    domain: "Cloud Data Security",
    type: "true-false",
    difficulty: "easy"
  },
  {
    question: "What is a primary consideration when selecting a cloud provider for sensitive data storage?",
    options: [
      "A. Provider's physical location",
      "B. Compliance with relevant regulations",
      "C. Cost of services",
      "D. Provider's marketing strategy"
    ],
    correctAnswer: "B",
    explanation: "Compliance with relevant regulations is crucial when selecting a cloud provider for sensitive data storage.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a common technique for ensuring data integrity in cloud storage?",
    options: [
      "A. Data encryption",
      "B. Regular backups",
      "C. Access control lists",
      "D. Data deduplication"
    ],
    correctAnswer: "B",
    explanation: "Regular backups are essential for ensuring data integrity and recovery in case of data loss or corruption.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Match the following data protection techniques to their purposes: 1. Tokenization, 2. Encryption, 3. Data Masking; A. Protect sensitive data in non-production environments, B. Replace sensitive data with non-sensitive equivalents, C. Secure data at rest and in transit.",
    options: [
      "1-B, 2-C, 3-A",
      "1-A, 2-B, 3-C",
      "1-C, 2-A, 3-B",
      "1-B, 2-A, 3-C"
    ],
    correctAnswer: "1-B, 2-C, 3-A",
    explanation: "Tokenization replaces sensitive data, encryption secures data, and data masking protects data in non-production environments.",
    domain: "Cloud Data Security",
    type: "matching",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using a cloud access security broker (CASB)?",
    options: [
      "A. Simplified user access management",
      "B. Enhanced visibility and control over cloud services",
      "C. Reduced operational costs",
      "D. Improved application performance"
    ],
    correctAnswer: "B",
    explanation: "A CASB provides enhanced visibility and control over cloud services, helping organizations enforce security policies.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge in implementing encryption in cloud environments?",
    options: [
      "A. Managing encryption keys",
      "B. Reducing storage costs",
      "C. Optimizing application performance",
      "D. Ensuring user access"
    ],
    correctAnswer: "A",
    explanation: "Managing encryption keys is a significant challenge in cloud environments, as it is critical for data security.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "True or False: All cloud service providers offer the same level of data security.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Data security levels vary among cloud service providers, making it essential to evaluate their security measures.",
    domain: "Cloud Data Security",
    type: "true-false",
    difficulty: "easy"
  }
];