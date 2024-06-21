# Languages

You have two possibilities to activate your chatbot in multilingual: 

## 1. A knowledge base for each language

It is possible to activate a chatbot in multilingual by adding a new language. Witivio chatbots speak French, English, German, Italian and Spanish (beta version).

::: tip 💾 
Do not forget to register in case you add a language. 
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/multilingual1.png')" alt="low score">
</div>


<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/multilingual2.png')" alt="low score">
</div>



-   **Création of the knowledge bases:** create several knowledge bases, in order to allow the chatbot to give the corresponding answers.

-   **Detection of the wished language:** when the user starts the conversation,
    the chatbot detects automatically the wished language. For example, if the
    user starts the conversation by saying “Bonjour”, the chatbot detects the
    french language and the conversation will continue in French.

::: warning ⚠️
Starting a conversation with "Hello" could mislead the chatbot, as it is a
common term in French as well.
:::

-   **Search in the corresponding knowledge base**: the chatbot recognizes the
    language used by the user in the first message of the conversation. The
    chatbot therefore uses the corrisponding knowledge base.

-   **Temporary saving of the choice for 7 days**: The detected and chosen
    language is temporarily saved for 7 days. If the user want to address the
    chatbot in another language, he must explicitly request it. > For example: **"I speak English"** or **"Je parle français"**. Once this request has been made, the chatbot records this choice again for 7 days and continues to use this new language until the next explicit request.


### Automatic language change (beta)
---

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/multilingual3.png')" alt="low score">
</div>



When your chatbot is multilingual and you decide to **enable the following option** "switch language automatically when the user speaks in another language", the chatbot recognizes the new language spoken and continues the conversation in the detected language.

For example, when a user starts the conversation with "bonjour" the chatbot detects the French language and continues in French; if the user says "Buongiorno" for example, the chatbot detects and automatically switches to Italian.

However, when this option is disabled and the chatbot is multi-lingual, use for example the phrase "I speak English" or "je parle français" to switch from one language to another. 


## 2. Automatic translation (beta)

You have the possibility to activate a beta version of the automatic translation. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/multilingual4.png')" alt="low score">
</div>


<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/multilingual5.png')" alt="low score">
</div>



When you enable this option, Click + Add to configure :

- **the language spoken by the user (for instance Bosnian and Spanish)**

> Supported langages : Afrikaans, Arabic ,Bangla, Bosnian, Bulgarian, Catalan, Chinese, Croatian, Czech, Danish, Dutch, Estonian, English, Finnish, French, German, Greek, Haitian Creole, Hebrew, Hindi, Hmong Daw, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kiswahili, Klingon, Korean, Latvian, Lithuanian, Malay, Maltese, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swedish, Tamil, Thai, Turkish, Ukrainian, Urdu, Vietnamese, Welsh.


- **the knowledge base language in which the chatbot will search for the answer (for instance French)**

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/multilingual6.png')" alt="low score">
</div>



The questions asked in Spanish and Bosnian are detected and translated into French. 

You also have the possibility to translate or not translate the answer. 

::: warning ⚠️
When the automatic translation is configured, the answer formatting is not saved and can therefore be altered.
:::

::: warning ⚠️
Please also note that some words, such as professional words, may also be translated. 
:::

> For example, from **English** to **French**, "**Microsoft Teams**" can be translated into "**Microsoft équipe**". 

## 2.1 Automatic translation customization

This feature allows you to teach the chatbot new words to improve automatic translation by taking advantage of Neural Machine Translation (NTM) technologies. The chatbot will then better understand the context of the whole sentence before translating it.

 

Automatic translation customization can be very useful when translating business acronyms or company-specific vocabulary. 

 

Once the automatic translation is activated and configured, it will be possible to customize it.

<div class="image_center">

  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/automatictranslationcustom.PNG')" alt="automatictranslation">

</div>

 <br />
 <br />

When the automatic translation feature is enabled from the Settings > Languages tab, a new tab appears: Automatic translation customization. 

 <br />
 

::: warning ⚠️
When configuring, English must be either the source language or the translation language.
:::

Here is a table of all supported languages

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/parametres/supportedlanguages.PNG')" alt="automatictranslationcustomization">
</div>

::: tip 💡
Once your dictionary is complete, when you click on the TRAIN button, it can take up to 30 minutes to synchronize the added items. During this time, it will not be possible to make any changes on this page. However, you can use all the other tabs of the platform. 
 

Once this training is over, if you make new changes and start a second training, the items from the first training will still be available. 
:::

 
 <br />

<div class="image_center">

  <img :src="$withBase('/assets/img/virtual-agent-studio/settings/automatictranslationcustom2.PNG')" alt="automatictranslation">

</div>


---

<Hubspot />
