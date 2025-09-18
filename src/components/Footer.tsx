import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Young Man's</h3>
                <p className="text-green-400 font-medium">Lawn Care</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Professional lawn care and small engine repair services that keep your outdoor 
              space beautiful and your equipment running smoothly. Quality service you can trust.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <a href="tel:+15551234" className="text-gray-300 hover:text-white transition-colors">
                  (555) 123-LAWN
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <a href="mailto:info@youngmanslawncare.com" className="text-gray-300 hover:text-white transition-colors">
                  info@youngmanslawncare.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Metro Area & Suburbs</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('lawn-care')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Lawn Mowing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('lawn-care')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Fertilization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('lawn-care')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Leaf Removal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('lawn-care')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Landscaping
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('engine-repair')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Engine Repair
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="tel:+15551234" className="text-gray-300 hover:text-white transition-colors">
                  Emergency Service
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Free Quote
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Young Man's Lawn Care. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Licensed & Insured</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-400 text-sm">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;