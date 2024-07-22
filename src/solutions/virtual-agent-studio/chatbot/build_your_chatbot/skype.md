# Required prerequisite Skype for Business Online

## User creation

Before you start, in your Office 365 administration center [https://portal.office.com/adminportal/](https://portal.office.com/adminportal/), create a user with a password for the chatbot.

::: tip 💡 Good Practice
- Verification: the password never expires
- Uncheck: the user must change the password at the next login
- License Skype for Business
:::

## Azure Active Directory

Log in to your Office 365 administration center [https://portal.office.com/adminportal/](https://portal.office.com/adminportal/)

* Select Administration Center in the left panel.
* Select Azure AD

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/skype1.png')" alt="select Azure AD">
</div>


- You are forwarded to [https://portal.azure.com/](https://portal.azure.com/).

- Select <strong>Azure Active Directory</strong> in the left panel.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/skype2.png')" alt="Azure active directory">
</div>


* Select <strong>Apps registration</strong> in the left panel.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/skype3.png')" alt="apps registration">
</div>


* Select <strong>New application registration</strong>

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/skype4.png')" alt="new application registration">
</div>


-   Insert the following configuration and choose **Create**

| Name             | WitivioConnector              |
|------------------|-------------------------------|
| Application type | Native                        |
| Sign-on URL      | <https://www.witivio.com/s4b> |


* Select WitivioConnector from the list of applications.
* Copy the application ID

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/skype5.png')" alt="azure deleged permissions">
</div>


* Select Required permissions in the right panel.
* Select Add
* Select Select an API
* Select Skype for Business Online
* Select Select permissions

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/skype6.png')" alt="azure permissions delegeted">
</div>

* Select all elements in the section Delegated permissions
* Select <strong>Save</strong>

## Allow an Azure AD application

* Copy this URL into the notepad: 
<pre style="color:white">https://login.microsoftonline.com/common/oauth2/authorize?response_type=id_token&client_id=[APPIDingeredirect_uri=https:/www.witivio.com/s4b&response_mode=form_post&form.online.lync.com & prompt=admin_consent</pre>

* Replace the word <strong>[APPID]</strong> with the application created previously.
* Copy-paste in a browser.
* Log in as an Office 365 administrator.
* Allow permission.



---



<Intercom />
<Clarity />
<GoogleAnalytics />