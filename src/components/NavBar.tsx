import { useLenis } from "@studio-freight/react-lenis";

export default function NavBar() {
  /* Instanciate lenis */
  const lenis = useLenis(() => {});

  /* handle the click on links of the navBar with lenis to make the movement toward the target smoother */
  const handleClick = (e: any) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    if (lenis) {
      lenis.scrollTo(href);
    }
  };

  return (
    <>
      <div className="h-[10%] relative lg:flex items-end hidden">
        <div id="niceBorder" className="absolute bottom-0 h-0.5 w-5/6 bg-special left-1/2 -translate-x-1/2"></div>
      </div>
    </>
  );
}
