import { Icon } from '@iconify/react'
import Link from 'next/link'

type PricingPlanType = {
  badge: string
  badgeBgClass: string
  badgeShadowClass?: string
  description: string
  price: number
  pricePeriod: string
  monthlyEquivalent?: string
  features: string[]
  buttonText: string
  buttonLink: string
  colSpanClass?: string
  featured?: boolean
}

const pricingPlansData: PricingPlanType[] = [
  {
    badge: 'Mensual',
    badgeBgClass: 'bg-primary-8',
    description: 'Sin permanencia. Ideal para empezar y probar el acompañamiento de tu coach.',
    price: 95,
    pricePeriod: '/mes',
    features: ['Entrenamiento diseñado por tu coach', 'Comidas asignadas con ajuste en vivo', 'Seguimiento de hábitos y progreso', 'Chequeo diario y reporte de dolor'],
    buttonText: 'Empezar',
    buttonLink: '/contacto',
  },
  {
    badge: 'Trimestral',
    badgeBgClass: 'bg-default-700',
    description: '240 € cada 3 meses — equivale a 80 €/mes.',
    price: 240,
    pricePeriod: '/3 meses',
    monthlyEquivalent: '≈ 80 €/mes',
    features: ['Todo lo del plan mensual', 'Mismo coach durante todo el trimestre', 'Ahorra frente al pago mensual'],
    buttonText: 'Empezar',
    buttonLink: '/contacto',
  },
  {
    badge: 'Semestral',
    badgeBgClass: 'bg-default-950',
    badgeShadowClass: 'shadow-[0_0_20px_rgba(2,131,167,0.35)]',
    description: '450 € cada 6 meses — equivale a 75 €/mes.',
    price: 450,
    pricePeriod: '/6 meses',
    monthlyEquivalent: '≈ 75 €/mes',
    features: ['Todo lo del plan mensual', 'El ahorro más recomendado si ya sabes que quieres continuidad', 'Seguimiento continuo sin interrupciones'],
    buttonText: 'Empezar',
    buttonLink: '/contacto',
    featured: true,
  },
  {
    badge: 'Anual',
    badgeBgClass: 'bg-default-900',
    description: '800 € al año — equivale a 66,67 €/mes. El precio más bajo por mes.',
    price: 800,
    pricePeriod: '/año',
    monthlyEquivalent: '≈ 66,67 €/mes',
    features: ['Todo lo del plan mensual', 'El precio mensual más bajo', 'Un año completo de seguimiento con tu coach'],
    buttonText: 'Empezar',
    buttonLink: '/contacto',
    colSpanClass: 'lg:col-span-1 md:col-span-2',
  },
]

const PricingPlans = () => {
  return (
    <section className="pt-32.5 md:pt-36 lg:pt-50">
      <div className="container">
        <div className="mb-7.5 text-center">
          <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium md:py-1.5">Planes</span>
          <h1 className="text-default-900 mt-2.5 text-3xl font-medium tracking-tight md:text-5xl lg:text-[68px]">Un mismo servicio, elige tu ritmo de pago</h1>
          <p className="text-default-600 mx-auto mt-5 max-w-2xl text-base md:text-lg">Todos los planes incluyen el mismo acompañamiento: entrenamiento y nutrición diseñados por tu coach. Cuanto más largo el compromiso, menor el precio por mes.</p>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlansData.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col overflow-hidden rounded-2xl p-3.5 shadow-xl md:p-5 lg:p-7.5 ${plan.colSpanClass || ''} ${plan.featured ? 'bg-default-900 lg:scale-105' : 'bg-white'}`}
            >
              {plan.featured && <div className="bg-primary-8/20 pointer-events-none absolute top-0 right-0 size-60 -translate-y-1/3 translate-x-1/3 rounded-full blur-3xl"></div>}

              <div className={plan.featured ? 'relative z-10 flex flex-1 flex-col rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xl md:p-5' : 'flex flex-1 flex-col'}>
                <div className={`mb-5 self-start rounded-lg px-3.75 py-1 text-sm font-medium text-white lg:py-2 ${plan.badgeBgClass} ${plan.badgeShadowClass || ''}`}>{plan.badge}</div>

                <div className="mb-1 flex items-baseline gap-2">
                  <p className={`text-2xl font-semibold md:text-3xl lg:text-4xl ${plan.featured ? 'text-white' : 'text-default-900'}`}>
                    {plan.price} <span>€</span>
                  </p>
                  <div className={`text-lg ${plan.featured ? 'text-default-300' : ''}`}>{plan.pricePeriod}</div>
                </div>

                {plan.monthlyEquivalent && <p className={`mb-2.5 text-sm font-medium lg:mb-5 ${plan.featured ? 'text-default-400' : 'text-default-500'}`}>{plan.monthlyEquivalent}</p>}

                <div>
                  <p className={`text-base leading-relaxed md:text-lg ${plan.featured ? 'text-default-300' : 'text-default-700'}`}>{plan.description}</p>
                </div>

                <div className={`my-6 h-px ${plan.featured ? 'bg-white/10' : 'bg-default-200'}`}></div>

                <ul className="mb-5 space-y-2.5 md:mb-7.5">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className={`flex items-center gap-2 text-base ${plan.featured ? 'text-default-300' : 'text-default-600'}`}>
                      <Icon icon="lucide:circle-check" className="text-primary-2 size-4" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link href={plan.buttonLink} className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 shadow-xl! transition-all duration-300 hover:scale-95 ${plan.featured ? 'bg-white text-black' : 'bg-default-900 text-white'}`}>
                    <div className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                      <div className="flex h-14 items-center gap-3">
                        <span className="font-medium">{plan.buttonText}</span>
                      </div>
                      <div className="absolute top-full flex h-14 items-center gap-3">
                        <span className="font-medium">{plan.buttonText}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-default-500 mt-8 text-center text-sm md:text-base">El pago se gestiona fuera de la app, directamente en bestronger.es. Una vez confirmado, tu acceso se activa automáticamente.</p>
      </div>
    </section>
  )
}

export default PricingPlans
