import Image from 'next/image'

import social01 from '@/assets/images/about/social-image-01.webp'
import social02 from '@/assets/images/about/social-image-02.webp'
import social03 from '@/assets/images/about/social-image-03.webp'
import social04 from '@/assets/images/about/social-image-04.webp'
import social05 from '@/assets/images/about/social-image-05.webp'
import social06 from '@/assets/images/about/social-image-06.webp'
import avatar01 from '@/assets/images/team/avatar-01.webp'
import avatar02 from '@/assets/images/team/avatar-02.webp'
import avatar03 from '@/assets/images/team/avatar-03.webp'

const Users = () => {
  return (
    <section className="py-25 lg:py-50" id="metrics">
      <div className="container">
        <div className="mb-8 flex flex-col items-end justify-between gap-4 md:mb-12.5 md:flex-row md:gap-8">
          <h2 className="text-default-900 text-3xl leading-tight font-medium tracking-tight md:w-lg md:text-4xl lg:text-5xl">Lo que puedes conseguir con un coach real detrás</h2>

          <div className="flex flex-col items-start justify-start space-y-2.5 text-start md:items-end md:justify-end">
            <div className="flex items-center justify-start md:justify-end">
              <div className="flex -space-x-4">
                <Image className="border-default-800 h-10 w-10 rounded-full border-2 object-cover" src={avatar01} alt="Cliente" />
                <Image className="border-default-800 h-10 w-10 rounded-full border-2 object-cover" src={avatar02} alt="Cliente" />
                <Image className="border-default-800 h-10 w-10 rounded-full border-2 object-cover" src={avatar03} alt="Cliente" />
                <div className="border-default-800 bg-default-900 flex h-10 w-10 items-center justify-center rounded-full border-2 text-[8px] font-medium text-white">¿Tú?</div>
              </div>
            </div>
            <div className="text-default-600 text-lg font-medium">Sé de los primeros clientes</div>
          </div>
        </div>
      </div>

      <div className="relative flex gap-7.5 overflow-hidden">
        <div className="animate-marquee flex gap-7.5 py-4 whitespace-nowrap">
          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social01} className="absolute inset-0 h-full w-full object-cover" alt="Entrenamiento personalizado" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="text-sm font-medium opacity-50">Cliente 1:1</span>
              </p>
            </div>
            <div className="relative z-10">
              <p className="text-lg leading-tight font-medium whitespace-normal text-white">Plan de entrenamiento diseñado por tu coach, día a día</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social02} className="absolute inset-0 h-full w-full object-cover" alt="Nutrición asignada" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="font-normal opacity-50">Cliente con plan de nutrición</span>
              </p>
            </div>
            <div className="relative z-10 text-white">
              <h3 className="mb-1 text-5xl font-black text-white">6</h3>
              <p className="font-medium">Informes de estadísticas automáticos</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social03} className="absolute inset-0 h-full w-full object-cover" alt="Reporte de dolor" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="font-normal opacity-50">Reporte de dolor</span>
              </p>
            </div>
            <div className="relative z-10 text-white">
              <p className="text-lg font-medium text-white">Si te duele algo entrenando, tu coach recibe una notificación automática según la gravedad</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social04} className="absolute inset-0 h-full w-full object-cover" alt="Hábitos con racha" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="text-sm font-medium opacity-50">Hábitos con racha</span>
              </p>
            </div>
            <div className="relative z-10">
              <p className="text-lg leading-tight font-medium whitespace-normal text-white">Rachas calculadas en servidor, con objetivos numéricos reales</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social05} className="absolute inset-0 h-full w-full object-cover" alt="Reorganizar la semana" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="text-sm font-medium opacity-50">Calendario flexible</span>
              </p>
            </div>
            <div className="relative z-10">
              <h3 className="mb-1 text-4xl font-black text-white">1 toque</h3>
              <p className="font-medium text-white">Reorganiza tu semana sin perder el plan</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social06} className="absolute inset-0 h-full w-full object-cover" alt="Comunidad" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="text-sm font-medium opacity-50">Comunidad BeStronger</span>
              </p>
            </div>
            <div className="relative z-10">
              <p className="text-lg leading-tight font-medium whitespace-normal text-white">Publica, comenta y sigue el progreso de otros clientes</p>
            </div>
          </div>
        </div>

        <div className="animate-marquee flex gap-7.5 py-4 whitespace-nowrap">
          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social01} className="absolute inset-0 h-full w-full object-cover" alt="Entrenamiento personalizado" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="text-sm font-medium opacity-50">Cliente 1:1</span>
              </p>
            </div>
            <div className="relative z-10">
              <p className="text-lg leading-tight font-medium whitespace-normal text-white">Plan de entrenamiento diseñado por tu coach, día a día</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social02} className="absolute inset-0 h-full w-full object-cover" alt="Nutrición asignada" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="font-normal opacity-50">Cliente con plan de nutrición</span>
              </p>
            </div>
            <div className="relative z-10 text-white">
              <h3 className="mb-1 text-5xl font-black text-white">6</h3>
              <p className="font-medium">Informes de estadísticas automáticos</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social03} className="absolute inset-0 h-full w-full object-cover" alt="Reporte de dolor" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="font-normal opacity-50">Reporte de dolor</span>
              </p>
            </div>
            <div className="relative z-10 text-white">
              <p className="text-lg font-medium text-white">Si te duele algo entrenando, tu coach recibe una notificación automática según la gravedad</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social04} className="absolute inset-0 h-full w-full object-cover" alt="Hábitos con racha" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="text-sm font-medium opacity-50">Hábitos con racha</span>
              </p>
            </div>
            <div className="relative z-10">
              <p className="text-lg leading-tight font-medium whitespace-normal text-white">Rachas calculadas en servidor, con objetivos numéricos reales</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social05} className="absolute inset-0 h-full w-full object-cover" alt="Reorganizar la semana" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="text-sm font-medium opacity-50">Calendario flexible</span>
              </p>
            </div>
            <div className="relative z-10">
              <h3 className="mb-1 text-4xl font-black text-white">1 toque</h3>
              <p className="font-medium text-white">Reorganiza tu semana sin perder el plan</p>
            </div>
          </div>

          <div className="group relative flex h-75 w-95 flex-col justify-between overflow-hidden rounded-2xl p-7.5 md:h-128">
            <Image src={social06} className="absolute inset-0 h-full w-full object-cover" alt="Comunidad" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-white">
                <span className="text-sm font-medium opacity-50">Comunidad BeStronger</span>
              </p>
            </div>
            <div className="relative z-10">
              <p className="text-lg leading-tight font-medium whitespace-normal text-white">Publica, comenta y sigue el progreso de otros clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Users
