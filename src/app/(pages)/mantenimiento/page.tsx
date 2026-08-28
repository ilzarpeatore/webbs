import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Beneficios from './components/Beneficios'
import Faq from './components/Faq'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Mantenimiento y forma física online',
  description: 'Mantén tu forma con un plan de entrenamiento y nutrición que se adapta a tu semana: reorganiza tu calendario, reporta dolor al momento y sostén tu constancia.',
  alternates: { canonical: '/mantenimiento' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <Beneficios />
      <Faq />
      <CtaBanner title="Mantén tu forma con un sistema que se adapta a tu semana" description="Regístrate y accede a un plan de entrenamiento y nutrición pensado para durar." href="/contact" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
