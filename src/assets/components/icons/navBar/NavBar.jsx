import { useState } from "react";
import MenuIcon from "../MenuIcon";
import NavLink from "./NavLink";
import CloseIcon from "../CloseIcon";

const NavBar = () => {

  const [openMenu,setOpenMenu]=useState(false)

  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu)
  }


  return (
    <>
      <nav 
      className={`absolute top-8 w-full px-6 flex gap-x-12 items-center ${openMenu? 'lg:py-0 lg:top-8 lg:gap-x-12  bg-white lg:bg-transparent lg:text-white lg:items-center lg:font-normal py-8 top-0 text-black justify-between lg:justify-normal font-medium': 'text-white'}`}>
        
        <button className="lg:hidden" onClick={handleOpenMenu}>
          {
            openMenu? (<CloseIcon/>
            ):(<MenuIcon/>)
          }
        </button>

        <a href="#" className={`${openMenu ? 'hidden lg:block lg:text-3xl lg:mb-2 lg:mx-0':' mx-auto pr-5 lg:pr-0 lg:mx-0 mb-2 text-3xl'}`}>
          room
        </a>
        <div className={`lg:flex lg:gap-8 ${openMenu? 'flex gap-8':'hidden'}`}>
        <NavLink text='home'/>
        <NavLink text='shop'/>
        <NavLink text='about'/>
        <NavLink text='contact'/>
        </div>
      </nav>

    </>
  );
};

export default NavBar;
