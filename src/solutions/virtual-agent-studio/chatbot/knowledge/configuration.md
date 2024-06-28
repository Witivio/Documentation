# Configuration

Click on **Knowledge** then **Configuration**.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/configuration1.png')" alt="low score">
</div>




## Spell checking, jokes and small talk

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/configuration2.png')" alt="low score">
</div>




Automatic spell checker (1) can be activated or deactivated. When this feature
is enabled, the chatbot corrects spelling and typing mistakes.

::: warning ⚠️
Business acronyms may also be corrected by the automatic spell checker can
also correct them.
:::

In addition, jokes and small talk (common conversations), for example "how are
you doing?" (2)&(3) can be programmable via this tab. However, please note that
jokes and small talk are only managable by Witivio for all its customers.  
  
[Chitchat dowload link](https://witivio.blob.core.windows.net/static/Chitchat.xlsx) 


## Scores

The supported confidence scores can also be configured.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/configuration3.png')" alt="low score">
</div>


<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/configuration4.png')" alt="low score">
</div>


The minimum score difference between one question and another in order to **start the Active Learning** can also be configured.

As a reminder, **the Active Learning is triggered when the chatbot has a doubt about the understanding of the question and several questions in the knowledge base trigger a
high score [**(Scoring rules)**](/solutions/virtual-agent-studio/chatbot/inbox/scoring_rules.html) (difference of less than 20 points between
the different questions).

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/configuration5.png')" alt="low score">
</div>


#
---

<Hubspot />
<Clarity />
<GoogleAnalytics />
