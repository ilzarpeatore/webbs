import { Metadata } from 'next'
import AboutHero from './components/AboutHero'
import Download from './components/Download'
import Mission from './components/Mission'
import Purpose from './components/Purpose'
import Stats from './components/Stats'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'Un coach real detrás de cada plan de BeStronger: por qué existe el servicio y qué lo diferencia de entrenar por tu cuenta o con una app genérica.',
  alternates: { canonical: '/about' },
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
