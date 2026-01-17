export const SYSTEM_DESIGN_QUESTIONS = [

/* =====================================================
   BASIC (15)
===================================================== */

{
  id: "sd-b-01",
  level: "Basic",
  q: "What is System Design?",
  a: "System Design is the process of defining architecture, components, data flow, and interfaces of a scalable, reliable system."
},

{
  id: "sd-b-02",
  level: "Basic",
  q: "What are functional and non-functional requirements?",
  answer: {
    summary: "Both are critical for system success.",
    table: {
      title: "Functional vs Non-Functional Requirements",
      headers: ["Aspect", "Functional", "Non-Functional"],
      rows: [
        ["Definition", "What system does", "How system performs"],
        ["Examples", "Login, Search", "Scalability, Latency"],
        ["Focus", "Features", "Quality attributes"]
      ]
    }
  }
},

{
  id: "sd-b-03",
  level: "Basic",
  q: "What is scalability?",
  a: "Scalability is the ability of a system to handle increased load by adding resources."
},

{
  id: "sd-b-04",
  level: "Basic",
  q: "Vertical vs Horizontal Scaling?",
  answer: {
    summary: "Two ways to scale systems.",
    table: {
      title: "Vertical vs Horizontal Scaling",
      headers: ["Aspect", "Vertical", "Horizontal"],
      rows: [
        ["Method", "Increase machine power", "Add more machines"],
        ["Limit", "Hardware bound", "Highly scalable"],
        ["Fault tolerance", "Low", "High"]
      ]
    }
  }
},

{
  id: "sd-b-05",
  level: "Basic",
  q: "What is Load Balancing?",
  a: "Load balancing distributes incoming traffic across multiple servers to improve availability and reliability."
},

{
  id: "sd-b-06",
  level: "Basic",
  q: "What is Latency?",
  a: "Latency is the time taken for a request to travel from client to server and back."
},

{
  id: "sd-b-07",
  level: "Basic",
  q: "What is Throughput?",
  a: "Throughput is the number of requests processed per unit time."
},

{
  id: "sd-b-08",
  level: "Basic",
  q: "What is a Monolithic Architecture?",
  a: "A monolith is a single deployable unit containing all components of the application."
},

{
  id: "sd-b-09",
  level: "Basic",
  q: "What is Microservices Architecture?",
  a: "Microservices split applications into independent, loosely coupled services."
},

{
  id: "sd-b-10",
  level: "Basic",
  q: "Monolith vs Microservices?",
  answer: {
    summary: "Different architectural trade-offs.",
    table: {
      title: "Monolith vs Microservices",
      headers: ["Aspect", "Monolith", "Microservices"],
      rows: [
        ["Deployment", "Single unit", "Independent services"],
        ["Scalability", "Limited", "Highly scalable"],
        ["Complexity", "Low initially", "Higher"]
      ]
    }
  }
},

{
  id: "sd-b-11",
  level: "Basic",
  q: "What is a Cache?",
  a: "Cache stores frequently accessed data in memory to reduce latency."
},

{
  id: "sd-b-12",
  level: "Basic",
  q: "Examples of caching systems?",
  a: "Redis, Memcached, CDN."
},

{
  id: "sd-b-13",
  level: "Basic",
  q: "What is a Database Index?",
  a: "Index improves query performance by reducing data lookup time."
},

{
  id: "sd-b-14",
  level: "Basic",
  q: "What is a CDN?",
  a: "Content Delivery Network caches static content closer to users."
},

{
  id: "sd-b-15",
  level: "Basic",
  q: "What is High Availability?",
  a: "High Availability ensures minimal downtime through redundancy and failover."
},

/* =====================================================
   INTERMEDIATE (20)
===================================================== */

{
  id: "sd-i-01",
  level: "Intermediate",
  q: "What is Database Sharding?",
  a: "Sharding splits data across multiple databases to scale horizontally."
},

{
  id: "sd-i-02",
  level: "Intermediate",
  q: "Sharding vs Replication?",
  answer: {
    summary: "Both improve performance differently.",
    table: {
      title: "Sharding vs Replication",
      headers: ["Aspect", "Sharding", "Replication"],
      rows: [
        ["Purpose", "Scalability", "Availability"],
        ["Data", "Partitioned", "Copied"],
        ["Write Scaling", "Yes", "No"]
      ]
    }
  }
},

{
  id: "sd-i-03",
  level: "Intermediate",
  q: "What is CAP Theorem?",
  a: "CAP states a distributed system can guarantee only two of Consistency, Availability, and Partition Tolerance."
},

{
  id: "sd-i-04",
  level: "Intermediate",
  q: "Explain Consistency vs Availability.",
  a: "Consistency returns the latest data; Availability always returns a response."
},

{
  id: "sd-i-05",
  level: "Intermediate",
  q: "What is Eventual Consistency?",
  a: "System becomes consistent over time without immediate synchronization."
},

{
  id: "sd-i-06",
  level: "Intermediate",
  q: "What is Message Queue?",
  a: "A queue enables asynchronous communication between services."
},

{
  id: "sd-i-07",
  level: "Intermediate",
  q: "Examples of message brokers?",
  a: "Kafka, RabbitMQ, SQS."
},

{
  id: "sd-i-08",
  level: "Intermediate",
  q: "What is Idempotency?",
  a: "Multiple identical requests produce the same result."
},

{
  id: "sd-i-09",
  level: "Intermediate",
  q: "Idempotency key example?",
  answer: {
    summary: "Used for safe retries.",
    code: `POST /payments
Headers:
Idempotency-Key: 123e4567`
  }
},

{
  id: "sd-i-10",
  level: "Intermediate",
  q: "What is Rate Limiting?",
  a: "Restricts number of requests per user or IP."
},

{
  id: "sd-i-11",
  level: "Intermediate",
  q: "Rate limiting algorithms?",
  a: "Token Bucket, Leaky Bucket, Fixed Window."
},

{
  id: "sd-i-12",
  level: "Intermediate",
  q: "What is API Gateway?",
  a: "Single entry point handling authentication, routing, throttling."
},

{
  id: "sd-i-13",
  level: "Intermediate",
  q: "What is Circuit Breaker?",
  a: "Prevents cascading failures by stopping calls to failing services."
},

{
  id: "sd-i-14",
  level: "Intermediate",
  q: "What is Service Discovery?",
  a: "Mechanism to locate services dynamically."
},

{
  id: "sd-i-15",
  level: "Intermediate",
  q: "What is Data Partitioning?",
  a: "Splitting data across nodes based on keys."
},

{
  id: "sd-i-16",
  level: "Intermediate",
  q: "What is Cache Invalidation?",
  a: "Removing stale data from cache."
},

{
  id: "sd-i-17",
  level: "Intermediate",
  q: "Cache eviction strategies?",
  a: "LRU, LFU, TTL."
},

{
  id: "sd-i-18",
  level: "Intermediate",
  q: "What is Read Replica?",
  a: "Database replica used only for read operations."
},

{
  id: "sd-i-19",
  level: "Intermediate",
  q: "What is Write Amplification?",
  a: "Extra writes caused by storage internals."
},

{
  id: "sd-i-20",
  level: "Intermediate",
  q: "What is Data Denormalization?",
  a: "Duplicating data to reduce joins and improve read performance."
},

/* =====================================================
   ADVANCED (15)
===================================================== */

{
  id: "sd-a-01",
  level: "Advanced",
  q: "How would you design URL Shortener?",
  a: "Use hashing/base62 IDs, cache hot URLs, DB for persistence, and load balancers."
},

{
  id: "sd-a-02",
  level: "Advanced",
  q: "How to generate unique IDs at scale?",
  a: "Snowflake IDs, UUIDs, database sequences."
},

{
  id: "sd-a-03",
  level: "Advanced",
  q: "What is Distributed Lock?",
  a: "Ensures mutual exclusion across distributed systems."
},

{
  id: "sd-a-04",
  level: "Advanced",
  q: "Distributed lock using Redis?",
  answer: {
    summary: "Using SETNX.",
    code: `SET resource_lock value NX EX 10`
  }
},

{
  id: "sd-a-05",
  level: "Advanced",
  q: "What is Saga Pattern?",
  a: "Manages distributed transactions via compensating actions."
},

{
  id: "sd-a-06",
  level: "Advanced",
  q: "Two Saga types?",
  a: "Choreography and Orchestration."
},

{
  id: "sd-a-07",
  level: "Advanced",
  q: "What is CQRS?",
  a: "Separates read and write models."
},

{
  id: "sd-a-08",
  level: "Advanced",
  q: "CQRS vs CRUD?",
  a: "CQRS improves scalability; CRUD is simpler."
},

{
  id: "sd-a-09",
  level: "Advanced",
  q: "What is Event Sourcing?",
  a: "State is stored as a sequence of events."
},

{
  id: "sd-a-10",
  level: "Advanced",
  q: "What is Backpressure?",
  a: "Mechanism to handle overload by slowing producers."
},

{
  id: "sd-a-11",
  level: "Advanced",
  q: "How to design notification system?",
  a: "Queue-based, async workers, retries, multi-channel delivery."
},

{
  id: "sd-a-12",
  level: "Advanced",
  q: "How to design chat application?",
  a: "WebSockets, message queues, sharding, presence service."
},

{
  id: "sd-a-13",
  level: "Advanced",
  q: "How to design payment system?",
  a: "Idempotency, strong consistency, audit logs, retries."
},

{
  id: "sd-a-14",
  level: "Advanced",
  q: "How to design search system?",
  a: "Indexing, inverted index, ranking, caching."
},

{
  id: "sd-a-15",
  level: "Advanced",
  q: "Common system design interview mistakes?",
  a: "Ignoring scale, skipping trade-offs, over-engineering."
}

];
