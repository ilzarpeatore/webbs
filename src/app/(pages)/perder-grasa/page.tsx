import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Beneficios from './components/Beneficios'
import Faq from './components/Faq'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Pérdida de grasa online',
  description: 'Pierde grasa con un plan de calorías calculado a tu medida, comidas que se comprueban al momento y auto-regulación que vigila tu fuerza mientras bajas de peso.',
  alternates: { canonical: '/perder-grasa' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <Beneficios />
      <Faq />
      <CtaBanner title="Pierde grasa con un déficit que se puede medir" description="Regístrate y accede a un plan de calorías y entrenamiento diseñado por un coach real." href="/contact" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
