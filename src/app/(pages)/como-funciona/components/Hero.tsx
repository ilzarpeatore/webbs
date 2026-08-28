import CtaButton from '@/components/shared/CtaButton'
import SectionBadge from '@/components/shared/SectionBadge'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 text-center md:pt-40 md:pb-25 lg:py-50">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="relative z-10 container mx-auto lg:max-w-3xl">
        <SectionBadge className="mb-3.5">Cómo funciona</SectionBadge>
        <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">De registrarte a tener un coach real revisando tus datos</h1>
        <p className="text-default-600 mb-7.5 text-base leading-normal md:text-lg md:leading-relaxed">Sin pasos ocultos ni promesas de más: así es el proceso completo, incluidas las partes que todavía no automatizamos.</p>
        <div className="flex justify-center">
          <CtaButton href="/contact">Empieza tu plan</CtaButton>
        </div>
      </div>
    </section>
  )
}

export default Hero
