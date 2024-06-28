# Communication & Network Security

## Network diagram
In order to prepare your organization's network for Witivio solutions, here is an overview of the the different network flows involved:

![TeamsPro architecture](/assets/img/global-architecture.png)

### Flows between your organization's network and Witivio solutions

**All the traffic from and to the Witivio solutions use HTTPS protocol on port 443.**  
Here is a short description of each flow:
1. *.teams-pro.com / gpt-pro.com for the apps including help contents
2. *.msecnd.net and *..visualstudio.com for performance metrics analysis
3. *.windows.net for blob cache storage
4. *.microsoft.com for Microsoft Graph API access

## Traffic encryption

All the traffic from and to Witivio solutions are encrypted (and HTTPS protocol enforced), using [TLS v1.2](https://github.com/ssllabs/research/wiki/SSL-and-TLS-Deployment-Best-Practices), ensuring secure communication between our customers and our platform. To do so, we’re using Azure Front Door as the only entry point to the app (web apps and API).

::: tip Online SSL Test
You can see a detailed report of our SSL certificate using this free online service that performs a deep analysis of the configuration of our SSL:  
[Launch Qualys SSL Server Test](https://www.ssllabs.com/ssltest/analyze.html?d=calendar.teams-pro.com)
:::

## DDoS prevention

While we've prevented rogue traffic from accessing our servers and network, it’s still possible for external services to block anyone else from using our service by creating a distributed, denial-of-service attack.  
To prevent this, we're using Azure Traffic Manager as a first level of protection.  
Learn more about [Azure Traffic Manager](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview)

## Domains whitelisting

We understand that our customers need to be confident that they are communicating with Witivio solutions in a secure environment. Domains whitelisting is one of the most effective methods of ensuring this and prevents any internet traffic intended for Witivio from being hijacked or rerouted to a rogue website.  
Our complete portfolio of domains are outlined below to help our customers configure their corporate web proxy.

::: tip Note
This information is subject to change and we recommend that you check back quarterly for the addition of new domains.
:::

### TeamsPro & MetaOffice Pro

#### TeamsPro Web App
* Domains/Hosts: ***.teams-pro.com**
* Justification/Purpose: TeamsPro web applications for Microsoft Teams

#### TeamsPro Help Center
* Domains/Hosts: **docs.teams-pro.com**

#### TeamsPro Trust Center
* Domains/Hosts: **trust.teams-pro.com**

#### TeamsPro Admin Center
* Domains/Hosts: **admin.teams-pro.com**
* Justification/Purpose: Admin center of TeamsPro

#### TeamsPro Subscription manager
* Domains/Hosts: **subscription.witivio.com**
* Justification/Purpose: Subscription management for TeamsPro licence

#### Chargebee
* Domains/Hosts:
  * ***.chargebee.com**
* Justification/Purpose: Subsription and billing management.

#### Intercom
* Domains/Hosts: ***.intercom.com**
* Justification/Purpose: Support management.

#### Clarity
* Domains/Hosts: **clarity.ms**
* Justification/Purpose: Microsoft service used by Witivio solutions to collect anonymous telemetry


### GPT Pro

#### GPT Pro Web App
* Domains/Hosts: ***.gpt-pro.com**
* Justification/Purpose: GPTPro web applications for Microsoft Teams

#### GPT Pro Help Center
* Domains/Hosts: **docs.witivio.com**

#### GPT Pro Trust Center
* Domains/Hosts: **trust.witivio.com**

#### GPT Pro Admin Center
* Domains/Hosts: **admin.gpt-pro.com**
* Justification/Purpose: Admin center of GPT Pro

#### Clarity
* Domains/Hosts: **clarity.ms**
* Justification/Purpose: Microsoft service used by Witivio solutions to collect anonymous telemetry

## All

### Microsoft Azure Application Insight
* Domains/Hosts:
  * **applicationinsights.azure.com**
  * **dc.services.visualstudio.com**
* Justification/Purpose: Microsoft Azure service used by Witivio solutions to collect anonymous performance metrics, telemetry and application logs/traces. [More infos](https://docs.microsoft.com/en-us/azure/azure-monitor/app/ip-addresses)

### Microsoft Graph API
* Domains/Hosts: **graph.microsoft.com**
* Justification/Purpose: API used by Witivio solutions to interact with Microsoft 365 services

### Fonts
* Domains/Hosts: **fonts.gstatic.com**
* Justification/Purpose: Fonts used by Witivio solutions



<Classification label="public" />
<Hubspot />
<Clarity />
<GoogleAnalytics />