# Fundamentals

Govern your Copilot agent estate before it sprawls.

Agent Control Pro is a Microsoft 365 Copilot declarative agent built for IT administrators. It joins your tenant's **Copilot agent catalogue** (Microsoft Graph) with your **Copilot usage report** (admin-uploaded CSV) and answers governance questions in plain English: what agents do I have, which overlap, which are ready to promote, which should I retire.

---
## Overview

Agent Control Pro is built around natural-language interactions. Instead of exporting CSVs and pivoting in Excel, you simply ask a question and Agent Control Pro returns ranked, classified, deduplicated recommendations directly inside Microsoft 365 Copilot.

It reads inventory live from Microsoft Graph (`/copilot/admin/catalog/packages`) and adoption data from the latest usage CSV you uploaded. No conversations, prompts, or response contents are ever read. Only metadata (agent definitions) and counts (active users, response volumes) are used.

### Who is it for?

| Profile | Value |
|---|---|
| **IT Administrator** | Inventory every Copilot agent in your tenant. Spot duplicates and dormant agents. Decide which agents to standardize, promote, or retire. |
| **CIO / IT Leader** | Get visibility on Copilot adoption across the organization without building a custom report stack. Use it as a leading indicator of Copilot ROI. |
| **Copilot Center of Excellence** | Standardize a governance ritual (monthly review, quarterly cleanup) backed by data already inside your tenant. Coach builders toward fewer, better agents. |

## Conversation starters (built-in)

Agent Control Pro ships with six conversation starters, each mapped to a common governance question.

#### Starter 1: 🗂️ Top Agent Builder agents

**Prompt text:**

```
Show me the most-used agents authored in Agent Builder, sorted by adoption.
```

**What it does:**
Lists the Agent Builder authored agents with the highest active-user count and response volume, drawn from the latest uploaded usage report.

**Useful when:**
- Identifying which builder-led agents to highlight as best practice
- Briefing leadership on what is working
- Deciding which agents to feature in internal newsletters or Copilot Center of Excellence reviews

---

#### Starter 2: 🔍 Find overlapping agents

**Prompt text:**

```
Find agents in my catalogue that look similar to each other.
```

**What it does:**
Compares agent names, descriptions, and instructions across your tenant catalogue and surfaces clusters of agents that look like they serve the same purpose.

**Useful when:**
- Auditing the catalogue for redundancy
- Onboarding into a new tenant and trying to understand the landscape
- Preparing a consolidation plan before encouraging more agent creation

---

#### Starter 3: ⚠️ Active duplicates

**Prompt text:**

```
Show me duplicate agents where both copies have active users.
```

**What it does:**
Surfaces the highest-priority duplicates: pairs of agents serving the same purpose where users are split between both, indicating that consolidation will require a migration.

**Useful when:**
- Running a monthly governance review
- Investigating why the same use case keeps reappearing in builder requests
- Preparing a stakeholder conversation before retiring one of the two

---

#### Starter 4: 🔀 Consolidation candidates

**Prompt text:**

```
Which agents look ready to become a single, official version?
```

**What it does:**
Identifies shared-link agents that look similar enough, and adopted enough, to merge into one tenant-wide deployment.

**Useful when:**
- Planning a quarterly cleanup
- Reducing duplication before tenant-wide policy enforcement
- Sponsoring an "official" version owned by IT or a business unit

---

#### Starter 5: 🌐 Org-wide candidates

**Prompt text:**

```
Which shared agents have enough adoption to be promoted tenant-wide?
```

**What it does:**
Filters the catalogue to shared-link agents with **≥50 active users**: agents that have proven their value organically and are now strong candidates for official LOB (line-of-business) deployment in the Agent Store.

**Useful when:**
- Promoting bottom-up successes into the official catalogue
- Justifying tenant-wide deployment to security or compliance teams
- Replacing fragile shared links with a discoverable Agent Store entry

---

#### Starter 6: 💤 Unused agents

**Prompt text:**

```
Which agents in my catalogue had no usage in the last 30 days?
```

**What it does:**
Lists dormant agents (those with zero recorded activity over the last 30 days) so you can investigate ownership and retire what is no longer needed.

**Useful when:**
- Running an end-of-quarter catalogue cleanup
- Reducing the surface area before a security or compliance review
- Reclaiming names and descriptions before they get reused inconsistently

You can also ask freeform questions to drill into any specific agent or population.

### Prompt ideas for everyday use

#### Inventory & ownership

- Which agents has the finance team built?
- Show me all sideloaded agents older than six months
- Who is allowed to use the Travel Booking agent?
- List every agent built in Copilot Studio

#### Duplicates & overlap

- Why did you flag this duplicate?
- Show me the peer agents you matched against this one
- Are there agents with the same name across multiple deployments?

#### Adoption & retirement

- Which agents have growing adoption month over month?
- Which dormant agents have a known owner I can ask before retiring?
- Show me agents that exist as both `shared` and `lob` (promotion in progress)

---

### Prompting tips

- **Ask naturally.** No special syntax or filter language is required.
- **Name agents by their display name** when drilling into a specific case
- **Use follow-ups** to refine: *"now only the ones with more than 50 users"*, *"exclude sideloaded ones"*, *"sort by responses"*
- **Ask "why"** to surface the matching reasons behind a classification. Agent Control Pro will explain which signals it used.
- **Re-upload the usage CSV monthly** so adoption-based answers stay accurate

### Best practices

- Treat Agent Control Pro as a **governance ritual**: schedule a monthly review using the six built-in starters
- Pair the **Active duplicates** answer with a stakeholder conversation before retiring anything. Data finds the pattern; humans resolve the politics.
- Use **Org-wide candidates** as the input to your quarterly Copilot Center of Excellence promotion meeting
- Cross-reference **Unused agents** against your owners list before deletion. Dormancy is not the same as abandonment.
- Keep usage CSVs in a shared admin location so anyone on the governance rota can re-upload

---

## Key concepts

### Agent vs package

Microsoft Graph refers to Copilot agents as **packages**. The two terms are interchangeable in Agent Control Pro answers.

### Build type / platform

How an agent was authored. Agent Control Pro classifies each agent using the Graph `platform`, `type`, and `elementTypes` fields:

| Build type | Description |
|---|---|
| **Agent Builder** | Declarative agents authored in Microsoft's Agent Builder UI |
| **Copilot Studio** | Custom-engine agents authored in Microsoft Copilot Studio |
| **Sideloaded** | Developer deployments via the Microsoft 365 Agents Toolkit (not store-discoverable) |
| **LOB (line of business)** | Admin-deployed, tenant-wide, discoverable in the Agent Store |
| **First-party / third-party** | Microsoft- or partner-built agents installed in your tenant |

### Deployment scope

Where the agent is published and how users discover it:

- **LOB**: admin-deployed tenant-wide; discoverable in the Agent Store
- **Shared**: user-published with a link; discoverability depends on sharing settings
- **Sideloaded**: developer-side deployment via Agents Toolkit; not store-discoverable

### Classifications

What Agent Control Pro assigns to each agent in its analysis:

| Classification | Meaning |
|---|---|
| **Active** | Used in the last 30 days |
| **Dormant** | No activity in the last 30 days |
| **Active Duplicate** | Similar agents, both have active users (high-priority consolidation) |
| **Orphaned Duplicate** | Similar agents, only one has users (low-effort consolidation) |
| **Catalogue Duplicate** | Similar agents, neither has users (cleanup candidates) |
| **Fragmented Deployment** | Same agent name appears across multiple rows / deployments |
| **Scope Promotion** | The same agent exists as both `shared` and `lob` (promotion in progress) |
| **Org-Wide Candidate** | Shared agent with ≥50 active users, ready for official LOB promotion |

### Thresholds

Conservative defaults. Agent Control Pro errs toward false negatives so you can trust the classifications:

| Setting | Default |
|---|---|
| Active / dormant cutoff | 30 days of activity |
| Org-Wide Candidate threshold | ≥50 active users |
| Similarity matching | Deterministic match on name and description (multilingual / embedding-based matching is on the roadmap) |

## Common workflows

### Monthly governance review

**Symptom:** The catalogue keeps growing and nobody knows what's in it.

**What Agent Control Pro does:** Run **🔍 Find overlapping agents** and **⚠️ Active duplicates** to surface this month's consolidation backlog. Drill into any flagged pair with *"Why did you flag this?"* to see peers and matching reasoning. Decide which agents to consolidate or retire.

### Promote a successful shared agent to org-wide

**Symptom:** A bottom-up agent has caught on, but it lives behind a shared link.

**What Agent Control Pro does:** Run **🌐 Org-wide candidates** to find shared agents with ≥50 active users. Confirm the agent is currently `shared`. Navigate to the Microsoft 365 admin centre and change scope to a tenant-wide LOB deployment. Communicate to users and retire the original shared link.

### Clean up unused agents

**Symptom:** The catalogue is cluttered with prototypes that are no longer used.

**What Agent Control Pro does:** Run **💤 Unused agents** to list 30+-day-dormant agents. For each, ask *"Who is allowed to use [agent name]?"* to identify owners. Coordinate with owners and delete obsolete agents in the Microsoft 365 admin centre.

---

## Limits

| Setting | Limit |
|---|---|
| Catalogue page cap | 5 pages / 1,000 agents per call |
| Top-N list default | Top 20 agents |
| Usage rows top default | 200 agents per query (configurable) |
| Usage report retention | Latest upload only (re-uploading replaces the previous file) |
| Live usage ingestion | Not yet available; manual CSV upload required (live ingestion is on the roadmap) |
| Per-user role gating | Not supported; any authenticated administrator in a consented tenant sees the same view |

## Data privacy & trust

- **On-behalf-of (OBO) authentication.** Every Microsoft Graph call is made using the signed-in administrator's delegated permissions, never a service principal.
- **Hard tenant isolation.** Every persisted record is stamped with your tenant identifier (`tid`) and every query is automatically filtered by that tenant.
- **Read-only by design.** Agent Control Pro never modifies, deletes, or sends anything in your environment; recommendations only.

> For the full data-management table, Microsoft Graph endpoints, MCP server details, and architecture diagrams, see the [Agent Control Pro architecture & security](/architecture-security/agent-control-pro/) page.

---

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />
