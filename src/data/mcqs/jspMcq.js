// 50 JSP MCQs – Easy / Medium / Advanced

export const JSP_MCQ = [

  // ================= EASY (1–18) =================
  {
    id: "jsp-mcq-1",
    tag: "JSP • Easy",
    q: "What does JSP stand for?",
    options: [
      "Java Server Pages",
      "Java Servlet Program",
      "Java Standard Pages",
      "Java Source Pages"
    ],
    answer: 0,
    explain: "JSP stands for Java Server Pages."
  },
  {
    id: "jsp-mcq-2",
    tag: "JSP • Easy",
    q: "JSP is mainly used for?",
    options: [
      "Business logic",
      "Database access",
      "Presentation layer",
      "Multithreading"
    ],
    answer: 2,
    explain: "JSP is mainly used for the presentation layer."
  },
  {
    id: "jsp-mcq-3",
    tag: "JSP • Easy",
    q: "Which technology JSP is based on?",
    options: ["Servlets", "EJB", "JDBC", "RMI"],
    answer: 0,
    explain: "JSP is internally converted into a Servlet."
  },
  {
    id: "jsp-mcq-4",
    tag: "JSP • Easy",
    q: "Which tag is used for JSP declaration?",
    options: ["<% %>", "<%= %>", "<%! %>", "<%@ %>"],
    answer: 2,
    explain: "<%! %> is used for JSP declarations."
  },
  {
    id: "jsp-mcq-5",
    tag: "JSP • Easy",
    q: "Which tag prints output to browser?",
    options: ["<%! %>", "<%@ %>", "<%= %>", "<% %>"],
    answer: 2,
    explain: "<%= %> is used to print output."
  },
  {
    id: "jsp-mcq-6",
    tag: "JSP • Easy",
    q: "Which directive imports packages?",
    options: ["page", "include", "taglib", "scriptlet"],
    answer: 0,
    explain: "page directive imports packages."
  },
  {
    id: "jsp-mcq-7",
    tag: "JSP • Easy",
    q: "Which JSP directive includes another file?",
    options: ["page", "include", "import", "taglib"],
    answer: 1,
    explain: "include directive includes static content."
  },
  {
    id: "jsp-mcq-8",
    tag: "JSP • Easy",
    q: "Which implicit object represents request data?",
    options: ["response", "session", "request", "application"],
    answer: 2,
    explain: "request implicit object holds client request data."
  },
  {
    id: "jsp-mcq-9",
    tag: "JSP • Easy",
    q: "Which implicit object is used to write output?",
    options: ["out", "response", "config", "page"],
    answer: 0,
    explain: "out is used to write output to response."
  },
  {
    id: "jsp-mcq-10",
    tag: "JSP • Easy",
    q: "How many implicit objects are available in JSP?",
    options: ["5", "7", "9", "11"],
    answer: 2,
    explain: "There are 9 implicit objects in JSP."
  },

  // ================= MEDIUM (11–35) =================
  {
    id: "jsp-mcq-11",
    tag: "JSP • Medium",
    q: "What happens to JSP at runtime?",
    options: [
      "Executed directly",
      "Converted to Servlet",
      "Compiled as Java class",
      "Parsed as HTML"
    ],
    answer: 1,
    explain: "JSP is translated into a Servlet."
  },
  {
    id: "jsp-mcq-12",
    tag: "JSP • Medium",
    q: "Which implicit object has application scope?",
    options: ["session", "application", "pageContext", "config"],
    answer: 1,
    explain: "application object has application-wide scope."
  },
  {
    id: "jsp-mcq-13",
    tag: "JSP • Medium",
    q: "Which tag library supports logic without Java code?",
    options: ["JSTL", "EL", "Scriptlet", "Servlet API"],
    answer: 0,
    explain: "JSTL helps avoid Java code in JSP."
  },
  {
    id: "jsp-mcq-14",
    tag: "JSP • Medium",
    q: "Expression Language (EL) is used for?",
    options: [
      "Database connection",
      "Exception handling",
      "Accessing scoped variables",
      "Thread management"
    ],
    answer: 2,
    explain: "EL accesses scoped variables easily."
  },
  {
    id: "jsp-mcq-15",
    tag: "JSP • Medium",
    q: "Which scope is smallest?",
    options: ["application", "session", "request", "page"],
    answer: 3,
    explain: "page scope is the smallest."
  },
  {
    id: "jsp-mcq-16",
    tag: "JSP • Medium",
    q: "Which tag handles iteration in JSTL?",
    options: ["<c:if>", "<c:forEach>", "<c:choose>", "<c:set>"],
    answer: 1,
    explain: "<c:forEach> iterates collections."
  },
  {
    id: "jsp-mcq-17",
    tag: "JSP • Medium",
    q: "Which directive defines error page?",
    options: ["page", "include", "error", "exception"],
    answer: 0,
    explain: "page directive defines error pages."
  },
  {
    id: "jsp-mcq-18",
    tag: "JSP • Medium",
    q: "What does isELIgnored do?",
    options: [
      "Ignores EL expressions",
      "Ignores scriptlets",
      "Disables JSP",
      "Skips compilation"
    ],
    answer: 0,
    explain: "isELIgnored controls EL processing."
  },
  {
    id: "jsp-mcq-19",
    tag: "JSP • Medium",
    q: "Which implicit object gives servlet config?",
    options: ["config", "application", "page", "context"],
    answer: 0,
    explain: "config gives servlet configuration."
  },

  // ================= ADVANCED (36–50) =================
  {
    id: "jsp-mcq-36",
    tag: "JSP • Advanced",
    q: "Why scriptlets are discouraged?",
    options: [
      "Security issues",
      "Poor separation of concerns",
      "Performance problems",
      "All of the above"
    ],
    answer: 3,
    explain: "Scriptlets mix logic and presentation."
  },
  {
    id: "jsp-mcq-37",
    tag: "JSP • Advanced",
    q: "Which pattern is recommended with JSP?",
    options: ["MVC", "Singleton", "Factory", "Observer"],
    answer: 0,
    explain: "JSP works best as View in MVC."
  },
  {
    id: "jsp-mcq-38",
    tag: "JSP • Advanced",
    q: "Which is faster for includes?",
    options: [
      "Static include",
      "Dynamic include",
      "Both same",
      "Depends on container"
    ],
    answer: 0,
    explain: "Static include is faster as it happens at translation time."
  },
  {
    id: "jsp-mcq-39",
    tag: "JSP • Advanced",
    q: "Which object manages JSP lifecycle?",
    options: ["ServletContext", "JspFactory", "Container", "PageContext"],
    answer: 1,
    explain: "JspFactory manages JSP lifecycle."
  },
  {
    id: "jsp-mcq-40",
    tag: "JSP • Advanced",
    q: "Which tag avoids XSS automatically?",
    options: ["<%= %>", "EL", "Scriptlet", "out.print"],
    answer: 1,
    explain: "EL escapes output by default."
  },
  {
    id: "jsp-mcq-41",
    tag: "JSP • Advanced",
    q: "How are custom tags created?",
    options: [
      "Using tag files",
      "Using TLD",
      "Using tag handlers",
      "All of the above"
    ],
    answer: 3,
    explain: "Custom tags can be created in multiple ways."
  },
  {
    id: "jsp-mcq-42",
    tag: "JSP • Advanced",
    q: "Which scope survives server restart?",
    options: ["request", "session", "application", "page"],
    answer: 2,
    explain: "application scope exists till server shutdown."
  },
  {
    id: "jsp-mcq-43",
    tag: "JSP • Advanced",
    q: "Which API replaced most JSP usage?",
    options: ["JSF", "Spring MVC", "REST", "Angular"],
    answer: 1,
    explain: "Spring MVC reduced JSP dependency."
  },
  {
    id: "jsp-mcq-44",
    tag: "JSP • Advanced",
    q: "Which is best practice for JSP?",
    options: [
      "Use scriptlets",
      "Use JSTL + EL",
      "Write business logic",
      "Use JDBC"
    ],
    answer: 1,
    explain: "JSTL + EL is best practice."
  },
  {
    id: "jsp-mcq-45",
    tag: "JSP • Advanced",
    q: "What is JSP fragment?",
    options: [
      "Reusable JSP code",
      "Servlet class",
      "EL expression",
      "Tag handler"
    ],
    answer: 0,
    explain: "JSP fragments are reusable components."
  }
];
