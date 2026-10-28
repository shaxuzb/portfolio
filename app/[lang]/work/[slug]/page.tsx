import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import { isLocale, locales } from "@/lib/i18n"
import Navigation from "@/components/navigation"
import Contact from "@/components/contact"
import CaseStudy from "@/components/case-study"

export const dynamicParams = false

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })))
}

type Params = Promise<{ lang: string; slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project || !isLocale(lang)) return {}
  return {
    title: `${project.name} — ${project.title[lang]}`,
    description: project.summary[lang],
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `/${l}/work/${slug}`])) },
    openGraph: { images: [project.cover.src] },
  }
}

export default async function WorkPage({ params }: { params: Params }) {
  const { slug } = await params
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()

  return (
    <main>
      <Navigation />
      <CaseStudy project={projects[index]} next={projects[(index + 1) % projects.length]} />
      <Contact />
    </main>
  )
}
