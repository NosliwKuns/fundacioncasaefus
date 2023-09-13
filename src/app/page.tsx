'use client'

import { AboutUs, Activities, Header, HeroSection, HowToHelp, Susbscribe, WhatWeDo } from "@/components"
import { useEffect, Suspense } from "react"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<div className="h-screen w-screen bg-red-500"/>}>
      <main>
        <Header />
        <HeroSection />
        <div className="relative h-[165vh] md:h-[125vh] lg:h-[130vh] w-full -z-10">
          <div className="absolute w-1/2 h-full bg-purple top-0 right-0 -z-10" />
        </div>
        <AboutUs />
        <WhatWeDo />
        <HowToHelp />
        <Activities />
        <Susbscribe />
      </main>
    </Suspense>
  )
}
