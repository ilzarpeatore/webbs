'use client'

import appStoreIcon from '@/assets/images/icons/app-store.svg'
import playStoreIcon from '@/assets/images/icons/play-store.svg'
import logoIcon from '@/assets/images/logo-icon.png'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Entrenamiento', href: '/entrenamiento' },
  { label: 'Nutrición', href: '/nutricion' },
  { label: 'Hábitos', href: '/habitos' },
  { label: 'Cómo funciona', href: '/como-funciona' },
]

type NavGroup = {
  heading: string
  items: NavItem[]
}

const dropdownGroups: NavGroup[] = [
  {
    heading: 'General',
    items: [
      { label: 'Inicio', href: '/home' },
      { label: 'Sobre nosotros', href: '/about' },
      { label: 'Progreso', href: '/progreso' },
      { label: 'Para quién es', href: '/para-quien-es' },
      { label: 'Coach real vs. IA', href: '/comparativa' },
    ],
  },
  {
    heading: 'Recursos',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Planes', href: '/pricing' },
      { label: 'La app', href: '/download' },
      { label: 'Preguntas frecuentes', href: '/faqs' },
    ],
  },
  {
    heading: 'Contacto',
    items: [
      { label: 'Contacto', href: '/contact' },
      { label: 'Lista de espera', href: '/waitlist' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Política de privacidad', href: '/privacy-policy' },
      { label: 'Términos y condiciones', href: '/terms-and-conditions' },
      { label: 'Aviso legal', href: '/legal-notice' },
    ],
  },
]

const Navbar = () => {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openGroupIndex, setOpenGroupIndex] = useState<number | null>(null)

  useEffect(() => {
    setCurrentHash(window.location.hash)
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenGroupIndex(null)
  }

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
    setCurrentHash(window.location.hash)
    closeMenu()
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const stickyNav = document.querySelector('.nav-sticky')
      if (stickyNav) {
        const scTop = window.pageYOffset || document.documentElement.scrollTop
        if (scTop >= 100) {
          stickyNav.classList.add('nav-sticky-on')
        } else {
          stickyNav.classList.remove('nav-sticky-on')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const normalizedPathname = pathname === '/' ? '/home' : pathname
    if (normalizedPathname !== '/home') return

    const handleScrollSpy = () => {
      const sections = ['features', 'usecase', 'metrics', 'smart-assist']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setCurrentHash('#smart-assist')
        return
      }

      if (window.scrollY < 100) {
        setCurrentHash('')
        return
      }

      let currentActive = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            currentActive = `#${id}`
          }
        }
      }

      if (currentActive) {
        setCurrentHash(currentActive)
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    handleScrollSpy()
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [pathname])

  const checkActive = (href: string) => {
    const [basePath, hash] = href.split('#')
    const normalizedPathname = pathname === '/' ? '/home' : pathname
    const normalizedBasePath = basePath === '/' ? '/home' : basePath

    if (normalizedPathname !== normalizedBasePath) return false
    if (hash) {
      return currentHash === `#${hash}`
    }
    return !currentHash
  }

  return (
    <header>
      <div className="nav-sticky navbar fixed inset-x-0 top-0 z-120 w-full">
        <div className="container py-3.5 md:py-5 lg:py-7.5">
          <div className="border-default-200/0 in-[.nav-sticky-on]:border-default-200/60 in-[.nav-sticky-on]:bg-white/70 in-[.nav-sticky-on]:backdrop-blur-md flex w-full items-center justify-between rounded-lg border bg-white transition-all duration-500 md:rounded-2xl lg:justify-center lg:border-transparent lg:bg-transparent">
            <div className="border-default-200/0 in-[.nav-sticky-on]:border-white/40 in-[.nav-sticky-on]:bg-white/70 in-[.nav-sticky-on]:backdrop-blur-md flex min-w-[175px] rounded-[20px] border bg-white px-3 py-1.5 transition-all duration-500 md:py-4 lg:p-4 lg:shadow-lg">
              <Link href="/" onClick={() => setCurrentHash('')} className="flex items-center gap-2">
                <Image src={logoIcon} alt="" className="h-7.5 w-7.5 rounded-full md:h-8 md:w-8" />
                <span className="font-heading text-primary-9 text-lg font-bold md:text-xl">BeStronger</span>
              </Link>
            </div>

            <div className="hidden h-2.5 w-full transition-all duration-500 ease-in-out in-[.nav-sticky-on]:w-2.5 lg:flex"></div>

            <div className="flex items-center justify-between">
              <div className="border-default-200/0 in-[.nav-sticky-on]:border-white/40 in-[.nav-sticky-on]:bg-white/70 in-[.nav-sticky-on]:backdrop-blur-md hidden rounded-[20px] border bg-white p-1.5 whitespace-nowrap transition-all duration-500 lg:block lg:shadow-lg">
                <ul id="navbar" className="flex items-center">
                  {navItems.map((item, index) => {
                    const isActive = checkActive(item.href)
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            const hash = item.href.split('#')[1]
                            setCurrentHash(hash ? `#${hash}` : '')
                          }}
                          className={`flex items-center justify-center rounded-2xl px-7 py-4 text-sm font-medium transition-all ${isActive ? 'bg-default-200 text-default-800' : 'text-default-700 hover:bg-default-200 hover:text-default-800'}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}

                  <li className="hs-dropdown relative inline-flex [--trigger:hover]">
                    <button
                      id="hs-dropdown-hover-event"
                      type="button"
                      className="hs-dropdown-toggle hover:bg-default-200 hover:text-default-800 flex items-center justify-center gap-1 rounded-2xl px-7 py-4 text-sm transition-all focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Más páginas
                      <Icon icon="lucide:chevron-down" className="size-4" />
                    </button>

                    <div
                      className="hs-dropdown-menu duration hs-dropdown-open:opacity-100 mt-2 hidden min-w-56 rounded-xl bg-white opacity-0 transition-[opacity,margin] before:absolute before:inset-s-0 before:-top-4 before:h-4 before:w-full after:absolute after:inset-s-0 after:-bottom-4 after:h-4 after:w-full"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-dropdown-hover-event"
                    >
                      <div className="max-h-[70vh] overflow-y-auto p-2.5">
                        {dropdownGroups.map((group, gIdx) => (
                          <div key={gIdx} className={gIdx > 0 ? 'border-default-100 mt-2 border-t pt-2' : ''}>
                            <p className="text-default-400 px-2.5 pt-1 pb-1 text-xs font-semibold tracking-wide uppercase">{group.heading}</p>
                            <div className="space-y-0.5">
                              {group.items.map((item, index) => {
                                const isActive = checkActive(item.href)
                                return (
                                  <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => {
                                      const hash = item.href.split('#')[1]
                                      setCurrentHash(hash ? `#${hash}` : '')
                                    }}
                                    className={`flex items-center gap-x-3.5 rounded-lg px-2.5 py-1.5 text-sm transition-all ${isActive ? 'bg-default-200 text-default-800 font-medium' : 'text-default-600 hover:text-default-800 hover:bg-default-200'}`}
                                  >
                                    {item.label}
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden h-2.5 w-full transition-all duration-500 ease-in-out in-[.nav-sticky-on]:w-2.5 lg:flex"></div>

            <div className="border-default-200/0 in-[.nav-sticky-on]:border-white/40 in-[.nav-sticky-on]:bg-white/70 in-[.nav-sticky-on]:backdrop-blur-md flex items-center gap-1.25 rounded-[20px] border bg-white p-1.5 shadow-lg transition-all duration-500 lg:shadow-lg">
              <a href="#" aria-label="App Store (próximamente)" className="bg-default-200 group relative flex size-8.75 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <Image src={appStoreIcon} alt="Icon" className="size-4.5 transition-transform duration-300 group-hover:-translate-y-6 md:size-6" />
                  <Image src={appStoreIcon} alt="Icon" className="absolute size-4.5 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 md:size-6" />
                </div>
              </a>

              <a href="#" aria-label="Google Play (próximamente)" className="bg-default-200 group relative flex size-8.75 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <Image src={playStoreIcon} alt="Icon" className="size-4.5 transition-transform duration-300 group-hover:-translate-y-6 md:size-6" />
                  <Image src={playStoreIcon} alt="Icon" className="absolute size-4.5 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 md:size-6" />
                </div>
              </a>

              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="bg-default-200 flex size-8.75 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl"
                >
                  <Icon icon="tabler:align-right" className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-100 bg-black/50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-18 z-110 mx-4 max-h-[75vh] transform overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 md:top-24 md:mx-5 lg:hidden ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'}`}
        role="dialog"
        tabIndex={-1}
        aria-modal="true"
        aria-labelledby="mobile-menu-label"
      >
        <div className="border-default-100 flex items-center justify-between border-b p-3.5">
          <span id="mobile-menu-label" className="text-default-900 text-sm font-medium">
            Menú
          </span>
          <button type="button" onClick={closeMenu} aria-label="Cerrar menú" className="bg-default-200 text-default-700 flex size-8 items-center justify-center rounded-lg">
            <Icon icon="tabler:x" className="size-4.5" />
          </button>
        </div>

        <div className="flex max-h-[calc(75vh-56px)] flex-col overflow-y-auto p-3">
          <p className="text-default-400 px-1.5 pt-1 pb-1 text-xs font-semibold tracking-wide uppercase">Servicio</p>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => {
                const hash = item.href.split('#')[1]
                setCurrentHash(hash ? `#${hash}` : '')
                closeMenu()
              }}
              className="group text-default-700 hover:bg-default-200 flex items-center rounded-lg p-1.5 text-base font-medium transition-all"
            >
              {item.label}
            </Link>
          ))}

          <div className="border-default-100 mt-2 border-t pt-2">
            {dropdownGroups.map((group, gIdx) => {
              const isOpen = openGroupIndex === gIdx
              return (
                <div key={gIdx}>
                  <button
                    type="button"
                    onClick={() => setOpenGroupIndex(isOpen ? null : gIdx)}
                    className="text-default-700 hover:bg-default-200 flex w-full items-center justify-between rounded-lg p-1.5 text-base font-medium transition-all"
                    aria-expanded={isOpen}
                  >
                    {group.heading}
                    <Icon icon="tabler:chevron-down" className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="pb-1.5">
                      {group.items.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={() => {
                            const hash = item.href.split('#')[1]
                            setCurrentHash(hash ? `#${hash}` : '')
                            closeMenu()
                          }}
                          className="text-default-600 hover:bg-default-200 hover:text-default-800 flex items-center gap-x-3.5 rounded-lg py-1.5 ps-4 text-base focus:outline-hidden"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
