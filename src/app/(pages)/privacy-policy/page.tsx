import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo trata BeStronger tus datos personales, incluidos los de Apple Health y Health Connect: qué recogemos, para qué, con quién los compartimos y tus derechos.',
  alternates: { canonical: '/privacy-policy' },
}

const Page = () => {
  return (
    <>
      <section className="pt-34 md:pt-42 md:pb-10 lg:pt-50">
        <div className="container">
          <div className="space-y-5 text-center">
            <h3 className="text-4xl font-medium md:text-5xl lg:text-[90px]">Política de privacidad</h3>
            <div className="text-sm md:text-lg">Última actualización: 28 ago 2026</div>
          </div>

          <div className="py-12 md:py-18 lg:py-25">
            <div className="mx-auto max-w-4xl">
              <div className="text-default-800 space-y-5 md:space-y-10">
                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Responsable del tratamiento</h2>
                  <ul className="text-default-600 marker:text-default-600 list-disc space-y-1.5 ps-6">
                    <li>Denominación comercial: BeStronger</li>
                    <li>Titular: Hamza Elouafa Lafjare</li>
                    <li>NIF: 17575419S</li>
                    <li>Domicilio: Plaza de Paris 1, 2C, 28943 Fuenlabrada, Madrid, España</li>
                    <li>Correo de contacto para asuntos de privacidad: contacto@bestronger.es</li>
                  </ul>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    Esta política describe cómo BeStronger recoge, utiliza, conserva y protege los datos personales de sus usuarios, en cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD). Parte de los datos tratados son{' '}
                    <strong>datos relativos a la salud</strong> (categoría especial de datos del artículo 9 RGPD), a los que se presta especial atención a lo largo de este documento.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Qué información recogemos</h2>
                  <ul className="text-default-600 marker:text-default-600 list-disc space-y-2.5 ps-6 lg:space-y-4">
                    <li>Datos de cuenta: nombre, email y contraseña (almacenada cifrada)</li>
                    <li>Datos personales y de salud del cuestionario inicial: sexo, edad, altura, peso, y respuestas del cuestionario PAR-Q sobre tu condición física y de salud</li>
                    <li>Actividad de entrenamiento: series, cargas, repeticiones, RIR/RPE, dolor reportado (zona, tipo e intensidad) y feedback</li>
                    <li>Actividad de nutrición: comidas registradas, calorías y macros</li>
                    <li>Hábitos, rachas y chequeos diarios de preparación (sueño, energía, estrés, agujetas)</li>
                    <li>
                      Datos de Apple Health/HealthKit y Health Connect: pasos, frecuencia cardiaca y sueño, solo si conectas tu cuenta — ver la sección dedicada más abajo
                    </li>
                    <li>Datos técnicos y de uso de la app para su correcto funcionamiento</li>
                    <li>Contenido que publicas voluntariamente en la comunidad (publicaciones, comentarios, "me gusta")</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Para qué usamos tus datos</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">Usamos esta información para que tu coach pueda diseñar y ajustar tu plan de entrenamiento y nutrición, gestionar tu suscripción y facturación, hacer funcionar la comunidad y el soporte, cumplir obligaciones legales y mantener la app segura. No recogemos datos para fines ajenos al servicio.</p>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    El tratamiento de tus datos de salud (cuestionario inicial y datos de Apple Health/Health Connect) se basa en tu <strong>consentimiento explícito</strong>, ya que se trata de una categoría especial de datos (artículo 9.2.a RGPD). Puedes retirar ese
                    consentimiento en cualquier momento, tal y como se explica más abajo.
                  </p>
                </div>

                <div className="border-primary-2/30 bg-primary-2/5 rounded-2xl border p-5 md:p-7.5">
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">Datos de Apple Health/HealthKit y Health Connect</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Si lo autorizas, la app lee de Apple Health/HealthKit (iOS) o Health Connect (Android) exclusivamente <strong>pasos, frecuencia cardiaca y sueño</strong>, con la única finalidad de dar contexto adicional a tu coach a la hora de ajustar tu plan — nunca con
                    fines comerciales o publicitarios.
                  </p>
                  <ul className="text-default-600 marker:text-default-600 mt-3.5 list-disc space-y-2 ps-6">
                    <li>No accedemos a ningún dato de Apple Health o Health Connect hasta que tú concedes expresamente el permiso desde el propio sistema operativo. Si no lo concedes, la app funciona igual con lo que introduzcas manualmente.</li>
                    <li>
                      Puedes revocar el permiso cuando quieras desde los ajustes de tu dispositivo (Ajustes → Privacidad y seguridad → Salud en iOS; la app Health Connect en Android), fuera de BeStronger. La revocación detiene la lectura de nuevos datos desde ese momento.
                    </li>
                    <li>Solo leemos estos datos: nunca escribimos, modificamos ni eliminamos nada en Apple Health o Health Connect.</li>
                    <li>
                      <strong>No usamos los datos de Apple Health/HealthKit ni de Health Connect para publicidad, marketing ni analítica de terceros, ni los vendemos, cedemos o transferimos a plataformas publicitarias, brokers de datos o revendedores de información</strong> —
                      ni nosotros ni terceros. Se usan exclusivamente para el fin descrito en este apartado.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Con quién compartimos tu información</h2>
                  <p className="text-default-600 text-base leading-relaxed md:text-lg">
                    Tu coach accede a tus datos de entrenamiento, nutrición y salud para diseñar y ajustar tu plan — es parte esencial del servicio, no una cesión a terceros.
                  </p>
                  <p className="text-default-600 mt-3.5 text-base leading-relaxed font-medium md:text-lg">
                    No vendemos, alquilamos ni cedemos tus datos personales a terceras empresas con fines comerciales o publicitarios. No compartimos tus datos con anunciantes, redes publicitarias ni brokers de datos, y no existen integraciones con otras apps de terceros
                    que accedan a tus datos personales.
                  </p>
                  <p className="text-default-600 mt-3.5 text-base leading-relaxed md:text-lg">
                    Los únicos terceros que pueden llegar a procesar tus datos son los proveedores de infraestructura técnica estrictamente necesarios para operar el servicio (por ejemplo, alojamiento en la nube), que actúan como encargados de tratamiento bajo contrato,
                    siguiendo nuestras instrucciones y sin usar tus datos para fines propios. También podemos compartir información cuando la ley lo exija, o para proteger la seguridad de los usuarios y de la plataforma.
                  </p>
                  <ol className="text-default-600 marker:text-default-600 mt-3.5 list-decimal space-y-2.5 ps-6 marker:font-semibold">
                    <li>Con tu coach, para diseñar y ajustar tu plan</li>
                    <li>Con proveedores de alojamiento e infraestructura técnica, como encargados de tratamiento</li>
                    <li>Para cumplir con obligaciones legales</li>
                    <li>Para proteger la seguridad de los usuarios y de la plataforma</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Cuánto tiempo conservamos tus datos</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Conservamos tus datos mientras mantengas una cuenta activa. Tras la baja, los conservamos bloqueados durante los plazos exigidos por ley (por ejemplo, obligaciones fiscales) y los eliminamos de forma definitiva una vez transcurridos.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Cómo eliminar tu cuenta y tus datos</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Puedes eliminar tu cuenta y los datos asociados directamente desde la app, en los ajustes de tu perfil. Al confirmar la eliminación, tu cuenta y tus datos personales (incluidos los del cuestionario de salud y los sincronizados desde Apple Health/Health
                    Connect) se borran de forma definitiva, salvo la información que estemos obligados a conservar por ley durante el plazo legal correspondiente (por ejemplo, facturas por obligaciones fiscales).
                  </p>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    Si prefieres solicitarlo por otra vía, o tienes cualquier problema para hacerlo desde la app, también puedes pedirnos la eliminación de tu cuenta escribiendo a{' '}
                    <a href="mailto:contacto@bestronger.es" className="text-default-900 underline underline-offset-4">
                      contacto@bestronger.es
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Tus derechos</h2>
                  <p className="text-default-600 text-base leading-relaxed md:text-lg">Puedes ejercer en cualquier momento, de forma gratuita, tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición, y retirar tu consentimiento (incluido el del cuestionario de salud y la sincronización con Apple Health/Health Connect) sin que afecte a la licitud del tratamiento previo.</p>
                  <p className="text-default-600 mt-3.5 text-base leading-relaxed md:text-lg">
                    Escríbenos a{' '}
                    <a href="mailto:contacto@bestronger.es" className="text-default-900 underline underline-offset-4">
                      contacto@bestronger.es
                    </a>{' '}
                    indicando el derecho que quieres ejercer. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es) si consideras que no hemos tratado tus datos correctamente.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Seguridad</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos, incluidos los de salud, frente a accesos no autorizados, pérdida o divulgación indebida — entre ellas, cifrado de contraseñas y acceso del coach limitado únicamente a los
                    datos de sus propios clientes.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Menores de edad</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">El servicio está dirigido a mayores de 18 años. No recabamos de forma consciente datos de menores; si detectamos un registro de un menor, eliminaremos sus datos.</p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Cambios en esta política</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Podemos actualizar esta política ante cambios legales o del servicio. Te avisaremos de cualquier cambio sustancial por la app o por email, y si afecta a un tratamiento basado en consentimiento, te pediremos ese consentimiento de nuevo cuando la ley lo
                    exija.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Contacto</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    BeStronger — {' '}
                    <a href="mailto:contacto@bestronger.es" className="text-default-900 underline underline-offset-4">
                      contacto@bestronger.es
                    </a>{' '}
                    — bestronger.es
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
