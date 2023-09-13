
const AboutUs = () => {
  return (
    <section className="relative ">
      <div className="container mx-auto grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-6 lg:gap-12 pt-10 items-center pb-12 md:pb-0 lg:pb-16">
        <div className="w-[90%] mx-auto lg:w-full overflow-hidden rounded-3xl">
          <iframe
            className="w-full aspect-video"
            
            src="https://www.youtube.com/embed/X95P4GguISQ"
            title="Video de YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="px-4 lg:px-0 flex flex-col gap-4 lg:pl-8">
          <h3 className="text-2xl bg-white text-blue rounded-[10px] px-3 py-2 self-start">Fundación Casa Efus</h3>
          <h2 className="text-4xl text-[#7233C3]">¿Quiénes somos?</h2>
          <p className="text-justify lg:text-lg lg:text-white">Somos una organización sin fines de lucro con iniciativas sociales. Fue creado con la misión de mejorar la calidad de vida de personas vulnerables y bajos recursos del Perú. Desde entonces se vienen desarrollando proyectos en los que gracias al apoyo brindado las comunidades se han vuelto autosostenibles por lo que nuestras expectativas continuan incrementando hacia muchos más lugares del país.</p>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-1/2 lg:h-full bg-purple rounded-bl-[30px] lg:rounded-bl-[72px] -z-10" />
    </section>
  )
}

export default AboutUs