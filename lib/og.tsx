// Link-preview cards (Open Graph, 1200×630) drawn in the site's own style.
// Rendered at build time by next/og; fonts are bundled in assets/og-fonts.

import { readFile } from "node:fs/promises"
import { join } from "node:path"
import sharp from "sharp"
import { profile, projects, type Project } from "@/lib/data"
import { ui, type Line, type Locale } from "@/lib/i18n"

export const ogSize = { width: 1200, height: 630 }

const ink = "#0b0b0b"
const paper = "#ecebe6"
const dim = "#a3a29c"
const mute = "#6b6a66"
const line = "rgba(236,235,230,0.12)"
const ok = "#3ddc84"

export async function ogFonts() {
  const dir = join(process.cwd(), "assets/og-fonts")
  const font = (file: string) => readFile(join(dir, file))
  return [
    { name: "Geist", data: await font("Geist-Regular.ttf"), weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: await font("Geist-Medium.ttf"), weight: 500 as const, style: "normal" as const },
    { name: "Mono", data: await font("GeistMono-Regular.ttf"), weight: 400 as const, style: "normal" as const },
    { name: "Instrument", data: await font("InstrumentSerif-Italic.ttf"), weight: 400 as const, style: "italic" as const },
    { name: "Cormorant", data: await font("CormorantGaramond-MediumItalic.ttf"), weight: 500 as const, style: "italic" as const },
  ]
}

// Instrument Serif has no Cyrillic, so Russian italics use Cormorant (same as the site).
const serif = (lang: Locale) => (lang === "ru" ? "Cormorant" : "Instrument")

// The renderer can't read webp, so covers are converted to PNG data URLs.
async function cover(src: string, width: number) {
  const png = await sharp(join(process.cwd(), "public", src)).resize({ width }).png().toBuffer()
  return `data:image/png;base64,${png.toString("base64")}`
}

function Brand({ lang, right }: { lang: Locale; right: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 999,
            background: paper,
            color: ink,
            fontFamily: "Instrument",
            fontStyle: "italic",
            fontSize: 24,
            paddingBottom: 3,
          }}
        >
          m
        </div>
        <div style={{ display: "flex", fontSize: 22, fontWeight: 500, color: paper, letterSpacing: -0.4 }}>
          {profile.name[lang]}
          <span style={{ color: mute, marginLeft: 10 }}>/ {profile.role[lang]}</span>
        </div>
      </div>
      {right}
    </div>
  )
}

function Label({ children, color = dim }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Mono", fontSize: 15, letterSpacing: 2, textTransform: "uppercase", color }}>
      {children}
    </div>
  )
}

function Dot({ color }: { color: string }) {
  return <div style={{ width: 9, height: 9, borderRadius: 999, background: color }} />
}

export async function HomeCard({ lang }: { lang: Locale }) {
  const featured = projects.filter((p) => p.featured).slice(0, 4)
  const covers = await Promise.all(featured.map((p) => cover(p.cover.src, 520)))

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "52px 72px 56px",
        background: ink,
        backgroundImage:
          "radial-gradient(circle at 88% -10%, rgba(111,124,255,0.22), transparent 45%), radial-gradient(circle at 0% 110%, rgba(47,191,113,0.14), transparent 40%)",
        color: paper,
        fontFamily: "Geist",
      }}
    >
      <Brand
        lang={lang}
        right={
          <Label>
            <Dot color={ok} />
            {profile.availability[lang]}
          </Label>
        }
      />

      <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 500, letterSpacing: -3.6, lineHeight: 0.98 }}>
        {ui.hero.headline[lang].map((l: Line, i) => (
          // The renderer trims spaces at span edges, so word gaps around the italic part become margins.
          <div key={i} style={{ display: "flex", alignItems: "baseline" }}>
            {l.before && <span style={{ marginRight: l.before.endsWith(" ") ? 22 : 0 }}>{l.before.trim()}</span>}
            {l.em && (
              <span
                style={{
                  marginLeft: l.before && !l.before.endsWith(" ") ? 22 : 0,
                  fontFamily: serif(lang),
                  fontStyle: "italic",
                  fontWeight: lang === "ru" ? 500 : 400,
                  color: dim,
                  letterSpacing: -1,
                  fontSize: lang === "ru" ? 94 : 90,
                }}
              >
                {l.em}
              </span>
            )}
            {l.after && <span style={{ marginLeft: l.after.startsWith(" ") ? 22 : 0 }}>{l.after.trim()}</span>}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${line}`, paddingTop: 18 }}>
          <Label>{profile.focus[lang]}</Label>
          <Label color={mute}>
            {profile.location[lang]} · {profile.timezoneLabel}
          </Label>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {covers.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={featured[i].slug}
              src={src}
              width={252}
              height={142}
              style={{ borderRadius: 10, border: `1px solid ${line}`, objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function ProjectCard({ project, lang }: { project: Project; lang: Locale }) {
  const img = await cover(project.cover.src, 1280)
  const index = String(projects.indexOf(project) + 1).padStart(2, "0")
  const nameSize = project.name.length <= 8 ? 104 : project.name.length <= 11 ? 84 : 72

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        background: ink,
        backgroundImage: `radial-gradient(circle at 78% 62%, ${project.accent}40, transparent 52%)`,
        color: paper,
        fontFamily: "Geist",
        overflow: "hidden",
      }}
    >
      {/* Cover bleeds off the right edge, like a board lifted off the canvas. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        width={680}
        height={382}
        style={{
          position: "absolute",
          left: 560,
          top: 158,
          borderRadius: 18,
          border: `1px solid ${line}`,
          boxShadow: "0 40px 80px rgba(0,0,0,0.55)",
          objectFit: "cover",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "52px 72px 56px" }}>
        <Brand
          lang={lang}
          right={
            <Label color={mute}>
              {ui.og.caseStudy[lang]} · {index}
            </Label>
          }
        />

        <div style={{ display: "flex", flexDirection: "column", width: 450 }}>
          <Label color={project.accent}>
            <Dot color={project.accent} />
            {project.category[lang]}
          </Label>
          <div style={{ display: "flex", marginTop: 22, fontSize: nameSize, fontWeight: 500, letterSpacing: -nameSize * 0.045, lineHeight: 0.92 }}>
            {project.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: serif(lang),
              fontStyle: "italic",
              fontWeight: lang === "ru" ? 500 : 400,
              fontSize: lang === "ru" ? 36 : 34,
              lineHeight: 1.12,
              color: dim,
            }}
          >
            {project.title[lang]}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 450, borderTop: `1px solid ${line}`, paddingTop: 18 }}>
          <div style={{ display: "flex", fontSize: 20, color: paper }}>{project.platform[lang]}</div>
          <div style={{ display: "flex", fontSize: 18, color: project.accent }}>{project.scope[lang]}</div>
        </div>
      </div>
    </div>
  )
}
