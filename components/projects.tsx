"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { projects, type Project } from "@/lib/data"
import { FadeIn, LineReveal } from "@/components/reveal"

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const clip = useTransform(scrollYProgress, [0, 0.35], ["inset(12% 6% 12% 6% round 20px)", "inset(0% 0% 0% 0% round 14px)"])

  return (
    <article ref={ref} className="border-t border-line py-12 sm:py-16 lg:py-24">
      <FadeIn className="mb-8 flex items-center justify-between gap-4 sm:mb-10" y={12}>
        <span className="label">
          <span className="text-paper">{project.index}</span> / {project.category}
        </span>
        <span className="label">{project.year}</span>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Link
          href={`/work/${project.slug}`}
          data-cursor="View case"
          className={`group block lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}
          aria-label={`${project.name} case study`}
        >
          <motion.div style={{ clipPath: clip }} className="relative aspect-[4/3] overflow-hidden bg-ink-2">
            <Image
              src={project.cover}
              alt={`${project.name} — ${project.title}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-[1.025]"
            />
          </motion.div>
        </Link>

        <div className={`flex flex-col justify-between lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
          <div>
            <LineReveal
              as="h3"
              className="text-[clamp(2.6rem,5.2vw,5rem)] font-medium leading-[0.95] tracking-[-0.045em]"
              lines={[project.name]}
            />
            <FadeIn delay={0.1}>
              <p className="mt-3 font-serif text-2xl italic text-paper-dim sm:text-3xl">{project.title}</p>
              <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-paper-dim">{project.summary}</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="mt-10">
            {project.metric && (
              <div className="flex items-end gap-4 border-t border-line pt-6">
                <span className="text-6xl font-medium leading-none tracking-[-0.05em]" style={{ color: project.accent }}>
                  {project.metric.value}
                </span>
                <span className="max-w-[16ch] pb-1 text-sm leading-snug text-paper-dim">{project.metric.label}</span>
              </div>
            )}
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-sm">
              <div>
                <dt className="label mb-1.5">Role</dt>
                <dd className="leading-snug">{project.role}</dd>
              </div>
              <div>
                <dt className="label mb-1.5">Platforms</dt>
                <dd className="leading-snug">{project.platforms.join(", ")}</dd>
              </div>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-paper-dim">
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href={`/work/${project.slug}`}
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium"
            >
              <span className="link-underline">View case study</span>
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="container-x scroll-mt-16 pt-24 sm:pt-32">
      <div className="mb-14 grid gap-8 sm:mb-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label mb-6">(01) Selected work</p>
          <LineReveal
            className="text-[clamp(2.75rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.045em]"
            lines={[
              "Products in",
              <>
                <span className="font-serif font-normal italic text-paper-dim">daily</span> production
              </>,
            ]}
          />
        </div>
        <FadeIn delay={0.15} className="self-end lg:col-span-4 lg:col-start-9">
          <p className="max-w-[40ch] text-[17px] leading-relaxed text-paper-dim">
            Not concept shots. Each of these is used by real teams, stores and customers — tracking field staff, running
            retail operations, collecting debts and taking orders.
          </p>
        </FadeIn>
      </div>

      {projects.map((p, i) => (
        <ProjectRow key={p.slug} project={p} flip={i % 2 === 1} />
      ))}
    </section>
  )
}
