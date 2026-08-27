import { Metadata } from 'next'
import Faq from './components/Faq'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
}

const Page = () => {
  return (
    <>
      <Faq />
    </>
  )
}

export default Page
