import { Metadata } from 'next'
import ContactFaq from './components/ContactFaq'
import ContactForm from './components/ContactForm'
import ReachUs from './components/ReachUs'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con BeStronger para resolver dudas sobre el servicio, los planes o cómo empezar con un coach real.',
  alternates: { canonical: '/contacto' },
}

const Page = () => {
  return (
    <>
      <ContactForm />
      <ReachUs />
      <ContactFaq />
    </>
  )
}

export default Page
