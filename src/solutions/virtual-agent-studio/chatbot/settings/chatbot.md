# Chatbot accessibility


It is possible to restrict access to the chatbot through three authorization mode:
- by domain 
- by configuring a white list 
- via an authorization API

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/chatbot1.png')" alt="low score">
</div>


## Restriction by domain

If your federation settings allow it, the chatbot is accessible to everyone on
Skype for Business even outside the company.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/chatbot2.png')" alt="low score">
</div>



However, you can restrict access to it on the channel Skype for Business by
entering the domain to which you want to allow access. Only a user of the
domains listed in the configuration will be able to talk to the chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/chatbot3.png')" alt="low score">
</div>



## White list

You can also restrict the acess to the chatbot by setting up a whitel liste. This latter will contain people who will be allowed to talk to the chatbot. 
This option is availible for the whole channels.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/chatbot4.png')" alt="low score">
</div>



You can cerate a new list or select an already existing list.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/chatbot5.png')" alt="low score">
</div>


The adress which allows to identity a user in the white list, it’s different
according to the channel:

-   Skype for Business: SIP adress
-   Microsoft Teams: UPN adress
-   Webchat: the adress depend on the configuration

::: warning ⚠️
When a white list is deleted, the chatbot will again be access to everyone.
:::

::: tip 💾
Do not forget to save changes!
:::

## API d'autorisation

Configure calls to external APIs to allow the chatbot to communicate with a user. 

To do this, click on "add a new authorization mode" and select "Authorization API". 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/chatbot6.png')" alt="low score">
</div>




- Then select the HTTP verb : POST or PUT
- Enter the URL of your API
- Enter the Body you want to send to your API. Example: {name:'Dupont'}
- Enter the Header to send to your API, indicating the key and the value. Several Headers can be added ( "+ ADD" button). 

You have the possibility to test your authorization API before publication. To do this, use the "TRY" button at the top right of your configuration page. 

::: tip 💾
Once you have configured your authorization API, don't forget to register! 
:::



---

<Intercom />
<Clarity />
<GoogleAnalytics />
