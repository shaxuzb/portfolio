// Content sourced from Mahmud's CV and his Figma portfolio files, in English, Russian and Uzbek.
// Every section reads from this file; translatable fields are `L` = { en, ru, uz }.

import { l, type L } from "@/lib/i18n"

export const profile = {
  name: l("Mahmud Namazov", "Махмуд Намазов", "Mahmud Namazov"),
  firstName: l("Mahmud", "Махмуд", "Mahmud"),
  initial: l("N.", "Н.", "N."),
  role: l("Product Designer", "Продуктовый дизайнер", "Product dizayner"),
  focus: l("SaaS · CRM · ERP · Web & Mobile", "SaaS · CRM · ERP · Веб и мобайл", "SaaS · CRM · ERP · Veb va mobil"),
  location: l("Tashkent, Uzbekistan", "Ташкент, Узбекистан", "Toshkent, O‘zbekiston"),
  timezone: "Asia/Tashkent",
  timezoneLabel: "UTC+5",
  availability: l("Open to product design roles", "Открыт к предложениям", "Yangi takliflarga ochiqman"),
  email: "mahmudnamazov2006@gmail.com",
  phone: "+998 91 088 29 07",
  telegram: "mvhsww",
  intro: l(
    "Product designer with almost four years in B2B SaaS. I design CRM, ERP and mobile products end-to-end — from the spec to screens developers can actually ship.",
    "Продуктовый дизайнер с почти 4-летним опытом в B2B SaaS. Веду CRM, ERP и мобильные продукты end-to-end — от ТЗ до макетов, которые реально выпустить.",
    "B2B SaaS sohasida qariyb 4 yillik tajribaga ega product dizayner. CRM, ERP va mobil mahsulotlarni boshidan oxirigacha — texnik topshiriqdan dasturchilar chiqara oladigan ekranlargacha loyihalayman.",
  ),
  about: [
    l(
      "I lead design for two business products, on web and mobile: an ecosystem for real-estate developers and a SaaS for managing construction. I built the company's first design system from scratch.",
      "Веду два бизнес-продукта на вебе и мобайле: экосистему для девелоперов недвижимости и SaaS для управления строительством. С нуля создал первую дизайн-систему компании.",
      "Veb va mobilda ikkita biznes-mahsulot dizaynini olib boraman: ko‘chmas mulk developerlari uchun ekotizim va qurilishni boshqarish uchun SaaS. Kompaniyaning birinchi dizayn-tizimini noldan yaratdim.",
    ),
    l(
      "I work inside the product team. I read the spec, work through edge cases and every user role, and hand off layouts that can really be built — then stay with the feature through sprints until it reaches production intact.",
      "Работаю внутри продуктовой команды: читаю ТЗ, прорабатываю edge cases и все роли пользователей, отдаю в разработку макеты, которые реально можно реализовать, — и сопровождаю их в спринтах до продакшена.",
      "Mahsulot jamoasi ichida ishlayman: texnik topshiriqni o‘qiyman, edge case’lar va barcha foydalanuvchi rollarini ishlab chiqaman, amalda yig‘sa bo‘ladigan maketlarni topshiraman — va ularni sprintlarda production’gacha kuzatib boraman.",
    ),
  ],
}

export const stats: { value: number; prefix: string; suffix: L; label: L }[] = [
  { value: 4, prefix: "~", suffix: l(" yrs", " года", " yil"), label: l("Designing B2B SaaS products", "В дизайне B2B SaaS-продуктов", "B2B SaaS mahsulotlar dizaynida") },
  { value: 10, prefix: "", suffix: l("", "", ""), label: l("Products across web and mobile", "Продуктов на вебе и мобайле", "Veb va mobildagi mahsulotlar") },
  { value: 380, prefix: "", suffix: l("+", "+", "+"), label: l("Mobile screens designed for iOS & Android", "Мобильных экранов для iOS и Android", "iOS va Android uchun mobil ekranlar") },
  { value: 16, prefix: "", suffix: l("", "", ""), label: l("Modules in the UYQUR construction ERP", "Модулей в строительной ERP UYQUR", "UYQUR qurilish ERP tizimidagi modullar") },
]

export type Shot = { src: string; w: number; h: number; caption: L }

export type Project = {
  slug: string
  name: string
  kind: "saas" | "mobile" | "web"
  category: L
  title: L
  year: L
  role: L
  platform: L
  scope: L
  summary: L
  description: L
  highlights: L[]
  tags: string[]
  accent: string
  featured?: boolean
  cover: Shot
  gallery: Shot[]
}

const present = l("present", "н.в.", "hozir")
const since = (y: string) => l(`${y} — ${present.en}`, `${y} — ${present.ru}`, `${y} — ${present.uz}`)
const cover = (dir: string, name: string): Shot => ({
  src: `/work/${dir}/overview.webp`,
  w: 2400,
  h: 1350,
  caption: l(`${name} — overview`, `${name} — обзор`, `${name} — umumiy ko‘rinish`),
})
const shot = (src: string, w: number, h: number, caption: L): Shot => ({ src, w, h, caption })
const designer = l("Product Designer", "Продуктовый дизайнер", "Product dizayner")
const iosAndroid = l("iOS & Android", "iOS и Android", "iOS va Android")
const webApp = l("Web app", "Веб-приложение", "Veb-ilova")
const webMobile = l("Web & mobile", "Веб и мобайл", "Veb va mobil")

export const projects: Project[] = [
  {
    slug: "uyqur",
    name: "UYQUR",
    kind: "saas",
    category: l("SaaS · Construction ERP", "SaaS · Строительная ERP", "SaaS · Qurilish ERP"),
    title: l(
      "All-in-one platform for construction companies",
      "Единая платформа для строительных компаний",
      "Qurilish kompaniyalari uchun yagona platforma",
    ),
    year: since("2024"),
    role: designer,
    platform: webApp,
    scope: l("16 modules · AI assistant", "16 модулей · ИИ-ассистент", "16 modul · AI yordamchi"),
    summary: l(
      "Estimates, supply and tenders, cash, warehouse, works and analytics for construction companies — in one web platform.",
      "Сметы, снабжение и тендеры, касса, склад, работы и аналитика для строительных компаний — в одной веб-платформе.",
      "Smetalar, ta’minot va tenderlar, kassa, ombor, ishlar va analitika — qurilish kompaniyalari uchun bitta veb-platformada.",
    ),
    description: l(
      "UYQUR is a SaaS for managing construction projects. I own the product design end-to-end on web and mobile, turning dense business requirements into interfaces that people in very different roles — site managers, accountants, supply, owners — can work in every day. Each module is worked through for every role and edge case before it goes to development.",
      "UYQUR — SaaS для управления строительными проектами. Веду дизайн продукта end-to-end на вебе и мобайле: превращаю сложные бизнес-требования в интерфейсы, в которых каждый день работают люди с очень разными ролями — прорабы, бухгалтеры, снабжение, владельцы. Каждый модуль прорабатываю под все роли и edge cases до передачи в разработку.",
      "UYQUR — qurilish loyihalarini boshqarish uchun SaaS. Veb va mobilda mahsulot dizaynini boshidan oxirigacha olib boraman: murakkab biznes-talablarni turli roldagi odamlar — prorablar, buxgalterlar, ta’minotchilar, egalar — har kuni ishlaydigan interfeyslarga aylantiraman. Har bir modulni ishlab chiqishga berishdan oldin barcha rollar va edge case’lar bo‘yicha ishlab chiqaman.",
    ),
    highlights: [
      l(
        "Translated complex business requirements into clear interfaces for multi-role teams",
        "Перевёл сложные бизнес-требования в понятные интерфейсы для многоролевых команд",
        "Murakkab biznes-talablarni ko‘p rolli jamoalar uchun tushunarli interfeyslarga aylantirdim",
      ),
      l(
        "Designed 16 modules: projects, estimates, supply & tenders, cash, warehouse, contracts and more",
        "Спроектировал 16 модулей: проекты, сметы, снабжение и тендеры, касса, склад, договоры и другие",
        "16 ta modulni loyihaladim: loyihalar, smetalar, ta’minot va tenderlar, kassa, ombor, shartnomalar va boshqalar",
      ),
      l("Nura — an AI assistant built into the product", "Nura — ИИ-ассистент внутри продукта", "Nura — mahsulot ichidagi AI yordamchi"),
      l(
        "Moved web scenarios to mobile with the same logic, so the product works from a phone",
        "Перенёс веб-сценарии на мобайл с единой логикой — с продуктом можно работать с телефона",
        "Veb-ssenariylarni yagona mantiq bilan mobilga ko‘chirdim — mahsulot bilan telefondan ishlash mumkin",
      ),
    ],
    tags: ["Web app", "ERP", "Dashboards", "AI"],
    accent: "#6F7CFF",
    featured: true,
    cover: cover("uyqur", "UYQUR"),
    gallery: [
      shot("/work/uyqur/02-dashboards.webp", 1800, 3988, l("Dashboards", "Дашборды", "Dashboardlar")),
      shot("/work/uyqur/03-projects.webp", 2400, 1662, l("Projects", "Проекты", "Loyihalar")),
      shot("/work/uyqur/07-finance.webp", 2400, 3262, l("Cash & finance", "Касса и финансы", "Kassa va moliya")),
      shot("/work/uyqur/13-ai.webp", 2400, 2582, l("Nura AI assistant", "ИИ-ассистент Nura", "Nura AI yordamchi")),
    ],
  },
  {
    slug: "uysot-crm",
    name: "UYSOT CRM",
    kind: "saas",
    category: l("SaaS · Real-estate CRM", "SaaS · CRM для недвижимости", "SaaS · Ko‘chmas mulk CRM"),
    title: l("Sales CRM for real-estate developers", "CRM продаж для девелоперов", "Developerlar uchun savdo CRM tizimi"),
    year: since("2023"),
    role: designer,
    platform: webApp,
    scope: l("Pipeline · Automation · AI agents", "Воронка · Автоматизация · ИИ-агенты", "Voronka · Avtomatlashtirish · AI agentlar"),
    summary: l(
      "Lead pipeline, call scripts, automation and AI agents that talk to clients — the sales core of the UYSOT ecosystem.",
      "Воронка лидов, скрипты звонков, автоматизация и ИИ-агенты, которые общаются с клиентами, — ядро продаж экосистемы UYSOT.",
      "Lidlar voronkasi, qo‘ng‘iroq skriptlari, avtomatlashtirish va mijozlar bilan gaplashadigan AI agentlar — UYSOT ekotizimining savdo yadrosi.",
    ),
    description: l(
      "UYSOT is a software ecosystem for real-estate developers. I design its CRM alongside the mobile app and marketplace, keeping one UX approach across every product. The CRM interfaces were made consistent with the LUNAR design system I built from scratch, so new screens are assembled faster.",
      "UYSOT — экосистема ПО для девелоперов недвижимости. Параллельно веду дизайн CRM, мобильного приложения и маркетплейса, сохраняя единый подход к UX во всех продуктах. Благодаря дизайн-системе LUNAR, которую я создал с нуля, интерфейсы CRM стали единообразными, а новые экраны собираются быстрее.",
      "UYSOT — ko‘chmas mulk developerlari uchun dasturiy ekotizim. CRM, mobil ilova va marketpleys dizaynini parallel olib boraman va barcha mahsulotlarda yagona UX yondashuvini saqlayman. Noldan yaratgan LUNAR dizayn-tizimim tufayli CRM interfeyslari yagona ko‘rinishga keldi, yangi ekranlar esa tezroq yig‘iladi.",
    ),
    highlights: [
      l(
        "Leads pipeline and a lead card that holds the full client history",
        "Воронка лидов и карточка лида со всей историей клиента",
        "Lidlar voronkasi va mijozning to‘liq tarixini saqlaydigan lid kartasi",
      ),
      l(
        "No-code automation builder for routing and follow-ups",
        "No-code конструктор автоматизаций для распределения и follow-up",
        "Taqsimlash va follow-up uchun no-code avtomatlashtirish konstruktori",
      ),
      l(
        "Call scripts, call-center widget and office meeting recording",
        "Скрипты звонков, виджет колл-центра и запись встреч в офисе",
        "Qo‘ng‘iroq skriptlari, call-markaz vidjeti va ofisdagi uchrashuvlarni yozib olish",
      ),
      l(
        "Uysot AI agents that answer and qualify clients",
        "ИИ-агенты Uysot AI, которые отвечают и квалифицируют клиентов",
        "Mijozlarga javob beradigan va ularni saralaydigan Uysot AI agentlari",
      ),
    ],
    tags: ["Web app", "CRM", "Automation", "AI"],
    accent: "#2FBF71",
    featured: true,
    cover: cover("uysotcrm", "UYSOT CRM"),
    gallery: [
      shot("/work/uysotcrm/01-pipeline.webp", 2400, 1664, l("Leads pipeline", "Воронка лидов", "Lidlar voronkasi")),
      shot("/work/uysotcrm/02-leadcard.webp", 2400, 1579, l("Lead card", "Карточка лида", "Lid kartasi")),
      shot("/work/uysotcrm/07-ai.webp", 2400, 2494, l("Uysot AI", "Uysot AI", "Uysot AI")),
    ],
  },
  {
    slug: "uyim",
    name: "UYIM",
    kind: "mobile",
    category: l("Mobile app · Property owners", "Мобильное приложение · Владельцы квартир", "Mobil ilova · Kvartira egalari"),
    title: l("The apartment buyer's app", "Приложение для покупателей квартир", "Kvartira xaridorlari uchun ilova"),
    year: since("2023"),
    role: designer,
    platform: iosAndroid,
    scope: l("130 screens", "130 экранов", "130 ta ekran"),
    summary: l(
      "Pay instalments, manage contracts, follow construction progress, resell the apartment and design its interior with AI.",
      "Оплата рассрочки, договоры, ход строительства, перепродажа квартиры и дизайн интерьера с помощью ИИ.",
      "Muddatli to‘lov, shartnomalar, qurilish jarayoni, kvartirani qayta sotish va AI yordamida interyer dizayni.",
    ),
    description: l(
      "UYIM is the buyer-facing app of the UYSOT ecosystem. The home screen puts the amount due, stories and quick actions up front; around it sit payments, contracts, cards, live construction progress, market price, resale, new buildings and an AI interior designer. Every flow ships with its states — paid, overdue, failed, in two languages.",
      "UYIM — приложение экосистемы UYSOT для покупателей. На главном экране — сумма к оплате, сторис и быстрые действия; вокруг — платежи, договоры, карты, ход строительства в реальном времени, рыночная стоимость, перепродажа, новостройки и ИИ-дизайн интерьера. Каждый сценарий передаётся со всеми состояниями — оплачено, просрочено, ошибка — на двух языках.",
      "UYIM — UYSOT ekotizimining xaridorlar uchun ilovasi. Bosh ekranda to‘lov summasi, storislar va tezkor amallar; atrofida — to‘lovlar, shartnomalar, kartalar, jonli qurilish jarayoni, bozor narxi, qayta sotish, yangi binolar va AI interyer dizayni. Har bir ssenariy barcha holatlari bilan — to‘langan, kechikkan, xatolik — ikki tilda topshiriladi.",
    ),
    highlights: [
      l(
        "Instalment payments with clear due, paid and failed states",
        "Оплата рассрочки с понятными состояниями: к оплате, оплачено, ошибка",
        "To‘lanishi kerak, to‘langan va xatolik holatlari aniq ko‘rinadigan muddatli to‘lovlar",
      ),
      l(
        "Live construction progress with camera feed and photo reports",
        "Ход строительства в реальном времени: камера и фотоотчёты",
        "Kamera va fotohisobotlar bilan jonli qurilish jarayoni",
      ),
      l(
        "Resale and market-price tracking for the buyer's apartment",
        "Перепродажа и отслеживание рыночной стоимости квартиры",
        "Kvartirani qayta sotish va bozor narxini kuzatish",
      ),
      l(
        "AI interior design that generates room variants and a renovation estimate",
        "ИИ-дизайн интерьера: варианты комнат и смета на ремонт",
        "AI interyer dizayni: xona variantlari va ta’mirlash smetasi",
      ),
    ],
    tags: ["iOS", "Android", "Fintech", "AI"],
    accent: "#2E9BFF",
    featured: true,
    cover: cover("uyim", "UYIM"),
    gallery: [
      shot("/work/uyim/02-home.webp", 2400, 1824, l("Home & notifications", "Главная и уведомления", "Bosh sahifa va bildirishnomalar")),
      shot("/work/uyim/04-payments.webp", 2400, 1675, l("Payments", "Платежи", "To‘lovlar")),
      shot("/work/uyim/08-construction.webp", 2400, 922, l("Construction progress", "Ход строительства", "Qurilish jarayoni")),
      shot("/work/uyim/12-ai.webp", 2400, 824, l("AI interior design", "ИИ-дизайн интерьера", "AI interyer dizayni")),
      shot("/work/uyim/01-signin.webp", 2400, 694, l("Sign-in & onboarding", "Вход и онбординг", "Kirish va onboarding")),
    ],
  },
  {
    slug: "driver-five",
    name: "Driver Five",
    kind: "mobile",
    category: l("Mobile app · Taxi drivers", "Мобильное приложение · Водители такси", "Mobil ilova · Taksi haydovchilari"),
    title: l("Driver app for a taxi company", "Приложение водителя для таксопарка", "Taksi kompaniyasi uchun haydovchi ilovasi"),
    year: l("Nov 2025 — Jun 2026", "Ноя 2025 — Июн 2026", "Noy 2025 — Iyun 2026"),
    role: l("Product Designer · Contract", "Продуктовый дизайнер · Контракт", "Product dizayner · Shartnoma"),
    platform: iosAndroid,
    scope: l("170+ screens · Light & Dark", "170+ экранов · Светлая и тёмная темы", "170+ ekran · Yorug‘ va qorong‘i"),
    summary: l(
      "Going online, accepting orders, the trip from pickup to drop-off, earnings and profile — in one clear scenario.",
      "Выход на линию, приём заказа, поездка от подачи до высадки, заработок и профиль — в одном понятном сценарии.",
      "Liniyaga chiqish, buyurtma qabul qilish, yo‘lovchini olishdan tushirishgacha bo‘lgan safar, daromad va profil — bitta tushunarli ssenariyda.",
    ),
    description: l(
      "Designed from zero: a mobile app for taxi drivers that covers onboarding with document checks, going online, new orders, pickup and waiting, the trip and payment, the order feed, wallet and tariffs, and earnings history. I prepared interactive prototypes so the team could validate the scenarios before development started.",
      "Спроектировал с нуля мобильное приложение водителя такси: онбординг с проверкой документов, выход на линию, новые заказы, подача и ожидание, поездка и оплата, лента заказов, кошелёк и тарифы, история заработка. Подготовил интерактивные прототипы — команда проверила сценарии до начала разработки.",
      "Taksi haydovchilari uchun mobil ilovani noldan loyihaladim: hujjatlarni tekshirish bilan onboarding, liniyaga chiqish, yangi buyurtmalar, yo‘lovchini olish va kutish, safar va to‘lov, buyurtmalar lentasi, hamyon va tariflar, daromad tarixi. Interaktiv prototiplar tayyorladim — jamoa ssenariylarni ishlab chiqish boshlanishidan oldin tekshirdi.",
    ),
    highlights: [
      l(
        "One continuous flow from going online to drop-off and payment",
        "Единый сценарий от выхода на линию до высадки и оплаты",
        "Liniyaga chiqishdan yo‘lovchini tushirish va to‘lovgacha yagona ssenariy",
      ),
      l(
        "Onboarding with document upload and verification",
        "Онбординг с загрузкой и проверкой документов",
        "Hujjatlarni yuklash va tekshirish bilan onboarding",
      ),
      l(
        "Earnings, wallet and tariffs drivers can read at a glance",
        "Заработок, кошелёк и тарифы, понятные с первого взгляда",
        "Bir qarashda tushunarli daromad, hamyon va tariflar",
      ),
      l(
        "Interactive prototypes used to test scenarios before development",
        "Интерактивные прототипы для проверки сценариев до разработки",
        "Ssenariylarni ishlab chiqishdan oldin tekshirish uchun interaktiv prototiplar",
      ),
    ],
    tags: ["iOS", "Android", "Light & Dark", "Prototyping"],
    accent: "#8B6CFF",
    featured: true,
    cover: cover("driver", "Driver Five"),
    gallery: [
      shot("/work/driver/03-online.webp", 2400, 1879, l("Going online & new orders", "Выход на линию и новые заказы", "Liniyaga chiqish va yangi buyurtmalar")),
      shot("/work/driver/05-trip.webp", 2400, 2873, l("Trip & payment", "Поездка и оплата", "Safar va to‘lov")),
      shot("/work/driver/09-earnings.webp", 2400, 2530, l("Earnings & history", "Заработок и история", "Daromad va tarix")),
    ],
  },
  {
    slug: "uysot-dashboard",
    name: "UYSOT Dashboard",
    kind: "saas",
    category: l("SaaS · Analytics", "SaaS · Аналитика", "SaaS · Analitika"),
    title: l(
      "Customizable sales & marketing dashboards",
      "Настраиваемые дашборды продаж и маркетинга",
      "Sozlanadigan savdo va marketing dashboardlari",
    ),
    year: since("2023"),
    role: designer,
    platform: webMobile,
    scope: l("Widget library · Funnels", "Библиотека виджетов · Воронки", "Vidjetlar kutubxonasi · Voronkalar"),
    summary: l(
      "Sales and marketing dashboards for real-estate developers, assembled from a responsive widget library.",
      "Дашборды продаж и маркетинга для девелоперов, собранные из адаптивной библиотеки виджетов.",
      "Developerlar uchun moslashuvchan vidjetlar kutubxonasidan yig‘iladigan savdo va marketing dashboardlari.",
    ),
    description: l(
      "Managers build their own dashboard pages from a library of widgets — KPIs, funnels, campaign breakdowns and conversion trends. The widgets are designed once and adapt to any grid size and to mobile.",
      "Менеджеры сами собирают страницы дашбордов из библиотеки виджетов — KPI, воронки, разбивка по кампаниям и динамика конверсии. Виджеты спроектированы один раз и адаптируются к любой сетке и к мобайлу.",
      "Menejerlar dashboard sahifalarini vidjetlar kutubxonasidan o‘zlari yig‘adi — KPI, voronkalar, kampaniyalar kesimi va konversiya dinamikasi. Vidjetlar bir marta loyihalangan va istalgan to‘r o‘lchamiga hamda mobilga moslashadi.",
    ),
    highlights: [
      l(
        "Sales dashboards with KPIs, funnels and conversion over time",
        "Дашборды продаж: KPI, воронки и динамика конверсии",
        "Savdo dashboardlari: KPI, voronkalar va konversiya dinamikasi",
      ),
      l(
        "Editable dashboard pages managers assemble themselves",
        "Редактируемые страницы, которые менеджеры собирают сами",
        "Menejerlar o‘zlari yig‘adigan tahrirlanuvchi sahifalar",
      ),
      l(
        "Responsive widget library that scales from desktop to mobile",
        "Адаптивная библиотека виджетов — от десктопа до мобайла",
        "Desktopdan mobilgacha moslashuvchan vidjetlar kutubxonasi",
      ),
    ],
    tags: ["Web app", "Analytics", "Widgets"],
    accent: "#34C38F",
    cover: cover("dashboard", "UYSOT Dashboard"),
    gallery: [
      shot("/work/dashboard/01-sales.webp", 2400, 1808, l("Sales dashboards", "Дашборды продаж", "Savdo dashboardlari")),
      shot("/work/dashboard/04-widgets.webp", 2400, 1961, l("Widget library", "Библиотека виджетов", "Vidjetlar kutubxonasi")),
    ],
  },
  {
    slug: "water-x",
    name: "Water X",
    kind: "mobile",
    category: l("Mobile apps · Water delivery", "Мобильные приложения · Доставка воды", "Mobil ilovalar · Suv yetkazib berish"),
    title: l(
      "Client and courier apps for water delivery",
      "Клиентское и курьерское приложения для доставки воды",
      "Suv yetkazib berish uchun mijoz va kuryer ilovalari",
    ),
    year: l("2026", "2026", "2026"),
    role: l("Product Designer · Contract (SUV OL)", "Продуктовый дизайнер · Контракт (SUV OL)", "Product dizayner · Shartnoma (SUV OL)"),
    platform: iosAndroid,
    scope: l("2 apps · 50+ screens", "2 приложения · 50+ экранов", "2 ta ilova · 50+ ekran"),
    summary: l(
      "Two connected apps designed in a month — an order moves from checkout to delivery inside one system.",
      "Два связанных приложения за месяц — заказ проходит путь от оформления до доставки в одной системе.",
      "Bir oyda loyihalangan ikkita bog‘langan ilova — buyurtma rasmiylashtirishdan yetkazib berishgacha bitta tizimda o‘tadi.",
    ),
    description: l(
      "A water delivery service with a client app for ordering and a courier app for orders, clients and promotions. I linked the two scenarios so order statuses match on both sides, and handed both apps to development with every screen state ready.",
      "Сервис доставки воды: клиентское приложение для заказа и курьерское — для заказов, клиентов и акций. Связал сценарии клиента и курьера, чтобы статусы заказа совпадали на обеих сторонах, и передал оба приложения в разработку с готовыми состояниями экранов.",
      "Suv yetkazib berish xizmati: buyurtma berish uchun mijoz ilovasi va buyurtmalar, mijozlar hamda aksiyalar uchun kuryer ilovasi. Mijoz va kuryer ssenariylarini bog‘ladim — buyurtma statuslari ikkala tomonda bir xil ko‘rinadi. Ikkala ilovani barcha ekran holatlari tayyor holda ishlab chiqishga topshirdim.",
    ),
    highlights: [
      l(
        "Client app: address, catalog, checkout and order tracking",
        "Клиент: адрес, каталог, оформление и отслеживание заказа",
        "Mijoz ilovasi: manzil, katalog, rasmiylashtirish va buyurtmani kuzatish",
      ),
      l(
        "Courier app: orders and delivery, clients, archive and promotions",
        "Курьер: заказы и доставка, клиенты, архив и акции",
        "Kuryer ilovasi: buyurtmalar va yetkazish, mijozlar, arxiv va aksiyalar",
      ),
      l(
        "Order statuses that stay in sync between client and courier",
        "Статусы заказа синхронизированы между клиентом и курьером",
        "Buyurtma statuslari mijoz va kuryer o‘rtasida sinxron",
      ),
      l(
        "Both apps designed in a month, handed off with complete states",
        "Оба приложения за месяц, переданы со всеми состояниями",
        "Ikkala ilova bir oyda loyihalandi va barcha holatlari bilan topshirildi",
      ),
    ],
    tags: ["iOS", "Android", "Delivery"],
    accent: "#3D8BFF",
    cover: cover("waterx", "Water X"),
    gallery: [
      shot("/work/waterx/client-catalog.webp", 2400, 989, l("Client · Catalog & checkout", "Клиент · Каталог и оформление", "Mijoz · Katalog va rasmiylashtirish")),
      shot("/work/waterx/client-tracking.webp", 2400, 920, l("Client · Orders & tracking", "Клиент · Заказы и отслеживание", "Mijoz · Buyurtmalar va kuzatish")),
      shot("/work/waterx/courier-orders.webp", 2400, 740, l("Courier · Orders & delivery", "Курьер · Заказы и доставка", "Kuryer · Buyurtmalar va yetkazish")),
    ],
  },
  {
    slug: "uysot-reports",
    name: "UYSOT Reports",
    kind: "saas",
    category: l("SaaS · Reporting", "SaaS · Отчётность", "SaaS · Hisobotlar"),
    title: l("No-code report builder for sales teams", "No-code конструктор отчётов для отделов продаж", "Savdo bo‘limlari uchun no-code hisobot konstruktori"),
    year: since("2023"),
    role: designer,
    platform: webApp,
    scope: l("Builder · Formulas · Plan vs. fact", "Конструктор · Формулы · План/факт", "Konstruktor · Formulalar · Reja/fakt"),
    summary: l(
      "Custom columns, filters, formulas and plan-vs-fact tracking — reports without asking a developer.",
      "Свои колонки, фильтры, формулы и план/факт — отчёты без помощи разработчика.",
      "O‘z ustunlari, filtrlar, formulalar va reja/fakt — dasturchisiz hisobotlar.",
    ),
    description: l(
      "Sales managers create their own reports: pick a data source, add columns and filters, write formulas and compare plan with fact per manager. The builder keeps a complex data model approachable for non-technical users.",
      "Менеджеры продаж сами создают отчёты: выбирают источник данных, добавляют колонки и фильтры, пишут формулы и сравнивают план с фактом по каждому менеджеру. Конструктор делает сложную модель данных понятной для нетехнических пользователей.",
      "Savdo menejerlari hisobotlarni o‘zlari yaratadi: ma’lumot manbasini tanlaydi, ustun va filtrlar qo‘shadi, formulalar yozadi va har bir menejer bo‘yicha rejani fakt bilan solishtiradi. Konstruktor murakkab ma’lumotlar modelini texnik bo‘lmagan foydalanuvchilar uchun tushunarli qiladi.",
    ),
    highlights: [
      l(
        "Column builder with data sources, measures and filters",
        "Конструктор колонок: источники данных, показатели и фильтры",
        "Ustunlar konstruktori: ma’lumot manbalari, ko‘rsatkichlar va filtrlar",
      ),
      l(
        "Formulas and grouping by manager or source",
        "Формулы и группировка по менеджеру или источнику",
        "Formulalar va menejer yoki manba bo‘yicha guruhlash",
      ),
      l("Plan vs. fact tables for sales teams", "Таблицы план/факт для отделов продаж", "Savdo bo‘limlari uchun reja/fakt jadvallari"),
    ],
    tags: ["Web app", "Reporting", "Tables"],
    accent: "#1FB5A0",
    cover: cover("reports", "UYSOT Reports"),
    gallery: [shot("/work/reports/02-builder.webp", 2400, 2168, l("Custom report builder", "Конструктор отчётов", "Hisobot konstruktori"))],
  },
  {
    slug: "jamal",
    name: "JAMAL.UZ",
    kind: "saas",
    category: l("Admin panel · Inventory & sales", "Админ-панель · Склад и продажи", "Admin panel · Ombor va savdo"),
    title: l(
      "Web and mobile admin for a trading business",
      "Веб- и мобильная админка для торговой компании",
      "Savdo kompaniyasi uchun veb va mobil admin panel",
    ),
    year: l("", "", ""),
    role: designer,
    platform: webMobile,
    scope: l("Light & Dark", "Светлая и тёмная темы", "Yorug‘ va qorong‘i mavzu"),
    summary: l(
      "Products, inventory counts, sales, reports and directories — on web and mobile, in light and dark.",
      "Товары, инвентаризация, продажи, отчёты и справочники — на вебе и мобайле, в светлой и тёмной темах.",
      "Mahsulotlar, inventarizatsiya, savdo, hisobotlar va ma’lumotnomalar — veb va mobilda, yorug‘ va qorong‘i mavzuda.",
    ),
    description: l(
      "An admin system for a trading company: product catalog and inventory, warehouses and suppliers, sales, clients and users, and reports — with dense data tables that stay readable in both themes and a mobile version for working on the go.",
      "Админ-система для торговой компании: каталог товаров и инвентаризация, склады и поставщики, продажи, клиенты и пользователи, отчёты. Плотные таблицы остаются читаемыми в обеих темах, а мобильная версия позволяет работать на ходу.",
      "Savdo kompaniyasi uchun admin tizim: mahsulotlar katalogi va inventarizatsiya, omborlar va yetkazib beruvchilar, savdo, mijozlar va foydalanuvchilar, hisobotlar. Zich jadvallar ikkala mavzuda ham o‘qilishi oson, mobil versiya esa yo‘lda ishlash imkonini beradi.",
    ),
    highlights: [
      l("Data-heavy tables for products, stock and sales", "Плотные таблицы товаров, остатков и продаж", "Mahsulotlar, qoldiqlar va savdo uchun zich jadvallar"),
      l(
        "Reports with filters across warehouses, suppliers and sellers",
        "Отчёты с фильтрами по складам, поставщикам и продавцам",
        "Omborlar, yetkazib beruvchilar va sotuvchilar bo‘yicha filtrli hisobotlar",
      ),
      l("Mobile app for checking stock on the go", "Мобильное приложение для проверки остатков на ходу", "Qoldiqlarni yo‘lda tekshirish uchun mobil ilova"),
    ],
    tags: ["Web", "Mobile", "Inventory"],
    accent: "#7A6BFF",
    cover: cover("jamal", "JAMAL.UZ"),
    gallery: [
      shot("/work/jamal/02-reports.webp", 2400, 1566, l("Reports", "Отчёты", "Hisobotlar")),
      shot("/work/jamal/04-sales.webp", 2400, 1269, l("Sales", "Продажи", "Savdo")),
    ],
  },
  {
    slug: "ticher",
    name: "TICHER",
    kind: "mobile",
    category: l("Mobile app · EdTech for parents", "Мобильное приложение · EdTech для родителей", "Mobil ilova · Ota-onalar uchun EdTech"),
    title: l("A school app for parents", "Школьное приложение для родителей", "Ota-onalar uchun maktab ilovasi"),
    year: l("", "", ""),
    role: designer,
    platform: iosAndroid,
    scope: l("30+ screens", "30+ экранов", "30+ ekran"),
    summary: l(
      "The child's test results, attendance, grades and behavior, reports, teacher chat, meetings and a premium plan.",
      "Результаты тестов ребёнка, посещаемость, оценки и поведение, отчёты, чат с учителем, встречи и премиум-тариф.",
      "Farzandning test natijalari, davomati, baholari va xulqi, hisobotlar, o‘qituvchi bilan chat, uchrashuvlar va premium tarif.",
    ),
    description: l(
      "TICHER keeps parents close to their child's school life: test results and ratings, activity and attendance, reports and parent–teacher meetings, chat and a premium subscription.",
      "TICHER помогает родителям быть ближе к школьной жизни ребёнка: результаты тестов и рейтинг, активность и посещаемость, отчёты и встречи с учителем, чат и премиум-подписка.",
      "TICHER ota-onalarni farzandining maktab hayotiga yaqinlashtiradi: test natijalari va reyting, faollik va davomat, hisobotlar va o‘qituvchi bilan uchrashuvlar, chat va premium obuna.",
    ),
    highlights: [
      l(
        "Test results and ratings parents understand at a glance",
        "Результаты тестов и рейтинг, понятные с первого взгляда",
        "Bir qarashda tushunarli test natijalari va reyting",
      ),
      l("Weekly and monthly activity statistics", "Статистика активности за неделю и месяц", "Haftalik va oylik faollik statistikasi"),
      l("Teacher chat, meetings and notifications", "Чат с учителем, встречи и уведомления", "O‘qituvchi bilan chat, uchrashuvlar va bildirishnomalar"),
    ],
    tags: ["iOS", "Android", "EdTech"],
    accent: "#2F7BFF",
    cover: cover("ticher", "TICHER"),
    gallery: [
      shot("/work/ticher/01-home.webp", 2400, 2109, l("Sign-in & home", "Вход и главная", "Kirish va bosh sahifa")),
      shot("/work/ticher/02-results.webp", 2400, 1053, l("Learning results", "Результаты обучения", "O‘qish natijalari")),
    ],
  },
  {
    slug: "base360",
    name: "Base360",
    kind: "web",
    category: l("Web · Landing page", "Веб · Лендинг", "Veb · Landing sahifa"),
    title: l(
      "Landing page and base360.ai improvement",
      "Лендинг и улучшение base360.ai",
      "Landing sahifa va base360.ai’ni yaxshilash",
    ),
    year: l("2026", "2026", "2026"),
    role: l("Product Designer · Test assignment", "Продуктовый дизайнер · Тестовое задание", "Product dizayner · Test topshiriq"),
    platform: l("Desktop 1440 · Tablet 810 · Mobile 390", "Десктоп 1440 · Планшет 810 · Мобайл 390", "Desktop 1440 · Planshet 810 · Mobil 390"),
    scope: l("12 screens · 32 components", "12 экранов · 32 компонента", "12 ekran · 32 komponent"),
    summary: l(
      "A responsive landing page from a brief, plus a redesign proposal for base360.ai — in light and dark.",
      "Адаптивный лендинг по ТЗ и предложения по редизайну base360.ai — в светлой и тёмной темах.",
      "Texnik topshiriq bo‘yicha moslashuvchan landing va base360.ai uchun redizayn takliflari — yorug‘ va qorong‘i mavzuda.",
    ),
    description: l(
      "A test assignment: a landing page designed from the brief across desktop, tablet and mobile, a case study improving the existing base360.ai, and the foundations and UI kit behind both — 32 components in light and dark modes.",
      "Тестовое задание: лендинг по ТЗ для десктопа, планшета и мобайла, кейс с улучшениями текущего base360.ai, а также foundations и UI kit — 32 компонента в светлой и тёмной темах.",
      "Test topshiriq: desktop, planshet va mobil uchun texnik topshiriq bo‘yicha landing, mavjud base360.ai’ni yaxshilash bo‘yicha keys, hamda ularning asosi — foundations va UI kit: yorug‘ va qorong‘i mavzudagi 32 ta komponent.",
    ),
    highlights: [
      l("Responsive layouts for 1440, 810 and 390", "Адаптивные макеты под 1440, 810 и 390", "1440, 810 va 390 uchun moslashuvchan maketlar"),
      l(
        "Case study with proposed improvements to base360.ai",
        "Кейс с предложениями по улучшению base360.ai",
        "base360.ai’ni yaxshilash bo‘yicha takliflar bilan keys",
      ),
      l(
        "Foundations and a 32-component UI kit in light and dark",
        "Foundations и UI kit из 32 компонентов в двух темах",
        "Ikki mavzudagi foundations va 32 komponentli UI kit",
      ),
    ],
    tags: ["Web", "Landing", "UI kit"],
    accent: "#8BE35F",
    cover: cover("base360", "Base360"),
    gallery: [
      shot("/work/base360/01-highlights.webp", 2400, 1535, l("Highlights", "Ключевые моменты", "Asosiy jihatlar")),
      shot("/work/base360/02-desktop.webp", 1800, 4417, l("Desktop · 1440", "Десктоп · 1440", "Desktop · 1440")),
      shot("/work/base360/05-case.webp", 1800, 4683, l("Case study", "Кейс", "Keys")),
      shot("/work/base360/06-foundations.webp", 1800, 2735, l("Foundations", "Foundations", "Foundations")),
    ],
  },
]

export const services: { title: L; body: L }[] = [
  {
    title: l("End-to-end product design", "Продуктовый дизайн end-to-end", "End-to-end product dizayn"),
    body: l(
      "From the spec to handoff on web and mobile — the team gets finished decisions, not loose screens.",
      "От ТЗ до передачи в разработку на вебе и мобайле — команда получает готовые решения, а не разрозненные экраны.",
      "Veb va mobilda texnik topshiriqdan ishlab chiqishga topshirishgacha — jamoa alohida ekranlar emas, tayyor yechimlar oladi.",
    ),
  },
  {
    title: l("Complex B2B interfaces", "Сложные B2B-интерфейсы", "Murakkab B2B interfeyslar"),
    body: l(
      "CRM, ERP, dashboards and dense tables made clear for users with very different roles.",
      "CRM, ERP, дашборды и сложные таблицы, понятные пользователям с самыми разными ролями.",
      "Turli roldagi foydalanuvchilar uchun tushunarli CRM, ERP, dashboardlar va murakkab jadvallar.",
    ),
  },
  {
    title: l("UX architecture", "UX-архитектура", "UX arxitektura"),
    body: l(
      "User flows, information architecture, wireframes and every edge case worked out before the UI.",
      "User flow, информационная архитектура, вайрфреймы и все edge cases — до визуального дизайна.",
      "User flow, axborot arxitekturasi, wireframe’lar va barcha edge case’lar — vizual dizayndan oldin.",
    ),
  },
  {
    title: l("Mobile apps", "Мобильные приложения", "Mobil ilovalar"),
    body: l(
      "iOS and Android products, including carrying web scenarios to mobile with the same logic.",
      "Продукты для iOS и Android, в том числе перенос веб-сценариев на мобайл с единой логикой.",
      "iOS va Android mahsulotlari, jumladan veb-ssenariylarni yagona mantiq bilan mobilga ko‘chirish.",
    ),
  },
  {
    title: l("Design systems", "Дизайн-системы", "Dizayn-tizimlar"),
    body: l(
      "Figma variables and tokens, components, Auto Layout, light and dark themes, documentation.",
      "Переменные и токены Figma, компоненты, Auto Layout, светлая и тёмная темы, документация.",
      "Figma o‘zgaruvchilari va tokenlari, komponentlar, Auto Layout, yorug‘ va qorong‘i mavzular, hujjatlar.",
    ),
  },
  {
    title: l("Prototyping", "Прототипирование", "Prototiplash"),
    body: l(
      "Interactive prototypes that let the team check scenarios before development starts.",
      "Интерактивные прототипы, чтобы команда проверила сценарии до начала разработки.",
      "Jamoa ssenariylarni ishlab chiqish boshlanishidan oldin tekshira oladigan interaktiv prototiplar.",
    ),
  },
]

export const principles: { title: L; body: L }[] = [
  {
    title: l("Start from the spec", "Начинаю с ТЗ", "Texnik topshiriqdan boshlayman"),
    body: l(
      "I read the requirements first and understand the business logic before drawing anything.",
      "Сначала читаю требования и разбираюсь в бизнес-логике — и только потом рисую.",
      "Avval talablarni o‘qib, biznes-mantiqni tushunaman — keyin chizishni boshlayman.",
    ),
  },
  {
    title: l("Every role, every edge case", "Все роли, все edge cases", "Barcha rollar, barcha edge case’lar"),
    body: l(
      "Multi-role scenarios and edge cases are designed up front — developers get fewer questions and less rework.",
      "Прорабатываю многоролевые сценарии и edge cases заранее — у разработчиков меньше вопросов и доработок.",
      "Ko‘p rolli ssenariylar va edge case’larni oldindan ishlab chiqaman — dasturchilarda savol va qayta ishlash kamroq bo‘ladi.",
    ),
  },
  {
    title: l("Buildable by design", "Макеты, которые можно собрать", "Yig‘sa bo‘ladigan maketlar"),
    body: l(
      "Layouts are handed off with every screen state ready, so they reach production without losses.",
      "Отдаю макеты со всеми состояниями экранов — они доходят до продакшена без потерь.",
      "Maketlarni barcha ekran holatlari bilan topshiraman — ular production’ga yo‘qotishlarsiz yetib boradi.",
    ),
  },
  {
    title: l("Review before release", "Ревью до релиза", "Relizdan oldin review"),
    body: l(
      "I set up a design review process so mistakes are found before development, not after release.",
      "Выстроил процесс дизайн-ревью — ошибки находятся до разработки, а не после релиза.",
      "Dizayn-review jarayonini yo‘lga qo‘ydim — xatolar relizdan keyin emas, ishlab chiqishdan oldin topiladi.",
    ),
  },
  {
    title: l("One UX across products", "Единый UX во всех продуктах", "Barcha mahsulotlarda yagona UX"),
    body: l(
      "CRM, mobile app and marketplace share one approach, so the whole ecosystem feels like one product.",
      "CRM, мобильное приложение и маркетплейс построены на одном подходе — экосистема ощущается как единый продукт.",
      "CRM, mobil ilova va marketpleys bitta yondashuvga asoslangan — butun ekotizim yagona mahsulotdek his qilinadi.",
    ),
  },
  {
    title: l("Inside the sprint", "Внутри спринта", "Sprint ichida"),
    body: l(
      "I work with PMs, POs and developers in sprints, from user flow and prototype to handoff and QA.",
      "Работаю в спринтах с PM, PO и разработчиками — от user flow и прототипов до передачи в разработку.",
      "PM, PO va dasturchilar bilan sprintlarda ishlayman — user flow va prototiplardan ishlab chiqishga topshirishgacha.",
    ),
  },
]

export const experience: { company: string; role: L; period: L; product: L; points: L[] }[] = [
  {
    company: "UYQUR",
    role: designer,
    period: l("Oct 2024 — present", "Окт 2024 — н.в.", "Okt 2024 — hozir"),
    product: l(
      "SaaS for managing construction projects",
      "SaaS для управления строительными проектами",
      "Qurilish loyihalarini boshqarish uchun SaaS",
    ),
    points: [
      l(
        "Lead product design end-to-end on web and mobile — from spec to handoff",
        "Веду дизайн продукта end-to-end на вебе и мобайле — от ТЗ до передачи в разработку",
        "Veb va mobilda mahsulot dizaynini boshidan oxirigacha olib boraman — texnik topshiriqdan ishlab chiqishga topshirishgacha",
      ),
      l(
        "Turned complex business requirements into interfaces that work for every user role",
        "Перевёл сложные бизнес-требования в интерфейсы, удобные для всех ролей",
        "Murakkab biznes-talablarni barcha rollar uchun qulay interfeyslarga aylantirdim",
      ),
      l("Carried web scenarios to mobile with the same logic", "Перенёс веб-сценарии на мобайл с единой логикой", "Veb-ssenariylarni yagona mantiq bilan mobilga ko‘chirdim"),
    ],
  },
  {
    company: "UYSOT",
    role: designer,
    period: l("Jan 2023 — present", "Янв 2023 — н.в.", "Yan 2023 — hozir"),
    product: l(
      "Software ecosystem for real-estate developers",
      "Экосистема ПО для девелоперов недвижимости",
      "Ko‘chmas mulk developerlari uchun dasturiy ekotizim",
    ),
    points: [
      l(
        "Built the LUNAR design system from scratch: tokens, light and dark themes, components, documentation",
        "С нуля создал дизайн-систему LUNAR: токены, светлая и тёмная темы, компоненты, документация",
        "LUNAR dizayn-tizimini noldan yaratdim: tokenlar, yorug‘ va qorong‘i mavzular, komponentlar, hujjatlar",
      ),
      l(
        "Introduced a design review process that catches mistakes before development",
        "Внедрил процесс дизайн-ревью — ошибки находятся до разработки",
        "Dizayn-review jarayonini joriy qildim — xatolar ishlab chiqishdan oldin topiladi",
      ),
      l(
        "Design the CRM, mobile app and marketplace with one UX approach",
        "Веду дизайн CRM, мобильного приложения и маркетплейса с единым подходом к UX",
        "CRM, mobil ilova va marketpleys dizaynini yagona UX yondashuvi bilan olib boraman",
      ),
    ],
  },
  {
    company: "Driver Five · SUV OL",
    role: l("UI/UX Designer", "UI/UX-дизайнер", "UI/UX dizayner"),
    period: l("Nov 2025 — Aug 2026", "Ноя 2025 — Авг 2026", "Noy 2025 — Avg 2026"),
    product: l(
      "Contract & freelance · taxi and water delivery",
      "Контракт и фриланс · такси и доставка воды",
      "Shartnoma va frilans · taksi va suv yetkazib berish",
    ),
    points: [
      l(
        "Designed a taxi driver app from zero, with interactive prototypes",
        "С нуля спроектировал приложение водителя такси с интерактивными прототипами",
        "Taksi haydovchisi ilovasini interaktiv prototiplar bilan noldan loyihaladim",
      ),
      l(
        "Designed two linked water-delivery apps — client and courier — in a month",
        "За месяц спроектировал два связанных приложения доставки воды — клиентское и курьерское",
        "Bir oyda suv yetkazib berish uchun ikkita bog‘langan ilovani — mijoz va kuryer — loyihaladim",
      ),
    ],
  },
]

export const skills: { group: L; items: L[] }[] = [
  {
    group: l("Design", "Дизайн", "Dizayn"),
    items: [
      l("Product design", "Продуктовый дизайн", "Product dizayn"),
      l("UX / UI", "UX / UI", "UX / UI"),
      l("User flows", "User flow", "User flow"),
      l("Information architecture", "Информационная архитектура", "Axborot arxitekturasi"),
      l("Wireframes", "Вайрфреймы", "Wireframe’lar"),
      l("Prototyping", "Прототипирование", "Prototiplash"),
    ],
  },
  {
    group: l("Domains", "Домены", "Sohalar"),
    items: [
      l("SaaS & B2B", "SaaS и B2B", "SaaS va B2B"),
      l("CRM / ERP", "CRM / ERP", "CRM / ERP"),
      l("Dashboards & complex tables", "Дашборды и сложные таблицы", "Dashboardlar va murakkab jadvallar"),
      l("Fintech", "Финтех", "Fintex"),
      l("AI features", "AI-функции", "AI funksiyalar"),
      l("iOS & Android", "iOS и Android", "iOS va Android"),
    ],
  },
  {
    group: l("Design systems", "Дизайн-системы", "Dizayn-tizimlar"),
    items: [
      l("Figma variables & tokens", "Переменные и токены Figma", "Figma o‘zgaruvchilari va tokenlari"),
      l("Components", "Компоненты", "Komponentlar"),
      l("Auto Layout", "Auto Layout", "Auto Layout"),
      l("Light & dark themes", "Светлая и тёмная темы", "Yorug‘ va qorong‘i mavzular"),
      l("Documentation", "Документация", "Hujjatlar"),
    ],
  },
  {
    group: l("Teamwork", "Командная работа", "Jamoaviy ish"),
    items: [
      l("Sprints with PM & PO", "Спринты с PM и PO", "PM va PO bilan sprintlar"),
      l("Design reviews", "Дизайн-ревью", "Dizayn-review"),
      l("Developer handoff", "Передача в разработку", "Ishlab chiqishga topshirish"),
    ],
  },
]

export const languages: { name: L; level: L }[] = [
  { name: l("Uzbek", "Узбекский", "O‘zbek tili"), level: l("Native", "Родной", "Ona tili") },
  { name: l("Russian", "Русский", "Rus tili"), level: l("B2", "B2", "B2") },
  { name: l("English", "Английский", "Ingliz tili"), level: l("A2", "A2", "A2") },
]
