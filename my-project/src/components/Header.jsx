import React, { useState, useEffect, useRef } from 'react'
import Logo from "../assets/images/nitin.jpg"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null) // menu ke liye reference

  // Outside click handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false) // agar bahar click hua to band kar do
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-[rgb(38,51,70)] border-b-2 border-[rgb(245,245,245)] text-white relative">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-12 rounded-full" />
          <h2 className="text-2xl  font-bold hidden sm:block font-serif">RK Automobile
          <h6 className="text-[10px] ">Quality you can trust - Prices you'll love.</h6></h2>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex gap-24 text-xl font-medium mr-12 font-serif">
          <a href="#" className="hover:scale-110">Home</a>
          <a href="#" className="hover:scale-110">Vehicles</a>
          <a href="#" className="hover:scale-110">Contact</a>
        </nav>

        {/* Mobile Toggle */}
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

          {/* Inline Pop Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 bg-[rgb(49,76,211)] border border-white rounded shadow-lg p-4 flex flex-col gap-4 z-50 font-serif">
              <a href="#">Home</a>
              <a href="#">Vehicles</a>
              <a href="#">Contact</a>
            </div>
          )}
        </div>
      </div>

    </header>
  )
}