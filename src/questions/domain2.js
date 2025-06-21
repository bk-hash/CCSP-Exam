const questions = [
  {
    question: "What is the primary purpose of implementing data encryption in a cloud environment?",
    options: [
      "A. To optimize application performance",
      "B. To protect data confidentiality and integrity",
      "C. To reduce storage costs",
      "D. To simplify user access management"
    ],
    correctAnswer: "B",
    explanation: "Data encryption in a cloud environment ensures confidentiality and integrity by protecting data from unauthorized access and tampering.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which of the following best describes the data lifecycle in a cloud environment?",
    options: [
      "A. Create, store, use, share, archive, destroy",
      "B. Encrypt, store, backup, delete",
      "C. Collect, process, analyze, discard",
      "D. Generate, transmit, store, monitor"
    ],
    correctAnswer: "A",
    explanation: "The data lifecycle in a cloud environment includes creating, storing, using, sharing, archiving, and destroying data, ensuring proper management at each stage.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of using a Data Loss Prevention (DLP) solution in a cloud environment?",
    options: [
      "A. Reducing network latency",
      "B. Preventing unauthorized data exfiltration",
      "C. Optimizing application performance",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "DLP solutions prevent unauthorized data exfiltration by monitoring and controlling sensitive data movement in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which encryption method is most suitable for protecting data at rest in a cloud storage service?",
    options: [
      "A. SSL/TLS",
      "B. AES-256",
      "C. IPSec",
      "D. PGP"
    ],
    correctAnswer: "B",
    explanation: "AES-256 is a symmetric encryption standard commonly used for securing data at rest in cloud storage. SSL/TLS and IPSec are for data in transit, and PGP is for email or file encryption.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary consideration when implementing data classification in a cloud environment?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Categorizing data based on sensitivity",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Data classification categorizes data based on sensitivity (e.g., public, confidential) to apply appropriate security controls in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing data in a multi-tenant cloud environment?",
    options: [
      "A. Ensuring physical server isolation",
      "B. Preventing data leakage between tenants",
      "C. Reducing storage costs",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Preventing data leakage between tenants is critical in multi-tenant environments, requiring strong logical separation and access controls.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is the primary purpose of implementing data tokenization in a cloud environment?",
    options: [
      "A. To enhance application performance",
      "B. To replace sensitive data with non-sensitive tokens",
      "C. To reduce network bandwidth usage",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "Data tokenization replaces sensitive data with non-sensitive tokens, reducing the risk of data exposure while maintaining usability.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the role of a Key Management Service (KMS) in a cloud environment?",
    options: [
      "A. Monitoring network performance",
      "B. Managing encryption keys securely",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A KMS securely generates, stores, and manages encryption keys used for data protection in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of implementing data masking in a cloud-based application?",
    options: [
      "A. Reducing storage costs",
      "B. Protecting sensitive data in non-production environments",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Data masking protects sensitive data in non-production environments (e.g., testing) by obfuscating it while maintaining usability.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary consideration when implementing data retention policies in the cloud?",
    options: [
      "A. Optimizing application performance",
      "B. Compliance with regulatory requirements",
      "C. Managing physical server hardware",
      "D. Reducing network latency"
    ],
    correctAnswer: "B",
    explanation: "Data retention policies must comply with regulatory requirements, such as GDPR or HIPAA, to ensure proper data storage and deletion.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when implementing data encryption in a serverless cloud architecture?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring secure key management in ephemeral environments",
      "C. Reducing storage costs",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Secure key management in ephemeral serverless environments is challenging due to their short-lived nature.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best mitigates the risk of data breaches in a cloud environment?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Encrypting data at rest and in transit",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Encrypting data at rest and in transit mitigates data breach risks by ensuring data remains protected even if accessed.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of using a cloud-based data discovery tool?",
    options: [
      "A. Reducing storage costs",
      "B. Identifying sensitive data across cloud services",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Data discovery tools identify sensitive data across cloud services, enabling proper classification and protection.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key consideration when implementing data residency controls in the cloud?",
    options: [
      "A. Optimizing application performance",
      "B. Ensuring data is stored in compliant regions",
      "C. Managing physical server hardware",
      "D. Reducing network latency"
    ],
    correctAnswer: "B",
    explanation: "Data residency controls ensure data is stored in regions compliant with local regulations, such as GDPR’s EU storage requirements.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the primary purpose of implementing a data backup strategy in a cloud environment?",
    options: [
      "A. To optimize application performance",
      "B. To ensure data availability and recovery",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A data backup strategy ensures data availability and recovery in case of loss or corruption in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing data in a hybrid cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring consistent security controls across environments",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring consistent security controls across on-premises and cloud environments is a key challenge in hybrid cloud setups.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based data encryption gateway?",
    options: [
      "A. Reducing storage costs",
      "B. Securing data in transit to and from the cloud",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A data encryption gateway secures data in transit to and from the cloud, protecting it from interception.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the role of data anonymization in a cloud environment?",
    options: [
      "A. Monitoring network performance",
      "B. Removing identifiable information from data",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "Data anonymization removes identifiable information, reducing privacy risks while allowing data use for analytics.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing data access controls in a cloud environment?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Applying least privilege principles",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Applying least privilege principles ensures users have only the access needed, enhancing data security in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary challenge when implementing data encryption in a multi-cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring interoperability of encryption standards",
      "C. Reducing storage costs",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring interoperability of encryption standards across multiple cloud providers is a key challenge.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based data security posture management (DSPM) tool?",
    options: [
      "A. Reducing storage costs",
      "B. Continuous monitoring of data security configurations",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "DSPM tools continuously monitor data security configurations, identifying and mitigating risks in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with data in transit in a cloud environment?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using TLS for secure data transmission",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "TLS (Transport Layer Security) secures data in transit, protecting it from interception during transmission.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based data classification policy?",
    options: [
      "A. To optimize application performance",
      "B. To ensure consistent data protection measures",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A data classification policy ensures consistent protection measures by categorizing data based on sensitivity.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based data encryption service?",
    options: [
      "A. Reducing network latency",
      "B. Simplifying key management and compliance",
      "C. Optimizing application performance",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Cloud-based encryption services simplify key management and ensure compliance with regulatory requirements.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when implementing data lifecycle management in a cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring compliance across all lifecycle stages",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring compliance across all data lifecycle stages (create, store, use, share, archive, destroy) is a key challenge.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a key consideration when implementing data encryption for a SaaS application?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Managing customer-controlled encryption keys",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Managing customer-controlled encryption keys is critical in SaaS to ensure data security and compliance.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using a cloud-based data governance framework?",
    options: [
      "A. Reducing storage costs",
      "B. Ensuring consistent data security policies",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A data governance framework ensures consistent data security policies across cloud environments.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the role of data integrity controls in a cloud environment?",
    options: [
      "A. Monitoring network performance",
      "B. Ensuring data remains unaltered and accurate",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "Data integrity controls, such as checksums or hashing, ensure data remains unaltered and accurate in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing data archiving in a cloud environment?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring long-term data integrity and accessibility",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring long-term data integrity and accessibility is critical for effective data archiving in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary challenge when securing data in a public cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring data isolation in a shared environment",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring data isolation in a shared public cloud environment is a key challenge to prevent unauthorized access.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based data security analytics platform?",
    options: [
      "A. Reducing storage costs",
      "B. Detecting anomalous data access patterns",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Data security analytics platforms detect anomalous access patterns, helping identify potential threats in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with data stored in a cloud database?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Encrypting data at rest and in transit",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Encrypting data at rest and in transit mitigates risks by protecting data in cloud databases from unauthorized access.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based data audit trail?",
    options: [
      "A. To optimize application performance",
      "B. To track data access and modifications",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A data audit trail tracks data access and modifications, ensuring accountability and compliance in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based data encryption key rotation policy?",
    options: [
      "A. Reducing network latency",
      "B. Enhancing security by limiting key exposure",
      "C. Optimizing application performance",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Key rotation limits key exposure, enhancing security by reducing the risk of compromised keys.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when implementing data security in a containerized cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing data in ephemeral containers",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing data in ephemeral containers is challenging due to their short-lived nature and dynamic provisioning.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a key consideration when implementing data deletion policies in a cloud environment?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring secure and complete data erasure",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring secure and complete data erasure is critical to comply with regulations and prevent data recovery.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using a cloud-based data access monitoring system?",
    options: [
      "A. Reducing storage costs",
      "B. Real-time detection of unauthorized access",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Data access monitoring systems detect unauthorized access in real time, enhancing cloud data security.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the role of data obfuscation in a cloud environment?",
    options: [
      "A. Monitoring network performance",
      "B. Protecting sensitive data by altering its format",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "Data obfuscation protects sensitive data by altering its format, making it unreadable without affecting usability.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing data security for a PaaS application?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Securing customer-managed data and configurations",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Securing customer-managed data and configurations is critical in PaaS, as the provider manages the platform.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary challenge when securing data in a global cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Complying with diverse data protection regulations",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Complying with diverse data protection regulations, such as GDPR or CCPA, is a key challenge in global cloud environments.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based data security incident response plan?",
    options: [
      "A. Reducing storage costs",
      "B. Rapid identification and mitigation of data breaches",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A data security incident response plan enables rapid identification and mitigation of data breaches in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with data stored in a cloud object storage service?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Enabling server-side encryption",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Enabling server-side encryption protects data stored in cloud object storage from unauthorized access.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based data security policy?",
    options: [
      "A. To optimize application performance",
      "B. To establish guidelines for data protection",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A data security policy establishes guidelines for protecting data in the cloud, ensuring compliance and security.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based data classification tool?",
    options: [
      "A. Reducing network latency",
      "B. Automating identification of sensitive data",
      "C. Optimizing application performance",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Data classification tools automate the identification of sensitive data, streamlining protection efforts in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when implementing data security in a serverless cloud architecture?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring data protection in event-driven functions",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring data protection in event-driven serverless functions is challenging due to their transient nature.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a key consideration when implementing data encryption for a cloud-based database?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Balancing performance and security requirements",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Balancing performance and security is critical when encrypting cloud-based databases to avoid impacting usability.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using a cloud-based data security monitoring system?",
    options: [
      "A. Reducing storage costs",
      "B. Real-time visibility into data security events",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Data security monitoring systems provide real-time visibility into security events, enabling rapid response to threats.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the role of data encryption at rest in a cloud environment?",
    options: [
      "A. Monitoring network performance",
      "B. Protecting stored data from unauthorized access",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "Encryption at rest protects stored data from unauthorized access, ensuring security in cloud storage.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing data security for a multi-cloud strategy?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring consistent encryption across providers",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring consistent encryption across multiple cloud providers is critical for a secure multi-cloud strategy.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  }
];
export default questions;