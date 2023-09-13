'use client'

import Image from "next/image";
import { useRef, useLayoutEffect, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TripleText from "./TripleText";
import HeroText from "./HeroText";

const HeroSection = () => {

  const background = useRef(null);
  const logo = useRef(null);
  const lineOne = useRef(null);
  const lineTwo = useRef(null);
  const text = useRef<HTMLDivElement | null>(null);
  const whiteLine = useRef(null)
  const [visibility, setVisibility] = useState(false)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: background.current,
        scrub: true,
        start: "top top",
        end: "+=1500px",
        // markers: true,
        pin: true,
      },
    })

    tl
      .from(
        background.current, {
        duration: 20, clipPath: "inset(10% 30% )"
      }, 0)
      .to({}, { duration: 10, y: -500 })


    // Timeline para pinning del texto
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "center center",
        end: "+=1000px",
        // markers: true,
        pin: true,
      },
    });

    textTl.to(text.current, { y: 0, duration: 1 });


    const logoTl = gsap.timeline({
      scrollTrigger: {
        trigger: logo.current,
        scrub: true,
        start: "top top",
        end: "+=250px",
        // markers: true,
      },
    })
    logoTl
      .to(
        logo.current,
        { duration: 10, scale: 0.4, y: -75 }, 0
      )
      .to(lineOne.current, {
        duration: 10,
        height: "+=1000px",
        ease: "power1.out"
      }, 0)
      .to(lineTwo.current, {
        duration: 10,
        height: "+=1000px",
        ease: "power1.out"
      }, 0)

    gsap.from(logo.current, {
      opacity: 0,
      x: -100,
      ease: 'easeInOut',
      delay: 1.8
    })
    gsap.from(background.current, {
      opacity: 0,
      y: 1000,
      delay: 2
    })
    // gsap.from(lineOne.current, {
    //   // opacity: 0,
    //   width: "100%",
    //   delay: 1.2
    // })
    gsap.from(lineTwo.current, {
      opacity: 0,
      x: -1000,
      delay: 1.5
    })

    const bgTl = gsap.timeline();
    bgTl
      .fromTo(lineOne.current,
      { width: "0%", left: 0, right: "auto" },
      { width: "100%", left: "auto", right: 0, delay: 0.2 }
      )
      .to(lineOne.current, {
        left: "auto",
        right: 0,
        // ,
        duration: 0.5,
      })
      .to(lineOne.current, {
        duration: 0.5,
        width: "50%"
      })


  }, [])
  return (
    <section className="relative w-full flex flex-col justify-center">
      <div className="h-[260px]" />
      <div className="absolute h-[50vh] w-[44%] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className={`${visibility ?  "opacity-1" : "opacity-0"} transition-opacity duration-700 delay-[1.5s]`}>
        <TripleText className={`left-[15vw] -translate-x-1/2 text-blue`} text-blue >Ayudar</TripleText>
      </div>
      <div className="h-screen w-ful relative border-2 border-white" ref={background}>
        <Image
          className={`object-cover transition-opacity ${visibility ? "" : "opacity-0"} duration-[2s]`}
          src={'/images/kids.jpg'}
          alt='intro image'
          fill={true}
          priority={true}
          onLoadingComplete={() => setVisibility(true)}
        />
        {visibility && <div className="bg-black/40 absolute h-screen w-full z-10" />}
      </div>
      <div className={`${visibility ?  "opacity-1" : "opacity-0"} transition-opacity duration-700 delay-1000`}>
        <TripleText className="right-[15vw] translate-x-1/2 text-purple">Donar</TripleText>
      </div>
      <div className="fixed h-[250px] top-0 w-screen z-[99] bg-transparent mix-blend-multiply" ref={logo}>
        <Image
          className="object-contain m-auto opacity-0 mix-blend-multiply"
          id="logo"
          src={"/images/logo-fundacion-casa-efus.jpg"}
          alt="Logo Fundacion casa Efus"
          fill={true}
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <HeroText ref={text} />
      <span
        ref={lineOne}
        // data-scroll 
        // data-scroll-speed="1"
        className={`absolute h-screen w-[20vw] bg-[#C4B0F5] top-[32vh] right-0 -z-20 ${visibility ? "" : "opacity-0"}`} />
      <span
        ref={lineTwo}
        // data-scroll 
        // data-scroll-speed="2" 
        // data-scroll-delay="0.2"
        className={`absolute h-screen w-1/2 bg-[#84C3D1] top-[32vh] left-0 -z-20 ${visibility ? "" : "opacity-0"}`} />
    </section>
  )
}

export default HeroSection