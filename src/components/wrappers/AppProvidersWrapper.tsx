'use client'

import { preline } from '@/utils/preline'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import PageTracker from '../shared/PageTracker'
import Navbar from '../navbar/Navbar'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  useEffect(() => {
    preline.init()
  }, [])

  // Las landings de venta de packs (/packs/<slug>) llevan su propia cabecera y
  // pie mínimos: un único objetivo (comprar), sin menú que invite a salir.
  // Ver docs/LANDING_PACKS_ESTUDIO.md.
  if (/^\/packs\/(?!gracias$)[^/]+$/.test(pathname ?? '')) {
    return (
      <>
        <PageTracker />
        {children}
      </>
    )
  }

  return (
    <>
      <PageTracker />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default AppProvidersWrapper
