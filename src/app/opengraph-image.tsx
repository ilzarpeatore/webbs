import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import { ImageResponse } from 'next/og'

export const alt = DEFAULT_PAGE_TITLE
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#f7f7f7',
          backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f7f7f7 60%, #eef8f7 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              width: 64,
              height: 64,
              borderRadius: '50%',
              backgroundColor: '#18181b',
            }}
          />
          <span style={{ fontSize: 40, fontWeight: 700, color: '#18181b' }}>BeStronger</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', width: 88, height: 6, backgroundColor: '#49c5b6' }} />
          <span
            style={{
              display: 'flex',
              fontSize: 60,
              fontWeight: 600,
              color: '#18181b',
              lineHeight: 1.15,
              maxWidth: 920,
            }}
          >
            Entrenamiento y nutrición online con un coach real
          </span>
          <span style={{ display: 'flex', fontSize: 30, color: '#52525b', maxWidth: 820 }}>Cada serie, cada comida y cada hábito registrados con datos objetivos, no con una tabla genérica.</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
