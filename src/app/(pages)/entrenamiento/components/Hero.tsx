import Image from 'next/image'

import about01 from '@/assets/images/about/about-01.webp'
import cloud06 from '@/assets/images/locations/cloud-06.webp'
import CtaButton from '@/components/shared/CtaButton'
import GlassStatCard from '@/components/shared/GlassStatCard'
import SectionBadge from '@/components/shared/SectionBadge'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 md:pt-40 md:pb-25 lg:py-50">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <Image src={cloud06} alt="" className="absolute top-10 right-0 w-1/3 blur-sm" />
      </div>

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-7.5 md:grid-cols-2 lg:gap-15">
          <div>
            <SectionBadge className="mb-3.5">Entrenamiento online</SectionBadge>
            <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">Cada serie que haces queda registrada al momento</h1>
            <p className="text-default-600 mb-7.5 text-base leading-normal md:text-lg md:leading-relaxed lg:max-w-lg">
              Tu coach diseña tu plan y lo ajusta con lo que de verdad haces: series, cargas, RIR/RPE y feedback. No una tabla fija — un plan que se revisa con tus datos reales, no con lo que recuerdes contarle.
            </p>
            <div className="flex flex-wrap gap-5">
              <CtaButton href="/contacto">Empieza tu plan</CtaButton>
              <CtaButton href="/como-funciona" variant="light" className="border-default-200 border">
                Ver cómo funciona
              </CtaButton>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image src={about01} alt="Sesión de entrenamiento" className="h-80 w-full object-cover md:h-105" />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <GlassStatCard icon="lucide:check-check" iconBgClass="bg-primary-8" label="Serie registrada al momento" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
