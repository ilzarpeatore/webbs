import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import AutoRegulacion from './components/AutoRegulacion'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Session from './components/Session'

export const metadata: Metadata = {
  title: 'Entrenamiento online',
  description: 'Entrenamiento online con coach real: tu plan lo diseña tu coach, cada serie se registra al momento, y la carga se ajusta con auto-regulación aprobada por un humano.',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Session />
      <AutoRegulacion />
      <Faq />
      <CtaBanner title="Entrena con un plan que se ajusta a ti, no al revés" description="Regístrate y accede a tu entrenamiento diseñado por un coach real." href="/contact" ctaLabel="Empieza tu plan" />
    </>
  )
}

export default Page
