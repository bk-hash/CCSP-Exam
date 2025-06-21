const questions = [
  {
    question: "What is the primary purpose of a cloud service model?",
    options: [
      "A. To provide physical hardware resources",
      "B. To offer scalable and on-demand access to computing resources",
      "C. To manage user data exclusively",
      "D. To eliminate the need for internet connectivity"
    ],
    correctAnswer: "B",
    explanation: "Cloud service models provide scalable and on-demand access to computing resources, allowing users to pay for what they use."
  },
  {
    question: "Which of the following is a characteristic of Infrastructure as a Service (IaaS)?",
    options: [
      "A. The provider manages the entire software stack",
      "B. Users have control over the operating systems and applications",
      "C. It is a fully managed service with no user control",
      "D. It only provides storage solutions"
    ],
    correctAnswer: "B",
    explanation: "In IaaS, users have control over the operating systems and applications while the provider manages the underlying infrastructure."
  },
  {
    question: "What does the term 'multi-cloud' refer to?",
    options: [
      "A. Using multiple cloud providers for different services",
      "B. A single cloud provider offering multiple services",
      "C. A cloud service that combines public and private resources",
      "D. A cloud service that is only accessible from multiple devices"
    ],
    correctAnswer: "A",
    explanation: "Multi-cloud refers to the use of multiple cloud providers for different services to avoid vendor lock-in and enhance flexibility."
  },
  {
    question: "Which deployment model is best suited for organizations with strict compliance requirements?",
    options: [
      "A. Public cloud",
      "B. Private cloud",
      "C. Hybrid cloud",
      "D. Community cloud"
    ],
    correctAnswer: "B",
    explanation: "A private cloud provides greater control and security, making it ideal for organizations with strict compliance requirements."
  },
  {
    question: "What is the primary benefit of using a cloud-native architecture?",
    options: [
      "A. Reliance on legacy systems",
      "B. Enhanced agility and scalability",
      "C. Simplified physical server maintenance",
      "D. Reduced compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "Cloud-native architectures leverage microservices and containers to enhance agility and scalability."
  },
  {
    question: "Which of the following is a key challenge when migrating to the cloud?",
    options: [
      "A. Ensuring compatibility with cloud-native services",
      "B. Reducing physical server costs",
      "C. Managing customer-owned hardware",
      "D. Optimizing network performance"
    ],
    correctAnswer: "A",
    explanation: "Ensuring compatibility with cloud-native services, such as APIs and storage, is a key challenge when migrating legacy applications."
  },
  {
    question: "What is a primary security consideration when designing a cloud architecture?",
    options: [
      "A. Optimizing application performance",
      "B. Implementing network segmentation",
      "C. Managing physical server hardware",
      "D. Reducing storage costs"
    ],
    correctAnswer: "B",
    explanation: "Network segmentation enhances security by isolating workloads and limiting lateral movement in a cloud network."
  },
  {
    question: "Which of the following best describes the concept of elasticity in cloud computing?",
    options: [
      "A. Fixed resource allocation for all workloads",
      "B. Ability to scale resources up or down based on demand",
      "C. Permanent resource provisioning",
      "D. Manual resource management"
    ],
    correctAnswer: "B",
    explanation: "Elasticity allows cloud resources to scale dynamically based on demand, ensuring efficiency and performance."
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
    explanation: "A cloud governance framework establishes policies and controls for secure and efficient cloud resource usage."
  },
  {
    question: "Which of the following is a primary component of a cloud cost management strategy?",
    options: [
      "A. Physical server maintenance",
      "B. Regular cost analysis and optimization",
      "C. Network performance monitoring",
      "D. User access provisioning"
    ],
    correctAnswer: "B",
    explanation: "Regular cost analysis and optimization ensure efficient resource usage and cost control in cloud operations."
  },
  {
    question: "What is a key benefit of using a cloud-based API-first design approach?",
    options: [
      "A. Managing physical data centers",
      "B. Enhancing interoperability and developer agility",
      "C. Monitoring network performance",
      "D. Developing application code"
    ],
    correctAnswer: "B",
    explanation: "An API-first design approach enhances interoperability and developer agility, facilitating integration in cloud architectures."
  },
  {
    question: "Which of the following is a key consideration when designing a cloud-based backup strategy?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring data integrity and recovery",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring data integrity and recovery is critical for a reliable backup strategy in cloud environments."
  },
  {
    question: "What is a primary challenge when designing a serverless cloud architecture?",
    options: [
      "A. Managing physical servers",
      "B. Handling cold start latency",
      "C. Reducing network bandwidth",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Handling cold start latency is a key challenge in serverless architectures due to the dynamic provisioning of functions."
  },
  {
    question: "Which of the following best describes the purpose of a cloud service level objective (SLO)?",
    options: [
      "A. To manage physical server hardware",
      "B. To define measurable performance targets",
      "C. To develop application code",
      "D. To monitor network performance"
    ],
    correctAnswer: "B",
    explanation: "SLOs define measurable performance targets, such as uptime or latency, to ensure service quality in cloud environments."
  }
];

export default questions;