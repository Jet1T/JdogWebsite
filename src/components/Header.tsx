import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Young Man's</h1>
              <p className="text-sm text-green-600 font-medium">Lawn Care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('lawn-care')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Lawn Care
            </button>
            <button 
              onClick={() => scrollToSection('engine-repair')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Engine Repair
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left px-4"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left px-4"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('lawn-care')}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left px-4"
              >
                Lawn Care
              </button>
              <button 
                onClick={() => scrollToSection('engine-repair')}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left px-4"
              >
                Engine Repair
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium mx-4"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;