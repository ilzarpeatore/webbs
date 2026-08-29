import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import bellImage from '@/assets/images/icons/bell-image.png'
import icon12 from '@/assets/images/icons/icon-12.svg'
import icon13 from '@/assets/images/icons/icon-13.svg'
import icon16 from '@/assets/images/icons/icon-16.svg'
import icon17 from '@/assets/images/icons/icon-17.svg'
import icon42 from '@/assets/images/icons/icon-42.svg'
import icon43 from '@/assets/images/icons/icon-43.svg'
import icon44 from '@/assets/images/icons/icon-44.svg'
import icon46 from '@/assets/images/icons/icon-46.svg'
import icon47 from '@/assets/images/icons/icon-47.svg'
import icon48 from '@/assets/images/icons/icon-48.svg'
import featureBg1 from '@/assets/images/locations/feature-01.webp'
import featureBg2 from '@/assets/images/locations/feature-02.webp'
import featureBg3 from '@/assets/images/locations/feature-03.webp'
import dashboard09 from '@/assets/images/workspace/dashboard-09.png'
import dashboard11 from '@/assets/images/workspace/dashboard-11.svg'
import dashboard12 from '@/assets/images/workspace/dashboard-12.svg'
import dashboard13 from '@/assets/images/workspace/dashboard-13.svg'

export type StreakRule = {
  bgColorClass: string
  icon: StaticImageData
  label: string
}

export type PlannedHabit = {
  time: string
  timeSuffix: string
  timeTextClass?: string
  cardBgClass: string
  isChecked: boolean
  label: string
  rightText: string
  rightTextClass: string
}

export type ReflectionMetric = {
  icon: StaticImageData
  alt: string
  imgClass: string
  value: string
  percentClass: string
  label: string
}

export type ReflectionStat = {
  title: ReactNode
  value: string
  footer: string
}

const streakRules: StreakRule[] = [
  { bgColorClass: 'bg-primary-1', icon: icon42, label: 'Beber 2L de agua' },
  { bgColorClass: 'bg-primary-6', icon: icon43, label: 'Dormir 7-8 horas' },
  { bgColorClass: 'bg-primary-8', icon: icon44, label: '10.000 pasos' },
  { bgColorClass: 'bg-primary-2', icon: icon12, label: 'Proteína en cada comida' },
  { bgColorClass: 'bg-primary-3', icon: icon13, label: 'Movilidad diaria' },
  { bgColorClass: 'bg-primary-4', icon: icon16, label: 'Pesarte en ayunas' },
  { bgColorClass: 'bg-primary-7', icon: icon17, label: 'Estirar 5 minutos' },
]

const plannedHabits: PlannedHabit[] = [
  {
    time: '07:30',
    timeSuffix: 'AM',
    cardBgClass: 'bg-primary-8/15 border border-primary-8/20',
    isChecked: true,
    label: 'Chequeo de preparación',
    rightText: 'Hecho',
    rightTextClass: 'text-default-200',
  },
  {
    time: '09:00',
    timeSuffix: 'AM',
    cardBgClass: 'bg-primary-8/15 border border-primary-8/20',
    isChecked: true,
    label: 'Desayuno asignado por tu coach',
    rightText: '320 kcal',
    rightTextClass: 'text-default-200',
  },
  {
    time: '06:00',
    timeSuffix: 'PM',
    timeTextClass: 'text-white',
    cardBgClass: 'bg-default-900 border border-default-700',
    isChecked: false,
    label: 'Sesión de piernas',
    rightText: 'Pendiente hoy',
    rightTextClass: 'text-white',
  },
  {
    time: '09:45',
    timeSuffix: 'AM',
    timeTextClass: 'text-white',
    cardBgClass: 'bg-default-900 border border-default-700',
    isChecked: false,
    label: 'Hábito: 10.000 pasos',
    rightText: '6.200 / 10.000',
    rightTextClass: 'text-white',
  },
]

const reflectionMetrics: ReflectionMetric[] = [
  {
    icon: icon46,
    alt: 'Series completadas',
    imgClass: 'size-20',
    value: '86',
    percentClass: 'text-lg',
    label: 'Series completadas',
  },
  {
    icon: icon47,
    alt: 'Cumplimiento del plan',
    imgClass: 'md:size-30 size-20',
    value: '100',
    percentClass: 'text-xl',
    label: 'Cumplimiento del plan',
  },
  {
    icon: icon48,
    alt: 'Objetivo nutricional',
    imgClass: 'size-20',
    value: '71',
    percentClass: 'text-lg',
    label: 'Objetivo nutricional',
  },
]

const reflectionStats: ReflectionStat[] = [
  {
    title: (
      <>
        Récords
        <br />
        personales
      </>
    ),
    value: '3',
    footer: 'Nuevas mejores marcas este mes',
  },
  {
    title: 'sesiones completadas',
    value: '12',
    footer: 'Volumen total: 12.400 kg',
  },
]

const Features = () => {
  return (
    <section id="features" className="relative pb-8 md:pb-25 lg:pb-50">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-center gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <div className="mb-3.5 inline-flex">
              <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">Entrenamiento con estructura real</span>
            </div>
            <h2 className="text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">Cada serie que haces queda registrada al momento.</h2>
          </div>
          <div>
            <p className="text-default-600 float-end text-lg leading-normal lg:w-md">Tu coach ve tu progreso real, no lo que recuerdas contarle: series, cargas, RIR/RPE y hábitos, todo en un solo lugar.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
          <div className="bg-default-200 overflow-hidden rounded-3xl">
            <div className="px-3.5 py-3.5 md:px-5 md:py-5 lg:px-10 lg:pt-10 lg:pb-12.5">
              <h3 className="text-default-800 mb-2.5 text-xl font-semibold md:text-2xl">Hábitos con objetivo numérico</h3>
              <p className="text-default-600 max-w-md text-lg">No es solo hecho o no hecho: si tu objetivo es beber 2L de agua, el círculo semanal se rellena según el % real que consigues cada día.</p>
            </div>

            <div className="relative mb-7.5 overflow-hidden">
              <Image src={dashboard09} alt="Dashboard Image" className="mx-auto w-62 rounded-lg object-cover md:h-75 md:w-100" />
            </div>

            <div className="relative overflow-hidden">
              <div className="animate-marquee flex w-max gap-5 pb-5 lg:pb-20">
                {streakRules.map((rule, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-full bg-white py-2.5 ps-2.5 pe-5 backdrop-blur-sm">
                    <div className={`flex size-8 items-center justify-center rounded-full ${rule.bgColorClass}`}>
                      <Image src={rule.icon} alt="" className="size-3.25" />
                    </div>
                    <span className="text-default-800 text-sm font-medium whitespace-nowrap">{rule.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-5 rounded-3xl p-3.5 md:p-5 lg:gap-y-12.5 lg:p-10" style={{ backgroundImage: `url(${featureBg1.src})` }}>
            <div>
              <h3 className="mb-2.5 text-xl font-semibold text-white md:text-2xl">Tu plan de hoy, en un vistazo</h3>
              <p className="text-lg text-gray-400 lg:w-md">Entrenamiento, comidas asignadas por tu coach y hábitos, resumidos en una sola pantalla.</p>
            </div>

            <div className="w-full rounded-3xl border border-white/30 bg-transparent text-white backdrop-blur-xl lg:max-w-xl">
              <div className="mb-7.5 flex items-start justify-between border-b border-white/30 p-5">
                <div>
                  <h2 className="text-lg font-medium tracking-normal text-white">¡Buenos días!</h2>
                  <p className="text-default-400 text-sm">Martes, 25 nov</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="border-default-800 rounded-full border bg-black/60 px-3 py-1 text-sm font-bold">15%</span>
                  <span className="text-default-300 text-sm font-medium">Completado</span>
                </div>
              </div>

              <div className="space-y-4 pe-4 pb-5 md:pe-10">
                {plannedHabits.map((habit, idx) => (
                  <div key={idx} className="group flex items-stretch gap-4">
                    <div className="relative flex w-16 flex-col items-end justify-center">
                      <div className={`text-default-300 text-right text-sm leading-none font-bold ${habit.timeTextClass || ''}`}>
                        {habit.time}
                        <br />
                        {habit.timeSuffix}
                      </div>
                    </div>
                    <div className={`grow ${habit.cardBgClass} flex items-center justify-between gap-3 rounded-xl p-3.5 transition-transform`}>
                      <div className="flex min-w-0 items-center gap-2">
                        {habit.isChecked ? (
                          <>
                            <div className="shrink-0">
                              <Icon icon="lucide:circle-check" className="text-primary-2 size-3.5" />
                            </div>
                            <span className="text-sm font-medium md:text-base">{habit.label}</span>
                          </>
                        ) : (
                          <span className="ms-2 text-sm font-medium md:text-base">{habit.label}</span>
                        )}
                      </div>
                      <span className={`shrink-0 text-end text-xs whitespace-nowrap md:text-sm ${habit.rightTextClass}`}>{habit.rightText}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-black p-3.5 md:p-5 lg:p-10" style={{ backgroundImage: `url(${featureBg2.src})` }}>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 grid grid-cols-1 items-center md:gap-10 gap-6 md:grid-cols-2">
                <div className="flex h-full flex-col justify-between">
                  <div className="lg:max-w-md">
                    <h3 className="md:text-2xl text-xl font-semibold leading-tight text-white mb-2.5">Auto-regulación de carga</h3>
                    <p className="md:text-lg text-base leading-relaxed text-default-400 md:mb-7.5 mb-5">El peso y las repeticiones que te tocan hoy se ajustan solos según cómo entrenaste la última vez.</p>
                    <Link href="/contact" className="group inline-flex relative overflow-hidden rounded-full bg-white md:px-8.5 px-3.5 py-3 md:py-3 md:text-lg text-sm font-medium text-black transition-all duration-300 hover:scale-95">
                      <span className="relative block overflow-hidden">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">Empieza tu plan</span>
                        <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">Empieza tu plan</span>
                      </span>
                    </Link>
                  </div>
                  <p className="md:mt-14 mt-5 text-sm text-default-500">*Las sugerencias siempre quedan pendientes de aprobación de tu coach antes de convertirse en tu objetivo real.</p>
                </div>

                <div className="relative flex items-end justify-center lg:justify-end">
                  <Image src={dashboard12} alt="Dashboard" className="-mb-68 md:w-97 w-60 lg:h-160 md:h-125 pt-5 z-30 object-contain" />
                  <Image src={dashboard11} alt="Floating Card" className="absolute lg:inset-e-82 inset-e-65 md:top-25 top-20 z-30 lg:size-45 size-25" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl p-3.5 md:p-5 lg:p-10" style={{ backgroundImage: `url(${featureBg3.src})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
            <div className="relative z-10">
              <div className="mb-6 max-w-2xl md:mb-12.5">
                <h3 className="md:text-2xl text-xl font-semibold leading-tight text-white mb-2.5">Resumen mensual</h3>
                <p className="md:text-lg text-base leading-relaxed text-default-300 md:w-sm">KPIs del mes frente al anterior: volumen, récords batidos y cambios por grupo muscular.</p>
              </div>

              <div className="mx-auto max-w-5xl rounded-3xl bg-black/85 p-7.5 backdrop-blur-xl">
                <h4 className="text-center md:text-lg text-base font-semibold text-white">Tu mes de un vistazo</h4>

                <div className="mt-7.5 grid grid-cols-2 gap-7.5 text-center md:grid-cols-3">
                  {reflectionMetrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="relative flex items-center justify-center">
                        <Image src={metric.icon} alt={metric.alt} className={metric.imgClass} />
                        <div className="absolute flex items-center text-white">
                          <span className="text-xl font-medium">{metric.value}</span>
                          <span className={`mb-1 ${metric.percentClass} font-medium`}>%</span>
                        </div>
                      </div>
                      <p className="text-default-300 mt-3.5 text-base md:text-lg">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7.5 grid grid-cols-2 gap-2 md:gap-7.5">
                {reflectionStats.map((stat, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                    <div className="items-start gap-6 md:flex md:justify-between">
                      <div>
                        <p className="text-lg leading-snug text-white">{stat.title}</p>
                      </div>
                      <h3 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">{stat.value}</h3>
                    </div>
                    <p className="text-default-400 mt-4 text-lg md:mt-7.5">{stat.footer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-default-900 relative overflow-hidden rounded-3xl p-5 lg:p-10">
            <div className="bg-primary-8/10 absolute top-1/2 left-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="max-w-xl">
                <h3 className="mb-2.5 text-xl leading-tight font-semibold text-white md:text-2xl">Notificaciones que importan</h3>
                <p className="text-default-300 max-w-sm text-lg leading-relaxed">Te avisamos cuando tu coach ajusta tu plan, te asigna una comida nueva o responde a algo que reportaste.</p>
              </div>

              <div className="relative mt-6 flex justify-center lg:mt-14">
                <div className="absolute top-1/2 z-20 w-full max-w-md -translate-y-1/2 rounded-2xl p-6">
                  <div className="absolute -top-20 left-0 rotate-[-20deg] md:-top-22 md:left-4">
                    <div className="relative">
                      <Image src={bellImage} alt="Bell" className="size-10 object-contain md:size-18" />
                      <div className="bg-primary-8 absolute top-2 right-2 hidden size-7 items-center justify-center rounded-full text-xs font-bold text-white md:flex">7</div>
                    </div>
                  </div>
                </div>
                <Image src={dashboard13} loading="lazy" alt="Dashboard Image" className="mt-6 h-54 w-90 md:mt-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
