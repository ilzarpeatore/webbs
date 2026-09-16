'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type ConsentChoice = 'granted' | 'denied'

const STORAGE_KEY = 'cookie_consent'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const applyConsent = (choice: ConsentChoice) => {
  window.gtag?.('consent', 'update', {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  })
}

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentChoice | null
    if (stored === 'granted') {
      applyConsent('granted')
    } else if (stored === null) {
      setVisible(true)
    }
  }, [])

  const choose = (choice: ConsentChoice) => {
    localStorage.setItem(STORAGE_KEY, choice)
    applyConsent(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="border-default-200 fixed inset-x-4 bottom-4 z-50 rounded-2xl border bg-white p-5 shadow-xl md:inset-x-auto md:right-6 md:bottom-6 md:max-w-sm">
      <p className="text-default-600 text-sm">
        Usamos cookies de analítica para entender cómo se usa la web. Puedes aceptarlas o rechazarlas —{' '}
        <Link href="/privacy-policy" className="text-default-800 underline">
          más información
        </Link>
        .
      </p>
      <div className="mt-4 flex items-center gap-3">
        <button type="button" onClick={() => choose('denied')} className="border-default-200 text-default-800 flex-1 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-50">
          Rechazar
        </button>
        <button type="button" onClick={() => choose('granted')} className="flex-1 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
          Aceptar
        </button>
      </div>
    </div>
  )
}

export default CookieConsentBanner
