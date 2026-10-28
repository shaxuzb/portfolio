"use client"

import { useEffect, useState } from "react"
import { profile } from "@/lib/data"

const format = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: profile.timezone,
})

export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const update = () => setTime(format.format(new Date()))
    update()
    const id = setInterval(update, 10_000)
    return () => clearInterval(id)
  }, [])

  // Render a fixed-width placeholder on the server to avoid layout shift.
  return <span className="tabular-nums">{time ?? "--:--"}</span>
}
