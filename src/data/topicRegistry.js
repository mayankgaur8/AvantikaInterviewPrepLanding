import { CORE_JAVA_QUESTIONS } from "./coreJavaQuestions";
import { JSP_QUESTIONS } from "./jspquestions";
import { SERVLET_QUESTIONS } from "./servletQuestions"; // ✅ REQUIRED
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
//import { DOCKER_QUESTIONS } from "./dockerQuestions";

export const TOPIC_QUESTIONS = {
  core_java: CORE_JAVA_QUESTIONS, // MUST be array
  jsp: JSP_QUESTIONS,  
  servlets: SERVLET_QUESTIONS,           // MUST be array
  ejb: EJB_QUESTIONS,
  hibernate: HIBERNATE_QUESTIONS,
    spring: SPRING_QUESTIONS,
    springboot: SPRINGBOOT_QUESTIONS,
    soap: SOAP_QUESTIONS,
    rest: REST_QUESTIONS,
    microservices: MICROSERVICES_QUESTIONS,
    design_patterns: DESIGN_PATTERNS_QUESTIONS,
    aws: AWS_QUESTIONS,
    azure: AZURE_QUESTIONS,
    gcp: GCP_QUESTIONS,
    react: REACT_QUESTIONS,
    angular: ANGULAR_QUESTIONS,
    kafka: KAFKA_QUESTIONS,
    docker: DOCKER_QUESTIONS,
    kubernetes: KUBERNETES_QUESTIONS,
    system_design: SYSTEM_DESIGN_QUESTIONS,
    devops: DEVOPS_QUESTIONS,
    cicd: CICD_QUESTIONS,
    ci_cd: CICD_QUESTIONS,
    python: PYTHON_QUESTIONS,
    django: DJANGO_QUESTIONS,
    
};