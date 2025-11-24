## Managing SharePoint Pages

### Overview
AI desk PRO can now index and read SharePoint Pages (`SitePage`, `NewsPage`, `Article`) in addition to document libraries. Each page is treated as an individual document and counted in your AI desk PRO document quota. This feature enriches contextual retrieval (RAG) and improves chatbot responses in both Teams and Webchat, allowing users to open the original SharePoint pages directly.

![Action on library](/assets/img/agent/pages-sharepoint.png)

### Objective

Enable AI desk PRO to index **SharePoint pages** as additional knowledge sources.  
This enriches contextual retrieval (RAG) and improves chatbot responses in both **Teams** and **Webchat**, allowing users to open the original SharePoint pages directly.

### Main Features

| Level | Description |
|--------|-------------|
| **SharePoint Sites** | Select and connect SharePoint sites via AI desk PRO Admin. Supports both **global (`Sites.Read.All`)** and **granular (`Sites.Selected` via RSC)** scopes. |
| **SharePoint Pages** | Browse, preview, and select specific pages, treating them as data sources equal to documents. |You can select "all pages"
| **Targeted indexing** | Indexes only **standard SharePoint webparts** containing text or markdown. **Images, videos, links, lists, and any other non-textual webparts are ignored.** |


### Detailed Functional Flow

#### AI desk PRO Admin Backoffice

A **"SharePoint Pages"** tab is available under **Knowledge > SharePoint**.

1. Admin clicks **"Add a page."**  
2. Chooses an existing site or connects a new one.  
3. AI desk PRO retrieves the list of pages.
4. For each page:  
   - Displays **pages name, site, indexing status, last indexing date and ations**.  
   - Retrieves the **direct SharePoint page link**.  
   - Shows a **preview of content that will be indexed**, excluding unsupported webparts (such as images).  
5. Admin selects specific pages or clicks **"All Pages"** to select them all.  
6. Indexing starts immediately.  
7. **A daily automatic reindex** runs to capture page updates.  

**Notes:**  
- Each SharePoint Page = **1 document** in your AI desk PRO quota.  
- Unsupported components (images, dynamic contents, videos, links, lists, Planner, or code) are ignored during processing.  
💡To be available into the chatbot, the M365 admin has to consent site.read.all right.

### Indexing Logic

| Element | Description |
|----------|-------------|
| **Frequency** | **Daily automatic update** for pages. |
| **Selective webparts** | Only text and markdown webparts are indexed. **Images are skipped.** |
| **Excluded content** | Links, people, videos, lists, calendars, planner, and code webparts are ignored. |


### Security & Compliance

| Item | Description |
|------|-------------|
| **Global Scope** | `Sites.Read.All` allows AI desk PRO to read pages across all sites. Requires M365 global admin consent. |
| **Granular Scope** | `Sites.Selected` (via RSC) allows admins to grant access only to specific sites. |
| **SharePoint ACL respect** | AI desk PRO fully enforces SharePoint permissions, users can only access content they already have rights to. |

**Administrator Consent Required**  
Before enabling page indexing, a delegated permission **`Sites.Read.All`** must be granted to AI desk PRO in Microsoft Entra ID.


### Priority Handling Summary

| AI desk PRO Setting | Data source priority |
|------------------|----------------------|
| **QnAs priority (default)** | QnAs > Documents = SharePoint Pages |
| **QnAs / Docs equal priority on** | QnAs = Documents = SharePoint Pages |

Contat Witivio to change your configuration if needed. 

### Authentication Requirement in the Webchat

#### When authentication is enabled (Microsoft 365 SSO)
- AI desk PRO can securely retrieve and display content from **SharePoint documents and pages**.  
- Users see contextual answers and can open the **direct page link**.  
- Permissions are applied based on the signed-in user.



💡 **Webchat Authentication Impact**  
If the Webchat operates anonymously, SharePoint content will not appear.  
When the **"Force user authentication"** toggle is enabled, AI desk PRO applies user permissions and displays SharePoint-based answers normally.


### Best Practices

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

