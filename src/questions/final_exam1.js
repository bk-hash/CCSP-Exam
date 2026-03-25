const examQuestions = [
  {
    question: "Which of the following roles is responsible for creating cloud components and the testing and validation of services?",
    options: ["A. Cloud auditor", "B. Inter-cloud provider", "C. Cloud service broker", "D. Cloud service developer"],
    correctAnswer: "D",
    explanation: "The cloud service developer role is responsible for building cloud components and validating that services function correctly.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the best source for information about securing a physical asset's BIOS?",
    options: ["A. Security policies", "B. Manual pages", "C. Vendor documentation", "D. Regulations"],
    correctAnswer: "C",
    explanation: "BIOS security settings are hardware-specific, so the vendor's documentation is the authoritative source.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is not a component of contractual PII?",
    options: ["A. Scope of processing", "B. Value of data", "C. Location of data", "D. Use of subcontractors"],
    correctAnswer: "B",
    explanation: "Contractual PII usually addresses scope, location, and subcontractor use; data value is not a standard contractual PII element.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following concepts refers to a cloud customer paying only for the resources and offerings they use within a cloud environment, and only for the duration that they are consuming them?",
    options: ["A. Consumable service", "B. Measured service", "C. Billable service", "D. Metered service"],
    correctAnswer: "B",
    explanation: "Measured service means resource usage is monitored and billed based on actual consumption.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles involves testing, monitoring, and securing cloud services for an organization?",
    options: ["A. Cloud service integrator", "B. Cloud service business manager", "C. Cloud service user", "D. Cloud service administrator"],
    correctAnswer: "D",
    explanation: "The administrator role handles operational security tasks such as monitoring, testing, and securing cloud services.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the only data format permitted with the SOAP API?",
    options: ["A. HTML", "B. SAML", "C. XSML", "D. XML"],
    correctAnswer: "D",
    explanation: "SOAP messages are defined in XML, so XML is the required data format.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which data formats are most commonly used with the REST API?",
    options: ["A. JSON and SAML", "B. XML and SAML", "C. XML and JSON", "D. SAML and HTML"],
    correctAnswer: "C",
    explanation: "REST commonly exchanges data in either XML or JSON, with JSON being especially common in modern APIs.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types involves an application that does not validate authorization for portions of itself after the initial checks?",
    options: ["A. Injection", "B. Missing function-level access control", "C. Cross-site request forgery", "D. Cross-site scripting"],
    correctAnswer: "B",
    explanation: "This weakness exists when authorization checks are not enforced consistently for privileged functions after initial access.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles involves overseeing billing, purchasing, and requesting audit reports for an organization within a cloud environment?",
    options: ["A. Cloud service user", "B. Cloud service business manager", "C. Cloud service administrator", "D. Cloud service integrator"],
    correctAnswer: "B",
    explanation: "Billing, purchasing, and audit-report management are business oversight functions, not technical administration.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the biggest concern with hosting a key management system outside of the cloud environment?",
    options: ["A. Confidentiality", "B. Portability", "C. Availability", "D. Integrity"],
    correctAnswer: "C",
    explanation: "If the external key management system is unreachable, encrypted cloud data may become unusable even if it remains intact.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following approaches would NOT be considered sufficient to meet the requirements of secure data destruction within a cloud environment?",
    options: ["A. Cryptographic erasure", "B. Zeroing", "C. Overwriting", "D. Deletion"],
    correctAnswer: "D",
    explanation: "Simple deletion only removes references to data and does not securely destroy the underlying information.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following cloud aspects complicates eDiscovery?",
    options: ["A. Resource pooling", "B. On-demand self-service", "C. Multitenancy", "D. Measured service"],
    correctAnswer: "C",
    explanation: "Multitenancy complicates eDiscovery because multiple customers' data may be co-located and must be carefully separated.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What does the management plane typically utilize to perform administrative functions on the hypervisors that it has access to?",
    options: ["A. Scripts", "B. RDP", "C. APIs", "D. XML"],
    correctAnswer: "C",
    explanation: "Management planes typically orchestrate hypervisors and cloud resources through APIs.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is a serious complication an organization faces from the perspective of compliance with international operations?",
    options: ["A. Different certifications", "B. Multiple jurisdictions", "C. Different capabilities", "D. Different operational procedures"],
    correctAnswer: "B",
    explanation: "Operating internationally exposes an organization to overlapping and sometimes conflicting legal requirements.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which networking concept in a cloud environment allows for network segregation and isolation of IP spaces?",
    options: ["A. PLAN", "B. WAN", "C. LAN", "D. VLAN"],
    correctAnswer: "D",
    explanation: "VLANs provide logical network segregation and allow isolated IP spaces within shared infrastructure.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following standards primarily pertains to cabling designs and setups in a data center?",
    options: ["A. IDCA", "B. BICSI", "C. NFPA", "D. Uptime Institute"],
    correctAnswer: "B",
    explanation: "BICSI is well known for telecommunications and cabling design guidance in data centers.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following publishes the most commonly used standard for data center design in regard to tiers and topologies?",
    options: ["A. IDCA", "B. Uptime Institute", "C. NFPA", "D. BICSI"],
    correctAnswer: "B",
    explanation: "The Uptime Institute is the organization most associated with data center tier standards and topology guidance.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of segregation and separation of resources is needed within a cloud environment for multitenancy purposes versus a traditional data center model?",
    options: ["A. Virtual", "B. Security", "C. Physical", "D. Logical"],
    correctAnswer: "D",
    explanation: "Cloud multitenancy relies primarily on logical separation of resources rather than dedicated physical separation.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which United States law is focused on data related to health records and privacy?",
    options: ["A. Safe Harbor", "B. SOX", "C. GLBA", "D. HIPAA"],
    correctAnswer: "D",
    explanation: "HIPAA governs protection of healthcare information and related privacy requirements in the United States.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is used for local, physical access to hardware within a data center?",
    options: ["A. SSH", "B. KVM", "C. VPN", "D. RDP"],
    correctAnswer: "B",
    explanation: "A KVM provides direct local console access to hardware for keyboard, video, and mouse control.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Within an Infrastructure as a Service model, which of the following would NOT be a measured service?",
    options: ["A. CPU", "B. Storage", "C. Number of users", "D. Memory"],
    correctAnswer: "C",
    explanation: "In IaaS, CPU, memory, and storage are common metered resources, but user count is not typically a measured infrastructure resource.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a criterion for data within the scope of eDiscovery?",
    options: ["A. Possession", "B. Custody", "C. Control", "D. Archive"],
    correctAnswer: "D",
    explanation: "The legal standard for eDiscovery scope is possession, custody, or control, not whether the data is archived.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which United States law is focused on accounting and financial practices of organizations?",
    options: ["A. Safe Harbor", "B. GLBA", "C. SOX", "D. HIPAA"],
    correctAnswer: "C",
    explanation: "Sarbanes-Oxley focuses on financial reporting accuracy and accounting controls.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of masking strategy involves making a separate and distinct copy of data with masking in place?",
    options: ["A. Dynamic", "B. Replication", "C. Static", "D. Duplication"],
    correctAnswer: "C",
    explanation: "Static masking creates a separate masked copy of the data for use outside production.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following storage types is most closely associated with a database-type storage implementation?",
    options: ["A. Object", "B. Unstructured", "C. Volume", "D. Structured"],
    correctAnswer: "D",
    explanation: "Structured storage is most associated with relational or database-style storage models.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles is responsible for overseeing customer relationships and the processing of financial transactions?",
    options: ["A. Cloud service manager", "B. Cloud service deployment", "C. Cloud service business manager", "D. Cloud service operations manager"],
    correctAnswer: "C",
    explanation: "Customer relationship oversight and financial transaction handling are business management responsibilities.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which protocol does the REST API depend on?",
    options: ["A. HTTP", "B. XML", "C. SAML", "D. SSH"],
    correctAnswer: "A",
    explanation: "REST is an architectural style that commonly relies on HTTP methods and semantics.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which United States program was designed to enable organizations to bridge the gap between privacy laws and requirements of the United States and theEuropean Union?",
    options: ["A. GLBA", "B. HIPAA", "C. Safe Harbor", "D. SOX"],
    correctAnswer: "C",
    explanation: "The Safe Harbor framework was created to help bridge U.S. and EU privacy requirements.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the biggest benefit to leasing space in a data center versus building or maintain your own?",
    options: ["A. Certification", "B. Costs", "C. Regulation", "D. Control"],
    correctAnswer: "B",
    explanation: "Leasing data center space avoids the major capital and operational expense of building and maintaining your own facility.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following security measures done at the network layer in a traditional data center are also applicable to a cloud environment?",
    options: ["A. Dedicated switches", "B. Trust zones", "C. Redundant network circuits", "D. Direct connections"],
    correctAnswer: "B",
    explanation: "Network segmentation into trust zones is a traditional control that remains directly applicable in cloud networks.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of cloud computing will be most negatively impacted by vendor lock-in?",
    options: ["A. Elasticity", "B. Reversibility", "C. Interoperability", "D. Portability"],
    correctAnswer: "D",
    explanation: "Vendor lock-in makes it harder to move workloads and data to another provider, which directly harms portability.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following APIs are most commonly used within a cloud environment?",
    options: ["A. REST and SAML", "B. SOAP and REST", "C. REST and XML", "D. XML and SAML"],
    correctAnswer: "B",
    explanation: "SOAP and REST are the two API approaches most commonly encountered in cloud environments.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following attempts to establish an international standard for eDiscovery processes and best practices?",
    options: ["A. ISO/IEC 31000", "B. ISO/IEC 27050", "C. ISO/IEC 19888", "D. ISO/IEC 27001"],
    correctAnswer: "B",
    explanation: "ISO/IEC 27050 provides guidance related to electronic discovery processes and practices.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles is responsible for obtaining new customers and securing contracts and agreements?",
    options: ["A. Inter-cloud provider", "B. Cloud service broker", "C. Cloud auditor", "D. Cloud service developer"],
    correctAnswer: "B",
    explanation: "A cloud service broker helps match customers to providers and supports contracting and service relationships.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which term relates to the application of scientific methods and practices to evidence?",
    options: ["A. Forensics", "B. Methodical", "C. Theoretical", "D. Measured"],
    correctAnswer: "A",
    explanation: "Forensics applies scientific and methodical practices to evidence collection and analysis.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles involves the provisioning and delivery of cloud services?",
    options: ["A. Cloud service deployment manager", "B. Cloud service business manager", "C. Cloud service manager", "D. Cloud service operations manager"],
    correctAnswer: "C",
    explanation: "The service manager role is centered on service provisioning and delivery oversight.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the primary reason that makes resolving jurisdictional conflicts complicated?",
    options: ["A. Different technology standards", "B. Costs", "C. Language barriers", "D. Lack of international authority"],
    correctAnswer: "D",
    explanation: "Jurisdictional conflicts are hard to resolve because no single global legal authority governs all parties.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "GAAPs are created and maintained by which organization?",
    options: ["A. ISO/IEC", "B. AICPA", "C. PCI Council", "D. ISO"],
    correctAnswer: "B",
    explanation: "Among these choices, AICPA is the organization most closely associated with GAAP and accounting practice guidance.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles is responsible for preparing systems for the cloud, administering and monitoring services, and managing inventory and assets?",
    options: ["A. Cloud service business manager", "B. Cloud service deployment manager", "C. Cloud service operations manager", "D. Cloud service manager"],
    correctAnswer: "C",
    explanation: "Preparing systems, monitoring services, and handling asset and inventory management are operational responsibilities.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which protocol allows a system to use block-level storage as if it was a SAN, but over TCP network traffic instead?",
    options: ["A. SATA", "B. iSCSI", "C. TLS", "D. SCSI"],
    correctAnswer: "B",
    explanation: "iSCSI transports SCSI block storage commands over TCP/IP networks.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud deployment models is used by popular services such as iCloud, Dropbox, and OneDrive?",
    options: ["A. Hybrid", "B. Public", "C. Private", "D. Community"],
    correctAnswer: "B",
    explanation: "Services like iCloud, Dropbox, and OneDrive are public cloud services offered broadly to external customers.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Why does a Type 2 hypervisor typically offer less security control than a Type 1 hypervisor?",
    options: ["A. A Type 2 hypervisor runs on top of another operating system and is dependent on the security of the OS for its own security.", "B. A Type 2 hypervisor allows users to directly perform some functions with their own access.", "C. A Type 2 hypervisor is open source, so attackers can more easily find exploitable vulnerabilities with that access.", "D. A Type 2 hypervisor is always exposed to the public Internet for federated identity access."],
    correctAnswer: "A",
    explanation: "Because a Type 2 hypervisor depends on the host OS, it inherits more attack surface and fewer direct security controls.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which is the appropriate phase of the cloud data lifecycle for determining the data's classification?",
    options: ["A. Create", "B. Use", "C. Share", "D. Store"],
    correctAnswer: "A",
    explanation: "Classification should be determined when data is created so controls can follow the data through its lifecycle.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the optimal temperature for a data center, per the guidelines established by the America Society of Heating, Refrigeration, and AirConditioning Engineers (ASHRAE)?",
    options: ["A. 69.8-86.0degF (21-30degC)", "B. 64.4-80.6degF(18-27degC)", "C. 51.8-66.2degF(11-19degC)", "D. 44.6-60-8degF(7-16degC)"],
    correctAnswer: "B",
    explanation: "ASHRAE commonly recommends that temperature range for modern data center operation.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is not a risk management framework?",
    options: ["A. COBIT", "B. Hex GBL", "C. ISO 31000:2009", "D. NIST SP 800-37"],
    correctAnswer: "B",
    explanation: "Hex GBL is not a recognized risk management framework, unlike COBIT, ISO 31000, or NIST RMF guidance.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types involves the sending of untrusted data to a user's browser to be executed with their own credentials and access?",
    options: ["A. Missing function level access control", "B. Cross-site scripting", "C. Cross-site request forgery", "D. Injection"],
    correctAnswer: "B",
    explanation: "XSS sends malicious input to a browser so the browser executes it in the victim's context.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "How is an object stored within an object storage system?",
    options: ["A. Key value", "B. Database", "C. LDAP", "D. Tree structure"],
    correctAnswer: "A",
    explanation: "Object storage typically retrieves objects by a unique key or identifier rather than by filesystem hierarchy.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a regulatory system from the United States federal government?",
    options: ["A. PCI DSS", "B. FISMA", "C. SOX", "D. HIPAA"],
    correctAnswer: "A",
    explanation: "PCI DSS is an industry standard, not a U.S. federal government regulation.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which jurisdiction lacks specific and comprehensive privacy laws at a national or top level of legal authority?",
    options: ["A. European Union", "B. Germany", "C. Russia", "D. United States"],
    correctAnswer: "D",
    explanation: "The United States lacks a single comprehensive national privacy law and instead uses sector-specific laws.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which United States law is focused on PII as it relates to the financial industry?",
    options: ["A. HIPAA", "B. SOX", "C. Safe Harbor", "D. GLBA"],
    correctAnswer: "D",
    explanation: "GLBA is the U.S. law most associated with protecting financial-sector personal information.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types can occur when encryption is not properly applied or insecure transport mechanisms are used?",
    options: ["A. Security misconfiguration", "B. Insecure direct object references", "C. Sensitive data exposure", "D. Unvalidated redirects and forwards"],
    correctAnswer: "C",
    explanation: "Weak encryption or insecure transport directly increases the risk of exposing sensitive data.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the best approach for dealing with services or utilities that are installed on a system but not needed to perform their desired function?",
    options: ["A. Remove", "B. Monitor", "C. Disable", "D. Stop"],
    correctAnswer: "A",
    explanation: "The safest practice is to uninstall unnecessary services rather than merely stopping or monitoring them.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following actions will NOT make data part of the \"create\" phase of the cloud data lifecycle?",
    options: ["A. Modifying metadata", "B. Importing data", "C. Modifying data", "D. Constructing new data"],
    correctAnswer: "A",
    explanation: "Create-phase actions include generating, importing, or materially modifying data, not just changing metadata labels.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What are the two protocols that TLS uses?",
    options: ["A. Handshake and record", "B. Transport and initiate", "C. Handshake and transport", "D. Record and transmit"],
    correctAnswer: "A",
    explanation: "TLS is built around the handshake protocol and the record protocol.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which type of cloud model typically presents the most challenges to a cloud customer during the \"destroy\" phase of the cloud data lifecycle?",
    options: ["A. IaaS", "B. DaaS", "C. SaaS", "D. PaaS"],
    correctAnswer: "C",
    explanation: "In SaaS, customers have the least direct control over media and deletion processes during the destroy phase.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following may unilaterally deem a cloud hosting model inappropriate for a system or application?",
    options: ["A. Multitenancy", "B. Certification", "C. Regulation", "D. Virtualization"],
    correctAnswer: "C",
    explanation: "Regulatory requirements can immediately rule out a cloud hosting option if it cannot meet compliance obligations.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is considered an internal redundancy for a data center?",
    options: ["A. Power distribution units", "B. Network circuits", "C. Power substations", "D. Generators"],
    correctAnswer: "A",
    explanation: "PDUs are part of internal data center power redundancy and distribution design.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following represents a control on the maximum amount of resources that a single customer, virtual machine, or application can consume within a cloud environment?",
    options: ["A. Share", "B. Reservation", "C. Provision", "D. Limit"],
    correctAnswer: "D",
    explanation: "A limit caps the maximum amount of resources a tenant, VM, or application may consume.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles is responsible for peering with other cloud services and providers?",
    options: ["A. Cloud auditor", "B. Inter-cloud provider", "C. Cloud service broker", "D. Cloud service developer"],
    correctAnswer: "B",
    explanation: "Inter-cloud providers focus on peering and cooperation with other cloud providers and services.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following does NOT relate to the hiding of sensitive data from data sets?",
    options: ["A. Obfuscation", "B. Federation", "C. Masking", "D. Anonymization"],
    correctAnswer: "B",
    explanation: "Federation concerns identity and trust relationships, not disguising sensitive values in data sets.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following are the storage types associated with IaaS?",
    options: ["A. Volume and object", "B. Volume and label", "C. Volume and container", "D. Object and target"],
    correctAnswer: "A",
    explanation: "IaaS commonly exposes block or volume storage and object storage to customers.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which technology can be useful during the \"share\" phase of the cloud data lifecycle to continue to protect data as it leaves the original system and security controls?",
    options: ["A. IPS", "B. WAF", "C. DLP", "D. IDS"],
    correctAnswer: "C",
    explanation: "DLP helps protect data as it is shared beyond the original system and control boundary.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following storage types is most closely associated with a traditional file system and tree structure?",
    options: ["A. Volume", "B. Unstructured", "C. Object", "D. Structured"],
    correctAnswer: "B",
    explanation: "Traditional file systems and directory trees are most associated with unstructured data storage.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following represents a prioritization of applications or cloud customers for the allocation of additional requested resources when there is a limitation on available resources?",
    options: ["A. Provision", "B. Limit", "C. Reservation", "D. Share"],
    correctAnswer: "D",
    explanation: "Shares influence relative resource priority when scarce resources must be allocated among competing workloads.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which type of audit report does many cloud providers use to instill confidence in their policies, practices, and procedures to current and potential customers?",
    options: ["A. SAS-70", "B. SOC 2", "C. SOC 1", "D. SOX"],
    correctAnswer: "B",
    explanation: "Cloud providers commonly use SOC 2 reports to demonstrate control effectiveness to customers and prospects.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following statements accurately describes VLANs?",
    options: ["A. They are not restricted to the same data center or the same racks.", "B. They are not restricted to the name rack but restricted to the same data center.", "C. They are restricted to the same racks and data centers.", "D. They are not restricted to the same rack but restricted to same switches."],
    correctAnswer: "B",
    explanation: "VLANs can span multiple switches and racks, but they are generally implemented within a single data center boundary.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What must be secured on physical hardware to prevent unauthorized access to systems?",
    options: ["A. BIOS", "B. SSH", "C. RDP", "D. ALOM"],
    correctAnswer: "A",
    explanation: "Protecting BIOS or firmware settings helps prevent unauthorized low-level system access and boot changes.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of PII is regulated based on the type of application or per the conditions of the specific hosting agreement?",
    options: ["A. Specific", "B. Contractual", "C. regulated", "D. Jurisdictional"],
    correctAnswer: "B",
    explanation: "Contractual PII obligations are driven by agreements, hosting terms, or application-specific commitments.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following security technologies is commonly used to give administrators access into trust zones within an environment?",
    options: ["A. VPN", "B. WAF", "C. IPSec", "D. HTTPS"],
    correctAnswer: "A",
    explanation: "Administrators commonly use a VPN to securely access segmented trust zones.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which concept BEST describes the capability for a cloud environment to automatically scale a system or application, based on its current resource demands?",
    options: ["A. On-demand self-service", "B. Resource pooling", "C. Measured service", "D. Rapid elasticity"],
    correctAnswer: "D",
    explanation: "Rapid elasticity is the characteristic that allows cloud resources to scale automatically with demand.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "If you're using iSCSI in a cloud environment, what must come from an external protocol or application?",
    options: ["A. Kerberos support", "B. CHAP support", "C. Authentication", "D. Encryption"],
    correctAnswer: "D",
    explanation: "iSCSI can handle storage transport and authentication, but encryption typically must come from another mechanism such as IPsec.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following pertains to a macro level approach to data center design rather than the traditional tiered approach to data centers?",
    options: ["A. IDCA", "B. NFPA", "C. BICSI", "D. Uptime Institute"],
    correctAnswer: "A",
    explanation: "IDCA takes a broader macro-level view of data center design compared with classic tier-focused approaches.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What does the REST API support that SOAP does NOT support?",
    options: ["A. Caching", "B. Encryption", "C. Acceleration", "D. Redundancy"],
    correctAnswer: "A",
    explanation: "REST is built to leverage standard web features like caching, which SOAP does not inherently emphasize.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Why does a Type 1 hypervisor typically offer tighter security controls than a Type 2 hypervisor?",
    options: ["A. A Type 1 hypervisor also controls patching of its hosted virtual machines ensure they are always secure.", "B. A Type 1 hypervisor is tied directly to the bare metal and only runs with code necessary to perform its specific mission.", "C. A Type 1 hypervisor performs hardware-level encryption for tighter security and efficiency.", "D. A Type 1 hypervisor only hosts virtual machines with the same operating systems as the hypervisor."],
    correctAnswer: "B",
    explanation: "Type 1 hypervisors have a smaller attack surface because they run directly on hardware without a general-purpose host OS.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following are the storage types associated with PaaS?",
    options: ["A. Structured and freeform", "B. Volume and object", "C. Structured and unstructured", "D. Database and file system"],
    correctAnswer: "C",
    explanation: "PaaS commonly exposes database-style structured storage and file or content-oriented unstructured storage.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types can occur when baselines are not appropriately applied or unauthorized changes are made?",
    options: ["A. Insecure direct object references", "B. Unvalidated redirects and forwards", "C. Security misconfiguration", "D. Sensitive data exposure"],
    correctAnswer: "C",
    explanation: "Poor baselines or unauthorized changes are classic examples of security misconfiguration.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the data encapsulation used with the SOAP protocol referred to?",
    options: ["A. Packet", "B. Envelope", "C. Payload", "D. Object"],
    correctAnswer: "B",
    explanation: "SOAP wraps its message content inside an XML envelope.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types can occur when an application does not properly validate input and can be leveraged to send users to malicious sites that appear to be legitimate?",
    options: ["A. Unvalidated redirects and forwards", "B. Insecure direct object references", "C. Security miscomfiguration", "D. Sensitive data exposure"],
    correctAnswer: "A",
    explanation: "This flaw lets attackers redirect users to malicious destinations that appear legitimate.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which publication from the United States National Institute of Standards and Technology pertains to defining cloud concepts and definitions for the various core components of cloud computing?",
    options: ["A. SP 800-153", "B. SP 800-145", "C. SP 800-53", "D. SP 800-40"],
    correctAnswer: "B",
    explanation: "NIST SP 800-145 defines cloud computing concepts, characteristics, and service models.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the biggest negative to leasing space in a data center versus building or maintain your own?",
    options: ["A. Costs", "B. Control", "C. Certification", "D. Regulation"],
    correctAnswer: "B",
    explanation: "Leasing space reduces direct control over the facility compared with owning and operating your own data center.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of archiving must be tested regularly for the duration of retention requirements?",
    options: ["A. Availability", "B. Recoverability", "C. Auditability", "D. Portability"],
    correctAnswer: "B",
    explanation: "Archived data must remain recoverable throughout the retention period, so restore testing matters.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following represents a minimum guaranteed resource within a cloud environment for the cloud customer?",
    options: ["A. Reservation", "B. Share", "C. Limit", "D. Provision"],
    correctAnswer: "A",
    explanation: "A reservation guarantees a minimum level of resources for a workload or customer.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "When is a virtual machine susceptible to attacks while a physical server in the same state would not be?",
    options: ["A. When it is behind a WAF", "B. When it is behind an IPS", "C. When it is not patched", "D. When it is powered off"],
    correctAnswer: "D",
    explanation: "A powered-off VM can still be attacked through its files or snapshots, unlike a traditional powered-down server in many cases.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following threat types involves an application developer leaving references to internal information and configurations in code that is exposed to the client?",
    options: ["A. Sensitive data exposure", "B. Security misconfiguration", "C. Insecure direct object references", "D. Unvalidated redirect and forwards"],
    correctAnswer: "A",
    explanation: "Exposing internal references or configuration details to clients leaks information that should remain protected.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the biggest concern or challenge with using encryption?",
    options: ["A. Dependence on keys", "B. Cipher strength", "C. Efficiency", "D. Protocol standards"],
    correctAnswer: "A",
    explanation: "Encryption is only as strong as the protection, availability, and management of the encryption keys.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following would NOT be considered part of resource pooling with an Infrastructure as a Service implementation?",
    options: ["A. Storage", "B. Application", "C. Mamory", "D. CPU"],
    correctAnswer: "B",
    explanation: "In IaaS, pooled infrastructure resources include compute, memory, and storage rather than the customer application itself.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which technology is NOT commonly used for security with data in transit?",
    options: ["A. DNSSEC", "B. IPsec", "C. VPN", "D. HTTPS"],
    correctAnswer: "A",
    explanation: "DNSSEC protects DNS integrity and authenticity, but it is not a typical general-purpose data-in-transit confidentiality control.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles is responsible for gathering metrics on cloud services and managing cloud deployments and the deployment processes?",
    options: ["A. Cloud service business manager", "B. Cloud service operations manager", "C. Cloud service manager", "D. Cloud service deployment manager"],
    correctAnswer: "D",
    explanation: "Deployment managers track service metrics and oversee cloud deployment processes.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is considered an external redundancy for a data center?",
    options: ["A. Power feeds to rack", "B. Generators", "C. Power distribution units", "D. Storage systems"],
    correctAnswer: "B",
    explanation: "Generators provide facility-level redundancy beyond the immediate IT equipment and rack components.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the optimal humidity level for a data center, per the guidelines established by the America Society of Heating, Refrigeration, and AirConditioning Engineers (ASHRAE)?",
    options: ["A. 30-50 percent relative humidity", "B. 50-75 percent relative humidity", "C. 20-40 percent relative humidity", "D. 40-60 percent relative humidity"],
    correctAnswer: "D",
    explanation: "That range is commonly cited as the appropriate humidity band for safe data center operation.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the first stage of the cloud data lifecycle where security controls can be implemented?",
    options: ["A. Use", "B. Store", "C. Share", "D. Create"],
    correctAnswer: "D",
    explanation: "Security controls should begin at data creation so the data is protected from the start of its lifecycle.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What controls the formatting and security settings of a volume storage system within a cloud environment?",
    options: ["A. Management plane", "B. SAN host controller", "C. Hypervisor", "D. Operating system of the host"],
    correctAnswer: "D",
    explanation: "With volume storage, the guest operating system typically controls formatting and many local security settings on the mounted volume.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What does SDN stand for within a cloud environment?",
    options: ["A. Software-dynamic networking", "B. Software-defined networking", "C. Software-dependent networking", "D. System-dynamic nodes"],
    correctAnswer: "B",
    explanation: "SDN stands for software-defined networking and separates control logic from underlying forwarding infrastructure.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "From a legal perspective, what is the most important first step after an eDiscovery order has been received by the cloud provider?",
    options: ["A. Notification", "B. Key identification", "C. Data collection", "D. Virtual image snapshots"],
    correctAnswer: "A",
    explanation: "From a legal process standpoint, the cloud provider should first notify the customer unless prohibited by the order.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following would make it more likely that a cloud provider would be unwilling to satisfy specific certification requirements?",
    options: ["A. Resource pooling", "B. Virtualization", "C. Multitenancy", "D. Regulation"],
    correctAnswer: "C",
    explanation: "Multitenancy makes customer-specific certification demands harder to satisfy because infrastructure is shared.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following pertains to fire safety standards within a data center, specifically with their enormous electrical consumption?",
    options: ["A. NFPA", "B. BICSI", "C. IDCA", "D. Uptime Institute"],
    correctAnswer: "A",
    explanation: "NFPA standards are strongly associated with fire safety, including high-electrical-load environments like data centers.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following roles involves the connection and integration of existing systems and services to a cloud environment?",
    options: ["A. Cloud service business manager", "B. Cloud service user", "C. Cloud service administrator", "D. Cloud service integrator"],
    correctAnswer: "D",
    explanation: "Integration of existing systems and services into a cloud environment is the integrator's core role.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which technique involves replacing values within a specific data field to protect sensitive data?",
    options: ["A. Anonymization", "B. Masking", "C. Tokenization", "D. Obfuscation"],
    correctAnswer: "B",
    explanation: "Data masking protects sensitive fields by replacing or obscuring values while preserving usability.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What expectation of data custodians is made much more challenging by a cloud implementation, especially with PaaS or SaaS?",
    options: ["A. Data classification", "B. Knowledge of systems", "C. Access to data", "D. Encryption requirements"],
    correctAnswer: "B",
    explanation: "In PaaS and SaaS, data custodians often lose direct visibility into underlying systems that store or process their data.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of PII is controlled based on laws and carries legal penalties for noncompliance with requirements?",
    options: ["A. Contractual", "B. Regulated", "C. Specific", "D. Jurisdictional"],
    correctAnswer: "B",
    explanation: "Regulated PII is governed by law and can carry penalties for noncompliance.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which if the following is NOT one of the three components of a federated identity system transaction?",
    options: ["A. Relying party", "B. Identity provider", "C. User", "D. Proxy relay"],
    correctAnswer: "D",
    explanation: "A federated identity transaction centers on the user, identity provider, and relying party.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which value refers to the amount of time it takes to recover operations in a BCDR situation to meet management's objectives?",
    options: ["A. RSL", "B. RPO", "C. SRE", "D. RTO"],
    correctAnswer: "D",
    explanation: "Recovery Time Objective defines how quickly operations must be restored after a disruption.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud deployment models requires the cloud customer to be part of a specific group or organization in order to host cloud services within it?",
    options: ["A. Community", "B. Hybrid", "C. Private", "D. Public"],
    correctAnswer: "A",
    explanation: "A community cloud is restricted to organizations sharing a common mission, requirement set, or concern.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What provides the information to an application to make decisions about the authorization level appropriate when granting access?",
    options: ["A. User", "B. Relying party", "C. Federation", "D. Identity Provider"],
    correctAnswer: "D",
    explanation: "The identity provider supplies identity attributes and assertions that applications use for authorization decisions.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is a standard configuration and policy set that is applied to systems and virtual machines called?",
    options: ["A. Standardization", "B. Baseline", "C. Hardening", "D. Redline"],
    correctAnswer: "B",
    explanation: "A baseline is the standard set of approved configurations and policies applied consistently to systems.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which entity requires all collection and storing of data on their citizens to be done on hardware that resides within their borders?",
    options: ["A. Russia", "B. France", "C. Germany", "D. United States"],
    correctAnswer: "A",
    explanation: "Russia is known for data localization requirements that can require citizen data to stay on in-country hardware.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud cross-cutting aspects relates to the ability to easily move services and applications between different cloud providers?",
    options: ["A. Reversibility", "B. Availability", "C. Portability", "D. Interoperability"],
    correctAnswer: "C",
    explanation: "Portability is the ability to move applications or services between cloud providers with minimal rework.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which type of audit report is considered a \"restricted use\" report for its intended audience?",
    options: ["A. SAS-70", "B. SSAE-16", "C. SOC Type 1", "D. SOC Type 2"],
    correctAnswer: "D",
    explanation: "SOC 2 reports are commonly treated as restricted-use reports intended for a knowledgeable audience rather than the general public.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the concept of segregating information or processes, within the same system or application, for security reasons?",
    options: ["A. fencing", "B. Sandboxing", "C. Cellblocking", "D. Pooling"],
    correctAnswer: "B",
    explanation: "Sandboxing isolates code or processes within the same system to limit their ability to affect other components.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The European Union passed the first major regulation declaring data privacy to be a human right. In what year did it go into effect?",
    options: ["A. 2010", "B. 2000", "C. 1995", "D. 1990"],
    correctAnswer: "C",
    explanation: "The EU Data Protection Directive 95/46/EC took effect in 1995 and established privacy as a major rights issue.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a key area for performance monitoring as far as an SLA is concerned?",
    options: ["A. CPU", "B. Users", "C. Memory", "D. Network"],
    correctAnswer: "B",
    explanation: "SLA performance monitoring focuses on system resources and service quality, not raw user counts.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the MOST important requirement and guidance for testing during an audit?",
    options: ["A. Stakeholders", "B. Shareholders", "C. Management", "D. Regulations"],
    correctAnswer: "D",
    explanation: "Audit testing must be aligned to the governing regulations and compliance criteria that define what must be verified.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which value refers to the amount of data an organization would need to recover in the event of a BCDR situation in order to reach an acceptable level of operations?",
    options: ["A. SRE", "B. RTO", "C. RPO", "D. RSL"],
    correctAnswer: "C",
    explanation: "Recovery Point Objective defines how much data loss is acceptable and therefore how much data must be recoverable.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What must SOAP rely on for security?",
    options: ["A. Encryption", "B. Tokenization", "C. TLS", "D. SSL"],
    correctAnswer: "C",
    explanation: "SOAP does not provide native transport security, so it commonly depends on TLS.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is a commonly used tool for maintaining system configurations?",
    options: ["A. Maestro", "B. Orchestrator", "C. Puppet", "D. Conductor"],
    correctAnswer: "C",
    explanation: "Puppet is a well-known configuration management tool used to enforce standard system states.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of data does data rights management (DRM) protect?",
    options: ["A. Consumer", "B. PII", "C. Financial", "D. Healthcare"],
    correctAnswer: "A",
    explanation: "DRM is most classically associated with controlling how end users consume digital content and other consumer-facing data.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which type of testing uses the same strategies and toolsets that hackers would use?",
    options: ["A. Penetration", "B. Dynamic", "C. Static", "D. Malicious"],
    correctAnswer: "A",
    explanation: "Penetration testing deliberately uses attacker-like techniques and tools to find exploitable weaknesses.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "From a security perspective, which of the following is a major concern when evaluating possible BCDR solutions?",
    options: ["A. Access provisioning", "B. Auditing", "C. Jurisdictions", "D. Authorization"],
    correctAnswer: "C",
    explanation: "BCDR solutions can create legal issues if replicated data or failover environments land in problematic jurisdictions.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a focus or consideration of an internal audit?",
    options: ["A. Certification", "B. Design", "C. Costs", "D. Operational efficiency"],
    correctAnswer: "A",
    explanation: "Internal audits focus on control design and efficiency, while formal certification is usually an external attestation activity.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the sole responsibility of the cloud customer, regardless of which cloud model is used?",
    options: ["A. Infrastructure", "B. Platform", "C. Application", "D. Data"],
    correctAnswer: "D",
    explanation: "No matter the cloud model, the customer remains accountable for the data they place in the service.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What process is used within a clustered system to provide high availability and load balancing?",
    options: ["A. Dynamic balancing", "B. Dynamic clustering", "C. Dynamic optimization", "D. Dynamic resource scheduling"],
    correctAnswer: "D",
    explanation: "Dynamic resource scheduling redistributes workloads across clustered resources to support availability and balancing.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a function performed by the handshake protocol of TLS?",
    options: ["A. Key exchange", "B. Encryption", "C. Negotiation of connection", "D. Establish session ID"],
    correctAnswer: "B",
    explanation: "TLS encryption is performed by the record protocol, not by the handshake protocol.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Unlike SOC Type 1 reports, which are based on a specific point in time, SOC Type 2 reports are done over a period of time. What is the minimum span of time for a SOC Type 2 report?",
    options: ["A. Six months", "B. One month", "C. One year", "D. One week"],
    correctAnswer: "A",
    explanation: "SOC 2 reports evaluate controls over a period of time, and six months is the commonly cited minimum reporting span.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What changes are necessary to application code in order to implement DNSSEC?",
    options: ["A. Adding encryption modules", "B. Implementing certificate validations", "C. Additional DNS lookups", "D. No changes are needed."],
    correctAnswer: "D",
    explanation: "DNSSEC is implemented in DNS infrastructure and resolvers, so application code usually does not need modification.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which type of controls are the SOC Type 1 reports specifically focused on?",
    options: ["A. Integrity", "B. PII", "C. Financial", "D. Privacy"],
    correctAnswer: "C",
    explanation: "SOC 1 reports focus on controls relevant to financial reporting.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which security concept is based on preventing unauthorized access to data while also ensuring that it is accessible to those authorized to use it?",
    options: ["A. Integrity", "B. Availability", "C. Confidentiality", "D. Nonrepudiation"],
    correctAnswer: "C",
    explanation: "Confidentiality is about preventing unauthorized disclosure while allowing authorized access.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a domain of the Cloud Controls Matrix (CCM)?",
    options: ["A. Data center security", "B. Human resources", "C. Mobile security", "D. Budgetary and cost controls"],
    correctAnswer: "D",
    explanation: "Budgetary and cost controls are not a CCM control domain, unlike domains such as HR, mobile security, and data center security.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which security concept, if implemented correctly, will protect the data on a system, even if a malicious actor gains access to the actual system?",
    options: ["A. Sandboxing", "B. Encryption", "C. Firewalls", "D. Access control"],
    correctAnswer: "B",
    explanation: "Strong encryption keeps data unintelligible even if an attacker gains access to the underlying system.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the sole responsibility of the cloud provider, regardless of which cloud model is used?",
    options: ["A. Platform", "B. Data", "C. Physical environment", "D. Infrastructure"],
    correctAnswer: "C",
    explanation: "Physical security of the provider's facilities remains the cloud provider's responsibility in every service model.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a factor that is part of a firewall configuration?",
    options: ["A. Encryption", "B. Port", "C. Protocol", "D. Source IP"],
    correctAnswer: "A",
    explanation: "Firewall rules are based on traffic attributes such as IPs, ports, and protocols, not on encryption itself.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud deployment models involves spanning multiple cloud environments or a mix of cloud hosting models?",
    options: ["A. Community", "B. Public", "C. Hybrid", "D. Private"],
    correctAnswer: "C",
    explanation: "A hybrid cloud spans multiple environments or combines different deployment models such as public and private.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT one of five principles of SOC Type 2 audits?",
    options: ["A. Privacy", "B. Processing integrity", "C. Financial", "D. Security"],
    correctAnswer: "C",
    explanation: "SOC 2 principles cover security, availability, processing integrity, confidentiality, and privacy, not financial reporting.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of cloud computing makes data classification even more vital than in a traditional data center?",
    options: ["A. Interoperability", "B. Virtualization", "C. Multitenancy", "D. Portability"],
    correctAnswer: "C",
    explanation: "Shared infrastructure makes classification more important because different data sensitivity levels may coexist in one environment.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What concept does the \"T\" represent in the STRIDE threat model?",
    options: ["A. TLS", "B. Testing", "C. Tampering with data", "D. Transport"],
    correctAnswer: "C",
    explanation: "In STRIDE, T stands for tampering.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following would be a reason to undertake a BCDR test?",
    options: ["A. Functional change of the application", "B. Change in staff", "C. User interface overhaul of the application", "D. Change in regulations"],
    correctAnswer: "A",
    explanation: "A significant application change can affect continuity assumptions and should trigger a BCDR test.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What is the biggest challenge to data discovery in a cloud environment?",
    options: ["A. Format", "B. Ownership", "C. Location", "D. Multitenancy"],
    correctAnswer: "C",
    explanation: "In cloud environments, data location can shift dynamically, making discovery far harder.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which crucial aspect of cloud computing can be most threatened by insecure APIs?",
    options: ["A. Automation", "B. Redundancy", "C. Resource pooling", "D. Elasticity"],
    correctAnswer: "A",
    explanation: "Cloud automation depends heavily on APIs, so insecure APIs directly threaten orchestration and control.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following should NOT be part of the requirement analysis phase of the software development lifecycle?",
    options: ["A. Functionality", "B. Programming languages", "C. Software platform", "D. Security requirements"],
    correctAnswer: "B",
    explanation: "Requirement analysis should capture business, functional, and security needs, not prematurely lock in coding languages.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud cross-cutting aspects relates to the assigning of jobs, tasks, and roles, as well as to ensuring they are successful and properly performed?",
    options: ["A. Service-level agreements", "B. Governance", "C. Regulatory requirements", "D. Auditability"],
    correctAnswer: "B",
    explanation: "Governance defines roles, accountability, and oversight for how work is assigned and controlled.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which regulatory system pertains to the protection of healthcare data?",
    options: ["A. HIPAA", "B. HAS", "C. HITECH", "D. HFCA"],
    correctAnswer: "A",
    explanation: "HIPAA is the primary U.S. regulatory framework protecting healthcare information.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which aspect of cloud computing makes it very difficult to perform repeat audits over time to track changes and compliance?",
    options: ["A. Virtualization", "B. Multitenancy", "C. Resource pooling", "D. Dynamic optimization"],
    correctAnswer: "D",
    explanation: "Constant movement and reallocation of cloud resources make repeatable audit snapshots difficult over time.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which security concept would business continuity and disaster recovery fall under?",
    options: ["A. Confidentiality", "B. Availability", "C. Fault tolerance", "D. Integrity"],
    correctAnswer: "B",
    explanation: "BCDR exists to keep services available or restore them quickly after disruption.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT an application or utility to apply and enforce baselines on a system?",
    options: ["A. Chef", "B. GitHub", "C. Puppet", "D. Active Directory"],
    correctAnswer: "B",
    explanation: "GitHub is a code hosting platform, not a baseline enforcement or configuration management tool.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud cross-cutting aspects relates to the ability for a cloud customer to easily remove their applications and data from a cloud environment?",
    options: ["A. Reversibility", "B. Availability", "C. Portability", "D. Interoperability"],
    correctAnswer: "A",
    explanation: "Reversibility is the ability to exit a cloud provider and remove or reclaim applications and data.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is NOT a function performed by the record protocol of TLS?",
    options: ["A. Encryption", "B. Acceleration", "C. Authentication", "D. Compression"],
    correctAnswer: "B",
    explanation: "The TLS record protocol provides framing, compression, encryption, and integrity checks, not acceleration.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What concept does the \"R\" represent with the DREAD model?",
    options: ["A. Reproducibility", "B. Repudiation", "C. Risk", "D. Residual"],
    correctAnswer: "A",
    explanation: "In DREAD, R stands for reproducibility.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "The SOC Type 2 reports are divided into five principles.Which of the five principles must also be included when auditing any of the other four principles?",
    options: ["A. Confidentiality", "B. Privacy", "C. Security", "D. Availability"],
    correctAnswer: "C",
    explanation: "Security is the foundational Trust Services Criterion that must also be considered when assessing the other SOC 2 principles.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "How many additional DNS queries are needed when DNSSEC integrity checks are added?",
    options: ["A. Three", "B. Zero", "C. One", "D. Two"],
    correctAnswer: "C",
    explanation: "DNSSEC validation typically introduces an additional DNS lookup for validation material if it is not already cached.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is the sole responsibility of the cloud customer, regardless of which cloud model is used?",
    options: ["A. Platform", "B. Infrastructure", "C. Governance", "D. Application"],
    correctAnswer: "C",
    explanation: "Regardless of service model, the customer retains responsibility for governing how cloud services are selected and used.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following service categories entails the least amount of support needed on the part of the cloud customer?",
    options: ["A. SaaS", "B. IaaS", "C. DaaS", "D. PaaS"],
    correctAnswer: "A",
    explanation: "SaaS requires the least operational support from the customer because the provider manages most of the stack.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following would NOT be a reason to activate a BCDR strategy?",
    options: ["A. Staffing loss", "B. Terrorism attack", "C. Utility disruptions", "D. Natural disaster"],
    correctAnswer: "A",
    explanation: "BCDR is usually triggered by disruptive events affecting systems or facilities, not ordinary staffing changes alone.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud cross-cutting aspects relates to the oversight of processes and systems, as well as to ensuring their compliance with specific policies and regulations?",
    options: ["A. Governance", "B. Regulatory requirements", "C. Service-level agreements", "D. Auditability"],
    correctAnswer: "D",
    explanation: "Auditability is the cross-cutting concern focused on oversight, evidence, and demonstrating compliance of processes and systems.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud cross-cutting aspects relates to the ability to reuse or move components of an application or service?",
    options: ["A. Availability", "B. Interoperability", "C. Reversibility", "D. Portability"],
    correctAnswer: "B",
    explanation: "Interoperability is about reusing or exchanging components and services so they can work together across environments.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following is a restriction that can be enforced by information rights management (IRM) that is not possible for traditional file system controls?",
    options: ["A. Delete", "B. Modify", "C. Read", "D. Print"],
    correctAnswer: "D",
    explanation: "IRM can restrict actions like printing after a file is opened, which normal filesystem permissions generally cannot enforce.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What strategy involves hiding data in a data set to prevent someone from identifying specific individuals based on other data fields present?",
    options: ["A. Anonymization", "B. Tokenization", "C. Masking", "D. Obfuscation"],
    correctAnswer: "A",
    explanation: "Anonymization removes or obscures identifying relationships so individuals cannot be re-identified from the data set.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of security threat is DNSSEC designed to prevent?",
    options: ["A. Account hijacking", "B. Snooping", "C. Spoofing", "D. Injection"],
    correctAnswer: "C",
    explanation: "DNSSEC is designed to prevent forged DNS responses and related spoofing attacks.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which European Union directive pertains to personal data privacy and an individual's control over their personal data?",
    options: ["A. 99/9/EC", "B. 95/46/EC", "C. 2000/1/EC", "D. 2013/27001/EC"],
    correctAnswer: "B",
    explanation: "Directive 95/46/EC is the well-known EU Data Protection Directive on personal data privacy.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud cross-cutting aspects relates to the requirements placed on a system or application by law, policy, or requirements from standards?",
    options: ["A. regulatory requirements", "B. Auditability", "C. Service-level agreements", "D. Governance"],
    correctAnswer: "A",
    explanation: "Requirements imposed by laws, policies, and standards are regulatory requirements.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which data point that auditors always desire is very difficult to provide within a cloud environment?",
    options: ["A. Access policy", "B. Systems architecture", "C. Baselines", "D. Privacy statement"],
    correctAnswer: "B",
    explanation: "Auditors often want a clear architecture view, but cloud environments can be too dynamic and abstracted to present it cleanly.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What type of host is exposed to the public Internet for a specific reason and hardened to perform only that function for authorized users?",
    options: ["A. Proxy", "B. Bastion", "C. Honeypot", "D. WAF"],
    correctAnswer: "B",
    explanation: "A bastion host is a specially hardened public-facing system intended for tightly controlled access.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which security concept is focused on the trustworthiness of data?",
    options: ["A. Integrity", "B. Availability", "C. Nonrepudiation", "D. Confidentiality"],
    correctAnswer: "A",
    explanation: "Integrity is the security property concerned with the trustworthiness and correctness of data.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which OSI layer does IPsec operate at?",
    options: ["A. Network", "B. transport", "C. Application", "D. Presentation"],
    correctAnswer: "A",
    explanation: "IPsec operates at the network layer to secure IP traffic.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the cloud cross-cutting aspects relates to the requirements placed on the cloud provider by the cloud customer for minimum performance standards and requirements that must be met?",
    options: ["A. Regulatory requirements", "B. SLAs", "C. Auditability", "D. Governance"],
    correctAnswer: "B",
    explanation: "SLAs define the provider's required minimum performance and service commitments to the customer.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following service capabilities gives the cloud customer the most control over resources and configurations?",
    options: ["A. Desktop", "B. Platform", "C. Infrastructure", "D. Software"],
    correctAnswer: "C",
    explanation: "IaaS gives the customer the greatest control over operating systems, storage, networking, and deployed configurations.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "What concept does the \"I\" represent with the STRIDE threat model?",
    options: ["A. Integrity", "B. Information disclosure", "C. IT security", "D. Insider threat"],
    correctAnswer: "B",
    explanation: "In STRIDE, I stands for information disclosure.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "At which stage of the BCDR plan creation phase should security be included in discussions?",
    options: ["A. Define scope", "B. Analyze", "C. Assess risk", "D. Gather requirements"],
    correctAnswer: "D",
    explanation: "Security should be discussed during requirements gathering so continuity objectives and controls are built into the plan early.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which approach is typically the most efficient method to use for data discovery?",
    options: ["A. Metadata", "B. Content analysis", "C. Labels", "D. ACLs"],
    correctAnswer: "A",
    explanation: "Metadata-driven discovery is usually faster and more efficient than full content analysis.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following features is a main benefit of PaaS over IaaS?",
    options: ["A. Location independence", "B. High-availability", "C. Physical security requirements", "D. Auto-scaling"],
    correctAnswer: "D",
    explanation: "PaaS commonly provides built-in scaling capabilities that reduce the operational burden compared with IaaS.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which audit type has been largely replaced by newer approaches since 2011?",
    options: ["A. SOC Type 1", "B. SSAE-16", "C. SAS-70", "D. SOC Type 2"],
    correctAnswer: "C",
    explanation: "SAS 70 was largely superseded by the SOC reporting framework beginning in 2011.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following can be useful for protecting cloud customers from a denial-of-service (DoS) attack against another customer hosted in the same cloud?",
    options: ["A. Reservations", "B. Measured service", "C. Limits", "D. Shares"],
    correctAnswer: "C",
    explanation: "Limits prevent one tenant from exhausting shared resources and harming other tenants through noisy-neighbor style denial of service.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
  {
    question: "Which of the following service capabilities gives the cloud customer the least amount of control over configurations and deployments?",
    options: ["A. Platform", "B. Infrastructure", "C. Software", "D. Desktop"],
    correctAnswer: "C",
    explanation: "SaaS gives the customer the least control because the provider manages nearly the entire stack and deployment model.",
    domain: "Final Exam 1",
    difficulty: "mixed",
    type: "multiple-choice"
  },
];

export default examQuestions;
