// 50 EJB MCQs (Easy / Medium / Hard)

export const EJB_MCQ = [

  // ================= EASY (1–18) =================
  {
    id: "ejb-mcq-1",
    tag: "EJB • Easy",
    q: "What does EJB stand for?",
    options: [
      "Enterprise Java Beans",
      "Extended Java Blocks",
      "Enterprise JSON Bridge",
      "Embedded Java Base"
    ],
    answer: 0,
    explain: "EJB stands for Enterprise Java Beans, used for enterprise-level server-side components."
  },
  {
    id: "ejb-mcq-2",
    tag: "EJB • Easy",
    q: "Which Java EE component is used to implement business logic?",
    options: ["Servlet", "JSP", "EJB", "JPA"],
    answer: 2,
    explain: "EJB is specifically designed for business logic."
  },
  {
    id: "ejb-mcq-3",
    tag: "EJB • Easy",
    q: "Which EJB type handles transactional business logic?",
    options: ["Entity Bean", "Session Bean", "Message Bean", "JSP Bean"],
    answer: 1,
    explain: "Session Beans encapsulate business logic."
  },
  {
    id: "ejb-mcq-4",
    tag: "EJB • Easy",
    q: "Which annotation marks a Stateless Session Bean?",
    options: ["@Stateful", "@Entity", "@Stateless", "@EJB"],
    answer: 2,
    explain: "@Stateless defines a stateless session bean."
  },
  {
    id: "ejb-mcq-5",
    tag: "EJB • Easy",
    q: "Which EJB maintains conversational state?",
    options: ["Stateless", "Singleton", "Stateful", "Message-driven"],
    answer: 2,
    explain: "Stateful session beans maintain client-specific state."
  },
  {
    id: "ejb-mcq-6",
    tag: "EJB • Easy",
    q: "Which annotation is used to inject an EJB?",
    options: ["@Inject", "@EJB", "@Autowired", "@Resource"],
    answer: 1,
    explain: "@EJB is used to inject EJB references."
  },
  {
    id: "ejb-mcq-7",
    tag: "EJB • Easy",
    q: "Which EJB type processes JMS messages?",
    options: ["Stateless", "Stateful", "Singleton", "Message-driven"],
    answer: 3,
    explain: "Message Driven Beans (MDB) consume JMS messages."
  },
  {
    id: "ejb-mcq-8",
    tag: "EJB • Easy",
    q: "Which container manages EJB lifecycle?",
    options: ["JVM", "Application Server", "Browser", "OS"],
    answer: 1,
    explain: "EJB lifecycle is managed by the application server."
  },
  {
    id: "ejb-mcq-9",
    tag: "EJB • Easy",
    q: "Which feature is automatically handled by EJB container?",
    options: ["UI rendering", "Transaction management", "HTML parsing", "CSS loading"],
    answer: 1,
    explain: "EJB container provides declarative transaction management."
  },
  {
    id: "ejb-mcq-10",
    tag: "EJB • Easy",
    q: "Which EJB is shared across all clients?",
    options: ["Stateful", "Stateless", "Singleton", "MDB"],
    answer: 2,
    explain: "Singleton beans have a single instance per application."
  },

  // ================= MEDIUM (11–35) =================
  {
    id: "ejb-mcq-11",
    tag: "EJB • Medium",
    q: "What is the default transaction attribute for EJB methods?",
    options: ["NOT_SUPPORTED", "REQUIRED", "MANDATORY", "SUPPORTS"],
    answer: 1,
    explain: "REQUIRED is the default transaction attribute."
  },
  {
    id: "ejb-mcq-12",
    tag: "EJB • Medium",
    q: "Which annotation defines transaction behavior?",
    options: ["@Transactional", "@TransactionAttribute", "@EJB", "@Resource"],
    answer: 1,
    explain: "@TransactionAttribute controls transaction semantics in EJB."
  },
  {
    id: "ejb-mcq-13",
    tag: "EJB • Medium",
    q: "Which transaction attribute creates a new transaction always?",
    options: ["REQUIRED", "SUPPORTS", "REQUIRES_NEW", "MANDATORY"],
    answer: 2,
    explain: "REQUIRES_NEW suspends existing transaction and creates a new one."
  },
  {
    id: "ejb-mcq-14",
    tag: "EJB • Medium",
    q: "Which annotation exposes EJB as a REST service?",
    options: ["@Path", "@WebService", "@Stateless", "@EJB"],
    answer: 0,
    explain: "@Path is used when EJB is integrated with JAX-RS."
  },
  {
    id: "ejb-mcq-15",
    tag: "EJB • Medium",
    q: "Which interface allows remote access to EJB?",
    options: ["@Local", "@Remote", "@EJB", "@Inject"],
    answer: 1,
    explain: "@Remote exposes EJB for remote JVM access."
  },
  {
    id: "ejb-mcq-16",
    tag: "EJB • Medium",
    q: "Which annotation makes EJB thread-safe?",
    options: ["@Lock", "@Concurrency", "@ThreadSafe", "@Synchronized"],
    answer: 0,
    explain: "@Lock controls concurrent access in Singleton beans."
  },
  {
    id: "ejb-mcq-17",
    tag: "EJB • Medium",
    q: "Which lock type allows concurrent reads?",
    options: ["WRITE", "READ", "NONE", "EXCLUSIVE"],
    answer: 1,
    explain: "@Lock(READ) allows multiple readers."
  },
  {
    id: "ejb-mcq-18",
    tag: "EJB • Medium",
    q: "What happens if EJB throws a RuntimeException?",
    options: [
      "Transaction commits",
      "Transaction rolls back",
      "Container ignores it",
      "EJB is destroyed"
    ],
    answer: 1,
    explain: "RuntimeException causes automatic rollback."
  },

  // ================= HARD (36–50) =================
  {
    id: "ejb-mcq-36",
    tag: "EJB • Hard",
    q: "Why are EJBs considered heavy compared to Spring Beans?",
    options: [
      "They require XML only",
      "They depend on full Java EE container",
      "They cannot be tested",
      "They don’t support DI"
    ],
    answer: 1,
    explain: "EJBs require a full application server unlike lightweight Spring beans."
  },
  {
    id: "ejb-mcq-37",
    tag: "EJB • Hard",
    q: "Which EJB feature ensures scalability?",
    options: [
      "State persistence",
      "Pooling and statelessness",
      "Client-side caching",
      "UI binding"
    ],
    answer: 1,
    explain: "Stateless beans are pooled, improving scalability."
  },
  {
    id: "ejb-mcq-38",
    tag: "EJB • Hard",
    q: "How does EJB support security?",
    options: [
      "Role-based access control",
      "Hardcoded passwords",
      "UI validation",
      "Custom encryption only"
    ],
    answer: 0,
    explain: "EJB supports declarative security via roles."
  },
  {
    id: "ejb-mcq-39",
    tag: "EJB • Hard",
    q: "Which annotation restricts method access by role?",
    options: ["@RolesAllowed", "@Secure", "@Auth", "@PermitAll"],
    answer: 0,
    explain: "@RolesAllowed restricts access based on user roles."
  },
  {
    id: "ejb-mcq-40",
    tag: "EJB • Hard",
    q: "Which EJB is best suited for high-throughput async messaging?",
    options: ["Stateful", "Stateless", "Singleton", "Message-driven"],
    answer: 3,
    explain: "MDBs handle asynchronous messaging efficiently."
  },
  {
    id: "ejb-mcq-41",
    tag: "EJB • Hard",
    q: "What is the biggest drawback of Stateful beans?",
    options: [
      "No transactions",
      "Consumes more memory",
      "Cannot scale",
      "Cannot be pooled"
    ],
    answer: 1,
    explain: "Stateful beans maintain state and consume more memory."
  },
  {
    id: "ejb-mcq-42",
    tag: "EJB • Hard",
    q: "What happens if Singleton bean uses WRITE lock?",
    options: [
      "Multiple clients allowed",
      "Only one client allowed at a time",
      "Deadlock always",
      "Read-only access"
    ],
    answer: 1,
    explain: "WRITE lock ensures exclusive access."
  },
  {
    id: "ejb-mcq-43",
    tag: "EJB • Hard",
    q: "EJB timers are used for?",
    options: [
      "Thread scheduling",
      "Periodic task execution",
      "Caching",
      "Transaction rollback"
    ],
    answer: 1,
    explain: "EJB Timer Service supports scheduled tasks."
  },
  {
    id: "ejb-mcq-44",
    tag: "EJB • Hard",
    q: "Which annotation schedules a method?",
    options: ["@Schedule", "@Timer", "@Cron", "@Async"],
    answer: 0,
    explain: "@Schedule defines automatic EJB timer execution."
  },
  {
    id: "ejb-mcq-45",
    tag: "EJB • Hard",
    q: "Why EJBs are less popular in microservices?",
    options: [
      "Too lightweight",
      "Tight coupling with application servers",
      "No DI support",
      "No REST support"
    ],
    answer: 1,
    explain: "EJBs are tightly coupled with Java EE containers, unsuitable for microservices."
  },
  {
    id: "ejb-mcq-46",
    tag: "EJB • Hard",
    q: "Which transaction attribute prevents a transaction?",
    options: ["REQUIRED", "SUPPORTS", "NOT_SUPPORTED", "MANDATORY"],
    answer: 2,
    explain: "NOT_SUPPORTED suspends any existing transaction."
  },
  {
    id: "ejb-mcq-47",
    tag: "EJB • Hard",
    q: "Which EJB feature replaces manual threading?",
    options: [
      "EJB container-managed concurrency",
      "ExecutorService",
      "Thread class",
      "ForkJoinPool"
    ],
    answer: 0,
    explain: "EJB container manages concurrency safely."
  },
  {
    id: "ejb-mcq-48",
    tag: "EJB • Hard",
    q: "EJBs mainly belong to which architecture?",
    options: ["Client-server", "Monolithic Java EE", "Microservices", "Serverless"],
    answer: 1,
    explain: "EJBs are part of traditional Java EE monolithic architecture."
  },
  {
    id: "ejb-mcq-49",
    tag: "EJB • Hard",
    q: "Which EJB type is deprecated in modern Java EE?",
    options: ["Session Beans", "Message Beans", "Entity Beans", "Singleton Beans"],
    answer: 2,
    explain: "Entity Beans were replaced by JPA."
  },
  {
    id: "ejb-mcq-50",
    tag: "EJB • Hard",
    q: "What is the modern alternative to EJB for microservices?",
    options: ["JSP", "Spring Boot", "Struts", "JSF"],
    answer: 1,
    explain: "Spring Boot is lightweight and ideal for microservices."
  }
];
