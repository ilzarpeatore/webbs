import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const origenes: FeatureCardProps[] = [
  {
    title: 'Asignado por tu coach',
    description: 'Tu coach te asigna un hábito directamente cuando lo considera parte de tu plan.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:user-check',
  },
  {
    title: 'De la biblioteca',
    description: 'Un catálogo curado por tu coach del que puedes adoptar hábitos libremente.',
    bgClass: 'bg-default-900',
    icon: 'lucide:library',
  },
  {
    title: 'Personal',
    description: 'Creado por ti, con icono, nombre, objetivo numérico opcional y frecuencia diaria o semanal.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:user',
  },
]

const objetivoFeatures: FeatureCardProps[] = [
  {
    title: 'Objetivo numérico real',
    description: 'Si tu objetivo es "10.000 pasos" o "leer 4 libros", el círculo semanal se rellena según el % que consigues cada día, no solo hecho o no hecho.',
    bgClass: 'bg-default-900',
    icon: 'lucide:target',
  },
  {
    title: 'Racha calculada en servidor',
    description: 'Tu racha no depende de tu dispositivo: se calcula en el servidor, igual que tu racha combinada de todos tus hábitos activos.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:flame',
  },
]

const Origenes = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="mb-12.5">
          <SectionBadge className="mb-3.5">De dónde vienen tus hábitos</SectionBadge>
          <h2 className="text-default-900 max-w-xl text-3xl leading-tight font-medium md:text-4xl lg:text-5xl">Tres orígenes, un mismo seguimiento</h2>
        </div>

        <div className="mb-7.5 grid grid-cols-1 gap-7.5 md:grid-cols-3">
          {origenes.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
          {objetivoFeatures.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Origenes
