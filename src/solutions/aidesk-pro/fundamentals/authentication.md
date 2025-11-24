# Admin center authentication

At Witivio, protecting our customers' data is our top priority. To ensure a secure and seamless authentication experience, AI desk PRO leverages Office 365 Single Sign-On (SSO) for accessing our applications. This approach integrates directly with Azure Active Directory (Azure AD), using incremental consent to request only the necessary permissions as users interact with our solution, minimizing access requests and protecting user privacy.

Through Office 365 SSO, AI desk PRO enables customers to:
- Enforce their own security policies for authentication, ensuring compliance with organizational standards.
- Leverage Office 365 Multi-Factor Authentication (MFA) where it’s configured or required, adding an extra layer of protection.
- Control user access to the application directly within their Azure AD environment, simplifying management for security teams.
- Comply with consent policies for permissions, ensuring transparent permission requests and adherence to established security protocols.

The sections that follow in this documentation will guide you through the incremental consent process, detailing how and when additional permissions are requested and how to manage them for optimal security and compliance.

::: warning
⚠️ Each step in this documentation **may vary depending on the security policies configured by your organization**. At any point, admin rights might be required, even if not explicitly indicated in the official [Microsoft Graph permissions documentation](https://learn.microsoft.com/en-us/graph/permissions-reference).
:::

## Option 1: Use incremental consent within the application.

Navigate to the [admin center](https://admin.aidesk-pro.com)
When your log in for the first time, you must consent for the following permissions :
- offline_access 
- User.Read

![Mandatory Permissions](/assets/img/agent/user-consent-mandatory-permissions.png)

::: warning
⚠️ These permissions are mandatory. You will not be able to use the admin center without consent.
:::

For some features, the admin center will prompt you for consent because a new permission is needed.
This happens for the following feature :
- [Adding subscriptions or bot administrators](/solutions/aidesk-pro/fundamentals/manage-administrators)
- [Adding SharePoint libraries to index](/solutions/aidesk-pro/fundamentals/documents.html#managing-sharepoint-sites-documents)

### Consent to list possible administrators

Navigate to [Subscription administrators](/solutions/aidesk-pro/fundamentals/manage-administrators.html#licence-administrator) or [bot administrators](solutions/aidesk-pro/fundamentals/manage-administrators.html#licence-administrator) and click on __add an administrator__ button

When you're doing this for the first time, you must consent for the following permissions :
- User.ReadBasic.All

![List users Permissions](/assets/img/agent/user-consent-administrators.png)

### Consent to connect to SharePoint

Navigate to [SharePoint document](/solutions/aidesk-pro/fundamentals/documents.html#managing-sharepoint-sites-documents) and click on __Add library__
When you're doing this for the first time you must consent for the following permissions :
- Files.Read.All

![List Files from SharePoint](/assets/img/agent/user-consent-sharepoint.png)

## Option 2: Admin consent application through Azure Portal

For somes organisations, IT teams must perform ad admin consent because organization security policy ask for it for :
- Adding a new office 365 Application in the tenant
- Consenting any permissions in the Microsoft Graph


In the case, you admin can consent either :
- From the application itself, by checking the __Consent on behalf of your organization__ checkbox. In this case, please Refer to [Option 1](/solutions/aidesk-pro/fundamentals/authentication.html#option-1-use-incremental-consent-within-the-application)
- From __Enterprise applications__ panel in Azure AD **after connecting successfully to AI desk PRO Admin center.**
    You can access the __Enterprise Applications__ panel [here](https://portal.azure.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview/menuId~/null) and search for **AI desk PRO - Admin Center**
::: warning
If you have no results when looking for **AI desk PRO - Admin Center**, you should connect first to [admin center](https://admin.aidesk-pro.com) to activate the application in your tenant or try with [option 3](/solutions/aidesk-pro/fundamentals/authentication.html#option-3-admin-consent-the-application-through-link)
:::

![Enterprise apps panel](/assets/img/agent/consent-enterprise-app-panel.png)

::: tip
You might found 2 **AI desk PRO** applications.\
**AI desk PRO** is the app used by the Teams Application.\
**AI desk PRO - Admin Center** is the app used by the admin center.\
Both Application Id (or client Id) can be found [here](/architecture-security/aidesk-pro/#microsoft-graph)
:::

Click on **AI desk PRO - Admin Center** and navigate to the **Permissions** tab and click on **Grant permissions for {Your Tenant Name}**
![permission tab](/assets/img/agent/consent-entreprise-app-permission.png)

You will be prompt for all permissions at once

![admin consent](/assets/img/agent/consent-admin-all-permissions.png)

::: tip
💡 The full list of permission is available [here](/architecture-security/aidesk-pro/#microsoft-graph)
:::

## Option 3 : Admin consent the application through link.

::: warning
**This section is intended for experienced users.** \
Before clicking on any admin consent link, please carefully verify its accuracy. Incorrect consent links could compromise the security of your tenant and lead to unintended permissions being granted.
:::

Clicking on the folowing link redirects to the consent page for all the necessary permissions for our application at once.

[https://login.microsoftonline.com/organizations/adminconsent?client_id=b2c0dc10-7931-4437-8e5b-21aeb264b648](https://login.microsoftonline.com/organizations/adminconsent?client_id=b2c0dc10-7931-4437-8e5b-21aeb264b648)

::: warning
Please review carrefully that the application Id in the URL is the one listed [here](https://docs.witivio.com/architecture-security/aidesk-pro/#microsoft-graph) and that the application is certified by Witivio with the blue mark.
:::

![SharePoint consent with link](/assets/img/agent/sharepoint-consent-link.jpg)
