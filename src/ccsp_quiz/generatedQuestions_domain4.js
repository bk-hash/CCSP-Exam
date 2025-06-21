module.exports = [
  {
    question: "What does SAST stand for?",
    options: [
      "A. Static Application Security Testing",
      "B. Secure Application Storage Testing",
      "C. System Application Security Testing",
      "D. Static Authentication Security Testing"
    ],
    correctAnswer: "A",
    explanation: "SAST analyzes source code for vulnerabilities during development.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which protocol is BEST for securing API authentication in a serverless application?",
    options: [
      "A. SAML",
      "B. OAuth 2.0",
      "C. FTP",
      "D. SNMP"
    ],
    correctAnswer: "B",
    explanation: "OAuth 2.0 is widely used for secure API authentication in serverless architectures.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "A serverless application on AWS Lambda suffers a data breach due to misconfigured IAM roles. What should the developer prioritize to remediate this?",
    options: [
      "A. Enable MFA for all users",
      "B. Implement least privilege IAM policies",
      "C. Deploy a WAF",
      "D. Use a public API gateway"
    ],
    correctAnswer: "B",
    explanation: "Least privilege IAM policies restrict access, preventing unauthorized actions in serverless apps.",
    domain: "Cloud Application Security",
    type: "scenario-based",
    difficulty: "hard"
  },
  {
    question: "OWASP Top 10 includes risks like broken authentication.",
    options: [
      "True",
      "False"
    ],
    correctAnswer: "True",
    explanation: "Broken authentication is a key risk in the OWASP Top 10, requiring secure coding practices.",
    domain: "Cloud Application Security",
    type: "true-false",
    difficulty: "easy"
  },
  {
    question: "Match the security practice to its purpose: 1. Input Validation, 2. Code Review, 3. Penetration Testing; A. Identify runtime vulnerabilities, B. Prevent injection attacks, C. Detect coding errors.",
    options: [
      "1-B, 2-C, 3-A",
      "1-A, 2-B, 3-C",
      "1-C, 2-A, 3-B",
      "1-B, 2-A, 3-C"
    ],
    correctAnswer: "1-B, 2-C, 3-A",
    explanation: "Input validation prevents injection, code review detects errors, and penetration testing identifies runtime issues.",
    domain: "Cloud Application Security",
    type: "matching",
    difficulty: "medium"
  },
  {
    question: "What is the primary purpose of a web application firewall (WAF)?",
    options: [
      "A. To monitor network traffic",
      "B. To filter and monitor HTTP traffic to and from a web application",
      "C. To encrypt data in transit",
      "D. To manage user access"
    ],
    correctAnswer: "B",
    explanation: "A WAF filters and monitors HTTP traffic to protect web applications from attacks.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a common vulnerability in web applications?",
    options: [
      "A. SQL Injection",
      "B. Cross-Site Scripting (XSS)",
      "C. Cross-Site Request Forgery (CSRF)",
      "D. All of the above"
    ],
    correctAnswer: "D",
    explanation: "SQL Injection, XSS, and CSRF are common vulnerabilities that can be exploited in web applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a primary benefit of using a secure coding framework?",
    options: [
      "A. It eliminates the need for testing",
      "B. It provides guidelines to prevent common vulnerabilities",
      "C. It guarantees application security",
      "D. It simplifies application deployment"
    ],
    correctAnswer: "B",
    explanation: "Secure coding frameworks provide guidelines to help developers prevent common vulnerabilities.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key principle of secure software development?",
    options: [
      "A. Security is an afterthought",
      "B. Security should be integrated throughout the development lifecycle",
      "C. Only the final product needs to be secure",
      "D. Security is the responsibility of the operations team"
    ],
    correctAnswer: "B",
    explanation: "Security should be integrated throughout the development lifecycle to ensure robust protection.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the purpose of a security audit in application development?",
    options: [
      "A. To ensure compliance with coding standards",
      "B. To identify vulnerabilities and assess security posture",
      "C. To improve application performance",
      "D. To manage user access"
    ],
    correctAnswer: "B",
    explanation: "A security audit identifies vulnerabilities and assesses the security posture of an application.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a common method for securing APIs?",
    options: [
      "A. Using API keys",
      "B. Implementing rate limiting",
      "C. Using OAuth 2.0",
      "D. All of the above"
    ],
    correctAnswer: "D",
    explanation: "Using API keys, implementing rate limiting, and using OAuth 2.0 are common methods for securing APIs.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when implementing security in a DevOps environment?",
    options: [
      "A. Ensuring compliance with regulations",
      "B. Integrating security into the CI/CD pipeline",
      "C. Managing user access",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Integrating security into the CI/CD pipeline is a primary challenge in a DevOps environment.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is the main goal of threat modeling in application security?",
    options: [
      "A. To identify potential threats and vulnerabilities",
      "B. To improve application performance",
      "C. To manage user access",
      "D. To ensure compliance with regulations"
    ],
    correctAnswer: "A",
    explanation: "Threat modeling aims to identify potential threats and vulnerabilities in an application.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using automated security testing tools?",
    options: [
      "A. They eliminate the need for manual testing",
      "B. They can identify vulnerabilities more quickly",
      "C. They guarantee application security",
      "D. They simplify application deployment"
    ],
    correctAnswer: "B",
    explanation: "Automated security testing tools can identify vulnerabilities more quickly than manual testing.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary consideration when securing a cloud-based application?",
    options: [
      "A. Managing physical server hardware",
      "B. Implementing strong authentication and access controls",
      "C. Reducing network bandwidth usage",
      "D. Optimizing application performance"
    ],
    correctAnswer: "B",
    explanation: "Implementing strong authentication and access controls is critical for securing cloud-based applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a common security vulnerability in web applications?",
    options: [
      "A. SQL Injection",
      "B. Cross-Site Scripting (XSS)",
      "C. Cross-Site Request Forgery (CSRF)",
      "D. All of the above"
    ],
    correctAnswer: "D",
    explanation: "SQL Injection, XSS, and CSRF are common vulnerabilities that can be exploited in web applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is the primary purpose of a security policy in application development?",
    options: [
      "A. To define security requirements and guidelines",
      "B. To manage user access",
      "C. To monitor network performance",
      "D. To develop application code"
    ],
    correctAnswer: "A",
    explanation: "A security policy defines security requirements and guidelines for application development.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using a secure coding framework?",
    options: [
      "A. It eliminates the need for testing",
      "B. It provides guidelines to prevent common vulnerabilities",
      "C. It guarantees application security",
      "D. It simplifies application deployment"
    ],
    correctAnswer: "B",
    explanation: "Secure coding frameworks provide guidelines to help developers prevent common vulnerabilities.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key principle of secure software development?",
    options: [
      "A. Security is an afterthought",
      "B. Security should be integrated throughout the development lifecycle",
      "C. Only the final product needs to be secure",
      "D. Security is the responsibility of the operations team"
    ],
    correctAnswer: "B",
    explanation: "Security should be integrated throughout the development lifecycle to ensure robust protection.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the purpose of a security audit in application development?",
    options: [
      "A. To ensure compliance with coding standards",
      "B. To identify vulnerabilities and assess security posture",
      "C. To improve application performance",
      "D. To manage user access"
    ],
    correctAnswer: "B",
    explanation: "A security audit identifies vulnerabilities and assesses the security posture of an application.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a common method for securing APIs?",
    options: [
      "A. Using API keys",
      "B. Implementing rate limiting",
      "C. Using OAuth 2.0",
      "D. All of the above"
    ],
    correctAnswer: "D",
    explanation: "Using API keys, implementing rate limiting, and using OAuth 2.0 are common methods for securing APIs.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when implementing security in a DevOps environment?",
    options: [
      "A. Ensuring compliance with regulations",
      "B. Integrating security into the CI/CD pipeline",
      "C. Managing user access",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Integrating security into the CI/CD pipeline is a primary challenge in a DevOps environment.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is the main goal of threat modeling in application security?",
    options: [
      "A. To identify potential threats and vulnerabilities",
      "B. To improve application performance",
      "C. To manage user access",
      "D. To ensure compliance with regulations"
    ],
    correctAnswer: "A",
    explanation: "Threat modeling aims to identify potential threats and vulnerabilities in an application.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using automated security testing tools?",
    options: [
      "A. They eliminate the need for manual testing",
      "B. They can identify vulnerabilities more quickly",
      "C. They guarantee application security",
      "D. They simplify application deployment"
    ],
    correctAnswer: "B",
    explanation: "Automated security testing tools can identify vulnerabilities more quickly than manual testing.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary consideration when securing a cloud-based application?",
    options: [
      "A. Managing physical server hardware",
      "B. Implementing strong authentication and access controls",
      "C. Reducing network bandwidth usage",
      "D. Optimizing application performance"
    ],
    correctAnswer: "B",
    explanation: "Implementing strong authentication and access controls is critical for securing cloud-based applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  }
];