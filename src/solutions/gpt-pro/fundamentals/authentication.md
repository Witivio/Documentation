# Authentication

At Witivio, the security of our clients' data is a top priority. To ensure the highest level of protection and ease of use, we implement Office 365 SSO as a single sign-on method for seamless access to our applications. This approach not only enhances user experience but also leverages existing security measures, which means certain permissions need to be activated on your side.

Our SSO solution simplifies authentication by allowing users to sign in with their Office 365 credentials, minimizing password fatigue and enhancing overall security. This method ensures that users benefit from a centralized authentication process, reducing vulnerabilities associated with multiple login systems.

This SSO system allows our clients to integrate their Azure security policies for effective rights management and streamlined operations, ensuring that data security protocols remain intact.

Therefore, it is necessary for an Azure administrator to:

## Add administrators in the admin center: 


To do this:  Go to https://admin.gpt-pro.com/ and click on 'License Administrators' in the left menu and add the administrators.  For more details, see the 'Manage administrators' section.

For adding documents in the back office (local documents), no additional permissions are required.
However, to connect to your SharePoint, it is necessary to authorize permissions.


## Authorize permissions to connect to your SharePoint documents:

There are different ways to proceed:

**Option 1: SharePoint authorization for all users via a consent page link:**

https://login.microsoftonline.com/organizations/adminconsent?client_id=b2c0dc10-7931-4437-8e5b-21aeb264b648

Clicking this link redirects to the consent page for all the necessary permissions for our application at once.
[SharePoint Consent Link](/assets/img/gpt/sharepoint-consent-link.jpg)

**Option 2: SharePoint authorization for all users from GPT Pro:**

 • Go to the GPT Pro admin interface:
 - Click on the relevant chatbot.
 - Navigate to the left menu and click:
- Knowledge > SharePoint

 • Click on + Add Library

   As an M365 administrator, the following screen will appear:
   - Check the box "Consent on Behalf of your organization" to provide consent for everyone.
   - Then click "Accept."

   [SharePoint Consent Link](/assets/img/gpt/sharepoint-consent-gptpro.png)

**Option 3: SharePoint authorization for all users from Azure:**

To do this:
   
   • Access Azure and navigate to:
- Enterprise applications
- GPT Pro admin center
- Permissions (security menu)
- Then click the blue button "Grant admin consent for MSFT."
[SharePoint Consent Link](/assets/img/gpt/consent-gptpro-admin-center.png)

The following pop-up will appear, allowing you to accept and authorize for all users:
[SharePoint Consent Link](/assets/img/gpt/consent-gptpro-popup-azure.png)
