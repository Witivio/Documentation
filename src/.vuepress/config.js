module.exports = {
  title: "Witivio Documentation",
  description: "Witivio's documentation for any users who want to learn a bit about our product",

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],

    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" }],
    ["link", { rel: "stylesheet", href: "https://www.teams-pro.com/css/vendor.min.css" }],
    ["link", { rel: "stylesheet", href: "https://www.teams-pro.com/css/index.css" }],
  ],

  themeConfig: {
    smoothScroll: true,
    repo: "",
    logo: "/witivio.png",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    locales: {
      "/": {
        lang: "en",
        searchPlaceholder: "search...",
        algolia: {},
        nav: [
          { text: "📚 Documentation", link: "/solutions/" },
          //{ text: '🧑‍🎓 Academy', link: '/academy/overview/' },
          { text: "🔒 Trust Center", link: "/trust-center/" },
          { text: "🔋 Status", link: "https://status.witivio.com" },
          { text: "Witivio", link: "https://www.witivio.com" },
          { text: "🌎 Change language", link: "/translator/" },
        ],
      },
    },
    sidebar: {
      "/solutions/": [
        {
          title: "Documentation",
          collapsable: true,
          children: [
            ["/solutions/", "Overview"],
            {
              title: "Virtual Agent Studio",
              collapsable: true,
              path: "/solutions/virtual-agent-studio/chatbot/build_your_chatbot/",
              children: [
                {
                  title: "Home",
                  path: "/solutions/virtual-agent-studio/chatbot/home/home",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/home/home.md", "Home"],
                    ["/solutions/virtual-agent-studio/chatbot/home/information.md", "Information"],
                    ["/solutions/virtual-agent-studio/chatbot/home/audit.md", "Audit"],
                    ["/solutions/virtual-agent-studio/chatbot/home/Catalog.md", "Teams Catalog"],
                    ["/solutions/virtual-agent-studio/chatbot/home/privacypolicies.md", "Privacy policies"],
                  ],
                },
                {
                  title: "Build your chatbot",
                  path: "/solutions/virtual-agent-studio/chatbot/build_your_chatbot",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/build_your_chatbot.md", "Build your chatbot"],
                    ["/solutions/virtual-agent-studio/chatbot/build_your_chatbot/skype.md", "Skype for Business Online prerequisites"],
                    ["/solutions/virtual-agent-studio/chatbot/build_your_chatbot/requisites.md", "Teams prerequisites"],
                  ],
                },
                {
                  title: "Inbox",
                  path: "/solutions/virtual-agent-studio/chatbot/inbox",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/inbox.md", "Overview Inbox"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/unanswered_questions.md", "Unanswered Questions"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/low_score.md", "Low Score"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/suggested_questions.md", "Suggested Questions"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/negative_feedbacks.md", "Negative Feedbacks"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/scoring_rules.md", "Scoring Rules"],
                  ],
                },
                {
                  title: "Dashboards",
                  collapsable: true,
                  path: "/solutions/virtual-agent-studio/chatbot/dashboards",
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/dashboards.md", "Overview Dashboard"],
                    ["/solutions/virtual-agent-studio/chatbot/dashboards/performance.md", "Performance Dashboard"],
                    ["/solutions/virtual-agent-studio/chatbot/dashboards/usage.md", "Usage Dashboard"],
                    ["/solutions/virtual-agent-studio/chatbot/dashboards/power_bi.md", "Power Bi Dashboard"],
                  ],
                },
                {
                  title: "Knowledge",
                  path: "/solutions/virtual-agent-studio/chatbot/knowledge/creation_process",
                  collapsable: true,
                  sidebarDepth: 3,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/creation_process.md", "Creation Process"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/messages.md", "Messages"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/categories.md", "Categories"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/kb.md", "KB"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/learninggpt.md", "GPT learning"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/entities.md", "Entities"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/synonyms.md", "Synonyms"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/test_plan.md", "Test Plan"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/configuration.md", "Configuration"],
                  ],
                },
                {
                  title: "Tools",
                  path: "/solutions/virtual-agent-studio/chatbot/tools",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/tools.md", "Overview Tools"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/starting_flow.md", "Starting Flow"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/escalation.md", "Escalation"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/active_learning.md", "Active Learning"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/feedback.md", "Feedback"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/image_gallery.md", "Image Gallery"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/recommendation.md", "Recommendation"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/history.md", "History"],
                  ],
                },
                {
                  title: "Communication",
                  path: "/solutions/virtual-agent-studio/chatbot/communication",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/communication.md", "Overview Communication"],
                    ["/solutions/virtual-agent-studio/chatbot/communication/user_lists.md", "User Lists"],
                    ["/solutions/virtual-agent-studio/chatbot/communication/campaign.md", "Campaign"],
                    ["/solutions/virtual-agent-studio/chatbot/communication/survey.md", "Survey"],
                  ],
                },
                {
                  title: "Profile",
                  path: "/solutions/virtual-agent-studio/chatbot/profile",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/profile.md", "Overview Profile"],
                    ["/solutions/virtual-agent-studio/chatbot/profile/api_profile.md", "API Profile with SharedPoint and MS Flow"],
                  ],
                },
                {
                  title: "Settings",
                  path: "/solutions/virtual-agent-studio/chatbot/settings",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/settings.md", "Overview Settings"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/privacy.md", "Privacy policies"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/chatbot.md", "Chatbot accessibility"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/multilingual.md", "Languages"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/user_list.md", "User List"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/channels.md", "Channels"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/coach.md", "Coach"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/settings.md", "Settings"],
                  ],
                },
                {
                  title: "Licence Administrators",
                  path: "/solutions/virtual-agent-studio/chatbot/licence_administrators",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/licence_administrators.md', 'Licence administrators'],
                  // ]
                },
                {
                  title: "Semantic Indexing API V3",
                  path: "/solutions/virtual-agent-studio/chatbot/semantic_indexing/semantic_indexing_api.md",
                  collapsable: true,
                },
                {
                  title: "Notification bar",
                  path: "/solutions/virtual-agent-studio/chatbot/notification_bar",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/notification_bar.md', 'Home'],
                  // ]
                },
                {
                  title: "Limitations",
                  path: "/solutions/virtual-agent-studio/chatbot/limitations",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/limitations.md', 'Limitations'],
                  // ]
                },
                {
                  title: "Teams Features",
                  path: "/solutions/virtual-agent-studio/chatbot/teams_features",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/teams_features.md', 'Teams Features'],
                  // ]
                },
                {
                  title: "Webchat V1 (obsolete)",
                  path: "/solutions/virtual-agent-studio/chatbot/webchat_v1",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/webchat_v1.md', 'Webchat V1 (obsolete)'],
                  // ]
                },
                {
                  title: "MetaBot",
                  path: "/solutions/virtual-agent-studio/chatbot/metabot_en",
                  collapsable: true,
                  // children: [
                  //     ['/solutions/virtual-agent-studio/chatbot/metabot_en.md', 'MetaBot'],
                  // ]
                },
              ],
            },
            /*{
							title: 'Meta Office Pro',
							collapsable: true,
							path: "/solutions/meta-office-pro/overview/",
							children: [
								['/solutions/meta-office-pro/overview.md', "Overview"],
								['/solutions/meta-office-pro/get-started.md', "Get Started !"],
								['/solutions/meta-office-pro/fundamentals.md', "Fundamentals"],
								['/solutions/meta-office-pro/whats-new.md', "What’s new​"],
								['/solutions/meta-office-pro/tutorials.md', "Tutorials"],
								['/solutions/meta-office-pro/limits.md', "Limits"],
								['/solutions/meta-office-pro/changelog.md', "Changelog​"],
							]
						},*/
            {
              title: "GPT Pro",
              collapsable: true,
              path: "/solutions/gpt-pro/overview/",
              children: [
                ["/solutions/gpt-pro/overview.md", "Overview"],
                ["/solutions/gpt-pro/get-started.md", "Get Started !"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    ["/solutions/gpt-pro/fundamentals/authentication.md", "Authentication & Authorization"],
                    ["/solutions/gpt-pro/fundamentals/dashboard.md", "Dashboard"],
                    ["/solutions/gpt-pro/fundamentals/documents.md", "Documents"],
                    ["/solutions/gpt-pro/fundamentals/history.md", "History"],
                    ["/solutions/gpt-pro/fundamentals/prompts.md", "Prompts"],
                    ["/solutions/gpt-pro/fundamentals/system-prompt.md", "System Prompt"],
                    ["/solutions/gpt-pro/fundamentals/welcome-card.md", "Welcome Card"],
                    ["/solutions/gpt-pro/fundamentals/Action-bar.md", "Action bar"],
                    ["/solutions/gpt-pro/fundamentals/manage-plugins.md", "Plugins"],
                    ["/solutions/gpt-pro/fundamentals/GPT-Maker.md", "GPT Maker"],
                    ["/solutions/gpt-pro/fundamentals/Knowledge-Base-Editor.md", "Knowledge Base"],
                    ["/solutions/gpt-pro/fundamentals/manage-administrators.md", "Administrator"],
                    ["/solutions/gpt-pro/fundamentals/notebook.md", "Notebook"],
                    ["/solutions/gpt-pro/fundamentals/push-communication.md", "Push Communication"],
                    ["/solutions/gpt-pro/fundamentals/feedback.md", "Feedback"],
                  ],
                },
                ["/solutions/gpt-pro/whats-new.md", "What’s new​"],
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [["/solutions/gpt-pro/tutorials/plugins.md", "Plugins"]],
                },
                {
                  title: "Migrations",
                  collapsable: true,
                  children: [
                    ["/solutions/gpt-pro/migrations/faq.md", "FAQ"],
                    ["/solutions/gpt-pro/migrations/movestream.md", "MoveStream Program"],
                  ],
                },
                ["/solutions/gpt-pro/limits.md", "Limits"],
                ["/solutions/gpt-pro/content-filter.md", "Content filtering"],
                ["/solutions/gpt-pro/roadmap.md", "Roadmap"],
                ["/solutions/gpt-pro/changelog.md", "Change log​"],
              ],
            },
            {
              title: "TeamsPro Admin center",
              collapsable: true,
              path: "/solutions/admin-center/overview/",
              children: [
                ["/solutions/admin-center/overview.md", "Overview"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Manage my subscription",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/admin-center/manage-my-subscription/how-to-download-the-invoices-for-the-subscription-purchased-.md",
                          "How to download the invoices for the subscription purchased",
                        ],
                        ["/solutions/admin-center/manage-my-subscription/how-to-change-to-yearly-plan-.md", "How to change to yearly plan"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-cancel-your-subscription-.md", "How to cancel your subscription"],
                        [
                          "/solutions/admin-center/manage-my-subscription/how-to-increase-the-number-of-licenses-of-your-subscription-.md",
                          "How to increase the number of licenses of your subscription",
                        ],
                        ["/solutions/admin-center/manage-my-subscription/how-to-modify-billing-information-details-including-vat.md", "How to modify 'Billing' information details (including-VAT)"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-modify-or-update-your-credit-card-details-.md", "How to modify or update your credit card details"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-modify-your-account-information-.md", "How to modify your account information"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-remove-your-account-.md", "How to remove your account"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-assign-or-remove-a-license-from-a-user-.md", "How to assign or remove a license from a user"],
                        [
                          "/solutions/admin-center/manage-my-subscription/how-does-the-rights-ownership-transfer-between-super-admin-and-admin-work.md",
                          "How Does the Rights Ownership Transfer Between Super Admin and Admin Work",
                        ],
                        ["/solutions/admin-center/manage-my-subscription/why-can-t-a-transfer-be-initiated.md", "Why Can't a Transfer Be Initiated"],
                        ["/solutions/admin-center/manage-my-subscription/what-are-the-rights-of-super-admin-and-admin-role.md", "What are the rights of super admin and admin roles"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-apply-coupon-code.md", "How to apply coupon code"],
                        ["/solutions/admin-center/manage-my-subscription/discounts-for-educational-and-non-profit-organizations.md", "Discounts for Educational and Non-Profit Organizations"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-download-user-team-id-for-license-assignment.md", "How to download the User Team ID for license assignment"],
                      ],
                    },
                  ],
                },
                ["/solutions/admin-center/whats-new.md", "What’s new​"],
                ["/solutions/admin-center/tutorials.md", "Tutorials"],
                ["/solutions/admin-center/limits.md", "Limits"],
                ["/solutions/admin-center/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Booking Room Pro",
              collapsable: true,
              path: "/solutions/booking-room-pro/overview/",
              children: [
                ["/solutions/booking-room-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    [
                      "/solutions/booking-room-pro/getting-started-with-booking-room-pro/how-to-add-booking-room-pro-to-my-team-channel-in-ms-teams-.md",
                      "How to add Booking Room Pro to my team/channel in MS Teams?",
                    ],
                    ["/solutions/booking-room-pro/getting-started-with-booking-room-pro/how-to-find-the-booking-room-pro-id-.md", "How to find the Booking Room Pro ID?"],
                    [
                      "/solutions/booking-room-pro/getting-started-with-booking-room-pro/how-to-install-booking-room-pro-to-my-microsoft-teams-application-.md",
                      "How to install Booking Room Pro to my Microsoft Teams Application?",
                    ],
                    [
                      "/solutions/booking-room-pro/getting-started-with-booking-room-pro/who-is-the-creator-owner-of-the-booking-room-pro-tab-.md",
                      "Who is the creator/owner of the Booking Room Pro tab?",
                    ],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Pricing and licensing",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/booking-room-pro/pricing-and-licensing-booking-room-pro/do-all-channel-users-need-a-booking-room-pro-license-.md",
                          "Do all channel users need a Booking Room Pro license?",
                        ],
                        [
                          "/solutions/booking-room-pro/pricing-and-licensing-booking-room-pro/what-is-the-difference-between-booking-room-pro-premium-vs-free-model-.md",
                          "What is the difference between Booking Room Pro Premium vs free model?",
                        ],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "View options",
                      collapsable: true,
                      children: [["/solutions/booking-room-pro/booking-room-pro-view-options/how-can-i-change-the-view-and-day-of-the-week-.md", "How can I change the view and day of the week?"]],
                    },
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        ["/solutions/booking-room-pro/permissions-in-booking-room-pro/how-to-change-the-permission-to-edit-the-events-.md", "How to change the permission to edit the events?"],
                      ],
                    },
                    {
                      title: "Printing",
                      collapsable: true,
                      children: [["/solutions/booking-room-pro/printing-booking-room-pro/how-to-print-my-planning-for-booking-room-pro-.md", "How to print my planning for Booking Room Pro?"]],
                    },
                    {
                      title: "Single and recurrent bookings",
                      collapsable: true,
                      children: [
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-add-an-event-.md", "How can I add an event?"],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-event-.md", "How can I edit/modify an event?"],
                        [
                          "/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-occurrence-in-recurrent-event-.md",
                          "How can I edit/modify an occurrence in recurrent event?",
                        ],
                        [
                          "/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-create-recurring-events-in-booking-room-pro-.md",
                          "How to create recurring events in Booking Room Pro?",
                        ],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-a-recurrent-event-.md", "How to delete a recurrent event?"],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-an-event-.md", "How to delete an event?"],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-get-the-event-info-.md", "How to get the event info?"],
                      ],
                    },
                    {
                      title: "Tags",
                      collapsable: true,
                      children: [
                        ["/solutions/booking-room-pro/tags-in-booking-room-pro/how-to-use-tags-in-booking-room-pro-.md", "How to use tags in Booking Room Pro?"],
                        ["/solutions/booking-room-pro/time-zones-in-booking-room-pro/how-to-change-the-time-zone-.md", "How to change the time zone?"],
                      ],
                    },
                    {
                      title: "Timezones",
                      collapsable: true,
                      children: [["/solutions/booking-room-pro/time-zones-in-booking-room-pro/how-to-change-the-time-zone-.md", "How to change the time zone?"]],
                    },
                  ],
                },
                ["/solutions/booking-room-pro/whats-new.md", "What’s new​"],
                ["/solutions/booking-room-pro/limits.md", "Limits"],
                ["/solutions/booking-room-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Calendar Pro",
              collapsable: true,
              path: "/solutions/calendar-pro/overview/",
              children: [
                ["/solutions/calendar-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    ["/solutions/calendar-pro/getting-started-with-calendar-pro/overview.md", "Get started guide"],
                    ["/solutions/calendar-pro/getting-started-with-calendar-pro/faq.md", "FAQ"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Calendar customization",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/calendar-pro-overview.md", "Manage view"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/duplicate-calendar-pro-in-other-channel.md", "Duplicate calendar"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/notifications.md", "Manage notifications"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/public-holiday.md", "Set up and manage public holiday"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/timezones.md", "Manage timezone"],
                      ],
                    },
                    {
                      title: "Events",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/fundamentals/events/managing-events.md", "Managing events"],
                        ["/solutions/calendar-pro/fundamentals/events/personalizing-events-calendar.md", "Advanced event personalization"],
                      ],
                    },
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/fundamentals/permisssions-in-calendar-pro/managing-permissions.md", "Managing permissions"],
                        ["/solutions/calendar-pro/fundamentals/permisssions-in-calendar-pro/permissions-faq.md", "FAQ"],
                      ],
                    },
                    {
                      title: "Power automate connector",
                      collapsable: true,
                      children: [["/solutions/calendar-pro/fundamentals/power-automate-connector-calendar-pro/pa-overview.md", "Overview"]],
                    },
                    {
                      title: "Printing",
                      collapsable: true,
                      children: [["/solutions/calendar-pro/fundamentals/printing-calendar-pro/how-can-i-print-my-calendar-pro-.md", "Print Calendar Pro Overview"]],
                    },
                    {
                      title: "Tags",
                      collapsable: true,
                      children: [["/solutions/calendar-pro/fundamentals/tags-in-calendar-pro/add-and-manage-tags.md", "Add and manage tags"]],
                    },
                  ],
                },
                {
                  title: "Pricing and subscription",
                  collapsable: true,
                  children: [
                    ["/solutions/calendar-pro/pricing-and-subscription/managing-subscription.md", "Setup and installation"],
                    ["/solutions/calendar-pro/pricing-and-subscription/what-is-the-difference-between-calendar-pro-premium-vs-free-.md", "FAQ"],
                  ],
                },
                {
                  title: "Troubleshooting",
                  collapsable: true,
                  children: [
                    ["/solutions/calendar-pro/troubleshooting/how-to-clean-the-microsoft-teams-cache-.md", "How to clean the Microsoft Teams cache?"],
                    [
                      "/solutions/calendar-pro/troubleshooting/i-accidentally-deleted-my-calendar-or-somebody-deleted-it--how-can-i-restore-it-.md",
                      "I accidentally deleted my Calendar, or somebody deleted it? How can I restore it?",
                    ],
                    ["/solutions/calendar-pro/troubleshooting/blank-screen-popup-after-sign-in-.md", "Blank screen popup after sign in"],
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Synchronization",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-synchronize-my-calendar-pro-to-another-calendar", "How to synchronize my Calendar Pro to another calendar?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-synchronize-a-calendar-in-my-calendar-pro.md", "How to synchronize a calendar in my Calendar Pro?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-manage-my-synchronized-calendar.md", "How to manage my synchronized calendars?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-synchronize-outlook-with-calendar-pro.md", "How to synchronize outlook with Calendar Pro?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/see-the-shared-synchronized-calendars", "See the shared synchronized calendars"],
                      ],
                    },
                    {
                      title: "Files",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/tutorials/adding-files-calendar-pro/how-to-add-files-in-an-event-of-my-calendar-pro.md", "How do I add files in an event of my Calendar Pro?"],
                      ],
                    },
                    {
                      title: "Single and recurrent events",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/calendar-pro/tutorials/single-and-recurrent-events/can-we-delete-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro.md",
                          "Can we delete a single occurrence which is a part of a series of recurrent events in Calendar Pro?",
                        ],
                        [
                          "/solutions/calendar-pro/tutorials/single-and-recurrent-events/can-we-edit-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro.md",
                          "Can we edit a single occurrence which is a part of a series of recurrent events in Calendar Pro?",
                        ],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-add-a-recurrent-event.md", "How can I add a recurrent event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-add-an-event.md", "How can I add an event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-add-links-to-my-events.md", "How can I add links to my events?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-delete-an-event.md", "How can I delete an event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-edit-modify-a-recurrent-events.md", "How can I edit/modify a recurrent events?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-edit-modify-an-event.md", "How can I edit/modify an event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-to-see-the-event-id-in-calendar-pro.md", "How to see the Event ID in Calendar Pro?"],
                        [
                          "/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-to-see-the-series-id-of-a-recurrent-event-series-in-calendar-pro.md",
                          "How to see the series Id of a recurrent event series in Calendar Pro?",
                        ],
                      ],
                    },
                  ],
                },
                ["/solutions/calendar-pro/whats-new.md", "What’s new​"],
                ["/solutions/calendar-pro/limits.md", "Limits"],
                ["/solutions/calendar-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Contacts Pro",
              collapsable: true,
              path: "/solutions/contacts-pro/overview/",
              children: [
                ["/solutions/contacts-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-contact-.md", "How can I add a new contact?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-group-.md", "How can I add a new group?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-can-i-select-the-display-mode-.md", "How can I select the display mode?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-to-get-the-contacts-pro-id-.md", "How to get the Contacts Pro id?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-to-install-contacts-pro-to-my-teams-application-.md", "How to install Contacts Pro to my Teams Application?"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Transferring contacts",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/contacts-pro/transferring-contacts-through-contacts-pro/can-we-share-the-contacts-from-contacts-pro-through-outlook-.md",
                          "Can we share the contacts from Contacts Pro through Outlook?",
                        ],
                        ["/solutions/contacts-pro/transferring-contacts-through-contacts-pro/can-we-use-PowerAutomate-with-Contacts-Pro.md", "Can we use PowerAutomate with Contacts Pro?"],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Managing contacts",
                      collapsable: true,
                      children: [
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-can-i-connect-with-the-contacts-.md", "How can I connect with the contacts?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-assign-group-to-a-contact-.md", "How to assign group to a contact?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-connect-contacts-pro-with-map-pro-.md", "How to connect Contacts Pro with Map Pro?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-delete-a-contact-in-contacts-pro-.md", "How to delete a contact in Contacts Pro?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-edit-a-contact-.md", "How to edit a contact?"],
                      ],
                    },
                    {
                      title: "Transferring contacts",
                      collapsable: true,
                      children: [
                        ["/solutions/contacts-pro/transferring-contacts-through-contacts-pro/how-to-export-contacts-.md", "How to export contacts?"],
                        ["/solutions/contacts-pro/transferring-contacts-through-contacts-pro/how-to-import-contacts-.md", "How to import contacts?"],
                      ],
                    },
                    {
                      title: "Connect Contacts Pro with Map Pro",
                      collapsable: true,
                      children: [["/solutions/contacts-pro/connect-contacts-pro-with-map-pro/how-can-i-connect-my-contacts-pro-with-map-pro-.md", "How can I connect my Contacts Pro with Map Pro?"]],
                    },
                  ],
                },
                ["/solutions/contacts-pro/whats-new.md", "What’s new​"],
                ["/solutions/contacts-pro/limits.md", "Limits"],
                ["/solutions/contacts-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Gantt Chart Pro",
              collapsable: true,
              path: "/solutions/gantt-chart-pro/overview/",
              children: [
                ["/solutions/gantt-chart-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [["/solutions/gantt-chart-pro/getting-started-with-gantt-chart-pro/how-to-set-up-gantt-chart-pro-.md", "How to Set Up Gantt Chart Pro?"]],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Pricing and licensing",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/do-all-channel-users-need-a-gantt-chart-pro-license-.md",
                          "Do all channel users need a Gantt Chart Pro license?",
                        ],
                        [
                          "/solutions/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/what-s-the-difference-between-free-and-premium-gantt-chart-pro-.md",
                          "What’s the difference between free and premium Gantt Chart Pro?",
                        ],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Participants",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/gantt-chart-pro/participants-gantt-chart-pro/how-to-add-or-remove-participants-from-gantt-chart-pro-.md",
                          "How to Add or Remove Participants from Gantt Chart Pro?",
                        ],
                      ],
                    },
                  ],
                },
                ["/solutions/gantt-chart-pro/whats-new.md", "What’s new​"],
                ["/solutions/gantt-chart-pro/limits.md", "Limits"],
                ["/solutions/gantt-chart-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Home Pro",
              collapsable: true,
              path: "/solutions/home-pro/overview/",
              children: [
                ["/solutions/home-pro/overview.md", "Overview"],
                ["/solutions/home-pro/get-started.md", "Get Started !"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Get to know your widgets",
                      collapsable: true,
                      children: [
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-add-widget-to-the-home-pro-dashboard-.md", "How can I add Widget to the Home Pro Dashboard?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-configure-a-widget-.md", "How can I configure a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-hide-a-widget-.md", "How can I hide a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-navigate-through-a-widget-.md", "How can I navigate through a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-rename-a-widget-.md", "How can I Rename a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-reset-a-widget-.md", "How can I reset a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-resize-a-widget-.md", "How can I resize a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-do-i-change-the-unique-id-in-the-widget-.md", "How do I change the Unique ID in the widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-many-widgets-can-i-add-.md", "How many widgets can I add?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/what-is-a-widget-.md", "What is a Widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/where-can-i-get-the-settings-of-the-widgets-.md", "Where can I get the settings of the widgets?"],
                      ],
                    },
                  ],
                },
                ["/solutions/home-pro/whats-new.md", "What’s new​"],
                ["/solutions/home-pro/tutorials.md", "Tutorials"],
                ["/solutions/home-pro/limits.md", "Limits"],
                ["/solutions/home-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Image Pro",
              collapsable: true,
              path: "/solutions/image-pro/overview/",
              children: [
                ["/solutions/image-pro/overview.md", "Overview"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Saved Image",
                      collapsable: true,
                      children: [["/solutions/image-pro/image-pro-tuto/where-my-image-will-be-saved.md", "Where can I find my image?"]],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Upload Image",
                      collapsable: true,
                      children: [["/solutions/image-pro/image-pro-tuto/how-to-upload-an-image.md", "How to upload an image?"]],
                    },
                    {
                      title: "Edit Image",
                      collapsable: true,
                      children: [["/solutions/image-pro/image-pro-tuto/how-to-edit-my-image.md", "How to edit my image?"]],
                    },
                  ],
                },
                ["/solutions/image-pro/whats-new.md", "What’s new​"],
                ["/solutions/image-pro/limits.md", "Limits"],
                ["/solutions/image-pro/changelog.md", "Change log​"],
              ],
            },
            {
              title: "KeePass Pro",
              collapsable: true,
              path: "/solutions/keepass-pro/overview/",
              children: [
                ["/solutions/keepass-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    [
                      "/solutions/keepass-pro/getting-started-with-keepass-pro/can-an-external-teams-user-have-access-to-keepass-pro-in-private-channel-.md",
                      "Can an external Teams user have access to KeePass Pro in private channel?",
                    ],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-copy-password-.md", "How can I copy password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-create-a-new-password-.md", "How can I create a new password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-delete-a-password-.md", "How can I delete a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-modify-a-password-.md", "How can I modify a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-share-a-password-.md", "How can I share a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-we-generate-a-password-.md", "How can we generate a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-to-add-keepass-pro-to-a-channel-.md", "How to add KeePass Pro to a channel?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-to-pin-the-keepass-pro-to-navigation-bar-.md", "How to pin the KeePass Pro to navigation bar?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-to-set-up-a-keepass-pro-tab-.md", "How to pin the KeePass Pro to navigation bar?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/where-are-the-settings--how-can-we-change-it-.md", "Where are the settings? How can we change it?"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Recycle bin",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/keepass-pro/recycle-bin-keepass-pro/what-is-the-time-frame-for-retrieving-a-password-from-the-recycle-bin-.md",
                          "What is the time frame for retrieving a password from the Recycle Bin?",
                        ],
                      ],
                    },
                    {
                      title: "Vault management",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/vault-management-keepass-pro/what-is-a-keepass-pro-vault-.md", "What is a KeePass Pro vault?"]],
                    },
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        ["/solutions/keepass-pro/permissions-keepass-pro/fundamentals-permissions-in-keepass-pro.md", "Fundamentals Permissions in KeePass Pro"],
                        ["/solutions/keepass-pro/permissions-keepass-pro/limitations-of-keepass-pro-permissions.md", "Limitations of KeePass Pro Permissions"],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Import and export KeePass Pro passwords",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/keepass-pro/import-and-export-keepass-pro-passwords/how-to-import-a-keepass-pro-.kdbx-file-into-a-new-keepass-pro-channel-tab-.md",
                          "How to import a KeePass Pro .KDBX file into a new KeePass Pro channel tab?",
                        ],
                      ],
                    },
                    {
                      title: "Master password",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/master-password-keepass-pro/how-to-access-keepass-pro-master-password-.md", "How to access KeePass Pro master password?"]],
                    },
                    {
                      title: "Recycle bin",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/recycle-bin-keepass-pro/how-can-i-retrieve-my-password-through-recycle-bin-.md", "How can I retrieve my password through Recycle Bin?"]],
                    },
                    {
                      title: "Vault management",
                      collapsable: true,
                      children: [
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-and-where-can-i-create-the-folders-on-the-vault-.md", "How and where can I create the folders on the vault?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-change-the-name-the-of-the-keepass-pro-s-vault-.md", "How to change the name the of the KeePass Pro’s vault?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-choose-vault-location-.md", "How to choose vault location?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-import-a-kdbx-file-in-keepass-pro-.md", "How to import a KDBX file in KeePass Pro?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-keep-a-keepass-pro-vault-private-.md", "How to keep a KeePass Pro Vault private?"],
                      ],
                    },
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/permissions-keepass-pro/tuto-managing-passwords.md", "Managing passwords permissions for IT Team in KeePass Pro"]],
                    },
                  ],
                },
                ["/solutions/keepass-pro/whats-new.md", "What’s new​"],
                ["/solutions/keepass-pro/limits.md", "Limits"],
                ["/solutions/keepass-pro/changelog.md", "Change log​"],
              ],
            },
            {
              title: "Map Pro",
              collapsable: true,
              path: "/solutions/map-pro/overview/",
              children: [
                ["/solutions/map-pro/overview.md", "Overview"],
                {
                  title: "Getting started with Map Pro",
                  collapsable: true,
                  children: [
                    ["/solutions/map-pro/getting-started-with-map-pro/how-can-i-switch-to-map-satellite-view-mode-.md", "How can I switch to Map/Satellite view mode?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-add-map-pro-to-my-team-.md", "How to add Map Pro to my team?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-add-map-pro-to-my-team-s-channel-.md", "How to add Map Pro to my team’s channel?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-install-map-pro-to-my-teams-application-.md", "How to install Map Pro to my Teams Application?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-set-up-a-tab-for-map-pro-.md", "How to set up a tab for Map Pro?"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Get to know your Map Pro",
                      collapsable: true,
                      children: [
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-can-i-rename-the-map-pro-tab-.md", "How can I rename the Map Pro Tab?"],
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-to-copy-the-id-for-my-map-pro-.md", "How can I rename the Map Pro Tab?"],
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-to-find-the-id-(unique-identifier)-for-my-map-pro-.md", "How to find the ID (unique identifier) for my Map Pro?"],
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-to-find-the-version-of-my-map-pro-.md", "How to find the version of my Map Pro?"],
                      ],
                    },
                    {
                      title: "Managing your Map Pro",
                      collapsable: true,
                      children: [
                        ["/solutions/map-pro/managing-your-map-pro/connect-teamspro-apps-with-map-pro.md", "Connect TeamsPro apps with Map Pro"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-add-places-to-map-pro-.md", "How to add places to Map Pro?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-add-trips-to-map-pro-.md", "How to add trips to Map Pro?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-delete-the-place-added-.md", "How to delete the Place added?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-delete-the-trips-added-.md", "How to delete the Trips added?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-edit-the-place-added-.md", "How to edit the Place added?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-edit-the-trips-added-.md", "How to edit the Trips added?"],
                        ["/solutions/map-pro/managing-your-map-pro/where-to-find-the-places-added-.md", "Where to find the Places added?"],
                        ["/solutions/map-pro/managing-your-map-pro/where-to-find-the-trips-added-.md", "Where to find the Trips added?"],
                      ],
                    },
                  ],
                },
                ["/solutions/map-pro/whats-new.md", "What’s new​"],
                ["/solutions/map-pro/tutorials.md", "Tutorials"],
                ["/solutions/map-pro/limits.md", "Limits"],
                ["/solutions/map-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Parking Pro",
              collapsable: true,
              path: "/solutions/parking-pro/overview/",
              children: [
                ["/solutions/parking-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    ["/solutions/parking-pro/getting-started-with-parking-pro/how-to-check-the-parking-pro-unique-identifier-(id)-.md", "How to check the Parking Pro Unique Identifier (ID)?"],
                    ["/solutions/parking-pro/getting-started-with-parking-pro/how-to-get-parking-pro-version-.md", "How to get Parking Pro version?"],
                    ["/solutions/parking-pro/getting-started-with-parking-pro/parking-pro-basic-set-up.md", "Parking Pro Basic Set Up"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/parking-pro/permissions-in-parking-pro/how-to-change-the-permission-to-make-changes-to-parking-pro-.md",
                          "How to change the permission to make changes to Parking Pro?",
                        ],
                      ],
                    },
                    {
                      title: "Pricing and licensing",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/parking-pro/pricing-and-licensing-parking-pro/do-all-channel-or-teams-users-need-a-parking-pro-license-.md",
                          "Do all channel or Teams users need a Parking Pro license?",
                        ],
                        [
                          "/solutions/parking-pro/pricing-and-licensing-parking-pro/what-s-the-difference-between-free-and-premium-parking-pro-.md",
                          "What’s the difference between free and premium Parking Pro?",
                        ],
                      ],
                    },
                    {
                      title: "Printing",
                      collapsable: true,
                      children: [["/solutions/parking-pro/printing-parking-pro/how-can-i-print-parking-pro-reservation-schedule-.md", "How can I print Parking Pro reservation schedule?"]],
                    },
                    {
                      title: "Tags",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/parking-pro/tags-in-parking-pro/how-to-use-tags-to-manage-and-filter-parking-spaces-in-parking-pro-.md",
                          "How to use tags to manage and filter parking spaces in Parking Pro?",
                        ],
                      ],
                    },
                    {
                      title: "Timezones",
                      collapsable: true,
                      children: [["/solutions/parking-pro/timezone-in-parking-pro/how-can-i-change-parking-pro-time-zone-.md", "How can I change Parking Pro time zone?"]],
                    },
                  ],
                },
                ["/solutions/parking-pro/whats-new.md", "What’s new​"],
                ["/solutions/parking-pro/tutorials.md", "Tutorials"],
                ["/solutions/parking-pro/limits.md", "Limits"],
                ["/solutions/parking-pro/changelog.md", "Change log​"],
              ],
            },
          ],
        },
        {
          title: "Trust Center",
          collapsable: true,
          children: [
            ["/trust-center/", "Overview"],
            ["/trust-center/supported-clients/", "Supported Clients"],
            ["/trust-center/authentication-single-sign-on/", "Authentication & Single Sign On"],
            ["/trust-center/communication-network-security/", "Communication & Network Security"],
            ["/trust-center/infrastructure-services/", "Infrastructure Services"],
            ["/trust-center/microsoft-graph-permissions/", "Microsoft Graph Permissions"],
            ["/trust-center/data-management-practices/", "Data Management Practices"],
            ["/trust-center/secure-development/", "Secure Development"],
            ["/trust-center/privacy-and-compliance/", "Privacy and Compliance"],
            ["/trust-center/security-policy/", "Security Policy"],
            ["/trust-center/classification-labels/", "Classification Labels"],
          ],
        },
        {
          title: "Architecture & Security",
          collapsable: true,
          children: [
            ["/architecture-security/overview/", "Overview"],
            ["/architecture-security/admin-center/", "Admin Center"],
            ["/architecture-security/bookingroom-pro/", "BookingRoom Pro"],
            ["/architecture-security/calendar-pro/", "Calendar Pro"],
            ["/architecture-security/parking-pro/", "Parking Pro"],
            ["/architecture-security/company-communicator-pro/", "Company Communicator Pro"],
            ["/architecture-security/contact-pro/", "Contact Pro"],
            ["/architecture-security/distribution-list-pro/", "Distribution List Pro"],
            ["/architecture-security/keepass-pro/", "Keepass Pro"],
            ["/architecture-security/map-pro/", "Map Pro"],
            ["/architecture-security/image-pro/", "Image Pro"],
            ["/architecture-security/gantt-chart-pro/", "Gantt Chart Pro"],
            ["/architecture-security/metaoffice-pro/", "MetaOffice Pro"],
            ["/architecture-security/gpt-pro/", "GPT Pro"],
            ["/architecture-security/green-center/", "Green Center"],
          ],
        },
      ],

      "/trust-center/": [
        {
          title: "Documentation",
          collapsable: true,
          children: [
            ["/solutions/", "Overview"],
            {
              title: "Virtual Agent Studio",
              collapsable: true,
              path: "/solutions/virtual-agent-studio/chatbot/build_your_chatbot/",
              children: [
                {
                  title: "Home",
                  path: "/solutions/virtual-agent-studio/chatbot/home/home",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/home/home.md", "Home"],
                    ["/solutions/virtual-agent-studio/chatbot/home/information.md", "Information"],
                    ["/solutions/virtual-agent-studio/chatbot/home/audit.md", "Audit"],
                    ["/solutions/virtual-agent-studio/chatbot/home/Catalog.md", "Teams Catalog"],
                    ["/solutions/virtual-agent-studio/chatbot/home/privacypolicies.md", "Privacy policies"],
                  ],
                },
                {
                  title: "Build your chatbot",
                  path: "/solutions/virtual-agent-studio/chatbot/build_your_chatbot",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/build_your_chatbot.md", "Build your chatbot"],
                    ["/solutions/virtual-agent-studio/chatbot/build_your_chatbot/skype.md", "Skype for Business Online prerequisites"],
                    ["/solutions/virtual-agent-studio/chatbot/build_your_chatbot/requisites.md", "Teams prerequisites"],
                  ],
                },
                {
                  title: "Inbox",
                  path: "/solutions/virtual-agent-studio/chatbot/inbox",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/inbox.md", "Overview Inbox"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/unanswered_questions.md", "Unanswered Questions"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/low_score.md", "Low Score"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/suggested_questions.md", "Suggested Questions"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/negative_feedbacks.md", "Negative Feedbacks"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/scoring_rules.md", "Scoring Rules"],
                  ],
                },
                {
                  title: "Dashboards",
                  collapsable: true,
                  path: "/solutions/virtual-agent-studio/chatbot/dashboards",
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/dashboards.md", "Overview Dashboard"],
                    ["/solutions/virtual-agent-studio/chatbot/dashboards/performance.md", "Performance Dashboard"],
                    ["/solutions/virtual-agent-studio/chatbot/dashboards/usage.md", "Usage Dashboard"],
                    ["/solutions/virtual-agent-studio/chatbot/dashboards/power_bi.md", "Power Bi Dashboard"],
                  ],
                },
                {
                  title: "Knowledge",
                  path: "/solutions/virtual-agent-studio/chatbot/knowledge/creation_process",
                  collapsable: true,
                  sidebarDepth: 3,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/creation_process.md", "Creation Process"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/messages.md", "Messages"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/categories.md", "Categories"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/kb.md", "KB"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/learninggpt.md", "GPT learning"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/entities.md", "Entities"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/synonyms.md", "Synonyms"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/test_plan.md", "Test Plan"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/configuration.md", "Configuration"],
                  ],
                },
                {
                  title: "Tools",
                  path: "/solutions/virtual-agent-studio/chatbot/tools",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/tools.md", "Overview Tools"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/starting_flow.md", "Starting Flow"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/escalation.md", "Escalation"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/active_learning.md", "Active Learning"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/feedback.md", "Feedback"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/image_gallery.md", "Image Gallery"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/recommendation.md", "Recommendation"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/history.md", "History"],
                  ],
                },
                {
                  title: "Communication",
                  path: "/solutions/virtual-agent-studio/chatbot/communication",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/communication.md", "Overview Communication"],
                    ["/solutions/virtual-agent-studio/chatbot/communication/user_lists.md", "User Lists"],
                    ["/solutions/virtual-agent-studio/chatbot/communication/campaign.md", "Campaign"],
                    ["/solutions/virtual-agent-studio/chatbot/communication/survey.md", "Survey"],
                  ],
                },
                {
                  title: "Profile",
                  path: "/solutions/virtual-agent-studio/chatbot/profile",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/profile.md", "Overview Profile"],
                    ["/solutions/virtual-agent-studio/chatbot/profile/api_profile.md", "API Profile with SharedPoint and MS Flow"],
                  ],
                },
                {
                  title: "Settings",
                  path: "/solutions/virtual-agent-studio/chatbot/settings",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/settings.md", "Overview Settings"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/privacy.md", "Privacy policies"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/chatbot.md", "Chatbot accessibility"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/multilingual.md", "Languages"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/user_list.md", "User List"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/channels.md", "Channels"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/coach.md", "Coach"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/settings.md", "Settings"],
                  ],
                },
                {
                  title: "Licence Administrators",
                  path: "/solutions/virtual-agent-studio/chatbot/licence_administrators",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/licence_administrators.md', 'Licence administrators'],
                  // ]
                },
                {
                  title: "Semantic Indexing API V3",
                  path: "/solutions/virtual-agent-studio/chatbot/semantic_indexing/semantic_indexing_api.md",
                  collapsable: true,
                },
                {
                  title: "Notification bar",
                  path: "/solutions/virtual-agent-studio/chatbot/notification_bar",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/notification_bar.md', 'Home'],
                  // ]
                },
                {
                  title: "Limitations",
                  path: "/solutions/virtual-agent-studio/chatbot/limitations",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/limitations.md', 'Limitations'],
                  // ]
                },
                {
                  title: "Teams Features",
                  path: "/solutions/virtual-agent-studio/chatbot/teams_features",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/teams_features.md', 'Teams Features'],
                  // ]
                },
                {
                  title: "Webchat V1 (obsolete)",
                  path: "/solutions/virtual-agent-studio/chatbot/webchat_v1",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/webchat_v1.md', 'Webchat V1 (obsolete)'],
                  // ]
                },
                {
                  title: "MetaBot",
                  path: "/solutions/virtual-agent-studio/chatbot/metabot_en",
                  collapsable: true,
                  // children: [
                  //     ['/solutions/virtual-agent-studio/chatbot/metabot_en.md', 'MetaBot'],
                  // ]
                },
              ],
            },
            /*{
							title: 'Meta Office Pro',
							collapsable: true,
							path: "/solutions/meta-office-pro/overview/",
							children: [
								['/solutions/meta-office-pro/overview.md', "Overview"],
								['/solutions/meta-office-pro/get-started.md', "Get Started !"],
								['/solutions/meta-office-pro/fundamentals.md', "Fundamentals"],
								['/solutions/meta-office-pro/whats-new.md', "What’s new​"],
								['/solutions/meta-office-pro/tutorials.md', "Tutorials"],
								['/solutions/meta-office-pro/limits.md', "Limits"],
								['/solutions/meta-office-pro/changelog.md', "Changelog​"],
							]
						},*/
            {
              title: "GPT Pro",
              collapsable: true,
              path: "/solutions/gpt-pro/overview/",
              children: [
                ["/solutions/gpt-pro/overview.md", "Overview"],
                ["/solutions/gpt-pro/get-started.md", "Get Started !"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    ["/solutions/gpt-pro/fundamentals/authentication.md", "Authentication & Authorization"],
                    ["/solutions/gpt-pro/fundamentals/dashboard.md", "Dashboard"],
                    ["/solutions/gpt-pro/fundamentals/documents.md", "Documents"],
                    ["/solutions/gpt-pro/fundamentals/history.md", "History"],
                    ["/solutions/gpt-pro/fundamentals/prompts.md", "Prompts"],
                    ["/solutions/gpt-pro/fundamentals/system-prompt.md", "System Prompt"],
                    ["/solutions/gpt-pro/fundamentals/welcome-card.md", "Welcome Card"],
                    ["/solutions/gpt-pro/fundamentals/Action-bar.md", "Action bar"],
                    ["/solutions/gpt-pro/fundamentals/manage-plugins.md", "Plugins"],
                    ["/solutions/gpt-pro/fundamentals/GPT-Maker.md", "GPT Maker"],
                    ["/solutions/gpt-pro/fundamentals/Knowledge-Base-Editor.md", "Knowledge Base"],
                    ["/solutions/gpt-pro/fundamentals/manage-administrators.md", "Administrator"],
                    ["/solutions/gpt-pro/fundamentals/notebook.md", "Notebook"],
                    ["/solutions/gpt-pro/fundamentals/push-communication.md", "Push Communication"],
                    ["/solutions/gpt-pro/fundamentals/feedback.md", "Feedback"],
                  ],
                },
                ["/solutions/gpt-pro/whats-new.md", "What’s new​"],
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [["/solutions/gpt-pro/tutorials/plugins.md", "Plugins"]],
                },
                {
                  title: "Migrations",
                  collapsable: true,
                  children: [
                    ["/solutions/gpt-pro/migrations/faq.md", "FAQ"],
                    ["/solutions/gpt-pro/migrations/movestream.md", "MoveStream Program"],
                  ],
                },
                ["/solutions/gpt-pro/limits.md", "Limits"],
                ["/solutions/gpt-pro/content-filter.md", "Content filtering"],
                ["/solutions/gpt-pro/roadmap.md", "Roadmap"],
                ["/solutions/gpt-pro/changelog.md", "Change log​"],
              ],
            },
            {
              title: "TeamsPro Admin center",
              collapsable: true,
              path: "/solutions/admin-center/overview/",
              children: [
                ["/solutions/admin-center/overview.md", "Overview"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Manage my subscription",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/admin-center/manage-my-subscription/how-to-download-the-invoices-for-the-subscription-purchased-.md",
                          "How to download the invoices for the subscription purchased",
                        ],
                        ["/solutions/admin-center/manage-my-subscription/how-to-change-to-yearly-plan-.md", "How to change to yearly plan"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-cancel-your-subscription-.md", "How to cancel your subscription"],
                        [
                          "/solutions/admin-center/manage-my-subscription/how-to-increase-the-number-of-licenses-of-your-subscription-.md",
                          "How to increase the number of licenses of your subscription",
                        ],
                        ["/solutions/admin-center/manage-my-subscription/how-to-modify-billing-information-details-including-vat.md", "How to modify 'Billing' information details (including-VAT)"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-modify-or-update-your-credit-card-details-.md", "How to modify or update your credit card details"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-modify-your-account-information-.md", "How to modify your account information"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-remove-your-account-.md", "How to remove your account"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-assign-or-remove-a-license-from-a-user-.md", "How to assign or remove a license from a user"],
                        [
                          "/solutions/admin-center/manage-my-subscription/how-does-the-rights-ownership-transfer-between-super-admin-and-admin-work.md",
                          "How Does the Rights Ownership Transfer Between Super Admin and Admin Work",
                        ],
                        ["/solutions/admin-center/manage-my-subscription/why-can-t-a-transfer-be-initiated.md", "Why Can't a Transfer Be Initiated"],
                        ["/solutions/admin-center/manage-my-subscription/what-are-the-rights-of-super-admin-and-admin-role.md", "What are the rights of super admin and admin roles"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-apply-coupon-code.md", "How to apply coupon code"],
                        ["/solutions/admin-center/manage-my-subscription/discounts-for-educational-and-non-profit-organizations.md", "Discounts for Educational and Non-Profit Organizations"],
                      ],
                    },
                  ],
                },
                ["/solutions/admin-center/whats-new.md", "What’s new​"],
                ["/solutions/admin-center/tutorials.md", "Tutorials"],
                ["/solutions/admin-center/limits.md", "Limits"],
                ["/solutions/admin-center/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Booking Room Pro",
              collapsable: true,
              path: "/solutions/booking-room-pro/overview/",
              children: [
                ["/solutions/booking-room-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    [
                      "/solutions/booking-room-pro/getting-started-with-booking-room-pro/how-to-add-booking-room-pro-to-my-team-channel-in-ms-teams-.md",
                      "How to add Booking Room Pro to my team/channel in MS Teams?",
                    ],
                    ["/solutions/booking-room-pro/getting-started-with-booking-room-pro/how-to-find-the-booking-room-pro-id-.md", "How to find the Booking Room Pro ID?"],
                    [
                      "/solutions/booking-room-pro/getting-started-with-booking-room-pro/how-to-install-booking-room-pro-to-my-microsoft-teams-application-.md",
                      "How to install Booking Room Pro to my Microsoft Teams Application?",
                    ],
                    [
                      "/solutions/booking-room-pro/getting-started-with-booking-room-pro/who-is-the-creator-owner-of-the-booking-room-pro-tab-.md",
                      "Who is the creator/owner of the Booking Room Pro tab?",
                    ],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Pricing and licensing",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/booking-room-pro/pricing-and-licensing-booking-room-pro/do-all-channel-users-need-a-booking-room-pro-license-.md",
                          "Do all channel users need a Booking Room Pro license?",
                        ],
                        [
                          "/solutions/booking-room-pro/pricing-and-licensing-booking-room-pro/what-is-the-difference-between-booking-room-pro-premium-vs-free-model-.md",
                          "What is the difference between Booking Room Pro Premium vs free model?",
                        ],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "View options",
                      collapsable: true,
                      children: [["/solutions/booking-room-pro/booking-room-pro-view-options/how-can-i-change-the-view-and-day-of-the-week-.md", "How can I change the view and day of the week?"]],
                    },
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        ["/solutions/booking-room-pro/permissions-in-booking-room-pro/how-to-change-the-permission-to-edit-the-events-.md", "How to change the permission to edit the events?"],
                      ],
                    },
                    {
                      title: "Printing",
                      collapsable: true,
                      children: [["/solutions/booking-room-pro/printing-booking-room-pro/how-to-print-my-planning-for-booking-room-pro-.md", "How to print my planning for Booking Room Pro?"]],
                    },
                    {
                      title: "Single and recurrent bookings",
                      collapsable: true,
                      children: [
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-add-an-event-.md", "How can I add an event?"],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-event-.md", "How can I edit/modify an event?"],
                        [
                          "/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-occurrence-in-recurrent-event-.md",
                          "How can I edit/modify an occurrence in recurrent event?",
                        ],
                        [
                          "/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-create-recurring-events-in-booking-room-pro-.md",
                          "How to create recurring events in Booking Room Pro?",
                        ],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-a-recurrent-event-.md", "How to delete a recurrent event?"],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-an-event-.md", "How to delete an event?"],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-get-the-event-info-.md", "How to get the event info?"],
                      ],
                    },
                    {
                      title: "Tags",
                      collapsable: true,
                      children: [
                        ["/solutions/booking-room-pro/tags-in-booking-room-pro/how-to-use-tags-in-booking-room-pro-.md", "How to use tags in Booking Room Pro?"],
                        ["/solutions/booking-room-pro/time-zones-in-booking-room-pro/how-to-change-the-time-zone-.md", "How to change the time zone?"],
                      ],
                    },
                    {
                      title: "Timezones",
                      collapsable: true,
                      children: [["/solutions/booking-room-pro/time-zones-in-booking-room-pro/how-to-change-the-time-zone-.md", "How to change the time zone?"]],
                    },
                  ],
                },
                ["/solutions/booking-room-pro/whats-new.md", "What’s new​"],
                ["/solutions/booking-room-pro/limits.md", "Limits"],
                ["/solutions/booking-room-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Calendar Pro",
              collapsable: true,
              path: "/solutions/calendar-pro/overview/",
              children: [
                ["/solutions/calendar-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    ["/solutions/calendar-pro/getting-started-with-calendar-pro/overview.md", "Get started guide"],
                    ["/solutions/calendar-pro/getting-started-with-calendar-pro/faq.md", "FAQ"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Calendar customization",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/calendar-pro-overview.md", "Manage view"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/duplicate-calendar-pro-in-other-channel.md", "Duplicate calendar"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/notifications.md", "Manage notifications"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/public-holiday.md", "Set up and manage public holiday"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/timezones.md", "Manage timezone"],
                      ],
                    },
                    {
                      title: "Events",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/fundamentals/events/managing-events.md", "Managing events"],
                        ["/solutions/calendar-pro/fundamentals/events/personalizing-events-calendar.md", "Advanced event personalization"],
                      ],
                    },
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/fundamentals/permisssions-in-calendar-pro/managing-permissions.md", "Managing permissions"],
                        ["/solutions/calendar-pro/fundamentals/permisssions-in-calendar-pro/permissions-faq.md", "FAQ"],
                      ],
                    },
                    {
                      title: "Power automate connector",
                      collapsable: true,
                      children: [["/solutions/calendar-pro/fundamentals/power-automate-connector-calendar-pro/pa-overview.md", "Overview"]],
                    },
                    {
                      title: "Printing",
                      collapsable: true,
                      children: [["/solutions/calendar-pro/fundamentals/printing-calendar-pro/how-can-i-print-my-calendar-pro-.md", "Print Calendar Pro Overview"]],
                    },
                    {
                      title: "Tags",
                      collapsable: true,
                      children: [["/solutions/calendar-pro/fundamentals/tags-in-calendar-pro/add-and-manage-tags.md", "Add and manage tags"]],
                    },
                  ],
                },
                {
                  title: "Pricing and subscription",
                  collapsable: true,
                  children: [
                    ["/solutions/calendar-pro/pricing-and-subscription/managing-subscription.md", "Setup and installation"],
                    ["/solutions/calendar-pro/pricing-and-subscription/what-is-the-difference-between-calendar-pro-premium-vs-free-.md", "FAQ"],
                  ],
                },
                {
                  title: "Troubleshooting",
                  collapsable: true,
                  children: [
                    ["/solutions/calendar-pro/troubleshooting/how-to-clean-the-microsoft-teams-cache-.md", "How to clean the Microsoft Teams cache?"],
                    [
                      "/solutions/calendar-pro/troubleshooting/i-accidentally-deleted-my-calendar-or-somebody-deleted-it--how-can-i-restore-it-.md",
                      "I accidentally deleted my Calendar, or somebody deleted it? How can I restore it?",
                    ],
                    ["/solutions/calendar-pro/troubleshooting/blank-screen-popup-after-sign-in-.md", "Blank screen popup after sign in"],
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Synchronization",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-synchronize-my-calendar-pro-to-another-calendar.md", "How to synchronize my calendar pro to another calendar?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-synchronize-a-calendar-in-my-calendar-pro.md", "How to synchronize a calendar in my Calendar Pro?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-manage-my-synchronized-calendar.md", "How to manage my synchronized calendars?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-synchronize-outlook-with-calendar-pro.md", "How to synchronize outlook with Calendar Pro?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/see-the-shared-synchronized-calendars.md", "See the shared synchronized calendars"],
                      ],
                    },
                    {
                      title: "Files",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/tutorials/adding-files-calendar-pro/how-to-add-files-in-an-event-of-my-calendar-pro.md", "How do I add files in an event of my Calendar Pro?"],
                      ],
                    },
                    {
                      title: "Single and recurrent events",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/calendar-pro/tutorials/single-and-recurrent-events/can-we-delete-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro.md",
                          "Can we delete a single occurrence which is a part of a series of recurrent events in Calendar Pro?",
                        ],
                        [
                          "/solutions/calendar-pro/tutorials/single-and-recurrent-events/can-we-edit-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro.md",
                          "Can we edit a single occurrence which is a part of a series of recurrent events in Calendar Pro?",
                        ],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-add-a-recurrent-event.md", "How can I add a recurrent event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-add-an-event.md", "How can I add an event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-add-links-to-my-events.md", "How can I add links to my events?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-delete-an-event.md", "How can I delete an event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-edit-modify-a-recurrent-events.md", "How can I edit/modify a recurrent events?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-edit-modify-an-event.md", "How can I edit/modify an event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-to-see-the-event-id-in-calendar-pro.md", "How to see the Event ID in Calendar Pro?"],
                        [
                          "/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-to-see-the-series-id-of-a-recurrent-event-series-in-calendar-pro.md",
                          "How to see the series Id of a recurrent event series in Calendar Pro?",
                        ],
                      ],
                    },
                  ],
                },
                ["/solutions/calendar-pro/whats-new.md", "What’s new​"],
                ["/solutions/calendar-pro/limits.md", "Limits"],
                ["/solutions/calendar-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Contacts Pro",
              collapsable: true,
              path: "/solutions/contacts-pro/overview/",
              children: [
                ["/solutions/contacts-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-contact-.md", "How can I add a new contact?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-group-.md", "How can I add a new group?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-can-i-select-the-display-mode-.md", "How can I select the display mode?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-to-get-the-contacts-pro-id-.md", "How to get the Contacts Pro id?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-to-install-contacts-pro-to-my-teams-application-.md", "How to install Contacts Pro to my Teams Application?"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Transferring contacts",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/contacts-pro/transferring-contacts-through-contacts-pro/can-we-share-the-contacts-from-contacts-pro-through-outlook-.md",
                          "Can we share the contacts from Contacts Pro through Outlook?",
                        ],
                        ["/solutions/contacts-pro/transferring-contacts-through-contacts-pro/can-we-use-PowerAutomate-with-Contacts-Pro.md", "Can we use PowerAutomate with Contacts Pro?"],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Managing contacts",
                      collapsable: true,
                      children: [
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-can-i-connect-with-the-contacts-.md", "How can I connect with the contacts?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-assign-group-to-a-contact-.md", "How to assign group to a contact?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-connect-contacts-pro-with-map-pro-.md", "How to connect Contacts Pro with Map Pro?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-delete-a-contact-in-contacts-pro-.md", "How to delete a contact in Contacts Pro?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-edit-a-contact-.md", "How to edit a contact?"],
                      ],
                    },
                    {
                      title: "Transferring contacts",
                      collapsable: true,
                      children: [
                        ["/solutions/contacts-pro/transferring-contacts-through-contacts-pro/how-to-export-contacts-.md", "How to export contacts?"],
                        ["/solutions/contacts-pro/transferring-contacts-through-contacts-pro/how-to-import-contacts-.md", "How to import contacts?"],
                      ],
                    },
                    {
                      title: "Connect Contacts Pro with Map Pro",
                      collapsable: true,
                      children: [["/solutions/contacts-pro/connect-contacts-pro-with-map-pro/how-can-i-connect-my-contacts-pro-with-map-pro-.md", "How can I connect my Contacts Pro with Map Pro?"]],
                    },
                  ],
                },
                ["/solutions/contacts-pro/whats-new.md", "What’s new​"],
                ["/solutions/contacts-pro/limits.md", "Limits"],
                ["/solutions/contacts-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Gantt Chart Pro",
              collapsable: true,
              path: "/solutions/gantt-chart-pro/overview/",
              children: [
                ["/solutions/gantt-chart-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [["/solutions/gantt-chart-pro/getting-started-with-gantt-chart-pro/how-to-set-up-gantt-chart-pro-.md", "How to Set Up Gantt Chart Pro?"]],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Pricing and licensing",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/do-all-channel-users-need-a-gantt-chart-pro-license-.md",
                          "Do all channel users need a Gantt Chart Pro license?",
                        ],
                        [
                          "/solutions/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/what-s-the-difference-between-free-and-premium-gantt-chart-pro-.md",
                          "What’s the difference between free and premium Gantt Chart Pro?",
                        ],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Participants",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/gantt-chart-pro/participants-gantt-chart-pro/how-to-add-or-remove-participants-from-gantt-chart-pro-.md",
                          "How to Add or Remove Participants from Gantt Chart Pro?",
                        ],
                      ],
                    },
                  ],
                },
                ["/solutions/gantt-chart-pro/whats-new.md", "What’s new​"],
                ["/solutions/gantt-chart-pro/limits.md", "Limits"],
                ["/solutions/gantt-chart-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Home Pro",
              collapsable: true,
              path: "/solutions/home-pro/overview/",
              children: [
                ["/solutions/home-pro/overview.md", "Overview"],
                ["/solutions/home-pro/get-started.md", "Get Started !"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Get to know your widgets",
                      collapsable: true,
                      children: [
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-add-widget-to-the-home-pro-dashboard-.md", "How can I add Widget to the Home Pro Dashboard?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-configure-a-widget-.md", "How can I configure a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-hide-a-widget-.md", "How can I hide a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-navigate-through-a-widget-.md", "How can I navigate through a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-rename-a-widget-.md", "How can I Rename a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-reset-a-widget-.md", "How can I reset a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-resize-a-widget-.md", "How can I resize a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-do-i-change-the-unique-id-in-the-widget-.md", "How do I change the Unique ID in the widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-many-widgets-can-i-add-.md", "How many widgets can I add?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/what-is-a-widget-.md", "What is a Widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/where-can-i-get-the-settings-of-the-widgets-.md", "Where can I get the settings of the widgets?"],
                      ],
                    },
                  ],
                },
                ["/solutions/home-pro/whats-new.md", "What’s new​"],
                ["/solutions/home-pro/tutorials.md", "Tutorials"],
                ["/solutions/home-pro/limits.md", "Limits"],
                ["/solutions/home-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Image Pro",
              collapsable: true,
              path: "/solutions/image-pro/overview/",
              children: [
                ["/solutions/image-pro/overview.md", "Overview"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Saved Image",
                      collapsable: true,
                      children: [["/solutions/image-pro/image-pro-tuto/where-my-image-will-be-saved.md", "Where can I find my image?"]],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Upload Image",
                      collapsable: true,
                      children: [["/solutions/image-pro/image-pro-tuto/how-to-upload-an-image.md", "How to upload an image?"]],
                    },
                    {
                      title: "Edit Image",
                      collapsable: true,
                      children: [["/solutions/image-pro/image-pro-tuto/how-to-edit-my-image.md", "How to edit my image?"]],
                    },
                  ],
                },
                ["/solutions/image-pro/whats-new.md", "What’s new​"],
                ["/solutions/image-pro/limits.md", "Limits"],
                ["/solutions/image-pro/changelog.md", "Change log​"],
              ],
            },
            {
              title: "KeePass Pro",
              collapsable: true,
              path: "/solutions/keepass-pro/overview/",
              children: [
                ["/solutions/keepass-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    [
                      "/solutions/keepass-pro/getting-started-with-keepass-pro/can-an-external-teams-user-have-access-to-keepass-pro-in-private-channel-.md",
                      "Can an external Teams user have access to KeePass Pro in private channel?",
                    ],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-copy-password-.md", "How can I copy password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-create-a-new-password-.md", "How can I create a new password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-delete-a-password-.md", "How can I delete a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-modify-a-password-.md", "How can I modify a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-share-a-password-.md", "How can I share a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-we-generate-a-password-.md", "How can we generate a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-to-add-keepass-pro-to-a-channel-.md", "How to add KeePass Pro to a channel?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-to-pin-the-keepass-pro-to-navigation-bar-.md", "How to pin the KeePass Pro to navigation bar?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-to-set-up-a-keepass-pro-tab-.md", "How to pin the KeePass Pro to navigation bar?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/where-are-the-settings--how-can-we-change-it-.md", "Where are the settings? How can we change it?"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Recycle bin",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/keepass-pro/recycle-bin-keepass-pro/what-is-the-time-frame-for-retrieving-a-password-from-the-recycle-bin-.md",
                          "What is the time frame for retrieving a password from the Recycle Bin?",
                        ],
                      ],
                    },
                    {
                      title: "Vault management",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/vault-management-keepass-pro/what-is-a-keepass-pro-vault-.md", "What is a KeePass Pro vault?"]],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Import and export KeePass Pro passwords",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/keepass-pro/import-and-export-keepass-pro-passwords/how-to-import-a-keepass-pro-.kdbx-file-into-a-new-keepass-pro-channel-tab-.md",
                          "How to import a KeePass Pro .KDBX file into a new KeePass Pro channel tab?",
                        ],
                      ],
                    },
                    {
                      title: "Master password",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/master-password-keepass-pro/how-to-access-keepass-pro-master-password-.md", "How to access KeePass Pro master password?"]],
                    },
                    {
                      title: "Recycle bin",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/recycle-bin-keepass-pro/how-can-i-retrieve-my-password-through-recycle-bin-.md", "How can I retrieve my password through Recycle Bin?"]],
                    },
                    {
                      title: "Vault management",
                      collapsable: true,
                      children: [
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-and-where-can-i-create-the-folders-on-the-vault-.md", "How and where can I create the folders on the vault?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-change-the-name-the-of-the-keepass-pro-s-vault-.md", "How to change the name the of the KeePass Pro’s vault?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-choose-vault-location-.md", "How to choose vault location?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-import-a-kdbx-file-in-keepass-pro-.md", "How to import a KDBX file in KeePass Pro?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-keep-a-keepass-pro-vault-private-.md", "How to keep a KeePass Pro Vault private?"],
                      ],
                    },
                  ],
                },
                ["/solutions/keepass-pro/whats-new.md", "What’s new​"],
                ["/solutions/keepass-pro/limits.md", "Limits"],
                ["/solutions/keepass-pro/changelog.md", "Change log​"],
              ],
            },
            {
              title: "Map Pro",
              collapsable: true,
              path: "/solutions/map-pro/overview/",
              children: [
                ["/solutions/map-pro/overview.md", "Overview"],
                {
                  title: "Getting started with Map Pro",
                  collapsable: true,
                  children: [
                    ["/solutions/map-pro/getting-started-with-map-pro/how-can-i-switch-to-map-satellite-view-mode-.md", "How can I switch to Map/Satellite view mode?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-add-map-pro-to-my-team-.md", "How to add Map Pro to my team?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-add-map-pro-to-my-team-s-channel-.md", "How to add Map Pro to my team’s channel?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-install-map-pro-to-my-teams-application-.md", "How to install Map Pro to my Teams Application?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-set-up-a-tab-for-map-pro-.md", "How to set up a tab for Map Pro?"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Get to know your Map Pro",
                      collapsable: true,
                      children: [
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-can-i-rename-the-map-pro-tab-.md", "How can I rename the Map Pro Tab?"],
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-to-copy-the-id-for-my-map-pro-.md", "How can I rename the Map Pro Tab?"],
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-to-find-the-id-(unique-identifier)-for-my-map-pro-.md", "How to find the ID (unique identifier) for my Map Pro?"],
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-to-find-the-version-of-my-map-pro-.md", "How to find the version of my Map Pro?"],
                      ],
                    },
                    {
                      title: "Managing your Map Pro",
                      collapsable: true,
                      children: [
                        ["/solutions/map-pro/managing-your-map-pro/connect-teamspro-apps-with-map-pro.md", "Connect TeamsPro apps with Map Pro"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-add-places-to-map-pro-.md", "How to add places to Map Pro?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-add-trips-to-map-pro-.md", "How to add trips to Map Pro?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-delete-the-place-added-.md", "How to delete the Place added?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-delete-the-trips-added-.md", "How to delete the Trips added?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-edit-the-place-added-.md", "How to edit the Place added?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-edit-the-trips-added-.md", "How to edit the Trips added?"],
                        ["/solutions/map-pro/managing-your-map-pro/where-to-find-the-places-added-.md", "Where to find the Places added?"],
                        ["/solutions/map-pro/managing-your-map-pro/where-to-find-the-trips-added-.md", "Where to find the Trips added?"],
                      ],
                    },
                  ],
                },
                ["/solutions/map-pro/whats-new.md", "What’s new​"],
                ["/solutions/map-pro/tutorials.md", "Tutorials"],
                ["/solutions/map-pro/limits.md", "Limits"],
                ["/solutions/map-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Parking Pro",
              collapsable: true,
              path: "/solutions/parking-pro/overview/",
              children: [
                ["/solutions/parking-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    ["/solutions/parking-pro/getting-started-with-parking-pro/how-to-check-the-parking-pro-unique-identifier-(id)-.md", "How to check the Parking Pro Unique Identifier (ID)?"],
                    ["/solutions/parking-pro/getting-started-with-parking-pro/how-to-get-parking-pro-version-.md", "How to get Parking Pro version?"],
                    ["/solutions/parking-pro/getting-started-with-parking-pro/parking-pro-basic-set-up.md", "Parking Pro Basic Set Up"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/parking-pro/permissions-in-parking-pro/how-to-change-the-permission-to-make-changes-to-parking-pro-.md",
                          "How to change the permission to make changes to Parking Pro?",
                        ],
                      ],
                    },
                    {
                      title: "Pricing and licensing",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/parking-pro/pricing-and-licensing-parking-pro/do-all-channel-or-teams-users-need-a-parking-pro-license-.md",
                          "Do all channel or Teams users need a Parking Pro license?",
                        ],
                        [
                          "/solutions/parking-pro/pricing-and-licensing-parking-pro/what-s-the-difference-between-free-and-premium-parking-pro-.md",
                          "What’s the difference between free and premium Parking Pro?",
                        ],
                      ],
                    },
                    {
                      title: "Printing",
                      collapsable: true,
                      children: [["/solutions/parking-pro/printing-parking-pro/how-can-i-print-parking-pro-reservation-schedule-.md", "How can I print Parking Pro reservation schedule?"]],
                    },
                    {
                      title: "Tags",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/parking-pro/tags-in-parking-pro/how-to-use-tags-to-manage-and-filter-parking-spaces-in-parking-pro-.md",
                          "How to use tags to manage and filter parking spaces in Parking Pro?",
                        ],
                      ],
                    },
                    {
                      title: "Timezones",
                      collapsable: true,
                      children: [["/solutions/parking-pro/timezone-in-parking-pro/how-can-i-change-parking-pro-time-zone-.md", "How can I change Parking Pro time zone?"]],
                    },
                  ],
                },
                ["/solutions/parking-pro/whats-new.md", "What’s new​"],
                ["/solutions/parking-pro/tutorials.md", "Tutorials"],
                ["/solutions/parking-pro/limits.md", "Limits"],
                ["/solutions/parking-pro/changelog.md", "Change log​"],
              ],
            },
          ],
        },
        {
          title: "Trust Center",
          collapsable: true,
          children: [
            ["/trust-center/", "Overview"],
            ["/trust-center/supported-clients/", "Supported Clients"],
            ["/trust-center/authentication-single-sign-on/", "Authentication & Single Sign On"],
            ["/trust-center/communication-network-security/", "Communication & Network Security"],
            ["/trust-center/infrastructure-services/", "Infrastructure Services"],
            ["/trust-center/microsoft-graph-permissions/", "Microsoft Graph Permissions"],
            ["/trust-center/data-management-practices/", "Data Management Practices"],
            ["/trust-center/secure-development/", "Secure Development"],
            ["/trust-center/privacy-and-compliance/", "Privacy and Compliance"],
            ["/trust-center/security-policy/", "Security Policy"],
            ["/trust-center/classification-labels/", "Classification Labels"],
          ],
        },
        {
          title: "Architecture & Security",
          collapsable: true,
          children: [
            ["/architecture-security/overview/", "Overview"],
            ["/architecture-security/admin-center/", "Admin Center"],
            ["/architecture-security/bookingroom-pro/", "BookingRoom Pro"],
            ["/architecture-security/calendar-pro/", "Calendar Pro"],
            ["/architecture-security/parking-pro/", "Parking Pro"],
            ["/architecture-security/company-communicator-pro/", "Company Communicator Pro"],
            ["/architecture-security/contact-pro/", "Contact Pro"],
            ["/architecture-security/distribution-list-pro/", "Distribution List Pro"],
            ["/architecture-security/keepass-pro/", "Keepass Pro"],
            ["/architecture-security/map-pro/", "Map Pro"],
            ["/architecture-security/image-pro/", "Image Pro"],
            ["/architecture-security/gantt-chart-pro/", "Gantt Chart Pro"],
            ["/architecture-security/metaoffice-pro/", "MetaOffice Pro"],
            ["/architecture-security/gpt-pro/", "GPT Pro"],
            ["/architecture-security/green-center/", "Green Center"],
          ],
        },
      ],

      "/architecture-security/": [
        {
          title: "Documentation",
          collapsable: true,
          children: [
            ["/solutions/", "Overview"],
            {
              title: "Virtual Agent Studio",
              collapsable: true,
              path: "/solutions/virtual-agent-studio/chatbot/build_your_chatbot/",
              children: [
                {
                  title: "Home",
                  path: "/solutions/virtual-agent-studio/chatbot/home/home",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/home/home.md", "Home"],
                    ["/solutions/virtual-agent-studio/chatbot/home/information.md", "Information"],
                    ["/solutions/virtual-agent-studio/chatbot/home/audit.md", "Audit"],
                    ["/solutions/virtual-agent-studio/chatbot/home/Catalog.md", "Teams Catalog"],
                    ["/solutions/virtual-agent-studio/chatbot/home/privacypolicies.md", "Privacy policies"],
                  ],
                },
                {
                  title: "Build your chatbot",
                  path: "/solutions/virtual-agent-studio/chatbot/build_your_chatbot",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/build_your_chatbot.md", "Build your chatbot"],
                    ["/solutions/virtual-agent-studio/chatbot/build_your_chatbot/skype.md", "Skype for Business Online prerequisites"],
                    ["/solutions/virtual-agent-studio/chatbot/build_your_chatbot/requisites.md", "Teams prerequisites"],
                  ],
                },
                {
                  title: "Inbox",
                  path: "/solutions/virtual-agent-studio/chatbot/inbox",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/inbox.md", "Overview Inbox"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/unanswered_questions.md", "Unanswered Questions"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/low_score.md", "Low Score"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/suggested_questions.md", "Suggested Questions"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/negative_feedbacks.md", "Negative Feedbacks"],
                    ["/solutions/virtual-agent-studio/chatbot/inbox/scoring_rules.md", "Scoring Rules"],
                  ],
                },
                {
                  title: "Dashboards",
                  collapsable: true,
                  path: "/solutions/virtual-agent-studio/chatbot/dashboards",
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/dashboards.md", "Overview Dashboard"],
                    ["/solutions/virtual-agent-studio/chatbot/dashboards/performance.md", "Performance Dashboard"],
                    ["/solutions/virtual-agent-studio/chatbot/dashboards/usage.md", "Usage Dashboard"],
                    ["/solutions/virtual-agent-studio/chatbot/dashboards/power_bi.md", "Power Bi Dashboard"],
                  ],
                },
                {
                  title: "Knowledge",
                  path: "/solutions/virtual-agent-studio/chatbot/knowledge/creation_process",
                  collapsable: true,
                  sidebarDepth: 3,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/creation_process.md", "Creation Process"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/messages.md", "Messages"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/categories.md", "Categories"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/kb.md", "KB"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/learninggpt.md", "GPT learning"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/entities.md", "Entities"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/synonyms.md", "Synonyms"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/test_plan.md", "Test Plan"],
                    ["/solutions/virtual-agent-studio/chatbot/knowledge/configuration.md", "Configuration"],
                  ],
                },
                {
                  title: "Tools",
                  path: "/solutions/virtual-agent-studio/chatbot/tools",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/tools.md", "Overview Tools"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/starting_flow.md", "Starting Flow"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/escalation.md", "Escalation"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/active_learning.md", "Active Learning"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/feedback.md", "Feedback"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/image_gallery.md", "Image Gallery"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/recommendation.md", "Recommendation"],
                    ["/solutions/virtual-agent-studio/chatbot/tools/history.md", "History"],
                  ],
                },
                {
                  title: "Communication",
                  path: "/solutions/virtual-agent-studio/chatbot/communication",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/communication.md", "Overview Communication"],
                    ["/solutions/virtual-agent-studio/chatbot/communication/user_lists.md", "User Lists"],
                    ["/solutions/virtual-agent-studio/chatbot/communication/campaign.md", "Campaign"],
                    ["/solutions/virtual-agent-studio/chatbot/communication/survey.md", "Survey"],
                  ],
                },
                {
                  title: "Profile",
                  path: "/solutions/virtual-agent-studio/chatbot/profile",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/profile.md", "Overview Profile"],
                    ["/solutions/virtual-agent-studio/chatbot/profile/api_profile.md", "API Profile with SharedPoint and MS Flow"],
                  ],
                },
                {
                  title: "Settings",
                  path: "/solutions/virtual-agent-studio/chatbot/settings",
                  collapsable: true,
                  children: [
                    ["/solutions/virtual-agent-studio/chatbot/settings.md", "Overview Settings"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/privacy.md", "Privacy policies"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/chatbot.md", "Chatbot accessibility"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/multilingual.md", "Languages"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/user_list.md", "User List"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/channels.md", "Channels"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/coach.md", "Coach"],
                    ["/solutions/virtual-agent-studio/chatbot/settings/settings.md", "Settings"],
                  ],
                },
                {
                  title: "Licence Administrators",
                  path: "/solutions/virtual-agent-studio/chatbot/licence_administrators",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/licence_administrators.md', 'Licence administrators'],
                  // ]
                },
                {
                  title: "Semantic Indexing API V3",
                  path: "/solutions/virtual-agent-studio/chatbot/semantic_indexing/semantic_indexing_api.md",
                  collapsable: true,
                },
                {
                  title: "Notification bar",
                  path: "/solutions/virtual-agent-studio/chatbot/notification_bar",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/notification_bar.md', 'Home'],
                  // ]
                },
                {
                  title: "Limitations",
                  path: "/solutions/virtual-agent-studio/chatbot/limitations",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/limitations.md', 'Limitations'],
                  // ]
                },
                {
                  title: "Teams Features",
                  path: "/solutions/virtual-agent-studio/chatbot/teams_features",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/teams_features.md', 'Teams Features'],
                  // ]
                },
                {
                  title: "Webchat V1 (obsolete)",
                  path: "/solutions/virtual-agent-studio/chatbot/webchat_v1",
                  collapsable: true,
                  // children: [
                  //   ['/solutions/virtual-agent-studio/chatbot/webchat_v1.md', 'Webchat V1 (obsolete)'],
                  // ]
                },
                {
                  title: "MetaBot",
                  path: "/solutions/virtual-agent-studio/chatbot/metabot_en",
                  collapsable: true,
                  // children: [
                  //     ['/solutions/virtual-agent-studio/chatbot/metabot_en.md', 'MetaBot'],
                  // ]
                },
              ],
            },
            /*{
							title: 'Meta Office Pro',
							collapsable: true,
							path: "/solutions/meta-office-pro/overview/",
							children: [
								['/solutions/meta-office-pro/overview.md', "Overview"],
								['/solutions/meta-office-pro/get-started.md', "Get Started !"],
								['/solutions/meta-office-pro/fundamentals.md', "Fundamentals"],
								['/solutions/meta-office-pro/whats-new.md', "What’s new​"],
								['/solutions/meta-office-pro/tutorials.md', "Tutorials"],
								['/solutions/meta-office-pro/limits.md', "Limits"],
								['/solutions/meta-office-pro/changelog.md', "Changelog​"],
							]
						},*/
            {
              title: "GPT Pro",
              collapsable: true,
              path: "/solutions/gpt-pro/overview/",
              children: [
                ["/solutions/gpt-pro/overview.md", "Overview"],
                ["/solutions/gpt-pro/get-started.md", "Get Started !"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    ["/solutions/gpt-pro/fundamentals/authentication.md", "Authentication & Authorization"],
                    ["/solutions/gpt-pro/fundamentals/dashboard.md", "Dashboard"],
                    ["/solutions/gpt-pro/fundamentals/documents.md", "Documents"],
                    ["/solutions/gpt-pro/fundamentals/history.md", "History"],
                    ["/solutions/gpt-pro/fundamentals/prompts.md", "Prompts"],
                    ["/solutions/gpt-pro/fundamentals/system-prompt.md", "System Prompt"],
                    ["/solutions/gpt-pro/fundamentals/welcome-card.md", "Welcome Card"],
                    ["/solutions/gpt-pro/fundamentals/Action-bar.md", "Action bar"],
                    ["/solutions/gpt-pro/fundamentals/manage-plugins.md", "Plugins"],
                    ["/solutions/gpt-pro/fundamentals/GPT-Maker.md", "GPT Maker"],
                    ["/solutions/gpt-pro/fundamentals/Knowledge-Base-Editor.md", "Knowledge Base"],
                    ["/solutions/gpt-pro/fundamentals/manage-administrators.md", "Administrator"],
                    ["/solutions/gpt-pro/fundamentals/notebook.md", "Notebook"],
                    ["/solutions/gpt-pro/fundamentals/push-communication.md", "Push Communication"],
                    ["/solutions/gpt-pro/fundamentals/feedback.md", "Feedback"],
                  ],
                },
                ["/solutions/gpt-pro/whats-new.md", "What’s new​"],
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [["/solutions/gpt-pro/tutorials/plugins.md", "Plugins"]],
                },
                {
                  title: "Migrations",
                  collapsable: true,
                  children: [
                    ["/solutions/gpt-pro/migrations/faq.md", "FAQ"],
                    ["/solutions/gpt-pro/migrations/movestream.md", "MoveStream Program"],
                  ],
                },
                ["/solutions/gpt-pro/limits.md", "Limits"],
                ["/solutions/gpt-pro/content-filter.md", "Content filtering"],
                ["/solutions/gpt-pro/roadmap.md", "Roadmap"],
                ["/solutions/gpt-pro/changelog.md", "Change log​"],
              ],
            },
            {
              title: "TeamsPro Admin center",
              collapsable: true,
              path: "/solutions/admin-center/overview/",
              children: [
                ["/solutions/admin-center/overview.md", "Overview"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Manage my subscription",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/admin-center/manage-my-subscription/how-to-download-the-invoices-for-the-subscription-purchased-.md",
                          "How to download the invoices for the subscription purchased",
                        ],
                        ["/solutions/admin-center/manage-my-subscription/how-to-change-to-yearly-plan-.md", "How to change to yearly plan"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-cancel-your-subscription-.md", "How to cancel your subscription"],
                        [
                          "/solutions/admin-center/manage-my-subscription/how-to-increase-the-number-of-licenses-of-your-subscription-.md",
                          "How to increase the number of licenses of your subscription",
                        ],
                        ["/solutions/admin-center/manage-my-subscription/how-to-modify-billing-information-details-including-vat.md", "How to modify 'Billing' information details (including-VAT)"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-modify-or-update-your-credit-card-details-.md", "How to modify or update your credit card details"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-modify-your-account-information-.md", "How to modify your account information"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-remove-your-account-.md", "How to remove your account"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-assign-or-remove-a-license-from-a-user-.md", "How to assign or remove a license from a user"],
                        [
                          "/solutions/admin-center/manage-my-subscription/how-does-the-rights-ownership-transfer-between-super-admin-and-admin-work.md",
                          "How Does the Rights Ownership Transfer Between Super Admin and Admin Work",
                        ],
                        ["/solutions/admin-center/manage-my-subscription/why-can-t-a-transfer-be-initiated.md", "Why Can't a Transfer Be Initiated"],
                        ["/solutions/admin-center/manage-my-subscription/what-are-the-rights-of-super-admin-and-admin-role.md", "What are the rights of super admin and admin roles"],
                        ["/solutions/admin-center/manage-my-subscription/how-to-apply-coupon-code.md", "How to apply coupon code"],
                        ["/solutions/admin-center/manage-my-subscription/discounts-for-educational-and-non-profit-organizations.md", "Discounts for Educational and Non-Profit Organizations"],
                      ],
                    },
                  ],
                },
                ["/solutions/admin-center/whats-new.md", "What’s new​"],
                ["/solutions/admin-center/tutorials.md", "Tutorials"],
                ["/solutions/admin-center/limits.md", "Limits"],
                ["/solutions/admin-center/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Booking Room Pro",
              collapsable: true,
              path: "/solutions/booking-room-pro/overview/",
              children: [
                ["/solutions/booking-room-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    [
                      "/solutions/booking-room-pro/getting-started-with-booking-room-pro/how-to-add-booking-room-pro-to-my-team-channel-in-ms-teams-.md",
                      "How to add Booking Room Pro to my team/channel in MS Teams?",
                    ],
                    ["/solutions/booking-room-pro/getting-started-with-booking-room-pro/how-to-find-the-booking-room-pro-id-.md", "How to find the Booking Room Pro ID?"],
                    [
                      "/solutions/booking-room-pro/getting-started-with-booking-room-pro/how-to-install-booking-room-pro-to-my-microsoft-teams-application-.md",
                      "How to install Booking Room Pro to my Microsoft Teams Application?",
                    ],
                    [
                      "/solutions/booking-room-pro/getting-started-with-booking-room-pro/who-is-the-creator-owner-of-the-booking-room-pro-tab-.md",
                      "Who is the creator/owner of the Booking Room Pro tab?",
                    ],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Pricing and licensing",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/booking-room-pro/pricing-and-licensing-booking-room-pro/do-all-channel-users-need-a-booking-room-pro-license-.md",
                          "Do all channel users need a Booking Room Pro license?",
                        ],
                        [
                          "/solutions/booking-room-pro/pricing-and-licensing-booking-room-pro/what-is-the-difference-between-booking-room-pro-premium-vs-free-model-.md",
                          "What is the difference between Booking Room Pro Premium vs free model?",
                        ],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "View options",
                      collapsable: true,
                      children: [["/solutions/booking-room-pro/booking-room-pro-view-options/how-can-i-change-the-view-and-day-of-the-week-.md", "How can I change the view and day of the week?"]],
                    },
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        ["/solutions/booking-room-pro/permissions-in-booking-room-pro/how-to-change-the-permission-to-edit-the-events-.md", "How to change the permission to edit the events?"],
                      ],
                    },
                    {
                      title: "Printing",
                      collapsable: true,
                      children: [["/solutions/booking-room-pro/printing-booking-room-pro/how-to-print-my-planning-for-booking-room-pro-.md", "How to print my planning for Booking Room Pro?"]],
                    },
                    {
                      title: "Single and recurrent bookings",
                      collapsable: true,
                      children: [
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-add-an-event-.md", "How can I add an event?"],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-event-.md", "How can I edit/modify an event?"],
                        [
                          "/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-can-i-edit-modify-an-occurrence-in-recurrent-event-.md",
                          "How can I edit/modify an occurrence in recurrent event?",
                        ],
                        [
                          "/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-create-recurring-events-in-booking-room-pro-.md",
                          "How to create recurring events in Booking Room Pro?",
                        ],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-a-recurrent-event-.md", "How to delete a recurrent event?"],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-delete-an-event-.md", "How to delete an event?"],
                        ["/solutions/booking-room-pro/single-and-recurrent-bookings-in-booking-room-pro/how-to-get-the-event-info-.md", "How to get the event info?"],
                      ],
                    },
                    {
                      title: "Tags",
                      collapsable: true,
                      children: [
                        ["/solutions/booking-room-pro/tags-in-booking-room-pro/how-to-use-tags-in-booking-room-pro-.md", "How to use tags in Booking Room Pro?"],
                        ["/solutions/booking-room-pro/time-zones-in-booking-room-pro/how-to-change-the-time-zone-.md", "How to change the time zone?"],
                      ],
                    },
                    {
                      title: "Timezones",
                      collapsable: true,
                      children: [["/solutions/booking-room-pro/time-zones-in-booking-room-pro/how-to-change-the-time-zone-.md", "How to change the time zone?"]],
                    },
                  ],
                },
                ["/solutions/booking-room-pro/whats-new.md", "What’s new​"],
                ["/solutions/booking-room-pro/limits.md", "Limits"],
                ["/solutions/booking-room-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Calendar Pro",
              collapsable: true,
              path: "/solutions/calendar-pro/overview/",
              children: [
                ["/solutions/calendar-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    ["/solutions/calendar-pro/getting-started-with-calendar-pro/overview.md", "Get started guide"],
                    ["/solutions/calendar-pro/getting-started-with-calendar-pro/faq.md", "FAQ"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Calendar customization",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/calendar-pro-overview.md", "Manage view"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/duplicate-calendar-pro-in-other-channel.md", "Duplicate calendar"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/notifications.md", "Manage notifications"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/public-holiday.md", "Set up and manage public holiday"],
                        ["/solutions/calendar-pro/fundamentals/calendar-customization/timezones.md", "Manage timezone"],
                      ],
                    },
                    {
                      title: "Events",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/fundamentals/events/managing-events.md", "Managing events"],
                        ["/solutions/calendar-pro/fundamentals/events/personalizing-events-calendar.md", "Advanced event personalization"],
                      ],
                    },
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/fundamentals/permisssions-in-calendar-pro/managing-permissions.md", "Managing permissions"],
                        ["/solutions/calendar-pro/fundamentals/permisssions-in-calendar-pro/permissions-faq.md", "FAQ"],
                      ],
                    },
                    {
                      title: "Power automate connector",
                      collapsable: true,
                      children: [["/solutions/calendar-pro/fundamentals/power-automate-connector-calendar-pro/pa-overview.md", "Overview"]],
                    },
                    {
                      title: "Printing",
                      collapsable: true,
                      children: [["/solutions/calendar-pro/fundamentals/printing-calendar-pro/how-can-i-print-my-calendar-pro-.md", "Print Calendar Pro Overview"]],
                    },
                    {
                      title: "Tags",
                      collapsable: true,
                      children: [["/solutions/calendar-pro/fundamentals/tags-in-calendar-pro/add-and-manage-tags.md", "Add and manage tags"]],
                    },
                  ],
                },
                {
                  title: "Pricing and subscription",
                  collapsable: true,
                  children: [
                    ["/solutions/calendar-pro/pricing-and-subscription/managing-subscription.md", "Setup and installation"],
                    ["/solutions/calendar-pro/pricing-and-subscription/what-is-the-difference-between-calendar-pro-premium-vs-free-.md", "FAQ"],
                  ],
                },
                {
                  title: "Troubleshooting",
                  collapsable: true,
                  children: [
                    ["/solutions/calendar-pro/troubleshooting/how-to-clean-the-microsoft-teams-cache-.md", "How to clean the Microsoft Teams cache?"],
                    [
                      "/solutions/calendar-pro/troubleshooting/i-accidentally-deleted-my-calendar-or-somebody-deleted-it--how-can-i-restore-it-.md",
                      "I accidentally deleted my Calendar, or somebody deleted it? How can I restore it?",
                    ],
                    ["/solutions/calendar-pro/troubleshooting/blank-screen-popup-after-sign-in-.md", "Blank screen popup after sign in"],
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Synchronization",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-synchronize-my-calendar-pro-to-another-calendar.md", "How to synchronize my calendar pro to another calendar?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-synchronize-a-calendar-in-my-calendar-pro.md", "How to synchronize a calendar in my Calendar Pro?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-manage-my-synchronized-calendar.md", "How to manage my synchronized calendars?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/how-to-synchronize-outlook-with-calendar-pro.md", "How to synchronize outlook with Calendar Pro?"],
                        ["/solutions/calendar-pro/tutorials/synchronization/see-the-shared-synchronized-calendars.md", "See the shared synchronized calendars"],
                      ],
                    },
                    {
                      title: "Files",
                      collapsable: true,
                      children: [
                        ["/solutions/calendar-pro/tutorials/adding-files-calendar-pro/how-to-add-files-in-an-event-of-my-calendar-pro.md", "How do I add files in an event of my Calendar Pro?"],
                      ],
                    },
                    {
                      title: "Single and recurrent events",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/calendar-pro/tutorials/single-and-recurrent-events/can-we-delete-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro.md",
                          "Can we delete a single occurrence which is a part of a series of recurrent events in Calendar Pro?",
                        ],
                        [
                          "/solutions/calendar-pro/tutorials/single-and-recurrent-events/can-we-edit-a-single-occurrence-which-is-a-part-of-a-series-of-recurrent-events-in-calendar-pro.md",
                          "Can we edit a single occurrence which is a part of a series of recurrent events in Calendar Pro?",
                        ],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-add-a-recurrent-event.md", "How can I add a recurrent event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-add-an-event.md", "How can I add an event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-add-links-to-my-events.md", "How can I add links to my events?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-delete-an-event.md", "How can I delete an event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-edit-modify-a-recurrent-events.md", "How can I edit/modify a recurrent events?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-can-i-edit-modify-an-event.md", "How can I edit/modify an event?"],
                        ["/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-to-see-the-event-id-in-calendar-pro.md", "How to see the Event ID in Calendar Pro?"],
                        [
                          "/solutions/calendar-pro/tutorials/single-and-recurrent-events/how-to-see-the-series-id-of-a-recurrent-event-series-in-calendar-pro.md",
                          "How to see the series Id of a recurrent event series in Calendar Pro?",
                        ],
                      ],
                    },
                  ],
                },
                ["/solutions/calendar-pro/whats-new.md", "What’s new​"],
                ["/solutions/calendar-pro/limits.md", "Limits"],
                ["/solutions/calendar-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Contacts Pro",
              collapsable: true,
              path: "/solutions/contacts-pro/overview/",
              children: [
                ["/solutions/contacts-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-contact-.md", "How can I add a new contact?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-can-i-add-a-new-group-.md", "How can I add a new group?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-can-i-select-the-display-mode-.md", "How can I select the display mode?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-to-get-the-contacts-pro-id-.md", "How to get the Contacts Pro id?"],
                    ["/solutions/contacts-pro/getting-started-with-contacts-pro/how-to-install-contacts-pro-to-my-teams-application-.md", "How to install Contacts Pro to my Teams Application?"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Transferring contacts",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/contacts-pro/transferring-contacts-through-contacts-pro/can-we-share-the-contacts-from-contacts-pro-through-outlook-.md",
                          "Can we share the contacts from Contacts Pro through Outlook?",
                        ],
                        ["/solutions/contacts-pro/transferring-contacts-through-contacts-pro/can-we-use-PowerAutomate-with-Contacts-Pro.md", "Can we use PowerAutomate with Contacts Pro?"],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Managing contacts",
                      collapsable: true,
                      children: [
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-can-i-connect-with-the-contacts-.md", "How can I connect with the contacts?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-assign-group-to-a-contact-.md", "How to assign group to a contact?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-connect-contacts-pro-with-map-pro-.md", "How to connect Contacts Pro with Map Pro?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-delete-a-contact-in-contacts-pro-.md", "How to delete a contact in Contacts Pro?"],
                        ["/solutions/contacts-pro/managing-contacts-in-contacts-pro/how-to-edit-a-contact-.md", "How to edit a contact?"],
                      ],
                    },
                    {
                      title: "Transferring contacts",
                      collapsable: true,
                      children: [
                        ["/solutions/contacts-pro/transferring-contacts-through-contacts-pro/how-to-export-contacts-.md", "How to export contacts?"],
                        ["/solutions/contacts-pro/transferring-contacts-through-contacts-pro/how-to-import-contacts-.md", "How to import contacts?"],
                      ],
                    },
                    {
                      title: "Connect Contacts Pro with Map Pro",
                      collapsable: true,
                      children: [["/solutions/contacts-pro/connect-contacts-pro-with-map-pro/how-can-i-connect-my-contacts-pro-with-map-pro-.md", "How can I connect my Contacts Pro with Map Pro?"]],
                    },
                  ],
                },
                ["/solutions/contacts-pro/whats-new.md", "What’s new​"],
                ["/solutions/contacts-pro/limits.md", "Limits"],
                ["/solutions/contacts-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Gantt Chart Pro",
              collapsable: true,
              path: "/solutions/gantt-chart-pro/overview/",
              children: [
                ["/solutions/gantt-chart-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [["/solutions/gantt-chart-pro/getting-started-with-gantt-chart-pro/how-to-set-up-gantt-chart-pro-.md", "How to Set Up Gantt Chart Pro?"]],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Pricing and licensing",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/do-all-channel-users-need-a-gantt-chart-pro-license-.md",
                          "Do all channel users need a Gantt Chart Pro license?",
                        ],
                        [
                          "/solutions/gantt-chart-pro/pricing-and-licensing-of-gantt-chart-pro/what-s-the-difference-between-free-and-premium-gantt-chart-pro-.md",
                          "What’s the difference between free and premium Gantt Chart Pro?",
                        ],
                      ],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Participants",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/gantt-chart-pro/participants-gantt-chart-pro/how-to-add-or-remove-participants-from-gantt-chart-pro-.md",
                          "How to Add or Remove Participants from Gantt Chart Pro?",
                        ],
                      ],
                    },
                  ],
                },
                ["/solutions/gantt-chart-pro/whats-new.md", "What’s new​"],
                ["/solutions/gantt-chart-pro/limits.md", "Limits"],
                ["/solutions/gantt-chart-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Home Pro",
              collapsable: true,
              path: "/solutions/home-pro/overview/",
              children: [
                ["/solutions/home-pro/overview.md", "Overview"],
                ["/solutions/home-pro/get-started.md", "Get Started !"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Get to know your widgets",
                      collapsable: true,
                      children: [
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-add-widget-to-the-home-pro-dashboard-.md", "How can I add Widget to the Home Pro Dashboard?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-configure-a-widget-.md", "How can I configure a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-hide-a-widget-.md", "How can I hide a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-navigate-through-a-widget-.md", "How can I navigate through a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-rename-a-widget-.md", "How can I Rename a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-reset-a-widget-.md", "How can I reset a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-can-i-resize-a-widget-.md", "How can I resize a widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-do-i-change-the-unique-id-in-the-widget-.md", "How do I change the Unique ID in the widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/how-many-widgets-can-i-add-.md", "How many widgets can I add?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/what-is-a-widget-.md", "What is a Widget?"],
                        ["/solutions/home-pro/get-to-know-your-widgets/where-can-i-get-the-settings-of-the-widgets-.md", "Where can I get the settings of the widgets?"],
                      ],
                    },
                  ],
                },
                ["/solutions/home-pro/whats-new.md", "What’s new​"],
                ["/solutions/home-pro/tutorials.md", "Tutorials"],
                ["/solutions/home-pro/limits.md", "Limits"],
                ["/solutions/home-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Image Pro",
              collapsable: true,
              path: "/solutions/image-pro/overview/",
              children: [
                ["/solutions/image-pro/overview.md", "Overview"],
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Saved Image",
                      collapsable: true,
                      children: [["/solutions/image-pro/image-pro-tuto/where-my-image-will-be-saved.md", "Where can I find my image?"]],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Upload Image",
                      collapsable: true,
                      children: [["/solutions/image-pro/image-pro-tuto/how-to-upload-an-image.md", "How to upload an image?"]],
                    },
                    {
                      title: "Edit Image",
                      collapsable: true,
                      children: [["/solutions/image-pro/image-pro-tuto/how-to-edit-my-image.md", "How to edit my image?"]],
                    },
                  ],
                },
                ["/solutions/image-pro/whats-new.md", "What’s new​"],
                ["/solutions/image-pro/limits.md", "Limits"],
                ["/solutions/image-pro/changelog.md", "Change log​"],
              ],
            },
            {
              title: "KeePass Pro",
              collapsable: true,
              path: "/solutions/keepass-pro/overview/",
              children: [
                ["/solutions/keepass-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    [
                      "/solutions/keepass-pro/getting-started-with-keepass-pro/can-an-external-teams-user-have-access-to-keepass-pro-in-private-channel-.md",
                      "Can an external Teams user have access to KeePass Pro in private channel?",
                    ],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-copy-password-.md", "How can I copy password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-create-a-new-password-.md", "How can I create a new password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-delete-a-password-.md", "How can I delete a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-modify-a-password-.md", "How can I modify a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-i-share-a-password-.md", "How can I share a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-can-we-generate-a-password-.md", "How can we generate a password?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-to-add-keepass-pro-to-a-channel-.md", "How to add KeePass Pro to a channel?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-to-pin-the-keepass-pro-to-navigation-bar-.md", "How to pin the KeePass Pro to navigation bar?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/how-to-set-up-a-keepass-pro-tab-.md", "How to pin the KeePass Pro to navigation bar?"],
                    ["/solutions/keepass-pro/getting-started-with-keepass-pro/where-are-the-settings--how-can-we-change-it-.md", "Where are the settings? How can we change it?"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Recycle bin",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/keepass-pro/recycle-bin-keepass-pro/what-is-the-time-frame-for-retrieving-a-password-from-the-recycle-bin-.md",
                          "What is the time frame for retrieving a password from the Recycle Bin?",
                        ],
                      ],
                    },
                    {
                      title: "Vault management",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/vault-management-keepass-pro/what-is-a-keepass-pro-vault-.md", "What is a KeePass Pro vault?"]],
                    },
                  ],
                },
                {
                  title: "Tutorials",
                  collapsable: true,
                  children: [
                    {
                      title: "Import and export KeePass Pro passwords",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/keepass-pro/import-and-export-keepass-pro-passwords/how-to-import-a-keepass-pro-.kdbx-file-into-a-new-keepass-pro-channel-tab-.md",
                          "How to import a KeePass Pro .KDBX file into a new KeePass Pro channel tab?",
                        ],
                      ],
                    },
                    {
                      title: "Master password",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/master-password-keepass-pro/how-to-access-keepass-pro-master-password-.md", "How to access KeePass Pro master password?"]],
                    },
                    {
                      title: "Recycle bin",
                      collapsable: true,
                      children: [["/solutions/keepass-pro/recycle-bin-keepass-pro/how-can-i-retrieve-my-password-through-recycle-bin-.md", "How can I retrieve my password through Recycle Bin?"]],
                    },
                    {
                      title: "Vault management",
                      collapsable: true,
                      children: [
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-and-where-can-i-create-the-folders-on-the-vault-.md", "How and where can I create the folders on the vault?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-change-the-name-the-of-the-keepass-pro-s-vault-.md", "How to change the name the of the KeePass Pro’s vault?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-choose-vault-location-.md", "How to choose vault location?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-import-a-kdbx-file-in-keepass-pro-.md", "How to import a KDBX file in KeePass Pro?"],
                        ["/solutions/keepass-pro/vault-management-keepass-pro/how-to-keep-a-keepass-pro-vault-private-.md", "How to keep a KeePass Pro Vault private?"],
                      ],
                    },
                  ],
                },
                ["/solutions/keepass-pro/whats-new.md", "What’s new​"],
                ["/solutions/keepass-pro/limits.md", "Limits"],
                ["/solutions/keepass-pro/changelog.md", "Change log​"],
              ],
            },
            {
              title: "Map Pro",
              collapsable: true,
              path: "/solutions/map-pro/overview/",
              children: [
                ["/solutions/map-pro/overview.md", "Overview"],
                {
                  title: "Getting started with Map Pro",
                  collapsable: true,
                  children: [
                    ["/solutions/map-pro/getting-started-with-map-pro/how-can-i-switch-to-map-satellite-view-mode-.md", "How can I switch to Map/Satellite view mode?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-add-map-pro-to-my-team-.md", "How to add Map Pro to my team?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-add-map-pro-to-my-team-s-channel-.md", "How to add Map Pro to my team’s channel?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-install-map-pro-to-my-teams-application-.md", "How to install Map Pro to my Teams Application?"],
                    ["/solutions/map-pro/getting-started-with-map-pro/how-to-set-up-a-tab-for-map-pro-.md", "How to set up a tab for Map Pro?"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Get to know your Map Pro",
                      collapsable: true,
                      children: [
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-can-i-rename-the-map-pro-tab-.md", "How can I rename the Map Pro Tab?"],
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-to-copy-the-id-for-my-map-pro-.md", "How can I rename the Map Pro Tab?"],
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-to-find-the-id-(unique-identifier)-for-my-map-pro-.md", "How to find the ID (unique identifier) for my Map Pro?"],
                        ["/solutions/map-pro/getting-to-know-your-map-pro/how-to-find-the-version-of-my-map-pro-.md", "How to find the version of my Map Pro?"],
                      ],
                    },
                    {
                      title: "Managing your Map Pro",
                      collapsable: true,
                      children: [
                        ["/solutions/map-pro/managing-your-map-pro/connect-teamspro-apps-with-map-pro.md", "Connect TeamsPro apps with Map Pro"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-add-places-to-map-pro-.md", "How to add places to Map Pro?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-add-trips-to-map-pro-.md", "How to add trips to Map Pro?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-delete-the-place-added-.md", "How to delete the Place added?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-delete-the-trips-added-.md", "How to delete the Trips added?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-edit-the-place-added-.md", "How to edit the Place added?"],
                        ["/solutions/map-pro/managing-your-map-pro/how-to-edit-the-trips-added-.md", "How to edit the Trips added?"],
                        ["/solutions/map-pro/managing-your-map-pro/where-to-find-the-places-added-.md", "Where to find the Places added?"],
                        ["/solutions/map-pro/managing-your-map-pro/where-to-find-the-trips-added-.md", "Where to find the Trips added?"],
                      ],
                    },
                  ],
                },
                ["/solutions/map-pro/whats-new.md", "What’s new​"],
                ["/solutions/map-pro/tutorials.md", "Tutorials"],
                ["/solutions/map-pro/limits.md", "Limits"],
                ["/solutions/map-pro/changelog.md", "Changelog​"],
              ],
            },
            {
              title: "Parking Pro",
              collapsable: true,
              path: "/solutions/parking-pro/overview/",
              children: [
                ["/solutions/parking-pro/overview.md", "Overview"],
                {
                  title: "Get started !",
                  collapsable: true,
                  children: [
                    ["/solutions/parking-pro/getting-started-with-parking-pro/how-to-check-the-parking-pro-unique-identifier-(id)-.md", "How to check the Parking Pro Unique Identifier (ID)?"],
                    ["/solutions/parking-pro/getting-started-with-parking-pro/how-to-get-parking-pro-version-.md", "How to get Parking Pro version?"],
                    ["/solutions/parking-pro/getting-started-with-parking-pro/parking-pro-basic-set-up.md", "Parking Pro Basic Set Up"],
                  ],
                },
                {
                  title: "Fundamentals",
                  collapsable: true,
                  children: [
                    {
                      title: "Permissions",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/parking-pro/permissions-in-parking-pro/how-to-change-the-permission-to-make-changes-to-parking-pro-.md",
                          "How to change the permission to make changes to Parking Pro?",
                        ],
                      ],
                    },
                    {
                      title: "Pricing and licensing",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/parking-pro/pricing-and-licensing-parking-pro/do-all-channel-or-teams-users-need-a-parking-pro-license-.md",
                          "Do all channel or Teams users need a Parking Pro license?",
                        ],
                        [
                          "/solutions/parking-pro/pricing-and-licensing-parking-pro/what-s-the-difference-between-free-and-premium-parking-pro-.md",
                          "What’s the difference between free and premium Parking Pro?",
                        ],
                      ],
                    },
                    {
                      title: "Printing",
                      collapsable: true,
                      children: [["/solutions/parking-pro/printing-parking-pro/how-can-i-print-parking-pro-reservation-schedule-.md", "How can I print Parking Pro reservation schedule?"]],
                    },
                    {
                      title: "Tags",
                      collapsable: true,
                      children: [
                        [
                          "/solutions/parking-pro/tags-in-parking-pro/how-to-use-tags-to-manage-and-filter-parking-spaces-in-parking-pro-.md",
                          "How to use tags to manage and filter parking spaces in Parking Pro?",
                        ],
                      ],
                    },
                    {
                      title: "Timezones",
                      collapsable: true,
                      children: [["/solutions/parking-pro/timezone-in-parking-pro/how-can-i-change-parking-pro-time-zone-.md", "How can I change Parking Pro time zone?"]],
                    },
                  ],
                },
                ["/solutions/parking-pro/whats-new.md", "What’s new​"],
                ["/solutions/parking-pro/tutorials.md", "Tutorials"],
                ["/solutions/parking-pro/limits.md", "Limits"],
                ["/solutions/parking-pro/changelog.md", "Change log​"],
              ],
            },
          ],
        },
        {
          title: "Trust Center",
          collapsable: true,
          children: [
            ["/trust-center/", "Overview"],
            ["/trust-center/supported-clients/", "Supported Clients"],
            ["/trust-center/authentication-single-sign-on/", "Authentication & Single Sign On"],
            ["/trust-center/communication-network-security/", "Communication & Network Security"],
            ["/trust-center/infrastructure-services/", "Infrastructure Services"],
            ["/trust-center/microsoft-graph-permissions/", "Microsoft Graph Permissions"],
            ["/trust-center/data-management-practices/", "Data Management Practices"],
            ["/trust-center/secure-development/", "Secure Development"],
            ["/trust-center/privacy-and-compliance/", "Privacy and Compliance"],
            ["/trust-center/security-policy/", "Security Policy"],
            ["/trust-center/classification-labels/", "Classification Labels"],
          ],
        },
        {
          title: "Architecture & Security",
          collapsable: true,
          children: [
            ["/architecture-security/overview/", "Overview"],
            ["/architecture-security/admin-center/", "Admin Center"],
            ["/architecture-security/bookingroom-pro/", "BookingRoom Pro"],
            ["/architecture-security/calendar-pro/", "Calendar Pro"],
            ["/architecture-security/parking-pro/", "Parking Pro"],
            ["/architecture-security/company-communicator-pro/", "Company Communicator Pro"],
            ["/architecture-security/contact-pro/", "Contact Pro"],
            ["/architecture-security/distribution-list-pro/", "Distribution List Pro"],
            ["/architecture-security/keepass-pro/", "Keepass Pro"],
            ["/architecture-security/map-pro/", "Map Pro"],
            ["/architecture-security/image-pro/", "Image Pro"],
            ["/architecture-security/gantt-chart-pro/", "Gantt Chart Pro"],
            ["/architecture-security/metaoffice-pro/", "MetaOffice Pro"],
            ["/architecture-security/gpt-pro/", "GPT Pro"],
            ["/architecture-security/green-center/", "Green Center"],
          ],
        },
      ],
    },
  },

  plugins: {
    "@vuepress/plugin-back-to-top": true,
    "@vuepress/plugin-medium-zoom": true,
    "@vuepress/active-header-links": true,
    "@vuepress/register-components": true,
  },
};
