import Image, { StaticImageData } from 'next/image'

import avatar01 from '@/assets/images/team/avatar-01.webp'
import avatar02 from '@/assets/images/team/avatar-02.webp'
import avatar03 from '@/assets/images/team/avatar-03.webp'
import avatar04 from '@/assets/images/team/avatar-04.webp'
import avatar05 from '@/assets/images/team/avatar-05.webp'
import avatar06 from '@/assets/images/team/avatar-06.webp'
import avatar07 from '@/assets/images/team/avatar-07.webp'
import avatar08 from '@/assets/images/team/avatar-08.webp'

export type FeedbackItemType = {
  quote: string
  avatar: StaticImageData
  role: string
}

const leftColumnData: FeedbackItemType[] = [
  {
    quote: 'Cada serie que haces queda registrada al momento — tu coach ve tu progreso real, no lo que recuerdas contarle.',
    avatar: avatar04,
    role: 'Entrenamiento',
  },
  {
    quote: 'El peso y las repeticiones que te tocan hoy se ajustan solos según cómo entrenaste la última vez, con aprobación de tu coach.',
    avatar: avatar05,
    role: 'Auto-regulación',
  },
  {
    quote: 'Si te duele algo entrenando, repórtalo ahí mismo — tu coach se entera al momento, sin esperar a la próxima sesión.',
    avatar: avatar06,
    role: 'Reporte de dolor',
  },
  {
    quote: 'Si no puedes entrenar un día, reorganiza tu semana arrastrando el entrenamiento a otro día — se aplica al instante.',
    avatar: avatar03,
    role: 'Calendario',
  },
]

const rightColumnData: FeedbackItemType[] = [
  {
    quote: 'Tu coach te prepara opciones de comida reales para cada franja del día, y la app te dice al momento si tu combinación encaja con tu objetivo.',
    avatar: avatar07,
    role: 'Nutrición',
  },
  {
    quote: 'No solo entrenamiento: construye las rutinas diarias que hacen que el resto funcione, con seguimiento real de tu racha.',
    avatar: avatar08,
    role: 'Hábitos',
  },
  {
    quote: 'Tu progreso, con datos, no con sensaciones: 6 informes de estadísticas calculados automáticamente desde lo que registras.',
    avatar: avatar02,
    role: 'Progreso',
  },
  {
    quote: 'Notas del coach en cada ejercicio, check-ins configurables y feedback tras cada sesión — sin chat en vivo, pero sin dejarte solo.',
    avatar: avatar01,
    role: 'Acompañamiento',
  },
]

const FeedbackCard = ({ item }: { item: FeedbackItemType }) => (
  <div className="bg-default-200 flex flex-col justify-between rounded-2xl p-2.5 md:p-7.5">
    <p className="text-default-800 mb-3.5 text-sm leading-snug font-medium md:mb-7.5 md:text-lg">{item.quote}</p>
    <div className="flex items-center gap-2.5">
      <Image src={item.avatar} className="size-7.5 rounded-full object-cover md:size-12" alt="" />
      <p className="text-default-500 text-xs md:text-sm">{item.role}</p>
    </div>
  </div>
)

const Feedback = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-40">
      <div className="container">
        <div className="from-body-bg pointer-events-none absolute inset-x-0 top-16 z-20 h-16 bg-gradient-to-b to-transparent lg:top-36"></div>
        <div className="from-body-bg pointer-events-none absolute inset-x-0 bottom-16 z-20 h-16 bg-gradient-to-t to-transparent lg:bottom-36"></div>

        <div className="grid grid-cols-2 gap-3.5 md:gap-5 lg:gap-7.5">
          <div className="h-[560px] overflow-hidden md:h-[760px] lg:h-[880px]">
            <div className="animate-marquee-down flex flex-col gap-3.5 md:gap-5 lg:gap-7.5">
              {[...leftColumnData, ...leftColumnData].map((item, idx) => (
                <FeedbackCard key={idx} item={item} />
              ))}
            </div>
          </div>

          <div className="h-[560px] overflow-hidden md:h-[760px] lg:h-[880px]">
            <div className="animate-marquee-up flex flex-col gap-3.5 md:gap-5 lg:gap-7.5">
              {[...rightColumnData, ...rightColumnData].map((item, idx) => (
                <FeedbackCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
