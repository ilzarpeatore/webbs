import { Metadata } from 'next'
import PricingFaq from './components/PricingFaq'
import PricingPlans from './components/PricingPlans'

export const metadata: Metadata = {
  title: 'Planes',
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
