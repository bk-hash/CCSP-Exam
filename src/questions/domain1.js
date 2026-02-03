const questions = [
  // Original 50 questions (as provided)
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
    correctAnswer: "C",
    explanation: "Rapid elasticity allows cloud resources to be quickly and automatically scaled up or down based on demand, providing the ability to rapidly provision resources with minimal management effort.",
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
    explanation: "A community cloud provides cost savings through shared infrastructure among organizations with similar needs, reducing costs while addressing common security and compliance requirements.",
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
  // removed duplicate correctAnswer
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
  // ...existing code...
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
  // removed duplicate correctAnswer
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
  },
  // New 50 very hard questions
  {
    question: "A global retailer designs a multi-cloud architecture with AWS and Azure to achieve 99.999% uptime, integrating data encryption from Cloud Data Security. What advanced design mitigates a quantum computing threat during peak sales? (D1.1, D3.1)",
    options: [
      "A. Asynchronous replication with post-quantum TLS",
      "B. Synchronous replication with AES-128",
      "C. Single-region failover with HTTP",
      "D. Load balancing without encryption"
    ],
    correctAnswer: "A",
  // removed duplicate correctAnswer
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A telecom operator secures a hybrid cloud IAM system with Azure AD, incorporating Cloud Platform Security controls. What configuration prevents a zero-day exploit across 50,000 users? (D1.2, D4.2)",
    options: [
      "A. Multi-factor authentication with micro-segmentation",
      "B. Open access with default roles",
      "C. Single sign-on without encryption",
      "D. Public key infrastructure with no validation"
    ],
    correctAnswer: "C",
  // removed duplicate correctAnswer
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A financial institution designs a multi-region disaster recovery plan with GCP, ensuring GDPR compliance. What strategy balances cost and data residency? (D1.3, D7.1)",
    options: [
      "A. Geo-restricted backups with encrypted replication",
      "B. Single-region snapshots with public access",
      "C. Unencrypted multi-region storage",
      "D. Local backups without audits"
    ],
  correctAnswer: "A",
  // removed duplicate correctAnswer
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "An e-commerce platform on AWS optimizes latency with a CDN, integrating Cloud Application Security. What design prevents SSRF attacks for 1M users? (D1.4, D5.3)",
    options: [
      "A. Geo-distributed WAF with input validation",
      "B. Single-region CDN with no filtering",
      "C. Public endpoints with default rules",
      "D. Local caching without security"
    ],
    correctAnswer: "A",
    explanation: "A geo-distributed WAF with input validation prevents SSRF, enhancing architecture and application security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A defense contractor secures a multi-cloud API with AWS and Azure, incorporating Cloud Security Operations. What policy mitigates APTs? (D1.5, D6.1)",
    options: [
      "A. Role-based access with SIEM monitoring",
      "B. Public access with static keys",
      "C. Single-factor authentication",
      "D. Open API endpoints"
    ],
    correctAnswer: "A",
    explanation: "Role-based access with SIEM monitoring mitigates APTs by limiting access and providing threat detection.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A healthcare provider designs a high-availability architecture on Azure, ensuring HIPAA compliance with data encryption. What multi-region strategy supports 99.999% uptime? (D1.6, D3.1)",
    options: [
      "A. Active-active replication with AES-256",
      "B. Single-region failover with no encryption",
      "C. Unencrypted multi-region backups",
      "D. Passive replication without monitoring"
    ],
    correctAnswer: "A",
    explanation: "Active-active replication with AES-256 ensures 99.999% uptime and HIPAA compliance across regions.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A global bank designs a microservices architecture on AWS, integrating Cloud Data Security. What load balancing strategy mitigates encrypted data breaches? (D1.7, D3.2)",
    options: [
      "A. Anycast routing with TLS inspection",
      "B. Single-region load balancing with HTTP",
      "C. Public IP routing without security",
      "D. Static load distribution with no checks"
    ],
    correctAnswer: "C",
    explanation: "Anycast routing with TLS inspection mitigates encrypted data breaches, blending architecture and data security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A telecom provider secures a hybrid cloud network with GCP, incorporating Cloud Platform Security. What design prevents DDoS amplification? (D1.8, D4.1)",
    options: [
      "A. Rate limiting with geo-fencing and IAM",
      "B. Open ports with default rules",
      "C. Single-region traffic routing",
      "D. Unencrypted traffic with public IPs"
    ],
    correctAnswer: "B",
    explanation: "Rate limiting with geo-fencing and IAM prevents DDoS amplification, combining architecture and platform security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "An e-commerce platform secures its AWS VPC with a zero-trust model, integrating Cloud Security Operations. What policy enforces least privilege? (D1.9, D6.2)",
    options: [
      "A. Role-based access with continuous validation",
      "B. Public access with default roles",
      "C. Wildcard permissions with no audits",
      "D. Static IP whitelisting without checks"
    ],
    correctAnswer: "D",
    explanation: "Role-based access with continuous validation enforces least privilege, blending architecture and security operations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A pharmaceutical firm designs a global architecture on Azure, ensuring POPIA compliance with data residency. What strategy optimizes latency? (D1.10, D7.2)",
    options: [
      "A. Edge caching with geo-restricted storage",
      "B. Single-region storage with public access",
      "C. Unencrypted multi-region replication",
      "D. Local caching without compliance"
    ],
    correctAnswer: "A",
    explanation: "Edge caching with geo-restricted storage optimizes latency while meeting POPIA data residency requirements.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A retail chain secures a multi-cloud data pipeline with AWS and GCP, integrating Cloud Application Security. What governance model ensures PCI DSS compliance? (D1.11, D5.1)",
    options: [
      "A. Centralized policy with WAF and audits",
      "B. Decentralized access with no monitoring",
      "C. Public data sharing with default rules",
      "D. Single-provider governance without checks"
    ],
    correctAnswer: "B",
    explanation: "Centralized policy with WAF and audits ensures PCI DSS compliance, blending architecture and application security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A defense contractor designs a fault-tolerant architecture on AWS, integrating Cloud Data Security. What strategy mitigates quantum key compromise? (D1.12, D3.3)",
    options: [
      "A. Redundant HSMs with post-quantum keys",
      "B. Single-region failover with AES-256",
      "C. Unencrypted backups with no rotation",
      "D. Passive redundancy without security"
    ],
    correctAnswer: "D",
    explanation: "Redundant HSMs with post-quantum keys mitigate quantum key compromise, combining architecture and data security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A telecom operator optimizes a serverless architecture on GCP, integrating Cloud Platform Security. What configuration reduces cold start latency? (D1.13, D4.3)",
    options: [
      "A. Pre-warmed functions with IAM validation",
      "B. Default provisioning with no security",
      "C. Single-region deployment with HTTP",
      "D. Unmonitored functions with public access"
    ],
    correctAnswer: "A",
    explanation: "Pre-warmed functions with IAM validation reduce cold start latency, blending architecture and platform security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A financial institution secures a hybrid cloud with AWS, integrating Cloud Security Operations. What monitoring strategy detects insider threats? (D1.14, D6.3)",
    options: [
      "A. Real-time SIEM with anomaly detection",
      "B. Basic logging with no analysis",
      "C. Network monitoring without alerts",
      "D. Static access reviews without tools"
    ],
    correctAnswer: "C",
    explanation: "Real-time SIEM with anomaly detection detects insider threats, combining architecture and security operations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "An e-commerce platform designs a scalable architecture on Azure, integrating Cloud Application Security. What load balancing prevents SQL injection? (D1.15, D5.2)",
    options: [
      "A. Layer 7 balancing with input sanitization",
      "B. Single-region balancing with no filtering",
      "C. Public load balancing without security",
      "D. Static distribution with default rules"
    ],
    correctAnswer: "A",
    explanation: "Layer 7 balancing with input sanitization prevents SQL injection, blending architecture and application security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A healthcare provider secures a multi-region architecture on GCP, ensuring HIPAA compliance. What strategy balances redundancy and encryption? (D1.16, D3.4)",
    options: [
      "A. Active-passive with AES-256 replication",
      "B. Single-region with no encryption",
      "C. Unencrypted multi-region backups",
      "D. Passive with public access"
    ],
    correctAnswer: "A",
    explanation: "Active-passive with AES-256 replication balances redundancy and HIPAA-compliant encryption.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A global bank designs a cost-optimized architecture with AWS, integrating Cloud Data Security. What strategy mitigates tokenization overhead? (D1.17, D3.5)",
    options: [
      "A. Dynamic token vault with auto-scaling",
      "B. Static token mapping with no rotation",
      "C. Public token storage with default keys",
      "D. Single-use tokens without optimization"
    ],
    correctAnswer: "D",
    explanation: "Dynamic token vault with auto-scaling mitigates tokenization overhead, blending architecture and data security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A telecom provider secures a containerized architecture on Azure, integrating Cloud Platform Security. What policy prevents privilege escalation? (D1.18, D4.4)",
    options: [
      "A. Least privilege with container isolation",
      "B. Open access with default roles",
      "C. Shared containers with no checks",
      "D. Public endpoints with static permissions"
    ],
    correctAnswer: "A",
    explanation: "Least privilege with container isolation prevents privilege escalation, combining architecture and platform security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "An e-commerce platform optimizes a global CDN on AWS, integrating Cloud Security Operations. What configuration detects DDoS anomalies? (D1.19, D6.4)",
    options: [
      "A. Real-time analytics with geo-fencing",
      "B. Single-region caching with no monitoring",
      "C. Public endpoints with default rules",
      "D. Local caching without alerts"
    ],
    correctAnswer: "C",
    explanation: "Real-time analytics with geo-fencing detects DDoS anomalies, blending architecture and security operations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A pharmaceutical firm designs a fault-tolerant architecture on GCP, ensuring ISO 27001 compliance. What redundancy strategy mitigates outages? (D1.20, D7.3)",
    options: [
      "A. Multi-region active-active with audits",
      "B. Single-region failover with no checks",
      "C. Unencrypted replication with public access",
      "D. Passive redundancy without validation"
    ],
    correctAnswer: "A",
    explanation: "Multi-region active-active with audits mitigates outages and ensures ISO 27001 compliance.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A retail chain secures a multi-cloud API gateway with AWS and Azure, integrating Cloud Application Security. What authentication prevents brute force? (D1.21, D5.4)",
    options: [
      "A. Adaptive MFA with rate limiting",
      "B. Open access with static keys",
      "C. Single-factor authentication with no checks",
      "D. Public endpoints with default rules"
    ],
    correctAnswer: "B",
    explanation: "Adaptive MFA with rate limiting prevents brute force, blending architecture and application security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A defense contractor designs a high-availability architecture on AWS, integrating Cloud Data Security. What encryption strategy supports 99.99% uptime? (D1.22, D3.6)",
    options: [
      "A. End-to-end AES-256 with failover",
      "B. Single-region encryption with no redundancy",
      "C. Unencrypted backups with public access",
      "D. Static keys with no rotation"
    ],
    correctAnswer: "D",
    explanation: "End-to-end AES-256 with failover supports 99.99% uptime, combining architecture and data security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A telecom operator optimizes a serverless architecture on Azure, integrating Cloud Platform Security. What policy reduces latency spikes? (D1.23, D4.5)",
    options: [
      "A. Pre-provisioned functions with IAM",
      "B. Default provisioning with no optimization",
      "C. Single-region deployment with HTTP",
      "D. Unmonitored functions with public access"
    ],
    correctAnswer: "A",
    explanation: "Pre-provisioned functions with IAM reduce latency spikes, blending architecture and platform security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A financial institution secures a hybrid cloud with GCP, integrating Cloud Security Operations. What monitoring detects ransomware? (D1.24, D6.5)",
    options: [
      "A. Behavioral analysis with SIEM",
      "B. Basic logging with no alerts",
      "C. Network monitoring without tools",
      "D. Static reviews with no detection"
    ],
    correctAnswer: "C",
    explanation: "Behavioral analysis with SIEM detects ransomware, combining architecture and security operations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "An e-commerce platform designs a scalable architecture on AWS, integrating Cloud Application Security. What caching prevents XSS? (D1.25, D5.5)",
    options: [
      "A. Edge caching with content security policy",
      "B. Single-region caching with no filtering",
      "C. Public caching with default rules",
      "D. Local caching without security"
    ],
    correctAnswer: "B",
    explanation: "Edge caching with content security policy prevents XSS, blending architecture and application security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A healthcare provider secures a multi-region architecture on GCP, ensuring HIPAA compliance. What strategy balances redundancy and masking? (D1.36, D3.10)",
    options: [
      "A. Active-passive with data masking",
      "B. Single-region with no security",
      "C. Unencrypted multi-region backups",
      "D. Passive with public access"
    ],
    correctAnswer: "A",
    explanation: "Active-passive with data masking balances redundancy and HIPAA-compliant masking.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A global bank designs a cost-optimized architecture with GCP, integrating Cloud Data Security. What strategy mitigates DLP overhead? (D1.37, D3.11)",
    options: [
      "A. Automated DLP with auto-scaling",
      "B. Static rules with no updates",
      "C. Public data sharing with default settings",
      "D. Single-use policies without optimization"
    ],
    correctAnswer: "D",
    explanation: "Automated DLP with auto-scaling mitigates DLP overhead, blending architecture and data security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A telecom provider secures a containerized architecture on Azure, integrating Cloud Platform Security. What policy prevents runtime attacks? (D1.38, D4.8)",
    options: [
      "A. Runtime monitoring with least privilege",
      "B. Open access with default roles",
      "C. Shared containers with no checks",
      "D. Public endpoints with static permissions"
    ],
    correctAnswer: "A",
    explanation: "Runtime monitoring with least privilege prevents runtime attacks, combining architecture and platform security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "An e-commerce platform optimizes a global CDN on GCP, integrating Cloud Security Operations. What configuration detects malware? (D1.39, D6.8)",
    options: [
      "A. File integrity monitoring with SIEM",
      "B. Single-region caching with no monitoring",
      "C. Public endpoints with default rules",
      "D. Local caching without alerts"
    ],
    correctAnswer: "C",
    explanation: "File integrity monitoring with SIEM detects malware, blending architecture and security operations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A pharmaceutical firm designs a fault-tolerant architecture on AWS, ensuring CCPA compliance. What redundancy strategy mitigates breaches? (D1.40, D7.5)",
    options: [
      "A. Multi-region active-active with encryption",
      "B. Single-region failover with no checks",
      "C. Unencrypted replication with public access",
      "D. Passive redundancy without validation"
    ],
    correctAnswer: "A",
    explanation: "Multi-region active-active with encryption mitigates breaches and ensures CCPA compliance.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A retail chain secures a multi-cloud API gateway with AWS and Azure, integrating Cloud Application Security. What authentication prevents credential stuffing? (D1.41, D5.8)",
    options: [
      "A. Rate-limited MFA with CAPTCHA",
      "B. Open access with static keys",
      "C. Single-factor auth with no checks",
      "D. Public endpoints with default rules"
    ],
    correctAnswer: "A",
    explanation: "Rate-limited MFA with CAPTCHA prevents credential stuffing, blending architecture and application security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A defense contractor designs a high-availability architecture on Azure, integrating Cloud Data Security. What encryption supports 99.99% uptime? (D1.42, D3.12)",
    options: [
      "A. End-to-end AES-256 with failover",
      "B. Single-region encryption with no redundancy",
      "C. Unencrypted backups with public access",
      "D. Static keys with no rotation"
    ],
    correctAnswer: "D",
    explanation: "End-to-end AES-256 with failover supports 99.99% uptime, combining architecture and data security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A telecom operator optimizes a serverless architecture on AWS, integrating Cloud Platform Security. What policy reduces memory leaks? (D1.43, D4.9)",
    options: [
      "A. Memory profiling with IAM",
      "B. Default provisioning with no optimization",
      "C. Single-region deployment with HTTP",
      "D. Unmonitored functions with public access"
    ],
    correctAnswer: "A",
    explanation: "Memory profiling with IAM reduces memory leaks, blending architecture and platform security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A financial institution secures a hybrid cloud with AWS, integrating Cloud Security Operations. What monitoring detects data exfiltration? (D1.44, D6.9)",
    options: [
      "A. Traffic analysis with DLP",
      "B. Basic logging with no alerts",
      "C. Network monitoring without tools",
      "D. Static reviews with no detection"
    ],
    correctAnswer: "C",
    explanation: "Traffic analysis with DLP detects data exfiltration, combining architecture and security operations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "An e-commerce platform designs a scalable architecture on Azure, integrating Cloud Application Security. What caching prevents clickjacking? (D1.45, D5.9)",
    options: [
      "A. Edge caching with X-Frame-Options",
      "B. Single-region caching with no filtering",
      "C. Public caching with default rules",
      "D. Local caching without security"
    ],
    correctAnswer: "A",
    explanation: "Edge caching with X-Frame-Options prevents clickjacking, blending architecture and application security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A healthcare provider secures a multi-region architecture on GCP, ensuring PCI DSS compliance. What strategy balances redundancy and anonymization? (D1.46, D3.13)",
    options: [
      "A. Active-passive with data anonymization",
      "B. Single-region with no security",
      "C. Unencrypted multi-region backups",
      "D. Passive with public access"
    ],
    correctAnswer: "A",
    explanation: "Active-passive with data anonymization balances redundancy and PCI DSS-compliant anonymization.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A global bank designs a cost-optimized architecture with Azure, integrating Cloud Data Security. What strategy mitigates encryption overhead? (D1.47, D3.14)",
    options: [
      "A. Optimized KMS with auto-scaling",
      "B. Static keys with no updates",
      "C. Public key storage with default settings",
      "D. Single-use keys without optimization"
    ],
    correctAnswer: "D",
    explanation: "Optimized KMS with auto-scaling mitigates encryption overhead, blending architecture and data security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A telecom provider secures a containerized architecture on AWS, integrating Cloud Platform Security. What policy prevents container hijacking? (D1.48, D4.10)",
    options: [
      "A. Runtime hardening with least privilege",
      "B. Open access with default roles",
      "C. Shared containers with no checks",
      "D. Public endpoints with static permissions"
    ],
    correctAnswer: "A",
    explanation: "Runtime hardening with least privilege prevents container hijacking, combining architecture and platform security.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "An e-commerce platform optimizes a global CDN on Azure, integrating Cloud Security Operations. What configuration detects API abuse? (D1.49, D6.10)",
    options: [
      "A. API gateway with rate limiting",
      "B. Single-region caching with no monitoring",
      "C. Public endpoints with default rules",
      "D. Local caching without alerts"
    ],
    correctAnswer: "C",
    explanation: "API gateway with rate limiting detects API abuse, blending architecture and security operations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "A pharmaceutical firm designs a fault-tolerant architecture on GCP, ensuring ISO 27001 compliance. What redundancy strategy mitigates ransomware? (D1.50, D7.6)",
    options: [
      "A. Multi-region active-active with immutable backups",
      "B. Single-region failover with no checks",
      "C. Unencrypted replication with public access",
      "D. Passive redundancy without validation"
    ],
    correctAnswer: "A",
    explanation: "Multi-region active-active with immutable backups mitigates ransomware and ensures ISO 27001 compliance.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "very hard"
  },
  {
    question: "According to (ISC)2, the lack/ambiguity of physical endpoints as individual network components in the cloud environment creates what kind of threat/concern?",
    options: [
      "A. The lack of defined endpoints makes it difficult to uniformly define, manage, and protect IT assets.",
      "B. Without physical endpoints, it is impossible to apply security controls to an environment.",
      "C. The lack of physical endpoints increases the opportunity for physical theft/damage.",
      "D. The lack of defined endpoints makes it easier to audit."
    ],
    correctAnswer: "A",
    explanation: "Without defined endpoints, it is difficult to uniformly define, manage, and protect IT assets in the cloud.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What are the two general delivery modes for the software as a service (SaaS) model?",
    options: [
      "A. Hosted application management and software on demand",
      "B. Framed and modular",
      "C. Managed and unmanaged",
      "D. Virtual and physical"
    ],
    correctAnswer: "A",
    explanation: "SaaS is delivered as hosted application management and software on demand.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a management risk that organizations migrating to the cloud will have to address?",
    options: [
      "A. Virtual sprawl",
      "B. Data residency",
      "C. Network latency",
      "D. Application compatibility"
    ],
    correctAnswer: "A",
    explanation: "Virtual sprawl is a management risk for organizations migrating to the cloud.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which cloud service model should a software company CEO most likely consider for migration from on-premises?",
    options: [
      "A. Platform as a service (PaaS)",
      "B. Software as a service (SaaS)",
      "C. Infrastructure as a service (IaaS)",
      "D. Function as a service (FaaS)"
    ],
    correctAnswer: "B",
    explanation: "SaaS is often the most suitable model for companies migrating from traditional environments.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What aspect of cloud computing should a CEO be most concerned about when migrating to the cloud?",
    options: [
      "A. Multitenancy",
      "B. Metered service",
      "C. Elasticity",
      "D. On-demand self-service"
    ],
    correctAnswer: "A",
    explanation: "Multitenancy is a key concern due to shared resources and security implications.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "According to PCI DSS, what can you never store for any length of time?",
    options: [
      "A. Cardholder name",
      "B. The credit card verification (CCV) number",
      "C. Billing address",
      "D. Expiration date"
    ],
    correctAnswer: "B",
    explanation: "PCI DSS prohibits storing the CCV number for any length of time.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is usually considered the difference between business continuity (BC) and disaster recovery (DR) efforts?",
    options: [
      "A. BC involves a recovery time objective (RTO), DR involves a recovery point objective (RPO)",
      "B. BC is for human-caused events, DR is for natural disasters",
      "C. BC is about maintaining critical functions during disruption, DR is about recovering to normal operations",
      "D. BC protects human assets, DR protects property"
    ],
    correctAnswer: "C",
    explanation: "BC maintains critical functions during disruption; DR recovers to normal operations after disruption.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a management risk that organizations migrating to the cloud will have to address?",
    options: [
      "A. Insider threat",
      "B. Virtual sprawl",
      "C. Distributed denial of service (DDoS) attacks",
      "D. Natural disasters"
    ],
    correctAnswer: "B",
    explanation: "Virtual sprawl is a management risk for organizations migrating to the cloud.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  }
  ,
  {
    question: "Which cloud deployment model provides the highest level of control and customization for an organization?",
    options: [
      "A. Public cloud",
      "B. Private cloud",
      "C. Hybrid cloud",
      "D. Community cloud"
    ],
    correctAnswer: "B",
    explanation: "Private cloud offers the highest level of control and customization, as resources are dedicated to a single organization.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the primary advantage of using cloud-native applications?",
    options: [
      "A. Reliance on legacy systems",
      "B. Enhanced scalability and agility",
      "C. Simplified physical server maintenance",
      "D. Reduced compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "Cloud-native applications are designed for scalability and agility, leveraging microservices and containers.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which essential cloud characteristic allows users to access resources from anywhere over the internet?",
    options: [
      "A. Broad network access",
      "B. Resource pooling",
      "C. Rapid elasticity",
      "D. On-demand self-service"
    ],
    correctAnswer: "A",
    explanation: "Broad network access enables users to access cloud resources from various locations and devices.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a key benefit of using a multi-cloud approach?",
    options: [
      "A. Increased vendor lock-in",
      "B. Enhanced redundancy and flexibility",
      "C. Simplified management",
      "D. Reduced compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "A multi-cloud approach enhances redundancy and flexibility by leveraging multiple providers.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which cloud service model provides the most granular control over infrastructure components?",
    options: [
      "A. SaaS",
      "B. PaaS",
      "C. IaaS",
      "D. FaaS"
    ],
    correctAnswer: "C",
    explanation: "IaaS provides granular control over infrastructure components such as servers, storage, and networking.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the main purpose of cloud governance?",
    options: [
      "A. Managing physical data centers",
      "B. Establishing policies and controls for cloud resource usage",
      "C. Developing application code",
      "D. Monitoring network performance"
    ],
    correctAnswer: "B",
    explanation: "Cloud governance establishes policies and controls for secure and efficient cloud resource usage.",
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
  }
  ,
  {
    question: "Which cloud deployment model is most suitable for organizations requiring shared infrastructure among similar compliance needs?",
    options: [
      "A. Public cloud",
      "B. Private cloud",
      "C. Community cloud",
      "D. Hybrid cloud"
    ],
    correctAnswer: "C",
    explanation: "Community cloud is designed for organizations with similar compliance needs to share infrastructure.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary benefit of using cloud-based disaster recovery solutions?",
    options: [
      "A. Increased physical server maintenance",
      "B. Rapid recovery and scalability",
      "C. Reduced network performance",
      "D. Simplified compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "Cloud-based disaster recovery solutions offer rapid recovery and scalability compared to traditional methods.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which essential characteristic of cloud computing allows for dynamic allocation of resources based on demand?",
    options: [
      "A. Broad network access",
      "B. Resource pooling",
      "C. Rapid elasticity",
      "D. On-demand self-service"
    ],
    correctAnswer: "C",
    explanation: "Rapid elasticity enables dynamic allocation and scaling of resources in response to demand.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "easy"
  },
  {
    question: "What is a key challenge when implementing cloud-based identity and access management (IAM) systems?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring least privilege and secure authentication",
      "C. Reducing application latency",
      "D. Simplifying compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "Ensuring least privilege and secure authentication is a key challenge in cloud IAM systems.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which cloud service model is best for organizations seeking to outsource application hosting and management?",
    options: [
      "A. SaaS",
      "B. PaaS",
      "C. IaaS",
      "D. FaaS"
    ],
    correctAnswer: "A",
    explanation: "SaaS allows organizations to outsource application hosting and management to the provider.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the main advantage of using auto-scaling in cloud architectures?",
    options: [
      "A. Increased manual intervention",
      "B. Dynamic resource allocation based on demand",
      "C. Reduced network performance",
      "D. Simplified compliance requirements"
    ],
    correctAnswer: "B",
    explanation: "Auto-scaling enables dynamic resource allocation, improving efficiency and cost-effectiveness.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary consideration when designing a cloud-based backup strategy?",
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
    question: "What is a key benefit of using a cloud-based monitoring system?",
    options: [
      "A. Managing physical server hardware",
      "B. Real-time visibility into resource performance",
      "C. Reduced storage costs",
      "D. Automating application development"
    ],
    correctAnswer: "B",
    explanation: "Cloud-based monitoring systems provide real-time visibility into resource performance and health.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which cloud deployment model offers the greatest flexibility for combining on-premises and cloud resources?",
    options: [
      "A. Public cloud",
      "B. Private cloud",
      "C. Hybrid cloud",
      "D. Community cloud"
    ],
    correctAnswer: "C",
    explanation: "Hybrid cloud offers flexibility by combining on-premises and cloud resources to meet diverse needs.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
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
    explanation: "Logical separation of tenant data is critical for security in multi-tenant cloud architectures.",
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
    explanation: "Community cloud reduces costs while addressing common security and compliance requirements among similar organizations.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  }
  ,
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
  }
  ,
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
  }
  ,
  {
    question: "Which of the following probably poses the most significant risk to the organization?",
    options: [
      "A. Not having essential BC/DR personnel available during a contingency",
      "B. Not including all BC/DR elements in the cloud contract",
      "C. Returning to normal operations too soon",
      "D. Telecommunications outages"
    ],
    correctAnswer: "A",
    explanation: "Not having essential BC/DR personnel available during a contingency is a significant risk.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following probably poses the most significant risk to the organization?",
    options: [
      "A. Lack of data confidentiality during a contingency",
      "B. Lack of regulatory compliance during a contingency",
      "C. Returning to normal operations too late",
      "D. Lack of encrypted communications during a contingency"
    ],
    correctAnswer: "B",
    explanation: "Lack of regulatory compliance during a contingency is a significant risk.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Why does the physical location of your data backup and/or BC/DR failover environment matter?",
    options: [
      "A. It may affect regulatory compliance.",
      "B. Lack of physical security",
      "C. Environmental factors such as humidity",
      "D. It doesn’t matter. Data can be saved anywhere without consequence."
    ],
    correctAnswer: "A",
    explanation: "Physical location may affect regulatory compliance.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "According to ENISA, a cloud risk assessment should provide a means for customers to accomplish all these assurance tasks except:",
    options: [
      "A. Assess risks associated with cloud migration",
      "B. Compare offerings from different cloud providers",
      "C. Reduce the risk of regulatory noncompliance",
      "D. Reduce the assurance burden on cloud providers"
    ],
    correctAnswer: "D",
    explanation: "Reducing the assurance burden on cloud providers is not a customer assurance task.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "ENISA’s definition of cloud computing differs from (ISC)2/NIST. What is one characteristic listed by ENISA but not included in the (ISC)2 definition?",
    options: [
      "A. Metered service",
      "B. Shared resources",
      "C. Scalability",
      "D. Programmatic management"
    ],
    correctAnswer: "D",
    explanation: "Programmatic management is listed by ENISA but not by (ISC)2/NIST.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Risk should always be considered from a business perspective. Risk is often balanced by corresponding:",
    options: [
      "A. Profit",
      "B. Performance",
      "C. Cost",
      "D. Opportunity"
    ],
    correctAnswer: "D",
    explanation: "Risk is often balanced by opportunity.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "When considering migration from on-premise to hosted cloud, an organization should weigh the risks of allowing external entities to access cloud data for collaboration against:",
    options: [
      "A. Not securing the data in the traditional environment",
      "B. Disclosing the data publicly",
      "C. Inviting external personnel into the traditional workspace",
      "D. Sending the data outside the traditional environment for collaboration"
    ],
    correctAnswer: "D",
    explanation: "Sending data outside the traditional environment for collaboration is a risk to weigh.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "There are many ways to handle risk. However, the usual methods for addressing risk are not all possible in the cloud because:",
    options: [
      "A. Cloud data risks cannot be mitigated",
      "B. Migrating into a cloud environment means accepting all risks",
      "C. Some risks cannot be transferred to a cloud provider",
      "D. Cloud providers cannot avoid risk"
    ],
    correctAnswer: "C",
    explanation: "Some risks cannot be transferred to a cloud provider.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In which cloud service model does the customer lose the most control over governance?",
    options: [
      "A. Infrastructure as a service (IaaS)",
      "B. Platform as a service (PaaS)",
      "C. Software as a service (SaaS)",
      "D. Private cloud"
    ],
    correctAnswer: "C",
    explanation: "SaaS model results in the least customer control over governance.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following poses a new risk in the cloud, not affecting the traditional, on-premise IT environment?",
    options: [
      "A. Internal threats",
      "B. Multitenancy",
      "C. Natural disasters",
      "D. Distributed denial of service (DDoS) attacks"
    ],
    correctAnswer: "B",
    explanation: "Multitenancy is a new risk in the cloud environment.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In addition to the security offered by the cloud provider, a cloud customer must consider the security offered by:",
    options: [
      "A. The respective regulator",
      "B. The end user(s)",
      "C. Any vendor previously used in the on-premise environment",
      "D. Any third parties the provider depends on"
    ],
    correctAnswer: "D",
    explanation: "Cloud customers must consider security offered by third parties the provider depends on.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following poses a new risk in the cloud, not affecting the traditional, on-premise IT environment?",
    options: [
      "A. User carelessness",
      "B. Inadvertent breach",
      "C. Device failure",
      "D. Resource exhaustion"
    ],
    correctAnswer: "D",
    explanation: "Resource exhaustion is a new risk in the cloud environment.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Where is isolation failure probably least likely to pose a significant risk?",
    options: [
      "A. Public cloud",
      "B. Private cloud",
      "C. PaaS environment",
      "D. SaaS environment"
    ],
    correctAnswer: "B",
    explanation: "Isolation failure is least likely in a private cloud.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following poses a new risk in the cloud, not affecting the traditional, on-premise environment?",
    options: [
      "A. Fire",
      "B. Legal seizure of another firm’s assets",
      "C. Mandatory privacy data breach notifications",
      "D. Flooding"
    ],
    correctAnswer: "B",
    explanation: "Legal seizure of another firm's assets is a new risk in the cloud.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of these does the cloud customer need to ensure protection of intellectual property created in the cloud?",
    options: [
      "A. Digital rights management (DRM) solutions",
      "B. Identity and access management (IAM) solutions",
      "C. Strong contractual clauses",
      "D. Crypto-shredding"
    ],
    correctAnswer: "C",
    explanation: "Strong contractual clauses help protect intellectual property in the cloud.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What could be the result of failure of the cloud provider to secure the hypervisor so that one user on a VM can see the resource calls of another user's VM?",
    options: [
      "A. Unauthorized data disclosure",
      "B. Inference attacks",
      "C. Social engineering",
      "D. Physical intrusion"
    ],
    correctAnswer: "A",
    explanation: "Unauthorized data disclosure can result from insecure hypervisor.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Key generation in a cloud environment might have less entropy than the traditional environment for all the following reasons except:",
    options: [
      "A. Lack of direct input devices",
      "B. No social factors",
      "C. Uniform build",
      "D. Virtualization"
    ],
    correctAnswer: "D",
    explanation: "Virtualization does not reduce entropy for key generation.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Lack of industry-wide standards for cloud computing creates a potential for:",
    options: [
      "A. Privacy data breach",
      "B. Privacy data disclosure",
      "C. Vendor lock-in",
      "D. Vendor lock-out"
    ],
    correctAnswer: "C",
    explanation: "Vendor lock-in is a potential risk due to lack of standards.",
    domain: "Cloud Concepts, Architecture and Design",
    type: "multiple-choice",
    difficulty: "medium"
  }
  // ...additional questions from 63–73, 133–143 can be appended in the next batch...
];
export default questions;