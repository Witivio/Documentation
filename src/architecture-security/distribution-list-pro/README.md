# Distribution Lists Pro

We understand that our customers need to be confident using Distribution List Pro, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, Distribution List Pro access, processes and stores several kind of data:
- Distribution list
- Distribution list preference
- Users data

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Distribution list preference | ✔ | ✔ | ✔ | Accessed and updated after creation of a tab.<br/>Stored as long as the organization is active. |
| Distribution list | ✔ | 🚫 | ✔ | Accessed of using the app.<br/>No storage. |
| User data | ✔ | 🚫 | ✔ | Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| Teams channel | ✔ | 🚫 | 🚫 | Name and unique ID of the channel.<br/>No cache.<br/>Stored as long as the organization is active. |
| Teams conversations | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |
| Teams files | 🚫 | 🚫 | 🚫 | No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```User.Read``` | Retrieve the properties and relationships of user object. | **Allows Distribution List Pro to read user information and to display it in the UI.** | No |
| ```Group.Read.All``` | Allows the app to list groups, and to read their properties and all group memberships on behalf of the signed-in user.| **Allows Distribution List Pro to read user information and to display it in the UI.** | Yes |
| ```Presence.Read.All``` | Retrieve the presence of a user. | **Allows Distribution List Pro to read user information and to display it in the UI.** | Yes |
| ```User.Read.All``` | Retrieve the properties and relationships of user object. | **Allows Distribution List Pro to read user information and to display it in the UI.** | Yes |
|```email```| Gives the app access to the user's primary email address in the form of the email claim | | No |
|```openid```| Used to sign in with OpenID Connect | | No |
|```offline_access```| Gives thee app access to resources on behalf of the user for an extended time. | **When a user approves the offline_access scope, Distribution List Pro can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. Distribution List Pro can get new access tokens as older ones expire.** | No |
|```profile```| Gives the app access to basic information about the user in the claims.| | No |

::: tip
The Azure AD App ID is: **4cda80df-64fe-4961-8d73-cbe8d5ad0724**
:::

## Architecture and flow diagram

![DistributionList architecture](/assets/img/distribution-architecture.png)

## Microsoft Teams Apps Security and Compliance

Microsoft works with our Microsoft 365 developer partners to provide the information organizations need to expedite and inform decisions about Microsoft Teams Apps and add-ins they use. The information is supplemented with information from the Microsoft Cloud App Security app catalog and information provided by the developers when they submit their applications. This security, data handling, and compliance information is intended to help organizations assess and manage risk in using these apps.

<!-- ::: tip Note
[Microsoft 365 App Compliance for Distribution List Pro](https://docs.microsoft.com/en-us/microsoft-365-app-certification/teams/witivio-distribution-lists-pro)
::: -->

## Resource Endpoints

All the traffic from and to the TeamsPro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name | Comments |
|------|----------|
| Distribution Listgroup.teams-pro.com  | for the apps including help contents |
|.msecnd.net and *.visualstudio.com  | for performance metrics analysis |
|graph.microsoft.com | for Microsoft Graph API access |

<Intercom />
<Clarity />
<GoogleAnalytics />