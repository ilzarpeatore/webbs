import Icon from './LandingIcon'
import Image from 'next/image'
import Link from 'next/link'
import logoIcon from '@/assets/images/logo-icon.png'
import { COACH_NAME } from '@/config/constants'
import type { PackLanding } from '@/content/packs'
import { formatDuration, formatPrice, INCLUDE_LABEL, type Pack } from '@/utils/packsApi'
import BuyPackForm from '../../components/BuyPackForm'
import { pricePerDay, summaryWithPrice } from './landing-data'

// Secciones de la landing de un pack. El orden y el porqué de cada una están
// en docs/LANDING_PACKS_ESTUDIO.md. Todo se renderiza en servidor (bueno para
// buscadores e IAs); la única parte de cliente es el formulario de compra y la
// barra fija de móvil.

type Props = { landing: PackLanding; pack: Pack }

const Eyebrow = ({ children, accent }: { children: React.ReactNode; accent: string }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide uppercase md:text-sm"
    style={{ backgroundColor: `${accent}14`, color: accent }}
  >
    {children}
  </span>
)

const SectionTitle = ({ eyebrow, title, intro, accent, center = true }: { eyebrow?: string; title: string; intro?: string; accent: string; center?: boolean }) => (
  <div className={center ? 'mx-auto mb-10 max-w-3xl text-center md:mb-14' : 'mb-8'}>
    {eyebrow ? <Eyebrow accent={accent}>{eyebrow}</Eyebrow> : null}
    <h2 className="font-heading text-default-950 mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">{title}</h2>
    {intro ? <p className="text-default-600 mt-4 text-lg text-pretty md:text-xl">{intro}</p> : null}
  </div>
)

function highlightTitle(title: string, highlight: string | undefined, accent: string) {
  if (!highlight || !title.includes(highlight)) return title
  const [before, after] = title.split(highlight)
  return (
    <>
      {before}
      <span style={{ color: accent }}>{highlight}</span>
      {after}
    </>
  )
}

// ─── Cabecera y pie mínimos ─────────────────────────────────────────

export const LandingHeader = ({ pack, accent }: { pack: Pack; accent: string }) => (
  <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
    <div className="container flex h-16 items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-2" aria-label="BeStronger, inicio">
        <Image src={logoIcon} alt="" className="size-8 rounded-full" />
        <span className="font-heading text-primary-9 text-lg font-bold">BeStronger</span>
      </Link>
      <a
        href="#comprar"
        style={{ backgroundColor: accent }}
        className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[0.98]"
      >
        Empezar · {formatPrice(pack)}
      </a>
    </div>
  </header>
)

export const LandingFooter = () => (
  <footer className="border-t border-black/5 bg-white pt-8 pb-28 md:pb-10">
    <div className="text-default-500 container flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
      <p>© {new Date().getFullYear()} BeStronger · Entrenamiento y nutrición online con coach real</p>
      <nav className="flex flex-wrap gap-4" aria-label="Legal">
        <Link href="/legal-notice" className="hover:text-default-900">Aviso legal</Link>
        <Link href="/privacy-policy" className="hover:text-default-900">Privacidad</Link>
        <Link href="/terms-and-conditions" className="hover:text-default-900">Condiciones</Link>
        <Link href="/contacto" className="hover:text-default-900">Contacto</Link>
      </nav>
    </div>
  </footer>
)

// ─── Hero ───────────────────────────────────────────────────────────

const SampleDayCard = ({ landing }: { landing: PackLanding }) => {
  const { sampleDay } = landing.hero
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-black/5">
      <div className="flex items-center justify-between">
        <p className="text-default-500 text-xs font-semibold tracking-wide uppercase">Hoy en tu app</p>
        <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white" style={{ backgroundColor: landing.accent }}>
          En curso
        </span>
      </div>
      <p className="font-heading text-default-950 mt-2 text-lg font-semibold">{sampleDay.label}</p>
      <ul className="mt-4 divide-y divide-black/5">
        {sampleDay.exercises.map((e, i) => (
          <li key={e.name} className="flex items-center gap-3 py-2.5">
            <span
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
              style={i < 2 ? { backgroundColor: landing.accent, color: '#fff' } : { backgroundColor: `${landing.accent}14`, color: landing.accent }}
            >
              {i < 2 ? <Icon icon="lucide:check" className="size-3.5" /> : i + 1}
            </span>
            <span className="text-default-800 flex-1 text-sm font-medium">{e.name}</span>
            <span className="text-default-500 text-xs tabular-nums">{e.dose}</span>
          </li>
        ))}
      </ul>
      <p className="text-default-500 mt-3 rounded-xl bg-zinc-50 px-3 py-2 text-xs">{sampleDay.footnote}</p>
    </div>
  )
}

export const Hero = ({ landing, pack }: Props) => {
  const perDay = pricePerDay(pack)
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -top-40 right-0 size-[640px] rounded-full opacity-25 blur-3xl"
        style={{ background: `radial-gradient(circle, ${landing.accent} 0%, transparent 70%)` }}
        aria-hidden
      />
      <div className="relative container grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.15fr_1fr] lg:py-20">
        <div>
          <Eyebrow accent={landing.accent}>{landing.hero.eyebrow}</Eyebrow>
          <h1 className="font-heading text-default-950 mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
            {highlightTitle(landing.hero.title, landing.hero.highlight, landing.accent)}
          </h1>
          <p className="text-default-600 mt-5 text-lg text-pretty md:text-xl">{landing.hero.subtitle}</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {landing.hero.bullets.map((b) => (
              <li key={b} className="text-default-800 flex items-start gap-2 text-base">
                <Icon icon="lucide:circle-check" className="mt-0.5 size-5 shrink-0" style={{ color: landing.accent }} />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl bg-zinc-50 p-5 ring-1 ring-black/5 md:p-6">
            <div className="mb-4 flex flex-wrap items-end gap-x-3 gap-y-1">
              <p className="font-heading text-default-950 text-4xl font-semibold">{formatPrice(pack)}</p>
              <p className="text-default-500 pb-1 text-sm">
                pago único · {formatDuration(pack)}
                {perDay ? ` · ${perDay}/día` : ''}
              </p>
            </div>
            <BuyPackForm slug={pack.slug} priceLabel={formatPrice(pack)} idPrefix="hero" accent={landing.accent} ctaLabel="Empezar mi programa" />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {pack.image_url ? (
            <div className="relative w-full max-w-lg">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image src={pack.image_url} alt={`${pack.name}: ${landing.audience}`} fill unoptimized priority className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-4 hidden w-72 sm:block md:-left-10">
                <SampleDayCard landing={landing} />
              </div>
            </div>
          ) : (
            <div
              className="flex w-full max-w-lg items-center justify-center rounded-[2rem] p-8 md:p-12"
              style={{ background: `linear-gradient(145deg, ${landing.accent} 0%, ${landing.accent}cc 45%, #0b0b12 100%)` }}
            >
              <SampleDayCard landing={landing} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Barra de datos clave ───────────────────────────────────────────

export const FactsBar = ({ landing }: { landing: PackLanding }) => (
  <section aria-label="Datos clave del programa" className="bg-default-950 text-white">
    <div className="container grid grid-cols-2 gap-px py-2 md:grid-cols-4">
      {landing.facts.slice(0, 4).map((f) => (
        <div key={f.label} className="px-3 py-4 text-center">
          <p className="text-xs tracking-wide text-white/50 uppercase">{f.label}</p>
          <p className="mt-1 text-sm font-semibold md:text-base">{f.value}</p>
        </div>
      ))}
    </div>
  </section>
)

// ─── Resumen (pensado para buscadores e IAs) ────────────────────────

export const Summary = ({ landing, pack }: Props) => (
  <section id="resumen" className="bg-body-bg py-16 md:py-24">
    <div className="container grid gap-10 lg:grid-cols-[1.3fr_1fr]">
      <div>
        <Eyebrow accent={landing.accent}>En resumen</Eyebrow>
        <h2 className="font-heading text-default-950 mt-3 text-3xl font-semibold tracking-tight md:text-4xl">¿Qué es {pack.name}?</h2>
        <div className="text-default-700 mt-6 space-y-3 text-lg leading-relaxed">
          {summaryWithPrice(landing, pack).map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
        <p className="text-default-500 mt-6 text-sm">
          Diseñado por el equipo de coaches de BeStronger · Revisado por {COACH_NAME} ·{' '}
          <time dateTime={landing.updatedAt}>
            Actualizado el {new Date(landing.updatedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
        </p>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
        <h3 className="font-heading text-default-950 text-lg font-semibold">Ficha del programa</h3>
        <dl className="mt-4 divide-y divide-black/5">
          {landing.facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-4 py-3 text-sm md:text-base">
              <dt className="text-default-500">{f.label}</dt>
              <dd className="text-default-900 text-right font-medium">{f.value}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-4 py-3 text-sm md:text-base">
            <dt className="text-default-500">Precio</dt>
            <dd className="text-default-900 text-right font-medium">{formatPrice(pack)} · pago único</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
)

// ─── Dolor ─────────────────────────────────────────────────────────

export const Pain = ({ landing }: { landing: PackLanding }) => {
  if (!landing.pain.points.length) return null
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionTitle title={landing.pain.title} intro={landing.pain.intro} accent={landing.accent} />
        <div className="grid gap-4 md:grid-cols-2">
          {landing.pain.points.map((p) => (
            <div key={p.title} className="rounded-3xl bg-zinc-50 p-6 ring-1 ring-black/5">
              <div className="flex items-start gap-3">
                <Icon icon="lucide:circle-x" className="mt-0.5 size-6 shrink-0 text-zinc-400" />
                <div>
                  <h3 className="font-heading text-default-950 text-xl font-semibold">{p.title}</h3>
                  <p className="text-default-600 mt-1.5">{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p
          className="font-heading mx-auto mt-12 max-w-3xl text-center text-2xl leading-snug font-semibold text-balance md:text-3xl"
          style={{ color: landing.accent }}
        >
          {landing.pain.turn}
        </p>
      </div>
    </section>
  )
}

// ─── Mitos vs. realidad ─────────────────────────────────────────────

export const WhyFailed = ({ landing }: { landing: PackLanding }) => {
  if (!landing.whyFailed.items.length) return null
  return (
    <section className="bg-body-bg py-16 md:py-24">
      <div className="container">
        <SectionTitle title={landing.whyFailed.title} accent={landing.accent} />
        <div className="mx-auto grid max-w-5xl gap-4">
          {landing.whyFailed.items.map((it) => (
            <div key={it.myth} className="grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 md:grid-cols-2">
              <div className="flex items-start gap-3 border-b border-black/5 p-5 md:border-r md:border-b-0 md:p-6">
                <Icon icon="lucide:x" className="mt-0.5 size-5 shrink-0 text-red-500" />
                <p className="text-default-500 line-through decoration-red-300">{it.myth}</p>
              </div>
              <div className="flex items-start gap-3 p-5 md:p-6">
                <Icon icon="lucide:check" className="mt-0.5 size-5 shrink-0" style={{ color: landing.accent }} />
                <p className="text-default-800">{it.truth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Método ─────────────────────────────────────────────────────────

export const Method = ({ landing }: { landing: PackLanding }) => {
  if (!landing.method.pillars.length) return null
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionTitle eyebrow="El método" title={landing.method.title} intro={landing.method.intro} accent={landing.accent} />
        <div className="grid gap-5 md:grid-cols-3">
          {landing.method.pillars.map((p, i) => (
            <div key={p.title} className="relative rounded-3xl bg-zinc-50 p-7 ring-1 ring-black/5">
              <span className="font-heading absolute top-6 right-7 text-5xl font-bold text-black/5">{i + 1}</span>
              <span className="flex size-12 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: landing.accent }}>
                <Icon icon={p.icon} className="size-6" />
              </span>
              <h3 className="font-heading text-default-950 mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="text-default-600 mt-2">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Fases ─────────────────────────────────────────────────────────

export const Phases = ({ landing }: { landing: PackLanding }) => {
  if (!landing.phases.items.length) return null
  return (
    <section className="bg-default-950 py-16 text-white md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white! md:text-5xl">{landing.phases.title}</h2>
          <p className="mt-4 text-lg text-white/60">{landing.phases.intro}</p>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {landing.phases.items.map((ph, i) => (
            <li key={ph.weeks} className="relative rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
              <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full" style={{ width: `${((i + 1) / landing.phases.items.length) * 100}%`, backgroundColor: landing.accent }} />
              </div>
              <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: landing.accent }}>
                {ph.weeks}
              </p>
              <h3 className="font-heading mt-1 text-2xl font-semibold text-white!">{ph.title}</h3>
              <p className="mt-2 text-white/70">{ph.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

// ─── Qué incluye ───────────────────────────────────────────────────

export const Includes = ({ landing }: { landing: PackLanding }) => {
  if (!landing.includes.items.length) return null
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionTitle eyebrow="Qué recibes" title={landing.includes.title} accent={landing.accent} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {landing.includes.items.map((it) => (
            <div key={it.title} className="flex gap-4 rounded-3xl bg-zinc-50 p-6 ring-1 ring-black/5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: `${landing.accent}14`, color: landing.accent }}>
                <Icon icon={it.icon} className="size-5" />
              </span>
              <div>
                <h3 className="text-default-950 font-semibold">{it.title}</h3>
                {it.text ? <p className="text-default-600 mt-1 text-sm">{it.text}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Para quién ────────────────────────────────────────────────────

export const ForWho = ({ landing }: { landing: PackLanding }) => {
  if (!landing.forWho.yes.length) return null
  return (
    <section className="bg-body-bg py-16 md:py-24">
      <div className="container">
        <SectionTitle title="¿Es para ti?" intro="Preferimos que lo compres solo si te va a funcionar." accent={landing.accent} />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
            <h3 className="font-heading text-default-950 text-xl font-semibold">Es para ti si…</h3>
            <ul className="mt-4 space-y-3">
              {landing.forWho.yes.map((y) => (
                <li key={y} className="text-default-700 flex items-start gap-3">
                  <Icon icon="lucide:circle-check" className="mt-0.5 size-5 shrink-0" style={{ color: landing.accent }} />
                  {y}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5">
            <h3 className="font-heading text-default-950 text-xl font-semibold">No es para ti si…</h3>
            <ul className="mt-4 space-y-3">
              {landing.forWho.no.map((n) => (
                <li key={n} className="text-default-700 flex items-start gap-3">
                  <Icon icon="lucide:circle-minus" className="mt-0.5 size-5 shrink-0 text-zinc-400" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Evidencia ─────────────────────────────────────────────────────

export const Evidence = ({ landing }: { landing: PackLanding }) => {
  if (!landing.evidence.items.length) return null
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionTitle eyebrow="Basado en ciencia" title={landing.evidence.title} accent={landing.accent} />
        <div className="grid gap-5 md:grid-cols-3">
          {landing.evidence.items.map((e) => (
            <figure key={e.stat} className="flex flex-col rounded-3xl bg-zinc-50 p-7 ring-1 ring-black/5">
              <p className="font-heading text-4xl font-semibold" style={{ color: landing.accent }}>
                {e.stat}
              </p>
              <blockquote className="text-default-700 mt-3 flex-1">{e.text}</blockquote>
              <figcaption className="text-default-500 mt-4 text-sm">
                Fuente:{' '}
                <a href={e.source.url} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-default-900">
                  {e.source.label}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Autoría ───────────────────────────────────────────────────────

export const Coach = ({ landing }: { landing: PackLanding }) => (
  <section className="bg-body-bg py-16 md:py-20">
    <div className="container">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 md:flex-row md:p-10 md:text-left">
        <Image src={logoIcon} alt="" className="size-20 shrink-0 rounded-full" />
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: landing.accent }}>
            Quién está detrás
          </p>
          <h2 className="font-heading text-default-950 mt-1 text-2xl font-semibold">Un coach real, no una rutina genérica</h2>
          <p className="text-default-600 mt-2">
            El programa lo ha diseñado el equipo de coaches de BeStronger, dirigido por {COACH_NAME}. Es el mismo método que usamos con nuestros
            clientes de seguimiento personal, adaptado para que puedas seguirlo por tu cuenta desde la app.
          </p>
          <Link href="/about" className="text-default-900 mt-3 inline-block text-sm font-medium underline underline-offset-4">
            Conoce BeStronger
          </Link>
        </div>
      </div>
    </div>
  </section>
)

// ─── Testimonios (solo reales) y garantía (opcional) ────────────────

export const Testimonials = ({ landing }: { landing: PackLanding }) => {
  if (!landing.testimonials.length) return null
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionTitle eyebrow="Resultados" title="Lo que dicen quienes ya lo han hecho" accent={landing.accent} />
        <div className="grid gap-5 md:grid-cols-3">
          {landing.testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-zinc-50 p-7 ring-1 ring-black/5">
              <blockquote className="text-default-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="text-default-950 font-semibold">{t.name}</span>
                <span className="text-default-500"> · {t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Guarantee = ({ landing }: { landing: PackLanding }) => {
  if (!landing.guarantee) return null
  return (
    <section className="bg-white py-12">
      <div className="container">
        <div className="mx-auto flex max-w-3xl items-start gap-5 rounded-3xl p-7 ring-2" style={{ boxShadow: `inset 0 0 0 2px ${landing.accent}33` }}>
          <Icon icon="lucide:shield-check" className="size-10 shrink-0" style={{ color: landing.accent }} />
          <div>
            <h2 className="font-heading text-default-950 text-2xl font-semibold">{landing.guarantee.title}</h2>
            <p className="text-default-600 mt-2">{landing.guarantee.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Oferta ────────────────────────────────────────────────────────

export const Offer = ({ landing, pack }: Props) => {
  const perDay = pricePerDay(pack)
  const steps = [
    { icon: 'lucide:credit-card', text: 'Pagas aquí de forma segura con Stripe.' },
    { icon: 'lucide:smartphone', text: 'Descargas la app de BeStronger y te registras con el mismo email.' },
    { icon: 'lucide:calendar-check', text: 'Al terminar el cuestionario inicial, el programa aparece en tu calendario.' },
  ]
  return (
    <section id="comprar" className="bg-body-bg scroll-mt-20 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5 lg:grid-cols-[1fr_1.05fr]">
          <div className="p-7 md:p-10" style={{ background: `linear-gradient(160deg, ${landing.accent}12, transparent 60%)` }}>
            <Eyebrow accent={landing.accent}>{formatDuration(pack)} · pago único</Eyebrow>
            <h2 className="font-heading text-default-950 mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{landing.offer.title}</h2>
            <ul className="mt-6 space-y-3">
              {[...landing.offer.bullets, ...pack.includes.map((i) => `${INCLUDE_LABEL[i]} incluido`)].map((b) => (
                <li key={b} className="text-default-700 flex items-start gap-3">
                  <Icon icon="lucide:check" className="mt-0.5 size-5 shrink-0" style={{ color: landing.accent }} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-default-950 text-sm font-semibold">Cómo lo recibes</p>
              <ol className="mt-3 space-y-3">
                {steps.map((s, i) => (
                  <li key={s.text} className="text-default-600 flex items-start gap-3 text-sm">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700">{i + 1}</span>
                    {s.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="border-t border-black/5 p-7 md:p-10 lg:border-t-0 lg:border-l">
            <p className="text-default-500 text-sm font-medium">{pack.name}</p>
            <div className="mt-1 flex flex-wrap items-end gap-x-3">
              <p className="font-heading text-default-950 text-5xl font-semibold">{formatPrice(pack)}</p>
              <p className="text-default-500 pb-1.5 text-sm">pago único{perDay ? ` · ${perDay} al día` : ''}</p>
            </div>
            {landing.offer.anchor ? <p className="text-default-600 mt-3 rounded-2xl bg-zinc-50 px-4 py-3 text-sm">{landing.offer.anchor}</p> : null}
            <div className="mt-6">
              <BuyPackForm slug={pack.slug} priceLabel={formatPrice(pack)} idPrefix="offer" accent={landing.accent} ctaLabel="Empezar mi programa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ (con <details>: el texto está en el HTML, visible para buscadores) ─

export const Faq = ({ landing }: { landing: PackLanding }) => {
  if (!landing.faq.length) return null
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionTitle eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos" accent={landing.accent} />
        <div className="mx-auto max-w-3xl space-y-3">
          {landing.faq.map((f, i) => (
            <details key={f.question} open={i === 0} className="group rounded-2xl bg-zinc-50 ring-1 ring-black/5 open:bg-white open:shadow-md">
              <summary className="text-default-950 flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold md:text-lg [&::-webkit-details-marker]:hidden">
                <h3>{f.question}</h3>
                <Icon icon="lucide:plus" className="size-5 shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="text-default-600 px-5 pb-5 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Cierre ────────────────────────────────────────────────────────

export const FinalCta = ({ landing, pack }: Props) => (
  <section className="relative overflow-hidden py-16 text-white md:py-24" style={{ background: `linear-gradient(135deg, #0b0b12 0%, #0b0b12 40%, ${landing.accent} 140%)` }}>
    <div className="container text-center">
      <h2 className="font-heading mx-auto max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-balance text-white! md:text-5xl">{landing.finalCta.title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{landing.finalCta.text}</p>
      <a
        href="#comprar"
        style={{ backgroundColor: landing.accent }}
        className="mt-8 inline-flex rounded-full px-8 py-4 text-base font-semibold text-white shadow-xl transition-transform hover:scale-[0.98]"
      >
        Empezar mi programa · {formatPrice(pack)}
      </a>
      <p className="mt-4 text-sm text-white/50">Pago único · Sin suscripción · Empiezas hoy</p>
    </div>
  </section>
)
