import '@/assets/css/style.css'
import favicon from '@/assets/images/favicon.ico'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import type { Metadata } from 'next'
import { Google_Sans_Flex, Stack_Sans_Headline } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

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
  title: {
    template: `%s | ${DEFAULT_PAGE_TITLE}`,
    default: DEFAULT_PAGE_TITLE,
  },
  icons: { icon: favicon.src },
  description: 'BeStronger es un servicio de entrenamiento y nutrición online con un coach real detrás: registra cada serie, cada comida y cada hábito, y tu coach ajusta tu plan con datos objetivos.',
  keywords: ['entrenamiento online', 'nutrición online', 'entrenador personal online', 'coach de fitness', 'app de entrenamiento', 'plan de nutrición personalizado', 'seguimiento de hábitos', 'BeStronger'],
  authors: [{ name: 'BeStronger' }],
  robots: 'index, follow',
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="es">
      <body className={`bg-body-bg ${googleSansFlex.variable} ${stackSansHeadline.variable}`} suppressHydrationWarning>
        <AppProvidersWrapper>{children}</AppProvidersWrapper>
      </body>
    </html>
  )
}

export default RootLayout
