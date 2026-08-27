'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'

type FaqItemType = {
  question: string
  answer: string
}

const pricingFaqData: FaqItemType[] = [
  {
    question: '¿Qué diferencia hay entre los planes?',
    answer: 'Ninguna en funcionalidad: los 4 planes incluyen el mismo servicio de entrenamiento y nutrición con tu coach. La única diferencia es la duración del compromiso y el precio equivalente por mes.',
  },
  {
    question: '¿Cómo se paga el servicio?',
    answer: 'El pago se realiza en la web (bestronger.es), no dentro de la app, por políticas de Apple y Google. Una vez confirmado, tu acceso se activa automáticamente.',
  },
  {
    question: '¿Puedo cambiar de plan más adelante?',
    answer: 'Contacta con nosotros y lo revisamos juntos — no hay un flujo automático en la app para cambiar de plan hoy.',
  },
  {
    question: '¿Puedo cancelar cuando quiera?',
    answer: 'Depende de las condiciones de cada plan. Escríbenos a contacto@bestronger.es y te lo confirmamos según tu caso.',
  },
  {
    question: '¿El precio incluye la app?',
    answer: 'Sí, el acceso a la app forma parte del servicio. La app para iOS y Android estará disponible muy pronto.',
  },
]

const PricingFaq = () => {
  const [activeId, setActiveId] = useState<number | null>(0)

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="md:pb-25 lg:pb-50">
      <div className="container">
        <div className="mb-8 space-y-3.5 text-center md:mb-12.5">
          <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">Preguntas frecuentes</span>

          <h3 className="text-2xl font-medium md:text-4xl lg:text-5xl">Sobre los planes y el pago</h3>
        </div>

        <div className="hs-accordion-group mx-auto space-y-2.5 lg:w-3xl">
          {pricingFaqData.map((faq, idx) => {
            const isOpen = activeId === idx
            return (
              <div key={idx} className={`hs-accordion hs-accordion-active:shadow-md rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 ${isOpen ? 'active' : ''}`}>
                <button type="button" onClick={() => toggleAccordion(idx)} className="hs-accordion-toggle hs-accordion-active:text-default-950 text-default-900 inline-flex w-full items-center justify-between p-3.5 text-start font-bold transition hover:text-zinc-500 lg:p-5">
                  <h3 className="text-base font-medium md:text-xl">{faq.question}</h3>
                  <div className="hs-accordion-active:rotate-45 bg-default-200 relative flex size-6.5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 md:size-8.5">
                    <Icon icon="lucide:plus" className="text-default-800 size-3 md:size-5" />
                  </div>
                </button>

                <div className={`hs-accordion-content w-full overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-3.5 pb-3.5 text-base leading-normal text-zinc-500 md:text-lg md:leading-relaxed lg:px-5 lg:pb-5">{faq.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingFaq
