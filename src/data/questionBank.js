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
    basics: [
      { q: "What is JVM, JRE, and JDK?", a: "JDK = tools + JRE; JRE = JVM + libs to run; JVM executes bytecode and manages memory." },
      { q: "What is the difference between == and equals()?", a: "== compares references (or primitives values). equals() compares logical equality (if overridden)." },
    ],
    medium: [
      { q: "Explain HashMap internal working (Java 8+).", a: "Uses array of bins; hash -> index; collisions via linked list, treeify to Red-Black Tree beyond threshold for performance." },
    ],
    advanced: [
      { q: "Explain happens-before in Java Memory Model.", a: "Rules that guarantee visibility/ordering between threads (volatile, locks, thread start/join, etc.)." },
    ],
  },

  springboot: {
    basics: [
      { q: "What is @SpringBootApplication?", a: "Combination of @Configuration + @EnableAutoConfiguration + @ComponentScan." },
    ],
    medium: [
      { q: "How does Spring Boot auto-configuration work?", a: "Conditional configuration based on classpath, properties, and beans; uses spring.factories / AutoConfiguration.imports." },
    ],
    advanced: [
      { q: "How do you design multi-tenant config + secrets in Boot?", a: "Use external config server/KeyVault, tenant context, routing datasource, and strict secret separation." },
    ],
  },

  rest: {
    basics: [
      { q: "PUT vs PATCH?", a: "PUT = full replacement; PATCH = partial update." },
    ],
    medium: [
      { q: "How to version APIs?", a: "URI versioning (/v1), header-based, or content negotiation; pick one and keep backward compatibility." },
    ],
    advanced: [
      { q: "How to design idempotency for POST payments/orders?", a: "Use idempotency key + store request hash/result; safe retries return same result." },
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
};
