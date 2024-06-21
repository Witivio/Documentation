# Calendar Pro

We understand that our customers need to be confident using Calendar Pro, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Calendar Pro access, processes and stores several kind of data:
- Calendar events
- Calendar Configuration
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Calendar Configuration | ✔ | ✔ | ✔ | Accessed and updated after creation of a tab.<br/>Stored as long as the organization is active. |
| Calendar events | ✔ | 🚫 | ✔ | Accessed and updated of using the calendar.<br/>Stored as long as the organization is active. |
| User data | ✔ | 🚫 | ✔ | Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| Teams channel | ✔ | 🚫 | 🚫 | Name and unique ID of the channel.<br/>No cache.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```User.Read``` | Retrieve the properties and relationships of user object. | **Allows Calendar Pro to read user information and to display it in the UI.** | No |
| ```TeamsActivity.Send``` | Allows the app to create new activities in your teamwork activity feed, and send new activities to other users activity feed, on your behalf. | **Allows Calendar Pro to send notifications to other users.** | Yes |
|```email```| Gives the app access to the user's primary email address in the form of the email claim | | No |
|```openid```| Used to sign in with OpenID Connect | | No |
|```offline_access```| Gives thee app access to resources on behalf of the user for an extended time. | **When a user approves the offline_access scope, Calendar Pro can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. Calendar Pro can get new access tokens as older ones expire.** | No |
|```profile```| Gives the app access to basic information about the user in the claims.| | No |
| ```User.ReadBasic.All ``` | Retrieve the properties and relationships of user object. | **Allows Calendar Pro to read user information and to display it in the UI.** | Yes |

::: tip
The Azure AD App ID is: **fb507a6d-2eaa-4f1f-b43a-140f388c4445**
:::

## Microsoft Teams Apps Security and Compliance

Microsoft works with our Microsoft 365 developer partners to provide the information organizations need to expedite and inform decisions about Microsoft Teams Apps and add-ins they use. The information is supplemented with information from the Microsoft Cloud App Security app catalog and information provided by the developers when they submit their applications. This security, data handling, and compliance information is intended to help organizations assess and manage risk in using these apps.

<!-- ::: tip Note
[Microsoft 365 App Compliance for Calendar Pro](https://docs.microsoft.com/en-us/microsoft-365-app-certification/teams/witivio-calendar-pro)
::: -->

## Architecture and flow diagram

![Calendar Pro architecture](/assets/img/calendar-architecture.png)

## Resource Endpoints

All the traffic from and to the TeamsPro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name | Comments |
|------|----------|
| calendar.teams-pro.com  | for the apps including help contents |
|.msecnd.net and *.visualstudio.com  | for performance metrics analysis |

## Dependencies

### Client

| Name | Version | Url | Licence |
| ---- | ------- | --- | ------- |
| @azure/msal-browser | 2.30.0 | https://github.com/AzureAD/microsoft-authentication-library-for-js | MIT |
| @fluentui/react-icons | 2.0.218 | https://github.com/microsoft/fluentui-system-icons | MIT |
| @fluentui/react-northstar | 0.64.0 | https://github.com/microsoft/fluentui | MIT |
| @fullcalendar/core | 5.11.5 | https://github.com/fullcalendar/fullcalendar | MIT |
| @fullcalendar/daygrid | 5.11.5 | https://github.com/fullcalendar/fullcalendar | MIT |
| @fullcalendar/interaction | 5.11.5 | https://github.com/fullcalendar/fullcalendar | MIT |
| @fullcalendar/list | 5.11.5 | https://github.com/fullcalendar/fullcalendar | MIT |
| @fullcalendar/moment-timezone | 5.11.5 | https://github.com/fullcalendar/fullcalendar | MIT |
| @fullcalendar/react | 5.11.5 | https://github.com/fullcalendar/fullcalendar-react | MIT |
| @fullcalendar/resource-timeline | 5.11.5 | https://github.com/fullcalendar/fullcalendar-workspace | MIT |
| @fullcalendar/rrule | 5.11.5 | https://github.com/fullcalendar/fullcalendar | MIT |
| @fullcalendar/timegrid | 5.11.5 | https://github.com/fullcalendar/fullcalendar | MIT |
| @microsoft/applicationinsights-analytics-js | 3.0.3 | https://github.com/microsoft/ApplicationInsights-JS#main | MIT |
| @microsoft/applicationinsights-react-js | 3.4.0 | https://github.com/microsoft/applicationinsights-react-js | MIT |
| @microsoft/applicationinsights-web | 2.7.0 | https://github.com/microsoft/ApplicationInsights-JS | MIT |
| @microsoft/microsoft-graph-client | 3.0.2 | https://github.com/microsoftgraph/msgraph-sdk-javascript | MIT |
| @microsoft/teams-js | 2.12.0 | https://github.com/OfficeDev/microsoft-teams-library-js | MIT |
| @microsoft/teamsfx | 2.0.0 | https://github.com/OfficeDev/TeamsFx | MIT |
| @reduxjs/toolkit | 1.9.5 | https://github.com/reduxjs/redux-toolkit | MIT |
| @types/googlemaps | 3.43.3 | https://github.com/DefinitelyTyped/DefinitelyTyped | MIT |
| @types/react | 18.2.28 | https://github.com/DefinitelyTyped/DefinitelyTyped | MIT |
| @types/react-color | 3.0.7 | https://github.com/DefinitelyTyped/DefinitelyTyped | MIT |
| @types/react-dom | 18.2.7 | https://github.com/DefinitelyTyped/DefinitelyTyped | MIT |
| @types/react-router-dom | 5.3.3 | https://github.com/DefinitelyTyped/DefinitelyTyped | MIT |
| axios | 1.4.0 | https://github.com/axios/axios | MIT |
| copy-to-clipboard | 3.3.3 | https://github.com/sudodoki/copy-to-clipboard | MIT |
| emoji-picker-react | 4.5.2 | https://github.com/ealush/emoji-picker-react | MIT |
| env-cmd | 10.1.0 | https://github.com/toddbluhm/env-cmd | MIT |
| history | 5.3.0 | https://github.com/remix-run/history | MIT |
| html2canvas | 1.4.1 | https://github.com/niklasvh/html2canvas | MIT |
| moment | 2.9.0 | https://github.com/moment/moment | MIT |
| moment-timezone | 0.5.43 | https://github.com/moment/moment-timezone | MIT |
| react | 18.2.0 | https://github.com/facebook/react | MIT |
| react-color | 2.19.3 | https://github.com/casesandberg/react-color | MIT |
| react-dom | 18.2.0 | https://github.com/facebook/react | MIT |
| react-frame-component | 5.2.6 | https://github.com/ryanseddon/react-frame-component | MIT |
| react-input-color | 4.0.1 | https://github.com/swiftcarrot/react-input-color | MIT |
| react-query | 3.39.3 | https://github.com/tannerlinsley/react-query | MIT |
| react-quill | 2.0.0 | https://github.com/zenoamaro/react-quill | MIT |
| react-redux | 8.1.1 | https://github.com/reduxjs/react-redux | MIT |
| react-router-dom | 6.14.2 | https://github.com/remix-run/react-router | MIT |
| react-scripts | 5.0.1 | https://github.com/facebook/create-react-app | MIT |
| react-showdown | 2.3.1 | https://registry.npmjs.org/react-showdown | MIT |
| rrule | 2.7.2 | https://github.com/jakubroztocil/rrule | BSD-3-Clause |
| sass | 1.64.2 | https://github.com/sass/dart-sass | MIT |
| showdown | 2.1.0 | https://github.com/showdownjs/showdown | MIT |
| spa-proxy | 1.0.8 | https://registry.npmjs.org/spa-proxy | MIT |
| tinycolor2 | 1.6.0 | https://github.com/bgrins/TinyColor | MIT |
| typescript | 5.1.6 | https://github.com/Microsoft/TypeScript | Apache-2.0 |
| web-vitals | 2.1.4 | https://github.com/GoogleChrome/web-vitals | Apache-2.0 |


### Server

| Name | Version | Url | Licence |
| ---- | ------- | --- | ------- |
| Azure.Extensions.AspNetCore.Configuration.Secrets | 1.2.2 | https://github.com/Azure/azure-sdk-for-net | MIT |
| Microsoft.AspNetCore.Http | 2.2.2 | https://github.com/aspnet/AspNetCore |  |
| Microsoft.AspNetCore.Mvc.Core | 2.2.5 | https://github.com/aspnet/AspNetCore |  |
| Microsoft.Identity.Web | 2.13.4 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Microsoft.Identity.Web.MicrosoftGraph | 2.13.4 | https://github.com/AzureAD/microsoft-identity-web | MIT |
| Swashbuckle.AspNetCore | 6.5.0 | https://github.com/domaindrivendev/Swashbuckle.AspNetCore.git | MIT |
| Microsoft.AspNetCore.SpaProxy | 6.0.24 | https://github.com/dotnet/aspnetcore | MIT |
| Microsoft.Extensions.HealthChecks | 1.0.0 | https://github.com/seven1986/HealthChecks |  |
| AspNetCore.HealthChecks.Publisher.ApplicationInsights | 7.0.0 | https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks | Apache-2.0 |
| Microsoft.ApplicationInsights | 2.21.0 | https://github.com/Microsoft/ApplicationInsights-dotnet | MIT |
| Microsoft.ApplicationInsights.AspNetCore | 2.21.0 | https://github.com/Microsoft/ApplicationInsights-dotnet | MIT |
| Microsoft.ApplicationInsights.SnapshotCollector | 1.4.4 | https://www.nuget.org/packages/Microsoft.ApplicationInsights.SnapshotCollector/1.4.4 |  |
| Microsoft.Extensions.Configuration | 6.0.0 | https://github.com/dotnet/runtime | MIT |
| AutoMapper | 12.0.1 | https://github.com/AutoMapper/AutoMapper | MIT |
| TimeZoneConverter | 6.1.0 | https://github.com/mattjohnsonpint/TimeZoneConverter | MIT |
| Microsoft.Extensions.DependencyInjection.Abstractions | 7.0.0 | https://github.com/dotnet/runtime | MIT |
| Microsoft.AspNetCore.OData | 7.5.12 | https://github.com/OData/WebApi.git | MIT |
| Microsoft.Azure.DocumentDB.Core | 2.13.0 | https://www.nuget.org/packages/Microsoft.Azure.DocumentDB.Core/2.13.0 |  |
| Microsoft.AspNetCore.Mvc.NewtonsoftJson | 6.0.20 | https://github.com/dotnet/aspnetcore | MIT |
| Microsoft.Bot.Builder | 4.21.1 | https://github.com/Microsoft/botbuilder-dotnet | MIT |
| Microsoft.Bot.Builder.Integration.AspNet.Core | 4.21.1 | https://github.com/Microsoft/botbuilder-dotnet | MIT |
| Microsoft.Bot.Builder.Integration.ApplicationInsights.Core | 4.21.1 | https://github.com/Microsoft/botbuilder-dotnet | MIT |
| Ical.Net | 4.2.0 | https://github.com/rianjs/ical.net | MIT |
| AdaptiveCards | 3.1.0 | https://www.nuget.org/packages/AdaptiveCards/3.1.0 |  |
| ReverseMarkdown | 3.25.0 | https://github.com/mysticmind/reversemarkdown-net.git | MIT |
<Hubspot />