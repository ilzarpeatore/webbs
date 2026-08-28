import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿El entrenamiento se ajusta automáticamente?',
    answer: 'El sistema calcula sugerencias de carga y repeticiones según tu rendimiento pasado, pero siempre quedan pendientes de que tu coach las apruebe — no cambia tu plan sin supervisión.',
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
    question: '¿Puedo importar mis entrenamientos desde otra app?',
    answer: 'No, hoy no existe importación desde Hevy, Strong ni ninguna otra app. Tu historial se construye entrenando dentro de BeStronger.',
  },
  {
    question: '¿Se puede entrenar sin ser cliente 1:1?',
    answer: 'Sí: hay un catálogo de entrenamientos sueltos navegable fuera de cualquier programa. El plan diseñado día a día por tu coach es lo que distingue al servicio 1:1.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Preguntas sobre el entrenamiento" />

export default Faq
