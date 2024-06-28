# Green Center

## Understanding the Green Center Deployment Model

### The Nature of Green Center: A Customized, Client-Hosted Solution

The Green Center, an innovative solution developed by Witivio, stands out from typical Software as a Service (SaaS) applications due to its unique deployment and operational model. Contrary to the standard SaaS framework, the Green Center is not a pre-packaged, cloud-based application hosted on Witivio's infrastructure. Instead, it represents a bespoke solution, intricately tailored to meet the specific requirements of each client.

::: tip Note
The Green Center is not a standard SaaS app; it is a customized solution developed specifically for each client's needs.
:::

### Customization Process: Tailoring to Client Specifications

The journey of implementing the Green Center begins with a detailed specifications phase. During this critical period, Witivio collaborates closely with the client to understand their unique needs and operational challenges. This collaborative approach ensures that the final product is not just a generic software application, but a solution that is intricately aligned with the client’s specific objectives and operational context.

::: tip Note
Customization is key - the Green Center is shaped and refined based on a thorough understanding of each client's specific requirements.
:::

### Hosting Model: Leveraging Microsoft Azure’s Capabilities

Once customized, the Green Center is deployed, not on Witivio’s servers, but within the client’s own Microsoft Azure subscription. This approach underscores a fundamental shift from the traditional SaaS model. By hosting the solution on their Azure environment, clients maintain complete control over their data and the application. This aspect is crucial for organizations prioritizing data sovereignty, compliance with regulatory requirements, and a higher degree of control over their software environments.

::: tip Note
Hosting on Microsoft Azure - Clients host the Green Center on their own Azure subscription, ensuring full control and data sovereignty.
:::

### Operational Responsibility: In the Client's Hands

A significant aspect of the Green Center's deployment model is the shift of operational responsibility to the client. Witivio does not oversee the run-time operations of the Green Center post-deployment. Instead, the client assumes full responsibility for the operation, management, and maintenance of the application within their Azure environment.

::: tip Note
Operational Control - Clients are responsible for the operation and maintenance of the Green Center, ensuring autonomy and customization in its management.
:::

### Summary

In conclusion, the Green Center by Witivio is a paradigm shift from traditional SaaS applications. Its customization process, hosting on client's Microsoft Azure subscription, and the transfer of operational responsibilities to the client, all contribute to a model that prioritizes customization, control, and client-centricity. This model reflects a deep understanding of the diverse needs of modern organizations and Witivio's commitment to delivering solutions that are not just powerful but also profoundly aligned with each client's unique operational landscape.

We understand that our customers need to be confident using Green Center, and be aware of our data collection practices.

:::  tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Green Center access, processes and stores several kind of data:

- Mail
- Personnal Onedrive
- User profile
- CO2 impact

Here is how we're managing data for these different categories:

| Data Type               | Accessed | Read | Downloaded | Cached | Stored | Backup | Deletion Policy | Notes |
|-------------------------|:--------:|:----:|:----------:|:------:|:------:|:------:|:---------------:|-------|
| Mail                    | ✔        | 🚫   | 🚫         | 🚫     | 🚫     | 🚫     | ✔               | Includes subject, recipient, body preview, received date, and email URL. No content reading, storage, caching, or downloading. |
| Personal OneDrive File  | ✔        | 🚫   | 🚫         | 🚫     | 🚫     | 🚫     | ✔               | Includes ID, creation/modification dates, filename, URL, size, parent folder, mimetype, drive type, site ID, and version list. |
| File Preview in Teams   | ✔        | ✔    | 🚫         | 🚫     | 🚫     | 🚫     | N/A             | Files previewed only in Teams, without server transfer or downloading. |
| Teams File              | 🚫       | 🚫   | 🚫         | 🚫     | 🚫     | 🚫     | N/A             | No access, reading, downloading, caching, or backup. |
| SharePoint File         | 🚫       | 🚫   | 🚫         | 🚫     | 🚫     | 🚫     | N/A             | No access, reading, downloading, caching, or backup. |
| User                    | ✔        | Partial| 🚫       | 🚫     | ✔      | 🚫     | ✔               | Includes AAD ID, score, carbon footprint, shared links count, and storage size. UPN and Name not accessed. |
| Shared File             | ✔        | 🚫   | 🚫         | ✔      | ✔      | 🚫     | ✔               | Access every 60 minutes for shared file count. Data is stored and cached. |
| User Profiles           | ✔        | ✔    | 🚫         | ✔      | ✔      | 🚫     | ✔               | Accessed and updated after each login. Stored as long as the organization is active. |

**CO2 Calculation:** The CO2 equivalent of Mega octets is configurable during the personalization phase.

**Deletion Policy:** Users can delete elements. A long-running process deletes items like mail and files. 


## Microsoft Graph

| Scope                      | Description                                                                             | Justification                                                                                                                                                                                                                               | Admin Consent Required |
| -------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------: |
| `User.Read`                | Retrieve the properties and relationships of user object.                               | **Allows Green Center to read user information and to display it in the UI.**                                                                                                                                                             |           No           |
| `email`                    | Gives the app access to the user's primary email address in the form of the email claim |                                                                                                                                                                                                                                             |           No           |
| `openid`                   | Used to sign in with OpenID Connect                                                     |                                                                                                                                                                                                                                             |           No           |
| `offline_access`           | Gives thee app access to resources on behalf of the user for an extended time.          | When a user approves the offline_access scope, Green Center can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. Green Center can get new access tokens as older ones expire. |           No           |
| `profile`                  | Gives the app access to basic information about the user in the claims.                 |                                                                                                                                                                                                                                             |           No           |
| `Files.ReadWrite.All`      | Allows the app to read, create, update, and delete all files the signed-in user can access. | **Green Center needs this scope to manage files on behalf of the user, including deleting documents in user’s OneDrive and SharePoint.** Essential for document management features. |           Yes          |
| `Mail.ReadWrite`           | Allows the app to create, read, update, and delete email in user’s mailbox. Does not include permission to send mail. | **This scope is crucial for Green Center to interact with user's email, such as deleting emails.** Useful for integrating email-based workflows and alerts. |           Yes          |
| `Reports.Read.All`         | Allows the app to read service usage reports on behalf of the signed-in user.             | **Enables Green Center to access and generate reports on service usage.** Important for analytics and monitoring purposes. |           Yes          |
| `TeamsActivity.Send`       | Allows the app to send channel messages on behalf of the signed-in user.                 | **This scope allows Green Center to send messages to Teams channels.** Enhances team collaboration by automating notifications and updates. |           Yes          |
| `User.Read.All`            | Allows the app to read user profiles of all users in your organization.                  | **Necessary for Green Center to access and manage user profiles organization-wide.** Essential for user management and directory services. |           Yes          |

## Microsoft Graph endpoints

### Endpoint 1: Azure AD User Search
- **Endpoint:** `https://graph.microsoft.com/v1.0/user`
- **Functionality:** This endpoint is instrumental in searching for users within Azure Active Directory (AAD). It allows for the retrieval of user details, aiding in user management and verification processes.
- **Security Implications:** Regularly querying this endpoint can help in monitoring and auditing user access, ensuring that only authorized individuals have access to sensitive resources.

### Endpoint 2: Duplicate File Management
- **Endpoint:** `https://graph.microsoft.com/v1.0/me/drive/items`
- **Functionality:** This endpoint assists in identifying and deleting duplicate files in a user's drive. By maintaining a streamlined file system, it aids in efficient data management and reduces unnecessary data storage.
- **Security Implications:** Duplicate files can sometimes contain sensitive information; their removal mitigates the risk of data leaks or unauthorized access.

### Endpoint 3: Shared File Insights
- **Endpoint:** `https://graph.microsoft.com/v1.0/me/insights/share`
- **Functionality:** It provides insights into files shared by the user, useful for generating statistics and monitoring data distribution.
- **Security Implications:** Keeping track of shared files is crucial for preventing data breaches and ensuring compliance with data sharing policies.

### Endpoint 4: Email Deletion in Outlook
- **Endpoint:** `https://graph.microsoft.com/v1.0/me/mailFolders('DeletedItems')/messages`
- **Functionality:** Enables listing and cleaning emails in the Outlook 'Deleted Items' folder, helping maintain a tidy mailbox and ensuring that sensitive information is permanently removed.
- **Security Implications:** Permanent deletion of emails from the 'Deleted Items' folder is a critical step in protecting sensitive information from being recovered or misused.

### Endpoint 5: Management of Unread Emails
- **Endpoint:** `https://graph.microsoft.com/v1.0/me/mailFolders/inbox/messages`
- **Functionality:** Lists unread emails and provides the option to delete them. This helps in managing inbox overload and focusing on relevant emails.
- **Security Implications:** Unread emails, especially those from unknown sources, can be potential security threats. Their management is key to maintaining email security.

### Endpoint 6: Data Storage Usage
- **Endpoint:** `https://graph.microsoft.com/v1.0/me/drive?$select=quota`
- **Functionality:** This endpoint is useful for reading data storage usage statistics, aiding in data management and planning for storage needs.
- **Security Implications:** Monitoring data storage usage is crucial for identifying unusual spikes that may indicate a security breach or data leakage.

### Endpoint 7: Item Version Management
- **Endpoint:** `https://graph.microsoft.com/v1.0/drives/{DriveId}/items/{ItemId}/versions`
- **Functionality:** Allows retrieval and deletion of different versions of a drive item, crucial for maintaining the integrity and relevance of data.
- **Security Implications:** Managing item versions helps in protecting against unauthorized changes and tracking the history of sensitive documents.

### Endpoint 8: Teamwork Notification
- **Endpoint:** `https://graph.microsoft.com/v1.0/users/{ReceiverAadId}/teamwork/sendActivityNotification`
- **Functionality:** Sends notifications to a user, useful for sending invitations to join a team or for other collaborative activities.
- **Security Implications:** Timely notifications enhance collaborative security, ensuring that team members are promptly informed about important updates and activities.

## Microsoft Graph limits

In addition, Microsoft Graph apply another algorithm (token bucket) based on the complexity of the request. The maximum number of requests applies based [on the number of users in the tenant](https://learn.microsoft.com/en-us/graph/throttling-limits#pattern).

All the limits are available [here](https://learn.microsoft.com/en-us/graph/throttling-limits)


## Architecture and flow diagram

![Green Center architecture](/assets/img/green-architecture.png)

The image depicts a flow diagram that illustrates the interaction between various components when a user starts an application within Microsoft Teams. Here is the described flow:

1. **User Interaction with Teams Application:**
   - The user initiates the application within Microsoft Teams, which is the starting point of the interaction.

2. **Identity Validation:**
   - Teams and Azure Active Directory (AAD) work together to validate the user's identity through Single Sign-On (SSO). This is a security measure to ensure that the user is who they claim to be.

3. **Information Retrieval via Microsoft Graph API:**
   - Once the user is authenticated, the application retrieves information about the authenticated user from the Microsoft Graph API, which is an interface that allows applications to access data within the Microsoft 365 platform.

4. **Application Rendering and Networking:**
   - The application is then rendered by the server, and network interactions occur through Azure's infrastructure. This includes Azure Front Door, which is a scalable and secure entry point for web applications, and a VNet, or virtual network, that provides isolation and routing for the application.

5. **Telemetry and Insights:**
   - Application Insights is utilized to gather runtime telemetry for error tracking and performance management, helping developers to monitor their applications and maintain service health.

6. **Secure Infrastructure Authentication:**
   - A user-assigned managed identity is used to authenticate against Azure services, allowing the application to access Azure resources securely without storing credentials in code.


## Microsoft Azure cost

The estimated monthly cost for up to **5000 active users** using various Azure services is approximately $800.00 per month. This estimation is based on **public prices** without including any support plans.
The breakdown of the monthly expenses is as follows:

- **Azure Functions**: $3.60 for consumption tier with pay-as-you-go pricing.
- **App Service**: $329.96 for Premium V2 Tier with 2 P2V2 instances (2 cores, 7 GB RAM, 250 GB storage).
- **Storage Accounts**: $20.43 for Block Blob Storage, General Purpose V2.
- **Azure Cosmos DB**: $29.20 for NoSQL database service.
- **Azure Front Door**: $41.03 for the Standard base instance.
- **Azure Virtual Network Manager**: $73.00 for one managed subscription for 730 hours.
- **Key Vault**: $0.03 for 10,000 operations with no advanced operations or renewals.
- **Azure Monitor**: $305.80 for log analytics with 1 GB daily data ingestion and 6 months retention.

These costs cover the essential services required to maintain and operate the Green Center app efficiently for up **to 5000 users**, ensuring reliable performance and security.

The detail is available [here](hhttps://azure.com/e/8e77a10428a84e8499e46e54947af9a6)

## Dependencies

### Client

| Name                                         | Version   | URL                                                       |
|----------------------------------------------|-----------|---------------------------------------------------------------|
| @azure/msal-browser                           | 2.30.0   | https://www.npmjs.com/package/@azure/msal-browser             |
| @fluentui/react-northstar                    | 0.64.0   | https://www.npmjs.com/package/@fluentui/react-northstar       |
| @microsoft/applicationinsights-react-js      | 3.4.0    | https://www.npmjs.com/package/@microsoft/applicationinsights-react-js |
| @microsoft/applicationinsights-web           | 2.7.0    | https://www.npmjs.com/package/@microsoft/applicationinsights-web |
| @microsoft/microsoft-graph-client            | 3.0.2    | https://www.npmjs.com/package/@microsoft/microsoft-graph-client |
| @microsoft/teams-js                          | 2.12.0   | https://www.npmjs.com/package/@microsoft/teams-js             |
| @microsoft/teamsfx                           | 2.0.0    | https://www.npmjs.com/package/@microsoft/teamsfx              |
| @types/react                                 | 17.0.62  | https://www.npmjs.com/package/@types/react                    |
| @types/react-dom                             | 17.0.20  | https://www.npmjs.com/package/@types/react-dom                |
| @types/react-router-dom                      | 5.3.3    | https://www.npmjs.com/package/@types/react-router-dom         |
| @witivio_teamspro/northstar-form             | 0.2.11   | https://www.npmjs.com/package/@witivio_teamspro/northstar-form |
| @witivio_teamspro/use-reducer                | 1.2.5    | https://www.npmjs.com/package/@witivio_teamspro/use-reducer   |
| axios                                        | 0.27.2   | https://www.npmjs.com/package/axios                           |
| copy-to-clipboard                            | 3.3.3    | https://www.npmjs.com/package/copy-to-clipboard               |
| env-cmd                                      | 10.1.0   | https://www.npmjs.com/package/env-cmd                         |
| history                                      | 5.3.0    | https://www.npmjs.com/package/history                         |
| image-conversion                             | 2.1.1    | https://www.npmjs.com/package/image-conversion                |
| moment                                       | 2.29.3   | https://www.npmjs.com/package/moment                          |
| postal-mime                                  | 1.0.15   | https://www.npmjs.com/package/postal-mime                     |
| react                                        | 17.0.2   | https://www.npmjs.com/package/react                           |
| react-dom                                    | 17.0.2   | https://www.npmjs.com/package/react-dom                       |
| react-quill                                  | 2.0.0    | https://www.npmjs.com/package/react-quill                     |
| react-router-dom                             | 6.4.0    | https://www.npmjs.com/package/react-router-dom                |
| react-scripts                                | 5.0.1    | https://www.npmjs.com/package/react-scripts                   |
| sass                                         | 1.45.0   | https://www.npmjs.com/package/sass                            |
| tinycolor2                                   | 1.6.0    | https://www.npmjs.com/package/tinycolor2                      |
| typescript                                   | 5.1.3    | https://www.npmjs.com/package/typescript                      |
| use-file-picker                              | 1.7.0    | https://www.npmjs.com/package/use-file-picker                 |

### Server

| Name                                                     | Version          | URL                                                                                                             | License |
|----------------------------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------|---------|
| AspNetCore.HealthChecks.Publisher.ApplicationInsights    | 6.0.2            | https://www.nuget.org/packages/AspNetCore.HealthChecks.Publisher.ApplicationInsights/                                 |         |
| AutoMapper                                               | 12.0.1           | https://www.nuget.org/packages/AutoMapper/                                                                            |         |
| AutoMapper.Extensions.Microsoft.DependencyInjection      | 12.0.1           | https://www.nuget.org/packages/AutoMapper.Extensions.Microsoft.DependencyInjection/                                     |         |
| Azure.Storage.Blobs                                      | 12.17.0          | https://www.nuget.org/packages/Azure.Storage.Blobs/                                                                   | MIT     |
| Azure.Storage.Files.Shares                               | 12.1.0           | https://www.nuget.org/packages/Azure.Storage.Files.Shares/                                                            | MIT     |
| Azure.Storage.Queues                                     | 12.15.0          | https://www.nuget.org/packages/Azure.Storage.Queues/                                                                  | MIT     |
| Microsoft.ApplicationInsights                            | 2.21.0           | https://www.nuget.org/packages/Microsoft.ApplicationInsights/                                                         | MIT     |
| Microsoft.ApplicationInsights.AspNetCore                 | 2.21.0           | https://www.nuget.org/packages/Microsoft.ApplicationInsights.AspNetCore/                                              | MIT     |
| Microsoft.ApplicationInsights.SnapshotCollector          | 1.4.4            | https://www.nuget.org/packages/Microsoft.ApplicationInsights.SnapshotCollector/                                       | MIT     |
| Microsoft.AspNetCore.OpenApi                             | 7.0.9            | https://www.nuget.org/packages/Microsoft.AspNetCore.OpenApi/                                                          | MIT     |
| Microsoft.AspNetCore.SpaProxy                            | 7.0.9            | https://www.nuget.org/packages/Microsoft.AspNetCore.SpaProxy/                                                         | MIT     |
| Microsoft.Azure.Cosmos                                   | 3.35.2           | https://www.nuget.org/packages/Microsoft.Azure.Cosmos/                                                                | MIT     |
| Microsoft.Extensions.Azure                               | 1.5.0            | https://www.nuget.org/packages/Microsoft.Extensions.Azure/                                                            | MIT     |
| Microsoft.Graph                                          | 5.19.0           | https://www.nuget.org/packages/Microsoft.Graph/                                                                       | MIT     |
| Microsoft.Identity.Web                                   | 2.13.0           | https://www.nuget.org/packages/Microsoft.Identity.Web/                                                                | MIT     |
| Microsoft.Identity.Web.MicrosoftGraph                    | 2.13.1           | https://www.nuget.org/packages/Microsoft.Identity.Web.MicrosoftGraph/                                                 | MIT     |
| Swashbuckle.AspNetCore                                   | 6.5.0            | https://www.nuget.org/packages/Swashbuckle.AspNetCore/                                                                |         |
| Microsoft.Azure.Functions.Worker                         | 1.18.0           | https://www.nuget.org/packages/Microsoft.Azure.Functions.Worker/                                                      | MIT     |
| Microsoft.Azure.Functions.Worker.ApplicationInsights     | 1.0.0-preview4   | https://www.nuget.org/packages/Microsoft.Azure.Functions.Worker.ApplicationInsights/                                  | MIT     |
| Microsoft.Azure.Functions.Worker.Extensions.EventHubs    | 5.5.0            | https://www.nuget.org/packages/Microsoft.Azure.Functions.Worker.Extensions.EventHubs/                                 | MIT     |
| Microsoft.Azure.Functions.Worker.Extensions.Storage      | 6.1.0            | https://www.nuget.org/packages/Microsoft.Azure.Functions.Worker.Extensions.Storage/                                   | MIT     |
| Microsoft.Azure.Functions.Worker.Extensions.Storage.Queues | 5.2.0          | https://www.nuget.org/packages/Microsoft.Azure.Functions.Worker.Extensions.Storage.Queues/                            | MIT     |
| Microsoft.Azure.Functions.Worker.Extensions.Timer        | 4.0.1            | https://www.nuget.org/packages/Microsoft.Azure.Functions.Worker.Extensions.Timer/                                     | MIT     |
| Microsoft.Azure.Functions.Worker.Sdk                     | 1.13.0           | https://www.nuget.org/packages/Microsoft.Azure.Functions.Worker.Sdk/                                                  | MIT     |
| Microsoft.Extensions.Logging.ApplicationInsights         | 2.21.0           | https://www.nuget.org/packages/Microsoft.Extensions.Logging.ApplicationInsights/                                      | MIT     |
| CsvHelper                                                | 30.0.1           | https://www.nuget.org/packages/CsvHelper/                                                                             |         |
| Microsoft.AspNetCore.Http                                | 2.2.2            | https://www.nuget.org/packages/Microsoft.AspNetCore.Http/                                                             | MIT     |
| Microsoft.Extensions.Configuration                       | 7.0.0            | https://www.nuget.org/packages/Microsoft.Extensions.Configuration/                                                    | MIT     |
| Microsoft.Extensions.Logging                             | 7.0.0            | https://www.nuget.org/packages/Microsoft.Extensions.Logging/                                                          | MIT     |
| Microsoft.Kiota.Http.HttpClientLibrary                   | 1.0.6            | https://www.nuget.org/packages/Microsoft.Kiota.Http.HttpClientLibrary/                                                | MIT     |

<Hubspot />
<Clarity />
<GoogleAnalytics />