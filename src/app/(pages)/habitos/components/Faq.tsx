import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿Los hábitos los elijo yo o me los asigna mi coach?',
    answer: 'Ambas cosas: puedes crear hábitos personales libremente, adoptar hábitos de la biblioteca que cura tu coach, o recibir uno asignado directamente por él.',
  },
  {
    question: '¿Cómo funciona un hábito con objetivo numérico?',
    answer: 'Al tocar el día se abre un modal donde indicas el valor real conseguido; el círculo semanal se rellena según el porcentaje de cumplimiento, no solo hecho o no hecho.',
  },
  {
    question: '¿Cómo se calcula mi racha?',
    answer: 'La racha se calcula en el servidor, no en tu dispositivo, así que es la misma la veas desde donde la veas.',
  },
  {
    question: '¿Los hábitos sustituyen al entrenamiento?',
    answer: 'No: son la pieza que conecta el entrenamiento y la nutrición con el resto del día (dormir, beber agua, leer, moverte), no un sustituto de tu plan de entrenamiento.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Preguntas sobre hábitos" />

export default Faq
