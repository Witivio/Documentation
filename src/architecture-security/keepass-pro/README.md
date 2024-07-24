# Keepass Pro

We understand that our customers need to be confident using Keepass Pro, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Keepass Pro access, processes and stores several kind of data:
- Login
- Password 
- Keepass Configuration
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Keepass Configuration | ✔ | ✔ | ✔ | Accessed and updated after creation of a tab.<br/>Stored as long as the organization is active. |
| Keepass KDBX | ✔ | 🚫 | 🚫 | KDBX file never transit in Witivio infrastructure. The file stay between the app and SharePoint<br/>. |
| User data | ✔ | 🚫 | ✔ | Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| Teams channel | ✔ | 🚫 | 🚫 | Name and unique ID of the channel.<br/>No cache.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```User.Read``` | Retrieve the properties and relationships of user object. | **Allows Keepass Pro to read user information and to display it in the UI.** | No |
| ```Files.ReadWrite.All``` | Read and Write file. / onedrive. | **Read and Write the kbdx file in user sharepoint / onedrive.** | No |
|```email```| Gives the app access to the user's primary email address in the form of the email claim | | No |
|```openid```| Used to sign in with OpenID Connect | | No |
|```offline_access```| Gives thee app access to resources on behalf of the user for an extended time. | **When a user approves the offline_access scope, Keepass Pro can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. Keepass Pro can get new access tokens as older ones expire.** | No |
|```profile```| Gives the app access to basic information about the user in the claims.| | No |

::: tip
The Azure AD App ID is: **597cc93d-8951-4f62-b549-eca97ba5c042**
:::

## Architecture and flow diagram

![KeePass Pro architecture](/assets/img/keepass-architecture.png)

## Microsoft Teams Apps Security and Compliance

Microsoft works with our Microsoft 365 developer partners to provide the information organizations need to expedite and inform decisions about Microsoft Teams Apps and add-ins they use. The information is supplemented with information from the Microsoft Cloud App Security app catalog and information provided by the developers when they submit their applications. This security, data handling, and compliance information is intended to help organizations assess and manage risk in using these apps.

<!-- ::: tip Note
[Microsoft 365 App Compliance for Keepass Pro](https://docs.microsoft.com/en-us/microsoft-365-app-certification/teams/witivio-keepass-pro)
::: -->

## Resource Endpoints

All the traffic from and to the TeamsPro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name | Comments |
|------|----------|
| keepass.teams-pro.com  | for the apps including help contents |
|.msecnd.net and *.visualstudio.com  | for performance metrics analysis |
|.windows.net | for blob cache storage |
|graph.microsoft.com | for Microsoft Graph API access |

## Dependencies

### Client

| Name | Version | Url | Licence |
| ---- | ------- | --- | ------- |
| @azure/msal-browser | 2.19.0 | https://github.com/AzureAD/microsoft-authentication-library-for-js | MIT |
| @fluentui/react-icons | 2.0.209 | https://github.com/microsoft/fluentui-system-icons | MIT |
| @fluentui/react-northstar | 0.59.0 | https://github.com/microsoft/fluentui | MIT |
| @microsoft/applicationinsights-react-js | 2.5.4 | https://github.com/microsoft/applicationinsights-react-js | MIT |
| @microsoft/applicationinsights-web | 2.7.1 | https://github.com/microsoft/ApplicationInsights-JS | MIT |
| @microsoft/teams-js | 2.0 | https://github.com/OfficeDev/microsoft-teams-library-js | MIT |
| @microsoft/teamsfx | 2.0 | https://github.com/OfficeDev/TeamsFx | MIT |
| @sideway/address | 4.1.2 | https://github.com/sideway/address | BSD-3-Clause |
| axios | 0.24.0 | https://github.com/axios/axios | MIT |
| clarity-js | 0.6.43 | https://github.com/microsoft/clarity | MIT |
| copy-to-clipboard | 3.3.1 | https://github.com/sudodoki/copy-to-clipboard | MIT |
| env-cmd | 10.1.0 | https://github.com/toddbluhm/env-cmd | MIT |
| immutability-helper | 3.1.1 | https://github.com/kolodny/immutability-helper | MIT |
| kdbxweb | 1.14.4 | https://github.com/keeweb/kdbxweb | MIT |
| randomatic | 3.1.1 | https://github.com/jonschlinkert/randomatic | MIT |
| react | 16.14.0 | https://github.com/facebook/react | MIT |
| react-dom | 16.14.0 | https://github.com/facebook/react | MIT |
| react-router-dom | 5.2.0 | https://github.com/remix-run/react-router | MIT |
| react-scripts | 4.0.3 | https://github.com/facebook/create-react-app | MIT |
| sass | 1.43.4 | https://github.com/sass/dart-sass | MIT |
| use-file-picker | 1.4.1 | https://github.com/Jaaneek/useFilePicker | MIT |
| uuid | 8.3.2 | https://github.com/uuidjs/uuid | MIT |
| web-vitals | 2.1.2 | https://github.com/GoogleChrome/web-vitals | Apache-2.0 |

### Server

| Name | Version | Url | Licence |
| ---- | ------- | --- | ------- |
| Microsoft.ApplicationInsights.AspNetCore | 2.17.0 | https://github.com/Microsoft/ApplicationInsights-dotnet | MIT |
| Microsoft.Azure.DocumentDB.Core | 2.14.1 | https://www.nuget.org/packages/Microsoft.Azure.DocumentDB.Core/2.14.1 |  |
| Microsoft.Extensions.HealthChecks | 1.0.0 | https://github.com/seven1986/HealthChecks |  |
| Microsoft.Identity.Web | 1.9.2 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Microsoft.Identity.Web.MicrosoftGraph | 1.9.2 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Swashbuckle.AspNetCore | 5.6.3 | https://github.com/domaindrivendev/Swashbuckle.AspNetCore.git |  |
| Swashbuckle.AspNetCore.Swagger | 5.6.3 | https://github.com/domaindrivendev/Swashbuckle.AspNetCore.git |  |
| Swashbuckle.AspNetCore.SwaggerGen | 5.6.3 | https://github.com/domaindrivendev/Swashbuckle.AspNetCore.git |  |
| Swashbuckle.AspNetCore.SwaggerUI | 5.6.3 | https://github.com/domaindrivendev/Swashbuckle.AspNetCore.git |  |
| Microsoft.AspNetCore.Mvc.NewtonsoftJson | 6.0.20 | https://github.com/dotnet/aspnetcore | MIT |
| Microsoft.AspNetCore.SpaServices.Extensions | 6.0.20 | https://github.com/dotnet/aspnetcore | MIT |
| Newtonsoft.Json | 13.0.3 | https://github.com/JamesNK/Newtonsoft.Json | MIT |

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />