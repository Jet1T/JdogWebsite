import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import LawnCareServices from './components/LawnCareServices';
import EngineRepair from './components/EngineRepair';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <LawnCareServices />
      <EngineRepair />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;