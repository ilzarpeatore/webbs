import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Beneficios from './components/Beneficios'
import Faq from './components/Faq'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Recomposición corporal online',
  description: 'Recompón tu cuerpo con datos objetivos: rendimiento, medidas, % de grasa y constancia real, no solo tu peso. Tu coach ajusta tu plan mientras avanzas.',
  alternates: { canonical: '/recomposicion' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <Beneficios />
      <Faq />
      <CtaBanner title="Mide tu recomposición con algo más que la báscula" description="Regístrate y sigue tu rendimiento, tus medidas y tu constancia desde el primer día." href="/contacto" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
