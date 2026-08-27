import Image, { StaticImageData } from 'next/image'

import avatar01 from '@/assets/images/team/avatar-01.webp'
import avatar02 from '@/assets/images/team/avatar-02.webp'
import avatar03 from '@/assets/images/team/avatar-03.webp'
import avatar04 from '@/assets/images/team/avatar-04.webp'
import avatar05 from '@/assets/images/team/avatar-05.webp'
import avatar06 from '@/assets/images/team/avatar-06.webp'
import avatar07 from '@/assets/images/team/avatar-07.webp'
import avatar08 from '@/assets/images/team/avatar-08.webp'
import avatar09 from '@/assets/images/team/avatar-09.webp'

export type FeedbackItemType = {
  quote: string
  avatar: StaticImageData
  role: string
}

const feedbacksColumnsData: FeedbackItemType[][] = [
  [
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
  ],
  [
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
  ],
  [
    {
      quote: 'Si no puedes entrenar un día, reorganiza tu semana arrastrando el entrenamiento a otro día — se aplica al instante.',
      avatar: avatar09,
      role: 'Calendario',
    },
    {
      quote: 'Notas del coach en cada ejercicio, check-ins configurables y feedback tras cada sesión — sin chat en vivo, pero sin dejarte solo.',
      avatar: avatar01,
      role: 'Acompañamiento',
    },
    {
      quote: 'Comparte tu entrenamiento con una tarjeta diseñada para redes, con tus kilos totales y tu mapa de músculos trabajados.',
      avatar: avatar03,
      role: 'Comunidad',
    },
  ],
]

const Feedback = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-40">
      <div className="container">
        <div className="relative overflow-hidden lg:max-h-180">
          <div className="grid grid-cols-2 gap-3.5 md:gap-5 lg:grid-cols-3 lg:gap-7.5">
            {feedbacksColumnsData.map((column, colIdx) => (
              <div key={colIdx} className="space-y-3.5 md:space-y-5 lg:space-y-7.5">
                {column.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-default-200 flex flex-col justify-between rounded-2xl p-2.5 md:p-7.5">
                    <p className="text-default-800 mb-3.5 text-sm leading-snug font-medium md:mb-7.5 md:text-lg">{item.quote}</p>
                    <div className="flex items-center justify-between">
                      <div className="items-center gap-2.5 md:flex">
                        <Image src={item.avatar} className="size-7.5 rounded-full object-cover md:size-12" alt="" />
                        <div className="mt-1.25 md:mt-0">
                          <p className="text-default-500 mt-1 text-xs md:text-sm">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
