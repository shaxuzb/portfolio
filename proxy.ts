import { NextResponse, type NextRequest } from "next/server"
import { defaultLocale, locales, type Locale } from "@/lib/i18n"

// Sends visitors without a language prefix to /uz, /ru or /en based on their browser.
function detect(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? ""
  for (const part of header.split(",")) {
    const code = part.split(";")[0].trim().slice(0, 2).toLowerCase()
    if ((locales as readonly string[]).includes(code)) return code as Locale
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return

  const url = request.nextUrl.clone()
  url.pathname = `/${detect(request)}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals, the API and any file with an extension (images, icons).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
