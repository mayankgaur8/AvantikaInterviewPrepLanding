export const CICD_QUESTIONS = [
  // ===== BASIC =====
  {
    id: "cicd-b-1",
    level: "Basic",
    q: "What is CI/CD?",
    a: "CI/CD stands for Continuous Integration and Continuous Delivery/Deployment. It automates building, testing, and deploying applications.",
  },
  {
    id: "cicd-b-2",
    level: "Basic",
    q: "What is Continuous Integration?",
    a: "Continuous Integration is the practice of frequently merging code changes into a shared repository followed by automated builds and tests.",
  },
  {
    id: "cicd-b-3",
    level: "Basic",
    q: "What is Continuous Delivery?",
    a: "Continuous Delivery ensures code is always in a deployable state but requires manual approval to release to production.",
  },
  {
    id: "cicd-b-4",
    level: "Basic",
    q: "What is Continuous Deployment?",
    a: "Continuous Deployment automatically deploys every successful build to production without manual intervention.",
  },
  {
    id: "cicd-b-5",
    level: "Basic",
    q: "What are the benefits of CI/CD?",
    a: "Faster releases, early bug detection, reduced manual errors, improved collaboration, and reliable deployments.",
  },
  {
    id: "cicd-b-6",
    level: "Basic",
    q: "Name popular CI/CD tools.",
    a: "Jenkins, GitHub Actions, GitLab CI/CD, Azure DevOps, CircleCI, Travis CI.",
  },
  {
    id: "cicd-b-7",
    level: "Basic",
    q: "What is a pipeline?",
    a: "A pipeline is a sequence of automated steps that build, test, and deploy applications.",
  },
  {
    id: "cicd-b-8",
    level: "Basic",
    q: "What is a build?",
    a: "A build compiles source code and packages it into an executable artifact such as JAR, WAR, or Docker image.",
  },
  {
    id: "cicd-b-9",
    level: "Basic",
    q: "What is an artifact?",
    a: "An artifact is the output of a build process, stored for deployment or distribution.",
  },
  {
    id: "cicd-b-10",
    level: "Basic",
    q: "What is a webhook?",
    a: "A webhook automatically triggers CI/CD pipelines on events like code push or pull request.",
  },
  {
    id: "cicd-b-11",
    level: "Basic",
    q: "What is a runner/agent?",
    a: "A runner or agent executes pipeline jobs on a machine.",
  },
  {
    id: "cicd-b-12",
    level: "Basic",
    q: "What is pipeline as code?",
    a: "Defining CI/CD pipelines using code (YAML/Groovy) stored in version control.",
  },
  {
    id: "cicd-b-13",
    level: "Basic",
    q: "What is versioning in CI/CD?",
    a: "Versioning assigns unique identifiers to builds for traceability and rollback.",
  },
  {
    id: "cicd-b-14",
    level: "Basic",
    q: "What is rollback?",
    a: "Rollback reverts an application to a previous stable version when deployment fails.",
  },
  {
    id: "cicd-b-15",
    level: "Basic",
    q: "What is smoke testing?",
    a: "Basic tests to verify critical functionalities after deployment.",
  },
  {
    id: "cicd-b-16",
    level: "Basic",
    q: "What is pipeline failure?",
    a: "A pipeline failure occurs when a stage fails due to build, test, or deployment errors.",
  },
  {
    id: "cicd-b-17",
    level: "Basic",
    q: "What is environment in CI/CD?",
    a: "Different stages such as Dev, QA, UAT, and Production where applications are deployed.",
  },
  // ===== INTERMEDIATE =====
  {
    id: "cicd-i-1",
    level: "Intermediate",
    q: "Explain a typical CI/CD pipeline flow.",
    a: "Source → Build → Test → Quality Scan → Package → Deploy → Monitor.",
  },
  {
    id: "cicd-i-2",
    level: "Intermediate",
    q: "Difference between Jenkins Freestyle and Pipeline?",
    a: "Freestyle is UI-based; Pipeline is code-based, versioned, and scalable.",
  },
  {
    id: "cicd-i-3",
    level: "Intermediate",
    q: "What is a Jenkinsfile?",
    a: "A Jenkinsfile defines pipeline stages using Groovy DSL.",
  },
  {
    id: "cicd-i-4",
    level: "Intermediate",
    q: "Sample Jenkins pipeline?",
    a: `
pipeline {
  agent any
  stages {
    stage('Build') {
      steps { sh 'mvn clean package' }
    }
    stage('Test') {
      steps { sh 'mvn test' }
    }
  }
}
    `,
  },
  {
    id: "cicd-i-5",
    level: "Intermediate",
    q: "What is GitHub Actions?",
    a: "GitHub Actions is a CI/CD platform that automates workflows using YAML files.",
  },
  {
    id: "cicd-i-6",
    level: "Intermediate",
    q: "Sample GitHub Actions workflow?",
    a: `
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: mvn clean test
    `,
  },
  {
    id: "cicd-i-7",
    level: "Intermediate",
    q: "What is artifact repository?",
    a: "Stores build outputs for reuse (Nexus, Artifactory, ECR).",
  },
  {
    id: "cicd-i-8",
    level: "Intermediate",
    q: "How do you handle secrets in CI/CD?",
    a: "Use secret managers or encrypted variables (Vault, GitHub Secrets).",
  },
  {
    id: "cicd-i-9",
    level: "Intermediate",
    q: "What is parallel execution?",
    a: "Running pipeline jobs concurrently to reduce build time.",
  },
  {
    id: "cicd-i-10",
    level: "Intermediate",
    q: "What is code quality gate?",
    a: "A threshold that blocks deployment if code quality fails (SonarQube).",
  },
  {
    id: "cicd-i-11",
    level: "Intermediate",
    q: "What is Docker’s role in CI/CD?",
    a: "Ensures consistent build and runtime environments.",
  },
  {
    id: "cicd-i-12",
    level: "Intermediate",
    q: "Explain build caching.",
    a: "Caching dependencies to speed up pipeline execution.",
  },
  {
    id: "cicd-i-13",
    level: "Intermediate",
    q: "What is pipeline promotion?",
    a: "Promoting the same artifact across environments instead of rebuilding.",
  },
  {
    id: "cicd-i-14",
    level: "Intermediate",
    q: "What is infrastructure pipeline?",
    a: "Automates provisioning infrastructure using Terraform/CloudFormation.",
  },
  {
    id: "cicd-i-15",
    level: "Intermediate",
    q: "What is manual approval stage?",
    a: "A gate requiring human approval before deployment.",
  },
  {
    id: "cicd-i-16",
    level: "Intermediate",
    q: "How do you rollback deployments?",
    a: "Redeploy previous artifact or revert Kubernetes rollout.",
  },
  {
    id: "cicd-i-17",
    level: "Intermediate",
    q: "What is environment parity?",
    a: "Keeping dev, test, and prod environments consistent.",
  },
    // ===== ADVANCED =====
  {
    id: "cicd-a-1",
    level: "Advanced",
    q: "How do you design a scalable CI/CD pipeline?",
    a: "Use distributed runners, pipeline as code, artifact promotion, and caching.",
  },
  {
    id: "cicd-a-2",
    level: "Advanced",
    q: "Explain blue-green deployment in CI/CD.",
    a: "Deploy new version alongside old one and switch traffic after validation.",
  },
  {
    id: "cicd-a-3",
    level: "Advanced",
    q: "What is canary deployment?",
    a: "Gradually exposing new version to a small subset of users.",
  },
  {
    id: "cicd-a-4",
    level: "Advanced",
    q: "How do you implement zero-downtime deployment?",
    a: "Use rolling updates, health checks, and traffic switching.",
  },
  {
    id: "cicd-a-5",
    level: "Advanced",
    q: "How do you secure CI/CD pipelines?",
    a: "Least privilege IAM, secret rotation, signed artifacts, security scans.",
  },
  {
    id: "cicd-a-6",
    level: "Advanced",
    q: "Explain DevSecOps in CI/CD.",
    a: "Integrating security scans and compliance checks into pipelines.",
  },
  {
    id: "cicd-a-7",
    level: "Advanced",
    q: "What is pipeline drift?",
    a: "Mismatch between defined pipeline and actual execution environment.",
  },
  {
    id: "cicd-a-8",
    level: "Advanced",
    q: "How do you monitor CI/CD pipelines?",
    a: "Track build times, failure rates, success metrics, and alerts.",
  },
  {
    id: "cicd-a-9",
    level: "Advanced",
    q: "Explain GitOps pipeline.",
    a: "Deployments triggered by Git changes using tools like ArgoCD.",
  },
  {
    id: "cicd-a-10",
    level: "Advanced",
    q: "What are DORA metrics?",
    a: "Deployment frequency, lead time, MTTR, change failure rate.",
  },
  {
    id: "cicd-a-11",
    level: "Advanced",
    q: "How do you manage multi-branch pipelines?",
    a: "Each branch has its own pipeline for validation and testing.",
  },
  {
    id: "cicd-a-12",
    level: "Advanced",
    q: "Explain immutable artifacts.",
    a: "Artifacts are never modified after creation; new versions are created.",
  },
  {
    id: "cicd-a-13",
    level: "Advanced",
    q: "How do you optimize CI/CD performance?",
    a: "Parallel jobs, caching, incremental builds, and faster runners.",
  },
  {
    id: "cicd-a-14",
    level: "Advanced",
    q: "What is policy as code in CI/CD?",
    a: "Enforcing rules using code (OPA, Sentinel) before deployment.",
  },
  {
    id: "cicd-a-15",
    level: "Advanced",
    q: "How do you design enterprise CI/CD?",
    a: "Central templates, governance, security scanning, and observability.",
  },
];

