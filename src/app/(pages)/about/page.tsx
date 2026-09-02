import { Metadata } from 'next'
import { COACH_NAME, SITE_URL } from '@/config/constants'
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

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: COACH_NAME,
  jobTitle: 'Coach',
  url: `${SITE_URL}/about`,
  worksFor: {
    '@type': 'Organization',
    name: 'BeStronger',
    url: SITE_URL,
  },
}

const Page = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <AboutHero />
      <Mission />
      <Purpose />
      <Stats />
      <Download />
    </>
  )
}

export default Page
