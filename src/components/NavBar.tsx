import { useLenis } from "@studio-freight/react-lenis"

export default function NavBar() {
    /* Instanciate lenis */
    const lenis = useLenis(()=>{});

    /* handle the click on links of the navBar with lenis to make the movement toward the target smoother */
  const handleClick = (e:any) => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
          if(lenis){
        lenis.scrollTo(href)
      }
  };

    return(
        <>  
            <div className="h-[10%] relative">
                <ul className="h-full flex justify-around items-center text-special font-playfair text-2xl">
                    <li className="hover:text-amber-9 hover:scale-110 transition-all"><a href="#" >Home</a></li>
                    <li className="hover:text-amber-9 hover:scale-110 transition-all"><a href="#projects" onClick={handleClick}>Projects</a></li>
                    <li className="hover:text-amber-9 hover:scale-110 transition-all"><a href="#skills" onClick={handleClick}>Skills</a></li>
                    <li className="hover:text-amber-9 hover:scale-110 transition-all"><a href="" onClick={handleClick}>About</a></li>       
                </ul>
                {/* Border created with a div to place it as I want */}
                <div id="niceBorder" className="absolute bottom-0 h-0.5 w-5/6 bg-special left-1/2 -translate-x-1/2"></div>
            </div>
        </>
        
    )
}