// src/data/mcqs/springbootMcq.js
// 50 Spring Boot MCQs (Basic • Intermediate • Advanced)

export const SPRINGBOOT_MCQ = [
  // ================= BASIC (1–17) =================
  {
    id: "sb-mcq-1",
    tag: "Spring Boot • Basic",
    q: "What is the main goal of Spring Boot?",
    options: [
      "To replace Spring Framework completely",
      "To simplify Spring app setup with auto-configuration and starters",
      "To provide a database engine",
      "To compile Java faster",
    ],
    answer: 1,
    explain:
      "Spring Boot reduces boilerplate by providing starters, auto-configuration, and embedded servers.",
  },
  {
    id: "sb-mcq-2",
    tag: "Spring Boot • Basic",
    q: "Which annotation is typically used to bootstrap a Spring Boot application?",
    options: [
      "@EnableBoot",
      "@SpringBootApplication",
      "@BootApplication",
      "@SpringApplication",
    ],
    answer: 1,
    explain:
      "@SpringBootApplication combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.",
  },
  {
    id: "sb-mcq-3",
    tag: "Spring Boot • Basic",
    q: "Which file name is used by default for Spring Boot configuration?",
    options: [
      "boot.properties",
      "spring.properties",
      "application.properties / application.yml",
      "config.xml",
    ],
    answer: 2,
    explain:
      "Spring Boot loads configuration from application.properties or application.yml by default.",
  },
  {
    id: "sb-mcq-4",
    tag: "Spring Boot • Basic",
    q: "Which embedded server is used by default in Spring Boot web starters?",
    options: ["Jetty", "Tomcat", "Undertow", "GlassFish"],
    answer: 1,
    explain: "spring-boot-starter-web uses embedded Tomcat by default.",
  },
  {
    id: "sb-mcq-5",
    tag: "Spring Boot • Basic",
    q: "What does the 'starter' dependency in Spring Boot provide?",
    options: [
      "Only one library",
      "A curated set of dependencies for a feature",
      "A database schema",
      "A build tool",
    ],
    answer: 1,
    explain:
      "Starters provide a curated dependency set for common tasks (web, data-jpa, security, etc.).",
  },
  {
    id: "sb-mcq-6",
    tag: "Spring Boot • Basic",
    q: "Which dependency is commonly used to build REST APIs in Spring Boot?",
    options: [
      "spring-boot-starter-jdbc",
      "spring-boot-starter-web",
      "spring-boot-starter-batch",
      "spring-boot-starter-cache",
    ],
    answer: 1,
    explain: "spring-boot-starter-web includes Spring MVC + embedded server.",
  },
  {
    id: "sb-mcq-7",
    tag: "Spring Boot • Basic",
    q: "Which annotation is used to define a REST controller?",
    options: ["@Controller", "@Service", "@RestController", "@Repository"],
    answer: 2,
    explain:
      "@RestController = @Controller + @ResponseBody, returning JSON directly.",
  },
  {
    id: "sb-mcq-8",
    tag: "Spring Boot • Basic",
    q: "Spring Boot uses which mechanism to auto-configure beans?",
    options: [
      "Only XML configuration",
      "Conditional configuration based on classpath and properties",
      "Manual bean registration only",
      "Reflection without conditions",
    ],
    answer: 1,
    explain:
      "Auto-configuration uses conditional annotations like @ConditionalOnClass, @ConditionalOnProperty.",
  },
  {
    id: "sb-mcq-9",
    tag: "Spring Boot • Basic",
    q: "Which annotation loads external configuration properties into a bean?",
    options: ["@Value", "@PropertyScan", "@ConfigProperties", "@GetProperty"],
    answer: 0,
    explain:
      "@Value injects property values. For groups, prefer @ConfigurationProperties.",
  },
  {
    id: "sb-mcq-10",
    tag: "Spring Boot • Basic",
    q: "What is Actuator used for?",
    options: [
      "Database migrations",
      "Monitoring and management endpoints",
      "Building UI pages",
      "Message queue integration",
    ],
    answer: 1,
    explain:
      "Spring Boot Actuator provides endpoints like /actuator/health, /actuator/metrics.",
  },
  {
    id: "sb-mcq-11",
    tag: "Spring Boot • Basic",
    q: "Which property sets the server port in Spring Boot?",
    options: ["server.port", "port.server", "spring.port", "app.port"],
    answer: 0,
    explain: "server.port configures the embedded server port.",
  },
  {
    id: "sb-mcq-12",
    tag: "Spring Boot • Basic",
    q: "Which dependency enables JPA support in Spring Boot?",
    options: [
      "spring-boot-starter-jpa",
      "spring-boot-starter-data-jpa",
      "spring-boot-starter-hibernate",
      "spring-boot-starter-orm",
    ],
    answer: 1,
    explain:
      "spring-boot-starter-data-jpa provides Spring Data JPA + Hibernate by default.",
  },
  {
    id: "sb-mcq-13",
    tag: "Spring Boot • Basic",
    q: "Which file location has highest priority for application.properties?",
    options: [
      "classpath root",
      "classpath /config",
      "external /config directory",
      "Any one, same priority",
    ],
    answer: 2,
    explain:
      "External config locations usually override internal classpath config.",
  },
  {
    id: "sb-mcq-14",
    tag: "Spring Boot • Basic",
    q: "Which annotation is used to define environment-specific configs?",
    options: ["@Profile", "@Env", "@Stage", "@Mode"],
    answer: 0,
    explain: "@Profile loads beans only for specific profiles (dev, qa, prod).",
  },
  {
    id: "sb-mcq-15",
    tag: "Spring Boot • Basic",
    q: "What is the default logging framework in Spring Boot?",
    options: ["Log4j", "Logback", "JUL", "SLF4J only"],
    answer: 1,
    explain: "Spring Boot uses Logback as default implementation (via SLF4J).",
  },
  {
    id: "sb-mcq-16",
    tag: "Spring Boot • Basic",
    q: "Which annotation enables scheduling in Spring Boot?",
    options: ["@EnableJobs", "@EnableScheduling", "@EnableTimer", "@EnableCron"],
    answer: 1,
    explain: "@EnableScheduling enables @Scheduled tasks.",
  },
  {
    id: "sb-mcq-17",
    tag: "Spring Boot • Basic",
    q: "Which property activates a profile at runtime?",
    options: [
      "spring.profile",
      "spring.profiles.active",
      "active.profile",
      "app.profile.active",
    ],
    answer: 1,
    explain: "spring.profiles.active activates profiles like dev, prod.",
  },

  // ================= INTERMEDIATE (18–34) =================
  {
    id: "sb-mcq-18",
    tag: "Spring Boot • Intermediate",
    q: "How does Spring Boot find auto-configurations?",
    options: [
      "From application.yml only",
      "From classpath scanning of @Component only",
      "From auto-configuration imports (spring.factories / AutoConfiguration.imports)",
      "From web.xml",
    ],
    answer: 2,
    explain:
      "Boot loads auto-config from metadata (spring.factories in older, AutoConfiguration.imports in newer).",
  },
  {
    id: "sb-mcq-19",
    tag: "Spring Boot • Intermediate",
    q: "Which annotation binds a group of properties into a POJO?",
    options: ["@Value", "@ConfigurationProperties", "@PropertySource", "@Bean"],
    answer: 1,
    explain:
      "@ConfigurationProperties binds hierarchical properties into a strongly typed bean.",
  },
  {
    id: "sb-mcq-20",
    tag: "Spring Boot • Intermediate",
    q: "What is the purpose of @EnableAutoConfiguration?",
    options: [
      "Enable JPA repositories only",
      "Enable automatic bean registration based on classpath",
      "Enable MVC controllers only",
      "Enable AspectJ only",
    ],
    answer: 1,
    explain:
      "@EnableAutoConfiguration adds beans based on detected dependencies and conditions.",
  },
  {
    id: "sb-mcq-21",
    tag: "Spring Boot • Intermediate",
    q: "Which dependency provides validation annotations like @NotNull and integrates with Spring MVC?",
    options: [
      "spring-boot-starter-validation",
      "spring-boot-starter-test",
      "spring-boot-starter-aop",
      "spring-boot-starter-webflux",
    ],
    answer: 0,
    explain:
      "spring-boot-starter-validation provides Bean Validation (Hibernate Validator).",
  },
  {
    id: "sb-mcq-22",
    tag: "Spring Boot • Intermediate",
    q: "Which actuator endpoint indicates if application is running?",
    options: ["/actuator/info", "/actuator/health", "/actuator/env", "/actuator/beans"],
    answer: 1,
    explain:
      "/actuator/health typically shows status UP/DOWN and readiness checks.",
  },
  {
    id: "sb-mcq-23",
    tag: "Spring Boot • Intermediate",
    q: "What is the purpose of Spring Boot DevTools?",
    options: [
      "Production monitoring",
      "Hot reload & developer experience improvements",
      "Database migrations",
      "Security hardening",
    ],
    answer: 1,
    explain:
      "DevTools improves dev experience: auto restart, live reload, etc.",
  },
  {
    id: "sb-mcq-24",
    tag: "Spring Boot • Intermediate",
    q: "Which layer is recommended to place @Transactional in Spring Boot apps?",
    options: ["Controller layer", "Service layer", "Repository layer only", "Main method"],
    answer: 1,
    explain:
      "Transactions are business operations → usually in Service layer.",
  },
  {
    id: "sb-mcq-25",
    tag: "Spring Boot • Intermediate",
    q: "What does Spring Data JPA provide?",
    options: [
      "Only EntityManager",
      "Repository abstraction and query generation",
      "Only JDBC templates",
      "Only schema migrations",
    ],
    answer: 1,
    explain:
      "Spring Data JPA provides Repository interfaces, derived queries, paging, etc.",
  },
  {
    id: "sb-mcq-26",
    tag: "Spring Boot • Intermediate",
    q: "How do you disable a specific auto-configuration?",
    options: [
      "@DisableAutoConfiguration",
      "exclude in @SpringBootApplication",
      "Remove all dependencies",
      "Cannot disable",
    ],
    answer: 1,
    explain:
      "Use @SpringBootApplication(exclude = {XAutoConfiguration.class}).",
  },
  {
    id: "sb-mcq-27",
    tag: "Spring Boot • Intermediate",
    q: "Which property enables showing SQL logs in Spring Boot JPA?",
    options: ["spring.jpa.show-sql=true", "hibernate.sql=true", "jpa.sql=true", "spring.sql=true"],
    answer: 0,
    explain: "spring.jpa.show-sql enables SQL logging (basic).",
  },
  {
    id: "sb-mcq-28",
    tag: "Spring Boot • Intermediate",
    q: "What does @RestControllerAdvice help with?",
    options: [
      "Bean scanning",
      "Global exception handling and response mapping",
      "Database connection pooling",
      "Auto-config loading",
    ],
    answer: 1,
    explain:
      "@RestControllerAdvice provides centralized exception handlers returning JSON.",
  },
  {
    id: "sb-mcq-29",
    tag: "Spring Boot • Intermediate",
    q: "How do you expose actuator endpoints over HTTP?",
    options: [
      "management.endpoints.web.exposure.include=*",
      "spring.actuator.enable=true",
      "actuator.expose=true",
      "server.actuator=true",
    ],
    answer: 0,
    explain:
      "Use management.endpoints.web.exposure.include to expose specific endpoints.",
  },
  {
    id: "sb-mcq-30",
    tag: "Spring Boot • Intermediate",
    q: "What is the recommended way to run integration tests with Spring Boot?",
    options: [
      "@SpringBootIntegrationTest",
      "@SpringBootTest",
      "@RunSpringTest",
      "@TestBoot",
    ],
    answer: 1,
    explain:
      "@SpringBootTest loads full application context for integration testing.",
  },
  {
    id: "sb-mcq-31",
    tag: "Spring Boot • Intermediate",
    q: "What does @WebMvcTest do?",
    options: [
      "Loads full application context",
      "Loads only MVC components (controllers) for slice tests",
      "Loads only JPA repositories",
      "Loads only Security components",
    ],
    answer: 1,
    explain:
      "@WebMvcTest is a slice test: loads controllers + MVC infra, mocks other beans.",
  },
  {
    id: "sb-mcq-32",
    tag: "Spring Boot • Intermediate",
    q: "What is the role of ApplicationRunner / CommandLineRunner?",
    options: [
      "To run code after Spring Boot starts",
      "To enable JPA",
      "To configure logging",
      "To enable security filters",
    ],
    answer: 0,
    explain:
      "They run code after context loads; useful for initialization tasks.",
  },
  {
    id: "sb-mcq-33",
    tag: "Spring Boot • Intermediate",
    q: "Which dependency is used for reactive REST APIs?",
    options: [
      "spring-boot-starter-web",
      "spring-boot-starter-webflux",
      "spring-boot-starter-reactor-core",
      "spring-boot-starter-rsocket",
    ],
    answer: 1,
    explain:
      "spring-boot-starter-webflux provides reactive stack with Reactor.",
  },
  {
    id: "sb-mcq-34",
    tag: "Spring Boot • Intermediate",
    q: "What is a common way to externalize secrets in Spring Boot production?",
    options: [
      "Hardcode in application.properties",
      "Store in Git repo",
      "Use environment variables / secret manager (Vault/AKV)",
      "Store in source comments",
    ],
    answer: 2,
    explain:
      "Use env vars or secret managers (HashiCorp Vault, Azure Key Vault, etc.).",
  },

  // ================= ADVANCED (35–50) =================
  {
    id: "sb-mcq-35",
    tag: "Spring Boot • Advanced",
    q: "What is the key difference between readiness and liveness probes (Actuator)?",
    options: [
      "Both mean the same",
      "Readiness indicates if app can serve traffic; liveness indicates if app is alive",
      "Liveness indicates DB health; readiness indicates CPU health only",
      "Only liveness is supported in Boot",
    ],
    answer: 1,
    explain:
      "Readiness controls traffic routing; liveness checks if the process should be restarted.",
  },
  {
    id: "sb-mcq-36",
    tag: "Spring Boot • Advanced",
    q: "Which approach is best for multi-tenant database routing in Spring Boot?",
    options: [
      "One application.properties for all",
      "RoutingDataSource with tenant context",
      "Hardcode tenant IDs in code",
      "Using only @Profile",
    ],
    answer: 1,
    explain:
      "Use AbstractRoutingDataSource + tenant context (ThreadLocal/request) to route connections.",
  },
  {
    id: "sb-mcq-37",
    tag: "Spring Boot • Advanced",
    q: "Which is correct about @Transactional propagation REQUIRED vs REQUIRES_NEW?",
    options: [
      "Both always start new transaction",
      "REQUIRED joins existing; REQUIRES_NEW suspends existing and starts new",
      "REQUIRES_NEW joins existing; REQUIRED suspends existing",
      "Both are same",
    ],
    answer: 1,
    explain:
      "REQUIRED joins existing transaction; REQUIRES_NEW always starts a new one (suspends current).",
  },
  {
    id: "sb-mcq-38",
    tag: "Spring Boot • Advanced",
    q: "What is the recommended way to manage database schema migrations in Boot?",
    options: ["spring.jpa.hibernate.ddl-auto=update", "Flyway/Liquibase", "Manual SQL only", "No migrations needed"],
    answer: 1,
    explain:
      "Flyway/Liquibase provide versioned, controlled migrations; ddl-auto=update is risky in prod.",
  },
  {
    id: "sb-mcq-39",
    tag: "Spring Boot • Advanced",
    q: "What can cause a bean to NOT be created by auto-configuration?",
    options: [
      "Missing classpath dependency",
      "Condition not met (property/class/bean missing)",
      "Auto-config excluded",
      "All of the above",
    ],
    answer: 3,
    explain:
      "Auto-config runs only if conditions match and it isn't excluded.",
  },
  {
    id: "sb-mcq-40",
    tag: "Spring Boot • Advanced",
    q: "Which is a best practice for configuration properties in large Boot apps?",
    options: [
      "Use @Value everywhere",
      "Use @ConfigurationProperties with validation",
      "Use system.out.println",
      "Store config in code constants",
    ],
    answer: 1,
    explain:
      "@ConfigurationProperties is type-safe; can be validated with @Validated and constraints.",
  },
  {
    id: "sb-mcq-41",
    tag: "Spring Boot • Advanced",
    q: "What is the best way to avoid N+1 problem in JPA within Spring Boot apps?",
    options: [
      "Use FetchType.EAGER everywhere",
      "Use JOIN FETCH / entity graphs / batch fetching",
      "Disable Hibernate",
      "Use only native SQL for everything",
    ],
    answer: 1,
    explain:
      "Use join fetch/entity graphs or batch fetching; EAGER everywhere is dangerous.",
  },
  {
    id: "sb-mcq-42",
    tag: "Spring Boot • Advanced",
    q: "In Boot, how do you implement distributed tracing in microservices (modern way)?",
    options: [
      "Only log correlation manually",
      "Micrometer Tracing + OpenTelemetry/Brave",
      "Add Thread.sleep",
      "Use only @Slf4j",
    ],
    answer: 1,
    explain:
      "Micrometer Tracing integrates with OpenTelemetry/Brave to propagate trace IDs.",
  },
  {
    id: "sb-mcq-43",
    tag: "Spring Boot • Advanced",
    q: "What is the difference between @Bean and @Component?",
    options: [
      "@Bean is used only for controllers",
      "@Component is method-level, @Bean is class-level",
      "@Component is class-level scanning; @Bean is explicit method-based bean creation",
      "No difference",
    ],
    answer: 2,
    explain:
      "@Component is discovered via component scan; @Bean explicitly registers bean from @Configuration method.",
  },
  {
    id: "sb-mcq-44",
    tag: "Spring Boot • Advanced",
    q: "What is a common strategy for zero-downtime deployment with Spring Boot on Kubernetes?",
    options: [
      "Kill pod and start new immediately",
      "Use rolling updates + readiness probes",
      "Disable health checks",
      "Use only manual deployments",
    ],
    answer: 1,
    explain:
      "Rolling updates + readiness probes ensure traffic goes only to ready pods.",
  },
  {
    id: "sb-mcq-45",
    tag: "Spring Boot • Advanced",
    q: "How do you reduce startup time in large Spring Boot apps?",
    options: [
      "Add more controllers",
      "Use lazy initialization, reduce classpath, avoid heavy scanning",
      "Disable JAR packaging",
      "Always use reflection",
    ],
    answer: 1,
    explain:
      "Lazy init, fewer starters, optimized scanning, and AOT (where applicable) help reduce startup time.",
  },
  {
    id: "sb-mcq-46",
    tag: "Spring Boot • Advanced",
    q: "Which is true about Spring Boot AOT / Native compilation?",
    options: [
      "It increases startup and memory significantly",
      "It can improve startup time and reduce memory footprint",
      "It works only with JSP apps",
      "It disables dependency injection",
    ],
    answer: 1,
    explain:
      "AOT/Native aims for faster startup and lower memory, but requires compatibility checks.",
  },
  {
    id: "sb-mcq-47",
    tag: "Spring Boot • Advanced",
    q: "What is the safest way to handle secrets in containerized Spring Boot apps?",
    options: [
      "Put in application.yml committed to repo",
      "Pass as Kubernetes Secret / Vault and mount as env/volume",
      "Send secrets as query params",
      "Hardcode in code",
    ],
    answer: 1,
    explain:
      "Use K8s secrets or secret managers (Vault/AKV) and inject via env or mounted files.",
  },
  {
    id: "sb-mcq-48",
    tag: "Spring Boot • Advanced",
    q: "Which technique prevents configuration drift across environments?",
    options: [
      "Different config formats in each env",
      "GitOps + templated config (Helm/Kustomize) + external secrets",
      "Hardcoding per environment",
      "Only manual changes in prod",
    ],
    answer: 1,
    explain:
      "GitOps ensures declarative, versioned config; Helm/Kustomize manages env differences safely.",
  },
  {
    id: "sb-mcq-49",
    tag: "Spring Boot • Advanced",
    q: "What is a good approach to implement resilience in Spring Boot microservices?",
    options: [
      "Only retry everything always",
      "Use Resilience4j (retry, circuit breaker, bulkhead, timeout)",
      "Disable timeouts",
      "Use Thread.stop",
    ],
    answer: 1,
    explain:
      "Resilience4j provides patterns like circuit breaker, retries, rate limiting, etc.",
  },
  {
    id: "sb-mcq-50",
    tag: "Spring Boot • Advanced",
    q: "In Spring Boot, what is the best practice for structured logging in production?",
    options: [
      "Use System.out.println",
      "Log JSON/structured logs and include traceId/spanId",
      "Disable logs",
      "Log only errors",
    ],
    answer: 1,
    explain:
      "Structured logs (JSON) + correlation IDs help search/trace logs in ELK/Splunk.",
  },
];
