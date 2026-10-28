"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { profile, projects } from "@/lib/data"
import { FadeIn, LineReveal, Magnetic } from "@/components/reveal"
import LocalTime from "@/components/local-time"

export default function Contact() {
  return (
    <footer id="contact" className="relative scroll-mt-16 overflow-hidden border-t border-line">
      <div className="container-x pb-10 pt-24 sm:pt-32">
        <p className="label mb-10 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-ok animate-pulse-dot" />
          {profile.availability} · {profile.hours}
        </p>

        <div className="grid items-end gap-12 lg:grid-cols-12">
          <LineReveal
            className="text-[clamp(3.25rem,10vw,10rem)] font-medium leading-[0.9] tracking-[-0.05em] lg:col-span-9"
            lines={[
              "Have a product",
              <>
                in <span className="font-serif font-normal italic text-paper-dim">mind?</span>
              </>,
            ]}
          />
          <FadeIn delay={0.2} className="lg:col-span-3 lg:justify-self-end">
            <Magnetic strength={0.4}>
              <a
                href={profile.upwork}
                target="_blank"
                rel="noreferrer"
                data-cursor="Let's talk"
                className="group grid size-40 place-items-center rounded-full bg-paper text-center text-ink transition-transform duration-700 ease-[var(--ease-out-expo)] hover:scale-105 sm:size-48"
              >
                <span className="flex flex-col items-center gap-2 text-[15px] font-medium leading-tight">
                  <ArrowUpRight size={26} className="transition-transform duration-500 group-hover:rotate-45" />
                  Start a project
                </span>
              </a>
            </Magnetic>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-12 max-w-[52ch] text-[17px] leading-relaxed text-paper-dim">
            Send what you&apos;re building, the current challenges, or the features you need. I&apos;ll help clarify the
            requirements, outline a practical approach and the next steps.
          </p>
        </FadeIn>

        <div className="mt-24 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="label mb-4">Contact</h3>
            <ul className="space-y-1.5 text-[15px]">
              <li>
                <a href={profile.upwork} target="_blank" rel="noreferrer" className="link-underline">
                  Upwork
                </a>
              </li>
              {profile.email && (
                <li>
                  <a href={`mailto:${profile.email}`} className="link-underline">
                    {profile.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="label mb-4">Work</h3>
            <ul className="space-y-1.5 text-[15px]">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`} className="link-underline">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label mb-4">Local time</h3>
            <p className="text-[15px]">
              <LocalTime /> <span className="text-paper-mute">Tashkent, {profile.timezoneLabel}</span>
            </p>
          </div>
          <div className="sm:text-right lg:text-right">
            <h3 className="label mb-4">Navigate</h3>
            <a href="#top" className="link-underline text-[15px]">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex flex-col justify-between gap-2 border-t border-line py-6 sm:flex-row">
        <p className="label">© {new Date().getFullYear()} {profile.name}</p>
        <p className="label">Designed & built by hand in Next.js</p>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap px-2 text-center text-[21vw] font-medium leading-[0.78] tracking-[-0.07em] text-ink-3"
      >
        {profile.name.split(" ")[0]}
        <span className="font-serif font-normal italic"> A.</span>
      </div>
    </footer>
  )
}
