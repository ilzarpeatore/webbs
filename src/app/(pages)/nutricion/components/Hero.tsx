import Image from 'next/image'

import about02 from '@/assets/images/about/about-02.webp'
import cloud10 from '@/assets/images/locations/cloud-10.webp'
import CtaButton from '@/components/shared/CtaButton'
import SectionBadge from '@/components/shared/SectionBadge'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 md:pt-40 md:pb-25 lg:py-50">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-50">
        <Image src={cloud10} alt="" className="absolute top-0 left-0 w-1/3 blur-sm" />
      </div>

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-7.5 md:grid-cols-2 lg:gap-15">
          <div>
            <SectionBadge className="mb-3.5">Nutrición online</SectionBadge>
            <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">Sabrás al momento si lo que vas a comer encaja con tu objetivo</h1>
            <p className="text-default-600 mb-7.5 text-base leading-normal md:text-lg md:leading-relaxed lg:max-w-lg">
              Tu coach prepara opciones de comida reales para cada franja del día. Al combinarlas, la app calcula en vivo si se ajustan a tu objetivo calórico — antes de que las añadas a tu plan.
            </p>
            <div className="flex flex-wrap gap-5">
              <CtaButton href="/contact">Empieza tu plan</CtaButton>
              <CtaButton href="/pricing" variant="light" className="border-default-200 border">
                Ver planes
              </CtaButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <Image src={about02} alt="Comida asignada por el coach" className="h-80 w-full object-cover md:h-105" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
