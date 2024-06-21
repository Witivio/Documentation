# Teams prerequisites

## Prerequisites

Before performing this step, your chatbot must be created on the Witivio platform (and therefore appear in the chatbots list). The chatbot does not necessarily have to be configured. You can perform this step at the time of the chatbot’s creation or when adding a channel.

## Creation of an Azure Bot Channel

::: warning ⚠️
Before starting, you must have access to an Azure subscription.
:::

Login to the portal [https://portal.azure.com](https://portal.azure.com)

* Click on <strong>Create</strong> a resource

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/prerequisite1.png')" alt="click on create a resource">
</div>


* In the search bar, enter <strong>bot channel registration</strong>

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/prerequisite2.png')" alt="bot channel registration">
</div>


* Click on Create

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/prerequisite3.png')" alt="click on create">
</div>


| Chatbot Name        | The name of the chatbot you want. Good practice: put the same as in the Witivio interface |
|---------------------|-------------------------------------------------------------------------------------------|
| Subscription        | Your Azure Subscription                                                                   |
| Resources Group     | The Azure resources group you want                                                        |
| Location            | The location of the service you are going to create. North Europe = Dublin                |
| Pricing Tier        | S1                                                                                        |
| Message URL         | The URL displayed in the Witivio interface                                                |
| Application Insight | Disabled                                                                                  |

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/prerequisite4.png')" alt="bot channel">
</div>


* Click on <strong>create</strong>
* After the deployement, Click on <strong>Settings</strong> and in the link <strong>Manage</strong>

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/prerequisite5.png')" alt="Click on Settings and in the link Manage">
</div>


* Click on <strong>New Clients secret</strong> the select <strong>Never</strong>

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/prerequisite6.png')" alt="New Clients secret">
</div>


* Copy and <strong>keep</strong> the value

Once created, Teams must now be activated on this new channel.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/prerequisite7.png')" alt="Teams must now be activated">
</div>


Click on <strong>channels</strong> then click on the Teams icon.

Click on <strong>save</strong>.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/prerequisite8.png')" alt="click on save">
</div>


Accept Microsoft's terms of use.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/build_your_chatbot/prerequisite9.png')" alt="Accept Microsoft's terms of use.">
</div>


## Configure the channel on the Witivio 365 application

Your channel is created on Azure. Therefore, you have all the information to activate it in the interface. To this, copy the Microsoft App ID and Microsoft Password into the corresponding fields.

Your channel is configured and your chatbot will be active on Teams in a few minutes.

### Add an image to the bot

When created, your chatbot Teams does not have a picture.

To add a photo, access the bot channel on Azure. Click on Settings then Add a picture.

::: tip 💾
Don't forget to register !
:::



---



<Hubspot />