"use client"

import {gsap} from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export default function Bento() {

    const [tl, setTl] = useState<any | null>(null);

    useGSAP(()=>{
        const items: Record<string, HTMLElement | null> = {};

        for (let i = 1; i<= 7; i++) {
            items[`item${i}`] = document.querySelector(`[data-index="${i}"]`);
        }

        const tl = gsap.timeline({defaults:{duration:0.3 }});
        setTl(tl);

        tl.from(items.item5,{
            y:1000,
        }, 1)


        tl.from(items.item2, {
            x:-2000,
        },2.1)
        tl.from(items.item3, {
            y:1200
        },2)
        tl.from(items.item7, {
            x:-2000
        },2.3)
        tl.from(items.item4, {
            y:1000
        },2.5)


        tl.from(items.item6, {
            x:-2000
        })
        tl.from(items.item1, {
            y:-1000
        })

        ScrollTrigger.create({
            animation: tl, // Pass your timeline to the animation property
            trigger: '#projects', // Specify the trigger element or scroll position
            start: () => `top-=300 center`,
        });

    }, []);

    return(
        <section id="projects" className="bg-grass-3 h-screen flex items-center justify-center overflow-hidden">
            <div id="bentoContainer" className="grid grid-rows-4 grid-cols-6 bg-grass-1 h-4/5 w-4/5 rounded-xl p-6 gap-4">
            <div data-index="1" id="bentoItem" className=" row-span-3 col-span-2">
                <img src="img/LogoCharlynArt.png" alt=""/>
                <h2 className="absolute bottom-2 2xl:bottom-8 font-playfair text-5xl 2xl:text-7xl text-[#CB1D63]">CharlynArt</h2>
            </div>
            <div data-index="2" id="bentoItem" className="col-span-3">
                <h2 className="text-5xl 2xl:text-7xl font-archivo italic text-special">INSERT SOME TEXT</h2>
            </div>
            <div data-index="3" id="bentoItem" className=" row-span-4">
                <h2 className="text-special font-archivo text-6xl 2xl:text-8xl whitespace-nowrap rotate-90">Future is now !</h2>
            </div>
            <div data-index="4" id="bentoItem" className=" row-span-3">
                <h2 className="text-[2.7rem] 2xl:text-7xl justify-center font-archivo text-special -rotate-90  whitespace-nowrap">Fun and Design</h2>
            </div>
            <div data-index="5" id="bentoItem" className=" col-span-2 row-span-2 ">
                <h2 className=" text-8xl 2xl:text-9xl font-archivo ">Zeta</h2>
            </div>
            <div data-index="6" id="bentoItem" className=" col-span-2">
                <h2 className="text-7xl 2xl:text-9xl font-playfair text-amber-9">Portfolio</h2>
            </div>
            <div data-index="7" id="bentoItem" className=" col-span-2">
                <h2 className="text-7xl 2xl:text-9xl font-playfair text-amber-9">Projects</h2>
            </div>

            </div>
        </section>
    )
}