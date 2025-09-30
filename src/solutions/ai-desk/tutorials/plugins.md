# Introduction to AI Desk Plugins

AI Desk plugins are designed to connect AI Desk to a variety of third-party applications, significantly expanding its interactive abilities. These plugins empower AI Desk to interface with developer-defined APIs, thereby enriching its functionality and enabling it to perform a broad spectrum of tasks. With the integration of plugins, AI Desk is equipped to:

- Fetch real-time data such as sports scores, financial market trends, and the latest global news updates.
- Access knowledge-base resources including organizational documentation and personalized notes.
- Facilitate user-requested activities, for example, securing travel accommodations or placing orders for food delivery.

For those interested in a practical demonstration while exploring the capabilities of plugins, our plugin quickstart repository serves as an excellent starting point.

Plugin creators present one or more API endpoints through a standard manifest file along with an OpenAPI specification. This setup outlines the plugin's features, allowing AI Desk to interpret the documentation and make calls to the specified APIs.

In this system, AI Desk acts as a sophisticated API client. When provided with an API specification and a natural-language instruction for its application, AI Desk proactively utilizes the API to execute tasks. For example, if a user inquires, "What are my accommodation options in Paris for a short stay?", AI Desk might invoke a hotel booking plugin's API, synthesize the API's response, and deliver a comprehensive reply that melds the received data with its advanced language generation skills.

As the ecosystem grows, we expect to see the emergence of increasingly complex use cases, further extending the versatility of AI Desk.

Now, let's delve into the specifics of managing plugins within AI Desk.

# Plugin Development Workflow

To successfully develop a plugin for AI Desk, it is critical to comprehend the complete development process from start to finish.

## Crafting the Manifest File

Begin by constructing a manifest file and hosting it on your domain (e.g., `yourdomain.com/.well-known/ai-plugin.json`).

- This manifest file should contain metadata regarding your plugin, such as its name and logo.
- Include specifics about the required authentication method, such as the type of authentication and OAuth URLs, if applicable.
- Incorporate an OpenAPI specification for the API endpoints you wish to make available.
- Ensure that the OpenAPI description fields are clear, as they should provide a natural language explanation for various parameters.

:::tip
Initially, it's recommended to expose a limited number of endpoints—preferably one or two—with as few parameters as necessary. This helps to keep the manifest concise. Remember that plugin descriptions, API requests, and responses will be part of the dialogue within AI Desk, contributing to the model's context limit.
:::

## Registering Your Plugin

To register your plugin in the AI Desk admin center. [Manage Plugins](/solutions/ai-desk/fundamentals/manage-plugins)

:::warning
Currently, AI Desk does not support plugin authentication. Authentication features are in development and will be announced when available.
:::

## Activation by Users or Admins

Users must manually enable your plugin within the AI Desk interface:

- Note that AI Desk will not automatically utilize your plugin. It must be activated by the user or enable by default by an admin.

![Manage plugins](/assets/img/gpt/plugins-teams-tab.png)

## Starting a Conversation

When a user initiates a conversation in AI Desk:

- OpenAI will integrate a brief description of your plugin into the conversation, unseen by the end-users. This includes the plugin's description, endpoints, and usage examples.
- If a user's query is pertinent, AI Desk may opt to execute an API call from your plugin when appropriate. For POST requests, it's mandatory for developers to implement a user confirmation step to prevent any unintentional actions.
- AI Desk will then weave the results of the API call into its response to the user.
- If the API call yields links, AI Desk might present these as enriched previews, aligning with the OpenGraph protocol by extracting details like site name, title, description, image, and URL.
- AI Desk is also capable of formatting data from your API using markdown, which will be rendered accordingly within the AI Desk interface.

:::warning
Ensure that all user interactions with your plugin comply with security and data privacy standards to maintain user trust and system integrity.
:::

## Next steps
Now that you know the basics of plugins, you might want to:


1. [Get started building a plugin](/solutions/ai-desk/tutorials/build-plugins)
2. [Explore example plugins](https://github.com/Witivio/Gpt-Pro---Samples)
3. [Manage Plugins](/solutions/ai-desk/fundamentals/manage-plugins)

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />