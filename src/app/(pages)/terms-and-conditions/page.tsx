import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description: 'Términos y condiciones del servicio de BeStronger: registro, planes, desistimiento, conducta en la comunidad y protección de datos.',
  alternates: { canonical: '/terms-and-conditions' },
}

const Page = () => {
  return (
    <>
      <section className="pt-34 md:pt-42 md:pb-10 lg:pt-50">
        <div className="container">
          <div className="space-y-5 text-center">
            <h3 className="text-4xl font-medium md:text-5xl lg:text-[90px]">Términos y condiciones</h3>
            <div className="text-sm md:text-lg">Última actualización: 28 ago 2026</div>
          </div>

          <div className="py-12 md:py-18 lg:py-25">
            <div className="mx-auto max-w-4xl">
              <div className="text-default-800 space-y-5 md:space-y-10">
                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">1. Identificación del prestador</h2>
                  <ul className="text-default-600 marker:text-default-600 list-disc space-y-1.5 ps-6">
                    <li>Denominación comercial: BeStronger</li>
                    <li>Titular: Hamza Elouafa Lafjare</li>
                    <li>NIF: 17575419S</li>
                    <li>Domicilio social: Plaza de Paris 1, 2C, 28943 Fuenlabrada, Madrid, España</li>
                    <li>Dominio: bestronger.es — Contacto: contacto@bestronger.es</li>
                  </ul>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    Estos Términos y Condiciones regulan el acceso y uso del sitio web bestronger.es, de la aplicación móvil BeStronger y del panel de coach asociado (en conjunto, "el Servicio"). El uso del Servicio implica la aceptación plena de estos Términos.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">2. Objeto y descripción del servicio</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    BeStronger es un servicio online de entrenamiento y nutrición personalizados, con la intervención de un coach humano real, entregado a través de una app móvil (disponible en Android; la versión iOS está en fase de lanzamiento) y un panel de coach de
                    uso interno. Según la modalidad contratada, accedes a un plan 1:1 diseñado por tu coach o a un catálogo general. El Servicio incluye además una comunidad social interna y un bot de soporte con respuestas predefinidas, que no sustituye el criterio de tu
                    coach ni de ningún profesional.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">3. Registro y condiciones de acceso</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    El Servicio está dirigido exclusivamente a <strong>personas mayores de 18 años</strong>. Al registrarte declaras tener esa edad. El registro requiere nombre, email y contraseña, y opcionalmente un código de invitación. Tras registrarte, completas un
                    cuestionario inicial de 37 preguntas (datos personales, PAR-Q de salud, entrenamiento y nutrición) imprescindible para que tu coach diseñe tu plan.
                  </p>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    Te comprometes a facilitar información veraz y mantenerla actualizada (por ejemplo, ante una lesión o un cambio médico relevante). No verificamos de forma independiente la exactitud médica de tus respuestas. Tu cuenta es personal e intransferible; eres
                    responsable de custodiar tus credenciales.
                  </p>
                </div>

                <div className="border-primary-1/30 bg-primary-1/5 rounded-2xl border p-5 md:p-7.5">
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">4. Naturaleza del servicio: advertencia sanitaria</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    <strong>BeStronger no es un servicio médico ni de diagnóstico</strong>, y tu coach no es un profesional médico salvo que se indique lo contrario. No sustituye la valoración de un profesional sanitario colegiado.
                  </p>
                  <ul className="text-default-600 marker:text-default-600 mt-3.5 list-disc space-y-2 ps-6">
                    <li>Consulta a un profesional sanitario antes de iniciar el programa si tienes cualquier condición médica preexistente, lesión, embarazo u otra circunstancia de salud relevante.</li>
                    <li>Es tu responsabilidad comunicar cualquier condición de salud, dolor o contraindicación, tanto en el registro como durante el seguimiento (por ejemplo, con el reporte de dolor).</li>
                    <li>Asumes voluntariamente el riesgo inherente de lesión de toda actividad física.</li>
                    <li>Si sientes dolor, malestar o mareo, interrumpe la actividad, consulta a un profesional sanitario e informa a tu coach.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">5. Planes, precios y facturación</h2>
                  <ul className="text-default-600 marker:text-default-600 list-disc space-y-1.5 ps-6">
                    <li>Mensual: 95 €/mes, sin permanencia</li>
                    <li>Trimestral: 240 € cada 3 meses</li>
                    <li>Semestral: 450 € cada 6 meses</li>
                    <li>Anual: 800 € cada 12 meses</li>
                  </ul>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    La contratación y el cobro se realizan <strong>exclusivamente en bestronger.es</strong>, nunca dentro de la app, por las políticas de Apple y Google sobre compras dentro de la app. Una vez confirmado el pago, tu acceso se activa automáticamente. Podemos
                    modificar precios para nuevas contrataciones o renovaciones futuras, avisando con antelación razonable si ya tienes una suscripción activa.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">6. Derecho de desistimiento</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Como consumidor, dispones de <strong>14 días naturales</strong> desde la contratación para desistir sin justificación ni penalización, escribiendo a contacto@bestronger.es indicando tu nombre, plan y fecha de contratación.
                  </p>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    Si solicitas expresamente el inicio del servicio durante ese plazo (por ejemplo, empezando a usar tu plan desde el primer día) y prestas tu consentimiento informado a ello, el derecho de desistimiento se pierde si el servicio se ejecuta por completo
                    dentro de los 14 días, o se reduce proporcionalmente a la parte ya disfrutada si desistes antes de que termine ese plazo, reembolsándose el resto por el mismo medio de pago utilizado.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">7. Cancelación y renovación</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Salvo el plan mensual, las suscripciones se renuevan automáticamente por el mismo periodo y al precio vigente, salvo que las canceles antes desde tu cuenta en bestronger.es o escribiendo a contacto@bestronger.es. La cancelación surte efecto al terminar
                    el periodo ya abonado, sin generar cobros adicionales ni dar derecho, por sí sola, a devolución del periodo en curso. Si un cobro de renovación no puede completarse, podemos suspender tu acceso hasta regularizarlo.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">8. Tu conducta y la comunidad</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">Te comprometes a usar el Servicio conforme a la ley y la buena fe. En la comunidad social, visible para otros usuarios, no debes:</p>
                  <ul className="text-default-600 marker:text-default-600 mt-3.5 list-disc space-y-2 ps-6">
                    <li>Publicar contenido ilícito, difamatorio, discriminatorio, violento o sexualmente explícito, ni que incite al odio, acoso, trastornos de conducta alimentaria, dopaje o prácticas de entrenamiento peligrosas</li>
                    <li>Suplantar identidades, ni publicar datos personales de terceros sin su consentimiento, ni hacer spam</li>
                    <li>Infringir derechos de propiedad intelectual de terceros</li>
                  </ul>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    Eres el único responsable de lo que publicas. Podemos moderar, ocultar o eliminar contenido, y suspender o cancelar tu cuenta en caso de incumplimiento grave o reiterado. Tampoco debes realizar ingeniería inversa, scraping ni intentar acceder a datos o
                    funciones para las que no tengas autorización.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">9. Propiedad intelectual</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Los planes de entrenamiento y nutrición, recetas, textos, el blog, la marca BeStronger y el diseño de la app y la web son propiedad de BeStronger o de terceros que han autorizado su uso. Te concedemos una licencia personal, no exclusiva e intransferible
                    para tu uso personal mientras dure tu suscripción; queda prohibida su reproducción o distribución a terceros sin autorización. El contenido que publicas en la comunidad sigue siendo tuyo, pero nos concedes una licencia para mostrarlo dentro de la app.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">10. Límites de responsabilidad</h2>
                  <ul className="text-default-600 marker:text-default-600 list-disc space-y-2.5 ps-6">
                    <li>No garantizamos resultados concretos de entrenamiento o nutrición: dependen de tu adherencia, la veracidad de tus datos y tu fisiología individual.</li>
                    <li>No garantizamos un acceso ininterrumpido o libre de errores al Servicio.</li>
                    <li>No respondemos de lesiones derivadas de una ejecución incorrecta de los ejercicios, del incumplimiento de las advertencias sanitarias, o de omitir información de salud relevante.</li>
                    <li>Los datos de Apple Health/HealthKit y Health Connect proceden de dispositivos y apps de terceros: no controlamos ni garantizamos su exactitud, y su uso por el coach no sustituye lo que tú mismo reportes.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">11. Protección de datos</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    El tratamiento de tus datos personales, incluidos los de salud, se rige por nuestra{' '}
                    <a href="/privacy-policy" className="text-default-900 underline underline-offset-4">
                      Política de Privacidad
                    </a>
                    , que forma parte de estos Términos.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">12. Modificaciones</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Podemos modificar estos Términos ante cambios legales, técnicos o del Servicio. Te avisaremos de cualquier cambio sustancial por la app o por email; si sigues usando el Servicio tras el cambio, se entiende aceptado, sin perjuicio de tu derecho a cancelar
                    tu suscripción si no estás de acuerdo.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">13. Legislación aplicable</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Estos Términos se rigen por la legislación española. Como consumidor, cualquier controversia se somete a los Juzgados y Tribunales de tu domicilio, sin perjuicio de tu derecho a acudir a la plataforma europea de resolución de litigios en línea en{' '}
                    <a href="https://ec.europa.eu/consumers/odr" target="_blank" className="text-default-900 underline underline-offset-4">
                      ec.europa.eu/consumers/odr
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">14. Contacto</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    BeStronger —{' '}
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
