const questions = [
  {
    question: "In which of these options does the encryption engine reside within the application accessing the database?",
    options: [
      "A. Transparent encryption",
      "B. Symmetric-key encryption",
      "C. Application-level encryption",
      "D. Homomorphic encryption"
    ],
    correctAnswer: "C",
    explanation: "Application-level encryption means the encryption engine resides within the application accessing the database.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following characteristics is associated with digital rights management (DRM) solutions (sometimes referred to as information rights management, or IRM)?",
    options: [
      "A. Automatic expiration",
      "B. Multilevel aggregation",
      "C. Enhanced detail",
      "D. Broad spectrum"
    ],
    correctAnswer: "A",
    explanation: "Automatic expiration is a characteristic of DRM solutions.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "According to the (ISC)2 Cloud Secure Data Lifecycle, which phase comes soon after (or at the same time as) the Create phase?",
    options: [
      "A. Store",
      "B. Use",
      "C. Deploy",
      "D. Archive"
    ],
    correctAnswer: "A",
    explanation: "Store phase comes soon after (or at the same time as) the Create phase in the Cloud Secure Data Lifecycle.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "According to the (ISC)2 Cloud Secure Data Lifecycle, which phase comes immediately before the Share phase?",
    options: [
      "A. Create",
      "B. Destroy",
      "C. Use",
      "D. Encrypt"
    ],
    correctAnswer: "C",
    explanation: "Use phase comes immediately before the Share phase in the Cloud Secure Data Lifecycle.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Why is the term (ISC)2 Cloud Secure Data Lifecycle actually somewhat inaccurate?",
    options: [
      "A. The term is not used only by (ISC)2.",
      "B. Not all phases are secure.",
      "C. Not all phases take place in the cloud.",
      "D. It’s not actually a cycle."
    ],
    correctAnswer: "C",
    explanation: "Not all phases take place in the cloud, making the term somewhat inaccurate.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "According to the (ISC)2 Cloud Secure Data Lifecycle, in which phase should the process of categorization/classification of data occur?",
    options: [
      "A. Create",
      "B. Store",
      "C. Define",
      "D. Use"
    ],
    correctAnswer: "A",
    explanation: "Categorization/classification of data should occur in the Create phase.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following should occur during the final phase of the Cloud Secure Data Lifecycle?",
    options: [
      "A. Data dispersion",
      "B. Crypto-shredding",
      "C. Cryptoparsing",
      "D. Cryptosporidium"
    ],
    correctAnswer: "B",
    explanation: "Crypto-shredding should occur during the final phase of the Cloud Secure Data Lifecycle.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "At what phase of the Cloud Secure Data Lifecycle does data enter long-term storage?",
    options: [
      "A. The first",
      "B. The second",
      "C. The fourth",
      "D. The fifth"
    ],
    correctAnswer: "C",
    explanation: "Data enters long-term storage at the fourth phase of the Cloud Secure Data Lifecycle.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a form of cloud storage where data is stored as objects, arranged in a hierarchical structure, like a file tree?",
    options: [
      "A. Volume storage",
      "B. Databases",
      "C. Content delivery network (CDN)",
      "D. Object storage"
    ],
    correctAnswer: "D",
    explanation: "Object storage stores data as objects in a hierarchical structure, like a file tree.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a form of cloud storage where data is stored in a logical storage area assigned to the user but not necessarily physically attached or even geographically proximate to the compute node the user is utilizing?",
    options: [
      "A. Volume storage",
      "B. Databases",
      "C. Content delivery network (CDN)",
      "D. Object storage"
    ],
    correctAnswer: "A",
    explanation: "Volume storage is assigned to the user and may not be physically attached or geographically proximate.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a form of cloud storage often used for streaming multimedia data to users?",
    options: [
      "A. Volume storage",
      "B. Databases",
      "C. Content delivery network (CDN)",
      "D. Neutral storage"
    ],
    correctAnswer: "C",
    explanation: "Content delivery network (CDN) is often used for streaming multimedia data.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What type of data storage is often used in platform as a service (PaaS) arrangements?",
    options: [
      "A. Ephemeral",
      "B. Database",
      "C. Long-term",
      "D. Nefarious"
    ],
    correctAnswer: "B",
    explanation: "Database storage is often used in PaaS arrangements.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is a form of cloud data protection where data is spread across multiple storage devices/locations, similar to RAID in the legacy environment?",
    options: [
      "A. Infringing",
      "B. Data dispersion",
      "C. Voiding",
      "D. Crypto-shredding"
    ],
    correctAnswer: "B",
    explanation: "Data dispersion spreads data across multiple devices/locations, similar to RAID.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Erasure coding, in the cloud, is similar to what element of RAID implementations in a traditional IT environment?",
    options: [
      "A. Deltas",
      "B. Inversion",
      "C. Parity bits",
      "D. Transposition"
    ],
    correctAnswer: "C",
    explanation: "Erasure coding is similar to parity bits in RAID implementations.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "DLP (data loss prevention or data leak protection) solutions are implemented in the hopes of securing...",
    options: [
      "A. Sensitive data that may leave the organization’s control",
      "B. All data within the organization’s control",
      "C. Data being processed by the organization’s users",
      "D. Data that could be intercepted while out of the organization’s control"
    ],
    correctAnswer: "A",
    explanation: "DLP solutions are implemented to secure sensitive data that may leave the organization’s control.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following will DLP (data loss prevention or data leak protection) solutions most likely not inspect?",
    options: [
      "A. Email content",
      "B. FTP traffic",
      "C. Material saved to portable media",
      "D. Voice over Internet Protocol (VoIP) conversations"
    ],
    correctAnswer: "D",
    explanation: "DLP solutions most likely will not inspect VoIP conversations.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "DLP (data loss prevention or data leak protection) solutions may use all of the following techniques to identify sensitive data except...",
    options: [
      "A. Pattern matching",
      "B. Inference",
      "C. Keyword identification",
      "D. Metadata tags"
    ],
    correctAnswer: "D",
    explanation: "DLP solutions may use pattern matching, inference, and keyword identification, but not metadata tags.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "You are the security manager of a small firm that has just purchased an egress monitoring solution to implement in your cloud-based production environment. In which of the following cases would you not have to get permission from the cloud provider to install and implement the tool?",
    options: [
      "A. If it’s hardware-based and your production environment is in an infrastructure as a service (IaaS) model",
      "B. If you purchased it from a vendor other than the cloud provider",
      "C. If it’s software-based and your production environment is in a platform as a service (PaaS) model",
      "D. If it affects all guest instances on any given host device"
    ],
    correctAnswer: "A",
    explanation: "If it’s hardware-based and your production environment is in an IaaS model, you may not need permission from the cloud provider.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "You are the security manager of a small firm that has just purchased an egress monitoring solution to implement in your cloud-based production environment. Before implementing the solution, what should you explain to senior management?",
    options: [
      "A. The additional risks of external attack associated with using the tool",
      "B. The production impact it will have on the environment",
      "C. What the price of the tool was",
      "D. How the solution works"
    ],
    correctAnswer: "B",
    explanation: "You should explain the production impact the solution will have on the environment to senior management.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "You are the security team leader for an organization that has an infrastructure as a service (IaaS) production environment hosted by a cloud provider. You want to implement an event monitoring (SIEM/SIM/SEM) solution in your production environment in order to acquire better data for security defenses and decisions. Which of the following is probably your most significant concern about implementing this solution in the cloud?",
    options: [
      "A. The solution should give you better analysis capability by automating a great deal of the associated tasks.",
      "B. Dashboards produced by the tool are a flawless management benefit.",
      "C. You will have to coordinate with the cloud provider to ensure that the tool is acceptable and functioning properly.",
      "D. Senior management will be required to approve the acquisition and implementation of the tool."
    ],
    correctAnswer: "C",
    explanation: "Coordination with the cloud provider is often the most significant concern when implementing monitoring solutions in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is not a step in the crypto-shredding process?",
    options: [
      "A. Encrypt data with a particular encryption engine.",
      "B. Encrypt first resulting keys with another encryption engine.",
      "C. Save backup of second resulting keys.",
      "D. Destroy original second resulting keys."
    ],
    correctAnswer: "C",
    explanation: "Saving backup of second resulting keys is not a step in crypto-shredding, which focuses on destroying keys.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following sanitization methods is feasible for use in the cloud?",
    options: [
      "A. Crypto-shredding",
      "B. Degaussing",
      "C. Physical destruction",
      "D. Overwriting"
    ],
    correctAnswer: "A",
    explanation: "Crypto-shredding is feasible in the cloud, while physical methods are not.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is not a method for enhancing data portability?",
    options: [
      "A. Crypto-shredding",
      "B. Using standard data formats",
      "C. Avoiding proprietary services",
      "D. Favorable contract terms"
    ],
    correctAnswer: "A",
    explanation: "Crypto-shredding is a data sanitization method, not a portability enhancement.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "When implementing a digital rights management (DRM) solution in a cloud environment, which of the following does not pose an additional challenge for the cloud customer?",
    options: [
      "A. Users might be required to install a DRM agent on their local devices.",
      "B. DRM solutions might have difficulty interfacing with multiple different operating systems and services.",
      "C. DRM solutions might have difficulty interacting with virtualized instances.",
      "D. Ownership of intellectual property might be difficult to ascertain."
    ],
    correctAnswer: "D",
    explanation: "Ownership of intellectual property is not a technical challenge for DRM implementation in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "When implementing cryptography in a cloud environment, where is the worst place to store the keys?",
    options: [
      "A. With the cloud provider",
      "B. Off the cloud, with the data owner",
      "C. With a third-party provider, in key escrow",
      "D. Anywhere but with the cloud provider"
    ],
    correctAnswer: "A",
    explanation: "Storing keys with the cloud provider is the worst practice due to increased risk of unauthorized access.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is not a security concern related to archiving data for long-term storage?",
    options: [
      "A. Long-term storage of the related cryptographic keys",
      "B. Format of the data",
      "C. Media the data resides on",
      "D. Underground depth of the storage facility"
    ],
    correctAnswer: "D",
    explanation: "Underground depth of the storage facility is not a typical security concern for cloud data archiving.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Data dispersion is a cloud data security technique that is most similar to which legacy implementation?",
    options: [
      "A. Business continuity and disaster recovery (BC/DR)",
      "B. Redundant Array of Inexpensive Disks (RAID)",
      "C. Software-defined networking (SDN)",
      "D. Content delivery network (CDN)"
    ],
    correctAnswer: "B",
    explanation: "Data dispersion in the cloud is most similar to RAID in legacy environments.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Data dispersion uses , where the traditional implementation is called 'striping.'",
    options: [
      "A. Chunking",
      "B. Vaulting",
      "C. Lumping",
      "D. Grouping"
    ],
    correctAnswer: "A",
    explanation: "Chunking is used in data dispersion, similar to striping in RAID.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Data dispersion uses , where the traditional implementation is called 'parity bits.'",
    options: [
      "A. Smurfing",
      "B. Snarfing",
      "C. Erasure coding",
      "D. Real-time bitlinking"
    ],
    correctAnswer: "C",
    explanation: "Erasure coding in data dispersion is similar to parity bits in RAID.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Data dispersion provides protection for all the following security aspects except...",
    options: [
      "A. Protecting confidentiality against external attack on the storage area",
      "B. Loss of availability due to single-storage-device failure",
      "C. Loss due to seizure by law enforcement in a multitenant environment",
      "D. Protecting against loss due to user error"
    ],
    correctAnswer: "D",
    explanation: "Data dispersion does not protect against loss due to user error.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Your organization is migrating the production environment to an infrastructure as a service (IaaS) cloud implementation. Your users will need to be able to get access to their data, install programs, and partition memory space for their own purposes. You should configure the cloud memory as...",
    options: [
      "A. Object",
      "B. Volume",
      "C. Synthetic",
      "D. Database"
    ],
    correctAnswer: "B",
    explanation: "Volume storage allows users to partition memory and install programs in IaaS.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Your organization is migrating the production environment to an infrastructure as a service (IaaS) cloud implementation. Your users will need to be able to get access to their data and share data with other users in a defined way, according to a hierarchy. You should configure the cloud memory as...",
    options: [
      "A. Object storage",
      "B. Volume storage",
      "C. Synthetic storage",
      "D. Databases"
    ],
    correctAnswer: "A",
    explanation: "Object storage is best for hierarchical sharing in IaaS cloud environments.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is one of the benefits of implementing an egress monitoring solution?",
    options: [
      "A. Preventing distributed denial of service (DDoS) attacks",
      "B. Inventorying data assets",
      "C. Interviewing data owners",
      "D. Protecting against natural disasters"
    ],
    correctAnswer: "B",
    explanation: "Egress monitoring helps inventory data assets leaving the organization.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Egress monitoring solutions usually include a function that...",
    options: [
      "A. Arbitrates contract breaches",
      "B. Performs personnel evaluation reviews",
      "C. Discovers data assets according to classification/categorization",
      "D. Applies another level of access control"
    ],
    correctAnswer: "C",
    explanation: "Egress monitoring solutions discover data assets by classification.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Digital rights management (DRM) solutions (sometimes referred to as information rights management, or IRM) can be used to protect all sorts of sensitive data but are usually particularly designed to secure...",
    options: [
      "A. Personally identifiable information (PII)",
      "B. Intellectual property",
      "C. Plans and policies",
      "D. Marketing material"
    ],
    correctAnswer: "B",
    explanation: "DRM solutions are primarily designed to secure intellectual property.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Digital rights management (DRM) solutions (sometimes referred to as information rights management, or IRM) often protect unauthorized distribution of what type of intellectual property?",
    options: [
      "A. Patents",
      "B. Trademarks",
      "C. Personally identifiable information (PII)",
      "D. Copyright"
    ],
    correctAnswer: "D",
    explanation: "DRM solutions often protect unauthorized distribution of copyright material.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Volume storage encryption in an infrastructure as a service (IaaS) arrangement will protect against data loss due to all of the following activities except...",
    options: [
      "A. Physical loss or theft of a device",
      "B. Disgruntled users",
      "C. Malicious cloud administrators accessing the data",
      "D. Virtual machine snapshots stolen from storage"
    ],
    correctAnswer: "B",
    explanation: "Volume storage encryption does not protect against data loss due to disgruntled users.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In an infrastructure as a service (IaaS) arrangement, all of the following are examples of object storage encryption except...",
    options: [
      "A. File-level encryption",
      "B. Digital rights management (DRM)",
      "C. Application-level encryption",
      "D. Transport Layer Security (TLS)"
    ],
    correctAnswer: "D",
    explanation: "Transport Layer Security (TLS) is not an example of object storage encryption in IaaS.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "All of the following are database encryption options that could be used in a platform as a service (PaaS) implementation except...",
    options: [
      "A. File-level encryption",
      "B. Secure Sockets Layer (SSL)",
      "C. Transparent encryption",
      "D. Application-level encryption"
    ],
    correctAnswer: "B",
    explanation: "SSL is not a database encryption option in PaaS implementations.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In application-level encryption, where does the encryption engine reside?",
    options: [
      "A. In the application accessing the database",
      "B. In the operating system on which the application is run",
      "C. Within the database accessed by the application",
      "D. In the volume where the database resides"
    ],
    correctAnswer: "A",
    explanation: "In application-level encryption, the encryption engine resides in the application accessing the database.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following database encryption techniques can be used to encrypt specific tables within the database?",
    options: [
      "A. File-level encryption",
      "B. Transparent encryption",
      "C. Application-level encryption",
      "D. Object-level encryption"
    ],
    correctAnswer: "D",
    explanation: "Object-level encryption can be used to encrypt specific tables within the database.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following database encryption techniques makes it difficult to perform database functions (searches, indexing, etc.)?",
    options: [
      "A. File-level encryption",
      "B. Transparent encryption",
      "C. Application-level encryption",
      "D. Volume encryption"
    ],
    correctAnswer: "C",
    explanation: "Application-level encryption makes it difficult to perform database functions.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "If data masking is being performed for software testing purposes, which of the following is not a good masking technique to use?",
    options: [
      "A. Random substitution",
      "B. Shuffling",
      "C. Deletion",
      "D. Algorithmic substitution"
    ],
    correctAnswer: "C",
    explanation: "Deletion is not a good masking technique for software testing purposes.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "For which use case would it probably be best to use static masking?",
    options: [
      "A. Creating a test environment for a new application",
      "B. Allowing a customer service representative limited access to account data",
      "C. Providing detailed reports to regulators",
      "D. Notifying shareholders"
    ],
    correctAnswer: "A",
    explanation: "Static masking is best for creating a test environment for a new application.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "For which use case would it probably be best to use dynamic masking?",
    options: [
      "A. Creating a test environment for a new application",
      "B. Allowing a customer service representative limited access to account data",
      "C. Sending incident response notifications",
      "D. Implementing business continuity and disaster recovery (BC/DR)"
    ],
    correctAnswer: "B",
    explanation: "Dynamic masking is best for allowing a customer service representative limited access to account data.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is one possible risk associated with the use of algorithmic masking for obscuring a data set?",
    options: [
      "A. You could corrupt the production data.",
      "B. The data could be subject to easy inadvertent disclosure.",
      "C. Algorithms are two-way operations.",
      "D. A null set has no test value."
    ],
    correctAnswer: "B",
    explanation: "Algorithmic masking can result in easy inadvertent disclosure of data.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "_____ is a direct identifier, and _____ is an indirect identifier.",
    options: [
      "A. Username; password",
      "B. User’s name; user’s age",
      "C. User’s IP address; user’s media access control (MAC) address",
      "D. Location; income level"
    ],
    correctAnswer: "B",
    explanation: "User’s name is a direct identifier; user’s age is an indirect identifier.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Anonymization is the process of removing _____ from data sets.",
    options: [
      "A. Access",
      "B. Cryptographic keys",
      "C. Numeric values",
      "D. Identifying information"
    ],
    correctAnswer: "D",
    explanation: "Anonymization removes identifying information from data sets.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Tokenization is a method of obscuring data that, other than encryption, can be used to comply with _____ standards.",
    options: [
      "A. Gramm-Leach-Bliley Act (GLBA)",
      "B. Payment Card Industry (PCI)",
      "C. Child Online Protection Act (COPA)",
      "D. Sarbanes-Oxley Act (SOX)"
    ],
    correctAnswer: "B",
    explanation: "Tokenization can be used to comply with PCI standards.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Tokenization requires at least _____ database(s).",
    options: [
      "A. One",
      "B. Two",
      "C. Three",
      "D. Four"
    ],
    correctAnswer: "B",
    explanation: "Tokenization requires at least two databases.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Data owners might consider using tokenization for all of the following reasons except...",
    options: [
      "A. Regulatory or contractual compliance",
      "B. Inference",
      "C. Reduced cost of compliance",
      "D. Mitigating risk from data lost to intrusion"
    ],
    correctAnswer: "B",
    explanation: "Inference is not a reason to use tokenization.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Bit-splitting, also known as data dispersion, might be thought of as _____ in the cloud.",
    options: [
      "A. RAID",
      "B. BIOS",
      "C. DDoS",
      "D. SYN-ACK"
    ],
    correctAnswer: "A",
    explanation: "Bit-splitting is similar to RAID in the cloud.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Bit-splitting also provides security against data breaches by...",
    options: [
      "A. Removing all access to unauthorized parties",
      "B. Ensuring that an unauthorized user only gets a useless fragment of data",
      "C. Moving data across jurisdictional boundaries",
      "D. Tracking all incoming access requests"
    ],
    correctAnswer: "B",
    explanation: "Bit-splitting ensures unauthorized users only get useless fragments of data.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "If bit-splitting is used to store data sets across multiple jurisdictions, how may this enhance security?",
    options: [
      "A. By making seizure of data by law enforcement more difficult",
      "B. By hiding it from attackers in a specific jurisdiction",
      "C. By ensuring that users can only accidentally disclose data to one geographic area",
      "D. By restricting privilege user access"
    ],
    correctAnswer: "A",
    explanation: "Storing data across jurisdictions makes seizure by law enforcement more difficult.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a possible negative aspect of bit-splitting?",
    options: [
      "A. Less security",
      "B. Greatest risk of unauthorized access",
      "C. Significantly greater processing overhead",
      "D. Violating regulatory compliance"
    ],
    correctAnswer: "C",
    explanation: "Bit-splitting can result in significantly greater processing overhead.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Proper _____ need(s) to be assigned to each data classification/category.",
    options: [
      "A. Dollar values",
      "B. Metadata",
      "C. Security controls",
      "D. Policies"
    ],
    correctAnswer: "C",
    explanation: "Security controls need to be assigned to each data classification/category.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Data transformation in a cloud environment should be of great concern to organizations considering cloud migration because _____ could affect data classification processes and implementations.",
    options: [
      "A. Multitenancy",
      "B. Virtualization",
      "C. Remote access",
      "D. Physical distance"
    ],
    correctAnswer: "A",
    explanation: "Multitenancy could affect data classification processes and implementations.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Who is ultimately responsible for a data breach that includes personally identifiable information (PII), in the event of negligence on the part of the cloud provider?",
    options: [
      "A. The user",
      "B. The subject",
      "C. The cloud provider",
      "D. The cloud customer"
    ],
    correctAnswer: "D",
    explanation: "The cloud customer is ultimately responsible for a data breach involving PII, even if the provider is negligent.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In a personally identifiable information (PII) context, who is the subject?",
    options: [
      "A. The cloud customer",
      "B. The cloud provider",
      "C. The regulator",
      "D. The individual"
    ],
    correctAnswer: "D",
    explanation: "The individual is the subject in a PII context.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In a personally identifiable information (PII) context, who is the processor?",
    options: [
      "A. The cloud customer",
      "B. The cloud provider",
      "C. The regulator",
      "D. The individual"
    ],
    correctAnswer: "B",
    explanation: "The cloud provider is the processor in a PII context.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In a personally identifiable information (PII) context, who is the controller?",
    options: [
      "A. The cloud customer",
      "B. The cloud provider",
      "C. The regulator",
      "D. The individual"
    ],
    correctAnswer: "A",
    explanation: "The cloud customer is the controller in a PII context.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In a personally identifiable information (PII) context, which of the following is not normally considered 'processing'?",
    options: [
      "A. Storing",
      "B. Viewing",
      "C. Destroying",
      "D. Printing"
    ],
    correctAnswer: "D",
    explanation: "Printing is not normally considered 'processing' in a PII context.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following countries does not have a national privacy law that concerns personally identifiable information (PII) and applies to all entities?",
    options: [
      "A. Argentina",
      "B. The United States",
      "C. Italy",
      "D. Australia"
    ],
    correctAnswer: "B",
    explanation: "The United States does not have a national privacy law that applies to all entities.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In protections afforded to personally identifiable information (PII) under the U.S. Health Information Portability and Accountability Act (HIPAA), the subject must _____ in order to allow the vendor to share their personal data.",
    options: [
      "A. Opt in",
      "B. Opt out",
      "C. Undergo screening",
      "D. Provide a biometric template"
    ],
    correctAnswer: "A",
    explanation: "Under HIPAA, the subject must opt in to allow sharing of personal data.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "In protections afforded to personally identifiable information (PII) under the U.S. Gramm-Leach-Bliley Act (GLBA), the subject must _____ in order to prevent the vendor from sharing their personal data.",
    options: [
      "A. Opt in",
      "B. Opt out",
      "C. Undergo screening",
      "D. Provide a biometric template"
    ],
    correctAnswer: "B",
    explanation: "Under GLBA, the subject must opt out to prevent sharing of personal data.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "The European Union (EU), with its implementation of privacy directives and regulations, treats individual privacy as...",
    options: [
      "A. A passing fad",
      "B. A human right",
      "C. A legal obligation",
      "D. A business expense"
    ],
    correctAnswer: "B",
    explanation: "The EU treats individual privacy as a human right.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "If your organization collects/creates privacy data associated with European Union (EU) citizens and you operate in the cloud, you must prevent your provider from storing/moving/processing that data where?",
    options: [
      "A. Argentina",
      "B. The United States",
      "C. Japan",
      "D. Israel"
    ],
    correctAnswer: "B",
    explanation: "You must prevent your provider from storing/moving/processing EU data in the United States.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "European Union (EU) personal privacy protections include the right to be...",
    options: [
      "A. Secure",
      "B. Delivered",
      "C. Forgotten",
      "D. Protected"
    ],
    correctAnswer: "C",
    explanation: "EU privacy protections include the right to be forgotten.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a theoretical technology that is intended to allow encrypted material to be processed and manipulated without decrypting it first?",
    options: [
      "A. Inverse postulation",
      "B. Homomorphic encryption",
      "C. Didactic alignment",
      "D. Obverse reinstantiation"
    ],
    correctAnswer: "B",
    explanation: "Homomorphic encryption allows encrypted material to be processed without decryption.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a data discovery approach used by e-commerce retailers to discern and predict shoppers’ needs?",
    options: [
      "A. Big data",
      "B. Real-time analytics",
      "C. Agile analytics",
      "D. Agile business intelligence"
    ],
    correctAnswer: "A",
    explanation: "Big data is used by e-commerce retailers to predict shoppers’ needs.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is a data discovery approach that offers insight to trends of trends, using both historical and predictive approaches?",
    options: [
      "A. Obverse polyglotism",
      "B. Big data",
      "C. Real-time analytics",
      "D. Agile analytics/business intelligence"
    ],
    correctAnswer: "D",
    explanation: "Agile analytics/business intelligence offers insight to trends using historical and predictive approaches.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following is not a data discovery technique?",
    options: [
      "A. Metadata",
      "B. Labels",
      "C. Content analysis",
      "D. Data hover"
    ],
    correctAnswer: "D",
    explanation: "Data hover is not a data discovery technique.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following data discovery techniques involves using extra information automatically appended/included with the intended data when the data is created?",
    options: [
      "A. Metadata",
      "B. Labels",
      "C. Content analysis",
      "D. Data hover"
    ],
    correctAnswer: "A",
    explanation: "Metadata involves extra information appended with the data when created.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "When labeling is used as a data discovery technique, who should be applying the labels?",
    options: [
      "A. The security office",
      "B. Users",
      "C. Data owners",
      "D. Regulators"
    ],
    correctAnswer: "C",
    explanation: "Data owners should apply labels when labeling is used as a data discovery technique.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "When data labels are being used in an environment (for discovery and other purposes), when should the labels be applied?",
    options: [
      "A. During the risk assessment",
      "B. As part of the business impact analysis (BIA)",
      "C. At collection/creation",
      "D. When the discovery tools are implemented"
    ],
    correctAnswer: "C",
    explanation: "Labels should be applied at collection/creation.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of the following tools might be useful in data discovery efforts that are based on content analysis?",
    options: [
      "A. Egress monitoring solutions",
      "B. Digital rights management (DRM)",
      "C. iSCSI",
      "D. Fibre Channel over Ethernet (FCoE)"
    ],
    correctAnswer: "A",
    explanation: "Egress monitoring solutions are useful in content-analysis-based data discovery efforts.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "All of the following might be used as data discovery characteristics in a content-analysis-based data discovery effort except...",
    options: [
      "A. Keywords",
      "B. Pattern matching",
      "C. Frequency",
      "D. Inheritance"
    ],
    correctAnswer: "D",
    explanation: "Inheritance is not a characteristic used in content-analysis-based data discovery.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "What is the risk to the organization posed by dashboards that display data discovery results?",
    options: [
      "A. Increased chance of external penetration",
      "B. Flawed management decisions based on edited displays",
      "C. Higher likelihood of inadvertent disclosure",
      "D. Raised incidence of physical theft"
    ],
    correctAnswer: "B",
    explanation: "Flawed management decisions based on edited displays are a risk posed by dashboards displaying data discovery results.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Which of these is most likely to have the greatest negative impact on data discovery effort?",
    options: [
      "A. Bandwidth latency issues",
      "B. Poor physical security of the data center",
      "C. Severe statutory regulation",
      "D. Inaccurate or incomplete data"
    ],
    correctAnswer: "D",
    explanation: "Inaccurate or incomplete data has the greatest negative impact on data discovery effort.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Cloud customers performing data discovery efforts will have to ensure that the cloud provider attends to all of the following requirements except...",
    options: [
      "A. Allowing sufficient access to large volumes of data",
      "B. Preserving metadata tags",
      "C. Assigning labels",
      "D. Preserving and maintaining the data"
    ],
    correctAnswer: "C",
    explanation: "Assigning labels is not a requirement for the cloud provider in data discovery efforts.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Where should the cloud provider’s data discovery requirements be listed?",
    options: [
      "A. National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53",
      "B. Applicable laws and regulations",
      "C. Payment Card Industry Data Security Standard (PCI DSS)",
      "D. The managed services contract and SLA"
    ],
    correctAnswer: "D",
    explanation: "The managed services contract and SLA should list the cloud provider’s data discovery requirements.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Who will determine data classifications for the cloud customer?",
    options: [
      "A. The cloud provider",
      "B. National Institute of Standards and Technology (NIST)",
      "C. Regulators",
      "D. The cloud customer"
    ],
    correctAnswer: "D",
    explanation: "The cloud customer will determine data classifications.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "An organization’s data classification scheme must include which of the following categories?",
    options: [
      "A. File size",
      "B. Origin of the data",
      "C. Sensitivity of the data",
      "D. Whatever the data owner decides"
    ],
    correctAnswer: "C",
    explanation: "Sensitivity of the data must be included in a data classification scheme.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Classification is usually considered a facet of data...",
    options: [
      "A. Security",
      "B. Labeling",
      "C. Control",
      "D. Markup"
    ],
    correctAnswer: "A",
    explanation: "Classification is usually considered a facet of data security.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Data classification can be _____ or _____.",
    options: [
      "A. Inverse or obverse",
      "B. Automatic or manual",
      "C. Correct or incorrect",
      "D. Diurnal or nocturnal"
    ],
    correctAnswer: "B",
    explanation: "Data classification can be automatic or manual.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  },
  {
    question: "Data may need to be reclassified for all the following reasons except...",
    options: [
      "A. Color change",
      "B. Time",
      "C. Repurposing",
      "D. Transfer of ownership"
    ],
    correctAnswer: "A",
    explanation: "Color change is not a reason for data reclassification.",
    domain: "Cloud Data Security",
    type: "multiple-choice",
    difficulty: "medium"
  }
];

export default questions;
