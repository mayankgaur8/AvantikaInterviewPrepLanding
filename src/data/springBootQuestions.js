export const SPRINGBOOT_QUESTIONS = [

/* =====================================================
   BASIC – 20 QUESTIONS
===================================================== */

{
  id: "sb-b-01",
  level: "Basic",
  q: "What is Spring Boot?",
  a: "Spring Boot is an opinionated framework that simplifies Spring application development by providing auto-configuration, embedded servers, and production-ready features."
},
{
  id: "sb-b-02",
  level: "Basic",
  q: "What problems does Spring Boot solve?",
  a: "It eliminates boilerplate configuration, XML setup, dependency management complexity, and manual server configuration."
},
{
  id: "sb-b-03",
  level: "Basic",
  q: "What is @SpringBootApplication?",
  a: "It combines @Configuration, @EnableAutoConfiguration, and @ComponentScan."
},
{
  id: "sb-b-04",
  level: "Basic",
  q: "What is auto-configuration?",
  a: "Spring Boot automatically configures beans based on classpath dependencies and application properties."
},
{
  id: "sb-b-05",
  level: "Basic",
  q: "What embedded servers does Spring Boot support?",
  a: "Tomcat (default), Jetty, and Undertow."
},
{
  id: "sb-b-06",
  level: "Basic",
  q: "What is application.properties / application.yml?",
  a: "Files used to externalize configuration like server port, database URL, logging levels, etc."
},
{
  id: "sb-b-07",
  level: "Basic",
  q: "How do you change the default port in Spring Boot?",
  a: "Set server.port in application.properties.",
  answer: {
    summary: "Spring Boot allows port override via configuration.",
    codeTitle: "application.properties",
    code: `server.port=9090`
  }
},
{
  id: "sb-b-08",
  level: "Basic",
  q: "What is Spring Boot Starter?",
  a: "Starters are dependency descriptors that bundle common dependencies together."
},
{
  id: "sb-b-09",
  level: "Basic",
  q: "Example of a Spring Boot starter?",
  a: "spring-boot-starter-web includes Spring MVC, Tomcat, Jackson, and validation."
},
{
  id: "sb-b-10",
  level: "Basic",
  q: "What is SpringApplication.run()?",
  a: "It bootstraps the Spring Boot application and starts the embedded server."
},
{
  id: "sb-b-11",
  level: "Basic",
  q: "What is @RestController?",
  a: "@RestController combines @Controller and @ResponseBody to return JSON/XML responses."
},
{
  id: "sb-b-12",
  level: "Basic",
  q: "What is @RequestMapping?",
  a: "It maps HTTP requests to handler methods."
},
{
  id: "sb-b-13",
  level: "Basic",
  q: "Difference between @Controller and @RestController?",
  a: "@Controller returns views, @RestController returns response body directly."
},
{
  id: "sb-b-14",
  level: "Basic",
  q: "What is @Autowired?",
  a: "It injects Spring-managed dependencies automatically."
},
{
  id: "sb-b-15",
  level: "Basic",
  q: "What is @Value annotation?",
  a: "It injects property values into fields."
},
{
  id: "sb-b-16",
  level: "Basic",
  q: "What is Spring Boot DevTools?",
  a: "It provides auto-restart, live reload, and development-time enhancements."
},
{
  id: "sb-b-17",
  level: "Basic",
  q: "What is @ComponentScan?",
  a: "It scans packages to detect Spring components automatically."
},
{
  id: "sb-b-18",
  level: "Basic",
  q: "What is Actuator?",
  a: "Spring Boot Actuator exposes production-ready endpoints like health, metrics, and info."
},
{
  id: "sb-b-19",
  level: "Basic",
  q: "How to enable Actuator?",
  a: "Add spring-boot-starter-actuator dependency."
},
{
  id: "sb-b-20",
  level: "Basic",
  q: "What is the default context path?",
  a: "Default context path is /"
},

/* =====================================================
   INTERMEDIATE – 20 QUESTIONS
===================================================== */

{
  id: "sb-i-01",
  level: "Intermediate",
  q: "How does Spring Boot auto-configuration work internally?",
  a: "It uses @Conditional annotations and auto-configuration classes loaded via spring.factories / AutoConfiguration.imports."
},
{
  id: "sb-i-02",
  level: "Intermediate",
  q: "What is @ConditionalOnClass?",
  a: "It enables configuration only if a specific class is present on the classpath."
},
{
  id: "sb-i-03",
  level: "Intermediate",
  q: "What is @ConfigurationProperties?",
  a: "It binds external configuration to POJO classes.",
  answer: {
    summary: "Used for type-safe configuration binding.",
    codeTitle: "Example",
    code: `
@ConfigurationProperties(prefix="app")
public class AppConfig {
  private String name;
  private int timeout;
}
`
  }
},
{
  id: "sb-i-04",
  level: "Intermediate",
  q: "Difference between @Value and @ConfigurationProperties?",
  a: "@Value is fine for small values, @ConfigurationProperties is better for structured configs."
},
{
  id: "sb-i-05",
  level: "Intermediate",
  q: "How do you handle exceptions globally?",
  a: "Using @ControllerAdvice with @ExceptionHandler."
},
{
  id: "sb-i-06",
  level: "Intermediate",
  q: "What is Spring Boot profile?",
  a: "Profiles allow environment-specific configurations like dev, qa, prod."
},
{
  id: "sb-i-07",
  level: "Intermediate",
  q: "How do you enable a profile?",
  a: "Set spring.profiles.active in properties or JVM args."
},
{
  id: "sb-i-08",
  level: "Intermediate",
  q: "What is embedded Tomcat lifecycle?",
  a: "Tomcat starts automatically when Spring context is initialized."
},
{
  id: "sb-i-09",
  level: "Intermediate",
  q: "What is Spring Boot logging default?",
  a: "Logback with SLF4J abstraction."
},
{
  id: "sb-i-10",
  level: "Intermediate",
  q: "How do you change logging level?",
  a: "Using logging.level.package=DEBUG in properties."
},
{
  id: "sb-i-11",
  level: "Intermediate",
  q: "What is Spring Boot banner?",
  a: "ASCII art shown at application startup."
},
{
  id: "sb-i-12",
  level: "Intermediate",
  q: "What is CommandLineRunner?",
  a: "Runs logic after Spring Boot application startup."
},
{
  id: "sb-i-13",
  level: "Intermediate",
  q: "Difference between CommandLineRunner and ApplicationRunner?",
  a: "ApplicationRunner supports structured arguments."
},
{
  id: "sb-i-14",
  level: "Intermediate",
  q: "How does Spring Boot handle transactions?",
  a: "Via @Transactional annotation using AOP proxies."
},
{
  id: "sb-i-15",
  level: "Intermediate",
  q: "How do you connect Spring Boot to a database?",
  a: "Using DataSource auto-configuration and JPA starter."
},
{
  id: "sb-i-16",
  level: "Intermediate",
  q: "What is Spring Data JPA?",
  a: "It reduces boilerplate DAO code using repository abstraction."
},
{
  id: "sb-i-17",
  level: "Intermediate",
  q: "What is @EnableAutoConfiguration?",
  a: "Enables Spring Boot auto-configuration mechanism."
},
{
  id: "sb-i-18",
  level: "Intermediate",
  q: "How do you disable auto-configuration?",
  a: "Exclude via @SpringBootApplication(exclude=...)"
},
{
  id: "sb-i-19",
  level: "Intermediate",
  q: "What is application.yml advantage?",
  a: "Better readability and hierarchical configuration."
},
{
  id: "sb-i-20",
  level: "Intermediate",
  q: "How does Spring Boot simplify microservices?",
  a: "Embedded servers, REST support, config management, and Actuator."
},

/* =====================================================
   ADVANCED – 10 QUESTIONS
===================================================== */

{
  id: "sb-a-01",
  level: "Advanced",
  q: "How does Spring Boot support cloud-native applications?",
  a: "Through externalized config, health probes, metrics, container friendliness, and Actuator."
},
{
  id: "sb-a-02",
  level: "Advanced",
  q: "How does Spring Boot integrate with Kubernetes?",
  a: "Using readiness/liveness probes, ConfigMaps, Secrets, and Actuator endpoints."
},
{
  id: "sb-a-03",
  level: "Advanced",
  q: "How do you implement graceful shutdown?",
  a: "Enable server.shutdown=graceful and manage request draining."
},
{
  id: "sb-a-04",
  level: "Advanced",
  q: "How do you secure Spring Boot applications?",
  a: "Using Spring Security with JWT/OAuth2, method-level security, and filters."
},
{
  id: "sb-a-05",
  level: "Advanced",
  q: "What is Spring Boot actuator health check used for?",
  a: "Used by load balancers and orchestration platforms to determine service health."
},
{
  id: "sb-a-06",
  level: "Advanced",
  q: "How does Spring Boot handle concurrency?",
  a: "Uses servlet thread pool (Tomcat) or reactive event loop (WebFlux)."
},
{
  id: "sb-a-07",
  level: "Advanced",
  q: "Difference between Spring Boot MVC and WebFlux?",
  a: "MVC is blocking/thread-per-request; WebFlux is non-blocking/reactive."
},
{
  id: "sb-a-08",
  level: "Advanced",
  q: "How do you implement distributed tracing?",
  a: "Using Micrometer + OpenTelemetry + Zipkin/Jaeger."
},
{
  id: "sb-a-09",
  level: "Advanced",
  q: "How do you optimize Spring Boot startup time?",
  a: "Lazy init, exclude auto-config, reduce classpath scanning, JVM tuning."
},
{
  id: "sb-a-10",
  level: "Advanced",
  q: "How do you package Spring Boot for production?",
  a: "As executable JAR or container image with layered jars."
}

];
