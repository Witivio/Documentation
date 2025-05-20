# Optimized Instructions Writing for GPT Pro  
A high-performing chatbot relies on clear, precise, and well-structured instructions.  
If instructions are vague or incomplete, responses will be inconsistent, inaccurate, or off-topic.
Add system Prompt in GPT Pro:
To add a system prompt, use 'System Prompt' tab. Write a prompt and think to click on 'Save'.

![Prompts](/assets/img/gpt/system-prompt.png)
 
This guide helps you write optimal instructions for your GPT-4o chatbot, ensuring accurate responses and strong alignment with business expectations.

## 1️. Structuring Instructions Effectively  
### 1.1. Structure:
#### Why is structure important?  
GPT Pro follows instructions based on logical structure. A clear format helps prevent ambiguity and ensures consistent, reliable behavior.

##### Recommended Instruction Format:

```markdown
## Objective  
Define the chatbot’s role and covered topics.
## Tasks  
Clearly list what the chatbot can and cannot do.
## Information Sources  
Specify where the AI should search for answers.
## Process  
Describe the steps the AI must follow to handle a request.
## Behavior Rules  
Set tone, rephrasing guidelines, and error handling.
## Example Conversations  
Include sample dialogues to guide the AI.
```

### 1.2. Example:

```markdown
## **Purpose**
You are **Lexi RH – Payroll & Time Management Assistant**, an AI specialized in payroll and time & attendance topics.  
You assist employees of **Company X** with HR-related queries.

## **Tasks**  
- Answer questions related to **payroll, leave, time tracking (GTA), and HR processes**  
- Guide employees through **internal tools** (leave requests, time entry, approval workflows, etc.)  
- **Maintain conversational context** when users follow up on previous questions  
- **Smartly rephrase vague queries** to improve search results  
- **Always ask for clarification** in case of ambiguity or multiple possible answers  

## **Knowledge Sources**  
- **HR Snippets** (validated Q&A pairs by the company)  
- **Witivio documentation base** (Payroll & Time Management)  
- ⚠️ **Do not use generic LLM knowledge** — only rely on the provided sources

## **Capabilities**  
- Search through validated HR documents  
- Understand and track **conversation history** and follow-up questions  
- **Proactive clarification** behavior:  
 - Ask for clarification when vague terms are used (e.g., "bonus", "absence", "comp time")  
 - If multiple interpretations are possible → **Always ask the user to specify their intent**

## **Workflow**  
1. Check **HR snippets** first  
2. If no match, **search the documentation base**  
3. If the user follows up on a previous message → **rephrase the full query and search again**  
4. If the term is vague or multiple results are found → **ask the user to clarify**  
5. Generate a **clear, concise, and context-aware answer**  
6. If no answer is found, display:  
  > "I'm sorry, I don't have an answer to your question.  
  > If you'd like to open a ticket, click 👎 in the reference card and then select *Open a ticket*.  
  > You can also leave feedback to help improve the service."


## **Example Conversations**
### Case 1: Contextual Follow-Up in Time Management

**User**: "How do I enter a work exemption in GTA?"  
**Lexi RH**: "Open [tool name], go to 'Time Management' > 'New Entry', select 'Work Exemption', and validate."  
**User**: "What's the function name?"  
**Automatic Rephrasing**: *"What is the function to enter a work exemption in GTA?"*  
**Lexi RH**: "The function to use is [function name]."

### Case 2: Vague Request  
**User**: "What are the rules for a bonus?"  
**Lexi RH**: "Could you specify which type of bonus you're referring to? (seniority bonus, performance bonus, exceptional bonus…)"

### Case 3: Multiple Possible Matches  
**User**: "How do I request a day off?"  
Several absence types detected (paid leave, RTT, unpaid leave...)  
**Lexi RH**: "There are different types of absences. Are you referring to paid leave, unpaid leave, sick leave, or something else?"  
Once clarified, Lexi RH provides the relevant answer.

## 2️. Writing Clear and Precise Instructions (Max 4000 characters)
### Why precision matters:  
- Define the business context: Who uses the AI? What questions are expected?  
- Specify allowed and forbidden actions to avoid irrelevant answers  
- Explain the response process: Where and how the AI should search  
- Frame tone and rephrasing logic: When to clarify or ask for more details
💡 **Tip:** If the AI must display a specific error message, **put it in quotes** to prevent rephrasing or omission.
**Example:**  
If no answer is found, the AI must display:  
*"I'm sorry, I don't have an answer to your question."*
```

## 3️. Handling Follow-Ups and Rephrasings  
### Why is this important?  
If users re-ask a question, it usually means the previous answer was incomplete or unclear.
### Recommended follow-up management:  
```markdown
## Process  
1. Check if the answer exists in the FAQ.  
2. If the question is a rewording, search directly in documents.  
3. Rephrase the query to refine the search.  
4. If no relevant result is found, show the predefined error message.
```
### Why this works:  
- Gives the chatbot a second chance to succeed  
- Improves precision by letting the AI rephrase before failing
---
## 4️. Test & Iterate to Improve Chatbot Performance  
### Why test regularly?  
A well-designed prompt should evolve based on feedback.
### Best practices:  
- Run A/B tests with different prompt versions  
- Update instructions based on new business needs  
- ⚠️ **Always click “New conversation”** after updating instructions to apply changes
---
## Summary of Best Practices  
| Objective                      | Action                                                             |
|-------------------------------|--------------------------------------------------------------------|
| Structure the instructions    | Use clear, modular sections                                        |
| Maximize precision            | Write detailed and specific instructions                          |
| Handle follow-ups smartly     | Optimize the workflow to reduce failures                          |
| Specialize the AI             | Add domain-specific acronyms and definitions                      |
| Test and iterate              | Continuously analyze and adjust based on feedback                 |
---
# GPT Pro Agent Optimization & Configuration
## 1. Prompt System Instructions
### Purpose  
The prompt system defines how the chatbot works. It controls its behavior, responses, and scope.
### Best practices:  
- Clearly define the chatbot’s role and domain of expertise  
- Control information sources: Only use knowledge base and document corpus  
- Manage rephrasing behavior during follow-ups  
- Request clarification in case of ambiguous terms  
- Define a clear fallback error message:  
*"I'm sorry, I don't have an answer to your question. Please contact support at support@contact.com."*
---
## 2. Customizing the AI with Acronyms & Business Terms  
### Why this matters  
The AI works via semantic matching. Without a business lexicon, it might misinterpret terms.
### Best practices:  
- Add all key business terms and acronyms under "Prompt > Business Vocabulary"  
- Update the list regularly
**Example:**  
In an HR context:  
- DPAE = Declaration of Employment  
- GTA = Time & Activity Management  
- PSS = Social Security Ceiling
✅ GPT Pro format:  
`RTT(Réduction du Temps de Travail, rtt)`
---
## 3. Writing Effective Knowledge Base Questions  
### Prerequisites:  
1. Configure and publish the KB  
2. Add documents via “Local documents” or SharePoint library
### Why wording matters  
The chatbot uses strict matching on question titles (default threshold: 0.12). Only closely worded queries are matched.
### What is a snippet?  
A snippet = One KB entry composed of:  
- A well-formulated question  
- An associated answer
### Best practices  
- Use natural, specific question phrasing  
- Avoid too broad or too niche wording
**Example:**  
❌ "What is the leave policy?" → Too broad  
✅ "What are the criteria for unpaid leave?" → Specific and precise
---
## 4. Knowledge Base vs Document Priority  
### Source hierarchy:  
- **KB is prioritized** → If a match exists, documents are ignored  
- **Documents** are only used if KB fails  
- **Exception:** If “Use KB as AI Gen context” is enabled → both KB and docs are searched
---
## 5. Document Vectorization and Chunking  
### How document search works  
Documents are split into small text chunks and vectorized. When a question is asked, GPT performs a similarity search.
### Best practices  
- Structure documents with clear titles and subtitles  
- Keep documents up to date  
- Use short, well-segmented paragraphs  
- Prefer structured sections over long tables
**Example:**  
❌ Long table with no headers  
✅ Short, titled sections with bullet points
---
## 6. Matching Sensitivity Settings (Default: 0.12)
### 🔁 What is matching flexibility?  
| Value | Effect                           |
|-------|----------------------------------|
| 0     | Strict match only                |
| 0.12  | Precise match (default)          |
| 1     | Wide match, less precise answers |
### Best practices  
- Keep 0.12 for precise answers  
- Adjust to ~0.15 if some close queries aren’t matched  
- Reduce below 0.12 if AI gives too many approximate answers
⚠️ Matching sensitivity must be adjusted by your Witivio CSM.
---
# Troubleshooting Guide
### My chatbot isn’t giving the right answer, what should I do?
### Step 1: Identify the source of the issue  
- Wrong answer? → Poor matching in KB  
- No answer? → Missing data in KB or documents  
- Wrong source? → Misconfigured priorities or unclear content
Use the **“References”** button to verify the source.  
If no reference is shown → The AI used its generic knowledge (not allowed)
---
### Step 2: Check KB Question Wording  
- Test multiple phrasings  
- Use duplication to add variants  
- Add synonyms where necessary  
⚠️ Click "New conversation" after any change in instructions or vocabulary
---
### Step 3: Adjust KB & Document Content  
- If document info is better than KB → Unpublish outdated KB entries  
- Add a summarized snippet based on document content
---
### Step 4: Improve Document Structure  
- Segment content clearly  
- Avoid dense or complex tables
---
### Step 5: Tune Matching Sensitivity  
- Increase to 0.15 if close matches fail  
- Reduce to 0.10 if too many approximate answers appear
---
## ✅ Troubleshooting Summary
| Step                      | Check                            | Solution                                       |
|---------------------------|-----------------------------------|------------------------------------------------|
| 1. Source                 | KB / docs / generic?              | Adjust priorities or fix source                |
| 2. Question phrasing      | Wording close enough?             | Rephrase or duplicate the KB question          |
| 3. KB vs Docs             | Better answer in docs?            | Unpublish KB entry and rely on documents       |
| 4. Document structure     | Info easy to find?                | Better segmentation                           |
| 5. Matching sensitivity   | Too strict or too loose?          | Tune between 0.10 and 0.15                     |
| 6. Business vocabulary    | Are acronyms defined?             | Add them in prompt → "New conversation"        |