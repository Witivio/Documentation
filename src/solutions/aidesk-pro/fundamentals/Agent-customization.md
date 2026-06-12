# Agent customization

# Overview

The Agent Customization section allows administrators to configure both the identity and behavioral capabilities of an agent.

To access this section:

1. Go to the "Configuration" tab  
2. Select "Agent Customization"

The interface contains two main tabs:

- Identity
- Features

The Identity tab defines how the agent appears.  
The Features tab defines how the agent behaves.

# Identity

The Identity tab allows administrators to configure how the agent is presented to users.

## Name

The Name field defines the display name of the agent.

### Purpose

- Clearly identify the agent within the organization
- Reflect the business use case (e.g., HR Pilot, IT Assistant, Finance Bot)
- Maintain consistency across deployments

This field is mandatory.

## Icon

The Icon field allows administrators to upload a visual representation of the agent.

### Purpose

- Improve visual recognition
- Align the agent with department or company branding
- Enhance the user experience

The icon is displayed next to the agent name in the interface.

## Description

The Description field defines the functional summary of the agent.

### Purpose

- Explain the scope of the agent
- Clarify its role and capabilities
- Provide context to administrators and users

The description should clearly state:
- What the agent does
- In which context it operates
- What type of support or knowledge it provides

This field is mandatory.

# Features

The Features tab allows administrators to configure how the agent processes knowledge, handles context, and integrates with external systems.

These settings influence:

- Knowledge prioritization
- Context handling
- Search capabilities
- Integration exposure

Each feature can be enabled or disabled depending on organizational needs.

# Model

The Model section lets administrators choose which AI model generates the agent's responses. It is located in the **Features** tab of Agent Customization.

## Answer model

The **Answer model** setting defines the AI model used to generate the agent's replies. The available options are:

- **Default** — the standard model (today GPT-4o-mini). Recommended for most agents.
- **Claude Opus 4.8 (Preview)** — Anthropic's Claude Opus, served through the Anthropic API.
- **Mistral Large 3 (Preview)** — Mistral's Large 3 model, served through Azure AI Foundry.

::: tip
The selected model is used for the agent's **responses only**. Semantic processing — embeddings, knowledge search, and reranking — always runs on the default model, so changing the answer model does not affect how the agent retrieves knowledge.
:::

### Credit consumption

Each model has a **credit weight**, shown as a tooltip next to the selector (for example, `2×`). Exchanges with the agent count toward your session credit consumption at that weight, so a model with a higher weight consumes credits faster. The Default model has the lowest weight.

### Changing the model

Selecting a different model opens a confirmation dialog before the change is applied:

1. In **Configuration > Agent Customization > Features**, open the **Answer model** selector.
2. Choose the desired model.
3. Review the confirmation dialog, which states:
   - the change applies **immediately**, including to conversations currently in progress;
   - past exchanges are **not** recalculated;
   - the credit weight of the selected model.
4. For a Preview model (Claude, Mistral), review the linked **Terms of Service** and tick the mandatory consent checkbox acknowledging that this agent's conversation data will be processed by the model's provider.
5. Confirm to apply the change.

The most recent change is shown below the selector as a *"Last changed from … to … by … on …"* line, providing a simple audit trail of who switched the model and when.

::: warning
Claude Opus 4.8 and Mistral Large 3 are Preview features. Review the [Preview Terms](/solutions/aidesk-pro/preview-features.html) before selecting them, and confirm the **Multi-Model** feature is available on your subscription (it appears in the subscription **Preview features** card).
:::

# Privacy & Security

## Anonymous mode

Mask user identity to reinforce confidentiality.

When enabled:

- User identities are not displayed in conversations
- User identities are not visible in conversation history
- Interactions are processed without nominative association

The conversational experience remains fully functional.

Recommended for environments requiring enhanced confidentiality.

# Content & Capabilities

## Balanced content ranking

Prioritize Q&A and documents equally for optimal relevance.

When enabled:

- Q&A and documents are evaluated at the same priority level
- The agent applies a structured arbitration logic
- Knowledge usage remains consistent and context-aware

## Web Search (Preview)

Targeted web search with the ability to define custom sources and domains.

In Preview mode, web queries are limited to 10 per agent per month.

When enabled:

- The agent can retrieve controlled web-based information
- Administrators can restrict domains
- External data complements internal knowledge

This feature is currently in Preview and may evolve.

## SourceSense (Preview)

Conversational experience with contextual references visible throughout the conversation.

When enabled:

- References remain visible across exchanges
- Context is incorporated in a structured format
- Responses align with transparency and explainability principles

SourceSense is currently available in Preview.

# Integrations

## MCP (Preview)

Model Context Protocol – Enable the use of the agent via MCP.

The MCP feature allows organizations to use the agent in their own environments or orchestrations as an MCP Tool.

When enabled:

- The agent can be invoked from an MCP-compatible environment
- The agent can be integrated into internal workflows
- External platforms can call the agent

Use cases:

- Multi-agent orchestration
- Internal system integration
- Third-party platform invocation

Important information:

- MCP is currently in Preview
- Activation is optional
- Intended for environments with compatible infrastructure

For detailed setup instructions, including Microsoft Entra ID configuration and MCP client connection guides, see the dedicated [MCP Server documentation](/solutions/aidesk-pro/fundamentals/mcp-server.html).

# Preview Terms & Conditions

Features marked as "Preview" are subject to specific usage conditions.

Before enabling any Preview feature, administrators should review the official Preview Terms and conditions available at:

[https://docs.witivio.com/solutions/aidesk-pro/preview-features.html](https://docs.witivio.com/solutions/aidesk-pro/preview-features.html)

Preview features:

- May evolve during the evaluation phase
- May have usage limitations
- Are not covered by standard production SLAs
- Are intended for controlled evaluation environments
