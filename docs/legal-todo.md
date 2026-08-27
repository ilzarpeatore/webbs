# Pendientes legales — BeStronger

Notas de seguimiento a partir de la redacción de Términos y Condiciones y Política de Privacidad (agosto 2026). Ninguno de estos puntos sustituye la revisión de un abogado colegiado o un gestor/asesoría; son un mapa de qué falta y por qué.

## 🔴 Bloqueantes antes de publicar la web

- [ ] **Datos identificativos del titular**: razón social o nombre y apellidos, NIF/CIF, domicilio social (y datos registrales si aplica). Ya están marcados como "pendiente" en `/privacy-policy` y `/terms-and-conditions` — hay que rellenarlos antes de que esas páginas sean legalmente válidas (art. 10 LSSI-CE).
- [ ] **Página de Aviso Legal** aparte de Términos y de Privacidad. Recoge la identificación completa del prestador exigida por la LSSI-CE y normalmente se enlaza desde el footer junto a las otras dos.
- [ ] **Consentimiento explícito y separado para datos de salud** en el flujo real de la app: un checkbox propio para el cuestionario PAR-Q (no basta con "acepto los Términos" genérico), dado que son datos de categoría especial (art. 9 RGPD).

## 🟠 Antes de cobrar el primer pago

- [ ] **Checkbox de "inicio anticipado del servicio"** en el proceso de contratación. Sin él, el derecho de desistimiento de 14 días con reembolso íntegro sigue vigente aunque el cliente ya haya empezado a entrenar (art. 103.a LGDCU).
- [ ] **Facturación electrónica verificable (Veri*Factu)**: confirmar si BeStronger está obligado (autónomos y pymes en España, entrada en vigor 2025-2026) y con qué software se va a facturar.
- [ ] **Forma jurídica**: autónomo vs. sociedad. Afecta a responsabilidad personal, fiscalidad, y a qué NIF/CIF poner en las páginas legales.
- [ ] **Fórmula de reembolso proporcional** en caso de desistimiento parcial — que un abogado la revise para que sea objetiva y defendible.

## 🟡 Importante a medida que crezca (no bloqueante para un lanzamiento pequeño)

- [ ] **Evaluación de Impacto (EIPD)** ante la AEPD — obligatoria si se tratan datos de salud "a gran escala" de forma sistemática (art. 35 RGPD). Vigilar el umbral según crezca la base de clientes.
- [ ] **Delegado de Protección de Datos (DPO)** — mismo criterio de escala (art. 34 LOPDGDD).
- [ ] **Contrato de encargo de tratamiento** (art. 28 RGPD) con el proveedor de hosting (Vercel u otro). Comprobar si los servidores están fuera de la UE (transferencia internacional de datos, cláusulas contractuales tipo si aplica).
- [ ] **Régimen de responsabilidad por contenido de usuarios** en la comunidad social (art. 16 LSSI-CE, "puerto seguro" para prestadores de alojamiento de contenidos).
- [ ] **Idioma y alcance geográfico**: si se presta servicio a consumidores fuera de España dentro de la UE, revisar armonización con las normas de consumo del país de residencia del cliente (Reglamento Roma I).

## 🟢 Solo si se añade la funcionalidad correspondiente

- [ ] **Política de Cookies**: solo necesaria si se añade analítica de terceros (Google Analytics, Meta Pixel, etc.) a la web. Con la configuración actual (sin analítica) no hace falta todavía.

## Fuera del ámbito legal-digital, pero relevante para el sector

- [ ] **Seguro de responsabilidad civil profesional** para el coach/la actividad de entrenamiento. La cláusula de exención de responsabilidad de los Términos no siempre es blindaje suficiente frente a una lesión real de un cliente.

---

*Generado a partir de una revisión inicial orientativa (no jurídica) del negocio. Última actualización: 27 ago 2026.*
