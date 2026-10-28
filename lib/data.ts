// Content sourced from the Upwork profile. Edit here; every section reads from this file.

export const profile = {
  name: "Shax Achilov",
  shortName: "Shax",
  role: "React & React Native Developer",
  focus: "SaaS · ERP · CRM · Mobile",
  location: "Uzbekistan",
  timezone: "Asia/Tashkent",
  timezoneLabel: "UTC+5",
  availability: "Available for new projects",
  hours: "30+ hrs / week",
  upwork: "https://www.upwork.com/freelancers/~010901f3f9d39c8a86",
  // Add a public email to show a direct mail link next to Upwork.
  email: "",
  intro:
    "I build SaaS platforms, ERP systems, CRM applications, admin dashboards and React Native apps that solve real business problems.",
  about: [
    "Most of what I ship sits behind a login: the tools a business opens every morning to track its people, stock, money and customers. That work rewards clear thinking about workflows more than clever UI, and that is where I spend my attention.",
    "I have 3+ years of frontend experience across web and mobile, including mentoring developers at IT Park Uzbekistan. I like joining products that already exist, understanding the architecture, and extending it without starting over.",
  ],
}

export const stats = [
  { value: 211, suffix: "", label: "Field employees tracked daily on NST Control" },
  { value: 531, suffix: "", label: "Users managing debts on Qarz Daftar" },
  { value: 5, suffix: "", label: "Retail stores running on Daqiq ERP" },
  { value: 3, suffix: "+", label: "Years building web & mobile products" },
]

export type Project = {
  slug: string
  index: string
  name: string
  title: string
  category: string
  year: string
  role: string
  summary: string
  description: string
  highlights: string[]
  stack: string[]
  platforms: string[]
  metric?: { value: string; label: string }
  live?: string
  accent: string
  cover: string
  gallery: { src: string; w: number; h: number }[]
}

export const projects: Project[] = [
  {
    slug: "nst-control",
    index: "01",
    name: "NST Control",
    title: "Workforce tracking & field operations platform",
    category: "Field Operations · SaaS",
    year: "2026",
    role: "Mobile & Frontend Developer",
    summary:
      "A mobile app and management dashboard that replaces manual check-ins with live GPS, territory control and clear operational data.",
    description:
      "NST Control is a workforce tracking and field operations platform with a mobile app and management dashboard. I worked on GPS tracking, territory monitoring, employee activity history, offline data synchronization, dashboard interfaces, API integrations, and state management. The system helps managers monitor field employees, review work sessions, track movement, and replace manual check-ins with clear operational data.",
    highlights: [
      "GPS tracking with territory (geofence) monitoring",
      "Offline-first sync for unreliable field connectivity",
      "Employee activity history and work-session review",
      "Management dashboard backed by live API data",
    ],
    stack: ["React", "React Native", "TypeScript", "GPS", "Offline sync"],
    platforms: ["Web dashboard", "iOS", "Android"],
    metric: { value: "211", label: "field employees tracked daily" },
    live: "https://nstcontrol.richboy.uz",
    accent: "#4C8DFF",
    cover: "/work/nst-control/cover.webp",
    gallery: [{ src: "/work/nst-control/1.webp", w: 1600, h: 1200 }, { src: "/work/nst-control/2.webp", w: 1600, h: 1200 }, { src: "/work/nst-control/3.webp", w: 1600, h: 1200 }, { src: "/work/nst-control/4.webp", w: 1600, h: 1200 }, { src: "/work/nst-control/5.webp", w: 1600, h: 1200 }, { src: "/work/nst-control/6.webp", w: 1600, h: 1200 }, { src: "/work/nst-control/7.webp", w: 1600, h: 1200 }, { src: "/work/nst-control/8.webp", w: 1600, h: 1200 }],
  },
  {
    slug: "daqiq",
    index: "02",
    name: "Daqiq",
    title: "Retail ERP & business operations platform",
    category: "Retail ERP",
    year: "2026",
    role: "Web & Mobile Developer",
    summary:
      "Sales, stock, finance and staff in one connected system across web, mobile, the till and a Telegram Mini App.",
    description:
      "Daqiq is an ERP and business operations platform built for retail stores, warehouses, and sales teams. I worked across the web and mobile product, implementing finance dashboards, inventory workflows, product traceability, employee control, sales and purchasing flows, reporting, responsive UI, API integrations, state management, and mobile business views. The platform brings core operations into one connected ecosystem across web, mobile, and Telegram.",
    highlights: [
      "Finance dashboards: net profit, cash and stock on one screen",
      "Inventory, purchasing and product traceability workflows",
      "Employee control and role-based reporting",
      "One ecosystem across web, mobile and Telegram Mini App",
    ],
    stack: ["React", "Next.js", "React Native", "TypeScript"],
    platforms: ["Web", "Mobile", "Telegram Mini App"],
    metric: { value: "4 / 5", label: "companies / stores in production" },
    live: "https://daqiq.uz",
    accent: "#7C4DFF",
    cover: "/work/daqiq/cover.webp",
    gallery: [{ src: "/work/daqiq/1.webp", w: 1600, h: 1200 }, { src: "/work/daqiq/2.webp", w: 1600, h: 1200 }, { src: "/work/daqiq/3.webp", w: 1600, h: 1200 }, { src: "/work/daqiq/4.webp", w: 1600, h: 1200 }, { src: "/work/daqiq/5.webp", w: 1600, h: 1200 }, { src: "/work/daqiq/6.webp", w: 1600, h: 1200 }, { src: "/work/daqiq/7.webp", w: 1600, h: 1200 }, { src: "/work/daqiq/8.webp", w: 1600, h: 1200 }, { src: "/work/daqiq/9.webp", w: 1600, h: 1200 }],
  },
  {
    slug: "qarz-daftar",
    index: "03",
    name: "Qarz Daftar",
    title: "Debt & customer management platform",
    category: "Mobile · Fintech",
    year: "2026",
    role: "React Native Developer & Product / UI Designer",
    summary:
      "A mobile ledger that replaces paper debt books for small businesses, with payment flows, reports and automatic SMS reminders.",
    description:
      "Qarz Daftar is a mobile debt and customer management platform built for small businesses. I worked on the product experience and frontend implementation, including customer management, debt/payment workflows, reporting, SMS reminders, responsive UI states, and business logic integration. The goal was to replace manual debt tracking with a clear, scalable, production-ready mobile experience.",
    highlights: [
      "Product and UI design through to implementation",
      "Customer, debt and payment workflows",
      "SMS reminders that drive customer follow-ups",
      "Organization settings, security and plan limits",
    ],
    stack: ["React Native", "TypeScript", "REST API", "UX & UI"],
    platforms: ["iOS", "Android"],
    metric: { value: "531", label: "active users" },
    live: "https://qarzdaftar.rbsx.uz",
    accent: "#F08A5D",
    cover: "/work/qarz-daftar/cover.webp",
    gallery: [{ src: "/work/qarz-daftar/1.webp", w: 1000, h: 750 }, { src: "/work/qarz-daftar/2.webp", w: 1000, h: 750 }, { src: "/work/qarz-daftar/3.webp", w: 1000, h: 750 }, { src: "/work/qarz-daftar/4.webp", w: 1000, h: 750 }, { src: "/work/qarz-daftar/5.webp", w: 1000, h: 750 }, { src: "/work/qarz-daftar/6.webp", w: 1000, h: 750 }],
  },
  {
    slug: "baxt",
    index: "04",
    name: "Baxt Restaurant",
    title: "Online food ordering website",
    category: "Hospitality · Web",
    year: "2026",
    role: "Frontend Developer",
    summary:
      "Ordering site for a national-cuisine restaurant in Samarkand: 119+ dishes, search, filters, cart and three languages.",
    description:
      "Online ordering website for Baxt, a national cuisine restaurant in Samarkand. Customers browse 119+ dishes in 10 categories, search the menu, filter by price and dish type, and order through a built-in cart.",
    highlights: [
      "Responsive Next.js UI for phone and desktop",
      "Menu with categories, search, filters and combo deals",
      "Cart and order flow with user accounts",
      "Uzbek, Russian and English",
    ],
    stack: ["Next.js", "React", "Responsive Design"],
    platforms: ["Web"],
    metric: { value: "119+", label: "dishes across 10 categories" },
    live: "https://baxtrestoran.uz",
    accent: "#E5483A",
    cover: "/work/baxt/cover.webp",
    gallery: [{ src: "/work/baxt/1.webp", w: 1536, h: 736 }, { src: "/work/baxt/2.webp", w: 1536, h: 736 }, { src: "/work/baxt/3.webp", w: 1536, h: 736 }],
  },
]

export const services = [
  {
    title: "SaaS Development",
    body: "Business platforms, subscription products and web applications built to scale with the company using them.",
  },
  {
    title: "ERP & CRM Systems",
    body: "Business management, customer management, operational workflows and internal tools teams rely on daily.",
  },
  {
    title: "React Native Apps",
    body: "Cross-platform iOS and Android applications with React Native and Expo, including offline-first flows.",
  },
  {
    title: "Admin Dashboards",
    body: "Data tables, analytics, filtering, search, complex forms and role-based interfaces.",
  },
  {
    title: "Next.js Web Apps",
    body: "Modern websites and web applications with fast, responsive, accessible frontends.",
  },
  {
    title: "API Integration",
    body: "REST integrations, authentication flows, data fetching and reliable frontend–backend communication.",
  },
  {
    title: "Code Improvement",
    body: "Refactoring, bug fixing, performance work and extending existing applications without a rewrite.",
  },
]

export const principles = [
  {
    title: "Business first",
    body: "I understand the workflow and requirements before deciding how to implement them.",
  },
  {
    title: "Clean architecture",
    body: "Reusable components, TypeScript and consistent patterns that the next developer can follow.",
  },
  {
    title: "Every state handled",
    body: "Loading, empty, error, validation and edge cases are designed, not discovered in production.",
  },
  {
    title: "API-driven",
    body: "Interfaces connected to real backend services and real application data from day one.",
  },
  {
    title: "Responsive by default",
    body: "Layouts that hold up across the screens and devices your users actually have.",
  },
  {
    title: "Clear communication",
    body: "Progress updates, early clarification of requirements and blockers raised promptly.",
  },
]

export const experience = [
  {
    company: "Artel Electronics",
    role: "Software Developer",
  },
  {
    company: "IT Park Uzbekistan",
    role: "Frontend Development Mentor & Manager",
  },
  {
    company: "Microsoft IT Academy",
    role: "Frontend Developer",
  },
]

export const education = {
  school: "Tashkent University of Information Technologies",
  degree: "Bachelor of Computer Science — Computer Engineering",
  end: "2027",
}

export const stack = [
  { group: "Web", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Ant Design"] },
  { group: "Mobile", items: ["React Native", "Expo", "Offline sync", "GPS / Maps"] },
  { group: "Data & State", items: ["Redux Toolkit", "React Query", "REST APIs", "API Integration"] },
  { group: "Workflow", items: ["Figma", "Git", "GitHub", "Dashboards"] },
]

export const languages = [
  { name: "Uzbek", level: "Native" },
  { name: "English", level: "Conversational" },
  { name: "Russian", level: "Conversational" },
]
