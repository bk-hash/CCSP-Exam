const questions = [
  {
    "question": "What is the primary incident response goal?",
    "options": [
      "A. Remediating the incident",
      "B. Reverting to the last known good state",
      "C. Determining the scope of the possible loss",
      "D. Outcomes dictated by business requirements"
    ],
    "correctAnswer": "A",
    "explanation": "Remediating the incident is the primary goal of incident response - to contain, mitigate, and resolve the security incident to restore normal operations.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are in charge of building a cloud data center. Which raised floor level is sufficient to meet standard requirements?",
    "options": [
      "A. 10 inches",
      "B. 8 inches",
      "C. 18 inches",
      "D. 2 feet"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 10 inches.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are in charge of building a cloud data center. What purposes does the raised floor serve?",
    "options": [
      "A. Allows airflow and increases structural soundness for holding large components",
      "B. Cold air feed and a place to run wires for the machines",
      "C. Additional storage for critical components and a dedicated access to a landline",
      "D. Fire suppression systems and personnel safety"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Allows airflow and increases structural soundness for holding large components.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are in charge of building a cloud data center. Which of the following is a useful rack configuration for regulating airflow?",
    "options": [
      "A. Exhaust fans on racks facing the inlet vents of other racks",
      "B. Inlet fans on racks facing exhaust fans of other racks",
      "C. All racks perpendicular to each other",
      "D. Exhaust fans on racks facing exhaust fans on other racks"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Exhaust fans on racks facing the inlet vents of other racks.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "An event is something that can be measured within the environment. An incident is a(n) event.",
    "options": [
      "A. Deleterious",
      "B. Negative",
      "C. Unscheduled",
      "D. Major"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Deleterious.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following factors would probably most affect the design of a cloud data center?",
    "options": [
      "A. Geographic location",
      "B. Functional purpose",
      "C. Cost",
      "D. Aesthetic intent"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Geographic location.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "All of the following elements must be considered in the design of a cloud data center except .",
    "options": [
      "A. External standards, such as ITIL or ISO 27001",
      "B. Physical environment",
      "C. Types of services offered",
      "D. Native language of the majority of customers"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Native language of the majority of customers.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "In designing a data center to meet their own needs and provide optimum revenue/profit, the cloud provider will most likely aim to enhance .",
    "options": [
      "A. Functionality",
      "B. Automation of services",
      "C. Aesthetic value",
      "D. Inherent value"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Functionality.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are the security officer for a small cloud provider offering public cloud infrastructure as a service (IaaS); your clients are predominantly from the education sector, located in North America. Of the following technology architecture traits, which is probably the one your organization would most likely want to focus on?",
    "options": [
      "A. Reducing mean time to repair (MTTR)",
      "B. Reducing mean time between failure (MTBF)",
      "C. Reducing the recovery time objective (RTO)",
      "D. Automating service enablement"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Reducing mean time to repair (MTTR).",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "What is perhaps the main way in which software-defined networking (SDN) solutions facilitate security in the cloud environment?",
    "options": [
      "A. Monitoring outbound traffic",
      "B. Monitoring inbound traffic",
      "C. Segmenting networks",
      "D. Preventing distributed denial of service (DDoS) attacks"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Segmenting networks.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "The logical design of a cloud environment can enhance the security offered in that environment. For instance, in a software as a service (SaaS) cloud, the provider can incorporate  capabilities into the application itself.",
    "options": [
      "A. High-speed processing",
      "B. Logging",
      "C. Performance-enhancing",
      "D. Cross-platform functionality"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Logging.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are tasked with managing a cloud data center in Los Angeles; your customers are mostly from the entertainment industry, and you are offering both platform as a service (PaaS) and software as a service (SaaS) capabilities. From a physical design standpoint, you are probably going to be most concerned with .",
    "options": [
      "A. Offering digital rights management (DRM) capabilities",
      "B. Insuring against seasonal floods",
      "C. Preventing all malware infection potential",
      "D. Ensuring that the racks and utilities can endure an earthquake"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Ensuring that the racks and utilities can endure an earthquake.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally. Your company has its own data center located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes. Your cloud provider is changing its business model at the end of your contract term, and you have to find a new provider. In choosing providers, which tier of the Uptime Institute rating system should you be looking for, if minimizing cost is your ultimate goal?",
    "options": [
      "A. 1",
      "B. 3",
      "C. 4",
      "D. 8"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 1.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally. Your company has its own data center located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes. In choosing providers, which of the following functionalities will you consider absolutely essential?",
    "options": [
      "A. Distributed denial of service (DDoS) protections",
      "B. Constant data mirroring",
      "C. Encryption",
      "D. Hashing"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Distributed denial of service (DDoS) protections.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally. Your company has its own data center located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes. Which of the following standards are you most likely to adopt?",
    "options": [
      "A. National Institute of Standards and Technology (NIST) 800-37",
      "B. General Data Protection Regulation (GDPR)",
      "C. ISO 27001",
      "D. Sarbanes–Oxley Act (SOX)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is ISO 27001.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally. Your company has its own data center located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes. Your company has decided to expand its business to include selling and monitoring life-support equipment for medical providers. What characteristic do you need to ensure is offered by your cloud provider?",
    "options": [
      "A. Full automation of security controls within the cloud data center",
      "B. Tier 4 of the Uptime Institute certifications",
      "C. Global remote access",
      "D. Prevention of ransomware infections"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Full automation of security controls within the cloud data center.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "When designing a cloud data center, which of the following aspects is not necessary to ensure continuity of operations during contingency operations?",
    "options": [
      "A. Access to clean water",
      "B. Broadband data connection",
      "C. Extended battery backup",
      "D. Physical access to the data center"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Access to clean water.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are the security manager for a small surgical center. Your organization is reviewing upgrade options for its current, on-premises data center. In order to best meet your needs, which one of the following options would you recommend to senior management?",
    "options": [
      "A. Building a completely new data center",
      "B. Leasing a data center that is currently owned by another firm",
      "C. Renting private cloud space in a Tier 2 data center",
      "D. Staying with the current data center"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Renting private cloud space in a Tier 2 data center.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "When building a new data center within an urban environment, which of the following is probably the most restrictive aspect?",
    "options": [
      "A. The size of the plot",
      "B. Utility availability",
      "C. Staffing",
      "D. Municipal codes"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Municipal codes.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "When you are building a new data center in a rural setting, which of the following is probably the most restrictive aspect?",
    "options": [
      "A. Natural disasters",
      "B. Staffing",
      "C. Availability of emergency services",
      "D. Municipal codes"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Staffing.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "All tiers of the Uptime Institute standards for data centers require hours of on-site generator fuel.",
    "options": [
      "A. 6",
      "B. 10",
      "C. 12",
      "D. 15"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 12.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "The American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE) guidelines for internal environmental conditions within a data center suggest that a temperature setting of  degrees (F) would be too high.",
    "options": [
      "A. 93",
      "B. 80",
      "C. 72",
      "D. 32"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 93.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Internal data center conditions that exceed the American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE) guidelines for humidity could lead to an increase of the potential for all of the following except .",
    "options": [
      "A. Biological intrusion",
      "B. Electrical shorting",
      "C. Corrosion/oxidation",
      "D. Social engineering"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Social engineering.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Setting thermostat controls by measuring the  temperature will result in the highest energy costs.",
    "options": [
      "A. Server inlet",
      "B. Return air",
      "C. Under-floor",
      "D. External ambient"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Return air.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Heating, ventilation, and air conditioning (HVAC) systems cool the data center by pushing warm air into .",
    "options": [
      "A. The server inlets",
      "B. Underfloor plenums",
      "C. HVAC intakes",
      "D. The outside world"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Underfloor plenums.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "It is important to include  in the design of underfloor plenums if they are also used for wiring.",
    "options": [
      "A. Mantraps",
      "B. Sequestered channels",
      "C. Heat sinks",
      "D. Tight gaskets"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Sequestered channels.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Cable management includes all of the following except .",
    "options": [
      "A. Tagging cables",
      "B. Removing unused/obsolete cables",
      "C. Banding and bundling cables",
      "D. Removing unused machines"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Removing unused machines.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "How often should cable management efforts take place?",
    "options": [
      "A. Annually",
      "B. Continually",
      "C. Quarterly",
      "D. Weekly"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Continually.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are designing a private cloud data center for an insurance underwriter, to be located in a major metropolitan area. Which of the following airflow management schemes is preferable?",
    "options": [
      "A. Hot aisle",
      "B. Cold aisle",
      "C. Either hot aisle or cold aisle",
      "D. Free flow"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Either hot aisle or cold aisle.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following factors will probably have the most impact on the cost of running your heating, ventilation, and air conditioning (HVAC) systems?",
    "options": [
      "A. Whether you choose hot or cold aisle containment",
      "B. The external ambient environment",
      "C. The initial cost of the HVAC systems",
      "D. Proper cable maintenance"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is The external ambient environment.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are designing a Tier 4 data center for a large hospital. In order to plan for the possibility of losing utility power, in addition to having sufficient generators, you should plan to locate the data center .",
    "options": [
      "A. In an urban setting",
      "B. In a rural environment",
      "C. Near a coast",
      "D. At the border of different counties, regions, or states"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is In a rural environment.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Because most cloud environments rely heavily on virtualization, it is important to lock down or harden the virtualization software, or any software involved in virtualization. Which of the following is not an element of hardening software?",
    "options": [
      "A. Removing unused services and libraries",
      "B. Maintaining a strict license catalog",
      "C. Patching and updating as necessary",
      "D. Removing default accounts"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Maintaining a strict license catalog.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is not an aspect of host hardening?",
    "options": [
      "A. Removing all unnecessary software and services",
      "B. Patching and updating as needed",
      "C. Performing more frequent and thorough audits on the host",
      "D. Installing a host-based firewall and an intrusion detection system (IDS)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Performing more frequent and thorough audits on the host.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is not an element of ongoing configuration maintenance?",
    "options": [
      "A. Penetration tests of guest OSs and hosts",
      "B. Social engineering tests of all users",
      "C. Patch management of guest OSs, hosts, and applications",
      "D. Vulnerability scans of guest OSs and hosts"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Social engineering tests of all users.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Storage controllers will be used in conjunction with all the following protocols except .",
    "options": [
      "A. HTTPS",
      "B. Internet Small Computer Systems Interface (iSCSI)",
      "C. Fibre Channel",
      "D. Fibre Channel over Ethernet"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is HTTPS.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of these characteristics of a virtualized network adds risks to the cloud environment?",
    "options": [
      "A. Redundancy",
      "B. Scalability",
      "C. Pay-per-use",
      "D. Self-service"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Self-service.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Security best practices in a virtualized network environment would include which of the following?",
    "options": [
      "A. Using distinct ports and port groups for various virtual local area networks (VLANs) on a virtual switch rather than running them through the same port",
      "B. Running Internet Small Computer Systems Interface (iSCSI) traffic unencrypted in order to have it observed and monitored by a network intrusion detection system (NIDS)",
      "C. Adding a host-based intrusion detection system (HIDS) to all virtual guests",
      "D. Hardening all outward-facing firewalls in order to make them resistant to attack"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Using distinct ports and port groups for various virtual local area networks (VLANs) on a virtual switch rather than running them through the same port.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "In order to enhance virtual environment isolation and security, a best practice is to .",
    "options": [
      "A. Ensure that all virtual switches are not connected to the physical network",
      "B. Ensure that management systems are connected to a different physical network than the production systems",
      "C. Never connect a virtual switch to a physical host",
      "D. Connect physical devices only with virtual switches"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Ensure that management systems are connected to a different physical network than the production systems.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is a risk that stems from a virtualized environment?",
    "options": [
      "A. Live virtual machines in the production environment are moved from one host to another in the clear.",
      "B. Cloud data centers can become a single point of failure.",
      "C. It is difficult to find and contract with multiple utility providers of the same type (electric, water, etc.).",
      "D. Modern service level-agreement (SLA) demands are stringent and very hard to meet."
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Live virtual machines in the production environment are moved from one host to another in the clear..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is a risk that stems from a pooled-resources environment?",
    "options": [
      "A. Loss of data to widespread phishing attacks",
      "B. Loss of availability due to widespread distributed denial of service (DDoS) attacks",
      "C. Loss of data to widespread insider threat",
      "D. Loss of data to law enforcement seizure of neighboring assets"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Loss of data to law enforcement seizure of neighboring assets.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Modern managed cloud service providers will often use secure keyboard/video/mouse (KVM) devices within their data centers. These devices are extremely expensive compared to their non-secured counterparts. Which of the following is one of the reasons cloud service providers do this?",
    "options": [
      "A. They have plenty of revenue and can afford it.",
      "B. They have invested heavily in the secure KVM market.",
      "C. Cloud data centers need very few of these devices.",
      "D. Managed cloud providers often manufacture their own devices as well."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Cloud data centers need very few of these devices..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is not a goal of a site survey?",
    "options": [
      "A. Threat definition",
      "B. Target identification",
      "C. Penetration testing",
      "D. Facility characteristics"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Penetration testing.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Designing system redundancy into a cloud data center allows all the following capabilities except .",
    "options": [
      "A. Incorporating additional hardware into the production environment",
      "B. Preventing any chance of service interruption",
      "C. Load-sharing/balancing",
      "D. Planned, controlled failover during contingency operations"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Preventing any chance of service interruption.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Gaseous fire suppression systems that function by displacing oxygen need to be installed in conjunction with .",
    "options": [
      "A. Water cooling",
      "B. Filters",
      "C. Occupant training",
      "D. Failsafe or 'last person out' switches"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Failsafe or 'last person out' switches.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "What aspect of data center planning occurs first?",
    "options": [
      "A. Logical design",
      "B. Physical design",
      "C. Audit",
      "D. Policy revision"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Logical design.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following are not examples of personnel controls?",
    "options": [
      "A. Background checks",
      "B. Reference checks",
      "C. Strict access control mechanisms",
      "D. Continuous security training"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Strict access control mechanisms.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Updating virtual machine management tools will require .",
    "options": [
      "A. An infusion of capital",
      "B. An alternate data center",
      "C. Sufficient redundancy",
      "D. Peer review"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Sufficient redundancy.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Access control to virtualization management tools should be .",
    "options": [
      "A. Rule-based",
      "B. Role-based",
      "C. User-based",
      "D. Discretionary"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Role-based.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Before deploying a specific brand of virtualization toolset, it is important to configure it according to .",
    "options": [
      "A. Industry standards",
      "B. Prevailing law of that jurisdiction",
      "C. Vendor guidance",
      "D. Expert opinion"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Vendor guidance.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is essential for getting full security value from your system baseline?",
    "options": [
      "A. Personnel training",
      "B. Documentation",
      "C. Host-based intrusion detection system (HIDS)",
      "D. Encryption"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Documentation.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is essential for getting full security value from your system baseline?",
    "options": [
      "A. Capturing and storing an image of the baseline",
      "B. Keeping a copy of upcoming suggested modifications to the baseline",
      "C. Having the baseline vetted by an objective third party",
      "D. Using a baseline from another industry member so as not to engage in repetitious efforts"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Capturing and storing an image of the baseline.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Patching can be viewed as a configuration modification and therefore subject to the organization’s configuration management program and methods. What may also be an aspect of patching in terms of configuration management?",
    "options": [
      "A. Patching doesn’t need to be performed as a distinct effort; patching can go through the normal change request process like all other modifications.",
      "B. Any patches suggested or required by vendors to maintain compliance with service contracts must be made immediately, regardless of internal process restrictions.",
      "C. Any patches suggested by third parties should not be considered as they may invalidate service contracts or warranties and negatively affect the organization’s security posture.",
      "D. The configuration or change management committee or board may grant blanket approval for patches (at a certain impact level) without the need to go through the formal change process."
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is The configuration or change management committee or board may grant blanket approval for patches (at a certain impact level) without the need to go through the formal change process..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Clustering hosts allows you to do all the following except .",
    "options": [
      "A. Meet high-availability demands",
      "B. Optimize performance with load balancing",
      "C. Enhance scalability",
      "D. Apply updates, patches, or configuration modifications instantly"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Apply updates, patches, or configuration modifications instantly.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is not a way to apportion resources in a pooled environment?",
    "options": [
      "A. Reservations",
      "B. Limits",
      "C. Tokens",
      "D. Shares"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Tokens.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "A loosely coupled storage cluster will have performance and capacity limitations based on the .",
    "options": [
      "A. Physical backplane connecting it",
      "B. Total number of nodes in the cluster",
      "C. Amount of usage demanded",
      "D. The performance and capacity in each node"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Physical backplane connecting it.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "When putting a system into maintenance mode, it’s important to do all of the following except .",
    "options": [
      "A. Transfer any live virtual guests off the host",
      "B. Turn off logging",
      "C. Lock out the system from accepting any new guests",
      "D. Notify customers if there are any interruptions"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Turn off logging.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Typically, a cloud customer seeking stand-alone hosting will expect all of the following except .",
    "options": [
      "A. More control over governance of the environment",
      "B. Greater administrative control of the environment",
      "C. Higher overall security of the environment",
      "D. Lower costs for the environment"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Lower costs for the environment.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Methods for achieving 'high availability' cloud environments include all of the following except .",
    "options": [
      "A. Extreme redundancy",
      "B. Multiple system vendors for the same services",
      "C. Explicitly documented business continuity and disaster recovery (BC/DR) functions in the service-level agreement (SLA) or contract",
      "D. Failover capability back to the customer’s on-premises environment"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Failover capability back to the customer’s on-premises environment.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are in charge of a cloud migration for your organization. You anticipate attack traffic from various sources, each using a variety of both automated and manual intrusion techniques. In order to deter novel attacks used only against your organization, you would be wise to employ firewalls that use  to detect threats.",
    "options": [
      "A. Attack signatures",
      "B. Behavioral outliers",
      "C. Content filters",
      "D. Biometric templates"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Behavioral outliers.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Firewalls can be included in all the following aspects of a cloud environment except .",
    "options": [
      "A. The guest OS",
      "B. The cloud data center IT architecture",
      "C. Bandwidth providers used to connect to the cloud",
      "D. Applications used to manipulate data in the cloud"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Bandwidth providers used to connect to the cloud.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "A honeypot can be used for all the following purposes except .",
    "options": [
      "A. Gathering threat intelligence",
      "B. Luring attackers",
      "C. Distracting attackers",
      "D. Delaying attackers"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Delaying attackers.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following should honeypots contain?",
    "options": [
      "A. Inward-facing connections",
      "B. Network schematics",
      "C. Production data",
      "D. Detection systems"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Detection systems.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Because all cloud access is remote access, contact between users and the environment should include all of the following except .",
    "options": [
      "A. Encryption",
      "B. Secure login with complex passwords",
      "C. Once in-all in",
      "D. Logging and audits"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Once in-all in.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Most attacks that overcome encryption protections exploit .",
    "options": [
      "A. Mathematical principles",
      "B. Misconfigurations",
      "C. Supercomputers",
      "D. Statistical probabilities"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Misconfigurations.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Administrators and engineers who work for cloud service providers will have a significant amount of control over multiple customer environments and therefore pose a severe risk. Which of the following is not a technique used to mitigate this level of increased risk from privileged users in the cloud data center?",
    "options": [
      "A. Two-person control",
      "B. Enhanced logging of administrative activity",
      "C. Granting privileged access only on a temporary basis",
      "D. Assigning permanent administrators to select customer accounts"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Assigning permanent administrators to select customer accounts.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of these is a vital action to determine whether the business continuity and disaster recovery (BC/DR) effort has a chance of being successful?",
    "options": [
      "A. Perform an integrity check on archived data to ensure that the backup process is not corrupting the data.",
      "B. Encrypt all archived data to ensure that it can’t be exposed while at rest in the long term.",
      "C. Periodically restore from backups.",
      "D. Train all personnel on BC/DR actions they should take to preserve health and human safety."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Periodically restore from backups..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Patches do all the following except .",
    "options": [
      "A. Address newly discovered vulnerabilities",
      "B. Solve cloud interoperability problems",
      "C. Add new features and capabilities to existing systems",
      "D. Address performance issues"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Solve cloud interoperability problems.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "When applying patches, it is necessary to do all of the following except .",
    "options": [
      "A. Test the patch in a sandbox that simulates the production environment",
      "B. Put the patch through the formal change management process",
      "C. Be prepared to roll back to the last known good build",
      "D. Inform users of any impact or interruptions"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Put the patch through the formal change management process.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is a risk associated with automated patching?",
    "options": [
      "A. Users can be leveraged by intruders.",
      "B. A patch may not be applicable to a given environment.",
      "C. Patches can come loaded with malware, in a Trojan horse attack.",
      "D. Automated patching is slow and inefficient."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Patches can come loaded with malware, in a Trojan horse attack..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is a risk associated with automated patching, especially in the cloud?",
    "options": [
      "A. Snapshot/saved virtual machine (VM) images won’t take a patch.",
      "B. Remote access disallows patching.",
      "C. Cloud service providers aren’t responsible for patching.",
      "D. Patches aren’t applied among all cloud data centers."
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Snapshot/saved virtual machine (VM) images won’t take a patch..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is a risk associated with automated patching, especially in the cloud?",
    "options": [
      "A. Patches may interfere with some tenants’ production environments.",
      "B. Patches don’t work with software as a service (SaaS) service models.",
      "C. Patches don’t work with private cloud builds.",
      "D. Vendors don’t issue patches to cloud providers."
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Patches may interfere with some tenants’ production environments..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is a risk associated with manual patching, especially in the cloud?",
    "options": [
      "A. It can happen too quickly.",
      "B. Vendors release patches that work only with their proprietary automated tools.",
      "C. It’s not scalable.",
      "D. Users can be tricked into installing malware that looks like a patch."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is It’s not scalable..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following is a risk associated with manual patching especially in the cloud?",
    "options": [
      "A. No notice before the impact is realized",
      "B. There is a lack of applicability to the environment.",
      "C. Patches may or may not address the vulnerability they were designed to fix.",
      "D. The possibility for human error exists."
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is The possibility for human error exists..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are the security manager for an organization that uses the cloud for its production environment. According to your contract with the cloud provider, your organization is responsible for patching. A new patch is issued by one of your vendors. You decide not to apply it immediately for fear of interoperability problems. What additional risk are you accepting?",
    "options": [
      "A. The cloud provider will suspend your access for violating its terms of service.",
      "B. The cloud provider may sue your organization for breach of contract.",
      "C. Your organization is subject to the vulnerability the patch addresses.",
      "D. Your end clients will no longer trust your organization, and this will hurt your revenue flow."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Your organization is subject to the vulnerability the patch addresses..",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are the security manager for an organization that uses the cloud for its production environment. According to your contract with the cloud provider, your organization is responsible for patching. A new patch is issued by one of your vendors. You decide not to apply it immediately for fear of interoperability problems. Who may impose penalties on your organization for this decision if the vulnerability is exploited?",
    "options": [
      "A. The cloud provider",
      "B. Regulators",
      "C. Your end clients",
      "D. Your Internet service provider (ISP)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Regulators.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which of the following aspects of a cloud environment is most likely to add risk to the patch management process?",
    "options": [
      "A. Variations in user training and familiarity with the cloud",
      "B. A cloud services contract that specifies which parties are responsible for which aspects of patching",
      "C. VMs located physically in one location but operating in different time zones",
      "D. The prevalence of attacker activity at the time the patch is applied"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Variations in user training and familiarity with the cloud.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Which type of web application monitoring most closely measures actual activity?",
    "options": [
      "A. Synthetic performance monitoring",
      "B. Real-user monitoring (RUM)",
      "C. Security information and event management (SIEM)",
      "D. Database application monitor (DAM)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Real-user monitoring (RUM).",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "When using real-user monitoring (RUM) for web application activity analysis, which of the following do you need to take into account?",
    "options": [
      "A. False positives",
      "B. Attacker baseline actions",
      "C. Privacy concerns",
      "D. Sandboxed environments"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Privacy concerns.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Synthetic performance monitoring may be preferable to real-user monitoring (RUM) because .",
    "options": [
      "A. It costs less",
      "B. It is a more accurate depiction of user behavior",
      "C. It is more comprehensive",
      "D. It can take place in the cloud"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is It can take place in the cloud.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "You are the security manager for an organization with a cloud-based production environment. You are tasked with setting up the event monitoring and logging systems. In your jurisdiction, private entities are allowed to monitor all activity involving their systems, without exception. Which of the following best describes a logging scheme you would recommend?",
    "options": [
      "A. Logging every event, at all levels of granularity, including continual screen shots, keystroke logging, and browser history",
      "B. Sufficient logging to reconstruct a narrative of events at some later date",
      "C. Logging only data related to incidents after they have occurred",
      "D. Logging specific data sets recommended by industry standards and guidelines"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Sufficient logging to reconstruct a narrative of events at some later date.",
    "domain": "Legal, Risk, and Compliance"
  },
  {
    "question": "Who should be performing log review?",
    "options": [
      "A. Only certified, trained log review professionals with a great deal of experience with the logging tool",
      "B. The internal audit body",
      "C. External audit providers",
      "D. Someone with knowledge of the operation and a security background"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Someone with knowledge of the operation and a security background.",
    "domain": "Legal, Risk, and Compliance"
  }
];

export default questions;
