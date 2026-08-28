import { Icon } from '@iconify/react'

type GlassStatCardProps = {
  icon: string
  iconBgClass: string
  label: string
  className?: string
}

const GlassStatCard = ({ icon, iconBgClass, label, className = 'absolute right-3 bottom-3 md:right-5 md:bottom-5' }: GlassStatCardProps) => (
  <div className={`bg-default-900/70 flex items-center gap-3 rounded-2xl border border-white/10 p-3.5 backdrop-blur-md md:p-5 ${className}`}>
    <div className={`${iconBgClass} flex size-9 shrink-0 items-center justify-center rounded-full md:size-11`}>
      <Icon icon={icon} className="text-lg text-white" />
    </div>
    <p className="text-sm font-medium text-white md:text-base">{label}</p>
  </div>
)

export default GlassStatCard
