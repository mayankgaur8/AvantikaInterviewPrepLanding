// src/data/mcqs/microservicesMcq.js
// 50 Microservices MCQs (Basic / Intermediate / Advanced)

export const MICROSERVICES_MCQ = [
  // ================= BASIC (1–17) =================
  {
    id: "ms-mcq-1",
    tag: "Microservices • Basic",
    q: "What best defines a microservice?",
    options: [
      "A single large application deployed as one unit",
      "A small, independently deployable service focused on one business capability",
      "A database per organization",
      "A UI-only application"
    ],
    answer: 1,
    explain:
      "Microservices are small services aligned to business capabilities and independently deployable."
  },
  {
    id: "ms-mcq-2",
    tag: "Microservices • Basic",
    q: "Which is a key benefit of microservices?",
    options: [
      "Single codebase and single deployment",
      "Independent scaling and deployment",
      "No need for monitoring",
      "No network failures"
    ],
    answer: 1,
    explain:
      "Microservices allow teams to deploy and scale services independently."
  },
  {
    id: "ms-mcq-3",
    tag: "Microservices • Basic",
    q: "Which is a common challenge in microservices?",
    options: [
      "No network communication needed",
      "Distributed system complexity",
      "No versioning required",
      "Single point of failure is eliminated automatically"
    ],
    answer: 1,
    explain:
      "Microservices introduce distributed systems complexity (latency, retries, tracing, etc.)."
  },
  {
    id: "ms-mcq-4",
    tag: "Microservices • Basic",
    q: "What is an API Gateway primarily used for?",
    options: [
      "Store service logs",
      "Route, secure, and aggregate requests to backend services",
      "Replace databases",
      "Compile code"
    ],
    answer: 1,
    explain:
      "An API Gateway routes and secures requests and can aggregate responses."
  },
  {
    id: "ms-mcq-5",
    tag: "Microservices • Basic",
    q: "Which communication style is most common between microservices?",
    options: ["HTTP/REST", "FTP", "SMTP only", "Telnet"],
    answer: 0,
    explain: "HTTP/REST is commonly used; async messaging is also common."
  },
  {
    id: "ms-mcq-6",
    tag: "Microservices • Basic",
    q: "What is service discovery?",
    options: [
      "A process to discover database schemas",
      "A mechanism for services to find each other dynamically",
      "A tool to discover UI routes",
      "A method to discover code smells"
    ],
    answer: 1,
    explain:
      "Service discovery helps services locate other services in dynamic environments."
  },
  {
    id: "ms-mcq-7",
    tag: "Microservices • Basic",
    q: "Which is a common service discovery tool/pattern?",
    options: ["Eureka", "Git", "Maven", "JUnit"],
    answer: 0,
    explain: "Netflix Eureka is a common service discovery tool."
  },
  {
    id: "ms-mcq-8",
    tag: "Microservices • Basic",
    q: "What does 'bounded context' refer to (DDD)?",
    options: [
      "A single global database",
      "A logical boundary within which a domain model is consistent",
      "A network boundary",
      "A CI pipeline"
    ],
    answer: 1,
    explain:
      "Bounded context defines a boundary where a domain model and language apply consistently."
  },
  {
    id: "ms-mcq-9",
    tag: "Microservices • Basic",
    q: "Which is recommended for microservices data management?",
    options: [
      "Single shared database for all services",
      "Database-per-service (or schema-per-service)",
      "No database",
      "Only file storage"
    ],
    answer: 1,
    explain:
      "Database-per-service reduces coupling and supports independent evolution."
  },
  {
    id: "ms-mcq-10",
    tag: "Microservices • Basic",
    q: "What is horizontal scaling?",
    options: [
      "Increasing CPU/RAM on the same machine",
      "Adding more instances of a service",
      "Reducing service count",
      "Scaling the database vertically only"
    ],
    answer: 1,
    explain: "Horizontal scaling means adding more instances."
  },
  {
    id: "ms-mcq-11",
    tag: "Microservices • Basic",
    q: "What is a common container platform for microservices?",
    options: ["Docker", "MS Word", "Excel", "Notepad"],
    answer: 0,
    explain: "Docker is widely used to containerize microservices."
  },
  {
    id: "ms-mcq-12",
    tag: "Microservices • Basic",
    q: "What is a 'monolith'?",
    options: [
      "A service mesh",
      "An application built and deployed as a single unit",
      "A distributed database",
      "A message broker"
    ],
    answer: 1,
    explain: "A monolith is one deployable unit containing multiple modules."
  },
  {
    id: "ms-mcq-13",
    tag: "Microservices • Basic",
    q: "Which is a typical reason to adopt microservices?",
    options: [
      "Simplify networking",
      "Independent releases by multiple teams",
      "Avoid DevOps",
      "Remove need for testing"
    ],
    answer: 1,
    explain:
      "Microservices support independent release cycles and team autonomy."
  },
  {
    id: "ms-mcq-14",
    tag: "Microservices • Basic",
    q: "What is observability in microservices?",
    options: [
      "Only logging",
      "Logging + metrics + tracing to understand system behavior",
      "Only dashboards",
      "Only alerts"
    ],
    answer: 1,
    explain:
      "Observability combines logs, metrics, and tracing to diagnose issues."
  },
  {
    id: "ms-mcq-15",
    tag: "Microservices • Basic",
    q: "Which is commonly used for async communication?",
    options: ["Kafka/RabbitMQ", "JDBC", "HTML", "CSS"],
    answer: 0,
    explain: "Message brokers like Kafka or RabbitMQ support async messaging."
  },
  {
    id: "ms-mcq-16",
    tag: "Microservices • Basic",
    q: "What is 'loose coupling'?",
    options: [
      "Services share the same codebase",
      "Services depend minimally on each other’s implementation details",
      "Services must be deployed together",
      "Services use the same database tables"
    ],
    answer: 1,
    explain:
      "Loose coupling means changes in one service don’t force changes in others."
  },
  {
    id: "ms-mcq-17",
    tag: "Microservices • Basic",
    q: "What is a primary drawback of microservices?",
    options: [
      "No scalability",
      "More operational overhead (deployment, monitoring, networking)",
      "No need for CI/CD",
      "No need for APIs"
    ],
    answer: 1,
    explain:
      "Microservices increase operational complexity and require strong DevOps."
  },

  // ================= INTERMEDIATE (18–34) =================
  {
    id: "ms-mcq-18",
    tag: "Microservices • Intermediate",
    q: "Which pattern is used to prevent repeated calls to a failing downstream service?",
    options: ["Factory", "Circuit Breaker", "Builder", "Adapter"],
    answer: 1,
    explain: "Circuit Breaker prevents cascading failures by short-circuiting calls."
  },
  {
    id: "ms-mcq-19",
    tag: "Microservices • Intermediate",
    q: "What is 'bulkhead' pattern?",
    options: [
      "Encrypt data at rest",
      "Isolate resources so failure in one part doesn’t sink the whole system",
      "Create a single shared thread pool",
      "Replace retries with sleeps"
    ],
    answer: 1,
    explain: "Bulkheads isolate resources (thread pools/limits) to contain failures."
  },
  {
    id: "ms-mcq-20",
    tag: "Microservices • Intermediate",
    q: "Which is the best description of eventual consistency?",
    options: [
      "All systems are always consistent",
      "Systems become consistent over time, not immediately",
      "Only databases are consistent",
      "Consistency is not needed"
    ],
    answer: 1,
    explain: "Eventual consistency means updates propagate and settle over time."
  },
  {
    id: "ms-mcq-21",
    tag: "Microservices • Intermediate",
    q: "What is the Saga pattern used for?",
    options: [
      "Distributed transactions using a sequence of local transactions",
      "Encrypting inter-service traffic",
      "Compiling microservices",
      "Load balancing"
    ],
    answer: 0,
    explain:
      "Sagas manage distributed transactions via local steps and compensations."
  },
  {
    id: "ms-mcq-22",
    tag: "Microservices • Intermediate",
    q: "In a Saga, what is a compensating transaction?",
    options: [
      "A rollback operation for a previous step",
      "A database index",
      "A cache refresh",
      "A retry policy"
    ],
    answer: 0,
    explain: "Compensation undoes the effects of a previous successful step."
  },
  {
    id: "ms-mcq-23",
    tag: "Microservices • Intermediate",
    q: "What is idempotency in APIs?",
    options: [
      "Same request always returns different result",
      "Repeating the same request has the same effect as one request",
      "Requests cannot be retried",
      "Only GET is idempotent"
    ],
    answer: 1,
    explain: "Idempotent operations can be safely retried without side effects."
  },
  {
    id: "ms-mcq-24",
    tag: "Microservices • Intermediate",
    q: "Which HTTP methods are typically idempotent?",
    options: ["POST only", "GET, PUT, DELETE (typically)", "PATCH only", "CONNECT only"],
    answer: 1,
    explain: "GET/PUT/DELETE are usually idempotent; POST generally is not."
  },
  {
    id: "ms-mcq-25",
    tag: "Microservices • Intermediate",
    q: "What is a 'strangler fig' pattern?",
    options: [
      "Replace a monolith incrementally by routing parts to new services",
      "Rewrite everything at once",
      "Use one database for all services",
      "Use only synchronous calls"
    ],
    answer: 0,
    explain:
      "Strangler fig migrates a monolith gradually by carving features out."
  },
  {
    id: "ms-mcq-26",
    tag: "Microservices • Intermediate",
    q: "What is a common approach to handle API versioning?",
    options: [
      "Never version APIs",
      "URI (/v1), headers, or content negotiation",
      "Rename databases only",
      "Use different JVM versions"
    ],
    answer: 1,
    explain: "API versioning can be done via URI, headers, or media types."
  },
  {
    id: "ms-mcq-27",
    tag: "Microservices • Intermediate",
    q: "Which is a best practice for distributed tracing?",
    options: [
      "Use random IDs per service",
      "Propagate a correlation/trace ID across services",
      "Log only errors",
      "Disable logs in production"
    ],
    answer: 1,
    explain: "Trace IDs must propagate across services for end-to-end tracing."
  },
  {
    id: "ms-mcq-28",
    tag: "Microservices • Intermediate",
    q: "What is a service mesh?",
    options: [
      "A database replication system",
      "Infrastructure layer for service-to-service communication (mTLS, retries, telemetry)",
      "A CI server",
      "A container runtime"
    ],
    answer: 1,
    explain:
      "Service mesh (e.g., Istio/Linkerd) manages service-to-service traffic concerns."
  },
  {
    id: "ms-mcq-29",
    tag: "Microservices • Intermediate",
    q: "Why is centralized logging important in microservices?",
    options: [
      "To reduce service count",
      "To correlate issues across many services and instances",
      "To avoid metrics",
      "To replace tracing"
    ],
    answer: 1,
    explain: "Central logging aggregates logs for diagnosis across services."
  },
  {
    id: "ms-mcq-30",
    tag: "Microservices • Intermediate",
    q: "What is the purpose of retries?",
    options: [
      "To increase database size",
      "To handle transient failures (network hiccups) safely",
      "To eliminate the need for timeouts",
      "To avoid load balancing"
    ],
    answer: 1,
    explain: "Retries handle transient failures but must be bounded with backoff."
  },
  {
    id: "ms-mcq-31",
    tag: "Microservices • Intermediate",
    q: "Which is a best practice for retries?",
    options: [
      "Retry forever without backoff",
      "Use exponential backoff + jitter + max attempts",
      "Retry only on success",
      "Disable timeouts"
    ],
    answer: 1,
    explain: "Exponential backoff with jitter avoids thundering herd and overload."
  },
  {
    id: "ms-mcq-32",
    tag: "Microservices • Intermediate",
    q: "What is the CAP theorem about?",
    options: [
      "Caching, APIs, Performance",
      "Consistency, Availability, Partition tolerance tradeoffs",
      "Containers and Pods",
      "CPU and Memory"
    ],
    answer: 1,
    explain: "CAP: In partitions, you trade off consistency vs availability."
  },
  {
    id: "ms-mcq-33",
    tag: "Microservices • Intermediate",
    q: "What is 'backward compatibility' for APIs?",
    options: [
      "Clients break when server adds fields",
      "New server changes should not break existing clients",
      "Only old clients can call new APIs",
      "Remove fields frequently"
    ],
    answer: 1,
    explain: "API changes should not break existing consumers."
  },
  {
    id: "ms-mcq-34",
    tag: "Microservices • Intermediate",
    q: "Which is a common contract testing tool?",
    options: ["Pact", "Hibernate", "Maven", "Tomcat"],
    answer: 0,
    explain: "Pact is a popular contract testing tool for microservices."
  },

  // ================= ADVANCED (35–50) =================
  {
    id: "ms-mcq-35",
    tag: "Microservices • Advanced",
    q: "What is the main benefit of CQRS?",
    options: [
      "Single model for reads and writes",
      "Separate read and write models to optimize each side",
      "Eliminate databases",
      "Avoid events"
    ],
    answer: 1,
    explain: "CQRS separates read/write models for performance and scaling."
  },
  {
    id: "ms-mcq-36",
    tag: "Microservices • Advanced",
    q: "What is Event Sourcing?",
    options: [
      "Store current state only",
      "Persist state as a sequence of events",
      "Store data in cache only",
      "Store logs only"
    ],
    answer: 1,
    explain:
      "Event sourcing persists all changes as events; state is derived by replaying events."
  },
  {
    id: "ms-mcq-37",
    tag: "Microservices • Advanced",
    q: "Which is true about distributed transactions in microservices?",
    options: [
      "2PC is always recommended",
      "Sagas are often preferred over 2PC for scalability",
      "ACID across microservices is easy",
      "Avoid compensation"
    ],
    answer: 1,
    explain: "Sagas are favored to avoid tightly coupled 2PC in distributed systems."
  },
  {
    id: "ms-mcq-38",
    tag: "Microservices • Advanced",
    q: "What does 'outbox pattern' solve?",
    options: [
      "Storing images",
      "Reliable event publishing without dual-write inconsistencies",
      "Reducing CPU usage",
      "Avoiding database transactions"
    ],
    answer: 1,
    explain:
      "Outbox writes business data + event to DB in one transaction, then publishes reliably."
  },
  {
    id: "ms-mcq-39",
    tag: "Microservices • Advanced",
    q: "What is 'dual write problem'?",
    options: [
      "Writing to two tables in the same DB",
      "Updating DB and publishing message separately causing inconsistency",
      "Writing to cache twice",
      "Two threads writing to same variable"
    ],
    answer: 1,
    explain: "Separate DB write and message publish can lead to lost/duplicate events."
  },
  {
    id: "ms-mcq-40",
    tag: "Microservices • Advanced",
    q: "Which is a correct statement about timeouts?",
    options: [
      "Timeouts are not needed in microservices",
      "Timeouts prevent resource exhaustion due to hung calls",
      "Timeouts cause all calls to fail",
      "Timeouts replace retries"
    ],
    answer: 1,
    explain: "Timeouts bound waiting time and protect resources."
  },
  {
    id: "ms-mcq-41",
    tag: "Microservices • Advanced",
    q: "What is 'hedged requests'?",
    options: [
      "Send the same request to multiple replicas after a delay to reduce tail latency",
      "Disable load balancing",
      "Cache all responses",
      "Use only one replica"
    ],
    answer: 0,
    explain: "Hedging reduces tail latency at the cost of extra load."
  },
  {
    id: "ms-mcq-42",
    tag: "Microservices • Advanced",
    q: "What is the goal of 'rate limiting' at gateway/service?",
    options: [
      "Increase latency",
      "Protect services from overload and abusive clients",
      "Disable authentication",
      "Replace caching"
    ],
    answer: 1,
    explain: "Rate limiting protects services and ensures fair usage."
  },
  {
    id: "ms-mcq-43",
    tag: "Microservices • Advanced",
    q: "Which approach best supports zero-downtime deployments?",
    options: ["Big bang deployment", "Blue/Green or Canary", "Manual copying", "Stop all services first"],
    answer: 1,
    explain: "Blue/Green and Canary enable gradual cutover and rollback."
  },
  {
    id: "ms-mcq-44",
    tag: "Microservices • Advanced",
    q: "What is 'canary release'?",
    options: [
      "Release to all users at once",
      "Route small % of traffic to new version, then increase gradually",
      "Disable monitoring",
      "Deploy only on weekends"
    ],
    answer: 1,
    explain: "Canary routes small traffic to validate new version before full rollout."
  },
  {
    id: "ms-mcq-45",
    tag: "Microservices • Advanced",
    q: "What does mTLS in a service mesh provide?",
    options: [
      "Only caching",
      "Mutual authentication and encryption between services",
      "Only compression",
      "Only routing"
    ],
    answer: 1,
    explain: "mTLS provides encryption + mutual identity verification."
  },
  {
    id: "ms-mcq-46",
    tag: "Microservices • Advanced",
    q: "Which is a best practice for schema evolution in event-driven systems?",
    options: [
      "Break consumers frequently",
      "Use backward/forward compatible schemas (e.g., Avro/Protobuf) + versioning",
      "Send raw objects",
      "Never change schemas"
    ],
    answer: 1,
    explain: "Use compatibility rules and schema registry/versioning for safe evolution."
  },
  {
    id: "ms-mcq-47",
    tag: "Microservices • Advanced",
    q: "What is the primary advantage of gRPC over REST in some systems?",
    options: [
      "Text-only payloads",
      "Binary protocol + strong contracts + streaming support",
      "No need for schemas",
      "Slower performance"
    ],
    answer: 1,
    explain: "gRPC uses Protobuf contracts and supports streaming with high performance."
  },
  {
    id: "ms-mcq-48",
    tag: "Microservices • Advanced",
    q: "What is 'consumer-driven contract testing'?",
    options: [
      "Producer defines contract only",
      "Consumers define expectations; provider verifies against them",
      "Only UI tests",
      "Only load tests"
    ],
    answer: 1,
    explain: "Consumers publish contracts; provider verifies compatibility."
  },
  {
    id: "ms-mcq-49",
    tag: "Microservices • Advanced",
    q: "Why can distributed locks be risky?",
    options: [
      "They are always fast",
      "They can fail under partitions/clock drift and reduce availability",
      "They remove the need for retries",
      "They eliminate consistency problems"
    ],
    answer: 1,
    explain: "Distributed locks can reduce availability and fail under partitions."
  },
  {
    id: "ms-mcq-50",
    tag: "Microservices • Advanced",
    q: "What is the main purpose of a correlation ID?",
    options: [
      "Encrypt payload",
      "Track a request across multiple services for logs/traces",
      "Scale a service",
      "Replace authentication"
    ],
    answer: 1,
    explain: "Correlation IDs help trace a request across services and logs."
  }
];
