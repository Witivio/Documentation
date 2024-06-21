# MetaBot
<br />
<br />

## Why to create a MetaBot? 
 
When several chatbots are available in different scopes, users may not know which chatbot to address. 

The MetaBot then becomes the primary contact point. Indeed, it is connected to several chatbots known as "friends", each of which covers a specific scope.

For instance, a company uses three chatbots, each one having a specific scope: Human Resources, IT support and Legal Department.

 
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/metabot/metabot.PNG')" alt="metabot">
</div>

<br />

## MetaBot configuration


Among the different configuration steps, the language choice is important. Indeed, a MetaBot and its chatbots friends must have at least one common language. 


For example, if a MetaBot is configured in French, its chatbots friends must speak at least French. 

The example below shows that the IT chatbot cannot be a MetaBot's friend because it doesn't speak French, which is the MetaBot's configuration language. The HR and Legal chatbots friends speak at least French. 

 
 
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/metabot/metabotlanguage.PNG')" alt="metabot language">
</div>
<br />


## Ask for the scope

Go to the Knowledge tab and then Configuration to configure the context request. 

When a user asks a metabot a question, the metabot may hesitate which friend chatbot to find the knowledge from. The metabot can thus ask "What is the scope of the question?" and the user selects one of the friend chatbots' scopes. 
This contextualization request can be disabled. The user asks a question to the metabot, which will directly query all the friend chatbots, and decide all by itself on the best answer to give the user (the answer with the best confidence score).

Example:
A collaborator asks the metabot: "how many day off do I have left?" 
When the feature below is enabled, the metabot, if in doubt, asks the user to choose the context between different scopes (for example HR and Accounting). When this feature is disabled, the chatbot does not ask the chatbot scope, and directly gives the answer with the best answer.


<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/metabot/askforscope.PNG')" alt="Metabot">
</div>

When you decide to activate the contextualization request, you can customize your question. For example "Can you tell me the scope of your question? " / "What is the context of your question?".

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/metabot/askforscope.PNG')" alt="Metabot">
</div>



## How the MetaBot works

 

Once your MetaBot is configured, to allow it to query the knowledge of other chatbots it requires : 

 

- to add chatbots friends from the tab KNOWLEDGE > Friends.

 

- as well as to indicate the scope of each chatbot friend 

 

Once added, the chatbots friends are available in integration. Click on the PUBLISH button to publish them in production.

 
<br />

## Conversational schema

<br />


When the user asks a question to the MetaBot, the MetaBot looks for the most relevant answer in the knowledge of the chatbots friends according to their scopes. 

<br />
<br />

**1) Score higher than the answer threshold** 

 

The user asks a question, the MetaBot directly understands the scope and thus gives back an answer from a chatbot friend. (% > answer threshold). 

 

  If the feedback from the chatbot friend is enabled, then the MetaBot asks for feedback. For example when a user is not satisfied with the answer, this negative feedback is logged in the inbox of the chatbot friend.

<br />
<br />

  **2) Contextualization** 

 

When the MetaBot finds several answers of different chatbots friends, it first asks for the scope. Depending on the user's choice, the MetaBot provides the answer found. 

 

"I have a doubt, does your question concern: "

 

- HR scope 

  

- IT scope  

 

- Legal scope 

  

- None of above


If the user selects one particular scope the MetaBot returns the answer of the corresponding chatbot friend. In addition, if the feedback of the chatbot friend is enabled, then the MetaBot asks for the feedback. 

 

However, if the user selects "None of above", then the question is sent to the MetaBot's inbox. 

 

NB. Once the scope has been requested, it is possible that the MetaBot identifies several questions from the same scope and thus triggers the Active Learning.

<br />
<br />
 

**3) Score lower than the answer threshold**

 

When the MetaBot does not find any answers among the chatbots' friends, it means that the score is below the threshold of the response score. The MetaBot returns the no answer message and asks for the scope. 

 

"Does your question concern: "

 

- HR scope 

 

- IT scope 

 

- Legal scope

 

- None of above

 

Depending on the chosen scope, the answer is logged in the inbox of the chatbot friend in the "Unanswered questions" tab. Moreover, if the escalation of the chatbot friend is enabled, it will be triggered. 

 

However, if the user chooses "None of above", the result is logged in the MetaBot inbox. 

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/metabot/metabothowitworks.PNG')" alt="how it works">
</div>


<br />
<br />
<br />

## Continuous improvement 

 

When the MetaBot has no answer, it asks the scope of the question asked. If the user chooses "None of these scopes", the question without answer and scope is logged in the MetaBot's inbox.

 
 **Inbox processing**

 
<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/metabot/metabotimprovement.PNG')" alt="Metabot Improvement">
</div>

 

The MetaBot inbox has a single tab "No scope". The available action from this tab is the transfer of the unanswered question to one or several friend chatbots. The coaches of the chatbot friend then process the question from the inbox of the chatbot friend and integrate it with its knowledge.

<br />
<br />

## Push campaign

It is now possible to create push campaigns via the MetaBot. Once your campaign is configured, the push message will be distributed by the MetaBot. The MetaBot will talk to the user, for instance to spread information internally, to promote the use of the chatbot, ...

Click [here](/solutions/virtual-agent-studio/chatbot/communication/campaign.html#teams-campaigns) to know how to configure a Push Teams campaign.  

<br />
<br />

## Limitations

 

- The MetaBot can have a maximum of 5 chatbots friends (more on demand)

- The MetaBot has no knowledge base 

- Multilingual 

- Teams escalation 

- Profile management

- Initial conversation 

- Power BI Statistics 

- Authorization list 

- the chatbot friend history contains only questions and answers related to its scope

- Not allowed to go back into the conversation and change choices

<br />
<br />



---

<Hubspot />