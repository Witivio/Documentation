# Secure Development

## Secure Development Principles

We at Witivio know you care about how your personal information is used and shared, and we take your privacy seriously by implementing the most rigorous practices for our developments.

These best practices are gounded by the [OWASP Security Design Principles](https://www.owasp.org):
* Minimize attack surface area : The aim for secure development is to reduce the overall risk by reducing the attack surface area.
* Establish secure defaults: By default, the experience should be secure, and it should be up to the user to reduce their security - if they are allowed.
* Principle of Least privilege: The principle of least privilege recommends that accounts have the least amount of privilege required to perform their business processes. See [Microsoft Graph Permissions](./apppermissions) as an example.
* Principle of Defense in depth: The principle of defense in depth suggests that where one control would be reasonable, more controls that approach risks in different fashions are better.
* Fail securely: Applications regularly fail to process transactions for many reasons. How they fail can determine if an application is secure or not.
* Don't trust services: Many organizations utilize the processing capabilities of third party partners, who more than likely have differing security policies and posture than you. Therefore, implicit trust of externally run systems is not warranted. All external systems should be treated in a similar fashion.
* Separation of duties: Certain roles have different levels of trust than normal users. In particular, administrators are different to normal users. In general, administrators should not be users of the application.
* Avoid security by obscurity: Security through obscurity is a weak security control, and nearly always fails when it is the only control.
* Keep security simple: Developers should avoid the use of double negatives and complex architectures when a simpler approach would be faster and simpler.
* Fix security issues correctly: Once a security issue has been identified, it is important to develop a test for it, and to understand the root cause of the issue. When design patterns are used, it is likely that the security issue is widespread amongst all code bases, so developing the right fix without introducing regressions is essential.
* Secure Release Process: Aside from the Secure Development Principles, we're using several tools during our release process as a gateway before each release and deployment, to reduce risks and avoid common pitfalls.

## Development Stack

- **.NET 6 / 8**: A free, cross-platform, open-source developer platform for building various applications, ideal for robust back-end services.
- **C#**: A modern, object-oriented, and type-safe programming language used for its strong typing and powerful language features.
- **Microsoft Bot Framework **: Enables the building, testing, deploying, and managing of sophisticated chatbots, integral for interactive customer support solutions.
- **ASP.NET Core 6 / 8**: A high-performance, open-source framework for building modern, cloud-based, internet-connected applications.
- **TypeScript **: A strongly typed programming language that builds on JavaScript, enhancing the reliability and maintainability of client-side scripting.
- **React**: A JavaScript library for building user interfaces, known for its efficiency and flexibility in creating dynamic and responsive UIs.
- **HTML 5 / CSS 3**: Core technologies for building web pages, ensuring structurally sound and visually appealing interfaces.
- **Azure SaaS and PaaS**: Cloud services provided by Azure, including Software as a Service and Platform as a Service, used for deploying scalable, secure, and efficient cloud-based solutions.


## Microsoft Azure best practices

Witivio applies best practices in Web and Cloud development. 
During development, a code review process is applied at the end of each developed feature. The objective is to 
find potential bugs or vulnerabilities or to correct design errors in order to improve the quality, maintainability 
and security of the software.
[Microsoft Azure Architecture patterns]( https://docs.microsoft.com/en-us/azure/architecture/patterns/)

## Standard JavaScript Style

**[JavaScript Standard Style](https://standardjs.com)**

This module enforces JavaScript development best practices in different ways:
* Automatically format code: Ease code maintenance and prevents messy or inconsistent code.
* Catch style issues & programmer errors early: Save precious code review time by eliminating back-and-forth between reviewer & contributor, avoiding common style issues that may impact security.

Learn more about [Standard JavaScript Style](https://www.npmjs.com/package/standard#usage) and its [Enforced Rules](https://github.com/standard/standard/blob/HEAD/RULES.md)

## ESLint Security

This security plugin helps us to identify potential security hotspots during development, take proactive countermeasure and therefore enforce our security best practices.  

Learn more about [ESLint Security Plugin](https://github.com/nodesecurity/eslint-plugin-security) and [Security Rules](https://github.com/nodesecurity/eslint-plugin-security#rules)

## NPM Audit

This tool from [Node Package Manager](https://www.npmjs.com/) performs a moment-in-time security review of our project's dependency tree and looks for known vulnerabilities.  
Audit reports contain information about potential security vulnerabilities in our dependencies and helps us fix a potential vulnerability by providing recommendations for further troubleshooting.  

Learn more about [NPM Audit](https://docs.npmjs.com/cli/audit)


## Code Repositories

Witivio employs Microsoft Azure DevOps (formerly VSTS) for its repository hosting, provided by Microsoft. The management activities undertaken by Witivio include:
- Organization and tracking of tasks and work items.
- Source code management utilizing the Git Flow methodology.
- Integration of work items with source code tracking capabilities.
- Implementation of code reviews and testing for each pull request.
- Adoption of continuous integration and build processes, incorporating both unit tests and integration tests.
- Monitoring and tracking of releases in conjunction with work items.

### Code Branch Structure
Witivio's code branching strategy includes:
- A primary branch named 'Main'.
- Individual branches dedicated to specific features.
- Separate branches for each hotfix.

## Code review

![code review](/assets/img/pull-request.jpg)

## Deployment process

![Deployment process](/assets/img/deployment-process.jpg)

# Infrastructure as Code Implementation

## Azure DevOps: Script Management and Lifecycle

Azure DevOps is central to Witivio's Infrastructure as Code (IaC) strategy, providing a comprehensive platform for managing and maintaining infrastructure scripts.

### Key Features in Azure DevOps:

- **Version Control**: Ensures that all infrastructure scripts are subject to version control, providing a history of changes and facilitating rollback if needed.
- **Collaboration**: Facilitates team collaboration in the development, review, and deployment processes, enhancing script quality and efficiency.
- **Lifecycle Management**: Supports the complete lifecycle of infrastructure scripts, encompassing development, testing, deployment, and ongoing maintenance.

## Azure Bicep: Infrastructure Instantiation

Witivio utilizes Azure Bicep for the declarative deployment of Azure resources. This approach streamlines the process of defining and managing infrastructure.

### Implementation Strategy:

- **Script Development**: Infrastructure requirements are translated into Azure Bicep scripts, ensuring an accurate and efficient setup.
- **Instantiation Process**: These scripts are executed to instantiate Azure components, providing a consistent and repeatable method for environment setup.

## Manual Configurations

Beyond automated script deployment, Witivio also incorporates manual configurations for certain infrastructure components. These manual steps, necessary due to specific operational requirements or complexities, are well-documented and integrated into our standard deployment procedures.

Through the combination of Azure DevOps and Azure Bicep, along with strategic manual configurations, Witivio effectively implements an Infrastructure as Code model that enhances operational efficiency, maintains consistency, and ensures scalable management of IT infrastructure.

## Tools

Witivio employs a suite of development solutions primarily based on Microsoft's technology stacks. The development environment is supported by a variety of tools and integrated development environments (IDEs), including:

1. Visual Studio (Versions 2019 and 2022)
2. Visual Studio Code
3. Azure DevOps (formerly known as VSTS)
4. Bot Framework Emulator
5. Office 365 demo tenants for testing and development purposes
6. Azure Storage Emulator
7. Cosmos DB Emulator
8. Individual Azure accounts allocated to each developer
9. Azure Storage Explorer
10. PGAdmin for database management
11. Docker Desktop for containerization needs

These tools and resources are integral to the development process, providing a robust and versatile environment for software development and operational tasks.


<Classification label="public" />
<Intercom />
<Clarity />
<GoogleAnalytics />