"use client"

import { createContext, useContext } from "react"
import { usePathname } from "next/navigation"
import type { L, Locale } from "@/lib/i18n"

const LangContext = createContext<Locale>("en")

export function LangProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export function useLang() {
  const lang = useContext(LangContext)
  const pathname = usePathname()
  return {
    lang,
    t: (v: L) => v[lang],
    // Prefixes an in-site path with the current language: href("/work/uyim") -> "/ru/work/uyim".
    href: (path: string) => `/${lang}${path === "/" ? "" : path}`,
    // The current page in another language, for the switcher.
    switchTo: (to: Locale) => pathname.replace(/^\/(uz|ru|en)(?=\/|$)/, `/${to}`),
  }
}
