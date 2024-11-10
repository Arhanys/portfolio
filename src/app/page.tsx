"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Bento from "@/components/Bento";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import MobileHero from "@/components/MobileHero";

export default function Home() {
  return (
    <>
      {/* desktop version */}
      <ReactLenis root>
        <NavBar />
        <Hero />
        <Bento />
        <Skills />
        <Footer />
      </ReactLenis>
      {/* mobile version */}
      <MobileNav />
      <MobileHero />
    </>
  );
}
