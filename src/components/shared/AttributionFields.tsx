'use client'

import { useEffect, useState } from 'react'

// Campos ocultos con la campaña de origen (UTM, clic de anuncio, web de
// procedencia) para los formularios de la web. Se leen de la URL actual en el
// momento: no se guarda nada en el navegador. Si el visitante llegó con UTM a
// otra página, el backend lo recupera por el hash diario de la visita.
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
const CLICK_IDS = ['gclid', 'fbclid', 'ttclid', 'msclkid', 'li_fat_id'] as const

export default function AttributionFields() {
  const [values, setValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const url = new URL(window.location.href)
    const next: Record<string, string> = { landing_path: url.pathname }
    for (const p of PARAMS) {
      const v = url.searchParams.get(p)
      if (v) next[p] = v
    }
    const click = CLICK_IDS.find((k) => url.searchParams.get(k))
    if (click) next.click_id_type = click
    try {
      const ref = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''
      if (ref && ref !== url.hostname.replace(/^www\./, '')) next.referrer_host = ref
    } catch {
      // referrer no válido
    }
    setValues(next)
  }, [])

  return (
    <>
      {Object.entries(values).map(([k, v]) => (
        <input key={k} type="hidden" name={`attr_${k}`} value={v} />
      ))}
    </>
  )
}
