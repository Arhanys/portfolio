"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Bento from "@/components/Bento";
import Skills from "@/components/Skills";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <NavBar />
        <Hero />
        <Bento />
        <Skills />
        <Footer />
      </ReactLenis>
    </>
  );
}
