import type { PackLanding } from './types'

// Pack: pérdida de grasa para hombres de 30 a 45 años, 12 semanas. El precio,
// la imagen y lo que incluye se configuran en el panel (→ Packs) con este slug.
const landing: PackLanding = {
  slug: 'programa-perder-grasa-hombres-30-45',
  updatedAt: '2026-10-01',
  accent: '#ea580c',
  // Imágenes generadas con IA (Higgsfield, 2026-10-01). Ilustran el programa;
  // no son clientes reales ni resultados: no usarlas como «antes/después».
  images: {
    hero: { src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3JH4TAguJBLQPhgV9NBqgsV07mA/hf_20261001_114346_36301754-33f9-401d-a9f7-29c65f9acb15.png', alt: 'Hombre de unos 40 años haciendo sentadilla goblet con mancuerna en el gimnasio' },
    scene: { src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3JH4TAguJBLQPhgV9NBqgsV07mA/hf_20261001_114346_56cbcea4-d85b-41a0-81aa-03cb6f853c9f.png', alt: 'Hombre de unos 40 años preparando una cena saludable en casa con sus hijos' },
  },
  audience: 'hombres de 30 a 45 años con poco tiempo que quieren perder grasa sin dietas extremas',

  seo: {
    title: 'Programa para perder grasa hombres 30–45: 12 semanas',
    description:
      'Plan de 12 semanas para hombres de 30 a 45 años: pierde grasa con 3 entrenos de 40 minutos por semana y una alimentación flexible. Sin dietas extremas. Pago único.',
    keywords: [
      'perder peso hombres 40',
      'perder grasa hombre 35 años',
      'quitar barriga hombre',
      'programa pérdida de grasa 12 semanas',
      'entrenamiento para hombres ocupados',
      'dieta flexible hombres',
    ],
  },

  hero: {
    eyebrow: 'Para hombres de 30 a 45 años · 12 semanas',
    title: 'Pierde grasa y recupera tu forma en 12 semanas, sin dietas extremas',
    highlight: 'en 12 semanas',
    subtitle:
      'Tres entrenos de 40 minutos a la semana y una forma de comer que encaja con tu trabajo, tu familia y tus cenas fuera. Para bajar cintura, recuperar energía y volver a sentirte en forma.',
    bullets: [
      '3 sesiones de unos 40 minutos a la semana',
      'Sin dietas imposibles: comidas normales y flexibles',
      'Ejercicios pensados para articulaciones de más de 30',
      'Peso, cintura y hábitos medidos en la app',
    ],
    sampleDay: {
      label: 'Semana 3 · Día B — Fuerza cuerpo completo (40 min)',
      exercises: [
        { name: 'Sentadilla goblet', dose: '3 × 10' },
        { name: 'Press de banca con mancuernas', dose: '3 × 10' },
        { name: 'Remo con mancuerna', dose: '3 × 12 / lado' },
        { name: 'Peso muerto rumano', dose: '3 × 10' },
        { name: 'Finisher: swing + plancha', dose: '3 rondas' },
      ],
      footnote: 'Más un objetivo de pasos diario: el hábito que más suma al gasto calórico.',
    },
  },

  summary: [
    'Es un programa de 12 semanas para hombres de 30 a 45 años que quieren perder grasa sin dietas extremas ni pasar horas en el gimnasio.',
    'Combina 3 entrenamientos de fuerza de unos 40 minutos por semana, un objetivo de pasos diario y un déficit calórico moderado.',
    'Busca un ritmo de pérdida del 0,5 % al 1 % del peso corporal por semana, el recomendado para perder grasa conservando la masa muscular.',
    'Incluye plan de nutrición flexible, hábitos diarios y seguimiento de peso y cintura en la app de BeStronger.',
  ],

  facts: [
    { label: 'Duración', value: '12 semanas' },
    { label: 'Entrenos', value: '3 por semana, ~40 minutos' },
    { label: 'Dónde', value: 'Gimnasio o casa con mancuernas' },
    { label: 'Actividad', value: 'Objetivo de pasos diario progresivo' },
    { label: 'Nutrición', value: 'Déficit moderado y flexible' },
    { label: 'Nivel', value: 'Principiante e intermedio' },
  ],

  pain: {
    title: 'Si tienes entre 30 y 45, esto te suena',
    intro: 'No es falta de ganas. Es que tu vida ha cambiado y tu plan no.',
    points: [
      {
        title: 'La ropa aprieta y la barriga no se va',
        text: 'Los kilos se han ido sumando año a año: trabajo, hijos, cenas fuera y cada vez menos deporte.',
      },
      {
        title: 'Llegas al final del día sin energía',
        text: 'Duermes mal, tiras de café entre semana y el fin de semana «compensas».',
      },
      {
        title: 'Has probado dietas que no duran',
        text: 'Funcionan dos semanas; luego llegan las comidas de trabajo y las cenas y vuelves al punto de partida.',
      },
      {
        title: 'No tienes dos horas para el gimnasio',
        text: 'Y las rutinas que encuentras están pensadas para alguien de 20 años sin responsabilidades.',
      },
    ],
    turn: 'No necesitas más fuerza de voluntad. Necesitas un plan que encaje en la vida que tienes ahora.',
  },

  whyFailed: {
    title: 'Por qué no te ha funcionado hasta ahora',
    items: [
      {
        myth: 'Comer muy poco para bajar rápido',
        truth: 'Los déficits agresivos disparan el hambre y te hacen perder músculo. Un déficit moderado es el que se puede mantener 12 semanas.',
      },
      {
        myth: 'Hacer mucho cardio',
        truth: 'El cardio ayuda, pero la fuerza es la que conserva el músculo mientras bajas de peso. El programa combina fuerza y pasos.',
      },
      {
        myth: 'Abdominales para quitar la barriga',
        truth: 'No se puede quemar la grasa de una zona concreta. La barriga baja cuando baja tu grasa total.',
      },
      {
        myth: 'Prohibir alimentos',
        truth: 'Las dietas de prohibición no sobreviven a la vida real. Aquí aprendes a encajar comidas fuera y cenas con amigos.',
      },
    ],
  },

  method: {
    title: 'El método, en tres pilares',
    intro: 'Lo mínimo que funciona, hecho de forma constante durante 12 semanas.',
    pillars: [
      {
        icon: 'lucide:dumbbell',
        title: 'Fuerza, 3 días',
        text: 'Sesiones de cuerpo completo de unos 40 minutos para conservar músculo mientras pierdes grasa.',
      },
      {
        icon: 'lucide:footprints',
        title: 'Pasos diarios',
        text: 'Un objetivo de pasos que sube poco a poco: es el gasto que más suma sin quitarte tiempo.',
      },
      {
        icon: 'lucide:utensils',
        title: 'Déficit moderado y flexible',
        text: 'Comidas normales, raciones claras y margen para tu vida social.',
      },
    ],
  },

  phases: {
    title: 'Tus 12 semanas, fase a fase',
    intro: 'Sabes en qué punto estás y qué toca después.',
    items: [
      {
        weeks: 'Semanas 1–4',
        title: 'Arranque',
        text: 'Ordenas comidas y sueño, creas el hábito de entrenar y empiezas a bajar. Notarás los primeros cambios en la energía.',
      },
      {
        weeks: 'Semanas 5–8',
        title: 'Pérdida de grasa constante',
        text: 'Con el déficit ajustado, el cuerpo responde: baja la cintura y suben tus pesos en el gimnasio.',
      },
      {
        weeks: 'Semanas 9–12',
        title: 'Consolidación',
        text: 'Afinas lo que te funciona y aprendes a mantener el resultado cuando termine el programa.',
      },
    ],
  },

  includes: {
    title: 'Todo lo que incluye',
    items: [
      { icon: 'lucide:calendar-check', title: 'Programa de 12 semanas en la app', text: 'Tres sesiones semanales con ejercicios, series y descansos.' },
      { icon: 'lucide:utensils', title: 'Plan de nutrición flexible', text: 'Raciones y comidas tipo, con margen para comer fuera.' },
      { icon: 'lucide:footprints', title: 'Hábitos diarios', text: 'Pasos, sueño y agua, con recordatorios y seguimiento.' },
      { icon: 'lucide:circle-play', title: 'Vídeos de técnica', text: 'Para entrenar seguro aunque lleves años sin hacerlo.' },
      { icon: 'lucide:ruler', title: 'Seguimiento de peso y cintura', text: 'Ves tu progreso real semana a semana.' },
      { icon: 'lucide:heart-pulse', title: 'Adaptado a tus molestias', text: 'Indicas lesiones y molestias en el cuestionario inicial.' },
    ],
  },

  forWho: {
    yes: [
      'Tienes entre 30 y 45 años y te sobran kilos',
      'Tienes poco tiempo: trabajo, familia o ambas cosas',
      'Quieres un plan que puedas mantener, no un reto de 30 días',
      'Puedes entrenar 3 días a la semana',
    ],
    no: [
      'Buscas perder 10 kilos en un mes',
      'No estás dispuesto a cambiar nada de tu alimentación',
      'Tienes una enfermedad o medicación que requiere control médico de la dieta (consulta antes con tu médico)',
    ],
  },

  evidence: {
    title: 'Lo que dice la evidencia',
    items: [
      {
        stat: '0,5–1 % por semana',
        text: 'es el ritmo de pérdida de peso recomendado para perder grasa conservando la mayor cantidad posible de masa muscular.',
        source: { label: 'Helms, Aragon y Fitschen, J Int Soc Sports Nutr (2014)', url: 'https://pubmed.ncbi.nlm.nih.gov/24864135/' },
      },
      {
        stat: '8.000–10.000 pasos',
        text: 'al día: en adultos de menos de 60 años, caminar más se asocia a menor mortalidad hasta llegar a esa franja.',
        source: { label: 'Paluch et al., The Lancet Public Health (2022)', url: 'https://pubmed.ncbi.nlm.nih.gov/35247352/' },
      },
      {
        stat: '≈1,6 g/kg',
        text: 'de proteína al día es la ingesta a partir de la cual se maximiza la ganancia y conservación de músculo con entrenamiento de fuerza.',
        source: { label: 'Morton et al., British Journal of Sports Medicine (2018)', url: 'https://pubmed.ncbi.nlm.nih.gov/28698222/' },
      },
    ],
  },

  testimonials: [],

  offer: {
    title: 'Empieza hoy tus 12 semanas',
    anchor: 'Una sola sesión con entrenador personal cuesta entre 30 y 60 €. Aquí tienes 12 semanas de entrenamiento, nutrición y seguimiento.',
    bullets: [
      'Pago único: sin suscripción ni permanencia',
      'Empiezas el mismo día desde la app',
      'Entrenamiento, nutrición, hábitos y seguimiento durante 12 semanas',
    ],
  },

  faq: [
    {
      question: '¿Necesito ir al gimnasio?',
      answer: 'No es imprescindible. Con unas mancuernas puedes hacerlo en casa; en el gimnasio tendrás más opciones de carga.',
    },
    {
      question: '¿Tengo que contar calorías?',
      answer:
        'No es obligatorio. El plan te da raciones y comidas tipo. Si prefieres contar calorías, la app te lo permite.',
    },
    {
      question: '¿Puedo salir a cenar o tomarme una cerveza?',
      answer:
        'Sí. El plan es flexible precisamente para que puedas mantenerlo con tu vida social. Te enseñamos a encajar esas comidas sin salirte del objetivo.',
    },
    {
      question: '¿Cuánto peso voy a perder?',
      answer:
        'Depende de tu punto de partida. Un ritmo sano es del 0,5 % al 1 % de tu peso por semana: para alguien de 90 kg, entre 0,45 y 0,9 kg semanales. No prometemos cifras cerradas porque cada cuerpo responde distinto.',
    },
    {
      question: 'Tengo molestias de rodilla o de espalda, ¿puedo hacerlo?',
      answer:
        'En el cuestionario inicial indicas tus molestias para que se tengan en cuenta y los ejercicios tienen alternativas. Si tienes una lesión diagnosticada, consulta antes con tu médico o fisioterapeuta.',
    },
    {
      question: '¿Cómo lo recibo después de pagar?',
      answer:
        'Descarga la app de BeStronger y regístrate con el mismo email con el que pagaste. Al terminar el cuestionario inicial, el programa aparece en tu calendario. Si usas otro email, en el correo de compra tienes un código para activarlo.',
    },
    {
      question: '¿Es una suscripción?',
      answer: 'No. Es un pago único: no se renueva y no se te cobra nada más.',
    },
  ],

  finalCta: {
    title: 'En 12 semanas puedes estar en otro punto',
    text: 'Tres entrenos a la semana, una forma de comer que puedes mantener y un plan que encaja en tu vida.',
  },
}

export default landing
