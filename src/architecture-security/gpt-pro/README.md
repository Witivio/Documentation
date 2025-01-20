# GPT Pro

We understand that our customers need to be confident using GPT Pro, and be aware of our data collection practices.

:::  tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Data Management Practices

Through the implementation of its different features, GPT Pro access, processes and stores several kind of data:

- Users data & chat
- Bot configuration
- File
- Plugins configuration

Here is how we're managing data for these different categories:
| Data | Accessed | Cached | Stored | Backup | Notes |
|------|:--------:|:------:|:------:|:------:|-------|
| User profiles | ✔ | ✔ | ✔ |🚫| Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Bot Configuration | ✔ | ✔ | ✔ |🚫| Accessed and updated after creation of a bot.<br/>Stored as long as the organization is active. |
| User data | ✔ | 🚫 | ✔ |🚫| Users data (AAD ID, UPN).<br/>Stored as long as the organization is active. |
| Bot conversations | ✔ | ✔ | ✔ |🚫| Bot conversations.<br/>Accessed at each time the user connect to the bot. |
| Conversations history | ✔ | ✔ | ✔ |🚫| Bot conversations history.<br/>Accessed at each time the user connect to the bot. |
| User feedbacks | ✔ | ✔ | ✔ |🚫| User feedback about a bot message.<br/>Accessed when an admin coonect to the admin center. |
| Document files | ✔ | ✔ | ✔ |🚫| Files for the knowledge of the bot.<br/>Accessed when the indexer vectorize the content and to check permissons |
| Teams files | 🚫 | 🚫 | 🚫 |🚫| No access.<br/>No cache.<br/>No storage. |

:::  tip
Data is stored in the Azure cloud in France Central region.
:::

## Microsoft Graph

::: tip
All permissions are delegated permissions
:::

### Admin center

| Scope                      | Description                                                                             | Justification                                                                                                                                                                                                                               | Admin Consent Required |
| -------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------: |
| `User.Read`                | Retrieve the properties and relationships of user object.                               | **Allows GPT Pro to read user information and to display it in the UI.**                                                                                                                                                             |           No           |
| `email`                    | Gives the app access to the user's primary email address in the form of the email claim |                                                                                                                                                                                                                                             |           No           |
| `openid`                   | Used to sign in with OpenID Connect                                                     |                                                                                                                                                                                                                                             |           No           |
| `offline_access`           | Gives the app access to resources on behalf of the user for an extended time.          | When a user approves the offline_access scope, GPT Pro can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. GPT Pro can get new access tokens as older ones expire. |           No           |
| `profile`                  | Gives the app access to basic information about the user in the claims.                 |                                                                                                                                                                                                                                             |           No           |
| `User.ReadBasic.All` | Used in the add an administrator view to search for a user to promote as an administrator. |                                                                                                                                                                                                                                             |           No           |
| `Files.Read.All` | Used to read SharePoint library the admin can access. It is used to index the content of the library. This scopes is only used when adding a new library | **Allow GPT Pro to access Files within a SharePoint Library to index it and ask question about those files in the bot**  |           No           |

::: tip
The Azure AD App ID for the admin center is: **b2c0dc10-7931-4437-8e5b-21aeb264b648**
:::

### Bot

The bot is available from Microsoft Teams Store. It uses Teams SSO to authenticate the user and ask for consent to access files when the user ask a question about a file stored in SharePoint.
| Scope                      | Description                                                                             | Justification                                                                                                                                                                                                                               | Admin Consent Required |
| -------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------: |
| `User.Read`                | Retrieve the properties and relationships of user object.                               | **Allows GPT Pro to read user information through SSO.**                                                                                                                                                             |           No           |
| `Files.Read.All`                | Used to check for access to a specific SharePoint file                               | **We want to ensure right about indexed Sharepoint files. If the user does not have access to it, the files will never be used as GenAI context.**                                                                                                                                                             |           No           |

::: tip
The Azure AD App ID for the admin center is: **a4943772-4dd0-4fad-baaf-2a728b0cb0e0**
:::

## Microsoft Graph limits

In addition,Microsoft Graph apply another algorithm (token bucket) based on the complexity of the request. The maximum number of requests applies based [on the number of users in the tenant](https://learn.microsoft.com/en-us/graph/throttling-limits#pattern).

All the limits are available [here](https://learn.microsoft.com/en-us/graph/throttling-limits)

## Architecture and flow diagram

![GPT Pro architecture](/assets/img/gpt-architecture.png)

## Plugins

GPT Pro's plugins are designed as APIs, enabling efficient and seamless integration with various systems and applications.
HTTPS Protocol:

All plugin communications are secured using HTTPS, ensuring that data transferred between GPT Pro and external services is encrypted and secure.
OpenAPI Standards:

These plugins adhere to the OpenAPI standards, which guarantees consistent, accessible, and understandable documentation for developers, fostering a robust and interoperable ecosystem.
Data Transmission to Third-Party APIs:

GPT Pro plugins may transmit certain information to third-party APIs. This includes:

* userId: A unique identifier for the user.
* User Display Name: The name displayed for the user.
* Context About the Query: Relevant contextual information to enhance the query's relevance and accuracy.


## Resource Endpoints

All the traffic from and to the GPT Pro platform uses HTTPS protocol on port 443.
Here is a short description of each flow:

| Name                                | Comments                             |
| ----------------------------------- | ------------------------------------ |
| admin.gpt-pro.com            | for the admin center |
| .msecnd.net and \*.visualstudio.com | for performance metrics analysis     |
| token.botframework.com              | for the SSO in bot authentication     |

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />