import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿Cómo calcula la app mis calorías al empezar?',
    answer: 'Tras tus datos personales (edad, altura, peso, sexo) en el onboarding, la app calcula automáticamente tu metabolismo basal (BMR) y tu gasto calórico total (TDEE), con un primer plan de calorías y macros de partida antes de confirmar tu plan.',
  },
  {
    question: '¿Sabré si me paso de calorías en una comida antes de que sea tarde?',
    answer: 'Sí: cuando combinas las opciones de comida que te prepara tu coach para una franja del día, la app calcula en vivo si esa combinación se ajusta a tu objetivo calórico, si aún te faltan kcal o si te pasas, antes de añadirla a tu plan.',
  },
  {
    question: '¿Voy a perder fuerza mientras estoy en déficit?',
    answer: 'Es fácil perder fuerza en déficit si no se vigila el rendimiento. Por eso el peso y las repeticiones sugeridas se calculan según cómo entrenaste la última vez, con datos objetivos en vez de sensaciones, y siempre pendientes de la aprobación de tu coach.',
  },
  {
    question: '¿La app ajusta mis macros automáticamente según cómo evoluciona mi peso?',
    answer: 'No: hoy no existe un ajuste automático de macros según la evolución de tu peso. Tu coach revisa tus datos de progreso y es quien decide si toca modificar tu plan de calorías.',
  },
  {
    question: '¿Cómo mido si de verdad estoy perdiendo grasa, más allá de la báscula del día a día?',
    answer: 'En la sección de progreso ves tus métricas corporales (peso, medidas) configuradas por tu coach, con el último valor, el cambio respecto a la medición anterior y un gráfico de línea para seguir la evolución real, no solo el número de un día suelto.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Preguntas sobre pérdida de grasa" />

export default Faq
