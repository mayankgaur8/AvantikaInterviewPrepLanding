export const DEVOPS_QUESTIONS = [
  // ===== BASIC =====
  {
    id: "dev-b-1",
    level: "Basic",
    q: "What is DevOps?",
    a: "DevOps is a culture and set of practices that combine Development and Operations to improve collaboration, automate delivery, and reduce time to market.",
  },
  {
    id: "dev-b-2",
    level: "Basic",
    q: "What are the key goals of DevOps?",
    a: "Faster releases, improved collaboration, automation, higher reliability, continuous feedback, and reduced failures.",
  },
  {
    id: "dev-b-3",
    level: "Basic",
    q: "What is CI/CD?",
    a: "CI (Continuous Integration) automates code build and testing. CD (Continuous Delivery/Deployment) automates release to environments.",
  },
  {
    id: "dev-b-4",
    level: "Basic",
    q: "What is Continuous Integration?",
    a: "Developers frequently merge code to a shared repository where automated builds and tests validate changes.",
  },
  {
    id: "dev-b-5",
    level: "Basic",
    q: "What is Continuous Deployment?",
    a: "Every successful build is automatically deployed to production without manual approval.",
  },
  {
    id: "dev-b-6",
    level: "Basic",
    q: "Name popular DevOps tools.",
    a: "Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, AWS, Azure DevOps, GitHub Actions.",
  },
  {
    id: "dev-b-7",
    level: "Basic",
    q: "What is version control?",
    a: "Version control tracks code changes, enables collaboration, rollback, and branching (e.g., Git).",
  },
  {
    id: "dev-b-8",
    level: "Basic",
    q: "What is Infrastructure as Code (IaC)?",
    a: "Managing infrastructure using code instead of manual processes (e.g., Terraform, CloudFormation).",
  },
  {
    id: "dev-b-9",
    level: "Basic",
    q: "What is a pipeline?",
    a: "A pipeline is an automated workflow that builds, tests, and deploys applications.",
  },
  {
    id: "dev-b-10",
    level: "Basic",
    q: "What is monitoring?",
    a: "Monitoring tracks system health, performance, and availability using metrics, logs, and alerts.",
  },
  {
    id: "dev-b-11",
    level: "Basic",
    q: "What is logging?",
    a: "Logging records application and system events for debugging and auditing.",
  },
  {
    id: "dev-b-12",
    level: "Basic",
    q: "What is a build artifact?",
    a: "A build artifact is the output of a build process (JAR, WAR, Docker image).",
  },
  {
    id: "dev-b-13",
    level: "Basic",
    q: "What is containerization?",
    a: "Packaging applications with dependencies into containers for consistency across environments.",
  },
  {
    id: "dev-b-14",
    level: "Basic",
    q: "What is Docker?",
    a: "Docker is a containerization platform that packages applications into lightweight containers.",
  },
  {
    id: "dev-b-15",
    level: "Basic",
    q: "What is Kubernetes?",
    a: "Kubernetes is a container orchestration platform for deployment, scaling, and management.",
  },
  {
    id: "dev-b-16",
    level: "Basic",
    q: "What is automation in DevOps?",
    a: "Automation reduces manual tasks by scripting builds, deployments, and infrastructure.",
  },
  {
    id: "dev-b-17",
    level: "Basic",
    q: "What is configuration management?",
    a: "Managing system configuration consistently using tools like Ansible, Chef, or Puppet.",
  },
  // ===== INTERMEDIATE =====
  {
    id: "dev-i-1",
    level: "Intermediate",
    q: "Explain CI/CD pipeline stages.",
    a: "Typical stages include source, build, test, security scan, deploy, and monitor.",
  },
  {
    id: "dev-i-2",
    level: "Intermediate",
    q: "Difference between Continuous Delivery and Continuous Deployment?",
    a: "Delivery requires manual approval before production; Deployment is fully automated.",
  },
  {
    id: "dev-i-3",
    level: "Intermediate",
    q: "What is blue-green deployment?",
    a: "Two environments (blue & green); traffic switches after successful deployment.",
  },
  {
    id: "dev-i-4",
    level: "Intermediate",
    q: "What is canary deployment?",
    a: "Deploying new version to a small subset of users before full rollout.",
  },
  {
    id: "dev-i-5",
    level: "Intermediate",
    q: "Explain Dockerfile with example.",
    a: `
FROM openjdk:17
WORKDIR /app
COPY target/app.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
    `,
  },
  {
    id: "dev-i-6",
    level: "Intermediate",
    q: "What is container orchestration?",
    a: "Managing container lifecycle, networking, scaling, and availability using Kubernetes.",
  },
  {
    id: "dev-i-7",
    level: "Intermediate",
    q: "What is Jenkins pipeline?",
    a: "A Jenkins pipeline defines CI/CD steps using Groovy DSL (Declarative or Scripted).",
  },
  {
    id: "dev-i-8",
    level: "Intermediate",
    q: "Sample Jenkinsfile?",
    a: `
pipeline {
  agent any
  stages {
    stage('Build') { steps { sh 'mvn clean package' } }
    stage('Test') { steps { sh 'mvn test' } }
  }
}
    `,
  },
  {
    id: "dev-i-9",
    level: "Intermediate",
    q: "What is Terraform?",
    a: "Terraform is an IaC tool for provisioning cloud infrastructure using declarative configuration.",
  },
  {
    id: "dev-i-10",
    level: "Intermediate",
    q: "Terraform example?",
    a: `
resource "aws_instance" "web" {
  ami = "ami-123"
  instance_type = "t2.micro"
}
    `,
  },
  {
    id: "dev-i-11",
    level: "Intermediate",
    q: "What is artifact repository?",
    a: "Stores build artifacts (Nexus, Artifactory, ECR).",
  },
  {
    id: "dev-i-12",
    level: "Intermediate",
    q: "What is shift-left testing?",
    a: "Testing earlier in the development lifecycle to catch issues sooner.",
  },
  {
    id: "dev-i-13",
    level: "Intermediate",
    q: "Explain monitoring vs observability.",
    a: "Monitoring checks known metrics; observability enables understanding unknown issues via logs, metrics, traces.",
  },
  {
    id: "dev-i-14",
    level: "Intermediate",
    q: "What are SLIs, SLOs, SLAs?",
    a: "SLI = metric, SLO = target, SLA = contract with penalties.",
  },
  {
    id: "dev-i-15",
    level: "Intermediate",
    q: "What is GitOps?",
    a: "Infrastructure and app deployments driven by Git as the single source of truth.",
  },
  {
    id: "dev-i-16",
    level: "Intermediate",
    q: "What is Helm?",
    a: "Helm is a Kubernetes package manager using charts.",
  },
  {
    id: "dev-i-17",
    level: "Intermediate",
    q: "What is secrets management?",
    a: "Secure storage and access of secrets using Vault, AWS Secrets Manager, Azure Key Vault.",
  },
  // ===== ADVANCED =====
  {
    id: "dev-a-1",
    level: "Advanced",
    q: "Explain DevSecOps.",
    a: "DevSecOps integrates security into CI/CD pipelines using automated scanning and policies.",
  },
  {
    id: "dev-a-2",
    level: "Advanced",
    q: "How do you secure CI/CD pipelines?",
    a: "Use secrets vaults, least privilege IAM, signed artifacts, SAST/DAST scans.",
  },
  {
    id: "dev-a-3",
    level: "Advanced",
    q: "Explain zero-downtime deployment strategies.",
    a: "Blue-green, canary, rolling updates with health checks.",
  },
  {
    id: "dev-a-4",
    level: "Advanced",
    q: "What is service mesh?",
    a: "A service mesh (Istio, Linkerd) manages service-to-service communication with observability and security.",
  },
  {
    id: "dev-a-5",
    level: "Advanced",
    q: "How does Kubernetes ensure high availability?",
    a: "ReplicaSets, health probes, auto-scaling, self-healing.",
  },
  {
    id: "dev-a-6",
    level: "Advanced",
    q: "Explain HPA in Kubernetes.",
    a: "Horizontal Pod Autoscaler scales pods based on CPU/memory or custom metrics.",
  },
  {
    id: "dev-a-7",
    level: "Advanced",
    q: "What is immutable infrastructure?",
    a: "Servers are replaced instead of modified, improving consistency and rollback.",
  },
  {
    id: "dev-a-8",
    level: "Advanced",
    q: "How do you handle rollbacks?",
    a: "Use versioned artifacts, deployment strategies, and automated rollback triggers.",
  },
  {
    id: "dev-a-9",
    level: "Advanced",
    q: "What is chaos engineering?",
    a: "Injecting failures to test system resilience (e.g., Chaos Monkey).",
  },
  {
    id: "dev-a-10",
    level: "Advanced",
    q: "How do you design a scalable DevOps architecture?",
    a: "Decouple services, automate pipelines, use cloud-native tooling, observability, and security by design.",
  },
  {
    id: "dev-a-11",
    level: "Advanced",
    q: "How do you manage multi-cloud deployments?",
    a: "Use IaC, abstraction layers, standardized CI/CD, and centralized observability.",
  },
  {
    id: "dev-a-12",
    level: "Advanced",
    q: "What is policy as code?",
    a: "Defining compliance and security rules as code (OPA, Sentinel).",
  },
  {
    id: "dev-a-13",
    level: "Advanced",
    q: "Explain progressive delivery.",
    a: "Gradual rollout with automated analysis and rollback.",
  },
  {
    id: "dev-a-14",
    level: "Advanced",
    q: "How do you monitor distributed systems?",
    a: "Use tracing (OpenTelemetry), metrics (Prometheus), logging (ELK).",
  },
  {
    id: "dev-a-15",
    level: "Advanced",
    q: "What is DORA metrics?",
    a: "Deployment frequency, lead time, MTTR, change failure rate.",
  },
];
