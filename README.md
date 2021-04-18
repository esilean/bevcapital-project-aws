# BevCapital - The .Net Core AWS Project

This project is a case study of AWS services. It is a system of stock quotes from companies listed on the US stock exchange.
There are 3 independent microservices. There is a microservice to log the user on, another to register the stock shares, and a cronjob to get quotations on an external service.

Status: Refactoring ms-logon to use Lambda + DynamoDB + Cloud Watch Events

A microfrontend is in development...

### All parts of the this project

- https://github.com/esilean/bevcapital-mslogon
- https://github.com/esilean/bevcapital-msstocks
- https://github.com/esilean/bevcapital-jobstockprice

## AWS - All services uses AWS Cloudformation /intra/\*

- AWS API Gateway - Http + ALB or Rest + NBL
- AWS Application Load Balancer
- AWS Network Load Balancer
- AWS ECS - Clusters EC2
- AWS RDS - MySql
- AWS SNS/SQS - Event Sourcing
- AWS ElastiCache - Redis
- AWS CodePipeline
- AWS CodeBuild
- AWS CodeDeploy - Deploy CloudFormation
- AWS ECR
- AWS Secret Manager
- AWS X-Ray
- AWS CloudWatch - Metrics and Logs
- AWS Lambda
- AWS DynamoDB

## Techs

- ASP.NET Core 3.1
- Entity Framework Core 3.1
- .NET Core Native DI
- AutoMapper
- Circuit Breaker and Retry Patterns
- MediatR
- Swagger UI
- Serilog

## Architecture

- Event Sourcing
- Clean Architecture
- SOLID and Clean Code
- DDD
- CQRS
- Unit of Work
- Repository

## Devs

- Leandro Bevilaqua - https://github.com/esilean
