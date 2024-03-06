"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TypeIt from "typeit-react"


export default function Hero() {


    useGSAP(() =>{
        const spans = document.querySelectorAll('#heroTitle span')

        gsap.from(spans,{
            x:10000,
            duration:1,
            stagger:0.2,
            ease: "power4.out"
        });
    }, []);

    return(
        <section className="h-[90%] flex flex-col items-center overflow-hidden relative">
            <div id="yellowLight"></div>
            <h1 id="heroTitle" className="h-2/3 font-archivo flex items-center justify-center text-[27vw]  relative text-special cursor-default">
                <span>E</span>
                <span>t</span>
                <span>h</span>
                <span>a</span>
                <span>n</span>
            </h1>
            <TypeIt
                options={{speed:80, loop:true}}  
                getBeforeInit={(instance) => {
                    instance.type("Front-end Dev and Desginer.").pause(750).delete(9).pause(500).type('Musician.').pause(500).delete(9).type('Jokester.');
                    return instance;}}
                className="font-playfair text-[3.5vw] text-amber-9 w-1/2">
            </TypeIt>
        </section>
    )
}