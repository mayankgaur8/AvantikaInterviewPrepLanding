// src/data/mcqs/springMcq.js
// 50 MCQs on Spring Framework (Basic • Intermediate • Advanced)

export const SPRING_MCQ = [

  // ================= BASIC (1–17) =================
  {
    id: "spring-mcq-1",
    tag: "Spring • Basic",
    q: "What is Spring Framework primarily used for?",
    options: [
      "Database management",
      "Enterprise application development with DI and AOP",
      "Operating system services",
      "Frontend UI rendering only",
    ],
    answer: 1,
    explain:
      "Spring Framework simplifies enterprise Java development using Dependency Injection (DI) and Aspect-Oriented Programming (AOP).",
  },
  {
    id: "spring-mcq-2",
    tag: "Spring • Basic",
    q: "What is Dependency Injection (DI)?",
    options: [
      "Creating objects manually",
      "Injecting dependencies at runtime instead of hardcoding",
      "Calling methods statically",
      "Destroying objects automatically",
    ],
    answer: 1,
    explain:
      "DI allows objects to receive dependencies externally, improving testability and loose coupling.",
  },
  {
    id: "spring-mcq-3",
    tag: "Spring • Basic",
    q: "Which container is the core of Spring Framework?",
    options: ["BeanFactory", "ApplicationContext", "DispatcherServlet", "ContextLoader"],
    answer: 1,
    explain:
      "ApplicationContext is the central container that manages beans and application lifecycle.",
  },
  {
    id: "spring-mcq-4",
    tag: "Spring • Basic",
    q: "What is a Spring Bean?",
    options: [
      "A Java class with main method",
      "An object managed by Spring container",
      "A database entity",
      "A configuration file",
    ],
    answer: 1,
    explain:
      "A Spring Bean is an object instantiated, configured, and managed by Spring IoC container.",
  },
  {
    id: "spring-mcq-5",
    tag: "Spring • Basic",
    q: "Which annotation marks a class as a Spring-managed component?",
    options: ["@Service", "@Repository", "@Component", "All of the above"],
    answer: 3,
    explain:
      "@Component, @Service, and @Repository are stereotype annotations for Spring beans.",
  },
  {
    id: "spring-mcq-6",
    tag: "Spring • Basic",
    q: "What is the default scope of a Spring bean?",
    options: ["prototype", "request", "session", "singleton"],
    answer: 3,
    explain:
      "By default, Spring beans are singleton (one instance per container).",
  },
  {
    id: "spring-mcq-7",
    tag: "Spring • Basic",
    q: "Which annotation is used for autowiring dependencies?",
    options: ["@Inject", "@Autowired", "@Resource", "All of the above"],
    answer: 3,
    explain:
      "Spring supports @Autowired, @Inject (JSR-330), and @Resource (JSR-250).",
  },
  {
    id: "spring-mcq-8",
    tag: "Spring • Basic",
    q: "Which XML element is used to define a bean?",
    options: ["<bean>", "<object>", "<component>", "<spring>"],
    answer: 0,
    explain:
      "<bean> tag is used in XML-based Spring configuration.",
  },
  {
    id: "spring-mcq-9",
    tag: "Spring • Basic",
    q: "Which annotation enables component scanning?",
    options: ["@EnableScan", "@ComponentScan", "@ScanComponents", "@SpringScan"],
    answer: 1,
    explain:
      "@ComponentScan tells Spring where to search for annotated components.",
  },
  {
    id: "spring-mcq-10",
    tag: "Spring • Basic",
    q: "What is Inversion of Control (IoC)?",
    options: [
      "Control flow handled by JVM",
      "Framework controls object creation and lifecycle",
      "Manual dependency handling",
      "Compiler optimization",
    ],
    answer: 1,
    explain:
      "IoC means control of object creation and wiring is transferred to the Spring container.",
  },
  {
    id: "spring-mcq-11",
    tag: "Spring • Basic",
    q: "Which annotation is used for configuration classes?",
    options: ["@Config", "@Configuration", "@SpringConfig", "@Context"],
    answer: 1,
    explain:
      "@Configuration indicates a class declares @Bean definitions.",
  },
  {
    id: "spring-mcq-12",
    tag: "Spring • Basic",
    q: "What does @Bean annotation do?",
    options: [
      "Marks a class as a bean",
      "Registers a method return value as a Spring bean",
      "Injects a bean",
      "Defines scope",
    ],
    answer: 1,
    explain:
      "@Bean registers the return object of a method as a Spring-managed bean.",
  },
  {
    id: "spring-mcq-13",
    tag: "Spring • Basic",
    q: "Which module provides JDBC abstraction?",
    options: ["Spring ORM", "Spring MVC", "Spring JDBC", "Spring AOP"],
    answer: 2,
    explain:
      "Spring JDBC simplifies database access and exception handling.",
  },
  {
    id: "spring-mcq-14",
    tag: "Spring • Basic",
    q: "Which annotation is used to mark DAO layer?",
    options: ["@Service", "@Controller", "@Repository", "@Component"],
    answer: 2,
    explain:
      "@Repository indicates persistence layer and translates exceptions.",
  },
  {
    id: "spring-mcq-15",
    tag: "Spring • Basic",
    q: "Which Spring module supports MVC web applications?",
    options: ["Spring Core", "Spring AOP", "Spring MVC", "Spring Context"],
    answer: 2,
    explain:
      "Spring MVC provides Model-View-Controller architecture for web apps.",
  },
  {
    id: "spring-mcq-16",
    tag: "Spring • Basic",
    q: "What is the role of DispatcherServlet?",
    options: [
      "Database dispatcher",
      "Front controller handling all web requests",
      "Security filter",
      "View resolver",
    ],
    answer: 1,
    explain:
      "DispatcherServlet acts as the front controller in Spring MVC.",
  },
  {
    id: "spring-mcq-17",
    tag: "Spring • Basic",
    q: "Which annotation maps HTTP requests to controller methods?",
    options: ["@RequestMapping", "@GetMapping", "@PostMapping", "All of the above"],
    answer: 3,
    explain:
      "@RequestMapping and its shortcuts map HTTP requests to handler methods.",
  },

  // ================= INTERMEDIATE (18–34) =================
  {
    id: "spring-mcq-18",
    tag: "Spring • Intermediate",
    q: "What is Aspect-Oriented Programming (AOP)?",
    options: [
      "Object creation technique",
      "Programming paradigm to separate cross-cutting concerns",
      "Database transaction model",
      "UI design pattern",
    ],
    answer: 1,
    explain:
      "AOP separates cross-cutting concerns like logging, security, and transactions.",
  },
  {
    id: "spring-mcq-19",
    tag: "Spring • Intermediate",
    q: "Which annotation defines a transactional method?",
    options: ["@Transaction", "@EnableTransaction", "@Transactional", "@Tx"],
    answer: 2,
    explain:
      "@Transactional manages transaction boundaries declaratively.",
  },
  {
    id: "spring-mcq-20",
    tag: "Spring • Intermediate",
    q: "Which proxy mechanism does Spring AOP use by default?",
    options: ["CGLIB", "JDK Dynamic Proxy", "ByteBuddy", "ASM"],
    answer: 1,
    explain:
      "Spring AOP uses JDK Dynamic Proxy by default; CGLIB if no interface exists.",
  },
  {
    id: "spring-mcq-21",
    tag: "Spring • Intermediate",
    q: "What is Bean lifecycle order?",
    options: [
      "Instantiate → Populate → Initialize → Destroy",
      "Create → Destroy → Initialize",
      "Initialize → Create → Destroy",
      "Populate → Create → Destroy",
    ],
    answer: 0,
    explain:
      "Spring lifecycle: instantiate → dependency injection → init → destroy.",
  },
  {
    id: "spring-mcq-22",
    tag: "Spring • Intermediate",
    q: "What is @Qualifier used for?",
    options: [
      "Defining scope",
      "Resolving ambiguity when multiple beans exist",
      "Bean lifecycle control",
      "Transaction management",
    ],
    answer: 1,
    explain:
      "@Qualifier specifies which bean to inject when multiple candidates exist.",
  },
  {
    id: "spring-mcq-23",
    tag: "Spring • Intermediate",
    q: "What does @Primary do?",
    options: [
      "Marks a bean as default choice for autowiring",
      "Marks bean as singleton",
      "Creates primary key",
      "Defines priority in controller",
    ],
    answer: 0,
    explain:
      "@Primary gives preference to a bean when multiple beans are available.",
  },
  {
    id: "spring-mcq-24",
    tag: "Spring • Intermediate",
    q: "What is the purpose of HandlerInterceptor?",
    options: [
      "Intercept HTTP requests before/after controller execution",
      "Validate entities",
      "Manage transactions",
      "Handle database connections",
    ],
    answer: 0,
    explain:
      "HandlerInterceptor intercepts web requests for pre/post processing.",
  },
  {
    id: "spring-mcq-25",
    tag: "Spring • Intermediate",
    q: "Which annotation is used for global exception handling?",
    options: [
      "@ExceptionHandler",
      "@ControllerAdvice",
      "@ErrorHandler",
      "All of the above",
    ],
    answer: 1,
    explain:
      "@ControllerAdvice centralizes exception handling across controllers.",
  },
  {
    id: "spring-mcq-26",
    tag: "Spring • Intermediate",
    q: "What is the purpose of ViewResolver?",
    options: [
      "Map views to controllers",
      "Resolve logical view names to actual views",
      "Handle security",
      "Resolve beans",
    ],
    answer: 1,
    explain:
      "ViewResolver maps logical view names to JSP/Thymeleaf templates.",
  },
  {
    id: "spring-mcq-27",
    tag: "Spring • Intermediate",
    q: "Which scope creates a new bean for every request?",
    options: ["singleton", "prototype", "request", "session"],
    answer: 2,
    explain:
      "request scope creates one bean per HTTP request.",
  },
  {
    id: "spring-mcq-28",
    tag: "Spring • Intermediate",
    q: "Which Spring module integrates Hibernate?",
    options: ["Spring ORM", "Spring JDBC", "Spring AOP", "Spring MVC"],
    answer: 0,
    explain:
      "Spring ORM integrates ORM frameworks like Hibernate and JPA.",
  },
  {
    id: "spring-mcq-29",
    tag: "Spring • Intermediate",
    q: "What does @PathVariable do?",
    options: [
      "Reads query parameter",
      "Binds URI template variable",
      "Reads request body",
      "Reads header value",
    ],
    answer: 1,
    explain:
      "@PathVariable binds URI path segments to method parameters.",
  },
  {
    id: "spring-mcq-30",
    tag: "Spring • Intermediate",
    q: "Which annotation validates request body?",
    options: ["@Valid", "@Check", "@Verify", "@ValidatedOnly"],
    answer: 0,
    explain:
      "@Valid triggers Bean Validation for request objects.",
  },
  {
    id: "spring-mcq-31",
    tag: "Spring • Intermediate",
    q: "What is the purpose of MessageSource?",
    options: [
      "Internationalization (i18n)",
      "Message queues",
      "REST messaging",
      "Logging",
    ],
    answer: 0,
    explain:
      "MessageSource supports internationalization (i18n).",
  },
  {
    id: "spring-mcq-32",
    tag: "Spring • Intermediate",
    q: "Which annotation enables Spring MVC?",
    options: ["@EnableMVC", "@EnableWebMvc", "@EnableSpringMVC", "@EnableController"],
    answer: 1,
    explain:
      "@EnableWebMvc enables Spring MVC configuration.",
  },
  {
    id: "spring-mcq-33",
    tag: "Spring • Intermediate",
    q: "Which feature allows method-level security?",
    options: [
      "@EnableMethodSecurity",
      "@EnableSecurity",
      "@SecureMethod",
      "@EnableACL",
    ],
    answer: 0,
    explain:
      "@EnableMethodSecurity enables annotations like @PreAuthorize.",
  },
  {
    id: "spring-mcq-34",
    tag: "Spring • Intermediate",
    q: "Which annotation injects HTTP request body?",
    options: ["@RequestParam", "@RequestBody", "@PathVariable", "@Body"],
    answer: 1,
    explain:
      "@RequestBody maps HTTP request body to Java object.",
  },

  // ================= ADVANCED (35–50) =================
  {
    id: "spring-mcq-35",
    tag: "Spring • Advanced",
    q: "What problem does Spring solve compared to EJB?",
    options: [
      "Tight coupling and heavy container",
      "Lack of annotations",
      "No transaction support",
      "No dependency injection",
    ],
    answer: 0,
    explain:
      "Spring is lightweight, POJO-based, and avoids heavy EJB containers.",
  },
  {
    id: "spring-mcq-36",
    tag: "Spring • Advanced",
    q: "Which transaction propagation joins an existing transaction?",
    options: ["REQUIRES_NEW", "MANDATORY", "REQUIRED", "NEVER"],
    answer: 2,
    explain:
      "REQUIRED joins an existing transaction or creates a new one if none exists.",
  },
  {
    id: "spring-mcq-37",
    tag: "Spring • Advanced",
    q: "What is self-invocation problem in Spring?",
    options: [
      "Calling same bean method bypasses proxy",
      "Multiple bean creation",
      "Circular dependency",
      "Bean override error",
    ],
    answer: 0,
    explain:
      "Internal method calls bypass proxy, so AOP/transactions may not work.",
  },
  {
    id: "spring-mcq-38",
    tag: "Spring • Advanced",
    q: "How does Spring manage circular dependencies?",
    options: [
      "Fails always",
      "Uses early bean references",
      "Uses reflection only",
      "Ignores them",
    ],
    answer: 1,
    explain:
      "Spring resolves circular dependencies using early references (setter injection).",
  },
  {
    id: "spring-mcq-39",
    tag: "Spring • Advanced",
    q: "Which approach is best for large-scale Spring apps?",
    options: [
      "XML-only configuration",
      "Annotation + Java Config",
      "Hardcoded dependencies",
      "Single giant context",
    ],
    answer: 1,
    explain:
      "Annotation-based and Java Config is clean, testable, and scalable.",
  },
  {
    id: "spring-mcq-40",
    tag: "Spring • Advanced",
    q: "What is Spring’s event mechanism?",
    options: [
      "Observer pattern using ApplicationEventPublisher",
      "Message queue",
      "REST callback",
      "Database trigger",
    ],
    answer: 0,
    explain:
      "Spring events implement Observer pattern for decoupled communication.",
  },
  {
    id: "spring-mcq-41",
    tag: "Spring • Advanced",
    q: "Which feature enables reactive programming in Spring?",
    options: ["Spring MVC", "Spring WebFlux", "Spring ORM", "Spring Batch"],
    answer: 1,
    explain:
      "Spring WebFlux enables non-blocking reactive programming.",
  },
  {
    id: "spring-mcq-42",
    tag: "Spring • Advanced",
    q: "Which mechanism ensures thread safety of singleton beans?",
    options: [
      "Spring automatically synchronizes all beans",
      "Developer must ensure thread safety",
      "Spring creates thread-local beans",
      "Spring clones beans per thread",
    ],
    answer: 1,
    explain:
      "Singleton beans are shared; developers must ensure thread safety.",
  },
  {
    id: "spring-mcq-43",
    tag: "Spring • Advanced",
    q: "What is the benefit of constructor injection?",
    options: [
      "Optional dependencies",
      "Circular dependency handling",
      "Immutability and testability",
      "Lazy loading",
    ],
    answer: 2,
    explain:
      "Constructor injection ensures required dependencies and improves immutability.",
  },
  {
    id: "spring-mcq-44",
    tag: "Spring • Advanced",
    q: "What does @Lookup annotation do?",
    options: [
      "Inject prototype bean into singleton",
      "Find bean by name",
      "Lookup JNDI resources",
      "Resolve properties",
    ],
    answer: 0,
    explain:
      "@Lookup allows runtime retrieval of prototype-scoped beans.",
  },
  {
    id: "spring-mcq-45",
    tag: "Spring • Advanced",
    q: "Which approach is recommended for cross-cutting concerns?",
    options: ["Inheritance", "Composition", "AOP", "Static methods"],
    answer: 2,
    explain:
      "AOP cleanly separates cross-cutting concerns like logging and security.",
  },
  {
    id: "spring-mcq-46",
    tag: "Spring • Advanced",
    q: "What is Spring’s recommended testing approach?",
    options: [
      "Only unit tests",
      "Only integration tests",
      "Layered testing (unit + slice + integration)",
      "Manual testing",
    ],
    answer: 2,
    explain:
      "Spring encourages layered testing strategy for reliability.",
  },
  {
    id: "spring-mcq-47",
    tag: "Spring • Advanced",
    q: "Which design principle is core to Spring?",
    options: ["KISS", "DRY", "SOLID (Dependency Inversion)", "YAGNI"],
    answer: 2,
    explain:
      "Spring heavily relies on Dependency Inversion principle.",
  },
  {
    id: "spring-mcq-48",
    tag: "Spring • Advanced",
    q: "Which feature allows runtime behavior modification without code changes?",
    options: [
      "AOP",
      "Reflection",
      "Polymorphism",
      "Inheritance",
    ],
    answer: 0,
    explain:
      "AOP allows adding behavior dynamically using proxies.",
  },
  {
    id: "spring-mcq-49",
    tag: "Spring • Advanced",
    q: "How does Spring ensure loose coupling?",
    options: [
      "By using interfaces and DI",
      "By avoiding annotations",
      "By static binding",
      "By final classes",
    ],
    answer: 0,
    explain:
      "Interfaces + DI decouple implementation from usage.",
  },
  {
    id: "spring-mcq-50",
    tag: "Spring • Advanced",
    q: "What is the best practice for large Spring configuration?",
    options: [
      "Single huge config class",
      "Split config by domain/module",
      "Use XML only",
      "Hardcode everything",
    ],
    answer: 1,
    explain:
      "Modular configuration improves maintainability and clarity.",
  },
];
