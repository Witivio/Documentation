# Overview
This guide provides detailed instructions for managing SharePoint libraries within AI desk PRO's knowledge base. By connecting SharePoint libraries, you can automatically synchronize and index documents from your SharePoint sites.

# Prerequisites
- Administrator access to admin.aidesk-pro.com.
- Access to SharePoint sites with appropriate permissions.
- M365 admin consent for required permissions.

# Accessing the SharePoint Libraries Interface
1. Navigate to [admin.aidesk-pro.com](http://admin.aidesk-pro.com).
2. Enter your administrator credentials to log in.
3. Select 'Documents' from the sidebar to open the document management interface.
4. Choose 'SharePoint'.

# Viewing SharePoint Libraries
The interface lists all SharePoint libraries with details such as library name, site URL, indexing status, and the last indexing date.

![Manage SharePoint Libraries](/assets/img/agent/Sharepoint-indexation.png)

# Adding a SharePoint Library

:::tip
💡To keep AI desk PRO's knowledge base up to date, regularly add new SharePoint libraries.
:::

1. Click '+ Add library'.
2. Enter the SharePoint site URL in the provided field.
3. Click 'Check' to verify the site URL.
4. Once verified, click 'Save' to add the library to AI desk PRO.

![Add SharePoint Library](/assets/img/agent/SharePoint-library.png)

# SharePoint Document Indexing Rules (Important)

💡AI desk PRO automatically synchronizes and updates the content of indexed SharePoint documents every hour on the hour (fixed schedule).
This ensures near real-time availability of document changes in chatbot responses.

**Access & Authorization Logic**

AI desk PRO always uses the permissions of the user who connected or added the library in the Admin Center.

Only the documents that this user can access will be indexed.

If that user leaves the organization or loses access, the indexing will stop and new documents won't be retrieved.

⚠️ Best practice: use a dedicated service account with stable access rights to connect SharePoint libraries, ensuring continuity of indexing.

**User Experience**

When end users ask questions in Teams or Webchat, AI desk PRO only retrieves documents they have access to according to SharePoint's native ACLs.

No document outside a user's permissions can appear or be queried.

# Checking Library Indexing Status
For updates on your added libraries:
- The indexing status of each library is displayed in the 'Indexing status' column.
- The 'Last indexing' column shows the most recent indexing date and time.

# Deleting Unused SharePoint Library
- To manage and delete unused sharepoint library, click the `Actions` dropdown next to the library.
  - **Delete**: Remove the library from AI desk PRO.

![Action on library](/assets/img/agent/delete-sharepoint-library.png)

# Viewing Library Contents
- Click on the library name to view the contents of the library.
- If there are no documents in the library, a message will be displayed indicating that there are no documents available.
- To add the content in the library, you have to add it directly from your sharepoint file


# User Permissions
- The type of user who can see or index the documents is the same user who has the right to the SharePoint document since the beginning.
- Ensure that the permissions are set correctly on the SharePoint site to allow the appropriate users access to the documents.

# Best Practices
- Regularly add and review SharePoint libraries.
- Remove outdated libraries to maintain AI desk PRO's performance.
- Use service accounts for stable indexing access.

# Document Indexation and Metadata Management

When indexing documentation, specific criteria and filters are applied to ensure the most relevant document is retrieved when a user submits a query. The process for managing metadata and determining which document is selected involves the following:

## 1. **Pre-filters for Version Control**
   To ensure that versioning is correctly accounted for, the system applies various filters based on:
   - **File Names**: The document's name is checked for version-specific details.
   - **Directory Names**: The folder structure is examined for version indications.
   - **Contract Addendums and Contract Numbers**: Relevant metadata related to contracts is analyzed.
   - **Status Indicators (e.g., Old, Draft, Published)**: Documents are filtered based on their status to prioritize relevant versions.

## 2. **Primary Criterion (P1): Version Number Priority**
   - The version number is the leading criterion for document selection. The system prioritizes documents that have clear versioning information embedded in their metadata or file names.

## 3. **Secondary Criterion (P2): Update Date**
   - If no explicit version number is found, the system defaults to using the **latest update date** to determine the most current and relevant document.

This structured approach ensures that users receive the most appropriate document based on versioning and recency when querying the system.

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />

