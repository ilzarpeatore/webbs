import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿BeStronger usa inteligencia artificial en algún punto?',
    answer: 'Hay un asistente de soporte básico para dudas simples, pero da respuestas fijas -- no es una IA real ni sustituye a tu coach. El diseño y ajuste de tu plan de entrenamiento y nutrición pasa por un coach humano, no por un algoritmo sin supervisión.',
  },
  {
    question: '¿El sistema de auto-regulación de carga no es automático del todo?',
    answer: 'Calcula sugerencias de peso y repeticiones según tu rendimiento pasado, pero esas sugerencias quedan pendientes de que tu coach las apruebe antes de convertirse en tu objetivo real -- nunca cambian tu plan sin que un humano lo revise.',
  },
  {
    question: '¿Qué pasa si mi coach no está disponible en el momento?',
    answer: 'La comunicación con tu coach es asíncrona (notas, reportes de dolor, feedback, check-ins), no un chat en vivo -- pensado para que puedas entrenar sin depender de una respuesta inmediata.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Dudas sobre la comparativa" />

export default Faq
