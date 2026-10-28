export const locales = ["uz", "ru", "en"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = { uz: "O‘zbekcha", ru: "Русский", en: "English" }
export const htmlLang: Record<Locale, string> = { uz: "uz", ru: "ru", en: "en" }

// A string in every supported language.
export type L = Record<Locale, string>
export const l = (en: string, ru: string, uz: string): L => ({ en, ru, uz })

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v)

// A headline line: plain text with an optional italic serif emphasis in the middle.
export type Line = { before?: string; em?: string; after?: string }
type Lines = Record<Locale, Line[]>

export const ui = {
  nav: {
    work: l("Work", "Проекты", "Loyihalar"),
    services: l("Services", "Услуги", "Xizmatlar"),
    about: l("About", "Обо мне", "Men haqimda"),
    contact: l("Contact", "Контакты", "Aloqa"),
    menu: l("Menu", "Меню", "Menyu"),
    close: l("Close", "Закрыть", "Yopish"),
    getInTouch: l("Get in touch", "Связаться", "Bog‘lanish"),
    city: l("Tashkent", "Ташкент", "Toshkent"),
    language: l("Language", "Язык", "Til"),
  },
  hero: {
    headline: {
      en: [{ before: "Complex products," }, { before: "made ", em: "simple", after: " to use." }],
      ru: [{ before: "Сложные продукты," }, { before: "понятные ", em: "каждому." }],
      uz: [{ before: "Murakkab mahsulotlar," }, { em: "sodda", after: " va tushunarli." }],
    } satisfies Lines,
    intro: l(
      "a product designer for SaaS, CRM and ERP: web and mobile, from the spec to shipped screens.",
      "продуктовый дизайнер SaaS, CRM и ERP: веб и мобайл, от ТЗ до экранов в продакшене.",
      "SaaS, CRM va ERP bo‘yicha product dizaynerman: veb va mobil, texnik topshiriqdan tayyor ekranlargacha.",
    ),
    iAm: l("I’m", "Я", "Men"),
    selectedWork: l("Selected work", "Избранные проекты", "Tanlangan ishlar"),
    nowDesigning: l("Now designing", "Сейчас проектирую", "Hozir loyihalayapman"),
  },
  marquee: {
    en: ["Product design", "SaaS", "User flows", "CRM", "Design systems", "ERP", "Prototyping", "Dashboards", "iOS & Android", "Edge cases"],
    ru: ["Продуктовый дизайн", "SaaS", "User flow", "CRM", "Дизайн-системы", "ERP", "Прототипы", "Дашборды", "iOS и Android", "Edge cases"],
    uz: ["Product dizayn", "SaaS", "User flow", "CRM", "Dizayn-tizimlar", "ERP", "Prototiplar", "Dashboardlar", "iOS va Android", "Edge case’lar"],
  } satisfies Record<Locale, string[]>,
  work: {
    label: l("(01) Selected work", "(01) Избранные проекты", "(01) Tanlangan ishlar"),
    headline: {
      en: [{ before: "Products teams" }, { em: "work in", after: " daily" }],
      ru: [{ before: "Продукты, в которых" }, { em: "работают", after: " каждый день" }],
      uz: [{ before: "Jamoalar har kuni" }, { em: "ishlaydigan", after: " mahsulotlar" }],
    } satisfies Lines,
    intro: l(
      "Real products for real-estate developers, construction companies, taxi drivers and schools — CRM, ERP, analytics and the mobile apps around them.",
      "Реальные продукты для девелоперов, строительных компаний, таксистов и школ — CRM, ERP, аналитика и мобильные приложения вокруг них.",
      "Developerlar, qurilish kompaniyalari, taksi haydovchilari va maktablar uchun real mahsulotlar — CRM, ERP, analitika va ular atrofidagi mobil ilovalar.",
    ),
    platform: l("Platform", "Платформа", "Platforma"),
    scope: l("Scope", "Объём", "Hajm"),
    viewCase: l("View case study", "Смотреть кейс", "Keysni ko‘rish"),
    more: {
      en: [{ before: "More ", em: "work" }],
      ru: [{ before: "Другие ", em: "проекты" }],
      uz: [{ before: "Boshqa ", em: "loyihalar" }],
    } satisfies Lines,
    filters: {
      all: l("All", "Все", "Barchasi"),
      saas: l("SaaS & CRM", "SaaS и CRM", "SaaS va CRM"),
      mobile: l("Mobile", "Мобайл", "Mobil"),
      web: l("Web", "Веб", "Veb"),
    },
    filterLabel: l("Filter projects", "Фильтр проектов", "Loyihalarni saralash"),
    empty: l("More web work coming soon.", "Скоро здесь появятся новые веб-проекты.", "Tez orada yangi veb-loyihalar qo‘shiladi."),
  },
  services: {
    label: l("(02) Services", "(02) Услуги", "(02) Xizmatlar"),
    headline: {
      en: [{ before: "What I" }, { em: "do" }],
      ru: [{ before: "Чем я" }, { em: "занимаюсь" }],
      uz: [{ before: "Nima" }, { em: "qilaman" }],
    } satisfies Lines,
    intro: l(
      "New products from zero, or new modules inside a living product — designed with the team, not handed over the wall.",
      "Новые продукты с нуля или новые модули в живом продукте — вместе с командой, а не «через стену».",
      "Noldan yangi mahsulotlar yoki ishlab turgan mahsulotga yangi modullar — jamoadan alohida emas, u bilan birga.",
    ),
    approachLabel: l("(03) Approach", "(03) Подход", "(03) Yondashuv"),
    approachHeadline: {
      en: [{ before: "How the work ", em: "gets done" }],
      ru: [{ before: "Как я ", em: "работаю" }],
      uz: [{ before: "Qanday ", em: "ishlayman" }],
    } satisfies Lines,
  },
  about: {
    label: l("(04) About", "(04) Обо мне", "(04) Men haqimda"),
    headline: {
      en: [{ before: "I hand off layouts" }, { before: "that can ", em: "really be built" }, { before: "— and stay until they ship." }],
      ru: [{ before: "Отдаю макеты," }, { before: "которые ", em: "реально собрать," }, { before: "— и веду их до релиза." }],
      uz: [{ before: "Dasturchilar" }, { em: "haqiqatan yig‘a oladigan" }, { before: "maketlar topshiraman." }],
    } satisfies Lines,
    designSystem: l("Design system", "Дизайн-система", "Dizayn-tizim"),
    lunarEm: l("— built from zero", "— с нуля", "— noldan"),
    lunarBody: l(
      "Figma tokens, light and dark themes, components and documentation. CRM interfaces became consistent and new screens are assembled faster.",
      "Токены в Figma, светлая и тёмная темы, компоненты и документация. Интерфейсы CRM стали единообразными, а новые экраны собираются быстрее.",
      "Figma tokenlari, yorug‘ va qorong‘i mavzular, komponentlar va hujjatlar. CRM interfeyslari yagona ko‘rinishga keldi, yangi ekranlar esa tezroq yig‘iladi.",
    ),
    experience: l("Experience", "Опыт", "Tajriba"),
  },
  contact: {
    headline: {
      en: [{ before: "Let’s design" }, { before: "it ", em: "together." }],
      ru: [{ before: "Давайте создадим" }, { em: "вместе." }],
      uz: [{ before: "Keling, birga" }, { em: "yaratamiz." }],
    } satisfies Lines,
    contact: l("Contact", "Контакты", "Aloqa"),
    work: l("Work", "Проекты", "Loyihalar"),
    localTime: l("Local time", "Местное время", "Mahalliy vaqt"),
    navigate: l("Navigate", "Навигация", "Navigatsiya"),
    backToTop: l("Back to top ↑", "Наверх ↑", "Yuqoriga ↑"),
    footerRole: l("Product Designer · Tashkent", "Продуктовый дизайнер · Ташкент", "Product dizayner · Toshkent"),
  },
  case: {
    allWork: l("All work", "Все проекты", "Barcha ishlar"),
    role: l("Role", "Роль", "Rol"),
    platform: l("Platform", "Платформа", "Platforma"),
    scope: l("Scope", "Объём", "Hajm"),
    timeline: l("Timeline", "Сроки", "Muddat"),
    overview: l("Overview", "Обзор", "Umumiy ko‘rinish"),
    designed: l("What I designed", "Что я спроектировал", "Nimalarni loyihaladim"),
    next: l("Next project", "Следующий проект", "Keyingi loyiha"),
  },
  cursor: {
    view: l("View", "Смотреть", "Ko‘rish"),
    viewCase: l("View case", "Кейс", "Keys"),
    next: l("Next", "Далее", "Keyingi"),
    sayHi: l("Say hi", "Написать", "Yozish"),
  },
}
