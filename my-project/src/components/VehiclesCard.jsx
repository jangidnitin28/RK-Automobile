import React from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Step 1

export default function VehiclesCard({ title, description, price, image }) {
  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-md overflow-hidden border-2 border-black m-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[rgb(49,48,139)]">{title}</h2>
        <p className="text-[rgb(35,53,65)]">{description}</p>
        <p className="text-[rgb(35,53,65)] font-medium">{price}</p>

        {/* ✅ Step 2 & 3: Wrap button in NavLink and pass state */}
        <NavLink
          to="/ViewDetail"
          state={{ car: { title, description, price, image } }}
        >
          <button className="mt-3 px-4 py-2 bg-[rgb(209,97,23)] text-white rounded hover:bg-[rgb(153,83,36)] hover:cursor-pointer">
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
}