import React from 'react'

export default function Landing() {
  return (
    <div className="flex p- md:p-36 lg:items-center justify-start min-h-screen px-4 md:px-24 bg-[rgb(31,41,55)] text-white">
      <div className="space-y-6 text-left w-full">
        <h1 className="text-4xl md:text-6xl font-bold font-serif">Trusted Used Vehicles</h1>
        <h4 className="text-base md:text-lg max-w-xl font-serif">
          Find your perfect car, bike, or commercial vehicle from our verified collection.
        </h4>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#" className="bg-[rgb(48,49,77)] border-2 font-bold border-white px-8 py-2 rounded-4xl hover:bg-white hover:text-[rgb(48,49,77)] w-full sm:w-auto text-center"> Browse Vehicles</a>
          <a href="#" className="bg-[rgb(48,49,77)] border-2 font-bold border-white px-8 py-2 rounded-4xl hover:bg-white hover:text-[rgb(48,49,77)] w-full sm:w-auto text-center">Contact Us</a>
          <a href="#" className="bg-[rgb(48,49,77)] border-2 font-bold border-white px-8 py-2 rounded-4xl hover:bg-white hover:text-[rgb(48,49,77)] w-full sm:w-auto text-center">Sell Your Vehicles</a>
        </div>
      </div>
    </div>
  )
}