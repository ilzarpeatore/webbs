import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'

export type FeatureCardProps = {
  title: string
  description: string
  bgClass: string
  icon?: string
  image?: StaticImageData
}

const FeatureCard = ({ title, description, bgClass, icon, image }: FeatureCardProps) => (
  <div className="group flex h-full flex-col justify-between gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
    <div className={`flex size-10 items-center justify-center rounded-full md:size-12.5 ${bgClass}`}>{image ? <Image src={image} alt="" className="size-5 md:size-5.5" /> : icon && <Icon icon={icon} className="text-md text-white md:text-xl" />}</div>
    <div>
      <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">{title}</h4>
      <p className="text-default-700 text-sm leading-normal md:text-lg">{description}</p>
    </div>
  </div>
)

export default FeatureCard
