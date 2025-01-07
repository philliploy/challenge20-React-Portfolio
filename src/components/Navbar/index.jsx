function NavBar({handlePageChange,currentPage}){
    return <>
     <div id="intro" class="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-01.jpg">
        <nav id="tm-nav" class="fixed w-full">
            <div class="tm-container mx-auto px-2 md:py-6 text-right">
                <button class="md:hidden py-2 px-2" id="menu-toggle"><i class="fas fa-2x fa-bars tm-text-gold"></i></button>
                <ul class="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
                <li class="inline-block mb-4 mx-4"><a href="#" onClick={e=>handlePageChange("About")}class="tm-text-gold py-1 md:py-3 px-4">About</a></li>
                    <li class="inline-block mb-4 mx-4"><a href="#" onClick={e=>handlePageChange("Portfolio")} class="tm-text-gold py-1 md:py-3 px-4">Portfolio</a></li>
                  
                    <li class="inline-block mb-4 mx-4"><a href="#" onClick={e=>handlePageChange("Contact")} class="tm-text-gold py-1 md:py-3 px-4">Contact</a></li>

                    <li class="inline-block mb-4 mx-4"><a href="#" onClick={e=>handlePageChange("Resume")} class="tm-text-gold py-1 md:py-3 px-4">Resume</a></li>
                </ul>
            </div>            
        </nav>
          
    </div>
    </>
}

export default NavBar