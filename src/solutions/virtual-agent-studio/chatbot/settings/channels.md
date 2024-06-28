# Channels

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels1.png')" alt="low score">
</div>



This tab allows you to configure the channels on which the chatbot is available:
- you can modify the channels already available or add a new channel later.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels2.png')" alt="low score">
</div>



## Skype for Business

Click on “edit” to access the setting of the channel Skype for Business.  
Here you can click on pause ⏸️ if you want that the chatbot appear “offline” on
skype; or click on 🔄 restart to start the connector in case of issue.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels3.png')" alt="low score">
</div>


The following boxes contain the connection information: E-mail, password, Azure
ID.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels4.png')" alt="low score">
</div>


You can also indicate the description of the chatbot which will appear on Skype.
For example: HR assistant. In case you decide to modify it, the change will
automatically appear on Skype above the chatbot name.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels5.png')" alt="low score">
</div>


It also possible to consult the event logs of the connector.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels6.png')" alt="low score">
</div>



## Microsoft Teams

Click [**here**](/solutions/virtual-agent-studio/chatbot/build_your_chatbot/requisites.html) to know how to activate a chatbot on Microsoft Teams.


### Automatic installation 
------------------------------

#### Authorization
------------------------------

::: warning 
It is required to be authorized by an administrator of the chatbot to automatically publish the application **'Chatbots'** and the Teams applications of each chatbot.
**Without this explicit authorization, the installation of the Teams application cannot be automated.**
:::

Here are the rights to authorize the installation of the Teams application:
| **Name** | Witivio - BotCatalog |
| --- | --- |
| **ID** | b4633c92-1b8e-4dbf-86cb-51ec202317c9 |
| **Permissions** | Delegated permissions |
| **Scopes** | AppCatalog.Read.All, AppCatalog.Submit, TeamsAppInstallation.ReadWriteForUser, offline_access, openid, |


In order to publish the application **'Chatbots'** in the Teams catalog, Witivio needs the authorization of a **Tenant Administrator**.
Click on the **"I authorize you "** button to start the authentication process.
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/autorisationAuto.PNG')" alt="autorisation teams">
</div>

A Microsoft authentication pop-up is displayed.
**Login** with the credentials of a **tenant administrator**. 
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/popupautorisation.PNG')" alt="autorisation teams">
</div>

Once the authorization is successfully completed, the status above the **"I authorize you "** button should change to **connected** as shown in the following image. 
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/authSucess.PNG')" alt="autorisation teams">
</div>

#### Publication
------------------------------
Once **connected**, you can publish the application automatically from the platform by clicking on the **Publish** button.
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/publishApp.PNG')" alt="publication application teams">
</div>

Once published, the **Remove** button that appears allows you to remove the application from the Teams catalog.
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/unpublishApp.PNG')" alt="publication application teams">
</div>


### Manual installation 
------------------------------
If you do not have a **Tenant administrator** account, you can publish the **'Chatbots'** application manually in Teams.

#### Download 

From the **'Catalog Teams'** page, download the application package by clicking on the **download** button as shown in the image below.
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/downloadZip.PNG')" alt="download application teams">
</div>

#### Publication
Go to **Teams**, then click on °°° in the left navigation bar, as shown in the image below. 
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/teams.PNG')" alt="dropdown teams">
</div>

A pop-up box appears, then click on **More Apps**.
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/dropdownteams.PNG')" alt="dropdown teams">
</div>

You are now in **Teams Catalog**.
Click on **Submit to app catalog** as shown in the screen below.
Then click on **Submit an app**.
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/appliCatalogue.PNG')" alt="application personalisé teams">
</div>

A pop-up opens, select the package you downloaded previously and click on **Open**.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/popupappliperso.PNG')" alt="application pop up personalisé teams">
</div>

The application will appear with a pending status.
Ask an administrator [procedure](/solutions/virtual-agent-studio/chatbot/home/catalog.html#administration):
* To accept that the application **Chatbots** can be published in the Teams catalog.
* To give you **the id of the application in the catalog**. 

Once the administrator has accepted your application, the status of the application **'Chatbots'** will change to **Approved**.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/approuved.PNG')" alt="application approuvé">
</div>

Then you will find the application in your **Teams Catalog**.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/chatbotsCatalogues.PNG')" alt="application approuvé">
</div>

To complete the publication go back to the Platform Catalog page. Enter the **application id** provided by the administrator when approving the application **'Chatbots'**.
Then click on **Save app id**.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/idApp.PNG')" alt="application approuvé">
</div>

::: danger 🔴
Without the previous step, the application will not work. 
:::

### Administration ###


As an **admin** go to the **Microsoft Teams admin center** from Office 365 portal.
Access the **Manage apps** tab.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/manageappcatalog.PNG')" alt="catalog">
</div>

Using the search bar, look for the application **'Chatbots'** in the list and click it.
You access an information page of the application **'Chatbots'**.
First, send the **App ID** to the person who published the app.
This user will need it to add it to the Witivio platform.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/manageappcatalog2.PNG')" alt="catalog">
</div>

Then change the publication status from **Submitted** to **Published**.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/manageappcatalog3.PNG')" alt="application approuvé">
</div>

Then click on publish.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/manageappcatalog4.PNG')" alt="application approuvé">
</div>

You can also choose whether or not to display your chatbot in the **'Chatbots'** application.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/displayApp.PNG')" alt="publication application teams">
</div>

Here are [**the steps**](en/chatbot/home/catalog.html) to follow to publish the **Chatbots** application on Teams.


## Webchat


The webchat channel is automatically activated. 

<div class="image_center">
  <img class="webchat_img" :src="$withBase('/assets/img/virtual-agent-studio/settings/creation3.png')" alt="low score">
</div>


::: danger 🔴
The Webchat window is your chatbot in integration and allows you to test the chatbot before publishing it.
:::

If you modify the profile in the knowledge base, the chatbot takes into account
the choice of the new profile in the test.


### Configuration of the Webchat V2 component

```
<script>
        window.webChatSettings = {
            botId: '[BOTID]',
            color: '[COLOR]',
            background: 'square3d',
            avatar: '[URL]',
            title: '[TITLE]',
            description:"[DESCRIPTION]",
            height: '650px',
            callout: true,
            welcome: true,
            width:'400px',
            apiKey: '[API KEY]',
            displayMode:'close',
            branding: false,
            autoscroll: false,
            autocomplete:false,
            hideSendBox:false,
            refresh: false,
        };
        !function () { function t() { var t = e.createElement("script"); t.type = "text/javascript", t.async = !0, t.src = "https://webchat.witivio.com/v2/init.js", t.onload = function () { witivioWebChat.load(window.webChatSettings) }; var n = e.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n) } var e = document, n = window; n.attachEvent ? n.attachEvent("onload", t) : n.addEventListener("load", t, !1) }();
</script>
```


<table>
        <tr>
            <td>botId</td>
            <td>The unique ID of your chatbot. The ID is available in the settings menu.</td>
        </tr>
        <tr>
            <td>color</td>
            <td>Primary color in hexa.</td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>URL of your chatbot's image.</td>
        </tr>
		<tr>
            <td>title</td>
            <td>The title of the chat window. Usually the name of the chatbot.</td>
        </tr>
	    <tr>
            <td>description</td>
            <td>Description of the chat window. Usually the role of the chatbot.</td>
        </tr>
		<tr>
            <td>callout</td>
            <td>Activate the welcome message. (by default: true)</td>
        </tr>
		<tr>
            <td>welcome</td>
            <td>Enable the display of the welcome message in the chat window. (by default: true)</td>
        </tr>
		 <tr>
            <td>user</td>
            <td>Not mandatory. If you are on SharePoint Online, you can use : 
            <pre><code>
{
    'id': _spPageContextInfo.aadUserId,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            or
            <pre>
            <code>
{
    'id': _spPageContextInfo.userPrincipalName,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            If no configuration is specified, the component generates a unique identifier that is stored in the browser.
            </td>
        </tr>
        <tr>
            <td>refresh</td>
            <td>Displays a button that refreshes the component (by default: false)</td>
        </tr>
         <tr>
            <td>hideSendBox</td>
            <td>Hide the message entry field and the send button (by default: false)</td>
        </tr>
        <tr>
            <td>apiKey</td>
            <td>Find the api key in the settings of the chatbot</td>
        </tr>
        <tr>
            <td>displayMode</td>
            <td>Determines whether the webchat should be displayed 'open' or 'close' when it is loaded (by default is 'close')</td>
        </tr>
         <tr>
            <td>environnement</td>
            <td>Environment of the Knowledge Base ('production', or 'integration') (by default:  'production')</td>
        </tr>
         <tr>
            <td>triggerableDialogId</td>
            <td>ID of the Triggerable ID to start (optional)</td>
        </tr>
        <tr>
            <td>triggerableDialogItemId</td>
            <td>ID of the Triggerable Item ID to start (optional)</td>
        </tr>
        <tr>
            <td>background</td>
            <td>Background image (by default: square3d) Possible values: (square3d, communication, square, travel)</td>
        </tr>
         <tr>
            <td>autocomplete</td>
            <td>Allows you to display the list of questions in autocompletion mode (by default: false)</td>
        </tr>
         <tr>
            <td>autoscroll</td>
            <td>Allows you to force the auto scroll when a user gets back into the conversation and decides to send a message back into the chat.</td>
        </tr>
        <tr>
            <td>buttonDesign.shape</td>
            <td>Allows you to choose the button's shape, possible values: square, circle, chat (default: circle))</td>
        </tr>
        <tr>
            <td>buttonDesign.icon</td>
            <td>Allows to choose the button icon, possible values: 'bot' will take the avatar of your chatbot, can also take the class of a Font Awesome (for example 'fa fa-quote-right' or 'fas fa-comment') or put a URL to an image (default: fa-comment-dots)</td>
        </tr>
        <tr>
            <td>buttonDesign.height</td>
            <td>Button length, suggested unit: 'px' (by default: '80px')</td>
        </tr>
        <tr>
            <td>buttonDesign.width</td>
            <td>Button width, recommended unit: 'px' (by default: '80px')</td>
        </tr>
        <tr>
            <td>buttonDesign.border</td>
            <td>6 hexadecimal characters for the border or 'none' for no border (beware the 'chat' shape of the button is considered as a border) (by default: 'ffffff')</td>
        </tr>
        <tr>
            <td>buttonDesign.text</td>
            <td>The text to be displayed next to the chosen icon. Over 25 characters, the text will be cut off.</td>
        </tr>
        <tr>
            <td>headerHeight</td>
            <td>allows to set the header size. Possible values: small, normal (by default: 'normal' if not specified)</td>
        </tr>
        <tr>
            <td>position</td>
            <td>webchat position on the page, 'top', 'middle' or 'bottom' then 'left' or 'right' and optionally followed by a margin of maximum 150px (default: 'bottom right 10px 10px')</td>
        </tr>
</table>

#### [Configuration of the Webchat V1 component compatible with IE11 (obsolete)](/solutions/virtual-agent-studio/chatbot/webchat_v1.html)

### Security of the chatbot 

The Webchat allows you to manage the **security of the chatbot** in a better way. It allows you to know where the webchat is deployed. For governance purposes, it is mandatory to explicitly indicate where the webchat is located, and therefore declare the different sites on which it will be available.

::: warning ⚠️
**Without this explicit definition, the webchat will not upload to your site**. This prevents a person from adding webchat without permission.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels8.png')" alt="low score">
</div>

::: danger 🔴
The Webchat also appears in the Webchat channel settings tab, so you can test and talk directly to the chatbot in production.
:::


## SharePoint Modern Webpart

You can download the webpart [here](https://webchat.witivio.com/webpart/witivio-webchat.sppkg)

In order to add the webpart into your SharePoint Modern, you need to add the sppkg package to the app catalog.

> If you do not have an app catalog, a SharePoint Online Admin can create one by following the instructions in this guide: [Use the App Catalog to make custom business apps available for your SharePoint Online environment](https://docs.microsoft.com/en-us/sharepoint/use-app-catalog).

## Deploy the package to app catalog

1. Go to your site's app catalog.
2. Upload or drag and drop the witivio-webchat.sppkg to the app catalog.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels9.png')" alt="low score">
</div>


This deploys the client-side solution package. Because this is a full trust client-side solution, SharePoint displays a dialog and asks you to trust the client-side solution to deploy.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels10.png')" alt="low score">
</div>

3. Select Deploy.


### Configure the webchat for SharePoint Modern

The webchat is now available from your pages in your SharePoint site.

1. Edit a page on your SharePoint Site
2. Click on Add a new WebPart
3. If you scroll down you will find "Witivio-webchat" webpart

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels11.png')" alt="low score">
</div>


4. Select it. the component appear, but the webchat is not configured yet.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/channels12.png')" alt="low score">
</div>

::: warning ⚠️
It will not appear until you configure it.
:::

5. Select the pencil to edit the parameters.

Please refere to the article above to understand the configuration

::: tip 💡
When adding the webpart to SharePoint the user context is send to the webchat. That means that the upn and the name of the user is send to the bot. Do not forget to review your privacy policies if you want your users to be anonymous.


::: warning ⚠️
The sharepoint webpart of the webchat has to be added at the top of the page.
Otherwise it will only be displayed when scrolling.
:::

## Lumapps 

## Beezy 

## Powell 365

## SMS 


Chat with your chatbot by using text message from your mobile phone.

Click [**here**](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-twilio?view=azure-bot-service-4.0&viewFallbackFrom=azure-bot-service-4.0https%3A%2F%2Fdocs.microsoft.com%2Ffr-fr%2Fazure%2Fbot-service%2Fbot-service-channel-connect-twilio%3Fview%3Dazure-bot-service-4.0) for more information about the Twiliio configuration.




---
<Hubspot />
<Clarity />
<GoogleAnalytics />

