export const AZURE_QUESTIONS = [

/* =====================================================
   BASIC (20)
===================================================== */

{
  id: "az-b-01",
  level: "Basic",
  q: "What is Microsoft Azure?",
  a: "Azure is a cloud computing platform providing IaaS, PaaS, and SaaS services including compute, storage, networking, and AI."
},

{
  id: "az-b-02",
  level: "Basic",
  q: "What are the main Azure service models?",
  a: "IaaS (VMs), PaaS (App Service), SaaS (Microsoft 365)."
},

{
  id: "az-b-03",
  level: "Basic",
  q: "What is Azure Virtual Machine?",
  a: "Azure VM is a scalable compute resource used to deploy applications and workloads."
},

{
  id: "az-b-04",
  level: "Basic",
  q: "What is Azure Storage?",
  a: "Provides Blob, File, Queue, and Table storage services."
},

{
  id: "az-b-05",
  level: "Basic",
  q: "What is Azure Blob Storage?",
  a: "Object storage optimized for unstructured data like images, videos, and backups."
},

{
  id: "az-b-06",
  level: "Basic",
  q: "What is Azure Resource Group?",
  a: "A logical container that holds related Azure resources."
},

{
  id: "az-b-07",
  level: "Basic",
  q: "What is Azure Region?",
  a: "A geographical area containing one or more data centers."
},

{
  id: "az-b-08",
  level: "Basic",
  q: "What is Azure Availability Zone?",
  a: "Physically separate data centers within a region for high availability."
},

{
  id: "az-b-09",
  level: "Basic",
  q: "What is Azure App Service?",
  a: "PaaS service for hosting web apps, REST APIs, and backends."
},

{
  id: "az-b-10",
  level: "Basic",
  q: "What is Azure Function?",
  a: "Serverless compute service for running event-driven code."
},

{
  id: "az-b-11",
  level: "Basic",
  q: "Azure Function example?",
  answer: {
    summary: "Simple Java Azure Function.",
    codeTitle: "Java Azure Function",
    code: `@FunctionName("hello")
public String run(
  @HttpTrigger(name = "req") HttpRequestMessage<String> req) {
  return "Hello Azure";
}`
  }
},

{
  id: "az-b-12",
  level: "Basic",
  q: "What is Azure Active Directory (AAD)?",
  a: "Identity and access management service for authentication and authorization."
},

{
  id: "az-b-13",
  level: "Basic",
  q: "What is Azure Key Vault?",
  a: "Secure storage for secrets, keys, and certificates."
},

{
  id: "az-b-14",
  level: "Basic",
  q: "What is Azure Monitor?",
  a: "Monitoring service for metrics, logs, and alerts."
},

{
  id: "az-b-15",
  level: "Basic",
  q: "What is Azure Load Balancer?",
  a: "Distributes network traffic across virtual machines."
},

{
  id: "az-b-16",
  level: "Basic",
  q: "What is Azure VNet?",
  a: "Virtual network that enables isolated networking."
},

{
  id: "az-b-17",
  level: "Basic",
  q: "What is Azure SQL Database?",
  a: "Fully managed relational database service."
},

{
  id: "az-b-18",
  level: "Basic",
  q: "What is Azure DevOps?",
  a: "Suite of tools for CI/CD, boards, repos, pipelines."
},

{
  id: "az-b-19",
  level: "Basic",
  q: "What is ARM?",
  a: "Azure Resource Manager is the deployment and management layer."
},

{
  id: "az-b-20",
  level: "Basic",
  q: "What is Azure Portal?",
  a: "Web-based UI for managing Azure resources."
},

/* =====================================================
   INTERMEDIATE (20)
===================================================== */

{
  id: "az-i-01",
  level: "Intermediate",
  q: "Difference between Azure VM and App Service?",
  a: "VM requires OS management; App Service abstracts infrastructure."
},

{
  id: "az-i-02",
  level: "Intermediate",
  q: "What is Azure AKS?",
  a: "Managed Kubernetes service for container orchestration."
},

{
  id: "az-i-03",
  level: "Intermediate",
  q: "AKS deployment example?",
  answer: {
    summary: "Basic Kubernetes deployment.",
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
        image: myapp:1.0`
  }
},

{
  id: "az-i-04",
  level: "Intermediate",
  q: "What is Azure Container Registry (ACR)?",
  a: "Private Docker registry for container images."
},

{
  id: "az-i-05",
  level: "Intermediate",
  q: "What is Azure Application Gateway?",
  a: "Layer 7 load balancer with WAF support."
},

{
  id: "az-i-06",
  level: "Intermediate",
  q: "Difference between Load Balancer and Application Gateway?",
  a: "LB is L4; App Gateway is L7 with routing and SSL."
},

{
  id: "az-i-07",
  level: "Intermediate",
  q: "What is Azure Service Bus?",
  a: "Enterprise messaging service for queues and topics."
},

{
  id: "az-i-08",
  level: "Intermediate",
  q: "What is Azure Event Grid?",
  a: "Event routing service for reactive architectures."
},

{
  id: "az-i-09",
  level: "Intermediate",
  q: "What is Azure Logic App?",
  a: "Low-code workflow automation service."
},

{
  id: "az-i-10",
  level: "Intermediate",
  q: "What is Azure Storage Account?",
  a: "Container for all Azure storage services."
},

{
  id: "az-i-11",
  level: "Intermediate",
  q: "What is Azure CLI?",
  a: "Command-line tool to manage Azure resources."
},

{
  id: "az-i-12",
  level: "Intermediate",
  q: "Azure CLI example?",
  answer: {
    summary: "List resource groups.",
    codeTitle: "Azure CLI",
    code: `az group list`
  }
},

{
  id: "az-i-13",
  level: "Intermediate",
  q: "What is Managed Identity?",
  a: "Identity managed by Azure for accessing resources securely."
},

{
  id: "az-i-14",
  level: "Intermediate",
  q: "What is Azure Backup?",
  a: "Backup service for VMs, SQL, and files."
},

{
  id: "az-i-15",
  level: "Intermediate",
  q: "What is Azure Site Recovery?",
  a: "Disaster recovery solution."
},

{
  id: "az-i-16",
  level: "Intermediate",
  q: "What is Bicep?",
  a: "Declarative IaC language for ARM."
},

{
  id: "az-i-17",
  level: "Intermediate",
  q: "ARM vs Terraform?",
  a: "ARM/Bicep are Azure-native; Terraform is multi-cloud."
},

{
  id: "az-i-18",
  level: "Intermediate",
  q: "What is Azure CDN?",
  a: "Content delivery network for low-latency access."
},

{
  id: "az-i-19",
  level: "Intermediate",
  q: "What is Azure API Management?",
  a: "Manages, secures, and monitors APIs."
},

{
  id: "az-i-20",
  level: "Intermediate",
  q: "How does Azure scale apps?",
  a: "Auto-scale rules based on metrics."
},

/* =====================================================
   ADVANCED (10)
===================================================== */

{
  id: "az-a-01",
  level: "Advanced",
  q: "How do you design HA architecture in Azure?",
  a: "Use Availability Zones, Load Balancer, Auto Scale, and geo-redundancy."
},

{
  id: "az-a-02",
  level: "Advanced",
  q: "Explain Azure Zero Trust security model.",
  a: "Verify explicitly, least privilege, assume breach."
},

{
  id: "az-a-03",
  level: "Advanced",
  q: "How does Azure AD OAuth work?",
  a: "Uses tokens (JWT) for authentication and authorization."
},

{
  id: "az-a-04",
  level: "Advanced",
  q: "How do you manage secrets in enterprise apps?",
  a: "Azure Key Vault + Managed Identity."
},

{
  id: "az-a-05",
  level: "Advanced",
  q: "AKS production best practices?",
  a: "Separate node pools, HPA, Pod security, monitoring."
},

{
  id: "az-a-06",
  level: "Advanced",
  q: "How to implement CI/CD in Azure?",
  a: "Azure DevOps pipelines with build + release stages."
},

{
  id: "az-a-07",
  level: "Advanced",
  q: "What is Azure Policy?",
  a: "Governance service to enforce compliance."
},

{
  id: "az-a-08",
  level: "Advanced",
  q: "How to optimize Azure costs?",
  a: "Reserved Instances, auto-scaling, monitoring."
},

{
  id: "az-a-09",
  level: "Advanced",
  q: "Explain Azure landing zone.",
  a: "Preconfigured environment for enterprise workloads."
},

{
  id: "az-a-10",
  level: "Advanced",
  q: "Multi-region DR strategy?",
  a: "Active-passive or active-active with traffic manager."
}

];
