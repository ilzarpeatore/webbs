import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de privacidad',
}

const Page = () => {
  return (
    <>
      <section className="pt-34 md:pt-42 md:pb-10 lg:pt-50">
        <div className="container">
          <div className="space-y-5 text-center">
            <h3 className="text-4xl font-medium md:text-5xl lg:text-[90px]">Política de privacidad</h3>
            <div className="text-sm md:text-lg">Última actualización: 27 ago 2026</div>
          </div>

          <div className="py-12 md:py-18 lg:py-25">
            <div className="mx-auto max-w-4xl">
              <div className="text-default-800 space-y-5 md:space-y-10">
                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Qué información recogemos</h2>

                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    BeStronger recoge la información necesaria para ofrecerte un servicio de entrenamiento y nutrición personalizado, con seguimiento por parte de tu coach. Esto incluye los datos que nos das al registrarte y los datos que se generan al usar la app.
                  </p>
                </div>

                <ul className="text-default-600 marker:text-default-600 list-disc space-y-2.5 ps-6 lg:space-y-4">
                  <li>Datos de cuenta: nombre, email y contraseña</li>

                  <li>Datos personales y de salud del cuestionario inicial: sexo, edad, altura, peso, y respuestas relacionadas con tu condición física</li>

                  <li>Actividad de entrenamiento: series, cargas, repeticiones, RIR/RPE, dolor reportado y feedback</li>

                  <li>Actividad de nutrición: comidas registradas, calorías y macros</li>

                  <li>Hábitos, rachas y chequeos diarios de preparación</li>

                  <li>Datos técnicos y de uso de la app para su correcto funcionamiento</li>
                </ul>

                <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                  Usamos esta información para que tu coach pueda diseñar y ajustar tu plan, y para que la app funcione correctamente. No recogemos datos para fines ajenos al servicio.
                </p>

                <div>
                  <h3 className="text-default-900 mb-2.5 text-xl font-semibold md:text-2xl lg:text-4xl">Con quién compartimos tu información</h3>

                  <p className="text-default-600 text-base leading-relaxed md:text-lg">
                    Tu coach accede a tus datos de entrenamiento, nutrición y salud para diseñar y ajustar tu plan — es parte esencial del servicio. Compartimos datos con proveedores de confianza que nos ayudan con el alojamiento y la infraestructura técnica, siempre bajo
                    acuerdos de confidencialidad. También podemos compartir información cuando la ley lo exija, o para proteger la seguridad de nuestros usuarios y de la plataforma.
                  </p>
                </div>

                <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">No vendemos tu información personal a terceros bajo ninguna circunstancia.</p>

                <ol className="text-default-600 marker:text-default-600 list-decimal space-y-4 ps-6 marker:font-semibold">
                  <li>Con tu coach, para diseñar y ajustar tu plan</li>

                  <li>Con proveedores de alojamiento e infraestructura técnica</li>

                  <li>Para cumplir con obligaciones legales</li>

                  <li>Para proteger la seguridad de los usuarios y de la plataforma</li>
                </ol>

                <div>
                  <h3 className="text-default-900 mb-2.5 text-xl font-semibold md:text-2xl lg:text-4xl">Tus derechos</h3>
                  <p className="text-default-600 text-base leading-relaxed md:text-lg">
                    Puedes solicitar acceder, rectificar o eliminar tus datos personales escribiendo a{' '}
                    <a href="mailto:contacto@bestronger.es" className="text-default-900 underline underline-offset-4">
                      contacto@bestronger.es
                    </a>
                    .
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
