import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { formatDuration, formatPrice, getPackCatalog, type Pack } from '@/utils/packsApi'
import PackIncludes from './components/PackIncludes'

export const metadata: Metadata = {
  title: 'Packs',
  description: 'Packs de entrenamiento y nutrición diseñados por tu coach: los compras aquí y los recibes directamente en la app de BeStronger.',
  alternates: { canonical: '/packs' },
}

// El catálogo lo gestiona el coach desde el panel: se refresca solo.
export const revalidate = 300

const Page = async () => {
  let packs: Pack[] = []
  try {
    packs = await getPackCatalog()
  } catch {
    packs = []
  }

  return (
    <section className="pt-32.5 pb-15 md:pt-36 md:pb-25 lg:pt-50 lg:pb-32.5">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium md:py-1.5">Packs</span>
          <h1 className="text-default-900 mt-2.5 text-3xl font-medium tracking-tight md:text-5xl lg:text-[68px]">Programas listos para empezar hoy</h1>
          <p className="text-default-600 mx-auto mt-5 max-w-2xl text-base md:text-lg">Elige tu pack, págalo aquí y regístrate en la app con el mismo email: tu entrenamiento, tu nutrición y tus hábitos te estarán esperando.</p>
        </div>

        {packs.length === 0 ? (
          <p className="text-default-600 text-center text-lg">Pronto habrá packs disponibles. Mientras tanto, <Link href="/contacto" className="underline underline-offset-4">escríbenos</Link>.</p>
        ) : (
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3">
            {packs.map((pack) => (
              <Link key={pack.slug} href={`/packs/${pack.slug}`} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-transform hover:-translate-y-1">
                {pack.image_url ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={pack.image_url} alt={pack.name} fill unoptimized className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col gap-4 p-5 lg:p-7.5">
                  <div>
                    <p className="text-default-500 text-sm font-medium">{formatDuration(pack)}</p>
                    <h2 className="text-default-900 mt-1 text-2xl font-medium">{pack.name}</h2>
                    {pack.short_description ? <p className="text-default-600 mt-2">{pack.short_description}</p> : null}
                  </div>
                  <PackIncludes pack={pack} />
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <p className="text-default-900 text-2xl font-semibold">{formatPrice(pack)}</p>
                    <span className="bg-default-900 rounded-full px-5 py-2.5 text-sm font-medium text-white">Ver pack</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Page
