import { Metadata } from 'next'
import CtaBanner from '@/components/shared/CtaBanner'
import Comparativa from './components/Comparativa'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Niveles from './components/Niveles'

export const metadata: Metadata = {
  title: 'Para quién es',
  description: 'Para quién es BeStronger y para quién no, con honestidad: qué ofrece hoy el servicio y qué limitaciones reales tiene todavía.',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Comparativa />
      <Niveles />
      <Faq />
      <CtaBanner title="¿Encajas en el perfil? Empecemos" description="Regístrate o escríbenos si te queda alguna duda antes de dar el paso." href="/contact" ctaLabel="Habla con nosotros" />
    </>
  )
}

export default Page
