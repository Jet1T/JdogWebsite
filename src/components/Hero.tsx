import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Professional 
              <span className="text-green-600 block">Lawn Care</span>
              <span className="text-2xl lg:text-3xl font-medium text-gray-600">& Engine Repair</span>
            </h1>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              Transform your outdoor space with our expert lawn care services and reliable small engine repairs. 
              Quality work, competitive pricing, and customer satisfaction guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Quote
              </button>
              <a 
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="mt-8 space-y-3">
              {[
                'Licensed & Insured',
                'Free Estimates',
                'Satisfaction Guaranteed'
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional lawn mowing service"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;