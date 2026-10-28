"use client"

import type { Line, Locale } from "@/lib/i18n"
import { LineReveal } from "@/components/reveal"
import { useLang } from "@/components/lang-provider"

// Renders a translated, line-revealed headline; the `em` part is set in italic serif.
export default function Headline({
  lines,
  className,
  as,
  delay,
  emClassName = "font-serif font-normal italic text-paper-dim",
}: {
  lines: Record<Locale, Line[]>
  className?: string
  as?: "h1" | "h2" | "h3" | "p"
  delay?: number
  emClassName?: string
}) {
  const { lang } = useLang()
  return (
    <LineReveal
      key={lang}
      as={as}
      delay={delay}
      className={className}
      lines={lines[lang].map((line, i) => (
        <span key={i}>
          {line.before}
          {line.em && (
            <span className={`${line.em.length <= 14 ? "whitespace-nowrap " : ""}${emClassName}`}>{line.em}</span>
          )}
          {line.after}
        </span>
      ))}
    />
  )
}
