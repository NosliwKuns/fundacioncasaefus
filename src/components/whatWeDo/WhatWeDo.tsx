
const WhatWeDo = () => {
  const whiteSquare = ""
  return (
    <section>
      <div className="pt-12 text-center text-vibrantPurple">
        <p className="text-3xl leading-3">Conoce</p>
        <h3 className="text-[15vw] md:text-[70px] font-jomhuria">Lo que hacemos</h3>
      </div>

      <div className="relative bg-blue">
        <div className="container mx-auto relative grid lg:grid-cols-2 gap-12 px-6 py-12 text-justify text-white z-20">
          <div className="grid gap-4 items-center grid-cols-[auto_1fr]">
            <span className="font-jomhuria text-9xl bg-white rounded-2xl p-2 w-20 flex justify-center text-purple">1</span>
            <p>Ayudar a través de donaciones (alimentos, ropa, depósitos), que serán distribuidos a equipos voluntarios que desean hacer su labor visitando comunidades de bajos recursos.</p>
          </div>
          <div className="grid gap-4 items-center grid-cols-[auto_1fr]">
            <span className="font-jomhuria text-9xl bg-white rounded-2xl p-2 w-20 flex justify-center text-purple">2</span>
            <p className="lg:text-gray-800">Ayudaremos a personas con casos especiales en salud, buscando aliados en entidades públicas y privadas dando así el apoyo necesario para que salga con éxito su caso.</p>
          </div>
          <div className="grid gap-4 items-center grid-cols-[auto_1fr]">
            <span className="font-jomhuria text-9xl bg-white rounded-2xl p-2 w-20 flex justify-center text-purple">3</span>
            <p>Crear comedores comunales que permitan a grupos de 40 a 100 personas puedan tener un lugar para desayunar, almorzar y cenar. Estos comedores se autosostienen con un aporte voluntario y donaciones.</p>
          </div>
          <div className="grid gap-4 items-center grid-cols-[auto_1fr]">
            <span className="font-jomhuria text-9xl bg-white rounded-2xl p-2 w-20 flex justify-center text-purple">4</span>
            <p className="lg:text-gray-800">Crear fuentes de ingresos en pequeñas comunidades para que puedan tener un emprendimiento local autosostenible. Desarrollando negocios en lo cual tendrán un aporte semilla y después de un periodo de capacitación generarán su propio auto sostenimiento.</p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-1/2 hidden lg:block -translate-y-1/2 h-[85%] rounded-l-[72px] bg-white" />
      </div>
    </section>
  )
}

export default WhatWeDo