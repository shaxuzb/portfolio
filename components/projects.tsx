"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { projects, type Project } from "@/lib/data"
import { ui } from "@/lib/i18n"
import { FadeIn, LineReveal } from "@/components/reveal"
import Headline from "@/components/headline"
import { useLang } from "@/components/lang-provider"

const ease = [0.16, 1, 0.3, 1] as const

function FeaturedRow({ project, index, flip }: { project: Project; index: number; flip: boolean }) {
  const { t, href } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const clip = useTransform(scrollYProgress, [0, 0.35], ["inset(12% 6% 12% 6% round 20px)", "inset(0% 0% 0% 0% round 14px)"])

  return (
    <article ref={ref} className="border-t border-line py-12 sm:py-16 lg:py-24">
      <FadeIn className="mb-8 flex items-center justify-between gap-4 sm:mb-10" y={12}>
        <span className="label">
          <span className="text-paper">{String(index + 1).padStart(2, "0")}</span> / {t(project.category)}
        </span>
        <span className="label">{t(project.year)}</span>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Link
          href={href(`/work/${project.slug}`)}
          data-cursor={t(ui.cursor.viewCase)}
          className={`group block lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}
          aria-label={`${project.name} — ${t(ui.work.viewCase)}`}
        >
          <motion.div style={{ clipPath: clip }} className="relative aspect-[16/9] overflow-hidden bg-ink-2">
            <Image
              src={project.cover.src}
              alt={`${project.name} — ${t(project.title)}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-[1.025]"
            />
          </motion.div>
        </Link>

        <div className={`flex flex-col justify-between lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
          <div>
            <LineReveal
              key={project.slug}
              as="h3"
              className="text-[clamp(2.6rem,5.2vw,5rem)] font-medium leading-[0.95] tracking-[-0.045em]"
              lines={[project.name]}
            />
            <FadeIn delay={0.1}>
              <p className="mt-3 font-serif text-2xl italic text-paper-dim sm:text-3xl">{t(project.title)}</p>
              <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-paper-dim">{t(project.summary)}</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="mt-10">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-sm">
              <div>
                <dt className="label mb-1.5">{t(ui.work.platform)}</dt>
                <dd className="leading-snug">{t(project.platform)}</dd>
              </div>
              <div>
                <dt className="label mb-1.5">{t(ui.work.scope)}</dt>
                <dd className="leading-snug" style={{ color: project.accent }}>
                  {t(project.scope)}
                </dd>
              </div>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-paper-dim">
                  {s}
                </li>
              ))}
            </ul>
            <Link href={href(`/work/${project.slug}`)} className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium">
              <span className="link-underline">{t(ui.work.viewCase)}</span>
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </article>
  )
}

function Card({ project }: { project: Project }) {
  const { t, href } = useLang()
  return (
    <Link href={href(`/work/${project.slug}`)} data-cursor={t(ui.cursor.view)} className="group block">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-ink-2">
        <Image
          src={project.cover.src}
          alt={`${project.name} — ${t(project.title)}`}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-medium tracking-[-0.03em]">{project.name}</h3>
          <p className="mt-1 text-[15px] text-paper-dim">{t(project.title)}</p>
        </div>
        <span className="label mt-2 shrink-0 text-right">{t(project.category).split(" · ")[1] ?? t(project.category)}</span>
      </div>
    </Link>
  )
}

const filters = ["all", "saas", "mobile", "web"] as const

export default function Projects() {
  const { t } = useLang()
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const [filter, setFilter] = useState<(typeof filters)[number]>("all")
  const visible = rest.filter((p) => filter === "all" || p.kind === filter)

  return (
    <section id="work" className="container-x scroll-mt-16 pt-24 sm:pt-32">
      <div className="mb-14 grid gap-8 sm:mb-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label mb-6">{t(ui.work.label)}</p>
          <Headline
            className="text-[clamp(2.5rem,6.4vw,6.5rem)] font-medium leading-[0.94] tracking-[-0.045em]"
            lines={ui.work.headline}
          />
        </div>
        <FadeIn delay={0.15} className="self-end lg:col-span-4 lg:col-start-9">
          <p className="max-w-[40ch] text-[17px] leading-relaxed text-paper-dim">
            {t(ui.work.intro)}
          </p>
        </FadeIn>
      </div>

      {featured.map((p, i) => (
        <FeaturedRow key={p.slug} project={p} index={i} flip={i % 2 === 1} />
      ))}

      <div className="border-t border-line pb-8 pt-16 sm:pt-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <Headline
            className="text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-[0.95] tracking-[-0.045em]"
            lines={ui.work.more}
          />
          <div className="flex flex-wrap gap-2" role="tablist" aria-label={t(ui.work.filterLabel)}>
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-[13px] transition-colors duration-300 ${
                  filter === f ? "border-paper bg-paper text-ink" : "border-line-strong text-paper-dim hover:text-paper"
                }`}
              >
                {t(ui.work.filters[f])}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease }}
              >
                <Card project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {visible.length === 0 && <p className="text-paper-dim">{t(ui.work.empty)}</p>}
      </div>
    </section>
  )
}
