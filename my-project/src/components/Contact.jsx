import React from "react";
import Whatsapp from '../assets/images/Whats_app.png';
import Mail from '../assets/images/mail.png';
import Insta from '../assets/images/Instagram.png';
import Call from "../assets/images/call.png";
import Background from '../assets/images/background.jpg';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center p-6" style={{ backgroundImage: `url(${Background})` }}>
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Get in touch with us through any of the options below.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {/* Mail */}
          <a
            href="mailto:sutharrahul936@gmail.com"
            className="flex flex-col items-center p-4 rounded-lg shadow hover:bg-cyan-50 transition"
          >
            <img src={Mail} alt="Mail" className="w-12 h-12 mb-2" />
            <span className="text-gray-700 font-medium">Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+918742847320"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg shadow hover:bg-green-50 transition"
          >
            <img src={Whatsapp} alt="WhatsApp" className="w-12 h-12 mb-2" />
            <span className="text-gray-700 font-medium">WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rk_automobile5655/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg shadow hover:bg-pink-50 transition"
          >
            <img src={Insta} alt="Instagram" className="w-12 h-12 mb-2" />
            <span className="text-gray-700 font-medium">Instagram</span>
          </a>

          <a
            href="tel:+918742847320"
            className="flex flex-col items-center p-4 rounded-lg shadow hover:bg-yellow-50 transition"
          >
            <img src={Call} alt="Phone" className="w-12 h-12 mb-2" />
            <span className="text-gray-700 font-medium">Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;