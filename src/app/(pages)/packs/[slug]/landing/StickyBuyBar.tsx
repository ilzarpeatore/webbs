'use client'

import { useEffect, useState } from 'react'

// Barra de compra fija abajo en móvil (+11 % de conversión en los estudios
// citados en docs/LANDING_PACKS_ESTUDIO.md). Aparece al pasar el hero y se
// oculta cuando la sección de compra está a la vista, para no tapar el botón.
export default function StickyBuyBar({ priceLabel, accent, detail }: { priceLabel: string; accent: string; detail: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const offer = document.getElementById('comprar')
    let offerInView = false
    const update = () => setVisible(window.scrollY > 640 && !offerInView)
    const observer = offer
      ? new IntersectionObserver(([entry]) => {
          offerInView = entry.isIntersecting
          update()
        })
      : null
    if (offer && observer) observer.observe(offer)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      observer?.disconnect()
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-default-950 text-lg leading-tight font-semibold">{priceLabel}</p>
          <p className="text-default-500 truncate text-xs">{detail}</p>
        </div>
        <a
          href="#comprar"
          tabIndex={visible ? 0 : -1}
          style={{ backgroundColor: accent }}
          className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md"
        >
          Empezar
        </a>
      </div>
    </div>
  )
}
