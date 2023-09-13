'use client'

import { forwardRef, ForwardedRef, useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroText = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {

  const paragraph = useRef(null);
  const box = useRef<HTMLDivElement | null>(null);
  const button = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (ref && 'current' in ref && ref.current && box.current) {
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          scrub: true,
          start: "center center",
          end: "+=1000px",
          markers: true,
          // pin: paragraph.current,
        },
      });

      const screenWidth = window.innerWidth;
      const desplazamientoPorcentaje = screenWidth < 768 ? 55 : screenWidth >= 768 && screenWidth < 1440 ? 25 : 13;
      textTl
        .to(paragraph.current, {
          duration: 10,
          xPercent: -((screenWidth * desplazamientoPorcentaje) / 100),
        },0)
        .to(box.current, {
          opacity: 0,
          delay: 3
        }, 1)
        .from(button.current, {
          opacity: 0,
          delay: 3.2
        }, 2)

    }
  }, [])
  return (
    <div ref={ref} className="relative w-full bg- flex flex-col justify-center items-center">
      <h1
        className="z-10 text-center font-jomhuria text-[20vw] xl:text-[250px] text-white leading-[12vw] xl:leading-[140px]"
      >
        Ayudar al que
        <br/ >
        necesita
      </h1>
      <div ref={box} className="w-[60vw] md:w-[52vw] lg:w-[45vw] xl:w-[640px] text-[4.5vw] md:text-[4vw] xl:text-[50px] bg-white/50 px-6 text-white overflow-hidden">
        <h3 ref={paragraph} className="whitespace-nowrap">No solo es parte del deber, sino de la felicidad</h3>
      </div>
      <a href="#donar">
        <button ref={button} className="absolute -bottom-[60px] md:-bottom-[40px] lg:bottom-0 bg-purple px-8 py-3 text-white text-2xl md:text-3xl lg:text-4xl rounded-2xl z-10">
          Donar
        </button>
      </a>
    </div>
  );
});

export default HeroText;
