# WEBSITE_IMPLEMENTATION.md

Documentación de la construcción de las páginas de servicio de BeStronger (agosto 2026), a partir de `WEB_APP_DOCUMENTATION.md` (documentación funcional real de la app, sin invención) y del sistema de diseño ya existente en el repo. Excluye el Blog, que queda para una fase posterior.

## 1. Auditoría previa (Fase 1)

Antes de crear nada se revisó:

- **Estructura**: `src/app/(pages)/*` (una carpeta por ruta, con `page.tsx` + `components/`), `src/app/home/*` para Home, `src/components/{navbar,footer}` para navegación global.
- **Tokens de diseño** (`src/assets/css/_config.css`): paleta `default-50..950` (zinc), `primary`/`primary-1..8` como acentos por tarjeta, `body-bg`, tipografías `--font-body`/`--font-heading`.
- **Patrones repetidos identificados**: badge "eyebrow" (`rounded-full border bg-white px-5 py-1.5`), botón CTA en píldora con texto deslizante al hover (`group` + `overflow-hidden` + `-translate-y-full`), tarjeta de feature (icono en círculo + título + descripción, `rounded-2xl bg-white p-3.5..7.5`), y **el acordeón de FAQ estaba duplicado literalmente 4 veces** (Home, `/faqs`, `/pricing`, `/contact`) con solo los datos cambiando.
- **Inconsistencia real encontrada y corregida sobre la marcha**: varias imágenes de maqueta (`workspace/dashboard-04/05/11/12.svg`) llevan texto en inglés incrustado en el propio SVG ("Morning Start", "Drink a full glass of water", etc.), heredado de la plantilla original. Se evitó reutilizarlas en las páginas nuevas y se sustituyeron por tarjetas de datos reales en español (ver §5).

## 2. Componentes reutilizables (Fase 3)

Nuevos, en `src/components/shared/`, extraídos de los patrones repetidos de arriba:

| Componente | Sustituye a | Usado en |
| --- | --- | --- |
| `SectionBadge` | El `<span>` badge repetido en casi cada sección | Todas las páginas nuevas |
| `CtaButton` | El botón píldora con texto deslizante (antes copiado a mano en cada sección) | Todas las páginas nuevas + `AutoRegulacion` |
| `FeatureCard` | La tarjeta icono+título+descripción de `Mission.tsx` / `SmartAssist.tsx` | Todas las páginas nuevas |
| `FaqAccordion` | Las 4 implementaciones idénticas de acordeón de FAQ | Home, `/faqs`, `/pricing`, `/contact` (refactorizadas) + las 6 páginas nuevas |
| `CtaBanner` | El bloque oscuro de cierre con círculo difuminado de `Features.tsx` | Cierre de las 6 páginas nuevas |

Se refactorizaron `src/app/home/components/Faq.tsx`, `src/app/(pages)/faqs/components/Faq.tsx`, `src/app/(pages)/pricing/components/PricingFaq.tsx` y `src/app/(pages)/contact/components/ContactFaq.tsx` para usar `FaqAccordion`, eliminando la duplicación sin cambiar su aspecto visual.

## 3. Páginas creadas

A partir de la documentación (§18 "Estructura propuesta para la página web" y el resto de secciones funcionales), se determinó esta arquitectura, evitando páginas redundantes:

- **`/entrenamiento`** — Entrenamiento online (doc §3).
- **`/nutricion`** — Nutrición online (doc §4).
- **`/habitos`** — Hábitos (doc §5).
- **`/progreso`** — Seguimiento y progreso (doc §6–7).
- **`/como-funciona`** — Proceso completo + metodología (auto-regulación/RIR-RPE) + acompañamiento asíncrono honesto (doc §1, §9, §12).
- **`/para-quien-es`** — Para quién es / para quién no, y niveles de cliente (doc §11, §17, §21).

**Decisiones de alcance** (siguiendo "menos páginas, mejor hechas" y "no inventar"):

- **No se creó una página `/app`**: `/download` ya cumple esa función (capturas, botones de tienda "próximamente", lista de espera). Crear otra hubiera sido redundante.
- **No se creó una página de "Resultados/testimonios"**: la documentación prohíbe expresamente inventar testimonios, ratings o casos de éxito, y no existen datos reales de clientes todavía. En su lugar, cada página nueva incluye prueba social honesta basada en funcionalidad real (tarjetas de "esto es lo que hace la app", no citas de clientes inventadas), siguiendo el mismo patrón ya usado en `Feedback.tsx` de Home.
- **No se creó una página "Metodología" separada**: la documentación indica explícitamente que no existe una filosofía de marca con nombre propio más allá de la auto-regulación de carga y el uso de RIR/RPE — inventar una habría violado la regla de no inventar. Ese contenido se integró como sección dentro de `/como-funciona`.

## 4. Copy y SEO

- Cada página tiene `title` y `description` únicos vía `export const metadata` (heredan el template `%s | BeStronger` del layout raíz).
- H1 único por página, jerarquía H1 → H2 → H3 respetada en todas las secciones.
- URLs cortas, en español, sin acentos ni mayúsculas (`/entrenamiento`, `/como-funciona`, etc.).
- Todo el copy se basa en frases "defendibles" citadas literalmente o parafraseadas de `WEB_APP_DOCUMENTATION.md` (§3.4, §4.8, §5.7, §9.3, §17, §20). Se evitaron explícitamente las frases que el propio documento marca como no defendibles: "sincroniza con tu reloj favorito", "entrenador con IA", "recetas con fotos profesionales", "chat en vivo con tu coach".
- Internal linking: cada página nueva enlaza a `/contact` (CTA principal), y hay referencias cruzadas puntuales (`/como-funciona` enlaza a `/faqs`; `/entrenamiento` enlaza a `/como-funciona`; `/nutricion` enlaza a `/pricing`).
- Navbar y Footer actualizados para enlazar las 6 páginas nuevas (antes, los enlaces de navegación principal apuntaban a anclas dentro de `/home` — `#features`, `#usecase`, etc. — que ahora conviven con páginas dedicadas más completas).

## 5. Problemas encontrados y solucionados

| Problema | Dónde | Solución |
| --- | --- | --- |
| Acordeón de FAQ duplicado 4 veces | Home, `/faqs`, `/pricing`, `/contact` | Extraído a `FaqAccordion`, reutilizado en 10 sitios |
| Imágenes de maqueta con texto en inglés incrustado (`dashboard-04/05/11/12.svg`) | Se iban a reutilizar en el hero y en la sección de auto-regulación de `/entrenamiento` | Sustituidas por tarjetas de datos reales en español, coherentes con la terminología exacta de la app ("Obj." / "Sugerido", doc §3.1) |
| Nav principal apuntaba solo a anclas de Home | `Navbar.tsx` | Actualizado para apuntar a las páginas dedicadas nuevas |

## 6. Problemas pendientes / fuera de alcance de esta tanda

- El bloque de scroll-spy de `Navbar.tsx` (`handleScrollSpy`, ids `features/usecase/metrics/smart-assist`) sigue activo solo para `/home` y ha quedado desacoplado de los enlaces principales del nav (que ahora ya no usan esos anchors). No rompe nada, pero es limpieza pendiente si se quiere simplificar el componente.
- El bloqueante legal 🔴 de `docs/legal-todo.md` (datos identificativos del titular en Aviso Legal/Privacidad/Términos) sigue sin resolver — no forma parte de esta tarea.
- Blog: explícitamente fuera de alcance en esta fase, como pidió el usuario.

## 7. Mejoras recomendadas (no implementadas)

- Cuando existan capturas reales de la app (no maquetas de plantilla), sustituir las imágenes de stock usadas en los héroes de las páginas nuevas (`about-01/02/03.webp`, etc.) por capturas reales, tal como pide la documentación (§22).
- Añadir `alt` más descriptivos por imagen si se hace una auditoría de accesibilidad dedicada.
- Considerar structured data (schema.org `Service` o `FAQPage`) en `/como-funciona`, `/entrenamiento` y `/nutricion` una vez el dominio esté en producción — no se implementó ahora para no añadir complejidad sin validar antes con Search Console.

## 8. Tabla final

| Página | UI/UX | Copy | SEO | Responsive | QA | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| `/entrenamiento` | ✅ | ✅ | ✅ | ✅ (desktop/mobile verificado) | ✅ build + capturas | Completa |
| `/nutricion` | ✅ | ✅ | ✅ | ✅ | ✅ | Completa |
| `/habitos` | ✅ | ✅ | ✅ | ✅ | ✅ | Completa |
| `/progreso` | ✅ | ✅ | ✅ | ✅ | ✅ | Completa |
| `/como-funciona` | ✅ | ✅ | ✅ | ✅ | ✅ | Completa |
| `/para-quien-es` | ✅ | ✅ | ✅ | ✅ | ✅ | Completa |
| Home / Pricing / Contact / FAQs (FAQ refactor) | ✅ | Sin cambios de contenido | Sin cambios | ✅ (sin cambios visuales) | ✅ build | Refactor interno completo |
| Blog | — | — | — | — | — | Fuera de alcance (fase futura) |

## 9. Próximos pasos sugeridos

1. Resolver el bloqueante legal de identificación del titular (`docs/legal-todo.md`) antes de publicar en producción.
2. Sustituir imágenes de plantilla por capturas reales de la app cuando estén disponibles.
3. Planificar la fase del Blog cuando el negocio lo priorice.
4. Revisar analítica (Search Console / GA si se añade) tras el despliegue para ajustar el copy SEO con datos reales de búsqueda.
