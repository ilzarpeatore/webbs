import { NextResponse } from 'next/server'
import { SITE_URL } from '@/config/constants'
import { attributionFrom, backendPost, browserOf, clientInfo, deviceOf, isBot, visitorHash } from '@/utils/webServer'

// Analítica propia SIN cookies (bckbs/docs/MARKETING_WEB.md): el navegador
// avisa de cada página vista; aquí se calcula el hash diario anónimo del
// visitante (la IP nunca sale de este servidor) y se manda al backend.
export async function POST(request: Request) {
  try {
    const { ip, userAgent, dnt } = await clientInfo()
    if (dnt || isBot(userAgent)) return new NextResponse(null, { status: 204 })

    const body = (await request.json().catch(() => null)) as { url?: string; referrer?: string } | null
    if (!body?.url) return new NextResponse(null, { status: 400 })

    const url = new URL(body.url, SITE_URL)
    const siteHost = new URL(SITE_URL).hostname
    if (url.hostname !== siteHost && url.hostname !== 'localhost') return new NextResponse(null, { status: 204 })

    const attribution = {
      ...attributionFrom(url, body.referrer ?? null, siteHost),
      visitor_hash: ip ? visitorHash(ip, userAgent) : undefined,
    }

    await backendPost('track', {
      path: url.pathname,
      device: deviceOf(userAgent),
      browser: browserOf(userAgent),
      attribution,
    }).catch(() => null)
  } catch {
    // La analítica nunca debe romper nada.
  }
  return new NextResponse(null, { status: 204 })
}
