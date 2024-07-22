# Teams Catalog

The **Catalog Teams** page allows an administrator/coach to publish or remove the application **'Chatbots'** in the Teams catalog automatically or manually.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/homepage.PNG')" alt="catalogue teams">
</div>

## Catalog application 

With multiple chatbots on Microsoft Teams, it is a good idea to implement an application to allow users to identify these chatbots more easily.

This catalog application lists all the chatbots available in Microsoft Teams, the chatbots you chose to "**publish**" on the application  ([Publish a chatbot in Teams](/solutions/virtual-agent-studio/chatbot/settings/channels.html#microsoft-teams).

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/chatbotApp.PNG')" alt="autorisation teams">
</div>

This application displays to the users the chatbots list deployed in the Teams tenant. It shows them the name and the scope of each chatbot.

## Automatic installation ##

#### Authorization ####
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

Vous devriez voir apparaitre une fenêtre d'authentification microsoft.
**Identifiez-vous** avec les informations d'un **admnistrateur du tenant**. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/popupautorisation.PNG')" alt="autorisation teams">
</div>

Once the authorization is successfully completed, the status above the **"I authorize you "** button should change to **connected** as shown in the following image. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/authSucess.PNG')" alt="autorisation teams">
</div>

#### Publication ####
------------------------------

Once **connected**, you can publish the application automatically from the platform by clicking on the **Publish** button.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/publishApp.PNG')" alt="publication application teams">
</div>

Once published, the **Remove** button that appears allows you to remove the application from the Teams catalog.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/unpublishApp.PNG')" alt="publication application teams">
</div>


## Manual installation ##
If you do not have a **Tenant administrator** account, you can publish the **'Chatbots'** application manually in Teams.

#### Download ####

From the **'Catalog Teams'** page, download the application package by clicking on the **download** button as shown in the image below.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/downloadZip.PNG')" alt="download application teams">
</div>

#### Publication ####

Go to **Teams**, then click on °°° in the left navigation bar, as shown in the image below. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/teams.PNG')" alt="dropdown teams">
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
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/idAppen.PNG')" alt="application approved">
</div>

::: danger 🔴
Without the previous step, the application will not work. 
:::

#### Administration ####

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
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/manageappcatalog3.PNG')" alt="application approuv">
</div>

Then click on publish.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/home/manageappcatalog4.PNG')" alt="application approuv">
</div>


#
---



<Intercom />
<Clarity />
<GoogleAnalytics />