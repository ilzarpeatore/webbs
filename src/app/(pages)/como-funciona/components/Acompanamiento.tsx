import Link from 'next/link'

const canales = ['Notas del coach en cada ejercicio', 'Reporte de dolor con notificación automática según gravedad', 'Feedback de dificultad y comentario libre tras cada sesión', 'Check-ins configurables por tu coach', 'Chequeo diario de preparación (sueño, energía, estrés, agujetas)']

const Acompanamiento = () => {
  return (
    <section className="pb-20 lg:pb-40">
      <div className="container">
        <div className="bg-default-900 rounded-3xl p-7.5 md:p-12.5 lg:p-20">
          <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2 lg:gap-15">
            <div>
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-1.5 text-sm font-medium text-white">Acompañamiento, sin sobreprometer</span>
              <h2 className="mt-3.5 mb-3.5 text-2xl leading-tight font-medium text-white md:text-4xl lg:text-5xl">No hay chat en vivo con tu coach</h2>
              <p className="text-default-400 text-base leading-relaxed md:text-lg">Preferimos decírtelo claro antes de que lo esperes: la comunicación con tu coach es asíncrona, a través de estos canales — no videollamadas ni respuesta inmediata.</p>
              <Link href="/faqs" className="mt-5 inline-block text-sm font-medium text-white underline underline-offset-4 md:text-base">
                Ver todas las preguntas frecuentes
              </Link>
            </div>

            <ul className="space-y-3.5">
              {canales.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-white">
                  <span className="bg-primary-2 mt-1 size-2 shrink-0 rounded-full"></span>
                  <span className="text-base leading-normal md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Acompanamiento
