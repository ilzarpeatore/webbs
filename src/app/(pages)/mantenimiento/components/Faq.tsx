import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿Tiene sentido usar BeStronger si no quiero perder ni ganar peso?',
    answer: 'Sí: en el cuestionario de entrenamiento puedes elegir "mantener" como tipo de objetivo. Tu coach diseña tu plan de entrenamiento y nutrición pensado para sostener tu forma, no para forzar un cambio de peso.',
  },
  {
    question: '¿Qué pasa si un día no puedo seguir mi plan tal cual está?',
    answer: 'Puedes reorganizar tu semana arrastrando el entrenamiento a otro día, y se aplica al instante. También puedes marcar un día como no disponible para que tu coach lo revise, en vez de saltarte el plan sin más.',
  },
  {
    question: '¿Cómo evito irme desviando del objetivo poco a poco sin notarlo?',
    answer: 'Tu objetivo de calorías y macros se calcula desde el primer momento (BMR y TDEE), y al combinar las comidas que asigna tu coach, la app te dice en vivo si esa combinación encaja con tu objetivo de mantenimiento.',
  },
  {
    question: '¿La app ajusta mis macros sola si mi peso cambia con el tiempo?',
    answer: 'No: hoy no existe un ajuste automático de macros según la evolución de tu peso. Tu coach revisa tus datos y decide si conviene modificar tu plan de calorías.',
  },
  {
    question: '¿Cómo sé si estoy siendo constante de verdad, más allá de sentirlo?',
    answer: 'Tu historial muestra el porcentaje de sesiones completadas frente a las programadas. Para mantenimiento, esa constancia real importa más que superar una marca cada semana.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Preguntas sobre mantenimiento y forma física" />

export default Faq
