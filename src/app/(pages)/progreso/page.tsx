import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Metricas from './components/Metricas'

export const metadata: Metadata = {
  title: 'Seguimiento y progreso',
  description: 'Progreso y estadísticas calculados automáticamente desde tu entrenamiento y tus métricas corporales: 6 informes detallados, sin rellenar nada aparte.',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Metricas />
      <Faq />
      <CtaBanner title="Deja de adivinar si estás progresando" description="Regístrate y accede a tu panel de progreso desde el primer entrenamiento." href="/contact" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
