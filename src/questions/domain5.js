const questions = [
  {
    question: "Which of the following factors would probably most affect the design of a cloud data center?",
    options: [
      "A. Geographic location",
      "B. Functional purpose",
      "C. Cost",
      "D. Aesthetic intent"
    ],
    correctAnswer: "A",
    explanation: "Geographic location is the most important factor as it affects compliance, latency, disaster recovery, environmental conditions, and regulatory requirements for cloud data center design.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "All of the following elements must be considered in the design of a cloud data center except ______.",
    options: [
      "A. External standards, such as ITIL or ISO 27001",
      "B. Physical environment",
      "C. Types of services offered",
      "D. Native language of the majority of customers"
    ],
    correctAnswer: "B",
    explanation: "Native language is not a technical consideration for data center design. Physical environment, external standards like ITIL/ISO 27001, and types of services are all critical design factors.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "In designing a data center to meet their own needs and provide optimum revenue/profit, the cloud provider will most likely aim to enhance ______.",
    options: [
      "A. Functionality",
      "B. Automation of services",
      "C. Aesthetic value",
      "D. Inherent value"
    ],
    correctAnswer: "B",
    explanation: "Automation of services maximizes efficiency and reduces operational costs, directly impacting revenue and profit for cloud providers by minimizing manual intervention.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security officer for a small cloud provider offering public cloud infrastructure as a service (IaaS); your clients are predominantly from the education sector, located in North America. Of the following technology architecture traits, which is probably the one your organization would most likely want to focus on?",
    options: [
      "A. Reducing mean time to repair (MTTR)",
      "B. Reducing mean time between failure (MTBF)",
      "C. Reducing the recovery time objective (RTO)",
      "D. Automating service enablement"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Reducing mean time to repair (MTTR).",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "What is perhaps the main way in which software-defined networking (SDN) solutions facilitate security in the cloud environment?",
    options: [
      "A. Monitoring outbound traffic",
      "B. Monitoring inbound traffic",
      "C. Segmenting networks",
      "D. Preventing distributed denial of service (DDoS) attacks"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Segmenting networks.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "The logical design of a cloud environment can enhance the security offered in that environment. For instance, in a software as a service (SaaS) cloud, the provider can incorporate ______ capabilities into the application itself.",
    options: [
      "A. High-speed processing",
      "B. Logging",
      "C. Performance-enhancing",
      "D. Cross-platform functionality"
    ],
    correctAnswer: "B",
    explanation: "Logging is essential for security monitoring, incident response, compliance auditing, and troubleshooting in cloud security operations.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are tasked with managing a cloud data center in Los Angeles; your customers are mostly from the entertainment industry, and you are offering both platform as a service (PaaS) and software as a service (SaaS) capabilities. From a physical design standpoint, you are probably going to be most concerned with ______.",
    options: [
      "A. Offering digital rights management (DRM) capabilities",
      "B. Insuring against seasonal floods",
      "C. Preventing all malware infection potential",
      "D. Ensuring that the racks and utilities can endure an earthquake"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Ensuring that the racks and utilities can endure an earthquake.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally. Your company has its own data center located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes. Your cloud provider is changing its business model at the end of your contract term, and you have to find a new provider. In choosing providers, which tier of the Uptime Institute rating system should you be looking for, if minimizing cost is your ultimate goal?",
    options: [
      "A. 1",
      "B. 3",
      "C. 4",
      "D. 8"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is 1.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally. Your company has its own data center located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes. Your cloud provider is changing its business model at the end of your contract term, and you have to find a new provider. In choosing providers, which of the following functionalities will you consider absolutely essential?",
    options: [
      "A. Distributed denial of service (DDoS) protections",
      "B. Constant data mirroring",
      "C. Encryption",
      "D. Hashing"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Distributed denial of service (DDoS) protections.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally. Your company has its own data center located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes. Which of the following standards are you most likely to adopt?",
    options: [
      "A. National Institute of Standards and Technology (NIST) 800-37",
      "B. General Data Protection Regulation (GDPR)",
      "C. ISO 27001",
      "D. Sarbanes–Oxley Act (SOX)"
    ],
    correctAnswer: "C",
    explanation: "ISO 27001 is the international standard for information security management systems (ISMS), providing a framework for managing and protecting sensitive information.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally. Your company has its own data center located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes. Your company has decided to expand its business to include selling and monitoring life-support equipment for medical providers. What characteristic do you need to ensure is offered by your cloud provider?",
    options: [
      "A. Full automation of security controls within the cloud data center",
      "B. Tier 4 of the Uptime Institute certifications",
      "C. Global remote access",
      "D. Prevention of ransomware infections"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Tier 4 of the Uptime Institute certifications.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "When designing a cloud data center, which of the following aspects is not necessary to ensure continuity of operations during contingency operations?",
    options: [
      "A. Access to clean water",
      "B. Broadband data connection",
      "C. Extended battery backup",
      "D. Physical access to the data center"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Access to clean water.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security manager for a small surgical center. Your organization is reviewing upgrade options for its current, on-premises data center. In order to best meet your needs, which one of the following options would you recommend to senior management?",
    options: [
      "A. Building a completely new data center",
      "B. Leasing a data center that is currently owned by another firm",
      "C. Renting private cloud space in a Tier 2 data center",
      "D. Staying with the current data center"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Renting private cloud space in a Tier 2 data center.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "When building a new data center within an urban environment, which of the following is probably the most restrictive aspect?",
    options: [
      "A. The size of the plot",
      "B. Utility availability",
      "C. Staffing",
      "D. Municipal codes"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Municipal codes.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "When you are building a new data center in a rural setting, which of the following is probably the most restrictive aspect?",
    options: [
      "A. Natural disasters",
      "B. Staffing",
      "C. Availability of emergency services",
      "D. Municipal codes"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Availability of emergency services.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "All tiers of the Uptime Institute standards for data centers require ______ hours of on-site generator fuel.",
    options: [
      "A. 6",
      "B. 10",
      "C. 12",
      "D. 15"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is 12.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "The American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE) guidelines for internal environmental conditions within a data center suggest that a temperature setting of ______ degrees (F) would be too high.",
    options: [
      "A. 93",
      "B. 80",
      "C. 72",
      "D. 32"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is 93.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Internal data center conditions that exceed the American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE) guidelines for humidity could lead to an increase of the potential for all of the following except ______.",
    options: [
      "A. Biological intrusion",
      "B. Electrical shorting",
      "C. Corrosion/oxidation",
      "D. Social engineering"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Social engineering.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Setting thermostat controls by measuring the ______ temperature will result in the highest energy costs.",
    options: [
      "A. Server inlet",
      "B. Return air",
      "C. Under-floor",
      "D. External ambient"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Return air.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Heating, ventilation, and air conditioning (HVAC) systems cool the data center by pushing warm air into ______.",
    options: [
      "A. The server inlets",
      "B. Underfloor plenums",
      "C. HVAC intakes",
      "D. The outside world"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Underfloor plenums.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "It is important to include ______ in the design of underfloor plenums if they are also used for wiring.",
    options: [
      "A. Mantraps",
      "B. Sequestered channels",
      "C. Heat sinks",
      "D. Tight gaskets"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Sequestered channels.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Cable management includes all of the following except ______.",
    options: [
      "A. Tagging cables",
      "B. Removing unused/obsolete cables",
      "C. Banding and bundling cables",
      "D. Removing unused machines"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Removing unused machines.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "How often should cable management efforts take place?",
    options: [
      "A. Annually",
      "B. Continually",
      "C. Quarterly",
      "D. Weekly"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Continually.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are designing a private cloud data center for an insurance underwriter, to be located in a major metropolitan area. Which of the following airflow management schemes is preferable?",
    options: [
      "A. Hot aisle",
      "B. Cold aisle",
      "C. Either hot aisle or cold aisle",
      "D. Free flow"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Cold aisle.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following factors will probably have the most impact on the cost of running your heating, ventilation, and air conditioning (HVAC) systems?",
    options: [
      "A. Whether you choose hot or cold aisle containment",
      "B. The external ambient environment",
      "C. The initial cost of the HVAC systems",
      "D. Proper cable maintenance"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is The external ambient environment.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are designing a Tier 4 data center for a large hospital. In order to plan for the possibility of losing utility power, in addition to having sufficient generators, you should plan to locate the data center ______.",
    options: [
      "A. In an urban setting",
      "B. In a rural environment",
      "C. Near a coast",
      "D. At the border of different counties, regions, or states"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is In a rural environment.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Because most cloud environments rely heavily on virtualization, it is important to lock down or harden the virtualization software, or any software involved in virtualization. Which of the following is not an element of hardening software?",
    options: [
      "A. Removing unused services and libraries",
      "B. Maintaining a strict license catalog",
      "C. Patching and updating as necessary",
      "D. Removing default accounts"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Maintaining a strict license catalog.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is not an aspect of host hardening?",
    options: [
      "A. Removing all unnecessary software and services",
      "B. Patching and updating as needed",
      "C. Performing more frequent and thorough audits on the host",
      "D. Installing a host-based firewall and an intrusion detection system (IDS)"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Performing more frequent and thorough audits on the host.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is not an element of ongoing configuration maintenance?",
    options: [
      "A. Penetration tests of guest OSs and hosts",
      "B. Social engineering tests of all users",
      "C. Patch management of guest OSs, hosts, and applications",
      "D. Vulnerability scans of guest OSs and hosts"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Social engineering tests of all users.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Storage controllers will be used in conjunction with all the following protocols except ______.",
    options: [
      "A. HTTPS",
      "B. Internet Small Computer Systems Interface (iSCSI)",
      "C. Fibre Channel",
      "D. Fibre Channel over Ethernet"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is HTTPS.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of these characteristics of a virtualized network adds risks to the cloud environment?",
    options: [
      "A. Redundancy",
      "B. Scalability",
      "C. Pay-per-use",
      "D. Self-service"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Self-service.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Security best practices in a virtualized network environment would include which of the following?",
    options: [
      "A. Using distinct ports and port groups for various virtual local area networks (VLANs) on a virtual switch rather than running them through the same port",
      "B. Running Internet Small Computer Systems Interface (iSCSI) traffic unencrypted in order to have it observed and monitored by a network intrusion detection system (NIDS)",
      "C. Adding a host-based intrusion detection system (HIDS) to all virtual guests",
      "D. Hardening all outward-facing firewalls in order to make them resistant to attack"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Using distinct ports and port groups for various virtual local area networks (VLANs) on a virtual switch rather than running them through the same port.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "In order to enhance virtual environment isolation and security, a best practice is to ______.",
    options: [
      "A. Ensure that all virtual switches are not connected to the physical network",
      "B. Ensure that management systems are connected to a different physical network than the production systems",
      "C. Never connect a virtual switch to a physical host",
      "D. Connect physical devices only with virtual switches"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Ensure that management systems are connected to a different physical network than the production systems.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a risk that stems from a virtualized environment?",
    options: [
      "A. Live virtual machines in the production environment are moved from one host to another in the clear.",
      "B. Cloud data centers can become a single point of failure.",
      "C. It is difficult to find and contract with multiple utility providers of the same type (electric, water, etc.).",
      "D. Modern service level-agreement (SLA) demands are stringent and very hard to meet."
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Live virtual machines in the production environment are moved from one host to another in the clear..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a risk that stems from a pooled-resources environment?",
    options: [
      "A. Loss of data to widespread phishing attacks",
      "B. Loss of availability due to widespread distributed denial of service (DDoS) attacks",
      "C. Loss of data to widespread insider threat",
      "D. Loss of data to law enforcement seizure of neighboring assets"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Loss of data to law enforcement seizure of neighboring assets.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Modern managed cloud service providers will often use secure keyboard/video/mouse (KVM) devices within their data centers. These devices are extremely expensive compared to their non-secured counterparts. Which of the following is one of the reasons cloud service providers do this?",
    options: [
      "A. They have plenty of revenue and can afford it.",
      "B. They have invested heavily in the secure KVM market.",
      "C. Cloud data centers need very few of these devices.",
      "D. Managed cloud providers often manufacture their own devices as well."
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Cloud data centers need very few of these devices..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "The American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE) guidelines for internal environmental conditions within a data center suggest that a temperature setting of ______ degrees (F) would be too low.",
    options: [
      "A. 93",
      "B. 80",
      "C. 72",
      "D. 32"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is 32.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "A truly air-gapped machine selector will ______.",
    options: [
      "A. Terminate a connection before creating a new connection",
      "B. Be made of composites and not metal",
      "C. Have total Faraday properties",
      "D. Not be portable"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Terminate a connection before creating a new connection.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following cloud data center functions do not have to be performed on isolated networks?",
    options: [
      "A. Customer access provision",
      "B. Management system control interface",
      "C. Storage controller access",
      "D. Customer production activities"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Customer access provision.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is not a characteristic of a virtual local area network (VLAN)?",
    options: [
      "A. Broadcast packets sent by a machine inside the VLAN will reach all other machines in that VLAN.",
      "B. Broadcast packets sent from outside the VLAN will not reach other machines outside the VLAN.",
      "C. Broadcast packets sent from a machine outside the VLAN will not reach machines inside the VLAN.",
      "D. Broadcast packets sent by a machine inside the VLAN will not reach machines outside the VLAN."
    ],
    correctAnswer: "A",
    explanation: "Option B is not a characteristic of VLANs. Broadcast packets sent from outside the VLAN cannot reach other machines outside the VLAN through the VLAN - this statement is confusing and incorrect as written.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "In order for communications from inside a virtual local area network (VLAN) to reach endpoints outside the VLAN, ______.",
    options: [
      "A. The communications must go through a gateway",
      "B. The traffic must be encrypted",
      "C. A repeater must be used",
      "D. The external endpoint must be in receive mode"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is The communications must go through a gateway.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Transport Layer Security (TLS) uses ______ to authenticate a connection and create a shared secret for the duration of the session.",
    options: [
      "A. Security Assertion Markup Language (SAML) 2.0",
      "B. X.509 certificates",
      "C. 802.11X",
      "D. The Diffie-Hellman process"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is X.509 certificates.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Halon is now illegal to use for data center fire suppression. What is the reason it was outlawed?",
    options: [
      "A. It poses a threat to health and human safety when deployed.",
      "B. It can harm the environment.",
      "C. It does not adequately suppress fires.",
      "D. It causes undue damage to electronic systems."
    ],
    correctAnswer: "B",
    explanation: "The correct answer is It can harm the environment..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "When cloud computing professionals use the term ping, power, pipe, which of the following characteristics is not being described?",
    options: [
      "A. Logical connectivity",
      "B. Human interaction",
      "C. Electricity",
      "D. Heating, ventilation, and air conditioning (HVAC)"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Human interaction.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is not a goal of a site survey?",
    options: [
      "A. Threat definition",
      "B. Target identification",
      "C. Penetration testing",
      "D. Facility characteristics"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Penetration testing.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Designing system redundancy into a cloud data center allows all the following capabilities except ______.",
    options: [
      "A. Incorporating additional hardware into the production environment",
      "B. Preventing any chance of service interruption",
      "C. Load-sharing/balancing",
      "D. Planned, controlled failover during contingency operations"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Preventing any chance of service interruption.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Gaseous fire suppression systems that function by displacing oxygen need to be installed in conjunction with ______.",
    options: [
      "A. Water cooling",
      "B. Filters",
      "C. Occupant training",
      "D. Failsafe or 'last person out' switches"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Failsafe or 'last person out' switches.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "What aspect of data center planning occurs first?",
    options: [
      "A. Logical design",
      "B. Physical design",
      "C. Audit",
      "D. Policy revision"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Policy revision.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following are not examples of personnel controls?",
    options: [
      "A. Background checks",
      "B. Reference checks",
      "C. Strict access control mechanisms",
      "D. Continuous security training"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Strict access control mechanisms.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Updating virtual machine management tools will require ______.",
    options: [
      "A. An infusion of capital",
      "B. An alternate data center",
      "C. Sufficient redundancy",
      "D. Peer review"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Sufficient redundancy.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Access control to virtualization management tools should be ______.",
    options: [
      "A. Rule-based",
      "B. Role-based",
      "C. User-based",
      "D. Discretionary"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Role-based.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Before deploying a specific brand of virtualization toolset, it is important to configure it according to ______.",
    options: [
      "A. Industry standards",
      "B. Prevailing law of that jurisdiction",
      "C. Vendor guidance",
      "D. Expert opinion"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Vendor guidance.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is essential for getting full security value from your system baseline?",
    options: [
      "A. Personnel training",
      "B. Documentation",
      "C. Host-based intrusion detection system (HIDS)",
      "D. Encryption"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Documentation.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Patching can be viewed as a configuration modification and therefore subject to the organization’s configuration management program and methods. What may also be an aspect of patching in terms of configuration management?",
    options: [
      "A. Patching doesn’t need to be performed as a distinct effort; patching can go through the normal change request process like all other modifications.",
      "B. Any patches suggested or required by vendors to maintain compliance with service contracts must be made immediately, regardless of internal process restrictions.",
      "C. Any patches suggested by third parties should not be considered as they may invalidate service contracts or warranties and negatively affect the organization’s security posture.",
      "D. The configuration or change management committee or board may grant blanket approval for patches (at a certain impact level) without the need to go through the formal change process."
    ],
    correctAnswer: "D",
    explanation: "The correct answer is The configuration or change management committee or board may grant blanket approval for patches (at a certain impact level) without the need to go through the formal change process..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Clustering hosts allows you to do all the following except ______.",
    options: [
      "A. Meet high-availability demands",
      "B. Optimize performance with load balancing",
      "C. Enhance scalability",
      "D. Apply updates, patches, or configuration modifications instantly"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Apply updates, patches, or configuration modifications instantly.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is not a way to apportion resources in a pooled environment?",
    options: [
      "A. Reservations",
      "B. Limits",
      "C. Tokens",
      "D. Shares"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Tokens.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "A loosely coupled storage cluster will have performance and capacity limitations based on the ______.",
    options: [
      "A. Physical backplane connecting it",
      "B. Total number of nodes in the cluster",
      "C. Amount of usage demanded",
      "D. The performance and capacity in each node"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Physical backplane connecting it.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "When putting a system into maintenance mode, it’s important to do all of the following except ______.",
    options: [
      "A. Transfer any live virtual guests off the host",
      "B. Turn off logging",
      "C. Lock out the system from accepting any new guests",
      "D. Notify customers if there are any interruptions"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Turn off logging.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Typically, a cloud customer seeking stand-alone hosting will expect all of the following except ______.",
    options: [
      "A. More control over governance of the environment",
      "B. Greater administrative control of the environment",
      "C. Higher overall security of the environment",
      "D. Lower costs for the environment"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Lower costs for the environment.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Methods for achieving 'high availability' cloud environments include all of the following except ______.",
    options: [
      "A. Extreme redundancy",
      "B. Multiple system vendors for the same services",
      "C. Explicitly documented business continuity and disaster recovery (BC/DR) functions in the service-level agreement (SLA) or contract",
      "D. Failover capability back to the customer’s on-premises environment"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Failover capability back to the customer’s on-premises environment.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are in charge of a cloud migration for your organization. You anticipate attack traffic from various sources, each using a variety of both automated and manual intrusion techniques. In order to deter novel attacks used only against your organization, you would be wise to employ firewalls that use ______ to detect threats.",
    options: [
      "A. Attack signatures",
      "B. Behavioral outliers",
      "C. Content filters",
      "D. Biometric templates"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Behavioral outliers.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Firewalls can be included in all the following aspects of a cloud environment except ______.",
    options: [
      "A. The guest OS",
      "B. The cloud data center IT architecture",
      "C. Bandwidth providers used to connect to the cloud",
      "D. Applications used to manipulate data in the cloud"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Bandwidth providers used to connect to the cloud.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "A honeypot can be used for all the following purposes except ______.",
    options: [
      "A. Gathering threat intelligence",
      "B. Luring attackers",
      "C. Distracting attackers",
      "D. Delaying attackers"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Delaying attackers.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following should honeypots contain?",
    options: [
      "A. Inward-facing connections",
      "B. Network schematics",
      "C. Production data",
      "D. Detection systems"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Detection systems.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Because all cloud access is remote access, contact between users and the environment should include all of the following except ______.",
    options: [
      "A. Encryption",
      "B. Secure login with complex passwords",
      "C. Once in-all in",
      "D. Logging and audits"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Once in-all in.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Most attacks that overcome encryption protections exploit ______.",
    options: [
      "A. Mathematical principles",
      "B. Misconfigurations",
      "C. Supercomputers",
      "D. Statistical probabilities"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Misconfigurations.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Administrators and engineers who work for cloud service providers will have a significant amount of control over multiple customer environments and therefore pose a severe risk. Which of the following is not a technique used to mitigate this level of increased risk from privileged users in the cloud data center?",
    options: [
      "A. Two-person control",
      "B. Enhanced logging of administrative activity",
      "C. Granting privileged access only on a temporary basis",
      "D. Assigning permanent administrators to select customer accounts"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Assigning permanent administrators to select customer accounts.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of these is a vital action to determine whether the business continuity and disaster recovery (BC/DR) effort has a chance of being successful?",
    options: [
      "A. Perform an integrity check on archived data to ensure that the backup process is not corrupting the data.",
      "B. Encrypt all archived data to ensure that it can’t be exposed while at rest in the long term.",
      "C. Periodically restore from backups.",
      "D. Train all personnel on BC/DR actions they should take to preserve health and human safety."
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Periodically restore from backups..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Patches do all the following except ______.",
    options: [
      "A. Address newly discovered vulnerabilities",
      "B. Solve cloud interoperability problems",
      "C. Add new features and capabilities to existing systems",
      "D. Address performance issues"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Solve cloud interoperability problems.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "When applying patches, it is necessary to do all of the following except ______.",
    options: [
      "A. Test the patch in a sandbox that simulates the production environment",
      "B. Put the patch through the formal change management process",
      "C. Be prepared to roll back to the last known good build",
      "D. Inform users of any impact or interruptions"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Inform users of any impact or interruptions.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a risk associated with automated patching?",
    options: [
      "A. Users can be leveraged by intruders.",
      "B. A patch may not be applicable to a given environment.",
      "C. Patches can come loaded with malware, in a Trojan horse attack.",
      "D. Automated patching is slow and inefficient."
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Patches can come loaded with malware, in a Trojan horse attack..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a risk associated with automated patching, especially in the cloud?",
    options: [
      "A. Snapshot/saved virtual machine (VM) images won’t take a patch.",
      "B. Remote access disallows patching.",
      "C. Cloud service providers aren’t responsible for patching.",
      "D. Patches aren’t applied among all cloud data centers."
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Snapshot/saved virtual machine (VM) images won’t take a patch..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a risk associated with manual patching, especially in the cloud?",
    options: [
      "A. It can happen too quickly.",
      "B. Vendors release patches that work only with their proprietary automated tools.",
      "C. It’s not scalable.",
      "D. Users can be tricked into installing malware that looks like a patch."
    ],
    correctAnswer: "C",
    explanation: "The correct answer is It’s not scalable..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is a risk associated with manual patching especially in the cloud?",
    options: [
      "A. No notice before the impact is realized",
      "B. There is a lack of applicability to the environment.",
      "C. Patches may or may not address the vulnerability they were designed to fix.",
      "D. The possibility for human error exists."
    ],
    correctAnswer: "D",
    explanation: "The correct answer is The possibility for human error exists..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security manager for an organization that uses the cloud for its production environment. According to your contract with the cloud provider, your organization is responsible for patching. A new patch is issued by one of your vendors. You decide not to apply it immediately for fear of interoperability problems. What additional risk are you accepting?",
    options: [
      "A. The cloud provider will suspend your access for violating its terms of service.",
      "B. The cloud provider may sue your organization for breach of contract.",
      "C. Your organization is subject to the vulnerability the patch addresses.",
      "D. Your end clients will no longer trust your organization, and this will hurt your revenue flow."
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Your organization is subject to the vulnerability the patch addresses..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security manager for an organization that uses the cloud for its production environment. According to your contract with the cloud provider, your organization is responsible for patching. A new patch is issued by one of your vendors. You decide not to apply it immediately for fear of interoperability problems. Who may impose penalties on your organization for this decision if the vulnerability is exploited?",
    options: [
      "A. The cloud provider",
      "B. Regulators",
      "C. Your end clients",
      "D. Your Internet service provider (ISP)"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Regulators.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following aspects of a cloud environment is most likely to add risk to the patch management process?",
    options: [
      "A. Variations in user training and familiarity with the cloud",
      "B. A cloud services contract that specifies which parties are responsible for which aspects of patching",
      "C. VMs located physically in one location but operating in different time zones",
      "D. The prevalence of attacker activity at the time the patch is applied"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Variations in user training and familiarity with the cloud.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which type of web application monitoring most closely measures actual activity?",
    options: [
      "A. Synthetic performance monitoring",
      "B. Real-user monitoring (RUM)",
      "C. Security information and event management (SIEM)",
      "D. Database application monitor (DAM)"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Real-user monitoring (RUM).",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "When using real-user monitoring (RUM) for web application activity analysis, which of the following do you need to take into account?",
    options: [
      "A. False positives",
      "B. Attacker baseline actions",
      "C. Privacy concerns",
      "D. Sandboxed environments"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Privacy concerns.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Synthetic performance monitoring may be preferable to real-user monitoring (RUM) because ______.",
    options: [
      "A. It costs less",
      "B. It is a more accurate depiction of user behavior",
      "C. It is more comprehensive",
      "D. It can take place in the cloud"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is It costs less.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security manager for an organization with a cloud-based production environment. You are tasked with setting up the event monitoring and logging systems. In your jurisdiction, private entities are allowed to monitor all activity involving their systems, without exception. Which of the following best describes a logging scheme you would recommend?",
    options: [
      "A. Logging every event, at all levels of granularity, including continual screen shots, keystroke logging, and browser history",
      "B. Sufficient logging to reconstruct a narrative of events at some later date",
      "C. Logging only data related to incidents after they have occurred",
      "D. Logging specific data sets recommended by industry standards and guidelines"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Sufficient logging to reconstruct a narrative of events at some later date.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Who should be performing log review?",
    options: [
      "A. Only certified, trained log review professionals with a great deal of experience with the logging tool",
      "B. The internal audit body",
      "C. External audit providers",
      "D. Someone with knowledge of the operation and a security background"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Someone with knowledge of the operation and a security background.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of these subsystems is probably most important for acquiring useful log information?",
    options: [
      "A. Fan",
      "B. RAM",
      "C. Clock",
      "D. Uninterruptible power supply (UPS)"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is Clock.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "A SIEM (security information and event management) system does not eliminate the need for human participation in ______.",
    options: [
      "A. Log collection",
      "B. Responding to alerts",
      "C. Mathematical normalization of different logs",
      "D. Detecting and alerts"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Responding to alerts.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Log data should be protected ______.",
    options: [
      "A. One level below the sensitivity level of the systems from which it was collected",
      "B. At least at the same sensitivity level as the systems from which it was collected",
      "C. With encryption in transit, at rest, and in use",
      "D. According to National Institute of Standards and Technology (NIST) guidelines"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is At least at the same sensitivity level as the systems from which it was collected.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Risk is usually viewed with consideration for all the following elements except ______.",
    options: [
      "A. Impact that could occur if a given circumstance is realized",
      "B. The likelihood or probability a circumstance will occur",
      "C. In the context of specific threats to an organization",
      "D. According to risks recently realized by other organizations in the same industry"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is According to risks recently realized by other organizations in the same industry.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Risk management entails evaluating all of the following except ______.",
    options: [
      "A. Threats",
      "B. Vulnerabilities",
      "C. Countermeasures",
      "D. Customers"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Customers.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Impact resulting from risk being realized is often measured in terms of ______.",
    options: [
      "A. Amount of data lost",
      "B. Money",
      "C. Amount of property lost",
      "D. Number of people affected"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Money.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are the security officer for a small nonprofit organization. You are tasked with performing a risk assessment for your organization; you have one month to complete it. The IT personnel you work with have been with the organization for many years and have built the systems and infrastructure from the ground up. They have little training and experience in the field of risk. Which type of risk assessment would you choose to conduct?",
    options: [
      "A. Quantitative",
      "B. Qualitative",
      "C. Pro forma",
      "D. Informal"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Qualitative.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is most useful in determining the single loss expectancy (SLE) of an asset?",
    options: [
      "A. The frequency with which you expect that type of loss to occur",
      "B. The dollar value of the asset",
      "C. The sensitivity of the asset",
      "D. The size and scope of the asset"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is The dollar value of the asset.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following will likely best help you predict the annualized rate of occurrence (ARO) of a specific loss?",
    options: [
      "A. Threat intelligence data",
      "B. Historical data",
      "C. Vulnerability scans",
      "D. Aggregation analysis"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Historical data.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following has the most effect on exposure factor (EF)?",
    options: [
      "A. The type of threat vector",
      "B. The source location of the attack",
      "C. The target of the attack",
      "D. The jurisdiction where the attack takes place"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is The type of threat vector.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are a consultant, performing an external security review on a large manufacturing firm. You determine that its newest assembly plant, which cost $24 million, could be completely destroyed by a fire but that a fire suppression system could effectively protect the plant. The fire suppression system costs $15 million. An insurance policy that would cover the full replacement cost of the plant costs $1 million per month. What is the annual rate of occurrence (ARO) in this scenario?",
    options: [
      "A. 12",
      "B. $24 million",
      "C. 1",
      "D. $10 million"
    ],
    correctAnswer: "C",
    explanation: "The correct answer is 1.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are a consultant performing an external security review on a large manufacturing firm. You determine that its newest assembly plant, which cost $24 million, could be completely destroyed by a fire but that a fire suppression system could effectively protect the plant. The fire suppression system costs $15 million. An insurance policy that would cover the full replacement cost of the plant costs $1 million per month. What would you recommend?",
    options: [
      "A. Accept the risk of fire, and save money by not spending anything on controls/countermeasures.",
      "B. Get the fire suppression system.",
      "C. Get the insurance policy.",
      "D. It is impossible to decide from this information."
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Get the fire suppression system..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are a consultant performing an external security review on a large manufacturing firm. You determine that its newest assembly plant, which cost $24 million, could be completely destroyed by a fire but that a fire suppression system could effectively protect the plant. The fire suppression system costs $15 million. An insurance policy that would cover the full replacement cost of the plant costs $1 million per month. In order to establish the true annualized loss expectancy (ALE), you would need all of the following information except ______.",
    options: [
      "A. The amount of revenue generated by the plant",
      "B. The rate at which the plant generates revenue",
      "C. The length of time it would take to rebuild the plant",
      "D. The amount of product the plant creates"
    ],
    correctAnswer: "D",
    explanation: "The correct answer is The amount of product the plant creates.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "You are a consultant performing an external security review on a large manufacturing firm. You determine that its newest assembly plant, which cost $24 million, could be completely destroyed by a fire but that a fire suppression system could effectively protect the plant. The fire suppression system costs $15 million. An insurance policy that would cover the full replacement cost of the plant costs $1 million per month. The plant generates $2 million of revenue each month. The time to rebuild the plant at the current location is six months. What should you recommend?",
    options: [
      "A. Accept the risk of fire, and save money by not spending anything on controls and countermeasures.",
      "B. Get the fire suppression system.",
      "C. Get the insurance policy.",
      "D. It is impossible to decide from this information."
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Get the fire suppression system..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Risk mitigation must always also entail which other method of addressing risk?",
    options: [
      "A. Risk acceptance",
      "B. Risk avoidance",
      "C. Risk transfer",
      "D. Risk attenuation"
    ],
    correctAnswer: "A",
    explanation: "The correct answer is Risk acceptance.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following poses a secondary risk?",
    options: [
      "A. Fire exit signs",
      "B. Oxygen-displacing fire suppression",
      "C. Automated fire detection systems",
      "D. Fail-safe fire egress paths"
    ],
    correctAnswer: "B",
    explanation: "The correct answer is Oxygen-displacing fire suppression.",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  },
  {
    question: "Which of the following is not true about risk mitigation?",
    options: [
      "A. A given control/countermeasure should never cost more than the impact of the risk it mitigates.",
      "B. Risk cannot be reduced to zero.",
      "C. The end state of risk mitigation is risk at a tolerable level.",
      "D. Risk mitigation is always the best means to address risk."
    ],
    correctAnswer: "D",
    explanation: "The correct answer is Risk mitigation is always the best means to address risk..",
    domain: "Cloud Security Operations",
    type: "undefined",
    difficulty: "hard"
  }
];

export default questions;
