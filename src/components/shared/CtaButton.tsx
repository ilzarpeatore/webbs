import Link from 'next/link'

type CtaButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'dark' | 'light'
  className?: string
}

const CtaButton = ({ href, children, variant = 'dark', className = '' }: CtaButtonProps) => {
  const colors = variant === 'dark' ? 'bg-black text-white' : 'bg-white text-black'

  return (
    <Link href={href} className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full ${colors} px-5 shadow-xl transition-all duration-300 hover:scale-95 md:px-8.5 ${className}`}>
      <span className="relative inline-flex flex-col items-center text-nowrap transition-transform duration-300 group-hover:-translate-y-full">
        <span className="flex h-12 items-center gap-3 md:h-14">
          <span className="text-sm font-medium md:text-base">{children}</span>
        </span>
        <span className="absolute top-full flex h-12 items-center gap-3 md:h-14">
          <span className="text-sm font-medium md:text-base">{children}</span>
        </span>
      </span>
    </Link>
  )
}

export default CtaButton
