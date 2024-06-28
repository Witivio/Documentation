# Authentication & Single Sign On

## Identity Provider (IdP)
Access to Witivio apps relie 100% on Microsoft Azure Active Directory (AAD) / Microsoft Entra ID (new name for Azure AD) as an IdP for authentication.  
Especially, it means that:
- User authentication is performed against your own AAD, just like any other regular Microsoft 365 authentication process.
- You can enable, disable and manage individual permissions grants from your own AAD.
- We're not accessing, processing nor storing any login / password.
- Our authentication mechanism is compatible with any [MFA](https://en.wikipedia.org/wiki/Multi-factor_authentication) authentication method supported by AAD.

## Single Sign On (SSO)

Single Sign-On (SSO) in the context of a Microsoft Teams app is an authentication process that allows users to access multiple applications or services with a single set of credentials. In the case of a Teams app, SSO simplifies the user experience and enhances security by reducing the number of times users need to log in.

Here's a more detailed explanation:

1. **Authentication Simplification**: When SSO is implemented in a Teams app, users only need to authenticate once. This single authentication grants them access to the Teams app along with other connected applications or services within the organization's ecosystem.

2. **Enhanced Security**: SSO reduces the risk of password fatigue (the tendency to use weak passwords due to the burden of remembering multiple complex passwords). It also enables centralized management of user access, making it easier to implement strong security policies and promptly revoke access when needed.

3. **Integration with Identity Providers (IdPs)**: SSO often integrates with third-party identity providers like Azure Active Directory. These IdPs manage user identities and credentials, allowing the Teams app to verify user identities without handling passwords directly.

4. **Seamless User Experience**: For users, SSO in a Teams app means a smoother workflow with fewer interruptions. Once they log in, they can seamlessly use various features of Teams along with other integrated applications without repeated logins.

5. **Compliance and Auditing**: SSO aids in compliance with various IT security standards by providing a centralized point for auditing and monitoring user access across different applications.

6. **Token-based Authentication**: SSO in Teams apps often uses security tokens (like JWTs - JSON Web Tokens) to authenticate users. When a user logs in, the IdP generates a token that the user's client app (Teams) presents to access other services.

In summary, SSO in a Teams app offers a combination of user convenience, enhanced security, and efficient access management, aligning with modern IT security best practices.

### Flow

![SSO in Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/assets/images/authentication/teams-sso-tabs/sso-runtime-seqd.png)

| #  | Interaction                           | Description                                                                                                                                                                                                                                                      |
|----|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | Tab app → Teams Client                | The tab app makes a JavaScript call to getAuthToken() from Microsoft Teams SDK, which tells Teams to obtain an access token.                                                                                                                                                              |
| 2  | Teams Client → Microsoft Entra ID     | Teams requests Microsoft Entra endpoint for the access token for the current app user based on Teams identity.                                                                                                                                                   |
| 3  | Microsoft Entra ID → Consent form     | If the current app user is using your tab app for the first time, Teams displays a request prompt to consent, if the app needs to access some protected data. The app user (or the administrator) must give consent to Teams for using the app user's Teams identity to obtain access token from Microsoft Entra ID. Alternately, there's a request prompt to handle step-up authentication such as two-factor authentication. |
| 4  | Microsoft Entra ID → Teams Client     | Microsoft Entra ID sends the access token to the Teams Client. The token is a JSON Web Token (JWT), and its validation works just like token validation in most standard OAuth flows. Teams caches the token on your behalf so that future calls to getAuthToken() return the cached token. |
| 5  | Teams Client → Tab app client         | Teams sends the access token to the tab app as part of the result object returned by the getAuthToken() call.                                                                                                                                                    |
| 6  | Tab app (between client and server)   | The tab app parses the access token using JavaScript to extract required information, such as the app user's email address. The token returned to the tab app is both an access token and an identity token.                                                     |

Currently, SSO in Microsoft Teams supports only OAuth 2.0 token. It doesn't support SAML token.


::: tip Service account authentication details 
For service account authentication details, please refer to [Microsoft Graph Permissions](./apppermissions)
:::

<Classification label="public" />
<Hubspot />
<Clarity />
<GoogleAnalytics />