import SectionBadge from '@/components/shared/SectionBadge'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 text-center md:pt-40 md:pb-25 lg:py-50">
      <div className="relative z-10 container mx-auto lg:max-w-3xl">
        <SectionBadge className="mb-3.5">Antes de registrarte</SectionBadge>
        <h1 className="text-default-900 mb-3.5 text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-[64px]">Para quién es BeStronger, y para quién no</h1>
        <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">Preferimos que lo sepas antes de registrarte que llevarte una sorpresa después. Así es hoy el servicio, sin promesas de más.</p>
      </div>
    </section>
  )
}

export default Hero
