# Content Filtering

This document provides an overview of our content filtering system and guidelines to ensure a safe and positive user experience.

## Content Filtering Overview

GPT Pro incorporates a content filtering system to detect and prevent the output of harmful content. This system runs on a combination of classification models aimed at identifying specific categories of potentially harmful content in both input prompts and output completions.

## Harm Categories

The content filtering system targets the following harmful content categories:

- **Hate and Fairness**: Content that includes discriminatory language or contributes to societal inequities.
- **Sexual**: Content related to explicit or sensitive topics.
- **Violence**: Content containing descriptions of physical harm or aggressive behavior.
- **Self-Harm**: Content involving actions intended to harm oneself.

## Action on Content Filtering Detection

When the content filtering system detects potentially harmful content, GPT Pro takes the following actions:

- **Error Response**: If a prompt or completion is classified as filtered, GPT Pro returns an error message.
- **Error Handling**: Users should check the error message and refer to the documentation provided to understand why their query was filtered.

## Best Practices

To ensure a positive user experience while minimizing potential harms, consider the following best practices:

- **Prompt Evaluation**: Before sending a prompt, review its content to avoid triggering the content filtering system.
- **Error Handling**: If an error occurs due to content filtering, encourage users to review the provided documentation for guidance.
- **Compliance**: Adhere to our content filtering guidelines and ensure that your interactions with GPT Pro comply with our Code of Conduct.

<Intercom />
<Clarity />
<GoogleAnalytics />