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
      <div className=" flex lg:hidden p-6 items-center justify-center ">
        <div id="logoContainer">
          <img src="/svg/logo.svg" alt="logo" className="w-14 aspect-square" />
        </div>
      </div>
    </>
  );
}
