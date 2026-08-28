import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Tabla from './components/Tabla'

export const metadata: Metadata = {
  title: 'Coach real vs. app con IA',
  description: 'Diferencias entre BeStronger (coach humano que aprueba cada ajuste) y una app genérica de entrenamiento gestionada por un algoritmo sin supervisión.',
  alternates: { canonical: '/comparativa' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <Tabla />
      <Faq />
      <CtaBanner title="Entrena con alguien que revisa tu progreso de verdad" description="Regístrate y deja que un coach real, no un algoritmo, diseñe tu plan." href="/contact" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
