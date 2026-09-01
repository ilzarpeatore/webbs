import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Beneficios from './components/Beneficios'
import Faq from './components/Faq'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Ganancia de masa muscular online',
  description: 'Gana músculo online con progresión de carga basada en tus series reales, balance muscular por grupo, mejores marcas y un plan calórico para tu superávit.',
  alternates: { canonical: '/ganar-musculo' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <Beneficios />
      <Faq />
      <CtaBanner title="Sube de carga y de volumen, con datos que lo confirman" description="Regístrate y accede a tu plan de ganancia muscular diseñado por un coach real." href="/contacto" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
