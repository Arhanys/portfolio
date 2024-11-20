export default function MobileSkills() {
  return (
    <>
      <div className="lg:hidden h-2/5 flex flex-col">
        <div className=" w-full h-1/2 flex items-center justify-around">
          <div className="bg-grass-2 w-1/4 aspect-square rounded-full relative">
            <img src="/img/reactJs.png" alt="" />
            <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-playfair text-amber-9">ReactJs</p>
          </div>
          <div className="bg-grass-2 w-1/4 aspect-square rounded-full relative">
            <img className="scale-75" src="/img/tailwind.png" alt="" />
            <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-playfair text-amber-9">Tailwind</p>
          </div>
          <div className="bg-grass-2 w-1/4 aspect-square rounded-full pe-1 relative">
            <img className="scale-75" src="/img/gsap.png" alt="" />
            <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-playfair text-amber-9">Gsap</p>
          </div>
        </div>
        <div className=" w-full h-1/2 flex items-center justify-center gap-8">
          <div className="bg-grass-2 w-1/4 aspect-square rounded-full relative">
            <img src="/img/mysql.png" alt="" />
            <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-playfair text-amber-9">MySql</p>
          </div>
          <div className="bg-grass-2 w-1/4 aspect-square rounded-full relative">
            <img className="scale-75" src="/img/github.png" alt="" />
            <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-playfair text-amber-9">Github</p>
          </div>
        </div>
      </div>
    </>
  );
}
