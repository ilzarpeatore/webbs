# Pendientes legales — BeStronger

Notas de seguimiento a partir de la redacción de Términos y Condiciones, Política de Privacidad y Aviso Legal (agosto 2026), más 5 informes de investigación dedicados. Ninguno de estos puntos sustituye la revisión de un abogado colegiado o un gestor/asesoría; son un mapa de qué falta, qué ya se sabe, y por qué.

Informes detallados con fuentes citadas: [`docs/legal/verifactu-forma-juridica.md`](./legal/verifactu-forma-juridica.md) · [`docs/legal/rgpd-eipd-dpo-hosting.md`](./legal/rgpd-eipd-dpo-hosting.md) · [`docs/legal/seguro-responsabilidad-civil.md`](./legal/seguro-responsabilidad-civil.md) · [`docs/legal/eipd-bestronger.md`](./legal/eipd-bestronger.md)

## 🔴 Bloqueantes antes de publicar la web

- [ ] **Datos identificativos del titular**: razón social o nombre y apellidos, NIF/CIF, domicilio social (y datos registrales si aplica). Marcados como "pendiente" en `/privacy-policy`, `/terms-and-conditions` y `/legal-notice` — hay que rellenarlos antes de que esas páginas sean legalmente válidas (art. 10 LSSI-CE).
- [x] ~~Página de Aviso Legal~~ — construida en `/legal-notice`, enlazada desde navbar y footer (27 ago 2026).
- [ ] **Consentimiento explícito y separado para datos de salud** en el flujo real de la app: un checkbox propio para el cuestionario PAR-Q (no basta con "acepto los Términos" genérico), dado que son datos de categoría especial (art. 9 RGPD).

## 🟠 Antes de cobrar el primer pago

- [ ] **Checkbox de "inicio anticipado del servicio"** en el proceso de contratación. Sin él, el derecho de desistimiento de 14 días con reembolso íntegro sigue vigente aunque el cliente ya haya empezado a entrenar (art. 103.a LGDCU).
- [x] **Facturación electrónica verificable (Veri\*Factu)** — investigado. **Sí aplica** a BeStronger (cualquiera que facture con software, sea B2C o B2B). Calendario vigente tras 2 prórrogas: **sociedades/SL desde el 1-ene-2027**, **autónomos desde el 1-jul-2027**. Multa de hasta 50.000 €/ejercicio por incumplimiento. Falta elegir software compatible (Holded, Quipu, FacturaDirecta, entre otros) — ver informe.
- [ ] **Forma jurídica**: autónomo vs. sociedad — investigado con tabla comparativa (responsabilidad, fiscalidad, RETA, costes). Sin recomendación cerrada: gestorías sitúan el punto de cambio habitual en ~40.000-60.000 € de beneficio neto anual, pero depende de cifras reales y de la exposición a responsabilidad del sector. **Falta decidir con el gestor/asesor fiscal.**
- [ ] **Fórmula de reembolso proporcional** en caso de desistimiento parcial — que un abogado la revise para que sea objetiva y defendible.

## 🟡 Importante a medida que crezca (no bloqueante para un lanzamiento pequeño)

- [x] **Evaluación de Impacto (EIPD)** — **redactada**, ver [`docs/legal/eipd-bestronger.md`](./legal/eipd-bestronger.md). BeStronger ya cumple 2 de los criterios de riesgo del CEPD/AEPD por diseño (datos de salud + monitorización sistemática vía wearables). El documento identifica los riesgos concretos, evalúa probabilidad/impacto, y propone medidas técnicas y organizativas ya realistas para el tamaño actual del negocio. **Pendiente**: validación formal por un DPO real o abogado especializado antes de considerarla definitiva, y actualizarla cuando haya cifras reales de usuarios o cambios en el tratamiento.
- [ ] **Delegado de Protección de Datos (DPO)** — investigado. BeStronger **no encaja hoy en el listado sectorial tasado del art. 34 LOPDGDD** (no es "centro sanitario" en sentido legal). Pero como el tratamiento de datos de salud es el núcleo del negocio, el **art. 37.1.c RGPD** (tratamiento a gran escala de categorías especiales como actividad principal) puede obligar a DPO de forma independiente según crezca. Vigilar ese umbral, no el de la LOPDGDD.
- [x] **Contrato de encargo de tratamiento con el hosting** — **hosting decidido: IONOS** (no Vercel). Mejora notable: IONOS tiene entidad legal española (1&1 IONOS ESPAÑA, S.L.U., CIF B-85049435, Alcobendas), centros de datos en la UE (Fráncfort entre otros, ISO 27001), y un Acuerdo de encargo de tratamiento en español ya incluido en sus condiciones generales desde 2022 (sin necesidad de firma aparte). Evita el problema de transferencia a EE.UU. que tenía Vercel. **Falta confirmar**: qué producto exacto de IONOS se usará para desplegar la app Next.js, y si la base de datos y demás servicios conectados también están en la UE.
- [ ] **Régimen de responsabilidad por contenido de usuarios** en la comunidad social (art. 16 LSSI-CE, "puerto seguro" para prestadores de alojamiento de contenidos).
- [ ] **Idioma y alcance geográfico**: si se presta servicio a consumidores fuera de España dentro de la UE, revisar armonización con las normas de consumo del país de residencia del cliente (Reglamento Roma I).

## 🟢 Solo si se añade la funcionalidad correspondiente

- [ ] **Política de Cookies**: solo necesaria si se añade analítica de terceros (Google Analytics, Meta Pixel, etc.) a la web. Con la configuración actual (sin analítica) no hace falta todavía.

## Fuera del ámbito legal-digital, pero relevante para el sector

- [x] **Seguro de responsabilidad civil profesional** — **resuelto**: ya cubierto vía colegiación en el **COLEF Madrid**, que incluye el seguro de RC en la cuota (una de las vías identificadas en el informe). **Importante a verificar con el propio colegio**: la Ley 6/2016 de Madrid exige un mínimo de cobertura más alto para actividad **online** (2.400.000 €) que para actividad presencial (300.000 €) — confirmar que la póliza de colegiación cubre expresamente la modalidad online de BeStronger y alcanza ese mínimo, no solo el mínimo presencial. **Cualificación del coach**: no hay regulación estatal unificada; las vías reconocidas donde sí hay normativa autonómica son Grado en CAFyD, TSAF/TAFAD o Certificado de Profesionalidad AFDA0210 — la colegiación en COLEF ya encaja en esta vía reconocida.

---

*Generado a partir de una revisión inicial orientativa (no jurídica) del negocio, ampliada con 5 informes de investigación dedicados (Aviso Legal, Veri\*Factu/forma jurídica, RGPD/hosting, seguro de RC, EIPD). Última actualización: 27 ago 2026.*
