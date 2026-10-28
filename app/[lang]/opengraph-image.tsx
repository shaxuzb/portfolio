import { ImageResponse } from "next/og"
import { HomeCard, ogFonts, ogSize } from "@/lib/og"
import { isLocale, locales, ui } from "@/lib/i18n"

export const size = ogSize
export const contentType = "image/png"
export const alt = ui.og.alt.en

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = isLocale(lang) ? lang : "en"
  return new ImageResponse(await HomeCard({ lang: locale }), { ...size, fonts: await ogFonts() })
}
