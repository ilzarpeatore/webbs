import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

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

const PricingFaq = () => <FaqAccordion items={pricingFaqData} title="Sobre los planes y el pago" />

export default PricingFaq
