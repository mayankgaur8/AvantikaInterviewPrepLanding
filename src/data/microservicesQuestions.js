export const MICROSERVICES_QUESTIONS = [

/* =====================================================
   BASIC – 20 QUESTIONS
===================================================== */

{
  id: "ms-b-01",
  level: "Basic",
  q: "What are Microservices?",
  a: "Microservices are an architectural style where an application is built as a collection of small, independent, loosely coupled services."
},

{
  id: "ms-b-02",
  level: "Basic",
  q: "How do Microservices differ from Monolithic architecture?",
  a: "Monoliths are single deployable units, while microservices are independently deployable services."
},

{
  id: "ms-b-03",
  level: "Basic",
  q: "What are the key characteristics of Microservices?",
  a: "Independent deployment, decentralized data, scalability, fault isolation, and technology heterogeneity."
},

{
  id: "ms-b-04",
  level: "Basic",
  q: "What is service autonomy?",
  a: "Each microservice can be developed, deployed, and scaled independently."
},

{
  id: "ms-b-05",
  level: "Basic",
  q: "What communication styles are used in Microservices?",
  a: "Synchronous (REST/gRPC) and asynchronous (Kafka, RabbitMQ, events)."
},

{
  id: "ms-b-06",
  level: "Basic",
  q: "What is API Gateway?",
  a: "A single entry point that routes requests to backend services and handles cross-cutting concerns."
},

{
  id: "ms-b-07",
  level: "Basic",
  q: "Why is database-per-service recommended?",
  a: "To ensure loose coupling and independent scalability of services."
},

{
  id: "ms-b-08",
  level: "Basic",
  q: "What is service discovery?",
  a: "A mechanism for locating services dynamically using a registry (Eureka, Consul)."
},

{
  id: "ms-b-09",
  level: "Basic",
  q: "What is Spring Cloud?",
  a: "A framework providing tools for building microservices such as config server, discovery, gateway, and resilience."
},

{
  id: "ms-b-10",
  level: "Basic",
  q: "What is a Config Server?",
  a: "Centralized configuration management for all microservices."
},

{
  id: "ms-b-11",
  level: "Basic",
  q: "What is statelessness in microservices?",
  a: "Services do not store client session state; state is externalized."
},

{
  id: "ms-b-12",
  level: "Basic",
  q: "What is horizontal scaling?",
  a: "Adding more service instances instead of increasing machine size."
},

{
  id: "ms-b-13",
  level: "Basic",
  q: "What is Docker’s role in microservices?",
  a: "Packages services with dependencies into portable containers."
},

{
  id: "ms-b-14",
  level: "Basic",
  q: "What is Kubernetes?",
  a: "A container orchestration platform for deploying and scaling microservices."
},

{
  id: "ms-b-15",
  level: "Basic",
  q: "What is REST commonly used for in microservices?",
  a: "Synchronous inter-service communication."
},

{
  id: "ms-b-16",
  level: "Basic",
  q: "Simple Spring Boot microservice example?",
  answer: {
    summary: "A basic REST-based microservice.",
    codeTitle: "Spring Boot Microservice",
    code: `@RestController
@RequestMapping("/api/users")
public class UserController {

  @GetMapping("/{id}")
  public User getUser(@PathVariable Long id) {
    return new User(id, "John");
  }
}`
  }
},

{
  id: "ms-b-17",
  level: "Basic",
  q: "What is loose coupling?",
  a: "Services interact with minimal dependency on internal implementation."
},

{
  id: "ms-b-18",
  level: "Basic",
  q: "What is service resilience?",
  a: "Ability to continue functioning despite failures."
},

{
  id: "ms-b-19",
  level: "Basic",
  q: "What is cloud-native microservices?",
  a: "Microservices designed for cloud platforms using containers and orchestration."
},

{
  id: "ms-b-20",
  level: "Basic",
  q: "What are common microservice challenges?",
  a: "Distributed debugging, latency, data consistency, and operational complexity."
},

/* =====================================================
   INTERMEDIATE – 20 QUESTIONS
===================================================== */

{
  id: "ms-i-01",
  level: "Intermediate",
  q: "What is synchronous vs asynchronous communication?",
  a: "Synchronous waits for response; asynchronous uses events or messages without blocking."
},

{
  id: "ms-i-02",
  level: "Intermediate",
  q: "What is Circuit Breaker pattern?",
  a: "Prevents cascading failures by stopping calls to failing services."
},

{
  id: "ms-i-03",
  level: "Intermediate",
  q: "Circuit breaker example?",
  answer: {
    summary: "Using Resilience4j in Spring Boot.",
    codeTitle: "Circuit Breaker Example",
    code: `@CircuitBreaker(name = "userService", fallbackMethod = "fallback")
public User getUser(Long id) {
  return restTemplate.getForObject("/users/" + id, User.class);
}

public User fallback(Long id, Exception ex) {
  return new User(id, "Default User");
}`
  }
},

{
  id: "ms-i-04",
  level: "Intermediate",
  q: "What is Load Balancing?",
  a: "Distributing traffic across service instances."
},

{
  id: "ms-i-05",
  level: "Intermediate",
  q: "Client-side vs Server-side load balancing?",
  a: "Client-side uses service registry; server-side uses a load balancer like NGINX."
},

{
  id: "ms-i-06",
  level: "Intermediate",
  q: "What is API Gateway responsibility?",
  a: "Authentication, routing, rate limiting, monitoring."
},

{
  id: "ms-i-07",
  level: "Intermediate",
  q: "What is Distributed Configuration?",
  a: "Centralized config shared across services (Spring Cloud Config)."
},

{
  id: "ms-i-08",
  level: "Intermediate",
  q: "What is service-to-service security?",
  a: "Securing internal calls using mTLS or OAuth2."
},

{
  id: "ms-i-09",
  level: "Intermediate",
  q: "What is Saga pattern?",
  a: "Manages distributed transactions using compensating actions."
},

{
  id: "ms-i-10",
  level: "Intermediate",
  q: "Choreography vs Orchestration?",
  a: "Choreography uses events; orchestration uses a central controller."
},

{
  id: "ms-i-11",
  level: "Intermediate",
  q: "What is eventual consistency?",
  a: "Data becomes consistent over time across services."
},

{
  id: "ms-i-12",
  level: "Intermediate",
  q: "How do you handle failures in microservices?",
  a: "Retries, timeouts, circuit breakers, bulkheads."
},

{
  id: "ms-i-13",
  level: "Intermediate",
  q: "What is message-driven microservices?",
  a: "Services communicate via events/messages instead of REST."
},

{
  id: "ms-i-14",
  level: "Intermediate",
  q: "Kafka’s role in microservices?",
  a: "Event streaming, decoupling producers and consumers."
},

{
  id: "ms-i-15",
  level: "Intermediate",
  q: "What is schema evolution in events?",
  a: "Managing backward/forward compatibility of messages."
},

{
  id: "ms-i-16",
  level: "Intermediate",
  q: "How do you manage logs?",
  a: "Centralized logging using ELK/EFK stack."
},

{
  id: "ms-i-17",
  level: "Intermediate",
  q: "What is distributed tracing?",
  a: "Tracking requests across services using trace IDs."
},

{
  id: "ms-i-18",
  level: "Intermediate",
  q: "Tools for tracing?",
  a: "Zipkin, Jaeger, OpenTelemetry."
},

{
  id: "ms-i-19",
  level: "Intermediate",
  q: "What is rate limiting?",
  a: "Restricting number of requests per client."
},

{
  id: "ms-i-20",
  level: "Intermediate",
  q: "How do you deploy microservices?",
  a: "Using CI/CD pipelines, containers, and Kubernetes."
},

/* =====================================================
   ADVANCED – 10 QUESTIONS
===================================================== */

{
  id: "ms-a-01",
  level: "Advanced",
  q: "How do you design microservices for high availability?",
  a: "Stateless services, replication, load balancing, and health checks."
},

{
  id: "ms-a-02",
  level: "Advanced",
  q: "How do you handle data consistency?",
  a: "Saga pattern, eventual consistency, and idempotent operations."
},

{
  id: "ms-a-03",
  level: "Advanced",
  q: "What is Bulkhead pattern?",
  a: "Isolates failures by partitioning resources."
},

{
  id: "ms-a-04",
  level: "Advanced",
  q: "How do you secure microservices end-to-end?",
  a: "OAuth2, JWT, mTLS, API Gateway, zero trust."
},

{
  id: "ms-a-05",
  level: "Advanced",
  q: "What is service mesh?",
  a: "Infrastructure layer for service communication (Istio, Linkerd)."
},

{
  id: "ms-a-06",
  level: "Advanced",
  q: "Service mesh vs API Gateway?",
  a: "Gateway handles north-south traffic; mesh handles east-west traffic."
},

{
  id: "ms-a-07",
  level: "Advanced",
  q: "How do you implement blue-green deployment?",
  a: "Deploy new version alongside old, then switch traffic."
},

{
  id: "ms-a-08",
  level: "Advanced",
  q: "How do you manage backward compatibility?",
  a: "Versioned APIs, tolerant readers, contract testing."
},

{
  id: "ms-a-09",
  level: "Advanced",
  q: "What is contract testing?",
  a: "Ensures service compatibility using tools like Pact."
},

{
  id: "ms-a-10",
  level: "Advanced",
  q: "How do you observe microservices in production?",
  a: "Metrics, logs, traces, alerts, dashboards."
}

];
