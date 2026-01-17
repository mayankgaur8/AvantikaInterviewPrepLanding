// ===================== SERVLETS QUESTIONS (50) =====================
export const SERVLET_QUESTIONS = [
  // ===== BASIC (1 - 20) =====
  {
    id: "sv-b-1",
    level: "Basic",
    q: "What is a Servlet?",
    a: `A Servlet is a Java server-side component that handles HTTP requests and generates dynamic responses. It runs inside a Servlet container (Tomcat/Jetty) and follows the request-response lifecycle.`,
  },
  {
    id: "sv-b-2",
    level: "Basic",
    q: "What is a Servlet Container?",
    a: `A Servlet container (web container) manages Servlets: loading, instantiation, lifecycle, request routing, threading, session management, and security.
Examples: Apache Tomcat, Jetty, WildFly.`,
  },
  {
    id: "sv-b-3",
    level: "Basic",
    q: "Explain Servlet lifecycle methods.",
    a: `Servlet lifecycle:
1) init() - called once when servlet is created
2) service() - called for each request (dispatches to doGet/doPost in HttpServlet)
3) destroy() - called once before servlet is removed/unloaded`,
  },
  {
    id: "sv-b-4",
    level: "Basic",
    q: "Difference between GenericServlet and HttpServlet?",
    a: `GenericServlet is protocol-independent and provides service() to override.
HttpServlet is HTTP-specific; you override doGet(), doPost(), doPut(), doDelete(), etc.`,
  },
  {
    id: "sv-b-5",
    level: "Basic",
    q: "How do you map a Servlet URL?",
    a: `You can map via:
1) web.xml <servlet-mapping>
2) @WebServlet annotation

Example:
@WebServlet("/hello")
public class HelloServlet extends HttpServlet { }`,
  },
  {
    id: "sv-b-6",
    level: "Basic",
    q: "Write a basic doGet() Servlet example.",
    a: `Code:
\`\`\`java
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.*;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    resp.setContentType("text/plain");
    resp.getWriter().println("Hello from Servlet!");
  }
}
\`\`\``,
  },
  {
    id: "sv-b-7",
    level: "Basic",
    q: "How to read query parameters in Servlet?",
    a: `Use request.getParameter("name")

Example:
\`\`\`java
String name = req.getParameter("name");
resp.getWriter().println("Hi " + name);
\`\`\``,
  },
  {
    id: "sv-b-8",
    level: "Basic",
    q: "How do you handle POST form data?",
    a: `POST form fields are also read using getParameter().

Example:
\`\`\`java
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
  String email = req.getParameter("email");
  resp.getWriter().println("Saved: " + email);
}
\`\`\``,
  },
  {
    id: "sv-b-9",
    level: "Basic",
    q: "What is RequestDispatcher?",
    a: `RequestDispatcher forwards or includes resources (JSP/Servlet).
forward(): server-side transfer; URL doesn't change.
include(): include output of another resource.`,
  },
  {
    id: "sv-b-10",
    level: "Basic",
    q: "Forward vs Redirect?",
    a: `Forward:
- Server-side
- Same request/response
- URL unchanged

Redirect:
- Client-side (302)
- New request
- URL changes`,
  },
  {
    id: "sv-b-11",
    level: "Basic",
    q: "How do you set response content type and status?",
    a: `Use:
resp.setContentType("application/json");
resp.setStatus(HttpServletResponse.SC_OK);`,
  },
  {
    id: "sv-b-12",
    level: "Basic",
    q: "What is HttpServletRequest and HttpServletResponse?",
    a: `HttpServletRequest gives request data: params, headers, body, session, path.
HttpServletResponse is used to build response: status, headers, cookies, output.`,
  },
  {
    id: "sv-b-13",
    level: "Basic",
    q: "How to read headers from a request?",
    a: `Use request.getHeader("Header-Name")

Example:
String ua = req.getHeader("User-Agent");`,
  },
  {
    id: "sv-b-14",
    level: "Basic",
    q: "What are cookies in Servlets?",
    a: `Cookies store small key-value data on the client.
Create via response.addCookie(new Cookie("k","v"));
Read via request.getCookies().`,
  },
  {
    id: "sv-b-15",
    level: "Basic",
    q: "Cookie example: set and read.",
    a: `\`\`\`java
// Set
Cookie c = new Cookie("theme", "dark");
c.setMaxAge(3600);
resp.addCookie(c);

// Read
Cookie[] cookies = req.getCookies();
if (cookies != null) {
  for (Cookie ck : cookies) {
    if ("theme".equals(ck.getName())) {
      resp.getWriter().println("Theme: " + ck.getValue());
    }
  }
}
\`\`\``,
  },
  {
    id: "sv-b-16",
    level: "Basic",
    q: "What is HttpSession?",
    a: `HttpSession stores user data across requests on server side.
Create/read: HttpSession s = req.getSession();
Store: s.setAttribute("user", obj);`,
  },
  {
    id: "sv-b-17",
    level: "Basic",
    q: "How to invalidate a session?",
    a: `Call session.invalidate() to logout and clear session data.`,
  },
  {
    id: "sv-b-18",
    level: "Basic",
    q: "What is the difference between GET and POST in Servlet?",
    a: `GET: parameters in URL, idempotent, cached, length limitations.
POST: data in body, not cached by default, used for create/update.`,
  },
  {
    id: "sv-b-19",
    level: "Basic",
    q: "What is web.xml used for?",
    a: `web.xml configures deployment descriptor: servlet mappings, filters, listeners, welcome files, security constraints, error pages.`,
  },
  {
    id: "sv-b-20",
    level: "Basic",
    q: "What is the role of doGet() and doPost()?",
    a: `In HttpServlet, service() dispatches to doGet(), doPost(), etc based on HTTP method.`,
  },

  // ===== INTERMEDIATE (21 - 35) =====
  {
    id: "sv-i-21",
    level: "Intermediate",
    q: "Explain Servlet threading model. Are Servlets singleton?",
    a: `Servlet container typically creates ONE servlet instance and uses multiple threads to handle requests.
So servlets are effectively singleton per mapping → do not use mutable shared fields unless thread-safe.`,
  },
  {
    id: "sv-i-22",
    level: "Intermediate",
    q: "Why should you avoid instance variables in Servlets?",
    a: `Because multiple requests run concurrently on same servlet instance.
Instance fields can cause race conditions and data leakage between users.`,
  },
  {
    id: "sv-i-23",
    level: "Intermediate",
    q: "Show thread-safe way to store request-specific data.",
    a: `Use local variables (method scope) or request/session attributes.

\`\`\`java
protected void doGet(HttpServletRequest req, HttpServletResponse resp) {
  String requestId = java.util.UUID.randomUUID().toString(); // local var
  req.setAttribute("requestId", requestId); // request scope
}
\`\`\``,
  },
  {
    id: "sv-i-24",
    level: "Intermediate",
    q: "What are Servlet filters?",
    a: `Filters intercept requests/responses for cross-cutting concerns: logging, auth, CORS, compression.
They implement jakarta.servlet.Filter and are chained.`,
  },
  {
    id: "sv-i-25",
    level: "Intermediate",
    q: "Filter example: logging filter.",
    a: `\`\`\`java
@WebFilter("/*")
public class LoggingFilter implements Filter {
  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
      throws IOException, ServletException {
    HttpServletRequest r = (HttpServletRequest) req;
    System.out.println("Incoming: " + r.getMethod() + " " + r.getRequestURI());
    chain.doFilter(req, res);
  }
}
\`\`\``,
  },
  {
    id: "sv-i-26",
    level: "Intermediate",
    q: "What is a Servlet listener?",
    a: `Listeners react to lifecycle events:
- ServletContextListener (app start/stop)
- HttpSessionListener (session create/destroy)
- ServletRequestListener (request start/end)`,
  },
  {
    id: "sv-i-27",
    level: "Intermediate",
    q: "Listener example: app startup initialization.",
    a: `\`\`\`java
@WebListener
public class AppInitListener implements ServletContextListener {
  @Override
  public void contextInitialized(ServletContextEvent sce) {
    sce.getServletContext().setAttribute("appName", "AvantikaInterviewPrep");
  }
}
\`\`\``,
  },
  {
    id: "sv-i-28",
    level: "Intermediate",
    q: "How to handle file upload in Servlet?",
    a: `Use multipart/form-data and @MultipartConfig.

\`\`\`java
@WebServlet("/upload")
@MultipartConfig
public class UploadServlet extends HttpServlet {
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws Exception {
    Part file = req.getPart("file");
    String name = file.getSubmittedFileName();
    file.write("/tmp/" + name);
    resp.getWriter().println("Uploaded: " + name);
  }
}
\`\`\``,
  },
  {
    id: "sv-i-29",
    level: "Intermediate",
    q: "Explain Request Scope vs Session Scope vs Application Scope.",
    a: `Request scope: req.setAttribute → only for one request.
Session scope: session.setAttribute → per user session.
Application scope: servletContext.setAttribute → shared across whole app.`,
  },
  {
    id: "sv-i-30",
    level: "Intermediate",
    q: "How to return JSON response from Servlet?",
    a: `\`\`\`java
resp.setContentType("application/json");
resp.setCharacterEncoding("UTF-8");
resp.getWriter().write("{\\"status\\":\\"ok\\"}");
\`\`\`
For real apps, use a JSON library like Jackson.`,
  },
  {
    id: "sv-i-31",
    level: "Intermediate",
    q: "How to read JSON request body in Servlet?",
    a: `\`\`\`java
String body = req.getReader().lines().collect(java.util.stream.Collectors.joining("\\n"));
// parse with Jackson/Gson
\`\`\``,
  },
  {
    id: "sv-i-32",
    level: "Intermediate",
    q: "How to implement simple authentication in Servlets?",
    a: `Common approach: login servlet sets session attribute, filter checks it.

Example:
session.setAttribute("USER", username);
Filter blocks if USER missing.`,
  },
  {
    id: "sv-i-33",
    level: "Intermediate",
    q: "Auth filter example.",
    a: `\`\`\`java
@WebFilter("/secure/*")
public class AuthFilter implements Filter {
  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
      throws IOException, ServletException {
    HttpServletRequest r = (HttpServletRequest) req;
    HttpServletResponse p = (HttpServletResponse) res;
    HttpSession s = r.getSession(false);
    if (s == null || s.getAttribute("USER") == null) {
      p.sendRedirect(r.getContextPath() + "/login");
      return;
    }
    chain.doFilter(req, res);
  }
}
\`\`\``,
  },
  {
    id: "sv-i-34",
    level: "Intermediate",
    q: "What is URL Rewriting?",
    a: `If cookies are disabled, session id can be appended to URL.
Use response.encodeURL(url) to include jsessionid when needed.`,
  },
  {
    id: "sv-i-35",
    level: "Intermediate",
    q: "How does HttpSession work internally?",
    a: `Session id (JSESSIONID) is stored in cookie/URL; server maps that id to session data in memory/store.
Session expires by timeout or invalidate().`,
  },

  // ===== ADVANCED (36 - 50) =====
  {
    id: "sv-a-36",
    level: "Advanced",
    q: "Explain Servlet async processing (AsyncContext).",
    a: `Async allows freeing container thread while work continues.
Use request.startAsync(), process in another thread, then async.complete().

\`\`\`java
@WebServlet(urlPatterns="/async", asyncSupported=true)
public class AsyncServlet extends HttpServlet {
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    AsyncContext ac = req.startAsync();
    ac.start(() -> {
      try {
        Thread.sleep(200);
        HttpServletResponse r = (HttpServletResponse) ac.getResponse();
        r.setContentType("text/plain");
        r.getWriter().println("Done async");
      } catch (Exception e) { }
      ac.complete();
    });
  }
}
\`\`\``,
  },
  {
    id: "sv-a-37",
    level: "Advanced",
    q: "How to prevent XSS in Servlets/JSP responses?",
    a: `Never print raw user input into HTML without encoding.
Use HTML escape utilities (OWASP ESAPI / Apache Commons Text).
Also set Content-Security-Policy headers.`,
  },
  {
    id: "sv-a-38",
    level: "Advanced",
    q: "Explain CSRF protection approach with Servlets.",
    a: `Generate a random token per session, embed in form, validate token on POST.
Also prefer SameSite cookies and frameworks/security libs.`,
  },
  {
    id: "sv-a-39",
    level: "Advanced",
    q: "How to implement a CSRF token check in Servlet?",
    a: `\`\`\`java
// On login / session init:
session.setAttribute("CSRF", java.util.UUID.randomUUID().toString());

// In form:
<input type="hidden" name="csrf" value="\${sessionScope.CSRF}">

// On POST:
String token = req.getParameter("csrf");
String expected = (String) session.getAttribute("CSRF");
if (!java.util.Objects.equals(token, expected)) {
  resp.sendError(403, "CSRF failed");
  return;
}
\`\`\``,
  },
  {
    id: "sv-a-40",
    level: "Advanced",
    q: "How to configure CORS in Servlets?",
    a: `Use a Filter to set headers:
Access-Control-Allow-Origin, Methods, Headers, Credentials.
Handle OPTIONS preflight.

\`\`\`java
@WebFilter("/*")
public class CorsFilter implements Filter {
  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
      throws IOException, ServletException {
    HttpServletResponse r = (HttpServletResponse) res;
    HttpServletRequest q = (HttpServletRequest) req;

    r.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    r.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    r.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    r.setHeader("Access-Control-Allow-Credentials", "true");

    if ("OPTIONS".equalsIgnoreCase(q.getMethod())) {
      r.setStatus(204);
      return;
    }
    chain.doFilter(req, res);
  }
}
\`\`\``,
  },
  {
    id: "sv-a-41",
    level: "Advanced",
    q: "Servlet performance: why use connection pooling?",
    a: `Creating DB connections per request is expensive.
Use DataSource + connection pool (HikariCP / container pool) for reuse and lower latency.`,
  },
  {
    id: "sv-a-42",
    level: "Advanced",
    q: "JNDI DataSource example in Servlet.",
    a: `\`\`\`java
import javax.naming.InitialContext;
import javax.sql.DataSource;

DataSource ds = (DataSource) new InitialContext().lookup("java:comp/env/jdbc/MyDS");
try (Connection c = ds.getConnection();
     PreparedStatement ps = c.prepareStatement("select 1");
     ResultSet rs = ps.executeQuery()) {
  // ...
}
\`\`\``,
  },
  {
    id: "sv-a-43",
    level: "Advanced",
    q: "Explain servlet container thread pool and its impact.",
    a: `Containers use thread pools to serve requests. If threads are blocked (slow IO), throughput drops.
Async processing or non-blocking IO improves scalability.`,
  },
  {
    id: "sv-a-44",
    level: "Advanced",
    q: "What is non-blocking IO in Servlets?",
    a: `Servlet 3.1 introduced non-blocking IO via ReadListener/WriteListener for streaming large data without blocking container threads.`,
  },
  {
    id: "sv-a-45",
    level: "Advanced",
    q: "Explain how session replication works in clustered environments.",
    a: `Sessions can be replicated across nodes (in-memory replication) or stored centrally (Redis/DB).
Sticky sessions route user to same node; replication avoids session loss on failover.`,
  },
  {
    id: "sv-a-46",
    level: "Advanced",
    q: "How to secure cookies (JSESSIONID)?",
    a: `Set flags:
- HttpOnly (not accessible to JS)
- Secure (HTTPS only)
- SameSite (Lax/Strict/None)
Also enforce HTTPS and strong session timeouts.`,
  },
  {
    id: "sv-a-47",
    level: "Advanced",
    q: "How to implement rate limiting in Servlet-based app?",
    a: `Use a Filter storing counts per IP/user in memory (LRU/TTL) or Redis for distributed.
If threshold exceeded → respond 429 Too Many Requests.`,
  },
  {
    id: "sv-a-48",
    level: "Advanced",
    q: "Rate limiting filter example (simple, in-memory).",
    a: `\`\`\`java
@WebFilter("/*")
public class RateLimitFilter implements Filter {
  private final java.util.concurrent.ConcurrentHashMap<String, java.util.concurrent.atomic.AtomicInteger> hits =
      new java.util.concurrent.ConcurrentHashMap<>();

  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
      throws IOException, ServletException {
    HttpServletRequest r = (HttpServletRequest) req;
    HttpServletResponse p = (HttpServletResponse) res;
    String ip = r.getRemoteAddr();

    int count = hits.computeIfAbsent(ip, k -> new java.util.concurrent.atomic.AtomicInteger(0)).incrementAndGet();
    if (count > 100) { // demo limit
      p.sendError(429, "Too many requests");
      return;
    }
    chain.doFilter(req, res);
  }
}
\`\`\``,
  },
  {
    id: "sv-a-49",
    level: "Advanced",
    q: "How to handle global error pages in web.xml?",
    a: `Use <error-page> mapping by exception or status code.

Example:
<error-page>
  <error-code>404</error-code>
  <location>/errors/404.jsp</location>
</error-page>`,
  },
  {
    id: "sv-a-50",
    level: "Advanced",
    q: "Servlet best practices for production?",
    a: `- Keep servlet stateless (no shared mutable fields)
- Use filters for cross-cutting concerns
- Validate input + output encode
- Use pooling for DB/resources
- Add proper timeouts/logging/metrics
- Prefer frameworks (Spring MVC) for large apps`,
  },
];
