import '@/assets/css/style.css'
import favicon from '@/assets/images/favicon.png'
import logoIcon from '@/assets/images/logo-icon.png'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { DEFAULT_PAGE_TITLE, SITE_URL } from '@/config/constants'
import type { Metadata } from 'next'
import { Google_Sans_Flex, Stack_Sans_Headline } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BeStronger',
  url: SITE_URL,
  logo: `${SITE_URL}${logoIcon.src}`,
}

const DEFAULT_DESCRIPTION = 'BeStronger es un servicio de entrenamiento y nutrición online con un coach real detrás: registra cada serie, cada comida y cada hábito, y tu coach ajusta tu plan con datos objetivos.'

const googleSansFlex = Google_Sans_Flex({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

const stackSansHeadline = Stack_Sans_Headline({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${DEFAULT_PAGE_TITLE}`,
    default: DEFAULT_PAGE_TITLE,
  },
  icons: { icon: favicon.src },
  description: DEFAULT_DESCRIPTION,
  keywords: ['entrenamiento online', 'nutrición online', 'entrenador personal online', 'coach de fitness', 'app de entrenamiento', 'plan de nutrición personalizado', 'seguimiento de hábitos', 'BeStronger'],
  authors: [{ name: 'BeStronger' }],
  robots: 'index, follow',
  openGraph: {
    siteName: 'BeStronger',
    locale: 'es_ES',
    type: 'website',
    title: DEFAULT_PAGE_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_PAGE_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="es">
      <body className={`bg-body-bg ${googleSansFlex.variable} ${stackSansHeadline.variable}`} suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <AppProvidersWrapper>{children}</AppProvidersWrapper>
      </body>
    </html>
  )
}

export default RootLayout
