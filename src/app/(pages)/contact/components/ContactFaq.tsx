import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const contactFaqData: FaqItemType[] = [
  {
    question: '¿Cómo funciona el servicio?',
    answer: 'Te registras, respondes un cuestionario inicial, y accedes a tu plan de entrenamiento y nutrición dentro de la app, donde registras tu progreso día a día.',
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
    question: '¿La app funciona con mi reloj o pulsera?',
    answer: 'En Android, parcialmente sí (a través de Health Connect). En iOS todavía no está disponible.',
  },
  {
    question: '¿Cómo se paga el servicio?',
    answer: 'El pago se realiza en la web, no dentro de la app. Una vez confirmado, tu acceso se activa automáticamente.',
  },
]

const ContactFaq = () => <FaqAccordion items={contactFaqData} title="Preguntas frecuentes" />

export default ContactFaq
