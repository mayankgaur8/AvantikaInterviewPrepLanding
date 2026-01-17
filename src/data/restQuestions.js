export const REST_QUESTIONS = [

/* =====================================================
   BASIC – 20 QUESTIONS
===================================================== */

{
  id: "rest-b-01",
  level: "Basic",
  q: "What is REST?",
  a: "REST (Representational State Transfer) is an architectural style for building scalable web services using HTTP and stateless communication."
},

{
  id: "rest-b-02",
  level: "Basic",
  q: "What are the core principles of REST?",
  a: "Client-Server, Statelessness, Cacheability, Uniform Interface, Layered System, Code on Demand (optional)."
},

{
  id: "rest-b-03",
  level: "Basic",
  q: "What is a REST resource?",
  a: "A resource is any entity exposed via REST, identified by a unique URI (e.g., /users/101)."
},

{
  id: "rest-b-04",
  level: "Basic",
  q: "What HTTP methods are commonly used in REST?",
  a: "GET (read), POST (create), PUT (replace), PATCH (partial update), DELETE (remove)."
},

{
  id: "rest-b-05",
  level: "Basic",
  q: "What is the difference between PUT and POST?",
  answer: {
    summary: "PUT replaces a resource at a known URI, POST creates a new resource.",
    table: {
      title: "PUT vs POST",
      headers: ["Aspect", "PUT", "POST"],
      rows: [
        ["Purpose", "Update/Replace", "Create"],
        ["Idempotent", "Yes", "No"],
        ["URI", "Client-defined", "Server-generated"]
      ]
    }
  }
},

{
  id: "rest-b-06",
  level: "Basic",
  q: "What does statelessness mean in REST?",
  a: "Each request contains all information needed. Server does not store client session state."
},

{
  id: "rest-b-07",
  level: "Basic",
  q: "What are HTTP status codes?",
  a: "Standard response codes indicating request outcome (2xx success, 4xx client error, 5xx server error)."
},

{
  id: "rest-b-08",
  level: "Basic",
  q: "Give examples of common HTTP status codes.",
  a: "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error."
},

{
  id: "rest-b-09",
  level: "Basic",
  q: "What is JSON and why is it popular in REST?",
  a: "JSON is a lightweight, human-readable data format. It is fast, language-independent, and easy to parse."
},

{
  id: "rest-b-10",
  level: "Basic",
  q: "What is Content-Type header?",
  a: "Specifies request/response media type, e.g., application/json."
},

{
  id: "rest-b-11",
  level: "Basic",
  q: "What is Accept header?",
  a: "Indicates which response media types the client can handle."
},

{
  id: "rest-b-12",
  level: "Basic",
  q: "What is idempotency?",
  a: "An operation is idempotent if repeated calls produce the same result (GET, PUT, DELETE)."
},

{
  id: "rest-b-13",
  level: "Basic",
  q: "Is DELETE idempotent?",
  a: "Yes. Multiple DELETE requests result in the same final state (resource removed)."
},

{
  id: "rest-b-14",
  level: "Basic",
  q: "What is REST endpoint?",
  a: "A specific URL where a REST resource is exposed (e.g., /api/users)."
},

{
  id: "rest-b-15",
  level: "Basic",
  q: "What is a REST controller in Spring?",
  a: "@RestController combines @Controller and @ResponseBody to return JSON/XML responses."
},

{
  id: "rest-b-16",
  level: "Basic",
  q: "Simple Spring Boot REST example?",
  answer: {
    summary: "Basic REST endpoint using Spring Boot.",
    codeTitle: "Spring REST Controller",
    code: `@RestController
@RequestMapping("/api/hello")
public class HelloController {

  @GetMapping
  public String hello() {
    return "Hello REST";
  }
}`
  }
},

{
  id: "rest-b-17",
  level: "Basic",
  q: "What is @PathVariable?",
  a: "Binds URI path values to method parameters."
},

{
  id: "rest-b-18",
  level: "Basic",
  q: "What is @RequestParam?",
  a: "Binds query parameters to method arguments."
},

{
  id: "rest-b-19",
  level: "Basic",
  q: "Difference between @RequestBody and @ResponseBody?",
  a: "@RequestBody reads JSON into Java object; @ResponseBody converts Java object to JSON."
},

{
  id: "rest-b-20",
  level: "Basic",
  q: "What is RESTful API?",
  a: "An API that follows REST constraints, uses HTTP verbs properly, and exposes resources via URIs."
},

/* =====================================================
   INTERMEDIATE – 20 QUESTIONS
===================================================== */

{
  id: "rest-i-01",
  level: "Intermediate",
  q: "How do you design RESTful URIs?",
  a: "Use nouns, plural forms, hierarchy, avoid verbs (e.g., /users/{id}/orders)."
},

{
  id: "rest-i-02",
  level: "Intermediate",
  q: "What is API versioning?",
  a: "Managing changes without breaking clients using URI (/v1), headers, or media types."
},

{
  id: "rest-i-03",
  level: "Intermediate",
  q: "Best REST versioning approach?",
  a: "URI versioning is simplest and most widely adopted in enterprise systems."
},

{
  id: "rest-i-04",
  level: "Intermediate",
  q: "What is pagination in REST?",
  a: "Breaking large results into pages using parameters like page, size, offset, limit."
},

{
  id: "rest-i-05",
  level: "Intermediate",
  q: "Spring Boot pagination example?",
  answer: {
    summary: "Pagination using Spring Data JPA.",
    codeTitle: "Pagination Example",
    code: `@GetMapping("/users")
public Page<User> getUsers(Pageable pageable) {
  return userRepository.findAll(pageable);
}`
  }
},

{
  id: "rest-i-06",
  level: "Intermediate",
  q: "What is filtering and sorting in REST?",
  a: "Filtering narrows data; sorting orders results (e.g., ?status=ACTIVE&sort=name,asc)."
},

{
  id: "rest-i-07",
  level: "Intermediate",
  q: "What is HATEOAS?",
  a: "Hypermedia As The Engine Of Application State – responses include links to related actions."
},

{
  id: "rest-i-08",
  level: "Intermediate",
  q: "What is DTO and why use it?",
  a: "DTO separates API contract from internal entities, improving security and flexibility."
},

{
  id: "rest-i-09",
  level: "Intermediate",
  q: "How do you handle validation in REST?",
  a: "Use Bean Validation (@Valid, @NotNull, @Size) with @RequestBody."
},

{
  id: "rest-i-10",
  level: "Intermediate",
  q: "Example of request validation?",
  answer: {
    summary: "Validation using Jakarta Bean Validation.",
    codeTitle: "Validation Example",
    code: `public class UserDto {
  @NotBlank
  private String name;

  @Email
  private String email;
}`
  }
},

{
  id: "rest-i-11",
  level: "Intermediate",
  q: "How do you handle exceptions globally?",
  a: "Using @ControllerAdvice and @ExceptionHandler."
},

{
  id: "rest-i-12",
  level: "Intermediate",
  q: "What is ResponseEntity?",
  a: "Allows full control over HTTP response (status, headers, body)."
},

{
  id: "rest-i-13",
  level: "Intermediate",
  q: "What is CORS?",
  a: "Cross-Origin Resource Sharing allows browsers to call APIs from different origins."
},

{
  id: "rest-i-14",
  level: "Intermediate",
  q: "How to enable CORS in Spring Boot?",
  a: "Using @CrossOrigin annotation or WebMvcConfigurer."
},

{
  id: "rest-i-15",
  level: "Intermediate",
  q: "Difference between PUT and PATCH?",
  a: "PUT replaces entire resource; PATCH updates partial fields."
},

{
  id: "rest-i-16",
  level: "Intermediate",
  q: "How do you secure REST APIs?",
  a: "Using OAuth2, JWT, API keys, HTTPS, and Spring Security."
},

{
  id: "rest-i-17",
  level: "Intermediate",
  q: "What is JWT?",
  a: "JSON Web Token – compact token for stateless authentication."
},

{
  id: "rest-i-18",
  level: "Intermediate",
  q: "What is caching in REST?",
  a: "Using HTTP headers (Cache-Control, ETag) to reduce server load."
},

{
  id: "rest-i-19",
  level: "Intermediate",
  q: "What is ETag?",
  a: "Entity Tag used for conditional requests and caching."
},

{
  id: "rest-i-20",
  level: "Intermediate",
  q: "How do you document REST APIs?",
  a: "Using OpenAPI/Swagger."
},

/* =====================================================
   ADVANCED – 10 QUESTIONS
===================================================== */

{
  id: "rest-a-01",
  level: "Advanced",
  q: "How do you design REST APIs for scalability?",
  a: "Stateless design, pagination, caching, async processing, load balancing."
},

{
  id: "rest-a-02",
  level: "Advanced",
  q: "How do you ensure idempotency for POST?",
  a: "Use Idempotency-Key header and store processed requests."
},

{
  id: "rest-a-03",
  level: "Advanced",
  q: "How do you handle distributed transactions in REST?",
  a: "Use Saga pattern instead of 2PC."
},

{
  id: "rest-a-04",
  level: "Advanced",
  q: "What is REST vs GraphQL?",
  a: "REST has fixed endpoints; GraphQL allows clients to define response shape."
},

{
  id: "rest-a-05",
  level: "Advanced",
  q: "How do you version APIs without breaking clients?",
  a: "Backward-compatible changes, deprecation strategy, parallel versions."
},

{
  id: "rest-a-06",
  level: "Advanced",
  q: "How do you handle large payloads?",
  a: "Streaming responses, pagination, compression (gzip)."
},

{
  id: "rest-a-07",
  level: "Advanced",
  q: "How do you secure REST APIs at enterprise scale?",
  a: "OAuth2, JWT, API Gateway, rate limiting, mTLS."
},

{
  id: "rest-a-08",
  level: "Advanced",
  q: "What is API Gateway role in REST?",
  a: "Central entry point for auth, routing, rate limiting, monitoring."
},

{
  id: "rest-a-09",
  level: "Advanced",
  q: "How do you implement rate limiting?",
  a: "Token bucket or leaky bucket algorithms at gateway level."
},

{
  id: "rest-a-10",
  level: "Advanced",
  q: "How do you trace REST calls in microservices?",
  a: "Use correlation IDs, distributed tracing (Zipkin, OpenTelemetry)."
}

];
