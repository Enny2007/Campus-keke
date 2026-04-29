import { Link } from "react-router-dom";
import { MenuIcon } from "../assets/icon/svgs";
import logo from "../assets/icon/keke-icon.jpg";
import { useState } from "react";

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <header className="fixed top-0 left-0 z-50 w-full h-[64px] bg-white border-b border-gray-200">
      
      <div className="flex h-full items-center justify-between px-5 md:px-20">
        
       
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

        
        <nav className="hidden items-center gap-2 md:gap-4  md:flex">
          <Link
            to="/student-login"
            className="text-sm font-medium text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
          >
            Student Login
          </Link>

          <Link
            to="/driver-login"
            className="text-sm font-medium text-gray-900 px-3 py-1.5 border border-gray-300 rounded-lg hover:border-green-500 transition"
          >
            Driver Login
          </Link>
        </nav>

         <button
            className="flex items-center md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>

      </div>
    </header>

    

    {menuOpen && (
  <div
    className="fixed inset-0 z-[9998] bg-black/50 md:hidden"
    onClick={() => setMenuOpen(false)}
  />
)}

<div
  className={`fixed right-0 top-0 z-[9999] flex h-screen w-[260px] flex-col bg-white p-5 shadow-2xl transition-transform duration-300 md:hidden ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <button
    className="mb-6 self-end text-2xl"
    onClick={() => setMenuOpen(false)}
  >
    ✕
  </button>

  <nav className="flex flex-col gap-5">
    <Link
     to="/student-login"
      onClick={() => setMenuOpen(false)}
      className="cursor-pointer font-medium  text-green-600"
    >
      Student Login
    </Link>

    <Link
      to="/driver-login"
      onClick={() => setMenuOpen(false)}
      className="cursor-pointer font-medium  text-green-600"
    >
      Driver Login
    </Link>
  </nav>
</div>

   </>

  );
};

export default HeaderNav;
