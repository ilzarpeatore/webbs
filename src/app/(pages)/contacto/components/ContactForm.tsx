import Image from 'next/image'
import ContactFormFields from './ContactFormFields'

import contactImage from '@/assets/images/locations/contact-image.webp'
import phoneImage from '@/assets/images/workspace/phone-image.png'

const ContactForm = () => {
  return (
    <section className="pt-32.5 md:pt-36 lg:pt-50">
      <div className="container">
        <div className="mb-12 text-center lg:mb-20">
          <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium md:py-1.5">Contacto</span>

          <h1 className="text-default-900 my-2.5 text-4xl font-medium tracking-tight md:text-5xl lg:text-[90px]">Estamos aquí para ayudarte</h1>

          <p className="mx-auto md:w-lg">Si tienes dudas sobre el servicio, quieres empezar tu plan o necesitas soporte, escríbenos y te respondemos lo antes posible.</p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl md:flex">
          <div className="relative order-2! flex min-h-90 items-center justify-center overflow-hidden md:order-1 md:min-h-125 md:w-6/8 lg:w-2/5" style={{ backgroundImage: `url(${contactImage.src})` }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <Image src={phoneImage} alt="Dashboard Image" className="relative z-10 -mb-67 w-full max-w-65 drop-shadow-2xl lg:max-w-84" />
          </div>

          <div className="order-1! px-5 py-7.5 md:order-2 md:p-5 lg:w-3/5 lg:p-12.5">
            <ContactFormFields />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
