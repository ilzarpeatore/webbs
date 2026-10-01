import { Metadata } from 'next'
import NewsletterForm from '@/components/shared/NewsletterForm'

export const metadata: Metadata = {
  title: 'Lista de espera',
  description: 'Apúntate a la lista de espera de BeStronger y sé de los primeros en acceder al servicio de entrenamiento y nutrición online con coach real.',
  alternates: { canonical: '/waitlist' },
}

const Page = () => {
  return (
    <>
      <section className="pt-32 pb-6 md:pt-40 md:pb-16 lg:pt-50">
        <div className="container">
          <div className="mx-auto text-center md:w-2xl">
            <h1 className="text-default-900 mb-2.5 text-4xl font-medium tracking-tight md:text-5xl lg:text-[90px]">Únete a la lista de espera</h1>

            <p className="mx-auto mb-5 text-base md:mb-7.5 md:text-xl">Estamos preparando el lanzamiento de la app de BeStronger en iOS y Android. Déjanos tu email y te avisamos en cuanto esté disponible.</p>
          </div>

          <div className="mx-auto md:w-2xl lg:w-lg">
            <NewsletterForm
              source="waitlist"
              ctaLabel="Unirme a la lista"
              className="flex flex-col items-start justify-center gap-2.5 md:flex-row md:gap-4 lg:items-center"
              inputClassName="border-default-200 bg-default-200 text-default-900 placeholder:text-default-400 w-full rounded-full border px-5 py-3 text-base transition-all focus:outline-none md:w-lg!"
              buttonClassName="bg-default-900 mx-auto w-auto rounded-full px-8 py-3.5 text-center font-medium whitespace-nowrap text-white transition-all hover:scale-95 disabled:opacity-60"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
