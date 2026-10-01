import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPackLanding } from '@/content/packs'
import { formatDuration, formatPrice, getPackBySlug } from '@/utils/packsApi'
import { genericLanding, landingJsonLd, packImageUrl } from './landing/landing-data'
import {
  Coach,
  Evidence,
  FactsBar,
  Faq,
  FinalCta,
  ForWho,
  Guarantee,
  Hero,
  Includes,
  LandingFooter,
  LandingHeader,
  Method,
  Offer,
  Pain,
  Scene,
  Phases,
  Summary,
  Testimonials,
  WhyFailed,
} from './landing/Sections'
import StickyBuyBar from './landing/StickyBuyBar'

// Landing de venta de un pack. Plantilla única: el texto de venta sale de
// src/content/packs/<slug>.ts y el precio, la imagen y lo que incluye, del
// pack configurado en el panel. Ver docs/LANDING_PACKS_ESTUDIO.md.

type PackPageProps = {
  params: Promise<{ slug: string }>
}

export const revalidate = 300

export async function generateMetadata({ params }: PackPageProps): Promise<Metadata> {
  const { slug } = await params
  const pack = await getPackBySlug(slug).catch(() => null)
  if (!pack) return { title: 'Pack no encontrado', robots: { index: false } }

  const landing = getPackLanding(slug) ?? genericLanding(pack)
  const imageUrl = packImageUrl(landing, pack)
  const images = imageUrl ? [{ url: imageUrl, alt: landing.images?.hero?.alt ?? pack.name }] : undefined

  return {
    title: { absolute: `${landing.seo.title} | BeStronger` },
    description: landing.seo.description,
    keywords: landing.seo.keywords,
    alternates: { canonical: `/packs/${pack.slug}` },
    openGraph: {
      type: 'website',
      title: landing.seo.title,
      description: landing.seo.description,
      url: `/packs/${pack.slug}`,
      images,
    },
    twitter: { card: 'summary_large_image', title: landing.seo.title, description: landing.seo.description, images: imageUrl ? [imageUrl] : undefined },
  }
}

const Page = async ({ params }: PackPageProps) => {
  const { slug } = await params
  const pack = await getPackBySlug(slug)
  if (!pack) notFound()

  const landing = getPackLanding(slug) ?? genericLanding(pack)
  const props = { landing, pack }

  return (
    <>
      {landingJsonLd(landing, pack).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <LandingHeader pack={pack} accent={landing.accent} />
      <main>
        <Hero {...props} />
        <FactsBar landing={landing} />
        <Pain landing={landing} />
        <Scene landing={landing} />
        <WhyFailed landing={landing} />
        <Method landing={landing} />
        <Phases landing={landing} />
        <Includes landing={landing} />
        <ForWho landing={landing} />
        <Evidence landing={landing} />
        <Testimonials landing={landing} />
        <Coach landing={landing} />
        <Guarantee landing={landing} />
        <Offer {...props} />
        <Summary {...props} />
        <Faq landing={landing} />
        <FinalCta {...props} />
      </main>
      <LandingFooter />
      <StickyBuyBar priceLabel={formatPrice(pack)} accent={landing.accent} detail={`Pago único · ${formatDuration(pack)}`} />
    </>
  )
}

export default Page
