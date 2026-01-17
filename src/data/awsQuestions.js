export const AWS_QUESTIONS = [

/* =====================================================
   BASIC – 20 QUESTIONS
===================================================== */

{
  id: "aws-b-01",
  level: "Basic",
  q: "What is AWS?",
  a: "AWS (Amazon Web Services) is a cloud computing platform providing on-demand compute, storage, networking, and managed services."
},

{
  id: "aws-b-02",
  level: "Basic",
  q: "What are the main cloud service models?",
  a: "IaaS (EC2), PaaS (Elastic Beanstalk), SaaS (Amazon Connect, WorkDocs)."
},

{
  id: "aws-b-03",
  level: "Basic",
  q: "What is EC2?",
  a: "Elastic Compute Cloud provides resizable virtual servers in the cloud."
},

{
  id: "aws-b-04",
  level: "Basic",
  q: "What is S3?",
  a: "Simple Storage Service is an object storage service with high durability (99.999999999%)."
},

{
  id: "aws-b-05",
  level: "Basic",
  q: "What is IAM?",
  a: "Identity and Access Management controls user access, permissions, roles, and policies."
},

{
  id: "aws-b-06",
  level: "Basic",
  q: "IAM policy example?",
  answer: {
    summary: "Allows read-only access to S3.",
    codeTitle: "IAM Policy JSON",
    code: `{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["s3:GetObject"],
    "Resource": "arn:aws:s3:::my-bucket/*"
  }]
}`
  }
},

{
  id: "aws-b-07",
  level: "Basic",
  q: "What is AWS Region?",
  a: "A geographical area with multiple availability zones."
},

{
  id: "aws-b-08",
  level: "Basic",
  q: "What is an Availability Zone?",
  a: "An isolated data center within a region for fault tolerance."
},

{
  id: "aws-b-09",
  level: "Basic",
  q: "What is RDS?",
  a: "Relational Database Service provides managed relational databases like MySQL, PostgreSQL, Oracle."
},

{
  id: "aws-b-10",
  level: "Basic",
  q: "What is Lambda?",
  a: "AWS Lambda is a serverless compute service that runs code without provisioning servers."
},

{
  id: "aws-b-11",
  level: "Basic",
  q: "Lambda example?",
  answer: {
    summary: "Simple Java Lambda handler.",
    codeTitle: "Java Lambda",
    code: `public class HelloLambda {
  public String handleRequest(String input) {
    return "Hello " + input;
  }
}`
  }
},

{
  id: "aws-b-12",
  level: "Basic",
  q: "What is CloudWatch?",
  a: "Monitoring and logging service for AWS resources."
},

{
  id: "aws-b-13",
  level: "Basic",
  q: "What is VPC?",
  a: "Virtual Private Cloud allows isolated networking in AWS."
},

{
  id: "aws-b-14",
  level: "Basic",
  q: "Public vs Private subnet?",
  a: "Public has internet gateway access; Private does not."
},

{
  id: "aws-b-15",
  level: "Basic",
  q: "What is Auto Scaling?",
  a: "Automatically adjusts EC2 capacity based on demand."
},

{
  id: "aws-b-16",
  level: "Basic",
  q: "What is Elastic Load Balancer?",
  a: "Distributes traffic across multiple targets."
},

{
  id: "aws-b-17",
  level: "Basic",
  q: "What is CloudFormation?",
  a: "Infrastructure as Code service using templates."
},

{
  id: "aws-b-18",
  level: "Basic",
  q: "CloudFormation snippet?",
  answer: {
    summary: "Creates an S3 bucket.",
    codeTitle: "CloudFormation YAML",
    code: `Resources:
  MyBucket:
    Type: AWS::S3::Bucket`
  }
},

{
  id: "aws-b-19",
  level: "Basic",
  q: "What is Elastic Beanstalk?",
  a: "PaaS for deploying applications without managing infrastructure."
},

{
  id: "aws-b-20",
  level: "Basic",
  q: "What is AWS Free Tier?",
  a: "Allows limited free usage of AWS services for 12 months."
},

/* =====================================================
   INTERMEDIATE – 20 QUESTIONS
===================================================== */

{
  id: "aws-i-01",
  level: "Intermediate",
  q: "Difference between EC2 and Lambda?",
  a: "EC2 requires server management; Lambda is event-driven and serverless."
},

{
  id: "aws-i-02",
  level: "Intermediate",
  q: "What is S3 versioning?",
  a: "Maintains multiple versions of an object."
},

{
  id: "aws-i-03",
  level: "Intermediate",
  q: "What is NAT Gateway?",
  a: "Allows private subnet instances to access internet securely."
},

{
  id: "aws-i-04",
  level: "Intermediate",
  q: "What is Security Group?",
  a: "Stateful virtual firewall for EC2."
},

{
  id: "aws-i-05",
  level: "Intermediate",
  q: "Security Group vs NACL?",
  a: "SG is stateful; NACL is stateless."
},

{
  id: "aws-i-06",
  level: "Intermediate",
  q: "What is AWS CLI?",
  a: "Command-line tool to manage AWS services."
},

{
  id: "aws-i-07",
  level: "Intermediate",
  q: "AWS CLI example?",
  answer: {
    summary: "List S3 buckets.",
    codeTitle: "AWS CLI",
    code: `aws s3 ls`
  }
},

{
  id: "aws-i-08",
  level: "Intermediate",
  q: "What is Elastic IP?",
  a: "Static public IPv4 address."
},

{
  id: "aws-i-09",
  level: "Intermediate",
  q: "What is Route 53?",
  a: "DNS and traffic routing service."
},

{
  id: "aws-i-10",
  level: "Intermediate",
  q: "What is SNS?",
  a: "Simple Notification Service for pub/sub messaging."
},

{
  id: "aws-i-11",
  level: "Intermediate",
  q: "What is SQS?",
  a: "Simple Queue Service for message queuing."
},

{
  id: "aws-i-12",
  level: "Intermediate",
  q: "SNS vs SQS?",
  a: "SNS is pub/sub; SQS is point-to-point."
},

{
  id: "aws-i-13",
  level: "Intermediate",
  q: "What is DynamoDB?",
  a: "Fully managed NoSQL key-value database."
},

{
  id: "aws-i-14",
  level: "Intermediate",
  q: "What is read replica?",
  a: "Read-only copy of RDS for scaling reads."
},

{
  id: "aws-i-15",
  level: "Intermediate",
  q: "What is Multi-AZ?",
  a: "High availability deployment across AZs."
},

{
  id: "aws-i-16",
  level: "Intermediate",
  q: "What is EBS?",
  a: "Elastic Block Store for EC2 persistent storage."
},

{
  id: "aws-i-17",
  level: "Intermediate",
  q: "EBS vs S3?",
  a: "EBS is block storage; S3 is object storage."
},

{
  id: "aws-i-18",
  level: "Intermediate",
  q: "What is Blue-Green deployment?",
  a: "Two environments used for zero-downtime deployments."
},

{
  id: "aws-i-19",
  level: "Intermediate",
  q: "What is CloudTrail?",
  a: "Tracks AWS API activity for auditing."
},

{
  id: "aws-i-20",
  level: "Intermediate",
  q: "What is cost optimization in AWS?",
  a: "Right-sizing, reserved instances, autoscaling."
},

/* =====================================================
   ADVANCED – 10 QUESTIONS
===================================================== */

{
  id: "aws-a-01",
  level: "Advanced",
  q: "How do you design a highly available system in AWS?",
  a: "Use Multi-AZ, ELB, Auto Scaling, Route 53 health checks."
},

{
  id: "aws-a-02",
  level: "Advanced",
  q: "How does IAM role differ from IAM user?",
  a: "Roles are assumed dynamically; users are long-term identities."
},

{
  id: "aws-a-03",
  level: "Advanced",
  q: "Explain eventual consistency in S3.",
  a: "Read-after-write consistency for new objects; eventual for overwrite/delete."
},

{
  id: "aws-a-04",
  level: "Advanced",
  q: "How do you secure secrets in AWS?",
  a: "Use Secrets Manager or Parameter Store."
},

{
  id: "aws-a-05",
  level: "Advanced",
  q: "What is serverless architecture?",
  a: "Uses managed services like Lambda, API Gateway, DynamoDB."
},

{
  id: "aws-a-06",
  level: "Advanced",
  q: "How does API Gateway integrate with Lambda?",
  a: "Triggers Lambda via REST or HTTP APIs."
},

{
  id: "aws-a-07",
  level: "Advanced",
  q: "What is AWS Well-Architected Framework?",
  a: "Best practices across reliability, security, performance, cost, sustainability."
},

{
  id: "aws-a-08",
  level: "Advanced",
  q: "How do you handle disaster recovery?",
  a: "Backup, pilot light, warm standby, multi-region."
},

{
  id: "aws-a-09",
  level: "Advanced",
  q: "How does AWS handle scaling for Lambda?",
  a: "Automatically scales concurrency based on events."
},

{
  id: "aws-a-10",
  level: "Advanced",
  q: "How do you optimize AWS costs at enterprise scale?",
  a: "Savings Plans, spot instances, monitoring unused resources."
}

];
