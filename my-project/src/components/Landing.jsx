import React from 'react'
import Bg from '../assets/images/bg3.webp';
import { NavLink } from "react-router-dom";
import RK from '../assets/images/RKLogo.png';

export default function Landing() {
  return (
    <div className="flex p- md:p-36 lg:items-center justify-start min-h-screen px-4 md:px-24
 text-white" style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
      <div className="space-y-6 w-full mt-12 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-center md:text-left">
          Trusted Used Vehicles
        </h1>
        <h4 className="text-base md:text-lg max-w-xl font-serif text-center md:text-left">
          Find your perfect Car, Bike, or Commercial vehicle from our verified collection.
        </h4>
        {/* RK Logo */}
        <div className="flex justify-center md:justify-end">
          <img src={RK} alt="RK Logo" className="w-48 p-4 border-2 rounded-4xl md:hidden m-12 bg-white" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <NavLink to="/vehicles" className="bg-[rgb(52,55,138)] border-2 font-bold border-white px-8 py-2 rounded-4xl hover:bg-white hover:text-[rgb(48,49,77)] w-full sm:w-auto text-center"> Browse Vehicles</NavLink>
          <NavLink to="/customer" className="bg-[rgb(52,55,138)] border-2 font-bold border-white px-8 py-2 rounded-4xl hover:bg-white hover:text-[rgb(48,49,77)] w-full sm:w-auto text-center">Happy Customers</NavLink>
          <NavLink to="/contact" className="bg-[rgb(52,55,138)] border-2 font-bold border-white px-8 py-2 rounded-4xl hover:bg-white hover:text-[rgb(48,49,77)] w-full sm:w-auto text-center">Sell Your Vehicles</NavLink>
        </div>
      </div>
    </div>
  )
}