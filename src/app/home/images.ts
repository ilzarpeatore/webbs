// Imágenes de la home generadas con Higgsfield (proyecto "BeStronger web -
// imágenes home"). Igual que las landings de packs, se sirven desde su CDN
// (permitido en next.config.ts → images.remotePatterns) y Next las optimiza.
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3JH4TAguJBLQPhgV9NBqgsV07mA/'

export const homeImages = {
  hero: `${CDN}hf_20261001_125937_ab1cc046-de49-4855-be40-c1635286f25d.png`,
  aboutBenchPress: `${CDN}hf_20261001_125900_9d5ba2ad-e56a-45e9-b7e7-55b8d17367a2.png`,
  aboutSquat: `${CDN}hf_20261001_125900_1232ae0e-3fcb-453c-9ad8-d90d9223a52c.png`,
  aboutMeal: `${CDN}hf_20261001_125937_acc777c4-5743-4b67-a311-2d9a13c5fb51.png`,
  aboutPhone: `${CDN}hf_20261001_125900_5fa4080a-4aa4-42fc-915e-ff79b81e05d2.png`,
  dailyCheckin: `${CDN}hf_20261001_125900_4d82f5a2-64d0-44b1-97a6-dbe64db390f1.png`,
  featureToday: `${CDN}hf_20261001_125900_20afd7b3-a73f-467d-b1c9-41228860d2a3.png`,
  featureAutoregulation: `${CDN}hf_20261001_125936_442eb476-4374-41ac-8350-f9fd243ec833.png`,
  featureMonthly: `${CDN}hf_20261001_125900_d3f0ef98-2eac-4374-9c37-4d6e3697aedf.png`,
  smartAssistBg: `${CDN}hf_20261001_125900_3db69273-9f22-487b-a849-5a5c8aa01bd3.png`,
  travelWorkout: `${CDN}hf_20261001_125900_45c4dc8f-2c33-45d4-9264-9717ceaef865.png`,
}

// Para fondos CSS (background-image), que no pasan por <Image>: pide la versión
// optimizada (webp/avif redimensionada) al optimizador de Next. `width` debe ser
// uno de los deviceSizes por defecto (640, 750, 828, 1080, 1200, 1920, 2048, 3840).
export const optimizedBg = (src: string, width: number) => `url(/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75)`
