import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿Cómo sé cuántas series necesito por grupo muscular?',
    answer: 'Tu coach define el volumen de tu plan. La app te muestra las series totales completadas por grupo muscular semana a semana, comparadas con el periodo anterior, para que ambos veáis si el volumen real coincide con lo planeado.',
  },
  {
    question: '¿Cómo se calcula mi superávit calórico?',
    answer: 'Tras responder tus datos personales en el onboarding, la app calcula tu BMR/TDEE y un primer plan de calorías y macros pensado para tu objetivo. Tu coach lo revisa a partir de ahí.',
  },
  {
    question: '¿La progresión de carga es automática o la controla mi coach?',
    answer: 'El sistema calcula una sugerencia de peso y repeticiones basada en tu rendimiento real (series completadas, RIR/RPE registrado), pero siempre queda pendiente de aprobación de tu coach antes de convertirse en tu objetivo — la progresión se basa en datos, no en adivinar.',
  },
  {
    question: '¿Puedo ver si estoy dejando algún grupo muscular atrás?',
    answer: 'Sí: el radar de balance muscular compara el volumen actual de cada grupo con el periodo anterior, y el mapa de calor corporal te deja navegar semana a semana para detectar desequilibrios.',
  },
  {
    question: '¿Cómo sé si de verdad estoy más fuerte que antes?',
    answer: 'Tu historial de entrenamientos registra peso, reps y RIR/RPE de cada sesión, marca tus récords personales y calcula tu 1RM estimado por ejercicio — datos objetivos, no solo cómo te sientes.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Preguntas sobre ganar músculo" />

export default Faq
