import Image from 'next/image'

import about02 from '@/assets/images/about/about-02.webp'
import CtaButton from '@/components/shared/CtaButton'
import GlassStatCard from '@/components/shared/GlassStatCard'
import SectionBadge from '@/components/shared/SectionBadge'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 md:pt-40 md:pb-25 lg:py-50">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-7.5 md:grid-cols-2 lg:gap-15">
          <div>
            <SectionBadge className="mb-3.5">Recomposición corporal</SectionBadge>
            <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">Perder grasa y ganar músculo no siempre se ve en la báscula</h1>
            <p className="text-default-600 mb-7.5 text-base leading-normal md:text-lg md:leading-relaxed lg:max-w-lg">Es un objetivo real dentro de la app, distinto de perder grasa o ganar músculo por separado: más lento y más difícil de notar a simple vista. Por eso medimos más que tu peso — rendimiento, medidas y constancia — para que sepas si avanzas aunque el espejo aún no lo muestre.</p>
            <div className="flex flex-wrap gap-5">
              <CtaButton href="/contact">Empieza tu plan</CtaButton>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image src={about02} alt="Recomposición corporal" className="h-80 w-full object-cover md:h-105" />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <GlassStatCard icon="lucide:ruler" iconBgClass="bg-primary-6" label="Medidas y % de grasa, no solo el peso" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
