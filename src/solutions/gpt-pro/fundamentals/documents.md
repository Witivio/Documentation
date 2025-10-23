# Overview
This guide provides an overview of document management within GPT Pro's knowledge base through the admin portal. GPT Pro supports multiple types of document sources to enrich your chatbot's knowledge base.

# Document Types

GPT Pro supports three main types of document sources:

1. **[Local Documents](./local-documents.md)** - Upload documents directly from your device (PDF, DOCX, PPTX)
2. **[SharePoint Libraries](./sharepoint-libraries.md)** - Connect and synchronize entire SharePoint document libraries
3. **[SharePoint Pages](./sharepoint-pages.md)** - Index SharePoint pages (SitePage, NewsPage, Article) as knowledge sources

# Prerequisites
- Administrator access to admin.gpt-pro.com
- Documents in supported formats ready for upload or SharePoint access
- For SharePoint integration: appropriate M365 permissions

# Accessing the Documents Interface
1. Navigate to [admin.gpt-pro.com](http://admin.gpt-pro.com)
2. Enter your administrator credentials to log in
3. Select 'Documents' from the sidebar to open the document management interface
4. Choose between 'local documents' or 'SharePoint' based on your needs

# Document Processing Status

During document processing, you may see various status indicators. Here's what each status means:

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

# Next Steps

To learn more about each document type and how to manage them:

- **[Managing Local Documents](./local-documents.md)** - Learn how to upload, view, and manage documents from your device
- **[Managing SharePoint Libraries](./sharepoint-libraries.md)** - Discover how to connect SharePoint sites and synchronize document libraries
- **[Managing SharePoint Pages](./sharepoint-pages.md)** - Explore how to index SharePoint pages as knowledge sources

# General Best Practices

- Regularly review and update your document sources
- Remove outdated content to maintain GPT Pro's performance
- Use service accounts for SharePoint connections to ensure continuity
- Monitor document processing status to ensure successful indexing


<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />
