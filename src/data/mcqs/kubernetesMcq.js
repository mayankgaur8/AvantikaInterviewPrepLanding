// 50 Kubernetes MCQs – Basic / Intermediate / Advanced

export const KUBERNETES_MCQ = [

  // ================= BASIC (1–17) =================
  {
    id: "k8s-mcq-1",
    tag: "Kubernetes • Basic",
    q: "What is Kubernetes?",
    options: [
      "Container runtime",
      "Container orchestration platform",
      "Programming language",
      "CI/CD tool"
    ],
    answer: 1,
    explain: "Kubernetes is a container orchestration platform."
  },
  {
    id: "k8s-mcq-2",
    tag: "Kubernetes • Basic",
    q: "Who originally developed Kubernetes?",
    options: ["AWS", "Microsoft", "Google", "Docker"],
    answer: 2,
    explain: "Kubernetes was developed by Google."
  },
  {
    id: "k8s-mcq-3",
    tag: "Kubernetes • Basic",
    q: "What is a Pod?",
    options: [
      "A group of nodes",
      "A deployment unit",
      "Smallest deployable unit",
      "Container image"
    ],
    answer: 2,
    explain: "Pod is the smallest deployable unit in Kubernetes."
  },
  {
    id: "k8s-mcq-4",
    tag: "Kubernetes • Basic",
    q: "Which file format is used for Kubernetes manifests?",
    options: ["JSON", "XML", "YAML", "INI"],
    answer: 2,
    explain: "YAML is commonly used for Kubernetes manifests."
  },
  {
    id: "k8s-mcq-5",
    tag: "Kubernetes • Basic",
    q: "Which command is used to deploy resources?",
    options: ["kubectl deploy", "kubectl apply", "kubectl run", "kubectl start"],
    answer: 1,
    explain: "`kubectl apply` is used to create/update resources."
  },
  {
    id: "k8s-mcq-6",
    tag: "Kubernetes • Basic",
    q: "What component runs containers?",
    options: ["Node", "Pod", "Scheduler", "Controller"],
    answer: 0,
    explain: "Nodes run containers."
  },
  {
    id: "k8s-mcq-7",
    tag: "Kubernetes • Basic",
    q: "Which component schedules Pods?",
    options: ["kubelet", "kube-proxy", "scheduler", "etcd"],
    answer: 2,
    explain: "Scheduler assigns Pods to nodes."
  },
  {
    id: "k8s-mcq-8",
    tag: "Kubernetes • Basic",
    q: "What is kubectl?",
    options: [
      "Cluster API",
      "CLI tool",
      "Monitoring agent",
      "Scheduler"
    ],
    answer: 1,
    explain: "kubectl is the Kubernetes CLI."
  },
  {
    id: "k8s-mcq-9",
    tag: "Kubernetes • Basic",
    q: "Which component stores cluster state?",
    options: ["API Server", "Controller", "etcd", "kubelet"],
    answer: 2,
    explain: "etcd stores cluster configuration and state."
  },
  {
    id: "k8s-mcq-10",
    tag: "Kubernetes • Basic",
    q: "Which object ensures Pods are always running?",
    options: ["Pod", "ReplicaSet", "Service", "ConfigMap"],
    answer: 1,
    explain: "ReplicaSet maintains desired Pod count."
  },

  // ================= INTERMEDIATE (11–33) =================
  {
    id: "k8s-mcq-11",
    tag: "Kubernetes • Intermediate",
    q: "What is a Deployment?",
    options: [
      "Pod wrapper",
      "ReplicaSet manager",
      "Service type",
      "Ingress rule"
    ],
    answer: 1,
    explain: "Deployment manages ReplicaSets."
  },
  {
    id: "k8s-mcq-12",
    tag: "Kubernetes • Intermediate",
    q: "What does a Service provide?",
    options: [
      "Storage",
      "Stable network access",
      "Pod scheduling",
      "Secrets"
    ],
    answer: 1,
    explain: "Service provides stable networking for Pods."
  },
  {
    id: "k8s-mcq-13",
    tag: "Kubernetes • Intermediate",
    q: "Which Service exposes externally?",
    options: ["ClusterIP", "NodePort", "ExternalName", "Headless"],
    answer: 1,
    explain: "NodePort exposes service outside cluster."
  },
  {
    id: "k8s-mcq-14",
    tag: "Kubernetes • Intermediate",
    q: "What is ConfigMap?",
    options: [
      "Stores secrets",
      "Stores config data",
      "Stores images",
      "Stores logs"
    ],
    answer: 1,
    explain: "ConfigMap stores non-sensitive config."
  },
  {
    id: "k8s-mcq-15",
    tag: "Kubernetes • Intermediate",
    q: "How are Secrets different from ConfigMaps?",
    options: [
      "Encrypted",
      "Binary data",
      "Base64 encoded",
      "All of the above"
    ],
    answer: 3,
    explain: "Secrets handle sensitive data."
  },
  {
    id: "k8s-mcq-16",
    tag: "Kubernetes • Intermediate",
    q: "What is Ingress?",
    options: [
      "Load balancer",
      "Traffic router",
      "Firewall",
      "DNS server"
    ],
    answer: 1,
    explain: "Ingress manages HTTP/HTTPS routing."
  },
  {
    id: "k8s-mcq-17",
    tag: "Kubernetes • Intermediate",
    q: "What is namespace used for?",
    options: [
      "Scaling",
      "Isolation",
      "Security",
      "Networking"
    ],
    answer: 1,
    explain: "Namespaces provide logical isolation."
  },
  {
    id: "k8s-mcq-18",
    tag: "Kubernetes • Intermediate",
    q: "What is HPA?",
    options: [
      "Horizontal Pod Autoscaler",
      "High Performance App",
      "Host Policy Agent",
      "Hybrid Pod Allocation"
    ],
    answer: 0,
    explain: "HPA scales Pods based on metrics."
  },
  {
    id: "k8s-mcq-19",
    tag: "Kubernetes • Intermediate",
    q: "Which metric is used by HPA?",
    options: ["CPU", "Memory", "Custom", "All"],
    answer: 3,
    explain: "HPA supports CPU, memory and custom metrics."
  },
  {
    id: "k8s-mcq-20",
    tag: "Kubernetes • Intermediate",
    q: "What is Rolling Update?",
    options: [
      "Restart all pods",
      "Update pods gradually",
      "Delete deployment",
      "Recreate cluster"
    ],
    answer: 1,
    explain: "Rolling update updates Pods gradually."
  },

  // ================= ADVANCED (34–50) =================
  {
    id: "k8s-mcq-34",
    tag: "Kubernetes • Advanced",
    q: "What is etcd consistency model?",
    options: ["Eventually consistent", "Strongly consistent", "Weak", "None"],
    answer: 1,
    explain: "etcd provides strong consistency."
  },
  {
    id: "k8s-mcq-35",
    tag: "Kubernetes • Advanced",
    q: "What is a StatefulSet?",
    options: [
      "Stateless Pods",
      "Ordered Pod deployment",
      "Daemon process",
      "Job controller"
    ],
    answer: 1,
    explain: "StatefulSet manages ordered, stable Pods."
  },
  {
    id: "k8s-mcq-36",
    tag: "Kubernetes • Advanced",
    q: "Which controller runs one Pod per node?",
    options: ["Deployment", "DaemonSet", "StatefulSet", "Job"],
    answer: 1,
    explain: "DaemonSet ensures one Pod per node."
  },
  {
    id: "k8s-mcq-37",
    tag: "Kubernetes • Advanced",
    q: "What is CNI?",
    options: [
      "Container Network Interface",
      "Cluster Node Interface",
      "Container Native Infra",
      "Cloud Network Integration"
    ],
    answer: 0,
    explain: "CNI provides networking for containers."
  },
  {
    id: "k8s-mcq-38",
    tag: "Kubernetes • Advanced",
    q: "What is Pod Disruption Budget?",
    options: [
      "Resource limit",
      "Availability control",
      "Security rule",
      "Autoscaling policy"
    ],
    answer: 1,
    explain: "PDB ensures minimum availability."
  },
  {
    id: "k8s-mcq-39",
    tag: "Kubernetes • Advanced",
    q: "What is taint used for?",
    options: [
      "Scheduling restriction",
      "Scaling",
      "Networking",
      "Storage"
    ],
    answer: 0,
    explain: "Taints restrict Pod scheduling."
  },
  {
    id: "k8s-mcq-40",
    tag: "Kubernetes • Advanced",
    q: "What allows Pods to tolerate taints?",
    options: ["Labels", "Annotations", "Tolerations", "Selectors"],
    answer: 2,
    explain: "Tolerations allow Pods to schedule on tainted nodes."
  },
  {
    id: "k8s-mcq-41",
    tag: "Kubernetes • Advanced",
    q: "Which security feature controls Pod permissions?",
    options: [
      "RBAC",
      "Network Policy",
      "Secrets",
      "ConfigMaps"
    ],
    answer: 0,
    explain: "RBAC controls access permissions."
  },
  {
    id: "k8s-mcq-42",
    tag: "Kubernetes • Advanced",
    q: "What is Helm?",
    options: [
      "Monitoring tool",
      "Package manager",
      "Scheduler",
      "Controller"
    ],
    answer: 1,
    explain: "Helm is Kubernetes package manager."
  },
  {
    id: "k8s-mcq-43",
    tag: "Kubernetes • Advanced",
    q: "Why is Kubernetes self-healing?",
    options: [
      "Restarts Pods",
      "Reschedules Pods",
      "Replaces failed nodes",
      "All of the above"
    ],
    answer: 3,
    explain: "Kubernetes auto-heals workloads."
  }
];
