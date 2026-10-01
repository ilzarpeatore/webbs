import type { PackLanding } from './types'

// Pack: hipertrofia con poco tiempo (2–3 días), 30–45 años, 12 semanas. El
// precio, la imagen y lo que incluye se configuran en el panel (→ Packs).
const landing: PackLanding = {
  slug: 'programa-ganar-musculo-poco-tiempo',
  updatedAt: '2026-10-01',
  accent: '#4f46e5',
  audience: 'personas de 30 a 45 años que quieren ganar masa muscular y solo pueden entrenar 2 o 3 días por semana',

  seo: {
    title: 'Programa para ganar músculo con poco tiempo: 2–3 días',
    description:
      'Gana masa muscular en 12 semanas entrenando 2 o 3 días por semana. Rutina de cuerpo completo para 30–45 años con poco tiempo, nutrición y app. Pago único.',
    keywords: [
      'ganar masa muscular con poco tiempo',
      'rutina 2 días a la semana hipertrofia',
      'rutina 3 días ganar músculo',
      'ganar músculo a los 40',
      'programa de volumen 12 semanas',
      'rutina full body',
    ],
  },

  hero: {
    eyebrow: 'Volumen con poco tiempo · 30–45 años · 12 semanas',
    title: 'Gana músculo en 12 semanas entrenando solo 2 o 3 días a la semana',
    highlight: 'solo 2 o 3 días',
    subtitle:
      'Hipertrofia de alta eficiencia para agendas imposibles: sesiones de cuerpo completo de 45–60 minutos en las que cada serie cuenta. Sin relleno y sin vivir en el gimnasio.',
    bullets: [
      '2 o 3 sesiones por semana (tú eliges)',
      'Sesiones de 45–60 minutos',
      'Nutrición para ganar músculo sin acumular grasa',
      'Progresión registrada serie a serie en la app',
    ],
    sampleDay: {
      label: 'Semana 6 · Día A — Cuerpo completo (50 min)',
      exercises: [
        { name: 'Sentadilla o prensa', dose: '3 × 6–8' },
        { name: 'Press de banca', dose: '3 × 6–8' },
        { name: 'Remo con barra', dose: '3 × 8–10' },
        { name: 'Peso muerto rumano', dose: '2 × 8–10' },
        { name: 'Elevaciones laterales + curl', dose: '2 × 12–15' },
      ],
      footnote: 'Series a 1–3 repeticiones del fallo: menos series, más estímulo.',
    },
  },

  summary: [
    'Es un programa de hipertrofia de 12 semanas para personas de 30 a 45 años que quieren ganar masa muscular con poco tiempo para entrenar.',
    'Se entrena 2 o 3 días por semana con rutinas de cuerpo completo de 45 a 60 minutos, trabajando cada músculo al menos dos veces por semana.',
    'Prioriza ejercicios multiarticulares, series cercanas al fallo y progresión de cargas, que es lo que más músculo produce por minuto entrenado.',
    'Incluye plan de nutrición con un superávit calórico moderado y alta en proteína, hábitos de descanso y seguimiento en la app de BeStronger.',
  ],

  facts: [
    { label: 'Duración', value: '12 semanas' },
    { label: 'Frecuencia', value: '2 o 3 días por semana' },
    { label: 'Sesiones', value: '45–60 minutos, cuerpo completo' },
    { label: 'Dónde', value: 'Gimnasio (barra, mancuernas, máquinas)' },
    { label: 'Nivel', value: 'Intermedio (o principiante con algo de base)' },
    { label: 'Nutrición', value: 'Superávit moderado, proteína alta' },
  ],

  pain: {
    title: 'Quieres ganar músculo, pero tu agenda no te deja',
    intro: 'Tienes ganas. Lo que no tienes son cinco tardes libres a la semana.',
    points: [
      {
        title: 'Las rutinas de 5 o 6 días no son para ti',
        text: 'Las empiezas, fallas dos días seguidos y la semana se descuadra. Al mes lo dejas.',
      },
      {
        title: 'Entrenas, pero no cambias',
        text: 'Vas al gimnasio «cuando puedes», sin plan, y llevas años con el mismo cuerpo y los mismos pesos.',
      },
      {
        title: 'Comes «sano», pero no suficiente',
        text: 'Sin calorías ni proteína suficientes, el músculo no tiene con qué crecer.',
      },
      {
        title: 'Sientes que a los 30 y tantos ya no es como antes',
        text: 'Recuperas peor, duermes menos y piensas que ya es tarde. No lo es.',
      },
    ],
    turn: 'Para ganar músculo no necesitas más días. Necesitas que cada sesión cuente.',
  },

  whyFailed: {
    title: 'Lo que te han contado (y por qué no es así)',
    items: [
      {
        myth: 'Para crecer hay que entrenar 5 o 6 días',
        truth: 'Con 2–3 sesiones de cuerpo completo trabajas cada músculo 2–3 veces por semana, la frecuencia que la evidencia asocia a más crecimiento.',
      },
      {
        myth: 'Cuantas más series, mejor',
        truth: 'A partir de cierto volumen el beneficio extra es pequeño y la fatiga, grande. Mejor pocas series bien hechas y cerca del fallo.',
      },
      {
        myth: 'Para hacer volumen hay que comer de todo',
        truth: 'Basta un superávit pequeño. Comer sin control añade más grasa que músculo.',
      },
      {
        myth: 'Después de los 30 ya no se gana músculo',
        truth: 'Se gana músculo a cualquier edad con entrenamiento de fuerza progresivo. Lo que cambia es la recuperación, y el programa la tiene en cuenta.',
      },
    ],
  },

  method: {
    title: 'El método, en tres pilares',
    intro: 'Máximo estímulo, mínima pérdida de tiempo.',
    pillars: [
      {
        icon: 'lucide:layers',
        title: 'Cuerpo completo, 2–3 días',
        text: 'Cada sesión trabaja todo el cuerpo, así cada músculo recibe estímulo varias veces por semana aunque entrenes poco.',
      },
      {
        icon: 'lucide:flame',
        title: 'Series que cuentan',
        text: 'Ejercicios multiarticulares y series cerca del fallo: el máximo estímulo con el mínimo número de series.',
      },
      {
        icon: 'lucide:trending-up',
        title: 'Progresión y recuperación',
        text: 'Registras cada serie, la carga sube cuando toca y el volumen se ajusta a cómo recuperas.',
      },
    ],
  },

  phases: {
    title: 'Tus 12 semanas, fase a fase',
    intro: 'Cada bloque prepara el siguiente.',
    items: [
      {
        weeks: 'Semanas 1–4',
        title: 'Acumulación',
        text: 'Afinas la técnica, fijas tus pesos de partida, ajustas la alimentación y empiezas a subir cargas.',
      },
      {
        weeks: 'Semanas 5–8',
        title: 'Progresión',
        text: 'Más carga en los ejercicios básicos y volumen ajustado a tu recuperación. Es cuando más se nota el cambio.',
      },
      {
        weeks: 'Semanas 9–12',
        title: 'Intensificación',
        text: 'Técnicas de intensidad en los accesorios y récords en los básicos. Terminas con más músculo y más fuerza.',
      },
    ],
  },

  includes: {
    title: 'Todo lo que incluye',
    items: [
      { icon: 'lucide:calendar-check', title: 'Programa de 12 semanas en la app', text: 'Versión de 2 días y de 3 días: eliges según tu semana.' },
      { icon: 'lucide:utensils', title: 'Plan de nutrición para ganar músculo', text: 'Superávit moderado y la proteína que necesitas, con comidas sencillas.' },
      { icon: 'lucide:circle-play', title: 'Vídeos de técnica', text: 'Para sacar el máximo de cada serie con seguridad.' },
      { icon: 'lucide:moon', title: 'Hábitos de recuperación', text: 'Sueño, pasos y agua: la parte del crecimiento que no ocurre en el gimnasio.' },
      { icon: 'lucide:chart-line', title: 'Registro de cargas y progreso', text: 'Cada serie queda guardada; ves cómo suben tus pesos y tus medidas.' },
      { icon: 'lucide:clock', title: 'Sesiones cerradas en tiempo', text: 'Descansos marcados para que no se te vaya una hora y media.' },
    ],
  },

  forWho: {
    yes: [
      'Tienes entre 30 y 45 años y quieres ganar masa muscular',
      'Solo puedes entrenar 2 o 3 días por semana',
      'Tienes acceso a un gimnasio',
      'Quieres un plan eficiente en vez de pasar horas entrenando',
    ],
    no: [
      'Quieres entrenar 6 días a la semana',
      'No tienes acceso a un gimnasio',
      'No estás dispuesto a comer suficiente para crecer',
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
        stat: '2 días ≈ 3 días',
        text: 'En personas con experiencia, entrenar fuerza 2 días por semana produjo adaptaciones musculares similares a hacerlo 3 días.',
        source: { label: 'Iversen et al., Sports Medicine (2021)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8449772/' },
      },
      {
        stat: '≈1,6 g/kg',
        text: 'de proteína al día es la ingesta a partir de la cual se maximiza la ganancia de masa muscular con entrenamiento de fuerza.',
        source: { label: 'Morton et al., British Journal of Sports Medicine (2018)', url: 'https://pubmed.ncbi.nlm.nih.gov/28698222/' },
      },
    ],
  },

  testimonials: [],

  offer: {
    title: 'Empieza hoy tu programa de volumen',
    anchor: 'Una sola sesión con entrenador personal cuesta entre 30 y 60 €. Aquí tienes 12 semanas de entrenamiento, nutrición y seguimiento.',
    bullets: [
      'Pago único: sin suscripción ni permanencia',
      'Empiezas el mismo día desde la app',
      'Versión de 2 y de 3 días, nutrición y seguimiento durante 12 semanas',
    ],
  },

  faq: [
    {
      question: '¿De verdad se gana músculo entrenando 2 días a la semana?',
      answer:
        'Sí. Con sesiones de cuerpo completo, cada músculo recibe estímulo dos veces por semana, y la investigación muestra que en personas con experiencia 2 días producen adaptaciones similares a 3. Con 3 días progresarás algo más rápido.',
    },
    {
      question: '¿Elijo 2 o 3 días?',
      answer:
        'Elige lo que puedas cumplir siempre. Si unas semanas puedes 3 y otras 2, la app te deja cambiar de versión sin perder el hilo.',
    },
    {
      question: '¿Necesito gimnasio?',
      answer: 'Sí. Para progresar en cargas necesitas barra, mancuernas y algunas máquinas básicas.',
    },
    {
      question: '¿Voy a coger mucha grasa?',
      answer:
        'No si sigues el plan. El superávit es pequeño y se ajusta según cómo evolucionan tu peso y tu cintura.',
    },
    {
      question: 'Llevo tiempo sin entrenar, ¿puedo hacerlo?',
      answer:
        'Sí, si has entrenado con pesas alguna vez. Las primeras semanas sirven para recuperar la técnica y fijar tus pesos de partida.',
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
    title: 'Tu agenda no va a vaciarse. Tu plan sí puede caber en ella',
    text: '2 o 3 días a la semana, cada serie contando y 12 semanas para notarlo.',
  },
}

export default landing
