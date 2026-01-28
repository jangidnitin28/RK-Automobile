import React from 'react'
import Mail from "../assets/images/mail.png";
import Call from "../assets/images/call.png";
import Location from "../assets/images/location.png";

export default function Footer() {
  return (
    <div className="mt-18 bg-[rgb(31,41,55)] text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-18 p-28">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold p-4">RK Automobile</h2>
          <h3>
            Your trusted partner for quality used vehicles. We offer cars, bikes, and commercial vehicles with complete verification and inspection.
          </h3>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold p-4">Contact Us</h2>
          <img src={Location} alt="location" className="w-6 inline mr-2" />
          <span>Bhavrasiya, Maharana Pratap Airport, Dabok (Udaipur, Raj), 313022</span>
          <br />
          <img src={Call} alt="Call" className="w-6 inline mr-2" />
          <span>+91 9462021726</span><br />
          <span>+91 8290808214</span><br />
          <span>+91 8742847320</span>
          <br />
          <img src={Mail} alt="mail" className="w-6 inline mr-2" />
          <a href="mailto:sutharrahul936@gmail.com">sutharrahul936@gmail.com</a>
        </div>

        {/* Location Section */}
        <div>
          <h2 className="text-2xl font-bold p-4">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13369.36223175722!2d73.95085922846575!3d24.61666930510097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967db42fcd70fa7%3A0x5db3554327d71b5b!2sBhamrashiya%20Ghati%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1769532602788!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <h3 className="flex items-center justify-center border-t-2 py-4 gap-16">
        &copy; 2014 RK Automobile. All rights reserved.
        <h3>Owned by RK Finance Pvt. Ltd</h3>
      </h3>
      
    </div>
  )
}