# Data Management Practices

We understand that our customers need to be confident using Witivio solutions, and be aware of our data collection practices.

::: tip Note
This section is subject to change and we recommend that you check back quarterly for updates.
:::

## Application data

Through the implementation of its different features, Witivio solustions access, processes and stores several kind of data:
- Calendar Pro: [Architecture & Security](/architecture-security/calendar-pro/)
- Booking Room Pro: [Architecture & Security](/architecture-security/bookingroom-pro/)
- Parking Pro: [Architecture & Security](/architecture-security/parking-pro/)
- Company Communicator Pro: [Architecture & Security](/architecture-security/company-communicator-pro/)
- Contact Pro: [Architecture & Security](/architecture-security/contact-pro/)
- Distribution List Pro: [Architecture & Security](/architecture-security/ditribution-list-pro/)
- Keepass Pro: [Architecture & Security](/architecture-security/keepass-pro/)
- Map Pro: [Architecture & Security](/architecture-security/map-pro/)
- Gantt Chart Pro: [Architecture & Security](/architecture-security/gantt-chart-pro/)
- GPT Pro: [Architecture & Security](/architecture-security/gpt-pro/)
- Green Center: [Architecture & Security](/architecture-security/green-center/)


### Teams data

As part of its provisionning feature, TeamsPro may access, process or store temporarily or permanently certain metadata or data.

| Data | Accessed | Cached | Stored | Notes |
|------|:--------:|:------:|:------:|-------|
| Teams tab ID | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| Teams tab Name | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |
| TenantId | ✔ | ✔ | ✔ | Accessed and updated after each login.<br/>Stored as long as the organization is active. |

#### Teams conversations

Witivio solutions NEVER access, process or store teams conversations.

## Metadata Collection

In addition to core application data, Witivio solutions collect metadata to help us understand how the product is being used and what kinds of errors, such as sign-in errors, have occurred. This information helps us understand usage patterns, plan new features, and troubleshoot and fix problem areas.

Collected metadata falls into these four categories:
-  [Census data](#census-data)
-  [Usage data](#usage-data)
-  [Support data](#support-data)
-  [Error reporting data](#error-reporting-data)

## Census data
Census data is acquired solely to provide, support, and improve Witivio solutions. It includes environmental information such as device and operating system versions, and regional and language settings. Here are some specific examples of the census data that's collected:

| Data type | Example | Notes |
|-----------|---------|-------|
| AppName | TeamsPro | |
| DeviceModel | iPhone | |
| OSName | iPhoneiOS | |
| OSVersion | 8.3 | |
| UserLanguage | EN-US | |
| UserID | E296D735-4F36-4E18-7C3B-52E1A02A0164 | Witivio automatically generates anonymous user IDs, then populates telemetry events with these IDs as they're sent from the app. A hashing ensures the ID cannot be linked to a specific user. |
| Session ID | 5E872200-F546-4CCD-8F23-AF5F507AA2DD | Witivio automatically generates anonymous session IDs, then populates telemetry events with these IDs as they're sent from your app. A hashing ensures the ID cannot be linked to a specific user. |

These anonymous data are collected through the Azure Application Insights service and Microsoft Clarity
For reference, see [Usage analysis with Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/usage-overview) and [Microsoft Clarity](https://learn.microsoft.com/en-us/clarity/setup-and-installation/about-clarity)

In addition, we're collecting anonymous network latency measurements (aka Real User Measurements) through the Azure Traffic Manager service to apply load-balancing rules more effectively.  
For reference, see [How to send Real User Measurements to Azure Traffic Manager using web pages](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-create-rum-web-pages)

::: tip
Census data DOES NOT contain any information that identifies your organization or users.
:::

::: warning
Census data collection is on by default and cannot be turned off by admins or end users.
:::

## Usage data

Usage data contains information that identifies your organization, such as domain names, and your users. Here are some specific examples of the usage data that are collected:

::: warning
Usage data DOES contain information that identifies your organization and users.
:::

::: warning
Usage data collection is on by default and cannot be turned off by admins or end users.
:::

Usage data are processed in two ways:
* We are processing anonymous usage data to understand how our customers are using Witivio solutions.
* We are processing non-anonymous usage data to create in-app usage dashboards and audit trails for our customers administrators.

## Support data

Support data includes information such as user UPN, tenant ID, app version. Access to these data is restricted to our support team, and is only used in case of a direct support request to our support team.

Support data contains information that identifies your organization, such as contoso.com, and your users. Here are some specific examples of the usage data that's collected, for three distinct kinds of profiles.

::: warning
Usage data DOES contain information that identifies your organization and users.  
But we're not storing any [Sensitive Personal Data](https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/legal-grounds-processing-data/sensitive-data/what-personal-data-considered-sensitive_en)
:::

::: warning
Usage data collection is on by default and cannot be turned off by admins or end users.
:::

## Error reporting data

Error reporting data can include information about performance and reliability, device configuration, network connection quality, error codes, error logs, and exceptions.

### Log files lifecycle

1. Logs entries are generated from each application container.
2. Each new log entry is stored:
  - In a *.log file
  - In Azure application Insights as a new trace
3. Every 90 days, logs files are rotated and older log files deleted.

::: warning
Error reporting data may also contain personally identifiable information such as the user's IP address.
:::

::: warning
Error reporting data collection is on by default and cannot be turned off by admins or end users.
:::

## Data Residency

The Witivio solutions rely entirely on the Microsoft Azure platform located in North Europe datacenter in Ireland or France Central in France.

::: tip Reference
Learn more about [Azure Regions](https://azure.microsoft.com/en-us/global-infrastructure/regions/)
:::

<Classification label="public" />
<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />