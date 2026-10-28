"use client"

import { useEffect, useRef, useState } from "react"

// A trailing dot that expands into a label over elements with data-cursor="…".
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    setEnabled(true)

    const pos = { x: -100, y: -100 }
    const target = { x: -100, y: -100 }
    let frame = 0

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      const hit = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]")
      setLabel(hit?.dataset.cursor ?? null)
    }
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.18
      pos.y += (target.y - pos.y) * 0.18
      if (ref.current) ref.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      frame = requestAnimationFrame(tick)
    }
    window.addEventListener("pointermove", onMove)
    frame = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  if (!enabled) return null

  return (
    <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference" aria-hidden>
      <div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink transition-[width,height] duration-500 ease-[var(--ease-out-expo)]"
        style={{ width: label ? 96 : 10, height: label ? 96 : 10 }}
      >
        <span
          className="font-mono text-[10px] uppercase tracking-[0.14em] transition-opacity duration-300"
          style={{ opacity: label ? 1 : 0 }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
