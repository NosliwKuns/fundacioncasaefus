'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"
import { useLayoutEffect, useRef, useState, useEffect } from 'react';

const Header = () => {
  const logo = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: logo.current,
  //       scrub: true,
  //       start: "top top",
  //       end: "center",
  //       markers: true,
  //       // pin: true
  //     },
  //   })

  //   tl
  //     // .from(
  //     //   logo.current,
  //     //   { scale: 1.2}
  //     // )
  //     .to(
  //       logo.current,
  //       { duration: 4, scale: 0.4, ease: "ease" }
  //     )
  // },[])
  const [isFixed, setIsFixed] = useState(false);

  const navbar = useRef(null); // Obtén la barra de navegación por su ID
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de desplazamiento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`fixed bg-white w-full z-[99] h-[100px] transition-all duration-700`} ref={navbar}>
      {/* <Image
        ref={logo}
        className="logo m-auto top-0"
        id="logo"
        src={"/images/logo-fundacion-casa-efus.jpg"} 
        alt="Logo Fundacion casa Efus" 
        width={700}
        height={100}  
      /> */}
    </header>
  )
}

export default Header