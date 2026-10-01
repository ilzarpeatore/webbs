import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import appStoreBox from '@/assets/images/icons/app-storebox.svg'
import googlePlayBox from '@/assets/images/icons/google-playbox.svg'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/config/constants'
import { getCheckoutStatus } from '@/utils/packsApi'

export const metadata: Metadata = {
  title: 'Gracias por tu compra',
  robots: { index: false },
}

type ThanksPageProps = {
  searchParams: Promise<{ session_id?: string }>
}

const Page = async ({ searchParams }: ThanksPageProps) => {
  const { session_id: sessionId } = await searchParams
  const status = sessionId ? await getCheckoutStatus(sessionId).catch(() => null) : null

  return (
    <section className="pt-32.5 pb-15 md:pt-36 md:pb-25 lg:pt-50 lg:pb-32.5">
      <div className="container max-w-2xl text-center">
        {!status || status.status === 'refunded' ? (
          <>
            <h1 className="text-default-900 text-3xl font-medium tracking-tight md:text-5xl">No encontramos tu pago</h1>
            <p className="text-default-600 mt-5 text-lg">
              Si acabas de pagar, revisa tu email: te hemos enviado la confirmación. Si no te llega, <Link href="/contacto" className="underline underline-offset-4">escríbenos</Link> y lo resolvemos.
            </p>
          </>
        ) : status.status === 'pending' ? (
          <>
            <h1 className="text-default-900 text-3xl font-medium tracking-tight md:text-5xl">Estamos confirmando tu pago</h1>
            <p className="text-default-600 mt-5 text-lg">Algunos métodos de pago tardan unos minutos. Te enviaremos un email en cuanto se confirme, con los pasos para recibir tu pack.</p>
          </>
        ) : (
          <>
            <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium">¡Pago confirmado!</span>
            <h1 className="text-default-900 mt-3 text-3xl font-medium tracking-tight md:text-5xl">Tu pack «{status.pack}» ya es tuyo</h1>

            {status.already_linked ? (
              <p className="text-default-600 mt-5 text-lg">Ya tienes cuenta con <strong>{status.email}</strong>: abre la app y lo verás en tu calendario (si aún no has terminado el cuestionario inicial, aparecerá al terminarlo).</p>
            ) : (
              <p className="text-default-600 mt-5 text-lg">
                Descarga la app y <strong>regístrate con {status.email}</strong>. Al terminar el cuestionario inicial, tu pack aparecerá solo.
              </p>
            )}

            <div className="mt-7.5 flex flex-wrap justify-center gap-3.5">
              {APP_STORE_URL ? (
                <a href={APP_STORE_URL} className="transition-transform hover:scale-95">
                  <Image src={appStoreBox} alt="Descargar en App Store" className="h-12.5 w-auto" />
                </a>
              ) : null}
              {PLAY_STORE_URL ? (
                <a href={PLAY_STORE_URL} className="transition-transform hover:scale-95">
                  <Image src={googlePlayBox} alt="Descargar en Google Play" className="h-12.5 w-auto" />
                </a>
              ) : null}
            </div>

            <div className="mt-10 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-default-900 font-medium">¿Prefieres usar otro email en la app?</p>
              <p className="text-default-600 mt-1">En la app, ve a Perfil → Tengo un código e introduce:</p>
              <p className="text-default-900 mt-3 font-mono text-2xl tracking-[0.2em]">{status.redeem_code}</p>
              <p className="text-default-500 mt-3 text-sm">También te lo hemos enviado por email.</p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Page
