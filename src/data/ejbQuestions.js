// src/data/ejbquestions.js
// ===================== EJB =====================

export const EJB_QUESTIONS = [
  // ===== BASIC =====
  {
    id: "ejb-b-1",
    level: "Basic",
    q: "What is EJB and why was it introduced?",
    a: "EJB (Enterprise JavaBeans) is a server-side component model for building enterprise apps. It provides managed services like transactions, security, pooling, concurrency, and remoting so developers can focus on business logic.",
  },
  {
    id: "ejb-b-2",
    level: "Basic",
    q: "What are the main EJB types in modern Java EE/Jakarta EE?",
    a: "Session Beans (Stateless, Stateful, Singleton) and Message-Driven Beans (MDB). Entity Beans were removed in EJB 3 (JPA replaces them).",
  },
  {
    id: "ejb-b-3",
    level: "Basic",
    q: "What is a Stateless Session Bean?",
    a: "A stateless bean has no conversational state between method calls. The container can pool instances and reuse them across clients, making it scalable and efficient.",
  },
  {
    id: "ejb-b-4",
    level: "Basic",
    q: "What is a Stateful Session Bean?",
    a: "A stateful bean maintains client-specific conversational state across calls (e.g., shopping cart). Each client gets its own bean instance (not pooled the same way as stateless).",
  },
  {
    id: "ejb-b-5",
    level: "Basic",
    q: "What is a Singleton Session Bean?",
    a: "A singleton bean has a single shared instance per application. Useful for shared caches, configuration, or application-wide coordination.",
  },
  {
    id: "ejb-b-6",
    level: "Basic",
    q: "What is an MDB (Message-Driven Bean)?",
    a: "An MDB processes messages asynchronously from a messaging system (typically JMS). It has no client-visible interface; the container invokes it when messages arrive.",
  },
  {
    id: "ejb-b-7",
    level: "Basic",
    q: "What is Dependency Injection in EJB?",
    a: "EJB supports injection via @EJB (for EJB references) and CDI @Inject (for CDI beans). The container provides the dependency at runtime.",
  },
  {
    id: "ejb-b-8",
    level: "Basic",
    q: "How do you define a stateless EJB?",
    a: "Use @Stateless on a class. The container manages lifecycle, pooling, transactions, and security.",
    answer: {
      codeTitle: "Example",
      code: `import jakarta.ejb.Stateless;

@Stateless
public class PaymentService {
  public String pay(String orderId) {
    return "PAID:" + orderId;
  }
}`,
    },
  },
  {
    id: "ejb-b-9",
    level: "Basic",
    q: "What is the role of the EJB container?",
    a: "It provides runtime services: lifecycle management, pooling, transactions (JTA), security, concurrency, remoting, and interceptors.",
  },
  {
    id: "ejb-b-10",
    level: "Basic",
    q: "What are Local and Remote interfaces?",
    a: "Local interfaces are used in the same application/VM (fast, no serialization). Remote interfaces support access across JVMs (serialization, network).",
  },
  {
    id: "ejb-b-11",
    level: "Basic",
    q: "How do you declare a Local interface?",
    a: "Annotate interface with @Local or rely on default business interface rules. Local avoids remoting overhead.",
    answer: {
      codeTitle: "Local Interface Example",
      code: `import jakarta.ejb.Local;

@Local
public interface OrderService {
  void placeOrder(String id);
}`,
    },
  },
  {
    id: "ejb-b-12",
    level: "Basic",
    q: "How do you declare a Remote interface?",
    a: "Annotate interface with @Remote. Remote calls require parameters/return types to be serializable.",
    answer: {
      codeTitle: "Remote Interface Example",
      code: `import jakarta.ejb.Remote;

@Remote
public interface ReportingService {
  byte[] exportPdf(String reportId);
}`,
    },
  },
  {
    id: "ejb-b-13",
    level: "Basic",
    q: "What is JNDI in context of EJB?",
    a: "JNDI is a naming service used to look up resources like EJBs, DataSources, JMS resources. Modern apps prefer injection over manual JNDI lookup.",
  },
  {
    id: "ejb-b-14",
    level: "Basic",
    q: "What is an EJB business method?",
    a: "A method exposed to callers via local/remote business interface (or no-interface view) and managed by container services like transactions/security.",
  },
  {
    id: "ejb-b-15",
    level: "Basic",
    q: "What is 'no-interface view' in EJB 3?",
    a: "A bean can be invoked directly via its class type without a separate business interface (useful for simple cases).",
    answer: {
      codeTitle: "No-Interface View",
      code: `import jakarta.ejb.Stateless;

@Stateless
public class AuditBean {
  public void log(String msg) { /*...*/ }
}

// usage
// @Inject or @EJB AuditBean auditBean;`,
    },
  },
  {
    id: "ejb-b-16",
    level: "Basic",
    q: "Where do EJBs typically run?",
    a: "In an application server / EJB container (e.g., WildFly, Payara, WebLogic, WebSphere).",
  },
  {
    id: "ejb-b-17",
    level: "Basic",
    q: "What is the difference between EJB and Servlet?",
    a: "Servlets handle HTTP request/response (web layer). EJBs are business components with container services (transactions, security, pooling). Often servlets/controllers call EJBs.",
  },

  // ===== INTERMEDIATE =====
  {
    id: "ejb-i-1",
    level: "Intermediate",
    q: "Explain EJB lifecycle for Stateless and Stateful beans.",
    a: "Stateless: create → (pooled, reused) → destroy. Stateful: create for a client → business calls maintain state → passivation/activation may occur → remove/destroy.",
  },
  {
    id: "ejb-i-2",
    level: "Intermediate",
    q: "What is passivation/activation in Stateful beans?",
    a: "Passivation saves a stateful bean’s state to secondary storage to free memory; activation restores it when needed. Fields must be Serializable or marked transient.",
  },
  {
    id: "ejb-i-3",
    level: "Intermediate",
    q: "What is container-managed transaction (CMT)?",
    a: "The container starts/commits/rolls back transactions around method calls based on attributes. Most common approach in EJB.",
  },
  {
    id: "ejb-i-4",
    level: "Intermediate",
    q: "What is bean-managed transaction (BMT)?",
    a: "The bean code manually controls transaction boundaries using UserTransaction. Use only when you need custom transaction demarcation.",
    answer: {
      codeTitle: "BMT Example",
      code: `import jakarta.annotation.Resource;
import jakarta.ejb.Stateless;
import jakarta.ejb.TransactionManagement;
import jakarta.ejb.TransactionManagementType;
import jakarta.transaction.UserTransaction;

@Stateless
@TransactionManagement(TransactionManagementType.BEAN)
public class BmtService {

  @Resource
  private UserTransaction utx;

  public void doWork() throws Exception {
    utx.begin();
    try {
      // business + DB work
      utx.commit();
    } catch (Exception e) {
      utx.rollback();
      throw e;
    }
  }
}`,
    },
  },
  {
    id: "ejb-i-5",
    level: "Intermediate",
    q: "What are common @TransactionAttribute types?",
    a: "REQUIRED (default), REQUIRES_NEW, SUPPORTS, MANDATORY, NOT_SUPPORTED, NEVER. They control whether a method joins/creates/suspends transactions.",
  },
  {
    id: "ejb-i-6",
    level: "Intermediate",
    q: "Give a small example of @TransactionAttribute(REQUIRES_NEW).",
    a: "Useful for audit logging where you want audit to commit even if the main transaction rolls back.",
    answer: {
      codeTitle: "Requires New Example",
      code: `import jakarta.ejb.Stateless;
import jakarta.ejb.TransactionAttribute;
import static jakarta.ejb.TransactionAttributeType.REQUIRES_NEW;

@Stateless
public class AuditService {
  @TransactionAttribute(REQUIRES_NEW)
  public void writeAudit(String msg) {
    // persist audit record
  }
}`,
    },
  },
  {
    id: "ejb-i-7",
    level: "Intermediate",
    q: "What is declarative security in EJB?",
    a: "You define security using annotations like @RolesAllowed, @PermitAll, @DenyAll. The container checks the caller’s role before invoking methods.",
    answer: {
      codeTitle: "Security Example",
      code: `import jakarta.annotation.security.RolesAllowed;
import jakarta.ejb.Stateless;

@Stateless
public class AdminService {
  @RolesAllowed("ADMIN")
  public void purge() { /*...*/ }
}`,
    },
  },
  {
    id: "ejb-i-8",
    level: "Intermediate",
    q: "How does EJB pooling work for Stateless beans?",
    a: "The container maintains a pool of instances. Each request borrows an instance, invokes the method, then returns it to the pool. This reduces object creation and improves throughput.",
  },
  {
    id: "ejb-i-9",
    level: "Intermediate",
    q: "Explain EJB concurrency rules for Singleton beans.",
    a: "Singleton beans support container-managed concurrency using @Lock(READ/WRITE). WRITE locks are exclusive; READ locks allow concurrent readers.",
    answer: {
      codeTitle: "Singleton Concurrency Example",
      code: `import jakarta.ejb.Singleton;
import jakarta.ejb.Lock;
import static jakarta.ejb.LockType.READ;
import static jakarta.ejb.LockType.WRITE;

@Singleton
public class ConfigCache {
  private volatile String value = "v1";

  @Lock(READ)
  public String get() { return value; }

  @Lock(WRITE)
  public void refresh(String v) { value = v; }
}`,
    },
  },
  {
    id: "ejb-i-10",
    level: "Intermediate",
    q: "What is @Startup on Singleton beans?",
    a: "It tells the container to initialize the singleton bean at application startup instead of lazily on first access.",
    answer: {
      codeTitle: "@Startup Example",
      code: `import jakarta.ejb.Singleton;
import jakarta.ejb.Startup;

@Singleton
@Startup
public class BootBean {
  // init logic in @PostConstruct
}`,
    },
  },
  {
    id: "ejb-i-11",
    level: "Intermediate",
    q: "What is @PostConstruct and @PreDestroy in EJB?",
    a: "Lifecycle callbacks invoked by the container. @PostConstruct runs after dependency injection. @PreDestroy runs before bean destruction.",
    answer: {
      codeTitle: "Lifecycle Callbacks",
      code: `import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import jakarta.ejb.Stateless;

@Stateless
public class LifeBean {
  @PostConstruct
  void init() { /* init resources */ }

  @PreDestroy
  void cleanup() { /* cleanup */ }
}`,
    },
  },
  {
    id: "ejb-i-12",
    level: "Intermediate",
    q: "What are EJB interceptors used for?",
    a: "Cross-cutting concerns like logging, metrics, authorization checks, or input validation. Use @Interceptors or @AroundInvoke.",
    answer: {
      codeTitle: "Interceptor Example",
      code: `import jakarta.interceptor.AroundInvoke;
import jakarta.interceptor.InvocationContext;

public class LogInterceptor {
  @AroundInvoke
  public Object around(InvocationContext ctx) throws Exception {
    System.out.println("Before: " + ctx.getMethod());
    try { return ctx.proceed(); }
    finally { System.out.println("After: " + ctx.getMethod()); }
  }
}`,
    },
  },
  {
    id: "ejb-i-13",
    level: "Intermediate",
    q: "How do you attach an interceptor to a bean?",
    a: "Use @Interceptors(LogInterceptor.class) on the class or method.",
    answer: {
      codeTitle: "Attach Interceptor",
      code: `import jakarta.ejb.Stateless;
import jakarta.interceptor.Interceptors;

@Stateless
@Interceptors(LogInterceptor.class)
public class OrderBean {
  public void place(String id) { /*...*/ }
}`,
    },
  },
  {
    id: "ejb-i-14",
    level: "Intermediate",
    q: "What is asynchronous method invocation in EJB?",
    a: "Using @Asynchronous, a method runs in a different thread managed by the container and returns immediately (optionally returning Future/CompletionStage).",
    answer: {
      codeTitle: "@Asynchronous Example",
      code: `import jakarta.ejb.Asynchronous;
import jakarta.ejb.Stateless;
import java.util.concurrent.CompletableFuture;

@Stateless
public class AsyncBean {
  @Asynchronous
  public CompletableFuture<String> runJob() {
    return CompletableFuture.completedFuture("done");
  }
}`,
    },
  },
  {
    id: "ejb-i-15",
    level: "Intermediate",
    q: "What is EJB Timer Service?",
    a: "It allows scheduling tasks (single-action or interval timers) managed by the container, supporting persistent timers.",
    answer: {
      codeTitle: "Timer Example",
      code: `import jakarta.ejb.Schedule;
import jakarta.ejb.Singleton;

@Singleton
public class CleanupJob {
  @Schedule(hour="2", minute="0", persistent=true)
  public void nightly() {
    // cleanup work
  }
}`,
    },
  },
  {
    id: "ejb-i-16",
    level: "Intermediate",
    q: "How does EJB integrate with JPA?",
    a: "EJBs commonly use container-managed EntityManager injection via @PersistenceContext. Transactions (CMT) automatically scope persistence operations.",
    answer: {
      codeTitle: "JPA in EJB",
      code: `import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Stateless
public class UserRepo {
  @PersistenceContext
  private EntityManager em;

  public void save(User u){ em.persist(u); }
}`,
    },
  },
  {
    id: "ejb-i-17",
    level: "Intermediate",
    q: "What is the difference between @EJB and @Inject for EJBs?",
    a: "@EJB is EJB-specific injection. @Inject is CDI-based. In modern Jakarta EE, CDI is preferred for consistency, but both may work depending on server and configuration.",
  },

  // ===== ADVANCED =====
  {
    id: "ejb-a-1",
    level: "Advanced",
    q: "Explain transaction propagation across EJB calls (REQUIRED vs REQUIRES_NEW).",
    a: "REQUIRED joins caller’s transaction if present; otherwise starts one. REQUIRES_NEW always suspends any existing transaction and starts a new one for the method.",
  },
  {
    id: "ejb-a-2",
    level: "Advanced",
    q: "What is the self-invocation problem in EJB (and proxies)?",
    a: "If a bean calls its own method directly (this.method()), the call bypasses the container proxy, so interceptors/transactions/security annotations may not apply. Use injection of self proxy or separate bean.",
    answer: {
      codeTitle: "Fix Self Invocation",
      code: `import jakarta.ejb.EJB;
import jakarta.ejb.Stateless;
import jakarta.ejb.TransactionAttribute;
import static jakarta.ejb.TransactionAttributeType.REQUIRES_NEW;

@Stateless
public class BillingBean {

  @EJB
  private BillingBean self; // proxy

  public void mainFlow() {
    self.auditInNewTx();
  }

  @TransactionAttribute(REQUIRES_NEW)
  public void auditInNewTx() { /*...*/ }
}`,
    },
  },
  {
    id: "ejb-a-3",
    level: "Advanced",
    q: "How do you handle optimistic locking exceptions with CMT?",
    a: "Catch OptimisticLockException, decide retry/backoff strategy, or translate to application exception. Ensure you understand transaction rollback behavior.",
  },
  {
    id: "ejb-a-4",
    level: "Advanced",
    q: "Explain application exceptions vs system exceptions in EJB.",
    a: "System exceptions (RuntimeException) typically mark transaction for rollback and may discard bean instance. Application exceptions (checked or annotated with @ApplicationException) can control rollback behavior.",
    answer: {
      codeTitle: "@ApplicationException Example",
      code: `import jakarta.ejb.ApplicationException;

@ApplicationException(rollback=false)
public class BusinessRuleException extends Exception {
  public BusinessRuleException(String m){ super(m); }
}`,
    },
  },
  {
    id: "ejb-a-5",
    level: "Advanced",
    q: "What is the difference between container-managed concurrency and bean-managed concurrency for Singleton beans?",
    a: "Container-managed uses @Lock and the container enforces concurrency. Bean-managed requires the developer to synchronize manually (less recommended).",
  },
  {
    id: "ejb-a-6",
    level: "Advanced",
    q: "What are common performance issues with Remote EJB calls?",
    a: "Serialization overhead, network latency, chatty calls, large payloads. Use coarse-grained methods, DTOs, batching, and consider REST/gRPC for modern distributed systems.",
  },
  {
    id: "ejb-a-7",
    level: "Advanced",
    q: "How does EJB ensure thread safety for Stateless beans?",
    a: "A stateless instance is not shared concurrently for multiple invocations by default; the container ensures one thread per instance invocation at a time, and uses pooling for concurrency.",
  },
  {
    id: "ejb-a-8",
    level: "Advanced",
    q: "How do you design idempotent MDB processing?",
    a: "Use a deduplication key (message ID), persist processed IDs, handle redelivery, and ensure DB operations are transactional. Avoid side effects without transaction control.",
  },
  {
    id: "ejb-a-9",
    level: "Advanced",
    q: "Show a basic JMS MDB example.",
    a: "MDB listens to a destination; onMessage runs when messages arrive. Use JTA transactions to atomically process + persist.",
    answer: {
      codeTitle: "MDB Example",
      code: `import jakarta.ejb.MessageDriven;
import jakarta.jms.Message;
import jakarta.jms.MessageListener;

@MessageDriven
public class OrderQueueListener implements MessageListener {
  @Override
  public void onMessage(Message message) {
    // parse message, persist, call services
  }
}`,
    },
  },
  {
    id: "ejb-a-10",
    level: "Advanced",
    q: "What is transaction timeout and how do you handle long-running work?",
    a: "Transactions have a timeout; long-running work should be split, use asynchronous processing, or design with eventual consistency rather than one huge transaction.",
  },
  {
    id: "ejb-a-11",
    level: "Advanced",
    q: "Explain how interceptors interact with transactions and security.",
    a: "Interceptors run around business method invocation. Depending on server ordering, security checks and transaction begin/commit occur at defined points; interceptors can observe context and enforce policies.",
  },
  {
    id: "ejb-a-12",
    level: "Advanced",
    q: "How can you enforce method-level timeouts or circuit-breaker-like behavior in EJB?",
    a: "Use interceptors to enforce time limits and fail fast, or integrate with MicroProfile Fault Tolerance (where supported) for @Timeout/@CircuitBreaker.",
  },
  {
    id: "ejb-a-13",
    level: "Advanced",
    q: "How do you prevent a Singleton write lock from blocking the whole app?",
    a: "Keep WRITE-locked sections short, prefer READ locks, separate responsibilities into multiple singletons, and avoid calling slow IO under WRITE lock.",
  },
  {
    id: "ejb-a-14",
    level: "Advanced",
    q: "How do you propagate security identity across remote EJB calls?",
    a: "Depends on app server (JAAS, Elytron, etc.). Typically you configure security domain and allow identity propagation; otherwise caller must authenticate to remote server.",
  },
  {
    id: "ejb-a-15",
    level: "Advanced",
    q: "What happens if an EJB method throws RuntimeException in CMT?",
    a: "The container marks the transaction for rollback and may discard the bean instance (especially for stateful beans) depending on the exception type.",
  },
  {
    id: "ejb-a-16",
    level: "Advanced",
    q: "How do you structure EJBs in a layered architecture (clean boundaries)?",
    a: "Expose coarse-grained business services, keep persistence in repositories, avoid chatty remote calls, use DTOs, and keep EJBs focused on transactional boundaries + domain operations.",
  },
];
