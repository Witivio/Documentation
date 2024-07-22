# Overview Inbox

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/inbox1.png')" alt="Suggested questions 2">
</div>


## What for ?


When a user asks a question, an artificial intelligence calculates for each
question in the knowledge base its match rates with the question asked. This is
called the confidence score. [**(See : scoring rules)**](/solutions/virtual-agent-studio/chatbot/inbox/scoring_rules.html)

The inbox therefore makes it possible to list all the questions for which the
chatbot has no answer or has not been able to answer directly.

::: danger 🔴
The inbox allows the coach to handle unanswered questions in order to
guarantee a continuous improvement of the chatbot's knowledge.
:::

::: tip 💡️ Good practice
It is essential to process the inbox data regularly in order to
consolidate the chatbot's knowledge.
:::

## How ?


The inbox has four sections:

-   [**Unanswered questions**](/solutions/virtual-agent-studio/chatbot/inbox/unanswered_questions.html)

-   [**Low score**](/solutions/virtual-agent-studio/chatbot/inbox/low_score.html)

-   [**Suggested questions**](/solutions/virtual-agent-studio/chatbot/inbox/suggested_questions.html)

-   [**Negative Feedbacks**](/solutions/virtual-agent-studio/chatbot/inbox/negative_feedbacks.html) 

The "Export" button in the top right corner allows you to export all this data.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/inbox2.png')" alt="Suggested questions 2">
</div>



## Scoring rules

The scoring rules are the rules which determine the triggering of the

-   [**Active Learning**](/solutions/virtual-agent-studio/chatbot/tools/active_learning.html)

-   [**Low Score**](/solutions/virtual-agent-studio/chatbot/inbox/low_score.html)

-   **No Answer**

1.  **Direct answer:** the chatbot gives an answer when the score is higher than
    50%.

2.  **The Active Learning:** it triggers when the chatbot has a doubt about the
    understanding of the question, indeed several questions in the knowledge
    base trigger a high score (with a difference of less than 20 points)

3.  **Low Score:** is triggered when only one question in the knowledge base
    corresponds to the question asked by the user but the score is as its name
    suggests: low (between 30 and 50%)

4.  **No answer:** the chatbot does not know the answer when the score is under
    30%.

::: warning ⚠️
If you find scores above 30% in the "No answer" tab, it means that the user
chose "none of these questions" when the Active Learning was triggered.
:::

The supported confidence score can be configured in the Configuration menu
(click on "Knowledge" then "Configuration”) (1).

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/inbox3.png')" alt="Suggested questions 2">
</div>



Here you can also configure the minimum score to launch a conversation tree
(between 80 and 90) (2).

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/inbox4.png')" alt="Suggested questions 2">
</div>



---


<Intercom />
<Clarity />
<GoogleAnalytics />