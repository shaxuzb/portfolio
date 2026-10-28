import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import Navigation from "@/components/navigation"
import Contact from "@/components/contact"
import CaseStudy from "@/components/case-study"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.name} — ${project.title}`,
    description: project.summary,
    openGraph: { images: [project.cover] },
  }
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
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
