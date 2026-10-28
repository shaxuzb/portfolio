"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { profile, projects } from "@/lib/data"
import { ui } from "@/lib/i18n"
import { FadeIn, Magnetic } from "@/components/reveal"
import Headline from "@/components/headline"
import LocalTime from "@/components/local-time"
import { useLang } from "@/components/lang-provider"

export default function Contact() {
  const { t, href } = useLang()
  return (
    <footer id="contact" className="relative scroll-mt-16 overflow-hidden border-t border-line">
      <div className="container-x pb-10 pt-24 sm:pt-32">
        <p className="label mb-10 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-ok animate-pulse-dot" />
          {t(profile.availability)}
        </p>

        <div className="grid items-end gap-12 lg:grid-cols-12">
          <Headline
            className="text-[clamp(3rem,8.8vw,9rem)] font-medium leading-[0.92] tracking-[-0.05em] lg:col-span-9"
            lines={ui.contact.headline}
          />
          <FadeIn delay={0.2} className="lg:col-span-3 lg:justify-self-end">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${profile.email}`}
                data-cursor={t(ui.cursor.sayHi)}
                className="group grid size-40 place-items-center rounded-full bg-paper text-center text-ink transition-transform duration-700 ease-[var(--ease-out-expo)] hover:scale-105 sm:size-48"
              >
                <span className="flex flex-col items-center gap-2 px-4 text-[15px] font-medium leading-tight">
                  <ArrowUpRight size={26} className="transition-transform duration-500 group-hover:rotate-45" />
                  {t(ui.nav.getInTouch)}
                </span>
              </a>
            </Magnetic>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline mt-12 inline-block break-all text-[clamp(1.1rem,3vw,2.25rem)] tracking-[-0.02em]"
          >
            {profile.email}
          </a>
        </FadeIn>

        <div className="mt-24 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="label mb-4">{t(ui.contact.contact)}</h3>
            <ul className="space-y-1.5 text-[15px]">
              <li>
                <a href={`https://t.me/${profile.telegram}`} target="_blank" rel="noreferrer" className="link-underline">
                  Telegram · @{profile.telegram}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link-underline">
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="label mb-4">{t(ui.contact.work)}</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[15px]">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={href(`/work/${p.slug}`)} className="link-underline">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label mb-4">{t(ui.contact.localTime)}</h3>
            <p className="text-[15px]">
              <LocalTime /> <span className="text-paper-mute">{t(ui.nav.city)}, {profile.timezoneLabel}</span>
            </p>
          </div>
          <div className="lg:text-right">
            <h3 className="label mb-4">{t(ui.contact.navigate)}</h3>
            <a href="#top" className="link-underline text-[15px]">
              {t(ui.contact.backToTop)}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex flex-col justify-between gap-2 border-t border-line py-6 sm:flex-row">
        <p className="label">
          © {new Date().getFullYear()} {t(profile.name)}
        </p>
        <p className="label">{t(ui.contact.footerRole)}</p>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap px-2 text-center text-[19vw] font-medium leading-[0.78] tracking-[-0.07em] text-ink-3"
      >
        {t(profile.firstName)}
        <span className="font-serif font-normal italic"> {t(profile.initial)}</span>
      </div>
    </footer>
  )
}
