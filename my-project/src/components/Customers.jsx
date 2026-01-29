import React from "react";
import Bolero from "../assets/images/Customers/Bolero.jpeg";
import Ertiga from "../assets/images/Customers/Ertiga.jpeg";
import Bus from "../assets/images/Customers/Bus.jpeg";
import Pickup from "../assets/images/Customers/Pickup.jpeg";
import Pickup1 from "../assets/images/Customers/Pickup1.jpeg";
import Skoda from "../assets/images/Customers/Skoda.jpeg";
import Swift from "../assets/images/Customers/Swift.jpeg";
import Truck from "../assets/images/Customers/Truck.jpeg";
import Alto2 from "../assets/images/Customers/Alto2.jpeg";
import Pickup5 from "../assets/images/Customers/Pickup5.jpeg";
import Pickup4 from "../assets/images/Customers/Pickup4.jpeg";
import Alto from "../assets/images/Customers/Alto.jpeg";

export default function Customer() {
  const customers = [
    {
      name: "Bolero",
      image: Bolero,
      message: "- Bought my Mahindra Bolero here, smooth process and great support from Rahul sir & Bablu Sir."
    },
    {
      name: "Maruti Swift",
      image: Swift,
      message: "- Swift was in excellent condition, very satisfied."
    },
    {
      name: "Suzuki Ertiga",
      image: Ertiga,
      message: "- Ertiga ride quality is amazing, thanks RK Automobile!"
    },
    {
      name: "Pickup",
      image: Pickup,
      message: "- Perfect pickup truck for my business needs."
    },
    {
      name: "Tata Truck",
      image: Truck,
      message: "- Truck was reliable and well maintained."
    },
    {
      name: "Skoda Octavia",
      image: Skoda,
      message: "- Family trips are now comfortable, thanks!"
    },
    {
      name: "Alto",
      image: Alto,
      message: "- City was delivered in top condition."
    },
    {
      name: "Pickup",
      image: Pickup1,
      message: "- Strong pickup, perfect for heavy loads."
    },
    {
      name: "Pickup",
      image: Pickup4,
      message: "- Well Condition, Genuine Vehicle."
    },
    {
      name: "Tata Bus",
      image: Bus,
      message: "- Tata Bus is performing well, highly recommend."
    },
    {
      name: "Pickup",
      image: Pickup5,
      message: "- Strong pickup, perfect for heavy loads."
    },
    {
      name: "Alto",
      image: Alto2,
      message: "- Bought my Alto here, process was quick and hassle‑free."
    },
  ];

  return (
    <div className="bg-[#54508d] text-white min-h-screen px-4 md:px-24 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        What Our Customers Say...
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {customers.map((car, index) => (
          <div
            key={index}
            className="bg-[rgb(31,41,55)] rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 "
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
              <p className="text-gray-300">{car.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}