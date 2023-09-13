import SubscriptionForm from "./SubscriptionForm"

const Susbscribe = () => {
  return (
    <section id="donar" className="mb-20">
      <div className="pt-12 text-center text-vibrantPurple">
        <p className="text-3xl lg:leading-3">¿Te gustaría apoyar con alguna donación?</p>
        <h3 className="text-[15vw] md:text-[70px] font-jomhuria">Suscríbete</h3>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-6">
        <SubscriptionForm />

        <img src="/images/gallery-4.jpg" alt="" />
      </div>
    </section>
  )
}

export default Susbscribe