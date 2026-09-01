import Image from 'next/image'

import about03 from '@/assets/images/about/about-03.webp'
import icon42 from '@/assets/images/icons/icon-42.svg'
import icon43 from '@/assets/images/icons/icon-43.svg'
import icon44 from '@/assets/images/icons/icon-44.svg'
import CtaButton from '@/components/shared/CtaButton'
import SectionBadge from '@/components/shared/SectionBadge'

const chips = [
  { icon: icon42, bg: 'bg-primary-1', label: 'Beber 2L de agua' },
  { icon: icon43, bg: 'bg-primary-6', label: 'Dormir 7-8 horas' },
  { icon: icon44, bg: 'bg-primary-8', label: '10.000 pasos' },
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 md:pt-40 md:pb-25 lg:py-50">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-7.5 md:grid-cols-2 lg:gap-15">
          <div>
            <SectionBadge className="mb-3.5">Hábitos</SectionBadge>
            <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">La constancia también se puede medir</h1>
            <p className="text-default-600 mb-6 text-base leading-normal md:text-lg md:leading-relaxed lg:max-w-lg">No solo entrenamiento: construye las rutinas diarias que hacen que el resto funcione, con rachas calculadas en servidor y objetivos numéricos reales, no solo hecho o no hecho.</p>

            <div className="mb-7.5 flex flex-wrap gap-2.5">
              {chips.map((chip, idx) => (
                <div key={idx} className="flex items-center gap-2.5 rounded-full bg-white py-2 ps-2 pe-4 shadow-sm">
                  <div className={`flex size-7 items-center justify-center rounded-full ${chip.bg}`}>
                    <Image src={chip.icon} alt="" className="size-3" />
                  </div>
                  <span className="text-default-800 text-sm font-medium">{chip.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5">
              <CtaButton href="/contacto">Empieza tu plan</CtaButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <Image src={about03} alt="Hábitos diarios" className="h-80 w-full object-cover md:h-105" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
