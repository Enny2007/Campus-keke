import { Link } from "react-router-dom";
import { MenuIcon } from "../assets/icon/svgs";
import logo from "../assets/icon/keke-icon.jpg";
import { useState } from "react";
//import { link } from "fs";

const HeaderNav = () => {
   // controls whether mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);
   // list of navigation links
  const navList=[
    {name:"Student Login" , link:"/student-login"},
    {name:"Driver Login" , link:"/driver-login"},
  ]
  return (
    <>
     {/*  HEADER SECTION  */}
    <header className="fixed top-0 left-0 z-50 w-full h-[64px] bg-white border-b border-gray-200">
      
      <div className="flex h-full items-center justify-between px-5 md:px-20">
        
       {/* logo section (clicking it takes user to home page) */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="CampusKeke Logo"
            className="w-10 h-10 rounded-md"
          />
          <span className="text-base font-semibold text-gray-900 hover:text-green-600 transition">
            CampusKeke
          </span>
        </Link>
  {/*  DESKTOP NAVIGATION  */}
   {/* hidden on mobile*/}
        
      <nav className="hidden md:flex items-center gap-4">
          {navList.map((chi, idx) => (
            <Link
              key={idx}
              to={chi.link}
              className="text-sm font-medium text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
            >
              {chi.name}
            </Link>
          ))}
        </nav>
        {/* hamburger menu button for mobile) */}

         <button
            className="flex items-center md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>

      </div>
    </header>

    
    {/*mobile menu overlay*/}
    {menuOpen && (
  <div
    className="fixed inset-0 z-[9998] bg-black/50 md:hidden"
    onClick={() => setMenuOpen(false)}
  />
)}
 {/*  MOBILE SIDE MENU  */}
<div
  className={`fixed right-0 top-0 z-[9999] flex h-screen w-[260px] flex-col bg-white p-5 shadow-2xl transition-transform duration-300 md:hidden ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
   {/* close button */}
  <button
    className="mb-6 self-end text-2xl"
    onClick={() => setMenuOpen(false)}
  >
    ✕
  </button>

  {/* mobile navigation links */}
    <nav className="flex flex-col gap-5">
          {navList.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer font-medium text-green-600"
            >
              {item.name}
            </Link>
          ))}
    </nav>
</div>

   </>

  );
};

export default HeaderNav;
