# Creation process


### What for ?


The creation process includes all the steps to create, modify, test and finally
publish all questions and answers.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/creation1.png')" alt="low score">
</div>




### How ?


Click on the “Knowledge” tab then "KB", you will find the different components
to start the creation process:

-   IMPORT
-   EXPORT
-   TRAIN
-   TRY
-   PUBLISH

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/creation2.png')" alt="low score">
</div>




## Creation


It is possible to enrich the knowledge base by importing an Excel file. Click on
"**IMPORT**" to import a previously created database (questions, alternatives,
answers).

If there are several categories in your knowledge base, select the category you
want to import into before importing. (see more AJOUTER LIEN vers KB )

Once your knowledge base is filled, you can click on "**EXPORT**” to download
all your knowledge. It is possible to download by category by adding a filter
before exporting. This file includes the questions, the categories, the
profiles, the answers (text, adaptive card, contextual, dialogue, MS Flow,
Webhook, Logic Apps), date of publication, creation and modification as well as
the person who created and/or modified the questions.


## Training

The "**TRAIN**" button allows you to synchronize all the information on the
platform and integrate it.

The simple train is only effective for the latest additions or modifications. However, you can choose to run a **full training** in order to synchronize all the chatbot's knowledge. 

Once the information has been trained, click on **"TRY"** to know how the chatbot
“behave” in bot integration and production environment.

The Webchat displayed <img class="webchat_img" :src="$withBase('/assets/img/virtual-agent-studio/knowledge/creation3.png')" alt="low score"> at the bottom right of the page (Knowledge \> KB) , is your chatbot in
integration and also allows you to test the chatbot before the information is
published. In addition, when the profile is modified in the knowledge base, the
chatbot takes into account the choice of the new profile in the test.

A new version (V2) of the Webchat window allows to display the Adaptive Card
answers. This version does not overwrite the current version (V1), however, the
latter will no longer be supported, from October 1, 2019.

::: warning ⚠️
Don't forget to migrate to the new version!
:::

This new version also allows you to manage the security of the chatbot in a
better way. On the one hand, it allows to know where the webchat is deployed.
Indeed, for reasons of good governance, it is necessary to explicitly indicate
where the webchat is located (the different sites on which it is available). On
the other hand, this version allows to avoid adding webchats without permission.

The Webchat Is also available in the Webchat channel in the "Settings" tab.
Here, it is possible the test and talk directly to the chatbot in production.

::: warning ⚠️
In case you want to add a conversation tree to your knowledge base and the latter already contains a large number of questions with simple and contextual answers, the training (i.e. synchronization) can be longer. Click on "Train" and wait until the button is greyed out, before continuing to build your knowledge. 
:::



## Publication


When the questions/answers are tested and the chatbot performs correctly, it
will be possible to publish them by clicking on "**PUBLISH**". The user has
access to your chatbot's new knowledge.

Click on “Knowledge” then “KB” to display the total number of questions in the
knowledge base and the date/time of last publication are displayed# n the
"Knowledge" ta



#
---

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />
