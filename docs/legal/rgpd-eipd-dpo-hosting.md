# Informe: Cumplimiento RGPD/LOPDGDD para BeStronger

**Fecha de consulta de fuentes:** 27/08/2026 (Tema 3 actualizado el mismo día tras confirmarse el cambio de proveedor de hosting de Vercel a IONOS).
**Alcance:** EIPD, DPO e IONOS como encargado de tratamiento, para una app de coaching de fitness/nutrición con coach humano que trata datos de salud (PAR-Q, peso/altura, dolor referido) y sincroniza opcionalmente Apple HealthKit / Health Connect.

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

## Tema 3 — IONOS como encargado de tratamiento

*(Sustituye al análisis inicial de Vercel: BeStronger ha confirmado que su hosting definitivo será IONOS, no Vercel.)*

### Quién es IONOS y por qué mejora la posición de partida

IONOS es un grupo europeo (IONOS Group SE, matriz alemana) con **entidad legal propia en España**: **1&1 IONOS ESPAÑA, S.L.U.**, CIF B-85049435, domicilio en Avenida de la Vega nº1, Edificio Veganova 3, Alcobendas, 28108 Madrid. A diferencia de Vercel (entidad estadounidense), contratar con la filial española de IONOS evita de partida el problema de transferencia internacional de datos a un tercer país que sí existía con Vercel.

### Centros de datos y residencia en la UE

IONOS opera varios centros de datos propios en Europa (incluido uno de nueva generación en Fráncfort, Alemania), certificados **ISO 27001**, y su documentación pública declara explícitamente que no monetiza ni revende los datos de sus clientes. Para los productos de IONOS Cloud, el propio proveedor confirma que **los datos se almacenan y procesan dentro de la UE**.

### Contrato de encargo de tratamiento (AVV / DPA)

- IONOS ofrece un **"Acuerdo de encargo de tratamiento de datos personales"** específico en español, publicado en ionos.es/terms-gtc/acuerdo-de-encargo-de-tratamiento-de-datos-personales/, sin coste adicional.
- Desde julio de 2022, este acuerdo **forma parte de las condiciones generales (GTC)** de IONOS por defecto para contratos nuevos — no hace falta firmarlo aparte salvo que se quiera un documento formal independiente (disponible para descargar/completar desde su centro de ayuda).
- Aplica a los productos relevantes: Cloud Gestionado (PaaS), Servidores Virtuales (VPS), Servidores Cloud, Servidores Dedicados, entre otros.

### Pendiente de confirmar por BeStronger

1. **Qué producto concreto de IONOS se va a usar** para desplegar la app Next.js (p. ej. "Deploy Now", un VPS/Servidor Cloud gestionado manualmente, o alojamiento web estándar) — el AVV y las garantías de residencia UE descritas aplican a los productos Cloud/VPS/Dedicado; conviene confirmar que el producto elegido esté cubierto igual.
2. **Si la base de datos y cualquier otro servicio conectado** (email transaccional, backups, CDN si se añade alguno externo) también están alojados en la UE — de nada sirve tener el hosting principal en Fráncfort si otro componente de la infraestructura se contrata con un proveedor fuera de la UE.
3. **Guardar constancia** de la aceptación del AVV/GTC de IONOS vigente en el momento de la contratación, como parte del registro de actividades de tratamiento (art. 30 RGPD) y del expediente de encargados (art. 28 RGPD).

**Conclusión**: el cambio a IONOS simplifica notablemente este punto del cumplimiento respecto a Vercel — hay entidad española, AVV en español ya incluido en el contrato, y centros de datos en la UE — pero sigue habiendo que confirmar el producto exacto contratado y el resto de piezas de infraestructura antes de darlo por cerrado.

---

## Fuentes consultadas (27/08/2026)

- AEPD — FAQ listado EIPD obligatoria: aepd.es/preguntas-frecuentes/.../FAQ-0228
- AEPD — Nota de prensa listado tratamientos con/sin EIPD obligatoria: aepd.es/prensa-y-comunicacion
- AEPD — Documento oficial listas DPIA art. 35.4: aepd.es/documento/listas-dpia-es-35-4.pdf
- AEPD — Traducción directrices CEPD WP248 rev.01: aepd.es/sites/default/files/2019-09/wp248rev01-es.pdf
- AEPD — FAQ "actividad principal, observación sistemática, gran escala": aepd.es (FAQ-0403)
- AEPD — FAQ "¿Cuándo se debe nombrar un DPO?": aepd.es (FAQ-0402)
- LOPDGDD art. 34 — vía Iberley (BOE-A-2018-16673 no accesible directamente por el proxy de salida del entorno de investigación)
- IONOS — Acuerdo de encargo de tratamiento de datos personales (ES): ionos.es/terms-gtc/acuerdo-de-encargo-de-tratamiento-de-datos-personales/
- IONOS — Contrato de tratamiento de datos (ayuda, ES): ionos.es/ayuda/proteccion-de-datos/informacion-general-sobre-el-rgpd/contrato-de-tratamiento-de-datos/
- IONOS Group — nuevo centro de datos cloud en Fráncfort: ionos-group.com/investor-relations/newsroom
- IONOS Cloud — Data Protection and Cloud Security: cloud.ionos.com/protection
- IONOS Cloud — EU GDPR requirements (Storage as a Service): cloud.ionos.com/solutions/eu-gdpr-requirements

**Nota metodológica**: el proxy de salida del entorno bloqueó el acceso directo a aepd.es/boe.es/iberley.es en algunos casos; parte de la lectura se hizo vía resultados de búsqueda que citan el contenido, no siempre el documento primario. Se recomienda verificación puntual del texto literal antes de decisiones formales.

---

## Nota — qué confirmar con un abogado especializado en protección de datos

1. Lectura directa del art. 34 LOPDGDD en el BOE y del listado íntegro de la AEPD.
2. Calificación jurídica exacta de BeStronger como "centro sanitario" o no, según evolucione el modelo (coaches sanitarios colegiados, historia clínica).
3. Umbral real de "gran escala" aplicado al volumen/perfil de usuarios concreto (juicio experto caso por caso).
4. Revisión contractual del AVV de IONOS vigente y del producto/plan exacto contratado (confirmar que ese producto concreto queda cubierto por el acuerdo y por la residencia de datos en la UE).
5. Revisión del resto de encargados de tratamiento conectados (base de datos, email, analítica, pasarela de pago) — no cubiertos en este informe.
6. Base jurídica y consentimiento específico para HealthKit/Health Connect y PAR-Q, en conjunto con la EIPD.
