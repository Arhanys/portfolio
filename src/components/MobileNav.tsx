import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { use, useState } from "react";

export default function MobileNav() {
  const [tl, setTl] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    // select the three divs that make up the burger menu
    const burgerTop = document.getElementById("burgerTop");
    const burgerMid = document.getElementById("burgerMid");
    const burgerBot = document.getElementById("burgerBot");
    const menu = document.getElementById("menuContainer");

    // create a timeline
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    setTl(tl);

    // animate the burger menu
    tl.to(burgerTop, { y: 10, rotate: 45 }, 0);
    tl.to(burgerMid, { opacity: 0 }, 0);
    tl.to(burgerBot, { y: -10, rotate: -45 }, 0);
    tl.set(menu, { display: "block" }, 0);
    tl.to(menu, { x: "0%" }, 0.3);

    tl.pause();
  });

  const toggleMenu = () => {
    if (isOpen) {
      tl.reverse();
    } else {
      tl.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" flex lg:hidden p-6 items-center justify-between relative ">
        <div id="logoContainer">
          <img src="/svg/logo.svg" alt="logo" className="w-14 aspect-square" />
        </div>
        {/* burger menu */}
        <div id="burgerMenu" onClick={toggleMenu} className="w-10 h-10 flex flex-col items-center justify-center gap-2">
          <div id="burgerTop" className="w-8 h-0.5 bg-special"></div>
          <div id="burgerMid" className="w-8 h-0.5 bg-special"></div>
          <div id="burgerBot" className="w-8 h-0.5 bg-special"></div>
        </div>
        {/* dropdown menu */}
        <div
          id="menuContainer"
          className="absolute hidden top-[100%] w-1/2 h-[50vh] right-0 bg-grass-1 ms-auto overflow-hidden translate-x-full overflow-x-hidden z-10"
        >
          <ul className="w-full h-full flex flex-col items-center pt-6">
            <li className="font-archivo text-special text-[6vw]">
              <a href="#">Skills</a>
            </li>
            <li className="font-archivo text-special text-[6vw]">
              <a href="#">Contact</a>
            </li>
            <li className="h-full w-full flex justify-center items-start pt-12">
              <div id="mobileSun"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
