"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "motion/react"
import { useEffect, useRef } from "react"

const ease = [0.16, 1, 0.3, 1] as const

// Masks each line and slides it up into place. Pass lines as separate strings.
export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  as: Tag = "h2",
}: {
  lines: React.ReactNode[]
  className?: string
  lineClassName?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "p"
}) {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : undefined}
            transition={{ duration: 1.1, ease, delay: delay + i * 0.08 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, to, {
      duration: 1.8,
      ease,
      onUpdate: (v) => (node.textContent = prefix + Math.round(v) + suffix),
    })
    return () => controls.stop()
  }, [inView, to, prefix, suffix])
  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  )
}

// Element drifts toward the pointer while hovered.
export function Magnetic({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })
  const tx = useTransform(sx, (v) => `${v}px`)
  const ty = useTransform(sy, (v) => `${v}px`)
  return (
    <motion.div
      ref={ref}
      className="inline-block"
      style={{ x: tx, y: ty }}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * strength)
        y.set((e.clientY - r.top - r.height / 2) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
