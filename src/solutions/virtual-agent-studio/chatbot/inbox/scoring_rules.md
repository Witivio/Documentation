# Scoring rules

::: tip 💡️
The scoring rules are the rules which determine the triggering of the
:::

-   [**Active Learning**](/solutions/virtual-agent-studio/chatbot/tools/active_learning.html),
-   [**Low Score**](/solutions/virtual-agent-studio/chatbot/inbox/low_score.html),
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
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/scoring1.png')" alt="Suggested questions 2">
</div>



Here you can also configure the minimum score to launch a conversation tree
(between 80 and 90) (2).

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/scoring2.png')" alt="Suggested questions 2">
</div>



---

<Intercom />
<Clarity />
<GoogleAnalytics />
