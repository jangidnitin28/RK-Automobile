import React, { useState, useEffect, useRef } from 'react';
import Logo from "../assets/images/RK.jpeg";
import { NavLink } from "react-router-dom";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full 
      bg-gradient-to-r from-[#3e79a8] via-[#9175dd] to-[#8e5fcc] 
      bg-opacity-70 backdrop-blur-md 
      border-b border-white/30 
      text-white z-50 shadow-lg shadow-blue-900/50">
      
      <div className="flex items-center justify-between p-4">

        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-12 rounded-full shadow-md" />
          <div>
            <h2 className="text-2xl font-bold hidden sm:block font-serif drop-shadow-lg">
              RK Automobile
            </h2>
            <h6 className="text-[10px] opacity-90">
              Quality you can trust - Prices you'll love.
            </h6>
          </div>
        </div>

        <nav className="hidden sm:flex gap-24 text-xl font-medium mr-12 font-serif">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `hover:scale-110 transition ${
                isActive ? "text-[#ebe700] font-bold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/vehicles" 
            className={({ isActive }) =>
              `hover:scale-110 transition ${
                isActive ? "text-[#ebe700] font-bold" : ""
              }`
            }
          >
            Vehicles
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              `hover:scale-110 transition ${
                isActive ? "text-[#ebe700] font-bold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="sm:hidden relative" ref={menuRef}>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 
             bg-gradient-to-r from-[#3e79a8] via-[#9175dd] to-[#8e5fcc] 
      bg-opacity-70 backdrop-blur-md 
              border border-white/30 rounded-lg shadow-lg p-4 
              flex flex-col gap-4 z-50 font-serif">
              
              <NavLink to="/" onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "text-[#ebe700] font-bold" : ""}
              >
                Home
              </NavLink>
              <NavLink to="/vehicles" onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "text-[#ebe700] font-bold" : ""}
              >
                Vehicles
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "text-[#ebe700] font-bold" : ""}
              >
                Contact
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}