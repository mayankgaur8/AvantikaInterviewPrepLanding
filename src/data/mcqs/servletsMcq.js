// src/data/mcqs/servletsMcq.js
// 50 Servlet MCQs (Basic • Intermediate • Advanced)

export const SERVLETS_MCQ = [

  // ================= BASIC (1–17) =================
  {
    id: "servlet-mcq-1",
    tag: "Servlets • Basic",
    q: "What is a Servlet?",
    options: [
      "A Java class used to access database",
      "A Java program that runs on client",
      "A Java program that runs on a web server",
      "A JavaScript component"
    ],
    answer: 2,
    explain: "Servlet is a Java program that runs on a server and handles client requests."
  },
  {
    id: "servlet-mcq-2",
    tag: "Servlets • Basic",
    q: "Which package contains Servlet API?",
    options: [
      "java.servlet",
      "javax.servlet",
      "java.web",
      "javax.web"
    ],
    answer: 1,
    explain: "Servlet API is available in javax.servlet package."
  },
  {
    id: "servlet-mcq-3",
    tag: "Servlets • Basic",
    q: "Which protocol is commonly used by Servlets?",
    options: ["FTP", "SMTP", "HTTP", "TCP"],
    answer: 2,
    explain: "Servlets commonly use HTTP protocol."
  },
  {
    id: "servlet-mcq-4",
    tag: "Servlets • Basic",
    q: "Which interface must a servlet implement?",
    options: ["Runnable", "Serializable", "Servlet", "Cloneable"],
    answer: 2,
    explain: "Servlet interface must be implemented."
  },
  {
    id: "servlet-mcq-5",
    tag: "Servlets • Basic",
    q: "Which class is commonly extended to create servlet?",
    options: [
      "GenericServlet",
      "HttpServlet",
      "ServletRequest",
      "ServletResponse"
    ],
    answer: 1,
    explain: "HttpServlet is most commonly extended."
  },
  {
    id: "servlet-mcq-6",
    tag: "Servlets • Basic",
    q: "Which method handles GET requests?",
    options: ["doPost()", "doGet()", "service()", "init()"],
    answer: 1,
    explain: "doGet() handles HTTP GET requests."
  },
  {
    id: "servlet-mcq-7",
    tag: "Servlets • Basic",
    q: "Which method is called once in servlet lifecycle?",
    options: ["service()", "doGet()", "destroy()", "init()"],
    answer: 3,
    explain: "init() is called only once."
  },
  {
    id: "servlet-mcq-8",
    tag: "Servlets • Basic",
    q: "What does web.xml do?",
    options: [
      "Defines database",
      "Configures servlets",
      "Handles UI",
      "Manages sessions"
    ],
    answer: 1,
    explain: "web.xml is deployment descriptor for servlet configuration."
  },
  {
    id: "servlet-mcq-9",
    tag: "Servlets • Basic",
    q: "Which annotation replaces web.xml mapping?",
    options: ["@WebService", "@WebServlet", "@Servlet", "@Controller"],
    answer: 1,
    explain: "@WebServlet replaces web.xml mapping."
  },
  {
    id: "servlet-mcq-10",
    tag: "Servlets • Basic",
    q: "Which object represents client request?",
    options: [
      "ServletResponse",
      "HttpServlet",
      "ServletRequest",
      "HttpSession"
    ],
    answer: 2,
    explain: "ServletRequest represents client request."
  },
  {
    id: "servlet-mcq-11",
    tag: "Servlets • Basic",
    q: "Which object is used to send response?",
    options: [
      "ServletRequest",
      "ServletResponse",
      "HttpSession",
      "ServletConfig"
    ],
    answer: 1,
    explain: "ServletResponse sends data back to client."
  },
  {
    id: "servlet-mcq-12",
    tag: "Servlets • Basic",
    q: "Which method is called at servlet destruction?",
    options: ["init()", "service()", "destroy()", "finalize()"],
    answer: 2,
    explain: "destroy() is called before servlet is destroyed."
  },
  {
    id: "servlet-mcq-13",
    tag: "Servlets • Basic",
    q: "Which scope stores data per user?",
    options: ["Application", "Request", "Session", "Context"],
    answer: 2,
    explain: "Session scope stores data per user."
  },
  {
    id: "servlet-mcq-14",
    tag: "Servlets • Basic",
    q: "Which method forwards request?",
    options: ["sendRedirect()", "forward()", "include()", "dispatch()"],
    answer: 1,
    explain: "forward() forwards request internally."
  },
  {
    id: "servlet-mcq-15",
    tag: "Servlets • Basic",
    q: "Which class manages session?",
    options: [
      "HttpSession",
      "ServletContext",
      "ServletConfig",
      "Cookie"
    ],
    answer: 0,
    explain: "HttpSession manages session data."
  },
  {
    id: "servlet-mcq-16",
    tag: "Servlets • Basic",
    q: "Which container runs servlets?",
    options: ["JVM", "Browser", "Servlet Container", "JRE"],
    answer: 2,
    explain: "Servlet Container manages servlet lifecycle."
  },
  {
    id: "servlet-mcq-17",
    tag: "Servlets • Basic",
    q: "Which server supports servlets?",
    options: ["Apache HTTP", "Tomcat", "Nginx", "IIS only"],
    answer: 1,
    explain: "Tomcat supports Servlets and JSP."
  },

  // ================= INTERMEDIATE (18–34) =================
  {
    id: "servlet-mcq-18",
    tag: "Servlets • Intermediate",
    q: "What is servlet lifecycle?",
    options: [
      "init → service → destroy",
      "start → run → stop",
      "load → execute → unload",
      "compile → deploy → run"
    ],
    answer: 0,
    explain: "Servlet lifecycle: init(), service(), destroy()."
  },
  {
    id: "servlet-mcq-19",
    tag: "Servlets • Intermediate",
    q: "Difference between forward and redirect?",
    options: [
      "Both same",
      "Redirect is client-side",
      "Forward is client-side",
      "Both server-side"
    ],
    answer: 1,
    explain: "Redirect is client-side, forward is server-side."
  },
  {
    id: "servlet-mcq-20",
    tag: "Servlets • Intermediate",
    q: "Which method handles both GET and POST?",
    options: ["doGet()", "doPost()", "service()", "init()"],
    answer: 2,
    explain: "service() handles all HTTP methods."
  },
  {
    id: "servlet-mcq-21",
    tag: "Servlets • Intermediate",
    q: "How to read request parameter?",
    options: [
      "getAttribute()",
      "getParameter()",
      "getHeader()",
      "getSession()"
    ],
    answer: 1,
    explain: "getParameter() reads request parameter."
  },
  {
    id: "servlet-mcq-22",
    tag: "Servlets • Intermediate",
    q: "What is ServletContext?",
    options: [
      "Session scope",
      "Request scope",
      "Application scope",
      "Thread scope"
    ],
    answer: 2,
    explain: "ServletContext has application scope."
  },
  {
    id: "servlet-mcq-23",
    tag: "Servlets • Intermediate",
    q: "How are cookies stored?",
    options: [
      "Server memory",
      "Database",
      "Client browser",
      "Session object"
    ],
    answer: 2,
    explain: "Cookies are stored in client browser."
  },
  {
    id: "servlet-mcq-24",
    tag: "Servlets • Intermediate",
    q: "Which is thread-safe by default?",
    options: [
      "HttpServlet",
      "ServletRequest",
      "ServletContext",
      "None"
    ],
    answer: 3,
    explain: "Servlets are not thread-safe by default."
  },
  {
    id: "servlet-mcq-25",
    tag: "Servlets • Intermediate",
    q: "What is URL rewriting?",
    options: [
      "Changing URL format",
      "Appending session id to URL",
      "Encrypting URL",
      "Redirecting URL"
    ],
    answer: 1,
    explain: "URL rewriting appends session id to URL."
  },
  {
    id: "servlet-mcq-26",
    tag: "Servlets • Intermediate",
    q: "Which filter executes before servlet?",
    options: ["Servlet", "Listener", "Filter", "Context"],
    answer: 2,
    explain: "Filter executes before servlet."
  },
  {
    id: "servlet-mcq-27",
    tag: "Servlets • Intermediate",
    q: "Which listener tracks session creation?",
    options: [
      "ServletContextListener",
      "HttpSessionListener",
      "RequestListener",
      "FilterListener"
    ],
    answer: 1,
    explain: "HttpSessionListener tracks session lifecycle."
  },
  {
    id: "servlet-mcq-28",
    tag: "Servlets • Intermediate",
    q: "Which header identifies browser?",
    options: ["Accept", "User-Agent", "Host", "Cookie"],
    answer: 1,
    explain: "User-Agent header identifies browser."
  },
  {
    id: "servlet-mcq-29",
    tag: "Servlets • Intermediate",
    q: "What is multipart request?",
    options: [
      "JSON request",
      "File upload request",
      "Session request",
      "Redirect request"
    ],
    answer: 1,
    explain: "Multipart request is used for file upload."
  },
  {
    id: "servlet-mcq-30",
    tag: "Servlets • Intermediate",
    q: "Which API handles async processing?",
    options: ["AsyncContext", "Executor", "Thread", "Future"],
    answer: 0,
    explain: "AsyncContext supports async servlet processing."
  },
  {
    id: "servlet-mcq-31",
    tag: "Servlets • Intermediate",
    q: "Which is faster: forward or redirect?",
    options: ["Forward", "Redirect", "Same", "Depends"],
    answer: 0,
    explain: "Forward is faster since no extra request."
  },
  {
    id: "servlet-mcq-32",
    tag: "Servlets • Intermediate",
    q: "Which object shares data across servlets?",
    options: ["HttpSession", "ServletContext", "Request", "Cookie"],
    answer: 1,
    explain: "ServletContext shares data across servlets."
  },
  {
    id: "servlet-mcq-33",
    tag: "Servlets • Intermediate",
    q: "Which HTTP status means redirect?",
    options: ["200", "404", "302", "500"],
    answer: 2,
    explain: "302 indicates redirect."
  },
  {
    id: "servlet-mcq-34",
    tag: "Servlets • Intermediate",
    q: "Which method invalidates session?",
    options: ["remove()", "clear()", "invalidate()", "destroy()"],
    answer: 2,
    explain: "invalidate() destroys session."
  },

  // ================= ADVANCED (35–50) =================
  {
    id: "servlet-mcq-35",
    tag: "Servlets • Advanced",
    q: "How to make servlet thread-safe?",
    options: [
      "Use synchronized block",
      "Use local variables",
      "Avoid shared mutable state",
      "All of these"
    ],
    answer: 3,
    explain: "Avoid shared mutable state and use synchronization."
  },
  {
    id: "servlet-mcq-36",
    tag: "Servlets • Advanced",
    q: "What is async servlet?",
    options: [
      "Multi-threaded servlet",
      "Non-blocking servlet",
      "Session servlet",
      "Filter servlet"
    ],
    answer: 1,
    explain: "Async servlet allows non-blocking request handling."
  },
  {
    id: "servlet-mcq-37",
    tag: "Servlets • Advanced",
    q: "Which annotation enables async support?",
    options: [
      "@Async",
      "@WebServlet(asyncSupported=true)",
      "@EnableAsync",
      "@AsyncServlet"
    ],
    answer: 1,
    explain: "@WebServlet(asyncSupported=true) enables async."
  },
  {
    id: "servlet-mcq-38",
    tag: "Servlets • Advanced",
    q: "Which is preferred for security?",
    options: ["Cookies", "URL rewriting", "HTTPS + HttpSession", "Hidden fields"],
    answer: 2,
    explain: "HTTPS with HttpSession is preferred."
  },
  {
    id: "servlet-mcq-39",
    tag: "Servlets • Advanced",
    q: "What is Servlet 3.0 feature?",
    options: [
      "Annotations",
      "Async support",
      "Pluggability",
      "All of these"
    ],
    answer: 3,
    explain: "Servlet 3.0 introduced all features."
  },
  {
    id: "servlet-mcq-40",
    tag: "Servlets • Advanced",
    q: "Which is non-blocking I/O?",
    options: ["BIO", "NIO", "OIO", "PIO"],
    answer: 1,
    explain: "NIO supports non-blocking I/O."
  },
  {
    id: "servlet-mcq-41",
    tag: "Servlets • Advanced",
    q: "How to handle file upload?",
    options: [
      "@MultipartConfig",
      "FileUpload API",
      "InputStream",
      "All of these"
    ],
    answer: 3,
    explain: "Multiple approaches exist for file upload."
  },
  {
    id: "servlet-mcq-42",
    tag: "Servlets • Advanced",
    q: "Which filter handles security?",
    options: ["AuthFilter", "SecurityFilterChain", "Spring Security Filter", "All"],
    answer: 3,
    explain: "Security can be handled using filters."
  },
  {
    id: "servlet-mcq-43",
    tag: "Servlets • Advanced",
    q: "What is container-managed security?",
    options: [
      "Handled by servlet",
      "Handled by container",
      "Handled by client",
      "Handled by filter only"
    ],
    answer: 1,
    explain: "Container manages authentication/authorization."
  },
  {
    id: "servlet-mcq-44",
    tag: "Servlets • Advanced",
    q: "Which class loads servlet?",
    options: ["ClassLoader", "ServletLoader", "WebLoader", "ContextLoader"],
    answer: 0,
    explain: "ClassLoader loads servlet classes."
  },
  {
    id: "servlet-mcq-45",
    tag: "Servlets • Advanced",
    q: "How to improve servlet performance?",
    options: [
      "Use connection pooling",
      "Enable caching",
      "Async processing",
      "All of these"
    ],
    answer: 3,
    explain: "All listed techniques improve performance."
  },
  {
    id: "servlet-mcq-46",
    tag: "Servlets • Advanced",
    q: "Which HTTP method is idempotent?",
    options: ["POST", "PUT", "PATCH", "CONNECT"],
    answer: 1,
    explain: "PUT is idempotent."
  },
  {
    id: "servlet-mcq-47",
    tag: "Servlets • Advanced",
    q: "Which is not servlet scope?",
    options: ["Request", "Session", "Application", "Thread"],
    answer: 3,
    explain: "Thread is not a servlet scope."
  },
  {
    id: "servlet-mcq-48",
    tag: "Servlets • Advanced",
    q: "What is clustering?",
    options: [
      "Multiple servers working together",
      "Multiple threads",
      "Multiple sessions",
      "Multiple servlets"
    ],
    answer: 0,
    explain: "Clustering involves multiple servers."
  },
  {
    id: "servlet-mcq-49",
    tag: "Servlets • Advanced",
    q: "Which session replication strategy is best?",
    options: ["Sticky session", "In-memory", "Database", "Depends on use case"],
    answer: 3,
    explain: "Depends on scalability and availability needs."
  },
  {
    id: "servlet-mcq-50",
    tag: "Servlets • Advanced",
    q: "Which container supports servlets?",
    options: ["Tomcat", "Jetty", "JBoss", "All of these"],
    answer: 3,
    explain: "All listed containers support Servlets."
  }
];
