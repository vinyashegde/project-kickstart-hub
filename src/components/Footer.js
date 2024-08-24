// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Project Kickstart Hub. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#about" className="hover:text-blue-400">About Us</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <a href="#privacy" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-400">Terms of Service</a>
        </div>
        <div className="mt-4">
          <input type="email" placeholder="Sign up for our newsletter" className="px-4 py-2 rounded-l bg-white text-gray-800" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
