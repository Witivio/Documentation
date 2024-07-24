
# Introduction to Technical Limits in GPT Pro

## Overview

In this section, we provide essential information about the technical limitations that are part of the GPT Pro environment. GPT Pro, a powerful SaaS solution for Microsoft Teams, allows for the creation of custom GPTs tailored to your enterprise needs. To ensure a seamless and secure experience, it's important to understand the constraints within which GPT Pro operates. This overview outlines the key limits related to document management, plugin integration, and UI language options.

Understanding these technical boundaries will enable you to leverage GPT Pro's capabilities effectively while maintaining optimal performance and compliance within your organizational infrastructure.

---

## Multilingual capabilities
GPT Pro uses GPT-4 as model.

GPT-4 outperforms both previous large language models and as of 2023, most state-of-the-art systems (which often have benchmark-specific training or hand-engineering). On the MMLU benchmark, an English-language suite of multiple-choice questions covering 57 subjects, GPT-4 not only outperforms existing models by a considerable margin in English, but also demonstrates strong performance in other languages.

![Languages](/assets/img/gpt/languages.jpg)

To know more about: [https://cdn.openai.com/papers/gpt-4.pdf](https://cdn.openai.com/papers/gpt-4.pdf)

## Limits and Restrictions

### Document Upload Limits

1. **Maximum Number of Documents**: Users can upload up to 10 documents to their GPT Pro environment.
2. **Supported File Types**: The following file formats are supported for upload:
    - PDF (Portable Document Format)
    - PPTX (Microsoft PowerPoint Presentation)
    - DOCX (Microsoft Word Document)

::: warning ⚠️
   Macro-enabled versions of Office documents (e.g., DOCM, PPTM) are not supported.
:::


3. **File Size Limit**: Each document uploaded should not exceed 10 Megabytes (Mo) in size.

4. **Page Number Limit**: Each document uploaded should not exceed 200 pages.

### Plugin Integration

1. **Maximum Number of Plugins**: Users can integrate up to 5 plugins with their GPT Pro environment.
2. **Plugin Execution Timeout**: Each plugin is subject to a maximum execution time of 100 seconds. If a plugin exceeds this limit, it will be automatically terminated to ensure system stability and performance.

### Administrative and User Interface Language Options

- **Languages Available in Admin Center UI**:
  - English (Default)
  - French

#### Additional Considerations

- **Data Compliance**: All uploads and integrations must comply with your organization's data governance policies and relevant legal regulations.
- **Security**: Ensure that all files and plugins are sourced from trusted and secure origins to maintain the integrity of your GPT Pro environment.
- **Updates and Changes**: The limits and restrictions outlined here are subject to change. Regularly check this documentation for the latest information.



<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />