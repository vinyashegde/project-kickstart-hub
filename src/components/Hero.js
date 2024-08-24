// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="bg-cover bg-center bg-hero-pattern py-56 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Jumpstart Your Project with Ready-Made Templates and Guides</h1>
        <p className="text-xl mb-8">Choose a domain and get started in minutes with our expertly curated starter templates.</p>
        <a href="#domains" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
