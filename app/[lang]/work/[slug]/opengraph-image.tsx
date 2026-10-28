import { ImageResponse } from "next/og"
import { notFound } from "next/navigation"
import { ProjectCard, ogFonts, ogSize } from "@/lib/og"
import { projects } from "@/lib/data"
import { isLocale, locales } from "@/lib/i18n"

export const size = ogSize
export const contentType = "image/png"
export const alt = "Case study — Mahmud Namazov"

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })))
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()
  return new ImageResponse(await ProjectCard({ project, lang: isLocale(lang) ? lang : "en" }), {
    ...size,
    fonts: await ogFonts(),
  })
}
