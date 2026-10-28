"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { profile } from "@/lib/data"
import LocalTime from "@/components/local-time"

const items = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > last && y > 240)
      last = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-700 ease-[var(--ease-out-expo)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled && !open ? "border-b border-line bg-ink/70 backdrop-blur-xl" : "border-b border-transparent"}`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3" aria-label={`${profile.name}, home`}>
            <span className="grid size-7 place-items-center rounded-full bg-paper font-serif text-[17px] italic leading-none text-ink">
              s
            </span>
            <span className="text-[15px] font-medium tracking-tight">
              {profile.name}
              <span className="ml-2 hidden text-paper-mute transition-colors group-hover:text-paper-dim lg:inline">
                / {profile.role}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim md:flex">
            <span className="size-1.5 rounded-full bg-ok animate-pulse-dot" />
            <span>Tashkent</span>
            <LocalTime />
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="link-underline text-[14px] text-paper-dim transition-colors hover:text-paper">
                {item.label}
              </Link>
            ))}
            <a
              href={profile.upwork}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-paper px-4 py-2 text-[13px] font-medium text-ink transition-transform duration-500 ease-[var(--ease-out-expo)] hover:scale-[1.04]"
            >
              Hire me
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-9 items-center gap-2 rounded-full border border-line-strong px-4 text-[13px] md:hidden"
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-5 pb-10 pt-28 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="flex flex-col">
              {items.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-line py-4 text-5xl tracking-tight"
                  >
                    {item.label}
                    <span className="label">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-end justify-between">
              <div className="label space-y-1">
                <p className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-ok" /> {profile.availability}
                </p>
                <p>
                  Tashkent · <LocalTime />
                </p>
              </div>
              <a href={profile.upwork} target="_blank" rel="noreferrer" className="rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink">
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
