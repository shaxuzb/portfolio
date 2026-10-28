"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { profile, projects, stats } from "@/lib/data"
import { ui } from "@/lib/i18n"
import { CountUp, FadeIn, Magnetic } from "@/components/reveal"
import Headline from "@/components/headline"
import { useLang } from "@/components/lang-provider"

export default function Hero() {
  const { t, href } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const featured = projects[0]

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] flex-col pt-28 sm:pt-32">
      <div className="container-x flex flex-1 flex-col">
        <FadeIn className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5" y={10}>
          <p className="label flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-ok animate-pulse-dot" />
            {t(profile.availability)}
          </p>
          <p className="label hidden sm:block">{t(profile.focus)}</p>
          <p className="label">
            {t(profile.location)} · {profile.timezoneLabel}
          </p>
        </FadeIn>

        <motion.div style={{ y: headlineY, opacity: fade }} className="mt-10 sm:mt-16 lg:mt-20">
          <Headline
            as="h1"
            delay={0.15}
            className="text-[clamp(2.6rem,9vw,9.25rem)] font-medium leading-[0.94] tracking-[-0.045em]"
            emClassName="font-serif font-normal italic tracking-[-0.02em] text-paper-dim"
            lines={ui.hero.headline}
          />
        </motion.div>

        <div className="mt-12 grid flex-1 items-end gap-10 pb-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <FadeIn delay={0.5} className="lg:col-span-5">
            <p className="max-w-[36ch] text-xl leading-snug text-paper-dim sm:text-2xl">
              {t(ui.hero.iAm)} <span className="text-paper">{t(profile.name)}</span> — {t(ui.hero.intro)}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 rounded-full bg-paper py-3 pl-6 pr-3 text-[15px] font-medium text-ink"
                >
                  {t(ui.hero.selectedWork)}
                  <span className="grid size-8 place-items-center rounded-full bg-ink text-paper transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-[-45deg]">
                    <ArrowDownRight size={16} />
                  </span>
                </a>
              </Magnetic>
              <a
                href={`https://t.me/${profile.telegram}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-[17px] text-[15px] transition-colors hover:border-paper"
              >
                Telegram
                <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.65} className="lg:col-span-5 lg:col-start-8">
            <Link
              href={href(`/work/${featured.slug}`)}
              data-cursor={t(ui.cursor.view)}
              className="group block overflow-hidden rounded-xl border border-line bg-ink-2"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featured.cover.src}
                  alt={`${featured.name} — ${t(featured.title)}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="label">
                  {t(ui.hero.nowDesigning)} — {featured.name}
                </span>
                <ArrowUpRight size={16} className="text-paper-dim transition-colors group-hover:text-paper" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn
              key={s.label.en}
              delay={0.2 + i * 0.08}
              className={`py-7 pr-4 sm:py-9 ${i % 2 === 1 ? "border-l border-line pl-5 sm:pl-8" : ""} ${
                i === 2 ? "lg:border-l lg:border-line lg:pl-8" : ""
              } ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}
            >
              <p className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl">
                <CountUp to={s.value} prefix={s.prefix} suffix={t(s.suffix)} />
              </p>
              <p className="mt-3 max-w-[24ch] text-sm leading-snug text-paper-dim">{t(s.label)}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
