import { SERVLET_QUESTIONS } from "./servletQuestions";
import { EJB_QUESTIONS } from "./ejbQuestions";
import { HIBERNATE_QUESTIONS } from "./hibernateQuestions";
import { SPRING_QUESTIONS } from "./springQuestions";
import { SPRINGBOOT_QUESTIONS } from "./springBootQuestions";
import { SOAP_QUESTIONS } from "./soapQuestions";
import { REST_QUESTIONS } from "./restQuestions";
import { MICROSERVICES_QUESTIONS } from "./microservicesQuestions";
import { DESIGN_PATTERNS_QUESTIONS } from "./designPatternsQuestions";
import { AWS_QUESTIONS } from "./awsQuestions";
import { AZURE_QUESTIONS } from "./azureQuestions";
import { GCP_QUESTIONS } from "./gcpQuestions";
import { REACT_QUESTIONS } from "./reactQuestions";
import { ANGULAR_QUESTIONS } from "./angularQuestions";
import { KAFKA_QUESTIONS } from "./kafkaQuestions";
import { DOCKER_QUESTIONS } from "./dockerQuestions";
import { KUBERNETES_QUESTIONS } from "./kubernetesQuestions";
import { SYSTEM_DESIGN_QUESTIONS } from "./systemDesignQuestions";
import { DEVOPS_QUESTIONS}  from "./devopsQuestions";
import { CICD_QUESTIONS } from "./cicdQuestions";
import { PYTHON_QUESTIONS } from "./pythonQuestions";
import { DJANGO_QUESTIONS } from "./djangoQuestions";
const byLevel = (arr = []) => ({
  Basic: arr.filter(q => q.level === "Basic").map(({ id, q, a }) => ({ id, q, a })),
  Intermediate: arr.filter(q => q.level === "Intermediate").map(({ id, q, a }) => ({ id, q, a })),
  Advanced: arr.filter(q => q.level === "Advanced").map(({ id, q, a }) => ({ id, q, a })),
});
export const topics = [
  { id: "core_java", label: "Core Java" },
  { id: "jsp", label: "JSP" },
  { id: "servlets", label: "Servlets" },
  { id: "ejb", label: "EJB" },
  { id: "hibernate", label: "Hibernate" },
  { id: "spring", label: "Spring" },
  { id: "springboot", label: "Spring Boot" },
  { id: "soap", label: "SOAP" },
  { id: "rest", label: "REST" },
  { id: "microservices", label: "Microservices" },
  { id: "ci_cd", label: "CI/CD" },
  { id: "design_patterns", label: "Design Patterns" },
  { id: "aws", label: "AWS" },
  { id: "azure", label: "Azure" },
  { id: "gcp", label: "Google Cloud" },
  { id: "react", label: "React" },
  { id: "angular", label: "Angular" },
  { id: "kafka", label: "Kafka" },
  { id: "docker", label: "Docker" },
  { id: "kubernetes", label: "Kubernetes" },
];

export const qaBank = {
  core_java: {
    Basic: [
      { q: "What is JVM, JRE, and JDK?", a: "JDK = tools + JRE; JRE = JVM + libs to run; JVM executes bytecode and manages memory." },
      { q: "What is the difference between == and equals() in Java?", a: "== compares primitive values or object references; equals() tests logical equality and can be overridden." },
      { q: "What is autoboxing and unboxing?", a: "Autoboxing converts primitives to wrapper objects automatically; unboxing converts wrappers back to primitives." },
      { q: "What is a ClassLoader?", a: "Component that loads classes into the JVM; common loaders: bootstrap, platform, system (application)." },
      { q: "What is the difference between checked and unchecked exceptions?", a: "Checked exceptions must be declared/handled at compile time; unchecked (RuntimeException) need not be." },
      { q: "What is final keyword used for?", a: "final variable cannot be reassigned, final method cannot be overridden, final class cannot be subclassed." },
      { q: "What does immutable mean and name an immutable class in Java?", a: "Immutable means state can't change after creation; example: java.lang.String, java.time.Instant." },
      { q: "What is the purpose of the transient modifier?", a: "Marks a field to be skipped during default serialization (ObjectOutputStream)." },
      { q: "What is the difference between ArrayList and LinkedList?", a: "ArrayList: backed by array, fast random access, slower insert/delete mid-list; LinkedList: nodes, fast insert/delete, slower random access." },
      { q: "How does String pool work?", a: "String literals are interned in the string pool; new String() creates separate object unless intern() is called." }
    ],
    Intermediate: [
      { q: "Explain HashMap internal working (Java 8+).", a: "HashMap uses an array of bins; hash determines index; collisions stored in a linked list that becomes a tree (Red-Black) past threshold for performance." },
      { q: "What causes a ConcurrentModificationException?", a: "Fail-fast iterators detect structural modification of collection (size changes) while iterating; use Iterator.remove() or concurrent collections." },
      { q: "How does ConcurrentHashMap work?", a: "Uses segmented/bucket locking and CAS-based updates; Java 8 uses finer-grained concurrency with bins and synchronized on nodes plus CAS operations." },
      { q: "Explain volatile and when to use it.", a: "volatile ensures visibility of writes to other threads and prevents instruction reordering for that variable; does not provide atomicity for compound ops." },
      { q: "What is the Java Memory Model 'happens-before' relation?", a: "Rules that guarantee visibility and ordering between threads: e.g., unlock->lock, write->volatile write->volatile read->read." },
      { q: "Difference between synchronized and ReentrantLock?", a: "synchronized is language-level monitor; ReentrantLock offers more features: tryLock, timed waits, interruptible locks, fairness policies." },
      { q: "Explain ThreadPoolExecutor and its core parameters.", a: "CorePoolSize, MaximumPoolSize, KeepAliveTime, WorkQueue, RejectionHandler. They control thread creation and task queuing behavior." },
      { q: "What is future vs callable?", a: "Callable returns a result and can throw exceptions; Future represents pending result and can be used to get() or cancel tasks." },
      { q: "How do you prevent deadlocks?", a: "Use lock ordering, tryLock with timeout, avoid nested locks, prefer higher-level concurrency utilities, detect and recover if needed." },
      { q: "Explain escape analysis and stack allocation in JVM optimizations.", a: "Escape analysis determines if an object is not used outside a method/thread and JVM can stack-allocate or scalar-replace it for performance." },
      { q: "What is garbage collection tuning? Key collectors?", a: "Tuning involves choosing collector (G1, Parallel, Shenandoah, ZGC), sizing heap, tuning pause/throughput trade-offs and GC threads." },
      { q: "What are soft, weak, phantom references?", a: "Soft: collected under memory pressure; Weak: collected on next GC if not strongly reachable; Phantom: used for post-mortem cleanup, require ReferenceQueue." },
      { q: "Explain differences between G1 and Parallel GC.", a: "Parallel focuses on throughput with stop-the-world pauses; G1 aims for predictable pause targets and compacts heap incrementally across regions." },
      { q: "What is method inlining and JIT?", a: "JIT compiler performs optimizations like inlining hot methods at runtime based on profiling to improve performance." },
      { q: "Explain class initialization deadlock example.", a: "Class initialization locks can deadlock if two classes initialize each other and try to load static fields/methods that require the other class's init." },
      { q: "What is PermGen vs Metaspace?", a: "PermGen (pre-Java 8) stored class metadata, sized by -XX:MaxPermSize; Metaspace (Java 8+) stores metadata in native memory and can grow with -XX:MaxMetaspaceSize." },
      { q: "How does serialization versioning work (serialVersionUID)?", a: "serialVersionUID identifies serialization-compatible class versions; mismatched UID causes InvalidClassException on deserialization." },
      { q: "Explain fork/join framework and work-stealing.", a: "ForkJoinPool splits tasks into subtasks and worker threads steal work from others to balance load; suitable for divide-and-conquer algorithms." },
      { q: "When to use immutable objects for concurrency?", a: "Immutable objects are inherently thread-safe and reduce synchronization needs; use for shared read-only state." },
      { q: "Explain difference between Stream.forEach and Stream.map/collect.", a: "forEach is terminal side-effecting operation; map transforms elements and collect aggregates results—prefer pure functions for map/collect." }
    ],
    Advanced: [
      { q: "Explain Java memory model guarantees for volatile and final fields.", a: "final fields: safe publication guarantees after constructor completes and 'this' not leaked; volatile guarantees visibility and ordering for reads/writes." },
      { q: "How to implement a lock-free data structure in Java?", a: "Use atomic primitives (AtomicReference, compareAndSet), careful memory ordering, and algorithms like Michael-Scott queue or Treiber stack." },
      { q: "Explain safepoints and why they matter for GC pauses.", a: "Safepoints are points where JVM can stop threads for GC or deoptimization; long safepoint time increases GC pause duration." },
      { q: "How to profile and diagnose a CPU/memory issue in production?", a: "Use sampling profilers (async-profiler), heap dumps, GC logs, flame graphs, jstack, and monitoring metrics to pinpoint hotspots." },
      { q: "Design a high-throughput low-latency object pool in Java.", a: "Minimize locking (use ring buffers or lock-free pools), preallocate, tune GC, consider off-heap objects or object reuse patterns." },
      { q: "Explain classloader isolation and shading to avoid conflicts.", a: "Use custom classloaders, package relocation (shading) to isolate versions of libraries and avoid linkage errors in modular apps." },
      { q: "What are the pitfalls of finalizers and why avoid them?", a: "Finalizers are unpredictable, can resurrect objects, and cause GC overhead; prefer try-with-resources and cleaners." },
      { q: "Explain JIT compilation tiers and C2/C1 compilers.", a: "JVM tiers include interpreter, C1 (client) for quick optimizations, and C2 (server) for heavy optimizations; methods get promoted based on invocation counts." },
      { q: "How to implement consistent hashing in Java?", a: "Use hash ring with virtual nodes to evenly distribute keys and handle node addition/removal with minimal remapping." },
      { q: "Explain memory fragmentation and compaction strategies.", a: "Fragmentation occurs when free spaces are noncontiguous; compacting collectors (like G1 regions) move objects to reduce fragmentation." },
      { q: "What is biased locking and how does it affect performance?", a: "Biased locking optimizes uncontended synchronization by associating a lock with a thread to avoid atomic operations; disabled in some workloads." },
      { q: "Explain techniques to reduce GC overhead for large-app heaps.", a: "Use off-heap caches, tune survivor spaces, avoid excessive allocation patterns, compress object headers, and pick low-pause collectors (ZGC/Shenandoah)." },
      { q: "How to ensure safe publication of objects across threads?", a: "Use volatile/final fields, synchronized blocks or concurrent data structures to publish objects so other threads see fully-constructed state." },
      { q: "Describe techniques for lock coarsening and lock elision.", a: "Lock coarsening combines multiple locks to reduce overhead, lock elision removes locking when JIT can prove it's unnecessary—both are JIT optimizations." },
      { q: "Explain JVM bytecode verification and security implications.", a: "Bytecode verifier checks stack/local variable types and access to ensure type safety and memory safety; prevents malformed or malicious bytecode." },
      { q: "How to design scalable session storage for web apps in Java?", a: "Use distributed caches (Redis), sticky sessions only when necessary, session compression, and async replication patterns." },
      { q: "Explain reactive vs imperative programming trade-offs in Java.", a: "Reactive (Project Reactor) offers non-blocking backpressure and resource efficiency at cost of complexity; imperative is simpler but may block threads." },
      { q: "How to safely use ThreadLocal to avoid memory leaks?", a: "Remove values when done, prefer weak references, and avoid storing large objects; ThreadLocal with thread pools must be cleared to prevent leaks." },
      { q: "Design considerations for a JVM-based microservice with low tail-latency.", a: "Choose low-pause GC, limit allocations in hot paths, warm up JIT, use pinned threads for critical I/O, and monitor GC/ops for tail-latency sources." }
    ],
  },

  jsp: {
    Basic: [
      { q: "Which JSP element is used to include another resource at request time?", a: "<jsp:include> includes content dynamically at request time, unlike directive include which is static." },
      { q: "What is the purpose of JSP directives?", a: "Directives control JSP translation behavior (page, include, taglib) and are evaluated at translation time." },
      { q: "What is an implicit object in JSP?", a: "Objects like request, response, session, application, out, config, pageContext are provided implicitly to JSPs." },
      { q: "Difference between <% %> scriptlet and <%= %> expression?", a: "<% %> holds Java code (scriptlet), <%= %> outputs expression result into the response." },
      { q: "How to forward a request from JSP to a servlet?", a: 'Use request.getRequestDispatcher("/path").forward(request,response) or <jsp:forward> tag.' },
      { q: "What are JSP tag libraries (JSTL)?", a: "JSTL provides standard tags for common tasks (core, fmt, sql, xml) to avoid scriptlets and improve readability." },
      { q: "How to avoid scriptlets in JSP pages?", a: "Use JSTL, custom tags, EL (Expression Language) and MVC pattern to keep JSP as view-only templates." },
      { q: "What is JSP translation phase?", a: "JSP is translated to a servlet (Java source), compiled to .class, then loaded — translation occurs before first request or on update." },
      { q: "How does Expression Language (EL) differ from scriptlets?", a: "EL is declarative and safer for accessing attributes (e.g., ${user.name}) without embedding Java code; it promotes separation of concerns." },
      { q: "What causes session fixation and how to avoid in JSP?", a: "Session fixation occurs when attacker sets a session id; avoid by regenerating session id after authentication (session.invalidate()+new session)." }
    ],
    Intermediate: [
      { q: "How do JSP custom tags work?", a: "Custom tags are implemented as Tag/TagSupport or SimpleTag classes; they encapsulate reusable view logic and can be packaged in TLDs." },
      { q: "Explain JSP lifecycle methods.", a: "Translation -> compilation -> initialization (_jspInit) -> _jspService per request -> destruction (_jspDestroy)." },
      { q: "How to implement thread-safe JSPs?", a: "Avoid instance variables in JSPs; use local variables or synchronize carefully; better: delegate logic to thread-safe servlets/beans." },
      { q: "What is JSP EL implicit object 'pageContext'?", a: "pageContext provides access to request, session, application, attributes, and convenience methods within JSP scope." },
      { q: "How to use scoped attributes in JSP (page/request/session/application)?", a: "Store attributes in appropriate scope via setAttribute/getAttribute on pageContext/request/session/servletContext." },
      { q: "How to handle file uploads in JSP-based apps?", a: "Use multipart parsing libraries (Servlet 3.0 part API or Apache Commons FileUpload) in servlet/controller, not raw JSP." },
      { q: "How to protect against XSS in JSP?", a: "Escape user-supplied content, use JSTL fn:escapeXml or custom functions, and apply Content-Security-Policy headers." },
      { q: "Explain using MVC pattern with JSP and servlets.", a: "Controller (servlet) handles requests and business logic; JSP acts as view for rendering, keeping presentation logic-free." },
      { q: "How do you internationalize JSP pages?", a: "Use fmt tags (fmt:messageBundle, fmt:message) from JSTL and resource bundles for locale-specific messages." },
      { q: "How to include dynamic fragments with parameters in JSP?", a: "Use <jsp:include page=\"/fragment.jsp\"><jsp:param name=\"id\" value=\"123\"/></jsp:include> pattern." }
    ],
    Advanced: [
      { q: "How to build custom tag libraries (TLD) and best practices?", a: "Create tag handler classes, define TLD descriptor with tag signatures, package as JAR; keep tag logic thin and testable." },
      { q: "How does JSP expression language resolve property access?", a: "EL resolves by searching scopes (page, request, session, application) and uses getters for property access following bean conventions." },
      { q: "Explain JSP compilation performance tuning.", a: "Precompile JSPs, reduce dynamic includes, cache tag handlers, minimize JSP scriptlet code and heavy operations at render time." },
      { q: "How to migrate legacy JSPs to modern view frameworks?", a: "Extract business logic to services/REST, replace JSPs with Thymeleaf/React, adopt server-side templating with clean separation of concerns." },
      { q: "How do JSP containers handle tag pooling?", a: "Containers may pool tag handler instances for performance; ensure tag handlers are thread-safe or stateless between invocations." },
      { q: "Explain security considerations with JSP and file uploads.", a: "Validate file types/sizes, store outside webroot, scan for malware, use secure temp dirs and limit upload quotas." },
      { q: "How to optimize large HTML responses from JSP?", a: "Use gzip compression, streaming output, template partials, and client-side pagination to reduce payload size and render time." },
      { q: "How to test JSPs in isolation?", a: "Use JSP unit testing frameworks (JSPUnit) or render via lightweight servlet containers in integration tests; mock pageContext and request attributes." },
      { q: "How does JSP interact with servlet filters for cross-cutting concerns?", a: "Filters can intercept requests/responses for authentication, logging, compression before reaching JSP/servlet, enabling separation of concerns." },
      { q: "How to secure JSP pages with container-managed security?", a: "Configure security-constraints in web.xml, define roles, and protect URL patterns; combine with programmatic login if needed." }
    ],
  },

  servlets: {
    Basic: SERVLET_QUESTIONS.filter((x) => x.level === "Basic"),
    Intermediate: SERVLET_QUESTIONS.filter((x) => x.level === "Intermediate"),
    Advanced: SERVLET_QUESTIONS.filter((x) => x.level === "Advanced"),
  },
 
  servlets: byLevel(SERVLET_QUESTIONS),

// inside export const qaBank = { ... }
ejb: byLevel(EJB_QUESTIONS),
hibernate: byLevel(HIBERNATE_QUESTIONS),
spring: byLevel(SPRING_QUESTIONS),
springboot: byLevel(SPRINGBOOT_QUESTIONS),
soap: byLevel(SOAP_QUESTIONS),
rest: byLevel(REST_QUESTIONS),
microservices: byLevel(MICROSERVICES_QUESTIONS),
design_patterns: byLevel(DESIGN_PATTERNS_QUESTIONS),
aws: byLevel(AWS_QUESTIONS),
azure: byLevel(AZURE_QUESTIONS),
gcp: byLevel(GCP_QUESTIONS),
react: byLevel(REACT_QUESTIONS),
angular: byLevel(ANGULAR_QUESTIONS),
kafka: byLevel(KAFKA_QUESTIONS),
docker: byLevel(DOCKER_QUESTIONS),
kubernetes: byLevel(KUBERNETES_QUESTIONS),
system_design: byLevel(SYSTEM_DESIGN_QUESTIONS),
devops: byLevel(DEVOPS_QUESTIONS),
cicd: byLevel(CICD_QUESTIONS),
python: byLevel(PYTHON_QUESTIONS),
django: byLevel(DJANGO_QUESTIONS),
ci_cd: {
    Basic: [
      { q: "What is CI and CD?", a: "CI (Continuous Integration) is the practice of frequently merging code changes and running automated builds/tests. CD (Continuous Delivery/Deployment) automates delivery of validated changes to environments or production." },
      { q: "Why is CI/CD important?", a: "CI/CD reduces integration risk, speeds feedback loops, increases deployment frequency, and improves software quality through automation." },
      { q: "Name common CI/CD tools.", a: "Jenkins, GitLab CI, GitHub Actions, CircleCI, Travis CI, Azure Pipelines, TeamCity, Bamboo." },
      { q: "What is pipeline as code?", a: "Defining build/test/deploy pipelines in code (YAML, Groovy, etc.) stored in repository for versioning and reproducibility." },
      { q: "What is a build agent or runner?", a: "A process or machine that executes jobs in the CI pipeline; agents can be ephemeral or long-lived." },
      { q: "What is an artifact in CI?", a: "A build output such as JAR/WAR, Docker image, or compiled binary that is stored in an artifact repository for later deployment." },
      { q: "What is an artifact repository?", a: "A service like Nexus or Artifactory that stores and serves build artifacts and container images." },
      { q: "What triggers can start CI pipelines?", a: "Pushes/merges to branches, pull request events, scheduled timers, webhooks, or manual triggers." },
      { q: "What is a build matrix?", a: "A matrix runs the same job against multiple combinations of environments (OS, JDK versions, dependency versions)." },
      { q: "Why use feature branches with CI?", a: "To isolate work, run PR-specific pipelines, and validate changes before merging to mainline." },
      { q: "What is the difference between continuous delivery and continuous deployment?", a: "Continuous Delivery ensures code is always releasable and requires manual promotion to production; Continuous Deployment automatically deploys every validated change to production." },
      { q: "What is pipeline caching?", a: "Caching stores dependencies/build outputs between pipeline runs to speed subsequent builds." },
      { q: "What is a pipeline stage?", a: "A stage groups related jobs (build, test, deploy) and defines ordering and visibility in the pipeline UI." },
      { q: "What is a smoke test?", a: "A quick, shallow set of tests run after deployment to verify basic application availability." },
      { q: "What are ephemeral environments?", a: "Short-lived environments (preview apps) created per branch/PR for testing and review, then destroyed after use." },
      { q: "What is a build badge?", a: "A visual status indicator (passing/failing) shown in README or PR to indicate pipeline status." },
      { q: "How to handle secrets in CI?", a: "Use secure variables/secret managers provided by CI, avoid storing secrets in source control, and restrict access." }
    ],
    Intermediate: [
      { q: "How does GitOps relate to CI/CD?", a: "GitOps uses Git as the single source of truth for declarative infrastructure and application delivery, with automation reconciling desired state." },
      { q: "Explain blue-green deployment.", a: "Blue-green runs two identical production environments; traffic switches from blue to green after a successful deployment, enabling quick rollback." },
      { q: "Explain canary deployment.", a: "Canary deploys changes to a small subset of users or servers, monitors metrics, and gradually increases rollout if no issues are found." },
      { q: "What is pipeline idempotency?", a: "Pipelines should yield the same result when run multiple times with the same inputs, avoiding side effects that break retries." },
      { q: "How to implement rollback strategies?", a: "Keep previous artifacts, use traffic switching (blue-green), automated rollback on health checks, or feature flags to disable changes." },
      { q: "What is infrastructure as code (IaC) and its role in CD?", a: "IaC (Terraform, CloudFormation) defines infrastructure declaratively so deployments can be automated and version controlled." },
      { q: "How to handle database migrations in CD?", a: "Use versioned migration tools (Flyway, Liquibase), run migrations in CI/CD with careful rollout strategies and backward-compatible changes." },
      { q: "What are pipeline artifacts vs build artifacts?", a: "Build artifacts are produced by builds (binaries/images). Pipeline artifacts include logs, reports, test results used across stages." },
      { q: "How to secure your CI pipeline?", a: "Limit access to pipelines, rotate credentials, scan images and dependencies, run pipelines in isolated environments, and use RBAC for actions." },
      { q: "What is shift-left testing?", a: "Moving testing earlier in the development lifecycle (unit tests, static analysis) so defects are found sooner during CI." },
      { q: "How to parallelize CI jobs effectively?", a: "Split tests into independent shards, use test splitting by size or history, run heavy integration tests separately, and optimize resource usage." },
      { q: "Explain immutable infrastructure in CD.", a: "Immutable infra replaces instances instead of mutating them, reducing configuration drift and simplifying rollbacks." },
      { q: "What is pipeline observability?", a: "Collecting metrics/logs/ traces for pipeline runs (duration, failures, resource usage) to diagnose and optimize pipelines." },
      { q: "How to manage multi-environment deployment pipelines?", a: "Use promotion gates, environment-specific variables, and deployment approvals to promote artifacts from dev->staging->prod." },
      { q: "What are guarded deployments?", a: "Deployments that require checks such as automated tests, manual approvals, and health validations before progressing." },
      { q: "How to use feature flags for safer CD?", a: "Feature flags decouple release from deploy, allowing gradual exposure or disabling of features without redeploying." },
      { q: "How to test infrastructure changes safely?", a: "Use plan/apply review workflows, run IaC linters, test in transient environments and run integration tests against mirrors of production." }
    ],
    Advanced: [
      { q: "How to design CI/CD for microservices at scale?", a: "Adopt decentralized pipelines, reusable templates, shared libraries, efficient artifact storage, and strategies for cross-service coordination." },
      { q: "Explain reproducible (hermetic) builds.", a: "Hermetic builds isolate dependencies and environment so the same inputs always produce identical artifacts; pin dependency versions and use immutable base images." },
      { q: "What is build provenance and SBOM?", a: "Build provenance tracks origin of artifacts; SBOM (Software Bill of Materials) lists components used in a build for supply-chain security and auditing." },
      { q: "How to integrate security scanning in CI/CD?", a: "Run SAST, DAST, dependency scanning, container image scanning, and license checks in pipelines with fail-on-critical policies." },
      { q: "Explain pipeline federation and multi-cluster deployments.", a: "Federation coordinates deployments across clusters/regions using centralized control planes or GitOps operators to ensure consistent rollouts." },
      { q: "How to implement progressive delivery automation?", a: "Combine canaries, feature flags, metrics-driven promotion, and automated rollback based on SLO/health signals." },
      { q: "How to perform safe schema migrations for distributed systems?", a: "Use backward/forward-compatible migrations, expand-then-contract patterns, and coordinate application and schema changes via feature flags." },
      { q: "How to optimize pipeline cost and performance?", a: "Right-size agents, use autoscaling ephemeral runners, cache dependencies, parallelize smartly, and avoid unnecessary full builds for docs or small changes." },
      { q: "What is chaotic testing in deployment pipelines?", a: "Inject failures during deployments (network latency, pod kills) to validate resilience and rollback automation under real failure modes." },
      { q: "How to handle secrets and signing at scale?", a: "Use centralized secret stores (Vault, AWS Secrets Manager), integrate signing of artifacts, and enforce RBAC and audit logging." },
      { q: "Explain multi-repo vs monorepo CI strategies.", a: "Multi-repo isolates service pipelines; monorepo enables cross-project changes in a single pipeline with tools for selective builds and dependency graph analysis." },
      { q: "How to validate deployment health automatically?", a: "Use readiness/liveness probes, synthetic tests, metrics threshold alarms, and canary analysis tools to determine health post-deploy." },
      { q: "How to design a secure software supply chain?", a: "Harden build infrastructure, sign artifacts, verify SBOMs, perform provenance checks, and limit third-party toolchain access." },
      { q: "What are strategies for database migration rollbacks?", a: "Prefer backward-compatible changes; if rollback needed, plan compensating migrations or use blue-green db strategies and feature flags." },
      { q: "How to implement policy-as-code in pipelines?", a: "Use policy tools (OPA, Gatekeeper) to enforce constraints (allowed images, required scanning) automatically during CI/CD." },
      { q: "How to test and deploy stateful services in CD?", a: "Use canaries with subset of traffic, perform data migrations carefully, and use operators or controlled rollout strategies to preserve state." }
    ]
  },
};
