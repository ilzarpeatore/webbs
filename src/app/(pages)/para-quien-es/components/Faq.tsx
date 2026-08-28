import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿Voy a poder hablar con mi coach cuando quiera?',
    answer: 'No hay chat en vivo; la comunicación es a través de notas, reportes de dolor y feedback estructurado. Preferimos ser claros con esto desde el principio.',
  },
  {
    question: '¿La app conecta con mi reloj?',
    answer: 'Hoy, solo parcialmente y solo en Android a través de Health Connect. En iOS todavía no está disponible.',
  },
  {
    question: '¿Puedo pagar desde la app?',
    answer: 'No; el pago se hace en la web, y la app solo refleja el acceso ya activo.',
  },
  {
    question: '¿Qué pasa si no soy cliente 1:1?',
    answer: 'Accedes a un catálogo general de entrenamientos y recetas, con el mismo sistema de hábitos y progreso — sin un plan diseñado día a día por un coach.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Dudas antes de decidirte" />

export default Faq
