// 50 Google Cloud (GCP) MCQs – Easy / Medium / Hard

export const GOOGLECLOUD_MCQ = [

  // ================= EASY (1–18) =================
  {
    id: "gcp-mcq-1",
    tag: "GCP • Easy",
    q: "What does GCP stand for?",
    options: [
      "Google Cloud Platform",
      "Global Cloud Provider",
      "Google Compute Platform",
      "General Cloud Processing"
    ],
    answer: 0,
    explain: "GCP stands for Google Cloud Platform."
  },
  {
    id: "gcp-mcq-2",
    tag: "GCP • Easy",
    q: "Which GCP service provides virtual machines?",
    options: ["App Engine", "Cloud Run", "Compute Engine", "Cloud Functions"],
    answer: 2,
    explain: "Compute Engine provides IaaS virtual machines."
  },
  {
    id: "gcp-mcq-3",
    tag: "GCP • Easy",
    q: "Which GCP service is object storage?",
    options: ["BigQuery", "Cloud SQL", "Cloud Storage", "Firestore"],
    answer: 2,
    explain: "Cloud Storage is used for object storage."
  },
  {
    id: "gcp-mcq-4",
    tag: "GCP • Easy",
    q: "Which service is used for serverless functions?",
    options: ["Cloud Functions", "Compute Engine", "Cloud SQL", "Bigtable"],
    answer: 0,
    explain: "Cloud Functions provides serverless execution."
  },
  {
    id: "gcp-mcq-5",
    tag: "GCP • Easy",
    q: "Which database is fully managed relational in GCP?",
    options: ["Bigtable", "Firestore", "Cloud SQL", "Datastore"],
    answer: 2,
    explain: "Cloud SQL provides managed relational databases."
  },
  {
    id: "gcp-mcq-6",
    tag: "GCP • Easy",
    q: "Which GCP service runs containers?",
    options: ["Cloud Functions", "GKE", "BigQuery", "Firestore"],
    answer: 1,
    explain: "GKE (Google Kubernetes Engine) runs containers."
  },
  {
    id: "gcp-mcq-7",
    tag: "GCP • Easy",
    q: "Which service is used for NoSQL document storage?",
    options: ["Firestore", "Cloud SQL", "BigQuery", "Spanner"],
    answer: 0,
    explain: "Firestore is a NoSQL document database."
  },
  {
    id: "gcp-mcq-8",
    tag: "GCP • Easy",
    q: "Which service is used for monitoring?",
    options: ["Cloud Trace", "Cloud Monitoring", "Cloud Audit Logs", "Cloud Profiler"],
    answer: 1,
    explain: "Cloud Monitoring provides metrics and alerts."
  },
  {
    id: "gcp-mcq-9",
    tag: "GCP • Easy",
    q: "Which tool is used for GCP CLI?",
    options: ["kubectl", "awscli", "gcloud", "terraform"],
    answer: 2,
    explain: "gcloud is the CLI tool for Google Cloud."
  },
  {
    id: "gcp-mcq-10",
    tag: "GCP • Easy",
    q: "Which service provides data warehouse capabilities?",
    options: ["BigQuery", "Cloud SQL", "Firestore", "Bigtable"],
    answer: 0,
    explain: "BigQuery is GCP’s serverless data warehouse."
  },

  // ================= MEDIUM (11–35) =================
  {
    id: "gcp-mcq-11",
    tag: "GCP • Medium",
    q: "Which GCP service provides managed Kubernetes?",
    options: ["Cloud Run", "Compute Engine", "GKE", "App Engine"],
    answer: 2,
    explain: "Google Kubernetes Engine manages Kubernetes clusters."
  },
  {
    id: "gcp-mcq-12",
    tag: "GCP • Medium",
    q: "What is App Engine mainly used for?",
    options: [
      "Running VMs",
      "Serverless web applications",
      "Big data analytics",
      "Container orchestration"
    ],
    answer: 1,
    explain: "App Engine is a PaaS for serverless web apps."
  },
  {
    id: "gcp-mcq-13",
    tag: "GCP • Medium",
    q: "Which service provides global relational consistency?",
    options: ["Cloud SQL", "Firestore", "Spanner", "Bigtable"],
    answer: 2,
    explain: "Cloud Spanner provides globally consistent SQL."
  },
  {
    id: "gcp-mcq-14",
    tag: "GCP • Medium",
    q: "Which load balancer is global by default?",
    options: [
      "Network Load Balancer",
      "HTTP(S) Load Balancer",
      "Internal Load Balancer",
      "TCP Proxy"
    ],
    answer: 1,
    explain: "HTTP(S) Load Balancer is globally distributed."
  },
  {
    id: "gcp-mcq-15",
    tag: "GCP • Medium",
    q: "Which service is used for messaging?",
    options: ["Cloud Tasks", "Pub/Sub", "BigQuery", "Dataflow"],
    answer: 1,
    explain: "Pub/Sub is used for messaging and event ingestion."
  },
  {
    id: "gcp-mcq-16",
    tag: "GCP • Medium",
    q: "Which service is used for batch & stream data processing?",
    options: ["Dataflow", "Dataproc", "BigQuery", "Composer"],
    answer: 0,
    explain: "Dataflow supports batch and streaming pipelines."
  },
  {
    id: "gcp-mcq-17",
    tag: "GCP • Medium",
    q: "Which IAM principle grants least privilege?",
    options: [
      "Owner role",
      "Editor role",
      "Predefined roles",
      "Custom minimal roles"
    ],
    answer: 3,
    explain: "Custom minimal roles follow least-privilege principle."
  },
  {
    id: "gcp-mcq-18",
    tag: "GCP • Medium",
    q: "Which service is used for workflow orchestration?",
    options: ["Composer", "Scheduler", "Cloud Tasks", "Cloud Build"],
    answer: 0,
    explain: "Cloud Composer is managed Apache Airflow."
  },

  // ================= HARD (36–50) =================
  {
    id: "gcp-mcq-36",
    tag: "GCP • Hard",
    q: "Which service is best for event-driven container execution?",
    options: ["GKE", "Compute Engine", "Cloud Run", "App Engine"],
    answer: 2,
    explain: "Cloud Run runs containers in a fully managed serverless way."
  },
  {
    id: "gcp-mcq-37",
    tag: "GCP • Hard",
    q: "How does GCP ensure high availability?",
    options: [
      "Single-zone deployments",
      "Multi-region and multi-zone design",
      "Manual VM restarts",
      "Static IP routing"
    ],
    answer: 1,
    explain: "GCP uses multi-zone and multi-region architecture."
  },
  {
    id: "gcp-mcq-38",
    tag: "GCP • Hard",
    q: "Which service provides CI/CD in GCP?",
    options: ["Cloud Build", "Cloud Run", "Cloud Deploy", "Both A and C"],
    answer: 3,
    explain: "Cloud Build + Cloud Deploy together provide CI/CD."
  },
  {
    id: "gcp-mcq-39",
    tag: "GCP • Hard",
    q: "Which encryption is enabled by default in GCP?",
    options: [
      "Customer-managed keys only",
      "Google-managed encryption at rest",
      "No encryption",
      "TLS only"
    ],
    answer: 1,
    explain: "GCP encrypts data at rest by default."
  },
  {
    id: "gcp-mcq-40",
    tag: "GCP • Hard",
    q: "What is the purpose of VPC Service Controls?",
    options: [
      "Network routing",
      "Perimeter security for services",
      "Load balancing",
      "Traffic monitoring"
    ],
    answer: 1,
    explain: "VPC Service Controls prevent data exfiltration."
  },
  {
    id: "gcp-mcq-41",
    tag: "GCP • Hard",
    q: "Which database is best for time-series data?",
    options: ["Firestore", "Bigtable", "Cloud SQL", "Spanner"],
    answer: 1,
    explain: "Bigtable is optimized for large-scale time-series data."
  },
  {
    id: "gcp-mcq-42",
    tag: "GCP • Hard",
    q: "Which GCP service enables secrets management?",
    options: ["Cloud Storage", "Secret Manager", "KMS", "IAM"],
    answer: 1,
    explain: "Secret Manager securely stores secrets."
  },
  {
    id: "gcp-mcq-43",
    tag: "GCP • Hard",
    q: "Which pricing model allows unused capacity discounts?",
    options: [
      "On-demand",
      "Reserved instances",
      "Sustained use discounts",
      "Preemptible VMs"
    ],
    answer: 2,
    explain: "Sustained use discounts apply automatically."
  },
  {
    id: "gcp-mcq-44",
    tag: "GCP • Hard",
    q: "Which VM type is cheapest but can be terminated anytime?",
    options: [
      "Standard VM",
      "Custom VM",
      "Preemptible VM",
      "Shielded VM"
    ],
    answer: 2,
    explain: "Preemptible VMs are low-cost but short-lived."
  },
  {
    id: "gcp-mcq-45",
    tag: "GCP • Hard",
    q: "Which service is used for API management?",
    options: ["Apigee", "Cloud Endpoints", "API Gateway", "All of these"],
    answer: 3,
    explain: "GCP offers multiple API management options."
  },
  {
    id: "gcp-mcq-46",
    tag: "GCP • Hard",
    q: "Which GCP service supports ML model training?",
    options: ["Vertex AI", "BigQuery", "Dataproc", "Composer"],
    answer: 0,
    explain: "Vertex AI is used for ML model training and deployment."
  },
  {
    id: "gcp-mcq-47",
    tag: "GCP • Hard",
    q: "Which networking feature enables private Google access?",
    options: [
      "Cloud NAT",
      "Private Google Access",
      "VPC Peering",
      "Interconnect"
    ],
    answer: 1,
    explain: "Private Google Access allows private VM access to Google APIs."
  },
  {
    id: "gcp-mcq-48",
    tag: "GCP • Hard",
    q: "Which tool is recommended for IaC on GCP?",
    options: ["Cloud Deployment Manager", "Terraform", "Pulumi", "All"],
    answer: 3,
    explain: "All listed tools support Infrastructure as Code."
  },
  {
    id: "gcp-mcq-49",
    tag: "GCP • Hard",
    q: "Which service provides distributed tracing?",
    options: ["Cloud Trace", "Cloud Logging", "Cloud Profiler", "Cloud Debugger"],
    answer: 0,
    explain: "Cloud Trace provides distributed tracing."
  },
  {
    id: "gcp-mcq-50",
    tag: "GCP • Hard",
    q: "Which GCP service helps detect security threats?",
    options: ["Security Command Center", "Cloud Armor", "IAM", "Firewall Rules"],
    answer: 0,
    explain: "Security Command Center provides centralized security insights."
  }
];
