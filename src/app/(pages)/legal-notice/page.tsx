import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: 'Aviso legal de BeStronger: identificación del titular, propiedad intelectual, exclusión de responsabilidad y legislación aplicable.',
  alternates: { canonical: '/legal-notice' },
}

const Page = () => {
  return (
    <>
      <section className="pt-34 md:pt-42 md:pb-10 lg:pt-50">
        <div className="container">
          <div className="space-y-5 text-center">
            <h3 className="text-4xl font-medium md:text-5xl lg:text-[90px]">Aviso legal</h3>
            <div className="text-sm md:text-lg">Última actualización: 28 ago 2026</div>
          </div>

          <div className="py-12 md:py-18 lg:py-25">
            <div className="mx-auto max-w-4xl">
              <div className="text-default-800 space-y-5 md:space-y-10">
                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">1. Datos identificativos del prestador</h2>
                  <ul className="text-default-600 marker:text-default-600 list-disc space-y-1.5 ps-6">
                    <li>Denominación comercial: BeStronger</li>
                    <li>Titular: Hamza Elouafa Lafjare</li>
                    <li>NIF: 17575419S</li>
                    <li>Domicilio social: Plaza de Paris 1, 2C</li>
                    <li>Datos de inscripción registral: no aplica (persona física de alta como autónomo, sin inscripción en el Registro Mercantil)</li>
                    <li>Correo electrónico: contacto@bestronger.es — Sitio web: bestronger.es</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">2. Objeto y ámbito de aplicación</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Este Aviso Legal regula el acceso, la navegación y el uso del sitio web bestronger.es, de la aplicación móvil (disponible en Android; iOS pendiente de publicación) y del panel de coach (conjuntamente, "la Plataforma"). Usar la Plataforma implica la
                    aceptación de este Aviso Legal.
                  </p>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    Este documento es independiente y complementario de nuestros{' '}
                    <a href="/terms-and-conditions" className="text-default-900 underline underline-offset-4">
                      Términos y Condiciones
                    </a>{' '}
                    (contratación y prestación del servicio) y nuestra{' '}
                    <a href="/privacy-policy" className="text-default-900 underline underline-offset-4">
                      Política de Privacidad
                    </a>{' '}
                    (tratamiento de datos personales), que se aplican con carácter preferente en sus respectivas materias.
                  </p>
                  <p className="text-default-600 mt-3.5 text-base leading-normal md:text-lg md:leading-relaxed">
                    Como visitante puedes consultar la información general del sitio sin registro. El acceso a las funcionalidades del servicio (seguimiento de entrenamiento y nutrición, comunicación con tu coach, panel de coach) requiere registro previo y, en su caso, la
                    contratación del plan correspondiente, conforme a los Términos y Condiciones.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">3. Propiedad intelectual e industrial del sitio web</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    El código fuente, el diseño, la estructura de navegación, las bases de datos, textos, gráficos, logotipos e imágenes de esta web y de la app son titularidad de BeStronger o de terceros que han autorizado su uso, y están protegidos por la normativa
                    española y de la UE en materia de propiedad intelectual e industrial. Queda prohibida su reproducción o explotación sin autorización expresa y por escrito. El régimen de licencia sobre los planes de entrenamiento y nutrición entregados a los clientes se
                    regula en los Términos y Condiciones.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">4. Exclusión de responsabilidad</h2>
                  <ul className="text-default-600 marker:text-default-600 list-disc space-y-2.5 ps-6">
                    <li>
                      <strong>Enlaces a terceros:</strong> no controlamos los sitios enlazados desde nuestra web y no respondemos por sus contenidos; su inclusión no implica respaldo por parte de BeStronger.
                    </li>
                    <li>
                      <strong>Disponibilidad técnica:</strong> procuramos mantener la Plataforma disponible, pero no garantizamos un acceso ininterrumpido o libre de errores, pudiendo interrumpirse por mantenimiento, causas técnicas o fuerza mayor.
                    </li>
                    <li>
                      <strong>Contenido de usuarios:</strong> no respondemos del uso indebido que los usuarios hagan de las funcionalidades de comunicación o comunidad. El régimen aplicable se desarrolla en los Términos y Condiciones.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">5. Legislación aplicable y jurisdicción</h2>
                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Este Aviso Legal se rige por la legislación española. Cuando tengas la condición de consumidor, cualquier controversia se somete a los Juzgados y Tribunales de tu domicilio, en los mismos términos previstos en nuestros Términos y Condiciones.
                  </p>
                </div>

                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">6. Contacto</h2>
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
