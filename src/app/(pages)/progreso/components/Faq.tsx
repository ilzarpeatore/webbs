import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿Cómo veo mi progreso?',
    answer: 'En la sección de Progreso y en 6 pantallas de estadísticas detalladas: series por músculo, balance muscular, mapa de calor corporal, ejercicios más frecuentes, mejores marcas y resumen mensual.',
  },
  {
    question: '¿Tengo que rellenar algo aparte para ver mis estadísticas?',
    answer: 'No, se calculan automáticamente a partir de lo que registras entrenando y de tus métricas corporales. Sí hay un chequeo diario corto (sueño, energía, estrés, agujetas) que alimenta tu estado de recuperación.',
  },
  {
    question: '¿Puedo subir fotos de progreso (antes/después)?',
    answer: 'Todavía no: esa función no existe hoy en la app. Si la incorporamos, lo anunciaremos aquí.',
  },
  {
    question: '¿Qué es el anillo "Strain" que veo en el Home?',
    answer: 'Hoy es un espacio a la espera de datos reales de carga de entrenamiento; se activa con cifras reales en cuanto conectas Apple Health o Health Connect. Hasta entonces, la propia app te avisa de que son datos de demostración.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Preguntas sobre tu progreso" />

export default Faq
