// src/components/TemplatesDisplay.js
import React from "react";

const TemplatesDisplay = ({ templates }) => {
  return (
    <section className="container mx-auto py-20" id="templates">
      <h2 className="text-3xl font-bold text-center mb-10">Available Templates</h2>
      {templates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.name} className="bg-white p-6 rounded-lg shadow hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-bold mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <div className="flex space-x-2">
                {template.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Please select a domain to see available templates.</p>
      )}
    </section>
  );
};

export default TemplatesDisplay;
