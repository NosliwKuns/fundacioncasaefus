
const HowToHelp = () => {
  return (
    <section>
      <div className="pt-12 text-center text-vibrantPurple">
        <p className="text-3xl leading-3">Anímate sobre</p>
        <h3 className="text-[15vw] md:text-[70px] font-jomhuria">Cómo ayudar</h3>
      </div>

      <div className="container mx-auto pl-6 pr-10 grid lg:grid-cols-2 gap-12 text-justify text-white">
        <div className="relative bg-blue p-6 flex flex-col gap-4 items-center rounded-3xl">
          <figure>
            <img className="mx-auto mb-4" src="/images/apadrina.png" alt="Icono apadrina" />
            <figcaption className="text-center text-vibrantPurple font-semibold text-3xl">Apadrina</figcaption>
          </figure>

          <p>Puedes colaborar apadrinando a uno(a) o varios (as) niños (as) dentro de una comunidad. Ayudarás a que no solo puedan pasar un gran día si no que aportarás un granito de esperanza para el cambio que esperan.</p>
          <div className="absolute top-4 left-4 w-full h-full bg-purple rounded-3xl -z-10" />
        </div>

        <div className="relative bg-blue p-6 flex flex-col gap-4 items-center rounded-3xl">
          <figure>
            <img className="mx-auto mb-4" src="images/dona.png" alt="Icono dona" />
            <figcaption className="text-center text-vibrantPurple font-semibold text-3xl">Dona</figcaption>
          </figure>

          <p>Colabora con víveres o útiles escolares o que aporten a su aprendizaje y desarrollo. También puedes colaborar con objetos que puedan usar como distracción ya sea para realizar algún deporte o jugar.</p>
          <div className="absolute top-4 left-4 w-full h-full bg-purple rounded-3xl -z-10" />
        </div>

        <div className="relative bg-blue p-6 flex flex-col gap-4 items-center rounded-3xl">
          <figure>
            <img className="mx-auto mb-4" src="images/alianzas.png" alt="Icono alianzas empresariales" />
            <figcaption className="text-center text-vibrantPurple font-semibold text-3xl">Alianzas Empresariales</figcaption>
          </figure>

          <p>Es importante resaltar que la sociedad pone con alto valor a toda organización que aporta un bien al prójimo que lo necesite, por ende buscamos asociarnos con entidades comprometidas y responsables que deseen llevar más oportunidades de cambio para los lugares de nuestro país.</p>
          <div className="absolute top-4 left-4 w-full h-full bg-purple rounded-3xl -z-10" />
        </div>

        <div className="relative bg-blue p-6 flex flex-col gap-4 items-center rounded-3xl">
          <figure>
            <img className="mx-auto mb-4" src="images/tarjetas.png" alt="Icono tarjetas de regalo" />
            <figcaption className="text-center text-vibrantPurple font-semibold text-3xl">Tarjetas de regalo</figcaption>
          </figure>

          <p>Puedes adquirir tarjetas personalizadas recargables con montos desde s/50.00 a más las cuales serán entregadas a algún comedor popular para la compra de víveres o utilensilios que necesiten. Tambien puedes decidir entregarselo a alguna familia en especial (preguntanos por alguna y te contaremos sus historias, mostraremos fotos para que hagas tu elección).</p>
          <div className="absolute top-4 left-4 w-full h-full bg-purple rounded-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}

export default HowToHelp