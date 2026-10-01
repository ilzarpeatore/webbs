import { Metadata } from 'next'
import UnsubscribeForm from './UnsubscribeForm'

export const metadata: Metadata = {
  title: 'Darse de baja',
  robots: { index: false, follow: false },
}

type Props = { searchParams: Promise<{ token?: string }> }

const Page = async ({ searchParams }: Props) => {
  const { token } = await searchParams

  return (
    <section className="pt-32.5 pb-15 md:pt-36 md:pb-25 lg:pt-50 lg:pb-32.5">
      <div className="container max-w-2xl text-center">
        <h1 className="text-default-900 text-3xl font-medium tracking-tight md:text-5xl">Darse de baja de la newsletter</h1>
        {token ? (
          <>
            <p className="text-default-600 mt-5 text-lg">Confirma que no quieres recibir más emails de BeStronger.</p>
            <UnsubscribeForm token={token} />
          </>
        ) : (
          <p className="text-default-600 mt-5 text-lg">El enlace no es válido. Usa el enlace de baja que aparece en nuestros emails.</p>
        )}
      </div>
    </section>
  )
}

export default Page
