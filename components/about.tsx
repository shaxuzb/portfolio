"use client"

import { education, experience, languages, profile, stack } from "@/lib/data"
import { FadeIn, LineReveal } from "@/components/reveal"

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-line">
      <div className="container-x py-24 sm:py-32">
        <p className="label mb-10">(04) About</p>

        <LineReveal
          as="p"
          className="max-w-[22ch] text-[clamp(2rem,4.4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.04em]"
          lines={[
            "I care less about",
            <>
              screens and more about <span className="font-serif font-normal italic text-paper-dim">the workflow</span>
            </>,
            "behind them.",
          ]}
        />

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="space-y-5 lg:col-span-5">
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)} className="text-[17px] leading-relaxed text-paper-dim">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4">
              {languages.map((l) => (
                <p key={l.name} className="text-sm">
                  {l.name} <span className="text-paper-mute">— {l.level}</span>
                </p>
              ))}
            </div>
          </FadeIn>

          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn>
              <h3 className="label mb-4">Experience</h3>
            </FadeIn>
            <ul>
              {experience.map((e, i) => (
                <FadeIn key={e.company} delay={i * 0.06} y={14}>
                  <li className="group flex flex-col justify-between gap-1 border-t border-line py-5 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="text-xl font-medium tracking-[-0.02em] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5">
                      {e.company}
                    </span>
                    <span className="text-[15px] text-paper-dim sm:text-right">{e.role}</span>
                  </li>
                </FadeIn>
              ))}
              <FadeIn delay={0.2} y={14}>
                <li className="flex flex-col justify-between gap-1 border-y border-line py-5 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="text-xl font-medium tracking-[-0.02em]">{education.school}</span>
                  <span className="text-[15px] text-paper-dim sm:text-right">
                    B.Sc. Computer Science · {education.end}
                  </span>
                </li>
              </FadeIn>
            </ul>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-y-10 border-t border-line pt-10 lg:grid-cols-4">
          {stack.map((g, i) => (
            <FadeIn key={g.group} delay={i * 0.06} className="pr-6">
              <h3 className="label mb-4">{g.group}</h3>
              <ul className="space-y-1.5">
                {g.items.map((s) => (
                  <li key={s} className="text-[17px] tracking-[-0.01em]">
                    {s}
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
