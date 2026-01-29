import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function ViewDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  if (!car) return <div className="text-white p-6">No car data found.</div>;

  return (
    <div className="min-h-screen bg-[#202020] text-white px-4 md:px-24 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
      >
        ← Back
      </button>

      <img
        src={car.image}
        alt={car.title}
        className="w-full max-h-[500px] object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{car.title}</h1>
      <p className="text-lg mb-2">{car.description}</p>
      <p className="text-xl font-semibold text-green-400 mb-4">{car.price}</p>

      <div className="bg-gray-800 p-4 rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-2">About this vehicle</h2>
        <p>
          This {car.title} is a well-maintained model with excellent performance.
        </p>
      </div>
    <NavLink to={`https://wa.me/918742847302?text=I want to buy ${car.title}`} target="_blank">
      <button className="px-6 py-3 bg-[rgb(54,209,23)] text-white rounded-lg hover:bg-[rgb(153,83,36)]">
        Buy Now
      </button>
    </NavLink>
    </div>
  );
}