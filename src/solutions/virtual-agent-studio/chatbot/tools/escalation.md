# Escalation


Escalation allows to set up an interaction to suggest a solution to the user, in
case the chatbot does not have the answer. This tool is available by profile and
also by language.

It is possible to configure several escalations to help users. When configuring, use the "Priority" option to prioritize your escalation. When your level 1 escalation is not successful and/or the user is not satisfied with this first solution, then the chatbot will propose your level 2 escalation.
Example: When the chatbot does not have an answer, it proposes to call the support directly. If the support is not available then the chatbot will propose to the user to send an email.
As a reminder: Escalation allows you to set up an interaction to propose a solution to the user when the chatbot does not have the answer or when the user indicates that he is not satisfied. 


There are 7 types of interactions:

-   **E-MAIL**
-   **SERVICE NOW**
-   **SUPPORT OFFICE**
-   **CONVERSATION TREE**
-   **MICROSOFT TEAMS** (coming soon)
-   **MICROSOFT FLOW** (coming soon)
-   **AZURE LOGIC APPS** (coming soon)
-   **WEBHOOK** (coming soon)

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation1.png')" alt="low score">
</div>




The escalation is triggered in two scenarions:

-   when there is **no answer** to the question asked
-   when users give a **negative feedback**
    -   when an answer includes bad wording
    -   when an answer is innacurate or incomplete
    -   when an answer has no correspondance with the question
    -   when the user chooser “Other”


## E-mail


First, when configuring the escalation, select the scenario (no answer/negative
feedback) for which you want the chatbot to trigger the escalation.

Import a list of contacts from an Excel file [(sample)](https://witivio.blob.core.windows.net/static/list-sample-email.xlsx). When the chatbot does not know how to answer, the indicated operators
will receive the escalation email, in order to be able to provide help to the
users.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation2.png')" alt="low score">
</div>



Sample :

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation3.png')" alt="low score">
</div>



When you have different escalation supports, it is possible to prioritize them
(1). If the help provided by the first escalation support is not convenient, the
chatbot automatically starts the second support.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation4.png')" alt="low score">
</div>



Indicate then the title and body of the email, as well as the question and
answers that the chatbot asks to know if the user wants the chatbot to contact
the support.

For example:

-   "Do you want me to contact the support?"
-   "The support has been notified”
-   “An agent will contact you shortly"

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation5.png')" alt="low score">
</div>




## Service now


The chatbot automates the creation of a ticket.


### Support Microsoft Office


This escalation support only concerns chatbots that answer **Office 365
questions**. The chatbot automates the search on the Microsoft Office Support.

First, when configuring the escalation, select the scenario (no answer/negative
feedback) for which you want the chatbot to trigger the escalation.

Indicate then the priority (if several escalation supports are available) and
the question and answers that the chatbot asks to know if the user wants the
chatbot to contact the support.

For example: "Would you like me to look for your question on the Microsoft
Office support?"

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation6.png')" alt="low score">
</div>




## Conversation tree


When the chatbot does not have the answer, you can create a conversation tree to
customize the exchange with the user before proposing a solution, for example
sending an email or creating a ticket.

First, when configuring the escalation, select the scenario (no answer/negative
feedback) for which you want the chatbot to trigger the escalation.

Indicate then the name of the Visio file and the priority (in case several
escalation supports are available).

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation7.png')" alt="low score">
</div>




The Visio file displays. Acess the Sharepoint to modify your Visio file.

Click here to know how to build a [**conversation tree**](/solutions/virtual-agent-studio/chatbot/Knowledges/Conversation%20tree.html) 

::: danger 🔴
Click on “Synchronize” to updated your conversation tree.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation8.png')" alt="low score">
</div>


::: danger 🔴
When the chatbot does not have the answer, he sends the conversation tree directly back without asking the question (for example) "Do you want me to create a ticket?
:::

In case you want this question to be asked, you have to add it to the
conversation tree.

::: warning ⚠️
Click on PUBLISH so that your conversation tree is available to users.
Otherwise, it will only be available in the Webchat in integration.
:::

## Microsoft Teams


When users do not have the answer to their questions, they can chat with a human
operator.

To this:

- Identify the agents that will handle the user's request
- Create a support team on Microsoft Teams
- Add the previously identified agents to this team
- Then configure Teams escalation on your Witivio platform. Click on the
"Tools" tab then "Escalation".

Add a new escalation support and select "Teams-beta".

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation9.png')" alt="low score">
</div>




Then enable or disable the display of the non-response message set in the
messages (Knowledge \> Messages) when the chatbot finds nothing in the
knowledge base.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation10.png')" alt="low score">
</div>



Choose if you want to share the agent's identity.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation11.png')" alt="low score">
</div>




Choose whether you want to allow an agent to reject a user's escalation request.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation12.png')" alt="low score">
</div>




Choose if you want to allow the chatbot to initiate a feedback request after the
escalation.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation13.png')" alt="low score">
</div>




Then configure the contact periods with the agents.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation14.png')" alt="low score">
</div>



For example:

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation15.png')" alt="low score">
</div>




You can also configure exceptional closure days.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation16.png')" alt="low score">
</div>




Choose the priority for this escalation.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation17.png')" alt="low score">
</div>




The next step allows to set the maximum waiting time for a request to be
accepted (in minutes).

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation18.png')" alt="low score">
</div>




Configure the questions the chatbot must ask the user to know:

- if the user wants the chatbot to contact the support

- what answer should he give to the user if he indicates that he wants to
contact the support

- what answer should he give to the user if he indicates that he does not want
to contact the support

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation20.png')" alt="low score">
</div>




Configure the feedback request message and the message when the agent puts the
user on hold.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation21.png')" alt="low score">
</div>




The chatbot is now ready to add the new escalation support.

The user tells the chatbot that he wants to be put in contact with the support
team.

### Upload a custom App in a team
---

Once you configured the escalation, dowload **ZIP of the chatbot** and the **ZIP of the ticket management**. 

> To add **the ZIP of the chatbot**: 

- Click on °°° next to your support team 
- Click on "Apps" then on "Upload a custo app" at the bottom right of your page
- Choose your chatbot ZIP files 

> To load **the ticket management ZIP file**:

- Click on "Apps" at the bottom left of your Microsoft Teams page.
- Click "Upload a custom App" at the bottom left of the screen
- Select the ticket management ZIP file
- Fill in the Id and password of the bot service (Click [here](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-quickstart-registration?view=azure-bot-service-3.0) to know more)
- Select the support team create beforehand.

::: tip 💡 
When the following message is displayed in the Support Microsoft Teams team,
it means that the escalation is correctly configured:
:::

"Escalation Teams is now correctly configured 👍 Escalation requests to an agent
will appear in this channel".

The pre-configured Teams Support Team agents receive a support request.


### List of support tickets
---
>When you add the ZIP file of the ticket management, a new tab "List of requests" appears in the Microsoft Teams team. 
Log in with your Offic e365 account to access the **support ticket list** of your chatbot. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation22.png')" alt="low score">
</div>




- The filter "All status" allows you to follow the status of the ticket: open (yellow), ongoing (blue), closed (green), cancelled or refused (red) or put on hold (orange). 

- The "All agents" filter allows you to know which agent performed the last action on a ticket. Agents are the people who have been added to the Teams support team. 

When agents receive a new request for assistance, they may:

- ✔️ Accept
- ❌Reject
- ⏸️ Accept and put on hold

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation23.png')" alt="low score">
</div>




## Request accepted

The following example shows that the request has been accepted.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation24.png')" alt="low score">
</div>



The agent can then start the exchange with the user.

The chatbot notifies the agent that it transfers all messages to the user.

The agent clicks on "Disconnect" button when he wants to end the conversation
with the user.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation25.png')" alt="low score">
</div>


::: warning ⚠️
In order to allow the user to receive the message, the agent must identify by
a tag \@ the chatbot and then write the message, For example " \@Mary-support.
Hello ****, … "
:::

::: danger 🔴
When an agent accepts the support request but does not know the answer, he can
ask a collaborator (belonging to the support team) for some help by using a \@
tag. The second agent may also decide whether to accept or reject the support
request.
:::

## Request accepted and put on hold

Here, for example, the request was accepted and put on hold by an agent.

The chatbot asks the user to wait until the agent is available.

The agent then clicks on ''Connect'' button to take over the conversation.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation26.png')" alt="low score">
</div>




## Reject the support request


The agent may decide to reject a support request and indicate the reason for the
refusal.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/tools/escalation27.png')" alt="low score">
</div>



When a support request is accepted and the conversation is over, the agent
clicks on the "Disconnect" button to end the conversation.


The user may then keep talking with the chatbot and ask a new question.



---

<Intercom />
<Clarity />
<GoogleAnalytics />