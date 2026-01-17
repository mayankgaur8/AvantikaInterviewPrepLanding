const microservices = [
  {
    id: 'micro-1',
    title: 'Design a product details HTTP API',
    statement: 'Design and implement a simple microservice that exposes GET /products/{id} returning product JSON (id,name,price). Include controller and in-memory storage.',
    language: 'java',
    solution: `// Controller + simple store (sketch)\n@RestController\npublic class ProductController {\n  private final Map<Long,Product> store = new ConcurrentHashMap<>();\n  @GetMapping("/products/{id}")\n  public ResponseEntity<Product> get(@PathVariable Long id){ return Optional.ofNullable(store.get(id)).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build()); }\n}`
  },
  {
    id: 'micro-2',
    title: 'Service-to-service REST call with retries',
    statement: 'Show how one service calls another via HTTP and add retry with exponential backoff.',
    language: 'java',
    solution: `WebClient.create("http://catalog").get().uri("/items/1").retrieve().bodyToMono(Item.class).retryWhen(Retry.backoff(3, Duration.ofMillis(100)));`
  },
  {
    id: 'micro-3',
    title: 'Circuit breaker around remote calls',
    statement: 'Wrap a remote call with a circuit breaker and fallback to a cached value.',
    language: 'java',
    solution: `@CircuitBreaker(name="remote", fallbackMethod="fallback")\npublic Item fetch(){ return remoteClient.get(); }\npublic Item fallback(Throwable t){ return cache.getLatest(); }`
  },
  {
    id: 'micro-4',
    title: 'Idempotent POST',
    statement: 'Implement idempotent POST by accepting an Idempotency-Key header and deduping requests.',
    language: 'text',
    solution: `Store (idempotencyKey -> response) in a durable store. On POST: if key exists return stored response, else process and store result before returning.`
  },
  {
    id: 'micro-5',
    title: 'Health check endpoint',
    statement: 'Add a /health endpoint that checks DB connectivity and cache availability, returning aggregated status.',
    language: 'java',
    solution: `// Actuator HealthIndicator style\npublic Health health(){ boolean db=checkDb(); boolean cache=checkCache(); return (db && cache) ? Health.up().build() : Health.down().withDetail("db",db).withDetail("cache",cache).build(); }`
  },
  {
    id: 'micro-6',
    title: 'Service discovery (Eureka client)',
    statement: 'Show how a service registers with Eureka and discovers another service by name.',
    language: 'java',
    solution: `@EnableEurekaClient\n// Use RestTemplate with load-balanced discovery: @LoadBalanced RestTemplate rt; rt.getForObject("http://products/products/1",Product.class);`
  },
  {
    id: 'micro-7',
    title: 'API Gateway routing',
    statement: 'Configure an API Gateway to route /api/products/** to product service and /api/orders/** to order service.',
    language: 'text',
    solution: `Use gateway routes: path /api/products/** -> product-service; rewrite prefix; add auth filter. In Spring Cloud Gateway use RouteLocatorBuilder to map routes.`
  },
  {
    id: 'micro-8',
    title: 'Request tracing with correlation id',
    statement: 'Propagate a correlation ID through multiple services and include it in logs.',
    language: 'java',
    solution: `Read X-Correlation-Id header (generate if missing), put in MDC (logging context) and forward header on outgoing requests.`
  },
  {
    id: 'micro-9',
    title: 'Distributed tracing integration (Zipkin/OpenTelemetry)',
    statement: 'Instrument services to emit traces and visualize in Zipkin or Jaeger.',
    language: 'text',
    solution: `Add OpenTelemetry/Brave instrumentation, export spans to collector/Zipkin, ensure HTTP client and server are instrumented to create spans.`
  },
  {
    id: 'micro-10',
    title: 'Event-driven communication (publish/subscribe)',
    statement: 'Publish domain events (product.created) to a message broker and create a consumer that updates a read model.',
    language: 'text',
    solution: `Producer publishes JSON event to topic; consumer subscribes, processes event and updates local view/db. Use ack semantics and idempotency handling.`
  },
  {
    id: 'micro-11',
    title: 'Exactly-once vs at-least-once',
    statement: 'Explain and implement idempotent consumer design for at-least-once message delivery.',
    language: 'text',
    solution: `Store processed message IDs in a dedup store; on receiving message, check store, skip if seen, else process and record ID atomically with result.`
  },
  {
    id: 'micro-12',
    title: 'Database per service pattern',
    statement: 'Demonstrate how each microservice owns its database and how to perform queries needing data from multiple services.',
    language: 'text',
    solution: `Avoid direct DB joins across services. Use API composition or maintain a materialized read model via events to serve aggregated queries.`
  },
  {
    id: 'micro-13',
    title: 'SAGA pattern (choreography)',
    statement: 'Implement a simple saga for order placement: reserve inventory, charge payment, confirm order; compensate on failures.',
    language: 'text',
    solution: `Use events: OrderCreated -> InventoryReserved / PaymentCharged -> OrderConfirmed; if Payment fails, publish InventoryRelease event to compensate.`
  },
  {
    id: 'micro-14',
    title: 'SAGA pattern (orchestration)',
    statement: 'Implement saga orchestrator that coordinates distributed transactions and handles retries/compensations.',
    language: 'text',
    solution: `Orchestrator service issues commands and listens to replies; on failure calls compensating commands in reverse order; persist saga state.`
  },
  {
    id: 'micro-15',
    title: 'Consumer-driven contract testing',
    statement: 'Set up a contract test between consumer and provider (e.g., Pact) to validate provider responses.',
    language: 'text',
    solution: `Consumer defines expectations (Pact), provider runs provider tests against contract stub; integrate into CI so breaking changes fail pipeline.`
  },
  {
    id: 'micro-16',
    title: 'API versioning strategy',
    statement: 'Show options to version APIs (URI v1/v2, header) and implement a simple versioned controller.',
    language: 'java',
    solution: `@RequestMapping("/v1/products") for v1 controller and /v2/products for v2; or use Accept header strategies with content negotiation.`
  },
  {
    id: 'micro-17',
    title: 'Rate limiting gateway',
    statement: 'Implement per-API rate limiting at the gateway using a token bucket and Redis.',
    language: 'text',
    solution: `Use Redis INCR with TTL or Lua script to implement rate counters per key; reject requests when limit exceeded; integrate into gateway filter.`
  },
  {
    id: 'micro-18',
    title: 'Backpressure and throttling',
    statement: 'Show how a service can apply backpressure when downstream is slow using HTTP 429 or retry-after.',
    language: 'text',
    solution: `Detect downstream slowness and respond 429 with Retry-After or queue request and process later; use client-side retries with jitter.`
  },
  {
    id: 'micro-19',
    title: 'Bulkhead isolation',
    statement: 'Isolate resources per operation to prevent a failing subsystem from exhausting all resources.',
    language: 'text',
    solution: `Use separate thread pools/connection pools per downstream dependency so one slow dependency cannot block others.`
  },
  {
    id: 'micro-20',
    title: 'Circuit breaker metrics and dashboard',
    statement: 'Expose circuit breaker metrics for dashboarding and alerting.',
    language: 'text',
    solution: `Export breaker state/counts (success/failure/short-circuit) via metrics (Prometheus) and create dashboards/alerts based on error rates.`
  },
  {
    id: 'micro-21',
    title: 'Graceful instance shutdown',
    statement: 'Ensure a service deregisters from discovery and finishes in-flight requests on SIGTERM.',
    language: 'text',
    solution: `On SIGTERM stop accepting new requests, deregister from discovery, wait for existing requests to finish with timeout, then exit.`
  },
  {
    id: 'micro-22',
    title: 'Blue-green deployment flow',
    statement: 'Describe and implement the steps for a blue-green deployment of a service behind a load balancer.',
    language: 'text',
    solution: `Deploy green alongside blue, run smoke tests, switch router/LB to green, keep blue as rollback, then drain and remove blue when stable.`
  },
  {
    id: 'micro-23',
    title: 'Canary release implementation',
    statement: 'Route a small portion of traffic to a new version for validation before full rollout.',
    language: 'text',
    solution: `Use gateway or service mesh weights to route e.g., 5% traffic to canary; monitor errors/latency; increase gradually or rollback.`
  },
  {
    id: 'micro-24',
    title: 'Service mesh sidecar usage',
    statement: 'Explain how a service mesh sidecar (Istio/Envoy) handles retry, TLS, and observability without code changes.',
    language: 'text',
    solution: `Configure policies in mesh (retry, circuit-breaker, mTLS) and Envoy proxies handle traffic; telemetry is emitted automatically to tracing/metrics.`
  },
  {
    id: 'micro-25',
    title: 'Centralized logging with correlation',
    statement: 'Push structured logs to a central system (ELK/EFK) and include correlation id and service name.',
    language: 'text',
    solution: `Log JSON with fields {ts,service,correlationId,level,message}. Forward to Logstash/Fluentd then to Elasticsearch or Loki for querying.`
  },
  {
    id: 'micro-26',
    title: 'Database sharding vs partitioning',
    statement: 'Explain differences and when to choose sharding vs logical partitioning for a microservice DB.',
    language: 'text',
    solution: `Partitioning divides tables within DB instance (range/hash); sharding spreads data across multiple DB instances—use sharding for very high scale and independent failure domains.`
  },
  {
    id: 'micro-27',
    title: 'Event sourcing basics',
    statement: 'Sketch an event-sourced service storing events instead of current state and building read models.',
    language: 'text',
    solution: `Commands produce events appended to event store; projections consume events to build queryable read models. Use snapshots to optimize reads.`
  },
  {
    id: 'micro-28',
    title: 'CQRS separation',
    statement: 'Separate read and write models: implement a write-side command handler and read-side query service updated via events.',
    language: 'text',
    solution: `Write model handles validation and emits events; read model subscribes and updates denormalized tables optimized for queries.`
  },
  {
    id: 'micro-29',
    title: 'Schema versioning for messages',
    statement: 'Version event/message schemas and support consumers with different versions.',
    language: 'text',
    solution: `Use backward/forward-compatible changes (add optional fields), use schema registry (Avro/Protobuf), consumers handle missing/new fields gracefully.`
  },
  {
    id: 'micro-30',
    title: 'Handling poison messages',
    statement: 'Detect and isolate messages that repeatedly fail processing and move them to a dead-letter queue.',
    language: 'text',
    solution: `Track delivery attempts; after N failures route to DLQ with metadata for manual inspection and retry tooling.`
  },
  {
    id: 'micro-31',
    title: 'Throttling and quota per customer',
    statement: 'Implement per-customer quotas and return appropriate error when exceeded.',
    language: 'text',
    solution: `Maintain counters per customer in Redis with TTL; reject when usage exceeds quota; surface headers indicating remaining quota.`
  },
  {
    id: 'micro-32',
    title: 'Authentication & authorization',
    statement: 'Protect microservice endpoints using OAuth2/JWT tokens and validate scopes/roles.',
    language: 'text',
    solution: `Verify JWT signature and claims in gateway or service; enforce scopes/roles using policy checks or @PreAuthorize guards.`
  },
  {
    id: 'micro-33',
    title: 'Service-level SLA monitoring',
    statement: 'Set up SLOs and alerts: e.g., 99.9% successful requests and average latency thresholds.',
    language: 'text',
    solution: `Record success/error counters and latency histograms in Prometheus; create alerts for error rate and P95/P99 latency breaches.`
  },
  {
    id: 'micro-34',
    title: 'Bulk operations with resumability',
    statement: 'Design a bulk import API that accepts a file and processes it in chunks with resumable state.',
    language: 'text',
    solution: `Accept upload, store as job, process in background in chunks, record progress checkpoints; allow resume by job id and skip completed chunks.`
  },
  {
    id: 'micro-35',
    title: 'Partial failure handling in fan-out',
    statement: 'When one request fans out to multiple downstream calls, handle partial failures and present aggregated result.',
    language: 'text',
    solution: `Call downstreams in parallel, gather results and errors; return partial success with details for failed subcalls and optionally retry asynchronously.`
  },
  {
    id: 'micro-36',
    title: 'Designing idempotent consumers for events',
    statement: 'Implement a consumer that safely replays events and maintains exactly-once semantics for updates.',
    language: 'text',
    solution: `Use event sequence numbers and store last processed sequence per partition; when replaying skip events <= lastSequence; operations must be idempotent or guarded by processed-event checks.`
  },
  {
    id: 'micro-37',
    title: 'Optimistic concurrency for distributed updates',
    statement: 'Show how to use version numbers or compare-and-set semantics across services to avoid lost updates.',
    language: 'text',
    solution: `Include version in requests; service checks current version before applying change and returns conflict (409) if versions mismatch; clients can retry after fetching latest.`
  },
  {
    id: 'micro-38',
    title: 'Secure inter-service communication',
    statement: 'Enable mTLS between services and rotate certificates automatically.',
    language: 'text',
    solution: `Use service mesh or mutual TLS at transport layer with short-lived certs issued by central CA; configure auto-rotation via control plane.`
  },
  {
    id: 'micro-39',
    title: 'Bulkhead + circuit breaker example',
    statement: 'Combine bulkhead isolation with circuit breakers to harden calls to a flaky downstream.',
    language: 'text',
    solution: `Place calls into limited-latency thread pool (bulkhead); wrap calls with circuit breaker so repeated failures open circuit and prevent queueing.`
  },
  {
    id: 'micro-40',
    title: 'Chaos engineering experiment',
    statement: 'Define a simple chaos experiment that kills a service instance and verifies system resilience.',
    language: 'text',
    solution: `Schedule pod termination or block network for an instance; assert that traffic is routed to healthy instances, alerts triggered, and system recovers.`
  },
  {
    id: 'micro-41',
    title: 'Consumer-side caching for read heavy service',
    statement: 'Implement a short-lived client-side cache to reduce load on a frequently read microservice.',
    language: 'text',
    solution: `Cache responses with TTL in client; invalidate or refresh on events; respect cache-control headers and low TTL to keep freshness.`
  },
  {
    id: 'micro-42',
    title: 'API throttling with user tiers',
    statement: 'Differentiate rate limits by user tier (free, pro) and enforce at gateway.',
    language: 'text',
    solution: `Lookup tier on request (from token), apply corresponding quota buckets; expose headers with remaining calls and reset time.`
  },
  {
    id: 'micro-43',
    title: 'Monitoring slow database queries across services',
    statement: 'Instrument DB calls and surface slow query metrics so owners can optimize.',
    language: 'text',
    solution: `Record query duration histograms and tag with service/table; alert on P95/P99 durations and provide slow query logs for investigation.`
  },
  {
    id: 'micro-44',
    title: 'Designing eventual consistency UI',
    statement: 'When services are eventually consistent, design API responses and UI behavior to surface stale data correctly.',
    language: 'text',
    solution: `Indicate staleness (lastUpdated) in responses; show optimistic UI updates and background reconciliation; provide user feedback when state is pending.`
  },
  {
    id: 'micro-45',
    title: 'Handling schema migrations for multiple services',
    statement: 'Plan rolling schema migrations when multiple services read/write the same message schema.',
    language: 'text',
    solution: `Use backward compatible changes, deploy consumers that tolerate new fields, roll out producers after consumers updated; use schema registry to validate compatibility.`
  },
  {
    id: 'micro-46',
    title: 'Service-level throttling with circuit breaker integration',
    statement: 'Throttle requests when a service crosses error thresholds and trip a circuit breaker to protect downstream.',
    language: 'text',
    solution: `On high error rates increment throttling counters and respond 429; combine with circuit breaker to stop routing to failing instances and trigger fallback paths.`
  },
  {
    id: 'micro-47',
    title: 'Blue/green DB migration strategy',
    statement: 'Migrate schema in a way that supports blue-green deployments with minimal downtime.',
    language: 'text',
    solution: `Add additive schema changes first (new columns/tables), update both blue & green to use new schema, migrate data, then remove old columns in a later deploy.`
  },
  {
    id: 'micro-48',
    title: 'Event deduplication in at-least-once systems',
    statement: 'Implement deduplication keys and idempotent event handlers for safe replay.',
    language: 'text',
    solution: `Persist event id per aggregate in consumer DB with unique constraint; on handling, insert id and skip if unique constraint violation occurs.`
  },
  {
    id: 'micro-49',
    title: 'Contract-first API design with OpenAPI',
    statement: 'Define an API contract in OpenAPI and generate server/client stubs for a microservice.',
    language: 'text',
    solution: `Write OpenAPI YAML; generate server stubs (openapi-generator) and client SDKs; implement business logic in generated controllers to ensure API matches contract.`
  },
  {
    id: 'micro-50',
    title: 'Observability playbook',
    statement: 'Summarize the observability pillars (logs, metrics, traces) and implement minimal instrumentation for a service.',
    language: 'text',
    solution: `Emit structured logs with correlation id, expose Prometheus metrics (counters/gauges/histograms), instrument traces for incoming & outgoing calls; ensure alerting and dashboarding are in place.`
  }
];

export default microservices;
