import { Metadata } from 'next'
import Link from 'next/link'
import CtaButton from '@/components/shared/CtaButton'
import SectionBadge from '@/components/shared/SectionBadge'

export const metadata: Metadata = {
  title: 'Página no encontrada',
}

const helpfulLinks = [
  { label: 'Entrenamiento', href: '/entrenamiento' },
  { label: 'Nutrición', href: '/nutricion' },
  { label: 'Cómo funciona', href: '/como-funciona' },
  { label: 'Blog', href: '/blog' },
  { label: 'Preguntas frecuentes', href: '/faqs' },
  { label: 'Contacto', href: '/contacto' },
]

const NotFound = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-20 text-center md:pt-40 md:pb-32 lg:py-50">
      <div className="relative z-10 container mx-auto lg:max-w-2xl">
        <span className="text-default-200 block text-7xl leading-none font-black md:text-9xl">404</span>

        <SectionBadge className="mt-7.5 mb-3.5">Página no encontrada</SectionBadge>
        <h1 className="text-default-900 mb-3.5 text-3xl leading-tight font-medium tracking-tight md:text-5xl">Esta página no existe, o se ha movido</h1>
        <p className="text-default-600 mb-10 text-base leading-normal md:text-lg md:leading-relaxed">Comprueba la dirección, o vuelve al inicio -- también puedes ir directamente a una de estas secciones.</p>

        <div className="mb-10 flex justify-center">
          <CtaButton href="/home">Volver al inicio</CtaButton>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {helpfulLinks.map((link) => (
            <Link key={link.href} href={link.href} className="border-default-200 text-default-800 hover:bg-default-200 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NotFound
