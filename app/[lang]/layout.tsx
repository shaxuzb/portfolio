import type React from "react"
import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { Cormorant_Garamond, Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SmoothScroll from "@/components/smooth-scroll"
import Cursor from "@/components/cursor"
import { LangProvider } from "@/components/lang-provider"
import { profile } from "@/lib/data"
import { htmlLang, isLocale, locales } from "@/lib/i18n"
import "../globals.css"

const geist = Geist({ subsets: ["latin", "cyrillic"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin", "cyrillic"], variable: "--font-geist-mono" })
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
})

// Instrument Serif has no Cyrillic; Cormorant covers Russian italics in the same spirit.
const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: "500",
  style: ["italic"],
  variable: "--font-cormorant",
})

// Absolute base for preview links. Set NEXT_PUBLIC_SITE_URL to the live domain;
// on Vercel the production URL is used automatically.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const title = `${profile.name[lang]} — ${profile.role[lang]}`
  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s — ${profile.name[lang]}` },
    description: profile.intro[lang],
    alternates: { languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])) },
    openGraph: {
      title,
      description: profile.intro[lang],
      type: "website",
      siteName: profile.name[lang],
      locale: { uz: "uz_UZ", ru: "ru_RU", en: "en_US" }[lang],
    },
    twitter: { card: "summary_large_image", title, description: profile.intro[lang] },
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
  }
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <html lang={htmlLang[lang]} className={`dark ${geist.variable} ${geistMono.variable} ${instrument.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <LangProvider lang={lang}>
          <SmoothScroll>{children}</SmoothScroll>
          <Cursor />
        </LangProvider>
        <div className="grain" aria-hidden />
        <Analytics />
      </body>
    </html>
  )
}
