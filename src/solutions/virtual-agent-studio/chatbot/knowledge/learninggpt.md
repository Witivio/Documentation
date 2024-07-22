# GPT Learning

The GPT learning feature is intended for Virtual Agent Studio users who want to optimize the time required to create a knowledge base by finding answers in documentation written on specific topics.

Also called "semantic indexing", this feature allows your chatbot to understand and respond contextually from a set of documents you provide. This is particularly useful when you want your chatbot to process a large amount of structured and unstructured information, such as user manuals, FAQs, knowledge base articles, regulatory texts, etc.

Your chatbot analyzes your documents to understand the concepts, themes, and relationships that exist between different pieces of information. It uses advanced artificial intelligence techniques to analyze the content of your documents and to link this information to the possible questions your users might ask.

Thanks to semantic indexing, you can cut off part or all of the feeding of your chatbot's knowledge base.

# How does the search work?

As part of the development of this feature:

VAS allows managing the documents available for the chatbot's learning.

When a user asks a question that is not recognized by your chatbot in its main knowledge base model, it launches an escalation (previously set by the Witivio team)

It interfaces with Microsoft Azure Cognitive Search, developed by Microsoft Azure.

It goes through all the documents at its disposal in order to find key words and concepts addressed in the question and sends back to the studio a list of results that seem relevant to it

The studio retrieves the list of answers according to their relevance score in ascending order.

The studio selects the answer that obtained the highest relevance score and selects a part of the context of the document in order to provide the most complete possible answer to the user.

The user receives the answer in the form of an adaptive card containing the quote from the document and has a button to view it.

## Step 1: Identify the documents to index
We encourage you to start identifying the documents you want to index in your chatbot. Whether it's FAQs, user manuals, articles, or other types of documents relevant to your business, make sure they're ready and the information contained is correct.

Virtual Agent Studio allows the following formats:

- Pdf,
- Docx,
- Pptx,
- txt
Please note that files containing macros are not supported.

Each file can reach a maximum size of 10 MB, the maximum storage space per chatbot is 2GB.

## Step 2: Check the structure of the documents
To give your chatbot the best chances of finding the right answer, we advise you to ensure the good structure of your documents. Here is a list of best practices that can help you:

- Prepare a clear and structured table of contents at the beginning of your document

- The key information you wish to respond to should be contained in detailed and clear paragraphs.

- The documentation contains few tables. Indeed, tables are only a sequence of information, the tool is currently not able to understand their meaning.

- Tables must be genuine "table" components in the initial reference documents (Docx, PowerPoint etc.).

- Any comment in the document will be considered as an answer element which can influence the relevance of the results.

- Please attempt to write your content in a single block of text rather than multiple blocks to aid the tool in better understanding the context. 



>⚠️ **Avertissement :**  Warning: Images in documents are currently not processed as part of the response. Make sure the answer is contained within text.

The documents given must preferably correspond to the language of the chatbot.

 
## Step 3: Integrate the documents into your chatbot

 Our CSMs are available to receive the documents and assist you in choosing and validating their relevance.

 Once you have submitted your documents, the semantic indexing process is launched every hour on the hour. (Example: 12:00, 13:00 ...)

 Indexing can take some time, depending on the size and complexity of your documents. When it's finished, your chatbot will be able to answer questions based on the information contained in these documents.

## Step 4: Test the responses

 Your chatbot is now ready to respond. We advise you to take the time to test the responses given by the latter in order to modify, if necessary, the reference documents.

If the AI provides an answer that seems incorrect or out of context, we invite you to check the content of your documents and to rephrase if necessary in order to improve the understanding of certain paragraphs. Please note that the accuracy of the information can vary, so we invite you to check the relevance of the answers provided in order to anticipate s

## Step 5 Result sent by the chatbot
The result is displayed as an adaptive card for the end user.

The chatbot specifies that the answer comes from a documentary source and cites the passage that is the subject of the answer.

At the bottom of the card, you can find the source file as well as a button allowing to open the file and search for the answer from the documents.

I'm having issues with my chatbot's responses
If you notice a delta between the responses you would like to get and the responses obtained, don't hesitate to refer to step 2 of this document.

Finally, we invite you to verify the veracity of the information provided by the chatbot. Indeed, the content generated by AI can sometimes produce imprecise results. Since Virtual Agent Studio cannot interfere with the search process provided by Azure, we invite you to perform tests beforehand and / or contact your CSMs to benefit from support in this process.



#
---

<Intercom />
<Clarity />
<GoogleAnalytics />
