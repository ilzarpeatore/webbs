import SectionBadge from '@/components/shared/SectionBadge'

type StepType = {
  number: string
  title: string
  description: string
}

const steps: StepType[] = [
  {
    number: '01',
    title: 'Regístrate',
    description: 'Nombre, email y contraseña. Si tienes un código de invitación de tu coach, quedas marcado como cliente 1:1 automáticamente.',
  },
  {
    number: '02',
    title: 'Cuestionario inicial',
    description: 'Respondes tus datos personales, y calculamos tu metabolismo basal y un primer plan de calorías y macros al momento.',
  },
  {
    number: '03',
    title: 'Tu coach diseña tu plan',
    description: 'Si eres cliente 1:1, tu coach te asigna tu entrenamiento y tus comidas día a día. Si no, accedes a un catálogo general de calidad.',
  },
  {
    number: '04',
    title: 'Entrena, come y registra',
    description: 'Cada serie, cada comida y cada hábito se registran al momento, sin que tengas que contárselo a nadie.',
  },
  {
    number: '05',
    title: 'Tu coach revisa y ajusta',
    description: 'Con tus datos reales — no con lo que recuerdes — tu coach aprueba ajustes de carga, cambia comidas asignadas y responde a lo que reportas.',
  },
]

const Pasos = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="mb-12.5 lg:max-w-2xl">
          <SectionBadge className="mb-3.5">El proceso completo</SectionBadge>
          <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:text-5xl">5 pasos, sin fricción</h2>
        </div>

        <div className="space-y-3.5">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3.5 rounded-2xl bg-white p-5 md:flex-row md:items-center md:gap-7.5 md:p-7.5">
              <span className="text-default-200 text-3xl font-black md:text-5xl">{step.number}</span>
              <div>
                <h3 className="text-default-900 mb-1.5 text-xl font-medium md:text-2xl">{step.title}</h3>
                <p className="text-default-600 text-base leading-normal md:text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pasos
