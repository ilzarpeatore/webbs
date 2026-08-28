import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import ObjetivosLinks from '@/components/shared/ObjetivosLinks'
import Faq from './components/Faq'
import Hero from './components/Hero'
import PlanDiario from './components/PlanDiario'

export const metadata: Metadata = {
  title: 'Nutrición online',
  description: 'Nutrición online con coach real: comidas asignadas para cada franja del día y ajuste en vivo de tu objetivo calórico, en lugar de una dieta estática en PDF.',
  alternates: { canonical: '/nutricion' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <PlanDiario />
      <Faq />
      <ObjetivosLinks />
      <CtaBanner title="Come según un plan que se adapta a ti" description="Regístrate y tu coach te prepara tus primeras opciones de comida." href="/contact" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
