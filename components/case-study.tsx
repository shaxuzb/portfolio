"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import type { Project, Shot } from "@/lib/data"
import { ui } from "@/lib/i18n"
import { FadeIn, LineReveal } from "@/components/reveal"
import { useLang } from "@/components/lang-provider"

function Board({ shot, index, priority }: { shot: Shot; index?: number; priority?: boolean }) {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1])
  const radius = useTransform(scrollYProgress, [0, 1], [28, 12])
  // Long boards (full landing pages) read better narrower than full-bleed.
  const tall = shot.h > shot.w * 1.4

  return (
    <figure ref={ref} className={tall ? "mx-auto max-w-[920px]" : ""}>
      <motion.div style={{ scale, borderRadius: radius }} className="overflow-hidden border border-line bg-ink-2">
        <Image
          src={shot.src}
          alt={t(shot.caption)}
          width={shot.w}
          height={shot.h}
          sizes={tall ? "920px" : "(min-width: 1440px) 1344px, 100vw"}
          priority={priority}
          className="h-auto w-full"
        />
      </motion.div>
      {index !== undefined && (
        <figcaption className="mt-4 flex items-center gap-4">
          <span className="label text-paper-mute">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-[15px] text-paper-dim">{t(shot.caption)}</span>
        </figcaption>
      )}
    </figure>
  )
}

export default function CaseStudy({ project, next }: { project: Project; next: Project }) {
  const { t, href } = useLang()
  const meta = [
    { k: t(ui.case.role), v: t(project.role) },
    { k: t(ui.case.platform), v: t(project.platform) },
    { k: t(ui.case.scope), v: t(project.scope) },
    { k: t(ui.case.timeline), v: t(project.year) || "—" },
  ]

  return (
    <article>
      <header className="container-x pt-28 sm:pt-36">
        <FadeIn y={10} className="flex items-center justify-between border-b border-line pb-5">
          <Link href={href("/") + "#work"} className="label group flex items-center gap-2 transition-colors hover:text-paper">
            <ArrowLeft size={14} className="transition-transform duration-500 group-hover:-translate-x-1" /> {t(ui.case.allWork)}
          </Link>
          <span className="label">{t(project.category)}</span>
        </FadeIn>

        <LineReveal
          as="h1"
          delay={0.1}
          className="mt-12 text-[clamp(3.25rem,11vw,11rem)] font-medium leading-[0.88] tracking-[-0.055em] sm:mt-16"
          lines={[project.name]}
        />
        <FadeIn delay={0.3}>
          <p className="mt-4 font-serif text-3xl italic text-paper-dim sm:text-5xl">{t(project.title)}</p>
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
        <Board shot={project.cover} priority />
      </div>

      <section className="container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="label mb-6">{t(ui.case.overview)}</p>
          <FadeIn>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{ borderColor: `${project.accent}55`, color: project.accent }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <FadeIn>
            <p className="text-2xl leading-snug tracking-[-0.015em] sm:text-[1.75rem]">{t(project.summary)}</p>
            <p className="mt-8 text-[17px] leading-relaxed text-paper-dim">{t(project.description)}</p>
          </FadeIn>
          <h2 className="label mt-14 mb-2">{t(ui.case.designed)}</h2>
          <ul>
            {project.highlights.map((h, i) => (
              <FadeIn key={h.en} delay={i * 0.05} y={12}>
                <li className="flex gap-6 border-t border-line py-5 text-[17px]">
                  <span className="label pt-1 text-paper-mute">{String(i + 1).padStart(2, "0")}</span>
                  {t(h)}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x space-y-16 sm:space-y-24">
        {project.gallery.map((g, i) => (
          <Board key={g.src} shot={g} index={i} />
        ))}
      </section>

      <Link
        href={href(`/work/${next.slug}`)}
        data-cursor={t(ui.cursor.next)}
        className="group container-x mt-24 block border-t border-line py-20 sm:mt-32 sm:py-28"
      >
        <p className="label mb-6">{t(ui.case.next)}</p>
        <div className="flex items-end justify-between gap-6">
          <p className="text-[clamp(3rem,9vw,9rem)] font-medium leading-[0.9] tracking-[-0.055em] transition-transform duration-1000 ease-[var(--ease-out-expo)] group-hover:translate-x-3">
            {next.name}
          </p>
          <ArrowUpRight className="mb-3 size-10 shrink-0 text-paper-dim transition-all duration-700 group-hover:rotate-45 group-hover:text-paper sm:size-16" />
        </div>
        <p className="mt-3 font-serif text-2xl italic text-paper-dim">{t(next.title)}</p>
      </Link>
    </article>
  )
}
