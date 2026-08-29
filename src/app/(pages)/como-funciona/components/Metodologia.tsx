import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const items: FeatureCardProps[] = [
  {
    title: 'Auto-regulación basada en rendimiento real',
    description: 'En lugar de una tabla fija de progresión, la carga y las repeticiones que te tocan se calculan según cómo entrenaste realmente la última vez.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:activity',
  },
  {
    title: 'RIR/RPE como medida de esfuerzo',
    description: 'Repeticiones en reserva o esfuerzo percibido, intercambiables según lo que te resulte más natural, en vez de depender solo de porcentajes fijos.',
    bgClass: 'bg-default-900',
    icon: 'lucide:gauge',
  },
]

const Metodologia = () => {
  return (
    <section className="pb-20 lg:pb-40">
      <div className="container">
        <div className="mb-12.5 lg:max-w-2xl">
          <SectionBadge className="mb-3.5">Metodología</SectionBadge>
          <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:text-5xl">Dos decisiones técnicas concretas, no una fórmula mágica</h2>
          <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg">Preferimos explicarte exactamente qué hace el sistema a venderte un "método" con nombre propio que no podemos demostrar.</p>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
          {items.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metodologia
