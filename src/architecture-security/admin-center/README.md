# Admin Center

We understand that our customers need to be confident using Admin Center, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Admin Center access, processes and stores several kind of data:
- Subscriptions
- Administrators 
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Subscriptions | ✔ | 🚫 | ✔ | Accessed and updated after account creation.<br/>Stored as long as the organization is active. |
| Administrators | ✔ | 🚫 | ✔ | Accessed and updated after account creation.<br/>Stored as long as the organization is active. |
| User data | ✔ | 🚫 | ✔ | Users data (AAD ID, UPN, Tenant Id).<br/>Stored as long as the organization is active. |
| Payment Information | ✔ | 🚫 | 🚫 | Expiry Date only.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```User.Read``` | Retrieve the properties and relationships of user object. | **Allows Admin Center to read user information and to display it in the UI.** | No |
|```email```| Gives the app access to the user's primary email address in the form of the email claim | | No |
|```openid```| Used to sign in with OpenID Connect | | No |
|```offline_access```| Gives the app access to resources on behalf of the user for an extended time. | When a user approves the offline_access scope, Admin Center can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. Admin Center can get new access tokens as older ones expire. | No |
|```profile```| Gives the app access to basic information about the user in the claims.| | No |

::: tip
The Azure AD App ID is: **df3f7b0b-4265-46c5-946f-cabad2d0981c**
:::

## Dependencies

### Server

| Name | Version | Url | Licence |
| ---- | ------- | --- | ------- |
| Microsoft.AspNetCore.Http | 2.2.2 | https://github.com/aspnet/AspNetCore |  |
| Microsoft.AspNetCore.Mvc.Core | 2.2.5 | https://github.com/aspnet/AspNetCore |  |
| Microsoft.Identity.Web | 1.18.0 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Microsoft.Identity.Web.MicrosoftGraph | 1.18.0 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| AspNetCore.HealthChecks.Publisher.ApplicationInsights | 6.0.2 | https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks | Apache-2.0 |
| Microsoft.ApplicationInsights.AspNetCore | 2.21.0 | https://github.com/Microsoft/ApplicationInsights-dotnet | MIT |
| Microsoft.AspNetCore.Mvc.NewtonsoftJson | 3.1.14 | https://github.com/dotnet/aspnetcore | MIT |
| Azure.Storage.Blobs | 12.15.0 | https://github.com/Azure/azure-sdk-for-net | MIT |
| Azure.Storage.Queues | 12.18.0 | https://github.com/Azure/azure-sdk-for-net | MIT |
| chargebee | 3.16.1 | https://github.com/chargebee/chargebee-dotnet | MIT |
| Microsoft.AspNetCore.HealthChecks | 1.0.0 | https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks | Apache-2.0 |
| Microsoft.AspNetCore.Mvc.Localization | 2.2.0 | https://github.com/dotnet/aspnetcore | MIT |
| Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation | 3.1.32 | https://github.com/dotnet/aspnetcore | MIT |
| Microsoft.EntityFrameworkCore | 6.0.22 | https://github.com/dotnet/efcore | MIT |
| Microsoft.EntityFrameworkCore.Abstractions | 6.0.22 | https://github.com/dotnet/efcore | MIT |
| Microsoft.EntityFrameworkCore.Design | 6.0.22 | https://github.com/dotnet/efcore | MIT |
| Microsoft.EntityFrameworkCore.Tools | 6.0.22 | https://github.com/dotnet/efcore | MIT |
| Microsoft.Extensions.Caching.StackExchangeRedis | 6.0.27 | https://github.com/dotnet/runtime | MIT |
| Microsoft.Extensions.Localization | 5.0.7 | https://github.com/dotnet/runtime | MIT |
| Microsoft.Graph | 4.8.0 | https://github.com/microsoftgraph/msgraph-sdk-dotnet | MIT |
| Microsoft.Identity.Web.UI | 1.18.0 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Microsoft.VisualStudio.Web.CodeGeneration.Design | 3.1.5 | https://github.com/dotnet/aspnetcore | MIT |
| Newtonsoft.Json | 13.0.1 | https://github.com/JamesNK/Newtonsoft.Json | MIT |
| Npgsql.EntityFrameworkCore.PostgreSQL | 6.0.22 | https://github.com/npgsql/efcore.pg | PostgreSQL |
| SendGrid | 9.24.4 | https://github.com/sendgrid/sendgrid-csharp | MIT |
| Boxed.AspNetCore.TagHelpers | 9.0.1 | https://github.com/boxedapp/Framework | MIT |
| Microsoft.NET.Sdk.Functions | 4.2.0 | https://github.com/Azure/azure-functions-dotnet-worker | MIT |
| Microsoft.Azure.Functions.Extensions | 1.1.0 | https://github.com/Azure/azure-functions-host | MIT |
| Microsoft.Azure.WebJobs.Extensions.Http | 3.2.0 | https://github.com/Azure/azure-webjobs-sdk-extensions | MIT |
| Microsoft.DurableTask.Client | 1.1.1 | https://github.com/Azure/durabletask | MIT |
| Microsoft.Extensions.Hosting | 6.0.0 | https://github.com/dotnet/runtime | MIT |
| Microsoft.Extensions.Logging.Abstractions | 6.0.4 | https://github.com/dotnet/runtime | MIT |
| Microsoft.AspNetCore | 2.2.0 | https://github.com/aspnet/AspNetCore |  |
| Microsoft.Azure.WebJobs.Extensions.DurableTask | 2.13.1 | https://github.com/Azure/azure-functions-durable-extension | MIT |
| Microsoft.AspNetCore.App (Framework Reference) | Latest | https://github.com/dotnet/aspnetcore |  |

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />