# Map Pro

We understand that our customers need to be confident using Map Pro, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Map Pro access, processes and stores several kind of data:
- Map POI
- Map Configuration
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Map Configuration | ✔ | ✔ | ✔ | Accessed and updated after creation of a tab.<br/>Stored as long as the organization is active. |
| Map POI | ✔ | ✔ | ✔ | Accessed and updated of using the app.<br/>Stored as long as the organization is active. |
| User data | ✔ | 🚫 | ✔ | Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| Teams channel | ✔ | 🚫 | 🚫 | Name and unique ID of the channel.<br/>No cache.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```User.Read``` | Retrieve the properties and relationships of user object. | **Allows Map Pro to read user information and to display it in the UI.** | No |
|```email```| Gives the app access to the user's primary email address in the form of the email claim | | No |Map
|```openid```| Used to sign in with OpenID Connect | | No |
|```offline_access```| Gives the app access to resources on behalf of the user for an extended time. | **When a user approves the offline_access scope, Map Pro can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. Map Pro can get new access tokens as older ones expire.** | No |
|```profile```| Gives the app access to basic information about the user in the claims.| | No |

::: tip
The Azure AD App ID is: **d44d071f-a9e5-4f99-b72e-5ab38cd7b175**
:::

## Architecture and flow diagram

![Map Pro architecture](/assets/img/map-architecture.png)

## Microsoft Teams Apps Security and Compliance

Microsoft works with our Microsoft 365 developer partners to provide the information organizations need to expedite and inform decisions about Microsoft Teams Apps and add-ins they use. The information is supplemented with information from the Microsoft Cloud App Security app catalog and information provided by the developers when they submit their applications. This security, data handling, and compliance information is intended to help organizations assess and manage risk in using these apps.

::: tip Note
[Microsoft 365 App Compliance for Map Pro](https://docs.microsoft.com/en-us/microsoft-365-app-certification/teams/witivio-map-pro)
:::

## Resource Endpoints

All the traffic from and to the TeamsPro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name | Comments |
|------|----------|
| maps.teams-pro.com  | for the apps including help contents |
|.msecnd.net and *.visualstudio.com  | for performance metrics analysis |
|.google.com | for Google maps tiles |

## Dependencies

### Client

| Name | Version | Url | Licence |
| ---- | ------- | --- | ------- |
| @fluentui/react-icons | 2.0.209 | https://github.com/microsoft/fluentui-system-icons | MIT |
| @fluentui/react-northstar | 0.57.0 | https://github.com/microsoft/fluentui | MIT |
| @fortawesome/fontawesome-svg-core | 1.2.36 | https://github.com/FortAwesome/Font-Awesome | MIT |
| @fortawesome/free-solid-svg-icons | 5.15.2 | https://github.com/FortAwesome/Font-Awesome | (CC-BY-4.0 AND MIT) |
| @fortawesome/react-fontawesome | 0.1.16 | https://github.com/FortAwesome/react-fontawesome | MIT |
| @microsoft/applicationinsights-react-js | 2.5.4 | https://github.com/microsoft/applicationinsights-react-js | MIT |
| @microsoft/applicationinsights-web | 2.7.0 | https://github.com/microsoft/ApplicationInsights-JS | MIT |
| @microsoft/teams-js | 2.0 | https://github.com/OfficeDev/microsoft-teams-library-js | MIT |
| @microsoft/teamsfx | 2.0 | https://github.com/OfficeDev/TeamsFx | MIT |
| axios | 0.26.0 | https://github.com/axios/axios | MIT |
| clarity-js | 0.6.43 | https://github.com/microsoft/clarity | MIT |
| copy-to-clipboard | 3.3.1 | https://github.com/sudodoki/copy-to-clipboard | MIT |
| env-cmd | 10.1.0 | https://github.com/toddbluhm/env-cmd | MIT |
| eslint-plugin-react-hooks | 4.3.0 | https://github.com/facebook/react | MIT |
| moment | 2.29.1 | https://github.com/moment/moment | MIT |
| moment-timezone | 0.5.34 | https://github.com/moment/moment-timezone | MIT |
| react | 18.3.1 | https://github.com/facebook/react | MIT |
| react-dom | 18.3.1 | https://github.com/facebook/react | MIT |
| react-intl | 5.20.12 | https://github.com/formatjs/formatjs | BSD-3-Clause |
| react-router-dom | 5.3.0 | https://github.com/remix-run/react-router | MIT |
| react-scripts | 4.0.3 | https://github.com/facebook/create-react-app | MIT |
| rxjs | 7.5.3 | https://github.com/reactivex/rxjs | Apache-2.0 |
| ts-overlapping-marker-spiderfier | 1.0.3 | https://github.com/chancezeus/oms | MIT |

### Server

| Name | Version | Url | Licence |
| ---- | ------- | --- | ------- |
| AspNetCore.HealthChecks.Publisher.ApplicationInsights | 3.1.1 | https://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks |  |
| AutoMapper | 10.1.1 | https://github.com/AutoMapper/AutoMapper | MIT |
| AutoMapper.Extensions.Microsoft.DependencyInjection | 7.0.0 | https://github.com/AutoMapper/AutoMapper.Extensions.Microsoft.DependencyInjection.git |  |
| Azure.Storage.Blobs | 12.10.0 | https://github.com/Azure/azure-sdk-for-net | MIT |
| Microsoft.ApplicationInsights | 2.16.0 | https://github.com/Microsoft/ApplicationInsights-dotnet | MIT |
| Microsoft.ApplicationInsights.AspNetCore | 2.16.0 | https://github.com/Microsoft/ApplicationInsights-dotnet | MIT |
| Microsoft.ApplicationInsights.SnapshotCollector | 1.3.7.5 | https://www.nuget.org/packages/Microsoft.ApplicationInsights.SnapshotCollector/1.3.7.5 |  |
| Microsoft.AspNetCore.OData | 7.5.12 | https://github.com/OData/WebApi.git | MIT |
| Microsoft.Azure.DocumentDB.Core | 2.13.1 | https://www.nuget.org/packages/Microsoft.Azure.DocumentDB.Core/2.13.1 |  |
| Microsoft.Bot.Builder.Integration.AspNet.Core | 4.15.1 | https://github.com/Microsoft/botbuilder-dotnet | MIT |
| Microsoft.Bot.Connector | 4.15.1 | https://github.com/Microsoft/botbuilder-dotnet | MIT |
| Microsoft.Extensions.HealthChecks | 1.0.0 | https://github.com/seven1986/HealthChecks |  |
| Microsoft.Graph | 4.8.0 | https://github.com/microsoftgraph/msgraph-sdk-dotnet |  |
| Microsoft.Graph.Core | 2.0.5 | https://github.com/microsoftgraph/msgraph-sdk-dotnet-core |  |
| Microsoft.Identity.Web | 1.19.0 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Microsoft.Identity.Web.MicrosoftGraph | 1.19.0 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Microsoft.Identity.Web.UI | 1.14.0 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Microsoft.NET.Test.Sdk | 16.8.3 | https://www.nuget.org/packages/Microsoft.NET.Test.Sdk/16.8.3 |  |
| SpecFlow | 3.6.23 | https://www.nuget.org/packages/SpecFlow/3.6.23 |  |
| Swashbuckle.AspNetCore | 6.2.3 | https://github.com/domaindrivendev/Swashbuckle.AspNetCore.git | MIT |
| Swashbuckle.AspNetCore.Swagger | 6.2.3 | https://github.com/domaindrivendev/Swashbuckle.AspNetCore.git | MIT |
| Swashbuckle.AspNetCore.SwaggerGen | 6.2.3 | https://github.com/domaindrivendev/Swashbuckle.AspNetCore.git | MIT |
| Swashbuckle.AspNetCore.SwaggerUI | 6.2.3 | https://github.com/domaindrivendev/Swashbuckle.AspNetCore.git | MIT |
| Microsoft.AspNetCore.Mvc.NewtonsoftJson | 6.0.20 | https://github.com/dotnet/aspnetcore | MIT |
| Microsoft.AspNetCore.SpaServices.Extensions | 6.0.20 | https://github.com/dotnet/aspnetcore | MIT |
| Newtonsoft.Json | 13.0.3 | https://github.com/JamesNK/Newtonsoft.Json | MIT |

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />