import React from 'react';
import Fast from '../assets/images/fast.png';
import Trust from '../assets/images/verified.png';
import Doc from '../assets/images/doc.png';
import Hour from '../assets/images/hours.png';
import Whatsapp from '../assets/images/Whatsapp.png';
import Mail from '../assets/images/mail.png';
import Insta from '../assets/images/Instagram.png';

export default function WhyChooseUs() {
    return (
        <>
            <div className="flex items-center justify-center flex-col mt-10 space-y-6 text-[rgb(35,53,65)]">
                <h1 className="text-4xl font-bold font-serif">Why Choose Us</h1>
                <h3 className="text-center px-4">We're committed to providing the best used vehicle buying experience</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-14 text-center">
                
                <div className="flex flex-col items-center space-y-2">
                    <img src={Fast} alt="Fast" className="w-16 h-16" />
                    <h3 className="text-xl text-[rgb(35,53,65)]">Fast Loan</h3>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <img src={Trust} alt="Trust" className="w-16 h-16" />
                    <h3 className="text-xl text-[rgb(35,53,65)]">Quality Assured</h3>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <img src={Doc} alt="Doc" className="w-16 h-16" />
                    <h3 className="text-xl text-[rgb(35,53,65)]">Clear Document</h3>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <img src={Hour} alt="Hour" className="w-16 h-16" />
                    <h3 className="text-xl text-[rgb(35,53,65)]">24/7 Support</h3>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between bg-[rgb(245,159,10)] p-16">
                <h1 className="text-3xl md:text-5xl font-serif text-white text-center md:text-left">
                    Have Questions? Let's Talk!
                </h1>

                <button className="mt-4 md:mt-0 md:ml-6 p-4 flex space-x-16">
                    <a href="https://wa.me/8290808214" target="_blank"><img src={Whatsapp} alt="WhatsApp" className="w-12 hover:cursor-pointer" /></a>
                    <a href="mailto:sutharrahul936@gmail.com" target="_blank"><img src={Mail} alt="Mail" className="w-12 hover:cursor-pointer" /></a>
                    <a href="https://www.instagram.com/rk_automobile5655/" target="_blank"><img src={Insta} alt="Instagram" className="w-12 hover:cursor-pointer" /></a>
                </button>
            </div>
        </>
    );
}