"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) })
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    })

    // Route in-page anchor links through Lenis so they ease instead of jumping.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute("href")!
      const el = id === "#" ? document.body : document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: 0 })
      history.replaceState(null, "", id)
    }
    document.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener("click", onClick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
