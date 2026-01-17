const springboot = [
  {
    id: 'springboot-1',
    title: 'Simple GET endpoint',
    statement: 'Create a Spring Boot REST controller with a GET endpoint /hello that returns "Hello World".',
    language: 'java',
    solution: `@RestController\npublic class HelloController {\n    @GetMapping("/hello")\n    public String hello() {\n        return "Hello World";\n    }\n}`
  },
  {
    id: 'springboot-2',
    title: 'Path variable handling',
    statement: 'Create GET /greet/{name} that returns a greeting for the provided name.',
    language: 'java',
    solution: `@RestController\npublic class GreetController {\n    @GetMapping("/greet/{name}")\n    public String greet(@PathVariable String name) {\n        return "Hello " + name;\n    }\n}`
  },
  {
    id: 'springboot-3',
    title: 'POST with request body',
    statement: 'Create POST /echo that accepts JSON {"msg": string} and returns it back.',
    language: 'java',
    solution: `@RestController\npublic class EchoController {\n    public static class Req { public String msg; }\n\n    @PostMapping("/echo")\n    public Map<String,String> echo(@RequestBody Req r) {\n        return Collections.singletonMap("msg", r.msg);\n    }\n}`
  },
  {
    id: 'springboot-4',
    title: 'Return specific HTTP status',
    statement: 'Implement GET /status that returns HTTP 204 No Content.',
    language: 'java',
    solution: `@RestController\npublic class StatusController {\n    @GetMapping("/status")\n    public ResponseEntity<Void> status() {\n        return ResponseEntity.noContent().build();\n    }\n}`
  },
  {
    id: 'springboot-5',
    title: 'Query parameters',
    statement: 'Create GET /sum?a=1&b=2 and return a+b.',
    language: 'java',
    solution: `@RestController\npublic class SumController {\n    @GetMapping("/sum")\n    public int sum(@RequestParam int a, @RequestParam int b) {\n        return a + b;\n    }\n}`
  },
  {
    id: 'springboot-6',
    title: 'Service layer separation',
    statement: 'Refactor logic into a @Service class that the controller calls.',
    language: 'java',
    solution: `@Service\npublic class CalcService {\n    public int add(int a, int b) { return a + b; }\n}\n\n@RestController\npublic class CalcController {\n    private final CalcService svc;\n    public CalcController(CalcService svc){ this.svc = svc; }\n    @GetMapping("/sum")\n    public int sum(@RequestParam int a,@RequestParam int b){ return svc.add(a,b); }\n}`
  },
  {
    id: 'springboot-7',
    title: 'Entity & JPA repository',
    statement: 'Define an entity User(id, name) and a Spring Data JPA repository to save/find users.',
    language: 'java',
    solution: `@Entity\npublic class User { @Id @GeneratedValue Long id; String name; }\n\npublic interface UserRepository extends JpaRepository<User, Long> {}`
  },
  {
    id: 'springboot-8',
    title: 'Controller using repository',
    statement: 'Create POST /users to save a User and GET /users/{id} to fetch one using JPA.',
    language: 'java',
    solution: `@RestController\n@RequiredArgsConstructor\npublic class UserController {\n    private final UserRepository repo;\n    @PostMapping("/users")\n    public User create(@RequestBody User u){ return repo.save(u); }\n    @GetMapping("/users/{id}")\n    public ResponseEntity<User> get(@PathVariable Long id){ return repo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build()); }\n}`
  },
  {
    id: 'springboot-9',
    title: 'Validation with @Valid',
    statement: 'Add request validation for a DTO: name must be non-empty.',
    language: 'java',
    solution: `public class CreateUserDto { @NotBlank public String name; }\n\n@RestController\npublic class UserController {\n    @PostMapping("/users")\n    public User create(@Valid @RequestBody CreateUserDto dto){ User u=new User(); u.name=dto.name; return repo.save(u); }\n}`
  },
  {
    id: 'springboot-10',
    title: 'Global exception handler',
    statement: 'Create @ControllerAdvice to convert exceptions to JSON error responses.',
    language: 'java',
    solution: `@ControllerAdvice\npublic class GlobalErrorHandler {\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<?> handleValidation(MethodArgumentNotValidException ex){\n        return ResponseEntity.badRequest().body(Map.of("error","validation"));\n    }\n}`
  },
  {
    id: 'springboot-11',
    title: 'Pagination with Spring Data',
    statement: 'Implement GET /users?page=0&size=10 returning a Page of users.',
    language: 'java',
    solution: `@GetMapping("/users")\npublic Page<User> list(@RequestParam int page,@RequestParam int size){ return repo.findAll(PageRequest.of(page,size)); }`
  },
  {
    id: 'springboot-12',
    title: 'Sorting results',
    statement: 'Return users sorted by name: GET /users?sort=name,asc',
    language: 'java',
    solution: `@GetMapping("/users/sorted")\npublic List<User> listSorted(){ return repo.findAll(Sort.by("name")); }`
  },
  {
    id: 'springboot-13',
    title: 'Custom query',
    statement: 'Add a repository method to find users by name containing a substring.',
    language: 'java',
    solution: `public interface UserRepository extends JpaRepository<User,Long>{ List<User> findByNameContainingIgnoreCase(String q); }`
  },
  {
    id: 'springboot-14',
    title: 'File upload (multipart)',
    statement: 'Implement POST /upload to accept a multipart file and save to disk.',
    language: 'java',
    solution: `@PostMapping("/upload")\npublic ResponseEntity<?> upload(@RequestParam MultipartFile file) throws IOException{\n    Files.copy(file.getInputStream(), Paths.get("/tmp/").resolve(file.getOriginalFilename()));\n    return ResponseEntity.ok().build();\n}`
  },
  {
    id: 'springboot-15',
    title: 'File download streaming',
    statement: 'Implement GET /download/{name} to stream a file to the client.',
    language: 'java',
    solution: `@GetMapping("/download/{name}")\npublic ResponseEntity<Resource> dl(@PathVariable String name) throws IOException{\n    Path p = Paths.get("/tmp/"+name); Resource r = new UrlResource(p.toUri());\n    return ResponseEntity.ok().contentType(MediaType.APPLICATION_OCTET_STREAM).body(r);\n}`
  },
  {
    id: 'springboot-16',
    title: 'Transactional service',
    statement: 'Demonstrate @Transactional usage in a service that updates two entities atomically.',
    language: 'java',
    solution: `@Service\npublic class TransferService{\n  @Transactional\n  public void transfer(Account a, Account b, int amount){ a.balance -= amount; b.balance += amount; repo.save(a); repo.save(b); }\n}`
  },
  {
    id: 'springboot-17',
    title: 'Optimistic locking',
    statement: 'Use @Version field on an entity to enable optimistic locking.',
    language: 'java',
    solution: `@Entity\npublic class Item{ @Id Long id; String name; @Version Integer version; }`
  },
  {
    id: 'springboot-18',
    title: 'Async processing',
    statement: 'Run a long task asynchronously using @Async.',
    language: 'java',
    solution: `@Configuration\n@EnableAsync\npublic class Config{}\n\n@Service\npublic class JobService{ @Async public CompletableFuture<String> run(){ /* long work */ return CompletableFuture.completedFuture("done"); } }`
  },
  {
    id: 'springboot-19',
    title: 'Scheduled task',
    statement: 'Schedule a task to run every minute using @Scheduled.',
    language: 'java',
    solution: `@Configuration\n@EnableScheduling\npublic class Config{}\n\n@Component\npublic class MyJob{ @Scheduled(fixedRate=60000) public void tick(){ /* work */ } }`
  },
  {
    id: 'springboot-20',
    title: 'Caching with @Cacheable',
    statement: 'Cache repository results using Spring Cache abstraction.',
    language: 'java',
    solution: `@EnableCaching\n@Configuration class C{}\n\n@Service\npublic class UserService{ @Cacheable("users") public User get(Long id){ return repo.findById(id).orElse(null); } }`
  },
  {
    id: 'springboot-21',
    title: 'Controller unit test with MockMvc',
    statement: 'Write a MockMvc test for GET /hello returning "Hello World".',
    language: 'java',
    solution: `@WebMvcTest(HelloController.class)\npublic class HelloTest { @Autowired MockMvc mvc; @Test void t() throws Exception{ mvc.perform(get("/hello")).andExpect(status().isOk()).andExpect(content().string("Hello World")); } }`
  },
  {
    id: 'springboot-22',
    title: 'Integration test with @SpringBootTest',
    statement: 'Write an integration test that boots the context and calls the repository.',
    language: 'java',
    solution: `@SpringBootTest\npublic class RepoIT { @Autowired UserRepository repo; @Test void t(){ User u = repo.save(new User()); assertNotNull(u.getId()); } }`
  },
  {
    id: 'springboot-23',
    title: 'Actuator health check',
    statement: 'Expose Spring Boot Actuator and a custom HealthIndicator.',
    language: 'java',
    solution: `@Component\npublic class DbHealth implements HealthIndicator{ @Override public Health health(){ return Health.up().withDetail("db","ok").build(); } }`
  },
  {
    id: 'springboot-24',
    title: 'Properties binding',
    statement: 'Bind custom properties using @ConfigurationProperties.',
    language: 'java',
    solution: `@ConfigurationProperties(prefix="app")\n@Component\npublic class AppProps{ private String name; public String getName(){return name;} public void setName(String n){name=n;} }`
  },
  {
    id: 'springboot-25',
    title: 'Profiles and conditional beans',
    statement: 'Use Spring profiles to load a mock bean in tests and a real bean in production.',
    language: 'java',
    solution: `@Profile("test") @Component public class MockSvc implements Svc {}\n@Profile("prod") @Component public class RealSvc implements Svc {}`
  },
  {
    id: 'springboot-26',
    title: 'CORS configuration',
    statement: 'Allow CORS for /api/** from https://example.com.',
    language: 'java',
    solution: `@Configuration\npublic class WebCfg implements WebMvcConfigurer{ @Override public void addCorsMappings(CorsRegistry r){ r.addMapping("/api/**").allowedOrigins("https://example.com"); } }`
  },
  {
    id: 'springboot-27',
    title: 'Global logging configuration',
    statement: 'Configure logging level for package com.example in application.yml.',
    language: 'yaml',
    solution: `logging:\n  level:\n    com.example: DEBUG`
  },
  {
    id: 'springboot-28',
    title: 'Custom error response',
    statement: 'Return a structured JSON error (timestamp, message, path) for exceptions.',
    language: 'java',
    solution: `@ControllerAdvice\npublic class ApiError{ @ExceptionHandler(Exception.class) public ResponseEntity<Map<String,Object>> e(HttpServletRequest req, Exception ex){ Map m = Map.of("ts",Instant.now(),"msg",ex.getMessage(),"path",req.getRequestURI()); return ResponseEntity.status(500).body(m); } }`
  },
  {
    id: 'springboot-29',
    title: 'Template rendering (Thymeleaf)',
    statement: 'Return an HTML page rendered with Thymeleaf passing a model attribute.',
    language: 'java',
    solution: `@Controller\npublic class PageController{ @GetMapping("/page") public String page(Model m){ m.addAttribute("msg","Hello"); return "page"; } }`
  },
  {
    id: 'springboot-30',
    title: 'Security basic auth',
    statement: 'Protect /admin/** endpoints with basic auth using in-memory users.',
    language: 'java',
    solution: `@Configuration\npublic class Sec{ @Bean public SecurityFilterChain chain(HttpSecurity http) throws Exception{ return http.authorizeRequests().antMatchers("/admin/**").authenticated().and().httpBasic().and().build(); } @Bean public UserDetailsService uds(){ UserDetails u = User.withDefaultPasswordEncoder().username("admin").password("pass").roles("ADMIN").build(); return new InMemoryUserDetailsManager(u); } }`
  },
  {
    id: 'springboot-31',
    title: 'JWT authentication sketch',
    statement: 'Outline how to use JWT: authenticate, sign token, validate in filter.',
    language: 'text',
    solution: `Authenticate user -> on success sign JWT with secret -> return token. Add OncePerRequestFilter to validate Authorization: Bearer <token> and set SecurityContext.`
  },
  {
    id: 'springboot-32',
    title: 'Method-level security',
    statement: 'Use @PreAuthorize to restrict a service method to ROLE_ADMIN.',
    language: 'java',
    solution: `@EnableGlobalMethodSecurity(prePostEnabled=true)\n@Service\npublic class AdminSvc{ @PreAuthorize("hasRole('ADMIN')") public void adminOp(){ } }`
  },
  {
    id: 'springboot-33',
    title: 'Externalized configuration (ConfigServer)',
    statement: 'Explain retrieving properties from an external config server at startup (high level).',
    language: 'text',
    solution: `Use Spring Cloud Config: set spring.config.import or bootstrap config to point to config server; client fetches properties at startup and refreshes via /actuator/refresh if needed.`
  },
  {
    id: 'springboot-34',
    title: 'Database migration with Flyway',
    statement: 'Add Flyway migrations that create the users table on startup.',
    language: 'sql',
    solution: `-- V1__create_users.sql\nCREATE TABLE users (id BIGSERIAL PRIMARY KEY, name VARCHAR(255));`
  },
  {
    id: 'springboot-35',
    title: 'Calling external HTTP API',
    statement: 'Use WebClient to call a remote JSON API and map the response.',
    language: 'java',
    solution: `WebClient client = WebClient.create("https://api.example.com");\nMono<Resp> r = client.get().uri("/data").retrieve().bodyToMono(Resp.class);`
  },
  {
    id: 'springboot-36',
    title: 'Feign client (Spring Cloud)',
    statement: 'Declare a Feign client interface to call another microservice.',
    language: 'java',
    solution: `@FeignClient("products")\npublic interface ProductClient{ @GetMapping("/products/{id}") Product get(@PathVariable Long id); }`
  },
  {
    id: 'springboot-37',
    title: 'Circuit breaker (Resilience4j)',
    statement: 'Wrap remote calls with a circuit breaker and a fallback.',
    language: 'java',
    solution: `@Service\npublic class RemoteSvc{ @CircuitBreaker(name="remote", fallbackMethod="fallback") public String call(){ return client.get(); } public String fallback(Throwable t){ return "fallback"; } }`
  },
  {
    id: 'springboot-38',
    title: 'SSE (Server-Sent Events)',
    statement: 'Implement an endpoint that streams events to clients via SSE.',
    language: 'java',
    solution: `@GetMapping(value="/stream", produces=MediaType.TEXT_EVENT_STREAM_VALUE)\npublic Flux<String> stream(){ return Flux.interval(Duration.ofSeconds(1)).map(i -> "tick:" + i); }`
  },
  {
    id: 'springboot-39',
    title: 'WebSocket basic',
    statement: 'Configure a simple WebSocket endpoint using Spring WebSocket.',
    language: 'java',
    solution: `@Configuration\n@EnableWebSocketMessageBroker\npublic class WsConfig implements WebSocketMessageBrokerConfigurer{ public void registerStompEndpoints(StompEndpointRegistry r){ r.addEndpoint("/ws").withSockJS(); } }`
  },
  {
    id: 'springboot-40',
    title: 'Streaming large response',
    statement: 'Return a streaming response (InputStreamResource) for large files without loading into memory.',
    language: 'java',
    solution: `@GetMapping("/big")\npublic ResponseEntity<Resource> big(){ InputStream is = new FileInputStream("big.dat"); Resource r = new InputStreamResource(is); return ResponseEntity.ok().body(r); }`
  },
  {
    id: 'springboot-41',
    title: 'DTO mapping',
    statement: 'Map entity to DTO in controller and avoid exposing internal fields.',
    language: 'java',
    solution: `public class UserDto{ public Long id; public String name; }\n// in controller\nUserDto toDto(User u){ UserDto d = new UserDto(); d.id = u.id; d.name = u.name; return d; }`
  },
  {
    id: 'springboot-42',
    title: 'Partial updates (PATCH)',
    statement: 'Implement PATCH /users/{id} that accepts partial JSON to update allowed fields.',
    language: 'java',
    solution: `@PatchMapping("/users/{id}")\npublic User patch(@PathVariable Long id, @RequestBody Map<String,Object> upd){ User u=repo.findById(id).get(); if(upd.containsKey("name")) u.name = (String)upd.get("name"); return repo.save(u); }`
  },
  {
    id: 'springboot-43',
    title: 'Graceful shutdown',
    statement: 'Explain enabling graceful shutdown and how to finish in-flight requests.',
    language: 'text',
    solution: `Set server.shutdown=graceful and configure spring.lifecycle.timeout-per-shutdown-phase; ensures Tomcat stops accepting new requests and waits for active threads to finish.`
  },
  {
    id: 'springboot-44',
    title: 'Health check custom endpoint',
    statement: 'Add an endpoint that checks connectivity to a downstream service and returns aggregated health.',
    language: 'java',
    solution: `@Component\npublic class DownstreamHealth implements HealthIndicator{ public Health health(){ boolean ok = checkRemote(); return ok?Health.up().build():Health.down().withDetail("err","no") .build(); } }`
  },
  {
    id: 'springboot-45',
    title: 'Rate limiting (simple)',
    statement: 'Implement a basic in-memory rate limiter for an endpoint per IP using a filter.',
    language: 'java',
    solution: `// sketch: use ConcurrentHashMap<String, AtomicInteger> counts and ServletFilter that increments and rejects when over limit` 
  },
  {
    id: 'springboot-46',
    title: 'Content negotiation',
    statement: 'Return JSON or XML based on Accept header using MessageConverters.',
    language: 'java',
    solution: `// Ensure jackson-dataformat-xml on classpath; Spring will pick appropriate HttpMessageConverter and serialize to requested media type.`
  },
  {
    id: 'springboot-47',
    title: 'Profiling endpoints with actuator',
    statement: 'Enable actuator endpoints and show how to expose custom metrics.',
    language: 'java',
    solution: `@Component\npublic class MyMetrics{ @Autowired MeterRegistry registry; public void record(){ registry.counter("my.calls").increment(); } }`
  },
  {
    id: 'springboot-48',
    title: 'Dockerize Spring Boot app',
    statement: 'Provide a simple Dockerfile to run a Spring Boot fat jar.',
    language: 'dockerfile',
    solution: `FROM eclipse-temurin:17-jdk-alpine\nCOPY app.jar /app/app.jar\nENTRYPOINT ["java","-jar","/app/app.jar"]`
  },
  {
    id: 'springboot-49',
    title: 'Graceful retry for remote calls',
    statement: 'Implement retries with exponential backoff for WebClient calls.',
    language: 'java',
    solution: `webClient.get().uri("/x").retrieve().bodyToMono(Type.class).retryWhen(Retry.backoff(3, Duration.ofMillis(100)).filter(throwable -> true));`
  },
  {
    id: 'springboot-50',
    title: 'Unit testing service with Mockito',
    statement: 'Write a unit test for a service method that depends on a repository using Mockito.',
    language: 'java',
    solution: `@ExtendWith(MockitoExtension.class)\npublic class SvcTest{ @Mock UserRepository repo; @InjectMocks UserService svc; @Test void t(){ when(repo.findById(1L)).thenReturn(Optional.of(new User())); var r = svc.get(1L); assertNotNull(r); } }`
  }
];

export default springboot;
