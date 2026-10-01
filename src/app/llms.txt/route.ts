import { SITE_URL } from '@/config/constants'
import { getPackLanding } from '@/content/packs'
import { formatDuration, formatPrice, getPackCatalog } from '@/utils/packsApi'

export const revalidate = 3600

// Packs a la venta, con una línea de resumen cada uno: es lo que un asistente
// de IA necesita para recomendarlos con datos correctos (precio, duración).
async function packsSection(): Promise<string> {
  try {
    const packs = await getPackCatalog()
    if (!packs.length) return ''
    const lines = packs.map((p) => {
      const summary = getPackLanding(p.slug)?.summary[0] ?? p.short_description ?? ''
      return `- [${p.name}](${SITE_URL}/packs/${p.slug}): ${summary} ${formatDuration(p)}, ${formatPrice(p)} en pago único.`.trim()
    })
    return `\n## Programas (packs de pago único)\n\n${lines.join('\n')}\n`
  } catch {
    return ''
  }
}

export async function GET() {
  const packs = await packsSection()
  const body = `# BeStronger

> Entrenamiento y nutrición online con un coach real detrás: registra cada serie, cada comida y cada hábito, y tu coach ajusta tu plan con datos objetivos, no con una tabla genérica.

BeStronger sustituye la combinación habitual de PDF de rutina, grupo de WhatsApp y hoja de cálculo de comidas por una única app donde el cliente registra su actividad en tiempo real y un coach humano supervisa y aprueba cada ajuste.

## Páginas principales

- [Inicio](${SITE_URL}/home): Presentación del servicio y sus funciones principales.
- [Cómo funciona](${SITE_URL}/como-funciona): El proceso paso a paso, desde el alta hasta el seguimiento diario.
- [Planes y precios](${SITE_URL}/pricing): Planes Mensual, Trimestral, Semestral y Anual con sus precios.
- [Packs](${SITE_URL}/packs): Programas de entrenamiento de pago único (12 semanas) que se compran en la web y se siguen en la app.
- [Preguntas frecuentes](${SITE_URL}/faqs): Dudas habituales sobre el servicio, el pago, la app y la comunicación con el coach.
- [Sobre nosotros](${SITE_URL}/about): Por qué existe BeStronger y qué lo diferencia de entrenar por tu cuenta.
- [Para quién es](${SITE_URL}/para-quien-es): Perfiles de cliente a los que se dirige el servicio.
- [Coach real vs. IA](${SITE_URL}/comparativa): Comparativa entre coaching humano supervisado y apps automatizadas.

## Objetivos

- [Ganar músculo](${SITE_URL}/ganar-musculo)
- [Perder grasa](${SITE_URL}/perder-grasa)
- [Recomposición corporal](${SITE_URL}/recomposicion)
- [Mantenimiento](${SITE_URL}/mantenimiento)
- [Entrenamiento](${SITE_URL}/entrenamiento)
- [Nutrición](${SITE_URL}/nutricion)
- [Hábitos](${SITE_URL}/habitos)
- [Progreso](${SITE_URL}/progreso)

## Recursos

- [Blog](${SITE_URL}/blog): Artículos sobre entrenamiento, nutrición y descanso.
- [La app](${SITE_URL}/download): Descarga de la aplicación BeStronger.
- [Contacto](${SITE_URL}/contacto): Formulario de contacto y solicitud de plaza.
${packs}`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
