export const DOCKER_QUESTIONS = [

/* =====================================================
   BASIC (20)
===================================================== */

{
  id: "dk-b-01",
  level: "Basic",
  q: "What is Docker?",
  a: "Docker is a containerization platform that packages applications and their dependencies into lightweight, portable containers."
},

{
  id: "dk-b-02",
  level: "Basic",
  q: "What problem does Docker solve?",
  a: "It eliminates environment inconsistencies by bundling application code, runtime, libraries, and dependencies together."
},

{
  id: "dk-b-03",
  level: "Basic",
  q: "What is a container?",
  a: "A container is a lightweight, isolated runtime environment that shares the host OS kernel."
},

{
  id: "dk-b-04",
  level: "Basic",
  q: "Docker vs Virtual Machine?",
  answer: {
    summary: "Containers are lighter and faster than VMs.",
    table: {
      title: "Docker vs VM",
      headers: ["Aspect", "Docker Container", "Virtual Machine"],
      rows: [
        ["Startup Time", "Seconds", "Minutes"],
        ["OS Overhead", "Shared Kernel", "Full OS"],
        ["Resource Usage", "Low", "High"],
        ["Portability", "High", "Medium"]
      ]
    }
  }
},

{
  id: "dk-b-05",
  level: "Basic",
  q: "What is a Docker image?",
  a: "A Docker image is an immutable template used to create containers."
},

{
  id: "dk-b-06",
  level: "Basic",
  q: "What is a Dockerfile?",
  a: "A Dockerfile is a text file with instructions to build a Docker image."
},

{
  id: "dk-b-07",
  level: "Basic",
  q: "Basic Dockerfile example?",
  answer: {
    summary: "Simple Java application Dockerfile.",
    code: `FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]`
  }
},

{
  id: "dk-b-08",
  level: "Basic",
  q: "What is Docker Hub?",
  a: "Docker Hub is a public registry to store and share Docker images."
},

{
  id: "dk-b-09",
  level: "Basic",
  q: "What is docker run?",
  a: "docker run creates and starts a container from an image."
},

{
  id: "dk-b-10",
  level: "Basic",
  q: "Difference between docker run and docker start?",
  a: "docker run creates a new container; docker start starts an existing stopped container."
},

{
  id: "dk-b-11",
  level: "Basic",
  q: "What is docker ps?",
  a: "Lists running containers."
},

{
  id: "dk-b-12",
  level: "Basic",
  q: "What is docker stop?",
  a: "Gracefully stops a running container."
},

{
  id: "dk-b-13",
  level: "Basic",
  q: "What is docker rm?",
  a: "Removes a stopped container."
},

{
  id: "dk-b-14",
  level: "Basic",
  q: "What is docker images?",
  a: "Lists available images on the local system."
},

{
  id: "dk-b-15",
  level: "Basic",
  q: "What is docker pull?",
  a: "Downloads an image from a registry."
},

{
  id: "dk-b-16",
  level: "Basic",
  q: "What is docker push?",
  a: "Uploads an image to a registry."
},

{
  id: "dk-b-17",
  level: "Basic",
  q: "What is docker exec?",
  a: "Runs a command inside a running container."
},

{
  id: "dk-b-18",
  level: "Basic",
  q: "What is container isolation?",
  a: "Containers isolate processes, networking, and filesystem using namespaces and cgroups."
},

{
  id: "dk-b-19",
  level: "Basic",
  q: "Is Docker platform dependent?",
  a: "No. Containers are platform-independent as long as Docker runtime is supported."
},

{
  id: "dk-b-20",
  level: "Basic",
  q: "What is Docker architecture?",
  a: "Docker Client → Docker Daemon → Images → Containers → Registry."
},

/* =====================================================
   INTERMEDIATE (20)
===================================================== */

{
  id: "dk-i-01",
  level: "Intermediate",
  q: "What is a Docker volume?",
  a: "Volumes persist container data outside the container lifecycle."
},

{
  id: "dk-i-02",
  level: "Intermediate",
  q: "Volume vs Bind Mount?",
  answer: {
    summary: "Volumes are managed by Docker; bind mounts map host paths.",
    table: {
      title: "Volume vs Bind Mount",
      headers: ["Aspect", "Volume", "Bind Mount"],
      rows: [
        ["Managed by Docker", "Yes", "No"],
        ["Portability", "High", "Low"],
        ["Host Dependency", "Low", "High"]
      ]
    }
  }
},

{
  id: "dk-i-03",
  level: "Intermediate",
  q: "What is Docker networking?",
  a: "Docker networking enables container communication using bridge, host, overlay networks."
},

{
  id: "dk-i-04",
  level: "Intermediate",
  q: "What is bridge network?",
  a: "Default network allowing containers on the same host to communicate."
},

{
  id: "dk-i-05",
  level: "Intermediate",
  q: "What is host network?",
  a: "Container shares the host’s networking stack."
},

{
  id: "dk-i-06",
  level: "Intermediate",
  q: "What is overlay network?",
  a: "Enables container communication across multiple hosts (used in Swarm/Kubernetes)."
},

{
  id: "dk-i-07",
  level: "Intermediate",
  q: "What is Docker Compose?",
  a: "Docker Compose defines and runs multi-container applications using YAML."
},

{
  id: "dk-i-08",
  level: "Intermediate",
  q: "Docker Compose example?",
  answer: {
    summary: "Spring Boot + MySQL example.",
    code: `version: "3"
services:
  app:
    image: spring-app
    ports:
      - "8080:8080"
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root`
  }
},

{
  id: "dk-i-09",
  level: "Intermediate",
  q: "What is multi-stage build?",
  a: "Allows smaller images by separating build and runtime stages."
},

{
  id: "dk-i-10",
  level: "Intermediate",
  q: "Multi-stage Dockerfile example?",
  answer: {
    summary: "Optimized Java build.",
    code: `FROM maven:3.9 AS build
COPY . /app
RUN mvn -f /app/pom.xml clean package

FROM openjdk:17-jdk-slim
COPY --from=build /app/target/app.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]`
  }
},

{
  id: "dk-i-11",
  level: "Intermediate",
  q: "What is Docker Swarm?",
  a: "Docker’s native container orchestration platform."
},

{
  id: "dk-i-12",
  level: "Intermediate",
  q: "Docker Swarm vs Kubernetes?",
  a: "Swarm is simpler; Kubernetes is more powerful and scalable."
},

{
  id: "dk-i-13",
  level: "Intermediate",
  q: "What are Docker layers?",
  a: "Each instruction in Dockerfile creates a cached image layer."
},

{
  id: "dk-i-14",
  level: "Intermediate",
  q: "How does Docker caching work?",
  a: "Docker reuses unchanged layers to speed up builds."
},

{
  id: "dk-i-15",
  level: "Intermediate",
  q: "What is docker inspect?",
  a: "Provides detailed container/image metadata in JSON format."
},

{
  id: "dk-i-16",
  level: "Intermediate",
  q: "How do you limit container resources?",
  a: "Using CPU and memory flags like --memory and --cpus."
},

{
  id: "dk-i-17",
  level: "Intermediate",
  q: "How to pass environment variables?",
  a: "Using -e flag or env_file in Docker Compose."
},

{
  id: "dk-i-18",
  level: "Intermediate",
  q: "What is docker logs?",
  a: "Displays container logs."
},

{
  id: "dk-i-19",
  level: "Intermediate",
  q: "What is container healthcheck?",
  a: "Monitors container health using defined commands."
},

{
  id: "dk-i-20",
  level: "Intermediate",
  q: "What happens when container crashes?",
  a: "It stops unless restart policy is configured."
},

/* =====================================================
   ADVANCED (10)
===================================================== */

{
  id: "dk-a-01",
  level: "Advanced",
  q: "Explain Docker internals.",
  a: "Docker uses namespaces, cgroups, union filesystems, and container runtime."
},

{
  id: "dk-a-02",
  level: "Advanced",
  q: "What are namespaces?",
  a: "Namespaces isolate process IDs, networking, filesystem, and users."
},

{
  id: "dk-a-03",
  level: "Advanced",
  q: "What are cgroups?",
  a: "Control and limit container CPU, memory, and I/O usage."
},

{
  id: "dk-a-04",
  level: "Advanced",
  q: "How to secure Docker?",
  a: "Use non-root containers, image scanning, minimal base images, secrets management."
},

{
  id: "dk-a-05",
  level: "Advanced",
  q: "What is Docker Content Trust?",
  a: "Ensures image authenticity using signed images."
},

{
  id: "dk-a-06",
  level: "Advanced",
  q: "Docker vs Kubernetes?",
  answer: {
    summary: "Docker builds containers; Kubernetes orchestrates them.",
    table: {
      title: "Docker vs Kubernetes",
      headers: ["Aspect", "Docker", "Kubernetes"],
      rows: [
        ["Purpose", "Containerization", "Orchestration"],
        ["Scaling", "Manual", "Automatic"],
        ["Self-healing", "No", "Yes"]
      ]
    }
  }
},

{
  id: "dk-a-07",
  level: "Advanced",
  q: "How to design Docker for production?",
  a: "Use multi-stage builds, health checks, resource limits, logging, and orchestration."
},

{
  id: "dk-a-08",
  level: "Advanced",
  q: "How to reduce Docker image size?",
  a: "Use slim base images, multi-stage builds, .dockerignore."
},

{
  id: "dk-a-09",
  level: "Advanced",
  q: "How does Docker integrate with CI/CD?",
  a: "Build, test, scan, and deploy images in CI pipelines."
},

{
  id: "dk-a-10",
  level: "Advanced",
  q: "What are common Docker anti-patterns?",
  a: "Running as root, large images, storing secrets in images, one container doing too much."
}

];
