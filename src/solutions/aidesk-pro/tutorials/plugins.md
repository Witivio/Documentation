# Introduction to AI desk PRO Plugins

AI desk PRO plugins are designed to connect AI desk PRO to a variety of third-party applications, significantly expanding its interactive abilities. These plugins empower AI desk PRO to interface with developer-defined APIs, thereby enriching its functionality and enabling it to perform a broad spectrum of tasks. With the integration of plugins, AI desk PRO is equipped to:

- Fetch real-time data such as sports scores, financial market trends, and the latest global news updates.
- Access knowledge-base resources including organizational documentation and personalized notes.
- Facilitate user-requested activities, for example, securing travel accommodations or placing orders for food delivery.

For those interested in a practical demonstration while exploring the capabilities of plugins, our plugin quickstart repository serves as an excellent starting point.

Plugin creators present one or more API endpoints through a standard manifest file along with an OpenAPI specification. This setup outlines the plugin's features, allowing AI desk PRO to interpret the documentation and make calls to the specified APIs.

In this system, AI desk PRO acts as a sophisticated API client. When provided with an API specification and a natural-language instruction for its application, AI desk PRO proactively utilizes the API to execute tasks. For example, if a user inquires, "What are my accommodation options in Paris for a short stay?", AI desk PRO might invoke a hotel booking plugin's API, synthesize the API's response, and deliver a comprehensive reply that melds the received data with its advanced language generation skills.

As the ecosystem grows, we expect to see the emergence of increasingly complex use cases, further extending the versatility of AI desk PRO.

Now, let's delve into the specifics of managing plugins within AI desk PRO.

# Plugin Development Workflow

To successfully develop a plugin for AI desk PRO, it is critical to comprehend the complete development process from start to finish.

## Crafting the Manifest File

Begin by constructing a manifest file and hosting it on your domain (e.g., `yourdomain.com/.well-known/ai-plugin.json`).

- This manifest file should contain metadata regarding your plugin, such as its name and logo.
- Include specifics about the required authentication method, such as the type of authentication and OAuth URLs, if applicable.
- Incorporate an OpenAPI specification for the API endpoints you wish to make available.
- Ensure that the OpenAPI description fields are clear, as they should provide a natural language explanation for various parameters.

:::tip
Initially, it's recommended to expose a limited number of endpoints—preferably one or two—with as few parameters as necessary. This helps to keep the manifest concise. Remember that plugin descriptions, API requests, and responses will be part of the dialogue within AI desk PRO, contributing to the model's context limit.
:::

## Registering Your Plugin

To register your plugin in the AI desk PRO admin center. [Manage Plugins](/solutions/aidesk-pro/fundamentals/manage-plugins)

:::warning
Currently, AI desk PRO does not support plugin authentication. Authentication features are in development and will be announced when available.
:::

## Activation by Users or Admins

Users must manually enable your plugin within the AI desk PRO interface:

- Note that AI desk PRO will not automatically utilize your plugin. It must be activated by the user or enable by default by an admin.

![Manage plugins](/assets/img/agent/plugins-teams-tab.png)

## Starting a Conversation

When a user initiates a conversation in AI desk PRO:

- OpenAI will integrate a brief description of your plugin into the conversation, unseen by the end-users. This includes the plugin's description, endpoints, and usage examples.
- If a user's query is pertinent, AI desk PRO may opt to execute an API call from your plugin when appropriate. For POST requests, it's mandatory for developers to implement a user confirmation step to prevent any unintentional actions.
- AI desk PRO will then weave the results of the API call into its response to the user.
- If the API call yields links, AI desk PRO might present these as enriched previews, aligning with the OpenGraph protocol by extracting details like site name, title, description, image, and URL.
- AI desk PRO is also capable of formatting data from your API using markdown, which will be rendered accordingly within the AI desk PRO interface.

:::warning
Ensure that all user interactions with your plugin comply with security and data privacy standards to maintain user trust and system integrity.
:::

## Next steps
Now that you know the basics of plugins, you might want to:


1. [Get started building a plugin](/solutions/aidesk-pro/tutorials/build-plugins)
2. [Explore example plugins](https://github.com/Witivio/Aidesk-Pro---Samples)
3. [Manage Plugins](/solutions/aidesk-pro/fundamentals/manage-plugins)

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />