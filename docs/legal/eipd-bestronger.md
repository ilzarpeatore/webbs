# Evaluación de Impacto relativa a la Protección de Datos (EIPD) — BeStronger

**Documento interno de cumplimiento — no es contenido para publicar en la web.**
**Fecha:** 27 de agosto de 2026. **Responsable del tratamiento:** BeStronger. **Encargado de tratamiento (hosting):** IONOS.

Elaborada siguiendo la estructura de la Guía de la AEPD *"Gestión del riesgo y evaluación de impacto en tratamientos de datos personales"* y el enfoque de su herramienta **EVALÚA_RIESGO RGPD** (identificación de factores de riesgo → evaluación del riesgo intrínseco → riesgo residual tras medidas), y los contenidos mínimos exigidos por el artículo 35.7 RGPD.

---

## 0. Resumen ejecutivo

BeStronger trata datos de salud de sus clientes (cuestionario PAR-Q, datos antropométricos, dolor reportado, y opcionalmente datos de wearables vía Apple Health/Health Connect) para que un coach humano diseñe y ajuste planes de entrenamiento y nutrición personalizados. Este tratamiento cumple, por diseño, al menos **dos de los nueve criterios de riesgo** de las Directrices del CEPD (WP248 rev.01) adoptadas por la AEPD: (1) tratamiento de categorías especiales de datos, y (2) observación/monitorización sistemática mediante wearables y la propia app. Por ello se realiza esta EIPD de forma proactiva, sin esperar a un hito concreto de usuarios, en línea con el principio de protección de datos desde el diseño (art. 25 RGPD).

**Conclusión anticipada** (desarrollada en el apartado 5): con las medidas descritas en el apartado 4, el **riesgo residual se considera medio-bajo y aceptable** para el volumen actual de la startup, por lo que **no se considera necesaria, a día de hoy, una consulta previa a la AEPD** (art. 36 RGPD). Esta conclusión debe revisarse periódicamente (ver apartado 6).

---

## 1. Descripción sistemática del tratamiento

### 1.1 Operaciones de tratamiento y finalidades

| Operación | Finalidad |
|---|---|
| Registro de cuenta (nombre, email, contraseña) | Gestión de la cuenta del cliente |
| Cuestionario inicial de 37 preguntas (datos personales + PAR-Q + entrenamiento + nutrición) | Calcular un plan inicial de calorías/macros y dar al coach la información de base para diseñar el plan de entrenamiento y nutrición |
| Registro de actividad de entrenamiento (series, cargas, RIR/RPE, dolor reportado, feedback) | Seguimiento del progreso; ajuste del plan por el coach; detección y notificación de dolor según gravedad |
| Registro de actividad de nutrición (comidas, calorías, macros) | Seguimiento del cumplimiento nutricional y ajuste de comidas asignadas |
| Hábitos, rachas, chequeos diarios de preparación (sueño, energía, estrés, agujetas) | Constancia diaria; dar contexto al coach sobre el estado del cliente |
| Sincronización opcional con Apple Health/HealthKit y Health Connect (pasos, frecuencia cardiaca, sueño) | Enriquecer el contexto disponible para el coach; nunca con fines comerciales |
| Contenido de comunidad (publicaciones, comentarios) | Funcionalidad social entre usuarios de la app |
| Facturación de la suscripción | Gestión del cobro y cumplimiento de obligaciones fiscales |

### 1.2 Categorías de interesados

Clientes de BeStronger: personas físicas mayores de 18 años, consumidores finales.

### 1.3 Categorías de datos, con indicación de categoría especial

- Identificativos y de contacto: nombre, email, contraseña (cifrada).
- **Datos de salud (art. 9 RGPD)**: respuestas del cuestionario PAR-Q, peso, altura, sexo con fines de cálculo metabólico, dolor reportado (zona/tipo/intensidad), y datos de Apple Health/Health Connect (frecuencia cardiaca, sueño, pasos).
- Datos de actividad/comportamiento: series, cargas, repeticiones, comidas registradas, hábitos, rachas.
- Contenido generado por el usuario: publicaciones y comentarios en la comunidad.
- Datos técnicos y de facturación.

### 1.4 Destinatarios y flujos de datos

- **El coach asignado**, personal de BeStronger, accede únicamente a los datos de sus propios clientes (control de acceso por relación cliente-coach) — es parte esencial de la prestación del servicio, no una cesión a terceros.
- **IONOS**, como encargado de tratamiento para el alojamiento de la infraestructura (servidores en la UE — ver informe `rgpd-eipd-dpo-hosting.md`).
- No se comparten datos con terceras empresas con fines comerciales o publicitarios. No hay integraciones con otras apps de terceros que accedan a los datos personales del cliente.
- Apple (HealthKit) y Google (Health Connect) actúan como intermediarios técnicos del propio sistema operativo del dispositivo del usuario: BeStronger solo *lee* los datos que el usuario autoriza expresamente desde el permiso nativo, y no tiene relación de encargo de tratamiento con Apple/Google para esta funcionalidad, ya que la sincronización ocurre a nivel del dispositivo del propio usuario.

### 1.5 Plazo de conservación

Mientras la cuenta esté activa, y tras la baja, durante los plazos legales aplicables (obligaciones fiscales, posibles responsabilidades derivadas del servicio), con supresión definitiva posterior.

### 1.6 Medidas de seguridad ya previstas (línea base, antes de las medidas adicionales del apartado 4)

- Contraseñas almacenadas cifradas.
- Control de acceso del coach limitado a los datos de sus propios clientes asignados.
- Alojamiento en infraestructura de IONOS dentro de la UE, con AVV ya incluido en las condiciones generales.
- El registro de series se sincroniza al servidor al momento (no hay copias locales prolongadas sin cifrar en el dispositivo más allá del uso normal de la app).

---

## 2. Evaluación de la necesidad y proporcionalidad

| Dato / operación | ¿Necesario para la finalidad? | Alternativa menos invasiva ya contemplada |
|---|---|---|
| Cuestionario PAR-Q completo | Sí — es el cuestionario estándar de cribado de aptitud física antes de iniciar un programa de ejercicio; sin él, el coach no puede valorar contraindicaciones básicas | Ya se limita a las 10 preguntas estándar del PAR-Q, sin ampliar a historial médico clínico completo |
| Peso, altura, sexo, edad | Sí — imprescindibles para el cálculo de BMR/TDEE y el diseño del plan | — |
| Dolor reportado (zona/tipo/intensidad) | Sí — permite decidir si notificar al coach según gravedad | La notificación al coach solo se dispara según reglas de gravedad, no expone el detalle a nadie más que al propio coach del cliente |
| Apple Health/Health Connect (pasos, FC, sueño) | No es imprescindible para el funcionamiento básico del servicio — es una mejora de contexto | **Ya es opcional**: el usuario decide activarlo o no, y el servicio funciona igual sin él con los datos introducidos manualmente. Alcance limitado a solo 3 tipos de dato (no se piden todos los disponibles en HealthKit, como ubicación, datos reproductivos, etc.) |
| Contenido de comunidad | Sí, para la funcionalidad social, pero es de uso voluntario | El usuario decide qué publica; no se obliga a compartir datos de salud en ese espacio |

**Conclusión de proporcionalidad**: el tratamiento está limitado a lo necesario para la finalidad declarada, y las piezas más sensibles adicionales (wearables) ya están diseñadas como opcionales y de alcance limitado, coherente con la minimización de datos (art. 5.1.c RGPD).

---

## 3. Identificación y evaluación de riesgos para los derechos y libertades

Metodología: para cada riesgo se valora **probabilidad** (Baja/Media/Alta) e **impacto** (Bajo/Medio/Alto/Muy alto) sobre los derechos y libertades de los interesados, siguiendo el enfoque de EVALÚA_RIESGO RGPD, con el **riesgo intrínseco** (antes de medidas) y el **riesgo residual** (después de las medidas del apartado 4).

| # | Riesgo | Probabilidad (intrínseca) | Impacto | Riesgo intrínseco | Riesgo residual (tras apartado 4) |
|---|---|---|---|---|---|
| R1 | Acceso no autorizado a datos de salud por una brecha de seguridad (credenciales, vulnerabilidad de la app/API) | Media | Muy alto (datos de salud expuestos a terceros) | **Alto** | Medio-bajo |
| R2 | Un coach accede a datos de clientes que no tiene asignados (fallo de control de acceso o abuso interno) | Baja-Media | Alto | Medio | Bajo |
| R3 | Filtración o uso indebido de datos de salud especialmente sensibles (p. ej., condición cardiaca, embarazo referido en el historial libre del PAR-Q) que cause discriminación o estigmatización al interesado | Baja | Muy alto | Medio-Alto | Bajo-Medio |
| R4 | Re-identificación o perfilado no deseado combinando datos de comunidad (publicaciones) con datos de entrenamiento/salud del mismo usuario | Baja | Medio | Bajo-Medio | Bajo |
| R5 | Los datos de Apple Health/Health Connect (sueño, frecuencia cardiaca, pasos) revelan patrones de vida del usuario (rutina diaria, horarios) más allá de lo estrictamente necesario para el coaching | Media | Medio | Medio | Bajo-Medio |
| R6 | El usuario pierde el control sobre su consentimiento de datos de salud (no sabe cómo revocarlo, o revoca el permiso del sistema operativo pero sigue viendo su histórico sin saber que ya no se sincronizan datos nuevos) | Media | Bajo-Medio | Bajo-Medio | Bajo |
| R7 | Retención de datos de salud más allá del tiempo necesario tras la baja de un cliente | Baja | Medio | Bajo-Medio | Bajo |
| R8 | Dependencia de un tercero (IONOS) para la disponibilidad y seguridad física de los datos | Baja | Alto | Bajo-Medio | Bajo |
| R9 | El bot de soporte o el panel de coach exponen accidentalmente datos de un cliente a otro (fallo de aislamiento multi-tenant) | Baja | Alto | Bajo-Medio | Bajo |

### Explicación de los riesgos más relevantes

- **R1 (brecha de seguridad)** es el riesgo de mayor impacto potencial dado que se trata de datos de salud (categoría especial): una filtración expondría información médica sensible de personas identificables, con consecuencias reputacionales y legales serias tanto para los interesados como para BeStronger.
- **R2 (acceso cruzado entre coaches)** es relevante porque el modelo de negocio se basa en que cada coach solo debe ver a sus propios clientes; un fallo de este control rompe la expectativa razonable de confidencialidad del cliente.
- **R3 (discriminación/estigmatización)** contempla escenarios como que un dato de salud filtrado (p. ej., una condición cardiaca o un embarazo mencionados en las respuestas libres del PAR-Q) llegue a un empleador, aseguradora o círculo social del interesado.
- **R5 y R6 (datos de wearables)** son específicos de la integración con Apple Health/Health Connect: aunque el alcance de datos leídos es limitado (pasos, frecuencia cardiaca, sueño), su naturaleza continua permite inferir rutinas diarias, algo que las Directrices del CEPD identifican expresamente como factor de riesgo de "observación sistemática".

---

## 4. Medidas para afrontar los riesgos

Medidas realistas para el tamaño actual de la startup, sin sobredimensionar para una estructura pequeña.

### 4.1 Medidas técnicas

- **Cifrado en tránsito y en reposo** de toda la base de datos que contenga datos de salud (TLS en todas las conexiones; cifrado a nivel de disco/base de datos en la infraestructura de IONOS).
- **Control de acceso por relación cliente-coach** aplicado a nivel de backend (no solo de interfaz): cada consulta a datos de un cliente debe validar que el coach solicitante tiene asignado a ese cliente.
- **Registro de auditoría (logs) de accesos** del panel de coach a datos de clientes, para poder detectar e investigar accesos anómalos (R2, R9).
- **Minimización activa de los datos leídos de Apple Health/Health Connect**: limitar la lectura exactamente a pasos, frecuencia cardiaca y sueño (ya implementado), sin ampliar el alcance sin revisar de nuevo esta EIPD (R5).
- **Revocación efectiva y visible**: al detectar que el permiso del sistema operativo ha sido revocado, la app debe dejar de mostrar como "en vivo" los datos de wearables y avisar al usuario de que la sincronización se ha detenido (R6).
- **Procedimiento técnico de purga de datos** tras la baja de un cliente, una vez transcurridos los plazos legales de conservación (R7).
- **Aislamiento multi-tenant verificado** en el panel de coach y en el bot de soporte, con pruebas específicas de que un coach o un flujo de soporte no puede recuperar datos de un cliente ajeno (R9).
- **Backups cifrados** con retención acotada, alojados igualmente dentro de la UE.

### 4.2 Medidas organizativas

- **Acuerdo de confidencialidad y formación básica de protección de datos** para cada coach antes de darle acceso al panel, incluyendo el deber de no comentar ni compartir información de salud de un cliente fuera del contexto del propio servicio (R2, R3).
- **Procedimiento de gestión de brechas de seguridad** documentado: quién decide, plazo de 72 horas para notificar a la AEPD si procede (art. 33 RGPD), y plantilla de comunicación a los interesados afectados si el riesgo es alto (art. 34 RGPD) (R1).
- **Registro de actividades de tratamiento** (art. 30 RGPD) mantenido y actualizado, incluyendo esta EIPD como anexo.
- **Revisión periódica de los accesos activos** de coaches (dar de baja accesos de coaches que dejan la empresa, revisar asignaciones cliente-coach).
- **Canal de contacto claro para ejercicio de derechos** (ya implementado: contacto@bestronger.es) y procedimiento interno de respuesta en plazo.
- **Cláusula de confidencialidad y AVV con IONOS** formalmente aceptado y archivado (art. 28 RGPD) — ver informe de hosting.
- **Política interna de "necesito saber"**: el bot de soporte y cualquier futura funcionalidad de IA no deben tener acceso por defecto a los datos de salud del cuestionario PAR-Q salvo que sea estrictamente necesario para la función concreta.

---

## 5. Conclusión

Con las medidas del apartado 4 aplicadas, el riesgo residual de los tratamientos evaluados se sitúa en un nivel **medio-bajo**, proporcionado a la naturaleza del servicio y al tamaño actual de BeStronger. **No se identifica, a día de hoy, un riesgo residual alto que exija consulta previa a la AEPD** conforme al artículo 36 RGPD.

Esta conclusión está condicionada a que las medidas descritas se implementen realmente (esta EIPD documenta la intención y el diseño, no sustituye una auditoría técnica de que estén efectivamente en producción — ver nota final).

---

## 6. Periodicidad de revisión

Se recomienda revisar y actualizar esta EIPD:

- **Con carácter anual**, como mínimo.
- **De forma inmediata** ante cualquiera de estos cambios: (a) se supera el orden de magnitud de 5.000-10.000 usuarios activos con datos de salud sincronizados; (b) se introduce cualquier decisión automatizada sobre el plan del cliente sin revisión del coach; (c) se amplía el alcance de datos leídos de Apple Health/Health Connect; (d) se incorpora un nuevo encargado de tratamiento (p. ej., un proveedor de IA, email transaccional o analítica) que procese datos de salud; (e) se produce una brecha de seguridad real, aunque sea de bajo impacto.

---

## Fuentes de metodología consultadas (27/08/2026)

- AEPD — Nota de prensa: *"La AEPD publica una nueva guía para gestionar el riesgo de los tratamientos de datos personales y realizar evaluaciones de impacto"*: aepd.es/prensa-y-comunicacion/notas-de-prensa/aepd-publica-nueva-guia-gestionar-riesgos-y-evaluciones-impacto
- AEPD — Guía *"Gestión del riesgo y evaluación de impacto en tratamientos de datos personales"* (PDF): aepd.es/guias/gestion-riesgo-y-evaluacion-impacto-en-tratamientos-datos-personales.pdf
- AEPD — Herramienta EVALÚA_RIESGO RGPD (identificación de factores de riesgo, riesgo intrínseco, riesgo residual): aepd.es
- Directrices del CEPD, WP248 rev.01 (criterios de riesgo, adoptadas por la AEPD) — ya citadas en `docs/legal/rgpd-eipd-dpo-hosting.md`

---

## Nota final — qué debe validar o completar un DPO real o abogado especializado antes de considerar esta EIPD como definitiva

1. **Verificación técnica real**: esta EIPD asume que las medidas del apartado 4 se implementan; falta una auditoría de seguridad técnica real de la infraestructura en IONOS (pentesting básico, revisión de configuración, cifrado efectivo) que confirme que no son solo intenciones de diseño.
2. **Cifras reales de usuarios**: cuando existan, deben usarse para recalcular si se ha alcanzado el umbral de "gran escala" (orientativamente 5.000-10.000 usuarios activos con datos de salud, según el informe RGPD/hosting), lo que reabriría la necesidad de EIPD obligatoria (ya no solo proactiva) y el umbral de DPO (art. 37.1.c RGPD).
3. **Revisión formal por un DPO o abogado especializado en protección de datos**, que confirme la calificación de probabilidad/impacto de cada riesgo del apartado 3 con su propio criterio profesional, y valide si la conclusión de "riesgo residual medio-bajo, sin consulta previa a la AEPD" es correcta.
4. **Confirmación del producto exacto de IONOS** usado para el despliegue y de que el resto de servicios conectados (base de datos, email transaccional, etc.) están también en la UE, tal y como se señala en `docs/legal/rgpd-eipd-dpo-hosting.md`.
5. **Documentar formalmente** el procedimiento de gestión de brechas de seguridad (plantillas, responsables, plazos) como documento aparte, no solo mencionado aquí.
6. Esta EIPD **no cubre** otros encargados de tratamiento que puedan añadirse en el futuro (proveedor de email, analítica, pasarela de pago, IA) — deberá ampliarse cuando se incorporen.
