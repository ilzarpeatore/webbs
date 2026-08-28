import CtaButton from './CtaButton'

type CtaBannerProps = {
  title: string
  description?: string
  href: string
  ctaLabel: string
}

const CtaBanner = ({ title, description, href, ctaLabel }: CtaBannerProps) => (
  <section className="pb-20 lg:pb-40">
    <div className="container">
      <div className="bg-default-900 relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-16 md:py-20">
        <div className="bg-primary/10 absolute top-1/2 left-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mb-3.5 text-2xl font-medium text-white md:text-4xl lg:text-5xl">{title}</h2>
          {description && <p className="text-default-300 mb-7.5 text-base leading-relaxed md:text-lg">{description}</p>}
          <div className="flex justify-center">
            <CtaButton href={href} variant="light">
              {ctaLabel}
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CtaBanner
