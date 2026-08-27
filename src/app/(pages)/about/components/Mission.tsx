import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'

import icon50 from '@/assets/images/icons/icon-50.svg'
import icon51 from '@/assets/images/icons/icon-51.svg'

type MissionItemType = {
  title: string
  description: string
  bgClass: string
  icon?: string
  image?: StaticImageData
}

const missionData: MissionItemType[] = [
  {
    title: 'Datos, no sensaciones',
    description: 'Cada serie, cada comida y cada hábito quedan registrados al momento.',
    bgClass: 'bg-primary-3',
    image: icon50,
  },
  {
    title: 'Un humano decide',
    description: 'El sistema propone ajustes de carga, pero siempre los aprueba tu coach.',
    bgClass: 'bg-primary-7',
    image: icon51,
  },
  {
    title: 'Sin sobreprometer',
    description: 'Solo comunicamos lo que la app hace de verdad hoy, no lo que hará algún día.',
    bgClass: 'bg-primary-6',
    icon: 'lucide:eye',
  },
  {
    title: 'Acompañamiento real',
    description: 'Notas, reportes de dolor y check-ins — sin chat en vivo, pero sin dejarte solo.',
    bgClass: 'bg-primary-2',
    icon: 'lucide:lightbulb',
  },
]

const Mission = () => {
  return (
    <section>
      <div className="container">
        <div className="lg:max-w-4xl">
          <h2 className="text-default-900 mb-3.75 text-2xl leading-tight font-medium tracking-tight lg:mb-5 lg:text-4xl">Entrenar sin seguimiento real es entrenar a ciegas. Nuestra misión es que cada plan tenga un coach real revisando datos objetivos, no una tabla genérica.</h2>
          <p className="text-default-800 max-w-2xl leading-relaxed lg:text-lg">
            Sustituimos la combinación habitual de PDF de rutina, grupo de WhatsApp y hoja de cálculo de comidas por una única app donde registras lo que haces en tiempo real, y tu coach ve tu histórico completo sin tener que preguntarte.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 md:mt-12 md:gap-7.5 lg:mt-12.5 lg:grid-cols-4">
          {missionData.map((item, idx) => (
            <div key={idx} className="group flex h-full flex-col justify-between gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
              <div className={`flex size-10 items-center justify-center rounded-full md:size-12.5 ${item.bgClass}`}>
                {item.image ? <Image src={item.image} alt="" className="size-5 md:size-5.5" /> : item.icon && <Icon icon={item.icon} className="text-md text-white md:text-xl" />}
              </div>
              <div>
                <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">{item.title}</h4>
                <p className="text-default-700 text-sm leading-normal md:text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission
