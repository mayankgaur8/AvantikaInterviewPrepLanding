// 50 Kafka MCQs – Easy / Medium / Advanced

export const KAFKA_MCQ = [

  // ================= EASY (1–17) =================
  {
    id: "kafka-mcq-1",
    tag: "Kafka • Easy",
    q: "What is Apache Kafka?",
    options: [
      "Message queue",
      "Distributed streaming platform",
      "Database",
      "Web server"
    ],
    answer: 1,
    explain: "Kafka is a distributed event streaming platform."
  },
  {
    id: "kafka-mcq-2",
    tag: "Kafka • Easy",
    q: "Kafka is primarily used for?",
    options: [
      "Batch processing",
      "Event streaming",
      "Data storage",
      "UI rendering"
    ],
    answer: 1,
    explain: "Kafka is designed for real-time event streaming."
  },
  {
    id: "kafka-mcq-3",
    tag: "Kafka • Easy",
    q: "What is a Kafka topic?",
    options: [
      "Database table",
      "Stream of records",
      "Consumer group",
      "Partition leader"
    ],
    answer: 1,
    explain: "A topic is a stream of records."
  },
  {
    id: "kafka-mcq-4",
    tag: "Kafka • Easy",
    q: "Who publishes messages to Kafka?",
    options: ["Broker", "Consumer", "Producer", "Zookeeper"],
    answer: 2,
    explain: "Producers publish messages to Kafka topics."
  },
  {
    id: "kafka-mcq-5",
    tag: "Kafka • Easy",
    q: "Who reads messages from Kafka?",
    options: ["Producer", "Consumer", "Broker", "Controller"],
    answer: 1,
    explain: "Consumers read messages from Kafka."
  },
  {
    id: "kafka-mcq-6",
    tag: "Kafka • Easy",
    q: "Kafka stores data in?",
    options: ["Memory only", "Database", "Log files", "Cache"],
    answer: 2,
    explain: "Kafka stores data as append-only logs."
  },
  {
    id: "kafka-mcq-7",
    tag: "Kafka • Easy",
    q: "Which language is Kafka written in?",
    options: ["Python", "Go", "Java/Scala", "C++"],
    answer: 2,
    explain: "Kafka is written in Java and Scala."
  },
  {
    id: "kafka-mcq-8",
    tag: "Kafka • Easy",
    q: "Kafka is designed to be?",
    options: ["Low throughput", "Highly scalable", "Single node", "Blocking"],
    answer: 1,
    explain: "Kafka is horizontally scalable."
  },
  {
    id: "kafka-mcq-9",
    tag: "Kafka • Easy",
    q: "Which component stores messages?",
    options: ["Producer", "Consumer", "Broker", "Zookeeper"],
    answer: 2,
    explain: "Brokers store messages."
  },
  {
    id: "kafka-mcq-10",
    tag: "Kafka • Easy",
    q: "Kafka messages are called?",
    options: ["Events", "Packets", "Rows", "Tuples"],
    answer: 0,
    explain: "Kafka messages are called events."
  },

  // ================= MEDIUM (11–33) =================
  {
    id: "kafka-mcq-11",
    tag: "Kafka • Medium",
    q: "What is a Kafka partition?",
    options: [
      "Topic backup",
      "Unit of parallelism",
      "Consumer group",
      "Replication factor"
    ],
    answer: 1,
    explain: "Partitions enable parallel processing."
  },
  {
    id: "kafka-mcq-12",
    tag: "Kafka • Medium",
    q: "What ensures message ordering in Kafka?",
    options: ["Topic", "Partition", "Consumer group", "Broker"],
    answer: 1,
    explain: "Ordering is guaranteed within a partition."
  },
  {
    id: "kafka-mcq-13",
    tag: "Kafka • Medium",
    q: "What is a consumer group?",
    options: [
      "Set of brokers",
      "Set of producers",
      "Set of consumers sharing load",
      "Replication strategy"
    ],
    answer: 2,
    explain: "Consumers in same group share partitions."
  },
  {
    id: "kafka-mcq-14",
    tag: "Kafka • Medium",
    q: "Which component manages metadata in Kafka (pre-KRaft)?",
    options: ["Broker", "Zookeeper", "Controller", "Schema Registry"],
    answer: 1,
    explain: "Zookeeper managed Kafka metadata earlier."
  },
  {
    id: "kafka-mcq-15",
    tag: "Kafka • Medium",
    q: "What is offset in Kafka?",
    options: [
      "Partition id",
      "Message position",
      "Consumer id",
      "Topic name"
    ],
    answer: 1,
    explain: "Offset is the position of a message in a partition."
  },
  {
    id: "kafka-mcq-16",
    tag: "Kafka • Medium",
    q: "Kafka retention is based on?",
    options: [
      "Message count",
      "Time or size",
      "Consumer read",
      "Partition count"
    ],
    answer: 1,
    explain: "Retention depends on time or log size."
  },
  {
    id: "kafka-mcq-17",
    tag: "Kafka • Medium",
    q: "What is replication factor?",
    options: [
      "Consumers per topic",
      "Copies of partitions",
      "Broker count",
      "Offset count"
    ],
    answer: 1,
    explain: "Replication factor defines number of partition replicas."
  },
  {
    id: "kafka-mcq-18",
    tag: "Kafka • Medium",
    q: "Which guarantees durability?",
    options: [
      "ACKS",
      "Compression",
      "Batching",
      "Retries"
    ],
    answer: 0,
    explain: "ACKS controls durability guarantees."
  },
  {
    id: "kafka-mcq-19",
    tag: "Kafka • Medium",
    q: "What does acks=all mean?",
    options: [
      "Only leader acknowledges",
      "No acknowledgments",
      "All replicas acknowledge",
      "Only consumer acknowledges"
    ],
    answer: 2,
    explain: "acks=all waits for all replicas."
  },

  // ================= ADVANCED (34–50) =================
  {
    id: "kafka-mcq-34",
    tag: "Kafka • Advanced",
    q: "What delivery guarantee does Kafka support?",
    options: [
      "At-most-once",
      "At-least-once",
      "Exactly-once",
      "All of the above"
    ],
    answer: 3,
    explain: "Kafka supports all delivery semantics."
  },
  {
    id: "kafka-mcq-35",
    tag: "Kafka • Advanced",
    q: "Exactly-once semantics is achieved using?",
    options: [
      "Idempotent producers",
      "Transactions",
      "Offset commits",
      "All of the above"
    ],
    answer: 3,
    explain: "Kafka uses idempotence + transactions."
  },
  {
    id: "kafka-mcq-36",
    tag: "Kafka • Advanced",
    q: "What is Kafka Streams?",
    options: [
      "Consumer API",
      "Stream processing library",
      "Message broker",
      "Schema tool"
    ],
    answer: 1,
    explain: "Kafka Streams is a stream processing library."
  },
  {
    id: "kafka-mcq-37",
    tag: "Kafka • Advanced",
    q: "What is log compaction?",
    options: [
      "Deletes all data",
      "Keeps latest key value",
      "Compresses logs",
      "Moves data to disk"
    ],
    answer: 1,
    explain: "Compaction keeps latest value per key."
  },
  {
    id: "kafka-mcq-38",
    tag: "Kafka • Advanced",
    q: "Which API enables cross-cluster replication?",
    options: [
      "Kafka Streams",
      "MirrorMaker",
      "Kafka Connect",
      "Zookeeper"
    ],
    answer: 1,
    explain: "MirrorMaker replicates data across clusters."
  },
  {
    id: "kafka-mcq-39",
    tag: "Kafka • Advanced",
    q: "What replaces Zookeeper in Kafka 3.x?",
    options: ["KRaft", "RaftDB", "MetaStore", "Controller API"],
    answer: 0,
    explain: "KRaft removes Zookeeper dependency."
  },
  {
    id: "kafka-mcq-40",
    tag: "Kafka • Advanced",
    q: "What is ISR?",
    options: [
      "In-sync replicas",
      "Internal storage region",
      "Initial startup routine",
      "Input stream reader"
    ],
    answer: 0,
    explain: "ISR means In-Sync Replicas."
  },
  {
    id: "kafka-mcq-41",
    tag: "Kafka • Advanced",
    q: "Which API integrates external systems?",
    options: [
      "Kafka Streams",
      "Kafka Connect",
      "MirrorMaker",
      "Consumer API"
    ],
    answer: 1,
    explain: "Kafka Connect integrates with external systems."
  },
  {
    id: "kafka-mcq-42",
    tag: "Kafka • Advanced",
    q: "What causes rebalancing?",
    options: [
      "Consumer crash",
      "New consumer joins",
      "Partition count change",
      "All of the above"
    ],
    answer: 3,
    explain: "All listed events cause rebalance."
  },
  {
    id: "kafka-mcq-43",
    tag: "Kafka • Advanced",
    q: "Why is Kafka high-throughput?",
    options: [
      "Zero copy",
      "Sequential disk I/O",
      "Batching",
      "All of the above"
    ],
    answer: 3,
    explain: "Kafka optimizes I/O heavily."
  }
];
