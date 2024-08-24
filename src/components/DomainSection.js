// src/components/DomainSection.js
import React from "react";

const domains = [
  { name: "Web Development", icon: "🌐" },
  { name: "Software Applications", icon: "💻" },
  { name: "Mobile Applications", icon: "📱" },
  // Add more domains as needed
];

const DomainSection = ({ onDomainClick }) => {
  return (
    <section className="container mx-auto py-20" id="domains">
      <h2 className="text-3xl font-bold text-center mb-10">Choose Your Domain</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {domains.map((domain) => (
          <div
            key={domain.name}
            className="bg-white p-6 rounded-lg shadow text-center hover:bg-gray-100 transition duration-300 cursor-pointer"
            onClick={() => onDomainClick(domain.name)}
          >
            <div className="text-5xl mb-4">{domain.icon}</div>
            <h3 className="text-xl font-bold">{domain.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DomainSection;
