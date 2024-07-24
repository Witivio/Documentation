# MetaOffice Pro

We understand that our customers need to be confident using MetaOffice Pro, and be aware of our data collection practices.

## tip Note

This section is subject to change and we recommend that you check back quarterly for updates.

## Data Management Practices

Through the implementation of its different features, MetaOffice Pro access, processes and stores several kind of data:

- Office configuration
- Video/Audio configuration
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Backup | Notes |
|------|:--------:|:------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ |🚫| Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Office Configuration | ✔ | ✔ | ✔ |🚫| Accessed and updated after creation of a tab.<br/>Stored as long as the organization is active. |
| Video / Audio configuration | ✔ | ✔ | ✔ |🚫| Accessed at each connection<br/>Stored as long as the organization is active. |
| User data | ✔ | 🚫 | ✔ |🚫| Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| User presence | ✔ | 🚫 | 🚫 |🚫| Users presence.<br/>Accessed at each time the user connect to an office. |
| Teams channel | ✔ | 🚫 | 🚫 |🚫| Name and unique ID of the channel.<br/>No cache.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 |🚫| No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 |🚫| No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope                      | Description                                                                             | Justification                                                                                                                                                                                                                               | Admin Consent Required |
| -------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------: |
| `Chat.ReadWrite`           | Read and write user chat messages.                                                      | **Allows an app to read and write 1 on 1 or group chats threads, on behalf of the signed-in user**                                                                                                                                          |           No           |
| `User.Read`                | Retrieve the properties and relationships of user object.                               | **Allows MetaOffice Pro to read user information and to display it in the UI.**                                                                                                                                                             |           No           |
| `OnlineMeetings.ReadWrite` | Create Teams meetings.                                                                  | **Allows MetaOffice Pro to create a Teams meeting when a user meet an other one.**                                                                                                                                                          |           No           |
| `Presence.Read.All`        | Retrieve the presence of a user.                                                        | **Allows MetaOffice Pro to read user presence and to display it in the UI.**                                                                                                                                                                |           No           |
| `Presence.ReadWrite`       | Retrieve and set the presence of a user.                                                | **Allows MetaOffice Pro to write the user presence.**                                                                                                                                                                                       |           No           |
| `Team.ReadBasic.All`       | Retrieve all Teams teams belongs to a user.                                             | **Allows MetaOffice Pro to read user teams and to display offices in the UI.**                                                                                                                                                              |           No           |
| `User.Read.All`            | Retrieve the properties and relationships of all user objects.                          | **Allows MetaOffice Pro to read user information and to display it in the UI.**                                                                                                                                                             |          Yes           |
| `TeamsActivity.Send`       | Send an activity feed notification in the scope of a team                               | **Allows MetaOffice to send a notification in the activity feed**                                                                                                                                                                           |           No           |
| `TeamMember.Read.All`      | Get the conversationMember collection of a team                                         | **Allows MetaOffice to get the list of member in the team where the office tab is installed**                                                                                                                                               |          Yes           |
| `email`                    | Gives the app access to the user's primary email address in the form of the email claim |                                                                                                                                                                                                                                             |           No           |
| `openid`                   | Used to sign in with OpenID Connect                                                     |                                                                                                                                                                                                                                             |           No           |
| `offline_access`           | Gives thee app access to resources on behalf of the user for an extended time.          | When a user approves the offline_access scope, MetaOffice Pro can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. MetaOffice Pro can get new access tokens as older ones expire. |           No           |
| `profile`                  | Gives the app access to basic information about the user in the claims.                 |                                                                                                                                                                                                                                             |           No           |

## Microsoft Graph limits

For some operation, Microsoft Graph limits apply for MetaOffice. This can have an impact on MetaOffice performance.

- MetaOffice can make 2000 calls per second, across all tenants.

- MetaOffice can create 2000 meetings per user per month.

- MetaOffice can retrieve the presence of 1500 users every 30 seconds, across all tenants.

- MetaOffice can send 5 notifications (activity) per second to a client, per tenant, or 50 per second all tenants.

- MetaOffice can retrieve the teams of 30 users per second for a client,per tenant, or 300 per second across all tenants.

- MetaOffice can retrieve the members of a team 60 times per second per tenant, or 1200 per second across all tenants.

In addition,Microsoft Graph apply another algorithm (token bucket) based on the complexity of the request. The maximum number of requests applies based [on the number of users in the tenant](https://learn.microsoft.com/en-us/graph/throttling-limits#pattern).

All the limits are available [here](https://learn.microsoft.com/en-us/graph/throttling-limits)

## Azure communication services

| Scope               | Description            | Justification                                                         | Admin Consent Required |
| ------------------- | ---------------------- | --------------------------------------------------------------------- | :--------------------: |
| `Teams.ManageCalls` | Manage calls in Teams. | **Allows MetaOffice Pro Create Teams Meeting in behalf of the user**  |           No           |
| `Teams.ManageChats` | Manage chats in Teams. | **Allows MetaOffice Pro to create group chat in behalf of the user.** |           No           |

::: tip
The Azure AD App ID is: **9fcafdeb-1249-4000-9e96-38e848a963d2**
:::

## Architecture and flow diagram

![MetaOffice Pro architecture](/assets/img/metaoffice-architecture.png)

## Resource Endpoints

All the traffic from and to the TeamsPro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name                                | Comments                             |
| ----------------------------------- | ------------------------------------ |
| metaoffice.teams-pro.com            | for the apps including help contents |
| .msecnd.net and \*.visualstudio.com | for performance metrics analysis     |

## Dependencies

### Server

| Name                                                                | Version | Url                                                                                                       | License                                                                               |
| ------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `AdaptiveCards.Templating`                                          | 1.3.1   | https://www.nuget.org/packages/AdaptiveCards.Templating                                                   | https://www.nuget.org/packages/AdaptiveCards.Templating/1.3.1/License                 |
| `AutoMapper.Extensions.microsoft.DependencyInjection`               | 11.0.0  | https://www.nuget.org/packages/AutoMapper                                                                 | https://licenses.nuget.org/MIT                                                        |
| `Azure.Communication.Identity`                                      | 1.2.0   | https://www.nuget.org/packages/Azure.Communication.Identity                                               | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Azure.WebJobs.Extensions.ServiceBus`                     | 5.2.0   | https://www.nuget.org/packages/Microsoft.Azure.WebJobs.Extensions.ServiceBus                              | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.NET.Sdk.Functions`                                       | 4.1.1   | https://www.nuget.org/packages/Microsoft.NET.Sdk.                                                         | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Azure.Functions.Extensions`                              | 1.1.0   | https://www.nuget.org/packages/Microsoft.Azure.Functions.Extensions                                       | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.DependencyInjection`                          | 6.0.1   | https://www.nuget.org/packages/Microsoft.Extensions.DependencyInjection                                   | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Http`                                         | 6.0.0   | https://www.nuget.org/packages/Microsoft.Extensions.Http                                                  | https://licenses.nuget.org/MIT                                                        |
| `Azure.Identity`                                                    | 1.7.0   | https://www.nuget.org/packages/Swashbuckle.AspNetCore                                                     | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Http.Polly`                                   | 6.0.15  | https://www.nuget.org/packages/Microsoft.Extensions.Http.Polly                                            | https://licenses.nuget.org/MIT                                                        |
| `Polly.Extensions.Http`                                             | 3.0.0   | https://www.nuget.org/packages/Polly.Extensions.Http                                                      | https://licenses.nuget.org/BSD-3-Clause                                               |
| `Polly`                                                             | 7.2.3   | https://www.nuget.org/packages/Polly                                                                      | https://licenses.nuget.org/BSD-3-Clause                                               |
| `System.Text.Json`                                                  | 7.0.1   | https://www.nuget.org/packages/System.Text.Json                                                           | https://licenses.nuget.org/MIT                                                        |
| `Azure.Messaging.ServiceBus`                                        | 7.13.1  | https://www.nuget.org/packages/Azure.Messaging.ServiceBus                                                 | https://licenses.nuget.org/MIT                                                        |
| `Azure.Security.KeyVault.Certificates`                              | 4.1.0   | https://www.nuget.org/packages/Azure.Security.KeyVault.Certificates                                       | https://licenses.nuget.org/MIT                                                        |
| `Azure.Security.KeyVault.Secrets`                                   | 4.1.0   | https://www.nuget.org/packages/Azure.Security.KeyVault.Secrets                                            | https://licenses.nuget.org/MIT                                                        |
| `FluentAssertions`                                                  | 6.11.0  | https://www.nuget.org/packages/FluentAssertions/7.0.0-alpha.1                                             | https://licenses.nuget.org/Apache-2.0                                                 |
| `IdentityModel`                                                     | 6.0.0   | https://www.nuget.org/packages/IdentityModel                                                              | https://licenses.nuget.org/Apache-2.0                                                 |
| `Microsoft.ApplicationInsights.AspNetCore `                         | 2.21.0  | https://www.nuget.org/packages/Microsoft.ApplicationInsights.AspNetCore/2.22.0-beta3                      | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.AspNet.Identity.Core `                                   | 2.2.4   | https://www.nuget.org/packages/Microsoft.AspNet.Identity.Core                                             | https://www.microsoft.com/web/webpi/eula/net_library_eula_ENU.htm                     |
| `Microsoft.AspNetCore.SignalR.Client `                              | 7.0.4   | https://www.nuget.org/packages/Microsoft.AspNetCore.SignalR.Client/8.0.0-rc.1.23421.29                    | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Azure.WebJobs.Extensions.ServiceBus `                    | 5.2.0   | https://www.nuget.org/packages/Microsoft.Azure.WebJobs.Extensions.ServiceBus                              | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Azure.WebJobs.Extensions.SignalRService `                | 1.9.0   | https://www.nuget.org/packages/Microsoft.Azure.WebJobs.Extensions.SignalRService                          | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Azure.WebJobs.Extensions.Storage.Queues `                | 5.1.0   | https://www.nuget.org/packages/Microsoft.Azure.WebJobs.Extensions.Storage.Queues                          | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.EntityFrameworkCore.Cosmos `                             | 6.0.10  | https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Cosmos/8.0.0-rc.1.23419.6                    | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.EntityFrameworkCore.SqlServer `                          | 6.0.10  | https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer/8.0.0-rc.1.23419.6                 | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.EntityFrameworkCore.Tools `                              | 6.0.10  | https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Tools/8.0.0-rc.1.23419.6                     | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Azure `                                       | 1.0.0   | https://www.nuget.org/packages/Microsoft.Extensions.Azure                                                 | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Caching.Abstraction `                         | 6.0.0   | https://www.nuget.org/packages/Microsoft.Extensions.Caching.Abstractions/8.0.0-rc.1.23419.4               | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Caching.Cosmos `                              | 1.4.0   | https://www.nuget.org/packages/Microsoft.Extensions.Caching.Cosmos                                        | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Configuration.Abstractions `                  | 6.0.0   | https://www.nuget.org/packages/Microsoft.Extensions.Configuration.Abstractions/8.0.0-rc.1.23419.4         | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Configuration.Binder `                        | 6.0.0   | https://www.nuget.org/packages/Microsoft.Extensions.Configuration.Binder/8.0.0-rc.1.23419.4               | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Configuration.CommandLine `                   | 7.0.0   | https://www.nuget.org/packages/Microsoft.Extensions.Configuration.CommandLine/8.0.0-rc.1.23419.4          | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Configuration.EnvironmentVariables `          | 7.0.0   | https://www.nuget.org/packages/Microsoft.Extensions.Configuration.EnvironmentVariables/8.0.0-rc.1.23419.4 | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Configuration.Json `                          | 7.0.0   | https://www.nuget.org/packages/Microsoft.Extensions.Configuration.Json/8.0.0-rc.1.23419.4                 | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Hosting `                                     | 7.0.1   | https://www.nuget.org/packages/Microsoft.Extensions.Hosting/8.0.0-rc.1.23419.4                            | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Logging.Abstractions `                        | 6.0.2   | https://www.nuget.org/packages/Microsoft.Extensions.Logging.Abstractions/8.0.0-rc.1.23419.4               | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Identity.Client `                                        | 4.47.2  | https://www.nuget.org/packages/Microsoft.Identity.Client                                                  | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Identity.Web `                                           | 1.25.5  | https://www.nuget.org/packages/Microsoft.Identity.Web                                                     | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Identity.Web.MicrosoftGraph `                            | 1.25.5  | https://www.nuget.org/packages/Microsoft.Identity.Web.MicrosoftGraph                                      | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.NET.Test.Sdk `                                           | 17.6.3  | https://www.nuget.org/packages/Microsoft.NET.Test.Sdk/17.8.0-preview-23424-02                             | https://www.nuget.org/packages/Microsoft.NET.Test.Sdk/17.8.0-preview-23424-02/License |
| `Microsoft.VisualStudio.Web.CodeGeneration.Design `                 | 6.0.10  | https://www.nuget.org/packages/Microsoft.VisualStudio.Web.CodeGeneration.Design/8.0.0-rc.1.23461.3        | https://licenses.nuget.org/MIT                                                        |
| `Moq `                                                              | 4.18.4  | https://www.nuget.org/packages/Moq                                                                        | https://licenses.nuget.org/BSD-3-Clause                                               |
| `Newtonsoft.Json`                                                   | 13.0.3  | https://www.nuget.org/packages/Newtonsoft.Json                                                            | https://licenses.nuget.org/MIT                                                        |
| `NSwag.CodeGeneration.CSharp `                                      | 13.18.2 | https://www.nuget.org/packages/NSwag.CodeGeneration.CSharp/14.0.0-preview006                              | https://licenses.nuget.org/MIT                                                        |
| `NUnit `                                                            | 3.13.3  | https://www.nuget.org/packages/NUnit                                                                      | https://www.nuget.org/packages/NUnit/3.13.3/License                                   |
| `NUnit3TestAdapter `                                                | 4.5.0   | https://www.nuget.org/packages/NUnit3TestAdapter                                                          | https://licenses.nuget.org/MIT                                                        |
| `OpenAI-DotNet `                                                    | 3.0.1   | https://www.nuget.org/packages/OpenAI-DotNet                                                              | https://licenses.nuget.org/MIT                                                        |
| `Azure.Storage.Blobs`                                               | 12.3.0  | https://www.nuget.org/packages/Azure.Storage.Blobs                                                        | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.AspNetCore.SpaProxy`                                     | 6.0.10  | https://www.nuget.org/packages/Microsoft.AspNetCore.SpaProxy                                              | https://licenses.nuget.org/MIT                                                        |
| `Azure.Communication.Identity`                                      | 1.2.0   | https://www.nuget.org/packages/Azure.Communication.Identity                                               | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.ApplicationInsights`                                     | 2.21    | https://www.nuget.org/packages/Microsoft.ApplicationInsights                                              | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.AspNetCore.Authentication.AzureAD.UI`                    | 6.0.10  | https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.AzureAD.UI                             | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Azure.SignalR`                                           | 1.18.3  | https://www.nuget.org/packages/Microsoft.Azure.SignalR                                                    | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Bot.Builder`                                             | 4.18.1  | https://www.nuget.org/packages/Microsoft.Bot.Builder                                                      | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Bot.Builder.Integration.AspNet.Core`                     | 4.18.1  | https://www.nuget.org/packages/Microsoft.Bot.Builder                                                      | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.EntityFrameworkCore`                                     | 6.0.10  | https://www.nuget.org/packages/Microsoft.EntityFrameworkCore                                              | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Extensions.Diagnostics.HealthChecks.EntityFrameworkCore` | 6.0.10  | https://www.nuget.org/packages/Microsoft.Extensions.Diagnostics.HealthChecks.EntityFrameworkCore          | https://licenses.nuget.org/MIT                                                        |
| `Microsoft.Graph`                                                   | 4.48.0  | https://www.nuget.org/packages/Microsoft.Graph                                                            | https://www.nuget.org/packages/Microsoft.Graph/5.11.0/License                         |
| `SendGrid`                                                          | 9.28    | https://www.nuget.org/packages/SendGrid                                                                   | https://licenses.nuget.org/MIT                                                        |
| `SkiaSharp`                                                         | 2.88.3  | https://www.nuget.org/packages/SkiaSharp                                                                  | https://github.com/mono/SkiaSharp/blob/main/LICENSE.md                                |
| `Swashbuckle.AspNetCore`                                            | 6.5.0   | https://www.nuget.org/packages/Swashbuckle.AspNetCore                                                     | https://licenses.nuget.org/MIT                                                        |
| `SpecFlow `                                                         | 3.9.74  | https://www.nuget.org/packages/SpecFlow/4.0.31-beta                                                       | https://www.nuget.org/packages/SpecFlow/4.0.31-beta/License                           |
| `System.Configuration.ConfigurationManager `                        | 6.0.1   | https://www.nuget.org/packages/System.Configuration.ConfigurationManager/8.0.0-rc.1.23419.4               | https://licenses.nuget.org/MIT                                                        |
| `System.IdentityModel.Tokens.Jwt `                                  | 6.27.0  | https://www.nuget.org/packages/System.IdentityModel.Tokens.Jwt                                            | https://licenses.nuget.org/MIT                                                        |
| `System.Text.Json `                                                 | 7.0.1   | https://www.nuget.org/packages/System.Text.Json/8.0.0-rc.1.23419.4                                        | https://licenses.nuget.org/MIT                                                        |

### Client

| Name                                      | Version        | Url                                                                   | License                          |
| ----------------------------------------- | -------------- | --------------------------------------------------------------------- | -------------------------------- |
| `@azure/communication-calling`            | ^1.10.0-beta.1 | https://www.npmjs.com/package/@azure/communication-calling            | MICROSOFT SOFTWARE LICENSE TERMS |
| `@azure/communication-calling-effects`    | ^1.0.1         | https://www.npmjs.com/package/@azure/communication-calling-effects    | MICROSOFT SOFTWARE LICENSE TERMS |
| `@azure/communication-chat`               | ^1.3.0         | https://www.npmjs.com/package/@azure/communication-chat               | MIT                              |
| `@azure/communication-common`             | ^2.2.1         | https://www.npmjs.com/package/@azure/communication-common             | MIT                              |
| `@azure/communication-react`              | ^1.4.1         | https://www.npmjs.com/package/@azure/communication-react              | MIT                              |
| `@fluentui/react-northstar`               | ^0.64.0        | https://www.npmjs.com/package/@fluentui/react-northstar               | MIT                              |
| `@giphy/js-fetch-api`                     | ^4.9.0         | https://www.npmjs.com/package/@giphy/js-fetch-api                     | MIT                              |
| `@giphy/react-components`                 | ^6.9.0         | https://www.npmjs.com/package/@giphy/react-components                 | MIT                              |
| `@microsoft/applicationinsights-react-js` | ^3.4.1         | https://www.npmjs.com/package/@microsoft/applicationinsights-react-js | MIT                              |
| `@microsoft/applicationinsights-web`      | ^2.8.11        | https://www.npmjs.com/package/@microsoft/applicationinsights-web      | MIT                              |
| `@microsoft/microsoft-graph-client`       | ^3.0.2         | https://www.npmjs.com/package/@microsoft/microsoft-graph-client       | MIT                              |
| `@microsoft/signalr`                      | ^6.0.10        | https://www.npmjs.com/package/@microsoft/signalr                      | MIT                              |
| `@microsoft/teams-js`                     | ^2.14.0        | https://www.npmjs.com/package/@microsoft/teams-js                     | MIT                              |
| `@microsoft/teamsfx`                      | ^2.0.0-beta.0  | https://www.npmjs.com/package/@microsoft/teamsfx                      | MIT                              |
| `@reduxjs/toolkit`                        | ^1.9.5         | https://www.npmjs.com/package/@reduxjs/toolkit                        | MIT                              |
| `@types/react`                            | ^17.0.52       | https://www.npmjs.com/package/@types/react                            | MIT                              |
| `@types/react-dom`                        | ^17.0.18       | https://www.npmjs.com/package/@types/react-dom                        | MIT                              |
| `@types/react-router-dom`                 | ^5.3.3         | https://www.npmjs.com/package/@types/react-router-dom                 | MIT                              |
| `@types/showdown`                         | ^2.0.0         | https://www.npmjs.com/package/@types/showdown                         | MIT                              |
| `@types/uuid`                             | ^8.3.4         | https://www.npmjs.com/package/@types/uuid                             | MIT                              |
| `@typescript-eslint/parser`               | ^5.30.5        | https://www.npmjs.com/package/@typescript-eslint/parser               | BSD-2-Clause                     |
| `@typescript-eslint/typescript-estree`    | ^5.30.5        | https://www.npmjs.com/package/@typescript-eslint/typescript-estree    | BSD-2-Clause                     |
| `axios`                                   | ^0.27.2        | https://www.npmjs.com/package/axios                                   | MIT                              |
| `copy-to-clipboard`                       | ^3.3.3         | https://www.npmjs.com/package/copy-to-clipboard                       | MIT                              |
| `emoji-picker-react`                      | ^4.4.9         | https://www.npmjs.com/package/emoji-picker-react                      | MIT                              |
| `env-cmd`                                 | ^10.1.0        | https://www.npmjs.com/package/env-cmd                                 | MIT                              |
| `eslint-config-react-app`                 | ^7.0.1         | https://www.npmjs.com/package/eslint-config-react-app                 | MIT                              |
| `grid-engine`                             | ^2.23.0        | https://www.npmjs.com/package/grid-engine                             | Apache 2.0                       |
| `i`                                       | ^0.3.7         | https://www.npmjs.com/package/i                                       | none                             |
| `image-conversion`                        | ^2.1.1         | https://www.npmjs.com/package/image-conversion                        | MIT                              |
| `nipplejs`                                | ^0.10.0        | https://www.npmjs.com/package/nipplejs                                | MIT                              |
| `npm`                                     | ^9.6.6         | https://www.npmjs.com/package/npm                                     | Artistic-2.0                     |
| `phaser`                                  | ^3.55.2        | https://www.npmjs.com/package/phaser                                  | MIT                              |
| `react`                                   | ^17.0.2        | https://www.npmjs.com/package/react                                   | MIT                              |
| `react-chartjs-2`                         | ^4.3.1         | https://www.npmjs.com/package/react-chartjs-2                         | MIT                              |
| `react-dom`                               | ^17.0.2        | https://www.npmjs.com/package/react-dom                               | MIT                              |
| `react-query`                             | ^3.39.3        | https://www.npmjs.com/package/react-query                             | MIT                              |
| `react-quill`                             | ^2.0.0-beta.4  | https://www.npmjs.com/package/react-quill                             | MIT                              |
| `react-redux`                             | ^8.1.1         | https://www.npmjs.com/package/react-redux                             | MIT                              |
| `react-router-dom`                        | ^6.4.0         | https://www.npmjs.com/package/react-router-dom                        | MIT                              |
| `react-scripts`                           | ^5.0.1         | https://www.npmjs.com/package/react-scripts                           | MIT                              |
| `react-showdown`                          | ^2.3.1         | https://www.npmjs.com/package/react-showdown                          | MIT                              |
| `rxjs`                                    | ^7.8.1         | https://www.npmjs.com/package/rxjs                                    | Apache-2.0                       |
| `sass`                                    | ^1.45.0        | https://www.npmjs.com/package/sass                                    | MIT                              |
| `showdown`                                | ^1.9.1         | https://www.npmjs.com/package/showdown                                | MIT                              |
| `use-file-picker`                         | ^1.4.2         | https://www.npmjs.com/package/use-file-picker                         | MIT                              |
| `uuid`                                    | ^8.3.2         | https://www.npmjs.com/package/uuid                                    | MIT                              |

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />