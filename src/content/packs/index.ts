import ganarMusculoPocoTiempo from './programa-ganar-musculo-poco-tiempo'
import gluteosMujer from './programa-gluteos-mujer-12-semanas'
import perderGrasaHombres from './programa-perder-grasa-hombres-30-45'
import type { PackLanding } from './types'

export type { PackLanding } from './types'

// Contenido de venta por pack, por slug. Para una landing nueva: copia uno de
// estos archivos, cambia el slug (el mismo que el pack en el panel) y el texto,
// y añádelo aquí. Ver docs/LANDING_PACKS_ESTUDIO.md.
const LANDINGS: PackLanding[] = [gluteosMujer, perderGrasaHombres, ganarMusculoPocoTiempo]

export function getPackLanding(slug: string): PackLanding | null {
  return LANDINGS.find((l) => l.slug === slug) ?? null
}
