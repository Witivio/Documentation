
# Introduction to Technical Limits in AI desk PRO

## Overview

In this section, we provide essential information about the technical limitations that are part of the AI desk PRO environment. AI desk PRO, a powerful SaaS solution for Microsoft Teams, allows for the creation of custom Agents tailored to your enterprise needs. To ensure a seamless and secure experience, it's important to understand the constraints within which AI desk PRO operates. This overview outlines the key limits related to document management, plugin integration, and UI language options.

Understanding these technical boundaries will enable you to leverage AI desk PRO's capabilities effectively while maintaining optimal performance and compliance within your organizational infrastructure.

---

## Multilingual capabilities
AI desk PRO uses GPT-4o as model.

GPT-4o outperforms both previous large language models and as of 2023, most state-of-the-art systems (which often have benchmark-specific training or hand-engineering). On the MMLU benchmark, an English-language suite of multiple-choice questions covering 57 subjects, GPT-4o not only outperforms existing models by a considerable margin in English, but also demonstrates strong performance in other languages.

![Languages](/assets/img/gpt/languages.jpg)

To know more about: [https://cdn.openai.com/papers/gpt-4.pdf](https://cdn.openai.com/papers/gpt-4.pdf)

## Limits and Restrictions

### Document Upload Limits

1. **Maximum Number of Documents**: Users can upload up to 50 documents to their AI desk PRO environment.

:::tip ℹ️ Info
For customers on page-based plans, the contractual limit applies to the number of pages, not documents.
In this context, one document is considered equivalent to 20 pages for usage calculation purposes.
:::

2. **Supported File Types**: The following file formats are supported for upload:
    - PDF (Portable Document Format)
    - PPTX (Microsoft PowerPoint Presentation)
    - DOCX (Microsoft Word Document)

::: warning ⚠️
   Macro-enabled versions of Office documents (e.g., DOCM, PPTM) are not supported.
:::


3. **File Size Limit**: Each document uploaded should not exceed 10 Megabytes (Mo) in size.

4. **Page Number Limit**: Each document uploaded should not exceed 300 pages.

5. **Image Limit**: The maximum number of images allowed is 1,000.

4. **System Prompt Character Limit**: System prompts can contain up to 4,000 characters.

4. **Notebook Character Limit**: The Notebook feature supports up to 5,000 characters.
### Plugin Integration

1. **Maximum Number of Plugins**: Users can integrate up to 5 plugins with their AI desk PRO environment.
2. **Plugin Execution Timeout**: Each plugin is subject to a maximum execution time of 100 seconds. If a plugin exceeds this limit, it will be automatically terminated to ensure system stability and performance.

### Administrative and User Interface Language Options

- **Languages Available in Admin Center UI**:
  - English (Default)
  - French

#### Additional Considerations

- **Data Compliance**: All uploads and integrations must comply with your organization's data governance policies and relevant legal regulations.
- **Security**: Ensure that all files and plugins are sourced from trusted and secure origins to maintain the integrity of your AI desk PRO environment.
- **Updates and Changes**: The limits and restrictions outlined here are subject to change. Regularly check this documentation for the latest information.

## Security restrictions


As part of our commitment to enhancing security, AI desk PRO now exclusively support TLS 1.3. This upgrade provides improved encryption and performance but may impact compatibility with older clients. Below is a list of known clients that are not supported under this configuration:

### Operating Systems

- Windows versions older than Windows 10 (version 1903) without updates.
- macOS versions older than 10.13 (High Sierra).

### Web Browsers

- Internet Explorer (all versions).
- Microsoft Edge versions prior to 16.
- Safari versions older than 11.
- Chrome versions older than 70.
- Firefox versions older than 63.

:::tip Note
Please ensure that your client software and operating systems are updated to the latest versions to maintain compatibility and benefit from enhanced security features.
:::

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />