import { Icon } from '@iconify/react'
import Link from 'next/link'

import featureBg2 from '@/assets/images/locations/feature-02.webp'

const AutoRegulacion = () => {
  return (
    <section className="pb-20 lg:pb-40">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-black p-3.5 md:p-5 lg:p-10" style={{ backgroundImage: `url(${featureBg2.src})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
            <div className="flex h-full flex-col justify-between">
              <div className="lg:max-w-md">
                <h3 className="mb-2.5 text-xl leading-tight font-semibold text-white md:text-2xl">Auto-regulación de carga, con aprobación humana</h3>
                <p className="text-default-400 mb-5 text-base leading-relaxed md:mb-7.5 md:text-lg">
                  El peso y las repeticiones sugeridas para hoy se calculan según cómo entrenaste la última vez. No es una tabla fija de progresión, y tampoco es automático sin supervisión: la sugerencia queda pendiente hasta que tu coach la aprueba.
                </p>
                <Link href="/contact" className="group relative inline-flex overflow-hidden rounded-full bg-white px-3.5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-95 md:px-8.5 md:py-3 md:text-lg">
                  <span className="relative block overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Empieza tu plan</span>
                    <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full">Empieza tu plan</span>
                  </span>
                </Link>
              </div>
              <p className="text-default-500 mt-5 text-sm md:mt-14">*Las sugerencias siempre quedan pendientes de aprobación de tu coach antes de convertirse en tu objetivo real.</p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md md:p-7.5">
                <p className="text-default-400 mb-4 text-sm font-medium">Press banca — serie 3</p>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-default-300 text-sm">Obj. de tu coach</span>
                  <span className="text-lg font-semibold text-white">80 kg × 8</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary-1 flex items-center gap-1.5 text-sm">
                    <Icon icon="lucide:trending-up" className="size-4" />
                    Sugerido
                  </span>
                  <span className="text-primary-1 text-lg font-semibold">85 kg × 8</span>
                </div>
                <div className="mt-5 flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2">
                  <Icon icon="lucide:clock" className="text-default-400 size-3.5" />
                  <span className="text-default-300 text-xs">Pendiente de aprobación de tu coach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AutoRegulacion
