import TypeIt from "typeit-react";

export default function MobileHero() {
  return (
    <section id="hero" className="bg-grass-3 h-fit flex flex-col items-center">
      <h1 className="font-archivo text-[10vw] 2xl:text-[12vw] text-special">Hi, I&apos;m Ethan</h1>
      <TypeIt
        options={{ speed: 100, loop: true }}
        getBeforeInit={(instance) => {
          instance
            .type("Front-end Dev.")
            .pause(750)
            .delete(14)
            .pause(500)
            .type("Musician.")
            .pause(500)
            .delete(9)
            .pause(500)
            .type("Jokester.")
            .pause(750);
          return instance;
        }}
        className="font-playfair text-[6vw] text-amber-9 w-1/2 h-9  text-center z-0"
      ></TypeIt>
      <div id="sunContainer" className="h-1/2 w-full flex items-center justify-center mt-16 relative ">
        <div id="funnySun"></div>
        <img
          src="/svg/logo.svg"
          alt=""
          className="w-1/2 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="bg-red-500 w-full h-32 mt-16"></div>
    </section>
  );
}
