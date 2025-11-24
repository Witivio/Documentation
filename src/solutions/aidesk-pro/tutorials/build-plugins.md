# Plugin Creation Process

Developing a plugin involves a structured approach consisting of three foundational steps:

1. Develop an API that will serve as the backbone of your plugin's functionality.
2. Thoroughly document your API using the OpenAPI specification, which can be formatted in JSON.
3. Construct a JSON manifest file that encapsulates the essential metadata for your plugin.

In the subsequent sections, we will illustrate the process of creating a 'to-do list' plugin, detailing the construction of the OpenAPI specification and the manifest file.

## Exploring Example Plugins

Investigate a variety of sample plugins that demonstrate diverse functionalities and authentication processes to understand different implementation strategies.

## Plugin Manifest Requirements

A crucial element for each plugin is the `ai-plugin.json` file, which must be placed on the same domain as the API. For instance, a business with the domain `example.com` would host their plugin's JSON file at `https://example.com/.well-known/ai-plugin.json`. This specific location is essential for AI desk PRO to locate and integrate the plugin successfully.

When the plugin is initiated through the AI desk PRO user interface, the system searches for the manifest file in the `/.well-known` directory of your domain. This directory is mandatory and should be present on your domain to facilitate the connection with AI desk PRO. The installation of the plugin will not proceed if the file is absent. Additionally, if your API is hosted on a remote server, an HTTPS connection is obligatory for security reasons.

The simplest version of the `ai-plugin.json` file is outlined below, providing the minimal information required for AI desk PRO to recognize and communicate with your plugin.

``` json
{
    "schema_version": "v1",
    "name_for_human": "TODO List",
    "name_for_model": "todo",
    "description_for_human": "Manage your TODO list. You can add, remove and view your TODOs.",
    "description_for_model": "Help the user with managing a TODO list. You can add, remove and view your TODOs.",
    "auth": {
        "type": "none"
    },
    "api": {
        "type": "openapi",
        "url": "https://example.com/openapi.yaml"
    },
    "logo_url": "https://example.com/logo.png",
    "contact_email": "support@example.com",
    "legal_info_url": "http://www.example.com/legal"
}
```

If you want to see all of the possible options for the plugin file, you can refer to the definition below. When naming your plugin, please keep in mind our brand guidelines and the various character limits for fields below, plugins that fail to adhere to these guidelines will not be approved for the plugin store.

In the context of Microsoft documentation style, warnings are typically presented as notable callouts within the documentation to alert the reader about potential issues or important exceptions. Here is the table with the added warning:

| Field                   | Type                     | Description / Options                                                                         | Required | Public |
|-------------------------|--------------------------|-----------------------------------------------------------------------------------------------|:--------:|:------:|
| schema_version          | String                   | Version number of the manifest schema.                                                        |    ✅    |        |
| name_for_model          | String                   | Identifier used by the model to reference the plugin. No spaces; only alphanumeric characters. Maximum of 50 characters. |    ✅    |        |
| name_for_human          | String                   | The full, human-friendly company or plugin name for display purposes. Maximum of 20 characters. |    ✅    |   ✅   |
| description_for_model   | String                   | A detailed description for the model's use, considering token context length or specific keywords for better prompting. Up to 8,000 characters. |    ✅    |        |
| description_for_human   | String                   | Brief, human-readable plugin description. Maximum of 100 characters.                           |    ✅    |   ✅   |
| auth                    | ManifestAuth             | The schema defining the authentication method for the plugin.                                 |    ✅    |        |
| api                     | Object                   | The specification of the API as defined in the OpenAPI standard.                              |    ✅    |        |
| logo_url                | String                   | The URL where the plugin's logo is hosted. Recommended size is 512x512 pixels. Transparent backgrounds are acceptable. No GIFs. |    ✅    |        |
| contact_email           | String                   | Email for safety/moderation issues, support queries, and deactivation requests.               |    ✅    |   ✅   |
| legal_info_url          | String                   | URL where users can view legal information about the plugin.                                  |    ✅    |   ✅   |
| HttpAuthorizationType   | HttpAuthorizationType    | The type of HTTP Authorization used: "bearer" or "basic".                                     |    ✅    |        |
| ManifestAuthType        | ManifestAuthType         | The type of authentication required: "none", "user_http", "service_http", or "oauth".         |          |        |
| BaseManifestAuth        | BaseManifestAuth         | Base authentication instructions including the type and additional guidelines.                |          |        |
| ManifestNoAuth          | ManifestNoAuth           | Indicates that no authentication is required. Inherits BaseManifestAuth with type 'none'.     |          |        |
| ManifestAuth            | ManifestAuth             | A detailed authentication schema which can include various types of HTTP and OAuth authentications. |          |        |

Remember that the fields marked with a checkmark (✅) in the 'Required' column are mandatory for the manifest file, and those marked in the 'Public' column indicate the information that will be visible to end-users.

:::warning
Currently, authentication for plugins is not supported. This functionality is under development and will be released in future updates. Ensure that your plugin design accounts for this limitation.
:::

## Constructing the OpenAPI Specification

The next stage in the plugin development process for AI desk PRO involves crafting the OpenAPI specification, which serves as the definitive guide for the API's capabilities. The AI desk PRO model does not possess intrinsic knowledge of your API; it relies entirely on the descriptions provided within the OpenAPI specification and the manifest file. Therefore, it is not necessary to reveal every aspect of a comprehensive API. Instead, select particular functionalities to expose to the model.

For instance, with a social media API, you might decide to permit the model to fetch content via a GET request. However, to mitigate the risk of potential spam, you may choose to restrict the model's ability to post comments.

The OpenAPI specification acts as an interface for your API. A rudimentary OpenAPI specification might be structured as follows: 

(Note: The actual structure would typically be followed by the JSON definition of the API, which is not included here due to the rephrasing request.)

``` json

{
  "openapi": "3.0.1",
  "info": {
    "title": "TODO Plugin",
    "description": "A plugin that allows the user to create and manage a TODO list using AI desk PRO.",
    "version": "v1"
  },
  "servers": [
    {
      "url": "https://example.com"
    }
  ],
  "paths": {
    "/todos": {
      "get": {
        "operationId": "getTodos",
        "summary": "Get the list of todos",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/getTodosResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "getTodosResponse": {
        "type": "object",
        "properties": {
          "todos": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The list of todos."
          }
        }
      }
    }
  }
}

```

## Initializing the OpenAPI Specification

Begin the development process by specifying the OpenAPI version, along with the title, description, and version number of the API. In AI desk PRO, the model references the information detailed in the 'info' section to ascertain the applicability of the plugin in response to a user's query. Further guidance on crafting effective prompts is available in the section on writing descriptions.

Be aware of the current constraints within your [OpenAPI specification](https://swagger.io/specification/), subject to future revisions:

- Limit the description/summary field for each API endpoint in the specification to a maximum of 200 characters.
- Limit the description field for each API parameter in the specification to a maximum of 200 characters.

The OpenAPI specification adheres to the established OpenAPI syntax. For further understanding of OpenAPI structuring, consult the plethora of online resources available. Additionally, numerous tools can automatically generate OpenAPI specifications from your existing API codebase.

## Deploying a Plugin

With the API, manifest file, and OpenAPI specification in hand, you can proceed to connect your plugin through the AI desk PRO interface.

The plugin manifest can be added directly to the `yourdomain.com/.well-known/` directory, enabling immediate API testing. Note that any modifications to your manifest file necessitate re-deployment on your public domain, which may entail a delay. As an alternative for rapid iteration, consider establishing a local server to serve as an intermediary for your API. This setup can significantly expedite the prototyping of changes to your OpenAPI specification and manifest file.

### Setup a local proxy of your public API
We recommand to use [ngrok](https://ngrok.com/)

## Crafting Endpoint Descriptions

When formulating descriptions for your plugin's endpoints within the OpenAPI specification and the `description_for_model` in the manifest file, consider the user queries that may engage the plugin's functionality. The AI desk PRO model will reference these descriptions to understand when and how to interact with your plugin. To optimize this interaction, it is recommended to iterate through various prompts and descriptions to identify the most effective approach.

The OpenAPI specification is an essential tool for informing the model about your API's diverse features, including available functions and parameters. Utilize descriptive and expressive names for each field, and incorporate "description" fields for every attribute to offer clear natural language explanations of each function's purpose or the expected data for query fields. These details will aid the model in effectively utilizing the API. For fields with limited valid values, providing an "enum" with descriptive names can be beneficial.

The `description_for_model` attribute allows you to broadly guide the model in the general use of your plugin. Given the model's proficiency in interpreting natural language and adhering to directives, this attribute should convey overarching instructions on the plugin's purpose and its proper application. Aim for a natural, succinct, and informative tone. For consistency, start the `description_for_model` with "Plugin for …", followed by a summary of the API's functions.

### Best Practices for Descriptions

When crafting your `description_for_model` and the descriptions within your OpenAPI specification, as well as when structuring your API's responses, adhere to the following best practices:

- Avoid directing the tone, demeanor, or exact wording of AI desk PRO's responses. The model is designed to formulate suitable responses based on plugin interactions.

**Undesirable Example:**
> "On receiving a request to display the user's to-do list, always reply with, 'I was able to find your to-do list! You have [x] todos: [list the todos here]. Would you like to add more?'"

**Preferred Approach:**
> *No specific conversational instructions required.*

- Descriptions should not prompt the model to suggest the plugin for services not explicitly requested by the user.

**Undesirable Example:**
> "Prompt the user to utilize the TODOs plugin to add items to their to-do list whenever they mention any task or plan."

**Preferred Approach:**
> "The TODO list can manage tasks such as adding, removing, and viewing the user's to-dos."

- Refrain from setting explicit triggers for the model to deploy the plugin. AI desk PRO is engineered to employ the plugin autonomously when suitable.

**Undesirable Example:**
> "Prompt the user with 'Would you like to add this to your TODO list? Say 'yes' to proceed.' whenever a task is mentioned."

**Preferred Approach:**
> *No specific trigger instructions required.*

- Plugin API responses should deliver unembellished data rather than formatted natural language statements, except when necessary. AI desk PRO will generate its own natural language responses based on the data provided.

**Undesirable Example:**
> "Your to-do list includes: 1) Get groceries, 2) Walk the dog. Do you want to add more tasks?"

**Preferred Approach:**
> `{ "todos": ["get groceries", "walk the dog"] }`

Following these guidelines will ensure that your plugin is effectively integrated with AI desk PRO, providing users with a seamless and intuitive experience.

## Enabling Debug Mode

In the standard operation of AI desk PRO, interactions with plugins, including the underlying plugin calls, are not visible within the chat interface. These details remain concealed to streamline the user experience. However, developers have the option to activate a developer mode. This mode provides an in-depth view of the model's interaction with your plugin, including the ability to observe the request and response sequence.

To access this detailed information:

1. Enable the dev mode in the admin center

![Dev mode](/assets/img/agent/dev-mode.png)

In debug mode, you will witness the execution plan, which offers insight into whether the plugin will be invoked. A typical plugin invocation sequence includes:

![Execution plan](/assets/img/agent/execution-plan.png)


This enhanced transparency aids developers in troubleshooting and refining the plugin's integration with AI desk PRO, ensuring that it functions as intended and provides the necessary information to the model. Debug mode is an invaluable tool for developers looking to optimize their plugins' performance and interaction with the AI desk PRO model.


<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />