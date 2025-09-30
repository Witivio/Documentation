## Manage Documents in AI Desk

### Overview
This tutorial provides step-by-step instructions for managing documents within AI Desk's knowledge base through the admin portal.

### Prerequisites
- Administrator access to admin.gpt-pro.com.
- Documents in PDF, DOCX or PPTX format ready for upload.

### Accessing the Documents Interface
1. Navigate to [admin.gpt-pro.com](http://admin.gpt-pro.com).
2. Enter your administrator credentials to log in.
3. Select 'Documents' from the sidebar to open the document management interface.
4. Choose either 'local documents' or 'SharePoint sites'.

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
💡To keep AI Desk’s knowledge base up to date, regularly upload new documents.
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
  - **Delete**: Remove the document from AI Desk.

### Best Practices
- Update and review documents regularly.
- Remove outdated content to maintain AI Desk's performance.


## Managing SharePoint Sites Documents

### Viewing SharePoint Libraries
The interface lists all SharePoint libraries with details such as library name, site URL, indexing status, and the last indexing date.

![Manage SharePoint Libraries](/assets/img/gpt/Sharepoint-indexation.png)

### Adding a SharePoint Library

:::tip
💡To keep AI Desk’s knowledge base up to date, regularly add new SharePoint libraries.
:::

1. Click '+ Add library'.
2. Enter the SharePoint site URL in the provided field.
3. Click 'Check' to verify the site URL.
4. Once verified, click 'Save' to add the library to AI Desk.

![Add SharePoint Library](/assets/img/gpt/SharePoint-library.png)

### Checking Library Indexing Status
For updates on your added libraries:
- The indexing status of each library is displayed in the 'Indexing status' column.
- The 'Last indexing' column shows the most recent indexing date and time.

### Deleting unused sharepoint library
- To manage and delete unused sharepoint library, click the `Actions` dropdown next to the library.
  - **Delete**: Remove the library from AI Desk.

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
- Remove outdated libraries to maintain AI Desk's performance.

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

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />
