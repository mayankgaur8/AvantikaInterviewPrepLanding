// ================= JSP =================
export const JSP_QUESTIONS = {
    jsp:[
  // ===== BASIC =====
  {
    id: "jsp-b-1",
    level: "Basic",
    q: "What is JSP?",
    a: "JSP (JavaServer Pages) is a server-side technology used to create dynamic web content. It allows embedding Java code inside HTML and is translated into a Servlet by the container.",
  },
  {
    id: "jsp-b-2",
    level: "Basic",
    q: "What are the advantages of JSP over Servlet?",
    a: "JSP is easier to write for presentation logic, supports implicit objects, separates UI from business logic, and reduces Java code compared to Servlets.",
  },
  {
    id: "jsp-b-3",
    level: "Basic",
    q: "What is JSP lifecycle?",
    a: "JSP lifecycle includes translation, compilation, class loading, instantiation, initialization (_jspInit), request handling (_jspService), and destruction (_jspDestroy).",
  },
  {
    id: "jsp-b-4",
    level: "Basic",
    q: "What are JSP implicit objects?",
    a: "Implicit objects include request, response, session, application, out, page, pageContext, config, and exception.",
  },
  {
    id: "jsp-b-5",
    level: "Basic",
    q: "What is the difference between JSP and HTML?",
    a: "HTML is static and runs on browser, JSP is dynamic and runs on server. JSP can generate HTML dynamically using Java.",
  },

  // ===== INTERMEDIATE =====
  {
    id: "jsp-i-1",
    level: "Intermediate",
    q: "What are JSP directives?",
    a: "JSP directives provide instructions to the container. Types: page, include, and taglib.\n\nExample:\n<%@ page contentType=\"text/html\" language=\"java\" %>",
  },
  {
    id: "jsp-i-2",
    level: "Intermediate",
    q: "Difference between include directive and include action?",
    a: "Include directive includes content at translation time. Include action includes content at request time.\n\nExample:\n<%@ include file=\"header.jsp\" %>\n<jsp:include page=\"header.jsp\" />",
  },
  {
    id: "jsp-i-3",
    level: "Intermediate",
    q: "What are JSP scripting elements?",
    a: "Three scripting elements exist: Scriptlet (<% %>), Declaration (<%! %>), and Expression (<%= %>).",
  },
  {
    id: "jsp-i-4",
    level: "Intermediate",
    q: "What is Expression Language (EL) in JSP?",
    a: "EL simplifies access to JavaBeans, request/session attributes, and avoids Java code in JSP.\n\nExample:\n${user.name}",
  },
  {
    id: "jsp-i-5",
    level: "Intermediate",
    q: "What are JSP actions?",
    a: "JSP actions are XML-based tags used to control behavior like <jsp:include>, <jsp:forward>, <jsp:useBean>.",
  },
  {
    id: "jsp-i-6",
    level: "Intermediate",
    q: "Explain <jsp:useBean> with example.",
    a: "useBean creates or locates a JavaBean.\n\nExample:\n<jsp:useBean id=\"user\" class=\"com.app.User\" scope=\"session\" />",
  },
  {
    id: "jsp-i-7",
    level: "Intermediate",
    q: "What is JSTL?",
    a: "JSTL (JSP Standard Tag Library) provides tags for logic, iteration, formatting, and avoids scriptlets.",
  },
  {
    id: "jsp-i-8",
    level: "Intermediate",
    q: "Explain MVC in JSP/Servlet architecture.",
    a: "Servlet acts as Controller, JSP as View, and JavaBeans/Service classes as Model, ensuring separation of concerns.",
  },
  {
    id: "jsp-i-9",
    level: "Intermediate",
    q: "How do you handle exceptions in JSP?",
    a: "Using errorPage and isErrorPage attributes.\n\nExample:\n<%@ page errorPage=\"error.jsp\" %>",
  },
  {
    id: "jsp-i-10",
    level: "Intermediate",
    q: "What is the role of pageContext?",
    a: "pageContext provides access to all scopes and implicit objects and is used internally by JSP container.",
  },

  // ===== ADVANCED =====
  {
    id: "jsp-a-1",
    level: "Advanced",
    q: "How does JSP translate into a Servlet?",
    a: "JSP is converted into a Servlet source file, compiled into a class, and executed by the container. Scriptlets become code inside _jspService().",
  },
  {
    id: "jsp-a-2",
    level: "Advanced",
    q: "Why are scriptlets discouraged in JSP?",
    a: "Scriptlets mix business logic with presentation, reduce readability, and violate MVC. EL and JSTL are preferred.",
  },
  {
    id: "jsp-a-3",
    level: "Advanced",
    q: "Explain thread safety issues in JSP.",
    a: "JSPs are multi-threaded. Instance variables can cause race conditions. Use local variables or synchronization carefully.",
  },
  {
    id: "jsp-a-4",
    level: "Advanced",
    q: "What is the difference between forward and redirect in JSP?",
    a: "Forward happens on server side and URL remains same. Redirect happens on client side and URL changes.",
  },
  {
    id: "jsp-a-5",
    level: "Advanced",
    q: "How does JSP handle session management?",
    a: "JSP uses HttpSession implicitly via session object. Sessions can be managed via cookies or URL rewriting.",
  },
  {
    id: "jsp-a-6",
    level: "Advanced",
    q: "Explain custom JSP tags.",
    a: "Custom tags encapsulate reusable logic and are implemented using tag handlers or tag files.",
  },
  {
    id: "jsp-a-7",
    level: "Advanced",
    q: "What are tag files in JSP?",
    a: "Tag files are simple reusable JSP fragments used to define custom tags without Java code.",
  },
  {
    id: "jsp-a-8",
    level: "Advanced",
    q: "How does JSP differ from modern frameworks like Thymeleaf?",
    a: "JSP is older and tightly coupled with Servlet API. Thymeleaf is template-based, HTML-friendly, and better suited for Spring Boot.",
  },
  {
    id: "jsp-a-9",
    level: "Advanced",
    q: "How can you improve JSP performance?",
    a: "Use JSTL/EL, avoid scriptlets, cache static content, minimize session usage, and use compression.",
  },
  {
    id: "jsp-a-10",
    level: "Advanced",
    q: "Why is JSP considered obsolete in modern applications?",
    a: "Modern apps favor REST APIs with frontend frameworks (React/Angular). JSP is still used in legacy systems but not recommended for new projects.",
  },
],
}
