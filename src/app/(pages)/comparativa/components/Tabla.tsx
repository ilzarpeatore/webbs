import { Icon } from '@iconify/react'
import SectionBadge from '@/components/shared/SectionBadge'

type RowType = {
  aspecto: string
  bestronger: string
  generica: string
}

const rows: RowType[] = [
  {
    aspecto: 'Quién diseña tu plan',
    bestronger: 'Un coach real, si eres cliente 1:1 -- ajustado a ti, no una plantilla',
    generica: 'Un algoritmo genera un plan a partir de un cuestionario, sin revisión humana',
  },
  {
    aspecto: 'Quién aprueba los ajustes de carga',
    bestronger: 'El sistema sugiere, pero tu coach aprueba antes de que sea tu objetivo real',
    generica: 'Los cambios se aplican automáticamente, sin que nadie los revise',
  },
  {
    aspecto: 'Si reportas dolor entrenando',
    bestronger: 'Notificación automática a tu coach según la gravedad',
    generica: 'Normalmente no hay ningún mecanismo que avise a una persona real',
  },
  {
    aspecto: 'Si necesitas reorganizar tu semana',
    bestronger: 'Lo reorganizas al instante, y tu coach lo ve para ajustar lo que haga falta',
    generica: 'Sigues una rutina fija; salirte de ella no ajusta nada',
  },
  {
    aspecto: 'Comunicación',
    bestronger: 'Notas, feedback y check-ins revisados por un coach real (asíncrono, no chat en vivo)',
    generica: 'Chat automatizado con respuestas genéricas, sin nadie detrás',
  },
]

const Tabla = () => {
  return (
    <section className="pb-20 lg:pb-40">
      <div className="container">
        <div className="mb-12.5 lg:max-w-2xl">
          <SectionBadge className="mb-3.5">Comparativa honesta</SectionBadge>
          <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:text-5xl">Punto por punto</h2>
        </div>

        <div className="hidden overflow-hidden rounded-2xl bg-white md:block">
          <div className="border-default-200 text-default-500 grid grid-cols-3 gap-4 border-b p-5 text-sm font-medium">
            <span></span>
            <span className="text-default-900">BeStronger</span>
            <span>App genérica con IA</span>
          </div>
          {rows.map((row, idx) => (
            <div key={idx} className={`grid grid-cols-3 gap-4 p-5 ${idx % 2 === 1 ? 'bg-default-100/60' : ''}`}>
              <span className="text-default-900 text-sm font-medium md:text-base">{row.aspecto}</span>
              <span className="flex items-start gap-2 text-sm md:text-base">
                <Icon icon="lucide:circle-check" className="text-primary-2 mt-0.5 size-4 shrink-0" />
                <span className="text-default-700">{row.bestronger}</span>
              </span>
              <span className="flex items-start gap-2 text-sm md:text-base">
                <Icon icon="lucide:circle-x" className="text-default-400 mt-0.5 size-4 shrink-0" />
                <span className="text-default-500">{row.generica}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-3.5 md:hidden">
          {rows.map((row, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-5">
              <h3 className="text-default-900 mb-3.5 text-base font-medium">{row.aspecto}</h3>
              <div className="mb-2.5 flex items-start gap-2">
                <Icon icon="lucide:circle-check" className="text-primary-2 mt-0.5 size-4 shrink-0" />
                <span className="text-default-700 text-sm"><span className="text-default-900 font-medium">BeStronger:</span> {row.bestronger}</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon icon="lucide:circle-x" className="text-default-400 mt-0.5 size-4 shrink-0" />
                <span className="text-default-500 text-sm"><span className="font-medium">App genérica:</span> {row.generica}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tabla
