import type { PackLanding } from './types'

// Pack: programa de glúteo para mujeres, 12 semanas. El precio, la imagen y
// lo que incluye se configuran en el panel (→ Packs) con este mismo slug.
const landing: PackLanding = {
  slug: 'programa-gluteos-mujer-12-semanas',
  updatedAt: '2026-10-01',
  accent: '#d6336c',
  audience: 'mujeres que quieren desarrollar y dar forma al glúteo, en casa o en el gimnasio',

  seo: {
    title: 'Programa de glúteos para mujeres: 12 semanas, 3 días',
    description:
      'Programa de entrenamiento de glúteos para mujeres: 12 semanas, 3 días por semana, en casa o en el gimnasio. Progresión, técnica, nutrición y app. Pago único.',
    keywords: [
      'programa de glúteos',
      'rutina de glúteos mujer',
      'entrenamiento glúteos 12 semanas',
      'aumentar glúteos',
      'rutina glúteos en casa',
      'hip thrust',
    ],
  },

  hero: {
    eyebrow: 'Programa de glúteos para mujeres · 12 semanas',
    title: 'Un glúteo más firme y con más forma en 12 semanas, entrenando 3 días',
    highlight: 'en 12 semanas',
    subtitle:
      'El plan que hace trabajar al glúteo (y no a los cuádriceps ni a la zona lumbar), con la progresión de cada semana ya pensada. En casa o en el gimnasio, desde la app.',
    bullets: [
      '3 sesiones de 45–55 minutos a la semana',
      'Vídeo de técnica de cada ejercicio',
      'La carga sube semana a semana según lo que registras',
      'Nutrición y hábitos incluidos para que el músculo crezca',
    ],
    sampleDay: {
      label: 'Semana 5 · Día A — Glúteo (cadera)',
      exercises: [
        { name: 'Hip thrust con barra', dose: '4 × 8–10' },
        { name: 'Peso muerto rumano', dose: '3 × 10' },
        { name: 'Sentadilla búlgara', dose: '3 × 10 / pierna' },
        { name: 'Abducción de cadera', dose: '3 × 15–20' },
        { name: 'Puente de glúteo a una pierna', dose: '2 × 12' },
      ],
      footnote: 'Pesos y descansos ajustados en la app según tus registros.',
    },
  },

  summary: [
    'Es un programa de entrenamiento de fuerza de 12 semanas para mujeres que quieren desarrollar y dar forma al glúteo.',
    'Se entrena 3 días por semana, en sesiones de 45 a 55 minutos, en el gimnasio o en casa con mancuernas y bandas elásticas.',
    'Combina ejercicios de cadera (hip thrust, peso muerto rumano), de rodilla (sentadilla búlgara) y de abducción, con progresión de carga semanal.',
    'Incluye plan de nutrición, hábitos diarios y seguimiento del progreso en la app de BeStronger.',
    'Está pensado para nivel principiante e intermedio.',
  ],

  facts: [
    { label: 'Duración', value: '12 semanas' },
    { label: 'Frecuencia', value: '3 días por semana' },
    { label: 'Sesiones', value: '45–55 minutos' },
    { label: 'Dónde', value: 'Gimnasio o casa (mancuernas y bandas)' },
    { label: 'Nivel', value: 'Principiante e intermedio' },
    { label: 'Formato', value: 'App BeStronger (iOS y Android)' },
  ],

  pain: {
    title: '¿Te suena alguna de estas?',
    intro: 'Entrenas (o quieres empezar), pero el glúteo no termina de cambiar.',
    points: [
      {
        title: 'Haces sentadillas y lo notas en las piernas',
        text: 'Los cuádriceps crecen y el glúteo no. No es tu genética: es el ejercicio y cómo lo ejecutas.',
      },
      {
        title: 'Cada semana, una rutina distinta',
        text: 'Copias entrenamientos de redes sociales. Sin progresión, el músculo no tiene motivos para crecer.',
      },
      {
        title: 'Molestias en la zona lumbar',
        text: 'Cuando el glúteo no trabaja, la espalda compensa: más molestias y menos resultado.',
      },
      {
        title: 'No sabes cuánto peso poner',
        text: 'Repites el mismo peso durante meses, o subes de golpe y te frustras.',
      },
    ],
    turn: 'El problema nunca fuiste tú. Es entrenar sin un plan pensado para el glúteo y sin una progresión que puedas seguir.',
  },

  whyFailed: {
    title: 'Por qué otras rutinas no te han funcionado',
    items: [
      {
        myth: 'Más días y más repeticiones = más glúteo',
        truth: 'El glúteo crece con carga progresiva y descanso. Tres días bien planteados rinden más que seis improvisados.',
      },
      {
        myth: 'La sentadilla es el mejor ejercicio de glúteo',
        truth: 'Es buen ejercicio, pero carga mucho el cuádriceps. El programa prioriza movimientos de cadera como el hip thrust.',
      },
      {
        myth: 'Si entreno con peso me pondré «voluminosa»',
        truth: 'Ganar músculo lleva meses y da forma, no volumen. Lo que hace que el cuerpo «abulte» es sobre todo la alimentación, no las pesas.',
      },
      {
        myth: 'Con entrenar es suficiente',
        truth: 'Sin proteína ni descanso, el músculo no se construye. Por eso el programa incluye nutrición y hábitos.',
      },
    ],
  },

  method: {
    title: 'El método, en tres pilares',
    intro: 'Cada sesión está diseñada para que el glúteo sea el que trabaja.',
    pillars: [
      {
        icon: 'lucide:target',
        title: 'Glúteo desde todos los ángulos',
        text: 'Ejercicios de cadera, de rodilla y de abducción para trabajar el glúteo mayor y el glúteo medio.',
      },
      {
        icon: 'lucide:trending-up',
        title: 'Progresión semana a semana',
        text: 'Registras tus series en la app y la carga se ajusta para que sigas avanzando sin estancarte.',
      },
      {
        icon: 'lucide:shield-check',
        title: 'Técnica que cuida tu espalda',
        text: 'Vídeos y pautas de ejecución para sentir el glúteo, no la zona lumbar.',
      },
    ],
  },

  phases: {
    title: 'Tus 12 semanas, fase a fase',
    intro: 'Un plan con principio y final: sabes en qué punto estás y qué viene después.',
    items: [
      {
        weeks: 'Semanas 1–4',
        title: 'Base y técnica',
        text: 'Aprendes los movimientos clave (hip thrust, bisagra de cadera, zancada) y empiezas a sentir el glúteo trabajar.',
      },
      {
        weeks: 'Semanas 5–8',
        title: 'Carga progresiva',
        text: 'Sube el peso y el volumen. Es la fase en la que el cambio empieza a notarse con la ropa.',
      },
      {
        weeks: 'Semanas 9–12',
        title: 'Intensificación',
        text: 'Más carga en los ejercicios principales y técnicas de intensidad. Terminas más fuerte y con el glúteo más firme.',
      },
    ],
  },

  includes: {
    title: 'Todo lo que incluye',
    items: [
      { icon: 'lucide:calendar-check', title: 'Programa de 12 semanas en la app', text: 'Cada día sabes qué toca: ejercicios, series, repeticiones y descansos.' },
      { icon: 'lucide:circle-play', title: 'Vídeos de técnica', text: 'Cómo hacer cada ejercicio y qué deberías sentir.' },
      { icon: 'lucide:house', title: 'Versión casa y gimnasio', text: 'Alternativas con mancuernas y bandas para cada ejercicio.' },
      { icon: 'lucide:salad', title: 'Plan de nutrición', text: 'Comidas con la proteína que el glúteo necesita para crecer.' },
      { icon: 'lucide:list-checks', title: 'Hábitos diarios', text: 'Pasos, agua y sueño: lo que hace que el resultado llegue.' },
      { icon: 'lucide:chart-line', title: 'Seguimiento de tu progreso', text: 'Pesos, medidas y fotos en la app para ver el cambio.' },
    ],
  },

  forWho: {
    yes: [
      'Quieres un glúteo más firme y con más forma, no solo «tonificar»',
      'Puedes entrenar 3 días a la semana',
      'Eres principiante o llevas poco tiempo entrenando con método',
      'Prefieres seguir un plan claro antes que improvisar',
    ],
    no: [
      'Buscas resultados en dos semanas',
      'No puedes dedicar al menos 3 sesiones semanales',
      'Tienes una lesión que te impide entrenar las piernas (consulta antes con tu médico o fisioterapeuta)',
    ],
  },

  evidence: {
    title: 'Lo que dice la evidencia',
    items: [
      {
        stat: '2× por semana',
        text: 'Entrenar cada músculo al menos dos veces por semana produce más hipertrofia que hacerlo una sola vez con el mismo volumen total.',
        source: { label: 'Schoenfeld et al., Sports Medicine (2016)', url: 'https://pubmed.ncbi.nlm.nih.gov/27102172/' },
      },
      {
        stat: '≈1,6 g/kg',
        text: 'de proteína al día es la ingesta a partir de la cual se maximiza la ganancia de masa muscular con entrenamiento de fuerza.',
        source: { label: 'Morton et al., British Journal of Sports Medicine (2018)', url: 'https://pubmed.ncbi.nlm.nih.gov/28698222/' },
      },
      {
        stat: 'Meses, no semanas',
        text: 'Ganar unos pocos kilos de músculo suele llevar a las mujeres de 6 meses a un año: el entrenamiento con peso da forma, no «volumen».',
        source: { label: 'Girls Gone Strong', url: 'https://www.girlsgonestrong.com/blog/articles/big-and-bulky/' },
      },
    ],
  },

  testimonials: [],

  offer: {
    title: 'Empieza hoy tu programa de glúteos',
    anchor: 'Una sola sesión con entrenador personal cuesta entre 30 y 60 €. Aquí tienes 12 semanas completas.',
    bullets: [
      'Pago único: sin suscripción ni permanencia',
      'Empiezas el mismo día desde la app',
      'Programa, nutrición, hábitos y seguimiento durante 12 semanas',
    ],
  },

  faq: [
    {
      question: '¿Puedo hacer el programa en casa?',
      answer:
        'Sí. Cada ejercicio tiene alternativa con mancuernas y bandas elásticas. En el gimnasio podrás cargar más peso, pero en casa también progresarás.',
    },
    {
      question: 'Soy principiante, ¿es para mí?',
      answer:
        'Sí. Las primeras cuatro semanas se centran en aprender la técnica, y la carga se adapta a lo que registras, así que empiezas a tu nivel.',
    },
    {
      question: '¿Cuánto tiempo necesito?',
      answer: 'Tres sesiones a la semana de 45 a 55 minutos, calentamiento incluido.',
    },
    {
      question: '¿Me voy a poner «voluminosa»?',
      answer:
        'No. Ganar músculo lleva meses y lo que consigues es un glúteo con más forma y más firme. El volumen general depende sobre todo de cuánto comes, y el plan de nutrición está ajustado a tu objetivo.',
    },
    {
      question: '¿En cuánto tiempo veré resultados?',
      answer:
        'Lo habitual es notar más fuerza y el glúteo más firme en las primeras 4–6 semanas. Los cambios de forma más evidentes llegan en la segunda mitad del programa si sigues el plan y la alimentación.',
    },
    {
      question: '¿Cómo lo recibo después de pagar?',
      answer:
        'Descarga la app de BeStronger y regístrate con el mismo email con el que pagaste. Al terminar el cuestionario inicial, el programa aparece en tu calendario. Si prefieres usar otro email, en el correo de compra tienes un código para activarlo.',
    },
    {
      question: '¿Es una suscripción?',
      answer: 'No. Es un pago único: no se renueva y no se te cobra nada más.',
    },
    {
      question: '¿Y si tengo alguna molestia o lesión?',
      answer:
        'En el cuestionario inicial indicas tus lesiones y molestias para que se tengan en cuenta. Si tienes una lesión diagnosticada, consulta antes con tu médico o fisioterapeuta.',
    },
  ],

  finalCta: {
    title: 'Dentro de 12 semanas te alegrarás de haber empezado hoy',
    text: 'Tres días a la semana, un plan claro y una progresión que funciona.',
  },
}

export default landing
