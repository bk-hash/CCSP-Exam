const questions = [
  {
    question: "What is a primary security consideration for securing a cloud-based virtualized environment?",
    options: [
      "A. Optimizing application performance",
      "B. Ensuring isolation between virtual machines",
      "C. Reducing storage costs",
      "D. Automating user provisioning"
    ],
    correctAnswer: "B",
    explanation: "Ensuring isolation between virtual machines is critical in a cloud-based virtualized environment to prevent unauthorized access and data leakage.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best describes the role of a hypervisor in cloud infrastructure security?",
    options: [
      "A. Managing physical server hardware",
      "B. Providing isolation between virtual machines",
      "C. Optimizing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "A hypervisor provides isolation between virtual machines, ensuring secure separation of workloads in a cloud environment.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of implementing network segmentation in a cloud environment?",
    options: [
      "A. Reducing storage costs",
      "B. Limiting the scope of a security breach",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Network segmentation limits the scope of a security breach by isolating workloads and restricting lateral movement in a cloud environment.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary challenge when securing a cloud-based containerized environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing container images and registries",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing container images and registries is critical in containerized environments to prevent vulnerabilities and ensure secure deployments.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is the primary purpose of implementing a cloud-based Identity and Access Management (IAM) system?",
    options: [
      "A. To optimize application performance",
      "B. To control access to cloud resources",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based IAM system controls access to cloud resources, ensuring only authorized users and services can interact with them.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates Distributed Denial of Service (DDoS) attacks in a cloud environment?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using a cloud-based DDoS protection service",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based DDoS protection service mitigates DDoS attacks by filtering malicious traffic and ensuring service availability.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when securing a cloud-based network infrastructure?",
    options: [
      "A. Optimizing application performance",
      "B. Implementing encryption for data in transit",
      "C. Managing physical server hardware",
      "D. Reducing storage costs"
    ],
    correctAnswer: "B",
    explanation: "Implementing encryption for data in transit (e.g., TLS) is critical to secure cloud-based network infrastructure.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based security group?",
    options: [
      "A. Reducing storage costs",
      "B. Controlling network traffic to cloud resources",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Security groups act as virtual firewalls, controlling network traffic to and from cloud resources to enhance security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when securing a serverless cloud infrastructure?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing function-level permissions",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing function-level permissions, such as least privilege, is critical in serverless architectures due to their event-driven nature.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based firewall?",
    options: [
      "A. Monitoring application performance",
      "B. Filtering network traffic based on rules",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based firewall filters network traffic based on predefined rules to protect cloud infrastructure from unauthorized access.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key benefit of using a cloud-based intrusion detection system (IDS)?",
    options: [
      "A. Reducing storage costs",
      "B. Detecting unauthorized access attempts",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based IDS detects unauthorized access attempts, enhancing infrastructure security by identifying potential threats.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary consideration when securing a cloud-based load balancer?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Implementing TLS for secure traffic",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Implementing TLS for secure traffic is critical to protect data passing through a cloud-based load balancer.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based virtual private cloud (VPC)?",
    options: [
      "A. To optimize application performance",
      "B. To provide isolated network environments",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A VPC provides logically isolated network environments within a cloud provider’s infrastructure, enhancing security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing a multi-cloud infrastructure?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring consistent security policies",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring consistent security policies across multiple cloud providers is a key challenge in a multi-cloud environment.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based security information and event management (SIEM) system?",
    options: [
      "A. Reducing storage costs",
      "B. Centralized monitoring of security events",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based SIEM system provides centralized monitoring and analysis of security events, improving threat detection.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with misconfigured cloud infrastructure?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using automated configuration management tools",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Automated configuration management tools detect and remediate misconfigurations, reducing risks in cloud infrastructure.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based network access control (NAC) system?",
    options: [
      "A. To optimize application performance",
      "B. To restrict unauthorized devices from accessing the network",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A NAC system restricts unauthorized devices from accessing the cloud network, enhancing infrastructure security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based endpoint protection platform?",
    options: [
      "A. Reducing storage costs",
      "B. Protecting cloud workloads from malware",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based endpoint protection platform protects cloud workloads from malware and other threats.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when securing a cloud-based hybrid infrastructure?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring seamless security across on-premises and cloud",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring seamless security across on-premises and cloud environments is a key challenge in hybrid cloud infrastructures.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based security policy?",
    options: [
      "A. Monitoring application performance",
      "B. Defining rules for securing infrastructure",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based security policy defines rules and controls for securing cloud infrastructure, ensuring compliance and protection.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing a cloud-based disaster recovery plan?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring rapid recovery of infrastructure",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring rapid recovery of infrastructure is critical for a cloud-based disaster recovery plan to minimize downtime.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based web application firewall (WAF)?",
    options: [
      "A. Reducing storage costs",
      "B. Protecting web applications from attacks",
      "C. Enhancing network performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based WAF protects web applications from attacks like SQL injection and XSS, enhancing infrastructure security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based patch management system?",
    options: [
      "A. To optimize application performance",
      "B. To ensure timely updates to infrastructure components",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A patch management system ensures timely updates to cloud infrastructure components, reducing vulnerabilities.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing a cloud-based storage system?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring data encryption and access controls",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring data encryption and access controls is critical to secure cloud-based storage systems from unauthorized access.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based vulnerability scanning tool?",
    options: [
      "A. Reducing storage costs",
      "B. Identifying weaknesses in cloud infrastructure",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Vulnerability scanning tools identify weaknesses in cloud infrastructure, enabling proactive remediation.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with cloud-based API access?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using API gateways with authentication controls",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "API gateways with authentication controls (e.g., OAuth, API keys) mitigate risks by securing cloud-based API access.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based network monitoring system?",
    options: [
      "A. To optimize application performance",
      "B. To detect suspicious network activity",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A network monitoring system detects suspicious activity, enhancing the security of cloud infrastructure.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based configuration management system?",
    options: [
      "A. Reducing storage costs",
      "B. Ensuring consistent infrastructure configurations",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A configuration management system ensures consistent and secure infrastructure configurations in the cloud.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when securing a cloud-based microservices architecture?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing inter-service communication",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing inter-service communication, such as with mutual TLS, is a key challenge in microservices architectures.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based security orchestration tool?",
    options: [
      "A. Monitoring application performance",
      "B. Automating security response workflows",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A security orchestration tool automates response workflows, improving efficiency in handling cloud security incidents.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing a cloud-based backup and recovery system?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring data integrity and availability",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring data integrity and availability is critical for a cloud-based backup and recovery system.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based threat intelligence platform?",
    options: [
      "A. Reducing storage costs",
      "B. Providing real-time threat insights",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A threat intelligence platform provides real-time insights into threats, enhancing cloud infrastructure security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based access control list (ACL)?",
    options: [
      "A. To optimize application performance",
      "B. To restrict access to cloud resources",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "An ACL restricts access to cloud resources based on defined rules, enhancing infrastructure security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing a cloud-based SDN (Software-Defined Networking)?",
    options: [
      "A. Managing physical server hardware",
      "B. Protecting the control plane from attacks",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Protecting the control plane from attacks is a key challenge in securing SDN in a cloud environment.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based encryption management system?",
    options: [
      "A. Reducing storage costs",
      "B. Simplifying key management and compliance",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A cloud-based encryption management system simplifies key management and ensures compliance with security standards.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with cloud-based storage misconfigurations?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Using automated compliance scanning tools",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Automated compliance scanning tools detect and remediate storage misconfigurations, reducing risks in the cloud.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based incident response plan?",
    options: [
      "A. To optimize application performance",
      "B. To mitigate and recover from security incidents",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "An incident response plan mitigates and recovers from security incidents, ensuring rapid response in a cloud environment.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based penetration testing service?",
    options: [
      "A. Reducing storage costs",
      "B. Identifying vulnerabilities in cloud infrastructure",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Penetration testing services identify vulnerabilities in cloud infrastructure, enabling proactive remediation.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary challenge when securing a cloud-based IaaS environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing customer-managed operating systems",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing customer-managed operating systems is a key challenge in IaaS, as customers are responsible for their security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "Which of the following best describes the role of a cloud-based security audit?",
    options: [
      "A. Monitoring application performance",
      "B. Assessing compliance with security policies",
      "C. Optimizing storage resources",
      "D. Automating user access"
    ],
    correctAnswer: "B",
    explanation: "A security audit assesses compliance with security policies and identifies gaps in cloud infrastructure security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when implementing a cloud-based logging system for infrastructure security?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Ensuring log integrity and retention",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Ensuring log integrity and retention is critical for a cloud-based logging system to support security and compliance.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary benefit of using a cloud-based security posture management tool?",
    options: [
      "A. Reducing storage costs",
      "B. Continuous assessment of infrastructure security",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Security posture management tools continuously assess cloud infrastructure security, identifying and mitigating risks.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based network encryption protocol?",
    options: [
      "A. To optimize application performance",
      "B. To secure data in transit across networks",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "Network encryption protocols (e.g., TLS, IPSec) secure data in transit across cloud networks, protecting it from interception.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key challenge when securing a cloud-based PaaS environment?",
    options: [
      "A. Managing physical server hardware",
      "B. Securing customer-developed applications",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Securing customer-developed applications is a key challenge in PaaS, as customers manage application-level security.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  },
  {
    question: "What is a primary benefit of using a cloud-based network intrusion prevention system (IPS)?",
    options: [
      "A. Reducing storage costs",
      "B. Blocking malicious network traffic",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "A network IPS blocks malicious traffic, enhancing cloud infrastructure security by preventing attacks.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following best mitigates risks associated with cloud-based infrastructure vulnerabilities?",
    options: [
      "A. Implementing multifactor authentication",
      "B. Regularly scanning and patching systems",
      "C. Optimizing network bandwidth",
      "D. Automating software updates"
    ],
    correctAnswer: "B",
    explanation: "Regularly scanning and patching systems mitigates vulnerabilities in cloud infrastructure, reducing the risk of exploitation.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a primary purpose of implementing a cloud-based security governance framework?",
    options: [
      "A. To optimize application performance",
      "B. To establish policies for infrastructure security",
      "C. To reduce storage costs",
      "D. To simplify user authentication"
    ],
    correctAnswer: "B",
    explanation: "A security governance framework establishes policies and controls for securing cloud infrastructure.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a key benefit of using a cloud-based compliance monitoring tool?",
    options: [
      "A. Reducing storage costs",
      "B. Ensuring adherence to regulatory requirements",
      "C. Enhancing application performance",
      "D. Simplifying physical security"
    ],
    correctAnswer: "B",
    explanation: "Compliance monitoring tools ensure cloud infrastructure adheres to regulatory requirements, such as GDPR or HIPAA.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a key consideration when securing a cloud-based API gateway?",
    options: [
      "A. Optimizing network bandwidth",
      "B. Implementing rate limiting and authentication",
      "C. Managing physical server hardware",
      "D. Reducing application latency"
    ],
    correctAnswer: "B",
    explanation: "Implementing rate limiting and authentication (e.g., OAuth, API keys) is critical to secure a cloud-based API gateway.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a primary challenge when securing a cloud-based virtual network?",
    options: [
      "A. Managing physical server hardware",
      "B. Ensuring proper network isolation",
      "C. Reducing network bandwidth",
      "D. Automating application deployment"
    ],
    correctAnswer: "B",
    explanation: "Ensuring proper network isolation is a key challenge to prevent unauthorized access in a cloud-based virtual network.",
    domain: "Cloud Platform and Infrastructure Security",
    type: "multiple-choice",
    difficulty: "hard"
  }
];
export default questions;