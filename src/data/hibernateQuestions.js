// src/data/hibernateQuestions.js

export const HIBERNATE_QUESTIONS = [
  // =========================
  // BASIC (1–17)
  // =========================
  {
    id: "hib-001",
    level: "Basic",
    q: "What is Hibernate and why is it used?",
    answer: {
      summary:
        "Hibernate is an ORM (Object-Relational Mapping) framework for Java. It maps Java objects to database tables and handles CRUD operations, SQL generation, and relationship management, reducing boilerplate JDBC code.",
    },
  },
  {
    id: "hib-002",
    level: "Basic",
    q: "What is ORM?",
    answer: {
      summary:
        "ORM maps object-oriented domain models to relational database structures. It lets you work with objects while the ORM translates operations into SQL and manages object-table mapping.",
    },
  },
  {
    id: "hib-003",
    level: "Basic",
    q: "What is the difference between Hibernate and JPA?",
    answer: {
      summary:
        "JPA is a specification (interfaces + annotations), while Hibernate is a popular implementation of JPA. Hibernate also provides extra features beyond JPA (e.g., Hibernate-specific annotations, interceptors, etc.).",
    },
  },
  {
    id: "hib-004",
    level: "Basic",
    q: "What are the main components of Hibernate architecture?",
    answer: {
      summary:
        "Key components: Configuration, SessionFactory, Session, Transaction, Query/Criteria, and persistent entities. SessionFactory is heavy and shared; Session is lightweight per unit-of-work.",
    },
  },
  {
    id: "hib-005",
    level: "Basic",
    q: "What is a SessionFactory?",
    answer: {
      summary:
        "SessionFactory is a thread-safe, heavyweight object created once per database. It holds configuration and provides Sessions. Expensive to create, so reuse it.",
    },
  },
  {
    id: "hib-006",
    level: "Basic",
    q: "What is a Session in Hibernate?",
    answer: {
      summary:
        "Session is a single-threaded, lightweight object representing a unit of work. It manages persistence context (1st level cache) and provides CRUD/query operations.",
    },
  },
  {
    id: "hib-007",
    level: "Basic",
    q: "What is the first-level cache in Hibernate?",
    answer: {
      summary:
        "First-level cache is the persistence context associated with a Session. Within the same Session, repeated loads of the same entity by id usually hit the cache instead of DB.",
    },
  },
  {
    id: "hib-008",
    level: "Basic",
    q: "What is an Entity in Hibernate/JPA?",
    answer: {
      summary:
        "An Entity is a lightweight persistent domain object mapped to a table. Annotated with @Entity and usually @Table, with fields mapped via @Id, @Column, etc.",
      codeTitle: "Example Entity",
      code: `import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String name;

  // getters/setters
}`,
    },
  },
  {
    id: "hib-009",
    level: "Basic",
    q: "Explain @Id and @GeneratedValue strategies.",
    answer: {
      summary:
        "@Id marks primary key. @GeneratedValue strategies: IDENTITY (DB auto-increment), SEQUENCE (DB sequence), TABLE (table-based), AUTO (provider chooses).",
    },
  },
  {
    id: "hib-010",
    level: "Basic",
    q: "What is the difference between save(), persist(), and merge()?",
    answer: {
      summary:
        "save() (Hibernate) returns id; persist() (JPA) makes entity managed (no return). merge() copies state of a detached object into a managed instance and returns the managed entity.",
    },
  },
  {
    id: "hib-011",
    level: "Basic",
    q: "What are transient, persistent, detached, and removed states?",
    answer: {
      summary:
        "Transient: not associated with Session, no DB row. Persistent (managed): tracked by Session and synced to DB. Detached: was persistent, Session closed. Removed: marked for deletion.",
    },
  },
  {
    id: "hib-012",
    level: "Basic",
    q: "What is a Transaction in Hibernate?",
    answer: {
      summary:
        "A transaction groups operations into an atomic unit. Commit persists changes; rollback undoes changes. Always use transactions even for reads in many DBs for consistency.",
      codeTitle: "Transaction Example",
      code: `Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();

User u = new User();
u.setName("Mayank");
session.persist(u);

tx.commit();
session.close();`,
    },
  },
  {
    id: "hib-013",
    level: "Basic",
    q: "What is HQL?",
    answer: {
      summary:
        "Hibernate Query Language is an object-oriented query language similar to SQL but operates on entity names and properties instead of table/column names.",
      codeTitle: "HQL Example",
      code: `List<User> users = session.createQuery(
  "from User u where u.name = :name", User.class
).setParameter("name", "Mayank")
 .getResultList();`,
    },
  },
  {
    id: "hib-014",
    level: "Basic",
    q: "What is the Criteria API?",
    answer: {
      summary:
        "Criteria API allows building type-safe queries programmatically. Useful for dynamic query generation compared to string-based HQL.",
    },
  },
  {
    id: "hib-015",
    level: "Basic",
    q: "What is @Column(nullable = false, unique = true) used for?",
    answer: {
      summary:
        "@Column defines column mapping and constraints. nullable=false enforces NOT NULL; unique=true adds a unique constraint (depending on schema generation).",
    },
  },
  {
    id: "hib-016",
    level: "Basic",
    q: "What is fetch type in associations?",
    answer: {
      summary:
        "Fetch type defines how related data is loaded: LAZY loads on demand; EAGER loads immediately. Default: ManyToOne is EAGER, OneToMany is LAZY (commonly).",
    },
  },
  {
    id: "hib-017",
    level: "Basic",
    q: "What is the N+1 query problem?",
    answer: {
      summary:
        "N+1 happens when one query loads N parent rows and then N additional queries load each child collection lazily. Solve with fetch join, EntityGraph, batch fetching, etc.",
    },
  },

  // =========================
  // INTERMEDIATE (18–34)
  // =========================
  {
    id: "hib-018",
    level: "Intermediate",
    q: "Explain @OneToMany mapping with mappedBy.",
    answer: {
      summary:
        "@OneToMany represents a parent→children relationship. mappedBy points to the owning side field in the child entity, avoiding an extra join table.",
      codeTitle: "OneToMany Example",
      code: `@Entity
class Department {
  @Id @GeneratedValue
  Long id;

  @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, orphanRemoval = true)
  List<Employee> employees = new ArrayList<>();
}

@Entity
class Employee {
  @Id @GeneratedValue
  Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "department_id")
  Department department;
}`,
    },
  },
  {
    id: "hib-019",
    level: "Intermediate",
    q: "What is the owning side in a bidirectional relationship?",
    answer: {
      summary:
        "Owning side is the one that contains the foreign key mapping (e.g., @ManyToOne). Only changes on owning side are persisted unless you manage both sides properly.",
    },
  },
  {
    id: "hib-020",
    level: "Intermediate",
    q: "What is CascadeType and when do you use it?",
    answer: {
      summary:
        "CascadeType defines whether operations propagate to associated entities (PERSIST, MERGE, REMOVE, REFRESH, DETACH, ALL). Use it when child lifecycle depends on parent.",
    },
  },
  {
    id: "hib-021",
    level: "Intermediate",
    q: "What is orphanRemoval = true?",
    answer: {
      summary:
        "When a child entity is removed from the parent collection, Hibernate deletes it from DB automatically. Useful when children cannot exist without the parent.",
    },
  },
  {
    id: "hib-022",
    level: "Intermediate",
    q: "Difference between LAZY and EAGER loading (practical impact)?",
    answer: {
      summary:
        "EAGER loads immediately and can cause large joins/cartesian products. LAZY loads on access and can cause LazyInitializationException if Session is closed. Prefer LAZY + explicit fetching.",
    },
  },
  {
    id: "hib-023",
    level: "Intermediate",
    q: "What is LazyInitializationException and how do you fix it?",
    answer: {
      summary:
        "It occurs when a LAZY association is accessed outside an active Session/transaction. Fix via fetch join, Open Session in View (not ideal), DTO projections, or initialize within transaction.",
      codeTitle: "Fetch Join Fix",
      code: `List<Order> orders = session.createQuery(
  "select o from Order o join fetch o.items where o.id = :id", Order.class
).setParameter("id", 1L)
 .getResultList();`,
    },
  },
  {
    id: "hib-024",
    level: "Intermediate",
    q: "What is a fetch join and why is it used?",
    answer: {
      summary:
        "Fetch join loads association in the same query, preventing N+1 problems and lazy initialization issues (when used correctly).",
    },
  },
  {
    id: "hib-025",
    level: "Intermediate",
    q: "What is the difference between get() and load() (Hibernate)?",
    answer: {
      summary:
        "get() hits DB immediately and returns null if not found. load() may return a proxy and throws ObjectNotFoundException when accessed if entity doesn’t exist.",
    },
  },
  {
    id: "hib-026",
    level: "Intermediate",
    q: "What is dirty checking in Hibernate?",
    answer: {
      summary:
        "Hibernate automatically detects changes to managed entities and generates UPDATE SQL during flush/commit without explicitly calling update().",
    },
  },
  {
    id: "hib-027",
    level: "Intermediate",
    q: "What is flush in Hibernate? When does it happen?",
    answer: {
      summary:
        "Flush synchronizes persistence context changes to DB (INSERT/UPDATE/DELETE). Happens at transaction commit, before query execution (depending on FlushMode), or manually via session.flush().",
    },
  },
  {
    id: "hib-028",
    level: "Intermediate",
    q: "Explain the difference between flush() and commit().",
    answer: {
      summary:
        "flush() writes SQL to DB but doesn’t end transaction. commit() ends the transaction and permanently commits changes. Flush can happen multiple times before commit.",
    },
  },
  {
    id: "hib-029",
    level: "Intermediate",
    q: "What is a projection query and why use it?",
    answer: {
      summary:
        "Projection selects only required columns/fields (DTO) instead of full entity, improving performance and avoiding unnecessary lazy loads.",
      codeTitle: "DTO Projection Example",
      code: `public record UserDto(Long id, String name) {}

List<UserDto> dtos = session.createQuery(
  "select new com.demo.UserDto(u.id, u.name) from User u", UserDto.class
).getResultList();`,
    },
  },
  {
    id: "hib-030",
    level: "Intermediate",
    q: "How does Hibernate handle batch inserts/updates?",
    answer: {
      summary:
        "You can enable batching via hibernate.jdbc.batch_size. Use session.flush() and session.clear() periodically to avoid memory growth. Batch works best with SEQUENCE, not IDENTITY.",
    },
  },
  {
    id: "hib-031",
    level: "Intermediate",
    q: "How do you enable SQL logging in Hibernate?",
    answer: {
      summary:
        "Use properties like hibernate.show_sql=true, hibernate.format_sql=true, and configure logging for org.hibernate.SQL and org.hibernate.type.descriptor.sql to view bind parameters.",
    },
  },
  {
    id: "hib-032",
    level: "Intermediate",
    q: "What is @Version used for?",
    answer: {
      summary:
        "@Version enables optimistic locking. Hibernate increments the version on update and detects concurrent modifications to prevent lost updates.",
      codeTitle: "Optimistic Locking Example",
      code: `@Entity
class Account {
  @Id @GeneratedValue
  Long id;

  @Version
  Long version;

  BigDecimal balance;
}`,
    },
  },
  {
    id: "hib-033",
    level: "Intermediate",
    q: "Explain optimistic locking vs pessimistic locking.",
    answer: {
      summary:
        "Optimistic uses @Version and detects conflicts at commit time. Pessimistic uses DB locks (SELECT ... FOR UPDATE) and blocks other transactions. Use pessimistic for high contention.",
    },
  },
  {
    id: "hib-034",
    level: "Intermediate",
    q: "What is the difference between @JoinColumn and @JoinTable?",
    answer: {
      summary:
        "@JoinColumn maps a foreign key column directly. @JoinTable uses an intermediate join table (common in ManyToMany or unidirectional OneToMany).",
    },
  },

  // =========================
  // ADVANCED (35–50)
  // =========================
  {
    id: "hib-035",
    level: "Advanced",
    q: "What is the second-level cache in Hibernate?",
    answer: {
      summary:
        "Second-level cache is shared across Sessions (unlike 1st level cache). It stores entity data and can reduce DB hits. Requires a cache provider like Ehcache/Redis/Infinispan.",
    },
  },
  {
    id: "hib-036",
    level: "Advanced",
    q: "What is query cache and when is it useful?",
    answer: {
      summary:
        "Query cache stores query result ids + parameters, usually together with 2nd level entity cache. Best for frequently executed read queries with stable data.",
    },
  },
  {
    id: "hib-037",
    level: "Advanced",
    q: "Explain Hibernate inheritance strategies.",
    answer: {
      summary:
        "Three strategies: SINGLE_TABLE (one table + discriminator), JOINED (normalized tables), TABLE_PER_CLASS (separate tables). Trade-offs: performance vs normalization.",
      codeTitle: "JOINED Strategy Example",
      code: `@Entity
@Inheritance(strategy = InheritanceType.JOINED)
class Payment {
  @Id @GeneratedValue Long id;
  BigDecimal amount;
}

@Entity
class CardPayment extends Payment {
  String cardNumber;
}`,
    },
  },
  {
    id: "hib-038",
    level: "Advanced",
    q: "What is @BatchSize and how does it reduce N+1?",
    answer: {
      summary:
        "@BatchSize tells Hibernate to load collections/entities in batches. Instead of N queries, Hibernate loads multiple associations in fewer queries using IN clause batching.",
    },
  },
  {
    id: "hib-039",
    level: "Advanced",
    q: "How do you handle pagination efficiently in Hibernate?",
    answer: {
      summary:
        "Use setFirstResult + setMaxResults for offset pagination, but for large datasets prefer keyset pagination (seek method) using 'where id > :lastId order by id'.",
      codeTitle: "Keyset Pagination Example",
      code: `List<User> page = session.createQuery(
  "from User u where u.id > :lastId order by u.id", User.class
).setParameter("lastId", lastSeenId)
 .setMaxResults(50)
 .getResultList();`,
    },
  },
  {
    id: "hib-040",
    level: "Advanced",
    q: "What is the difference between EntityGraph and fetch join?",
    answer: {
      summary:
        "Fetch join is query-level (HQL/JPQL). EntityGraph is a JPA feature to define fetch plan externally without changing query strings. EntityGraph is cleaner for reusable fetch plans.",
    },
  },
  {
    id: "hib-041",
    level: "Advanced",
    q: "What is the impact of IDENTITY strategy on batching?",
    answer: {
      summary:
        "IDENTITY requires DB-generated keys per insert, forcing immediate insert execution, which reduces batching effectiveness. SEQUENCE is better for batch inserts.",
    },
  },
  {
    id: "hib-042",
    level: "Advanced",
    q: "Explain Hibernate flush modes.",
    answer: {
      summary:
        "FlushMode.AUTO (default) flushes at commit and sometimes before queries. FlushMode.COMMIT flushes only at commit. MANUAL flushes only when explicitly invoked.",
    },
  },
  {
    id: "hib-043",
    level: "Advanced",
    q: "How do you prevent cartesian products when fetching multiple collections?",
    answer: {
      summary:
        "Avoid fetch-joining multiple bag collections in a single query. Use multiple queries, EntityGraphs, batch fetching, or change collection type/set mapping.",
    },
  },
  {
    id: "hib-044",
    level: "Advanced",
    q: "What is 'MultipleBagFetchException' and why does it happen?",
    answer: {
      summary:
        "Hibernate cannot fetch join multiple 'bag' (List without index) collections simultaneously because it produces duplicates and cannot hydrate correctly. Use Set, or fetch separately.",
    },
  },
  {
    id: "hib-045",
    level: "Advanced",
    q: "How do you tune Hibernate for large bulk operations?",
    answer: {
      summary:
        "Use batching, periodic flush/clear, disable 2nd level cache for bulk jobs, use StatelessSession for minimal overhead, and prefer bulk HQL update/delete where appropriate.",
      codeTitle: "Bulk Insert Pattern",
      code: `int batchSize = 50;
for (int i = 0; i < users.size(); i++) {
  session.persist(users.get(i));
  if (i % batchSize == 0) {
    session.flush();
    session.clear();
  }
}`,
    },
  },
  {
    id: "hib-046",
    level: "Advanced",
    q: "What is StatelessSession and when to use it?",
    answer: {
      summary:
        "StatelessSession has no first-level cache, no dirty checking, and fewer lifecycle events. Best for high-performance batch processing where you manage updates explicitly.",
    },
  },
  {
    id: "hib-047",
    level: "Advanced",
    q: "How do you implement soft deletes in Hibernate?",
    answer: {
      summary:
        "Use a boolean flag like isDeleted and filter it via @Where or Hibernate filters. Ensure queries exclude deleted rows, and override delete behavior if needed.",
      codeTitle: "Soft Delete Example",
      code: `@Entity
@org.hibernate.annotations.Where(clause = "is_deleted = false")
class Customer {
  @Id @GeneratedValue Long id;
  boolean isDeleted;
}`,
    },
  },
  {
    id: "hib-048",
    level: "Advanced",
    q: "What are Hibernate Interceptors / Event Listeners used for?",
    answer: {
      summary:
        "They allow hooking into entity lifecycle events (save/update/delete/load) for auditing, multi-tenancy, custom validations, and automated field updates (createdAt/updatedAt).",
    },
  },
  {
    id: "hib-049",
    level: "Advanced",
    q: "Explain multi-tenancy support in Hibernate.",
    answer: {
      summary:
        "Hibernate supports multi-tenancy strategies: DATABASE, SCHEMA, and DISCRIMINATOR. Often implemented with CurrentTenantIdentifierResolver + MultiTenantConnectionProvider.",
    },
  },
  {
    id: "hib-050",
    level: "Advanced",
    q: "How do you solve 'detached entity passed to persist'?",
    answer: {
      summary:
        "It happens when you call persist() on an entity that already has an identifier and is considered detached. Use merge(), or load/manage the entity in the current Session before associating it.",
      codeTitle: "Fix with merge()",
      code: `Order detached = ...; // has id
Order managed = session.merge(detached); // returns managed instance
tx.commit();`,
    },
  },
];
