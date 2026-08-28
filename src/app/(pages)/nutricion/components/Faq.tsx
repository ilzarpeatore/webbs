import FaqAccordion, { FaqItemType } from '@/components/shared/FaqAccordion'

const items: FaqItemType[] = [
  {
    question: '¿Cómo funciona la nutrición?',
    answer: 'Tu coach prepara opciones de comida para cada franja del día; al elegir tus comidas, la app te dice al momento si encajan con tu objetivo calórico.',
  },
  {
    question: '¿Puedo seguir mis propias preferencias o alergias?',
    answer: 'El cuestionario inicial las pregunta, pero hoy esa información no llega automáticamente a tu coach dentro del sistema — coméntaselo también por otro medio si es relevante para tu plan.',
  },
  {
    question: '¿Puedo sustituir un ingrediente de una receta?',
    answer: 'No, esa función no existe todavía. Puedes elegir entre las opciones asignadas por tu coach o el recetario general.',
  },
  {
    question: '¿Puedo llevar el control del agua que bebo desde la app?',
    answer: 'Hoy esa pantalla es solo una interfaz de referencia: no guarda tu histórico entre sesiones. No la recomendamos todavía como registro fiable.',
  },
  {
    question: '¿Las recetas tienen fotos reales de cada plato?',
    answer: 'Hoy no: el recetario usa imágenes de referencia, no fotografía real de cada plato. Es algo que iremos completando; mientras tanto, prioriza ingredientes, cantidades y macros exactos.',
  },
]

const Faq = () => <FaqAccordion items={items} title="Preguntas sobre nutrición" />

export default Faq
