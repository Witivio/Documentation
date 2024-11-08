# Manage Knowledge Base

## Overview

The Knowledge Base (KB) Editor in GPT Pro is a powerful tool designed to help users create, manage, and update internal knowledge bases effortlessly. This tool centralizes critical information, ensuring that the virtual agent provides accurate, consistent, and up-to-date responses.

## Accessing the KB Editor

To access the KB Editor, navigate to the GPT Pro admin panel at `admin.gpt-pro.com` and select the Knowledge option from the side menu and choose Questions/answers. Three tabs are available: 'Q&A configuration', 'Images gallery', and 'Tags'.

![Knowledge base editor](/KB-editor.png)

## Creating and Managing Knowledge Entries
### Step 1 : Q&A configuration ###
#### Adding New Questions and Answers
1.	Navigate to the KB Editor: Open the Knowledge Base Editor from the admin panel.
2.	Add New Entry: Click on the "+ Add  question" button.
3.	Enter Question : Fill in the fields for the question and the corresponding answer. Ensure that the information is clear and concise.
4.	Choose answer type: Choose answer type by clicking on the `simple` or the `card` answer type. 
Soon, `flow` answer type will be available to choose.

- 4.1 Simple answer:
  - **Set-up the configuration**: Have the possibility to set up your answer to be registered as it is or be added in the context of AI's response and indexed in the reference, also add tag to the question to better categorize them.
    - If the 'use this answer directly' option is checked, generative AI will not be used to rephrase the question, and the agent will first check the written answers before searching other sources of information, such as documents or others. 
    - If the 'use this answer as generative AI context' option is checked, the response elements will be used by generative AI in the same way as other information.
    - It is necessary to select the language of the question/answer. Indeed, with generative AI, the response cannot be translated. 
  - Click on "Submit" 

    Once saved, it is necessary to write the answer.
   - **Writing the answer**: A text editor is available. By default, the answer is in draft mode. An "AI" option is available to help write the message, and the magic wand allows summarizing, improving writing, simplifying language, and changing tone or style.
    - **Save** by clicking on "Save". It's possible to preview the anwser cliking on "Preview in Microsoft Teams".
    - **Publication**: To publish an answer and make it available to end users, go to the relevant question and click the "Publish" button at the top right of the question. Once published, the "Unpublish" button appears, allowing you to unpublish the answer at any time.

- 4.2 Card answer:
Card anwser allows to add title, images, buttons.
  - **Set-up the configuration**:  Choose the card template in the list of choices. 
  Select the language, card responses cannot be used as context for generative AI and will be displayed exactly as written. Also add tag to the question to better categorize them.
  Click on "Submit" 

    Once saved, it is necessary to write the answer.
   - **Writing the answer**: A text editor is available. By default, the answer is in draft mode. 
    - **Save** by clicking on "Save". It's possible to preview the anwser cliking on "Preview in Microsoft Teams".
    - **Publication**: To publish an answer and make it available to end users, go to the relevant question and click the "Publish" button at the top right of the question. Once published, the "Unpublish" button appears, allowing you to unpublish the answer at any time.

::: 💡 **Tip**: If a similar question already exists, a message saying "We found a similar question" is displayed when adding a new question.
:::



#### Editing Existing Entries

1. **Locate the Entry**: Choose the entry you want to edit.
2. **Edit Information**: Click on the entry to open it and make the necessary changes on the draft
3. **Save Changes**: Click on `Save` to update the entry, once saved the updated input will be showcased on the published tab..


#### Categorizing and Tagging

To keep the knowledge base organized and easy to navigate, you can categorize and tag entries:

1. **Select an Entry**: Open the entry you want to categorize or tag.
2. **Add Category**: Choose or create a category that best describes the content of the entry.
3. **Add Tags**: Enter relevant tags that will help users find the entry more easily.
4. **Save**: Click on `Save` to apply the changes.

![Knowledge base editor](/KB-Tagging.png)

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />