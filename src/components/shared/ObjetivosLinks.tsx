import { Icon } from '@iconify/react'
import Link from 'next/link'
import SectionBadge from './SectionBadge'

const objetivos = [
  { label: 'Perder grasa', href: '/perder-grasa', icon: 'lucide:flame' },
  { label: 'Ganar músculo', href: '/ganar-musculo', icon: 'lucide:dumbbell' },
  { label: 'Recomposición corporal', href: '/recomposicion', icon: 'lucide:ruler' },
  { label: 'Mantenimiento', href: '/mantenimiento', icon: 'lucide:calendar-range' },
]

const ObjetivosLinks = () => {
  return (
    <section className="pb-20 lg:pb-40">
      <div className="container">
        <div className="mb-7.5">
          <SectionBadge className="mb-3.5">Según tu objetivo</SectionBadge>
          <h2 className="text-default-900 text-2xl leading-tight font-medium md:text-3xl">¿Cuál es el tuyo?</h2>
        </div>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-4">
          {objetivos.map((item) => (
            <Link key={item.href} href={item.href} className="group flex items-center gap-3.5 rounded-2xl bg-white p-5 transition-transform hover:scale-[0.98]">
              <div className="bg-default-200 flex size-10 shrink-0 items-center justify-center rounded-full">
                <Icon icon={item.icon} className="text-default-800 text-lg" />
              </div>
              <span className="text-default-900 text-base font-medium">{item.label}</span>
              <Icon icon="lucide:arrow-right" className="text-default-400 ms-auto size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ObjetivosLinks
