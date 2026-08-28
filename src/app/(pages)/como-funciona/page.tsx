import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Acompanamiento from './components/Acompanamiento'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Metodologia from './components/Metodologia'
import Pasos from './components/Pasos'

export const metadata: Metadata = {
  title: 'Cómo funciona',
  description: 'Cómo funciona BeStronger paso a paso: registro, cuestionario inicial, plan diseñado por tu coach, auto-regulación de carga y acompañamiento asíncrono real.',
  alternates: { canonical: '/como-funciona' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <Pasos />
      <Metodologia />
      <Acompanamiento />
      <Faq />
      <CtaBanner title="Ahora que sabes cómo funciona, empieza" description="Regístrate y da el primer paso hacia tu plan de entrenamiento y nutrición." href="/contact" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
