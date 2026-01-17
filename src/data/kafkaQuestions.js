export const KAFKA_QUESTIONS = [

/* =====================================================
   BASIC (20)
===================================================== */

{
  id: "kf-b-01",
  level: "Basic",
  q: "What is Apache Kafka?",
  a: "Apache Kafka is a distributed event-streaming platform used for high-throughput, fault-tolerant, real-time data streaming."
},

{
  id: "kf-b-02",
  level: "Basic",
  q: "What are the core components of Kafka?",
  a: "Producer, Broker, Topic, Partition, Consumer, Consumer Group, Zookeeper/KRaft."
},

{
  id: "kf-b-03",
  level: "Basic",
  q: "What is a topic?",
  a: "A topic is a logical channel to which producers send messages and consumers read messages."
},

{
  id: "kf-b-04",
  level: "Basic",
  q: "What is a partition?",
  a: "A partition is a unit of parallelism within a topic that stores records in an ordered, immutable sequence."
},

{
  id: "kf-b-05",
  level: "Basic",
  q: "Why are partitions important?",
  a: "Partitions enable scalability, parallelism, and fault tolerance."
},

{
  id: "kf-b-06",
  level: "Basic",
  q: "What is a Kafka broker?",
  a: "A broker is a Kafka server that stores data and serves client requests."
},

{
  id: "kf-b-07",
  level: "Basic",
  q: "What is a producer?",
  a: "A producer publishes messages to Kafka topics."
},

{
  id: "kf-b-08",
  level: "Basic",
  q: "What is a consumer?",
  a: "A consumer reads messages from Kafka topics."
},

{
  id: "kf-b-09",
  level: "Basic",
  q: "What is a consumer group?",
  a: "A consumer group is a set of consumers that share the load of consuming partitions."
},

{
  id: "kf-b-10",
  level: "Basic",
  q: "Kafka consumer group example?",
  answer: {
    summary: "Consumers in a group share partitions.",
    table: {
      title: "Consumer Group Behavior",
      headers: ["Consumers", "Partitions", "Result"],
      rows: [
        ["2", "4", "Each consumes 2 partitions"],
        ["4", "4", "Each consumes 1 partition"],
        ["6", "4", "2 consumers idle"]
      ]
    }
  }
},

{
  id: "kf-b-11",
  level: "Basic",
  q: "What is an offset?",
  a: "Offset is the position of a message within a partition."
},

{
  id: "kf-b-12",
  level: "Basic",
  q: "Who manages offsets?",
  a: "Kafka stores offsets in an internal topic called __consumer_offsets."
},

{
  id: "kf-b-13",
  level: "Basic",
  q: "What is message retention?",
  a: "Kafka retains messages based on time or size, regardless of consumption."
},

{
  id: "kf-b-14",
  level: "Basic",
  q: "What is replication factor?",
  a: "Replication factor defines how many copies of data exist across brokers."
},

{
  id: "kf-b-15",
  level: "Basic",
  q: "What is leader and follower?",
  a: "Leader handles reads/writes; followers replicate data for fault tolerance."
},

{
  id: "kf-b-16",
  level: "Basic",
  q: "What is ISR?",
  a: "In-Sync Replicas (ISR) are replicas fully caught up with the leader."
},

{
  id: "kf-b-17",
  level: "Basic",
  q: "What serialization formats does Kafka support?",
  a: "JSON, Avro, Protobuf, String, ByteArray."
},

{
  id: "kf-b-18",
  level: "Basic",
  q: "What is Kafka used for?",
  a: "Event streaming, log aggregation, messaging, real-time analytics."
},

{
  id: "kf-b-19",
  level: "Basic",
  q: "Is Kafka push or pull based?",
  a: "Kafka uses a pull-based consumer model."
},

{
  id: "kf-b-20",
  level: "Basic",
  q: "Kafka vs traditional message queue?",
  answer: {
    summary: "Kafka differs significantly from traditional MQs.",
    table: {
      title: "Kafka vs MQ",
      headers: ["Aspect", "Kafka", "Traditional MQ"],
      rows: [
        ["Retention", "Time-based", "Message-based"],
        ["Throughput", "Very high", "Moderate"],
        ["Replay", "Yes", "Limited"]
      ]
    }
  }
},

/* =====================================================
   INTERMEDIATE (20)
===================================================== */

{
  id: "kf-i-01",
  level: "Intermediate",
  q: "Explain Kafka message delivery semantics.",
  answer: {
    summary: "Kafka supports multiple delivery guarantees.",
    table: {
      title: "Delivery Semantics",
      headers: ["Type", "Description"],
      rows: [
        ["At most once", "Message may be lost"],
        ["At least once", "Message may be duplicated"],
        ["Exactly once", "No loss or duplication"]
      ]
    }
  }
},

{
  id: "kf-i-02",
  level: "Intermediate",
  q: "How does Kafka ensure ordering?",
  a: "Ordering is guaranteed only within a partition."
},

{
  id: "kf-i-03",
  level: "Intermediate",
  q: "How do you achieve exactly-once semantics?",
  a: "Using idempotent producers and transactional APIs."
},

{
  id: "kf-i-04",
  level: "Intermediate",
  q: "Producer example in Java?",
  answer: {
    summary: "Simple Kafka producer.",
    code: `Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

KafkaProducer<String, String> producer = new KafkaProducer<>(props);
producer.send(new ProducerRecord<>("test-topic", "key", "Hello Kafka"));
producer.close();`
  }
},

{
  id: "kf-i-05",
  level: "Intermediate",
  q: "Consumer example in Java?",
  answer: {
    summary: "Basic Kafka consumer.",
    code: `KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
consumer.subscribe(List.of("test-topic"));

while (true) {
  ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
  for (ConsumerRecord<String, String> record : records) {
    System.out.println(record.value());
  }
}`
  }
},

{
  id: "kf-i-06",
  level: "Intermediate",
  q: "What is rebalance?",
  a: "Rebalance redistributes partitions among consumers when group membership changes."
},

{
  id: "kf-i-07",
  level: "Intermediate",
  q: "What causes rebalance?",
  a: "Consumer join/leave, partition change, heartbeat timeout."
},

{
  id: "kf-i-08",
  level: "Intermediate",
  q: "How to minimize rebalances?",
  a: "Use cooperative rebalancing and tune session timeouts."
},

{
  id: "kf-i-09",
  level: "Intermediate",
  q: "What is log compaction?",
  a: "Retains only the latest record per key."
},

{
  id: "kf-i-10",
  level: "Intermediate",
  q: "When to use log compaction?",
  a: "For changelog or state topics."
},

{
  id: "kf-i-11",
  level: "Intermediate",
  q: "What is Kafka Streams?",
  a: "Library for building stream-processing applications."
},

{
  id: "kf-i-12",
  level: "Intermediate",
  q: "Kafka Streams vs Consumer API?",
  a: "Streams provides higher-level abstractions and stateful processing."
},

{
  id: "kf-i-13",
  level: "Intermediate",
  q: "What is Schema Registry?",
  a: "Manages Avro/Protobuf schemas and compatibility."
},

{
  id: "kf-i-14",
  level: "Intermediate",
  q: "What is idempotent producer?",
  a: "Ensures no duplicate messages during retries."
},

{
  id: "kf-i-15",
  level: "Intermediate",
  q: "What is a dead-letter topic?",
  a: "Stores failed messages for later inspection."
},

{
  id: "kf-i-16",
  level: "Intermediate",
  q: "Kafka vs RabbitMQ?",
  answer: {
    summary: "Comparison of Kafka and RabbitMQ.",
    table: {
      title: "Kafka vs RabbitMQ",
      headers: ["Aspect", "Kafka", "RabbitMQ"],
      rows: [
        ["Throughput", "High", "Medium"],
        ["Persistence", "Disk-based", "Memory-based"],
        ["Replay", "Yes", "No"]
      ]
    }
  }
},

{
  id: "kf-i-17",
  level: "Intermediate",
  q: "How does Kafka handle failures?",
  a: "Replication, leader election, ISR monitoring."
},

{
  id: "kf-i-18",
  level: "Intermediate",
  q: "What is commit offset?",
  a: "Marks processed records for a consumer."
},

{
  id: "kf-i-19",
  level: "Intermediate",
  q: "Auto vs manual offset commit?",
  a: "Auto commits automatically; manual gives control and reliability."
},

{
  id: "kf-i-20",
  level: "Intermediate",
  q: "What is lag?",
  a: "Difference between latest offset and consumer offset."
},

/* =====================================================
   ADVANCED (10)
===================================================== */

{
  id: "kf-a-01",
  level: "Advanced",
  q: "Explain Kafka architecture in detail.",
  a: "Kafka consists of producers, brokers, topics, partitions, replicas, and consumers coordinated via Zookeeper/KRaft."
},

{
  id: "kf-a-02",
  level: "Advanced",
  q: "What is KRaft?",
  a: "Kafka’s internal consensus protocol replacing Zookeeper."
},

{
  id: "kf-a-03",
  level: "Advanced",
  q: "How does Kafka ensure durability?",
  a: "Writes to disk, replication, fsync, ISR acknowledgment."
},

{
  id: "kf-a-04",
  level: "Advanced",
  q: "How to design Kafka for high throughput?",
  a: "Increase partitions, batch messages, compression, async producers."
},

{
  id: "kf-a-05",
  level: "Advanced",
  q: "How to design Kafka for low latency?",
  a: "Reduce batching, tune linger.ms, fast storage."
},

{
  id: "kf-a-06",
  level: "Advanced",
  q: "What is transactional Kafka?",
  a: "Allows atomic writes across multiple partitions/topics."
},

{
  id: "kf-a-07",
  level: "Advanced",
  q: "What happens if a leader fails?",
  a: "One ISR replica becomes leader automatically."
},

{
  id: "kf-a-08",
  level: "Advanced",
  q: "How does Kafka scale?",
  a: "Horizontally by adding brokers and partitions."
},

{
  id: "kf-a-09",
  level: "Advanced",
  q: "How to secure Kafka?",
  a: "SSL, SASL, ACLs, RBAC."
},

{
  id: "kf-a-10",
  level: "Advanced",
  q: "How do you monitor Kafka?",
  a: "Lag monitoring, JMX metrics, Prometheus, Grafana."
}

];
