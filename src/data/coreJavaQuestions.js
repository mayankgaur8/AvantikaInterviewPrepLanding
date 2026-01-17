

export const  CORE_JAVA_QUESTIONS = {
  core_java: [
    // ===== BASIC =====
    {
        id: "cj-b-0",
        level: "Basic",
        q: "What is the difference between a class and an object?",
        a: "A class serves as a blueprint defining attributes and methods, while an object is an instance of that class with actual values.Example:  class Car { }  is a class;  Car myCar = new Car();  creates an object"
    },
    {
      id: "cj-b-1",
      level: "Basic",
      q: "What is the purpose of the 'final' keyword in Java?",
      a: "final prevents modification. A final variable can't be reassigned, a final method can't be overridden, and a final class can't be extended.",
    },
    {
      id: "cj-b-2",
      level: "Basic",
      q: "What is the difference between JDK, JRE and JVM?",
      a: "JVM runs bytecode. JRE = JVM + libraries needed to run apps. JDK = JRE + development tools (javac, debugger, etc.) to build apps.",
    },
    {
      id: "cj-b-3",
      level: "Basic",
      q: "What is method overloading?",
      a: "Same method name with different parameter list (type/count/order) in the same class. It is compile-time polymorphism.",
    },
    {
      id: "cj-b-4",
      level: "Basic",
      q:"Explain inheritance with an example",
      a:"Inheritance allows a subclass to inherit properties from a superclass using extends.Example: class Animal { void eat() { } } class Dog extends Animal { }—Dog inherits eat()",

    },
    {
        id: "cj-b-5",
        level:"Basic",
        q:"What is polymorphism?",
        a:"Polymorphism enables objects of different classes to be treated as one type, often via method overriding.Compile-time (overloading) and runtime (overriding) are key forms.",
    },
    {
        id: "cj-b-6",
        level:"Basic",
        q:"What are primitive data types in Java?",
        a:"Eight primitives exist: byte, short, int, long, float, double, char, boolean.They store simple values directly, unlike reference types."
    },
    {
        id: "cj-b-7",
        level:"Basic",
        q:"Difference between == and .equals()?",
        a:"== compares references (memory addresses) for objects; .equals() compares content.Strings use equals() for value comparison",
    },
    {
        id: "cj-b-8",
        level:"Basic",
        q:"Explain JVM, JRE, and JDK?",
        a:"JVM executes bytecode; JRE provides runtime environment (JVM + libraries); JDK includes JRE + development tools like compiler.JDK is for developers; JRE suffices for running apps.",
    },
    {
        id: "cj-b-9",
        level: "Basic",
        q: "What is the difference between Heap and Stack?",
        a: "Heap stores objects dynamically; Stack handles method calls, local variables (faster, LIFO).Heap memory is garbage-collected.",
    },
    {
        id: "cj-b-10",
        level: "Basic",
        q: "How do you handle exceptions?",
        a: "Use try-catch-finally blocks; throws declares checked exceptions in methods.Example: try { int x = 1/0; } catch(ArithmeticException e) { }.",
    },
    {
        id: "cj-b-11",
        level: "Basic",
        q: "Difference between String, StringBuilder, StringBuffer?",
        a: "String is immutable; StringBuilder is mutable, not thread-safe; StringBuffer is mutable, thread-safe.Use StringBuilder for single-threaded efficiency.",
    },
    {
  id: "cj-b-12",
  level: "Basic",
  q: "Explain Shallow vs Deep Copy?",
  answer: {
    summary:
      "Shallow copy duplicates the top-level object but shares references to nested objects. Deep copy duplicates the object and all nested data, producing a fully independent copy.",
    table: {
      title: "Key Differences",
      headers: ["Aspect", "Shallow Copy", "Deep Copy"],
      rows: [
        ["Nested Objects", "Shares references", "Creates new copies"],
        ["Memory Use", "Lower, faster", "Higher, slower"],
        ["Independence", "Partial; mutations propagate", "Full; changes isolated"],
      ],
    },
    codeTitle: "Java Code Example",
    codeLang: "java",
    code: `import java.util.Arrays;

class Student implements Cloneable {
  String name;
  int[] grades; // nested array

  Student(String name, int[] grades) {
    this.name = name;
    this.grades = grades.clone(); // Deep copy in constructor (optional)
  }

  // Shallow clone (default behavior)
  @Override
  public Student clone() throws CloneNotSupportedException {
    return (Student) super.clone(); // copies reference to grades
  }

  // Deep clone
  public Student deepClone() throws CloneNotSupportedException {
    Student cloned = (Student) super.clone();
    cloned.grades = this.grades.clone(); // copy array contents
    return cloned;
  }

  @Override
  public String toString() {
    return name + ": " + Arrays.toString(grades);
  }
}

public class CopyDemo {
  public static void main(String[] args) throws Exception {
    Student orig = new Student("Alice", new int[]{85, 90});

    // Shallow copy
    Student shallow = orig.clone();
    shallow.grades[0] = 95; // affects orig too
    System.out.println("Original (shallow): " + orig);

    // Deep copy
    Student deep = orig.deepClone();
    deep.grades[0] = 70; // does NOT affect orig
    System.out.println("Original (deep): " + orig);
  }
}`,
  },
},
{
    id: "cj-b-13",
    level: "Basic",
    q: "What are the access modifiers in Java, and their scope?",
    a: "Public: accessible everywhere; protected: same package or subclasses; default (no modifier): same package; private: only within the class.Use private for encapsulation to hide internal details",
},
{
    id: "cj-b-14",
    level: "Basic",
    q: "Difference between while and do-while loops?",
    a: "While checks condition before execution (may skip body); do-while checks after (executes at least once).Example: do { i++; } while (i < 5); runs once even if i >=5 initially",
},
{
    id: "cj-b-15",
    level: "Basic",
    q: "What is the difference between ArrayList and LinkedList?",
    a: "ArrayList uses dynamic arrays (fast random access); LinkedList uses doubly-linked nodes (fast insertions/deletions).Choose ArrayList for frequent reads, LinkedList for modifications.",
},
{
    id: "cj-b-16",
    level: "Basic",
    q: "Explain method overloading with an example.",
    a: "Multiple methods in same class with same name but different parameters (compile-time polymorphism).Example: void add(int a, int b) { } void add(double a, double b) { }—caller type decides which runs.",
},
{
    id: "cj-b-17",
    level: "Basic",
    q: "What does the final keyword do?",
    a: "Final variable: constant (can't reassign); final method: can't override; final class: can't extend.Improves performance and immutability, e.g., final int MAX = 100;.",
},
{
    id: "cj-b-18",
    level: "Basic",
    q: "What are wrapper classes in Java?",
    a: "Wrapper classes like Integer, Double convert primitives to objects for collections and generics use.Example: int i = 5; Integer obj = Integer.valueOf(i); enables List<Integer> storage.",
},
{
    id: "cj-b-19",
    level: "Basic",
    q: "What is the static keyword used for?",
    a: "Static members belong to class, not instances; shared across objects and accessible without instantiation.Example: static int count = 0; in a class tracks total instances universally.",
},
{
    id: "cj-b-20",
    level: "Basic",
    q: "Explain autoboxing and unboxing?",
    a: "Autoboxing automatically converts primitives to wrappers (e.g., int to Integer); unboxing reverses it.Example: List<Integer> list = new ArrayList<>(); list.add(10);—10 autoboxes to Integer.",
},
{
    id: "cj-b-21",
    level: "Basic",
    q: "What is the purpose of 'this' and 'super' keywords?",
    a: "this' refers to current object or invokes overloaded constructors; ‘super’ accesses superclass methods/constructors.Example: super.method(); calls parent's version; this(5); chains constructors.",
},
{
    id: "cj-b-22",
    level: "Basic",
    q: "What is a package in Java?",
    a: "Packages organize related classes/interfaces into namespaces, preventing naming conflicts like folders.Example:  package com.example; import java.util.List; .",
},
{
    id: "cj-b-23",
    level: "Basic",
    q: "What is constructor overloading?",
    a: "Multiple constructors in a class with different parameter lists for flexible object initialization.Example:  ClassName() { }  and  ClassName(int x) { } —compiler picks based on arguments.",
},
{
    id: "cj-b-24",
    level: "Basic",
    q: "Can the main method be overloaded?",
    a: "Yes, but JVM only calls  public static void main(String[] args) ; others are ignored at runtime.Overloaded mains work if invoked directly but not as entry point.",
},
{
    id: "cj-b-25",
    level: "Basic",
    q: "What are getters and setters?",
    a: "Getter methods retrieve private field values; setters update them, enforcing encapsulation.Example:  private int num; public int getNum() { return num; } public void setNum(int num) { this.num = num; } .",
},
{
    id: "cj-b-26",
    level: "Basic",
    q: "How to create an infinite for loop?",
    a: "Omit initialization, condition, and update: for(;;) { System.out.println(\"Looping\"); }.Terminates via break or Ctrl+C; mimics while(true).",
},
{
    id: "cj-b-27",
    level: "Basic",
    q: "Is Java pass-by-value or pass-by-reference?",
    a: "Java is strictly pass-by-value; primitives pass copies of values, objects pass copies of references (not the objects themselves).Changes to object state via reference affect the original, but reassigning the reference does not.",
},
{
    id: "cj-b-28",
    level: "Basic",
    q: "What methods are provided by the Object class?",
    a: "Key methods include equals(), hashCode(), toString(), clone(), getClass(), finalize(), and wait()/notify().All classes inherit these; override equals() and hashCode() for custom equality in collections .",
},
{
    id: "cj-b-29",
    level: "Basic",
    q: "What are varargs in Java?",
    a: "Varargs (variable arguments) allow methods to accept zero or more arguments of a type using  Type... args .Example:  void print(int... nums) { for(int n : nums) System.out.print(n); } —call as  print(1,2,3); .",
},
{
    id: "cj-b-30",
    level: "Basic",
    q: "What does the instanceof operator do?",
    a: "Checks if an object is an instance of a class, interface, or subclass at runtime; returns boolean.Example:  if (obj instanceof String) { String s = (String) obj; } —safe before casting.",
},
{
    id: "cj-b-31",
    level: "Basic",
    q: "What is method hiding in Java?",
    a: "Occurs when a static method in a subclass has the same signature as in the superclass, hiding (not overriding) the parent’s version.Resolution is based on reference type, not object type:  Super s = new Sub(); s.method();  calls Super’s static method.",
},
{
    id: "cj-b-32",
    level: "Basic",
    q: "What is garbage collection in Java?",
    a: "Garbage collection automatically frees memory occupied by unreachable objects, managed by the JVM’s GC algorithm.Eligible objects have no live references; use  System.gc()  to suggest (not force) collection.",
},
{
    id: "cj-b-32",
    level: "Basic",
    q: "Why are Strings immutable in Java?",
    a: "Immutability prevents accidental changes, enhances security (e.g., in hashing), and enables string pooling for efficiency.Operations like  +  create new instances rather than modifying existing ones.",
},
{
    id: "cj-b-33",
    level: "Basic",
    q: "What are enums in Java?",
    a: " Enums define a fixed set of constants using  enum  keyword, with optional fields, constructors, and methods.Example:  enum Day { MONDAY, TUESDAY; } —type-safe, iterable via  values().",
},
{
    id: "cj-b-34",
    level: "Basic",
    q: "What are anonymous classes?",
    a: "Unnamed inner classes defined and instantiated inline, often for one-time use like event handlers.Example:  Runnable r = new Runnable() { public void run() { } }; —overrides abstract methods.",
},
{
    id: "cj-b-35",
    level: "Basic",
    q: "What is synchronization in Java?",
    a: "Synchronization ensures thread safety by controlling access to shared resources using  synchronized  keyword on methods/blocks.Prevents race conditions; only one thread executes synchronized code at a time.",
},
{
    id: "cj-b-36",
    level: "Basic",
    q: "What does the transient keyword do?",
    a: " Transient fields are not serialized during object serialization, useful for sensitive data or non-serializable objects.Example:  private transient String password;.",
},
{
    id: "cj-b-37",
    level: "Basic",
    q: "What is serialization in Java?",
    a: "Serialization converts objects to byte streams for storage/transmission; deserialization reverses it.Implement  Serializable  interface;  serialVersionUID  ensures version compatibility.",
},
{
    id:"cj-b-38",
    level: "Basic",
    q: "Difference between checked and unchecked exceptions?",
    a: "Checked exceptions (e.g., IOException) must be handled at compile-time via try-catch/throws; unchecked (e.g., NullPointerException) are RuntimeException subclasses, optional to handle.Checked for recoverable errors; unchecked for programming bugs.",
},
{
    id: "cj-b-39",
    level: "Basic",
    q: "Literals in Java?",
    a: "Literals represent fixed values directly in code, such as integers (100), floats (3.14F), characters (‘A’), or strings (“Hello”).They belong to primitive types or String and cannot be changed at runtime.Use literals for constants to improve code readability without variables.",
},
{
    id: "cj-b-40",
    level: "Basic",
    q: "Static vs Non-Static Variables?",
    a: "Static variables belong to the class and share a single value across all instances, initialized once at class loading.Non-static (instance) variables tie to each object, with unique copies per instance.Access static via class name (e.g., ClassName.var); instance requires an object reference.",
},
{
    id: "cj-b-41",
    level: "Basic",
    q: "Deadlock Prevention?",
    a: "Deadlock happens when threads wait cyclically for each other’s resources, like locks.Prevent it by ordering lock acquisition consistently, avoiding nested locks, or using timeouts.Tools like java.util.concurrent locks help detect and avoid it.",
},
{
    id: "cj-b-42",
    level: "Basic",
    q: "Fail-Safe Iterators?",
    a: " Fail-safe iterators work on a collection copy, so structural changes (add/remove) during iteration don’t throw ConcurrentModificationException.Examples include ConcurrentHashMap or CopyOnWriteArrayList iterators.They trade memory for safety in multithreaded environments.",
},
{
    id: "cj-b-43",
    level: "Basic",
    q: "Java ClassLoader?",
    a: "ClassLoader dynamically loads .class files into JVM memory at runtime.It follows delegation: check parent first (Bootstrap, Extension, Application), then self.Supports hot deployment and avoids reloading loaded classes.",
},
{
    id: "cj-b-44",
    level: "Basic",
    q: "Volatile Keyword?",
    a: "Volatile ensures variable visibility across threads by preventing compiler/JVM reordering and caching, forcing reads/writes from main memory.It provides happens-before guarantee but no atomicity or mutual exclusion.Use for flags like boolean running = true; to stop threads safely.",
},
{
    id: "cj-b-45",
    level: "Basic",
    q: "Equals and HashCode Contract?",
    a: "Equals checks logical equality (content); hashCode returns consistent int hash for equal objects.Overriding one requires the other: equal objects must have same hashCode, though unequal can share.HashSet/HashMap rely on this for correct storage/retrieval.",
},
{
    id: "cj-b-46",
    level: "Basic",
    q: "HashMap Load Factor?",
    a: "Load factor (default 0.75) is the fill ratio before resizing; balances space and performance.At 75% capacity, HashMap doubles array size to avoid collisions slowing operations.Lower factor saves space but increases lookups; higher boosts space use.",
},
{
    id: "cj-b-47",
    level: "Basic",
    q: "Comparable vs Comparator?",
    a: "Comparable adds natural ordering via compareTo() in the class (e.g., String implements it).Comparator provides external, flexible sorting without modifying class (e.g., Collections.sort(list, comparator)).Use Comparator for multiple sort criteria or third-party classes.",
},
{
    id: "cj-b-48",
    level: "Basic",
    q: "Yield, Sleep, Join Differences?",
    a: "Yield pauses current thread voluntarily, allowing others same priority to run (no guarantee).Sleep blocks thread for specified milliseconds, releasing CPU but holding locks.Join waits for another thread to complete before proceeding.",
},
{
    id: "cj-b-49",
    level: "Basic",
    q: "Abstraction vs Encapsulation?",
    a: "Abstraction hides complexity, showing essentials (abstract classes/interfaces).Encapsulation bundles data/methods, restricting access via private fields and public getters/setters.Abstraction focuses “what”; encapsulation on “how” with data protection.",
},
{
    id: "cj-b-50",
    level: "Basic",
    q: "What is Immutability?",
    a: "Overriding requires same signature (name, params), subtype return type, no private/static/final parent method.Runtime polymorphism: calls based on object type, not reference.",
},
    // ===== INTERMEDIATE =====
    // ===== INTERMEDIATE (Core Java) =====

  {
    id: "cj-i-1",
    level: "Intermediate",
    q: "Explain equals() and hashCode(). Why must they be consistent?",
    a: "If two objects are equal via equals(), they must have the same hashCode. HashMap/HashSet use hashCode to pick a bucket and equals() to confirm the match. Breaking the contract causes missing lookups or duplicates.",
  },
  {
    id: "cj-i-2",
    level: "Intermediate",
    q: "What is the difference between ArrayList and LinkedList?",
    a: "ArrayList: fast random access O(1), insert/delete in middle is expensive (shifts). LinkedList: random access is O(n), but insert/delete is O(1) if you already have the node/iterator; more memory due to node pointers.",
  },
  {
    id: "cj-i-3",
    level: "Intermediate",
    q: "What is immutability and how do you create an immutable class?",
    a: "Immutable means state cannot change after creation. Make class final, fields private final, no setters, initialize in constructor, and do defensive copies for mutable fields (and return copies in getters).",
  },

  {
    id: "cj-i-4",
    level: "Intermediate",
    q: "Why should you prefer composition over inheritance in many cases?",
    a: "Composition is more flexible and avoids fragile base class problems. You can change behavior by swapping composed components and you don’t expose internal parent class API. Inheritance tightly couples child to parent implementation.",
  },
  {
    id: "cj-i-5",
    level: "Intermediate",
    q: "What is the difference between == and equals() for objects?",
    a: "== checks reference identity (same object). equals() checks logical equality (as implemented). For String, equals compares content; == compares references.",
  },
  {
    id: "cj-i-6",
    level: "Intermediate",
    q: "Explain String, StringBuilder, and StringBuffer differences.",
    a: "String is immutable. StringBuilder is mutable and not thread-safe (faster). StringBuffer is mutable and synchronized (thread-safe, slower). Use StringBuilder in single-threaded concatenations.",
  },
  {
    id: "cj-i-7",
    level: "Intermediate",
    q: "What is fail-fast vs fail-safe iterator?",
    a: "Fail-fast iterators (ArrayList, HashMap) throw ConcurrentModificationException on structural modification during iteration. Fail-safe iterators (CopyOnWriteArrayList) iterate over a snapshot so they don’t throw but may not reflect latest changes.",
  },
  {
    id: "cj-i-8",
    level: "Intermediate",
    q: "What is the difference between HashMap and ConcurrentHashMap?",
    a: "HashMap is not thread-safe. ConcurrentHashMap is thread-safe with fine-grained locking / internal concurrency, allows concurrent reads/writes without locking whole map (no null keys/values).",
  },
  {
    id: "cj-i-9",
    level: "Intermediate",
    q: "What is the difference between Comparable and Comparator?",
    a: "Comparable defines natural ordering in the class via compareTo(). Comparator defines custom ordering externally via compare(a,b). Comparator is useful for multiple sort strategies.",
  },
  {
    id: "cj-i-10",
    level: "Intermediate",
    q: "Explain Big-O for HashMap get() and when it degrades.",
    a: "Average-case get() is O(1). It can degrade to O(n) with many collisions. In modern Java, heavy collision buckets may become balanced trees, improving worst-case toward O(log n) for those buckets.",
  },

  {
    id: "cj-i-11",
    level: "Intermediate",
    q: "What is autoboxing/unboxing and a common pitfall?",
    a: "Autoboxing converts primitive ↔ wrapper automatically. Pitfall: NullPointerException when unboxing null (Integer x=null; int y=x;). Also performance overhead in tight loops.",
  },
  {
    id: "cj-i-12",
    level: "Intermediate",
    q: "Explain the Java memory model basics: stack vs heap.",
    a: "Stack stores method frames/local variables/references (per thread). Heap stores objects/arrays (shared). Local references live on stack, but objects they point to are on heap.",
  },
  {
    id: "cj-i-13",
    level: "Intermediate",
    q: "What is the difference between checked and unchecked exceptions?",
    a: "Checked exceptions must be declared/handled (e.g., IOException). Unchecked (RuntimeException) don’t require declaration. Use checked for recoverable conditions and unchecked for programmer errors.",
  },
  {
    id: "cj-i-14",
    level: "Intermediate",
    q: "What is try-with-resources and why is it preferred?",
    a: "It automatically closes resources implementing AutoCloseable even if exceptions occur. It reduces boilerplate and prevents resource leaks.",
  },
  {
    id: "cj-i-15",
    level: "Intermediate",
    q: "Explain object cloning pitfalls and better alternatives.",
    a: "Clone() is tricky: shallow copy, broken invariants, checked exception, and inheritance issues. Prefer copy constructors, static factory methods, or serialization-based deep copy when appropriate.",
  },

  // ---- with code where useful ----
  {
    id: "cj-i-16",
    level: "Intermediate",
    q: "How do you correctly implement equals() and hashCode()? (Show a safe template)",
    a: `Use Objects.equals and Objects.hash. Include the same fields in both methods.

Example:
class User {
  private final String id;
  private final String email;

  User(String id, String email) { this.id = id; this.email = email; }

  @Override public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof User)) return false;
    User other = (User) o;
    return java.util.Objects.equals(id, other.id)
        && java.util.Objects.equals(email, other.email);
  }

  @Override public int hashCode() {
    return java.util.Objects.hash(id, email);
  }
}`,
  },
  {
    id: "cj-i-17",
    level: "Intermediate",
    q: "Why is using mutable fields in hashCode() risky?",
    a: "If a key’s fields used in hashCode() change after insertion into HashMap/HashSet, the object may be in the wrong bucket. Lookups may fail and set uniqueness breaks. Prefer immutability for keys.",
  },
  {
    id: "cj-i-18",
    level: "Intermediate",
    q: "What is the difference between final, finally, and finalize()?",
    a: "final: keyword for constants/avoid override/avoid inheritance. finally: block that runs after try/catch. finalize(): old GC hook (deprecated), not reliable; avoid it.",
  },
  {
    id: "cj-i-19",
    level: "Intermediate",
    q: "What is the difference between HashSet and TreeSet?",
    a: "HashSet is hash-based, no ordering, average O(1) operations. TreeSet is sorted (red-black tree), operations are O(log n) and requires Comparable/Comparator.",
  },
  {
    id: "cj-i-20",
    level: "Intermediate",
    q: "Explain the difference between HashMap and LinkedHashMap.",
    a: "LinkedHashMap maintains insertion order (or access order if configured). It’s used for LRU cache patterns; HashMap doesn’t guarantee order.",
  },

  {
    id: "cj-i-21",
    level: "Intermediate",
    q: "How do you build an LRU cache using LinkedHashMap?",
    a: `Use accessOrder=true and override removeEldestEntry.

Example:
java.util.Map<Integer,Integer> lru = new java.util.LinkedHashMap<>(16, 0.75f, true) {
  @Override protected boolean removeEldestEntry(java.util.Map.Entry<Integer,Integer> e) {
    return size() > 100; // max size
  }
};`,
  },
  {
    id: "cj-i-22",
    level: "Intermediate",
    q: "What is a functional interface and why is it important?",
    a: "A functional interface has exactly one abstract method (e.g., Runnable, Comparator). It enables lambda expressions and method references.",
  },
  {
    id: "cj-i-23",
    level: "Intermediate",
    q: "What is the difference between map() and flatMap() in Streams?",
    a: "map transforms each element into one element. flatMap transforms each element into a stream and flattens into a single stream, useful for nested collections.",
  },
  {
    id: "cj-i-24",
    level: "Intermediate",
    q: "How do you avoid NullPointerException using Optional properly?",
    a: "Use Optional as a return type (not fields), and handle via map/flatMap/orElse/orElseGet. Avoid calling get() without isPresent().",
  },
  {
    id: "cj-i-25",
    level: "Intermediate",
    q: "What is the difference between orElse and orElseGet?",
    a: "orElse eagerly evaluates its argument even if value is present. orElseGet is lazy and only calls the supplier if empty—better for expensive default creation.",
  },

  {
    id: "cj-i-26",
    level: "Intermediate",
    q: "Explain method reference types with examples.",
    a: `Types: static (Class::staticMethod), instance (obj::method), instance of arbitrary type (Class::method), constructor (Class::new).

Example:
java.util.List<String> xs = java.util.Arrays.asList("a","bb");
xs.sort(String::compareToIgnoreCase);`,
  },
  {
    id: "cj-i-27",
    level: "Intermediate",
    q: "What is the difference between reduce() and collect() in Streams?",
    a: "reduce combines elements into one value (sum, max) with associative accumulator. collect is for mutable reduction (List, Set, groupingBy) using collectors.",
  },
  {
    id: "cj-i-28",
    level: "Intermediate",
    q: "Explain groupingBy and partitioningBy.",
    a: "groupingBy groups by a key producing Map<K,List<V>> (or downstream). partitioningBy splits into two groups based on predicate: Map<Boolean,List<V>>.",
  },
  {
    id: "cj-i-29",
    level: "Intermediate",
    q: "What is the difference between parallelStream and stream?",
    a: "parallelStream uses ForkJoinPool for parallel execution. It can speed up CPU-heavy tasks on large datasets but may be slower for small collections, IO-bound work, or when order/side effects matter.",
  },
  {
    id: "cj-i-30",
    level: "Intermediate",
    q: "Why are side effects dangerous in streams (especially parallel)?",
    a: "Side effects break functional style and can cause race conditions and nondeterministic results in parallel streams. Prefer pure functions and collectors.",
  },

  {
    id: "cj-i-31",
    level: "Intermediate",
    q: "Explain Java serialization and why it’s risky.",
    a: "Serialization can be insecure (gadget chains), brittle across versions, and couples to implementation. Prefer JSON/protobuf, and if needed, validate input and use serialVersionUID carefully.",
  },
  {
    id: "cj-i-32",
    level: "Intermediate",
    q: "What is serialVersionUID and when should you define it?",
    a: "It’s a version identifier for Serializable classes. Define it to control compatibility across versions; otherwise it’s generated and changes may break deserialization.",
  },
  {
    id: "cj-i-33",
    level: "Intermediate",
    q: "Explain reflection and a common use case.",
    a: "Reflection inspects classes/methods/fields at runtime. Used in frameworks (DI, ORM) to create objects and call methods dynamically. Overuse can hurt performance and bypass encapsulation.",
  },
  {
    id: "cj-i-34",
    level: "Intermediate",
    q: "What is the difference between static and instance members?",
    a: "static belongs to class (one copy). instance belongs to each object. static methods can’t access instance fields directly without an object reference.",
  },
  {
    id: "cj-i-35",
    level: "Intermediate",
    q: "What is a static factory method and why use it?",
    a: "A named method like of()/valueOf() returning instances. Benefits: descriptive names, caching, returning subtype, controlling creation (singleton/pool).",
  },

  {
    id: "cj-i-36",
    level: "Intermediate",
    q: "Explain default methods in interfaces and why they exist.",
    a: "Default methods allow adding new methods to interfaces without breaking existing implementations (backward compatibility), e.g., Java 8 additions to Collection APIs.",
  },
  {
    id: "cj-i-37",
    level: "Intermediate",
    q: "What is the diamond problem and how does Java handle it?",
    a: "Multiple inheritance of implementation can cause ambiguity. Java avoids it by not allowing multiple class inheritance. With default interface methods, conflicts must be resolved by overriding explicitly.",
  },
  {
    id: "cj-i-38",
    level: "Intermediate",
    q: "Explain covariant return types in Java.",
    a: "When overriding a method, the return type can be a subtype of the original return type, improving type safety and usability.",
  },
  {
    id: "cj-i-39",
    level: "Intermediate",
    q: "What is type erasure in generics and its impact?",
    a: "Generics are erased at runtime (type parameters removed). You can’t do new T(), instanceof List<String>, or create generic arrays safely. Use Class<T> tokens when needed.",
  },
  {
    id: "cj-i-40",
    level: "Intermediate",
    q: "Explain PECS: Producer Extends, Consumer Super.",
    a: "If you only read (produce) from a generic structure, use <? extends T>. If you only write (consume) into it, use <? super T>. It helps design flexible APIs.",
  },

  {
    id: "cj-i-41",
    level: "Intermediate",
    q: "Give an example of PECS with code.",
    a: `Example:
static void addInts(java.util.List<? super Integer> dst) { dst.add(1); }
static int sum(java.util.List<? extends Number> src) {
  int s = 0;
  for (Number n : src) s += n.intValue();
  return s;
}`,
  },
  {
    id: "cj-i-42",
    level: "Intermediate",
    q: "What is the difference between String.intern() and normal strings?",
    a: "intern() adds/returns the canonical string from the string pool. It can save memory for many duplicates, but can increase perm/metaspace pressure; use carefully.",
  },
  {
    id: "cj-i-43",
    level: "Intermediate",
    q: "Explain the Java ClassLoader concept.",
    a: "ClassLoader loads classes into JVM (bootstrap, platform, application). Custom loaders enable plugin architectures. Class identity is (class name + loader).",
  },
  {
    id: "cj-i-44",
    level: "Intermediate",
    q: "What is the difference between Path and File in Java?",
    a: "File is legacy API. Path (NIO.2) is newer, supports better IO, symbolic links, filesystem operations, and works with Files utility methods.",
  },
  {
    id: "cj-i-45",
    level: "Intermediate",
    q: "Explain Java NIO channels and buffers at a high level.",
    a: "NIO uses buffers to hold data and channels to read/write data. It enables non-blocking IO (selectors) for scalable IO-heavy apps.",
  },

  {
    id: "cj-i-46",
    level: "Intermediate",
    q: "What is the difference between ExecutorService and creating threads manually?",
    a: "ExecutorService manages thread pools, task scheduling, reuse, better lifecycle management, and avoids overhead of creating many threads manually.",
  },
  {
    id: "cj-i-47",
    level: "Intermediate",
    q: "Explain Future vs CompletableFuture.",
    a: "Future is basic async result retrieval (blocking get). CompletableFuture supports chaining, composition, callbacks, and non-blocking pipelines.",
  },
  {
    id: "cj-i-48",
    level: "Intermediate",
    q: "What is the difference between synchronized and ReentrantLock?",
    a: "synchronized is simpler, automatic lock release, intrinsic lock. ReentrantLock offers tryLock, timed lock, fairness, interruptible waits, and multiple condition variables.",
  },
  {
    id: "cj-i-49",
    level: "Intermediate",
    q: "What is a deadlock and how can you avoid it?",
    a: "Deadlock occurs when threads wait on each other’s locks cyclically. Avoid by consistent lock ordering, using tryLock with timeout, reducing lock scope, or using higher-level concurrency utilities.",
  },
  {
    id: "cj-i-50",
    level: "Intermediate",
    q: "Explain volatile and when it’s needed.",
    a: "volatile ensures visibility of writes across threads and prevents certain reorders. It doesn’t make compound operations atomic. Use for flags/state visibility or with CAS/atomic classes.",
  },

  // Bonus (still intermediate) with code
  {
    id: "cj-i-51",
    level: "Intermediate",
    q: "How do AtomicInteger and CAS work conceptually?",
    a: `AtomicInteger uses compare-and-swap (CAS) to update without locking.

Example:
java.util.concurrent.atomic.AtomicInteger c = new java.util.concurrent.atomic.AtomicInteger(0);
c.incrementAndGet(); // atomic`,
  },


   // ===== ADVANCED =====
    // ===== ADVANCED (Core Java) =====

  {
    id: "cj-a-1",
    level: "Advanced",
    q: "Explain how Java memory is organized (Heap vs Stack).",
    a: "Stack stores method frames, local variables, and references; it is thread-specific and fast. Heap stores objects and arrays; it is shared across threads and managed by GC. Stack memory is freed automatically on method exit; heap memory is reclaimed by GC.",
  },
  {
    id: "cj-a-2",
    level: "Advanced",
    q: "Difference between synchronized, ReentrantLock, and atomic classes?",
    a: "synchronized is a JVM monitor lock with automatic acquisition/release. ReentrantLock provides advanced features like tryLock(), fairness, interruptibility, and Condition objects. Atomic classes use CAS (Compare-And-Swap) for lock-free thread-safe operations, ideal for simple state like counters.",
  },
  {
    id: "cj-a-3",
    level: "Advanced",
    q: "What is the Java Memory Model (JMM) and happens-before?",
    a: "JMM defines visibility, ordering, and atomicity rules. Happens-before guarantees that writes by one thread become visible to another (e.g., unlock-before-lock, volatile write-before-read, thread start-before run()).",
  },
  {
    id: "cj-a-4",
    level: "Advanced",
    q: "Explain volatile in detail. Is it enough for thread safety?",
    a: "volatile guarantees visibility and ordering but not atomicity. It ensures reads see the latest write and prevents instruction reordering. It is insufficient for compound actions like increment (x++).",
  },
  {
    id: "cj-a-5",
    level: "Advanced",
    q: "How does Compare-And-Swap (CAS) work internally?",
    a: "CAS compares the current value in memory with an expected value and swaps it atomically if they match. It avoids locks but can suffer from ABA problem; used by atomic classes.",
  },
  {
    id: "cj-a-6",
    level: "Advanced",
    q: "Explain the ABA problem and its solution.",
    a: "ABA occurs when a value changes A→B→A and CAS assumes no change. Solutions include versioning (AtomicStampedReference) or tagging values.",
  },
  {
    id: "cj-a-7",
    level: "Advanced",
    q: "What are different GC algorithms in Java?",
    a: "Serial GC (single-threaded), Parallel GC (throughput-oriented), CMS (low latency, deprecated), G1 (region-based, default), ZGC and Shenandoah (ultra-low latency).",
  },
  {
    id: "cj-a-8",
    level: "Advanced",
    q: "Explain G1 GC and why it replaced CMS.",
    a: "G1 divides heap into regions and performs incremental compaction, avoiding long pauses. It provides predictable pause times and handles large heaps better than CMS.",
  },
  {
    id: "cj-a-9",
    level: "Advanced",
    q: "What is Stop-The-World (STW) in GC?",
    a: "STW pauses all application threads during certain GC phases to ensure memory consistency. Modern GCs minimize STW duration.",
  },
  {
    id: "cj-a-10",
    level: "Advanced",
    q: "Explain escape analysis and its benefits.",
    a: "Escape analysis determines if an object escapes a method/thread. JVM can allocate non-escaping objects on stack, eliminate synchronization, and perform scalar replacement.",
  },

  {
    id: "cj-a-11",
    level: "Advanced",
    q: "How does JVM optimize synchronized blocks?",
    a: "JVM uses biased locking, lightweight locking, and lock coarsening/elimination to reduce synchronization overhead.",
  },
  {
    id: "cj-a-12",
    level: "Advanced",
    q: "Explain ThreadLocal and a real-world use case.",
    a: "ThreadLocal provides thread-confined variables. Common use: storing user/session context or DB connection per thread in web applications.",
  },
  {
    id: "cj-a-13",
    level: "Advanced",
    q: "What are soft, weak, and phantom references?",
    a: "Soft: cleared under memory pressure (cache). Weak: cleared eagerly (WeakHashMap). Phantom: used for cleanup after GC, always null get().",
  },
  {
    id: "cj-a-14",
    level: "Advanced",
    q: "Explain class loading phases in JVM.",
    a: "Loading (read bytecode), Linking (verify, prepare, resolve), Initialization (static blocks). Each phase ensures correctness and readiness.",
  },
  {
    id: "cj-a-15",
    level: "Advanced",
    q: "What is Metaspace and how is it different from PermGen?",
    a: "Metaspace stores class metadata and lives in native memory. It replaces PermGen, removing fixed-size limitations.",
  },

  {
    id: "cj-a-16",
    level: "Advanced",
    q: "Explain double-checked locking and why volatile is required.",
    a: "Double-checked locking reduces synchronization overhead. volatile prevents instruction reordering during object initialization.",
    aCode: `
class Singleton {
  private static volatile Singleton instance;
  static Singleton getInstance() {
    if (instance == null) {
      synchronized (Singleton.class) {
        if (instance == null) instance = new Singleton();
      }
    }
    return instance;
  }
}`,
  },
  {
    id: "cj-a-17",
    level: "Advanced",
    q: "Difference between Callable and Runnable?",
    a: "Runnable returns no result and cannot throw checked exceptions. Callable returns a value and can throw checked exceptions; used with Future.",
  },
  {
    id: "cj-a-18",
    level: "Advanced",
    q: "Explain ForkJoinPool and work-stealing.",
    a: "ForkJoinPool splits tasks into subtasks. Idle threads steal tasks from busy threads’ queues, improving CPU utilization.",
  },
  {
    id: "cj-a-19",
    level: "Advanced",
    q: "How does CompletableFuture improve async programming?",
    a: "It supports non-blocking pipelines, chaining, combining tasks, and better error handling compared to Future.",
  },
  {
    id: "cj-a-20",
    level: "Advanced",
    q: "Explain backpressure and why it matters.",
    a: "Backpressure controls data flow when producers are faster than consumers. Prevents memory overflow and resource exhaustion.",
  },

  {
    id: "cj-a-21",
    level: "Advanced",
    q: "What is false sharing and how to avoid it?",
    a: "False sharing occurs when threads modify variables in the same cache line. Avoid with padding or @Contended.",
  },
  {
    id: "cj-a-22",
    level: "Advanced",
    q: "Explain happens-before guarantees with volatile and locks.",
    a: "volatile write → volatile read ensures visibility. Unlock happens-before subsequent lock on same monitor.",
  },
  {
    id: "cj-a-23",
    level: "Advanced",
    q: "Difference between parallelStream and ExecutorService?",
    a: "parallelStream uses common ForkJoinPool (shared). ExecutorService gives explicit control over threads, pools, and isolation.",
  },
  {
    id: "cj-a-24",
    level: "Advanced",
    q: "What is reactive programming and how does it differ from imperative?",
    a: "Reactive is event-driven, non-blocking, async with backpressure. Imperative is sequential and blocking.",
  },
  {
    id: "cj-a-25",
    level: "Advanced",
    q: "Explain serialization pitfalls and secure alternatives.",
    a: "Java serialization is vulnerable to gadget attacks. Prefer JSON/Protobuf and validate input strictly.",
  },

  {
    id: "cj-a-26",
    level: "Advanced",
    q: "What is memory leak in Java and how can it happen?",
    a: "Leaks occur when objects are no longer needed but still referenced (static maps, listeners, ThreadLocals). Use profiling tools to detect.",
  },
  {
    id: "cj-a-27",
    level: "Advanced",
    q: "Explain OutOfMemoryError types.",
    a: "Heap space, Metaspace, GC overhead limit exceeded, Direct buffer memory. Each indicates different memory exhaustion scenarios.",
  },
  {
    id: "cj-a-28",
    level: "Advanced",
    q: "What is direct memory and when is it used?",
    a: "Direct memory is outside heap (ByteBuffer.allocateDirect). Used for high-performance IO but must be managed carefully.",
  },
  {
    id: "cj-a-29",
    level: "Advanced",
    q: "Explain JIT compilation and tiered compilation.",
    a: "JIT compiles hot bytecode into native code. Tiered compilation balances startup speed (C1) and peak performance (C2).",
  },
  {
    id: "cj-a-30",
    level: "Advanced",
    q: "What is deoptimization in JVM?",
    a: "JVM can revert optimized code back to interpreted mode when assumptions break (e.g., new class loaded).",
  },

  {
    id: "cj-a-31",
    level: "Advanced",
    q: "Explain Java Flight Recorder (JFR).",
    a: "JFR is a low-overhead profiling tool built into JVM to capture runtime performance, GC, and thread data.",
  },
  {
    id: "cj-a-32",
    level: "Advanced",
    q: "What is the difference between blocking and non-blocking IO?",
    a: "Blocking IO waits for operation completion. Non-blocking IO allows thread to continue and be notified later (selectors).",
  },
  {
    id: "cj-a-33",
    level: "Advanced",
    q: "Explain Selector in Java NIO.",
    a: "Selector allows a single thread to manage multiple channels by monitoring readiness events.",
  },
  {
    id: "cj-a-34",
    level: "Advanced",
    q: "What is memory visibility vs atomicity?",
    a: "Visibility ensures latest value is seen across threads. Atomicity ensures operations complete indivisibly.",
  },
  {
    id: "cj-a-35",
    level: "Advanced",
    q: "Explain instruction reordering and its impact.",
    a: "CPU/JVM may reorder instructions for optimization. Synchronization and volatile prevent harmful reorderings.",
  },

  {
    id: "cj-a-36",
    level: "Advanced",
    q: "Explain lock-free vs wait-free algorithms.",
    a: "Lock-free guarantees progress of some thread; wait-free guarantees progress of every thread within bounded steps.",
  },
  {
    id: "cj-a-37",
    level: "Advanced",
    q: "What is the difference between livelock and deadlock?",
    a: "Deadlock: threads blocked forever. Livelock: threads keep running but make no progress.",
  },
  {
    id: "cj-a-38",
    level: "Advanced",
    q: "Explain the role of fences (memory barriers).",
    a: "Memory barriers prevent reordering and ensure visibility between CPU cores.",
  },
  {
    id: "cj-a-39",
    level: "Advanced",
    q: "What is the cost of context switching?",
    a: "Context switching saves/restores thread state and pollutes CPU cache; excessive switching reduces performance.",
  },
  {
    id: "cj-a-40",
    level: "Advanced",
    q: "Explain Java’s approach to NUMA systems.",
    a: "JVM has NUMA-aware memory allocation to reduce remote memory access latency on multi-socket systems.",
  },

  {
    id: "cj-a-41",
    level: "Advanced",
    q: "Explain @Contended annotation.",
    a: "@Contended adds padding around fields to prevent false sharing (requires JVM flag).",
  },
  {
    id: "cj-a-42",
    level: "Advanced",
    q: "How does JVM handle large object allocation?",
    a: "Large objects may be allocated directly in old generation to avoid copying costs.",
  },
  {
    id: "cj-a-43",
    level: "Advanced",
    q: "Explain Safepoints in JVM.",
    a: "Safepoints are points where JVM can safely pause threads for GC, deoptimization, or profiling.",
  },
  {
    id: "cj-a-44",
    level: "Advanced",
    q: "What is biased locking and why was it removed?",
    a: "Biased locking optimized uncontended locks. It was removed in newer JVMs due to complexity and limited benefit.",
  },
  {
    id: "cj-a-45",
    level: "Advanced",
    q: "Explain Java module system (JPMS).",
    a: "JPMS (Java 9+) enforces strong encapsulation, reliable configuration, and modular dependencies.",
  },

  {
    id: "cj-a-46",
    level: "Advanced",
    q: "What is illegal reflective access warning?",
    a: "Occurs when code uses reflection to access non-exported JDK internals. It will be disallowed in future Java versions.",
  },
  {
    id: "cj-a-47",
    level: "Advanced",
    q: "Explain CDS (Class Data Sharing).",
    a: "CDS reduces startup time and memory by sharing common class metadata across JVM instances.",
  },
  {
    id: "cj-a-48",
    level: "Advanced",
    q: "How does JVM handle signals (SIGTERM, SIGKILL)?",
    a: "SIGTERM allows graceful shutdown (shutdown hooks). SIGKILL cannot be intercepted.",
  },
  {
    id: "cj-a-49",
    level: "Advanced",
    q: "Explain shutdown hooks and their risks.",
    a: "Shutdown hooks run before JVM exits. Risks: long-running hooks can delay shutdown.",
  },
  {
    id: "cj-a-50",
    level: "Advanced",
    q: "What are best practices for writing high-performance Java applications?",
    a: "Use appropriate GC, minimize allocations, prefer immutability, profile before optimizing, tune concurrency, and monitor in production.",
  },


  ],
};
