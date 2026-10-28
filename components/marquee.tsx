import { Asterisk } from "lucide-react"

const words = ["React", "React Native", "Next.js", "TypeScript", "SaaS", "ERP", "CRM", "Dashboards", "Expo", "Offline-first"]

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {words.map((w, i) => (
        <span key={w} className="flex items-center">
          <span
            className={`px-6 text-[clamp(2.5rem,6vw,5.5rem)] leading-none tracking-[-0.04em] sm:px-10 ${
              i % 2 ? "font-serif italic text-paper-dim" : "font-medium"
            }`}
          >
            {w}
          </span>
          <Asterisk className="text-signal" size={28} strokeWidth={1.5} />
        </span>
      ))}
    </div>
  )
  return (
    <section className="overflow-hidden border-b border-line py-10 sm:py-14" aria-label={words.join(", ")}>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </section>
  )
}
