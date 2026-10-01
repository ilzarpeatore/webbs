# Landings de venta de packs — estudio de mercado y decisiones (2026-10-01)

Base de la plantilla de `/packs/[slug]` (ver `src/app/(pages)/packs/[slug]` y
`src/content/packs/`). Resume qué hacen las páginas de venta de programas de
entrenamiento de bajo precio, cómo se escribe el copy, y cómo optimizar para
Google y para asistentes de IA (ChatGPT, Claude, Perplexity, Gemini).

## 1. Mercado: programas de entrenamiento low cost en español

Programas de glúteo de 12 semanas que se venden hoy en España:

| Programa | Precio | Qué destaca |
|---|---|---|
| Strong Girls Academy — Glúteos UP | 97 € tachado → 59,90 € (o 2 × 35 €) | 12 semanas, 3 días/semana, casa o gym, acceso de por vida, WhatsApp, 7 días de prueba sin riesgo |
| Transforma tus glúteos (Road to Basics) | 39,90 € → 19,95 € | 12 semanas en casa |
| MegaGlúteos | 119 €/año | casa o gym, "resultados visibles en 12 semanas" |
| Glúteo en Forma | 200 €/trimestre | entreno + alimentación + soporte |

Patrón común: **12 semanas**, **casa o gimnasio**, **pocos días por semana**,
**acceso de por vida** y precio de impulso (**20–60 €**). En el mercado
anglosajón el low ticket ("tripwire") se concentra en 7–47 $; su función no es
el margen sino convertir a alguien en cliente (quien ya compró una vez compra
más).

Hombres 35–45 (referentes: Fit Father Project y programas "dads 35+"): el
mensaje es **"quitar la barriga y recuperar la energía sin dietas extremas ni
horas de gimnasio"**, entrenos de **15–30 minutos**, y **adaptado a lesiones y
articulaciones**. Dolores repetidos: falta de tiempo, cansancio, sentirse
"invisible", haber probado de todo sin estructura.

Ganar músculo con poco tiempo — la evidencia respalda el mensaje:
- Entrenar cada músculo **2 veces por semana** supera a 1 vez con el mismo volumen.
- Con **2 días por semana** de cuerpo completo se consiguen adaptaciones
  similares a 3 días en personas con experiencia (revisión *No Time to Lift?*,
  Iversen et al., Sports Med 2021).
- **< 5, 5–9 y 10+ series semanales** por músculo dieron ~5 %, 7 % y 10 % de
  hipertrofia: el grueso del resultado llega con poco volumen bien hecho.

## 2. Estructura que convierte (orden de secciones)

Lo que comparten las páginas de venta de programas que funcionan, y los datos
que lo apoyan:

1. **Hero**: titular con **resultado + plazo + para quién** ("…en 12 semanas…"),
   no "transforma tu vida". Subtítulo con el mecanismo y la objeción principal
   resuelta ("sin dietas extremas", "3 días por semana"). **CTA visible sin
   hacer scroll** (+20 % de conversión). Precio a la vista.
2. **Barra de confianza** con datos concretos (semanas, días, minutos, pago único).
3. **Dolor (PAS: Problema → Agitación → Solución)**: nombrar lo que la persona
   ya ha vivido ("haces sentadillas y lo notas en las piernas, no en el glúteo").
4. **Por qué no ha funcionado antes** (el "villano": rutinas genéricas, sin
   progresión, dietas imposibles) → **mecanismo** del programa.
5. **Transformación por fases** (semanas 1–4, 5–8, 9–12): hace tangible el plazo.
6. **Qué incluye** con valor apilado (cada pieza con su beneficio).
7. **Para quién es / para quién no** — filtra y aumenta la confianza.
8. **Autoridad**: quién lo diseña y con qué método.
9. **Testimonios reales** (3–7 con nombre y contexto). *Solo reales.*
10. **Garantía / reversión de riesgo** (si se ofrece).
11. **Oferta y precio** con anclaje honesto y **CTA**.
12. **FAQ** = objeciones ("¿y si soy principiante?", "¿casa o gym?",
    "¿me pondré voluminosa?", "¿cuánto tiempo al día?").
13. **CTA final**.

Datos de conversión (estudios 2025–2026 citados en las fuentes):
- **Un solo CTA** convierte hasta un 266 % mejor que varios en competencia → la
  landing no lleva menú de navegación ni enlaces de salida (solo legales).
- **CTA fijo abajo en móvil**: +11 % (casi todo el beneficio; móvil es ~80 % del
  tráfico y convierte la mitad que escritorio).
- Páginas con garantía + testimonios + titular de resultado convierten **2–4×**
  más que las que carecen de dos o más de esos elementos.

## 3. Copywriting

- Fórmulas: **PAS** para la sección de dolor, **4P** (Promesa, Imagen, Prueba,
  Empuje) para el conjunto.
- Hablar **en segunda persona** y con **el lenguaje del cliente** (no "hipertrofia
  del glúteo mayor" sino "que se note el glúteo con unos vaqueros").
- **Concreto > genérico**: números (días, minutos, semanas, series).
- Cada beneficio, con su "lo que significa para ti".
- Promesas **realistas y verificables**. Nada de "pierde 10 kg garantizado":
  además de poco creíble, es publicidad engañosa en salud.
- Objeciones contestadas en la FAQ con respuestas cortas y directas.

## 4. Precio y anclaje (legal en la UE)

- **No** inventar un "precio anterior" tachado: la Directiva Ómnibus obliga a que
  el precio tachado sea el más bajo de los 30 días previos. Solo si de verdad
  hubo ese precio.
- Anclajes honestos: **precio por día** ("menos de 0,60 € al día") y comparación
  con **una sesión de entrenador personal** (en España, 30–60 €).
- **Pago único**, sin suscripción: decirlo varias veces (objeción "¿me van a
  cobrar cada mes?").

## 5. Garantía y derecho de desistimiento

- Las garantías de 14–30 días son habituales en programas digitales y suben la
  conversión. La plantilla tiene una sección de garantía **opcional**: solo se
  muestra si el pack la define (decisión del negocio, no se activa por defecto).
- En la UE, el contenido digital tiene 14 días de desistimiento salvo que el
  comprador acepte expresamente empezar ya y pierda ese derecho. Revisar los
  términos de Stripe Checkout / condiciones de venta antes de prometer nada.

## 6. Prueba social

- Los testimonios son la palanca más fuerte… y la más delicada: **solo
  testimonios reales con consentimiento**. La sección no se muestra si el pack
  no tiene testimonios.
- **No** marcar valoraciones (`AggregateRating`) en los datos estructurados
  hasta tener reseñas reales visibles en la página: Google penaliza con acción
  manual las reseñas falsas o autopromocionales (directriz reforzada en julio
  de 2026).

## 7. SEO clásico

- **Titular H1** con la palabra clave principal ("programa de glúteos para
  mujeres de 12 semanas"); `title` ≤ 60 caracteres y `description` ≤ 155.
- URL descriptiva (`/packs/programa-gluteos-mujer-12-semanas`).
- Una sola página por intención de búsqueda; enlaces desde `/packs` y el sitemap.
- Contenido renderizado en servidor (Next.js) — sin texto escondido tras JS.
- Datos estructurados JSON-LD: `Product` + `Offer` (precio, moneda,
  disponibilidad), `FAQPage`, `BreadcrumbList`, y `Organization`/`Person` para
  autoría.
- Imágenes con `alt` descriptivo; Open Graph para compartir en redes/WhatsApp.

## 8. Optimización para asistentes de IA (GEO)

Lo que aumenta la probabilidad de que ChatGPT, Claude, Perplexity o los AI
Overviews de Google citen la página:

- **Respuesta primero**: un bloque "En resumen" arriba con frases autónomas
  ("El programa X es un plan de 12 semanas, 3 días por semana, para…, cuesta
  N € en pago único."). Los modelos citan frases que se entienden solas.
- **Estadísticas, citas y fuentes**: el estudio de Princeton sobre GEO (10.000
  consultas) midió **+30–40 % de visibilidad** al añadir citas a fuentes
  creíbles (+40 %), datos concretos (+37 %) y citas de expertos con nombre
  (+30 %). → sección "Lo que dice la evidencia" con 2–3 datos y su fuente.
- **Ficha técnica** en formato extraíble (tabla/lista de duración, días,
  minutos, material, nivel, precio).
- **FAQ** con preguntas tal como las haría alguien a un asistente.
- **Autoría y fecha de actualización** visibles (E-E-A-T).
- **Rastreo**: `robots.txt` deja pasar a los rastreadores de búsqueda de IA
  (`OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`,
  `PerplexityBot`, `Google-Extended`…). El sitio ya permite todo (`*`); se
  añaden reglas explícitas para dejar clara la intención.
- **`llms.txt`**: ya existe (`/llms.txt`); se añaden los packs. A mayo de 2026
  ningún asistente lo consume en producción de forma documentada, pero no
  cuesta nada y lo leen algunos agentes.

## 9. Decisiones de la plantilla

- Contenido por programa en `src/content/packs/<slug>.ts` (tipado
  `PackLanding`). Precio, nombre, imagen y "qué incluye" vienen del backend (lo
  que el coach configura en el panel → Packs); el copy de venta, del archivo.
- Si un pack no tiene archivo de contenido, la página se genera igualmente con
  una landing básica a partir de los datos del panel.
- Sin menú ni pie con enlaces de salida en la landing (un solo objetivo).
- CTA fijo en móvil; el formulario de compra (email → Stripe) aparece en el
  hero, en la oferta y al final.
- Secciones opcionales: testimonios y garantía (se ocultan si no hay datos).

## Fuentes

- [How to Sell Fitness Programs Online: The 2026 Creator Playbook — SamCart](https://www.samcart.com/blog/how-to-sell-fitness-programs-online-the-2026-creator-playbook)
- [25 Fitness Landing Page Examples — OptimizePress](https://www.optimizepress.com/fitness-landing-page-examples/)
- [Landing Page Statistics 2026 — Digital Applied](https://www.digitalapplied.com/blog/landing-page-statistics-2026-conversion-data-points)
- [Landing Page Conversion: 2,000 Pages Tested in 2026 — Digital Applied](https://www.digitalapplied.com/blog/landing-page-conversion-study-2000-pages-tested-2026)
- [Low-Ticket Pricing Strategies — LTO Ads](https://ltoads.com/blog/low-ticket-pricing-strategies)
- [Tripwire Funnel — CartFlows](https://cartflows.com/blog/tripwire-funnel/)
- [Direct Response Copywriting Glossary — Rob Palmer](https://robpalmer.com/blog/direct-response-copywriting-glossary)
- [Glúteos UP — Strong Girls Academy](https://www.stronggirlsacademy.com/join/unete-gluteos-up/)
- [Transforma tus glúteos — Road to Basics](https://roadtobasics.com/gluteos/)
- [MegaGlúteos](https://www.megagluteos.com/)
- [Glúteo en Forma](https://www.gluteoenforma.com/)
- [Fit Father Project](https://www.fitfatherproject.com/)
- [Making Dads 35+ Fit Again — Dean McMenamin](https://deanmcmenamin.co.uk/rebirth-program-v3/)
- [Are You Afraid of Getting "Big and Bulky"? — Girls Gone Strong](https://www.girlsgonestrong.com/blog/articles/big-and-bulky/)
- [No Time to Lift? Time-Efficient Training Programs — Iversen et al. (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8449772/)
- [Minimalist Training: Lower Dosage Resistance Training (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10933173/)
- [Generative Engine Optimization (GEO) — Princeton study summary, seo.ai](https://seo.ai/blog/generative-engine-optimization-geo)
- [The GEO Paper: What the Research Actually Found — KinetixSEO](https://kinetixseo.com/articles/geo-paper-princeton-study)
- [GEO Guide 2026 — Digital Applied](https://www.digitalapplied.com/blog/geo-guide-generative-engine-optimization-2026)
- [robots.txt for AI search: the 2026 cheat sheet — DEV Community](https://dev.to/brandswarm/robotstxt-for-ai-search-the-2026-cheat-sheet-gptbot-claudebot-and-the-rest-16a)
- [LLMs.txt Spec 2026 — Tygart Media](https://tygartmedia.com/llms-txt-2026-spec/)
- [Review schema: self-serving reviews — Semantec SEO](https://semantecseo.com/schema/review-snippet-rules/)
- [Money-back Guarantee vs. Free Trial — RevenueCat](https://www.revenuecat.com/blog/growth/money-back-guarantee)

## 10. Cómo crear una landing nueva

1. En el panel → **Packs**, crea el pack (precio, duración, contenido, imagen) y
   fíjate en su **enlace** (slug), p. ej. `programa-gluteos-mujer-12-semanas`.
2. Copia uno de los archivos de `src/content/packs/` con ese slug como nombre,
   cambia `slug` y reescribe el texto siguiendo este documento.
3. Añádelo a la lista de `src/content/packs/index.ts`.
4. Revisa que lo que dice el texto (días, minutos, casa/gimnasio, nutrición…)
   coincide con el programa real que asigna el pack.
5. Testimonios: solo reales y con permiso. Garantía: solo si el negocio la
   ofrece (y revisando el derecho de desistimiento).

Las tres landings de ejemplo (2026-10-01):

| Slug | Público | Acento |
|---|---|---|
| `programa-gluteos-mujer-12-semanas` | Mujeres, glúteo, casa o gimnasio | `#d6336c` |
| `programa-perder-grasa-hombres-30-45` | Hombres 30–45, pérdida de grasa | `#ea580c` |
| `programa-ganar-musculo-poco-tiempo` | 30–45 con poco tiempo, hipertrofia 2–3 días | `#4f46e5` |

Para que se vean, hay que crear en el panel los packs con esos mismos slugs y
ponerlos "A la venta". Sin archivo de contenido, cualquier pack muestra una
landing básica generada con los datos del panel.
