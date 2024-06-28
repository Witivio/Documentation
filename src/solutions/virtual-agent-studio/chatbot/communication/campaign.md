# Campaign

To start a push campaign, you have to create a campaign. Click on
“**Communication**” tab then on “**Campaign**”.

::: warning ⚠️
This tab is available for chatbot with Skype for Business and Microsoft Teams as channel.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaign.PNG')" alt="low score">
</div>


Click on “**NEW CAMPAIGN**” to create a new campaign. To configure it, name it and
add the message that the chatbot will send. You can customize the message as
follows:

```
Hello, [FIRSTNAME] +[LASTNAME].
```

When you add or modify a campaign, a text editor allows you to format the
message.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaign2.png')" alt="low score">
</div>




Choose the channel on which you want to boradcast your campaign: Skype or Microsoft Teams. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaign3.png')" alt="low score">
</div>




Recipients can be added from an existing [**user list**](/solutions/virtual-agent-studio/chatbot/communication/user_lists.html) but also by
creating a new mailing list.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaign4.png')" alt="low score">
</div>




Select the day from which the message will be sent (1), the duration of the
campaign (2) and then indicate the working hours of your companies (3).

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaign5.png')" alt="low score">
</div>




### Only for the channel Skype
---
You can schedule the sending of the message when the recipients are "available"
on Skype, or push the message when the status of the recipients is "available",
"absent" or "busy" in Skype.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaign6.png')" alt="low score">
</div>




The programmed message is sent randomly and not at the same time to all
recipients. When a campaign lasts several days, here is the sending process in
case of absence of the recipient:

-   At a pre-calculated time
-   10 minutes later
-   At the exact time after the time of the first message (for example at 2:27
    p.m. then at 3:00 p.m.)
-   The next day during opening hours

This process is repeated 3 times, after this, the message will then be
unprogrammed.

Once the campaign is over, you will find in the "Campaigns" tab a report to
evaluate the success of your communication. For example, the click engagement
measures the number of people who clicked on a link included in the sent
message.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaign7.png')" alt="low score">
</div>


A campaign can be modified only when it has not yet been broadcast. 
Once it has been released, you will be able to get information about it or delete it.


Click on « iNFORMATION » to know:

-   The channel
-   The message of the campaign
-   The name of the list
-   The starting date and hour 
-   The duration of the campaign


>   You can also delete the campaign (DELETE button) or test it (TRY button).

::: warning ⚠️
Once a campaign has started, it cannot be modified or cancelled. 
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaign8.png')" alt="low score">
</div>



The “TRY” button allows you to test if the campaign works well.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaign9.png')" alt="low score">
</div>



Enter your e-mail address to check the efficiency of your campaign. If the
campaign is configured well, you will get the message of the chatbot.

::: tip 💾 
Do not forget to save changes.
:::

::: tip How to create a push campaign
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/_Vhu2RpzHbY?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::

## Teams campaigns

Click on **Communication** tab and then on **Teams Campaigns**. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaignteams.PNG')" alt="campagnesteams">
</div>

Give your campaign a name and choose the type of message you want to program among the following formats: 
* Idea
* Success
* Important 
* Adaptive card 
* Message

### Idea 

Set up the idea message you want to send using the text editor. Once you have added your message, click Next and then refresh Preview before going on to set up your push message. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/teamsidea.PNG')" alt="campagnesteams">
</div>

### Success 

Using the text editor, configure the success message, for example to make an announcement. Once you have added your message, click Next and then refresh Preview before going on to configure your push message. 


<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/teamssuccess.PNG')" alt="campagnesteams">
</div>

### Important 

Using the text editor, set up an important message, for example to communicate a deadline. Once you have added your message, click Next and then refresh Preview before going on to configure your push message. 


<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/teamsimportant.PNG')" alt="campagnesteams">
</div>

### Adaptive card

Create your push message in Adaptive Card format. Add a title, an image, text or a button. Once you have added your message, click Next to continue configuring your push message. 


<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/teamsadaptivecard.PNG')" alt="campagnesteams">
</div>

### Message 

Use this format to create a simple message. Once you have added your message, click Next and then refresh Preview before going on to configure your push message. 


<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/teamsmessage.PNG')" alt="campagnesteams">
</div>

Once the message is created, you can distribute the message : 

* to a new distribution list
* an existing distribution list
* to all users: this means users who have the chatbot application on their Teams. 


::: warning ⚠️
In order to get the scheduled push message, a user must have the chatbot installed on Microsoft Teams.  
:::

Save your draft. Click on EDIT your campaign if you want to :

- Modify your message
- Delete the campaign 
- Try the campaign 
- Send the campaign

* **TRY** 

Before sending the campaign, you have the possibility to try it. Add an email address and click on verify. This will allow you to check if the user has the chatbot application installed in Microsoft Teams. The sending will not be available until the email address corresponds to a valid user. 


* **SEND** 

When editing your message, you can decide to send it now or schedule it to be sent later. 

Click on the arrow to the right of the SEND NOW button, then select Send Later: the campaign can be scheduled to be sent with a delay of up to 6 days.

The campaign is then saved and sent at the time decided. 

Once the campaign is finished, find a report in the Teams Campaign tab > **Completed**.

Click on REPORT to have a summary of the campaign: 

- Campaign name 
- Date and time sent
- Result: error, success, rescheduled or ongoing.
- Recipients 


<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/campaignreport.PNG')" alt="campagnesteams">
</div>





## Survey campaigns 


### Create a new campaign

To create a new campaign please use the button **new campagaign**.
- Fill the name of your campaign 
- Choose the type of campaign message format **survey**.
- Select the survey you've created earlier.
- Select the distribution list
- Save as draft. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/newcampaignsave.PNG')" alt="new campaign">
</div>

::: warning ⚠️
In order to get the scheduled push message, your users must have the chatbot installed on Microsoft Teams.  
:::



<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/communication/edit-a-campaign.PNG')" alt="edit a campaign">
</div>

Once you have created your campaign you can now click on **edit** and use different fonctionnalities.


* **Clone** 

If you want to create a new campaign same as this one. You can use this button to create a copy. Click on the button, add the new title and validate your action. A new copy is created on your campaign dashboard. 


* **TRY** 

Before sending the campaign, you have the possibility to try it. Add an email address and click on verify. This will allow you to check if the user has the chatbot application installed in Microsoft Teams. The sending will not be available until the email address corresponds to a valid user. 


* **SEND** 

When editing your message, you can decide to send it now or schedule to send it later. 

Click on the arrow to the right of the SEND NOW button, then select Send Later: the campaign can be scheduled to be sent with a delay of up to 6 days.

The campaign is then saved and sent when it's time. 

Once the campaign is finished, find a report in the Teams Campaign tab. 

When you choose **send now** you might need to wait a few minutes to receive it into your application. 






---


<Hubspot />
<Clarity />
<GoogleAnalytics />