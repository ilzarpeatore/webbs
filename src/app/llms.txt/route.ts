import { SITE_URL } from '@/config/constants'

export function GET() {
  const body = `# BeStronger

> Entrenamiento y nutrición online con un coach real detrás: registra cada serie, cada comida y cada hábito, y tu coach ajusta tu plan con datos objetivos, no con una tabla genérica.

BeStronger sustituye la combinación habitual de PDF de rutina, grupo de WhatsApp y hoja de cálculo de comidas por una única app donde el cliente registra su actividad en tiempo real y un coach humano supervisa y aprueba cada ajuste.

## Páginas principales

- [Inicio](${SITE_URL}/home): Presentación del servicio y sus funciones principales.
- [Cómo funciona](${SITE_URL}/como-funciona): El proceso paso a paso, desde el alta hasta el seguimiento diario.
- [Planes y precios](${SITE_URL}/pricing): Planes Mensual, Trimestral, Semestral y Anual con sus precios.
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
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
