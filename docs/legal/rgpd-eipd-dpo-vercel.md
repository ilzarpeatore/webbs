# Informe: Cumplimiento RGPD/LOPDGDD para BeStronger

**Fecha de consulta de fuentes:** 27/08/2026
**Alcance:** EIPD, DPO y Vercel como encargado de tratamiento, para una app de coaching de fitness/nutrición con coach humano que trata datos de salud (PAR-Q, peso/altura, dolor referido) y sincroniza opcionalmente Apple HealthKit / Health Connect, desplegada en Vercel.

---

## Tema 1 — Umbral para la Evaluación de Impacto (EIPD / art. 35 RGPD)

No existe un número de usuarios que dispare la obligación. El criterio combina:

1. **Directrices CEPD (WP248 rev.01)**, adoptadas como referencia por la AEPD: 9 criterios indiciarios (evaluación/scoring, decisiones automatizadas, observación sistemática, datos sensibles, personas vulnerables, cotejo de datos, tecnologías novedosas, gran escala, impedir ejercer un derecho/servicio). **Si concurren 2 o más, se presume alto riesgo y procede EIPD.**
2. **Listado AEPD (art. 35.4)**: confirma que categorías especiales de datos (salud) y observación/monitorización mediante apps o dispositivos son criterios relevantes.

### Aplicación a BeStronger

BeStronger **ya cumple 2 criterios por diseño, sin depender de ninguna cifra de usuarios**:
- **Datos sensibles** (PAR-Q, salud, dolor, datos de HealthKit/Health Connect).
- **Observación sistemática** (sincronización continua de pasos/frecuencia cardiaca/sueño desde wearables).

**Recomendación**: no esperar a un hito de usuarios — valorar un análisis de riesgo/screening de EIPD en cuanto la sincronización con wearables esté activa como funcionalidad general (no solo en piloto), coherente con "protección de datos desde el diseño" (art. 25 RGPD).

Como orientación de crecimiento (estimación práctica, no umbral oficial):
- **Desde el lanzamiento con wearables activos**: screening de EIPD documentado, aunque concluya riesgo residual bajo.
- **En torno a 5.000-10.000 usuarios activos con datos de salud** (o antes si se introduce perfilado/scoring automatizado o se comparten datos con terceros/aseguradoras): la EIPD pasa a ser claramente exigible por el criterio de "gran escala".
- **Cualquier decisión automatizada sin revisión humana** (p. ej. ajustar el plan automáticamente sin aprobación del coach) dispara EIPD de inmediato, sin importar el volumen.

---

## Tema 2 — Umbral para el Delegado de Protección de Datos (DPO)

### Listado sectorial del art. 34 LOPDGDD

Lista tasada de sectores obligados "en todo caso" (colegios profesionales, centros docentes/universidades, telecos a gran escala, entidades de crédito, aseguradoras, energéticas, ficheros de solvencia, publicidad a gran escala, gestoras de pensiones/Seguridad Social, federaciones deportivas con datos de menores, **centros sanitarios legalmente obligados a mantener historias clínicas** salvo profesionales sanitarios individuales).

**BeStronger no encaja en ninguno de estos supuestos hoy**: no es un "centro sanitario" en el sentido de la Ley 41/2002 (no mantiene historias clínicas regladas), salvo que el modelo evolucione a incluir profesionales sanitarios colegiados prestando asistencia clínica documentada como tal.

### Pero: la regla general del art. 37.1 RGPD sigue aplicando en paralelo

DPO también es obligatorio cuando la **actividad principal** consiste en tratamiento a gran escala de categorías especiales de datos (art. 37.1.c) o en observación sistemática a gran escala (art. 37.1.b). Como el tratamiento de datos de salud **es el núcleo del negocio** de BeStronger (no accesorio), **el crecimiento en usuarios con datos de salud sincronizados es el disparador real vía art. 37.1.c**, con independencia de no estar en el listado sectorial de la LOPDGDD.

**Conclusión práctica**: hoy no hay obligación legal de DPO. Vigilar el crecimiento como disparador (vía art. 37.1.c, no vía LOPDGDD art. 34). Aun sin obligación, la AEPD recomienda designar un DPO o responsable de cumplimiento equivalente de forma voluntaria en fases tempranas, dado que el negocio gira sobre datos sensibles (accountability, art. 5.2 RGPD).

---

## Tema 3 — Vercel como encargado de tratamiento

### DPA estándar
Vercel Inc. ofrece un **Data Processing Addendum (DPA)** público en vercel.com/legal/dpa (HTML) y PDF en assets.vercel.com. Para clientes Hobby/Pro se incorpora automáticamente por referencia a los Términos de Servicio (modelo clickwrap, sin firma manual). Enterprise permite countersign formal. **BeStronger debe conservar evidencia de aceptación** (captura de la página legal vigente al contratar) como parte de su registro de actividades.

### Transferencias internacionales
Vercel Inc. es EE.UU. Usa **Cláusulas Contractuales Tipo (SCCs, Decisión UE 2021/914)** + **UK Addendum**, y está **certificado bajo el EU-US Data Privacy Framework (DPF)**.

### Residencia de datos UE — matices importantes
- Selección de región de ejecución (Frankfurt `fra1`, París `cdg1`, Dublín `dub1`, Londres `lhr1`) **solo disponible en planes Pro/Enterprise**, no en Hobby (que por defecto ejecuta en EE.UU.).
- Aunque se fije región EU para las funciones, el **control plane (panel, builds, datos de soporte) permanece en EE.UU.**
- La **red Edge/CDN es global** por diseño — las peticiones HTTP transitan por infraestructura de Vercel independientemente de la región elegida.
- Vercel Analytics/Speed Insights no ofrece residencia UE.

### Implicación práctica
**Con configuración por defecto (sin fijar región EU en plan Pro/Enterprise) hay transferencia de datos de salud a EE.UU.**, cubierta por SCCs + DPF, pero a documentar en la EIPD (destino geográfico como factor de riesgo). Recomendaciones:
1. Verificar el plan de Vercel actual de BeStronger y si tiene fijada región EU (Project Settings → Functions → Region).
2. Documentar en el registro de actividades que el control plane y soporte siguen en EE.UU. pese a fijar función en la UE.
3. Aceptar/archivar formalmente el DPA de Vercel como parte del expediente de encargados.
4. Revisar si la base de datos u otros servicios conectados (no analizados aquí) también están en la UE — fijar solo la función en Frankfurt no sirve de mucho si la base de datos está en EE.UU.

---

## Fuentes consultadas (27/08/2026)

- AEPD — FAQ listado EIPD obligatoria: aepd.es/preguntas-frecuentes/.../FAQ-0228
- AEPD — Nota de prensa listado tratamientos con/sin EIPD obligatoria: aepd.es/prensa-y-comunicacion
- AEPD — Documento oficial listas DPIA art. 35.4: aepd.es/documento/listas-dpia-es-35-4.pdf
- AEPD — Traducción directrices CEPD WP248 rev.01: aepd.es/sites/default/files/2019-09/wp248rev01-es.pdf
- AEPD — FAQ "actividad principal, observación sistemática, gran escala": aepd.es (FAQ-0403)
- AEPD — FAQ "¿Cuándo se debe nombrar un DPO?": aepd.es (FAQ-0402)
- LOPDGDD art. 34 — vía Iberley (BOE-A-2018-16673 no accesible directamente por el proxy de salida del entorno de investigación)
- Vercel — DPA: vercel.com/legal/dpa
- Vercel — Security & Compliance: vercel.com/docs/security/compliance
- Vercel — Changelog certificación DPF: vercel.com/changelog
- Vercel — Docs regiones de funciones: vercel.com/docs/functions/configuring-functions/region

**Nota metodológica**: el proxy de salida del entorno bloqueó el acceso directo a aepd.es/boe.es/iberley.es en algunos casos; parte de la lectura se hizo vía resultados de búsqueda que citan el contenido, no siempre el documento primario. Se recomienda verificación puntual del texto literal antes de decisiones formales.

---

## Nota — qué confirmar con un abogado especializado en protección de datos

1. Lectura directa del art. 34 LOPDGDD en el BOE y del listado íntegro de la AEPD.
2. Calificación jurídica exacta de BeStronger como "centro sanitario" o no, según evolucione el modelo (coaches sanitarios colegiados, historia clínica).
3. Umbral real de "gran escala" aplicado al volumen/perfil de usuarios concreto (juicio experto caso por caso).
4. Revisión contractual del DPA de Vercel vigente y del plan contratado (región EU disponible o no).
5. Revisión del resto de encargados de tratamiento conectados (base de datos, email, analítica, pasarela de pago) — no cubiertos en este informe.
6. Base jurídica y consentimiento específico para HealthKit/Health Connect y PAR-Q, en conjunto con la EIPD.
