'use client'

import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
const Activities = () => {

  const carouselRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const resizeHandler = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const slides = carousel.querySelectorAll('.carousel-slide');
      const screenWidth = window.innerWidth;

      // Calcula el valor de xPercent proporcional
      const xPercent = ((10 / slides.length) * (100 / screenWidth)) / slides.length;

      // Configura la animación
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: carousel,
          scrub: true,
          start: 'center center',
          end: `+=${slides.length * 100}px`, // Ajusta esto según tus necesidades
          markers: true,
          pin: true,
        },
      });

      // Añade animaciones para cada imagen
      
        tl.to(carousel, {
          xPercent: -100, // Aplica el valor calculado
        });
      
    };

    // Ejecuta el manejador al cargar la página y al cambiar el tamaño de la ventana
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    // Configura el carrusel
  }, []);

  return (
    <section className="bg- bg-purple mt-20 py-20">
      <div className="pt-12 text-center text-vibrantPurple">
        <p className="text-3xl leading-3">Mira nuestras</p>
        <h3 className="text-[15vw] md:text-[70px] font-jomhuria">Actividades</h3>
      </div>


      <div className="w-full overflow-hidden">
        <div ref={carouselRef} className="flex gap-4 ">
          <div className="carousel-slide aspect-square min-w-[65vw] md:min-w-[35vw] lg:min-w-[10]">
            <img className="w-[1000px] aspect-square object-cover" src="/images/gallery-1.jpg" />
          </div>
          <div className="carousel-slide aspect-square min-w-[65vw] md:min-w-[35vw] lg:min-w-[10]">
            <img className="w-[1000px] aspect-square object-cover" src="/images/gallery-2.jpg" />
          </div>
          <div className="carousel-slide aspect-square min-w-[65vw] md:min-w-[35vw] lg:min-w-[10]">
            <img className="w-[1000px] aspect-square object-cover" src="/images/gallery-3.jpg" />
          </div>
          <div className="carousel-slide aspect-square min-w-[65vw] md:min-w-[35vw] lg:min-w-[10]">
            <img className="w-[1000px] aspect-square object-cover" src="/images/gallery-4.jpg" />
          </div>
          <div className="carousel-slide aspect-square min-w-[65vw] md:min-w-[35vw] lg:min-w-[10]">
            <img className="w-[1000px] aspect-square object-cover" src="/images/gallery-5.jpg" />
          </div>
          <div className="carousel-slide aspect-square min-w-[65vw] md:min-w-[35vw] lg:min-w-[10]">
            <img className="w-[1000px] aspect-square object-cover" src="/images/gallery-6.jpg" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Activities