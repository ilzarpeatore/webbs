import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lista de espera',
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
            <form className="flex flex-col items-start justify-center gap-2.5 md:flex-row md:gap-4 lg:items-center">
              <input type="email" placeholder="Tu email" required className="border-default-200 bg-default-200 text-default-900 placeholder:text-default-400 w-full rounded-full border px-5 py-3 text-base transition-all focus:outline-none md:w-lg!" />
              <div className="mx-auto">
                <button type="submit" className="bg-default-900 w-auto rounded-full px-8 py-3.5 text-center font-medium whitespace-nowrap text-white transition-all hover:scale-95">
                  Unirme a la lista
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
