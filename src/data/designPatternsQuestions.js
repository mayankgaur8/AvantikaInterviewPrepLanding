export const DESIGN_PATTERNS_QUESTIONS = [

/* =====================================================
   BASIC – 20 QUESTIONS
===================================================== */

{
  id: "dp-b-01",
  level: "Basic",
  q: "What is a Design Pattern?",
  a: "Design patterns are proven, reusable solutions to common software design problems."
},

{
  id: "dp-b-02",
  level: "Basic",
  q: "Why are design patterns important?",
  a: "They improve code reusability, maintainability, readability, and follow best practices."
},

{
  id: "dp-b-03",
  level: "Basic",
  q: "What are the three main categories of design patterns?",
  a: "Creational, Structural, and Behavioral."
},

{
  id: "dp-b-04",
  level: "Basic",
  q: "What is a Creational pattern?",
  a: "Patterns that deal with object creation mechanisms."
},

{
  id: "dp-b-05",
  level: "Basic",
  q: "What is Singleton pattern?",
  a: "Ensures a class has only one instance and provides a global access point."
},

{
  id: "dp-b-06",
  level: "Basic",
  q: "Singleton example?",
  answer: {
    summary: "A thread-safe singleton implementation.",
    codeTitle: "Singleton (Double-Checked Locking)",
    code: `public class Singleton {
  private static volatile Singleton instance;

  private Singleton() {}

  public static Singleton getInstance() {
    if (instance == null) {
      synchronized (Singleton.class) {
        if (instance == null) {
          instance = new Singleton();
        }
      }
    }
    return instance;
  }
}`
  }
},

{
  id: "dp-b-07",
  level: "Basic",
  q: "What is Factory pattern?",
  a: "Creates objects without exposing instantiation logic to the client."
},

{
  id: "dp-b-08",
  level: "Basic",
  q: "Factory pattern example?",
  answer: {
    summary: "Factory returns object based on input.",
    codeTitle: "Factory Pattern",
    code: `interface Shape {
  void draw();
}

class Circle implements Shape {
  public void draw() {
    System.out.println("Drawing Circle");
  }
}

class ShapeFactory {
  static Shape getShape(String type) {
    if ("circle".equalsIgnoreCase(type)) {
      return new Circle();
    }
    return null;
  }
}`
  }
},

{
  id: "dp-b-09",
  level: "Basic",
  q: "What is Structural pattern?",
  a: "Patterns that deal with object composition."
},

{
  id: "dp-b-10",
  level: "Basic",
  q: "What is Adapter pattern?",
  a: "Allows incompatible interfaces to work together."
},

{
  id: "dp-b-11",
  level: "Basic",
  q: "Adapter pattern example?",
  answer: {
    summary: "Converts one interface into another.",
    codeTitle: "Adapter Pattern",
    code: `class OldSystem {
  void oldRequest() {
    System.out.println("Old request");
  }
}

interface NewSystem {
  void newRequest();
}

class Adapter implements NewSystem {
  private OldSystem oldSystem = new OldSystem();
  public void newRequest() {
    oldSystem.oldRequest();
  }
}`
  }
},

{
  id: "dp-b-12",
  level: "Basic",
  q: "What is Behavioral pattern?",
  a: "Patterns that deal with communication between objects."
},

{
  id: "dp-b-13",
  level: "Basic",
  q: "What is Observer pattern?",
  a: "Defines a one-to-many dependency so observers are notified of changes."
},

{
  id: "dp-b-14",
  level: "Basic",
  q: "Observer pattern example?",
  answer: {
    summary: "Notifies observers on state change.",
    codeTitle: "Observer Pattern",
    code: `interface Observer {
  void update(String msg);
}

class Subject {
  List<Observer> observers = new ArrayList<>();
  void register(Observer o) { observers.add(o); }
  void notifyAll(String msg) {
    observers.forEach(o -> o.update(msg));
  }
}`
  }
},

{
  id: "dp-b-15",
  level: "Basic",
  q: "What is Strategy pattern?",
  a: "Encapsulates interchangeable algorithms and selects them at runtime."
},

{
  id: "dp-b-16",
  level: "Basic",
  q: "Where is Strategy pattern used in Java?",
  a: "Comparator, Collections.sort(), Spring Security."
},

{
  id: "dp-b-17",
  level: "Basic",
  q: "What is Template Method pattern?",
  a: "Defines algorithm skeleton and lets subclasses override steps."
},

{
  id: "dp-b-18",
  level: "Basic",
  q: "What is Decorator pattern?",
  a: "Adds behavior dynamically without modifying original class."
},

{
  id: "dp-b-19",
  level: "Basic",
  q: "Decorator example?",
  answer: {
    summary: "Adds functionality dynamically.",
    codeTitle: "Decorator Pattern",
    code: `interface Coffee {
  double cost();
}

class SimpleCoffee implements Coffee {
  public double cost() { return 10; }
}

class MilkDecorator implements Coffee {
  private Coffee coffee;
  MilkDecorator(Coffee coffee) { this.coffee = coffee; }
  public double cost() { return coffee.cost() + 5; }
}`
  }
},

{
  id: "dp-b-20",
  level: "Basic",
  q: "What is Proxy pattern?",
  a: "Provides a surrogate or placeholder to control access."
},

/* =====================================================
   INTERMEDIATE – 20 QUESTIONS
===================================================== */

{
  id: "dp-i-01",
  level: "Intermediate",
  q: "Difference between Factory and Abstract Factory?",
  a: "Factory creates one product, Abstract Factory creates families of related products."
},

{
  id: "dp-i-02",
  level: "Intermediate",
  q: "What problem does Builder pattern solve?",
  a: "Constructs complex objects step-by-step."
},

{
  id: "dp-i-03",
  level: "Intermediate",
  q: "Builder example?",
  answer: {
    summary: "Builds immutable object.",
    codeTitle: "Builder Pattern",
    code: `class User {
  private final String name;
  private final int age;

  private User(Builder b) {
    this.name = b.name;
    this.age = b.age;
  }

  static class Builder {
    private String name;
    private int age;

    Builder name(String n) { this.name = n; return this; }
    Builder age(int a) { this.age = a; return this; }
    User build() { return new User(this); }
  }
}`
  }
},

{
  id: "dp-i-04",
  level: "Intermediate",
  q: "What is Chain of Responsibility?",
  a: "Passes request along a chain until handled."
},

{
  id: "dp-i-05",
  level: "Intermediate",
  q: "Where is Chain of Responsibility used?",
  a: "Servlet filters, Spring interceptors."
},

{
  id: "dp-i-06",
  level: "Intermediate",
  q: "What is Command pattern?",
  a: "Encapsulates request as an object."
},

{
  id: "dp-i-07",
  level: "Intermediate",
  q: "Command pattern example?",
  answer: {
    summary: "Decouples sender and receiver.",
    codeTitle: "Command Pattern",
    code: `interface Command {
  void execute();
}

class Light {
  void on() { System.out.println("Light ON"); }
}

class LightOnCommand implements Command {
  private Light light;
  LightOnCommand(Light l) { this.light = l; }
  public void execute() { light.on(); }
}`
  }
},

{
  id: "dp-i-08",
  level: "Intermediate",
  q: "What is Facade pattern?",
  a: "Provides a simplified interface to complex subsystem."
},

{
  id: "dp-i-09",
  level: "Intermediate",
  q: "Facade example?",
  answer: {
    summary: "Simplifies subsystem access.",
    codeTitle: "Facade Pattern",
    code: `class OrderFacade {
  void placeOrder() {
    System.out.println("Order placed");
  }
}`
  }
},

{
  id: "dp-i-10",
  level: "Intermediate",
  q: "What is Flyweight pattern?",
  a: "Reduces memory usage by sharing objects."
},

{
  id: "dp-i-11",
  level: "Intermediate",
  q: "What is Memento pattern?",
  a: "Captures and restores object state."
},

{
  id: "dp-i-12",
  level: "Intermediate",
  q: "What is Iterator pattern?",
  a: "Provides sequential access without exposing structure."
},

{
  id: "dp-i-13",
  level: "Intermediate",
  q: "Iterator example?",
  answer: {
    summary: "Iterates collection.",
    codeTitle: "Iterator Pattern",
    code: `Iterator<Integer> it = list.iterator();
while(it.hasNext()) {
  System.out.println(it.next());
}`
  }
},

{
  id: "dp-i-14",
  level: "Intermediate",
  q: "What is Mediator pattern?",
  a: "Centralizes complex communication logic."
},

{
  id: "dp-i-15",
  level: "Intermediate",
  q: "What is State pattern?",
  a: "Changes behavior based on internal state."
},

{
  id: "dp-i-16",
  level: "Intermediate",
  q: "State example?",
  answer: {
    summary: "Behavior changes per state.",
    codeTitle: "State Pattern",
    code: `interface State {
  void handle();
}`
  }
},

{
  id: "dp-i-17",
  level: "Intermediate",
  q: "What is Visitor pattern?",
  a: "Separates algorithm from object structure."
},

{
  id: "dp-i-18",
  level: "Intermediate",
  q: "Where is Visitor used?",
  a: "Compilers, AST traversal."
},

{
  id: "dp-i-19",
  level: "Intermediate",
  q: "Difference between Proxy and Decorator?",
  a: "Proxy controls access; Decorator adds behavior."
},

{
  id: "dp-i-20",
  level: "Intermediate",
  q: "Which patterns are heavily used in Spring?",
  a: "Singleton, Factory, Proxy, Template Method."
},

/* =====================================================
   ADVANCED – 10 QUESTIONS
===================================================== */

{
  id: "dp-a-01",
  level: "Advanced",
  q: "How does Spring use Proxy pattern?",
  a: "AOP creates proxies for transactions, security, and logging."
},

{
  id: "dp-a-02",
  level: "Advanced",
  q: "JDK Dynamic Proxy vs CGLIB?",
  a: "JDK uses interfaces; CGLIB subclasses concrete classes."
},

{
  id: "dp-a-03",
  level: "Advanced",
  q: "Which pattern helps avoid tight coupling in microservices?",
  a: "Strategy, Observer, Circuit Breaker."
},

{
  id: "dp-a-04",
  level: "Advanced",
  q: "How does Circuit Breaker relate to design patterns?",
  a: "It is a behavioral resilience pattern."
},

{
  id: "dp-a-05",
  level: "Advanced",
  q: "How do you choose the right pattern?",
  a: "Based on problem, constraints, scalability, and maintainability."
},

{
  id: "dp-a-06",
  level: "Advanced",
  q: "Anti-pattern example?",
  a: "God Object – one class doing too much."
},

{
  id: "dp-a-07",
  level: "Advanced",
  q: "Design pattern misuse example?",
  a: "Using Singleton everywhere causing tight coupling."
},

{
  id: "dp-a-08",
  level: "Advanced",
  q: "How do design patterns help in testing?",
  a: "They enable mocking, loose coupling, and dependency injection."
},

{
  id: "dp-a-09",
  level: "Advanced",
  q: "Design patterns vs Frameworks?",
  a: "Patterns are concepts; frameworks are concrete implementations."
},

{
  id: "dp-a-10",
  level: "Advanced",
  q: "How do patterns evolve with Java 8+?",
  a: "Lambdas simplify Strategy, Streams simplify Iterator."
}

];
