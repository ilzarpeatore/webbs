import { Metadata } from 'next'
import Faq from './components/Faq'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  description: 'Resolvemos las dudas más habituales sobre BeStronger: cómo funciona el servicio, la comunicación con tu coach, el pago, la app y mucho más.',
  alternates: { canonical: '/faqs' },
}

const Page = () => {
  return (
    <>
      <Faq />
    </>
  )
}

export default Page
