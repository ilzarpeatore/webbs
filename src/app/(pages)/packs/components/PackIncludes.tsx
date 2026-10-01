import { Icon } from '@iconify/react'
import { INCLUDE_LABEL, type Pack } from '@/utils/packsApi'

const PackIncludes = ({ pack, light }: { pack: Pack; light?: boolean }) => {
  if (pack.includes.length === 0) return null

  return (
    <ul className="flex flex-col gap-2.5">
      {pack.includes.map((item) => (
        <li key={item} className={`flex items-center gap-2.5 text-base ${light ? 'text-white' : 'text-default-700'}`}>
          <Icon icon="lucide:check-circle-2" className="text-primary-8 size-5 shrink-0" />
          {INCLUDE_LABEL[item]}
        </li>
      ))}
      <li className={`flex items-center gap-2.5 text-base ${light ? 'text-white' : 'text-default-700'}`}>
        <Icon icon="lucide:check-circle-2" className="text-primary-8 size-5 shrink-0" />
        Seguimiento en la app de BeStronger
      </li>
    </ul>
  )
}

export default PackIncludes
