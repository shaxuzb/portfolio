"use client"

import { experience, languages, profile, skills } from "@/lib/data"
import { ui } from "@/lib/i18n"
import { FadeIn } from "@/components/reveal"
import Headline from "@/components/headline"
import { useLang } from "@/components/lang-provider"

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="scroll-mt-16 border-t border-line">
      <div className="container-x py-24 sm:py-32">
        <p className="label mb-10">{t(ui.about.label)}</p>

        <Headline
          as="p"
          className="max-w-[24ch] text-[clamp(2rem,4.4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.04em]"
          lines={ui.about.headline}
        />

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="space-y-5 lg:col-span-5">
            {profile.about.map((p) => (
              <p key={p.en.slice(0, 20)} className="text-[17px] leading-relaxed text-paper-dim">
                {t(p)}
              </p>
            ))}
            <div className="rounded-xl border border-line bg-ink-2 p-6">
              <p className="label mb-3">{t(ui.about.designSystem)}</p>
              <p className="text-2xl font-medium tracking-[-0.03em]">
                LUNAR <span className="font-serif font-normal italic text-paper-dim">{t(ui.about.lunarEm)}</span>
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-paper-dim">{t(ui.about.lunarBody)}</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
              {languages.map((l) => (
                <p key={l.name.en} className="text-sm">
                  {t(l.name)} <span className="text-paper-mute">— {t(l.level)}</span>
                </p>
              ))}
            </div>
          </FadeIn>

          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn>
              <h3 className="label mb-4">{t(ui.about.experience)}</h3>
            </FadeIn>
            <ol>
              {experience.map((e, i) => (
                <FadeIn key={e.company} delay={i * 0.06} y={14}>
                  <li className="group border-t border-line py-7 last:border-b">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                      <span className="text-2xl font-medium tracking-[-0.03em] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5">
                        {e.company}
                      </span>
                      <span className="label">{t(e.period)}</span>
                    </div>
                    <p className="mt-1 text-[15px]">
                      {t(e.role)} <span className="text-paper-mute">· {t(e.product)}</span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {e.points.map((pt) => (
                        <li key={pt.en} className="flex gap-3 text-[15px] leading-relaxed text-paper-dim">
                          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-paper-mute" />
                          {t(pt)}
                        </li>
                      ))}
                    </ul>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g, i) => (
            <FadeIn key={g.group.en} delay={i * 0.06} className="pr-6">
              <h3 className="label mb-4">{t(g.group)}</h3>
              <ul className="space-y-1.5">
                {g.items.map((s) => (
                  <li key={s.en} className="text-[17px] tracking-[-0.01em]">
                    {t(s)}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
