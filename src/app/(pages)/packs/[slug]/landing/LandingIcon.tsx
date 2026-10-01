import lucide from '@iconify/json/json/lucide.json'

// Iconos Lucide como SVG en línea, resueltos en el servidor a partir del
// paquete local @iconify/json: salen en el HTML desde el primer byte, sin
// pedir nada a la API de Iconify en el navegador (mejor para velocidad y SEO).
// Solo para componentes de servidor: el JSON no llega nunca al cliente.

type IconSet = {
  icons: Record<string, { body: string; width?: number; height?: number }>
  aliases?: Record<string, { parent: string }>
  width?: number
  height?: number
}

const set = lucide as unknown as IconSet

function resolve(name: string) {
  const key = name.replace(/^lucide:/, '')
  const icon = set.icons[key] ?? (set.aliases?.[key] ? set.icons[set.aliases[key].parent] : undefined)
  return icon ?? set.icons['circle']
}

type Props = { icon: string; className?: string; style?: React.CSSProperties }

export default function LandingIcon({ icon, className, style }: Props) {
  const data = resolve(icon)
  const w = data.width ?? set.width ?? 24
  const h = data.height ?? set.height ?? 24
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${w} ${h}`}
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: data.body }}
    />
  )
}
