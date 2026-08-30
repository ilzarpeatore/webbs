import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const faqs: FaqItemType[] = [
  {
    question: '¿Cuál es el compromiso mínimo?',
    answer: 'El programa mínimo es de 12 semanas. Este tiempo es necesario para ver cambios reales en tu rendimiento, composición corporal o recuperación. Después puedes continuar, pausar o finalizar sin penalización.',
  },
  {
    question: '¿Cómo es la comunicación durante la asesoría?',
    answer: 'Te proporcionaré acceso a una app donde tendrás tu programa de entrenamiento, plan nutricional y recursos. Nos comunicaremos a través de WhatsApp o la app, y tendremos una llamada quincenal de 20-30 minutos para revisar tu progreso y hacer ajustes.',
  },
  {
    question: '¿Qué pasa si me lesiono durante el proceso?',
    answer: 'Trataremos de que esto no ocurra, pero si te lesionas en tu deporte o vida cotidiana, estarás en buenas manos para recuperarte. Adaptaremos el programa inmediatamente para mantener tu entrenamiento activo sin riesgo.',
  },
  {
    question: '¿Incluye nutrición o solo entrenamiento?',
    answer: 'Incluye ambos. El entrenamiento sin nutrición no funciona. Recibirás un plan nutricional adaptado a tu objetivo, tu estilo de vida y tus preferencias. No son dietas restrictivas, sino pautas sostenibles.',
  },
  {
    question: '¿Puedo entrenar en casa o necesito gimnasio?',
    answer: 'Me adaptaré a la instalación y material disponible en el momento de comenzar la asesoría. El programa puede cambiar en el momento que tengas acceso a otro material o instalación, siempre buscando optimizar tu entrenamiento.',
  },
  {
    question: '¿Qué pasa después de las 12 semanas?',
    answer: 'Hacemos una revisión completa de tu progreso. Entonces decides si continúas con un nuevo bloque, cambias de objetivo o finalizas. Muchos clientes continúan porque ven resultados reales.',
  },
]

const Faq = () => <FaqAccordion items={faqs} title="Preguntas frecuentes" eyebrow="Dudas comunes" titleSize="lg" />

export default Faq
