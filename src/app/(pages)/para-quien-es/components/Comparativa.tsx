import { Icon } from '@iconify/react'

const esParaTi = [
  'Quieres un plan de entrenamiento y nutrición diseñado y ajustado por un coach real, no una tabla genérica.',
  'Prefieres que tu progreso se registre solo (series, comidas, hábitos) en vez de anotarlo tú a mano.',
  'Te sirve una comunicación asíncrona con tu coach: notas, reportes de dolor y check-ins, no una llamada al instante.',
  'Quieres decisiones basadas en datos objetivos: volumen, cargas, cumplimiento y récords, no solo cómo te sientes.',
  'Usas Android, o iOS sin depender todavía de sincronizar tu reloj o pulsera.',
]

const noEsParaTi = [
  'Buscas chat en vivo o videollamada con tu coach a cualquier hora — hoy la comunicación es asíncrona.',
  'Necesitas que tu Apple Watch, Garmin o Fitbit se conecten ya de forma completa — el emparejamiento con relojes todavía no es real.',
  'Quieres importar tu historial desde Hevy, Strong u otra app — no existe esa importación.',
  'Buscas fotos de progreso (antes/después) dentro de la app — esa función no está implementada todavía.',
  'Esperas un asistente de inteligencia artificial que te entrene — el bot de soporte da respuestas fijas, no es un entrenador con IA.',
]

const Comparativa = () => {
  return (
    <section className="pb-20 lg:pb-40">
      <div className="container">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 md:p-7.5">
            <h2 className="text-default-900 mb-5 text-2xl font-medium md:text-3xl">Es para ti si...</h2>
            <ul className="space-y-4">
              {esParaTi.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icon icon="lucide:circle-check" className="text-primary-2 mt-1 size-5 shrink-0" />
                  <span className="text-default-700 text-base leading-normal md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-default-200 rounded-2xl p-5 md:p-7.5">
            <h2 className="text-default-900 mb-5 text-2xl font-medium md:text-3xl">No es para ti si...</h2>
            <ul className="space-y-4">
              {noEsParaTi.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icon icon="lucide:circle-x" className="text-default-500 mt-1 size-5 shrink-0" />
                  <span className="text-default-700 text-base leading-normal md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparativa
