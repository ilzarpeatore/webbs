'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState } from 'react'

export type FaqItemType = {
  question: string
  answer: string
}

type FaqAccordionProps = {
  items: FaqItemType[]
  title: string
  eyebrow?: string
  variant?: 'split' | 'centered'
  titleSize?: 'md' | 'lg'
  sectionClassName?: string
  defaultOpenIndex?: number | null
}

const AccordionItem = ({ item, isOpen, onToggle }: { item: FaqItemType; isOpen: boolean; onToggle: () => void }) => (
  <div className={`rounded-2xl border border-zinc-100 bg-white shadow-sm ${isOpen ? 'shadow-md' : ''} transition-all duration-300`}>
    <button type="button" onClick={onToggle} className="text-default-900 inline-flex w-full items-center justify-between p-3.5 text-start font-bold transition hover:text-zinc-500 lg:p-5">
      <h3 className="text-base font-medium md:text-xl">{item.question}</h3>
      <div className={`bg-default-200 relative flex size-6.5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 md:size-8.5 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <Icon icon="lucide:plus" className="text-default-800 size-3 md:size-5" />
      </div>
    </button>
    <div className={`w-full overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="px-3.5 pb-3.5 text-base leading-normal text-zinc-500 md:text-lg md:leading-relaxed lg:px-5 lg:pb-5">{item.answer}</div>
    </div>
  </div>
)

const FaqAccordion = ({ items, title, eyebrow = 'Preguntas frecuentes', variant = 'centered', titleSize = 'md', sectionClassName = '', defaultOpenIndex = 0 }: FaqAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultOpenIndex)
  const toggle = (idx: number) => setActiveIndex(activeIndex === idx ? null : idx)

  const list = (
    <div className="space-y-2.5">
      {items.map((item, idx) => (
        <AccordionItem key={idx} item={item} isOpen={activeIndex === idx} onToggle={() => toggle(idx)} />
      ))}
    </div>
  )

  if (variant === 'split') {
    return (
      <section className={`py-6 md:pb-10 lg:py-25 ${sectionClassName}`}>
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-7.5 md:grid-cols-3 lg:grid-cols-12 lg:gap-25">
            <div className="col-span-1 space-y-10 lg:col-span-5 lg:space-y-20">
              <div className="space-y-4">
                <span className="border-default-200 text-default-800 mb-2.5 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">{eyebrow}</span>
                <h2 className="text-default-950 text-2xl leading-normal font-medium tracking-normal md:text-4xl lg:text-5xl">{title}</h2>
              </div>

              <div className="flex flex-col items-center space-y-6 rounded-2xl bg-white p-5 text-center shadow-xl shadow-zinc-200/50 md:p-7.5">
                <div className="bg-primary-8 flex size-12.5 items-center justify-center rounded-full shadow-lg">
                  <Icon icon="lucide:headset" className="size-6 text-white" />
                </div>
                <div className="flex flex-col items-center space-y-6">
                  <h3 className="text-default-950 mb-3.5 text-xl font-medium md:text-2xl">¿No encuentras tu respuesta?</h3>
                  <Link href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8.5 text-nowrap text-white shadow-xl transition-all duration-300 hover:scale-95">
                    <span className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                      <span className="flex h-14 items-center gap-3">
                        <span className="font-medium">Contáctanos</span>
                      </span>
                      <span className="absolute top-full flex h-14 items-center gap-3">
                        <span className="font-medium">Contáctanos</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-2 space-y-4 lg:col-span-7">
              <div className="space-y-2.5 lg:col-span-7 lg:space-y-4">{list}</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const titleClass = titleSize === 'lg' ? 'text-3xl font-medium md:text-5xl lg:text-[68px]' : 'text-2xl font-medium md:text-4xl lg:text-5xl'

  return (
    <section className={`md:pb-25 lg:pb-50 ${sectionClassName}`}>
      <div className="container">
        <div className="mb-8 space-y-3.5 text-center md:mb-12.5">
          {eyebrow && <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">{eyebrow}</span>}
          <h3 className={titleClass}>{title}</h3>
        </div>
        <div className="mx-auto space-y-2.5 lg:w-3xl">{list}</div>
      </div>
    </section>
  )
}

export default FaqAccordion
