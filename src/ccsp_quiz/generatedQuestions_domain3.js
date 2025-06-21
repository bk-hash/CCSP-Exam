module.exports = [
  {
    question: "What is a Type 1 hypervisor?",
    options: [
      "A. Hosted on an OS",
      "B. Bare-metal",
      "C. Container-based",
      "D. Cloud-only"
    ],
    correctAnswer: "B",
    explanation: "Type 1 hypervisors run directly on hardware (bare-metal), e.g., VMware ESXi.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "Which control mitigates VM escape attacks?",
    options: [
      "A. Auto-scaling",
      "B. Hypervisor patching",
      "C. WAF deployment",
      "D. Load balancing"
    ],
    correctAnswer: "B",
    explanation: "Patching the hypervisor addresses vulnerabilities that could allow VM escape attacks.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "An organization’s Kubernetes cluster in a public cloud is compromised due to unpatched container images. What should be implemented to prevent recurrence?",
    options: [
      "A. Deploy a WAF",
      "B. Integrate image scanning in CI/CD",
      "C. Enable auto-scaling",
      "D. Use public container registries"
    ],
    correctAnswer: "B",
    explanation: "Image scanning in CI/CD detects vulnerabilities before deployment, preventing compromised containers.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "scenario-based",
    difficulty: "hard"
  },
  {
    question: "RTO measures the amount of data loss acceptable in a disaster recovery plan.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "RTO measures recovery time; RPO measures acceptable data loss.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "true-false",
    difficulty: "easy"
  },
  {
    question: "Match the component to its security control: 1. Compute, 2. Storage, 3. Network; A. VLANs, B. Encryption at rest, C. Least privilege IAM roles.",
    options: [
      "1-C, 2-B, 3-A",
      "1-A, 2-B, 3-C",
      "1-B, 2-C, 3-A",
      "1-C, 2-A, 3-B"
    ],
    correctAnswer: "1-C, 2-B, 3-A",
    explanation: "Compute uses IAM roles, storage uses encryption, and networks use VLANs for security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "matching",
    difficulty: "medium"
  },
  {
    question: "What is the primary purpose of a cloud security architecture?",
    options: [
      "A. To manage physical server operations",
      "B. To define security controls and policies for cloud environments",
      "C. To develop application code",
      "D. To monitor network performance"
    ],
    correctAnswer: "B",
    explanation: "A cloud security architecture defines the security controls and policies necessary to protect cloud environments.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud access security broker (CASB)?",
    options: [
      "A. Enhanced physical security",
      "B. Improved visibility and control over cloud applications",
      "C. Simplified application development",
      "D. Reduced network latency"
    ],
    correctAnswer: "B",
    explanation: "A CASB provides visibility and control over cloud applications, helping organizations enforce security policies.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary security concern when deploying containers in a cloud environment?",
    options: [
      "A. Ensuring physical server isolation",
      "B. Managing container orchestration",
      "C. Securing container images and runtime",
      "D. Reducing network bandwidth usage"
    ],
    correctAnswer: "C",
    explanation: "Securing container images and runtime is critical to prevent vulnerabilities and attacks in cloud environments.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the concept of least privilege in cloud security?",
    options: [
      "A. Users have access to all resources",
      "B. Users have access only to the resources necessary for their role",
      "C. All resources are publicly accessible",
      "D. Users can share their access with others"
    ],
    correctAnswer: "B",
    explanation: "Least privilege ensures that users have only the access necessary to perform their job functions, reducing security risks.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when implementing a cloud-based identity and access management (IAM) system?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring compliance with regulations",
      "C. Reducing network latency",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Ensuring compliance with regulations, such as GDPR or HIPAA, is a key challenge for cloud-based IAM systems.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "hard"
  },
  {
    question: "Which of the following is a key benefit of using a security information and event management (SIEM) system in the cloud?",
    options: [
      "A. Automating backups",
      "B. Centralizing security monitoring and incident response",
      "C. Encrypting data",
      "D. Managing IAM roles"
    ],
    correctAnswer: "B",
    explanation: "A SIEM system centralizes security monitoring and incident response, enhancing visibility and control over cloud environments.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary consideration when designing a cloud-based disaster recovery plan?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring data replication across regions",
      "C. Managing physical server hardware",
      "D. Reducing storage costs"
    ],
    correctAnswer: "B",
    explanation: "Data replication across regions ensures data availability and resilience in a cloud-based disaster recovery plan.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when migrating to a cloud environment?",
    options: [
      "A. Ensuring compatibility with cloud-native services",
      "B. Reducing physical server costs",
      "C. Managing customer-owned hardware",
      "D. Optimizing network performance"
    ],
    correctAnswer: "A",
    explanation: "Ensuring compatibility with cloud-native services, such as APIs and storage, is a key challenge when migrating to the cloud.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is the primary role of a cloud security architect?",
    options: [
      "A. Managing physical data centers",
      "B. Designing secure cloud solutions and architectures",
      "C. Developing application code",
      "D. Monitoring network performance"
    ],
    correctAnswer: "B",
    explanation: "A cloud security architect designs secure cloud solutions and architectures to protect against threats and vulnerabilities.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the concept of cloud security posture management (CSPM)?",
    options: [
      "A. Managing physical server operations",
      "B. Continuously monitoring cloud environments for compliance and security risks",
      "C. Developing application code",
      "D. Monitoring network performance"
    ],
    correctAnswer: "B",
    explanation: "CSPM continuously monitors cloud environments for compliance and security risks, helping organizations maintain a secure posture.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using a multi-cloud strategy?",
    options: [
      "A. Exclusive use of a single provider’s services",
      "B. Increased redundancy and vendor flexibility",
      "C. Simplified management of resources",
      "D. Reduced compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "A multi-cloud strategy increases redundancy and flexibility by leveraging multiple providers, reducing vendor lock-in risks.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key component of a cloud security incident response plan?",
    options: [
      "A. Physical server maintenance",
      "B. Regular testing and updates of the plan",
      "C. Network bandwidth optimization",
      "D. Application performance monitoring"
    ],
    correctAnswer: "B",
    explanation: "Regular testing and updates of the incident response plan ensure its effectiveness in addressing security incidents.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when designing a cloud architecture for compliance with regulations?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring data residency and access controls",
      "C. Reducing network bandwidth",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Ensuring data residency and access controls is critical for compliance with regulations such as GDPR or HIPAA.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the purpose of a cloud service level agreement (SLA)?",
    options: [
      "A. To manage physical server hardware",
      "B. To define measurable performance targets and responsibilities",
      "C. To develop application code",
      "D. To monitor network performance"
    ],
    correctAnswer: "B",
    explanation: "SLAs define measurable performance targets and responsibilities between the cloud provider and customer.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using a cloud-native architecture?",
    options: [
      "A. Reliance on legacy systems",
      "B. Enhanced agility and scalability",
      "C. Simplified physical server maintenance",
      "D. Reduced compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "Cloud-native architectures leverage microservices and containers to enhance agility and scalability.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when designing a cloud architecture for cost optimization?",
    options: [
      "A. Managing physical server hardware",
      "B. Balancing performance and resource usage",
      "C. Reducing network bandwidth",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Balancing performance and resource usage is critical for cost optimization but can be challenging in dynamic cloud environments.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is the primary purpose of a cloud governance framework?",
    options: [
      "A. Managing physical data centers",
      "B. Establishing policies for cloud resource usage",
      "C. Developing application code",
      "D. Monitoring network performance"
    ],
    correctAnswer: "B",
    explanation: "A cloud governance framework establishes policies and controls for secure and efficient cloud resource usage.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  }
];