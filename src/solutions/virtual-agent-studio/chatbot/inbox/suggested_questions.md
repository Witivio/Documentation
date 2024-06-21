# Suggested questions

The "Suggested Questions" tab corresponds to the questions for which the Active
Learning has been activated.

The Active Learning is triggered when the chatbot has a doubt about the
understanding of the question: several questions in the knowledge base trigger a
score higher than 50% but with a difference of less than 20 points.

For the questions in this tab, the chatbot suggested few questions and the user
thus selects the right suggestion to get the corresponding answer.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/suggested1.png')" alt="Suggested questions">
</div>



Suggested questions can be handled in the same way as unanswered questions and Low scoring questions.

Click on the question to display the details and take the necessary corrective
actions:

-   The question does not exist in the knowledge base: **Create a new question**
-   This is a reformulation of another question in the knowledge base: **Choose an existing question**
-   This is a reformulation of the choosen question: **Add the question as an alternative to the question selected by the user**
-   For all other actions: **Access the FAQ**

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/suggested2.png')" alt="Suggested questions 2">
</div>



---

<Hubspot />
