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
| Document files | ✔ | ✔ | ✔ |🚫| Files for the KB of the bot.<br/>Accessed when the indexer vectorize the content. |
| Teams files | 🚫 | 🚫 | 🚫 |🚫| No access.<br/>No cache.<br/>No storage. |

## Microsoft Graph

| Scope                      | Description                                                                             | Justification                                                                                                                                                                                                                               | Admin Consent Required |
| -------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------: |
| `User.Read`                | Retrieve the properties and relationships of user object.                               | **Allows GPT Pro to read user information and to display it in the UI.**                                                                                                                                                             |           No           |
| `email`                    | Gives the app access to the user's primary email address in the form of the email claim |                                                                                                                                                                                                                                             |           No           |
| `openid`                   | Used to sign in with OpenID Connect                                                     |                                                                                                                                                                                                                                             |           No           |
| `offline_access`           | Gives thee app access to resources on behalf of the user for an extended time.          | When a user approves the offline_access scope, GPT Pro can receive refresh tokens from the Microsoft identity platform token endpoint. Refresh tokens are long-lived. GPT Pro can get new access tokens as older ones expire. |           No           |
| `profile`                  | Gives the app access to basic information about the user in the claims.                 |                                                                                                                                                                                                                                             |           No           |
| `User.ReadBasic.All` | Used in the add an administrator view to search for a user to promote as an administrator. |                                                                                                                                                                                                                                             |           No           |
## Microsoft Graph limits

In addition,Microsoft Graph apply another algorithm (token bucket) based on the complexity of the request. The maximum number of requests applies based [on the number of users in the tenant](https://learn.microsoft.com/en-us/graph/throttling-limits#pattern).

All the limits are available [here](https://learn.microsoft.com/en-us/graph/throttling-limits)

::: tip
The Azure AD App ID is: **9fcafdeb-1249-4000-9e96-38e848a963d2**
:::

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

<Intercom />
<Clarity />
<GoogleAnalytics />