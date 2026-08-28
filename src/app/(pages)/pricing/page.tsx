import { Metadata } from 'next'
import PricingFaq from './components/PricingFaq'
import PricingPlans from './components/PricingPlans'

export const metadata: Metadata = {
  title: 'Planes',
  description: 'Planes de BeStronger: mensual, trimestral, semestral y anual. Mismo servicio de entrenamiento y nutrición con coach real en los 4 planes -- solo cambia la duración del compromiso.',
  alternates: { canonical: '/pricing' },
}

const Page = () => {
  return (
    <>
      <PricingPlans />
      <PricingFaq />
    </>
  )
}

export default Page
