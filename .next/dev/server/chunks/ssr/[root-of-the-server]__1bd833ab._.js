module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Content sourced from Mahmud's CV and his Figma portfolio files. Every section reads from this file.
__turbopack_context__.s([
    "experience",
    ()=>experience,
    "languages",
    ()=>languages,
    "principles",
    ()=>principles,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "services",
    ()=>services,
    "skills",
    ()=>skills,
    "stats",
    ()=>stats
]);
const profile = {
    name: "Mahmud Namazov",
    firstName: "Mahmud",
    role: "Product Designer",
    focus: "SaaS · CRM · ERP · Web & Mobile",
    location: "Tashkent, Uzbekistan",
    timezone: "Asia/Tashkent",
    timezoneLabel: "UTC+5",
    availability: "Open to product design roles",
    email: "mahmudnamazov2006@gmail.com",
    phone: "+998 91 088 29 07",
    telegram: "mvhsww",
    intro: "Product designer with almost four years in B2B SaaS. I design CRM, ERP and mobile products end-to-end — from the spec to screens developers can actually ship.",
    about: [
        "I lead design for two business products, on web and mobile: an ecosystem for real-estate developers and a SaaS for managing construction. I built the company's first design system from scratch.",
        "I work inside the product team. I read the spec, work through edge cases and every user role, and hand off layouts that can really be built — then stay with the feature through sprints until it reaches production intact."
    ]
};
const stats = [
    {
        value: 4,
        prefix: "~",
        suffix: " yrs",
        label: "Designing B2B SaaS products"
    },
    {
        value: 10,
        prefix: "",
        suffix: "",
        label: "Products across web and mobile"
    },
    {
        value: 380,
        prefix: "",
        suffix: "+",
        label: "Mobile screens designed for iOS & Android"
    },
    {
        value: 16,
        prefix: "",
        suffix: "",
        label: "Modules in the UYQUR construction ERP"
    }
];
const cover = (dir, caption)=>({
        src: `/work/${dir}/overview.webp`,
        w: 2400,
        h: 1350,
        caption
    });
const projects = [
    {
        slug: "uyqur",
        name: "UYQUR",
        kind: "saas",
        category: "SaaS · Construction ERP",
        title: "All-in-one platform for construction companies",
        year: "2024 — present",
        role: "Product Designer",
        platform: "Web app",
        scope: "16 modules · AI assistant",
        summary: "Estimates, supply and tenders, cash, warehouse, works and analytics for construction companies — in one web platform.",
        description: "UYQUR is a SaaS for managing construction projects. I own the product design end-to-end on web and mobile, turning dense business requirements into interfaces that people in very different roles — site managers, accountants, supply, owners — can work in every day. Each module is worked through for every role and edge case before it goes to development.",
        highlights: [
            "Translated complex business requirements into clear interfaces for multi-role teams",
            "Designed 16 modules: projects, estimates, supply & tenders, cash, warehouse, contracts and more",
            "Nura — an AI assistant built into the product",
            "Moved web scenarios to mobile with the same logic, so the product works from a phone"
        ],
        tags: [
            "Web app",
            "ERP",
            "Dashboards",
            "AI"
        ],
        accent: "#6F7CFF",
        featured: true,
        cover: cover("uyqur", "UYQUR — overview"),
        gallery: [
            {
                src: "/work/uyqur/02-dashboards.webp",
                w: 1800,
                h: 3988,
                caption: "Dashboards"
            },
            {
                src: "/work/uyqur/03-projects.webp",
                w: 2400,
                h: 1662,
                caption: "Projects"
            },
            {
                src: "/work/uyqur/07-finance.webp",
                w: 2400,
                h: 3262,
                caption: "Cash & finance"
            },
            {
                src: "/work/uyqur/13-ai.webp",
                w: 2400,
                h: 2582,
                caption: "Nura AI assistant"
            }
        ]
    },
    {
        slug: "uysot-crm",
        name: "UYSOT CRM",
        kind: "saas",
        category: "SaaS · Real-estate CRM",
        title: "Sales CRM for real-estate developers",
        year: "2023 — present",
        role: "Product Designer",
        platform: "Web app",
        scope: "Pipeline · Automation · AI agents",
        summary: "Lead pipeline, call scripts, automation and AI agents that talk to clients — the sales core of the UYSOT ecosystem.",
        description: "UYSOT is a software ecosystem for real-estate developers. I design its CRM alongside the mobile app and marketplace, keeping one UX approach across every product. The CRM interfaces were made consistent with the LUNAR design system I built from scratch, so new screens are assembled faster.",
        highlights: [
            "Leads pipeline and a lead card that holds the full client history",
            "No-code automation builder for routing and follow-ups",
            "Call scripts, call-center widget and office meeting recording",
            "Uysot AI agents that answer and qualify clients"
        ],
        tags: [
            "Web app",
            "CRM",
            "Automation",
            "AI"
        ],
        accent: "#2FBF71",
        featured: true,
        cover: cover("uysotcrm", "UYSOT CRM — overview"),
        gallery: [
            {
                src: "/work/uysotcrm/01-pipeline.webp",
                w: 2400,
                h: 1664,
                caption: "Leads pipeline"
            },
            {
                src: "/work/uysotcrm/02-leadcard.webp",
                w: 2400,
                h: 1579,
                caption: "Lead card"
            },
            {
                src: "/work/uysotcrm/07-ai.webp",
                w: 2400,
                h: 2494,
                caption: "Uysot AI"
            }
        ]
    },
    {
        slug: "uyim",
        name: "UYIM",
        kind: "mobile",
        category: "Mobile app · Property owners",
        title: "The apartment buyer's app",
        year: "2023 — present",
        role: "Product Designer",
        platform: "iOS & Android",
        scope: "130 screens",
        summary: "Pay instalments, manage contracts, follow construction progress, resell the apartment and design its interior with AI.",
        description: "UYIM is the buyer-facing app of the UYSOT ecosystem. The home screen puts the amount due, stories and quick actions up front; around it sit payments, contracts, cards, live construction progress, market price, resale, new buildings and an AI interior designer. Every flow ships with its states — paid, overdue, failed, in two languages.",
        highlights: [
            "Instalment payments with clear due, paid and failed states",
            "Live construction progress with camera feed and photo reports",
            "Resale and market-price tracking for the buyer's apartment",
            "AI interior design that generates room variants and a renovation estimate"
        ],
        tags: [
            "iOS",
            "Android",
            "Fintech",
            "AI"
        ],
        accent: "#2E9BFF",
        featured: true,
        cover: cover("uyim", "UYIM — overview"),
        gallery: [
            {
                src: "/work/uyim/02-home.webp",
                w: 2400,
                h: 1824,
                caption: "Home & notifications"
            },
            {
                src: "/work/uyim/04-payments.webp",
                w: 2400,
                h: 1675,
                caption: "Payments"
            },
            {
                src: "/work/uyim/08-construction.webp",
                w: 2400,
                h: 922,
                caption: "Construction progress"
            },
            {
                src: "/work/uyim/12-ai.webp",
                w: 2400,
                h: 824,
                caption: "AI interior design"
            },
            {
                src: "/work/uyim/01-signin.webp",
                w: 2400,
                h: 694,
                caption: "Sign-in & onboarding"
            }
        ]
    },
    {
        slug: "driver-five",
        name: "Driver Five",
        kind: "mobile",
        category: "Mobile app · Taxi drivers",
        title: "Driver app for a taxi company",
        year: "Nov 2025 — Jun 2026",
        role: "Product Designer · Contract",
        platform: "iOS & Android",
        scope: "170+ screens · Light & Dark",
        summary: "Going online, accepting orders, the trip from pickup to drop-off, earnings and profile — in one clear scenario.",
        description: "Designed from zero: a mobile app for taxi drivers that covers onboarding with document checks, going online, new orders, pickup and waiting, the trip and payment, the order feed, wallet and tariffs, and earnings history. I prepared interactive prototypes so the team could validate the scenarios before development started.",
        highlights: [
            "One continuous flow from going online to drop-off and payment",
            "Onboarding with document upload and verification",
            "Earnings, wallet and tariffs drivers can read at a glance",
            "Interactive prototypes used to test scenarios before development"
        ],
        tags: [
            "iOS",
            "Android",
            "Light & Dark",
            "Prototyping"
        ],
        accent: "#8B6CFF",
        featured: true,
        cover: cover("driver", "Driver Five — overview"),
        gallery: [
            {
                src: "/work/driver/03-online.webp",
                w: 2400,
                h: 1879,
                caption: "Going online & new orders"
            },
            {
                src: "/work/driver/05-trip.webp",
                w: 2400,
                h: 2873,
                caption: "Trip & payment"
            },
            {
                src: "/work/driver/09-earnings.webp",
                w: 2400,
                h: 2530,
                caption: "Earnings & history"
            }
        ]
    },
    {
        slug: "uysot-dashboard",
        name: "UYSOT Dashboard",
        kind: "saas",
        category: "SaaS · Analytics",
        title: "Customizable sales & marketing dashboards",
        year: "2023 — present",
        role: "Product Designer",
        platform: "Web & mobile",
        scope: "Widget library · Funnels",
        summary: "Sales and marketing dashboards for real-estate developers, assembled from a responsive widget library.",
        description: "Managers build their own dashboard pages from a library of widgets — KPIs, funnels, campaign breakdowns and conversion trends. The widgets are designed once and adapt to any grid size and to mobile.",
        highlights: [
            "Sales dashboards with KPIs, funnels and conversion over time",
            "Editable dashboard pages managers assemble themselves",
            "Responsive widget library that scales from desktop to mobile"
        ],
        tags: [
            "Web app",
            "Analytics",
            "Widgets"
        ],
        accent: "#34C38F",
        cover: cover("dashboard", "UYSOT Dashboard — overview"),
        gallery: [
            {
                src: "/work/dashboard/01-sales.webp",
                w: 2400,
                h: 1808,
                caption: "Sales dashboards"
            },
            {
                src: "/work/dashboard/04-widgets.webp",
                w: 2400,
                h: 1961,
                caption: "Widget library"
            }
        ]
    },
    {
        slug: "water-x",
        name: "Water X",
        kind: "mobile",
        category: "Mobile apps · Water delivery",
        title: "Client and courier apps for water delivery",
        year: "2026",
        role: "Product Designer · Contract (SUV OL)",
        platform: "iOS & Android",
        scope: "2 apps · 50+ screens",
        summary: "Two connected apps designed in a month — an order moves from checkout to delivery inside one system.",
        description: "A water delivery service with a client app for ordering and a courier app for orders, clients and promotions. I linked the two scenarios so order statuses match on both sides, and handed both apps to development with every screen state ready.",
        highlights: [
            "Client app: address, catalog, checkout and order tracking",
            "Courier app: orders and delivery, clients, archive and promotions",
            "Order statuses that stay in sync between client and courier",
            "Both apps designed in a month, handed off with complete states"
        ],
        tags: [
            "iOS",
            "Android",
            "Delivery"
        ],
        accent: "#3D8BFF",
        cover: cover("waterx", "Water X — overview"),
        gallery: [
            {
                src: "/work/waterx/client-catalog.webp",
                w: 2400,
                h: 989,
                caption: "Client · Catalog & checkout"
            },
            {
                src: "/work/waterx/client-tracking.webp",
                w: 2400,
                h: 920,
                caption: "Client · Orders & tracking"
            },
            {
                src: "/work/waterx/courier-orders.webp",
                w: 2400,
                h: 740,
                caption: "Courier · Orders & delivery"
            }
        ]
    },
    {
        slug: "uysot-reports",
        name: "UYSOT Reports",
        kind: "saas",
        category: "SaaS · Reporting",
        title: "No-code report builder for sales teams",
        year: "2023 — present",
        role: "Product Designer",
        platform: "Web app",
        scope: "Builder · Formulas · Plan vs. fact",
        summary: "Custom columns, filters, formulas and plan-vs-fact tracking — reports without asking a developer.",
        description: "Sales managers create their own reports: pick a data source, add columns and filters, write formulas and compare plan with fact per manager. The builder keeps a complex data model approachable for non-technical users.",
        highlights: [
            "Column builder with data sources, measures and filters",
            "Formulas and grouping by manager or source",
            "Plan vs. fact tables for sales teams"
        ],
        tags: [
            "Web app",
            "Reporting",
            "Tables"
        ],
        accent: "#1FB5A0",
        cover: cover("reports", "UYSOT Reports — overview"),
        gallery: [
            {
                src: "/work/reports/02-builder.webp",
                w: 2400,
                h: 2168,
                caption: "Custom report builder"
            }
        ]
    },
    {
        slug: "jamal",
        name: "JAMAL.UZ",
        kind: "saas",
        category: "Admin panel · Inventory & sales",
        title: "Web and mobile admin for a trading business",
        year: "",
        role: "Product Designer",
        platform: "Web & mobile",
        scope: "Light & Dark",
        summary: "Products, inventory counts, sales, reports and directories — on web and mobile, in light and dark.",
        description: "An admin system for a trading company: product catalog and inventory, warehouses and suppliers, sales, clients and users, and reports — with dense data tables that stay readable in both themes and a mobile version for working on the go.",
        highlights: [
            "Data-heavy tables for products, stock and sales",
            "Reports with filters across warehouses, suppliers and sellers",
            "Mobile app for checking stock on the go"
        ],
        tags: [
            "Web",
            "Mobile",
            "Inventory"
        ],
        accent: "#7A6BFF",
        cover: cover("jamal", "JAMAL.UZ — overview"),
        gallery: [
            {
                src: "/work/jamal/02-reports.webp",
                w: 2400,
                h: 1566,
                caption: "Reports"
            },
            {
                src: "/work/jamal/04-sales.webp",
                w: 2400,
                h: 1269,
                caption: "Sales"
            }
        ]
    },
    {
        slug: "ticher",
        name: "TICHER",
        kind: "mobile",
        category: "Mobile app · EdTech for parents",
        title: "A school app for parents",
        year: "",
        role: "Product Designer",
        platform: "iOS & Android",
        scope: "30+ screens",
        summary: "The child's test results, attendance, grades and behavior, reports, teacher chat, meetings and a premium plan.",
        description: "TICHER keeps parents close to their child's school life: test results and ratings, activity and attendance, reports and parent–teacher meetings, chat and a premium subscription.",
        highlights: [
            "Test results and ratings parents understand at a glance",
            "Weekly and monthly activity statistics",
            "Teacher chat, meetings and notifications"
        ],
        tags: [
            "iOS",
            "Android",
            "EdTech"
        ],
        accent: "#2F7BFF",
        cover: cover("ticher", "TICHER — overview"),
        gallery: [
            {
                src: "/work/ticher/01-home.webp",
                w: 2400,
                h: 2109,
                caption: "Sign-in & home"
            },
            {
                src: "/work/ticher/02-results.webp",
                w: 2400,
                h: 1053,
                caption: "Learning results"
            }
        ]
    },
    {
        slug: "base360",
        name: "Base360",
        kind: "web",
        category: "Web · Landing page",
        title: "Landing page and base360.ai improvement",
        year: "2026",
        role: "Product Designer · Test assignment",
        platform: "Desktop 1440 · Tablet 810 · Mobile 390",
        scope: "12 screens · 32 components",
        summary: "A responsive landing page from a brief, plus a redesign proposal for base360.ai — in light and dark.",
        description: "A test assignment: a landing page designed from the brief across desktop, tablet and mobile, a case study improving the existing base360.ai, and the foundations and UI kit behind both — 32 components in light and dark modes.",
        highlights: [
            "Responsive layouts for 1440, 810 and 390",
            "Case study with proposed improvements to base360.ai",
            "Foundations and a 32-component UI kit in light and dark"
        ],
        tags: [
            "Web",
            "Landing",
            "UI kit"
        ],
        accent: "#8BE35F",
        cover: cover("base360", "Base360 — overview"),
        gallery: [
            {
                src: "/work/base360/01-highlights.webp",
                w: 2400,
                h: 1535,
                caption: "Highlights"
            },
            {
                src: "/work/base360/02-desktop.webp",
                w: 1800,
                h: 4417,
                caption: "Desktop · 1440"
            },
            {
                src: "/work/base360/05-case.webp",
                w: 1800,
                h: 4683,
                caption: "Case study"
            },
            {
                src: "/work/base360/06-foundations.webp",
                w: 1800,
                h: 2735,
                caption: "Foundations"
            }
        ]
    }
];
const services = [
    {
        title: "End-to-end product design",
        body: "From the spec to handoff on web and mobile — the team gets finished decisions, not loose screens."
    },
    {
        title: "Complex B2B interfaces",
        body: "CRM, ERP, dashboards and dense tables made clear for users with very different roles."
    },
    {
        title: "UX architecture",
        body: "User flows, information architecture, wireframes and every edge case worked out before the UI."
    },
    {
        title: "Mobile apps",
        body: "iOS and Android products, including carrying web scenarios to mobile with the same logic."
    },
    {
        title: "Design systems",
        body: "Figma variables and tokens, components, Auto Layout, light and dark themes, documentation."
    },
    {
        title: "Prototyping",
        body: "Interactive prototypes that let the team check scenarios before development starts."
    }
];
const principles = [
    {
        title: "Start from the spec",
        body: "I read the requirements first and understand the business logic before drawing anything."
    },
    {
        title: "Every role, every edge case",
        body: "Multi-role scenarios and edge cases are designed up front — developers get fewer questions and less rework."
    },
    {
        title: "Buildable by design",
        body: "Layouts are handed off with every screen state ready, so they reach production without losses."
    },
    {
        title: "Review before release",
        body: "I set up a design review process so mistakes are found before development, not after release."
    },
    {
        title: "One UX across products",
        body: "CRM, mobile app and marketplace share one approach, so the whole ecosystem feels like one product."
    },
    {
        title: "Inside the sprint",
        body: "I work with PMs, POs and developers in sprints, from user flow and prototype to handoff and QA."
    }
];
const experience = [
    {
        company: "UYQUR",
        role: "Product Designer",
        period: "Oct 2024 — present",
        product: "SaaS for managing construction projects",
        points: [
            "Lead product design end-to-end on web and mobile — from spec to handoff",
            "Turned complex business requirements into interfaces that work for every user role",
            "Carried web scenarios to mobile with the same logic"
        ]
    },
    {
        company: "UYSOT",
        role: "Product Designer",
        period: "Jan 2023 — present",
        product: "Software ecosystem for real-estate developers",
        points: [
            "Built the LUNAR design system from scratch: tokens, light and dark themes, components, documentation",
            "Introduced a design review process that catches mistakes before development",
            "Design the CRM, mobile app and marketplace with one UX approach"
        ]
    },
    {
        company: "Driver Five · SUV OL",
        role: "UI/UX Designer",
        period: "Nov 2025 — Aug 2026",
        product: "Contract & freelance · taxi and water delivery",
        points: [
            "Designed a taxi driver app from zero, with interactive prototypes",
            "Designed two linked water-delivery apps — client and courier — in a month"
        ]
    }
];
const skills = [
    {
        group: "Design",
        items: [
            "Product design",
            "UX / UI",
            "User flows",
            "Information architecture",
            "Wireframes",
            "Prototyping"
        ]
    },
    {
        group: "Domains",
        items: [
            "SaaS & B2B",
            "CRM / ERP",
            "Dashboards & complex tables",
            "Fintech",
            "AI features",
            "iOS & Android"
        ]
    },
    {
        group: "Design systems",
        items: [
            "Figma variables & tokens",
            "Components",
            "Auto Layout",
            "Light & dark themes",
            "Documentation"
        ]
    },
    {
        group: "Teamwork",
        items: [
            "Sprints with PM & PO",
            "Design reviews",
            "Developer handoff"
        ]
    }
];
const languages = [
    {
        name: "Uzbek",
        level: "Native"
    },
    {
        name: "Russian",
        level: "B2"
    },
    {
        name: "English",
        level: "A2"
    }
];
}),
"[project]/components/navigation.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/navigation.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/navigation.tsx <module evaluation>", "default");
}),
"[project]/components/navigation.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/navigation.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/navigation.tsx", "default");
}),
"[project]/components/navigation.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/navigation.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/navigation.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/contact.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/contact.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/contact.tsx <module evaluation>", "default");
}),
"[project]/components/contact.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/contact.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/contact.tsx", "default");
}),
"[project]/components/contact.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/contact.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/contact.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/case-study.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/case-study.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/case-study.tsx <module evaluation>", "default");
}),
"[project]/components/case-study.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/case-study.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/case-study.tsx", "default");
}),
"[project]/components/case-study.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$case$2d$study$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/case-study.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$case$2d$study$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/case-study.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$case$2d$study$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/work/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/contact.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$case$2d$study$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/case-study.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
            slug: p.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) return {};
    return {
        title: `${project.name} — ${project.title}`,
        description: project.summary,
        openGraph: {
            images: [
                project.cover.src
            ]
        }
    };
}
async function WorkPage({ params }) {
    const { slug } = await params;
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].findIndex((p)=>p.slug === slug);
    if (index === -1) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/work/[slug]/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$case$2d$study$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                project: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"][index],
                next: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"][(index + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].length]
            }, void 0, false, {
                fileName: "[project]/app/work/[slug]/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/work/[slug]/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/work/[slug]/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/work/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/work/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1bd833ab._.js.map