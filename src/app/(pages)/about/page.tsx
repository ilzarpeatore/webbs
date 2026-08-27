import { Metadata } from 'next'
import AboutHero from './components/AboutHero'
import Download from './components/Download'
import Mission from './components/Mission'
import Purpose from './components/Purpose'
import Stats from './components/Stats'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
}

const Page = () => {
  return (
    <>
      <AboutHero />
      <Mission />
      <Purpose />
      <Stats />
      <Download />
    </>
  )
}

export default Page
