const questions = [
  {
    question: "The REST API is a widely used standard for communications of web-based services between clients and the servers hosting them. Which protocol does the REST API depend on?",
    options: [
      "A. HTTP",
      "B. SSH",
      "C. SAML",
      "D. XML"
    ],
    correctAnswer: "A",
    explanation: "REST APIs rely on HTTP for communication, supporting various data formats. SSH, SAML, and XML serve different purposes unrelated to REST's core protocol.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a primary goal of integrating security into the Software Development Lifecycle (SDLC) in a cloud environment?",
    options: [
      "A. Optimizing application performance",
      "B. Identifying and mitigating vulnerabilities early",
      "C. Reducing storage costs",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Integrating security into the SDLC identifies and mitigates vulnerabilities early, reducing risks in cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the role of a secure CI/CD pipeline in cloud application development?",
    options: [
      "A. Monitoring network performance",
      "B. Automating secure code deployment",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A secure CI/CD pipeline automates the integration, testing, and deployment of code, ensuring security throughout the process.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of implementing DevSecOps in a cloud application environment?",
    options: [
      "A. Reducing storage costs",
      "B. Embedding security into development processes",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "DevSecOps embeds security practices into development and operations, ensuring secure cloud application delivery.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary challenge when securing cloud-native applications?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing dynamic and ephemeral components",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing dynamic and ephemeral components, such as containers and serverless functions, is a key challenge in cloud-native applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary purpose of implementing API security in a cloud environment?",
    options: [
      "A. To optimize application performance",
      "B. To protect data exchanged between services",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "API security protects data exchanged between services by implementing authentication, encryption, and rate limiting.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with insecure APIs in a cloud application?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using OAuth for API authentication",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Using OAuth for API authentication mitigates risks by ensuring secure access control for cloud APIs.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when securing a cloud-based microservices architecture?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Implementing service-to-service authentication",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Implementing service-to-service authentication, such as mutual TLS, is critical to secure microservices in a cloud environment.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based application security testing tool?",
    options: [
      "A. Reducing storage costs",
      "B. Identifying vulnerabilities in application code",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Application security testing tools identify vulnerabilities in code, improving the security of cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when securing a serverless cloud application?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing function-level permissions",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing function-level permissions, such as least privilege, is a key challenge in serverless cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based Web Application Firewall (WAF)?",
    options: [
      "A. Monitoring network performance",
      "B. Protecting applications from common attacks",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based WAF protects applications from common attacks, such as SQL injection and XSS, by filtering malicious traffic.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of using a cloud-based static application security testing (SAST) tool?",
    options: [
      "A. Reducing storage costs",
      "B. Detecting vulnerabilities in source code",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "SAST tools detect vulnerabilities in source code during development, improving cloud application security.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary consideration when securing a cloud-based SaaS application?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Managing customer data access controls",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Managing customer data access controls is critical to secure SaaS applications, ensuring data protection and compliance.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing secure coding practices in a cloud environment?",
    options: [
      "A. To optimize application performance",
      "B. To reduce vulnerabilities in application code",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "Secure coding practices reduce vulnerabilities in application code, enhancing the security of cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing a cloud-based PaaS application?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing customer-developed code",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing customer-developed code is a key challenge in PaaS, as customers are responsible for application-level security.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based runtime application self-protection (RASP) tool?",
    options: [
      "A. Reducing storage costs",
      "B. Detecting and blocking attacks in real time",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "RASP tools detect and block attacks in real time by monitoring application behavior, enhancing cloud application security.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with insecure dependencies in a cloud application?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using software composition analysis tools",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Software composition analysis tools identify and mitigate risks from insecure dependencies in cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based application logging system?",
    options: [
      "A. To optimize application performance",
      "B. To track application activity for security",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "An application logging system tracks activity for security, enabling detection and investigation of incidents in the cloud.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based dynamic application security testing (DAST) tool?",
    options: [
      "A. Reducing storage costs",
      "B. Identifying runtime vulnerabilities",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "DAST tools identify vulnerabilities during runtime, improving the security of cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when securing a cloud-based containerized application?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing container images and orchestration",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing container images and orchestration platforms is a key challenge in containerized cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based application security policy?",
    options: [
      "A. Monitoring network performance",
      "B. Defining rules for secure application development",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "An application security policy defines rules for secure development and deployment of cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing a cloud-based application authentication system?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Implementing multifactor authentication",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Implementing multifactor authentication enhances the security of cloud-based application authentication systems.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based API gateway for application security?",
    options: [
      "A. Reducing storage costs",
      "B. Centralizing API security controls",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "An API gateway centralizes security controls, such as authentication and rate limiting, for cloud APIs.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based application vulnerability management program?",
    options: [
      "A. To optimize application performance",
      "B. To identify and remediate application weaknesses",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A vulnerability management program identifies and remediates weaknesses in cloud applications, enhancing security.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing a cloud-based hybrid application?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring consistent security across environments",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring consistent security across on-premises and cloud environments is a key challenge for hybrid applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based application performance monitoring (APM) tool for security?",
    options: [
      "A. Reducing storage costs",
      "B. Detecting anomalous application behavior",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "APM tools detect anomalous behavior, which can indicate security issues in cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with cloud-based application misconfigurations?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using automated configuration scanning tools",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Automated configuration scanning tools detect and remediate misconfigurations in cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based application encryption strategy?",
    options: [
      "A. To optimize application performance",
      "B. To protect sensitive data in applications",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "An application encryption strategy protects sensitive data in cloud applications, ensuring confidentiality and integrity.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based secure software supply chain?",
    options: [
      "A. Reducing storage costs",
      "B. Ensuring integrity of application components",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A secure software supply chain ensures the integrity of application components, reducing risks from compromised dependencies.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when securing a cloud-based multi-tenant application?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring data isolation between tenants",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring data isolation between tenants is a key challenge in securing multi-tenant cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based application security training program?",
    options: [
      "A. Monitoring network performance",
      "B. Educating developers on secure coding practices",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "An application security training program educates developers on secure coding practices, improving cloud application security.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing a cloud-based application access control system?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Applying least privilege principles",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Applying least privilege principles ensures secure access control in cloud-based applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based application security orchestration tool?",
    options: [
      "A. Reducing storage costs",
      "B. Automating security response workflows",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Security orchestration tools automate response workflows, improving efficiency in handling cloud application security incidents.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based application penetration testing program?",
    options: [
      "A. To optimize application performance",
      "B. To identify vulnerabilities in applications",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A penetration testing program identifies vulnerabilities in cloud applications, enabling proactive remediation.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing a cloud-based IaaS application?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing customer-managed software",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing customer-managed software is a key challenge in IaaS, as customers are responsible for application security.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based application dependency scanning tool?",
    options: [
      "A. Reducing storage costs",
      "B. Identifying vulnerabilities in third-party libraries",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Dependency scanning tools identify vulnerabilities in third-party libraries used in cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with cloud-based application data exposure?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Encrypting sensitive application data",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Encrypting sensitive application data mitigates risks of data exposure in cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based application security monitoring system?",
    options: [
      "A. To optimize application performance",
      "B. To detect and respond to security incidents",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "An application security monitoring system detects and responds to security incidents in cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based application threat modeling tool?",
    options: [
      "A. Reducing storage costs",
      "B. Identifying potential security threats early",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Threat modeling tools identify potential security threats early in the development of cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when securing a cloud-based application in a multi-cloud environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring consistent security controls",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring consistent security controls across multiple cloud providers is a key challenge for applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based application security governance framework?",
    options: [
      "A. Monitoring network performance",
      "B. Establishing policies for secure application development",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A security governance framework establishes policies for secure application development in the cloud.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing a cloud-based application backup strategy?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring application data recovery",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring application data recovery is critical for a cloud-based application backup strategy.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based application compliance monitoring tool?",
    options: [
      "A. Reducing storage costs",
      "B. Ensuring adherence to regulatory requirements",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Compliance monitoring tools ensure cloud applications adhere to regulatory requirements, such as GDPR or HIPAA.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based application secure configuration management system?",
    options: [
      "A. To optimize application performance",
      "B. To maintain secure application settings",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A secure configuration management system maintains secure settings for cloud applications, reducing misconfiguration risks.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing a cloud-based application API?",
    options: [
      "A. Managing physical server hardware",
      "B. Preventing unauthorized API access",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Preventing unauthorized API access is a key challenge in securing cloud-based application APIs.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based application security incident response plan?",
    options: [
      "A. Reducing storage costs",
      "B. Rapid mitigation of application security incidents",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "An incident response plan enables rapid mitigation of security incidents in cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with cloud-based application session management?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using secure session tokens and timeouts",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Using secure session tokens and timeouts mitigates risks in cloud-based application session management.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based application security audit program?",
    options: [
      "A. To optimize application performance",
      "B. To assess compliance with security policies",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A security audit program assesses compliance with security policies for cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based application encryption key management system?",
    options: [
      "A. Reducing storage costs",
      "B. Simplifying secure key management",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "An encryption key management system simplifies secure key management for cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when securing a cloud-based application in a global environment?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Complying with regional data regulations",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Complying with regional data regulations, such as GDPR, is critical when securing global cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  }
];
export default questions;