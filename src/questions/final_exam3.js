const examQuestions = [
  {
    question: "Which data protection strategy would be useful for a situation where the ability to remove sensitive data from a set is needed, but a requirement to retain the ability to map back to the original values is also present?",
    options: ["A. Masking", "B. Tokenization", "C. Encryption", "D. Anonymization"],
    correctAnswer: "B",
    explanation: "Tokenization removes the sensitive value from operational use while preserving a lookup back to the original through a token vault.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "A comprehensive BCDR plan will encapsulate many or most of the traditional concerns of operating a system in any data center.However, what is one consideration that is often overlooked with the formulation of a BCDR plan?",
    options: ["A. Availability of staff", "B. Capacity at the BCDR site", "C. Restoration of services", "D. Change management processes"],
    correctAnswer: "A",
    explanation: "BCDR planning often focuses on systems and sites but overlooks whether enough trained personnel will be available during an incident.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT one of the components of multifactor authentication?",
    options: ["A. Something the user knows", "B. Something the user has", "C. Something the user sends", "D. Something the user is"],
    correctAnswer: "C",
    explanation: "Classic MFA factors are something you know, have, are, do, or where you are. \"Something the user sends\" is not a standard factor category.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Above and beyond general regulations for data privacy and protection, certain types of data are subjected to more rigorous regulations and oversight.Which of the following is not a regulatory framework for more sensitive or specialized data?",
    options: ["A. FIPS 140-2", "B. FedRAMP", "C. PCI DSS", "D. HIPAA"],
    correctAnswer: "A",
    explanation: "FIPS 140-2 is a cryptographic module validation standard, not a sector-specific regulatory framework like HIPAA, PCI DSS, or FedRAMP.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which data sanitation method is also commonly referred to as \"zeroing\"?",
    options: ["A. Overwriting", "B. Nullification", "C. Blanking", "D. Deleting"],
    correctAnswer: "A",
    explanation: "Zeroing is a form of overwriting in which storage locations are overwritten with zeros or another pattern.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the concept of isolating an application from the underlying operating system for testing purposes?",
    options: ["A. Abstracting", "B. Application virtualization", "C. Hosting", "D. Sandboxing"],
    correctAnswer: "B",
    explanation: "Application virtualization abstracts the application from the underlying OS so it can run in an isolated or non-native environment.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following could be used as a second component of multifactor authentication if a user has an RSA token?",
    options: ["A. Access card", "B. USB thumb drive", "C. Retina scan", "D. RFID"],
    correctAnswer: "C",
    explanation: "An RSA token is something you have, so the second factor should come from a different factor type. A retina scan adds something you are.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT one of the official risk rating categories?",
    options: ["A. Critical", "B. Low", "C. Catastrophic", "D. Minimal"],
    correctAnswer: "C",
    explanation: "CCSP-style risk ratings are typically expressed as categories like critical, high, medium, low, or minimal. Catastrophic is more commonly an impact severity term than a standard risk rating.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "SOC Type 1 reports are considered \"restricted use,\" in that they are intended only for limited audiences and purposes.Which of the following is NOT a population that would be appropriate for a SOC Type 1 report?",
    options: ["A. Current clients", "B. Auditors", "C. Potential clients", "D. The service organization"],
    correctAnswer: "C",
    explanation: "SOC Type 1 reports are restricted-use reports intended for management, user entities, and their auditors, not general distribution to prospects.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Having a reservation in a cloud environment can ensure operations continue in the event of high utilization across the cloud.Which of the following would NOT be a capability covered by reservations?",
    options: ["A. Performing business operations", "B. Starting virtual machines", "C. Running applications", "D. Auto-scaling"],
    correctAnswer: "D",
    explanation: "Reservations help guarantee baseline capacity for workloads like running applications or starting VMs, but they do not themselves provide elastic auto-scaling behavior.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What must SOAP rely on for security since it does not provide security as a built-in capability?",
    options: ["A. Encryption", "B. Tokenization", "C. TLS", "D. SSL"],
    correctAnswer: "C",
    explanation: "SOAP does not provide transport security by itself and commonly relies on TLS to protect the channel.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With a federated identity system, what does the identity provider send information to after a successful authentication?",
    options: ["A. Relying party", "B. Service originator", "C. Service relay", "D. Service relay"],
    correctAnswer: "A",
    explanation: "In federation, the identity provider authenticates the user and sends assertions to the relying party, which consumes them.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following technologies is NOT commonly used for accessing systems and services in a cloud environment in a secure manner?",
    options: ["A. KVM", "B. HTTPS", "C. VPN", "D. TLS"],
    correctAnswer: "A",
    explanation: "HTTPS, VPN, and TLS are common secure-access technologies. KVM is a hardware or virtualization term, not a standard secure remote access protocol.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which component of ITIL involves handling anything that can impact services for either internal or public users?",
    options: ["A. Incident management", "B. Deployment management", "C. Problem management", "D. Change management"],
    correctAnswer: "A",
    explanation: "ITIL incident management handles events that disrupt or could disrupt services and seeks rapid restoration of normal service.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which protocol, as a part of TLS, handles the actual secure communications and transmission of data?",
    options: ["A. Negotiation", "B. Handshake", "C. Transfer", "D. Record"],
    correctAnswer: "D",
    explanation: "The TLS Record Protocol carries the protected application data after handshake parameters are established.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following terms is NOT a commonly used category of risk acceptance?",
    options: ["A. Moderate", "B. Critical", "C. Minimal", "D. Accepted"],
    correctAnswer: "D",
    explanation: "Accepted is a risk treatment decision, not a risk rating category such as minimal, moderate, or critical.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Many activities within a cloud environment are performed via programmatic means, where complex and distributed operations are handled without the need to perform each step individually.Which of the following concepts does this describe?",
    options: ["A. Orchestration", "B. Provisioning", "C. Automation", "D. Allocation"],
    correctAnswer: "A",
    explanation: "Orchestration coordinates multiple automated tasks and systems into larger workflows across distributed environments.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Being in a cloud environment, cloud customers lose a lot of insight and knowledge as to how their data is stored and their systems are deployed.Which concept from the ISO/IEC cloud standards relates to the necessity of the cloud provider to inform the cloud customer on these issues?",
    options: ["A. Disclosure", "B. Transparency", "C. Openness", "D. Documentation"],
    correctAnswer: "B",
    explanation: "Transparency is the cloud principle requiring the provider to give the customer sufficient visibility into service operation and data handling.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Your IT steering committee has, at a high level, approved your project to begin using cloud services. However, the committee is concerned with getting locked into a single cloud provider and has flagged the ability to easily move between cloud providers as a top priority. It also wants to save costs by reusing components.Which cross-cutting aspect of cloud computing would be your primary focus as your project plan continues to develop and you begin to evaluate cloud providers?",
    options: ["A. Interoperability", "B. Resiliency", "C. Scalability", "D. Portability"],
    correctAnswer: "D",
    explanation: "Portability focuses on moving applications and data between providers with minimal rework, which directly addresses vendor lock-in.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following provides assurance, to a predetermined acceptable level of certainty, that an entity is indeed who they claim to be?",
    options: ["A. Authentication", "B. Identification", "C. Proofing", "D. Authorization"],
    correctAnswer: "A",
    explanation: "Authentication provides assurance that an entity is who it claims to be after identification has occurred.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Whereas a contract articulates overall priorities and requirements for a business relationship, which artifact enumerates specific compliance requirements, metrics, and response times?",
    options: ["A. Service level agreement", "B. Service level contract", "C. Service compliance contract", "D. Service level amendment"],
    correctAnswer: "A",
    explanation: "An SLA defines measurable commitments such as uptime, support response times, and compliance-related service metrics.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When an organization is considering the use of cloud services for BCDR planning and solutions, which of the following cloud concepts would be the most important?",
    options: ["A. Reversibility", "B. Elasticity", "C. Interoperability", "D. Portability"],
    correctAnswer: "B",
    explanation: "BCDR in cloud environments benefits most from elasticity because resources can rapidly scale during failover or recovery.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What masking strategy involves the replacing of sensitive data at the time it is accessed and used as it flows between the data and application layers of a service?",
    options: ["A. Active", "B. Static", "C. Dynamic", "D. Transactional"],
    correctAnswer: "C",
    explanation: "Dynamic masking obscures sensitive values in real time as data is accessed rather than permanently changing the stored data.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following would be considered an example of insufficient due diligence leading to security or operational problems when moving to a cloud?",
    options: ["A. Monitoring", "B. Use of a remote key management system", "C. Programming languages used", "D. Reliance on physical network controls"],
    correctAnswer: "D",
    explanation: "Assuming traditional physical network controls still exist or are visible in cloud is a classic due diligence failure when moving workloads.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of cloud computing serves as the biggest challenge to using DLP to protect data at rest?",
    options: ["A. Portability", "B. Resource pooling", "C. Interoperability", "D. Reversibility"],
    correctAnswer: "B",
    explanation: "Resource pooling and abstraction reduce customer visibility into the physical storage environment, making data-at-rest DLP harder to implement directly.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What category of PII data can carry potential fines or even criminal charges for its improper use or disclosure?",
    options: ["A. Protected", "B. Legal", "C. Regulated", "D. Contractual"],
    correctAnswer: "C",
    explanation: "Regulated PII is governed by legal or regulatory requirements and can trigger fines or criminal penalties if mishandled.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "A variety of security systems can be integrated within a network--some that just monitor for threats and issue alerts, and others that take action based on signatures, behavior, and other types of rules to actively stop potential threats.Which of the following types of technologies is best described here?",
    options: ["A. IDS", "B. IPS", "C. Proxy", "D. Firewall"],
    correctAnswer: "B",
    explanation: "An IPS goes beyond monitoring and can actively block or stop suspicious traffic based on signatures or behavior.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Upon completing a risk analysis, a company has four different approaches to addressing risk. Which approach it takes will be based on costs, available options, and adherence to any regulatory requirements from independent audits.Which of the following groupings correctly represents the four possible approaches?",
    options: ["A. Accept, avoid, transfer, mitigate", "B. Accept, deny, transfer, mitigate", "C. Accept, deny, mitigate, revise", "D. Accept, dismiss, transfer, mitigate"],
    correctAnswer: "A",
    explanation: "Those are the four standard high-level risk treatment options used in information security and cloud risk management.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a component of access control?",
    options: ["A. Accounting", "B. Federation", "C. Authorization", "D. Authentication"],
    correctAnswer: "B",
    explanation: "Access control is built around identification, authentication, authorization, and accountability. Federation is an identity architecture approach, not a core access control component.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What concept does the A represent within the DREAD model?",
    options: ["A. Affected users", "B. Authorization", "C. Authentication", "D. Affinity"],
    correctAnswer: "A",
    explanation: "In DREAD, the A stands for Affected Users, which estimates how many people a threat would impact.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With an application hosted in a cloud environment, who could be the recipient of an eDiscovery order?",
    options: ["A. Users", "B. Both the cloud provider and cloud customer", "C. The cloud customer", "D. The cloud provider"],
    correctAnswer: "B",
    explanation: "Depending on control, custody, and contract terms, either or both parties may receive eDiscovery demands in cloud-hosted environments.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which ITIL component focuses on ensuring that system resources, processes, and personnel are properly allocated to meet SLA requirements?",
    options: ["A. Continuity management", "B. Availability management", "C. Configuration management", "D. Problem management"],
    correctAnswer: "B",
    explanation: "Availability management ensures service resources and processes are sufficient to meet agreed SLA availability targets.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which ITIL component is an ongoing, iterative process of tracking all deployed and configured resources that an organization uses and depends on, whether they are hosted in a traditional data center or a cloud?",
    options: ["A. Problem management", "B. Continuity management", "C. Availability management", "D. Configuration management"],
    correctAnswer: "D",
    explanation: "Configuration management tracks and maintains information about systems, components, and their relationships across the environment.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When beginning an audit, both the system owner and the auditors must agree on various aspects of the final audit report.Which of the following would NOT be something that is predefined as part of the audit agreement?",
    options: ["A. Size", "B. Format", "C. Structure", "D. Audience"],
    correctAnswer: "A",
    explanation: "Audit agreements typically define the report format, structure, and audience. Size is not normally a formal predefined audit report attribute.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What concept does the D represent within the STRIDE threat model?",
    options: ["A. Denial of service", "B. Distributed", "C. Data breach", "D. Data loss"],
    correctAnswer: "A",
    explanation: "In STRIDE, D represents Denial of Service, which targets system availability.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the concept of segregating information or processes, within the same system or application, for security reasons?",
    options: ["A. Cell blocking", "B. Sandboxing", "C. Pooling", "D. Fencing"],
    correctAnswer: "B",
    explanation: "Sandboxing isolates code or processes inside controlled boundaries to limit interaction with the rest of the system.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which cloud service category most commonly uses client-side key management systems?",
    options: ["A. Software as a Service", "B. Infrastructure as a Service", "C. Platform as a Service", "D. Desktop as a Service"],
    correctAnswer: "A",
    explanation: "Client-side key management is most common with SaaS when customers want to retain cryptographic control over provider-hosted application data.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Apart from using encryption at the file system level, what technology is the most widely used to protect data stored in an object storage system?",
    options: ["A. TLS", "B. HTTPS", "C. VPN", "D. IRM"],
    correctAnswer: "D",
    explanation: "Information Rights Management adds persistent protection and usage restrictions to content stored as objects, complementing storage encryption.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following types of data would fall under data rights management (DRM) rather than information rights management (IRM)?",
    options: ["A. Personnel data", "B. Security profiles", "C. Publications", "D. Financial records"],
    correctAnswer: "C",
    explanation: "DRM is typically applied to published content and media, while IRM is more often used for enterprise documents and business information.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Different security testing methodologies offer different strategies and approaches to testing systems, requiring security personnel to determine the best type to use for their specific circumstances.What does dynamic application security testing (DAST) NOT entail that SAST does?",
    options: ["A. Discovery", "B. Knowledge of the system", "C. Scanning", "D. Probing"],
    correctAnswer: "B",
    explanation: "SAST analyzes source or compiled code and therefore depends on internal knowledge of the application, unlike black-box DAST.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "You need to gain approval to begin moving your company's data and systems into a cloud environment. However, your CEO has mandated the ability to easily remove your IT assets from the cloud provider as a precondition.Which of the following cloud concepts would this pertain to?",
    options: ["A. Removability", "B. Extraction", "C. Portability", "D. Reversibility"],
    correctAnswer: "D",
    explanation: "Reversibility is the ability to remove assets, data, and dependencies from a provider and restore operations elsewhere.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What does static application security testing (SAST) offer as a tool to the testers that makes it unique compared to other common security testing methodologies?",
    options: ["A. Live testing", "B. Source code access", "C. Production system scanning", "D. Injection attempts"],
    correctAnswer: "B",
    explanation: "SAST is unique because it inspects source or bytecode directly rather than probing a running application from the outside.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "A main objective for an organization when utilizing cloud services is to avoid vendor lock-in so as to ensure flexibility and maintain independence.Which core concept of cloud computing is most related to vendor lock-in?",
    options: ["A. Scalability", "B. Interoperability", "C. Portability", "D. Reversibility"],
    correctAnswer: "C",
    explanation: "Vendor lock-in is primarily reduced by designing for portability so data and workloads can move between environments.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following areas of responsibility always falls completely under the purview of the cloud provider, regardless of which cloud service category is used?",
    options: ["A. Infrastructure", "B. Data", "C. Physical", "D. Governance"],
    correctAnswer: "C",
    explanation: "Physical facilities and environmental controls remain the cloud provider's responsibility across all service models.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of masking would you employ to produce a separate data set for testing purposes based on production data without any sensitive information?",
    options: ["A. Dynamic", "B. Tokenized", "C. Replicated", "D. Static"],
    correctAnswer: "D",
    explanation: "Static masking creates a sanitized copy of production data for testing or development without exposing live sensitive data.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of data poses the biggest challenge to using automated tools for data discovery and programmatic data classification?",
    options: ["A. Quantity", "B. Language", "C. Quality", "D. Number of courses"],
    correctAnswer: "A",
    explanation: "The sheer volume of enterprise data is the main obstacle to automated discovery and classification at scale.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When an organization is considering a cloud environment for hosting BCDR solutions, which of the following would be the greatest concern?",
    options: ["A. Self-service", "B. Resource pooling", "C. Availability", "D. Location"],
    correctAnswer: "C",
    explanation: "A cloud-hosted BCDR solution is only useful if the recovery environment is actually available when needed.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Just like the risk management process, the BCDR planning process has a defined sequence of steps and processes to follow to ensure the production of a comprehensive and successful plan.Which of the following is the correct sequence of steps for a BCDR plan?",
    options: ["A. Define scope, gather requirements, assess risk, implement", "B. Define scope, gather requirements, implement, assess risk", "C. Gather requirements, define scope, implement, assess risk", "D. Gather requirements, define scope, assess risk, implement"],
    correctAnswer: "A",
    explanation: "A sound BCDR plan starts by setting scope, then gathering business requirements, performing risk analysis, and finally implementing controls and procedures.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of solution is at the core of virtually all directory services?",
    options: ["A. WS", "B. LDAP", "C. ADFS", "D. PKI"],
    correctAnswer: "B",
    explanation: "LDAP is the core query and directory access protocol used by most enterprise directory services.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The different cloud service models have varying levels of responsibilities for functions and operations depending with the model's level of service.In which of the following models would the responsibility for patching lie predominantly with the cloud customer?",
    options: ["A. DaaS", "B. SaaS", "C. PaaS", "D. IaaS"],
    correctAnswer: "D",
    explanation: "In IaaS, the customer manages the guest operating system, including patching and hardening.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which component of ITIL involves the creation of an RFC ticket and obtaining official approvals for it?",
    options: ["A. Problem management", "B. Release management", "C. Deployment management", "D. Change management"],
    correctAnswer: "D",
    explanation: "Creating an RFC and obtaining formal approvals are classic ITIL change management activities.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following are attributes of cloud computing?",
    options: ["A. Minimal management effort and shared resources", "B. High cost and unique resources", "C. Rapid provisioning and slow release of resources", "D. Limited access and service provider interaction"],
    correctAnswer: "A",
    explanation: "Cloud computing is defined by characteristics such as broad access, pooled resources, rapid elasticity, and reduced management effort.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In a cloud environment, encryption should be used for all the following, except:",
    options: ["A. Secure sessions/VPN", "B. Long-term storage of data", "C. Near-term storage of virtualized images", "D. Profile formatting"],
    correctAnswer: "D",
    explanation: "Encryption is appropriate for data in transit and at rest, but profile formatting is not a data protection use case.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is considered a technological control?",
    options: ["A. Firewall software", "B. Firing personnel", "C. Fireproof safe", "D. Fire extinguisher"],
    correctAnswer: "A",
    explanation: "Firewall software is a technical or logical security control, unlike personnel actions or physical safety devices.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When using an IaaS solution, what is the capability provided to the customer?",
    options: ["A. To provision processing, storage, networks, and other fundamental computing resources when the consumer is able to deploy and run arbitrary software, which can include OSs and applications.", "B. To provision processing, storage, networks, and other fundamental computing resources when the auditor is able to deploy and run arbitrary software, which can include OSs and applications.", "C. To provision processing, storage, networks, and other fundamental computing resources when the provider is able to deploy and run arbitrary software, which can include OSs and applications.", "D. To provision processing, storage, networks, and other fundamental computing resources when the consumer is not able to deploy and run arbitrary software, which can include OSs and applications."],
    correctAnswer: "A",
    explanation: "That is the NIST-style definition of IaaS: the consumer controls deployed software and OSs while the provider runs the underlying infrastructure.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When using an IaaS solution, what is a key benefit provided to the customer?",
    options: ["A. Metered and priced on the basis of units consumed", "B. Increased energy and cooling system efficiencies", "C. Transferred cost of ownership", "D. The ability to scale up infrastructure services based on projected usage"],
    correctAnswer: "A",
    explanation: "Measured service and pay-as-you-go pricing are core customer benefits of IaaS consumption.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is considered an administrative control?",
    options: ["A. Keystroke logging", "B. Access control process", "C. Door locks", "D. Biometric authentication"],
    correctAnswer: "B",
    explanation: "Processes and procedures are administrative controls, while keystroke logging and biometrics are technical and locks are physical.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is a key capability or characteristic of PaaS?",
    options: ["A. Support for a homogenous environment", "B. Support for a single programming language", "C. Ability to reduce lock-in", "D. Ability to manually scale"],
    correctAnswer: "A",
    explanation: "PaaS provides a standardized application hosting environment, which is one of its defining characteristics.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "n which cloud service model is the customer required to maintain the OS?",
    options: ["A. Iaas Most Voted", "B. CaaS", "C. PaaS", "D. SaaS"],
    correctAnswer: "A",
    explanation: "The customer maintains the operating system in IaaS, unlike PaaS or SaaS where the provider manages more of the stack.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When using a PaaS solution, what is the capability provided to the customer?",
    options: ["A. To deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools that the provider supports. The provider does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.", "B. To deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools that the provider supports. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.", "C. To deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools that the consumer supports. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.", "D. To deploy onto the cloud infrastructure provider-created or acquired applications created using programming languages, libraries, services, and tools that the provider supports. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment."],
    correctAnswer: "B",
    explanation: "That matches the standard definition of PaaS: the customer controls the applications, while the provider manages the platform and infrastructure.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What are SOC 1/SOC 2/SOC 3?",
    options: ["A. Audit reports", "B. Risk management frameworks", "C. Access controls", "D. Software developments"],
    correctAnswer: "A",
    explanation: "SOC 1, SOC 2, and SOC 3 are attestation report types used to communicate audit results about controls.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Gathering business requirements can aid the organization in determining all of this information about organizational assets, except:",
    options: ["A. Full inventory", "B. Criticality", "C. Value", "D. Usefulness"],
    correctAnswer: "D",
    explanation: "Business requirements help determine inventory, value, and criticality. \"Usefulness\" is too subjective to be a standard asset classification outcome.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In attempting to provide a layered defense, the security practitioner should convince senior management to include security controls of which type?",
    options: ["A. Physical", "B. All of the above", "C. technological", "D. Administrative"],
    correctAnswer: "B",
    explanation: "Defense in depth requires administrative, technical, and physical controls working together.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The BIA can be used to provide information about all the following, except:",
    options: ["A. BC/DR planning", "B. Risk analysis", "C. Secure acquisition", "D. Selection of security controls"],
    correctAnswer: "C",
    explanation: "A BIA supports continuity planning, risk decisions, and control prioritization, but it is not primarily a secure acquisition tool.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following are cloud computing roles?",
    options: ["A. Cloud service broker and user", "B. Cloud customer and financial auditor", "C. CSP and backup service provider", "D. Cloud service auditor and object"],
    correctAnswer: "A",
    explanation: "Cloud roles include customer or user, provider, broker, auditor, and carrier, depending on the reference model.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following are considered to be the building blocks of cloud computing?",
    options: ["A. CPU, RAM, storage, and networking", "B. Data, CPU, RAM, and access control", "C. Data, access control, virtualization, and services", "D. Storage, networking, printing, and virtualization"],
    correctAnswer: "A",
    explanation: "Those are the foundational pooled resources from which cloud services are built.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is considered a physical control?",
    options: ["A. Fences", "B. Ceilings", "C. Carpets", "D. Doors"],
    correctAnswer: "A",
    explanation: "Fences are a clear example of a physical security control used to protect facilities.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is an experimental technology that is intended to create the possibility of processing encrypted data without having to decrypt it first?",
    options: ["A. Quantum-state", "B. Polyinstantiation", "C. Homomorphic", "D. Gastronomic"],
    correctAnswer: "C",
    explanation: "Homomorphic encryption is the experimental approach that enables computation on encrypted data without first decrypting it.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following are distinguishing characteristics of a managed service provider?",
    options: ["A. Be able to remotely monitor and manage objects for the customer and proactively maintain these objects under management.", "B. Have some form of a help desk but no NOC.", "C. Be able to remotely monitor and manage objects for the customer and reactively maintain these objects under management.", "D. Have some form of a NOC but no help desk."],
    correctAnswer: "A",
    explanation: "Managed service providers are distinguished by proactive remote monitoring and management rather than merely reactive support.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "To protect data on user devices in a BYOD environment, the organization should consider requiring all the following, except:",
    options: ["A. Multifactor authentication", "B. DLP agents", "C. Two-person integrity", "D. Local encryption"],
    correctAnswer: "C",
    explanation: "BYOD protection commonly uses MFA, local encryption, and DLP agents. Two-person integrity is unrelated to endpoint data protection.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Tokenization requires two distinct _________________ .",
    options: ["A. Authentication factors", "B. Personnel", "C. Databases", "D. Encryption"],
    correctAnswer: "C",
    explanation: "Tokenization typically requires the original data repository and a separate token vault or mapping database.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "DLP can be combined with what other security technology to enhance data controls?",
    options: ["A. DRM", "B. Hypervisor", "C. SIEM", "D. Kerberos"],
    correctAnswer: "A",
    explanation: "DLP and DRM complement each other because DLP helps detect and control data movement while DRM enforces usage restrictions on the data itself.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the intellectual property protection for a confidential recipe for muffins?",
    options: ["A. Patent", "B. Trademark", "C. Trade secret", "D. Copyright"],
    correctAnswer: "C",
    explanation: "A confidential recipe is protected as a trade secret if it derives value from secrecy and is properly safeguarded.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Every security program and process should have which of the following?",
    options: ["A. Severe penalties", "B. Multifactor authentication", "C. Foundational policy", "D. Homomorphic encryption"],
    correctAnswer: "C",
    explanation: "Security programs need policy as their governing foundation so controls and procedures have authoritative direction.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "DLP solutions can aid in deterring loss due to which of the following?",
    options: ["A. Inadvertent disclosure", "B. Natural disaster", "C. Randomization", "D. Device failure"],
    correctAnswer: "A",
    explanation: "DLP is especially effective at reducing accidental leakage of sensitive information through email, endpoints, or uploads.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "All policies within the organization should include a section that includes all of the following, except:",
    options: ["A. Policy adjudication", "B. Policy maintenance", "C. Policy review", "D. Policy enforcement"],
    correctAnswer: "A",
    explanation: "Policies normally include review, enforcement, and maintenance provisions. Adjudication is not a standard universal policy section.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Proper implementation of DLP solutions for successful function requires which of the following?",
    options: ["A. Physical access limitations", "B. USB connectivity", "C. Accurate data categorization", "D. Physical presence"],
    correctAnswer: "C",
    explanation: "DLP works only when the organization can correctly identify and classify the data it is supposed to protect.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the experimental technology that might lead to the possibility of processing encrypted data without having to decrypt it first?",
    options: ["A. AES", "B. Link encryption", "C. One-time pads", "D. Homomorphic encryption"],
    correctAnswer: "D",
    explanation: "Homomorphic encryption is the concept that allows certain processing directly on ciphertext.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Data labels could include all the following, except:",
    options: ["A. Multifactor authentication", "B. Access restrictions", "C. Confidentiality level", "D. Distribution limitations"],
    correctAnswer: "A",
    explanation: "Data labels carry metadata about the data, such as classification or distribution limits, not user authentication requirements.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In the cloud motif, the data owner is usually:",
    options: ["A. The cloud provider", "B. In another jurisdiction", "C. The cloud customer", "D. The cloud access security broker"],
    correctAnswer: "C",
    explanation: "In cloud governance, the customer generally remains the data owner even when the provider stores or processes the data.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The goals of DLP solution implementation include all of the following, except:",
    options: ["A. Elasticity", "B. Policy enforcement", "C. Data discovery", "D. Loss of mitigation"],
    correctAnswer: "A",
    explanation: "DLP goals include discovery, monitoring, and policy enforcement. Elasticity is a cloud service characteristic, not a DLP objective.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the intellectual property protection for a useful manufacturing innovation?",
    options: ["A. Trademark", "B. Copyright", "C. patent", "D. Trade secret"],
    correctAnswer: "C",
    explanation: "A useful manufacturing innovation is classically protected by patent law if it meets novelty and patentability requirements.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The most pragmatic option for data disposal in the cloud is which of the following?",
    options: ["A. Cryptoshredding", "B. Overwriting", "C. Cold fusion", "D. Melting"],
    correctAnswer: "A",
    explanation: "In cloud environments, destroying encryption keys is often the most practical disposal method because customers usually cannot physically destroy the underlying media.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In the cloud motif, the data processor is usually:",
    options: ["A. The cloud customer", "B. The cloud provider", "C. The cloud access security broker", "D. The party that assigns access rights"],
    correctAnswer: "B",
    explanation: "In many cloud arrangements, the provider acts as the processor because it handles data on behalf of the customer as controller or owner.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the intellectual property protection for the tangible expression of a creative idea?",
    options: ["A. Trade secret", "B. Copyright", "C. Trademark", "D. Patent"],
    correctAnswer: "B",
    explanation: "Copyright protects the tangible expression of an original creative work rather than the idea itself.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The goals of SIEM solution implementation include all of the following, except:",
    options: ["A. Dashboarding", "B. Performance enhancement", "C. Trend analysis", "D. Centralization of log streams"],
    correctAnswer: "B",
    explanation: "SIEM focuses on aggregation, correlation, dashboards, and trend analysis, not on improving application performance.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Data masking can be used to provide all of the following functionality, except:",
    options: ["A. Secure remote access", "B. test data in sandboxed environments", "C. Authentication of privileged users", "D. Enforcing least privilege"],
    correctAnswer: "C",
    explanation: "Data masking obscures sensitive values for use cases like testing or least-exposure access, but it does not authenticate users.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "All of the following are terms used to described the practice of obscuring original raw data so that only a portion is displayed for operational purposes, except:",
    options: ["A. Tokenization", "B. Masking", "C. Data discovery", "D. Obfuscation"],
    correctAnswer: "C",
    explanation: "Masking, obfuscation, and tokenization all hide raw values. Data discovery is about finding data, not obscuring it.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "DLP solutions can aid in deterring loss due to which of the following?",
    options: ["A. Power failure", "B. Performance", "C. Bad policy", "D. Malicious disclosure"],
    correctAnswer: "D",
    explanation: "DLP can also help detect and block intentional attempts to exfiltrate sensitive information.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "All the following are data analytics modes, except:",
    options: ["A. Datamining", "B. Agile business intelligence", "C. Refractory iterations", "D. Real-time analytics"],
    correctAnswer: "C",
    explanation: "That is not a recognized analytics mode, whereas data mining, agile BI, and real-time analytics are.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What are the U.S. State Department controls on technology exports known as?",
    options: ["A. DRM", "B. ITAR", "C. EAR", "D. EAL"],
    correctAnswer: "B",
    explanation: "ITAR is administered by the U.S. State Department and controls defense-related exports and technical data.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When crafting plans and policies for data archiving, we should consider all of the following, except:",
    options: ["A. The backup process", "B. Immediacy of the technology", "C. Archive location", "D. The format of the data"],
    correctAnswer: "B",
    explanation: "Archiving policy should address location, format, and related processes, not a vague concept like the immediacy of technology.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "DLP solutions can aid in deterring loss due to which of the following?",
    options: ["A. Device failure", "B. Randomization", "C. Inadvertent disclosure", "D. Natural disaster"],
    correctAnswer: "C",
    explanation: "Accidental leakage remains one of the primary business cases for DLP deployment.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "DLP can be combined with what other security technology to enhance data controls?",
    options: ["A. SIEM", "B. Hypervisors", "C. DRM", "D. Kerberos"],
    correctAnswer: "C",
    explanation: "DRM extends DLP by enforcing usage restrictions after the data has been shared or stored.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The goals of SIEM solution implementation include all of the following, except:",
    options: ["A. Dashboarding", "B. Performance enhancement", "C. Trend analysis", "D. Centralization of log streams"],
    correctAnswer: "B",
    explanation: "SIEM improves monitoring and security visibility, not system performance.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Data masking can be used to provide all of the following functionality, except:",
    options: ["A. Test data in sandboxed environments", "B. Authentication of privileged users", "C. Enforcing least privilege", "D. Secure remote access"],
    correctAnswer: "B",
    explanation: "Masking protects displayed or replicated data; it is not an authentication mechanism.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Cryptographic keys for encrypted data stored in the cloud should be ________________ .",
    options: ["A. Not stored with the cloud provider.", "B. Generated with redundancy", "C. At least 128 bits long", "D. Split into groups"],
    correctAnswer: "A",
    explanation: "Separating key custody from cloud data reduces provider-side exposure and strengthens customer control.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Tokenization requires two distinct _________________ .",
    options: ["A. Personnel", "B. Authentication factors", "C. Encryption keys", "D. Databases"],
    correctAnswer: "D",
    explanation: "Tokenization needs a token mapping store separate from the original or operational data store.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Best practices for key management include all of the following, except:",
    options: ["A. Ensure multifactor authentication", "B. Pass keys out of band", "C. Have key recovery processes", "D. Maintain key security"],
    correctAnswer: "B",
    explanation: "Strong key management centers on secure storage, controlled access, and recovery. Passing keys out of band is a situational exchange tactic, not a universal best practice.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Data labels could include all the following, except:",
    options: ["A. Distribution limitations", "B. Multifactor authentication", "C. Confidentiality level", "D. Access restrictions"],
    correctAnswer: "B",
    explanation: "Labels describe the data itself, such as classification or distribution limits, rather than login requirements.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the correct order of the phases of the data life cycle?",
    options: ["A. Create, Use, Store, Share, Archive, Destroy", "B. Create, Archive, Store, Share, Use, Destroy", "C. Create, Store, Use, Archive, Share, Destroy", "D. Create, Store, Use, Share, Archive, Destroy"],
    correctAnswer: "D",
    explanation: "That sequence matches the common enterprise data lifecycle from creation through retention and final disposal.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Cryptographic keys should be secured ________________ .",
    options: ["A. To a level at least as high as the data they can decrypt", "B. In vaults", "C. With two-person integrity", "D. By armed guards"],
    correctAnswer: "A",
    explanation: "If keys are weaker protected than the data, the overall security of the encrypted data collapses.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the experimental technology that might lead to the possibility of processing encrypted data without having to decrypt it first?",
    options: ["A. One-time pads", "B. Link encryption", "C. Homomorphic encryption", "D. AES"],
    correctAnswer: "C",
    explanation: "Homomorphic encryption is the recognized term for computation on encrypted data without plaintext exposure.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What are third-party providers of IAM functions for the cloud environment?",
    options: ["A. AESs", "B. SIEMs", "C. DLPs", "D. CASBs"],
    correctAnswer: "D",
    explanation: "CASBs commonly provide identity-related controls such as SSO integration, access governance, and policy enforcement for cloud services.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Data labels could include all the following, except:",
    options: ["A. Data value", "B. Data of scheduled destruction", "C. Date data was created", "D. Data owner"],
    correctAnswer: "A",
    explanation: "Labels usually include operational metadata like owner, creation date, classification, or handling instructions. Raw business value is not typically a label field.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What are the U.S. Commerce Department controls on technology exports known as?",
    options: ["A. ITAR", "B. DRM", "C. EAR", "D. EAL"],
    correctAnswer: "C",
    explanation: "The Export Administration Regulations are overseen by the U.S. Commerce Department.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "All of these are methods of data discovery, except:",
    options: ["A. Label-based", "B. User-based", "C. Content-based", "D. Metadata-based"],
    correctAnswer: "B",
    explanation: "Common data discovery approaches are content-based, metadata-based, and label-based. User-based is not a standard discovery method.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The various models generally available for cloud BC/DR activities include all of the following except:",
    options: ["A. Private architecture, cloud backup", "B. Cloud provider, backup from another cloud provider", "C. Cloud provider, backup from same provider", "D. Cloud provider, backup from private provider"],
    correctAnswer: "D",
    explanation: "Typical cloud BC/DR models include same-provider, alternate-provider, or private-to-cloud arrangements. \"Backup from private provider\" is not a standard model description.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which kind of SSAE audit reviews controls dealing with the organization's controls for assuring the confidentiality, integrity, and availability of data?",
    options: ["A. SOC 1", "B. SOC 2", "C. SOC 3", "D. SOC 4"],
    correctAnswer: "B",
    explanation: "SOC 2 evaluates controls relevant to trust service criteria such as security, availability, confidentiality, processing integrity, and privacy.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "To address shared monitoring and testing responsibilities in a cloud configuration, the provider might offer all these to the cloud customer except:",
    options: ["A. Access to audit logs and performance data", "B. DLP solution results", "C. Security control administration", "D. SIM, SEIM. and SEM logs"],
    correctAnswer: "B",
    explanation: "Providers commonly share logs and control evidence, but customer-specific DLP outcomes are not a standard shared-monitoring deliverable from the provider.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which kind of SSAE audit report is most beneficial for a cloud customer, even though it's unlikely the cloud provider will share it?",
    options: ["A. SOC 3", "B. SOC 1 Type 2", "C. SOC 2 Type 2", "D. SOC 1 Type 1"],
    correctAnswer: "C",
    explanation: "SOC 2 Type 2 gives the most useful view of cloud security control design and operating effectiveness over time.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When reviewing the BIA after a cloud migration, the organization should take into account new factors related to data breach impacts. One of these new factors is:",
    options: ["A. Many states have data breach notification laws.", "B. Breaches can cause the loss of proprietary data.", "C. Breaches can cause the loss of intellectual property.", "D. Legal liability can't be transferred to the cloud provider."],
    correctAnswer: "D",
    explanation: "Even after cloud migration, the customer often retains breach accountability to regulators and affected parties, which changes impact analysis.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the term we use to describe the general ease and efficiency of moving data from one cloud provider either to another cloud provider or down from the cloud?",
    options: ["A. Obfuscation", "B. Elasticity", "C. Mobility", "D. Portability"],
    correctAnswer: "D",
    explanation: "Portability is the ease of moving data or workloads across cloud providers or back on premises.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Countermeasures for protecting cloud operations against internal threats include all of the following except:",
    options: ["A. Mandatory vacation", "B. Least privilege", "C. Separation of duties", "D. Conflict of interest"],
    correctAnswer: "D",
    explanation: "Mandatory vacation, least privilege, and separation of duties are classic insider-threat countermeasures. Conflict of interest is a governance concern, not the primary operational countermeasure here.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The cloud customer will have the most control of their data and systems, and the cloud provider will have the least amount of responsibility, in which cloud computing arrangement?",
    options: ["A. IaaS", "B. SaaS", "C. Community cloud", "D. PaaS"],
    correctAnswer: "A",
    explanation: "IaaS gives the customer the greatest control over systems and software while leaving the least application-stack responsibility with the provider.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Countermeasures for protecting cloud operations against external attackers include all of the following except:",
    options: ["A. Continual monitoring for anomalous activity.", "B. Detailed and extensive background checks.", "C. Regular and detailed configuration/change management activities", "D. Hardened devices and systems, including servers, hosts, hypervisors, and virtual machines."],
    correctAnswer: "B",
    explanation: "Background checks address insider threat risk, not external attackers. The other options directly strengthen technical defenses.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "User access to the cloud environment can be administered in all of the following ways except:",
    options: ["A. Provider provides administration on behalf the customer", "B. Customer directly administers access", "C. Third party provides administration on behalf of the customer", "D. Customer provides administration on behalf of the provider"],
    correctAnswer: "D",
    explanation: "The customer does not administer the provider's own users or service-side access management.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Countermeasures for protecting cloud operations against internal threats include all of the following except:",
    options: ["A. Extensive and comprehensive training programs, including initial, recurring, and refresher sessions", "B. Skills and knowledge testing", "C. Hardened perimeter devices", "D. Aggressive background checks"],
    correctAnswer: "C",
    explanation: "Perimeter hardening is primarily an external threat defense. Training, screening, and skills validation are insider-focused measures.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Each of the following are dependencies that must be considered when reviewing the BIA after cloud migration except:",
    options: ["A. The cloud provider's utilities", "B. The cloud provider's suppliers", "C. The cloud provider's resellers", "D. The cloud provider's vendors"],
    correctAnswer: "C",
    explanation: "Utilities, suppliers, and vendors can create operational dependencies. Resellers are not typically a core continuity dependency for the hosted service itself.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Because of multitenancy, specific risks in the public cloud that don't exist in the other cloud service models include all the following except:",
    options: ["A. DoS/DDoS", "B. Information bleed", "C. Risk of loss/disclosure due to legal seizures", "D. Escalation of privilege"],
    correctAnswer: "D",
    explanation: "Privilege escalation exists in many environments, not just multitenant public cloud. Information bleed and shared-tenancy exposure are more cloud-specific.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the cloud service model in which the customer is responsible for administration of the OS?",
    options: ["A. QaaS", "B. SaaS", "C. PaaS", "D. IaaS"],
    correctAnswer: "D",
    explanation: "Operating system administration remains with the customer in the IaaS model.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "All of the following are techniques to enhance the portability of cloud data, in order to minimize the potential of vendor lock-in except:",
    options: ["A. Ensure there are no physical limitations to moving", "B. Use DRM and DLP solutions widely throughout the cloud operation", "C. Ensure favorable contract terms to support portability", "D. Avoid proprietary data formats"],
    correctAnswer: "B",
    explanation: "DRM and DLP help protect data but do not inherently improve portability. Favorable terms and nonproprietary formats do.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Hardening the operating system refers to all of the following except:",
    options: ["A. Limiting administrator access", "B. Closing unused ports", "C. Removing antimalware agents", "D. Removing unnecessary services and libraries"],
    correctAnswer: "C",
    explanation: "OS hardening reduces attack surface and strengthens security controls, so removing antimalware would weaken rather than harden the system.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which kind of SSAE audit report is a cloud customer most likely to receive from a cloud provider?",
    options: ["A. SOC 1 Type 1", "B. SOC 2 Type 2", "C. SOC 3", "D. SOC 1 Type 2"],
    correctAnswer: "C",
    explanation: "SOC 3 is the general-use report cloud providers are most willing to share publicly with customers and prospects.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The cloud customer's trust in the cloud provider can be enhanced by all of the following except:",
    options: ["A. SLAs", "B. Shared administration", "C. Audits", "D. real-time video surveillance"],
    correctAnswer: "D",
    explanation: "Trust is usually built through contracts, audits, and defined shared responsibilities. Real-time surveillance feeds are not a normal trust mechanism for customers.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "As a result of scandals involving publicly traded corporations such as Enron, WorldCom, and Adelphi, Congress passed legislation known as:",
    options: ["A. SOX", "B. HIPAA", "C. FERPA", "D. GLBA"],
    correctAnswer: "A",
    explanation: "The Sarbanes-Oxley Act was enacted in response to major corporate accounting scandals including Enron and WorldCom.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In addition to whatever audit results the provider shares with the customer, what other mechanism does the customer have to ensure trust in the provider's performance and duties?",
    options: ["A. HIPAA", "B. The contract", "C. Statutes", "D. Security control matrix"],
    correctAnswer: "B",
    explanation: "Beyond audit reports, the contract is the main enforceable mechanism for setting provider obligations and customer rights.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The application normative framework is best described as which of the following?",
    options: ["A. A superset of the ONF", "B. A stand-alone framework for storing security practices for the ONF", "C. The complete ONF", "D. A subnet of the ONF"],
    correctAnswer: "D",
    explanation: "The Application Normative Framework is application-specific and derived from the broader Organizational Normative Framework.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Deviations from the baseline should be investigated and __________________.",
    options: ["A. Revealed", "B. Documented", "C. Encouraged", "D. Enforced"],
    correctAnswer: "B",
    explanation: "Baseline deviations should be investigated and formally documented so they can be reviewed, approved, or corrected.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following best describes the Organizational Normative Framework (ONF)?",
    options: ["A. A set of application security, and best practices, catalogued and leveraged by the organization", "B. A container for components of an application's security, best practices catalogued and leveraged by the organization", "C. A framework of containers for some of the components of application security, best practices, catalogued and leveraged by the organization", "D. A framework of containers for all components of application security, best practices, catalogued and leveraged by the organization."],
    correctAnswer: "D",
    explanation: "The ONF is the organization's overarching application security framework that collects and structures its approved requirements and practices.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "A UPS should have enough power to last how long?",
    options: ["A. One day", "B. 12 hours", "C. Long enough for graceful shutdown", "D. 10 minutes"],
    correctAnswer: "C",
    explanation: "A UPS is primarily intended to bridge short outages and allow orderly shutdown or transfer to backup power.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following best describes the purpose and scope of ISO/IEC 27034-1?",
    options: ["A. Describes international privacy standards for cloud computing", "B. Serves as a newer replacement for NIST 800-52 r4", "C. Provides on overview of network and infrastructure security designed to secure cloud applications.", "D. Provides an overview of application security that introduces definitive concepts, principles, and processes involved in application security."],
    correctAnswer: "D",
    explanation: "ISO/IEC 27034-1 is the foundational overview standard for application security governance and process, not a network or privacy standard.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following best describes SAML?",
    options: ["A. A standard used for directory synchronization", "B. A standard for developing secure application management logistics", "C. A standard for exchanging usernames and passwords across devices.", "D. A standards for exchanging authentication and authorization data between security domains."],
    correctAnswer: "D",
    explanation: "SAML is the federation standard used to exchange authentication and authorization assertions across trust domains.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Web application firewalls (WAFs) are designed primarily to protect applications from common attacks like:",
    options: ["A. Ransomware", "B. Syn floods", "C. XSS and SQL injection", "D. Password cracking"],
    correctAnswer: "C",
    explanation: "WAFs are designed to inspect HTTP or HTTPS application traffic and block common web application attacks such as XSS and SQLi.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "APIs are defined as which of the following?",
    options: ["A. A set of protocols, and tools for building software applications to access a web-based software application or tool", "B. A set of routines, standards, protocols, and tools for building software applications to access a web-based software application or tool", "C. A set of standards for building software applications to access a web-based software application or tool", "D. A set of routines and tools for building software applications to access web-based software applications"],
    correctAnswer: "B",
    explanation: "That is the most complete definition because APIs include routines, protocols, and standards for interacting with services.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following best describes data masking?",
    options: ["A. A method for creating similar but inauthentic datasets used for software testing and user training.", "B. A method used to protect prying eyes from data such as social security numbers and credit card data.", "C. A method where the last few numbers in a dataset are not obscured. These are often used for authentication.", "D. Data masking involves stripping out all digits in a string of numbers so as to obscure the original number."],
    correctAnswer: "B",
    explanation: "Data masking obscures all or part of sensitive values so they can be viewed or used without exposing the original data.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following best describes a sandbox?",
    options: ["A. An isolated space where untested code and experimentation can safely occur separate from the production environment.", "B. A space where you can safely execute malicious code to see what it does.", "C. An isolated space where transactions are protected from malicious software", "D. An isolated space where untested code and experimentation can safely occur within the production environment."],
    correctAnswer: "A",
    explanation: "A sandbox is a segregated environment used to test, observe, or run code with reduced risk to production systems.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "A localized incident or disaster can be addressed in a cost-effective manner by using which of the following?",
    options: ["A. UPS", "B. Generators", "C. Joint operating agreements", "D. Strict adherence to applicable regulations"],
    correctAnswer: "C",
    explanation: "For localized incidents, reciprocal arrangements with another organization can provide a practical and cost-effective continuity option.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In addition to battery backup, a UPS can offer which capability?",
    options: ["A. Breach alert", "B. Confidentiality", "C. Communication redundancy", "D. Line conditioning"],
    correctAnswer: "D",
    explanation: "Many UPS systems also stabilize incoming power and smooth voltage fluctuations in addition to providing battery backup.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "For performance purposes, OS monitoring should include all of the following except:",
    options: ["A. Disk space", "B. Disk I/O usage", "C. CPU usage", "D. Print spooling"],
    correctAnswer: "D",
    explanation: "CPU, disk space, and disk I/O are core OS performance metrics. Print spooling is not typically a primary performance-monitoring focus.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Identity and access management (IAM) is a security discipline that ensures which of the following?",
    options: ["A. That all users are properly authorized", "B. That the right individual gets access to the right resources at the right time for the right reasons.", "C. That all users are properly authenticated", "D. That unauthorized users will get access to the right resources at the right time for the right reasons"],
    correctAnswer: "B",
    explanation: "That phrase captures the core IAM objective of appropriate access based on identity, context, and authorization.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Maintenance mode requires all of these actions except:",
    options: ["A. Remove all active production instances", "B. Ensure logging continues", "C. Initiate enhanced security controls", "D. Prevent new logins"],
    correctAnswer: "C",
    explanation: "Maintenance mode usually involves blocking new access, draining workloads, and continuing logging. \"Enhanced security controls\" is not a standard required step.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is one of the reasons a baseline might be changed?",
    options: ["A. Numerous change requests", "B. To reduce redundancy", "C. Natural disaster", "D. Power fluctuation"],
    correctAnswer: "A",
    explanation: "A baseline is often revised when change volume or approved deviations indicate the standard configuration no longer reflects reality.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In a federated identity arrangement using a trusted third-party model, who is the identity provider and who is the relying party?",
    options: ["A. The users of the various organizations within the federations within the federation/a CASB", "B. Each member organization/a trusted third party", "C. Each member organization/each member organization", "D. A contracted third party/the various member organizations of the federation"],
    correctAnswer: "D",
    explanation: "In a trusted third-party federation model, the third party serves as identity provider and member organizations rely on its assertions.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Database activity monitoring (DAM) can be:",
    options: ["A. Host-based or network-based", "B. Server-based or client-based", "C. Used in the place of encryption", "D. Used in place of data masking"],
    correctAnswer: "A",
    explanation: "Database activity monitoring can be deployed from the host side or by monitoring traffic on the network.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The BC/DR kit should include all of the following except:",
    options: ["A. Annotated asset inventory", "B. Flashlight", "C. Hard drives", "D. Documentation equipment"],
    correctAnswer: "C",
    explanation: "A BC/DR kit should contain plans, inventories, and practical support items. Spare hard drives are not a typical universal kit element.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The baseline should cover which of the following?",
    options: ["A. Data breach alerting and reporting", "B. All regulatory compliance requirements", "C. As many systems throughout the organization as possible", "D. A process for version control"],
    correctAnswer: "C",
    explanation: "Baselines are most effective when they standardize controls broadly across systems rather than covering only a narrow subset.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles is responsible for creating cloud components and the testing and validation of services?",
    options: ["A. Cloud auditor", "B. Inter-cloud provider", "C. Cloud service broker", "D. Cloud service developer"],
    correctAnswer: "D",
    explanation: "The cloud service developer role creates service components and performs associated testing and validation.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following storage types is most closely associated with a database-type storage implementation?",
    options: ["A. Object", "B. Unstructured", "C. Volume", "D. Structured"],
    correctAnswer: "D",
    explanation: "Databases are most closely associated with structured storage because they rely on organized schemas and queryable fields.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "A data custodian is responsible for which of the following?",
    options: ["A. Data context", "B. Data content", "C. The safe custody, transport, storage of the data, and implementation of business rules", "D. Logging access and alerts"],
    correctAnswer: "C",
    explanation: "A data custodian is responsible for the safekeeping and operational handling of data, making this the closest match among the choices.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the least challenging with regard to eDiscovery in the cloud?",
    options: ["A. Identifying roles such as data owner, controller and processor", "B. Decentralization of data storage", "C. Forensic analysis", "D. Complexities of International law"],
    correctAnswer: "A",
    explanation: "Those roles are comparatively straightforward to define contractually. Jurisdiction, decentralized storage, and forensics are usually harder in cloud eDiscovery.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the Cloud Security Alliance Cloud Controls Matrix (CCM)?",
    options: ["A. A set of software development life cycle requirements for cloud service providers", "B. An inventory of cloud services security controls that are arranged into a hierarchy of security domains", "C. An inventory of cloud service security controls that are arranged into separate security domains", "D. A set of regulatory requirements for cloud service providers"],
    correctAnswer: "C",
    explanation: "The CSA CCM is a control framework organized into domains to help assess and map cloud security responsibilities.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is a valid risk management metric?",
    options: ["A. KPI", "B. KRI", "C. SOC", "D. SLA"],
    correctAnswer: "B",
    explanation: "A Key Risk Indicator is a direct risk management metric used to monitor risk conditions or trends.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the best example of a key component of regulated PII?",
    options: ["A. Audit rights of subcontractors", "B. Items that should be implemented", "C. PCI DSS", "D. Mandatory breach reporting"],
    correctAnswer: "D",
    explanation: "Mandatory breach reporting is a hallmark of regulated PII because it stems from legal obligations rather than optional business practice.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following components are part of what a CCSP should review when looking at contracting with a cloud service provider?",
    options: ["A. Redundant uplink grafts", "B. Background checks for the provider's personnel", "C. The physical layout of the datacenter", "D. Use of subcontractors"],
    correctAnswer: "D",
    explanation: "Subcontractor use is a critical contracting review point because it affects data handling, flow-down obligations, and shared liability.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is not a way to manage risk?",
    options: ["A. Transferring", "B. Accepting", "C. Mitigating", "D. Enveloping"],
    correctAnswer: "D",
    explanation: "Risk can be accepted, transferred, mitigated, or avoided. Enveloping is not a recognized risk treatment approach.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following terms is not associated with cloud forensics?",
    options: ["A. eDiscovery", "B. Chain of custody", "C. Analysis", "D. Plausibility"],
    correctAnswer: "D",
    explanation: "Cloud forensics commonly involves eDiscovery, collection, preservation, chain of custody, and analysis. Plausibility is not a standard forensic term.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which is the lowest level of the CSA STAR program?",
    options: ["A. Attestation", "B. Self-assessment", "C. Hybridization", "D. Continuous monitoring"],
    correctAnswer: "B",
    explanation: "CSA STAR Level 1 is self-assessment, with higher levels involving attestation or certification and continuous assurance.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the primary purpose of an SOC 3 report?",
    options: ["A. HIPAA compliance", "B. Absolute assurances", "C. Seal of approval", "D. Compliance with PCI/DSS"],
    correctAnswer: "C",
    explanation: "SOC 3 is a general-use attestation intended to provide public assurance, effectively serving as a broad trust seal.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is not an example of a highly regulated environment?",
    options: ["A. Financial services", "B. Healthcare", "C. Public companies", "D. Wholesale or distribution"],
    correctAnswer: "D",
    explanation: "Financial services, healthcare, and public companies are heavily regulated. Wholesale or distribution is not generally treated as a highly regulated environment.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following methods of addressing risk is most associated with insurance?",
    options: ["A. Mitigation", "B. Transference", "C. Avoidance", "D. Acceptance"],
    correctAnswer: "B",
    explanation: "Insurance is a classic example of transferring financial risk to another party.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Legal controls refer to which of the following?",
    options: ["A. ISO 27001", "B. PCI DSS", "C. NIST 800-53r4", "D. Controls designed to comply with laws and regulations related to the cloud environment"],
    correctAnswer: "D",
    explanation: "Legal controls are selected to meet statutory, regulatory, or contractual legal obligations.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following best describes a cloud carrier?",
    options: ["A. The intermediary who provides connectivity and transport of cloud providers and cloud consumers", "B. A person or entity responsible for making a cloud service available to consumers", "C. The person or entity responsible for transporting data across the Internet", "D. The person or entity responsible for keeping cloud services running for customers"],
    correctAnswer: "A",
    explanation: "A cloud carrier is the network or transport intermediary that connects cloud providers and customers.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Gap analysis is performed for what reason?",
    options: ["A. To begin the benchmarking process", "B. To assure proper accounting practices are being used", "C. To provide assurances to cloud customers", "D. To ensure all controls are in place and working properly"],
    correctAnswer: "D",
    explanation: "Gap analysis compares the current state to the target state to identify missing or insufficient controls that must be addressed.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following frameworks focuses specifically on design implementation and management?",
    options: ["A. ISO 31000:2009", "B. ISO 27017", "C. NIST 800-92", "D. HIPAA"],
    correctAnswer: "B",
    explanation: "ISO 27017 provides guidance on cloud security controls and their implementation and management in cloud environments.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following report is most aligned with financial control audits?",
    options: ["A. SSAE 16", "B. SOC 2", "C. SOC 1", "D. SOC 3"],
    correctAnswer: "C",
    explanation: "SOC 1 reports focus on controls relevant to financial reporting, making them the closest match for financial control audits.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is not a risk management framework?",
    options: ["A. COBIT", "B. Hex GBL", "C. ISO 31000:2009", "D. NIST SP 800-37"],
    correctAnswer: "B",
    explanation: "COBIT, ISO 31000, and NIST SP 800-37 are legitimate governance or risk frameworks. Hex GBL is not.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Limits for resource utilization can be set at different levels within a cloud environment to ensure that no particular entity can consume a level of resources that impacts other cloud customers.Which of the following is NOT a unit covered by limits?",
    options: ["A. Hypervisor", "B. Cloud customer", "C. Virtual machine", "D. Service"],
    correctAnswer: "A",
    explanation: "Resource quotas are commonly set at customer, service, or VM levels. A hypervisor is the platform enforcing limits, not the usual tenant-facing quota unit.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the dominant driver behind the regulations to which a system or application must adhere?",
    options: ["A. Data source", "B. Locality", "C. Contract", "D. SLA"],
    correctAnswer: "B",
    explanation: "Jurisdiction and data location are the dominant drivers of many compliance obligations because laws vary by geography.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When using a SaaS solution, what is the capability provided to the customer?",
    options: ["A. To use the provider's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (for example, web-based email), or a program interface. The consumer does manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user- specific application configuration settings.", "B. To use the consumer's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (for example, web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user- specific application configuration settings.", "C. To use the consumer's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (for example, web-based email), or a program interface. The consumer does manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user- specific application configuration settings.", "D. To use the provider's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (for example, web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user- specific application configuration settings."],
    correctAnswer: "D",
    explanation: "That is the standard definition of SaaS: the provider runs the application and infrastructure, while the customer only uses the service with limited configuration control.",
    domain: "Final Exam 3",
    difficulty: "mixed",
    type: "multiple-choice"
  },
];

export default examQuestions;
