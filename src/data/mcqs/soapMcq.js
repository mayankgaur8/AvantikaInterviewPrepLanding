// src/data/mcqs/soapMcq.js
// 50 SOAP MCQs (Basic • Intermediate • Advanced)

export const SOAP_MCQ = [

  // ================= BASIC (1–17) =================
  {
    id: "soap-mcq-1",
    tag: "SOAP • Basic",
    q: "What does SOAP stand for?",
    options: [
      "Simple Object Access Protocol",
      "Service Oriented Access Protocol",
      "Standard Object Access Process",
      "Secure Object Access Protocol"
    ],
    answer: 0,
    explain: "SOAP stands for Simple Object Access Protocol."
  },
  {
    id: "soap-mcq-2",
    tag: "SOAP • Basic",
    q: "SOAP is based on which format?",
    options: ["JSON", "XML", "HTML", "YAML"],
    answer: 1,
    explain: "SOAP messages are always XML-based."
  },
  {
    id: "soap-mcq-3",
    tag: "SOAP • Basic",
    q: "Which protocol is commonly used with SOAP?",
    options: ["HTTP", "FTP", "SMTP", "All of the above"],
    answer: 3,
    explain: "SOAP can work over HTTP, SMTP, FTP, etc."
  },
  {
    id: "soap-mcq-4",
    tag: "SOAP • Basic",
    q: "What is WSDL?",
    options: [
      "Web Service Definition Language",
      "Web Service Description Language",
      "Web Server Description Logic",
      "Web Standard Definition Language"
    ],
    answer: 1,
    explain: "WSDL describes SOAP web services."
  },
  {
    id: "soap-mcq-5",
    tag: "SOAP • Basic",
    q: "Which company originally developed SOAP?",
    options: ["Google", "Microsoft", "IBM", "Oracle"],
    answer: 1,
    explain: "SOAP was developed by Microsoft."
  },
  {
    id: "soap-mcq-6",
    tag: "SOAP • Basic",
    q: "SOAP messages consist of how many main parts?",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explain: "SOAP has Envelope, Header, Body, Fault."
  },
  {
    id: "soap-mcq-7",
    tag: "SOAP • Basic",
    q: "Which part of SOAP is mandatory?",
    options: ["Header", "Fault", "Body", "Envelope"],
    answer: 3,
    explain: "Envelope is mandatory in SOAP."
  },
  {
    id: "soap-mcq-8",
    tag: "SOAP • Basic",
    q: "SOAP is best described as:",
    options: [
      "Lightweight protocol",
      "Messaging protocol",
      "Database protocol",
      "UI protocol"
    ],
    answer: 1,
    explain: "SOAP is a messaging protocol."
  },
  {
    id: "soap-mcq-9",
    tag: "SOAP • Basic",
    q: "Which SOAP element contains application data?",
    options: ["Envelope", "Header", "Body", "Fault"],
    answer: 2,
    explain: "Body contains the actual request/response."
  },
  {
    id: "soap-mcq-10",
    tag: "SOAP • Basic",
    q: "SOAP is platform independent?",
    options: ["Yes", "No", "Only Java", "Only .NET"],
    answer: 0,
    explain: "SOAP is platform and language independent."
  },
  {
    id: "soap-mcq-11",
    tag: "SOAP • Basic",
    q: "Which standard handles SOAP security?",
    options: ["OAuth", "WS-Security", "JWT", "TLS"],
    answer: 1,
    explain: "WS-Security handles SOAP security."
  },
  {
    id: "soap-mcq-12",
    tag: "SOAP • Basic",
    q: "SOAP fault is used for:",
    options: [
      "Validation",
      "Error handling",
      "Authentication",
      "Routing"
    ],
    answer: 1,
    explain: "SOAP Fault is used for error reporting."
  },
  {
    id: "soap-mcq-13",
    tag: "SOAP • Basic",
    q: "SOAP supports which communication style?",
    options: ["Synchronous", "Asynchronous", "Both", "None"],
    answer: 2,
    explain: "SOAP supports both sync and async."
  },
  {
    id: "soap-mcq-14",
    tag: "SOAP • Basic",
    q: "Which MIME type is used for SOAP?",
    options: [
      "application/xml",
      "text/xml",
      "application/soap+xml",
      "All of the above"
    ],
    answer: 3,
    explain: "SOAP supports multiple MIME types."
  },
  {
    id: "soap-mcq-15",
    tag: "SOAP • Basic",
    q: "SOAP is more strict than REST?",
    options: ["Yes", "No", "Depends", "Only in Java"],
    answer: 0,
    explain: "SOAP is strict due to XML + schema."
  },
  {
    id: "soap-mcq-16",
    tag: "SOAP • Basic",
    q: "SOAP messages are:",
    options: ["Stateless", "Stateful", "Both", "Neither"],
    answer: 0,
    explain: "SOAP messages are stateless."
  },
  {
    id: "soap-mcq-17",
    tag: "SOAP • Basic",
    q: "SOAP is ideal for:",
    options: [
      "Simple CRUD APIs",
      "Enterprise integrations",
      "Mobile apps",
      "UI rendering"
    ],
    answer: 1,
    explain: "SOAP is best for enterprise integrations."
  },

  // ================= INTERMEDIATE (18–34) =================
  {
    id: "soap-mcq-18",
    tag: "SOAP • Intermediate",
    q: "What is SOAP Header used for?",
    options: [
      "Payload",
      "Metadata like security",
      "Error handling",
      "Routing only"
    ],
    answer: 1,
    explain: "Headers carry metadata like security and transactions."
  },
  {
    id: "soap-mcq-19",
    tag: "SOAP • Intermediate",
    q: "What is RPC style SOAP?",
    options: [
      "Remote procedure call",
      "Document-based",
      "REST-based",
      "Asynchronous"
    ],
    answer: 0,
    explain: "RPC style mimics method calls."
  },
  {
    id: "soap-mcq-20",
    tag: "SOAP • Intermediate",
    q: "Which SOAP style is preferred today?",
    options: ["RPC", "Document/Literal", "Encoded", "Binary"],
    answer: 1,
    explain: "Document/Literal is preferred."
  },
  {
    id: "soap-mcq-21",
    tag: "SOAP • Intermediate",
    q: "What is XSD in SOAP?",
    options: [
      "Schema definition",
      "Security descriptor",
      "Service definition",
      "Transport layer"
    ],
    answer: 0,
    explain: "XSD defines XML structure."
  },
  {
    id: "soap-mcq-22",
    tag: "SOAP • Intermediate",
    q: "What is WS-ReliableMessaging?",
    options: [
      "Message ordering and delivery",
      "Security",
      "Routing",
      "Compression"
    ],
    answer: 0,
    explain: "Ensures reliable delivery."
  },
  {
    id: "soap-mcq-23",
    tag: "SOAP • Intermediate",
    q: "Which framework supports SOAP in Java?",
    options: ["Spring MVC", "JAX-WS", "Hibernate", "JPA"],
    answer: 1,
    explain: "JAX-WS is used for SOAP in Java."
  },
  {
    id: "soap-mcq-24",
    tag: "SOAP • Intermediate",
    q: "What is SOAP binding?",
    options: [
      "Protocol mapping",
      "Security",
      "Schema",
      "Routing"
    ],
    answer: 0,
    explain: "Binding defines protocol and data format."
  },
  {
    id: "soap-mcq-25",
    tag: "SOAP • Intermediate",
    q: "SOAP over HTTP uses which method?",
    options: ["GET", "POST", "PUT", "PATCH"],
    answer: 1,
    explain: "SOAP usually uses HTTP POST."
  },
  {
    id: "soap-mcq-26",
    tag: "SOAP • Intermediate",
    q: "What is MTOM?",
    options: [
      "Binary data transfer",
      "Security",
      "Compression",
      "Routing"
    ],
    answer: 0,
    explain: "MTOM transfers binary data efficiently."
  },
  {
    id: "soap-mcq-27",
    tag: "SOAP • Intermediate",
    q: "SOAP supports transactions using:",
    options: ["WS-AtomicTransaction", "OAuth", "JWT", "TLS"],
    answer: 0,
    explain: "WS-AtomicTransaction enables transactions."
  },
  {
    id: "soap-mcq-28",
    tag: "SOAP • Intermediate",
    q: "What is SOAP encoding?",
    options: [
      "Message serialization",
      "Security encoding",
      "Transport encoding",
      "Compression"
    ],
    answer: 0,
    explain: "Encoding defines data serialization."
  },
  {
    id: "soap-mcq-29",
    tag: "SOAP • Intermediate",
    q: "SOAP services are described using:",
    options: ["Swagger", "WSDL", "OpenAPI", "RAML"],
    answer: 1,
    explain: "SOAP uses WSDL."
  },
  {
    id: "soap-mcq-30",
    tag: "SOAP • Intermediate",
    q: "SOAP supports which message exchange pattern?",
    options: [
      "Request-response",
      "One-way",
      "Both",
      "None"
    ],
    answer: 2,
    explain: "SOAP supports multiple patterns."
  },
  {
    id: "soap-mcq-31",
    tag: "SOAP • Intermediate",
    q: "Which layer handles SOAP security?",
    options: ["Transport", "Message", "UI", "Database"],
    answer: 1,
    explain: "SOAP security works at message level."
  },
  {
    id: "soap-mcq-32",
    tag: "SOAP • Intermediate",
    q: "SOAP is heavier than REST because:",
    options: [
      "XML verbosity",
      "No caching",
      "Stateful",
      "Slower HTTP"
    ],
    answer: 0,
    explain: "XML makes SOAP heavier."
  },
  {
    id: "soap-mcq-33",
    tag: "SOAP • Intermediate",
    q: "What is UDDI?",
    options: [
      "Service registry",
      "Security standard",
      "Transport protocol",
      "Serialization format"
    ],
    answer: 0,
    explain: "UDDI is used for service discovery."
  },
  {
    id: "soap-mcq-34",
    tag: "SOAP • Intermediate",
    q: "SOAP supports schema validation?",
    options: ["Yes", "No", "Only JSON", "Optional"],
    answer: 0,
    explain: "SOAP strongly supports schema validation."
  },

  // ================= ADVANCED (35–50) =================
  {
    id: "soap-mcq-35",
    tag: "SOAP • Advanced",
    q: "SOAP is preferred over REST when:",
    options: [
      "Simple APIs",
      "Enterprise security required",
      "Mobile apps",
      "Low latency needed"
    ],
    answer: 1,
    explain: "SOAP excels in enterprise security."
  },
  {
    id: "soap-mcq-36",
    tag: "SOAP • Advanced",
    q: "What is WS-Policy?",
    options: [
      "Defines service policies",
      "Security token",
      "Routing",
      "Compression"
    ],
    answer: 0,
    explain: "WS-Policy defines rules and constraints."
  },
  {
    id: "soap-mcq-37",
    tag: "SOAP • Advanced",
    q: "SOAP message-level security means:",
    options: [
      "Encrypted body",
      "Encrypted transport",
      "Encrypted DB",
      "Encrypted UI"
    ],
    answer: 0,
    explain: "Message-level security encrypts the payload."
  },
  {
    id: "soap-mcq-38",
    tag: "SOAP • Advanced",
    q: "SOAP supports end-to-end security?",
    options: ["Yes", "No", "Only HTTP", "Only HTTPS"],
    answer: 0,
    explain: "SOAP supports end-to-end security."
  },
  {
    id: "soap-mcq-39",
    tag: "SOAP • Advanced",
    q: "What is SOAP fault detail used for?",
    options: [
      "Error details",
      "Security",
      "Routing",
      "Validation"
    ],
    answer: 0,
    explain: "Fault detail contains application-specific error info."
  },
  {
    id: "soap-mcq-40",
    tag: "SOAP • Advanced",
    q: "Which feature ensures SOAP reliability?",
    options: [
      "WS-RM",
      "OAuth",
      "JWT",
      "TLS"
    ],
    answer: 0,
    explain: "WS-ReliableMessaging ensures delivery."
  },
  {
    id: "soap-mcq-41",
    tag: "SOAP • Advanced",
    q: "SOAP is best for distributed transactions?",
    options: ["Yes", "No", "Only REST", "Only GraphQL"],
    answer: 0,
    explain: "SOAP supports distributed transactions."
  },
  {
    id: "soap-mcq-42",
    tag: "SOAP • Advanced",
    q: "Which Java annotation exposes SOAP service?",
    options: [
      "@WebService",
      "@RestController",
      "@Service",
      "@Controller"
    ],
    answer: 0,
    explain: "@WebService exposes SOAP service."
  },
  {
    id: "soap-mcq-43",
    tag: "SOAP • Advanced",
    q: "SOAP message signing ensures:",
    options: [
      "Integrity",
      "Confidentiality",
      "Availability",
      "Performance"
    ],
    answer: 0,
    explain: "Signing ensures message integrity."
  },
  {
    id: "soap-mcq-44",
    tag: "SOAP • Advanced",
    q: "Which is a drawback of SOAP?",
    options: [
      "Complexity",
      "No security",
      "No transactions",
      "No reliability"
    ],
    answer: 0,
    explain: "SOAP is complex and verbose."
  },
  {
    id: "soap-mcq-45",
    tag: "SOAP • Advanced",
    q: "SOAP fits which architecture?",
    options: [
      "SOA",
      "Microservices only",
      "Monolith",
      "Client-only"
    ],
    answer: 0,
    explain: "SOAP aligns with SOA."
  },
  {
    id: "soap-mcq-46",
    tag: "SOAP • Advanced",
    q: "SOAP message processing happens at:",
    options: [
      "Application layer",
      "Transport layer",
      "Network layer",
      "UI layer"
    ],
    answer: 0,
    explain: "SOAP works at application layer."
  },
  {
    id: "soap-mcq-47",
    tag: "SOAP • Advanced",
    q: "SOAP with MTOM improves:",
    options: [
      "Binary transfer",
      "Security",
      "Routing",
      "Caching"
    ],
    answer: 0,
    explain: "MTOM optimizes binary data transfer."
  },
  {
    id: "soap-mcq-48",
    tag: "SOAP • Advanced",
    q: "SOAP services are tightly coupled?",
    options: ["Yes", "No", "Optional", "Depends"],
    answer: 0,
    explain: "SOAP services are tightly coupled via schema."
  },
  {
    id: "soap-mcq-49",
    tag: "SOAP • Advanced",
    q: "SOAP version used today is:",
    options: ["1.0", "1.1", "1.2", "2.0"],
    answer: 2,
    explain: "SOAP 1.2 is the latest standard."
  },
  {
    id: "soap-mcq-50",
    tag: "SOAP • Advanced",
    q: "SOAP is suitable for mission-critical systems?",
    options: ["Yes", "No", "Only REST", "Only GraphQL"],
    answer: 0,
    explain: "SOAP is widely used in mission-critical enterprise systems."
  }
];
