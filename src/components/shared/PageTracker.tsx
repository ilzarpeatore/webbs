'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

// Avisa de cada página vista a /api/track (analítica propia sin cookies: no
// guarda nada en el navegador). Ver bckbs/docs/MARKETING_WEB.md.
export default function PageTracker() {
  const pathname = usePathname()
  const last = useRef<string | null>(null)

  useEffect(() => {
    const url = window.location.href
    if (last.current === url) return
    // El referrer externo solo cuenta en la primera página de la visita.
    const referrer = last.current === null ? document.referrer : ''
    last.current = url
    const body = JSON.stringify({ url, referrer })
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track', new Blob([body], { type: 'application/json' }))
      } else {
        fetch('/api/track', { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {})
      }
    } catch {
      // nada
    }
  }, [pathname])

  return null
}
