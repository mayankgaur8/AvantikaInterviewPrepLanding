// src/data/mcqRegistry.js

import { ANGULAR_MCQ } from "./mcqs/angularMcq";
import { AWS_MCQ } from "./mcqs/awsMcq";
import { AZURE_MCQ } from "./mcqs/azureMcq";
import { CICD_MCQ } from "./mcqs/cicdMcq";
import { CORE_JAVA_MCQ } from "./mcqs/coreJavaMcq";
import { DESIGN_PATTERNS_MCQ } from "./mcqs/designpatternsMcq";
import { DEVOPS_MCQ } from "./mcqs/devopsMcq";
import { DJANGO_MCQ } from "./mcqs/dijangoMcq";
import { DOCKER_MCQ } from "./mcqs/dockerMcq";
import { EJB_MCQ } from "./mcqs/ejbMcq";
import { GOOGLECLOUD_MCQ } from "./mcqs/googlecloudMcq";
import { HIBERNATE_MCQ } from "./mcqs/hibernateMcq";
import { JSP_MCQ } from "./mcqs/jspMcq";
import { KAFKA_MCQ } from "./mcqs/kafkaMcq";
import { KUBERNETES_MCQ } from "./mcqs/kubernetesMcq";
import { MICROSERVICES_MCQ } from "./mcqs/microservicesMcq";
import { PYTHON_MCQ } from "./mcqs/pythonMcq";
import { REACT_MCQ } from "./mcqs/reactMcq";
import {REST_MCQ} from "./mcqs/restMcq";

//import { REST_MCQ } from "./mcqs/";
import { SERVLETS_MCQ } from "./mcqs/servletsMcq";
import { SOAP_MCQ } from "./mcqs/soapMcq";
import { SPRING_MCQ } from "./mcqs/springMcq";
import { SPRINGBOOT_MCQ } from "./mcqs/springbootMcq";
import { SYSTEM_DESIGN_MCQ } from "./mcqs/systemdesignMcq";

export const MCQ_BY_TOPIC = {
  angular: ANGULAR_MCQ,
  aws: AWS_MCQ,
  azure: AZURE_MCQ,
  cicd: CICD_MCQ,
  core_java: CORE_JAVA_MCQ,
  design_patterns: DESIGN_PATTERNS_MCQ,
  devops: DEVOPS_MCQ,
  django: DJANGO_MCQ,
  docker: DOCKER_MCQ,
  ejb: EJB_MCQ,
  gcp: GOOGLECLOUD_MCQ,          // ✅ your topic id is gcp
  hibernate: HIBERNATE_MCQ,
  jsp: JSP_MCQ,
  kafka: KAFKA_MCQ,
  kubernetes: KUBERNETES_MCQ,
  microservices: MICROSERVICES_MCQ,
  python: PYTHON_MCQ,
  react: REACT_MCQ,
  rest: REST_MCQ,
  servlets: SERVLETS_MCQ,
  soap: SOAP_MCQ,
  spring: SPRING_MCQ,
  springboot: SPRINGBOOT_MCQ,
  system_design: SYSTEM_DESIGN_MCQ,
};
