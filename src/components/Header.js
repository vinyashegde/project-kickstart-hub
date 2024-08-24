// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-600">Project Kickstart Hub</div>
        <nav className="flex space-x-4">
          <a href="#home" className="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring">About Us</a>
          <a href="#templates" className="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring">Templates</a>
          <a href="#guides" className="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring">Guides</a>
          <a href="#hackathons" className="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring">Hackathons</a>
          <a href="#community" className="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring">Community</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring">Contact Us</a>
        </nav>
        <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring">Login / Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
