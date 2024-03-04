"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"


export default function Hero() {


    useGSAP(() =>{
        const spans = document.querySelectorAll('#heroTitle span')

        gsap.from(spans,{
            x:10000,
            duration:1,
            stagger:0.3,
            ease: "power4.out"
        });
    }, []);

    return(
        <section className="h-[90%] flex flex-col items-center overflow-hidden ">
            <h1 id="heroTitle" className="h-2/3 font-archivo flex items-center justify-center text-[27vw] xl:-mb-12 relative text-special">
                <span>E</span>
                <span>t</span>
                <span>h</span>
                <span>a</span>
                <span>n</span>
            </h1>
            <p className="font-playfair text-[3.5vw] text-amber-9">Your future front-end Dev.</p>
        </section>
    )
}