export default function Skills() {
  return (
    <section id="skills" className="h-screen">
      <div className="w-full h-screen  flex justify-center flex-col">
        <div className=" w-full h-1/3 flex justify-center items-center gap-48">
          <div className="bg-grass-1 h-[95%] aspect-square rounded-full flex items-center justify-center p-6 hover:shadow-lg hover:shadow-grass-9 relative group">
            <img src="/img/reactJs.png" alt="react logo" />
            <span className="absolute top-0 -right-16 bg-grass-9 p-2 rounded-md rounded-bl-none opacity-0 group-hover:opacity-100">
              ReactJs
            </span>
          </div>
          <div className="bg-grass-1 h-[95%] aspect-square rounded-full flex items-center justify-center p-6 hover:shadow-lg hover:shadow-grass-9 relative group">
            <img src="/img/tailwind.png" alt="tailwind logo" />
            <span className="absolute top-0 -right-24 bg-grass-9 p-2 rounded-md rounded-bl-none opacity-0 group-hover:opacity-100">
              TailwindCss
            </span>
          </div>
          <div className="bg-grass-1 h-[95%] aspect-square rounded-full flex items-center justify-center p-6 hover:shadow-lg hover:shadow-grass-9 relative group">
            <img src="/img/gsap.png" alt="gsap logo" className="pe-6" />
            <span className="absolute top-0 -right-16 bg-grass-9 p-2 rounded-md rounded-bl-none opacity-0 group-hover:opacity-100">
              GSAP
            </span>
          </div>
        </div>
        <div className=" w-full h-1/3 flex justify-center items-center gap-48">
          <div className="bg-grass-1 h-[95%] aspect-square rounded-full flex items-center justify-center p-6 hover:shadow-lg hover:shadow-grass-9 relative group">
            <img src="/img/mysql.png" alt="database logo" />
            <span className="absolute top-0 -right-16 bg-grass-9 p-2 rounded-md rounded-bl-none opacity-0 group-hover:opacity-100">
              MySql
            </span>
          </div>
          <div className="bg-grass-1 h-[95%] aspect-square rounded-full flex items-center justify-center p-6 hover:shadow-lg hover:shadow-grass-9 relative group">
            <img src="/img/github.png" alt="github logo" />
            <span className="absolute top-0 -right-16 bg-grass-9 p-2 rounded-md rounded-bl-none opacity-0 group-hover:opacity-100">
              GitHub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
