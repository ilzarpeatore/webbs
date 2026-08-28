type SectionBadgeProps = {
  children: React.ReactNode
  className?: string
}

const SectionBadge = ({ children, className = '' }: SectionBadgeProps) => (
  <span className={`border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium ${className}`}>{children}</span>
)

export default SectionBadge
