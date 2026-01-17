export const KUBERNETES_QUESTIONS = [

/* =====================================================
   BASIC (20)
===================================================== */

{
  id: "k8s-b-01",
  level: "Basic",
  q: "What is Kubernetes?",
  a: "Kubernetes is a container orchestration platform used to automate deployment, scaling, and management of containerized applications."
},

{
  id: "k8s-b-02",
  level: "Basic",
  q: "Why do we need Kubernetes?",
  a: "Kubernetes manages container scaling, self-healing, load balancing, and rolling deployments in production environments."
},

{
  id: "k8s-b-03",
  level: "Basic",
  q: "What is a Pod?",
  a: "A Pod is the smallest deployable unit in Kubernetes and can contain one or more containers sharing network and storage."
},

{
  id: "k8s-b-04",
  level: "Basic",
  q: "Kubernetes vs Docker?",
  answer: {
    summary: "Docker builds containers, Kubernetes orchestrates them.",
    table: {
      title: "Docker vs Kubernetes",
      headers: ["Aspect", "Docker", "Kubernetes"],
      rows: [
        ["Purpose", "Containerization", "Orchestration"],
        ["Scaling", "Manual", "Automatic"],
        ["Self-healing", "No", "Yes"],
        ["Scheduling", "Manual", "Automatic"]
      ]
    }
  }
},

{
  id: "k8s-b-05",
  level: "Basic",
  q: "What is a Node?",
  a: "A Node is a worker machine where Pods are scheduled and run."
},

{
  id: "k8s-b-06",
  level: "Basic",
  q: "What is a Cluster?",
  a: "A Kubernetes cluster consists of control plane nodes and worker nodes."
},

{
  id: "k8s-b-07",
  level: "Basic",
  q: "What is kubectl?",
  a: "kubectl is the command-line tool used to interact with a Kubernetes cluster."
},

{
  id: "k8s-b-08",
  level: "Basic",
  q: "Basic kubectl commands?",
  answer: {
    summary: "Common kubectl commands.",
    code: `kubectl get pods
kubectl get nodes
kubectl apply -f app.yaml
kubectl delete pod pod-name`
  }
},

{
  id: "k8s-b-09",
  level: "Basic",
  q: "What is a Deployment?",
  a: "A Deployment manages Pod replicas and provides rolling updates and rollbacks."
},

{
  id: "k8s-b-10",
  level: "Basic",
  q: "What is a Service?",
  a: "A Service exposes Pods and provides stable networking and load balancing."
},

{
  id: "k8s-b-11",
  level: "Basic",
  q: "Types of Services?",
  a: "ClusterIP, NodePort, LoadBalancer, ExternalName."
},

{
  id: "k8s-b-12",
  level: "Basic",
  q: "What is Namespace?",
  a: "Namespaces logically isolate resources within a cluster."
},

{
  id: "k8s-b-13",
  level: "Basic",
  q: "What is ConfigMap?",
  a: "ConfigMap stores non-sensitive configuration data."
},

{
  id: "k8s-b-14",
  level: "Basic",
  q: "What is a Secret?",
  a: "Secrets store sensitive information like passwords and tokens."
},

{
  id: "k8s-b-15",
  level: "Basic",
  q: "What is a ReplicaSet?",
  a: "Ensures a specified number of Pod replicas are running."
},

{
  id: "k8s-b-16",
  level: "Basic",
  q: "What is YAML in Kubernetes?",
  a: "YAML files define Kubernetes resources declaratively."
},

{
  id: "k8s-b-17",
  level: "Basic",
  q: "Simple Pod YAML example?",
  answer: {
    summary: "Basic Pod definition.",
    code: `apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx`
  }
},

{
  id: "k8s-b-18",
  level: "Basic",
  q: "What is etcd?",
  a: "etcd is a distributed key-value store used to store cluster state."
},

{
  id: "k8s-b-19",
  level: "Basic",
  q: "What is kubelet?",
  a: "kubelet runs on each node and ensures Pods are running correctly."
},

{
  id: "k8s-b-20",
  level: "Basic",
  q: "What is kube-proxy?",
  a: "kube-proxy handles networking and service routing."
},

/* =====================================================
   INTERMEDIATE (20)
===================================================== */

{
  id: "k8s-i-01",
  level: "Intermediate",
  q: "What is a StatefulSet?",
  a: "Manages stateful applications with stable identities and storage."
},

{
  id: "k8s-i-02",
  level: "Intermediate",
  q: "StatefulSet vs Deployment?",
  answer: {
    summary: "Used for different workload types.",
    table: {
      title: "Deployment vs StatefulSet",
      headers: ["Aspect", "Deployment", "StatefulSet"],
      rows: [
        ["Identity", "Random", "Stable"],
        ["Storage", "Shared", "Persistent"],
        ["Use Case", "Stateless apps", "Databases"]
      ]
    }
  }
},

{
  id: "k8s-i-03",
  level: "Intermediate",
  q: "What is PersistentVolume (PV)?",
  a: "Represents cluster storage provisioned by admin."
},

{
  id: "k8s-i-04",
  level: "Intermediate",
  q: "What is PersistentVolumeClaim (PVC)?",
  a: "PVC is a request for storage by a Pod."
},

{
  id: "k8s-i-05",
  level: "Intermediate",
  q: "What is Ingress?",
  a: "Ingress manages external HTTP/HTTPS access to services."
},

{
  id: "k8s-i-06",
  level: "Intermediate",
  q: "Ingress vs Service?",
  a: "Ingress handles routing rules; Service exposes Pods internally."
},

{
  id: "k8s-i-07",
  level: "Intermediate",
  q: "What is Horizontal Pod Autoscaler?",
  a: "Automatically scales Pods based on CPU/memory metrics."
},

{
  id: "k8s-i-08",
  level: "Intermediate",
  q: "HPA example?",
  answer: {
    summary: "Auto-scale Pods based on CPU.",
    code: `kubectl autoscale deployment app --cpu-percent=50 --min=2 --max=10`
  }
},

{
  id: "k8s-i-09",
  level: "Intermediate",
  q: "What is Rolling Update?",
  a: "Updates Pods gradually without downtime."
},

{
  id: "k8s-i-10",
  level: "Intermediate",
  q: "What is Rollback?",
  a: "Reverts to a previous Deployment version."
},

{
  id: "k8s-i-11",
  level: "Intermediate",
  q: "What is Liveness Probe?",
  a: "Checks if container should be restarted."
},

{
  id: "k8s-i-12",
  level: "Intermediate",
  q: "What is Readiness Probe?",
  a: "Checks if container is ready to accept traffic."
},

{
  id: "k8s-i-13",
  level: "Intermediate",
  q: "What is Resource Request and Limit?",
  a: "Controls minimum and maximum CPU/memory usage."
},

{
  id: "k8s-i-14",
  level: "Intermediate",
  q: "What is taint and toleration?",
  a: "Controls Pod scheduling on nodes."
},

{
  id: "k8s-i-15",
  level: "Intermediate",
  q: "What is node affinity?",
  a: "Rules for scheduling Pods on specific nodes."
},

{
  id: "k8s-i-16",
  level: "Intermediate",
  q: "What is Helm?",
  a: "Helm is a package manager for Kubernetes."
},

{
  id: "k8s-i-17",
  level: "Intermediate",
  q: "What is a Helm chart?",
  a: "A collection of Kubernetes YAML templates."
},

{
  id: "k8s-i-18",
  level: "Intermediate",
  q: "What is CRD?",
  a: "Custom Resource Definition extends Kubernetes API."
},

{
  id: "k8s-i-19",
  level: "Intermediate",
  q: "How does Kubernetes handle failures?",
  a: "Self-healing via restart, reschedule, and replication."
},

{
  id: "k8s-i-20",
  level: "Intermediate",
  q: "What is metrics-server?",
  a: "Collects resource metrics for HPA."
},

/* =====================================================
   ADVANCED (10)
===================================================== */

{
  id: "k8s-a-01",
  level: "Advanced",
  q: "Explain Kubernetes architecture.",
  a: "Control plane manages cluster state; worker nodes run workloads."
},

{
  id: "k8s-a-02",
  level: "Advanced",
  q: "What is API Server?",
  a: "Entry point for all cluster operations."
},

{
  id: "k8s-a-03",
  level: "Advanced",
  q: "How does Kubernetes networking work?",
  a: "Each Pod gets a unique IP; flat networking model."
},

{
  id: "k8s-a-04",
  level: "Advanced",
  q: "What is CNI?",
  a: "Container Network Interface manages Pod networking."
},

{
  id: "k8s-a-05",
  level: "Advanced",
  q: "How to secure Kubernetes?",
  a: "RBAC, Network Policies, Secrets, Pod Security Policies."
},

{
  id: "k8s-a-06",
  level: "Advanced",
  q: "RBAC example?",
  answer: {
    summary: "Grant read-only access to Pods.",
    code: `kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list"]`
  }
},

{
  id: "k8s-a-07",
  level: "Advanced",
  q: "What is GitOps?",
  a: "Managing Kubernetes using Git as the single source of truth."
},

{
  id: "k8s-a-08",
  level: "Advanced",
  q: "What is Service Mesh?",
  a: "Infrastructure layer for service-to-service communication."
},

{
  id: "k8s-a-09",
  level: "Advanced",
  q: "How does Kubernetes scale globally?",
  a: "Using multiple clusters, federation, and cloud load balancers."
},

{
  id: "k8s-a-10",
  level: "Advanced",
  q: "Common Kubernetes production issues?",
  a: "Improper resource limits, poor monitoring, misconfigured networking."
}

];
