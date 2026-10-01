import { Metadata } from 'next'
import Link from 'next/link'
import { confirmNewsletter } from '@/app/actions/marketing'

export const metadata: Metadata = {
  title: 'Confirmar suscripción',
  robots: { index: false, follow: false },
}

type Props = { searchParams: Promise<{ token?: string }> }

// Enlace del email de doble opt-in (bckbs NewsletterConfirmMail).
const Page = async ({ searchParams }: Props) => {
  const { token } = await searchParams
  const result = token ? await confirmNewsletter(token) : null
  const ok = result?.status === 'confirmed'
  const waitlist = result?.source === 'waitlist'

  return (
    <section className="pt-32.5 pb-15 md:pt-36 md:pb-25 lg:pt-50 lg:pb-32.5">
      <div className="container max-w-2xl text-center">
        {ok ? (
          <>
            <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium">¡Confirmado!</span>
            <h1 className="text-default-900 mt-3 text-3xl font-medium tracking-tight md:text-5xl">
              {waitlist ? 'Estás en la lista de espera' : 'Ya estás suscrito'}
            </h1>
            <p className="text-default-600 mt-5 text-lg">
              {waitlist
                ? 'Te avisaremos en cuanto la app esté disponible.'
                : 'Recibirás consejos reales sobre entrenamiento, nutrición y constancia. Sin spam.'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/packs" className="bg-default-900 rounded-full px-7 py-3.5 font-medium text-white">
                Ver los programas
              </Link>
              <Link href="/blog" className="border-default-200 text-default-900 rounded-full border bg-white px-7 py-3.5 font-medium">
                Leer el blog
              </Link>
            </div>
            {result?.unsubscribe_token ? (
              <p className="text-default-500 mt-10 text-sm">
                ¿Te has equivocado?{' '}
                <Link href={`/newsletter/baja?token=${result.unsubscribe_token}`} className="underline underline-offset-2">
                  Darme de baja
                </Link>
              </p>
            ) : null}
          </>
        ) : (
          <>
            <h1 className="text-default-900 text-3xl font-medium tracking-tight md:text-5xl">El enlace no es válido</h1>
            <p className="text-default-600 mt-5 text-lg">Puede que ya lo hayas usado o que haya caducado. Puedes volver a apuntarte desde el pie de cualquier página.</p>
          </>
        )}
      </div>
    </section>
  )
}

export default Page
