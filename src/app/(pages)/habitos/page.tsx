import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Origenes from './components/Origenes'

export const metadata: Metadata = {
  title: 'Hábitos',
  description: 'Sistema de hábitos con rachas calculadas en servidor y objetivos numéricos reales: la pieza que conecta tu entrenamiento y tu nutrición con el resto del día.',
  alternates: { canonical: '/habitos' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <Origenes />
      <Faq />
      <CtaBanner title="Construye la constancia que sostiene tu plan" description="Regístrate y empieza a medir tus hábitos con datos reales, no con sensaciones." href="/contact" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
