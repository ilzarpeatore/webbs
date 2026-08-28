import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿Todas mis respuestas del cuestionario personalizan mi plan?',
    answer: 'Hoy, tus datos personales (edad, altura, peso, sexo) calculan tu primer plan de calorías y macros. El resto de respuestas del cuestionario las revisa tu coach, que es quien diseña tu plan de entrenamiento y tus comidas.',
  },
  {
    question: '¿Puedo hablar con mi coach en cualquier momento?',
    answer: 'No hay chat en vivo dentro de la app. La comunicación funciona a través de notas en cada ejercicio, reportes de dolor, feedback tras cada entrenamiento y check-ins configurables por tu coach.',
  },
  {
    question: '¿Cuánto tarda en asignarme mi plan mi coach?',
    answer: 'Depende de tu coach y de tu plan contratado — no confirmamos un tiempo fijo aquí. Consúltalo directamente al contratar.',
  },
  {
    question: '¿Qué pasa si me registro sin código de invitación?',
    answer: 'Accedes como cliente de acceso general, con un catálogo de entrenamientos y recetas de calidad, en lugar de un plan diseñado día a día por un coach.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Preguntas sobre el proceso" />

export default Faq
