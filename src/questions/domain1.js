const questions = [
  {
    question: "Which of the following best defines the term 'cloud computing' according to NIST SP 800-145?",
    options: [
      "A. A model for enabling on-demand network access to a shared pool of configurable computing resources",
      "B. A framework for managing physical server infrastructure",
      "C. A protocol for securing data in transit",
      "D. A software suite for virtualization management"
    ],
    correctAnswer: "A",
    explanation: "NIST SP 800-145 defines cloud computing as a model for enabling on-demand network access to a shared pool of configurable resources, such as networks, servers, storage, applications, and services.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a key characteristic of the Infrastructure as a Service (IaaS) cloud service model?",
    options: [
      "A. The consumer manages the application and data only",
      "B. The consumer controls the operating systems and deployed applications",
      "C. The consumer has no control over the underlying infrastructure",
      "D. The consumer manages the entire software stack"
    ],
    correctAnswer: "B",
    explanation: "In IaaS, the consumer controls the operating systems, server software, and deployed applications, while the provider manages the underlying infrastructure.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which cloud deployment model is characterized by exclusive use by a single organization?",
    options: [
      "A. Public cloud",
      "B. Private cloud",
      "C. Community cloud",
      "D. Hybrid cloud"
    ],
    correctAnswer: "B",
    explanation: "A private cloud is dedicated to a single organization, providing greater control and security compared to other models.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is the primary benefit of a hybrid cloud deployment model?",
    options: [
      "A. Exclusive use by a single organization",
      "B. Cost savings through shared infrastructure",
      "C. Flexibility to combine on-premises and cloud resources",
      "D. Simplified management of public resources"
    ],
    correctAnswer: "C",
    explanation: "A hybrid cloud combines on-premises and cloud resources, offering flexibility to meet varying workload and security requirements.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key component of the shared responsibility model in cloud computing?",
    options: [
      "A. The cloud provider is solely responsible for all security aspects",
      "B. The customer is responsible for physical security of the data center",
      "C. Responsibilities are divided between the provider and customer",
      "D. The customer has no security responsibilities"
    ],
    correctAnswer: "C",
    explanation: "The shared responsibility model divides security responsibilities between the cloud provider and customer, varying by service model (IaaS, PaaS, SaaS).",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In the Platform as a Service (PaaS) model, who is responsible for securing the application code?",
    options: [
      "A. The cloud provider",
      "B. The customer",
      "C. Both the provider and customer",
      "D. A third-party vendor"
    ],
    correctAnswer: "B",
    explanation: "In PaaS, the customer is responsible for securing the application code and configurations, while the provider manages the platform and infrastructure.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which essential characteristic of cloud computing enables resources to be rapidly provisioned with minimal management effort?",
    options: [
      "A. Broad network access",
      "B. Resource pooling",
      "C. Rapid elasticity",
      "D. On-demand self-service"
    ],
    correctAnswer: "D",
    explanation: "On-demand self-service allows users to provision resources automatically without requiring human interaction with the provider.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a primary security consideration when designing a multi-tenant cloud architecture?",
    options: [
      "A. Ensuring physical server isolation",
      "B. Implementing logical separation of tenant data",
      "C. Managing customer-owned hardware",
      "D. Reducing network bandwidth usage"
    ],
    correctAnswer: "B",
    explanation: "Logical separation of tenant data, such as through virtualization and access controls, is critical in multi-tenant cloud architectures to ensure security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the role of a cloud architect?",
    options: [
      "A. Managing physical data center operations",
      "B. Designing scalable and secure cloud solutions",
      "C. Developing application code",
      "D. Monitoring network performance"
    ],
    correctAnswer: "B",
    explanation: "A cloud architect designs scalable, secure, and cost-effective cloud solutions aligned with business requirements.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of using a community cloud deployment model?",
    options: [
      "A. Cost savings through shared infrastructure among similar organizations",
      "B. Exclusive use by a single organization",
      "C. Unlimited public access to resources",
      "D. Simplified compliance with all regulations"
    ],
    correctAnswer: "A",
    explanation: "A community cloud is shared among organizations with similar needs, reducing costs while addressing common security and compliance requirements.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which NIST cloud computing characteristic allows resources to be accessed over various devices and networks?",
    options: [
      "A. Measured service",
      "B. Broad network access",
      "C. Resource pooling",
      "D. Rapid elasticity"
    ],
    correctAnswer: "B",
    explanation: "Broad network access enables cloud resources to be accessed over networks using various devices, such as laptops and smartphones.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "In a Software as a Service (SaaS) model, who is primarily responsible for securing the underlying infrastructure?",
    options: [
      "A. The customer",
      "B. The cloud provider",
      "C. A third-party auditor",
      "D. Both the customer and provider"
    ],
    correctAnswer: "B",
    explanation: "In SaaS, the cloud provider is responsible for securing the underlying infrastructure, while the customer manages user access and data security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when designing a cloud architecture for high availability?",
    options: [
      "A. Reducing physical server costs",
      "B. Ensuring redundancy across multiple regions",
      "C. Managing customer-owned hardware",
      "D. Optimizing application performance"
    ],
    correctAnswer: "B",
    explanation: "Ensuring redundancy across multiple regions is critical for high availability but can be complex and costly in cloud architecture design.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a key consideration when selecting a cloud service provider?",
    options: [
      "A. The provider’s physical data center location",
      "B. Compliance with industry regulations",
      "C. The customer’s hardware specifications",
      "D. The provider’s application development tools"
    ],
    correctAnswer: "B",
    explanation: "Compliance with industry regulations is a critical factor when selecting a cloud provider to ensure legal and security requirements are met.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the primary purpose of a cloud reference architecture?",
    options: [
      "A. To manage physical server hardware",
      "B. To provide a standardized framework for cloud design",
      "C. To monitor network performance",
      "D. To develop application code"
    ],
    correctAnswer: "B",
    explanation: "A cloud reference architecture provides a standardized framework to guide the design and implementation of cloud solutions.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the concept of resource pooling in cloud computing?",
    options: [
      "A. Assigning dedicated resources to each customer",
      "B. Sharing resources among multiple tenants",
      "C. Encrypting resources for security",
      "D. Limiting resource access to a single user"
    ],
    correctAnswer: "B",
    explanation: "Resource pooling allows multiple tenants to share computing resources, enabling efficiency and scalability in cloud environments.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a key benefit of using virtualization in cloud architecture?",
    options: [
      "A. Reduced need for network connectivity",
      "B. Improved resource utilization and isolation",
      "C. Simplified physical server maintenance",
      "D. Elimination of compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "Virtualization improves resource utilization and provides isolation between workloads, enhancing security and efficiency in cloud environments.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which cloud characteristic ensures that resource usage is monitored and billed based on consumption?",
    options: [
      "A. Rapid elasticity",
      "B. Measured service",
      "C. On-demand self-service",
      "D. Broad network access"
    ],
    correctAnswer: "B",
    explanation: "Measured service ensures resource usage is monitored, controlled, and billed based on actual consumption, promoting transparency.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a primary security consideration when designing a cloud-based disaster recovery plan?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring data replication across regions",
      "C. Managing physical server hardware",
      "D. Reducing storage costs"
    ],
    correctAnswer: "B",
    explanation: "Data replication across regions ensures data availability and resilience in a cloud-based disaster recovery plan.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when migrating legacy applications to a cloud environment?",
    options: [
      "A. Ensuring compatibility with cloud-native services",
      "B. Reducing physical server costs",
      "C. Managing customer-owned hardware",
      "D. Optimizing network performance"
    ],
    correctAnswer: "A",
    explanation: "Ensuring compatibility with cloud-native services, such as APIs and storage, is a key challenge when migrating legacy applications.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is the primary role of a cloud service broker?",
    options: [
      "A. Managing physical data centers",
      "B. Facilitating integration and management of cloud services",
      "C. Developing application code",
      "D. Monitoring network performance"
    ],
    correctAnswer: "B",
    explanation: "A cloud service broker facilitates the integration, aggregation, and management of cloud services for organizations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
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
    explanation: "Elasticity allows cloud resources to scale dynamically based on demand, ensuring efficiency and performance.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a key consideration when designing a cloud architecture for compliance with GDPR?",
    options: [
      "A. Optimizing application performance",
      "B. Ensuring data residency requirements are met",
      "C. Managing physical server hardware",
      "D. Reducing network bandwidth usage"
    ],
    correctAnswer: "B",
    explanation: "Ensuring data residency requirements, such as storing EU data within the EU, is critical for GDPR compliance in cloud design.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which cloud service model provides the highest level of control over the environment?",
    options: [
      "A. Software as a Service (SaaS)",
      "B. Platform as a Service (PaaS)",
      "C. Infrastructure as a Service (IaaS)",
      "D. Function as a Service (FaaS)"
    ],
    correctAnswer: "C",
    explanation: "IaaS provides the highest level of control, allowing customers to manage operating systems, applications, and configurations.",
    domain: "Cloud Concepts, Architecture and Design",
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
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key component of a cloud business continuity plan?",
    options: [
      "A. Physical server maintenance",
      "B. Regular backups and recovery testing",
      "C. Network bandwidth optimization",
      "D. Application performance monitoring"
    ],
    correctAnswer: "B",
    explanation: "Regular backups and recovery testing are essential for ensuring business continuity in a cloud environment.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when designing a cloud architecture for low-latency applications?",
    options: [
      "A. Managing physical server hardware",
      "B. Optimizing resource placement near users",
      "C. Reducing storage costs",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Optimizing resource placement, such as using edge locations, is critical for low-latency applications but can be complex.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of automation in cloud architecture?",
    options: [
      "A. Managing physical data centers",
      "B. Streamlining resource provisioning and management",
      "C. Developing application code",
      "D. Monitoring network performance"
    ],
    correctAnswer: "B",
    explanation: "Automation streamlines resource provisioning, scaling, and management, enhancing efficiency in cloud architectures.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of using a serverless architecture in cloud design?",
    options: [
      "A. Full control over the underlying infrastructure",
      "B. Automatic scaling and reduced operational overhead",
      "C. Exclusive use by a single organization",
      "D. Simplified compliance with all regulations"
    ],
    correctAnswer: "B",
    explanation: "Serverless architecture provides automatic scaling and reduces operational overhead by abstracting server management.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary security consideration when designing a cloud network architecture?",
    options: [
      "A. Optimizing application performance",
      "B. Implementing network segmentation",
      "C. Managing physical server hardware",
      "D. Reducing storage costs"
    ],
    correctAnswer: "B",
    explanation: "Network segmentation enhances security by isolating workloads and limiting lateral movement in a cloud network.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when designing a cloud architecture for scalability?",
    options: [
      "A. Managing physical server hardware",
      "B. Using auto-scaling and load balancing",
      "C. Reducing network bandwidth usage",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Auto-scaling and load balancing enable dynamic resource allocation to handle varying workloads in a scalable cloud architecture.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which cloud deployment model is best suited for organizations with strict regulatory requirements?",
    options: [
      "A. Public cloud",
      "B. Private cloud",
      "C. Community cloud",
      "D. Hybrid cloud"
    ],
    correctAnswer: "B",
    explanation: "A private cloud offers greater control and isolation, making it ideal for organizations with strict regulatory requirements.",
    domain: "Cloud Concepts, Architecture and Design",
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
    domain: "Cloud Concepts, Architecture and Design",
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
    domain: "Cloud Concepts, Architecture and Design",
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
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a container-based architecture in cloud design?",
    options: [
      "A. Full control over the underlying infrastructure",
      "B. Portability and lightweight deployment",
      "C. Exclusive use by a single organization",
      "D. Simplified compliance with all regulations"
    ],
    correctAnswer: "B",
    explanation: "Container-based architectures offer portability and lightweight deployment, enhancing flexibility in cloud environments.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary security consideration when designing a cloud-based identity and access management (IAM) system?",
    options: [
      "A. Optimizing application performance",
      "B. Implementing least privilege principles",
      "C. Managing physical server hardware",
      "D. Reducing storage costs"
    ],
    correctAnswer: "B",
    explanation: "Implementing least privilege principles ensures users have only the access needed, enhancing security in a cloud IAM system.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when designing a cloud architecture for global operations?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring compliance with regional regulations",
      "C. Reducing network bandwidth",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Ensuring compliance with regional regulations, such as data residency laws, is a key challenge for global cloud architectures.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a microservices architecture in cloud design?",
    options: [
      "A. Reliance on monolithic systems",
      "B. Independent deployment and scalability",
      "C. Simplified physical server maintenance",
      "D. Reduced compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "Microservices enable independent deployment and scalability, improving agility and resilience in cloud architectures.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which cloud service model shares infrastructure among organizations with common compliance needs?",
    options: [
      "A. Public cloud",
      "B. Private cloud",
      "C. Community cloud",
      "D. Hybrid cloud"
    ],
    correctAnswer: "C",
    explanation: "A community cloud shares infrastructure among organizations with similar compliance needs, balancing cost and collaboration.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when designing a cloud-based monitoring system?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring visibility into resource performance",
      "C. Reducing storage costs",
      "D. Automating application development"
    ],
    correctAnswer: "B",
    explanation: "Ensuring visibility into resource performance is critical for effective monitoring and management in cloud environments.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
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
    explanation: "Regular cost analysis and optimization ensure efficient resource usage and cost control in cloud operations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using a cloud-based API-first design approach?",
    options: [
      "A. Managing physical data centers",
      "B. Enhancing interoperability and developer agility",
      "C. Monitoring network performance",
      "D. Developing application code"
    ],
    correctAnswer: "B",
    explanation: "An API-first design approach enhances interoperability and developer agility, facilitating integration in cloud architectures.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
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
    explanation: "Ensuring data integrity and recovery is critical for a reliable backup strategy in cloud environments.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
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
    explanation: "Handling cold start latency is a key challenge in serverless architectures due to the dynamic provisioning of functions.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "hard"
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
    explanation: "SLOs define measurable performance targets, such as uptime or latency, to ensure service quality in cloud environments.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of using a cloud-based content delivery network (CDN)?",
    options: [
      "A. Managing physical server resources",
      "B. Reducing latency for global users",
      "C. Eliminating compliance requirements",
      "D. Simplifying application development"
    ],
    correctAnswer: "B",
    explanation: "A CDN reduces latency by caching content closer to users, improving performance in cloud-based applications.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary consideration when designing a cloud architecture for fault tolerance?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Deploying redundant components",
      "C. Managing physical server costs",
      "D. Automating application development"
    ],
    correctAnswer: "B",
    explanation: "Deploying redundant components ensures fault tolerance by minimizing the impact of failures in cloud architectures.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  }
];
export default questions;