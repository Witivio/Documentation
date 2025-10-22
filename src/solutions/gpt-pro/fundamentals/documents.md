## Manage Documents in GPT Pro

### Overview
This tutorial provides step-by-step instructions for managing documents within GPT Pro's knowledge base through the admin portal.

### Prerequisites
- Administrator access to admin.gpt-pro.com.
- Documents in PDF, DOCX or PPTX format ready for upload.

### Accessing the Documents Interface
1. Navigate to [admin.gpt-pro.com](http://admin.gpt-pro.com).
2. Enter your administrator credentials to log in.
3. Select 'Documents' from the sidebar to open the document management interface.
4. Choose either 'local documents' or 'SharePoint'.

### Status explanation
| **Status**            | **Explanation**                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------------|
| Initializing          | The indexing process is starting. The system is preparing the document for further processing.    |
| Reading file          | The system is reading the raw content of the file to extract necessary data.                      |
| Parsing               | The system is analyzing the document's structure (e.g., extracting text, detecting sections).     |
| Using OCR             | The system is using Optical Character Recognition (OCR) to extract text from image-based files. If included in your subscription.  |
| Not supported         | The document's file type or format is not supported by the system.                                |
| Unreadable            | The document cannot be read due to corruption, inaccessible permissions, or unsupported encoding. |
| Ignored               | The document was intentionally skipped based on system rules (e.g., too many pages, subscription limits reached).         |
| Creating Embedding    | The system is generating vector embeddings of the document for intelligent search and linkage.    |
| Updating              | The system is updating the document's index to reflect recent changes in content or metadata.     |
| Completed             | The indexing process is finished. The document is ready for use in the system.                   |


## Managing Local Documents

### Viewing Documents
The interface lists all documents with details such as title, format, and the date they were added.

![Manage documents](/assets/img/gpt/Local-documents.png)

### Uploading a Document

:::tip
💡To keep GPT Pro’s knowledge base up to date, regularly upload new documents.
:::

1. Click '+ Upload a document'.
2. Drag and drop your document(s) inside the box or manually choose the PDF or PPT file from your device by clicking 'Attach Files' button.
3. The document will upload and be listed with the existing documents. 

### Checking Document Status
For updates on your uploaded documents:
- Click `Check my documents status`.
- A detailed status of each document's upload and processing will be displayed.

### Performing Actions on Documents
- To view the document, simply click on the document's title to view the content.
- Use the `Actions` dropdown next to each document to:
  - **Download**: Download the document uploaded in the list.
  - **Delete**: Remove the document from GPT Pro.

### Best Practices
- Update and review documents regularly.
- Remove outdated content to maintain GPT Pro's performance.


## Managing SharePoint Sites Documents & SharePoint Pages

### Viewing SharePoint Libraries
The interface lists all SharePoint libraries with details such as library name, site URL, indexing status, and the last indexing date.

![Manage SharePoint Libraries](/assets/img/gpt/Sharepoint-indexation.png)

### Adding a SharePoint Library

:::tip
💡To keep GPT Pro’s knowledge base up to date, regularly add new SharePoint libraries.
:::

1. Click '+ Add library'.
2. Enter the SharePoint site URL in the provided field.
3. Click 'Check' to verify the site URL.
4. Once verified, click 'Save' to add the library to GPT Pro.

![Add SharePoint Library](/assets/img/gpt/SharePoint-library.png)

**SharePoint Document Indexing Rules (Important)**

💡GPT Pro automatically synchronizes and updates the content of indexed SharePoint documents every hour on the hour (fixed schedule).
This ensures near real-time availability of document changes in chatbot responses.

**Access & Authorization Logic**

GPT Pro always uses the permissions of the user who connected or added the library in the Admin Center.

Only the documents that this user can access will be indexed.

If that user leaves the organization or loses access, the indexing will stop and new documents won’t be retrieved.

⚠️ Best practice: use a dedicated service account with stable access rights to connect SharePoint libraries, ensuring continuity of indexing.

**User Experience**

When end users ask questions in Teams or Webchat, GPT Pro only retrieves documents they have access to according to SharePoint’s native ACLs.

No document outside a user’s permissions can appear or be queried.

### Checking Library Indexing Status
For updates on your added libraries:
- The indexing status of each library is displayed in the 'Indexing status' column.
- The 'Last indexing' column shows the most recent indexing date and time.

### Deleting unused sharepoint library
- To manage and delete unused sharepoint library, click the `Actions` dropdown next to the library.
  - **Delete**: Remove the library from GPT Pro.

![Action on library](/assets/img/gpt/delete-sharepoint-library.png)

### Viewing Library Contents
- Click on the library name to view the contents of the library.
- If there are no documents in the library, a message will be displayed indicating that there are no documents available.
- To add the content in the library, you have to add it directly from your sharepoint file


### User Permissions
- The type of user who can see or index the documents is the same user who has the right to the SharePoint document since the beginning.
- Ensure that the permissions are set correctly on the SharePoint site to allow the appropriate users access to the documents.

### Best Practices
- Regularly add and review SharePoint libraries.
- Remove outdated libraries to maintain GPT Pro's performance.

### Document Indexation and Metadata Management

When indexing documentation, specific criteria and filters are applied to ensure the most relevant document is retrieved when a user submits a query. The process for managing metadata and determining which document is selected involves the following:

#### 1. **Pre-filters for Version Control**
   To ensure that versioning is correctly accounted for, the system applies various filters based on:
   - **File Names**: The document's name is checked for version-specific details.
   - **Directory Names**: The folder structure is examined for version indications.
   - **Contract Addendums and Contract Numbers**: Relevant metadata related to contracts is analyzed.
   - **Status Indicators (e.g., Old, Draft, Published)**: Documents are filtered based on their status to prioritize relevant versions.

#### 2. **Primary Criterion (P1): Version Number Priority**
   - The version number is the leading criterion for document selection. The system prioritizes documents that have clear versioning information embedded in their metadata or file names.

#### 3. **Secondary Criterion (P2): Update Date**
   - If no explicit version number is found, the system defaults to using the **latest update date** to determine the most current and relevant document.

This structured approach ensures that users receive the most appropriate document based on versioning and recency when querying the system.

# Managing SharePoint Pages (New)

**GPT Pro can now index and read SharePoint Pages (`SitePage`, `NewsPage`, `Article`) in addition to document libraries.**  
Each page is treated as an individual document and counted in your GPT Pro document quota.


## 1. Objective

Enable GPT Pro to index **SharePoint pages** as additional knowledge sources.  
This enriches contextual retrieval (RAG) and improves chatbot responses in both **Teams** and **Webchat**, allowing users to open the original SharePoint pages directly.

![Action on library](/assets/img/gpt/pages-sharepoint.png)


## 2. Main Features

| Level | Description |
|--------|-------------|
| **SharePoint Sites** | Select and connect SharePoint sites via GPT Pro Admin. Supports both **global (`Sites.Read.All`)** and **granular (`Sites.Selected` via RSC)** scopes. |
| **SharePoint Pages** | Browse, preview, and select specific pages, treating them as data sources equal to documents. |You can select "all pages"
| **Targeted indexing** | Indexes only **standard SharePoint webparts** containing text or markdown. **Images, videos, links, lists, and any other non-textual webparts are ignored.** |


## 3. Detailed Functional Flow

### GPT Pro Admin Backoffice

A **“SharePoint Pages”** tab is available under **Knowledge > SharePoint**.

1. Admin clicks **"Add a page."**  
2. Chooses an existing site or connects a new one.  
3. GPT Pro retrieves the list of pages.
4. For each page:  
   - Displays **pages name, site, indexing status, last indexing date and ations**.  
   - Retrieves the **direct SharePoint page link**.  
   - Shows a **preview of content that will be indexed**, excluding unsupported webparts (such as images).  
5. Admin selects specific pages or clicks **“All Pages”** to select them all.  
6. Indexing starts immediately.  
7. **A daily automatic reindex** runs to capture page updates.  

**Notes:**  
- Each SharePoint Page = **1 document** in your GPT Pro quota.  
- Unsupported components (images, dynamic contents, videos, links, lists, Planner, or code) are ignored during processing.  
💡To be available into the chatbot, the M365 admin has to consent site.read.all right.

## 4. Indexing Logic

| Element | Description |
|----------|-------------|
| **Frequency** | **Daily automatic update** for pages. |
| **Selective webparts** | Only text and markdown webparts are indexed. **Images are skipped.** |
| **Excluded content** | Links, people, videos, lists, calendars, planner, and code webparts are ignored. |


## 5. Security & Compliance

| Item | Description |
|------|-------------|
| **Global Scope** | `Sites.Read.All` allows GPT Pro to read pages across all sites. Requires M365 global admin consent. |
| **Granular Scope** | `Sites.Selected` (via RSC) allows admins to grant access only to specific sites. |
| **SharePoint ACL respect** | GPT Pro fully enforces SharePoint permissions, users can only access content they already have rights to. |

**Administrator Consent Required**  
Before enabling page indexing, a delegated permission **`Sites.Read.All`** must be granted to GPT Pro in Microsoft Entra ID.


## 7. Priority Handling Summary

| GPT Pro Setting | Data source priority |
|------------------|----------------------|
| **QnAs priority (default)** | QnAs > Documents = SharePoint Pages |
| **QnAs / Docs equal priority on** | QnAs = Documents = SharePoint Pages |
Contat Witivio to change your configuration if needed. 

## 8. Authentication Requirement in the webchat

### When authentication is enabled (Microsoft 365 SSO)
- GPT Pro can securely retrieve and display content from **SharePoint documents and pages**.  
- Users see contextual answers and can open the **direct page link**.  
- Permissions are applied based on the signed-in user.



💡 **Webchat Authentication Impact**  
If the Webchat operates anonymously, SharePoint content will not appear.  
When the **“Force user authentication”** toggle is enabled, GPT Pro applies user permissions and displays SharePoint-based answers normally.


## 10. Best Practices

- Regularly review indexed **libraries and pages**.  
- Combine both for full SharePoint coverage.  
- Use **service accounts** for stable indexing access.  
- Reindex sites after major content changes.  
- Ensure **authentication is active** if SharePoint data must appear in the Webchat.  
- Communicate your **main SharePoint domain** (e.g. `yourcompany.sharepoint.com`) to **Witivio Support** for allow-list configuration.


<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />
