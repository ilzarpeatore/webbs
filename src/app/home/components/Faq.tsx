'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState } from 'react'

type AccordionItemType = {
  id: string
  question: string
  answer: string
}

const faqItemsData: AccordionItemType[] = [
  {
    id: 'hs-collapse-one',
    question: '¿Puedo hablar con mi coach en cualquier momento?',
    answer: 'No hay chat en vivo dentro de la app. La comunicación funciona a través de notas en cada ejercicio, reportes de dolor, feedback tras cada entrenamiento y check-ins configurables por tu coach.',
  },
  {
    id: 'hs-collapse-two',
    question: '¿El entrenamiento se ajusta automáticamente?',
    answer: 'El sistema calcula sugerencias de carga y repeticiones según tu rendimiento pasado, pero siempre quedan pendientes de que tu coach las apruebe — no cambia tu plan sin supervisión.',
  },
  {
    id: 'hs-collapse-three',
    question: '¿Qué pasa si tengo dolor entrenando?',
    answer: 'Puedes reportarlo al momento desde la propia sesión, indicando tipo, zona e intensidad; según la gravedad, tu coach recibe una notificación automática.',
  },
  {
    id: 'hs-collapse-four',
    question: '¿Y si no puedo entrenar un día concreto?',
    answer: 'Puedes reorganizar tu semana arrastrando el entrenamiento a otro día (se aplica al instante), o marcar el día como no disponible para que tu coach lo revise.',
  },
  {
    id: 'hs-collapse-five',
    question: '¿Cómo se paga el servicio?',
    answer: 'El pago se realiza en la web, no dentro de la app. Una vez confirmado, tu acceso se activa automáticamente.',
  },
]

const Faq = () => {
  const [activeId, setActiveId] = useState<string | null>('hs-collapse-one')

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="py-6 md:pb-10 lg:py-25">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-7.5 md:grid-cols-3 lg:grid-cols-12 lg:gap-25">
          <div className="col-span-1 space-y-10 lg:col-span-5 lg:space-y-20">
            <div className="space-y-4">
              <span className="border-default-200 text-default-800 mb-2.5 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">Preguntas frecuentes</span>
              <h2 className="text-default-950 text-2xl leading-normal font-medium tracking-normal md:text-4xl lg:text-5xl">Resolvemos tus dudas</h2>
            </div>

            <div className="flex flex-col items-center space-y-6 rounded-2xl bg-white p-5 text-center shadow-xl shadow-zinc-200/50 md:p-7.5">
              <div className="bg-primary-1 flex size-12.5 items-center justify-center rounded-full shadow-lg">
                <Icon icon="lucide:headset" className="size-6 text-white" />
              </div>
              <div className="flex flex-col items-center space-y-6">
                <h3 className="text-default-950 mb-3.5 text-xl font-medium md:text-2xl">¿No encuentras tu respuesta?</h3>
                <Link href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8.5 text-nowrap text-white shadow-xl transition-all duration-300 hover:scale-95">
                  <span className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                    <span className="flex h-14 items-center gap-3">
                      <span className="font-medium">Contáctanos</span>
                    </span>
                    <span className="absolute top-full flex h-14 items-center gap-3">
                      <span className="font-medium">Contáctanos</span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 space-y-4 lg:col-span-7">
            <div className="space-y-2.5 lg:col-span-7 lg:space-y-4">
              {faqItemsData.map((item) => {
                const isOpen = activeId === item.id
                return (
                  <div key={item.id} className={`rounded-2xl border border-zinc-100 bg-white shadow-sm ${isOpen ? 'shadow-md' : ''} transition-all duration-300`}>
                    <button onClick={() => toggleAccordion(item.id)} className={`inline-flex w-full items-center justify-between p-3.5 text-start font-bold transition hover:text-zinc-500 lg:p-5 ${isOpen ? 'text-default-950' : 'text-default-900'}`} aria-controls={item.id}>
                      <h3 className="text-base font-medium md:text-xl">{item.question}</h3>
                      <div className={`bg-default-200 relative flex size-6.5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 md:size-8.5 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                        <Icon icon="lucide:plus" className="text-default-800 size-3 md:size-5" />
                      </div>
                    </button>
                    <div id={item.id} className={`w-full overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-3.5 pb-3.5 text-base leading-normal text-zinc-500 md:text-lg md:leading-relaxed lg:px-5 lg:pb-5">{item.answer}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
