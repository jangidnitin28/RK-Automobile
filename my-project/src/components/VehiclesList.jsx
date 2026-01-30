import React, { useEffect, useState } from 'react';
import VehiclesCard from './VehiclesCard';
import Quality from './Quality';
import { Link } from "react-router-dom";
import Shimmer from "./LandingShimmer";

export default function VehiclesList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.sheetbest.com/sheets/564e51ab-bacb-4004-87c9-bc45430d779d")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="text-center text-4xl text-white font-serif m-4 bg-[rgb(209,97,23)]">
        Featured Vehicles
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {data.length === 0
          ? [...Array(6)].map((_, i) => <Shimmer key={i} />)
          : data.slice(0, 6).map((item, index) => (
              <VehiclesCard
                key={index}
                title={item.Vehicle}
                description={`${item.Model} | ${item.Fuel} | ${item['Km Drive']} km`}
                price={item.Price}
                image={item.Images}
              />
            ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/vehicles"
          state={{ vehicles: data }}
          className="px-16 py-2 bg-[rgb(35,23,209)] text-white rounded hover:bg-[rgb(36,87,153)] hover:cursor-pointer"
        >
          View More....
        </Link>
      </div>

      <Quality />
    </>
  );
}