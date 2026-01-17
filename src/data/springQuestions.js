export const SPRING_QUESTIONS = [
  // =========================
  // BASIC (20)
  // =========================
  {
    id: "spring-b-01",
    level: "Basic",
    q: "What is Spring Framework?",
    a: "Spring is a Java framework that provides IoC/DI, AOP, transaction management, and integration support to build enterprise applications."
  },
  {
    id: "spring-b-02",
    level: "Basic",
    q: "What is IoC (Inversion of Control)?",
    a: "IoC means Spring container creates and manages objects (beans) instead of you manually creating them."
  },
  {
    id: "spring-b-03",
    level: "Basic",
    q: "What is Dependency Injection (DI)?",
    a: "DI is providing required dependencies to a class from outside (constructor/setter/field) instead of creating them inside."
  },
  {
    id: "spring-b-04",
    level: "Basic",
    q: "What is a Spring Bean?",
    a: "A bean is an object managed by the Spring IoC container."
  },
  {
    id: "spring-b-05",
    level: "Basic",
    q: "What is ApplicationContext?",
    a: "ApplicationContext is the Spring container interface that loads beans, config, and provides advanced features (events, i18n, etc.)."
  },
  {
    id: "spring-b-06",
    level: "Basic",
    q: "Difference between BeanFactory and ApplicationContext?",
    a: "BeanFactory is basic container. ApplicationContext is advanced (eager bean creation, events, AOP integration, etc.)."
  },
  {
    id: "spring-b-07",
    level: "Basic",
    q: "What is @Component?",
    a: "@Component marks a class as a Spring-managed bean (auto-detected during component scanning).",
    answer: {
      summary: "@Component makes the class a Spring bean discovered via component scan.",
      codeTitle: "Example",
      code: `import org.springframework.stereotype.Component;

@Component
public class EmailService {
  public void send(String to) { /*...*/ }
}`
    }
  },
  {
    id: "spring-b-08",
    level: "Basic",
    q: "What are @Service and @Repository?",
    a: "@Service = service layer stereotype, @Repository = DAO layer stereotype (also translates persistence exceptions)."
  },
  {
    id: "spring-b-09",
    level: "Basic",
    q: "What is @Autowired?",
    a: "@Autowired injects a bean dependency by type (prefer constructor injection).",
    answer: {
      summary: "Use constructor injection with @Autowired (or omit it on a single constructor).",
      codeTitle: "Constructor injection",
      code: `import org.springframework.stereotype.Service;

@Service
class OrderService {
  private final PaymentClient client;

  public OrderService(PaymentClient client) {
    this.client = client;
  }
}`
    }
  },
  {
    id: "spring-b-10",
    level: "Basic",
    q: "What is @Configuration?",
    a: "@Configuration indicates a class contains @Bean definitions for Spring container."
  },
  {
    id: "spring-b-11",
    level: "Basic",
    q: "What is @Bean?",
    a: "@Bean defines a bean explicitly in a @Configuration class.",
    answer: {
      summary: "@Bean is used when you want to register objects that you don’t control (3rd-party libs).",
      codeTitle: "@Bean example",
      code: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class AppConfig {
  @Bean
  public ObjectMapper objectMapper() {
    return new ObjectMapper();
  }
}`
    }
  },
  {
    id: "spring-b-12",
    level: "Basic",
    q: "What is component scanning?",
    a: "Spring scans packages for stereotype annotations (@Component/@Service/@Repository/@Controller) to register beans automatically."
  },
  {
    id: "spring-b-13",
    level: "Basic",
    q: "What is bean scope?",
    a: "Bean scope defines bean lifecycle/visibility (singleton, prototype, request, session, etc.)."
  },
  {
    id: "spring-b-14",
    level: "Basic",
    q: "Default bean scope in Spring?",
    a: "Singleton (one bean instance per Spring container)."
  },
  {
    id: "spring-b-15",
    level: "Basic",
    q: "What is @Qualifier used for?",
    a: "When multiple beans of same type exist, @Qualifier selects which one to inject."
  },
  {
    id: "spring-b-16",
    level: "Basic",
    q: "What is Spring AOP?",
    a: "AOP applies cross-cutting concerns (logging, security, transactions) using proxies."
  },
  {
    id: "spring-b-17",
    level: "Basic",
    q: "What is a proxy in Spring?",
    a: "A proxy is a wrapper object created by Spring to intercept method calls and apply AOP advice."
  },
  {
    id: "spring-b-18",
    level: "Basic",
    q: "What is @Value?",
    a: "@Value injects configuration values from properties/environment."
  },
  {
    id: "spring-b-19",
    level: "Basic",
    q: "What is @Profile?",
    a: "@Profile activates beans/config only for specified environments (dev/test/prod)."
  },
  {
    id: "spring-b-20",
    level: "Basic",
    q: "What is Spring Expression Language (SpEL)?",
    a: "SpEL is an expression language used for querying/manipulating objects at runtime (e.g., in @Value)."
  },

  // =========================
  // INTERMEDIATE (20)
  // =========================
  {
    id: "spring-i-01",
    level: "Intermediate",
    q: "Explain Spring bean lifecycle.",
    a: "Instantiate -> populate properties -> aware callbacks -> BeanPostProcessors -> init methods -> ready -> destroy callbacks on shutdown."
  },
  {
    id: "spring-i-02",
    level: "Intermediate",
    q: "What is BeanPostProcessor?",
    a: "It allows custom modification of new bean instances before/after initialization (common in Spring internals)."
  },
  {
    id: "spring-i-03",
    level: "Intermediate",
    q: "What is @PostConstruct and @PreDestroy?",
    a: "@PostConstruct runs after dependency injection; @PreDestroy runs before bean destruction."
  },
  {
    id: "spring-i-04",
    level: "Intermediate",
    q: "Constructor vs Setter injection?",
    a: "Constructor injection is preferred for required dependencies (immutability). Setter is for optional dependencies."
  },
  {
    id: "spring-i-05",
    level: "Intermediate",
    q: "How does Spring resolve circular dependencies?",
    a: "For singletons, Spring can break cycles via early references (setter/field injection). Constructor cycles fail."
  },
  {
    id: "spring-i-06",
    level: "Intermediate",
    q: "What is @Primary?",
    a: "@Primary marks a bean as default choice when multiple candidates exist."
  },
  {
    id: "spring-i-07",
    level: "Intermediate",
    q: "What is @Lazy?",
    a: "@Lazy delays bean initialization until first use (helps startup time / circular dependencies)."
  },
  {
    id: "spring-i-08",
    level: "Intermediate",
    q: "Explain @Transactional behavior in Spring.",
    a: "It uses AOP proxies. Transaction starts before method and commits/rollbacks after method based on exceptions."
  },
  {
    id: "spring-i-09",
    level: "Intermediate",
    q: "Why does @Transactional not work on private/self-invoked methods?",
    a: "Because proxy interception happens only when called through proxy; self-invocation bypasses proxy."
  },
  {
    id: "spring-i-10",
    level: "Intermediate",
    q: "Checked vs unchecked exceptions and rollback in @Transactional?",
    a: "By default, Spring rolls back on RuntimeException/Error. Checked exceptions require rollbackFor."
  },
  {
    id: "spring-i-11",
    level: "Intermediate",
    q: "Propagation types in @Transactional?",
    a: "REQUIRED, REQUIRES_NEW, SUPPORTS, NOT_SUPPORTED, MANDATORY, NEVER, NESTED."
  },
  {
    id: "spring-i-12",
    level: "Intermediate",
    q: "Isolation levels in Spring transactions?",
    a: "DEFAULT, READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE."
  },
  {
    id: "spring-i-13",
    level: "Intermediate",
    q: "What is Spring MVC DispatcherServlet?",
    a: "Front controller that routes requests to controllers via HandlerMappings and renders responses via ViewResolvers."
  },
  {
    id: "spring-i-14",
    level: "Intermediate",
    q: "Difference between @Controller and @RestController?",
    a: "@Controller returns views; @RestController = @Controller + @ResponseBody (returns JSON/XML body)."
  },
  {
    id: "spring-i-15",
    level: "Intermediate",
    q: "What is @RequestBody and @ResponseBody?",
    a: "@RequestBody binds HTTP body to object. @ResponseBody writes object as HTTP response using message converters."
  },
  {
    id: "spring-i-16",
    level: "Intermediate",
    q: "What are HandlerInterceptors?",
    a: "Interceptors run pre/post controller execution for cross-cutting web concerns (auth/logging)."
  },
  {
    id: "spring-i-17",
    level: "Intermediate",
    q: "How do you validate request DTOs?",
    a: "Use Bean Validation annotations + @Valid and handle errors with BindingResult/ControllerAdvice."
  },
  {
    id: "spring-i-18",
    level: "Intermediate",
    q: "What is @ControllerAdvice?",
    a: "Global exception handling / model binding customizations across controllers."
  },
  {
    id: "spring-i-19",
    level: "Intermediate",
    q: "Explain Spring events.",
    a: "ApplicationEventPublisher publishes events; listeners (@EventListener) handle them asynchronously/ synchronously."
  },
  {
    id: "spring-i-20",
    level: "Intermediate",
    q: "How do you externalize configuration in Spring?",
    a: "Use properties/yaml, environment variables, profiles, and property sources; inject via @Value or @ConfigurationProperties."
  },

  // =========================
  // ADVANCED (10)
  // =========================
  {
    id: "spring-a-01",
    level: "Advanced",
    q: "CGLIB vs JDK dynamic proxies in Spring AOP?",
    a: "JDK proxies require interface; CGLIB proxies subclass concrete classes. Spring uses CGLIB when no interface or proxyTargetClass=true."
  },
  {
    id: "spring-a-02",
    level: "Advanced",
    q: "What is the difference between singleton bean scope and singleton pattern?",
    a: "Bean scope singleton = one instance per Spring container. Singleton pattern = one instance per JVM/classloader."
  },
  {
    id: "spring-a-03",
    level: "Advanced",
    q: "How does Spring manage thread safety for singleton beans?",
    a: "Spring does NOT make them thread-safe automatically; beans must be stateless or handle synchronization safely."
  },
  {
    id: "spring-a-04",
    level: "Advanced",
    q: "Explain transaction synchronization and EntityManager binding.",
    a: "Spring binds EntityManager/Session to thread via TransactionSynchronizationManager to reuse within transaction."
  },
  {
    id: "spring-a-05",
    level: "Advanced",
    q: "How do you implement multi-tenancy at Spring layer?",
    a: "Use tenant context (ThreadLocal), routing datasource, tenant-aware caching, and strict security boundaries."
  },
  {
    id: "spring-a-06",
    level: "Advanced",
    q: "How to implement idempotency in Spring APIs?",
    a: "Use idempotency-key header, persist request hash/result, return stored response for retries."
  },
  {
    id: "spring-a-07",
    level: "Advanced",
    q: "What is WebFlux and when to use it?",
    a: "Reactive stack using non-blocking IO. Use for high concurrency/streaming; avoid mixing with blocking calls."
  },
  {
    id: "spring-a-08",
    level: "Advanced",
    q: "How to avoid blocking calls in WebFlux?",
    a: "Use reactive DB clients and offload blocking work to boundedElastic scheduler; never block event loop."
  },
  {
    id: "spring-a-09",
    level: "Advanced",
    q: "How do you structure Spring apps for clean architecture?",
    a: "Separate domain/use-cases from adapters/controllers; keep framework details at edges; use ports & adapters."
  },
  {
    id: "spring-a-10",
    level: "Advanced",
    q: "How to design resilient service-to-service calls in Spring ecosystem?",
    a: "Use timeouts, retries with backoff, circuit breaker, bulkheads, and fallbacks; also use observability (tracing/metrics)."
  },
];
