"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/data"
import { FadeIn, LineReveal } from "@/components/reveal"

function GalleryImage({ src, w, h, alt, priority }: { src: string; w: number; h: number; alt: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const radius = useTransform(scrollYProgress, [0, 1], [28, 12])

  return (
    <motion.div ref={ref} style={{ scale, borderRadius: radius }} className="overflow-hidden bg-ink-2">
      <Image src={src} alt={alt} width={w} height={h} sizes="(min-width: 1440px) 1344px, 100vw" priority={priority} className="h-auto w-full" />
    </motion.div>
  )
}

export default function CaseStudy({ project, next }: { project: Project; next: Project }) {
  const meta = [
    { k: "Role", v: project.role },
    { k: "Platforms", v: project.platforms.join(", ") },
    { k: "Stack", v: project.stack.join(", ") },
    { k: "Year", v: project.year },
  ]

  return (
    <article>
      <header className="container-x pt-28 sm:pt-36">
        <FadeIn y={10} className="flex items-center justify-between border-b border-line pb-5">
          <Link href="/#work" className="label group flex items-center gap-2 transition-colors hover:text-paper">
            <ArrowLeft size={14} className="transition-transform duration-500 group-hover:-translate-x-1" /> All work
          </Link>
          <span className="label">
            {project.index} / {project.category}
          </span>
        </FadeIn>

        <LineReveal
          as="h1"
          delay={0.1}
          className="mt-12 text-[clamp(3.25rem,11vw,11rem)] font-medium leading-[0.88] tracking-[-0.055em] sm:mt-16"
          lines={[project.name]}
        />
        <FadeIn delay={0.3}>
          <p className="mt-4 font-serif text-3xl italic text-paper-dim sm:text-5xl">{project.title}</p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-line pt-8 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.k} className="pr-6">
                <dt className="label mb-2">{m.k}</dt>
                <dd className="text-[15px] leading-snug">{m.v}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </header>

      <div className="container-x mt-14 sm:mt-20">
        <GalleryImage src={project.cover} w={1000} h={750} alt={`${project.name} cover`} priority />
      </div>

      <section className="container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="label mb-6">Overview</p>
          {project.metric && (
            <FadeIn>
              <p className="text-[clamp(4rem,8vw,7.5rem)] font-medium leading-none tracking-[-0.06em]" style={{ color: project.accent }}>
                {project.metric.value}
              </p>
              <p className="mt-3 max-w-[22ch] text-paper-dim">{project.metric.label}</p>
            </FadeIn>
          )}
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <FadeIn>
            <p className="text-2xl leading-snug tracking-[-0.015em] sm:text-[1.75rem]">{project.summary}</p>
            <p className="mt-8 text-[17px] leading-relaxed text-paper-dim">{project.description}</p>
          </FadeIn>
          <ul className="mt-12">
            {project.highlights.map((h, i) => (
              <FadeIn key={h} delay={i * 0.05} y={12}>
                <li className="flex gap-6 border-t border-line py-5 text-[17px]">
                  <span className="label pt-1 text-paper-mute">{String(i + 1).padStart(2, "0")}</span>
                  {h}
                </li>
              </FadeIn>
            ))}
          </ul>
          {project.live && (
            <FadeIn className="mt-10">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-line-strong px-6 py-3 text-[15px] transition-colors hover:border-paper"
              >
                Visit {project.live.replace(/^https?:\/\//, "")}
                <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="container-x space-y-6 sm:space-y-10">
        {project.gallery.map((g, i) => (
          <GalleryImage key={g.src} {...g} alt={`${project.name} screen ${i + 1}`} />
        ))}
      </section>

      <Link
        href={`/work/${next.slug}`}
        data-cursor="Next"
        className="group container-x mt-24 block border-t border-line py-20 sm:mt-32 sm:py-28"
      >
        <p className="label mb-6">Next project</p>
        <div className="flex items-end justify-between gap-6">
          <p className="text-[clamp(3rem,9vw,9rem)] font-medium leading-[0.9] tracking-[-0.055em] transition-transform duration-1000 ease-[var(--ease-out-expo)] group-hover:translate-x-3">
            {next.name}
          </p>
          <ArrowUpRight className="mb-3 size-10 shrink-0 text-paper-dim transition-all duration-700 group-hover:rotate-45 group-hover:text-paper sm:size-16" />
        </div>
        <p className="mt-3 font-serif text-2xl italic text-paper-dim">{next.title}</p>
      </Link>
    </article>
  )
}
