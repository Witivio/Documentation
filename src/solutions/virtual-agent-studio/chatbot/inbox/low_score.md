# Low score

The low score is triggered when only **one question** in the knowledge base
corresponds to the question asked by the user but the score is as its name
suggests: low.

The confidence score is low when it is **between 35% and 50%.** 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/low1.png')" alt="low score">
</div>


Low scoring questions can be handled in the same way as unanswered questions.

Click on the question to display the details and take the necessary corrective
actions:

-   The question does not exist in the knowledge base: **Create a new question**
-   This is a reformulation of another question in the knowledge base: **Choose an existing question**
-   This is a reformulation of the choosen question: **Add the question as an alternative to the question selected by the user**
-   For all other actions: **Access the FAQ**

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/inbox/low2.png')" alt="low score 2">
</div>



---


<Hubspot />