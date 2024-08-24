// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DomainSection from "./components/DomainSection";
import TemplatesDisplay from "./components/TemplatesDisplay";
import Footer from "./components/Footer";

function App() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  // Template data categorized by domain
  const templatesData = {
    "Web Development": [
      { name: "React + Tailwind", description: "A React project setup with Tailwind CSS.", tags: ["Responsive", "SEO-Optimized"] },
      { name: "React + Bootstrap", description: "A React project with Bootstrap styling.", tags: ["Mobile-First", "Customizable"] },
    ],
    "Software Applications": [
      { name: "Electron + React", description: "Build desktop apps using Electron and React.", tags: ["Cross-Platform", "JavaScript"] },
    ],
    "Mobile Applications": [
      { name: "React Native + Expo", description: "A React Native project setup with Expo.", tags: ["Cross-Platform", "Mobile"] },
    ],
    // Add more domains and templates as needed
  };

  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <DomainSection onDomainClick={handleDomainClick} />
      <TemplatesDisplay templates={selectedDomain ? templatesData[selectedDomain] : []} />
      <Footer />
    </div>
  );
}

export default App;
