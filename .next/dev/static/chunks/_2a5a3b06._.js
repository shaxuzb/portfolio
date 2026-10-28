(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "htmlLang",
    ()=>htmlLang,
    "isLocale",
    ()=>isLocale,
    "l",
    ()=>l,
    "localeNames",
    ()=>localeNames,
    "locales",
    ()=>locales,
    "ui",
    ()=>ui
]);
const locales = [
    "uz",
    "ru",
    "en"
];
const defaultLocale = "en";
const localeNames = {
    uz: "O‘zbekcha",
    ru: "Русский",
    en: "English"
};
const htmlLang = {
    uz: "uz",
    ru: "ru",
    en: "en"
};
const l = (en, ru, uz)=>({
        en,
        ru,
        uz
    });
const isLocale = (v)=>locales.includes(v);
const ui = {
    nav: {
        work: l("Work", "Проекты", "Loyihalar"),
        services: l("Services", "Услуги", "Xizmatlar"),
        about: l("About", "Обо мне", "Men haqimda"),
        contact: l("Contact", "Контакты", "Aloqa"),
        menu: l("Menu", "Меню", "Menyu"),
        close: l("Close", "Закрыть", "Yopish"),
        getInTouch: l("Get in touch", "Связаться", "Bog‘lanish"),
        city: l("Tashkent", "Ташкент", "Toshkent"),
        language: l("Language", "Язык", "Til")
    },
    hero: {
        headline: {
            en: [
                {
                    before: "Complex products,"
                },
                {
                    before: "made ",
                    em: "simple",
                    after: " to use."
                }
            ],
            ru: [
                {
                    before: "Сложные продукты,"
                },
                {
                    before: "понятные ",
                    em: "каждому."
                }
            ],
            uz: [
                {
                    before: "Murakkab mahsulotlar,"
                },
                {
                    em: "sodda",
                    after: " va tushunarli."
                }
            ]
        },
        intro: l("a product designer for SaaS, CRM and ERP — on web and mobile, from the spec to shipped screens.", "продуктовый дизайнер SaaS, CRM и ERP — веб и мобайл, от ТЗ до экранов в продакшене.", "SaaS, CRM va ERP bo‘yicha product dizayner — veb va mobil, texnik topshiriqdan tayyor ekranlargacha."),
        iAm: l("I’m", "Я", "Men"),
        selectedWork: l("Selected work", "Избранные проекты", "Tanlangan ishlar"),
        nowDesigning: l("Now designing", "Сейчас проектирую", "Hozir loyihalayapman")
    },
    marquee: {
        en: [
            "Product design",
            "SaaS",
            "User flows",
            "CRM",
            "Design systems",
            "ERP",
            "Prototyping",
            "Dashboards",
            "iOS & Android",
            "Edge cases"
        ],
        ru: [
            "Продуктовый дизайн",
            "SaaS",
            "User flow",
            "CRM",
            "Дизайн-системы",
            "ERP",
            "Прототипы",
            "Дашборды",
            "iOS и Android",
            "Edge cases"
        ],
        uz: [
            "Product dizayn",
            "SaaS",
            "User flow",
            "CRM",
            "Dizayn-tizimlar",
            "ERP",
            "Prototiplar",
            "Dashboardlar",
            "iOS va Android",
            "Edge case’lar"
        ]
    },
    work: {
        label: l("(01) Selected work", "(01) Избранные проекты", "(01) Tanlangan ishlar"),
        headline: {
            en: [
                {
                    before: "Products teams"
                },
                {
                    em: "work in",
                    after: " daily"
                }
            ],
            ru: [
                {
                    before: "Продукты, в которых"
                },
                {
                    em: "работают",
                    after: " каждый день"
                }
            ],
            uz: [
                {
                    before: "Jamoalar har kuni"
                },
                {
                    em: "ishlaydigan",
                    after: " mahsulotlar"
                }
            ]
        },
        intro: l("Real products for real-estate developers, construction companies, taxi drivers and schools — CRM, ERP, analytics and the mobile apps around them.", "Реальные продукты для девелоперов, строительных компаний, таксистов и школ — CRM, ERP, аналитика и мобильные приложения вокруг них.", "Developerlar, qurilish kompaniyalari, taksi haydovchilari va maktablar uchun real mahsulotlar — CRM, ERP, analitika va ular atrofidagi mobil ilovalar."),
        platform: l("Platform", "Платформа", "Platforma"),
        scope: l("Scope", "Объём", "Hajm"),
        viewCase: l("View case study", "Смотреть кейс", "Keysni ko‘rish"),
        more: {
            en: [
                {
                    before: "More ",
                    em: "work"
                }
            ],
            ru: [
                {
                    before: "Другие ",
                    em: "проекты"
                }
            ],
            uz: [
                {
                    before: "Boshqa ",
                    em: "loyihalar"
                }
            ]
        },
        filters: {
            all: l("All", "Все", "Barchasi"),
            saas: l("SaaS & CRM", "SaaS и CRM", "SaaS va CRM"),
            mobile: l("Mobile", "Мобайл", "Mobil"),
            web: l("Web", "Веб", "Veb")
        },
        filterLabel: l("Filter projects", "Фильтр проектов", "Loyihalarni saralash"),
        empty: l("More web work coming soon.", "Скоро здесь появятся новые веб-проекты.", "Tez orada yangi veb-loyihalar qo‘shiladi.")
    },
    services: {
        label: l("(02) Services", "(02) Услуги", "(02) Xizmatlar"),
        headline: {
            en: [
                {
                    before: "What I"
                },
                {
                    em: "do"
                }
            ],
            ru: [
                {
                    before: "Чем я"
                },
                {
                    em: "занимаюсь"
                }
            ],
            uz: [
                {
                    before: "Nima"
                },
                {
                    em: "qilaman"
                }
            ]
        },
        intro: l("New products from zero, or new modules inside a living product — designed with the team, not handed over the wall.", "Новые продукты с нуля или новые модули в живом продукте — вместе с командой, а не «через стену».", "Noldan yangi mahsulotlar yoki ishlab turgan mahsulotga yangi modullar — jamoadan alohida emas, u bilan birga."),
        approachLabel: l("(03) Approach", "(03) Подход", "(03) Yondashuv"),
        approachHeadline: {
            en: [
                {
                    before: "How the work ",
                    em: "gets done"
                }
            ],
            ru: [
                {
                    before: "Как я ",
                    em: "работаю"
                }
            ],
            uz: [
                {
                    before: "Qanday ",
                    em: "ishlayman"
                }
            ]
        }
    },
    about: {
        label: l("(04) About", "(04) Обо мне", "(04) Men haqimda"),
        headline: {
            en: [
                {
                    before: "I hand off layouts"
                },
                {
                    before: "that can ",
                    em: "really be built"
                },
                {
                    before: "— and stay until they ship."
                }
            ],
            ru: [
                {
                    before: "Отдаю макеты,"
                },
                {
                    before: "которые ",
                    em: "реально собрать,"
                },
                {
                    before: "— и веду их до релиза."
                }
            ],
            uz: [
                {
                    before: "Dasturchilar"
                },
                {
                    em: "haqiqatan yig‘a oladigan"
                },
                {
                    before: "maketlar topshiraman."
                }
            ]
        },
        designSystem: l("Design system", "Дизайн-система", "Dizayn-tizim"),
        lunarEm: l("— built from zero", "— с нуля", "— noldan"),
        lunarBody: l("Figma tokens, light and dark themes, components and documentation. CRM interfaces became consistent and new screens are assembled faster.", "Токены в Figma, светлая и тёмная темы, компоненты и документация. Интерфейсы CRM стали единообразными, а новые экраны собираются быстрее.", "Figma tokenlari, yorug‘ va qorong‘i mavzular, komponentlar va hujjatlar. CRM interfeyslari yagona ko‘rinishga keldi, yangi ekranlar esa tezroq yig‘iladi."),
        experience: l("Experience", "Опыт", "Tajriba")
    },
    contact: {
        headline: {
            en: [
                {
                    before: "Let’s design"
                },
                {
                    before: "it ",
                    em: "together."
                }
            ],
            ru: [
                {
                    before: "Давайте создадим"
                },
                {
                    em: "вместе."
                }
            ],
            uz: [
                {
                    before: "Keling, birga"
                },
                {
                    em: "yaratamiz."
                }
            ]
        },
        contact: l("Contact", "Контакты", "Aloqa"),
        work: l("Work", "Проекты", "Loyihalar"),
        localTime: l("Local time", "Местное время", "Mahalliy vaqt"),
        navigate: l("Navigate", "Навигация", "Navigatsiya"),
        backToTop: l("Back to top ↑", "Наверх ↑", "Yuqoriga ↑"),
        footerRole: l("Product Designer · Tashkent", "Продуктовый дизайнер · Ташкент", "Product dizayner · Toshkent")
    },
    case: {
        allWork: l("All work", "Все проекты", "Barcha ishlar"),
        role: l("Role", "Роль", "Rol"),
        platform: l("Platform", "Платформа", "Platforma"),
        scope: l("Scope", "Объём", "Hajm"),
        timeline: l("Timeline", "Сроки", "Muddat"),
        overview: l("Overview", "Обзор", "Umumiy ko‘rinish"),
        designed: l("What I designed", "Что я спроектировал", "Nimalarni loyihaladim"),
        next: l("Next project", "Следующий проект", "Keyingi loyiha")
    },
    cursor: {
        view: l("View", "Смотреть", "Ko‘rish"),
        viewCase: l("View case", "Кейс", "Keys"),
        next: l("Next", "Далее", "Keyingi"),
        sayHi: l("Say hi", "Написать", "Yozish")
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
// Content sourced from Mahmud's CV and his Figma portfolio files, in English, Russian and Uzbek.
// Every section reads from this file; translatable fields are `L` = { en, ru, uz }.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
const profile = {
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Mahmud Namazov", "Махмуд Намазов", "Mahmud Namazov"),
    firstName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Mahmud", "Махмуд", "Mahmud"),
    initial: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("N.", "Н.", "N."),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Product Designer", "Продуктовый дизайнер", "Product dizayner"),
    focus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("SaaS · CRM · ERP · Web & Mobile", "SaaS · CRM · ERP · Веб и мобайл", "SaaS · CRM · ERP · Veb va mobil"),
    location: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Tashkent, Uzbekistan", "Ташкент, Узбекистан", "Toshkent, O‘zbekiston"),
    timezone: "Asia/Tashkent",
    timezoneLabel: "UTC+5",
    availability: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Open to product design roles", "Открыт к предложениям", "Yangi takliflarga ochiqman"),
    email: "mahmudnamazov2006@gmail.com",
    phone: "+998 91 088 29 07",
    telegram: "mvhsww",
    intro: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Product designer with almost four years in B2B SaaS. I design CRM, ERP and mobile products end-to-end — from the spec to screens developers can actually ship.", "Продуктовый дизайнер с почти 4-летним опытом в B2B SaaS. Веду CRM, ERP и мобильные продукты end-to-end — от ТЗ до макетов, которые реально выпустить.", "B2B SaaS sohasida qariyb 4 yillik tajribaga ega product dizayner. CRM, ERP va mobil mahsulotlarni boshidan oxirigacha — texnik topshiriqdan dasturchilar chiqara oladigan ekranlargacha loyihalayman."),
    about: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("I lead design for two business products, on web and mobile: an ecosystem for real-estate developers and a SaaS for managing construction. I built the company's first design system from scratch.", "Веду два бизнес-продукта на вебе и мобайле: экосистему для девелоперов недвижимости и SaaS для управления строительством. С нуля создал первую дизайн-систему компании.", "Veb va mobilda ikkita biznes-mahsulot dizaynini olib boraman: ko‘chmas mulk developerlari uchun ekotizim va qurilishni boshqarish uchun SaaS. Kompaniyaning birinchi dizayn-tizimini noldan yaratdim."),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("I work inside the product team. I read the spec, work through edge cases and every user role, and hand off layouts that can really be built — then stay with the feature through sprints until it reaches production intact.", "Работаю внутри продуктовой команды: читаю ТЗ, прорабатываю edge cases и все роли пользователей, отдаю в разработку макеты, которые реально можно реализовать, — и сопровождаю их в спринтах до продакшена.", "Mahsulot jamoasi ichida ishlayman: texnik topshiriqni o‘qiyman, edge case’lar va barcha foydalanuvchi rollarini ishlab chiqaman, amalda yig‘sa bo‘ladigan maketlarni topshiraman — va ularni sprintlarda production’gacha kuzatib boraman.")
    ]
};
const stats = [
    {
        value: 4,
        prefix: "~",
        suffix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(" yrs", " года", " yil"),
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Designing B2B SaaS products", "В дизайне B2B SaaS-продуктов", "B2B SaaS mahsulotlar dizaynida")
    },
    {
        value: 10,
        prefix: "",
        suffix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("", "", ""),
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Products across web and mobile", "Продуктов на вебе и мобайле", "Veb va mobildagi mahsulotlar")
    },
    {
        value: 380,
        prefix: "",
        suffix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("+", "+", "+"),
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Mobile screens designed for iOS & Android", "Мобильных экранов для iOS и Android", "iOS va Android uchun mobil ekranlar")
    },
    {
        value: 16,
        prefix: "",
        suffix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("", "", ""),
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Modules in the UYQUR construction ERP", "Модулей в строительной ERP UYQUR", "UYQUR qurilish ERP tizimidagi modullar")
    }
];
const present = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("present", "н.в.", "hozir");
const since = (y)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(`${y} — ${present.en}`, `${y} — ${present.ru}`, `${y} — ${present.uz}`);
const cover = (dir, name)=>({
        src: `/work/${dir}/overview.webp`,
        w: 2400,
        h: 1350,
        caption: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(`${name} — overview`, `${name} — обзор`, `${name} — umumiy ko‘rinish`)
    });
const shot = (src, w, h, caption)=>({
        src,
        w,
        h,
        caption
    });
const designer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Product Designer", "Продуктовый дизайнер", "Product dizayner");
const iosAndroid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("iOS & Android", "iOS и Android", "iOS va Android");
const webApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Web app", "Веб-приложение", "Veb-ilova");
const webMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Web & mobile", "Веб и мобайл", "Veb va mobil");
const projects = [
    {
        slug: "uyqur",
        name: "UYQUR",
        kind: "saas",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("SaaS · Construction ERP", "SaaS · Строительная ERP", "SaaS · Qurilish ERP"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("All-in-one platform for construction companies", "Единая платформа для строительных компаний", "Qurilish kompaniyalari uchun yagona platforma"),
        year: since("2024"),
        role: designer,
        platform: webApp,
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("16 modules · AI assistant", "16 модулей · ИИ-ассистент", "16 modul · AI yordamchi"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Estimates, supply and tenders, cash, warehouse, works and analytics for construction companies — in one web platform.", "Сметы, снабжение и тендеры, касса, склад, работы и аналитика для строительных компаний — в одной веб-платформе.", "Smetalar, ta’minot va tenderlar, kassa, ombor, ishlar va analitika — qurilish kompaniyalari uchun bitta veb-platformada."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("UYQUR is a SaaS for managing construction projects. I own the product design end-to-end on web and mobile, turning dense business requirements into interfaces that people in very different roles — site managers, accountants, supply, owners — can work in every day. Each module is worked through for every role and edge case before it goes to development.", "UYQUR — SaaS для управления строительными проектами. Веду дизайн продукта end-to-end на вебе и мобайле: превращаю сложные бизнес-требования в интерфейсы, в которых каждый день работают люди с очень разными ролями — прорабы, бухгалтеры, снабжение, владельцы. Каждый модуль прорабатываю под все роли и edge cases до передачи в разработку.", "UYQUR — qurilish loyihalarini boshqarish uchun SaaS. Veb va mobilda mahsulot dizaynini boshidan oxirigacha olib boraman: murakkab biznes-talablarni turli roldagi odamlar — prorablar, buxgalterlar, ta’minotchilar, egalar — har kuni ishlaydigan interfeyslarga aylantiraman. Har bir modulni ishlab chiqishga berishdan oldin barcha rollar va edge case’lar bo‘yicha ishlab chiqaman."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Translated complex business requirements into clear interfaces for multi-role teams", "Перевёл сложные бизнес-требования в понятные интерфейсы для многоролевых команд", "Murakkab biznes-talablarni ko‘p rolli jamoalar uchun tushunarli interfeyslarga aylantirdim"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Designed 16 modules: projects, estimates, supply & tenders, cash, warehouse, contracts and more", "Спроектировал 16 модулей: проекты, сметы, снабжение и тендеры, касса, склад, договоры и другие", "16 ta modulni loyihaladim: loyihalar, smetalar, ta’minot va tenderlar, kassa, ombor, shartnomalar va boshqalar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Nura — an AI assistant built into the product", "Nura — ИИ-ассистент внутри продукта", "Nura — mahsulot ichidagi AI yordamchi"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Moved web scenarios to mobile with the same logic, so the product works from a phone", "Перенёс веб-сценарии на мобайл с единой логикой — с продуктом можно работать с телефона", "Veb-ssenariylarni yagona mantiq bilan mobilga ko‘chirdim — mahsulot bilan telefondan ishlash mumkin")
        ],
        tags: [
            "Web app",
            "ERP",
            "Dashboards",
            "AI"
        ],
        accent: "#6F7CFF",
        featured: true,
        cover: cover("uyqur", "UYQUR"),
        gallery: [
            shot("/work/uyqur/02-dashboards.webp", 1800, 3988, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Dashboards", "Дашборды", "Dashboardlar")),
            shot("/work/uyqur/03-projects.webp", 2400, 1662, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Projects", "Проекты", "Loyihalar")),
            shot("/work/uyqur/07-finance.webp", 2400, 3262, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Cash & finance", "Касса и финансы", "Kassa va moliya")),
            shot("/work/uyqur/13-ai.webp", 2400, 2582, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Nura AI assistant", "ИИ-ассистент Nura", "Nura AI yordamchi"))
        ]
    },
    {
        slug: "uysot-crm",
        name: "UYSOT CRM",
        kind: "saas",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("SaaS · Real-estate CRM", "SaaS · CRM для недвижимости", "SaaS · Ko‘chmas mulk CRM"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Sales CRM for real-estate developers", "CRM продаж для девелоперов", "Developerlar uchun savdo CRM tizimi"),
        year: since("2023"),
        role: designer,
        platform: webApp,
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Pipeline · Automation · AI agents", "Воронка · Автоматизация · ИИ-агенты", "Voronka · Avtomatlashtirish · AI agentlar"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Lead pipeline, call scripts, automation and AI agents that talk to clients — the sales core of the UYSOT ecosystem.", "Воронка лидов, скрипты звонков, автоматизация и ИИ-агенты, которые общаются с клиентами, — ядро продаж экосистемы UYSOT.", "Lidlar voronkasi, qo‘ng‘iroq skriptlari, avtomatlashtirish va mijozlar bilan gaplashadigan AI agentlar — UYSOT ekotizimining savdo yadrosi."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("UYSOT is a software ecosystem for real-estate developers. I design its CRM alongside the mobile app and marketplace, keeping one UX approach across every product. The CRM interfaces were made consistent with the LUNAR design system I built from scratch, so new screens are assembled faster.", "UYSOT — экосистема ПО для девелоперов недвижимости. Параллельно веду дизайн CRM, мобильного приложения и маркетплейса, сохраняя единый подход к UX во всех продуктах. Благодаря дизайн-системе LUNAR, которую я создал с нуля, интерфейсы CRM стали единообразными, а новые экраны собираются быстрее.", "UYSOT — ko‘chmas mulk developerlari uchun dasturiy ekotizim. CRM, mobil ilova va marketpleys dizaynini parallel olib boraman va barcha mahsulotlarda yagona UX yondashuvini saqlayman. Noldan yaratgan LUNAR dizayn-tizimim tufayli CRM interfeyslari yagona ko‘rinishga keldi, yangi ekranlar esa tezroq yig‘iladi."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Leads pipeline and a lead card that holds the full client history", "Воронка лидов и карточка лида со всей историей клиента", "Lidlar voronkasi va mijozning to‘liq tarixini saqlaydigan lid kartasi"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("No-code automation builder for routing and follow-ups", "No-code конструктор автоматизаций для распределения и follow-up", "Taqsimlash va follow-up uchun no-code avtomatlashtirish konstruktori"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Call scripts, call-center widget and office meeting recording", "Скрипты звонков, виджет колл-центра и запись встреч в офисе", "Qo‘ng‘iroq skriptlari, call-markaz vidjeti va ofisdagi uchrashuvlarni yozib olish"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Uysot AI agents that answer and qualify clients", "ИИ-агенты Uysot AI, которые отвечают и квалифицируют клиентов", "Mijozlarga javob beradigan va ularni saralaydigan Uysot AI agentlari")
        ],
        tags: [
            "Web app",
            "CRM",
            "Automation",
            "AI"
        ],
        accent: "#2FBF71",
        featured: true,
        cover: cover("uysotcrm", "UYSOT CRM"),
        gallery: [
            shot("/work/uysotcrm/01-pipeline.webp", 2400, 1664, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Leads pipeline", "Воронка лидов", "Lidlar voronkasi")),
            shot("/work/uysotcrm/02-leadcard.webp", 2400, 1579, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Lead card", "Карточка лида", "Lid kartasi")),
            shot("/work/uysotcrm/07-ai.webp", 2400, 2494, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Uysot AI", "Uysot AI", "Uysot AI"))
        ]
    },
    {
        slug: "uyim",
        name: "UYIM",
        kind: "mobile",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Mobile app · Property owners", "Мобильное приложение · Владельцы квартир", "Mobil ilova · Kvartira egalari"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("The apartment buyer's app", "Приложение для покупателей квартир", "Kvartira xaridorlari uchun ilova"),
        year: since("2023"),
        role: designer,
        platform: iosAndroid,
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("130 screens", "130 экранов", "130 ta ekran"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Pay instalments, manage contracts, follow construction progress, resell the apartment and design its interior with AI.", "Оплата рассрочки, договоры, ход строительства, перепродажа квартиры и дизайн интерьера с помощью ИИ.", "Muddatli to‘lov, shartnomalar, qurilish jarayoni, kvartirani qayta sotish va AI yordamida interyer dizayni."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("UYIM is the buyer-facing app of the UYSOT ecosystem. The home screen puts the amount due, stories and quick actions up front; around it sit payments, contracts, cards, live construction progress, market price, resale, new buildings and an AI interior designer. Every flow ships with its states — paid, overdue, failed, in two languages.", "UYIM — приложение экосистемы UYSOT для покупателей. На главном экране — сумма к оплате, сторис и быстрые действия; вокруг — платежи, договоры, карты, ход строительства в реальном времени, рыночная стоимость, перепродажа, новостройки и ИИ-дизайн интерьера. Каждый сценарий передаётся со всеми состояниями — оплачено, просрочено, ошибка — на двух языках.", "UYIM — UYSOT ekotizimining xaridorlar uchun ilovasi. Bosh ekranda to‘lov summasi, storislar va tezkor amallar; atrofida — to‘lovlar, shartnomalar, kartalar, jonli qurilish jarayoni, bozor narxi, qayta sotish, yangi binolar va AI interyer dizayni. Har bir ssenariy barcha holatlari bilan — to‘langan, kechikkan, xatolik — ikki tilda topshiriladi."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Instalment payments with clear due, paid and failed states", "Оплата рассрочки с понятными состояниями: к оплате, оплачено, ошибка", "To‘lanishi kerak, to‘langan va xatolik holatlari aniq ko‘rinadigan muddatli to‘lovlar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Live construction progress with camera feed and photo reports", "Ход строительства в реальном времени: камера и фотоотчёты", "Kamera va fotohisobotlar bilan jonli qurilish jarayoni"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Resale and market-price tracking for the buyer's apartment", "Перепродажа и отслеживание рыночной стоимости квартиры", "Kvartirani qayta sotish va bozor narxini kuzatish"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("AI interior design that generates room variants and a renovation estimate", "ИИ-дизайн интерьера: варианты комнат и смета на ремонт", "AI interyer dizayni: xona variantlari va ta’mirlash smetasi")
        ],
        tags: [
            "iOS",
            "Android",
            "Fintech",
            "AI"
        ],
        accent: "#2E9BFF",
        featured: true,
        cover: cover("uyim", "UYIM"),
        gallery: [
            shot("/work/uyim/02-home.webp", 2400, 1824, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Home & notifications", "Главная и уведомления", "Bosh sahifa va bildirishnomalar")),
            shot("/work/uyim/04-payments.webp", 2400, 1675, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Payments", "Платежи", "To‘lovlar")),
            shot("/work/uyim/08-construction.webp", 2400, 922, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Construction progress", "Ход строительства", "Qurilish jarayoni")),
            shot("/work/uyim/12-ai.webp", 2400, 824, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("AI interior design", "ИИ-дизайн интерьера", "AI interyer dizayni")),
            shot("/work/uyim/01-signin.webp", 2400, 694, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Sign-in & onboarding", "Вход и онбординг", "Kirish va onboarding"))
        ]
    },
    {
        slug: "driver-five",
        name: "Driver Five",
        kind: "mobile",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Mobile app · Taxi drivers", "Мобильное приложение · Водители такси", "Mobil ilova · Taksi haydovchilari"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Driver app for a taxi company", "Приложение водителя для таксопарка", "Taksi kompaniyasi uchun haydovchi ilovasi"),
        year: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Nov 2025 — Jun 2026", "Ноя 2025 — Июн 2026", "Noy 2025 — Iyun 2026"),
        role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Product Designer · Contract", "Продуктовый дизайнер · Контракт", "Product dizayner · Shartnoma"),
        platform: iosAndroid,
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("170+ screens · Light & Dark", "170+ экранов · Светлая и тёмная темы", "170+ ekran · Yorug‘ va qorong‘i"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Going online, accepting orders, the trip from pickup to drop-off, earnings and profile — in one clear scenario.", "Выход на линию, приём заказа, поездка от подачи до высадки, заработок и профиль — в одном понятном сценарии.", "Liniyaga chiqish, buyurtma qabul qilish, yo‘lovchini olishdan tushirishgacha bo‘lgan safar, daromad va profil — bitta tushunarli ssenariyda."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Designed from zero: a mobile app for taxi drivers that covers onboarding with document checks, going online, new orders, pickup and waiting, the trip and payment, the order feed, wallet and tariffs, and earnings history. I prepared interactive prototypes so the team could validate the scenarios before development started.", "Спроектировал с нуля мобильное приложение водителя такси: онбординг с проверкой документов, выход на линию, новые заказы, подача и ожидание, поездка и оплата, лента заказов, кошелёк и тарифы, история заработка. Подготовил интерактивные прототипы — команда проверила сценарии до начала разработки.", "Taksi haydovchilari uchun mobil ilovani noldan loyihaladim: hujjatlarni tekshirish bilan onboarding, liniyaga chiqish, yangi buyurtmalar, yo‘lovchini olish va kutish, safar va to‘lov, buyurtmalar lentasi, hamyon va tariflar, daromad tarixi. Interaktiv prototiplar tayyorladim — jamoa ssenariylarni ishlab chiqish boshlanishidan oldin tekshirdi."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("One continuous flow from going online to drop-off and payment", "Единый сценарий от выхода на линию до высадки и оплаты", "Liniyaga chiqishdan yo‘lovchini tushirish va to‘lovgacha yagona ssenariy"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Onboarding with document upload and verification", "Онбординг с загрузкой и проверкой документов", "Hujjatlarni yuklash va tekshirish bilan onboarding"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Earnings, wallet and tariffs drivers can read at a glance", "Заработок, кошелёк и тарифы, понятные с первого взгляда", "Bir qarashda tushunarli daromad, hamyon va tariflar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Interactive prototypes used to test scenarios before development", "Интерактивные прототипы для проверки сценариев до разработки", "Ssenariylarni ishlab chiqishdan oldin tekshirish uchun interaktiv prototiplar")
        ],
        tags: [
            "iOS",
            "Android",
            "Light & Dark",
            "Prototyping"
        ],
        accent: "#8B6CFF",
        featured: true,
        cover: cover("driver", "Driver Five"),
        gallery: [
            shot("/work/driver/03-online.webp", 2400, 1879, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Going online & new orders", "Выход на линию и новые заказы", "Liniyaga chiqish va yangi buyurtmalar")),
            shot("/work/driver/05-trip.webp", 2400, 2873, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Trip & payment", "Поездка и оплата", "Safar va to‘lov")),
            shot("/work/driver/09-earnings.webp", 2400, 2530, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Earnings & history", "Заработок и история", "Daromad va tarix"))
        ]
    },
    {
        slug: "uysot-dashboard",
        name: "UYSOT Dashboard",
        kind: "saas",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("SaaS · Analytics", "SaaS · Аналитика", "SaaS · Analitika"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Customizable sales & marketing dashboards", "Настраиваемые дашборды продаж и маркетинга", "Sozlanadigan savdo va marketing dashboardlari"),
        year: since("2023"),
        role: designer,
        platform: webMobile,
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Widget library · Funnels", "Библиотека виджетов · Воронки", "Vidjetlar kutubxonasi · Voronkalar"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Sales and marketing dashboards for real-estate developers, assembled from a responsive widget library.", "Дашборды продаж и маркетинга для девелоперов, собранные из адаптивной библиотеки виджетов.", "Developerlar uchun moslashuvchan vidjetlar kutubxonasidan yig‘iladigan savdo va marketing dashboardlari."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Managers build their own dashboard pages from a library of widgets — KPIs, funnels, campaign breakdowns and conversion trends. The widgets are designed once and adapt to any grid size and to mobile.", "Менеджеры сами собирают страницы дашбордов из библиотеки виджетов — KPI, воронки, разбивка по кампаниям и динамика конверсии. Виджеты спроектированы один раз и адаптируются к любой сетке и к мобайлу.", "Menejerlar dashboard sahifalarini vidjetlar kutubxonasidan o‘zlari yig‘adi — KPI, voronkalar, kampaniyalar kesimi va konversiya dinamikasi. Vidjetlar bir marta loyihalangan va istalgan to‘r o‘lchamiga hamda mobilga moslashadi."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Sales dashboards with KPIs, funnels and conversion over time", "Дашборды продаж: KPI, воронки и динамика конверсии", "Savdo dashboardlari: KPI, voronkalar va konversiya dinamikasi"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Editable dashboard pages managers assemble themselves", "Редактируемые страницы, которые менеджеры собирают сами", "Menejerlar o‘zlari yig‘adigan tahrirlanuvchi sahifalar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Responsive widget library that scales from desktop to mobile", "Адаптивная библиотека виджетов — от десктопа до мобайла", "Desktopdan mobilgacha moslashuvchan vidjetlar kutubxonasi")
        ],
        tags: [
            "Web app",
            "Analytics",
            "Widgets"
        ],
        accent: "#34C38F",
        cover: cover("dashboard", "UYSOT Dashboard"),
        gallery: [
            shot("/work/dashboard/01-sales.webp", 2400, 1808, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Sales dashboards", "Дашборды продаж", "Savdo dashboardlari")),
            shot("/work/dashboard/04-widgets.webp", 2400, 1961, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Widget library", "Библиотека виджетов", "Vidjetlar kutubxonasi"))
        ]
    },
    {
        slug: "water-x",
        name: "Water X",
        kind: "mobile",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Mobile apps · Water delivery", "Мобильные приложения · Доставка воды", "Mobil ilovalar · Suv yetkazib berish"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Client and courier apps for water delivery", "Клиентское и курьерское приложения для доставки воды", "Suv yetkazib berish uchun mijoz va kuryer ilovalari"),
        year: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("2026", "2026", "2026"),
        role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Product Designer · Contract (SUV OL)", "Продуктовый дизайнер · Контракт (SUV OL)", "Product dizayner · Shartnoma (SUV OL)"),
        platform: iosAndroid,
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("2 apps · 50+ screens", "2 приложения · 50+ экранов", "2 ta ilova · 50+ ekran"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Two connected apps designed in a month — an order moves from checkout to delivery inside one system.", "Два связанных приложения за месяц — заказ проходит путь от оформления до доставки в одной системе.", "Bir oyda loyihalangan ikkita bog‘langan ilova — buyurtma rasmiylashtirishdan yetkazib berishgacha bitta tizimda o‘tadi."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("A water delivery service with a client app for ordering and a courier app for orders, clients and promotions. I linked the two scenarios so order statuses match on both sides, and handed both apps to development with every screen state ready.", "Сервис доставки воды: клиентское приложение для заказа и курьерское — для заказов, клиентов и акций. Связал сценарии клиента и курьера, чтобы статусы заказа совпадали на обеих сторонах, и передал оба приложения в разработку с готовыми состояниями экранов.", "Suv yetkazib berish xizmati: buyurtma berish uchun mijoz ilovasi va buyurtmalar, mijozlar hamda aksiyalar uchun kuryer ilovasi. Mijoz va kuryer ssenariylarini bog‘ladim — buyurtma statuslari ikkala tomonda bir xil ko‘rinadi. Ikkala ilovani barcha ekran holatlari tayyor holda ishlab chiqishga topshirdim."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Client app: address, catalog, checkout and order tracking", "Клиент: адрес, каталог, оформление и отслеживание заказа", "Mijoz ilovasi: manzil, katalog, rasmiylashtirish va buyurtmani kuzatish"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Courier app: orders and delivery, clients, archive and promotions", "Курьер: заказы и доставка, клиенты, архив и акции", "Kuryer ilovasi: buyurtmalar va yetkazish, mijozlar, arxiv va aksiyalar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Order statuses that stay in sync between client and courier", "Статусы заказа синхронизированы между клиентом и курьером", "Buyurtma statuslari mijoz va kuryer o‘rtasida sinxron"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Both apps designed in a month, handed off with complete states", "Оба приложения за месяц, переданы со всеми состояниями", "Ikkala ilova bir oyda loyihalandi va barcha holatlari bilan topshirildi")
        ],
        tags: [
            "iOS",
            "Android",
            "Delivery"
        ],
        accent: "#3D8BFF",
        cover: cover("waterx", "Water X"),
        gallery: [
            shot("/work/waterx/client-catalog.webp", 2400, 989, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Client · Catalog & checkout", "Клиент · Каталог и оформление", "Mijoz · Katalog va rasmiylashtirish")),
            shot("/work/waterx/client-tracking.webp", 2400, 920, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Client · Orders & tracking", "Клиент · Заказы и отслеживание", "Mijoz · Buyurtmalar va kuzatish")),
            shot("/work/waterx/courier-orders.webp", 2400, 740, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Courier · Orders & delivery", "Курьер · Заказы и доставка", "Kuryer · Buyurtmalar va yetkazish"))
        ]
    },
    {
        slug: "uysot-reports",
        name: "UYSOT Reports",
        kind: "saas",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("SaaS · Reporting", "SaaS · Отчётность", "SaaS · Hisobotlar"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("No-code report builder for sales teams", "No-code конструктор отчётов для отделов продаж", "Savdo bo‘limlari uchun no-code hisobot konstruktori"),
        year: since("2023"),
        role: designer,
        platform: webApp,
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Builder · Formulas · Plan vs. fact", "Конструктор · Формулы · План/факт", "Konstruktor · Formulalar · Reja/fakt"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Custom columns, filters, formulas and plan-vs-fact tracking — reports without asking a developer.", "Свои колонки, фильтры, формулы и план/факт — отчёты без помощи разработчика.", "O‘z ustunlari, filtrlar, formulalar va reja/fakt — dasturchisiz hisobotlar."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Sales managers create their own reports: pick a data source, add columns and filters, write formulas and compare plan with fact per manager. The builder keeps a complex data model approachable for non-technical users.", "Менеджеры продаж сами создают отчёты: выбирают источник данных, добавляют колонки и фильтры, пишут формулы и сравнивают план с фактом по каждому менеджеру. Конструктор делает сложную модель данных понятной для нетехнических пользователей.", "Savdo menejerlari hisobotlarni o‘zlari yaratadi: ma’lumot manbasini tanlaydi, ustun va filtrlar qo‘shadi, formulalar yozadi va har bir menejer bo‘yicha rejani fakt bilan solishtiradi. Konstruktor murakkab ma’lumotlar modelini texnik bo‘lmagan foydalanuvchilar uchun tushunarli qiladi."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Column builder with data sources, measures and filters", "Конструктор колонок: источники данных, показатели и фильтры", "Ustunlar konstruktori: ma’lumot manbalari, ko‘rsatkichlar va filtrlar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Formulas and grouping by manager or source", "Формулы и группировка по менеджеру или источнику", "Formulalar va menejer yoki manba bo‘yicha guruhlash"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Plan vs. fact tables for sales teams", "Таблицы план/факт для отделов продаж", "Savdo bo‘limlari uchun reja/fakt jadvallari")
        ],
        tags: [
            "Web app",
            "Reporting",
            "Tables"
        ],
        accent: "#1FB5A0",
        cover: cover("reports", "UYSOT Reports"),
        gallery: [
            shot("/work/reports/02-builder.webp", 2400, 2168, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Custom report builder", "Конструктор отчётов", "Hisobot konstruktori"))
        ]
    },
    {
        slug: "jamal",
        name: "JAMAL.UZ",
        kind: "saas",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Admin panel · Inventory & sales", "Админ-панель · Склад и продажи", "Admin panel · Ombor va savdo"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Web and mobile admin for a trading business", "Веб- и мобильная админка для торговой компании", "Savdo kompaniyasi uchun veb va mobil admin panel"),
        year: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("", "", ""),
        role: designer,
        platform: webMobile,
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Light & Dark", "Светлая и тёмная темы", "Yorug‘ va qorong‘i mavzu"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Products, inventory counts, sales, reports and directories — on web and mobile, in light and dark.", "Товары, инвентаризация, продажи, отчёты и справочники — на вебе и мобайле, в светлой и тёмной темах.", "Mahsulotlar, inventarizatsiya, savdo, hisobotlar va ma’lumotnomalar — veb va mobilda, yorug‘ va qorong‘i mavzuda."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("An admin system for a trading company: product catalog and inventory, warehouses and suppliers, sales, clients and users, and reports — with dense data tables that stay readable in both themes and a mobile version for working on the go.", "Админ-система для торговой компании: каталог товаров и инвентаризация, склады и поставщики, продажи, клиенты и пользователи, отчёты. Плотные таблицы остаются читаемыми в обеих темах, а мобильная версия позволяет работать на ходу.", "Savdo kompaniyasi uchun admin tizim: mahsulotlar katalogi va inventarizatsiya, omborlar va yetkazib beruvchilar, savdo, mijozlar va foydalanuvchilar, hisobotlar. Zich jadvallar ikkala mavzuda ham o‘qilishi oson, mobil versiya esa yo‘lda ishlash imkonini beradi."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Data-heavy tables for products, stock and sales", "Плотные таблицы товаров, остатков и продаж", "Mahsulotlar, qoldiqlar va savdo uchun zich jadvallar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Reports with filters across warehouses, suppliers and sellers", "Отчёты с фильтрами по складам, поставщикам и продавцам", "Omborlar, yetkazib beruvchilar va sotuvchilar bo‘yicha filtrli hisobotlar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Mobile app for checking stock on the go", "Мобильное приложение для проверки остатков на ходу", "Qoldiqlarni yo‘lda tekshirish uchun mobil ilova")
        ],
        tags: [
            "Web",
            "Mobile",
            "Inventory"
        ],
        accent: "#7A6BFF",
        cover: cover("jamal", "JAMAL.UZ"),
        gallery: [
            shot("/work/jamal/02-reports.webp", 2400, 1566, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Reports", "Отчёты", "Hisobotlar")),
            shot("/work/jamal/04-sales.webp", 2400, 1269, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Sales", "Продажи", "Savdo"))
        ]
    },
    {
        slug: "ticher",
        name: "TICHER",
        kind: "mobile",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Mobile app · EdTech for parents", "Мобильное приложение · EdTech для родителей", "Mobil ilova · Ota-onalar uchun EdTech"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("A school app for parents", "Школьное приложение для родителей", "Ota-onalar uchun maktab ilovasi"),
        year: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("", "", ""),
        role: designer,
        platform: iosAndroid,
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("30+ screens", "30+ экранов", "30+ ekran"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("The child's test results, attendance, grades and behavior, reports, teacher chat, meetings and a premium plan.", "Результаты тестов ребёнка, посещаемость, оценки и поведение, отчёты, чат с учителем, встречи и премиум-тариф.", "Farzandning test natijalari, davomati, baholari va xulqi, hisobotlar, o‘qituvchi bilan chat, uchrashuvlar va premium tarif."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("TICHER keeps parents close to their child's school life: test results and ratings, activity and attendance, reports and parent–teacher meetings, chat and a premium subscription.", "TICHER помогает родителям быть ближе к школьной жизни ребёнка: результаты тестов и рейтинг, активность и посещаемость, отчёты и встречи с учителем, чат и премиум-подписка.", "TICHER ota-onalarni farzandining maktab hayotiga yaqinlashtiradi: test natijalari va reyting, faollik va davomat, hisobotlar va o‘qituvchi bilan uchrashuvlar, chat va premium obuna."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Test results and ratings parents understand at a glance", "Результаты тестов и рейтинг, понятные с первого взгляда", "Bir qarashda tushunarli test natijalari va reyting"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Weekly and monthly activity statistics", "Статистика активности за неделю и месяц", "Haftalik va oylik faollik statistikasi"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Teacher chat, meetings and notifications", "Чат с учителем, встречи и уведомления", "O‘qituvchi bilan chat, uchrashuvlar va bildirishnomalar")
        ],
        tags: [
            "iOS",
            "Android",
            "EdTech"
        ],
        accent: "#2F7BFF",
        cover: cover("ticher", "TICHER"),
        gallery: [
            shot("/work/ticher/01-home.webp", 2400, 2109, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Sign-in & home", "Вход и главная", "Kirish va bosh sahifa")),
            shot("/work/ticher/02-results.webp", 2400, 1053, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Learning results", "Результаты обучения", "O‘qish natijalari"))
        ]
    },
    {
        slug: "base360",
        name: "Base360",
        kind: "web",
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Web · Landing page", "Веб · Лендинг", "Veb · Landing sahifa"),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Landing page and base360.ai improvement", "Лендинг и улучшение base360.ai", "Landing sahifa va base360.ai’ni yaxshilash"),
        year: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("2026", "2026", "2026"),
        role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Product Designer · Test assignment", "Продуктовый дизайнер · Тестовое задание", "Product dizayner · Test topshiriq"),
        platform: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Desktop 1440 · Tablet 810 · Mobile 390", "Десктоп 1440 · Планшет 810 · Мобайл 390", "Desktop 1440 · Planshet 810 · Mobil 390"),
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("12 screens · 32 components", "12 экранов · 32 компонента", "12 ekran · 32 komponent"),
        summary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("A responsive landing page from a brief, plus a redesign proposal for base360.ai — in light and dark.", "Адаптивный лендинг по ТЗ и предложения по редизайну base360.ai — в светлой и тёмной темах.", "Texnik topshiriq bo‘yicha moslashuvchan landing va base360.ai uchun redizayn takliflari — yorug‘ va qorong‘i mavzuda."),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("A test assignment: a landing page designed from the brief across desktop, tablet and mobile, a case study improving the existing base360.ai, and the foundations and UI kit behind both — 32 components in light and dark modes.", "Тестовое задание: лендинг по ТЗ для десктопа, планшета и мобайла, кейс с улучшениями текущего base360.ai, а также foundations и UI kit — 32 компонента в светлой и тёмной темах.", "Test topshiriq: desktop, planshet va mobil uchun texnik topshiriq bo‘yicha landing, mavjud base360.ai’ni yaxshilash bo‘yicha keys, hamda ularning asosi — foundations va UI kit: yorug‘ va qorong‘i mavzudagi 32 ta komponent."),
        highlights: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Responsive layouts for 1440, 810 and 390", "Адаптивные макеты под 1440, 810 и 390", "1440, 810 va 390 uchun moslashuvchan maketlar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Case study with proposed improvements to base360.ai", "Кейс с предложениями по улучшению base360.ai", "base360.ai’ni yaxshilash bo‘yicha takliflar bilan keys"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Foundations and a 32-component UI kit in light and dark", "Foundations и UI kit из 32 компонентов в двух темах", "Ikki mavzudagi foundations va 32 komponentli UI kit")
        ],
        tags: [
            "Web",
            "Landing",
            "UI kit"
        ],
        accent: "#8BE35F",
        cover: cover("base360", "Base360"),
        gallery: [
            shot("/work/base360/01-highlights.webp", 2400, 1535, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Highlights", "Ключевые моменты", "Asosiy jihatlar")),
            shot("/work/base360/02-desktop.webp", 1800, 4417, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Desktop · 1440", "Десктоп · 1440", "Desktop · 1440")),
            shot("/work/base360/05-case.webp", 1800, 4683, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Case study", "Кейс", "Keys")),
            shot("/work/base360/06-foundations.webp", 1800, 2735, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Foundations", "Foundations", "Foundations"))
        ]
    }
];
const services = [
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("End-to-end product design", "Продуктовый дизайн end-to-end", "End-to-end product dizayn"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("From the spec to handoff on web and mobile — the team gets finished decisions, not loose screens.", "От ТЗ до передачи в разработку на вебе и мобайле — команда получает готовые решения, а не разрозненные экраны.", "Veb va mobilda texnik topshiriqdan ishlab chiqishga topshirishgacha — jamoa alohida ekranlar emas, tayyor yechimlar oladi.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Complex B2B interfaces", "Сложные B2B-интерфейсы", "Murakkab B2B interfeyslar"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("CRM, ERP, dashboards and dense tables made clear for users with very different roles.", "CRM, ERP, дашборды и сложные таблицы, понятные пользователям с самыми разными ролями.", "Turli roldagi foydalanuvchilar uchun tushunarli CRM, ERP, dashboardlar va murakkab jadvallar.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("UX architecture", "UX-архитектура", "UX arxitektura"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("User flows, information architecture, wireframes and every edge case worked out before the UI.", "User flow, информационная архитектура, вайрфреймы и все edge cases — до визуального дизайна.", "User flow, axborot arxitekturasi, wireframe’lar va barcha edge case’lar — vizual dizayndan oldin.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Mobile apps", "Мобильные приложения", "Mobil ilovalar"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("iOS and Android products, including carrying web scenarios to mobile with the same logic.", "Продукты для iOS и Android, в том числе перенос веб-сценариев на мобайл с единой логикой.", "iOS va Android mahsulotlari, jumladan veb-ssenariylarni yagona mantiq bilan mobilga ko‘chirish.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Design systems", "Дизайн-системы", "Dizayn-tizimlar"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Figma variables and tokens, components, Auto Layout, light and dark themes, documentation.", "Переменные и токены Figma, компоненты, Auto Layout, светлая и тёмная темы, документация.", "Figma o‘zgaruvchilari va tokenlari, komponentlar, Auto Layout, yorug‘ va qorong‘i mavzular, hujjatlar.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Prototyping", "Прототипирование", "Prototiplash"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Interactive prototypes that let the team check scenarios before development starts.", "Интерактивные прототипы, чтобы команда проверила сценарии до начала разработки.", "Jamoa ssenariylarni ishlab chiqish boshlanishidan oldin tekshira oladigan interaktiv prototiplar.")
    }
];
const principles = [
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Start from the spec", "Начинаю с ТЗ", "Texnik topshiriqdan boshlayman"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("I read the requirements first and understand the business logic before drawing anything.", "Сначала читаю требования и разбираюсь в бизнес-логике — и только потом рисую.", "Avval talablarni o‘qib, biznes-mantiqni tushunaman — keyin chizishni boshlayman.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Every role, every edge case", "Все роли, все edge cases", "Barcha rollar, barcha edge case’lar"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Multi-role scenarios and edge cases are designed up front — developers get fewer questions and less rework.", "Прорабатываю многоролевые сценарии и edge cases заранее — у разработчиков меньше вопросов и доработок.", "Ko‘p rolli ssenariylar va edge case’larni oldindan ishlab chiqaman — dasturchilarda savol va qayta ishlash kamroq bo‘ladi.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Buildable by design", "Макеты, которые можно собрать", "Yig‘sa bo‘ladigan maketlar"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Layouts are handed off with every screen state ready, so they reach production without losses.", "Отдаю макеты со всеми состояниями экранов — они доходят до продакшена без потерь.", "Maketlarni barcha ekran holatlari bilan topshiraman — ular production’ga yo‘qotishlarsiz yetib boradi.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Review before release", "Ревью до релиза", "Relizdan oldin review"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("I set up a design review process so mistakes are found before development, not after release.", "Выстроил процесс дизайн-ревью — ошибки находятся до разработки, а не после релиза.", "Dizayn-review jarayonini yo‘lga qo‘ydim — xatolar relizdan keyin emas, ishlab chiqishdan oldin topiladi.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("One UX across products", "Единый UX во всех продуктах", "Barcha mahsulotlarda yagona UX"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("CRM, mobile app and marketplace share one approach, so the whole ecosystem feels like one product.", "CRM, мобильное приложение и маркетплейс построены на одном подходе — экосистема ощущается как единый продукт.", "CRM, mobil ilova va marketpleys bitta yondashuvga asoslangan — butun ekotizim yagona mahsulotdek his qilinadi.")
    },
    {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Inside the sprint", "Внутри спринта", "Sprint ichida"),
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("I work with PMs, POs and developers in sprints, from user flow and prototype to handoff and QA.", "Работаю в спринтах с PM, PO и разработчиками — от user flow и прототипов до передачи в разработку.", "PM, PO va dasturchilar bilan sprintlarda ishlayman — user flow va prototiplardan ishlab chiqishga topshirishgacha.")
    }
];
const experience = [
    {
        company: "UYQUR",
        role: designer,
        period: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Oct 2024 — present", "Окт 2024 — н.в.", "Okt 2024 — hozir"),
        product: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("SaaS for managing construction projects", "SaaS для управления строительными проектами", "Qurilish loyihalarini boshqarish uchun SaaS"),
        points: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Lead product design end-to-end on web and mobile — from spec to handoff", "Веду дизайн продукта end-to-end на вебе и мобайле — от ТЗ до передачи в разработку", "Veb va mobilda mahsulot dizaynini boshidan oxirigacha olib boraman — texnik topshiriqdan ishlab chiqishga topshirishgacha"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Turned complex business requirements into interfaces that work for every user role", "Перевёл сложные бизнес-требования в интерфейсы, удобные для всех ролей", "Murakkab biznes-talablarni barcha rollar uchun qulay interfeyslarga aylantirdim"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Carried web scenarios to mobile with the same logic", "Перенёс веб-сценарии на мобайл с единой логикой", "Veb-ssenariylarni yagona mantiq bilan mobilga ko‘chirdim")
        ]
    },
    {
        company: "UYSOT",
        role: designer,
        period: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Jan 2023 — present", "Янв 2023 — н.в.", "Yan 2023 — hozir"),
        product: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Software ecosystem for real-estate developers", "Экосистема ПО для девелоперов недвижимости", "Ko‘chmas mulk developerlari uchun dasturiy ekotizim"),
        points: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Built the LUNAR design system from scratch: tokens, light and dark themes, components, documentation", "С нуля создал дизайн-систему LUNAR: токены, светлая и тёмная темы, компоненты, документация", "LUNAR dizayn-tizimini noldan yaratdim: tokenlar, yorug‘ va qorong‘i mavzular, komponentlar, hujjatlar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Introduced a design review process that catches mistakes before development", "Внедрил процесс дизайн-ревью — ошибки находятся до разработки", "Dizayn-review jarayonini joriy qildim — xatolar ishlab chiqishdan oldin topiladi"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Design the CRM, mobile app and marketplace with one UX approach", "Веду дизайн CRM, мобильного приложения и маркетплейса с единым подходом к UX", "CRM, mobil ilova va marketpleys dizaynini yagona UX yondashuvi bilan olib boraman")
        ]
    },
    {
        company: "Driver Five · SUV OL",
        role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("UI/UX Designer", "UI/UX-дизайнер", "UI/UX dizayner"),
        period: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Nov 2025 — Aug 2026", "Ноя 2025 — Авг 2026", "Noy 2025 — Avg 2026"),
        product: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Contract & freelance · taxi and water delivery", "Контракт и фриланс · такси и доставка воды", "Shartnoma va frilans · taksi va suv yetkazib berish"),
        points: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Designed a taxi driver app from zero, with interactive prototypes", "С нуля спроектировал приложение водителя такси с интерактивными прототипами", "Taksi haydovchisi ilovasini interaktiv prototiplar bilan noldan loyihaladim"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Designed two linked water-delivery apps — client and courier — in a month", "За месяц спроектировал два связанных приложения доставки воды — клиентское и курьерское", "Bir oyda suv yetkazib berish uchun ikkita bog‘langan ilovani — mijoz va kuryer — loyihaladim")
        ]
    }
];
const skills = [
    {
        group: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Design", "Дизайн", "Dizayn"),
        items: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Product design", "Продуктовый дизайн", "Product dizayn"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("UX / UI", "UX / UI", "UX / UI"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("User flows", "User flow", "User flow"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Information architecture", "Информационная архитектура", "Axborot arxitekturasi"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Wireframes", "Вайрфреймы", "Wireframe’lar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Prototyping", "Прототипирование", "Prototiplash")
        ]
    },
    {
        group: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Domains", "Домены", "Sohalar"),
        items: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("SaaS & B2B", "SaaS и B2B", "SaaS va B2B"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("CRM / ERP", "CRM / ERP", "CRM / ERP"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Dashboards & complex tables", "Дашборды и сложные таблицы", "Dashboardlar va murakkab jadvallar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Fintech", "Финтех", "Fintex"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("AI features", "AI-функции", "AI funksiyalar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("iOS & Android", "iOS и Android", "iOS va Android")
        ]
    },
    {
        group: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Design systems", "Дизайн-системы", "Dizayn-tizimlar"),
        items: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Figma variables & tokens", "Переменные и токены Figma", "Figma o‘zgaruvchilari va tokenlari"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Components", "Компоненты", "Komponentlar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Auto Layout", "Auto Layout", "Auto Layout"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Light & dark themes", "Светлая и тёмная темы", "Yorug‘ va qorong‘i mavzular"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Documentation", "Документация", "Hujjatlar")
        ]
    },
    {
        group: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Teamwork", "Командная работа", "Jamoaviy ish"),
        items: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Sprints with PM & PO", "Спринты с PM и PO", "PM va PO bilan sprintlar"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Design reviews", "Дизайн-ревью", "Dizayn-review"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Developer handoff", "Передача в разработку", "Ishlab chiqishga topshirish")
        ]
    }
];
const languages = [
    {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Uzbek", "Узбекский", "O‘zbek tili"),
        level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Native", "Родной", "Ona tili")
    },
    {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("Russian", "Русский", "Rus tili"),
        level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("B2", "B2", "B2")
    },
    {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("English", "Английский", "Ingliz tili"),
        level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])("A2", "A2", "A2")
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/local-time.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const format = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].timezone
});
function LocalTime() {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalTime.useEffect": ()=>{
            const update = {
                "LocalTime.useEffect.update": ()=>setTime(format.format(new Date()))
            }["LocalTime.useEffect.update"];
            update();
            const id = setInterval(update, 10_000);
            return ({
                "LocalTime.useEffect": ()=>clearInterval(id)
            })["LocalTime.useEffect"];
        }
    }["LocalTime.useEffect"], []);
    // Render a fixed-width placeholder on the server to avoid layout shift.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tabular-nums",
        children: time ?? "--:--"
    }, void 0, false, {
        fileName: "[project]/components/local-time.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_s(LocalTime, "t5SmOhh13g3g0U8h9STA+7f4x44=");
_c = LocalTime;
var _c;
__turbopack_context__.k.register(_c, "LocalTime");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$local$2d$time$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/local-time.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const items = [
    {
        href: "/#work",
        label: "Work"
    },
    {
        href: "/#services",
        label: "Services"
    },
    {
        href: "/#about",
        label: "About"
    },
    {
        href: "/#contact",
        label: "Contact"
    }
];
function Navigation() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hide on scroll down, reveal on scroll up.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            let last = window.scrollY;
            const onScroll = {
                "Navigation.useEffect.onScroll": ()=>{
                    const y = window.scrollY;
                    setScrolled(y > 24);
                    setHidden(y > last && y > 240);
                    last = y;
                }
            }["Navigation.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            document.documentElement.style.overflow = open ? "hidden" : "";
        }
    }["Navigation.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-700 ease-[var(--ease-out-expo)] ${hidden && !open ? "-translate-y-full" : "translate-y-0"} ${scrolled && !open ? "border-b border-line bg-ink/70 backdrop-blur-xl" : "border-b border-transparent"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-x flex h-16 items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "group flex items-center gap-3",
                            "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name}, home`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "grid size-7 place-items-center rounded-full bg-paper font-serif text-[17px] italic leading-none text-ink",
                                    children: "m"
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[15px] font-medium tracking-tight",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 hidden text-paper-mute transition-colors group-hover:text-paper-dim lg:inline",
                                            children: [
                                                "/ ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].role
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/navigation.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "size-1.5 rounded-full bg-ok animate-pulse-dot"
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Tashkent"
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$local$2d$time$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center gap-8 md:flex",
                            children: [
                                items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "link-underline text-[14px] text-paper-dim transition-colors hover:text-paper",
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "[project]/components/navigation.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                    className: "rounded-full bg-paper px-4 py-2 text-[13px] font-medium text-ink transition-transform duration-500 ease-[var(--ease-out-expo)] hover:scale-[1.04]",
                                    children: "Get in touch"
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setOpen((v)=>!v),
                            className: "relative z-10 flex h-9 items-center gap-2 rounded-full border border-line-strong px-4 text-[13px] md:hidden",
                            "aria-expanded": open,
                            "aria-label": "Menu",
                            children: open ? "Close" : "Menu"
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "fixed inset-0 z-40 flex flex-col justify-between bg-ink px-5 pb-10 pt-28 md:hidden",
                    initial: {
                        clipPath: "inset(0 0 100% 0)"
                    },
                    animate: {
                        clipPath: "inset(0 0 0% 0)"
                    },
                    exit: {
                        clipPath: "inset(0 0 100% 0)"
                    },
                    transition: {
                        duration: 0.8,
                        ease: [
                            0.76,
                            0,
                            0.24,
                            1
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-col",
                            children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    initial: {
                                        y: 40,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.25 + i * 0.06,
                                        duration: 0.8,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: ()=>setOpen(false),
                                        className: "flex items-baseline justify-between border-b border-line py-4 text-5xl tracking-tight",
                                        children: [
                                            item.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label",
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/navigation.tsx",
                                                lineNumber: 112,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/navigation.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-end justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "label space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "size-1.5 rounded-full bg-ok"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/navigation.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].availability
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/navigation.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Tashkent · ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$local$2d$time$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/components/navigation.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/navigation.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                    className: "rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink",
                                    children: "Get in touch"
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navigation, "pny03OGFDv5m89vHwFu+1HV+Cl0=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountUp",
    ()=>CountUp,
    "FadeIn",
    ()=>FadeIn,
    "LineReveal",
    ()=>LineReveal,
    "Magnetic",
    ()=>Magnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const ease = [
    0.16,
    1,
    0.3,
    1
];
function LineReveal({ lines, className, lineClassName, delay = 0, as: Tag = "h2" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "0px 0px -10% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: className,
        children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block overflow-hidden pb-[0.08em] -mb-[0.08em]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    className: `block ${lineClassName ?? ""}`,
                    initial: {
                        y: "110%"
                    },
                    animate: inView ? {
                        y: "0%"
                    } : undefined,
                    transition: {
                        duration: 1.1,
                        ease,
                        delay: delay + i * 0.08
                    },
                    children: line
                }, void 0, false, {
                    fileName: "[project]/components/reveal.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/components/reveal.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/reveal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(LineReveal, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = LineReveal;
function FadeIn({ children, className, delay = 0, y = 24 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "0px 0px -8% 0px"
        },
        transition: {
            duration: 1,
            ease,
            delay
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/reveal.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c1 = FadeIn;
function CountUp({ to, prefix = "", suffix = "" }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            if (!inView || !ref.current) return;
            const node = ref.current;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(0, to, {
                duration: 1.8,
                ease,
                onUpdate: {
                    "CountUp.useEffect.controls": (v)=>node.textContent = prefix + Math.round(v) + suffix
                }["CountUp.useEffect.controls"]
            });
            return ({
                "CountUp.useEffect": ()=>controls.stop()
            })["CountUp.useEffect"];
        }
    }["CountUp.useEffect"], [
        inView,
        to,
        prefix,
        suffix
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            prefix,
            "0",
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/reveal.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s1(CountUp, "Ul4EFVgbBOGXD/mbQTz6+rhdH80=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = CountUp;
function Magnetic({ children, strength = 0.3 }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const sx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, {
        stiffness: 200,
        damping: 18,
        mass: 0.4
    });
    const sy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, {
        stiffness: 200,
        damping: 18,
        mass: 0.4
    });
    const tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(sx, {
        "Magnetic.useTransform[tx]": (v)=>`${v}px`
    }["Magnetic.useTransform[tx]"]);
    const ty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(sy, {
        "Magnetic.useTransform[ty]": (v)=>`${v}px`
    }["Magnetic.useTransform[ty]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        ref: ref,
        className: "inline-block",
        style: {
            x: tx,
            y: ty
        },
        onPointerMove: (e)=>{
            const r = ref.current.getBoundingClientRect();
            x.set((e.clientX - r.left - r.width / 2) * strength);
            y.set((e.clientY - r.top - r.height / 2) * strength);
        },
        onPointerLeave: ()=>{
            x.set(0);
            y.set(0);
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/reveal.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s2(Magnetic, "U1OZBc3ESAeBWBhzunrnxP9KAUo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c3 = Magnetic;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LineReveal");
__turbopack_context__.k.register(_c1, "FadeIn");
__turbopack_context__.k.register(_c2, "CountUp");
__turbopack_context__.k.register(_c3, "Magnetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-client] (ecmascript) <export default as ArrowDownRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Hero() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start start",
            "end start"
        ]
    });
    const headlineY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "-18%"
    ]);
    const fade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.7
    ], [
        1,
        0
    ]);
    const featured = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "top",
        className: "relative flex min-h-[100svh] flex-col pt-28 sm:pt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x flex flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                        className: "flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5",
                        y: 10,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "label flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "size-1.5 rounded-full bg-ok animate-pulse-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].availability
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "label hidden sm:block",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].focus
                            }, void 0, false, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "label",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location,
                                    " · ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].timezoneLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        style: {
                            y: headlineY,
                            opacity: fade
                        },
                        className: "mt-10 sm:mt-16 lg:mt-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineReveal"], {
                            as: "h1",
                            delay: 0.15,
                            className: "text-[clamp(3rem,9.6vw,9.75rem)] font-medium leading-[0.92] tracking-[-0.045em]",
                            lines: [
                                "Complex products,",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "made ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "whitespace-nowrap font-serif font-normal italic tracking-[-0.02em] text-paper-dim",
                                            children: "simple"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 40,
                                            columnNumber: 22
                                        }, void 0),
                                        " to use."
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid flex-1 items-end gap-10 pb-10 lg:mt-16 lg:grid-cols-12 lg:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 0.5,
                                className: "lg:col-span-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-[36ch] text-xl leading-snug text-paper-dim sm:text-2xl",
                                        children: [
                                            "I'm ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-paper",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 49,
                                                columnNumber: 24
                                            }, this),
                                            ", a product designer for SaaS, CRM and ERP — on web and mobile, from the spec to shipped screens."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex flex-wrap items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#work",
                                                    className: "group inline-flex items-center gap-3 rounded-full bg-paper py-3 pl-6 pr-3 text-[15px] font-medium text-ink",
                                                    children: [
                                                        "Selected work",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "grid size-8 place-items-center rounded-full bg-ink text-paper transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-[-45deg]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/hero.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/hero.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://t.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].telegram}`,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-[17px] text-[15px] transition-colors hover:border-paper",
                                                children: [
                                                    "Telegram",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 16,
                                                        className: "transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 0.65,
                                className: "lg:col-span-5 lg:col-start-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/work/${featured.slug}`,
                                    "data-cursor": "View",
                                    className: "group block overflow-hidden rounded-xl border border-line bg-ink-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[16/9] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: featured.cover.src,
                                                alt: `${featured.name} — ${featured.title}`,
                                                fill: true,
                                                priority: true,
                                                sizes: "(min-width: 1024px) 42vw, 100vw",
                                                className: "object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label",
                                                    children: [
                                                        "Now designing — ",
                                                        featured.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/hero.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 16,
                                                    className: "text-paper-dim transition-colors group-hover:text-paper"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-line",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-x grid grid-cols-2 lg:grid-cols-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stats"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                            delay: 0.2 + i * 0.08,
                            className: `py-7 pr-4 sm:py-9 ${i % 2 === 1 ? "border-l border-line pl-5 sm:pl-8" : ""} ${i === 2 ? "lg:border-l lg:border-line lg:pl-8" : ""} ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-5xl font-medium tracking-[-0.04em] sm:text-6xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountUp"], {
                                        to: s.value,
                                        prefix: s.prefix,
                                        suffix: s.suffix
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 max-w-[24ch] text-sm leading-snug text-paper-dim",
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.label, true, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/hero.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Hero, "eb2oIzSV8R72Pb7DG7TjCTnDweo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const ease = [
    0.16,
    1,
    0.3,
    1
];
function FeaturedRow({ project, index, flip }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    const clip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.35
    ], [
        "inset(12% 6% 12% 6% round 20px)",
        "inset(0% 0% 0% 0% round 14px)"
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        ref: ref,
        className: "border-t border-line py-12 sm:py-16 lg:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                className: "mb-8 flex items-center justify-between gap-4 sm:mb-10",
                y: 12,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-paper",
                                children: String(index + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            " / ",
                            project.category
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label",
                        children: project.year
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-10 lg:grid-cols-12 lg:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/work/${project.slug}`,
                        "data-cursor": "View case",
                        className: `group block lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`,
                        "aria-label": `${project.name} case study`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            style: {
                                clipPath: clip
                            },
                            className: "relative aspect-[16/9] overflow-hidden bg-ink-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: project.cover.src,
                                alt: `${project.name} — ${project.title}`,
                                fill: true,
                                sizes: "(min-width: 1024px) 58vw, 100vw",
                                className: "object-cover transition-transform duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-[1.025]"
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/projects.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col justify-between lg:col-span-5 ${flip ? "lg:order-1" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineReveal"], {
                                        as: "h3",
                                        className: "text-[clamp(2.6rem,5.2vw,5rem)] font-medium leading-[0.95] tracking-[-0.045em]",
                                        lines: [
                                            project.name
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                        delay: 0.1,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 font-serif text-2xl italic text-paper-dim sm:text-3xl",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-6 max-w-[46ch] text-[17px] leading-relaxed text-paper-dim",
                                                children: project.summary
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 0.2,
                                className: "mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "label mb-1.5",
                                                        children: "Platform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/projects.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "leading-snug",
                                                        children: project.platform
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/projects.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "label mb-1.5",
                                                        children: "Scope"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/projects.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "leading-snug",
                                                        style: {
                                                            color: project.accent
                                                        },
                                                        children: project.scope
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/projects.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-6 flex flex-wrap gap-2",
                                        children: project.tags.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "rounded-full border border-line px-3 py-1 text-xs text-paper-dim",
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/work/${project.slug}`,
                                        className: "group mt-8 inline-flex items-center gap-2 text-[15px] font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "link-underline",
                                                children: "View case study"
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 16,
                                                className: "transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projects.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(FeaturedRow, "kbKOnr+Kzs/lbBJGND2JWPXuObE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = FeaturedRow;
function Card({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/work/${project.slug}`,
        "data-cursor": "View",
        className: "group block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-ink-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: project.cover.src,
                    alt: `${project.name} — ${project.title}`,
                    fill: true,
                    sizes: "(min-width: 1024px) 45vw, 100vw",
                    className: "object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                }, void 0, false, {
                    fileName: "[project]/components/projects.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-medium tracking-[-0.03em]",
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[15px] text-paper-dim",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label mt-2 shrink-0 text-right",
                        children: project.category.split(" · ")[1] ?? project.category
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projects.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c1 = Card;
const filters = [
    {
        key: "all",
        label: "All"
    },
    {
        key: "saas",
        label: "SaaS & CRM"
    },
    {
        key: "mobile",
        label: "Mobile"
    },
    {
        key: "web",
        label: "Web"
    }
];
function Projects() {
    _s1();
    const featured = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.featured);
    const rest = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>!p.featured);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const visible = rest.filter((p)=>filter === "all" || p.kind === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        className: "container-x scroll-mt-16 pt-24 sm:pt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-14 grid gap-8 sm:mb-20 lg:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "label mb-6",
                                children: "(01) Selected work"
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineReveal"], {
                                className: "text-[clamp(2.75rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.045em]",
                                lines: [
                                    "Products teams",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif font-normal italic text-paper-dim",
                                                children: "work in"
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, void 0),
                                            " daily"
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                        delay: 0.15,
                        className: "self-end lg:col-span-4 lg:col-start-9",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-[40ch] text-[17px] leading-relaxed text-paper-dim",
                            children: "Real products for real-estate developers, construction companies, taxi drivers and schools — CRM, ERP, analytics and the mobile apps around them."
                        }, void 0, false, {
                            fileName: "[project]/components/projects.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            featured.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedRow, {
                    project: p,
                    index: i,
                    flip: i % 2 === 1
                }, p.slug, false, {
                    fileName: "[project]/components/projects.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-line pb-8 pt-16 sm:pt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 flex flex-wrap items-end justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineReveal"], {
                                className: "text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-[0.95] tracking-[-0.045em]",
                                lines: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "More ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif font-normal italic text-paper-dim",
                                                children: "work"
                                            }, void 0, false, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 158,
                                                columnNumber: 22
                                            }, void 0)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                role: "tablist",
                                "aria-label": "Filter projects",
                                children: filters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        role: "tab",
                                        "aria-selected": filter === f.key,
                                        onClick: ()=>setFilter(f.key),
                                        className: `rounded-full border px-4 py-2 text-[13px] transition-colors duration-300 ${filter === f.key ? "border-paper bg-paper text-ink" : "border-line-strong text-paper-dim hover:text-paper"}`,
                                        children: f.label
                                    }, f.key, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        layout: true,
                        className: "grid gap-x-8 gap-y-14 md:grid-cols-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "popLayout",
                            children: visible.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    layout: true,
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.97
                                    },
                                    transition: {
                                        duration: 0.7,
                                        ease
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        project: p
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                }, p.slug, false, {
                                    fileName: "[project]/components/projects.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/projects.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    visible.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-paper-dim",
                        children: "More web work coming soon."
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 195,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projects.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s1(Projects, "boPJerHaELAyf+PNkR+Y8+JetQg=");
_c2 = Projects;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FeaturedRow");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reveal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "scroll-mt-16 border-t border-line",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:sticky lg:top-28",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label mb-6",
                                    children: "(02) Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineReveal"], {
                                    className: "text-[clamp(2.5rem,5vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.045em]",
                                    lines: [
                                        "What I",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-serif font-normal italic text-paper-dim",
                                            children: "do"
                                        }, "b", false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 16,
                                            columnNumber: 33
                                        }, void 0)
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                    delay: 0.1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 max-w-[36ch] text-[17px] leading-relaxed text-paper-dim",
                                        children: "New products from zero, or new modules inside a living product — designed with the team, not handed over the wall."
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 19,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/services.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/services.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "lg:col-span-7 lg:col-start-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: i * 0.04,
                                y: 16,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "group relative grid grid-cols-[3rem_1fr_auto] items-start gap-4 border-t border-line py-7 sm:grid-cols-[4rem_1fr_auto] sm:py-9",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "label pt-2 text-paper-mute transition-colors group-hover:text-signal",
                                            children: String(i + 1).padStart(2, "0")
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-medium tracking-[-0.03em] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-2 sm:text-[2rem]",
                                                    children: s.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/services.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 max-w-[48ch] text-[15px] leading-relaxed text-paper-dim",
                                                    children: s.body
                                                }, void 0, false, {
                                                    fileName: "[project]/components/services.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 22,
                                            className: "mt-2 text-paper-mute transition-all duration-500 group-hover:rotate-45 group-hover:text-paper"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, s.title, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/services.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/services.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-line bg-ink-2/60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-x py-24 sm:py-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-14 flex flex-wrap items-end justify-between gap-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "label mb-6",
                                        children: "(03) Approach"
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineReveal"], {
                                        className: "text-[clamp(2.5rem,5vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.045em]",
                                        lines: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "How the work ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-serif font-normal italic text-paper-dim",
                                                        children: "gets done"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 34
                                                    }, void 0)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/services.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["principles"].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                    delay: i % 3 * 0.08,
                                    y: 20,
                                    className: "border-b border-r border-line",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group flex h-full min-h-[240px] flex-col justify-between p-7 transition-colors duration-500 hover:bg-ink-3 sm:p-9",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif text-5xl italic text-paper-mute transition-colors duration-500 group-hover:text-signal",
                                                children: String(i + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/components/services.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-medium tracking-[-0.02em]",
                                                        children: p.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-[15px] leading-relaxed text-paper-dim",
                                                        children: p.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/services.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                }, p.title, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/services.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/services.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/services.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/services.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/about.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reveal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "scroll-mt-16 border-t border-line",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x py-24 sm:py-32",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "label mb-10",
                    children: "(04) About"
                }, void 0, false, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineReveal"], {
                    as: "p",
                    className: "max-w-[22ch] text-[clamp(2rem,4.4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.04em]",
                    lines: [
                        "I hand off layouts",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "that can ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-serif font-normal italic text-paper-dim",
                                    children: "really be built"
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 18,
                                    columnNumber: 24
                                }, void 0)
                            ]
                        }, void 0, true),
                        "— and stay until they ship."
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                            className: "space-y-5 lg:col-span-5",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].about.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[17px] leading-relaxed text-paper-dim",
                                        children: p
                                    }, p.slice(0, 20), false, {
                                        fileName: "[project]/components/about.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-line bg-ink-2 p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "label mb-3",
                                            children: "Design system"
                                        }, void 0, false, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-medium tracking-[-0.03em]",
                                            children: [
                                                "LUNAR ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-serif font-normal italic text-paper-dim",
                                                    children: "— built from zero"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[15px] leading-relaxed text-paper-dim",
                                            children: "Figma tokens, light and dark themes, components and documentation. CRM interfaces became consistent and new screens are assembled faster."
                                        }, void 0, false, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-x-8 gap-y-3 pt-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: [
                                                l.name,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-paper-mute",
                                                    children: [
                                                        "— ",
                                                        l.level
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, l.name, true, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 lg:col-start-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "label mb-4",
                                        children: "Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/components/about.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                            delay: i * 0.06,
                                            y: 14,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "group border-t border-line py-7 last:border-b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl font-medium tracking-[-0.03em] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5",
                                                                children: e.company
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/about.tsx",
                                                                lineNumber: 59,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "label",
                                                                children: e.period
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/about.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/about.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[15px]",
                                                        children: [
                                                            e.role,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-paper-mute",
                                                                children: [
                                                                    "· ",
                                                                    e.product
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/about.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/about.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-4 space-y-2",
                                                        children: e.points.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-3 text-[15px] leading-relaxed text-paper-dim",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-[0.7em] h-px w-3 shrink-0 bg-paper-mute"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/about.tsx",
                                                                        lineNumber: 70,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    pt
                                                                ]
                                                            }, pt, true, {
                                                                fileName: "[project]/components/about.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/about.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/about.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        }, e.company, false, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-24 grid grid-cols-1 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                            delay: i * 0.06,
                            className: "pr-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "label mb-4",
                                    children: g.group
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1.5",
                                    children: g.items.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-[17px] tracking-[-0.01em]",
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, g.group, true, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/about.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/about.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$local$2d$time$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/local-time.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "contact",
        className: "relative scroll-mt-16 overflow-hidden border-t border-line",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x pb-10 pt-24 sm:pt-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "label mb-10 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-1.5 rounded-full bg-ok animate-pulse-dot"
                            }, void 0, false, {
                                fileName: "[project]/components/contact.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].availability
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-end gap-12 lg:grid-cols-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineReveal"], {
                                className: "text-[clamp(3.25rem,10vw,10rem)] font-medium leading-[0.9] tracking-[-0.05em] lg:col-span-9",
                                lines: [
                                    "Let's design",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "it ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif font-normal italic text-paper-dim",
                                                children: "together."
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 24,
                                                columnNumber: 20
                                            }, void 0)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/contact.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 0.2,
                                className: "lg:col-span-3 lg:justify-self-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                    strength: 0.4,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                        "data-cursor": "Say hi",
                                        className: "group grid size-40 place-items-center rounded-full bg-paper text-center text-ink transition-transform duration-700 ease-[var(--ease-out-expo)] hover:scale-105 sm:size-48",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex flex-col items-center gap-2 text-[15px] font-medium leading-tight",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 26,
                                                    className: "transition-transform duration-500 group-hover:rotate-45"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this),
                                                "Get in touch"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/contact.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                            className: "link-underline mt-12 inline-block text-[clamp(1.25rem,3vw,2.25rem)] tracking-[-0.02em]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email
                        }, void 0, false, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/contact.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-24 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "label mb-4",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1.5 text-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://t.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].telegram}`,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "link-underline",
                                                    children: [
                                                        "Telegram · @",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].telegram
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone.replace(/\s/g, "")}`,
                                                    className: "link-underline",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/contact.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "label mb-4",
                                        children: "Work"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "grid grid-cols-2 gap-x-4 gap-y-1.5 text-[15px]",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/work/${p.slug}`,
                                                    className: "link-underline",
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this)
                                            }, p.slug, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/contact.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "label mb-4",
                                        children: "Local time"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$local$2d$time$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-paper-mute",
                                                children: [
                                                    "Tashkent, ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].timezoneLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 84,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/contact.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "label mb-4",
                                        children: "Navigate"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#top",
                                        className: "link-underline text-[15px]",
                                        children: "Back to top ↑"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/contact.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/contact.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x flex flex-col justify-between gap-2 border-t border-line py-6 sm:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "label",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "label",
                        children: "Product Designer · Tashkent"
                    }, void 0, false, {
                        fileName: "[project]/components/contact.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/contact.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none select-none whitespace-nowrap px-2 text-center text-[19vw] font-medium leading-[0.78] tracking-[-0.07em] text-ink-3",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].firstName,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-serif font-normal italic",
                        children: " N."
                    }, void 0, false, {
                        fileName: "[project]/components/contact.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/contact.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/contact.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2a5a3b06._.js.map