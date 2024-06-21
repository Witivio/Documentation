# Overview Profile

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/profile/profile1.png')" alt="low score">
</div>




### What for ?
---

The chatbot looks for the information or condition concerning the user in order
to provide the corresponding answer.

Each profiles has its own knowledge base. The “Everyone” profiles gathers all
profiles, indeed some questions may be general and therefore not related to a
specific profile.

For example, a profile can correspond to the type of employment contract
(permanent contract, fixed-term contract), to the place of work, the service,
etc. The answer will be different according to these criteria.


### How ?
---
Click on “ADD A NEW PROFILE” to create a new profile.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/profile/profile2.png')" alt="low score">
</div>



Name the profile (1) and choose the dialog with the bot (fun/strict) (2). You
can also decide to enable or disable the display of the first and last name of
the user when the chatbot send the welcome message (3).

-   If you choose “fun”, the chatbot will answer with : "Hello + FIRST NAME"
-   If you choose “strict”, the answer will be: "Mr. /Mrs. + NAME"
-   If the display of the first and last name is disabled, the chatbot does not
    display them.

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/profile/profile3.png')" alt="low score">
</div>


Once the profile is created, click on “EDIT” to modify its configuration.

::: tip 💾 
Remember to save changes !
:::

## Profil management

::: danger 🔴
The profiles are only available for the questions in the knowledge base and
the messages. They are not taken into account when triggering an escalation and
during push campaigns. For all questions in the inbox, the corresponding profile
is displayed.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/profile/profile4.png')" alt="low score">
</div>



The information of the profil may come from :

-   A SharePoint list
-   HRIS
-   Azure AD
-   … We advise you to consolidate this information via an API (to be
    developed). This API can be easily realized without code via Microsoft Flow
    (see below).


::: warning ⚠️
L'api for profile management is not submitted to an authentication.
:::

When a user talks to the chatbot for the first time, the chatbot determines his
profiles according to the following plan:

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/profile/profile5.png')" alt="low score">
</div>



Once determined, the profile is available 24 hours.

::: warning ⚠️
Specific situation: When a profile is not configured (for example, “permanent
contract” in the diagram below), the API returns this information: profile -
Everyone.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/virtual-agent-studio/profile/profile6.png')" alt="low score">
</div>



[**CREATE A PROFILE API WITH FLOW AND SHAREPOINT**](/solutions/virtual-agent-studio/chatbot/profile/api_profile.html) 




---


<Hubspot />