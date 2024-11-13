# Manage Knowledge Base

## Overview

The Knowledge Base (KB) Editor in GPT Pro is a powerful tool designed to help users create, manage, and update internal knowledge bases effortlessly. This tool centralizes critical information, ensuring that the virtual agent provides accurate, consistent, and up-to-date responses.

## Accessing the Q&A Editor

To access the KB Editor, navigate to the GPT Pro admin panel at `admin.gpt-pro.com` and select the Knowledge option from the side menu and choose Questions/answers. Three tabs are available: 'Q&A configuration', 'Images gallery', and 'Tags'.

![Q&A editor](/assets/img/gpt/QnA-editor.png)

## Creating and Managing Knowledge Entries
### Step 1 : Q&A configuration ###
#### Adding New Questions and Answers
1.	Navigate to the KB Editor: Open the Knowledge Base Editor from the admin panel.
2.	Add New Entry: Click on the "+ Add  question" button.
3.	Enter Question : Fill in the fields for the question and the corresponding answer. Ensure that the information is clear and concise.

![QnA creation](/assets/img/gpt/QnA-creation.png)

4.	Choose answer type: Choose answer type by clicking on the `simple` or the `card` answer type. 
Soon, `flow` answer type will be available to choose.

![Knowledge base editor](/assets/img/gpt/answer-type.png)

##### Simple answer:
  - **Set-up the configuration**: Have the possibility to set up your answer to be registered as it is or be added in the context of AI's response and indexed in the reference, also add tag to the question to better categorize them.
![simple answer creation](/assets/img/gpt/simple-answer-creation.png)

      - If the 'use this answer directly' option is checked, generative AI will not be used to rephrase the question, and the agent will first check the written answers before searching other sources of information, such as documents or others. 
     - If the 'use this answer as generative AI context' option is checked, the response elements will be used by generative AI in the same way as other information.
      - It is necessary to select the language of the question/answer. Indeed, with generative AI, the response cannot be translated. 
  
    - Click on "Submit" 

    Once saved, it is necessary to write the answer.
   - **Writing the answer**: A text editor is available. By default, the answer is in draft mode. An "AI" option is available to help write the message, and the magic wand allows summarizing, improving writing, simplifying language, and changing tone or style.
    - **Save** by clicking on "Save". It's possible to preview the anwser cliking on "Preview in Microsoft Teams".
    
    
    
   ![Simple answer draft](/assets/img/gpt/simple-answer-draft.png)


   - **Publication**: To publish an answer and make it available to end users, go to the relevant question and click the "Publish" button at the top right of the question. Once published, the "Unpublish" button appears, allowing you to unpublish the answer at any time.

##### Card answer:
Card anwser allows to add title, images, buttons.
  - **Set-up the configuration**:  Choose the card template in the list of choices. 
  
  ![Card answer creation](/assets/img/gpt/card-answer-creation.png)
  
  Select the language, card responses cannot be used as context for generative AI and will be displayed exactly as written. Also add tag to the question to better categorize them.
  Click on "Submit" 

    Once saved, it is necessary to write the answer.
   - **Writing the answer**: A text editor is available. By default, the answer is in draft mode. 
   - **Save** by clicking on "Save". It's possible to preview the anwser cliking on "Preview in Microsoft Teams".
   - **Publication**: To publish an answer and make it available to end users, go to the relevant question and click the "Publish" button at the top right of the question. Once published, the "Unpublish" button appears, allowing you to unpublish the answer at any time.
           
  ![Card answer published](/assets/img/gpt/card-answer-published.png)

:::tip
💡 If a similar question already exists, a message saying "We found a similar question" is displayed when adding a new question.
:::



#### Editing Existing Entries

1. **Locate the Entry**: Choose the entry you want to edit.
2. **Edit Information**: Click on the entry to open it and make the necessary changes on the draft
3. **Save Changes**: Click on `Save` to update the entry, once saved the updated input will be showcased on the published tab..

### Step 2 : Manage gallery ###
To maintain an organized card image, a gallery is available:  an image must be added to the gallery before it can be used in a card.
#### Add a to a question:
1. **Select an Entry**: to add an image to a question, open the card question, click on the image icon, and select the image from the available folders.
2. **Save**: Click on `Save` to apply the changes.

 ![Add image](/assets/img/gpt/add-image.png)


#### Manage images

1. **Access tags management**: Choose 'Images gallery' tab
2. **Add a new folder**: Click on '+Add a folder' to create a new folder.

 ![Add image](/assets/img/gpt/add-folder.png)

  To perform an action, click on 'Actions' next to the folder. From there, you can view and manage images, edit the folder's name, and delete the folder if no images are used

3. **Add a new image**: Click on '+Add an image' within the folder to add the image.
3. **View image**: Click on the 'Actions' button and select 'View' to see the image.
4. **Move to**: Click on the 'Move to' button and select a folder to move the image to.
5. **Delete**: Click on the 'Delete' button and select 'Delete'. If an image is used in a question, the 'Delete' button will not be displayed.

The image list shows the number of times each tag is used in questions.

 ![Tags](/assets/img/gpt/images-list.png)

### Step 3 : Create and manage tags ###
To maintain an organized and easily navigable knowledge base, you can tag entries. Tags can be added directly when creating a question. To add a new tag or manage existing tags, use the 'Tags' tab.
#### Add a tag to a question:
1. **Select an Entry**: to add a tag to a question: open a question, choose 'Configuration' and choose or create a tag.
Open the entry you want to categorize or tag.
2. **Save**: Click on `Save` to apply the changes.

![Tags](/assets/img/gpt/add-tag.png)


#### Manage tags

1. **Access tags management**: Choose 'Tags' tab
2. **Add Tags**: Clik on '+Add a new tag' to add a tag.
3. **Update Tags**: Choose 'Actions' button and click on 'Edit". If the tag label is renamed, it will also be updated on all the questions that contain it.
4. **Delete Tags**: Choose 'Actions' button and click on 'Delete". If a tag is used for a question, the 'delete' button is not displayed.
5. **Save**: Click on `Save` to apply the changes.

The tag list shows the number of times each tag is used in questions.

 ![Tags](/assets/img/gpt/Tags.png)

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />