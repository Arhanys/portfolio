export default function NavBar() {
    return(
        <>  
            <div className="h-[10%] relative">
                <ul className="h-full flex justify-around items-center text-special font-playfair text-2xl">
                    <li className="hover:text-amber-9 hover:scale-110 transition-all"><a href="#">Home</a></li>
                    <li className="hover:text-amber-9 hover:scale-110 transition-all"><a href="#projects">Projects</a></li>
                    <li className="hover:text-amber-9 hover:scale-110 transition-all"><a href="">Skills</a></li>
                    <li className="hover:text-amber-9 hover:scale-110 transition-all"><a href="">About</a></li>       
                </ul>
                <div id="niceBorder" className="absolute bottom-0 h-0.5 w-5/6 bg-special left-1/2 -translate-x-1/2"></div>
            </div>
        </>
        
    )
}