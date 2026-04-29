# MCP Server (Preview)

## Overview

AI desk PRO exposes a **Model Context Protocol (MCP)** server for each agent. MCP is an open standard that allows AI applications, development tools, and orchestration platforms to interact with external tools in a standardized way.

When MCP is enabled on an agent, any MCP-compatible client (Claude Desktop, VS Code Copilot, custom orchestrators, etc.) can **chat with the agent** using its full knowledge base, documents, and configured data sources — just as a user would in Microsoft Teams or the webchat.

### Use cases

- **AI-assisted development** — Connect your agent to Claude Desktop or VS Code so developers can query internal documentation, HR policies, or IT procedures without leaving their IDE.
- **Multi-agent orchestration** — Use AI desk PRO agents as tools within a larger AI pipeline or agent framework.
- **Internal system integration** — Let internal platforms call the agent programmatically to answer user questions.
- **Custom applications** — Build your own chat interface or workflow that leverages the agent's knowledge.

### How it works

The MCP server uses the **HTTP + SSE (Server-Sent Events)** transport. MCP clients connect to a dedicated endpoint for the agent and authenticate with an Azure Entra ID (Azure AD) token. Once connected, the client can invoke the `chat` tool to send questions and receive answers with citations.

```
MCP Client ──Bearer token──▶ AI desk PRO MCP Server ──▶ Agent Knowledge Base
            ◀──SSE stream────                        ◀── Answer + Citations
```

---

## Prerequisites

Before configuring MCP, ensure you have:

- Administrator access to the agent in AI desk PRO
- Access to the **Azure Entra ID** portal (to register or configure a client application)
- An MCP-compatible client application

---

## Enable MCP on an agent

1. Sign in to AI desk PRO
2. Open the agent you want to expose via MCP
3. Navigate to **Configuration** > **Agent Customization**
4. Go to the **Features** tab
5. Toggle **MCP** to **On**
6. Save your changes

:::warning
MCP is a Preview feature. Review the [Preview Terms](/solutions/aidesk-pro/preview-features.html) before enabling it.
:::

Once MCP is enabled, connection information appears on the agent's **Information** page:

| Field | Description |
|-------|-------------|
| **MCP Endpoint** | The base URL for the MCP server (e.g., `https://api.aidesk-pro.com/mcp/{agent-id}`) |
| **Application ID** | The Azure Entra ID application ID used for authentication |
| **Audience URI** | The audience value to request in the OAuth token (e.g., `api://api.aidesk-pro.com/botid-{application-id}`) |

You will need these three values to configure both the Azure client application and the MCP client.

---

## Configure the Azure Entra ID client application

To authenticate with the MCP server, you need to register (or update) a client application in Azure Entra ID that has permission to request tokens for the agent's API.

### Step 1 — Register a client application (or use an existing one)

1. Go to the [Azure Portal](https://portal.azure.com) > **Microsoft Entra ID** > **App registrations**
2. Click **New registration** (or select an existing application)
3. Enter a name (e.g., `MCP Client - AI desk PRO`)
4. Set **Supported account types** to **Accounts in this organizational directory only**
5. Click **Register**
6. Note the **Application (client) ID** — you will need it for the MCP client configuration

### Step 2 — Create a client secret

1. In your client application, go to **Certificates & secrets**
2. Click **New client secret**
3. Enter a description and expiration period
4. Click **Add**
5. Copy the **Value** immediately — it will not be shown again

:::tip
For production scenarios, consider using a **certificate** or **managed identity** instead of a client secret.
:::

### Step 3 — Add API permissions

You need to grant your client application permission to call the agent's API. The agent's API is exposed by the SSO application shown on the agent's Information page.

::: warning Delegated authentication only
The MCP Server only supports the **delegated (on-behalf-of-user) flow**. Application permissions (service-to-service / client credentials) are **not supported**: every call must be made on behalf of a signed-in user so that the agent can enforce per-user permissions on the underlying knowledge sources.
:::

1. In your client application, go to **API permissions**
2. Click **Add a permission** > **APIs my organization uses**
3. Search for the **Application ID** shown on the agent's Information page
4. Select **Delegated permissions** — the MCP client acts on behalf of a signed-in user
5. Select the available permission scope and click **Add permissions**

### Step 4 — Acquire a token

Your MCP client must obtain a JWT access token from Azure Entra ID before connecting, using the delegated (user) flow:

```
POST https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&client_id={your-client-app-id}
&scope={audience-uri}/.default
&code={authorization-code}
&redirect_uri={your-redirect-uri}
&client_secret={your-client-secret}
```

Replace `{audience-uri}` with the **Audience URI** from the agent's Information page.

---

## Connect an MCP client

### Connection settings

All MCP clients need the following information:

| Setting | Value |
|---------|-------|
| **Server URL** | The **MCP Endpoint** from the agent's Information page |
| **Transport** | HTTP + SSE (Streamable HTTP) |
| **Authentication** | Bearer token (Azure Entra ID JWT) |

### Claude Desktop

Add the following to your Claude Desktop MCP configuration file (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "aidesk-pro": {
      "url": "https://api.aidesk-pro.com/mcp/{agent-id}/sse",
      "headers": {
        "Authorization": "Bearer {your-access-token}"
      }
    }
  }
}
```

:::tip
Since access tokens expire, you may want to use a helper script or proxy that refreshes the token automatically.
:::

### VS Code (GitHub Copilot)

In your VS Code `settings.json`, add an MCP server entry:

```json
{
  "mcp": {
    "servers": {
      "aidesk-pro": {
        "type": "sse",
        "url": "https://api.aidesk-pro.com/mcp/{agent-id}/sse",
        "headers": {
          "Authorization": "Bearer {your-access-token}"
        }
      }
    }
  }
}
```

### Custom client (programmatic)

Any MCP SDK can connect to the server. Here is an example using the TypeScript MCP SDK:

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

const transport = new SSEClientTransport(
  new URL("https://api.aidesk-pro.com/mcp/{agent-id}/sse"),
  {
    requestInit: {
      headers: {
        Authorization: "Bearer {your-access-token}",
      },
    },
  }
);

const client = new Client({ name: "my-app", version: "1.0.0" });
await client.connect(transport);

// List available tools
const tools = await client.listTools();
console.log(tools);

// Chat with the agent
const result = await client.callTool("chat", {
  message: "What is our company's remote work policy?",
});
console.log(result);
```

---

## Protocol reference (advanced)

This section describes the raw SSE + JSON-RPC flow for developers building a custom client **without an MCP SDK**. If you use an MCP SDK (TypeScript, Python, C#), these steps are handled automatically.

### 1 — Open the SSE connection

Connect to the SSE endpoint with the Bearer token:

```
GET /mcp/{agent-id}/sse HTTP/1.1
Host: api.aidesk-pro.com
Authorization: Bearer {access-token}
Accept: text/event-stream
```

The server responds with a stream. Wait for the `endpoint` event:

```
event: endpoint
data: /mcp/message?sessionId=abc123
```

This gives you the **message URL** to send JSON-RPC requests to. Prepend the base URL and insert the agent ID:

```
POST https://api.aidesk-pro.com/mcp/{agent-id}/message?sessionId=abc123
```

Keep the SSE connection open — all responses will arrive through it.

### 2 — Initialize the session

Send a JSON-RPC `initialize` request to the message endpoint:

```json
{
  "jsonrpc": "2.0",
  "id": "init-1",
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-03-26",
    "capabilities": {},
    "clientInfo": {
      "name": "my-client",
      "version": "1.0.0"
    }
  }
}
```

The server responds (via SSE) with its capabilities and server info.

### 3 — List available tools

```json
{
  "jsonrpc": "2.0",
  "id": "tools-1",
  "method": "tools/list",
  "params": {}
}
```

The response includes the `chat` tool with its parameter schema.

### 4 — Call the chat tool

```json
{
  "jsonrpc": "2.0",
  "id": "chat-1",
  "method": "tools/call",
  "params": {
    "name": "chat",
    "arguments": {
      "message": "What is our remote work policy?",
      "chatId": null
    }
  }
}
```

The response arrives via the SSE stream with the JSON-RPC result containing the chat response (answer, citations, chatId, etc.).

---

## Available tools

The MCP server exposes a single tool:

### `chat`

Chat with the AI desk PRO agent using its knowledge base, documents, and configured data sources.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `message` | string | Yes | The user's question or query |
| `chatId` | string | No | A chat session ID to continue an existing conversation |

**Response (JSON):**

| Field | Type | Description |
|-------|------|-------------|
| `answer` | string | The complete answer from the agent |
| `chatId` | string | The chat session ID (use this to continue the conversation) |
| `chatMessageId` | string | The unique ID of this response message |
| `citations` | array | Sources and documents used to generate the answer |
| `error` | object | Error details if the request failed (contains `code` and `message`) |

**Example — Single question:**

```json
{
  "message": "What are the steps to request a day off?"
}
```

**Example — Continue a conversation:**

```json
{
  "message": "And what about sick leave?",
  "chatId": "abc123-def456-..."
}
```

---

## Important information

- MCP is currently a **Preview** feature — it may evolve or change during this phase
- The MCP server version is **0.2.0**
- Authentication requires a valid Azure Entra ID JWT token
- The agent must have MCP enabled in its configuration
- Each agent has its own dedicated MCP endpoint
- Chat sessions persist across calls when using the same `chatId`
- Content filtering is applied to all MCP interactions, just like in Teams or webchat

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />
