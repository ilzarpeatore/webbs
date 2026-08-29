import Image from 'next/image'

import aboutImage01 from '@/assets/images/about/about-image-01.webp'
import cloud04 from '@/assets/images/locations/cloud-04.webp'
import CtaButton from '@/components/shared/CtaButton'
import GlassStatCard from '@/components/shared/GlassStatCard'
import SectionBadge from '@/components/shared/SectionBadge'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 md:pt-40 md:pb-25 lg:py-50">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <Image src={cloud04} alt="" className="absolute top-10 right-0 w-1/3 blur-sm" />
      </div>

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-7.5 md:grid-cols-2 lg:gap-15">
          <div>
            <SectionBadge className="mb-3.5">Mantenimiento y forma física</SectionBadge>
            <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">No todo es cambiar de peso: mantén tu forma con un sistema que se adapta a ti</h1>
            <p className="text-default-600 mb-7.5 text-base leading-normal md:text-lg md:leading-relaxed lg:max-w-lg">
              Desde el cuestionario inicial puedes marcar &ldquo;mantener&rdquo; como tu tipo de objetivo. Tu coach te da un plan de calorías, macros y entrenamiento pensado para durar, con una app que se reorganiza según tu semana real, no al revés.
            </p>
            <div className="flex flex-wrap gap-5">
              <CtaButton href="/contact">Empieza tu plan</CtaButton>
              <CtaButton href="/como-funciona" variant="light" className="border-default-200 border">
                Ver cómo funciona
              </CtaButton>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image src={aboutImage01} alt="Entrenamiento de mantenimiento y forma física" className="h-80 w-full object-cover md:h-105" />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <GlassStatCard icon="lucide:calendar-range" iconBgClass="bg-primary-8" label="Tu semana, reorganizada al instante" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
