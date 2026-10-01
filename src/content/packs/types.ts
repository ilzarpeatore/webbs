// Contenido de venta de una landing de pack (/packs/[slug]). Ver
// docs/LANDING_PACKS_ESTUDIO.md para el porqué de cada sección.
//
// Lo que NO va aquí, porque lo gestiona el coach en el panel (→ Packs) y llega
// del backend: precio, moneda, duración, imagen y qué contenido incluye. Así se
// puede cambiar el precio sin tocar código y la landing nunca miente sobre él.

export type IconName = string // nombre de Iconify, p. ej. 'lucide:dumbbell'

export type PackLanding = {
  /** Debe coincidir con el slug del pack en el panel. */
  slug: string
  /** Fecha de la última revisión del contenido (visible en la página y en el schema). */
  updatedAt: string

  seo: {
    /** ≤ 60 caracteres. Palabra clave principal al principio. */
    title: string
    /** ≤ 155 caracteres. */
    description: string
    keywords: string[]
  }

  /** Color de acento de la landing (hex). El resto usa la paleta del sitio. */
  accent: string

  /** A quién va dirigido, en una frase corta (se usa en el schema y en el resumen). */
  audience: string

  hero: {
    eyebrow: string
    /** H1. Resultado + plazo + para quién. */
    title: string
    /** Parte del título resaltada con el color de acento (debe aparecer literal en `title`). */
    highlight?: string
    subtitle: string
    /** 3–4 frases cortas con los beneficios clave. */
    bullets: string[]
    /** Ejemplo de sesión que se dibuja en el hero (si el pack no tiene imagen). */
    sampleDay: {
      label: string
      exercises: { name: string; dose: string }[]
      footnote: string
    }
  }

  /** Frases autónomas y citables ("En resumen"). Pensado para buscadores e IAs. */
  summary: string[]

  /** Ficha técnica: pares etiqueta/valor (duración, días, minutos, material, nivel…). */
  facts: { label: string; value: string }[]

  pain: {
    title: string
    intro: string
    points: { title: string; text: string }[]
    /** Frase que da la vuelta: el problema no es la persona, es el método. */
    turn: string
  }

  /** Mitos o errores comunes frente a lo que hace el programa. */
  whyFailed: {
    title: string
    items: { myth: string; truth: string }[]
  }

  method: {
    title: string
    intro: string
    pillars: { icon: IconName; title: string; text: string }[]
  }

  phases: {
    title: string
    intro: string
    items: { weeks: string; title: string; text: string }[]
  }

  /** Lo que recibe, con el beneficio de cada pieza. */
  includes: {
    title: string
    items: { icon: IconName; title: string; text: string }[]
  }

  forWho: {
    yes: string[]
    no: string[]
  }

  /** Datos con fuente: dan credibilidad y son lo que más citan las IAs. */
  evidence: {
    title: string
    items: { stat: string; text: string; source: { label: string; url: string } }[]
  }

  /** Solo testimonios REALES con consentimiento. Vacío = la sección no se muestra. */
  testimonials: { name: string; detail: string; quote: string }[]

  /** Opcional: solo si el negocio ofrece garantía. Sin definir = no se muestra. */
  guarantee?: { title: string; text: string }

  offer: {
    title: string
    /** Comparación honesta para anclar el precio (nunca un "precio anterior" inventado). */
    anchor?: string
    bullets: string[]
  }

  faq: { question: string; answer: string }[]

  finalCta: {
    title: string
    text: string
  }
}
