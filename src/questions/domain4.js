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
  },
  {
    question: "The Open Web Application Security Project (OWASP) Top Ten is a list of web application security threats created by a member-driven committee. Which is a good way to protect against using components with known vulnerabilities?",
    options: [
      "A. Ignore vulnerabilities",
      "B. Review all updates/lists/notifications for components your organization uses.",
      "C. Increase the user training budget.",
      "D. Implement audit logging."
    ],
    correctAnswer: "B",
    explanation: "Reviewing updates and notifications for components helps protect against known vulnerabilities.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "The OWASP Top Ten list sometimes includes 'unvalidated redirects and forwards.' Which is a good way to protect against this problem?",
    options: [
      "A. Ignore redirects",
      "B. Implement audit logging.",
      "C. Implement security incident/event monitoring (SIEM/SIM/SEM) solutions.",
      "D. Implement digital rights management (DRM) solutions."
    ],
    correctAnswer: "C",
    explanation: "Implementing SIEM/SIM/SEM solutions helps protect against unvalidated redirects and forwards.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a challenge when transitioning applications from on-premises to a hosted cloud provider’s data center?",
    options: [
      "A. Portability",
      "B. Security",
      "C. Privacy",
      "D. Auditability"
    ],
    correctAnswer: "A",
    explanation: "Portability is a challenge when transitioning applications to a cloud provider’s data center.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "ISO 27034 mandates a framework for application security within an organization. According to the standard, each organization should have a(n) ___, and each application within the organization should have its own ___.",
    options: [
      "A. Organizational Normative Framework (ONF), Application Normative Framework (ANF)",
      "B. Application Normative Framework (ANF), Organizational Normative Framework (ONF)",
      "C. Standard Application Security (SAS), Application Normative Framework (ANF)",
      "D. Organizational Normative Framework (ONF), Standard Application Security (SAS)"
    ],
    correctAnswer: "A",
    explanation: "ISO 27034 requires an ONF for the organization and an ANF for each application.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "According to ISO 27034, there is one Organizational Normative Framework (ONF) in the organization, and ___ Application Normative Framework (ANF[s]) for each application within that organization.",
    options: [
      "A. Many",
      "B. Three",
      "C. No",
      "D. One"
    ],
    correctAnswer: "A",
    explanation: "Each application has its own ANF, but there is only one ONF per organization.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What language is used in the Simple Object Access Protocol (SOAP) application design protocol?",
    options: [
      "A. Hypertext Markup Language (HTML)",
      "B. X.509",
      "C. Extensible Markup Language (XML)",
      "D. Hypertext Transfer Protocol (HTTP)"
    ],
    correctAnswer: "C",
    explanation: "SOAP uses XML for its message format.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Typically, representational state transfer (REST) interactions do not require ___.",
    options: [
      "A. Credentials",
      "B. Sessions",
      "C. Servers",
      "D. Clients"
    ],
    correctAnswer: "B",
    explanation: "REST is stateless and does not require sessions.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Representational state transfer (REST) application programming interfaces (APIs) use ___ protocol verbs.",
    options: [
      "A. Hypertext Markup Language (HTML)",
      "B. Hypertext Transfer Protocol (HTTP)",
      "C. Extensible Markup Language (XML)",
      "D. American Standard Code for Information Interchange (ASCII)"
    ],
    correctAnswer: "B",
    explanation: "REST APIs use HTTP protocol verbs (GET, POST, etc.).",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "The architecture of the World Wide Web, as it works today, is ___.",
    options: [
      "A. JavaScript Open Notation (JSON)",
      "B. Denial of service (DoS)",
      "C. Representational state transfer (REST)",
      "D. Extensible Markup Language (XML)"
    ],
    correctAnswer: "C",
    explanation: "The World Wide Web is based on REST architecture.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "RESTful responses can come from the server in ___ or ___ formats.",
    options: [
      "A. Extensible Markup Language (XML), JavaScript Open Notation (JSON)",
      "B. Hypertext Transfer Protocol (HTTP), X.509",
      "C. American Standard Code for Information Interchange (ASCII), text",
      "D. Hypertext Markup Language (HTML), Extensible Markup Language (XML)"
    ],
    correctAnswer: "A",
    explanation: "RESTful responses are commonly in XML or JSON format.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which of the following is an informal industry term for moving applications from a traditional environment into the cloud?",
    options: [
      "A. Instantiation",
      "B. Porting",
      "C. Grandslamming",
      "D. Forklifting"
    ],
    correctAnswer: "D",
    explanation: "'Forklifting' is the informal term for moving applications to the cloud.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Developers creating software for the cloud environment should bear in mind cloud-specific risks such as ___ and ___.",
    options: [
      "A. DoS and DDoS (denial of service and distributed denial of service)",
      "B. Multitenancy and third-party administrators",
      "C. Unprotected servers and unprotected clients",
      "D. Default configurations and user error"
    ],
    correctAnswer: "A",
    explanation: "Cloud-specific risks include DoS and DDoS attacks.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "When an organization considers cloud migrations, the organization’s software developers will need to know which ___ and which ___ the organization will be using, in order to properly and securely create suitable applications.",
    options: [
      "A. Geographic location, native language",
      "B. Legal restrictions, specific ISP",
      "C. Service model, deployment model",
      "D. Available bandwidth, telecommunications country code"
    ],
    correctAnswer: "C",
    explanation: "Service model and deployment model are key for secure cloud migrations.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is perhaps the best method for reducing the risk of a specific application not delivering the proper level of functionality and performance when it is moved from the traditional environment into the cloud?",
    options: [
      "A. Remove the application from the organization’s production environment and replace it with something else.",
      "B. Negotiate and conduct a trial run in the cloud environment for that application before permanently migrating.",
      "C. Make sure the application is fully updated and patched according to all vendor specifications.",
      "D. Run the application in an emulator."
    ],
    correctAnswer: "B",
    explanation: "Trial runs in the cloud help reduce migration risks.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Software developers designing applications for the cloud should expect to include options to ensure all of the following capabilities except ___.",
    options: [
      "A. Encryption of data at rest",
      "B. Encryption of data in transit",
      "C. Data masking",
      "D. Hashing database fields"
    ],
    correctAnswer: "D",
    explanation: "Hashing database fields is not a typical cloud capability option.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In a platform as a service (PaaS) model, who should most likely be responsible for the security of the applications in the production environment?",
    options: [
      "A. Cloud customer",
      "B. Cloud provider",
      "C. Regulator",
      "D. Programmers"
    ],
    correctAnswer: "A",
    explanation: "The cloud customer is responsible for application security in PaaS.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In the testing phase of the software development lifecycle (SDLC), software performance and ___ should both be reviewed.",
    options: [
      "A. Quality",
      "B. Brevity",
      "C. Requirements",
      "D. Security"
    ],
    correctAnswer: "D",
    explanation: "Security and performance are both reviewed in SDLC testing phase.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Regardless of which model the organization uses for system development, in which phase of the software development lifecycle (SDLC) will user input be requested and considered?",
    options: [
      "A. Define",
      "B. Design",
      "C. Develop",
      "D. Detect"
    ],
    correctAnswer: "A",
    explanation: "User input is requested in the Define phase of SDLC.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which phase of the software development lifecycle (SDLC) is most likely to involve crypto-shredding?",
    options: [
      "A. Define",
      "B. Design",
      "C. Test",
      "D. Disposal"
    ],
    correctAnswer: "D",
    explanation: "Crypto-shredding is most likely in the Disposal phase.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Where are business requirements most likely to be mapped to software construction?",
    options: [
      "A. Define",
      "B. Design",
      "C. Test",
      "D. Secure Operations"
    ],
    correctAnswer: "B",
    explanation: "Business requirements are mapped in the Design phase.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "All of the following are usually nonfunctional requirements except ___.",
    options: [
      "A. Color",
      "B. Sound",
      "C. Security",
      "D. Function"
    ],
    correctAnswer: "D",
    explanation: "Function is a functional requirement, not nonfunctional.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Designers making applications for the cloud have to take into consideration risks and operational constraints that did not exist or were not as pronounced in the traditional environment. Which of the following is an element cloud app designers may have to consider incorporating in software for the cloud that may not have been as important in the traditional environment?",
    options: [
      "A. Identity and access management (IAM) capability",
      "B. Distributed denial of service (DDoS) resistance",
      "C. Encryption for data at rest and in motion",
      "D. Field validation"
    ],
    correctAnswer: "A",
    explanation: "IAM capability is more important in cloud applications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Designers making applications for the cloud have to take into consideration risks and operational constraints that did not exist or were not as pronounced in the traditional environment. Which of the following is an element cloud app designers may have to consider incorporating in software for the cloud that might not have been as important in the traditional environment?",
    options: [
      "A. Application isolation",
      "B. Inference framing",
      "C. Known secure library components",
      "D. Testing that uses known bad data"
    ],
    correctAnswer: "A",
    explanation: "Application isolation is more critical in cloud environments.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Designers making applications for the cloud have to take into consideration risks and operational constraints that did not exist or were not as pronounced in the traditional environment. Which of the following is an element cloud app designers may not be able to use as readily in the cloud environment as it was deployed in the traditional environment?",
    options: [
      "A. Cryptography",
      "B. STRIDE testing",
      "C. Field validation",
      "D. Logging"
    ],
    correctAnswer: "A",
    explanation: "Cryptography may be less readily used in cloud environments.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "All of these can affect the quality of service expected from an application except ___.",
    options: [
      "A. Encryption",
      "B. Egress monitoring",
      "C. Anti-malware tools",
      "D. Use of known secure libraries/components"
    ],
    correctAnswer: "D",
    explanation: "Use of known secure libraries/components does not affect quality of service.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "The possibility that a user could gain access or control of an application so as to take on administrator or management capabilities is called ___.",
    options: [
      "A. Inversion",
      "B. Spoofing",
      "C. Repudiation",
      "D. Escalation of privilege"
    ],
    correctAnswer: "D",
    explanation: "Escalation of privilege refers to unauthorized access to admin capabilities.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is not checked when using the STRIDE threat model?",
    options: [
      "A. The ability of users to gain administrative access rights without proper permission",
      "B. The ability of internal personnel to trigger business continuity/disaster recovery activities",
      "C. The ability of a participant in a transaction to refute that they’ve taken part in the transaction",
      "D. The ability of an unauthorized user to pretend to be an authorized user"
    ],
    correctAnswer: "B",
    explanation: "Business continuity/disaster recovery is not part of STRIDE.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "It is very likely that your organization’s users will use unapproved application programming interfaces (APIs), especially in a bring your own device (BYOD) environment, because ___.",
    options: [
      "A. Users are constantly trying to break the security of your environment",
      "B. APIs can’t ever be secure",
      "C. Hackers are constantly infiltrating all APIs",
      "D. Users enhance their productivity however they can"
    ],
    correctAnswer: "D",
    explanation: "Users seek productivity, often using unapproved APIs.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Some current software developers are not aware of security problems within the programs they’re creating because ___.",
    options: [
      "A. Young programmers are not nearly as disciplined in their coding practices as older programmers",
      "B. Some current programmers don’t write code line by line and instead use code component libraries",
      "C. Coding languages have not been secure for 20 years",
      "D. Users are not clear in defining their requirements at the outset of the software development lifecycle (SDLC)"
    ],
    correctAnswer: "B",
    explanation: "Component libraries can obscure security issues for developers.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the most secure form of code testing and review?",
    options: [
      "A. Open source",
      "B. Proprietary/internal",
      "C. Neither open source nor proprietary",
      "D. Combination of open source and proprietary"
    ],
    correctAnswer: "D",
    explanation: "Combination leverages strengths of both open and proprietary review.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the major difference between authentication and authorization?",
    options: [
      "A. Code verification/code implementation",
      "B. Identity validation/access permission",
      "C. Inverse incantation/obverse instantiation",
      "D. User access/privileged access"
    ],
    correctAnswer: "B",
    explanation: "Authentication validates identity; authorization grants access.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Access should be based on ___.",
    options: [
      "A. Regulatory mandates",
      "B. Business needs and acceptable risk",
      "C. User requirements and management requests",
      "D. Optimum performance and security provision"
    ],
    correctAnswer: "B",
    explanation: "Business needs and risk drive access decisions.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Who should determine which users have access to which specific objects?",
    options: [
      "A. The cloud provider",
      "B. Senior management",
      "C. Data owners",
      "D. System administrators"
    ],
    correctAnswer: "C",
    explanation: "Data owners are responsible for access decisions.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "All of the following are identity federation standards commonly found in use today except ___.",
    options: [
      "A. WS-Federation",
      "B. OpenID",
      "C. OAuth (Open Authorization)",
      "D. Pretty Good Privacy (PGP)"
    ],
    correctAnswer: "D",
    explanation: "PGP is not an identity federation standard.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a federation standard/protocol that does not rely on Simple Object Access Protocol (SOAP), Security Assertion Markup Language (SAML), or Extensible Markup Language (XML)?",
    options: [
      "A. WS-Federation",
      "B. OpenID Connect",
      "C. Service Organization Control (SOC) 2",
      "D. Open Web Application Security Project (OWASP)"
    ],
    correctAnswer: "B",
    explanation: "OpenID Connect does not rely on SOAP, SAML, or XML.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Authentication mechanisms typically include any or all of the following except ___.",
    options: [
      "A. Something you know",
      "B. Someone you know",
      "C. Something you have",
      "D. Something you are"
    ],
    correctAnswer: "B",
    explanation: "Authentication does not typically include 'someone you know'.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which of the following constitutes a multifactor authentication process or procedure?",
    options: [
      "A. Using an automated teller machine (ATM) to get cash with your credit or debit card",
      "B. Using a password and personal identification number (PIN) to log into a website",
      "C. Presenting a voice sample and fingerprint to access a secure facility",
      "D. Displaying a birth certificate and a credit card"
    ],
    correctAnswer: "C",
    explanation: "Voice sample and fingerprint are two factors for authentication.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Typically, multifactor authentication should be used ___.",
    options: [
      "A. In every IT transaction",
      "B. For high-risk operations and data that is particularly sensitive",
      "C. When remote users are logging into the cloud environment",
      "D. Only in the traditional environment"
    ],
    correctAnswer: "B",
    explanation: "Multifactor authentication is best for high-risk and sensitive operations.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "A web application firewall (WAF) usually operates at Layer ___ of the Open Systems Interconnection (OSI) model.",
    options: [
      "A. 2",
      "B. 3",
      "C. 7",
      "D. Q"
    ],
    correctAnswer: "C",
    explanation: "WAFs operate at Layer 7 (application layer) of the OSI model.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "A web application firewall (WAF) can understand and act on ___ traffic.",
    options: [
      "A. Malicious",
      "B. Simple Mail Transfer Protocol (SMTP)",
      "C. Internet Control Message Protocol (ICMP)",
      "D. Hypertext Transfer Protocol (HTTP)"
    ],
    correctAnswer: "D",
    explanation: "WAFs are designed to understand HTTP traffic.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "WAFs can be used to reduce the likelihood that ___ attacks will be successful.",
    options: [
      "A. Social engineering",
      "B. Physical theft",
      "C. Obverse inflection",
      "D. Cross-site scripting"
    ],
    correctAnswer: "D",
    explanation: "WAFs help prevent cross-site scripting attacks.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "A database activity monitor (DAM) tool usually operates at Layer ___ of the Open Systems Interconnection (OSI) model.",
    options: [
      "A. 2",
      "B. 3",
      "C. 7",
      "D. Q"
    ],
    correctAnswer: "C",
    explanation: "DAMs operate at Layer 7 (application layer) of the OSI model.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Database activity monitors (DAMs) can be used to reduce the potential success of ___ attacks.",
    options: [
      "A. SQL injection",
      "B. Cross-site scripting",
      "C. Insecure direct-object reference",
      "D. Social engineering"
    ],
    correctAnswer: "A",
    explanation: "DAMs help prevent SQL injection attacks.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which security tool can perform content inspection of Secure File Transfer Protocol (SFTP) communications?",
    options: [
      "A. Web application firewall (WAF)",
      "B. Database activity monitor (DAM)",
      "C. Extensible Markup Language (XML) gateway",
      "D. Single sign-on (SSO)"
    ],
    correctAnswer: "C",
    explanation: "XML gateways can inspect SFTP communications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "To deploy a set of microservices to clients instead of building one monolithic application, it is best to use a(n) ___ to coordinate client requests.",
    options: [
      "A. Extensible Markup Language (XML) gateway",
      "B. Application programming interface (API) gateway",
      "C. Web application firewall (WAF)",
      "D. Database activity monitor (DAM)"
    ],
    correctAnswer: "B",
    explanation: "API gateways coordinate client requests for microservices.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Firewalls can detect attack traffic by using all these methods except ___.",
    options: [
      "A. Known past behavior in the environment",
      "B. Identity of the malicious user",
      "C. Point of origination",
      "D. Signature matching"
    ],
    correctAnswer: "B",
    explanation: "Firewalls do not detect attacks by user identity.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Transport Layer Security (TLS) provides ___ and ___ for communications.",
    options: [
      "A. Privacy, security",
      "B. Security, optimization",
      "C. Privacy, integrity",
      "D. Enhancement, privacy"
    ],
    correctAnswer: "C",
    explanation: "TLS provides privacy and integrity for communications.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Transport Layer Security (TLS) uses a new ___ for each secure connection.",
    options: [
      "A. Symmetric key",
      "B. Asymmetric key",
      "C. Public-private key pair",
      "D. Inverse comparison"
    ],
    correctAnswer: "A",
    explanation: "TLS uses a new symmetric key for each connection.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "A virtual private network (VPN) is used to protect data in transit by ___.",
    options: [
      "A. Securing each end of a client-server connection",
      "B. Creating an encrypted tunnel between two endpoints",
      "C. Encrypting databases",
      "D. Restricting key access to only eight parties"
    ],
    correctAnswer: "B",
    explanation: "VPNs create encrypted tunnels for data in transit.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "The employment of users in dynamic software testing should best be augmented by ___.",
    options: [
      "A. Having the developers review the code",
      "B. Having the developers perform dynamic testing",
      "C. Using automated agents to perform dynamic testing",
      "D. Social engineering"
    ],
    correctAnswer: "C",
    explanation: "Automated agents improve dynamic software testing.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Why do developers have an inherent conflict of interest in testing software they’ve created?",
    options: [
      "A. They are notoriously bad, as a group, at testing.",
      "B. They work for the same department as the testing personnel.",
      "C. They have a vested interest in having the software perform well.",
      "D. They are never trained on testing procedures."
    ],
    correctAnswer: "C",
    explanation: "Developers have a vested interest in their software performing well.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Sandboxing can often be used for ___.",
    options: [
      "A. Optimizing the production environment by moving processes that are not frequently used into the sandbox",
      "B. Allowing secure remote access for users who need resources in the cloud environment",
      "C. Running malware for analysis purposes",
      "D. Creating secure subnets of the production environment"
    ],
    correctAnswer: "C",
    explanation: "Sandboxing is used for malware analysis.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Application virtualization can typically be used for ___.",
    options: [
      "A. Running an application in a non-native environment",
      "B. Installing updates to a system’s operating system (OS)",
      "C. Preventing escalation of privilege by untrusted users",
      "D. Enhancing performance of systems"
    ],
    correctAnswer: "A",
    explanation: "Application virtualization allows running in non-native environments.",
    domain: "Cloud Application Security",
    type: "multiple-choice",
    difficulty: "medium"
  }
];

export default questions;
