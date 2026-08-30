import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Proceso from './components/Proceso'

export const metadata: Metadata = {
  title: 'Coaching 1:1 de powerlifting',
  description: 'Asesoría personalizada de powerlifting: programación semanal, corrección técnica por vídeo y seguimiento continuo. Plazas limitadas.',
  alternates: { canonical: '/imready' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <Proceso />
      <Faq />
      <CtaBanner title="¿Listo para empezar?" description="Cuéntame tu caso y te contactaré en un máximo de 48 horas para confirmar tu plaza." href="#form" ctaLabel="Solicitar plaza" />
    </>
  )
}

export default Page
