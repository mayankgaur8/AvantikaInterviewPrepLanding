// src/data/mcqs/systemdesignMcq.js
// 50 MCQs on System Design (Basic • Intermediate • Advanced)

export const SYSTEM_DESIGN_MCQ = [
  // ================= BASIC (1–17) =================
  {
    id: "sd-mcq-1",
    tag: "System Design • Basic",
    q: "What is the primary goal of a load balancer?",
    options: [
      "Encrypt data at rest",
      "Distribute traffic across multiple servers",
      "Store static files",
      "Compile backend code",
    ],
    answer: 1,
    explain:
      "A load balancer distributes incoming requests across healthy servers to improve availability and performance.",
  },
  {
    id: "sd-mcq-2",
    tag: "System Design • Basic",
    q: "Which component reduces database load for read-heavy traffic?",
    options: ["Cache", "WAF", "CDN only", "Message Queue"],
    answer: 0,
    explain:
      "A cache (Redis/Memcached) stores frequently accessed data to reduce repeated DB reads.",
  },
  {
    id: "sd-mcq-3",
    tag: "System Design • Basic",
    q: "What does horizontal scaling mean?",
    options: [
      "Upgrading CPU/RAM on a single machine",
      "Adding more machines/instances",
      "Compressing data",
      "Reducing network hops",
    ],
    answer: 1,
    explain:
      "Horizontal scaling adds more servers/instances to handle increased load.",
  },
  {
    id: "sd-mcq-4",
    tag: "System Design • Basic",
    q: "Which is an example of a stateless service?",
    options: [
      "A server that stores user session in memory",
      "A server that stores no session and relies on external storage",
      "A database server",
      "A file server only",
    ],
    answer: 1,
    explain:
      "Stateless services do not store user-specific state in memory; they keep state in external stores (DB/cache).",
  },
  {
    id: "sd-mcq-5",
    tag: "System Design • Basic",
    q: "What is the role of a CDN?",
    options: [
      "Run background jobs",
      "Serve content from edge locations closer to users",
      "Manage database schemas",
      "Replace authentication",
    ],
    answer: 1,
    explain:
      "CDNs cache and serve static assets (and sometimes dynamic content) from edge locations to reduce latency.",
  },
  {
    id: "sd-mcq-6",
    tag: "System Design • Basic",
    q: "Which storage is best suited for large binary objects like images/videos?",
    options: ["Object storage", "In-memory cache", "DNS", "Message queue"],
    answer: 0,
    explain:
      "Object storage (e.g., S3/Azure Blob/GCS) is ideal for large unstructured binaries.",
  },
  {
    id: "sd-mcq-7",
    tag: "System Design • Basic",
    q: "What does 'high availability' primarily mean?",
    options: [
      "The system is secure",
      "The system is always fast",
      "The system remains operational despite failures",
      "The system uses microservices",
    ],
    answer: 2,
    explain:
      "High availability means minimizing downtime through redundancy and failover.",
  },
  {
    id: "sd-mcq-8",
    tag: "System Design • Basic",
    q: "What is a common use of a message queue?",
    options: [
      "Synchronous request handling only",
      "Asynchronous communication between services",
      "Storing images",
      "DNS resolution",
    ],
    answer: 1,
    explain:
      "Queues enable async processing, decoupling services and smoothing traffic spikes.",
  },
  {
    id: "sd-mcq-9",
    tag: "System Design • Basic",
    q: "Which database is generally best for complex joins and transactions?",
    options: ["Relational DB", "Key-value store", "Search index", "CDN"],
    answer: 0,
    explain:
      "Relational databases (PostgreSQL/MySQL) provide ACID transactions and rich query capabilities.",
  },
  {
    id: "sd-mcq-10",
    tag: "System Design • Basic",
    q: "What is a primary purpose of replication in databases?",
    options: [
      "To reduce latency and improve availability",
      "To compress data",
      "To increase query complexity",
      "To enforce authorization",
    ],
    answer: 0,
    explain:
      "Replication provides redundancy for failover and can improve read scalability.",
  },
  {
    id: "sd-mcq-11",
    tag: "System Design • Basic",
    q: "What is sharding?",
    options: [
      "Encrypting data",
      "Splitting data across multiple database nodes",
      "Caching responses",
      "Storing logs in files",
    ],
    answer: 1,
    explain:
      "Sharding distributes data across multiple nodes to scale horizontally.",
  },
  {
    id: "sd-mcq-12",
    tag: "System Design • Basic",
    q: "What does 'latency' measure?",
    options: [
      "Requests per second",
      "Time taken to complete a request",
      "Total storage capacity",
      "Number of servers",
    ],
    answer: 1,
    explain:
      "Latency is the time from request initiation to response completion.",
  },
  {
    id: "sd-mcq-13",
    tag: "System Design • Basic",
    q: "What is a health check in load balancing?",
    options: [
      "A security scan",
      "A mechanism to route traffic away from unhealthy instances",
      "A database backup",
      "A CPU profiler",
    ],
    answer: 1,
    explain:
      "Health checks ensure traffic is sent only to healthy instances.",
  },
  {
    id: "sd-mcq-14",
    tag: "System Design • Basic",
    q: "Which of these is an example of eventual consistency?",
    options: [
      "All reads always see latest write",
      "Reads may temporarily see stale data but converge over time",
      "Writes are rejected if any replica is down",
      "Transactions always roll back",
    ],
    answer: 1,
    explain:
      "Eventual consistency allows temporary divergence but replicas converge eventually.",
  },
  {
    id: "sd-mcq-15",
    tag: "System Design • Basic",
    q: "What is a common benefit of stateless APIs?",
    options: [
      "They cannot scale",
      "They scale easily behind a load balancer",
      "They store sessions in memory",
      "They require sticky sessions always",
    ],
    answer: 1,
    explain:
      "Stateless services can be horizontally scaled easily because any instance can serve any request.",
  },
  {
    id: "sd-mcq-16",
    tag: "System Design • Basic",
    q: "Which component typically stores session data to avoid sticky sessions?",
    options: ["Redis", "CDN", "DNS", "WAF"],
    answer: 0,
    explain:
      "Redis is commonly used as a distributed session store.",
  },
  {
    id: "sd-mcq-17",
    tag: "System Design • Basic",
    q: "What is the main purpose of a reverse proxy?",
    options: [
      "Client-side rendering",
      "Route requests to backend services and provide features like TLS termination",
      "Store database rows",
      "Generate UUIDs",
    ],
    answer: 1,
    explain:
      "Reverse proxies (Nginx/Envoy) sit in front of services and route requests, often handling TLS, caching, and routing.",
  },

  // ================= INTERMEDIATE (18–34) =================
  {
    id: "sd-mcq-18",
    tag: "System Design • Intermediate",
    q: "What is the key trade-off in the CAP theorem?",
    options: [
      "Choose between CPU and memory",
      "Choose between consistency, availability, and partition tolerance (cannot have all 3 at once)",
      "Choose between REST and SOAP",
      "Choose between encryption and compression",
    ],
    answer: 1,
    explain:
      "In a distributed system with network partitions, you must trade off between consistency and availability.",
  },
  {
    id: "sd-mcq-19",
    tag: "System Design • Intermediate",
    q: "What is read-through cache?",
    options: [
      "Cache is updated only by writes",
      "Application reads from cache; on miss, cache loads from DB automatically",
      "Cache stores only write logs",
      "Cache is bypassed always",
    ],
    answer: 1,
    explain:
      "Read-through cache loads data into cache on miss, typically via cache layer logic.",
  },
  {
    id: "sd-mcq-20",
    tag: "System Design • Intermediate",
    q: "What is write-back (write-behind) cache?",
    options: [
      "Write goes to DB first, cache later",
      "Write goes to cache first, DB updated asynchronously",
      "Write is rejected",
      "Write goes only to CDN",
    ],
    answer: 1,
    explain:
      "Write-back updates cache first and persists to DB asynchronously (faster writes but risk of data loss).",
  },
  {
    id: "sd-mcq-21",
    tag: "System Design • Intermediate",
    q: "Which is a common technique to prevent cache stampede?",
    options: [
      "Disable cache",
      "Use request coalescing or locks on cache-miss",
      "Use only write-back",
      "Use sticky sessions",
    ],
    answer: 1,
    explain:
      "Coalescing/locking ensures only one request populates cache for a key while others wait.",
  },
  {
    id: "sd-mcq-22",
    tag: "System Design • Intermediate",
    q: "What is an idempotency key used for?",
    options: [
      "Encrypting requests",
      "Ensuring repeated requests don't create duplicate operations",
      "Balancing traffic",
      "Sharding database",
    ],
    answer: 1,
    explain:
      "Idempotency keys allow safe retries of operations like POST payments/orders without duplication.",
  },
  {
    id: "sd-mcq-23",
    tag: "System Design • Intermediate",
    q: "What is a common benefit of CQRS?",
    options: [
      "Avoids authentication",
      "Separates read and write models for scalability and clarity",
      "Removes need for DB",
      "Ensures strong consistency always",
    ],
    answer: 1,
    explain:
      "CQRS separates command (write) and query (read) paths, enabling independent scaling and optimization.",
  },
  {
    id: "sd-mcq-24",
    tag: "System Design • Intermediate",
    q: "What is the main purpose of rate limiting?",
    options: [
      "Improve DB normalization",
      "Protect services from abuse and overload",
      "Increase latency",
      "Store logs",
    ],
    answer: 1,
    explain:
      "Rate limiting protects systems from spikes/abuse and ensures fair usage.",
  },
  {
    id: "sd-mcq-25",
    tag: "System Design • Intermediate",
    q: "Which algorithm is commonly used for rate limiting?",
    options: [
      "Bubble sort",
      "Token bucket",
      "Quickselect",
      "Dijkstra",
    ],
    answer: 1,
    explain:
      "Token bucket (and leaky bucket) are common rate limiting algorithms.",
  },
  {
    id: "sd-mcq-26",
    tag: "System Design • Intermediate",
    q: "Which is a common use of consistent hashing?",
    options: [
      "Sorting arrays",
      "Minimizing key remapping when nodes are added/removed",
      "Encrypting passwords",
      "Compressing files",
    ],
    answer: 1,
    explain:
      "Consistent hashing reduces rebalancing impact during scaling events.",
  },
  {
    id: "sd-mcq-27",
    tag: "System Design • Intermediate",
    q: "What is a key advantage of event-driven architecture?",
    options: [
      "Always synchronous",
      "Decouples services using events for async workflows",
      "Requires monolith",
      "Removes need for retries",
    ],
    answer: 1,
    explain:
      "Events decouple producers and consumers, enabling asynchronous and scalable workflows.",
  },
  {
    id: "sd-mcq-28",
    tag: "System Design • Intermediate",
    q: "What is backpressure in streaming systems?",
    options: [
      "Compression mechanism",
      "Mechanism to slow producers when consumers are overwhelmed",
      "Firewall rule",
      "A caching pattern",
    ],
    answer: 1,
    explain:
      "Backpressure prevents overload by signaling upstream to slow down.",
  },
  {
    id: "sd-mcq-29",
    tag: "System Design • Intermediate",
    q: "Which storage is best for full-text search?",
    options: ["Redis", "Elasticsearch/OpenSearch", "DNS", "CDN"],
    answer: 1,
    explain:
      "Search engines like Elasticsearch/OpenSearch are optimized for full-text and inverted indices.",
  },
  {
    id: "sd-mcq-30",
    tag: "System Design • Intermediate",
    q: "What is the purpose of a write-ahead log (WAL)?",
    options: [
      "Store images",
      "Ensure durability by logging changes before applying them",
      "Load balance requests",
      "Rate limit traffic",
    ],
    answer: 1,
    explain:
      "WAL ensures durability: changes are recorded before being applied to data files.",
  },
  {
    id: "sd-mcq-31",
    tag: "System Design • Intermediate",
    q: "What is the difference between throughput and latency?",
    options: [
      "They are same",
      "Throughput is requests/sec; latency is time per request",
      "Latency is requests/sec; throughput is time per request",
      "Both measure only storage",
    ],
    answer: 1,
    explain:
      "Throughput measures rate (RPS); latency measures response time.",
  },
  {
    id: "sd-mcq-32",
    tag: "System Design • Intermediate",
    q: "What is the main purpose of service discovery?",
    options: [
      "Provide DNS for internet only",
      "Find service instances dynamically in distributed systems",
      "Encrypt inter-service traffic",
      "Store configurations in code",
    ],
    answer: 1,
    explain:
      "Service discovery locates healthy service instances dynamically (e.g., Consul, Eureka, Kubernetes DNS).",
  },
  {
    id: "sd-mcq-33",
    tag: "System Design • Intermediate",
    q: "What does a circuit breaker pattern do?",
    options: [
      "Encrypt requests",
      "Stop calling a failing dependency to allow recovery",
      "Shard database",
      "Compress payloads",
    ],
    answer: 1,
    explain:
      "Circuit breaker prevents cascading failures by short-circuiting calls to unhealthy services.",
  },
  {
    id: "sd-mcq-34",
    tag: "System Design • Intermediate",
    q: "What is a common technique for handling 'hot keys' in cache?",
    options: [
      "Disable caching",
      "Key splitting or adding local caching",
      "Remove load balancer",
      "Always write-through",
    ],
    answer: 1,
    explain:
      "Hot keys can be mitigated using key splitting, local caches, or request coalescing.",
  },

  // ================= ADVANCED (35–50) =================
  {
    id: "sd-mcq-35",
    tag: "System Design • Advanced",
    q: "Which approach is best to ensure exactly-once processing end-to-end?",
    options: [
      "At-least-once + idempotency",
      "At-most-once only",
      "No retries",
      "Random deduplication",
    ],
    answer: 0,
    explain:
      "Exactly-once is often achieved via at-least-once delivery + idempotent consumers + deduplication/outbox patterns.",
  },
  {
    id: "sd-mcq-36",
    tag: "System Design • Advanced",
    q: "What is the outbox pattern used for?",
    options: [
      "Store images in DB",
      "Reliable event publishing with DB transaction consistency",
      "Rate limiting",
      "CDN caching",
    ],
    answer: 1,
    explain:
      "Outbox pattern stores events in DB within same transaction, then publishes asynchronously, ensuring consistency.",
  },
  {
    id: "sd-mcq-37",
    tag: "System Design • Advanced",
    q: "Which technique helps avoid split-brain in distributed systems?",
    options: [
      "Random leader election",
      "Quorum-based consensus",
      "Single-threaded execution",
      "DNS caching",
    ],
    answer: 1,
    explain:
      "Quorum-based consensus (Raft/Paxos) avoids split-brain by requiring majority agreement.",
  },
  {
    id: "sd-mcq-38",
    tag: "System Design • Advanced",
    q: "What is a quorum in distributed databases?",
    options: [
      "A single replica",
      "Minimum number of nodes required to agree on a read/write",
      "A cache key",
      "A TLS certificate",
    ],
    answer: 1,
    explain:
      "Quorum is the minimum number of replicas that must acknowledge a read/write for correctness guarantees.",
  },
  {
    id: "sd-mcq-39",
    tag: "System Design • Advanced",
    q: "What is the main purpose of a global ID generator (Snowflake-like)?",
    options: [
      "Generate random passwords",
      "Generate unique, sortable IDs in distributed systems",
      "Encrypt traffic",
      "Cache HTTP responses",
    ],
    answer: 1,
    explain:
      "Snowflake IDs are unique and often time-ordered, enabling distributed ID generation.",
  },
  {
    id: "sd-mcq-40",
    tag: "System Design • Advanced",
    q: "What is the key advantage of log-structured storage (LSM trees)?",
    options: [
      "Fast random writes only",
      "High write throughput with sequential writes",
      "No compaction needed",
      "Only works in memory",
    ],
    answer: 1,
    explain:
      "LSM trees provide high write throughput by writing sequentially and compacting later.",
  },
  {
    id: "sd-mcq-41",
    tag: "System Design • Advanced",
    q: "Which technique is commonly used to support multi-region active-active?",
    options: [
      "Single leader in one region only",
      "Conflict resolution + eventual consistency (CRDTs / last-write-wins)",
      "No replication",
      "Only backups",
    ],
    answer: 1,
    explain:
      "Active-active often requires conflict resolution strategies and eventual consistency across regions.",
  },
  {
    id: "sd-mcq-42",
    tag: "System Design • Advanced",
    q: "What does SLO stand for?",
    options: [
      "System Load Objective",
      "Service Level Objective",
      "Server Latency Output",
      "Storage Level Option",
    ],
    answer: 1,
    explain:
      "SLO = Service Level Objective. Targets like 99.9% availability or p95 latency.",
  },
  {
    id: "sd-mcq-43",
    tag: "System Design • Advanced",
    q: "Which is a best practice for distributed tracing?",
    options: [
      "Use a single log file per cluster",
      "Propagate correlation IDs across service boundaries",
      "Disable sampling always",
      "Store traces only on client",
    ],
    answer: 1,
    explain:
      "Tracing requires context propagation (traceId/spanId) across services.",
  },
  {
    id: "sd-mcq-44",
    tag: "System Design • Advanced",
    q: "What is p95 latency?",
    options: [
      "Average latency",
      "Latency that 95% of requests are below",
      "Max latency",
      "Requests per second",
    ],
    answer: 1,
    explain:
      "p95 latency is the 95th percentile: 95% of requests are faster than this threshold.",
  },
  {
    id: "sd-mcq-45",
    tag: "System Design • Advanced",
    q: "What is the best approach to handle retries safely for POST requests?",
    options: [
      "Always retry infinitely",
      "Use idempotency keys + deduplication store",
      "Disable retries",
      "Retry only on client-side with no server support",
    ],
    answer: 1,
    explain:
      "Idempotency keys make retries safe by preventing duplicate side effects.",
  },
  {
    id: "sd-mcq-46",
    tag: "System Design • Advanced",
    q: "What is the main role of a service mesh?",
    options: [
      "Replace database",
      "Handle cross-cutting concerns like mTLS, retries, observability",
      "Create frontend UI",
      "Compress images",
    ],
    answer: 1,
    explain:
      "Service mesh (Istio/Linkerd) manages service-to-service concerns via sidecars and control plane.",
  },
  {
    id: "sd-mcq-47",
    tag: "System Design • Advanced",
    q: "Which approach helps guarantee ordering of events per entity in Kafka-like systems?",
    options: [
      "Random partitioning",
      "Partition by entity ID",
      "Multiple topics for same entity",
      "No keys used",
    ],
    answer: 1,
    explain:
      "Partitioning by entity ID ensures all events for that entity go to the same partition, preserving order.",
  },
  {
    id: "sd-mcq-48",
    tag: "System Design • Advanced",
    q: "Which technique helps reduce thundering herd on cache expiry?",
    options: [
      "Cache busting",
      "Jittered TTL + request coalescing",
      "Remove cache",
      "Use only DB",
    ],
    answer: 1,
    explain:
      "Adding jitter to TTL spreads expirations; coalescing ensures one fetch repopulates cache.",
  },
  {
    id: "sd-mcq-49",
    tag: "System Design • Advanced",
    q: "What is the best reason to use a BFF (Backend for Frontend)?",
    options: [
      "To store images",
      "To tailor APIs for specific clients (web/mobile) and reduce over/under-fetching",
      "To replace CDN",
      "To avoid authentication",
    ],
    answer: 1,
    explain:
      "A BFF is client-specific backend layer optimizing responses and orchestration for that client.",
  },
  {
    id: "sd-mcq-50",
    tag: "System Design • Advanced",
    q: "Which approach is best to prevent cascading failures in microservices?",
    options: [
      "More threads",
      "Circuit breaker + timeouts + bulkheads",
      "Disable retries",
      "Increase DB size only",
    ],
    answer: 1,
    explain:
      "Time-bounded calls, circuit breakers, and bulkheads prevent failures from spreading across services.",
  },
];
