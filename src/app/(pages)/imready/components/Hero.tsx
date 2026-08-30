import { Icon } from '@iconify/react'
import CtaButton from '@/components/shared/CtaButton'

const priceTiers = [
  { name: 'Mensual', price: '95€', cond: '/mes' },
  { name: 'Trimestral', price: '255€', cond: '/trimestre' },
]

const priceFeatures = ['Programación individualizada con actualización semanal de intensidad', 'Llamada quincenal (10–20 min) — opcional', 'Correcciones técnicas por vídeo', 'Acceso a recursos (eBooks, PDF, vídeos, etc.)', 'Acceso al blog privado']

const PriceCard = () => (
  <div className="relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-white p-7.5 shadow-xl">
    <div className="flex items-start justify-between">
      <span className="text-default-900 text-2xl font-medium md:text-3xl">Tarifas</span>
      <span className="border-primary-9/25 text-primary-9 rounded-full border px-3 py-1 text-[9px] font-semibold tracking-[0.14em] uppercase">Plazas limitadas</span>
    </div>

    <div className="grid grid-cols-2">
      {priceTiers.map((t, i) => (
        <div key={t.name} className={`flex flex-col gap-1 py-4 ${i === 0 ? 'border-default-200 border-r pr-6' : 'pl-6'}`}>
          <span className="text-default-500 mb-1 text-[10px] font-semibold tracking-[0.22em] uppercase">{t.name}</span>
          <div className="text-default-900 text-4xl leading-none font-semibold tracking-tight md:text-5xl">{t.price}</div>
          <div className="text-default-500 mt-1 text-[11px] font-medium">{t.cond}</div>
        </div>
      ))}
    </div>

    <div className="bg-default-200 h-px" />

    <ul className="flex flex-col gap-2.5">
      {priceFeatures.map((f) => (
        <li key={f} className="text-default-600 flex items-start gap-3 text-sm">
          <Icon icon="lucide:circle-check" className="text-primary-2 mt-0.5 size-4 shrink-0" />
          {f}
        </li>
      ))}
    </ul>

    <CtaButton href="#form" className="w-full">
      Solicitar plaza
    </CtaButton>
  </div>
)

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 md:pt-40 md:pb-25 lg:py-50">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-7.5 lg:grid-cols-2 lg:gap-15">
          <div>
            <span className="text-primary-9 mb-3.5 flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase">
              <span className="bg-primary-9 block h-px w-7" />
              Coaching 1:1 · Powerlifting
            </span>
            <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">
              Entrena mejor. <br className="hidden lg:block" />
              Muévete sin límites.
            </h1>
            <p className="text-default-600 mb-7.5 text-base leading-normal md:text-lg md:leading-relaxed lg:max-w-lg">Entrenamiento personalizado para mejorar tu rendimiento, recuperarte de una lesión o simplemente sentirte mejor con tu cuerpo. Sin atajos, con criterio.</p>
            <div className="flex flex-wrap items-center gap-5">
              <CtaButton href="#form">Solicitar plaza</CtaButton>
              <span className="border-primary-9/25 bg-primary-9/10 text-primary-9 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase">
                <span className="bg-primary-9 size-[7px] shrink-0 animate-pulse rounded-full" />
                Plazas limitadas cada mes
              </span>
            </div>
          </div>

          <PriceCard />
        </div>
      </div>
    </section>
  )
}

export default Hero
