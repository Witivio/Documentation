# MoveStream Migration Program Overview

## Introduction to the MoveStream Program

The MoveStream program is designed to facilitate a smooth transition for users migrating from Virtual Agent Studio to GPT Pro. This structured approach ensures that all aspects of the migration are meticulously planned and executed, minimizing disruption and optimizing the upgrade experience. Below is a detailed explanation of each phase of the MoveStream program.

![MoveStream](/assets/img/gpt/movestream.jpg)

## Detailed Phases of MoveStream

**1. Prepare**
   - **Stakeholders**: Identify and engage all relevant stakeholders to ensure their needs and expectations are met.
   - **System Requirements**: Define the technical specifications and system requirements like Azure Entra ID SSO and MS Graph authorization.
   - **Compatibility & Risk Check**: Conduct thorough compatibility tests and risk assessments to identify potential issues.
   - **Communication Plan**: Develop a communication strategy to keep all parties informed throughout the migration process.

**2. Upgrade**
   - **Coexistence Mode**: Implement a temporary coexistence mode to ensure continuity during the transition. Deploy a dedicated Microsoft Teams package for the new version.
   - **Migration Tools**: Utilize provided tools to facilitate an efficient migration process.
   - **Manual Migration Support**: Provide support for manual migration steps when automated tools cannot cover specific needs.
   - **Plugins Development**: Develop OAI plugins to ensure communication with other tools.

**3. Evaluate**
   - **Beta Groups**: Roll out the new version to select user groups for initial feedback.
   - **Pilot Testing**: Conduct pilot testing to catch any critical issues before a full rollout.
   - **Feedback Loop**: Establish a feedback loop to quickly incorporate user input into the development cycle.

**4. Adopt**
   - **Migration Guide**: Offer comprehensive guides to assist users in the migration process.
   - **Training**: Provide training sessions to familiarize users with the new features and functionalities.
   - **Change Management**: Help users manage the change through clear guidance and support.

**5. Go-live**
   - **Launch**: Officially launch the new version to all users.
   - **Monitoring**: Continuously monitor the system to ensure it performs as expected.
   - **Benchmark**: Set benchmarks to evaluate the performance of the new version against expected outcomes.

**6. Post Migration**
   - **Review & Feedback**: Gather comprehensive feedback to evaluate the success of the migration.
   - **Continuous Support**: Provide ongoing support to address any arising issues.
   - **Future Training**: Offer additional training to ensure users can fully leverage the new version.
   - **Maximize GenAI Usage**: Focus on maximizing the usage of generative AI features included in the new version.

### Optional Items
   - **Custom Plugins Development**: Develop custom plugins tailored to specific user needs.
   - **Advanced Configuration**: Offer advanced configuration options for power users.
   - **Gen AI Training**: Partners or Witivio provide specialized training on generative AI functionalities.
   - **Prompt Library**: Partners or Witivio establish a library of prompts to facilitate the use of generative AI capabilities.


## Feature Migration Guide 

This comprehensive table outlines the migration status and configuration requirements for each feature available in GPT Pro. It serves as a detailed resource for Virtual Agent Studio administrators to understand which features need manual intervention, which are ready to use, and which are not supported in GPT Pro. Each entry specifies the necessary action (Manual, Script, Use Company Communicator Pro, or N/A), along with any additional comments to guide you through the migration process efficiently.

::: warning ⚠️
   Please note that the information in this table is subject to change as new updates and enhancements are continuously integrated into GPT Pro. Always refer to the latest documentation for the most current and accurate details.
:::

| Virtual Agent Studio Items                | GPT Pro | Description                                                                      | Way               | Comments                                         |
|----------------------|---------|----------------------------------------------------------------------------------|-------------------|-------------------------------------------------|
| **Name & Picture**   | ✅      | Configure the display name and profile picture manually.                         | Manual            |                                                 |
| **Dashboard Data**   | 🟨      | Manually configure dashboard settings for optimal display of data.               | Manual            |                                                 |
| **Messages**         | 🟨      | Configure system prompts manually to suit business needs.                        | Manual            |                                                 |
| **Categories**       | 🟨      | Define and manage message categories through scripts.                            | Script            |                                                 |
| **Synonyms**         | 🟨      | Not necessary to configure synonyms except for business-specific acronyms.      | Manual            | Use system settings to configure.               |
| **Tests**            | 🔴      | Tests are not supported in this version.                                         | N/A               |                                                 |
| **Automatic Spell Check** | 🟨  | Spell check functionality does not require configuration.                        | Manual            |                                                 |
| **Jokes**            | 🟨      | Toggle joke functionality on or off through system settings.                     | Manual            |                                                 |
| **Smalltalk**        | 🟨      | Configure casual conversation settings manually.                                 | Manual            |                                                 |
| **Confident Score**  | 🟨      | No configuration needed for confidence scoring.                                  | Manual            |                                                 |
| **Variables**        | ❓      | Configuration of variables is uncertain in the current setup.                    | ❓               | Evaluation in progress.                    |
| **KB - Response Simple** | ✅  | Simple knowledge base responses do not need manual setup.                        | Manual            |                                                 |
| **KB - Alternatives** | 🟨     | Alternative responses can be managed without additional configuration.           | Script            |                                                 |
| **KB - Tags**        | ✅      | Tagging in the knowledge base does not require manual intervention.               | Manual            |                                                 |
| **KB - Flux**        | ✅      | Workflow within the knowledge base does not require manual setup.                 | Manual            |                                                 |
| **KB - Visio**       | 🔴      | Replaced by the welcome prompt card; old visio features are deprecated.          | N/A               | |
| **Starting Flows**   | 🔴      | Starting flows are managed through new prompt cards.                             | Replaces          |                                                 |
| **Escalation**       | 🔴      | Not necessary in the current setup.                                              | N/A               |                                                 |
| **Active Learning**  | 🔴      | Active learning features are not required for configuration.                     | N/A               |                                                 |
| **Feedback**         | 🟨      | Feedback mechanisms are manually configurable.                                   | Manual            |                                                 |
| **Image Gallery**    | 🟨      | Configure the image gallery manually.                                            | Manual            |                                                 |
| **API Provider**     | 🔴      | API configurations are manual and require extra migration steps.                 | Manual            | Extra migration required.                       |
| **History**          | 🟨      | Previous configurations are not migrated and need manual setup.                  | Manual            |                                                 |
| **Push**             | ✅      | Use the Company Communicator Pro for push notifications.                         | Use Company Communicator Pro |                                     |
| **Push History**     | 🔴      | Push history has not been migrated to the new system.                            | Not migrated      |                                                 |
| **Push User List**   | 🟨      | Managed through Company Communicator Pro.                                        | Use Company Communicator Pro |                                     |
| **Profiles**         | 🟨      | Profiles require creating multiple GPT configurations.                           | Manual            | Create diverse configurations for each profile. |
| **Privacy Policies** | 🟨      | Establish privacy policies during the first conversation with the user.          | Manual            | Policy creation is mandatory.                   |
| **Enable Record User Identity** | ✅ | Record user identities as needed for contextual conversations.                 | Manual            | Full history needed.                            |
| **Authorization**    | 🔴      | Authorization features need manual configuration.                                | Manual            |                                                 |
| **Multi Language**   | ✅      | Supports multiple languages natively with automatic translation.                 | Native            |                                                 |
| **Coaches**          | 🟨      | Admin center needs to be configured for coaching features.                       | Manual            | Configure through the admin center.             |
| **Audit Log**        | 🔴      | Audit logs are not supported in this setup.                                      | Not supported     |                                                 |
| **Licenses Configuration** | 🔴 | Licensing features are not supported and require external management.          | Not supported     |                                                 |




<Hubspot />
<Clarity />
<GoogleAnalytics />