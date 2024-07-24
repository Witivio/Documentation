# Company Communicator Pro

We understand that our customers need to be confident using Company Communicator Pro, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Company Communicator Pro access, processes and stores several kind of data:
- Topics
- Images
- Messages
- Feedbacks
- Company Communicator Configuration
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Company Communicator Configuration | ✔ | ✔ | ✔ | Accessed and updated after the setup of the personnal app.<br/>Stored as long as the organization is active. |
| Topics | ✔ | 🚫 | ✔ | Accessed and updated of using the Company Communicator.<br/>Stored as long as the organization is active. |
| Images | ✔ | 🚫 | ✔ | Accessed and updated of using the Company Communicator.<br/>Stored as long as the organization is active. |
| Messages | ✔ | 🚫 | ✔ | Accessed and updated of using the Company Communicator.<br/>Stored as long as the organization is active. |
| Feedbacks | ✔ | 🚫 | ✔ | Accessed and updated of using the Company Communicator.<br/>Stored as long as the organization is active. |
| User data | ✔ | 🚫 | ✔ | Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| Teams channel | ✔ | 🚫 | 🚫 | Name and unique ID of the channel.<br/>No cache.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```User.Read``` | Retrieve the properties and relationships of user object. | **Allows Company Communicator Pro to read user information and to display it in the UI.** | No |
| ```Group.Read.All``` | Allows the app to list groups, and to read their properties and all group memberships on behalf of the signed-in user.| **Allows Company Communicator Pro to read group members and to display it in the UI.** | Yes |
|```email```| Gives the app access to the user's primary email address in the form of the email claim | | No |
|```openid```| Used to sign in with OpenID Connect | | No |
|```offline_access```| Gives thee app access to resources on behalf of the user for an extended time. | **When a user approves the offline_access scope, Company Communicator Pro can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. Company Communicator Pro can get new access tokens as older ones expire.** | No |
|```profile```| Gives the app access to basic information about the user in the claims.| | No |

::: tip
The Azure AD App ID is: **0e249f6c-14c5-4935-bb83-d0b632ced6eb**
:::


## Microsoft Teams Apps Security and Compliance

The application is under validation by Microsoft Security center.

## Architecture and flow diagram

![Calendar Pro architecture](/assets/img/cc-architecture.png)

## Resource Endpoints

All the traffic from and to the TeamsPro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name | Comments |
|------|----------|
| companycommunicator.teams-pro.com  | for the apps including help contents |
|.msecnd.net and *.visualstudio.com  | for performance metrics analysis |

## Dependencies

### Client

### Server

| Name                                                           | Version | Url                                                                                     | License    |
| -------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- | ---------- |
| AutoMapper.Extensions.Microsoft.DependencyInjection            | 12.0.0  | https://licenses.nuget.org/MIT                                                          | MIT        |
| ClosedXML                                                      | 0.96.0  | https://licenses.nuget.org/MIT                                                          | MIT        |
| FluentValidation                                               | 11.2.2  | https://licenses.nuget.org/Apache-2.0                                                   | Apache-2.0 |
| MediatR                                                        | 11.0.9  | https://licenses.nuget.org/Apache-2.0                                                   | Apache-2.0 |
| Microsoft.AspNetCore.Authentication.JwtBearer                  | 6.0.9   | https://licenses.nuget.org/MIT                                                          | MIT        |
| Microsoft.EntityFrameworkCore.Design                           | 6.0.10  | https://licenses.nuget.org/MIT                                                          | MIT        |
| Microsoft.EntityFrameworkCore.SqlServer                        | 6.0.10  | https://licenses.nuget.org/MIT                                                          | MIT        |
| Microsoft.EntityFrameworkCore.Tools                            | 6.0.10  | https://licenses.nuget.org/MIT                                                          | MIT        |
| Microsoft.VisualStudio.Web.CodeGeneration.Design               | 6.0.9   | https://licenses.nuget.org/MIT                                                          | MIT        |
| NETCore.MailKit                                                | 2.1.0   | https://licenses.nuget.org/MIT                                                          | MIT        |
| Storage.Net                                                    | 9.3.0   | https://licenses.nuget.org/MIT                                                          | MIT        |
| Microsoft.AspNetCore.SpaProxy                                  | 6.2.3   | https://licenses.nuget.org/MIT                                                          | MIT        |
| Microsoft.Extensions.HealthChecks                              | 1.0.0   | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| AspNetCore.HealthChecks.Publisher.ApplicationInsights          | 6.0.2   | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.ApplicationInsights                                  | 2.21.0  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.ApplicationInsights.AspNetCore                       | 2.21.0  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.ApplicationInsights.SnapshotCollector                | 1.4.3   | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.EntityFrameworkCore.Cosmos                           | 6.0.10  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.Identity.Web                                         | 1.25.1  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.Identity.Web.MicrosoftGraph                          | 1.25.1  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.Bot.Builder                                          | 4.17.2  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.Bot.Builder.Azure.Blobs                              | 4.17.2  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.Bot.Builder.Integration.ApplicationInsights.Core     | 4.17.2  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.Bot.Builder.Integration.AspNet.Core                  | 4.17.2  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
| Microsoft.Bot.Builder.LanguageGeneration                       | 4.17.2  | https://raw.githubusercontent.com/domaindrivendev/Swashbuckle.AspNetCore/master/LICENSE | MIT        |
<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />