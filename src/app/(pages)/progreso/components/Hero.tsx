import Image from 'next/image'

import contactImage from '@/assets/images/locations/contact-image.webp'
import CtaButton from '@/components/shared/CtaButton'
import SectionBadge from '@/components/shared/SectionBadge'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 md:pt-40 md:pb-25 lg:py-50">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-7.5 md:grid-cols-2 lg:gap-15">
          <div>
            <SectionBadge className="mb-3.5">Seguimiento y progreso</SectionBadge>
            <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">Tu progreso, con datos, no con sensaciones</h1>
            <p className="text-default-600 mb-7.5 text-base leading-normal md:text-lg md:leading-relaxed lg:max-w-lg">Peso, medidas, rendimiento por ejercicio, constancia y récords personales, calculados automáticamente a partir de lo que ya registras entrenando — sin rellenar un informe aparte.</p>
            <div className="flex flex-wrap gap-5">
              <CtaButton href="/contact">Empieza tu plan</CtaButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <Image src={contactImage} alt="Progreso y estadísticas" className="h-80 w-full object-cover md:h-105" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
