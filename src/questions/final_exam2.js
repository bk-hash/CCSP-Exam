const examQuestions = [
  {
    question: "What does the \"SOC\" acronym refer to with audit reports?",
    options: ["A. Service Origin Confidentiality", "B. System Organization Confidentiality", "C. Service Organizational Control", "D. System Organization Control"],
    correctAnswer: "D",
    explanation: "SOC reports refer to System and Organization Controls, the attestation framework used for service organizations.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What does the REST API use to protect data transmissions?",
    options: ["A. NetBIOS", "B. VPN", "C. Encapsulation", "D. TLS"],
    correctAnswer: "D",
    explanation: "REST commonly relies on HTTPS, which uses TLS to protect data in transit.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What strategy involves replacing sensitive data with opaque values, usually with a means of mapping it back to the original value?",
    options: ["A. Masking", "B. Anonymization", "C. Tokenization", "D. Obfuscation"],
    correctAnswer: "C",
    explanation: "Tokenization replaces sensitive values with non-sensitive tokens while preserving a mapping back to the original data.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With software-defined networking, what aspect of networking is abstracted from the forwarding of traffic?",
    options: ["A. Routing", "B. Session", "C. Filtering", "D. Firewalling"],
    correctAnswer: "A",
    explanation: "SDN separates the control logic for routing from the data plane that forwards traffic.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following does NOT fall under the \"IT\" aspect of quality of service (QoS)?",
    options: ["A. Applications", "B. Key performance indicators (KPIs)", "C. Services", "D. Security"],
    correctAnswer: "B",
    explanation: "KPIs measure service performance, but they are not themselves part of the IT service elements under QoS.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What does dynamic application security testing (DAST) NOT entail?",
    options: ["A. Scanning", "B. Probing", "C. Discovery", "D. Knowledge of the system"],
    correctAnswer: "D",
    explanation: "DAST is generally black-box testing and does not require internal knowledge of the application source or design.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Where is an XML firewall most commonly deployed in the environment?",
    options: ["A. Between the application and data layers", "B. Between the IPS and firewall", "C. Between the presentation and application layers", "D. Between the firewall and application server"],
    correctAnswer: "D",
    explanation: "An XML firewall is typically placed in front of the application tier to inspect and filter XML and SOAP traffic.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of masking strategy involves replacing data on a system while it passes between the data and application layers?",
    options: ["A. Dynamic", "B. Static", "C. Replication", "D. Duplication"],
    correctAnswer: "A",
    explanation: "Dynamic masking hides sensitive data in real time as it moves between the data and application layers.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is a widely used tool for code development, branching, and collaboration?",
    options: ["A. GitHub", "B. Maestro", "C. Orchestrator", "D. Conductor"],
    correctAnswer: "A",
    explanation: "GitHub is widely used for source control, branching, pull requests, and team collaboration.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of security is DNSSEC designed to ensure?",
    options: ["A. Integrity", "B. Authentication", "C. Availability", "D. Confidentiality"],
    correctAnswer: "A",
    explanation: "DNSSEC adds signed DNS records to help ensure responses have not been altered.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which process serves to prove the identity and credentials of a user requesting access to an application or data?",
    options: ["A. Repudiation", "B. Authentication", "C. Identification", "D. Authorization"],
    correctAnswer: "B",
    explanation: "Authentication verifies the identity and credentials of the party requesting access.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Who would be responsible for implementing IPsec to secure communications for an application?",
    options: ["A. Developers", "B. Systems staff", "C. Auditors", "D. Cloud customer"],
    correctAnswer: "B",
    explanation: "IPsec is a network and systems implementation responsibility rather than an application development task.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the minimum regularity for testing a BCDR plan to meet best practices?",
    options: ["A. Once year", "B. Once a month", "C. Every six months", "D. When the budget allows it"],
    correctAnswer: "A",
    explanation: "BCDR plans should be tested at least annually as a baseline best practice.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Other than cost savings realized due to measured service, what is another facet of cloud computing that will typically save substantial costs in time and money for an organization in the event of a disaster?",
    options: ["A. Broad network access", "B. Interoperability", "C. Resource pooling", "D. Portability"],
    correctAnswer: "C",
    explanation: "Resource pooling gives access to shared infrastructure capacity, reducing the need to maintain separate dedicated disaster resources.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT part of a retention policy?",
    options: ["A. Format", "B. Costs", "C. Accessibility", "D. Duration"],
    correctAnswer: "B",
    explanation: "Retention policies focus on what is retained, for how long, in what format, and how it can be accessed.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of cloud computing would make the use of a cloud the most attractive as a BCDR solution?",
    options: ["A. Interoperability", "B. Resource pooling", "C. Portability", "D. Measured service"],
    correctAnswer: "D",
    explanation: "Measured service makes cloud DR attractive because organizations can pay for standby or recovery capacity only as needed.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud deployment models offers the easiest initial setup and access for the cloud customer?",
    options: ["A. Hybrid", "B. Community", "C. Private", "D. Public"],
    correctAnswer: "D",
    explanation: "Public cloud generally offers the fastest and simplest initial setup because the provider already operates the shared environment.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT something that an HIDS will monitor?",
    options: ["A. Configurations", "B. User logins", "C. Critical system files", "D. Network traffic"],
    correctAnswer: "D",
    explanation: "A HIDS focuses on the host itself, such as files, configurations, logs, and user activity, not broad network traffic monitoring.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following technologies is used to monitor network traffic and notify if any potential threats or attacks are noticed?",
    options: ["A. IPS", "B. WAF", "C. Firewall", "D. IDS"],
    correctAnswer: "D",
    explanation: "An IDS monitors traffic and alerts on suspicious activity rather than actively blocking it.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What concept does the \"A\" represent in the DREAD model?",
    options: ["A. Affected users", "B. Authentication", "C. Affinity", "D. Authorization"],
    correctAnswer: "A",
    explanation: "In DREAD, the A stands for affected users, which estimates how many users a threat impacts.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which attribute of data poses the biggest challenge for data discovery?",
    options: ["A. Labels", "B. Quality", "C. Volume", "D. Format"],
    correctAnswer: "C",
    explanation: "The sheer volume of data is often the biggest obstacle to comprehensive discovery and classification.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What does static application security testing (SAST) offer as a tool to the testers?",
    options: ["A. Production system scanning", "B. Injection attempts", "C. Source code access", "D. Live testing"],
    correctAnswer: "C",
    explanation: "SAST analyzes source code or binaries without running the application in production.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following service capabilities gives the cloud customer an established and maintained framework to deploy code and applications?",
    options: ["A. Software", "B. Desktop", "C. Platform", "D. Infrastructure"],
    correctAnswer: "C",
    explanation: "PaaS provides a managed framework and runtime for deploying customer code and applications.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What process is used within a cloud environment to maintain resource balancing and ensure that resources are available where and when needed?",
    options: ["A. Dynamic clustering", "B. Dynamic balancing", "C. Dynamic resource scheduling", "D. Dynamic optimization"],
    correctAnswer: "C",
    explanation: "Dynamic resource scheduling rebalances workloads across hosts to keep resources available where needed.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which value refers to the percentage of production level restoration needed to meet BCDR objectives?",
    options: ["A. RPO", "B. RTO", "C. RSL", "D. SRE"],
    correctAnswer: "C",
    explanation: "Recovery Service Level expresses how much service capacity must be restored to meet BCDR objectives.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Over time, what is a primary concern for data archiving?",
    options: ["A. Size of archives", "B. Format of archives", "C. Recoverability", "D. Regulatory changes"],
    correctAnswer: "B",
    explanation: "Archive formats can become obsolete over time, making long-term readability and recovery a major concern.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is an often overlooked concept that is essential to protecting the confidentiality of data?",
    options: ["A. Strong password", "B. Training", "C. Security controls", "D. Policies"],
    correctAnswer: "B",
    explanation: "User and administrator training is essential because confidentiality often fails through human handling errors.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud deployment models offers the most control and input to the cloud customer as to how the overall cloud environment is implemented and configured?",
    options: ["A. Public", "B. Community", "C. Hybrid", "D. Private"],
    correctAnswer: "D",
    explanation: "Private cloud gives the customer the most control over architecture, configuration, and implementation choices.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What concept does the \"D\" represent with the STRIDE threat model?",
    options: ["A. Data loss", "B. Denial of service", "C. Data breach", "D. Distributed"],
    correctAnswer: "B",
    explanation: "In STRIDE, D stands for denial of service.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Your boss has tasked your team with getting your legacy systems and applications connected with new cloud-based services that management has decided are crucial to customer service and offerings.Which role would you be assuming under this directive?",
    options: ["A. Cloud service administrator", "B. Cloud service user", "C. Cloud service integrator", "D. Cloud service business manager"],
    correctAnswer: "C",
    explanation: "A cloud service integrator connects legacy systems and new cloud services into a working whole.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "One of the main components of system audits is the ability to track changes over time and to match these changes with continued compliance and internal processes.Which aspect of cloud computing makes this particular component more challenging than in a traditional data center?",
    options: ["A. Portability", "B. Virtualization", "C. Elasticity", "D. Resource pooling"],
    correctAnswer: "C",
    explanation: "Elasticity causes resources to change frequently, which makes audit tracking and change correlation harder than in static environments.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In the wake of many scandals with major corporations involving fraud and the deception of investors and regulators, which of the following laws was passed to govern accounting and financial records and disclosures?",
    options: ["A. GLBA", "B. Safe Harbor", "C. HIPAA", "D. SOX"],
    correctAnswer: "D",
    explanation: "Sarbanes-Oxley was enacted to improve financial accountability and disclosures after major corporate scandals.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which one of the following threat types to applications and services involves the sending of requests that are invalid and manipulated through a user's client to execute commands on the application under the user's own credentials?",
    options: ["A. Injection", "B. Missing function-level access control", "C. Cross-site scripting", "D. Cross-site request forgery"],
    correctAnswer: "D",
    explanation: "CSRF abuses a user's authenticated session by causing the browser to send unauthorized requests.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which cloud service category would be most ideal for a cloud customer that is developing software to test its applications among multiple hosting providers to determine the best option for its needs?",
    options: ["A. DaaS", "B. PaaS", "C. IaaS", "D. SaaS"],
    correctAnswer: "C",
    explanation: "IaaS is best when a customer wants to deploy and compare its own full stack across multiple hosting providers.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "You just hired an outside developer to modernize some applications with new web services and functionality. In order to implement a comprehensive test platform for validation, the developer needs a data set that resembles a production data set in both size and composition.In order to accomplish this, what type of masking would you use?",
    options: ["A. Development", "B. Replicated", "C. Static", "D. Dynamic"],
    correctAnswer: "C",
    explanation: "Static masking creates a sanitized copy of production-like data for development and testing.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In order to prevent cloud customers from potentially consuming enormous amounts of resources within a cloud environment and thus having a negative impact on other customers, what concept is commonly used by a cloud provider?",
    options: ["A. Limit", "B. Cap", "C. Throttle", "D. Reservation"],
    correctAnswer: "C",
    explanation: "Throttling limits resource consumption to prevent one tenant from degrading service for others.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Where is a DLP solution generally installed when utilized for monitoring data at rest?",
    options: ["A. Network firewall", "B. Host system", "C. Application server", "D. Database server"],
    correctAnswer: "B",
    explanation: "For data at rest, DLP is commonly deployed where the stored data resides, such as the host or storage system.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following aspects of security is solely the responsibility of the cloud provider?",
    options: ["A. Regulatory compliance", "B. Physical security", "C. Operating system auditing", "D. Personal security of developers"],
    correctAnswer: "B",
    explanation: "Physical security of the facilities is the cloud provider's responsibility in all service models.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Humidity levels for a data center are a prime concern for maintaining electrical and computing resources properly as well as ensuring that conditions are optimal for top performance.Which of the following is the optimal humidity level, as established by ASHRAE?",
    options: ["A. 20 to 40 percent relative humidity", "B. 50 to 75 percent relative humidity", "C. 40 to 60 percent relative humidity", "D. 30 to 50 percent relative humidity"],
    correctAnswer: "C",
    explanation: "ASHRAE guidance places normal data center humidity in that range to reduce static and condensation risks.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Within a SaaS environment, what is the responsibility on the part of the cloud customer in regard to procuring the software used?",
    options: ["A. Maintenance", "B. Licensing", "C. Development", "D. Purchasing"],
    correctAnswer: "B",
    explanation: "In SaaS, the customer typically procures usage through licensing or subscription rather than building or maintaining the software.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Implementing baselines on systems would take an enormous amount of time and resources if the staff had to apply them to each server, and over time, it would be almost impossible to keep all the systems in sync on an ongoing basis.Which of the following is NOT a package that can be used for implementing and maintaining baselines across an enterprise?",
    options: ["A. Puppet", "B. SCCM", "C. Chef", "D. GitHub"],
    correctAnswer: "D",
    explanation: "GitHub is a collaboration and source control platform, not a baseline configuration management package like Puppet, Chef, or SCCM.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "From the perspective of compliance, what is the most important consideration when it comes to data center location?",
    options: ["A. Natural disasters", "B. Utility access", "C. Jurisdiction", "D. Personnel access"],
    correctAnswer: "C",
    explanation: "From a compliance perspective, location matters primarily because local jurisdiction determines applicable laws and regulatory reach.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Different certifications and standards take different approaches to data center design and operations. Although many traditional approaches use a tiered methodology, which of the following utilizes a macro-level approach to data center design?",
    options: ["A. IDCA", "B. BICSI", "C. Uptime Institute", "D. NFPA"],
    correctAnswer: "A",
    explanation: "IDCA is associated with a macro-level approach to data center design rather than the traditional tier model.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The European Union is often considered the world leader in regard to the privacy of personal data and has declared privacy to be a \"human right.\"In what year did the EU first assert this principle?",
    options: ["A. 1995", "B. 2000", "C. 2010", "D. 1999"],
    correctAnswer: "A",
    explanation: "The EU's 1995 Data Protection Directive established the early privacy framework that treated privacy as a fundamental right.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "A DLP solution/implementation has three main components.Which of the following is NOT one of the three main components?",
    options: ["A. Monitoring", "B. Enforcement", "C. Auditing", "D. Discovery and classification"],
    correctAnswer: "C",
    explanation: "The three core DLP functions are discovery and classification, monitoring, and enforcement.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of storage structure does object storage employ to maintain files?",
    options: ["A. Directory", "B. Hierarchical", "C. tree", "D. Flat"],
    correctAnswer: "D",
    explanation: "Object storage uses a flat namespace rather than a traditional directory hierarchy.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which cloud storage type requires special consideration on the part of the cloud customer to ensure they do not program themselves into a vendor lock-in situation?",
    options: ["A. Unstructured", "B. Object", "C. Volume", "D. Structured"],
    correctAnswer: "B",
    explanation: "Object storage often depends on provider-specific APIs and semantics, which can increase vendor lock-in risk.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which cloud deployment model would be ideal for a group of universities looking to work together, where each university can gain benefits according to its specific needs?",
    options: ["A. Private", "B. Public", "C. Hybrid", "D. Community"],
    correctAnswer: "D",
    explanation: "A community cloud fits organizations with shared interests, such as universities collaborating on common needs.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Data centers have enormous power resources that are distributed and consumed throughout the entire facility.Which of the following standards pertains to the proper fire safety standards within that scope?",
    options: ["A. IDCA", "B. BICSI", "C. NFPA", "D. Uptime Institute"],
    correctAnswer: "C",
    explanation: "NFPA standards address fire protection and safety, including data center fire safety concerns.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types involves an application that does not validate authorization for portions of itself beyond when the user first enters it?",
    options: ["A. Cross-site request forgery", "B. Missing function-level access control", "C. Injection", "D. Cross-site scripting"],
    correctAnswer: "B",
    explanation: "This flaw occurs when authorization is not enforced consistently for privileged functions after initial entry.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Clustered systems can be used to ensure high availability and load balancing across individual systems through a variety of methodologies.What process is used within a clustered system to ensure proper load balancing and to maintain the health of the overall system to provide high availability?",
    options: ["A. Distributed clustering", "B. Distributed balancing", "C. Distributed optimization", "D. Distributed resource scheduling"],
    correctAnswer: "D",
    explanation: "Distributed resource scheduling balances clustered workloads while maintaining host health and availability.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Although the REST API supports a wide variety of data formats for communications and exchange, which data formats are the most commonly used?",
    options: ["A. SAML and HTML", "B. XML and SAML", "C. XML and JSON", "D. JSON and SAML"],
    correctAnswer: "C",
    explanation: "REST commonly uses JSON and can also use XML for payload formatting.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The share phase of the cloud data lifecycle involves allowing data to leave the application, to be shared with external systems, services, or even other vendors/ contractors.What technology would be useful for protecting data at this point?",
    options: ["A. IDS", "B. DLP", "C. IPS", "D. WAF"],
    correctAnswer: "B",
    explanation: "During the share phase, DLP helps detect and control sensitive data leaving the application or environment.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When an API is being leveraged, it will encapsulate its data for transmission back to the requesting party or service.What is the data encapsulation used with the SOAP protocol referred to as?",
    options: ["A. Packet", "B. Payload", "C. Object", "D. Envelope"],
    correctAnswer: "D",
    explanation: "SOAP wraps its message data inside an XML envelope.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "From a security perspective, what component of a cloud computing infrastructure represents the biggest concern?",
    options: ["A. Hypervisor", "B. Management plane", "C. Object storage", "D. Encryption"],
    correctAnswer: "B",
    explanation: "The management plane is the highest-value target because it orchestrates and controls large portions of the cloud environment.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT one of the main intended goals of a DLP solution?",
    options: ["A. Showing due diligence", "B. Preventing malicious insiders", "C. Regulatory compliance", "D. Managing and minimizing risk"],
    correctAnswer: "B",
    explanation: "DLP mainly supports compliance, due diligence, and risk reduction; it is not a complete solution for stopping malicious insiders.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Data center and operations design traditionally takes a tiered, topological approach.Which of the following standards is focused on that approach and is prevalently used throughout the industry?",
    options: ["A. IDCA", "B. NFPA", "C. BICSI", "D. Uptime Institute"],
    correctAnswer: "C",
    explanation: "BICSI is strongly associated with the traditional tiered, topological approach to data center design.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Jurisdictions have a broad range of privacy requirements pertaining to the handling of personal data and information.Which jurisdiction requires all storage and processing of data that pertains to its citizens to be done on hardware that is physically located within its borders?",
    options: ["A. Japan", "B. United States", "C. European Union", "D. Russia"],
    correctAnswer: "D",
    explanation: "Russia has data localization requirements that can require citizen data to be stored and processed within its borders.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The management plane is used to administer a cloud environment and perform administrative tasks across a variety of systems, but most specifically it's used with the hypervisors.What does the management plane typically leverage for this orchestration?",
    options: ["A. APIs", "B. Scripts", "C. TLS", "D. XML"],
    correctAnswer: "A",
    explanation: "Cloud management planes typically use APIs to orchestrate hypervisors and supporting services.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When dealing with PII, which category pertains to those requirements that can carry legal sanctions or penalties for failure to adequately safeguard the data and address compliance requirements?",
    options: ["A. Contractual", "B. Jurisdictional", "C. Regulated", "D. Legal"],
    correctAnswer: "C",
    explanation: "Regulated PII is governed by laws or regulations and can carry penalties for noncompliance.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Although the United States does not have a single, comprehensive privacy and regulatory framework, a number of specific regulations pertain to types of data or populations.Which of the following is NOT a regulatory system from the United States federal government?",
    options: ["A. HIPAA", "B. SOX", "C. FISMA", "D. PCI DSS"],
    correctAnswer: "D",
    explanation: "PCI DSS is an industry standard, not a U.S. federal government regulation.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The president of your company has tasked you with implementing cloud services as the most efficient way of obtaining a robust disaster recovery configuration for your production services.Which of the cloud deployment models would you MOST likely be exploring?",
    options: ["A. Hybrid", "B. Private", "C. Community", "D. Public"],
    correctAnswer: "A",
    explanation: "A hybrid model is a common fit for disaster recovery when production and recovery environments span different platforms.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "If you are running an application that has strict legal requirements that the data cannot reside on systems that contain other applications or systems, which aspect of cloud computing would be prohibitive in this case?",
    options: ["A. Multitenancy", "B. Broad network access", "C. Portability", "D. Elasticity"],
    correctAnswer: "A",
    explanation: "If data cannot coexist with other tenants' workloads, multitenancy becomes the prohibitive cloud characteristic.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The REST API is a widely used standard for communications of web-based services between clients and the servers hosting them.Which protocol does the REST API depend on?",
    options: ["A. HTTP", "B. SSH", "C. SAML", "D. XML"],
    correctAnswer: "A",
    explanation: "REST is built on HTTP methods and semantics.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following actions will NOT make data part of the create phase of the cloud data lifecycle?",
    options: ["A. Modify data", "B. Modify metadata", "C. New data", "D. Import data"],
    correctAnswer: "B",
    explanation: "The create phase covers creating, importing, or materially modifying data itself rather than merely changing metadata.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Most APIs will support a variety of different data formats or structures.However, the SOAP API will only support which one of the following data formats?",
    options: ["A. XML", "B. XSLT", "C. JSON", "D. SAML"],
    correctAnswer: "A",
    explanation: "SOAP is XML-based and does not use JSON as its message format.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which cloud storage type is typically used to house virtual machine images that are used throughout the environment?",
    options: ["A. Structured", "B. Unstructured", "C. Volume", "D. Object"],
    correctAnswer: "D",
    explanation: "Cloud providers commonly store VM images in object storage repositories.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With an API, various features and optimizations are highly desirable to scalability, reliability, and security.What does the REST API support that the SOAP API does NOT support?",
    options: ["A. Acceleration", "B. Caching", "C. Redundancy", "D. Encryption"],
    correctAnswer: "B",
    explanation: "REST supports caching semantics through HTTP in a way SOAP does not natively provide.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Although much of the attention given to data security is focused on keeping data private and only accessible by authorized individuals, of equal importance is the trustworthiness of the data.Which concept encapsulates this?",
    options: ["A. Validity", "B. Integrity", "C. Accessibility", "D. Confidentiality"],
    correctAnswer: "B",
    explanation: "Integrity is the property that reflects whether data remains accurate, complete, and trustworthy.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Three central concepts define what type of data and information an organization is responsible for pertaining to eDiscovery.Which of the following are the three components that comprise required disclosure?",
    options: ["A. Possession, ownership, control", "B. Ownership, use, creation", "C. Control, custody, use", "D. Possession, custody, control"],
    correctAnswer: "D",
    explanation: "Those three concepts define whether data falls within required disclosure for eDiscovery.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types involves the sending of commands or arbitrary data through input fields in an application in an attempt to get that code executed as part of normal processing?",
    options: ["A. Cross-site scripting", "B. Missing function-level access control", "C. Injection", "D. Cross-site forgery"],
    correctAnswer: "C",
    explanation: "Injection attacks try to pass crafted input so the application executes unintended commands or queries.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With a cloud service category where the cloud customer is responsible for deploying all services, systems, and components needed for their applications, which of the following storage types are MOST likely to be available to them?",
    options: ["A. Structured and hierarchical", "B. Volume and object", "C. Volume and database", "D. Structured and unstructured"],
    correctAnswer: "B",
    explanation: "In IaaS, customers typically get rawer storage choices such as block or volume storage and object storage.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles would be responsible for managing memberships in federations and the use and integration of federated services?",
    options: ["A. Inter-cloud provider", "B. Cloud service business manager", "C. Cloud service administrator", "D. Cloud service integrator"],
    correctAnswer: "D",
    explanation: "The integrator role handles federation relationships and the integration of federated services.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which data state would be most likely to use TLS as a protection mechanism?",
    options: ["A. Data in use", "B. Data at rest", "C. Archived", "D. Data in transit"],
    correctAnswer: "D",
    explanation: "TLS protects data while it is moving between systems or endpoints.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "You are working for a cloud service provider and receive an eDiscovery order pertaining to one of your customers.Which of the following would be the most appropriate action to take first?",
    options: ["A. Take a shapshot of the virtual machines", "B. Escrow the encryption keys", "C. Copy the data", "D. Notify the customer"],
    correctAnswer: "D",
    explanation: "A provider receiving an eDiscovery order for tenant data should first involve the customer unless legally prohibited.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "If a cloud computing customer wishes to guarantee that a minimum level of resources will always be available, which of the following set of services would compromise the reservation?",
    options: ["A. Memory and networking", "B. CPU and software", "C. CPU and storage", "D. CPU and memory"],
    correctAnswer: "D",
    explanation: "Reservations are commonly defined around guaranteed compute capacity such as CPU and memory.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types can occur when baselines are not appropriately applied or when unauthorized changes are made?",
    options: ["A. Security misconfiguration", "B. Insecure direct object references", "C. Unvalidated redirects and forwards", "D. Sensitive data exposure"],
    correctAnswer: "A",
    explanation: "Missing baselines or unauthorized changes are classic examples of security misconfiguration.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is considered an internal redundancy for a data center?",
    options: ["A. Power feeds", "B. Chillers", "C. Network circuits", "D. Generators"],
    correctAnswer: "B",
    explanation: "Chillers are an internal facility redundancy component, unlike external utility feeds or carrier circuits.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types involves the sending of invalid and manipulated requests through a user's client to execute commands on the application under their own credentials?",
    options: ["A. Injection", "B. Cross-site request forgery", "C. Missing function-level access control", "D. Cross-site scripting"],
    correctAnswer: "B",
    explanation: "CSRF leverages the user's authenticated browser to submit unintended requests under that user's session.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With finite resources available within a cloud, even the largest cloud providers will at times need to determine which customers will receive additional resources first.What is the term associated with this determination?",
    options: ["A. Weighting", "B. Prioritization", "C. Shares", "D. Scoring"],
    correctAnswer: "C",
    explanation: "Shares are used to prioritize access to constrained resources when contention occurs.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In order to comply with regulatory requirements, which of the following secure erasure methods would be available to a cloud customer using volume storage within the IaaS service model?",
    options: ["A. Demagnetizing", "B. Shredding", "C. Degaussing", "D. Cryptographic erasure"],
    correctAnswer: "D",
    explanation: "For cloud-managed volume storage, destroying the encryption keys is a practical secure erasure method available to the customer.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Where is a DLP solution generally installed when utilized for monitoring data in use?",
    options: ["A. Application server", "B. Database server", "C. Network perimeter", "D. User's client"],
    correctAnswer: "D",
    explanation: "For data in use, DLP is commonly enforced at the endpoint where the user is actively handling the data.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following aspects of cloud computing would make it more likely that a cloud provider would be unwilling to satisfy specific certification requirements?",
    options: ["A. Regulation", "B. Multitenancy", "C. Virtualization", "D. Resource pooling"],
    correctAnswer: "B",
    explanation: "Multitenancy can conflict with certification requirements that demand stricter isolation or dedicated infrastructure.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which phase of the cloud data lifecycle would be the MOST appropriate for the use of DLP technologies to protect the data?",
    options: ["A. Use", "B. Store", "C. Share", "D. Create"],
    correctAnswer: "C",
    explanation: "DLP is especially useful when data is being shared or leaving the application boundary.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "During which phase of the cloud data lifecycle is it possible for the classification of data to change?",
    options: ["A. Use", "B. Archive", "C. Create", "D. Share"],
    correctAnswer: "C",
    explanation: "Classification can change at creation when data is imported, derived, or materially modified.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "If a key feature of cloud computing that your organization desires is the ability to scale and expand without limit or concern about available resources, which cloud deployment model would you MOST likely be considering?",
    options: ["A. Public", "B. Hybrid", "C. Private", "D. Community"],
    correctAnswer: "A",
    explanation: "Public cloud offers the broadest scale and elasticity when effectively unlimited expansion is the goal.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is a serious complication an organization faces from the compliance perspective with international operations?",
    options: ["A. Multiple jurisdictions", "B. Different certifications", "C. Different operational procedures", "D. Different capabilities"],
    correctAnswer: "A",
    explanation: "International operations complicate compliance because data and services may be subject to overlapping legal regimes.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "ISO/IEC has established international standards for many aspects of computing and any processes or procedures related to information technology.Which ISO/IEC standard has been established to provide a framework for handling eDiscovery processes?",
    options: ["A. ISO/IEC 27001", "B. ISO/IEC 27002", "C. ISO/IEC 27040", "D. ISO/IEC 27050"],
    correctAnswer: "D",
    explanation: "ISO/IEC 27050 provides guidance and a framework for eDiscovery and related processes.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "If a company needed to guarantee through contract and SLAs that a cloud provider would always have available sufficient resources to start their services and provide a certain level of provisioning, what would the contract need to refer to?",
    options: ["A. Limit", "B. Reservation", "C. Assurance", "D. Guarantee"],
    correctAnswer: "B",
    explanation: "A reservation contractually guarantees a minimum amount of cloud capacity will be available.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Many aspects and features of cloud computing can make eDiscovery compliance more difficult or costly.Which aspect of cloud computing would be the MOST complicating factor?",
    options: ["A. Measured service", "B. Broad network access", "C. Multitenancy", "D. Portability"],
    correctAnswer: "C",
    explanation: "Multitenancy complicates eDiscovery because providers must isolate one customer's data without exposing another's.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "A crucial decision any company must make is in regard to where it hosts the data systems it depends on. A debate exists as to whether it's best to lease space in a data center or build your own data center--and now with cloud computing, whether to purchase resources within a cloud.What is the biggest advantage to leasing space in a data center versus procuring cloud services?",
    options: ["A. Regulations", "B. Control", "C. Security", "D. Costs"],
    correctAnswer: "B",
    explanation: "Leasing data center space generally preserves more direct control over systems than moving to cloud services.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following systems is used to employ a variety of different techniques to discover and alert on threats and potential threats to systems and networks?",
    options: ["A. IDS", "B. IPS", "C. Firewall", "D. WAF"],
    correctAnswer: "A",
    explanation: "An IDS uses multiple detection methods to identify and alert on potential attacks.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is not a risk management framework?",
    options: ["A. COBIT", "B. Hex GBL", "C. ISO 31000:2009", "D. NIST SP 800-37"],
    correctAnswer: "B",
    explanation: "Hex GBL is not a recognized risk management framework like COBIT, ISO 31000, or NIST SP 800-37.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "In order to ensure ongoing compliance with regulatory requirements, which phase of the cloud data lifecycle must be tested regularly?",
    options: ["A. Archive", "B. Share", "C. Store", "D. Destroy"],
    correctAnswer: "D",
    explanation: "Secure destruction must be tested regularly to prove regulatory retention and disposal requirements are actually being met.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types involves leveraging a user's browser to send untrusted data to be executed with legitimate access via the user's valid credentials?",
    options: ["A. Injection", "B. Missing function-level access control", "C. Cross-site scripting", "D. Cross-site request forgery"],
    correctAnswer: "D",
    explanation: "CSRF causes a user's browser to send attacker-chosen requests using the user's legitimate session.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Digital investigations have adopted many of the same methodologies and protocols as other types of criminal or scientific inquiries.What term pertains to the application of scientific norms and protocols to digital investigations?",
    options: ["A. Scientific", "B. Investigative", "C. Methodological", "D. Forensics"],
    correctAnswer: "D",
    explanation: "Digital forensics applies scientific and evidence-handling methods to digital investigations.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Within a federated identity system, which entity accepts tokens from the identity provider?",
    options: ["A. Assertion manager", "B. Servicing party", "C. Proxy party", "D. Relying party"],
    correctAnswer: "D",
    explanation: "The relying party accepts assertions or tokens issued by the identity provider.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Different types of audits are intended for different audiences, such as internal, external, regulatory, and so on.Which of the following audits are considered \"restricted use\" versus being for a more broad audience?",
    options: ["A. SOC Type 2", "B. SOC Type 1", "C. SOC Type 3", "D. SAS-70"],
    correctAnswer: "A",
    explanation: "SOC 2 reports are restricted-use reports intended for informed audiences, unlike SOC 3 reports for general public distribution.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Although host-based and network-based IDSs perform similar functions and have similar capabilities, which of the following is an advantage of a network-basedIDS over a host-based IDS, assuming all capabilities are equal?",
    options: ["A. Segregated from host systems", "B. Network access", "C. Scalability", "D. External to system patching"],
    correctAnswer: "A",
    explanation: "A NIDS can monitor traffic without running on the protected host, reducing dependence on the host's integrity.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "DNSSEC was designed to add a layer of security to the DNS protocol.Which type of attack was the DNSSEC extension designed to mitigate?",
    options: ["A. Account hijacking", "B. Snooping", "C. Spoofing", "D. Data exposure"],
    correctAnswer: "C",
    explanation: "DNSSEC was designed primarily to mitigate forged or spoofed DNS responses.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of cloud computing pertains to cloud customers only paying for the resources and services they actually use?",
    options: ["A. Metered service", "B. Measured billing", "C. Metered billing", "D. Measured service"],
    correctAnswer: "D",
    explanation: "Measured service means customers pay based on actual metered resource consumption.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Many of the traditional concepts of systems and services for a traditional data center also apply to the cloud. Both are built around key computing concepts.Which of the following compromise the two facets of computing?",
    options: ["A. CPU and software", "B. CPU and storage", "C. CPU and memory", "D. Memory and networking"],
    correctAnswer: "C",
    explanation: "Compute capacity is fundamentally expressed in processing and memory resources.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With a cloud service category where the cloud customer is provided a full application framework into which to deploy their code and services, which storage types are MOST likely to be available to them?",
    options: ["A. Structured and unstructured", "B. Structured and hierarchical", "C. Volume and database", "D. Volume and object"],
    correctAnswer: "A",
    explanation: "PaaS commonly exposes managed database services for structured data and object-style services for unstructured data.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Firewalls are used to provide network security throughout an enterprise and to control what information can be accessed--and to a certain extent, through what means.Which of the following is NOT something that firewalls are concerned with?",
    options: ["A. IP address", "B. Encryption", "C. Port", "D. Protocol"],
    correctAnswer: "B",
    explanation: "Traditional firewalls make decisions based on attributes like IP, port, and protocol rather than providing encryption themselves.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Within an IaaS implementation, which of the following would NOT be a metric used to quantify service charges for the cloud customer?",
    options: ["A. Memory", "B. Number of users", "C. Storage", "D. CPU"],
    correctAnswer: "B",
    explanation: "IaaS charges are typically based on infrastructure metrics such as CPU, memory, and storage, not user counts.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Many different common threats exist against web-exposed services and applications. One attack involves attempting to leverage input fields to execute queries in a nested fashion that is unintended by the developers.What type of attack is this?",
    options: ["A. Injection", "B. Missing function-level access control", "C. Cross-site scripting", "D. Cross-site request forgery"],
    correctAnswer: "A",
    explanation: "Executing nested or malicious queries through input fields is a classic injection scenario.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "For service provisioning and support, what is the ideal amount of interaction between a cloud customer and cloud provider?",
    options: ["A. Half", "B. Full", "C. Minimal", "D. Depends on the contract"],
    correctAnswer: "C",
    explanation: "Cloud service provisioning is ideally self-service, minimizing provider interaction for routine support and deployment.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What does a cloud customer purchase or obtain from a cloud provider?",
    options: ["A. Services", "B. Hosting", "C. Servers", "D. Customers"],
    correctAnswer: "A",
    explanation: "A cloud customer procures services rather than owning the provider's underlying servers or facilities.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which phase of the cloud data lifecycle represents the first instance where security controls can be implemented?",
    options: ["A. Use", "B. Share", "C. Store", "D. Create"],
    correctAnswer: "D",
    explanation: "The create phase is the earliest point where data-related security controls can be applied.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "You were recently hired as a project manager at a major university to implement cloud services for the academic and administrative systems. Because the load and demand for services at a university are very cyclical in nature, commensurate with the academic calendar, which of the following aspects of cloud computing would NOT be a primary benefit to you?",
    options: ["A. Measured service", "B. Broad network access", "C. Resource pooling", "D. On-demand self-service"],
    correctAnswer: "B",
    explanation: "Cyclical demand is better addressed by elasticity-related cloud traits than by broad network access.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which cloud deployment model is MOST likely to offer free or very cheap services to users?",
    options: ["A. Hybrid", "B. Community", "C. Public", "D. Private"],
    correctAnswer: "C",
    explanation: "Public cloud offerings are the most likely to include free tiers or very low-cost services.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Where is a DLP solution generally installed when utilized for monitoring data in transit?",
    options: ["A. Network perimeter", "B. Database server", "C. Application server", "D. Web server"],
    correctAnswer: "A",
    explanation: "Data in transit is typically monitored by DLP at network egress and ingress points.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With IaaS, what is responsible for handling the security and control over the volume storage space?",
    options: ["A. Management plane", "B. Operating system", "C. Application", "D. Hypervisor"],
    correctAnswer: "B",
    explanation: "Within IaaS, the guest operating system usually enforces permissions and control over mounted volume storage.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Configurations and policies for a system can come from a variety of sources and take a variety of formats. Which concept pertains to the application of a set of configurations and policies that is applied to all systems or a class of systems?",
    options: ["A. Hardening", "B. Leveling", "C. Baselines", "D. Standards"],
    correctAnswer: "C",
    explanation: "Baselines are standardized configuration sets applied across systems or classes of systems.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following tasks within a SaaS environment would NOT be something the cloud customer would be responsible for?",
    options: ["A. Authentication mechanism", "B. Branding", "C. Training", "D. User access"],
    correctAnswer: "A",
    explanation: "In SaaS, the provider typically delivers the application authentication mechanism, while the customer manages users and training.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "An SLA contains the official requirements for contract performance and satisfaction between the cloud provider and cloud customer.Which of the following would NOT be a component with measurable metrics and requirements as part of an SLA?",
    options: ["A. Network", "B. Users", "C. Memory", "D. CPU"],
    correctAnswer: "B",
    explanation: "SLAs usually define measurable technical or service metrics such as uptime, CPU, memory, or network performance, not user counts.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Within a federated identity system, which of the following would you be MOST likely to use for sending information for consumption by a relying party?",
    options: ["A. XML", "B. HTML", "C. WS-Federation", "D. SAML"],
    correctAnswer: "D",
    explanation: "SAML is the standard federation format most commonly sent to a relying party.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which data state would be most likely to use digital signatures as a security protection mechanism?",
    options: ["A. Data in use", "B. Data in transit", "C. Archived", "D. Data at rest"],
    correctAnswer: "B",
    explanation: "Digital signatures are commonly applied to transmitted data to provide origin assurance and integrity.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "There is a large gap between the privacy laws of the United States and those of the European Union. Bridging this gap is necessary for American companies to do business with European companies and in European markets in many situations, as the American companies are required to comply with the stricter requirements.Which US program was designed to help companies overcome these differences?",
    options: ["A. SOX", "B. HIPAA", "C. GLBA", "D. Safe Harbor"],
    correctAnswer: "D",
    explanation: "Safe Harbor was the U.S. program intended to help bridge privacy requirements with the EU framework.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Audits are either done based on the status of a system or application at a specific time or done as a study over a period of time that takes into account changes and processes.Which of the following pairs matches an audit type that is done over time, along with the minimum span of time necessary for it?",
    options: ["A. SOC Type 2, one year", "B. SOC Type 1, one year", "C. SOC Type 2, one month", "D. SOC Type 2, six months"],
    correctAnswer: "D",
    explanation: "SOC 2 evaluates controls over a period of time, and the commonly cited minimum span is six months.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With software-defined networking (SDN), which two types of network operations are segregated to allow for granularity and delegation of administrative access and functions?",
    options: ["A. Filtering and forwarding", "B. Filtering and firewalling", "C. Firewalling and forwarding", "D. Forwarding and protocol"],
    correctAnswer: "A",
    explanation: "SDN separates network control and packet-handling functions to improve delegation and granularity.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Along with humidity, temperature is crucial to a data center for optimal operations and protection of equipment.Which of the following is the optimal temperature range as set by ASHRAE?",
    options: ["A. 69.8 to 86.0 degrees Fahrenheit (21 to 30 degrees Celsius)", "B. 51.8 to 66.2 degrees Fahrenheit (11 to 19 degrees Celsius)", "C. 64.4 to 80.6 degrees Fahrenheit (18 to 27 degrees Celsius)", "D. 44.6 to 60.8 degrees Fahrenheit (7 to 16 degrees Celsius)"],
    correctAnswer: "C",
    explanation: "ASHRAE's recommended operating range for many data centers falls within 18 to 27 degrees Celsius.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following statements best describes a Type 1 hypervisor?",
    options: ["A. The hypervisor software runs within an operating system tied to the hardware.", "B. The hypervisor software runs as a client on a server and needs an external service to administer it.", "C. The hypervisor software runs on top of an application layer.", "D. The hypervisor software runs directly on \u05d2\u20acbaremetal\u05d2\u20ac without an intermediary."],
    correctAnswer: "D",
    explanation: "A Type 1 hypervisor runs directly on the hardware rather than on top of a host operating system.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which cloud storage type resembles a virtual hard drive and can be utilized in the same manner and with the same type of features and capabilities?",
    options: ["A. Volume", "B. Unstructured", "C. Structured", "D. Object"],
    correctAnswer: "A",
    explanation: "Volume storage behaves like a virtual hard drive and is consumed much like block storage.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of SaaS will alleviate much of the time and energy organizations spend on compliance (specifically baselines)?",
    options: ["A. Maintenance", "B. Licensing", "C. Standardization", "D. Development"],
    correctAnswer: "C",
    explanation: "SaaS reduces baseline and compliance effort because the provider delivers a standardized application environment.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Many tools and technologies are available for securing or monitoring data in transit within a data center, whether it is a traditional data center or a cloud.Which of the following is NOT a technology for securing data in transit?",
    options: ["A. VPN", "B. TLS", "C. DNSSEC", "D. HTTPS"],
    correctAnswer: "C",
    explanation: "DNSSEC protects DNS record integrity, not general payload confidentiality for data in transit.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With a federated identity system, where would a user perform their authentication when requesting services or application access?",
    options: ["A. Cloud provider", "B. The application", "C. Their home organization", "D. Third-party authentication system"],
    correctAnswer: "C",
    explanation: "In federation, users usually authenticate with their home identity provider rather than each target service.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Where is an XML firewall most commonly and effectively deployed in the environment?",
    options: ["A. Between the application and data layers", "B. Between the presentation and application layers", "C. Between the IPS and firewall", "D. Between the firewall and application server"],
    correctAnswer: "B",
    explanation: "An XML firewall is most effective where it can inspect application messages before they reach application logic.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Modern web service systems are designed for high availability and resiliency. Which concept pertains to the ability to detect problems within a system, environment, or application and programmatically invoke redundant systems or processes for mitigation?",
    options: ["A. Elasticity", "B. Redundancy", "C. Fault tolerance", "D. Automation"],
    correctAnswer: "C",
    explanation: "Fault tolerance combines detection and automatic failover to redundant components so service continues through failures.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "On large distributed systems with pooled resources, cloud computing relies on extensive orchestration to maintain the environment and the constant provisioning of resources.Which of the following is crucial to the orchestration and automation of networking resources within a cloud?",
    options: ["A. DNSSEC", "B. DNS", "C. DCOM", "D. DHCP"],
    correctAnswer: "D",
    explanation: "DHCP is crucial for automated network provisioning because it dynamically assigns addresses and related configuration.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "BCDR strategies do not typically involve the entire operations of an organization, but only those deemed critical to their business.Which concept pertains to the amount of services that need to be recovered to meet BCDR objectives?",
    options: ["A. RSL", "B. RTO", "C. RPO", "D. SRE"],
    correctAnswer: "A",
    explanation: "Recovery Service Level defines how much service capability must be restored to meet the target state.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "During the course of an audit, which of the following would NOT be an input into the control requirements used as part of a gap analysis.",
    options: ["A. Contractual requirements", "B. Regulations", "C. Vendor recommendations", "D. Corporate policy"],
    correctAnswer: "C",
    explanation: "Gap analysis control requirements are driven by obligations such as contracts, regulations, and policy rather than vendor suggestions.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The GAPP framework was developed through a joint effort between the major Canadian and American professional accounting associations in order to assist their members with managing and preventing risks to the privacy of their data and customers.Which of the following is the meaning of GAPP?",
    options: ["A. General accounting personal privacy", "B. Generally accepted privacy practices", "C. Generally accepted privacy principles", "D. General accounting privacy policies"],
    correctAnswer: "C",
    explanation: "GAPP stands for Generally Accepted Privacy Principles.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which protocol operates at the network layer and provides for full point-to-point encryption of all communications and transmissions?",
    options: ["A. IPSec", "B. VPN", "C. SSL", "D. TLS"],
    correctAnswer: "A",
    explanation: "IPsec operates at the network layer to encrypt traffic end to end between systems or networks.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When data discovery is undertaken, three main approaches or strategies are commonly used to determine what the type of data, its format, and composition are for the purposes of classification.Which of the following is NOT one of the three main approaches to data discovery?",
    options: ["A. Content analysis", "B. Hashing", "C. Labels", "D. Metadata"],
    correctAnswer: "B",
    explanation: "Common data discovery approaches are content analysis, labels, and metadata rather than hashing.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "There are many situations when testing a BCDR plan is appropriate or mandated.Which of the following would not be a necessary time to test a BCDR plan?",
    options: ["A. After software updates", "B. After regulatory changes", "C. After major configuration changes", "D. Annually"],
    correctAnswer: "A",
    explanation: "Routine software updates do not automatically require a full BCDR test the way annual cycles, major changes, or regulatory changes do.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Key maintenance and security are paramount within a cloud environment due to the widespread use of encryption for both data and transmissions.Which of the following key-management systems would provide the most robust control over and ownership of the key-management processes for the cloud customer?",
    options: ["A. Remote key management service", "B. Local key management service", "C. Client key management service", "D. Internal key management service"],
    correctAnswer: "C",
    explanation: "Client-side key management keeps the customer in stronger control of key ownership and use than provider-managed alternatives.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Security is a critical yet often overlooked consideration for BCDR planning.At which stage of the planning process should security be involved?",
    options: ["A. Scope definition", "B. Requirements gathering", "C. Analysis", "D. Risk assessment"],
    correctAnswer: "A",
    explanation: "Security should be involved from the start of BCDR planning, beginning with scope definition.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which type of testing uses the same strategies and toolsets that hackers would use?",
    options: ["A. Static", "B. Malicious", "C. Penetration", "D. Dynamic"],
    correctAnswer: "C",
    explanation: "Penetration testing uses attacker-like tools and techniques to validate security controls.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following statements about Type 1 hypervisors is true?",
    options: ["A. The hardware vendor and software vendor are different.", "B. The hardware vendor and software vendor are the same", "C. The hardware vendor provides an open platform for software vendors.", "D. The hardware vendor and software vendor should always be different for the sake of security."],
    correctAnswer: "C",
    explanation: "That is the only generally defensible statement in the choices; Type 1 hypervisors are not defined by the hardware and software vendors being the same.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which format is the most commonly used standard for exchanging information within a federated identity system?",
    options: ["A. XML", "B. HTML", "C. SAML", "D. JSON"],
    correctAnswer: "C",
    explanation: "SAML is the dominant standard for exchanging authentication and authorization assertions in federation.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which ITIL component is focused on anticipating predictable problems and ensuring that configurations and operations are in place to prevent these problems from ever occurring?",
    options: ["A. Availability management", "B. Continuity management", "C. Configuration management", "D. Problem management"],
    correctAnswer: "A",
    explanation: "Availability management proactively plans configurations and operations to prevent predictable outages and service degradation.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following areas of responsibility would be shared between the cloud customer and cloud provider within the Software as a Service (SaaS) category?",
    options: ["A. Data", "B. Governance", "C. Application", "D. Physical"],
    correctAnswer: "B",
    explanation: "Governance is shared because both provider and customer have responsibilities for policies, oversight, and compliance alignment.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When a system needs to be exposed to the public Internet, what type of secure system would be used to perform only the desired operations?",
    options: ["A. Firewall", "B. Proxy", "C. Honeypot", "D. Bastion"],
    correctAnswer: "D",
    explanation: "A bastion host is a hardened system exposed to the Internet to perform only tightly controlled operations.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "With the rapid emergence of cloud computing, very few regulations were in place that pertained to it specifically, and organizations often had to resort to using a collection of regulations that were not specific to cloud in order to drive audits and policies.Which standard from the ISO/IEC was designed specifically for cloud computing?",
    options: ["A. ISO/IEC 27001", "B. ISO/IEC 19889", "C. ISO/IEC 27001:2015", "D. ISO/IEC 27018"],
    correctAnswer: "D",
    explanation: "ISO/IEC 27018 is the ISO cloud-focused privacy standard for protecting PII in public cloud services.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT considered a type of data loss?",
    options: ["A. Data corruption", "B. Stolen by hackers", "C. Accidental deletion", "D. Lost or destroyed encryption keys"],
    correctAnswer: "B",
    explanation: "That is a security breach scenario; the others are direct examples of losing access to or integrity of data.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following jurisdictions lacks a comprehensive national policy on data privacy and the protection of personally identifiable information (PII)?",
    options: ["A. European Union", "B. Asian-Pacific Economic Cooperation", "C. United States", "D. Russia"],
    correctAnswer: "C",
    explanation: "The U.S. lacks a single comprehensive national privacy law covering all PII in the way some other jurisdictions do.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which component of ITIL involves planning for the restoration of services after an unexpected outage or incident?",
    options: ["A. Continuity management", "B. Problem management", "C. Configuration management", "D. Availability management"],
    correctAnswer: "A",
    explanation: "ITIL continuity management plans restoration and recovery of services after serious outages.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which component of ITIL pertains to planning, coordinating, executing, and validating changes and rollouts to production environments?",
    options: ["A. Release management", "B. Availability management", "C. Problem management", "D. Change management"],
    correctAnswer: "A",
    explanation: "Release management focuses on planning, coordinating, and validating production rollouts.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What process entails taking sensitive data and removing the indirect identifiers from each data object so that the identification of a single entity would not be possible?",
    options: ["A. Tokenization", "B. Encryption", "C. Anonymization", "D. Masking"],
    correctAnswer: "C",
    explanation: "Anonymization removes or transforms identifying elements so individuals can no longer be reidentified.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Because cloud providers will not give detailed information out about their infrastructures and practices to the general public, they will often use established auditing reports to ensure public trust, where the reputation of the auditors serves for assurance.Which type of audit reports can be used for general public trust assurances?",
    options: ["A. SOC 2", "B. SAS-70", "C. SOC 3", "D. SOC 1"],
    correctAnswer: "C",
    explanation: "SOC 3 reports are intended for broad public trust assurances and can be shared publicly.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following concepts is NOT one of the core components to an encryption system architecture?",
    options: ["A. Software", "B. Network", "C. Keys", "D. Data"],
    correctAnswer: "B",
    explanation: "Encryption architecture is centered on data, keys, and cryptographic mechanisms rather than the network as a core component.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "For optimal security, trust zones are used for network segmentation and isolation. They allow for the separation of various systems and tiers, each with its own security level.Which of the following is typically used to allow administrative personnel access to trust zones?",
    options: ["A. IPSec", "B. SSH", "C. VPN", "D. TLS"],
    correctAnswer: "C",
    explanation: "Administrators commonly use a VPN to gain secure access into protected trust zones before managing systems inside them.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a major regulatory framework?",
    options: ["A. PCI DSS", "B. HIPAA", "C. SOX", "D. FIPS 140-2"],
    correctAnswer: "D",
    explanation: "FIPS 140-2 is a cryptographic validation standard, not a broad regulatory framework like PCI DSS, HIPAA, or SOX.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "As part of the auditing process, getting a report on the deviations between intended configurations and actual policy is often crucial for an organization.What term pertains to the process of generating such a report?",
    options: ["A. Deficiencies", "B. Findings", "C. Gap analysis", "D. Errors"],
    correctAnswer: "C",
    explanation: "A gap analysis reports the differences between required controls and actual implemented controls.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "An audit scope statement defines the limits and outcomes from an audit.Which of the following would NOT be included as part of an audit scope statement?",
    options: ["A. Reports", "B. Certification", "C. Billing", "D. Exclusions"],
    correctAnswer: "C",
    explanation: "Audit scope statements define boundaries, objectives, exclusions, and deliverables, not billing details.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What concept and operational process must be spelled out clearly, as far as roles and responsibilities go, between the cloud provider and cloud customer for the mitigation of any problems or security events?",
    options: ["A. Incident response", "B. Problem management", "C. Change management", "D. Conflict response"],
    correctAnswer: "A",
    explanation: "Provider and customer roles for handling problems and security events must be clearly defined in incident response processes.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Your new CISO is placing increased importance and focus on regulatory compliance as your applications and systems move into cloud environments.Which of the following would NOT be a major focus of yours as you develop a project plan to focus on regulatory compliance?",
    options: ["A. Data in transit", "B. Data in use", "C. Data at rest", "D. Data custodian"],
    correctAnswer: "D",
    explanation: "Regulatory compliance planning focuses heavily on the states of data, not on the label of the operational custodian role.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Cloud systems are increasingly used for BCDR solutions for organizations.What aspect of cloud computing makes their use for BCDR the most attractive?",
    options: ["A. On-demand self-service", "B. Measured service", "C. Portability", "D. Broad network access"],
    correctAnswer: "A",
    explanation: "On-demand self-service makes cloud BCDR attractive because recovery resources can be provisioned rapidly when needed.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What's a potential problem when object storage versus volume storage is used within IaaS for application use and dependency?",
    options: ["A. Object storage is only optimized for small files.", "B. Object storage is its own system, and data consistency depends on replication.", "C. Object storage may have availability issues.", "D. Object storage is dependent on access control from the host server."],
    correctAnswer: "B",
    explanation: "Object storage behaves differently from attached volumes and may rely on replication models that affect application consistency expectations.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Many aspects of cloud computing bring enormous benefits over a traditional data center, but also introduce new challenges unique to cloud computing.Which of the following aspects of cloud computing makes appropriate data classification of high importance?",
    options: ["A. Multitenancy", "B. Interoperability", "C. Portability", "D. Reversibility"],
    correctAnswer: "A",
    explanation: "Multitenancy raises the importance of correct data classification because data of different sensitivity levels may coexist in shared environments.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Without the extensive funds of a large corporation, a small-sized company could gain considerable and cost-effective services for which of the following concepts by moving to a cloud environment?",
    options: ["A. Regulatory", "B. Security", "C. Testing", "D. Development"],
    correctAnswer: "B",
    explanation: "Cloud services let small organizations obtain enterprise-grade security capabilities without large upfront capital investment.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "BCDR strategies typically do not involve the entire operations of an organization, but only those deemed critical to their business.Which concept pertains to the amount of data and services needed to reach the predetermined level of operations?",
    options: ["A. SRE", "B. RPO", "C. RSL", "D. RTO"],
    correctAnswer: "C",
    explanation: "RSL defines the target level of service and data capability that must be restored for business operations.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a commonly used communications method within cloud environments to secure data in transit?",
    options: ["A. IPSec", "B. HTTPS", "C. VPN", "D. DNSSEC"],
    correctAnswer: "D",
    explanation: "DNSSEC protects DNS integrity, but it is not a general communications mechanism for encrypting data in transit.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which crucial aspect of cloud computing can be most threatened by insecure APIs?",
    options: ["A. Automation", "B. Resource pooling", "C. Elasticity", "D. Redundancy"],
    correctAnswer: "A",
    explanation: "Insecure APIs directly threaten automation because cloud orchestration and control heavily depend on API-driven processes.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The WS-Security standards are built around all of the following standards except which one?",
    options: ["A. SAML", "B. WDSL", "C. XML", "D. SOAP"],
    correctAnswer: "B",
    explanation: "WS-Security is centered on SOAP, XML, and related token standards such as SAML rather than WSDL.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which protocol, as a part of TLS, handles negotiating and establishing a connection between two parties?",
    options: ["A. Record", "B. Binding", "C. Negotiation", "D. Handshake"],
    correctAnswer: "D",
    explanation: "The TLS handshake protocol negotiates parameters, authenticates parties, and establishes session keys.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "BCDR strategies typically do not involve the entire operations of an organization, but only those deemed critical to their business.Which concept pertains to the required amount of time to restore services to the predetermined level?",
    options: ["A. RPO", "B. RSL", "C. RTO", "D. SRE"],
    correctAnswer: "C",
    explanation: "Recovery Time Objective defines how quickly services must be restored.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Your company is in the planning stages of moving applications that have large data sets to a cloud environment.What strategy for data removal would be the MOST appropriate for you to recommend if costs and speed are primary considerations?",
    options: ["A. Shredding", "B. Media destruction", "C. Crypthographic erasure", "D. Overwriting"],
    correctAnswer: "C",
    explanation: "Cryptographic erasure is fast and cost-effective because destroying the keys renders encrypted data unreadable.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is a management role, versus a technical role, as it pertains to data management and oversight?",
    options: ["A. Data owner", "B. Data processor", "C. Database administrator", "D. Data custodian"],
    correctAnswer: "A",
    explanation: "The data owner is the management role accountable for classification, handling requirements, and oversight.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "IRM solutions allow an organization to place different restrictions on data usage than would otherwise be possible through traditional security controls.Which of the following controls would be possible with IRM that would not with traditional security controls?",
    options: ["A. Copy", "B. Read", "C. Delete", "D. Print"],
    correctAnswer: "D",
    explanation: "IRM can enforce usage restrictions such as preventing printing after access has already been granted.",
    domain: "Final Exam 2",
    difficulty: "mixed",
    type: "multiple-choice"
  },
];

export default examQuestions;
