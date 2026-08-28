import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿La app reconoce la recomposición como objetivo, o es un caso genérico?',
    answer: 'La reconoce de forma nativa: en el cuestionario de entrenamiento del onboarding eliges explícitamente "recomposición" entre los tipos de objetivo, junto a perder grasa, ganar músculo o mantener.',
  },
  {
    question: '¿Por qué apenas veo cambios en la báscula si estoy siguiendo el plan?',
    answer: 'Es normal: la recomposición es más lenta y menos visible en el peso que perder grasa o ganar músculo por separado. No prometemos velocidad ni resultados garantizados — por eso la app también sigue tus medidas, tu % de grasa, tu rendimiento y tu constancia, para que tengas más señales que solo el número de la báscula.',
  },
  {
    question: '¿Cómo sé si mi alimentación está en el punto justo para recomponer?',
    answer: 'Tu coach te asigna las comidas de cada franja del día y la app te muestra en vivo si esa combinación encaja con tu objetivo calórico. En recomposición, mantenerte cerca de ese objetivo (sin mucho déficit ni mucho superávit) importa más que en otros objetivos.',
  },
  {
    question: '¿Qué papel juegan los hábitos y las rachas aquí?',
    answer: 'Al ser un proceso donde los resultados tardan en notarse, las rachas de hábitos calculadas en servidor y tu racha combinada ayudan a sostener la constancia diaria mientras esperas a que los cambios se acumulen.',
  },
  {
    question: '¿Puedo hablar con mi coach en tiempo real si tengo dudas?',
    answer: 'La comunicación con tu coach es asíncrona: notas por ejercicio, reporte de dolor, feedback y check-ins configurables. No hay chat en vivo.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Preguntas sobre recomposición corporal" />

export default Faq
