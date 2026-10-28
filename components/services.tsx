"use client"

import { ArrowUpRight } from "lucide-react"
import { principles, services } from "@/lib/data"
import { ui } from "@/lib/i18n"
import { FadeIn } from "@/components/reveal"
import Headline from "@/components/headline"
import { useLang } from "@/components/lang-provider"

export default function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="scroll-mt-16 border-t border-line">
      <div className="container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="label mb-6">{t(ui.services.label)}</p>
            <Headline
              className="text-[clamp(2.5rem,5vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.045em]"
              lines={ui.services.headline}
            />
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-[36ch] text-[17px] leading-relaxed text-paper-dim">
                {t(ui.services.intro)}
              </p>
            </FadeIn>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6">
          {services.map((s, i) => (
            <FadeIn key={s.title.en} delay={i * 0.04} y={16}>
              <li className="group relative grid grid-cols-[3rem_1fr_auto] items-start gap-4 border-t border-line py-7 sm:grid-cols-[4rem_1fr_auto] sm:py-9">
                <span className="label pt-2 text-paper-mute transition-colors group-hover:text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.03em] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-2 sm:text-[2rem]">
                    {t(s.title)}
                  </h3>
                  <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-paper-dim">{t(s.body)}</p>
                </div>
                <ArrowUpRight
                  size={22}
                  className="mt-2 text-paper-mute transition-all duration-500 group-hover:rotate-45 group-hover:text-paper"
                />
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>

      <div className="border-t border-line bg-ink-2/60">
        <div className="container-x py-24 sm:py-32">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label mb-6">{t(ui.services.approachLabel)}</p>
              <Headline
                className="text-[clamp(2.5rem,5vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.045em]"
                lines={ui.services.approachHeadline}
              />
            </div>
          </div>

          <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <FadeIn key={p.title.en} delay={(i % 3) * 0.08} y={20} className="border-b border-r border-line">
                <div className="group flex h-full min-h-[240px] flex-col justify-between p-7 transition-colors duration-500 hover:bg-ink-3 sm:p-9">
                  <span className="font-serif text-5xl italic text-paper-mute transition-colors duration-500 group-hover:text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-10">
                    <h3 className="text-xl font-medium tracking-[-0.02em]">{t(p.title)}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-paper-dim">{t(p.body)}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
