import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import RichText from '@/components/blog/RichText'
import { formatDuration, formatPrice, getPackBySlug } from '@/utils/packsApi'
import BuyPackForm from '../components/BuyPackForm'
import PackIncludes from '../components/PackIncludes'

type PackPageProps = {
  params: Promise<{ slug: string }>
}

export const revalidate = 300

export async function generateMetadata({ params }: PackPageProps): Promise<Metadata> {
  const { slug } = await params
  const pack = await getPackBySlug(slug).catch(() => null)
  if (!pack) return { title: 'Pack no encontrado' }

  return {
    title: pack.name,
    description: pack.short_description ?? undefined,
    alternates: { canonical: `/packs/${pack.slug}` },
    openGraph: { images: pack.image_url ? [{ url: pack.image_url }] : undefined },
  }
}

const Page = async ({ params }: PackPageProps) => {
  const { slug } = await params
  const pack = await getPackBySlug(slug)
  if (!pack) notFound()

  return (
    <section className="pt-32.5 pb-15 md:pt-36 md:pb-25 lg:pt-50 lg:pb-32.5">
      <div className="container">
        <Link href="/packs" className="text-default-600 hover:text-default-900 text-sm font-medium">
          ← Todos los packs
        </Link>

        <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_400px]">
          <div>
            <p className="text-default-500 font-medium">{formatDuration(pack)}</p>
            <h1 className="text-default-900 mt-1 text-3xl font-medium tracking-tight md:text-5xl">{pack.name}</h1>
            {pack.short_description ? <p className="text-default-600 mt-4 text-lg">{pack.short_description}</p> : null}

            {pack.image_url ? (
              <div className="relative mt-7.5 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image src={pack.image_url} alt={pack.name} fill unoptimized className="object-cover" />
              </div>
            ) : null}

            {pack.description ? (
              <RichText html={pack.description} className="prose-lg mt-7.5" />
            ) : null}
          </div>

          <aside className="h-fit rounded-2xl bg-white p-5 shadow-xl lg:sticky lg:top-32 lg:p-7.5">
            <p className="text-default-900 text-3xl font-semibold">{formatPrice(pack)}</p>
            <p className="text-default-500 mt-1 text-sm">Pago único · {formatDuration(pack)} de programa</p>

            <div className="my-6">
              <PackIncludes pack={pack} />
            </div>

            <BuyPackForm slug={pack.slug} priceLabel={formatPrice(pack)} />

            <div className="border-default-100 text-default-600 mt-6 border-t pt-5 text-sm">
              <p className="text-default-900 font-medium">¿Cómo lo recibo?</p>
              <ol className="mt-2 list-decimal space-y-1 ps-5">
                <li>Paga el pack aquí.</li>
                <li>Descarga la app de BeStronger y regístrate con el mismo email.</li>
                <li>Al terminar el cuestionario inicial, tu pack aparece en tu calendario.</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Page
