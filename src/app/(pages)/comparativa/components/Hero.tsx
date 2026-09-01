import CtaButton from '@/components/shared/CtaButton'
import SectionBadge from '@/components/shared/SectionBadge'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 text-center md:pt-40 md:pb-25 lg:py-50">
      <div className="relative z-10 container mx-auto lg:max-w-3xl">
        <SectionBadge className="mb-3.5">Coach real vs. algoritmo sin supervisión</SectionBadge>
        <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">Un coach humano decide, no un algoritmo solo</h1>
        <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">Muchas apps de entrenamiento genéricas generan y ajustan tu plan con un algoritmo sin que nadie lo revise. En BeStronger, cada sugerencia de ajuste pasa por la aprobación de tu coach antes de convertirse en tu objetivo real.</p>
        <div className="mt-7.5 flex justify-center">
          <CtaButton href="/contacto">Empieza tu plan</CtaButton>
        </div>
      </div>
    </section>
  )
}

export default Hero
