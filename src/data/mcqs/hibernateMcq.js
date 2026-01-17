// 50 Hibernate MCQs – Easy / Medium / Hard

export const HIBERNATE_MCQ = [

  // ================= EASY (1–18) =================
  {
    id: "hib-mcq-1",
    tag: "Hibernate • Easy",
    q: "What is Hibernate?",
    options: [
      "Web framework",
      "ORM framework",
      "Application server",
      "Database"
    ],
    answer: 1,
    explain: "Hibernate is an ORM (Object Relational Mapping) framework."
  },
  {
    id: "hib-mcq-2",
    tag: "Hibernate • Easy",
    q: "Which file is traditionally used for Hibernate configuration?",
    options: [
      "hibernate.cfg.xml",
      "application.yml",
      "web.xml",
      "pom.xml"
    ],
    answer: 0,
    explain: "hibernate.cfg.xml is the classic configuration file."
  },
  {
    id: "hib-mcq-3",
    tag: "Hibernate • Easy",
    q: "Which interface is used to interact with the database?",
    options: ["Session", "Factory", "Context", "Driver"],
    answer: 0,
    explain: "Session is used for CRUD operations."
  },
  {
    id: "hib-mcq-4",
    tag: "Hibernate • Easy",
    q: "Which class creates Session objects?",
    options: ["Session", "SessionFactory", "Configuration", "Transaction"],
    answer: 1,
    explain: "SessionFactory creates Session instances."
  },
  {
    id: "hib-mcq-5",
    tag: "Hibernate • Easy",
    q: "Which annotation marks a persistent class?",
    options: ["@Component", "@Table", "@Entity", "@Bean"],
    answer: 2,
    explain: "@Entity marks a persistent Hibernate entity."
  },
  {
    id: "hib-mcq-6",
    tag: "Hibernate • Easy",
    q: "Which annotation identifies primary key?",
    options: ["@Column", "@Id", "@Key", "@Primary"],
    answer: 1,
    explain: "@Id marks the primary key."
  },
  {
    id: "hib-mcq-7",
    tag: "Hibernate • Easy",
    q: "Which annotation auto-generates primary keys?",
    options: ["@Id", "@Auto", "@GeneratedValue", "@Sequence"],
    answer: 2,
    explain: "@GeneratedValue generates primary keys."
  },
  {
    id: "hib-mcq-8",
    tag: "Hibernate • Easy",
    q: "Which fetching strategy loads data immediately?",
    options: ["LAZY", "EAGER", "DEFERRED", "MANUAL"],
    answer: 1,
    explain: "EAGER loads associated data immediately."
  },
  {
    id: "hib-mcq-9",
    tag: "Hibernate • Easy",
    q: "Which language is used for Hibernate queries?",
    options: ["SQL", "JPQL", "HQL", "PL/SQL"],
    answer: 2,
    explain: "Hibernate Query Language (HQL) is object-oriented."
  },
  {
    id: "hib-mcq-10",
    tag: "Hibernate • Easy",
    q: "Which cache is enabled by default?",
    options: [
      "Second-level cache",
      "Query cache",
      "First-level cache",
      "Distributed cache"
    ],
    answer: 2,
    explain: "First-level cache is enabled by default."
  },

  // ================= MEDIUM (11–35) =================
  {
    id: "hib-mcq-11",
    tag: "Hibernate • Medium",
    q: "What is the scope of first-level cache?",
    options: [
      "Session",
      "SessionFactory",
      "Application",
      "JVM"
    ],
    answer: 0,
    explain: "First-level cache is scoped to a Session."
  },
  {
    id: "hib-mcq-12",
    tag: "Hibernate • Medium",
    q: "Which cache is shared across sessions?",
    options: [
      "First-level cache",
      "Second-level cache",
      "Transaction cache",
      "Query buffer"
    ],
    answer: 1,
    explain: "Second-level cache is shared across sessions."
  },
  {
    id: "hib-mcq-13",
    tag: "Hibernate • Medium",
    q: "Which annotation defines table mapping?",
    options: ["@Entity", "@Column", "@Table", "@Join"],
    answer: 2,
    explain: "@Table maps entity to DB table."
  },
  {
    id: "hib-mcq-14",
    tag: "Hibernate • Medium",
    q: "Which relationship represents one-to-many?",
    options: [
      "@ManyToOne",
      "@OneToMany",
      "@ManyToMany",
      "@OneToOne"
    ],
    answer: 1,
    explain: "@OneToMany represents one-to-many mapping."
  },
  {
    id: "hib-mcq-15",
    tag: "Hibernate • Medium",
    q: "Which annotation maps many-to-many relationship?",
    options: [
      "@ManyToMany",
      "@JoinColumn",
      "@Collection",
      "@MapKey"
    ],
    answer: 0,
    explain: "@ManyToMany maps many-to-many relationships."
  },
  {
    id: "hib-mcq-16",
    tag: "Hibernate • Medium",
    q: "What does CascadeType.ALL do?",
    options: [
      "Deletes only",
      "Saves only",
      "Propagates all operations",
      "Only updates"
    ],
    answer: 2,
    explain: "CascadeType.ALL propagates all entity operations."
  },
  {
    id: "hib-mcq-17",
    tag: "Hibernate • Medium",
    q: "Which fetch strategy is default for @ManyToOne?",
    options: ["LAZY", "EAGER", "MANUAL", "NONE"],
    answer: 1,
    explain: "@ManyToOne defaults to EAGER fetching."
  },
  {
    id: "hib-mcq-18",
    tag: "Hibernate • Medium",
    q: "Which exception occurs outside session?",
    options: [
      "NullPointerException",
      "LazyInitializationException",
      "SQLSyntaxErrorException",
      "MappingException"
    ],
    answer: 1,
    explain: "LazyInitializationException occurs when session is closed."
  },
  {
    id: "hib-mcq-19",
    tag: "Hibernate • Medium",
    q: "Which API replaced Criteria in Hibernate 5+?",
    options: ["HQL", "JPA Criteria API", "SQLQuery", "NativeQuery"],
    answer: 1,
    explain: "JPA Criteria API replaced Hibernate Criteria."
  },

  // ================= HARD (36–50) =================
  {
    id: "hib-mcq-36",
    tag: "Hibernate • Hard",
    q: "What is dirty checking in Hibernate?",
    options: [
      "Manual update check",
      "Automatic detection of entity changes",
      "DB constraint validation",
      "Session cleanup"
    ],
    answer: 1,
    explain: "Hibernate automatically detects entity changes and updates DB."
  },
  {
    id: "hib-mcq-37",
    tag: "Hibernate • Hard",
    q: "Which mechanism avoids N+1 select problem?",
    options: [
      "Lazy loading",
      "Fetch Join",
      "Second-level cache",
      "Transactions"
    ],
    answer: 1,
    explain: "Fetch Join retrieves related entities in one query."
  },
  {
    id: "hib-mcq-38",
    tag: "Hibernate • Hard",
    q: "Which annotation enables optimistic locking?",
    options: ["@Lock", "@Version", "@Transactional", "@Optimistic"],
    answer: 1,
    explain: "@Version enables optimistic locking."
  },
  {
    id: "hib-mcq-39",
    tag: "Hibernate • Hard",
    q: "Which isolation level prevents dirty reads?",
    options: [
      "READ_UNCOMMITTED",
      "READ_COMMITTED",
      "REPEATABLE_READ",
      "SERIALIZABLE"
    ],
    answer: 1,
    explain: "READ_COMMITTED prevents dirty reads."
  },
  {
    id: "hib-mcq-40",
    tag: "Hibernate • Hard",
    q: "Which cache provider is commonly used?",
    options: ["Ehcache", "Redis", "Memcached", "Hazelcast"],
    answer: 0,
    explain: "Ehcache is widely used with Hibernate."
  },
  {
    id: "hib-mcq-41",
    tag: "Hibernate • Hard",
    q: "What does StatelessSession provide?",
    options: [
      "No caching",
      "Auto dirty checking",
      "Lazy loading",
      "Transactions"
    ],
    answer: 0,
    explain: "StatelessSession skips caching and dirty checking."
  },
  {
    id: "hib-mcq-42",
    tag: "Hibernate • Hard",
    q: "Which annotation enables dynamic SQL generation?",
    options: ["@DynamicInsert", "@DynamicUpdate", "Both A and B", "@Generated"],
    answer: 2,
    explain: "DynamicInsert and DynamicUpdate generate SQL dynamically."
  },
  {
    id: "hib-mcq-43",
    tag: "Hibernate • Hard",
    q: "Which mapping handles composite keys?",
    options: [
      "@EmbeddedId",
      "@CompositeKey",
      "@MultiId",
      "@JoinId"
    ],
    answer: 0,
    explain: "@EmbeddedId is used for composite primary keys."
  },
  {
    id: "hib-mcq-44",
    tag: "Hibernate • Hard",
    q: "Which feature improves bulk insert performance?",
    options: [
      "Batch processing",
      "Lazy loading",
      "Second-level cache",
      "CascadeType"
    ],
    answer: 0,
    explain: "Batch processing improves bulk insert performance."
  },
  {
    id: "hib-mcq-45",
    tag: "Hibernate • Hard",
    q: "Which annotation maps inheritance?",
    options: [
      "@Inheritance",
      "@MappedSuperclass",
      "@Extends",
      "Both A and B"
    ],
    answer: 3,
    explain: "@Inheritance and @MappedSuperclass support inheritance."
  }
];
