# Messages


Click on **Knowledge** then **Messages** to enrich the knowledge base of your chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/messages1.png')" alt="low score">
</div>




### What for?


The "Messages" tab gives you the possibility to configure basic messages. These
are the chatbot's answers in specific situations:

-   Hello
-   Goodbye
-   When the chatbot is not sure about my answer
-   When the chatbot can’t find the answer in the knowledge base
-   Thank you
-   When the user need help

**These messages are essential to create a chatbot on the Witivio platform!**

In case a chatbot has different [**profiles**](/solutions/virtual-agent-studio/chatbot/profile), you have to configure the messages for each profile.

::: tip 💡 Good practice
1.  **“What should I say when users say Hello?”**

When configuring this message, it is recommended to:

-   Remind the name (for example: Mary)
-   Indicate the area of expertise (for example: HR )
-   Give some examples of questions that the chatbot can answer
:::

Here is an example:

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/messages2.png')" alt="low score">
</div>


A markdown editor allows the message formatting. For example, indicate in bold
the name and field of expertise of the chatbot. In addition, you can click on
“Add an alternative” to reword this basic message, the chatbot will then choose
randomly among several alternatives.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/knowledge/messages3.png')" alt="low score">
</div>




**1.  What should I say if I am not sure of the answer?**

This message is displayed when the score is low [**(Low score)**](/solutions/virtual-agent-studio/chatbot/inbox/low_score.html). The
latter is triggered when only one question in the knowledge base corresponds to the question asked by the user but the score is as its name suggests: low
(between 30 and 50%).

Good practice: Here, the chatbot indicates that he has a doubt about the
understanding of the question. It gives an answer anyway and indicates that he
is not sure he understood correctly.

**2.  What should I answer if I can't find the answer in the KB?**

This message is triggered when the question asked by the user does not match
with any question in the chatbot's knowledge base.

Good Practices: Here, the chatbot indicates that he has found nothing in his
knowledge base.

**3.  What should I answer when people say I need help?**

This message is displayed when users indicates that they need help or ask the
chatbot "How can you help me?

Good practices: Here, remember to introduce the chatbot again, and indicate for
example its area of expertise and some sample questions.s

**4.  What should I say when I post the chat invitation message on the Webchat or Teams?**

This message allows the chatbot to initiate a conversation on the Webchat or
Teams.

::: tip 💡 Good practice
It is not necessary to present the chatbot in detail, indeed,
once the chat window is open, the "Hello" message is automatically displayed.
:::

::: tip 💾
Do not forget to save changes !
:::


---

<Hubspot />
<Clarity />
<GoogleAnalytics />
