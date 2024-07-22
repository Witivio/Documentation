# Infrastructure Services

Witivio relies on several "first-party" components and services such as the Microsoft Teams platform and Microsoft Azure.  
In addition the Witivio platform uses several "second-party" or "third-party" services, especially:
- Microsoft Azure Devops is our source code repository platform and issue tracking tool. [Learn more...](https://azure.microsoft.com/en-usr/services/devops/)
- As Witivio is not in the business of storing or processing payments, all payments made to Witivio goes through our partner, Chargebee. [Learn more...](https://chargebee.com/)

## Microsoft Teams

Witivio relies on the [Microsoft Teams extensibility platform](https://docs.microsoft.com/en-us/microsoftteams/platform/) to automate governance, bring business solutions and integrate LoB and CRM apps seamlessly into Microsoft Teams.  
Microsoft Teams is a chat-based workspace in Office 365 that integrates with the apps and services that people use to get work done together.  

Especially, Witivio leverages the following Microsoft Teams extensibility components:

| Service | Role |
|---------|------|
| Embedded web experiences with Tabs | Witivio brings 5 custom tabs to meet specific audiences expectations and requirements |
| Bots in Microsoft Teams | Witivio intelligent assistant relies on the Microsot Bot Framework and is fully integrated with Microsoft Teams to bring a seamless experience across devices, desktop and mobile |
| Adaptive Cards | Witivio bot brings actionable notifications through [Adaptive Cards](https://adaptivecards.io/) |
| Microsoft Graph | Secure and cross-platform authentication with Azure AD. Cross-functional features across the whole Office 365 suite through the Microsoft Graph unified programmability model.
| Messaging Extensions (Search & Share) | Search for any objects right from conversations |
| Messaging Extensions (Custom Actions) | Initiate actions from conversations |
| Deep links | Initiate conversation based on business processes |

## Microsoft Azure

The Witivio Platform relies entirely on the Microsoft Azure platform.

::: tip
Witivio uses Microsoft Azure cloud services. The SaaS and PaaS infrastructure are 100% managed by Microsoft.
Witivio does not manage any VMs or OS and have any low-level access.
:::

Here is a summary of the key architecture components involved:

<!-- | Azure Traffic Manager | Azure Traffic Manager is a DNS-based traffic load balancer that enables us to distribute traffic optimally to services across global Azure regions, while providing high availability and responsiveness. We're using it to increase application availability, improve application performance and perform service maintenance without downtime. [Learn more...](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview) | -->

| Service | Role |
|---------|------|
| Azure Front Door | Azure Front Door is a global, scalable entry-point that uses the Microsoft global edge network to create fast, secure, and widely scalable web applications. [Learn more...](https://docs.microsoft.com/en-us/azure/frontdoor) |
| Azure App Service | The Witivio Platform is hosted in Azure App Service, enabling vertical and horizontal scale-up based on application needs and reach high availability. [Learn more...](https://docs.microsoft.com/en-us/azure/app-service/) |
| Azure Application Insights | Application Insights is an extensible Application Performance Management (APM). We're using it to monitor our live production environments, gather telemetry such as performance counters, Azure diagnostics and diagnostic trace logs. [Learn more...](https://docs.microsoft.com/en-us/azure/application-insights/app-insights-overview) |
| Azure Cosmos DB | Azure Cosmos DB is a globally distributed, multi-model database service that supports document, key-value, wide-column, and graph databases. The Witivio Platform relies on it as the main back-end data store. [Learn more...](https://docs.microsoft.com/en-us/azure/cosmos-db/)
| Azure SQL Database | Azure SQL Database is an intelligent, scalable, relational database service built for the cloud. Optimize performance and durability with automated, AI-powered features that are always up to date. With serverless compute and Hyperscale storage options that automatically scale resources on demand. [Learn more...](https://azure.microsoft.com/en-us/products/azure-sql/database/)
| Azure Key Vault | Microsoft Azure Key Vault is a cloud-hosted management service that allows the Witivio Platform to encrypt keys and small secrets by using keys that are protected by hardware security modules (HSMs). The Witivio Platform relies on it to store securely its encryption keys. [Learn more...](https://docs.microsoft.com/en-us/azure/key-vault/) |
| Azure Blob Storage | Azure Blob Storage is a massively scalable object storage for unstructured data that allows the Witivio Platform to store securely blobs contents such as images. [Learn more...](https://azure.microsoft.com/en-us/services/storage/blobs/) |
| Azure Bot Service | Bot Service is a comprehensive conversational AI development environment for designing conversational AI experiences. [Learn more...](https://azure.microsoft.com/en-us/services/bot-services/) |
| Azure Service Bus | Azure Service Bus is a fully managed enterprise integration message broker. This cloud messaging service enables reliable and secure communication between applications and services even when they are located in diverse environments. [Learn more...](https://azure.microsoft.com/en-us/services/service-bus/) |
| Azure Communication Service | Azure Communication Services is a cloud-based communications service that lets to add voice, video, chat, and telephony. [Learn more...](https://azure.microsoft.com/en-us/services/communication-services/) |
| Azure PostgreSQL | Azure Database for PostgreSQL is a relational database service based on the open-source Postgres database engine. [Learn more...](https://azure.microsoft.com/en-us/products/postgresql) |
| Azure OpenAI Service | Azure OpenAI Service provides access to OpenAI's powerful models, including GPT-3, Codex, and DALL-E, integrating cutting-edge AI capabilities into a wide range of applications. [Learn more...](https://azure.microsoft.com/en-us/services/openai-service) |

::: tip
Learn more about [Azure Data Residency](/trust-center/data-management-practices/#data-residency) from our [Data Management Practices](/trust-center/data-management-practices/) page
:::

## Microsoft Azure Data

Witivio uses Microsoft's SaaS Azure Storage, Azure CosmosDB and Azure PostgreSQL services for data storage (data and backup).
* Encryption in Transit
* Encryption at Rest
* Storage Analytics
* Cross-Origin Resource Sharing (CORS)
* Hash-based message authentication code (HMAC) for authorization
* Active directory integration (RBAC)
* Regional failovers
* Local replication
* 99.99% availability SLA
* Automated online backups
* Restore deleted data
* Monitor for attacks
* Microsoft Respond to attacks
* HTTPS/SSL/TLS encryption
* Encryption at rest


## Microsoft Azure DevOps

| Security Measures | Description |
|:-----------------:|-------------|
| HTTPS | All data received from and sent to GitHub is encrypted in transit. |
| Verified Domains | You can verify the domains controlled by your organization to confirm your organization's identity on GitHub. Organization owners are be able to verify the identity of organization members by viewing each member's email address within the verified domain. |
| 2FA | Access to our private repository requires two-factor authentication for everyone in the Witivio organization. [Learn more...](https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) |
| Protected Branches | Protected branches ensure that collaborators on our repositories cannot make irrevocable changes to branches. Enabling protected branches also allows us to enable other optional checks and requirements, like required status and security checks and required reviews. Moreover, deployment to production environments requires at leats two human validation steps. [Learn more...](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) |
| Security Alerts | GitHub automatically tracks public vulnerabilities in packages from supported languages on MITRE's Common Vulnerabilities and Exposures (CVE) List, and use a combination of machine learning and human review to detect vulnerabilities that are not published in the CVE list. |

::: tip
Learn more about [Azure DevOps Security](https://docs.microsoft.com/en-us/azure/devops/organizations/security/about-security-identity).  
:::

## Chargebee

| Security Measures | Description |
|:-----------------:|-------------|
| HTTPS | All data received from and sent to Chargebee is encrypted in transit. |
| Platform Security | Chargebee has been audited by a PCI-certified auditor and is certified to [PCI Service Provider Level 1](http://www.visa.com/splisting/searchGrsp.do?companyNameCriteria=chargebee). This is the most stringent level of certification available in the payments industry. To accomplish this, we make use of best-in-class security tools and practices to maintain a high level of security at Chargebee. |
| Compliance | Witivio integration with Chargebee follows the [Chargebee Integration Security Guide](https://www.chargebee.com/security/pci/). |

::: tip
Learn more about [Chargebee Security](https://www.chargebee.com/security)
:::

## Google map

| Security Measures | Description |
|:-----------------:|-------------|
| HTTPS | All data received from and sent to Google Map is encrypted in transit. |
| Platform Security | Google has been audited by a PCI-certified auditor and is certified to [PCI Service Provider Level 1](http://www.visa.com/splisting/searchGrsp.do?companyNameCriteria=google). This is the most stringent level of certification available in the payments industry. To accomplish this, we make use of best-in-class security tools and practices to maintain a high level of security at Google. |
| Compliance | Witivio integration with Google follows the [Google Integration Security Guide](https://cloud.google.com/security/compliance). |

::: tip
Learn more about [Google Security](https://cloud.google.com/security/compliance)
:::

<Classification label="public" />

<Intercom />
<Clarity />
<GoogleAnalytics />