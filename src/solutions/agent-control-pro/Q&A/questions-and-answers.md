# Q&A

### Does Agent Control Pro require a Microsoft 365 Copilot license?
Yes. Agent Control Pro is a declarative agent for Microsoft 365 Copilot and requires an active Copilot license to function. Licensing is **per tenant**: one subscription covers your entire tenant regardless of agent count.

### What data does Agent Control Pro analyze?
It analyzes two sources: (1) your Microsoft 365 Copilot agent catalogue read live from Microsoft Graph (`/copilot/admin/catalog/packages`), and (2) the Copilot usage CSV you upload from the Microsoft 365 admin centre. Catalogue data is read on demand and not persisted; usage rows are stored tenant-isolated until your next upload replaces them.

### Does Agent Control Pro read the content of my Copilot conversations?
No. Agent Control Pro never reads conversation transcripts, prompts, or responses. It only reads agent definitions (name, description, instructions, deployment metadata) and counts (active users, response volumes) from the usage report.

### Can Agent Control Pro modify or delete agents in my tenant?
No. Agent Control Pro is read-only by design. Every output is a recommendation; you decide and act in the Microsoft 365 admin centre. There is no API path for Agent Control Pro to modify, delete, or share an agent.

### Why do I need to upload a usage CSV (can't it pull live)?
Microsoft Graph does not yet expose the Copilot usage report as a live API surface. Until it does, the manual upload is the most reliable path. Live ingestion is on the Agent Control Pro roadmap; today, re-uploading the latest CSV monthly is the recommended cadence.

### How are duplicates detected?
Agent Control Pro compares agent names, descriptions, and instructions across the tenant catalogue using deterministic matching. The default thresholds are conservative, so you'll see fewer false positives at the cost of some near-duplicates being missed. Multilingual and embedding-based matching is on the roadmap.

### What is the difference between a "shared" and "LOB" agent?
**Shared** agents are user-published with a link, and discoverability depends on the sharing settings the publisher chose. **LOB (line of business)** agents are admin-deployed, available tenant-wide, and discoverable in the Agent Store. Promoting a popular shared agent to LOB is the primary "org-wide candidate" workflow.

### Who in my tenant can use Agent Control Pro?
Any authenticated administrator in a tenant that has consented to the Agent Control Pro Entra application can use it. There is no per-user role configuration; every authorized administrator sees the same governance view of the same tenant. Authentication is handled through Microsoft Entra ID using on-behalf-of delegated permissions.

### Where is my data stored?
Tenant-isolated in a PostgreSQL database operated by Witivio. The only data persisted are: usage report rows you uploaded, marketplace subscription metadata, and your tenant identifier. Catalogue data and user / group lookups are read live and never written to durable storage. No customer data is used to train any AI or machine-learning model. See [Architecture & security](/architecture-security/agent-control-pro/) for the full data-management table.

### Is there a per-user dashboard, or only the admin chat?
The conversational agent inside Microsoft 365 Copilot is the primary surface; that is where governance questions are asked and answered. A thin admin portal exists alongside it, used for two specific tasks: uploading the Copilot usage CSV and viewing your subscription status. There is no per-user dashboard or report. Agent Control Pro is a tenant-level governance tool for administrators.

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />
