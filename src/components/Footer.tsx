export default function Footer() {
  return (
    <>
      <section id="footer" className="h-1/3 bg-grass-1 pt-3 px-6 hidden lg:flex">
        <div className="h-full w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-5xl font-playfair text-amber-9">Contact infos</h1>
          <div className="mt-6 ">
            <p className="text-special font-bold font-playfair text-xl">Email : ethan.colinet.pro@gmail.com</p>
            <p className="text-special font-bold font-playfair text-xl">Phone : +32 492.17/91/50</p>
            <p className="text-special font-bold font-playfair text-xl">Discord : AlphA0758</p>
          </div>
        </div>
        <div className="h-full w-1/2 flex items-center">
          <h1 className="font-playfair text-6xl text-amber-9 underline underline-offset-8">
            Feel free to contact me !
          </h1>
        </div>
      </section>
    </>
  );
}
