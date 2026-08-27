'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'

type FaqItemType = {
  question: string
  answer: string
}

const faqData: FaqItemType[] = [
  {
    question: '¿Cómo funciona el servicio?',
    answer: 'Te registras, respondes un cuestionario inicial, y accedes a tu plan de entrenamiento y nutrición dentro de la app, donde registras tu progreso día a día.',
  },
  {
    question: '¿El entrenamiento se ajusta automáticamente?',
    answer: 'El sistema calcula sugerencias de carga y repeticiones según tu rendimiento pasado, pero siempre quedan pendientes de que tu coach las apruebe — no cambia tu plan sin supervisión.',
  },
  {
    question: '¿Puedo hablar con mi coach en cualquier momento?',
    answer: 'No hay chat en vivo dentro de la app. La comunicación funciona a través de notas en cada ejercicio, reportes de dolor, feedback tras cada entrenamiento y check-ins configurables por tu coach.',
  },
  {
    question: '¿Qué pasa si tengo dolor entrenando?',
    answer: 'Puedes reportarlo al momento desde la propia sesión, indicando tipo, zona e intensidad; según la gravedad, tu coach recibe una notificación automática.',
  },
  {
    question: '¿Y si no puedo entrenar un día concreto?',
    answer: 'Puedes reorganizar tu semana arrastrando el entrenamiento a otro día (se aplica al instante), o marcar el día como no disponible para que tu coach lo revise.',
  },
  {
    question: '¿Cómo funciona la nutrición?',
    answer: 'Tu coach prepara opciones de comida para cada franja del día; al elegir tus comidas, la app te dice al momento si encajan con tu objetivo calórico.',
  },
  {
    question: '¿Puedo seguir una dieta con mis propias preferencias o alergias?',
    answer: 'El cuestionario inicial las pregunta, pero hoy esa información no llega automáticamente a tu coach dentro del sistema — coméntaselo también por otro medio si es relevante.',
  },
  {
    question: '¿La app funciona con mi reloj o pulsera?',
    answer: 'En Android, parcialmente sí (a través de Health Connect). En iOS todavía no está disponible. La conexión con relojes específicos no está operativa todavía.',
  },
  {
    question: '¿Cómo veo mi progreso?',
    answer: 'En la sección de Progreso y en 6 pantallas de estadísticas detalladas: series por músculo, balance muscular, mapa de calor corporal, ejercicios más frecuentes, mejores marcas y resumen mensual.',
  },
  {
    question: '¿Cómo se paga el servicio?',
    answer: 'El pago se realiza en la web, no dentro de la app (por políticas de Apple/Google); una vez confirmado, tu acceso se activa automáticamente.',
  },
  {
    question: '¿La app tiene una comunidad?',
    answer: 'Sí, puedes publicar, dar like, comentar y guardar publicaciones de otros usuarios de la app.',
  },
  {
    question: '¿Hay un chatbot de inteligencia artificial?',
    answer: 'Hay un asistente de soporte básico para consultas simples, pero hoy da respuestas fijas, no generadas por IA — para asesoría real, la vía es tu coach.',
  },
]

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(0)

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="pt-34 md:pt-42 md:pb-25 lg:pt-50">
      <div className="container">
        <div className="mb-12 space-y-3.5 text-center md:mb-25">
          <h3 className="text-3xl font-medium md:text-5xl lg:text-[68px]">Preguntas frecuentes</h3>
        </div>

        <div className="hs-accordion-group mx-auto space-y-2.5 lg:w-3xl">
          {faqData.map((faq, idx) => {
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
                  <div className="px-3.5 pb-3.5 text-base leading-normal text-zinc-500 md:leading-relaxed lg:px-5 lg:pb-5 lg:text-lg">{faq.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
