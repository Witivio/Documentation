# Agent Control Pro - Get Started Guide

Agent Control Pro is a Microsoft 365 Copilot governance assistant for IT administrators. It helps you discover, classify, and govern every Copilot agent in your tenant, directly inside Microsoft 365 Copilot, through plain-English questions.
Agent Control Pro is read-only. It surfaces ranked recommendations and answers governance questions; you decide and act in the native Microsoft 365 admin tools.

---

## Prerequisites

- Active **Microsoft 365 Copilot** license (required)
- **Tenant administrator** access (to grant admin consent and upload usage reports)
- Ability to export the **Microsoft 365 Copilot usage report** from the Microsoft 365 admin centre
- Microsoft Graph delegated permissions: `User.Read`, `CopilotSettings-LimitedMode.Read.All`

## Installation & Access

Agent Control Pro is delivered as a Microsoft 365 Copilot declarative agent backed by a remote MCP server. It is purchased through Microsoft AppSource and activated by a tenant administrator.

How to install Agent Control Pro:

1. Open the Agent Control Pro listing on **Microsoft AppSource (Microsoft Commercial Marketplace)**
2. Purchase the subscription as a tenant administrator
3. You will be redirected to the Agent Control Pro landing page; click **Activate**
4. Grant **admin consent** to the Agent Control Pro Entra application for your tenant
5. The Agent Control Pro agent becomes available in **Microsoft 365 Copilot** for authorized users in your tenant

How to access Agent Control Pro after install:

1. Open Microsoft 365 Copilot
2. Go to **Copilot Agents**
3. Select **Agent Control Pro**
4. Click a built-in conversation starter, or ask a freeform governance question

If Agent Control Pro does not appear, verify that the subscription is active and that admin consent has been granted in Microsoft Entra.

## Upload your first usage report

To unlock adoption-aware answers (top agents, active duplicates, org-wide candidates), upload your Microsoft 365 Copilot usage report. Without it, Agent Control Pro answers from catalogue metadata alone and tells you the upload is required for adoption ranking.

1. Go to the **Microsoft 365 admin centre**, then **Reports**, **Usage**, **Microsoft 365 Copilot**, **Agents**
2. Export the report as **CSV**
3. Open your tenant's Agent Control Pro **admin portal** (linked from your Microsoft Marketplace subscription)
4. Sign in with your administrator account and upload the CSV

You will see a confirmation showing the upload timestamp and number of rows ingested. The latest upload replaces any previous one, so re-upload monthly to keep recommendations fresh.

## Ask your first question

Open Agent Control Pro in Microsoft 365 Copilot and click any of the built-in conversation starters:

- 🗂️ **Top Agent Builder agents**: most-used agents authored in Agent Builder
- 🔍 **Find overlapping agents**: common themes and potential duplicates
- ⚠️ **Active duplicates**: agents serving the same purpose with users split between them
- 🔀 **Consolidation candidates**: shared-link agents ready to become single org-wide replacements
- 🌐 **Org-wide candidates**: shared agents with broad enough adoption (≥50 active users) for tenant-wide promotion
- 💤 **Unused agents**: dormant agents in the catalogue with zero usage in the last 30 days

You can also ask freeform governance questions, e.g. *"Which agents has the finance team built?"*, *"Show me sideloaded agents older than six months"*, *"Why did you flag this duplicate?"*

## What Agent Control Pro does NOT do

- It does **not** modify, retire, or delete agents. Every recommendation is read-only; you act in the Microsoft 365 admin centre.
- It does **not** read the content of Copilot conversations, prompts, or responses
- It does **not** train any AI or machine-learning model on your data
- It does **not** access another tenant's data. Every record is hard-isolated by tenant identifier.
- It does **not** require per-user role configuration. Any authenticated administrator in a consented tenant sees the same governance view.
---

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />
