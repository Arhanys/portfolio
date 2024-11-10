"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Bento() {
  /* Create a state for the timeline */
  const [tl, setTl] = useState<any | null>(null);

  /* Animation */
  useGSAP(() => {
    const items: Record<string, HTMLElement | null> = {};

    for (let i = 1; i <= 7; i++) {
      items[`item${i}`] = document.querySelector(`[data-index="${i}"]`);
    }

    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    setTl(tl);

    tl.from(items.item5, { y: 1000 }, 1);
    tl.from(items.item2, { x: -2000 }, 1.8);
    tl.from(items.item3, { y: 1200 }, 1.7);
    tl.from(items.item7, { x: -2000 }, 2);
    tl.from(items.item4, { y: 1000 }, 2.2);
    tl.from(items.item6, { x: -2000 }, 2.3);
    tl.from(items.item1, { y: -1000 }, 2.4);

    /* Trigger animation with a trigger point */
    ScrollTrigger.create({
      animation: tl, // Pass your timeline to the animation property
      trigger: "#projects", // Specify the trigger element or scroll position
      start: () => `top-=300 center`,
      end: "bottom center",
      toggleActions: "play reverse play reverse",
    });
  }, []);

  return (
    /* Section */
    <section id="projects" className="bg-grass-3 h-screen hidden lg:flex items-center justify-center overflow-hidden">
      {/* Container of my moving divs */}
      <div id="bentoContainer" className="grid grid-rows-4 grid-cols-6 bg-grass-1 h-4/5 w-4/5 rounded-xl p-6 gap-4">
        <div data-index="1" id="bentoItem" className=" row-span-3 col-span-2">
          <div id="littleSun"></div>
        </div>
        <div data-index="2" id="bentoItem" className="col-span-3">
          <h2 className="text-[4vw] 2xl:text-6xl font-archivo italic text-special">English speaker</h2>
        </div>
        <div data-index="3" id="bentoItem" className=" row-span-4">
          <h2 className="text-special font-archivo text-[3.5vw] whitespace-nowrap rotate-90">Ready for action</h2>
        </div>
        <div data-index="4" id="bentoItem" className=" row-span-3">
          <h2 className="text-[3.5vw] 2xl:text-6xl justify-center font-archivo text-special -rotate-90  whitespace-nowrap">
            Design first
          </h2>
        </div>
        <div data-index="5" id="bentoItem" className=" col-span-2 row-span-2 ">
          <div id="littleSun"></div>
        </div>
        <div data-index="6" id="bentoItem" className=" col-span-2">
          <h2 className="text-[4.5vw] 2xl:text-8xl font-playfair text-amber-9">Portfolio</h2>
        </div>
        <div data-index="7" id="bentoItem" className=" col-span-2">
          <h2 className="text-[4.5vw] 2xl:text-8xl font-playfair text-amber-9">Projects</h2>
        </div>
      </div>
    </section>
  );
}
