import React from 'react';
import Whatsapp from '../assets/images/Whats_app.png';
import Call from "../assets/images/call.png";
import Insta from '../assets/images/Instagram.png';

export default function Filter({ search, setSearch }) {
  return (
    <div className="w-full max-w-lg p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative w-full md:flex-1">
          <input
            type="text"
            placeholder="Search vehicles..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="w-full pl-12 pr-4 py-3 rounded-full border-4 shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-[rgb(132,134,138)] border-[rgb(38,51,70)]
              transition duration-75 ease-in-out"
          />
          <span className="absolute left-4 top-3 text-gray-400">🔍</span>
        </div>

        {/* Right side content */}
        <div className="flex items-center gap-4 justify-center md:justify-end">
          <h3 className="bg-yellow-300 text-2xl font-bold px-2 rounded">Book Now..</h3>
          <a href="https://wa.me/8290808214" target="_blank"><img src={Whatsapp} alt="WhatsApp" className="w-12 hover:cursor-pointer" /></a>
          <a href="tel:8742847320" target="_blank"><img src={Call} alt="Calling" className="w-12 hover:cursor-pointer" /></a>
          <a href="https://www.instagram.com/rk_automobile5655/" target="_blank"><img src={Insta} alt="Instagram" className="w-12 hover:cursor-pointer" /></a>
        </div>
      </div>
    </div>
  );
}