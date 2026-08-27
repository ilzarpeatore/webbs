import Image from 'next/image'
import Link from 'next/link'

import appStoreBox from '@/assets/images/icons/app-storebox.svg'
import googlePlayBox from '@/assets/images/icons/google-playbox.svg'
import icon39 from '@/assets/images/icons/icon-39.svg'
import icon66 from '@/assets/images/icons/icon-66.svg'
import cloud02 from '@/assets/images/locations/cloud-02.webp'
import cloud05 from '@/assets/images/locations/cloud-05.webp'
import decoration from '@/assets/images/workspace/decoration.webp'
import phoneImage from '@/assets/images/workspace/phone-image.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La app',
}

const Page = () => {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pb-14 lg:pt-38">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image src={decoration} className="absolute inset-s-0 top-25 bottom-20 w-1/2 blur-sm" alt="" />
          <Image src={cloud02} className="absolute inset-e-0 bottom-0 h-74 w-1/3" alt="" />
          <Image src={cloud05} className="absolute inset-e-10 top-10 w-1/4" alt="" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="max-w-2xl">
              <h1 className="text-default-900 mb-5 text-3xl font-medium tracking-tight md:text-5xl lg:text-[68px]">La app de BeStronger llega muy pronto</h1>
              <p className="text-default-600 mb-5 text-base leading-tight md:mb-7.5 md:text-xl">Entrenamiento y nutrición diseñados por tu coach, con seguimiento en vivo serie a serie. Únete a la lista de espera y te avisamos en cuanto esté disponible en iOS y Android.</p>

              <div className="mb-5 flex gap-7.5 md:mb-7.5 lg:gap-20">
                <div>
                  <h2 className="text-default-900 text-2xl font-medium md:text-3xl lg:text-4xl">6</h2>
                  <p className="text-default-600 mt-2 text-lg font-medium">Informes de estadísticas de entrenamiento</p>
                </div>
                <div>
                  <h2 className="text-default-900 text-2xl font-medium md:text-3xl lg:text-4xl">37</h2>
                  <p className="text-default-600 mt-2 text-lg font-medium">Preguntas en tu cuestionario inicial</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3.5">
                <Link href="#" className="transition-transform hover:scale-95">
                  <Image src={appStoreBox} alt="Próximamente en App Store" className="h-12.5 w-auto" />
                </Link>
                <Link href="#" className="transition-transform hover:scale-95">
                  <Image src={googlePlayBox} alt="Próximamente en Google Play" className="h-12.5 w-auto" />
                </Link>
              </div>

              <div className="mt-6.5 inline-flex items-center gap-5 rounded-2xl bg-white p-2 shadow-2xl md:mt-10 lg:mt-20">
                <div className="bg-default-200 shrink-0 rounded-2xl p-4">
                  <Image src={icon39} alt="" className="size-25" />
                </div>
                <div className="relative">
                  <Image src={icon66} className="absolute top-2 left-0 size-15 rotate-[-10deg]" alt="" />
                  <Link href="/waitlist" className="text-default-900 mt-15 block text-2xl leading-tight font-medium hover:underline">
                    Únete a la <br /> lista de espera
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <Image src={phoneImage} alt="App Dashboard" className="h-175 w-full max-w-87.5 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
