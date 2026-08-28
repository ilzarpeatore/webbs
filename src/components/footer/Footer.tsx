import logo from '@/assets/images/logo.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

export type FooterLink = {
  label: string
  link: string
  className: string
}

export type SocialLink = {
  link: string
  icon: string
}

const pageLinks: FooterLink[] = [
  { label: 'Inicio', link: '/', className: 'mmd:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Entrenamiento', link: '/entrenamiento', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Nutrición', link: '/nutricion', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Hábitos', link: '/habitos', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Progreso', link: '/progreso', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Cómo funciona', link: '/como-funciona', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Perder grasa', link: '/perder-grasa', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Ganar músculo', link: '/ganar-musculo', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Recomposición corporal', link: '/recomposicion', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Mantenimiento', link: '/mantenimiento', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
]

const otherLinks: FooterLink[] = [
  { label: 'Sobre nosotros', link: '/about', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Para quién es', link: '/para-quien-es', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Coach real vs. IA', link: '/comparativa', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Planes', link: '/pricing', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Contacto', link: '/contact', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Lista de espera', link: '/waitlist', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'La app', link: '/download', className: ' :text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Preguntas frecuentes', link: '/faqs', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Política de privacidad', link: '/privacy-policy', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Términos y condiciones', link: '/terms-and-conditions', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Aviso legal', link: '/legal-notice', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
]

const socialLinks: SocialLink[] = [
  { link: '#', icon: 'tabler:brand-instagram' },
  { link: '#', icon: 'tabler:brand-x-filled' },
  { link: '#', icon: 'tabler:brand-linkedin-filled' },
  { link: '#', icon: 'tabler:brand-facebook-filled' },
]

const Footer = () => {
  return (
    <footer className="bg-body-bg pt-20 pb-5 lg:pb-7.5">
      <div className="container">
        <div className="grid grid-cols-2 justify-between gap-7.5 md:grid-cols-4 md:gap-12.5 lg:gap-32">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="mb-10 inline-block">
              <Image src={logo} alt="BeStronger Logo" height={44} className="h-11" />
            </Link>

            <div className="lg:max-w-md">
              <h2 className="mb-2.5 text-xl font-medium md:text-2xl">No entrenes a ciegas</h2>
              <p className="text-default-500 mb-5 text-lg">Sin spam. Consejos reales sobre entrenamiento, nutrición y constancia.</p>

              <form className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
                <input type="email" placeholder="Tu email" required className="border-default-200 bg-default-200 text-default-900 placeholder:text-default-400 w-full rounded-full border px-5 py-3 text-base transition-all focus:outline-none lg:w-lg!" />
                <button type="submit" className="bg-default-900 w-full rounded-full px-8 py-3.5 font-medium whitespace-nowrap text-white transition-all hover:scale-95 lg:w-auto">
                  Suscribirme
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="text-default-900 mb-5 text-base font-medium lg:mb-7.5">Páginas</h3>
            <div className="flex flex-col justify-end gap-2">
              {pageLinks.map((item, index) => (
                <Link key={index} href={item.link} className={item.className}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-900 mb-5 text-base font-medium lg:mb-7.5">Más enlaces</h3>
            {otherLinks.map((item, index) => (
              <Link key={index} href={item.link} className={item.className}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-default-200 mt-6 flex flex-col items-center justify-start gap-5 border-t pt-5 md:mt-8 md:flex-row md:justify-between md:gap-6 md:pt-7.5 lg:mt-16">
          <p className="text-default-600 text-base md:text-lg">© 2026 BeStronger. Todos los derechos reservados.</p>

          <div className="flex items-center justify-start gap-2.5 md:justify-end">
            {socialLinks.map((item, index) => (
              <Link key={index} href={item.link} target="_blank" className="group bg-default-200 inline-flex size-9 items-center justify-center overflow-hidden rounded-full">
                <div className="relative size-4 overflow-hidden">
                  <Icon icon={item.icon} className="text-default-800 absolute inset-0 size-4 h-full w-full transition-transform duration-300 group-hover:-translate-y-[200%]" />
                  <Icon icon={item.icon} className="text-default-800 absolute inset-0 size-4 h-full w-full translate-y-[200%] transition-transform duration-300 group-hover:translate-y-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
