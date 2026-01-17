export const GCP_QUESTIONS = [

/* =====================================================
   BASIC (20)
===================================================== */

{
  id: "gcp-b-01",
  level: "Basic",
  q: "What is Google Cloud Platform (GCP)?",
  a: "GCP is a cloud computing platform by Google providing compute, storage, networking, AI, and data services."
},

{
  id: "gcp-b-02",
  level: "Basic",
  q: "What are the main GCP service models?",
  a: "IaaS (Compute Engine), PaaS (App Engine), SaaS (Google Workspace)."
},

{
  id: "gcp-b-03",
  level: "Basic",
  q: "What is Compute Engine?",
  a: "Compute Engine provides scalable virtual machines on Google infrastructure."
},

{
  id: "gcp-b-04",
  level: "Basic",
  q: "What is Google Cloud Storage?",
  a: "Object storage service for unstructured data like images, videos, and backups."
},

{
  id: "gcp-b-05",
  level: "Basic",
  q: "What is a GCP Project?",
  a: "A project is a logical container for resources, billing, and IAM."
},

{
  id: "gcp-b-06",
  level: "Basic",
  q: "What is a GCP Region?",
  a: "A specific geographic location where GCP resources run."
},

{
  id: "gcp-b-07",
  level: "Basic",
  q: "What is a GCP Zone?",
  a: "An isolated location within a region for high availability."
},

{
  id: "gcp-b-08",
  level: "Basic",
  q: "What is Google App Engine?",
  a: "Fully managed PaaS for building and deploying applications."
},

{
  id: "gcp-b-09",
  level: "Basic",
  q: "What is Google Cloud Functions?",
  a: "Serverless compute for event-driven workloads."
},

{
  id: "gcp-b-10",
  level: "Basic",
  q: "Cloud Function example?",
  answer: {
    summary: "Simple HTTP-triggered function.",
    codeTitle: "Node.js Cloud Function",
    code: `exports.helloWorld = (req, res) => {
  res.send("Hello from GCP!");
};`
  }
},

{
  id: "gcp-b-11",
  level: "Basic",
  q: "What is IAM in GCP?",
  a: "Identity and Access Management controls who can access resources."
},

{
  id: "gcp-b-12",
  level: "Basic",
  q: "What is a Service Account?",
  a: "A special account used by applications or VMs to access GCP services."
},

{
  id: "gcp-b-13",
  level: "Basic",
  q: "What is Cloud SQL?",
  a: "Fully managed relational database service."
},

{
  id: "gcp-b-14",
  level: "Basic",
  q: "What is BigQuery?",
  a: "Serverless data warehouse for analytics."
},

{
  id: "gcp-b-15",
  level: "Basic",
  q: "What is Cloud Logging?",
  a: "Centralized logging service for GCP resources."
},

{
  id: "gcp-b-16",
  level: "Basic",
  q: "What is Cloud Monitoring?",
  a: "Monitoring service for metrics, dashboards, and alerts."
},

{
  id: "gcp-b-17",
  level: "Basic",
  q: "What is VPC?",
  a: "Virtual Private Cloud for network isolation."
},

{
  id: "gcp-b-18",
  level: "Basic",
  q: "What is Cloud Load Balancing?",
  a: "Distributes traffic across backend services."
},

{
  id: "gcp-b-19",
  level: "Basic",
  q: "What is Cloud DNS?",
  a: "Managed DNS service for domain resolution."
},

{
  id: "gcp-b-20",
  level: "Basic",
  q: "What is Google Kubernetes Engine (GKE)?",
  a: "Managed Kubernetes service on Google Cloud."
},

/* =====================================================
   INTERMEDIATE (20)
===================================================== */

{
  id: "gcp-i-01",
  level: "Intermediate",
  q: "Difference between Compute Engine and App Engine?",
  a: "Compute Engine requires VM management; App Engine is fully managed."
},

{
  id: "gcp-i-02",
  level: "Intermediate",
  q: "What is GKE used for?",
  a: "Running containerized applications using Kubernetes."
},

{
  id: "gcp-i-03",
  level: "Intermediate",
  q: "GKE deployment example?",
  answer: {
    summary: "Simple Kubernetes deployment.",
    codeTitle: "deployment.yaml",
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: app
spec:
  replicas: 2
  template:
    spec:
      containers:
      - name: app
        image: gcr.io/my-project/app:1.0`
  }
},

{
  id: "gcp-i-04",
  level: "Intermediate",
  q: "What is Cloud Pub/Sub?",
  a: "Global messaging service for event-driven systems."
},

{
  id: "gcp-i-05",
  level: "Intermediate",
  q: "Difference between Pub/Sub and Kafka?",
  a: "Pub/Sub is fully managed; Kafka requires cluster management."
},

{
  id: "gcp-i-06",
  level: "Intermediate",
  q: "What is Cloud Run?",
  a: "Serverless container execution platform."
},

{
  id: "gcp-i-07",
  level: "Intermediate",
  q: "Cloud Run example?",
  answer: {
    summary: "Deploy container to Cloud Run.",
    codeTitle: "gcloud command",
    code: `gcloud run deploy myapp --image=gcr.io/my-project/app --platform=managed`
  }
},

{
  id: "gcp-i-08",
  level: "Intermediate",
  q: "What is Artifact Registry?",
  a: "Managed container and artifact repository."
},

{
  id: "gcp-i-09",
  level: "Intermediate",
  q: "What is Cloud Spanner?",
  a: "Globally distributed relational database."
},

{
  id: "gcp-i-10",
  level: "Intermediate",
  q: "What is Firestore?",
  a: "NoSQL document database for real-time apps."
},

{
  id: "gcp-i-11",
  level: "Intermediate",
  q: "What is Secret Manager?",
  a: "Service to store and manage secrets securely."
},

{
  id: "gcp-i-12",
  level: "Intermediate",
  q: "What is Cloud Scheduler?",
  a: "Cron job scheduling service."
},

{
  id: "gcp-i-13",
  level: "Intermediate",
  q: "What is Cloud Build?",
  a: "CI/CD service for building and testing code."
},

{
  id: "gcp-i-14",
  level: "Intermediate",
  q: "What is Cloud NAT?",
  a: "Provides outbound internet access for private VMs."
},

{
  id: "gcp-i-15",
  level: "Intermediate",
  q: "What is Shared VPC?",
  a: "Allows multiple projects to share a common network."
},

{
  id: "gcp-i-16",
  level: "Intermediate",
  q: "What is Identity-Aware Proxy (IAP)?",
  a: "Controls access to applications without VPN."
},

{
  id: "gcp-i-17",
  level: "Intermediate",
  q: "How does autoscaling work in GCP?",
  a: "Based on CPU, memory, or custom metrics."
},

{
  id: "gcp-i-18",
  level: "Intermediate",
  q: "What is BigQuery pricing based on?",
  a: "Data scanned and storage used."
},

{
  id: "gcp-i-19",
  level: "Intermediate",
  q: "What is Cloud Armor?",
  a: "DDoS protection and WAF service."
},

{
  id: "gcp-i-20",
  level: "Intermediate",
  q: "What is Infrastructure as Code in GCP?",
  a: "Managing infrastructure using code like Terraform."
},

/* =====================================================
   ADVANCED (10)
===================================================== */

{
  id: "gcp-a-01",
  level: "Advanced",
  q: "How do you design high availability in GCP?",
  a: "Use multi-zone deployments, load balancing, and managed services."
},

{
  id: "gcp-a-02",
  level: "Advanced",
  q: "How does IAM hierarchy work?",
  a: "Organization → Folder → Project → Resource."
},

{
  id: "gcp-a-03",
  level: "Advanced",
  q: "How to secure microservices in GCP?",
  a: "Use IAM, IAP, mTLS, private services."
},

{
  id: "gcp-a-04",
  level: "Advanced",
  q: "How does GCP networking differ from AWS?",
  a: "GCP uses global VPC instead of region-specific VPC."
},

{
  id: "gcp-a-05",
  level: "Advanced",
  q: "How do you implement CI/CD on GCP?",
  a: "Cloud Build + Artifact Registry + GKE/Cloud Run."
},

{
  id: "gcp-a-06",
  level: "Advanced",
  q: "How to handle secrets securely?",
  a: "Secret Manager with IAM and workload identity."
},

{
  id: "gcp-a-07",
  level: "Advanced",
  q: "What is Workload Identity?",
  a: "Allows Kubernetes workloads to access GCP services securely."
},

{
  id: "gcp-a-08",
  level: "Advanced",
  q: "How to reduce GCP cost?",
  a: "Committed use discounts, autoscaling, monitoring."
},

{
  id: "gcp-a-09",
  level: "Advanced",
  q: "Explain multi-project architecture.",
  a: "Separate projects for networking, security, and workloads."
},

{
  id: "gcp-a-10",
  level: "Advanced",
  q: "How to implement disaster recovery in GCP?",
  a: "Multi-region replication and backup strategies."
}

];
