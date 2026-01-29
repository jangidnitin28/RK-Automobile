import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import VehiclesCard from './VehiclesCard';
import Filter from './Filter';
import VehiclesShimmer from './VehiclesShimmer';

export default function AllVehicles() {
  const location = useLocation();
  const [vehicles, setVehicles] = useState(location.state?.vehicles || []);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (vehicles.length === 0) {
      fetch("https://api.sheetbest.com/sheets/564e51ab-bacb-4004-87c9-bc45430d779d")
        .then((res) => res.json())
        .then((data) => setVehicles(data));
    }
  }, []);

  const filteredVehicles = vehicles.filter((item) =>
    `${item.Vehicle} ${item.Model} ${item.Fuel}`.toLowerCase().includes(search)
  );

  return (
    <>
      <Filter search={search} setSearch={setSearch} />
      <div className="text-center text-2xl text-white font-serif m-4 bg-[rgb(38,51,70)]">
        All Vehicles, One Place – Find Your Perfect Ride
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {filteredVehicles.length === 0
          ? [...Array(6)].map((_, i) => <VehiclesShimmer key={i} />)
          : filteredVehicles.map((item, index) => (
              <VehiclesCard
                key={index}
                title={item.Vehicle}
                description={`${item.Model} | ${item.Fuel} | ${item['Km Drive']} km`}
                price={item.Price}
                image={item.Images}
              />
            ))}
        <h2 className="font-bold text-[#fd0e0e]">Visit Office Or Contact for other Vehicles</h2>
      </div>
    </>
  );
}