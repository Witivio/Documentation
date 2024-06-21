# Privacy policies

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/privacy1.png')" alt="low score">
</div>



Click on “Settings” tab then on “Privacy policies” to configure the policies
privacy of the chatbot. You can select the profile by using the filer.

You have 3 possibilities:

### 1. History
---

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/privacy2.png')" alt="low score">
</div>



When you enable the conversation history recording, all exchanges between the
user and the chatbot are recorded.

If you choose to disable this option, the data is also saved but the content is
replaced by the following text: (anonymized). In addition, the export of logs to
the "History" tab is not available.

For example:

-   When the option is enabled: if the user says “Hello”, the hello message, the
    hour, the date and the channel are recorded.

-   When the option is disabled: if the user says “Hello”, the message
    “anonymized”, the hour, the date and the channel are recorded.

### 2. User identity
---

Contrary to the previous option, this one allows you to identify who sent the
message.

-   If the first 2 options are enabled: you will know the user, the message and
    at what time did the user send it.

-   If only the second option is enabled (user identity): you will know the
    identity of the user but not the messages.

-   If the second option is disabled: the platform replaces the user's identity
    with an Id (Skype: SIP address, Teams: UPN). This is an identifier generated
    by a Hash, so you will not be able to know who the user is.

::: warning ⚠️
Anonymization is not retroactive. Each message received by the chatbot applies
the privacy settings in effect at the time of receipt. If the setting changes
while a user talks with the bot, the new settings will be applied up to 10
minutes after saving the new settings.
:::

-   If the "user identity" option is disabled, it is then possible to customize
    the answer elements to be provided to users, in case the user queries the
    bot on his personal data.

### 3. Notify users
---

You can enable this option (which is automatically disabled): When the user
starts a conversation with the chatbot for the first time, the chatbot informs
him that the conversation is recorded.

You will then have to customize this message.

For example: Hello, I inform you that our conversation is recorded. If you do
not wish your personal data to be saved for improvement purposes, I invite you
to ask your colleagues your questions. Here is the link to our company's
personal data protection policy.

::: warning ⚠️
The data that Witivio may record are:
:::

E-mail (depending on the channel: UPN and/or SIP) - Last name - First name.

This data is only used when **conversation history** and **user identity**
recording **are enabled** to improve chatbot performance.

Visit here the GDPR section

## GDPR

The Witivio platform allows users to retrieve their data and anonymize them.

To do this, chatbots knows 4 intentions that allow him to answer the questions:

* Is the conversation being recorded?
* Are you registering my identity?
* What kind of data do you have about me?
* Please anonymize my data.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/gdpr1.png')" alt="GDPR">
</div>

The chatbot has a predefined functioning if the user identity saving option is enabled. In case the option is desabled, it is possible to configure the messages.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/gdpr2.png')" alt="GDPR">
</div>

### Retrieve your data
---

When a user asks the chatbot to compile his data, the chatbot executes the request and asks to which address it should send the zip archive that will be generated. This process can take up to an hour.

The user gets an email from the sender jeff@witivio.com and the subject of the e-mail is: "Your personal data" or "Vos données personnelles" depending on the language in which the user made the request.

The sent archive contains a JSON file as follows:

```
 {
  "conversations": [
    {
      "statisticEntryType": "MessageFromUser",
      "timeStamp": "3/19/2019 10:51:01 AM +00:00",
      "activityId": "DkUXQSpoa0NFHwfp7BuBJ5-9|0000000",
      "replyToId": null,
      "conversationId": "DkUXQSpoa0NFHwfp7BuBJ5-9",
      "fromName": "Bob",
      "fromId": "bob@witivio.com",
      "text": "Salut",
      "attachements": [],
      "suggestedActions": null
    },
    {
      "statisticEntryType": "MessageFromBot",
      "timeStamp": "2/4/2019 3:43:08 PM +00:00",
      "activityId": null,
      "replyToId": "DkUXQSpoa0NFHwfp7BuBJ5-9|0000000",
      "conversationId": "DkUXQSpoa0NFHwfp7BuBJ5-9",
      "fromName": "Dynameet365",
      "fromId": "Dynameet365-dev@V_VONwGAD4U",
      "text": "",
      "attachements": [
        {
          "contentType": "application/vnd.microsoft.card.hero",
          "contentUrl": null,
          "content": {
            "title": null,
            "subtitle": null,
            "text": "Choisis ton site",
            "images": null,
            "buttons": [
              {
                "type": "imBack",
                "title": "Lyon",
                "image": null,
                "text": null,
                "displayText": null,
                "value": "Lyon"
              },
              {
                "type": "imBack",
                "title": "Paris",
                "image": null,
                "text": null,
                "displayText": null,
                "value": "Paris"
              }
            ],
            "tap": null
          },
          "name": null,
          "thumbnailUrl": null
        }
      ],
      "suggestedActions": null
    },
  ]
}
```

This file is based on the user's identifier on the channel: his user channel ID.

If the chatbot is multi-channel, it is possible that the file does not contain all the exchanges. This can happen if the identifiers are different between the different channels.


### Anonymize your data
---


When a user asks the chatbot to anonymize his data, the chatbot executes the request. He compiles all the data about the user (as if it was going to send them) and starts the update process. The text of messages sent to and from the chatbot is replaced by the string"(anonymized)" and the identifiers are replaced by a hash.

::: tip 💡
Escalation lists and distribution lists are not modified because they are necessary for the good functioning of the application.
:::

### Particular situation
---

#### Identity saving: disabled
---

Data anonymization intentions are not available if the option of saving the user identity is disabled. It is possible in this case to set the chatbot response.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/gdpr3.png')" alt="GDPR">
</div>

If the fields are empty, the chatbot will answer as follows:

* **User**: What kind of data do you have about me?
* **Chatbot**: I am sorry, I cannot give you your personal data because I did not record anything.
* **User**: Please anonymize my data.
* **Chatbot**: Do not worry, all data is already anonymized

#### Intentions linked to the GDPR: disabled
---

It is possible de disable the intentions previously configured and linked to the GRPD. This allows to avoid conflicts in case you want to manage these answers on your own.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/gdpr4.png')" alt="GDPR">
</div>

::: warning ⚠️
The deactivation of GDPR intentions means that users can no longer ask the chatbot to compile their data and anonymize it. We advise you, when disabling intentions, not to store the user's identity to avoid any personal data problems.
:::




---

<Hubspot />
