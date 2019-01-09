{
    "quiz": {
        "name": "Exam 2",
        "logo" : "assets/img/VPC.png",
        "time":"120 minutes"
    },
    "questions": [
      {
        "Id": 1,
        "Name": "You require the ability to analyze a large amount of data which is stored on Amazon S3 using Amazon Elastic MapReduce. You are using the cc2.8xlarge instance type, whose CPUs are mostly idle during processing. Which of the below would be the most cost efficient way to reduce the runtime of the job?", 
        "Tag":"???",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create fewer, larger files m Amazon S3.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use smaller instances that have higher aggregate I/O performance.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create more, smaller files on Amazon S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add additional cc2.8xlarge instances by introducing a task group.", "IsAnswer": false }]
    } 
 
    ,
     {
        "Id": 2,
        "Name": "You are designing a connectivity solution between on-premises infrastructure and Amazon VPC. Your servers on-premises will be communicating with your VPC instances. You will be establishing IPsec tunnels over the Internet. You will be using VPN gateways, and terminating the IPsec tunnels on AWS supported customer gateways. Which of the following objectives would you achieve by implementing an IPsec tunnel as outlined above? Choose 4 answers", 
        "Tag":"CloudMigration",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Peer identity authentication between VPN gateway and customer gateway.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "End-to-end identity authentication.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Data integrity protection across the Internet.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "End-to-end protection of data in transit.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Data encryption across the Internet.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Protection of data in transit over the Internet.", "IsAnswer": true }]
    } 
   
    ,
     {
        "Id": 3,
        "Name": "Your company policies require encryption of sensitive data at rest. You are considering the possible options for protecting data while storing it at rest on an EBS data volume, attached to an EC2 instance. Which of these options would allow you to encrypt your data at rest? Choose 3 answers", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Implement third party volume encryption tools", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Implement SSL/TLS for all services running on the server", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Encrypt data inside your applications before storing it on EBS", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Encrypt data using native data encryption drivers at the file system level", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Do nothing as EBS volumes are encrypted by default", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 4,
        "Name": "You are designing a social media site and are considering how to mitigate distributed denial-of- service (DDoS) attacks. Which of the below are viable mitigation techniques? Choose 3 answers", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Dedicated Instances to ensure that each Instance has the maximum performance possible.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Add alerts to Amazon CloudWatch to look for high Network In and CPU utilization.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create processes and capabilities to quickly add and remove rules to the instance OS firewall.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use an Elastic Load Balancer with auto scaling groups at the web, app, and Amazon Relational Database Service (RDS) tiers.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Use an Amazon CloudFront distribution for both static and dynamic content.", "IsAnswer": true },
            { "Id": 1060, "QuestionId": 1010, "Name": "Add multiple elastic network Interfaces (ENIs) to each EC2 instance to Increase the network bandwidth.", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 5,
        "Name": "You currently operate a web application in the AWS US-East region. The application runs on an auto- scaled layer of EC2 instances and an RDS Multi-AZ database. Your IT security compliance officer has tasked you to develop a reliable and durable logging solution to track changes made to your EC2, IAM, and RDS resources. The solution must ensure the integrity and confidentiality of your log data. Which of these solutions would you recommend?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create a new CloudTrail trail with one new S3 bucket to store the logs. Configure SNS to send log file delivery notifications to your management system. Use IAM roles and S3 bucket policies on the S3 bucket that stores your logs.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a new CloudTrail trail with an existing S3 bucket to store the logs and with the global services option selected. Use S3 ACLs and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a new CloudTrail trail with one new S3 bucket to store the logs and with the global services option selected. Use IAM roles, S3 bucket policies, and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create three new CloudTrail trails with three new S3 buckets to store the logs: one for the AWS Management Console, one for AWS SDKs, and one for command line tools. Use IAM roles and S3 bucket policies on the S3 buckets that store your logs.", "IsAnswer": false }]
    } ,
     {
        "Id": 6,
        "Name": "You have an application running on an EC2 instance which will allow users to download files from a private S3 bucket using a pre-signed URL. Before generating the URL, the application should verify the existence of the file in S3. How should the application use AWS credentials to access the S3 bucket securely?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use the AWS account access keys; the application retrieves the credentials from the source code of the application.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create an IAM role for EC2 that allows list access to objects In the S3 bucket; launch the Instance with the role, and retrieve the role's credentials from the EC2 instance metadata.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM user for the application with permissions that allow list access to the S3 bucket; the application retrieves the IAM user credentials from a temporary directory with permissions that allow read access only to the Application user.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an IAM user for the application with permissions that allow list access to the S3 bucket; launch the instance as the IAM user, and retrieve the IAM user's credentials from the EC2 instance user data.", "IsAnswer": false }],
            "Explanation": "Best practices are to always use IAM Roles with EC2 instances. See link for more info",
            "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html"
    } 
    ,
     {
        "Id": 7,
        "Name": "A benefits enrollment company is hosting a 3-tier web application running in a VPC on AWS which includes a NAT (Network Address Translation) instance in the public Web tier. There is enough provisioned capacity for the expected workload for the new fiscal year benefit enrollment period plus some extra overhead. Enrollment proceeds nicely for a few days and then the web tier becomes unresponsive. Upon investigation using CloudWatch and other monitoring tools it is discovered that there is an extremely large and unanticipated amount of inbound traffic coming from a set of 15 specific IP addresses over port 80 from a country where the benefits company has no customers. The web tier instances are so overloaded that benefit enrollment administrators cannot even SSH into them. Which activity would be useful in defending against this attack?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Change the EIP (Elastic IP Address) of the NAT instance in the Web tier subnet and update the Main Route Table with the new EIP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create 15 Security Group rules to block the attacking IP addresses over port 80", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a custom route table associated with the Web tier and block the attacking IP addresses from the IGW (Internet Gateway)", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an inbound NACL (Network Access Control List) associated with the Web tier subnet with deny rules to block the attacking IP addresses", "IsAnswer": true }],
            "Explanation":"See link for more info",
            "Ref":"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_NACLs.html"
    } 
    ,
     {
        "Id": 8,
        "Name": "You are designing an SSL/TLS solution that requires HTTPS clients to be authenticated by the Web server using client certificate authentication. The solution must be resilient. Which of the following options would you consider for configuring the Web server infrastructure? Choose 2 answers", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure your Web servers as the origins for a CloudFront distribution. Use custom SSL certificates on your CloudFront distribution.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure ELB with TCP listeners on TCP/443, and place the Web servers behind it.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure your Web servers with EIPs. Place the Web servers in a Route53 Record Set, and configure health checks against all Web servers.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure ELB with HTTPS listeners, and place the Web servers behind it.", "IsAnswer": true }],
            "Explanation":"TCP/443 or HTTPS listener either way you can configure, but you can only upload ssl certificate on HTTPS listener."
    } 
     ,
    {
        "Id": 9,
        "Name": "CloudFormation supports the creation of wait conditions so that certain provision steps can be executed upon a condition being met elsewhere.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"See link for information.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html"
    },
    
    {
        "Id": 10,
        "Name": "When a CloudFormation stack provisioning error occurs, it will:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Rollback (delete) any provisioned resources.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Provisioned resources will continue to run, and will need to be manually removed.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Continue provisioning the remaining resources and notify of the error that occurred.", "IsAnswer": false }],
        "Explanation":"Failed stack creation will result in a rollback of all provisioned resources, including those that were created successfully. You will be charged for any resources created.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html"
    },
    {
        "Id": 11,
        "Name": "Which of the following can be used to output data from Cloud Formation?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Fn:GetAtt", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Fn:Get", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Func:GetAtt", "IsAnswer": false }]
    },
    {
        "Id": 12,
        "Name": "Elastic Beanstalk is a good tool for sys admins who do not have much AWS experience.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": false }],
        "Explanation":"Elastic Beanstalk is a good tool for Developers who do not have much AWS experience."
    },
    {
        "Id": 13,
        "Name": "When updating the application or configuration in an Elastic BeanStalk environment what will the impact to the environment be ?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Elastic Beanstalk gives Dev or Ops control over the rate of changes. Where possible AWS builds and cuts over to the new service before deleting the old service. The update starts immediately on submission of the instruction.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "All code releases and configuration changes require a short but complete outage as the traffic is shifted from the old environment to the new.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Beanstalk gives Dev or Ops control over the time and rate of changes. Where possible AWS builds and cuts over to the new service before deleting the old service.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Beanstalk gives Dev or Ops control over the rate of changes. Where possible AWS builds and cuts over to the new service before deleting the old service. The update starts immediately on submission of the instruction. However the update can submitted in a 'suspended' state and left released at an appropriate time.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Like CloudFormation, all application and configuration updates are seamless and non impacting", "IsAnswer": false }],
        "Explanation":"Elastic Beanstalk offers a number of important controls to avoid business impact of code pushes. However it is still the responsibility of the individual to ensure that the timing is appropriate and the impact is understood.",
        "Ref" :"http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-updating.html"
    },
    {
        "Id": 14,
        "Name": "What Opswork terminology would you use to refer to your database in the context of your application.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Stack", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Layer", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Template", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Section", "IsAnswer": false }]
    },
    {
        "Id": 15,
        "Name": "CloudFormation does not have built-in support for provisioning the application layer.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"CloudFormation does have support for Chef and Puppet which allows you to provision your application layer. It also has the ability to utilise the bootstrap scripts for EC2 instance provisioning.",
        "Ref" :"https://aws.amazon.com/cloudformation/aws-cloudformation-articles-and-tutorials/"
    },
    {
        "Id": 16,
        "Name": "You cannot create multiple VPC's within one CloudFormation Template", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
    },
    {
        "Id": 17,
        "Name": "A CloudFormation Template is:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "A collection of provisioned resources in AWS which you can copy.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "A plan for what resources make up a CloudFormation stack.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "A collection of provisioned resources in AWS.", "IsAnswer": false }]
    },
    {
        "Id": 18,
        "Name": "You are the AWS specialist in a small development company. At 4pm on Friday you are called in to an urgent meeting where you have been advised that your team needs to demonstrate a working POC to an important customer at noon on Monday. A key feature the app needs to demonstrate is to scale to manage massive traffic as a result of a blitz advertising campaign involving; radio, social media and TV to cover as many demographics as possible. The development team say that they can have the app and load generating rig ready by Monday morning. However they will need multiple environments for testing plus the final one to running the demo. They say that they will need need a fast scaling web & app server farms, DynamoDB, ElastiCache, SQS, load balancers and an RDS database. What is your plan to deliver these in the time provided ?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Ask the development team to mock up the development environments on their workstations using the workstation version of DynamoDB. Advise that you will work through the night to build a small DynamoDB instance and the fleets of EC2 instances with all the necessary security and associate them with a Load Balancer. This will be available late Saturday for testing. Negotiate to have the 4 hours before the demo on Monday to refresh the environment, build a full sized version of the DynamoDB & RDS instances and load the new App on the servers.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Propose that the development team to hold off until you work through the night to build a CloudFormation definition of the required environments. Provide that environment to the dev team as a test lab while you copy the Template, AMIs, and sample data to other regions to use as alternate test platforms. Ask the team to deploy to 'Master' instances that you can image into a fully functional AMI to be used for incremental testing and as the basis of the finally Launch Configuration for the Demo version.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Set up a set of IAM accounts for the developers. Use the Console to create Elastic Beanstalk environments with the standard elements, and reference CloudFormation templates for non-standard resources. Teach the dev leads to push the app build from Git to the Elastic Beanstalk and spin up test instances with all the core services identified as needed. Work in parallel with the dev team to build basic security using VPC Security Groups & network ACLs. Two hours before demo time freeze one of the stable test environments and walk your spokesperson through the demo.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Set up a set of IAM accounts for the developers. Use the Console to create Elastic Beanstalk environments with the standard elements, and hand craft the non-standard resources definitions as YAML config files. Teach the dev leads to push the App build from Git to the Elastic Beanstalk and spin up test instances with all the core services identified as needed. Work in parallel with the dev team to build basic security using VPC Security Groups & network ACLs. Two hours before demo time freeze one of the stable test environments and walk your spokesperson through the demo.", "IsAnswer": true }],
        "Explanation":"Know the right tool for the job. Empower people to do those tasks they can.",
        "Ref" :"https://www.slideshare.net/AmazonWebServices/aws-january-2016-webinar-series-managing-your-infrastructure-as-code"
    },
    {
        "Id": 19,
        "Name": "Using CloudFormation you MUST ensure that the order of provisioning is set in your script, or the stack will fail to be provisioned.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"CloudFormation will automatically work out the provisioning order based on dependencies for each resource.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"
    },
    {
        "Id": 20,
        "Name": "Elastic Beanstalk does not support running multiple environments for a single application.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
    },
    {
        "Id": 21,
        "Name": "CloudFormation allows you to script the AWS code.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"CloudFormation allows you to script your AWS infrastructure as code. You don't have access to the AWS's underlying code."
    },
    {
        "Id": 22,
        "Name": "When configuring consolidated billing, the root/paying account should not... (Select all that apply) (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "be configured to use a different payment method to the linked accounts.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "have unused AWS credits.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "be used to provision AWS services such as EC2 instances.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "have a root account that hasn't had MFA configured.", "IsAnswer": true }],
        "Explanation":"The paying account in a consolidated billing configuration should only be used for managing billing and should have Multi-Factor Authentication configured on the root account.",
        "Ref":"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"
    },
    {
        "Id": 23,
        "Name": "In configuring Cross Account Access, which of the following presents the the necessary steps in the correct order?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an IAM Role with cross account access, grant user access to the role, create a custom policy, apply custom policy to the role and note down ARN, and switch to the role.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a custom policy, create an IAM Role with cross account access, apply custom policy to the role and note down ARN, grant user access to the role, and switch to the role.", "IsAnswer": true }],
        "Explanation":"The custom policy needs to be created before the role, so that that the policy is available to be applied to the role.",
        "Ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html"
    },
    {
        "Id": 24,
        "Name": "If you have a total Reserved Instances footprint of 32 made up of two M3.2xLarge, which two of the following modification requests would be valid? (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Three M3.xlarge instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Four M4.xlarge instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Eight M3.large instances", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Sixteen M3.medium instances", "IsAnswer": true }],
        "Explanation":"The footprint of the modification request should be equal to the footprint of the original Reserved Instances footprint and the instances should be of the same family as the original reserved instances. The size of the footprint is measured in units and is calculated using the Normalization factors for each instance size.",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modification-instancemove.html"
    },
    {
        "Id": 25,
        "Name": "You can configure AWS CloudTrail at the paying account level by configuring an S3 bucket and configuring CloudTrail on linked accounts to put logs in the paying account's S3 bucket.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 26,
        "Name": "What is a tag used for in AWS? Select all that apply. (Choose 3)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Tags help you to identify the price of an AWS offering.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Tags are used to name a resource in AWS", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Tags are a key-value pair used to identify resources on AWS.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Tags can be used to group resources in AWS by department (e.g. development, testing)", "IsAnswer": true }],
        "Explanation":"Tags are a multi-purpose method for tracking and labelling resources across the AWS offerings. They are in the form of key-value pairs and can either be manually assigned or automatically assigned by other services such as Elastic Beanstalk."
    },
    {
        "Id": 27,
        "Name": "You have Reserved Instances of type M3.large running RedHat. You submit a modification request to change your reserved instances to two M3.medium and it's rejected. Why?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "You have not calculated the footprint of your reserved instances correctly meaning the request is not compatible.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "You cannot modify a reserved instance type running the platform RedHat.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "The instance family M3 does not have a medium size offering.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "You have mistakenly put through a request which asks for a modification between instance families.", "IsAnswer": false }],
        "Explanation":"Reserved instance modifications are only available for linux type instances excluding RedHat and SUSE.",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html"
    },
    {
        "Id": 28,
        "Name": "You require compute resources to run an application server for an ongoing basis. What is the most cost-effective EC2 pricing option for this job?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "On-Demand Instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Spot Instances + On-Demand Instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Reserved Instances (3 year contract)", "IsAnswer": true }],
        "Explanation":"For servers that need to be available all the time and will be continuously running at a known capacity, reserved instances will be the most cost-effective pricing option."
    },
    {
        "Id": 29,
        "Name": "The M3 and M4 instance families are memory optimised instances for use in memory intensive scenarios.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"M3 and M4 are the main general purpose compute instance families. The R3 instance family is a memory optimised instance type. An easy way to remember this is to remember that the 'R' in R3 stands for RAM."
    },
    {
        "Id": 30,
        "Name": "From the consolidated billing paying account you can provision services such as EC2 instances in one of the linked accounts.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Consolidated billing is not concerned with provisioning of AWS services in linked accounts and you cannot provision services on the linked accounts from the paying account."
    },
    {
        "Id": 31,
        "Name": "You are in charge of managing the AWS resources used within your company. One of the requirements is that you are able to identify all the resources being used by different teams such as development, and quality assurance teams. How would you achieve this?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "By having each of the teams assign a tag (eg. Department: Development) to any resource they provision and then configuring a resource group to see all resources with that tag.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "By requiring each team keep a detailed spreadsheet of each resource ARN they maintain and submit it daily to you via email.", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "By enabling CloudTrail and running monitoring on the logs to find out which IAM user has provisioned each resource so they can be matched up to a team directory which is kept in a database.", "IsAnswer": false}],
        "Explanation":"Resource Groups are an easy way to view related resources and the results can also be exported in CSV format for use in external systems."
    },
    {
        "Id": 32,
        "Name": "Tag editor can be used to find untagged resources and to quickly and easily manage tags across the entire AWS account.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"The tag editor is a helpful tool to centrally manage the tags assigned to resources in your AWS account. This is especially useful for finding resources that are untagged or for making bulk-changes to tags."
    },
    {
        "Id": 33,
        "Name": "You require compute resources to perform a once-off processing of a large dataset which has to be processed within a week. What is the most appropriate cost-effective EC2 pricing option for this job?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "On-Demand Instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Spot Instances + On-Demand Instances", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Reserved Instances (3 year contract)", "IsAnswer": false }],
        "Explanation":"Spot instances are a cost-effective option for once-off compute requirements and can be accompanied with on-demand instances if there is a time-requirement."
    },
    {
        "Id": 34,
        "Name": "AWS Import/Export can be used to export data from which of the following?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "S3, EBS and Glacier", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "S3 and Glacier", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "S3 only", "IsAnswer": true }],
        "Explanation":"Data that requires exporting will need to be moved to S3 first. Note that Import/Export SnowBall has slightly different options from Import/Export Disk",
        "Ref":"https://aws.amazon.com/documentation/importexport/"
    },
    {
        "Id": 35,
        "Name": "Storage Gateway traffic can be throttled.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"See link for information",
        "Ref":"https://aws.amazon.com/storagegateway/faqs/"
    },
    {
        "Id": 36,
        "Name": "The Warm Standby DR strategy involves:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Creating all the required infrastructure resources on AWS in response to a failure.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Maintaining a separate complete production-ready replica of your system.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Creating and running a production replica on minimal hardware including database replica and instances and scaling it up in the event of a failure to use for production.", "IsAnswer": true }],
        "Explanation":"The Warm Standby DR strategy is a quicker response time due to the always running (warm) backup system. This offers better RTO and RPO than the Pilot Light and Backup and Restore strategies.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-disaster-recovery.pdf"
    },
    {
        "Id": 37,
        "Name": "When using AWS Import/Export to export from a versioned S3 bucket, all versions will be exported.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Only the most recent version will be exported from S3 using AWS Import/Export.",
        "Ref":"https://aws.amazon.com/snowball/disk/"
    },
    {
        "Id": 38,
        "Name": "Snapshots can be created of your gateway-cached and gateway-stored volumes.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 39,
        "Name": "RDS snapshots in a multi-AZ configuration are taken from which of the following?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Primary database instance", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Secondary database instance", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Either the primary, or secondary database instance depending on which is under the least load", "IsAnswer": false }],
        "Explanation":"Multi-AZ database snapshots are always taken from the secondary instance to avoid placing IO load on the primary instance."
    },
    {
        "Id": 40,
        "Name": "Virtual tape storage retrieval is always instantaneous", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Virtual tape storage retrieval is only instantaneous for Virtual Tape Library retrievals. Virtual Tape Shelf retrievals can take up to 24 hours."
    },
    {
        "Id": 41,
        "Name": "Read replicas are available across different regions for which of the following?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "MySQL only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "MariaDB only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "PostgreSQL only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "SQL Server only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "PostgreSQL and MariaDB only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "MariaDB and MySQL only", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "MySQL and PostgreSQL", "IsAnswer": false }],
        "Explanation":"AWS is constantly upgrading services. At this time Read Replica Across Regions are only available for MySQL and MariaDB.",
        "Ref":"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html"
    },
    {
        "Id": 42,
        "Name": "You can force an RDS Multi-AZ failover by rebooting one of the instances.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"Forcing a failover can be done by restarting the primary instance via either the console or the RebootDBInstance API call.",
        "Ref":"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html"
    },
    {
        "Id": 43,
        "Name": "If you delete an RDS instance, all backups will be deleted.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Only automated backups will be deleted if you delete an RDS instance, manual backups will be retained."
    },
    {
        "Id": 44,
        "Name": "If you require a tape storage solution which supports unlimited virtual tapes, what service would you use?", 
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "A virtual tape shelf", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "A virtual tape library", "IsAnswer": false }],
        "Explanation":"Virtual tape shelves are stored on Amazon Glacier and allow you to have unlimited virtual tapes. Virtual Tape Libraries are stored on Amazon S3 and support up to 1500 Virtual Tapes."
    },
    {
        "Id": 46,
        "Name": "Which of the following best describes the Recovery Time Objective (RTO) ?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "The amount of time it takes to recover a file from Amazon Glacier Storage.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The amount of time Amazon guarantees to repair outages in the event of the loss of an availability zone.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The amount of time that it takes for your business to recover from an outage or disruption.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "The maximum period of time in which data might be lost from an IT service due to a major incident", "IsAnswer": false }],
        "Explanation":"RTO can include the time to fix the problem without a recovery, the recovery itself, testing and communication to users."
    },
    {
        "Id": 47,
        "Name": "The Pilot Light strategy will usually include a database server and AMI's as it's core.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"A replicated database would be kept in AWS to use in the event of an onsite failure and AMI's for application servers or webhosts."
    },
    {
        "Id": 48,
        "Name": "Vertical scaling is preferred for a Warm Standby DR strategy.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Horizontal scaling is preferred as it avoids the need for downtime while restarting instances in a vertical scaling setup."
    },
    {
        "Id": 49,
        "Name": "RDS allows you to replicate your data by: (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Creating a snapshot of your database", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Saving a database export to Amazon S3 using the console", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Creating a read replica running in another region", "IsAnswer": true }],
        "Explanation":"",
        "Ref":""
    },
    {
        "Id": 50,
        "Name": "In addition to the base on-premise system requirements, which of the following does the gateway-stored volume require you to have?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Enough local storage to hold the amount of cache that you require plus an amount of storage as an upload buffer.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "An equal amount of storage as that of your entire dataset plus an upload buffer.", "IsAnswer": true }]
    },
    {
        "Id": 51,
        "Name": "How much times does retrieval from Amazon Glacier take?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "less than 1 hour maximum", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "2 - 4 hours", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "3 - 12 hours", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "3 or more hours", "IsAnswer": true }],
        "Explanation":"Amazon Glacier data retrievals typically take 3 - 5 hours but can take longer than that.",
        "Ref":"https://aws.amazon.com/glacier/faqs/#data-retrievals"
    },
    {
        "Id": 52,
        "Name": "Using which of the following can you scale an RDS instance?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Setting up read replicas of your database", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configuring your database to be multi-AZ", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "By adding new RDS instances and always writing to both databases from your application", "IsAnswer": false }],
        "Explanation":"Read replicas leverage built-in database engine data replication functionality to scale elastically for read-heavy applications. If write performance is the limitation you will need to look at upgrading to a larger instance size, or sharding, or a different solution. Multi-AZ will improve fault tolerance but will not improve performance.",
        "Ref":"https://aws.amazon.com/rds/details/read-replicas/"
    },
    {
        "Id": 53,
        "Name": "Multi-AZ is one type of database scaling.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Multi-AZ is not a form of database scaling. It is a mechanism for data redundancy only."
    },
    {
        "Id": 54,
        "Name": "Which of the following best describes the Recovery Point Objective (RPO)?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "The amount of time that it takes for your business to recover from an outage or disruption.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "A standards compliant point value which indicates the risk of having to perform a recovery due to a disruption.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The maximum time between a disruption and the most recent data recovery point.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The maximum duration of time of which data might be lost from an IT service due to an incident.", "IsAnswer": true }],
        "Explanation":"How much data can your organisation lose? One hour, A day, none at all?",
        "Ref":"https://media.amazonwebservices.com/AWS_Disaster_Recovery.pdf"
    },
    {
        "Id": 55,
        "Name": "RDS automated backups are available for MySQL only if you are not using InnoDB", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"RDS automated backups for MySQL are only available if you are using InnoDB"
    },
    {
        "Id": 56,
        "Name": "Backup and Restore is the least expensive DR scenario", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"Backup and Restore is the least expensive way.  However it results the largest RTO and RPO for your business.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-disaster-recovery.pdf"
    },
    {
        "Id": 57,
        "Name": "if you create a volume from an EC2 incremental snapshots,it will contain the base snapshot data plus any incremental changes up to that point in time.", 
        
        "Options": [
               { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"Snapshots are incremental. See link for further information",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html"
    },
    {
        "Id": 58,
        "Name": "If you need to backup 500PB of on-premises data to Amazon S3, the best transfer options are: (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "HTTP upload to S3 via the API", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "AWS Import/Export Disk", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS Direct Connect", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "AWS Snowball", "IsAnswer": true }],
        "Explanation":"For large data backups to S3, AWS Import/Export Disk or Snowball is going to be the cheapest and potentially the fastest option.",
        "Ref":"https://aws.amazon.com/blogs/aws/aws-importexport-snowball-transfer-1-petabyte-per-week-using-amazon-owned-storage-appliances/"
    },
    {
        "Id": 59,
        "Name": "RDS Multi-AZ data replication is", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Synchronous", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Asynchronous", "IsAnswer": false }],
        "Explanation":"Multi-AZ replication is always synchronous unlike cross region read replicas which are asynchronous.",
        "Ref":"https://aws.amazon.com/rds/details/multi-az/"
    },
    {
        "Id": 60,
        "Name": "ElastiCache snapshots will degrade performance on your cache cluster.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"The entire cluster is snapshotted and therefore performing a snapshot will degrade performance and should be done during the least busy period."
    },
    {
        "Id": 61,
        "Name": "AWS DynamoDB does not allow you to replicate data across regions.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"DynamoDB does allow you to replicate data across regions using streams. See the link for more information.",
        "Ref":"http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.CrossRegionRepl.html"
    },
    {
        "Id": 62,
        "Name": "What are the hardware requirements for your Storage Gateway on-premise hardware?(Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "4vCPUs, 7.5GB of RAM, 75GB VM image and system data", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "8vCPUs, 4GB of RAM, 75GB VM image and system data", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "4vCPUs, 7.5GB of RAM, 50GB VM image and system data", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "8vCPUs, 7.5GB of RAM, 75GB VM image and system data", "IsAnswer": true }],
        "Explanation":"On-premise Storage Gateway Virtual Machine requirements are 4 or 8vCPUs, 7.5GB of RAM and 75GB of VM image and system data storage."
    },
    {
        "Id": 63,
        "Name": "S3 standard storage provides a durability of:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "99.99%", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "99.9999%", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "99.999999999%", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "99.99999999999%", "IsAnswer": false }],
        "Explanation":"Objects are stored redundantly across multiple devices within a region to provide a high level of durability.",
        "Ref":"https://aws.amazon.com/s3/faqs/"
    },
    {
        "Id": 64,
        "Name": "Your company has an on-premises, multi-tier PHP web application, which recently experienced downtime due to a large burst in web traffic due to a company announcement. Over the coming days, you're expecting similar announcements to drive similar unpredictable bursts, and are looking to find ways to quickly improve your infrastructures ability to handle unexpected increases in traffic. The application currently consists of 2 tiers: A web tier, which consists of a load balancer and several Linux Apache web servers, as well as a database tier, which hosts a Linux server hosting a MySQL database. Which scenario below will provide full site functionality, while helping to improve the availability of your application in the short timeframe required?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Failover environment: Create an S3 bucket and configure it for website hosting. Migrate your DNS to Route53 using zone file import, and leverage Route53 DNS failover to failover to the S3 hosted website.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Hybrid environment: Create an AMI, which can be used to launch web servers in EC2. Create an Auto Scaling group, which uses the AMI to scale the web tier based on incoming traffic. Leverage Elastic Load Balancing to balance traffic between on-premises web servers and those hosted In AWS.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Offload traffic from on-premises environment: Setup a CIoudFront distribution, and configure CloudFront to cache objects from a custom origin. Choose to customize your object cache behavior, and select a TTL that objects should exist in cache.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Migrate to AWS: Use VM Import/Export to quickly convert an on-premises web server to an AMI. Create an Auto Scaling group, which uses the imported AMI to scale the web tier based on incoming traffic. Create an RDS read replica and setup replication between the RDS instance and on-premises MySQL server to migrate the database.", "IsAnswer": false }],
        "Explanation":"You can have CloudFront sit in front of your on-prem web environment, via a custom origin (the origin doesn’t have to be in AWS). This would protect against unexpected bursts in traffic by letting CloudFront handle the traffic that it can out of cache, thus hopefully removing some of the load from your on-prem web servers."
    },
    {
        "Id": 65,
        "Name": "An AWS customer runs a public blogging website. The site users upload two million blog entries a month. The average blog entry size is 200 KB. The access rate to blog entries drops to negligible 6 months after publication and users rarely access a blog entry 1 year after publication. Additionally, blog entries have a high update rate during the first 3 months following publication, this drops to no updates after 6 months. The customer wants to use CloudFront to improve his user's load times. Which of the following recommendations would you make to the customer?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Duplicate entries into two different buckets and create two separate CloudFront distributions where S3 access is restricted only to CloudFront identity.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a CloudFront distribution with 'US/Europe' price class for US/Europe users and a different CloudFront distribution with 'All Edge Locations' for the remaining users.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a CloudFront distribution with Restrict Viewer Access, Forward Query String set to true and minimum TTL of 0.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a CloudFront distribution with S3 access restricted only to the CloudFront identity and partition the blog entry's location in S3 according to the month it was uploaded to be used with CloudFront behaviors.", "IsAnswer": true }]
    },
    {
        "Id": 66,
        "Name": "A large real-estate brokerage is exploring the option of adding a cost-effective location based alert to their existing mobile application. The application backend infrastructure currently runs on AWS. Users who opt in to this service will receive alerts on their mobile device regarding real- estate offers in proximity to their location. For the alerts to be relevant delivery time needs to be in the low minute count. The existing mobile app has 5 million users across the US. Which one of the following architectural suggestions would you make to the customer?", 
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "The mobile application will send device location using SQS, EC2 instances will retrieve the relevant offers from DynamoDB. AWS Mobile Push will be used to send offers to the mobile application.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use AWS DirectConnect or VPN to establish connectivity with mobile carriers. EC2 instances will receive the mobile applications location through earner connection; RDS will be used to store and retrieve relevant offers. EC2 instances will communicate with mobile carriers to push alerts back to the mobile application.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "The mobile application will submit its location to a web service endpoint utilizing Elastic Load Balancing and EC2 instances. DynamoDB will be used to store and retrieve relevant offers. EC2 instances will communicate with mobile carriers/device providers to push alerts back to mobile application.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "The mobile application will send device location using AWS Mobile Push, EC2 instances will retrieve the relevant offers from DynamoDB. EC2 instances will communicate with mobile carriers/device providers to push alerts back to the mobile application.", "IsAnswer": false }],
        "Explanation":"AWS using SQS to store the message from mobile apps,and using AWS Mobile Push to send offers to mobile apps."
    },
    {
        "Id": 67,
        "Name": "You are running a news website in the eu-west-1 region that updates every 15 minutes. The website has a world-wide audience. It uses an Auto Scaling group behind an Elastic Load Balancer and an Amazon RDS database. Static content resides on Amazon S3, and is distributed through Amazon CloudFront. Your Auto Scaling group is set to trigger a scale up event at 60% CPU utilization. You use an Amazon RDS extra large DB instance with 10,000 Provisioned IOPS, its CPU utilization is around 80%, while freeable memory is in the 2 GB range. web analytics reports show that the average load time of your web pages is around 1.5 to 2 seconds, but your SEO consultant wants to bring down the average load time to under 0.5 seconds. How would you Improve page load times for your users? Choose 3 answers", 
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure Amazon CloudFront dynamic content support to enable caching of re-usable content from your site.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Set up a second installation in another region, and use the Amazon Route 53 latency-based routing feature to select the right region.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Lower the scale up trigger of your Auto Scaling group to 30% so it scales more aggressively.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Add an Amazon ElastiCache caching layer to your application for storing sessions and frequent DB queries.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Switch the Amazon RDS database to the high memory extra large instance type.", "IsAnswer": false }],
        "Explanation":"To speed up load times leverage caching. Also configuring Amazon CloudFront dynamic content will help with caching. Reducing the scaling threshold to 30% will help with aggressivley scaling but wont help with improving page load times. Also the RDS instance is pretty large and optimally utilized so changing the RDS instance wont help much. Instead a second installation in another region will help since the audience for the website is global."
    }
    ]
}

