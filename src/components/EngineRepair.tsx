import React from 'react';
import { Wrench, Settings, AlertTriangle, CheckCircle } from 'lucide-react';

const EngineRepair = () => {
  const services = [
    {
      category: 'Lawn Mower Repair',
      icon: Settings,
      services: [
        { name: 'Basic Tune-up', price: '$85-125', description: 'Oil change, spark plug, air filter, blade sharpening' },
        { name: 'Engine Repair', price: '$150-300', description: 'Carburetor cleaning, engine diagnostics, minor repairs' },
        { name: 'Deck Repair/Replacement', price: '$100-250', description: 'Deck welding, belt replacement, spindle repair' },
        { name: 'Transmission Service', price: '$200-400', description: 'Belt/chain replacement, transmission fluid service' }
      ]
    },
    {
      category: 'Small Engine Equipment',
      icon: Wrench,
      services: [
        { name: 'Trimmer/Edger Service', price: '$65-95', description: 'Engine tune-up, line replacement, handle repair' },
        { name: 'Leaf Blower Repair', price: '$70-120', description: 'Engine service, impeller cleaning, housing repair' },
        { name: 'Chainsaw Service', price: '$80-140', description: 'Chain sharpening, bar service, engine tune-up' },
        { name: 'Generator Maintenance', price: '$120-200', description: 'Oil change, filter service, load testing' }
      ]
    }
  ];

  const diagnosticPricing = [
    { service: 'Basic Diagnostic', price: '$45', description: 'Initial problem assessment (applied to repair cost)' },
    { service: 'Advanced Diagnostic', price: '$65', description: 'Comprehensive engine testing and analysis' },
    { service: 'Pick-up Service', price: '$25-35', description: 'Equipment collection from your location' },
    { service: 'Rush Service', price: '+50%', description: 'Priority repair (24-48 hour turnaround)' }
  ];

  const warranties = [
    'All repairs backed by 90-day warranty',
    'Genuine OEM parts when available',
    'Detailed service reports provided',
    'Free post-service support',
    'Competitive pricing with upfront estimates'
  ];

  return (
    <section id="engine-repair" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Small Engine Repair Services
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert repair services for all your outdoor power equipment. From lawn mowers to generators, 
            we keep your equipment running smoothly and efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((category) => (
            <div key={category.category} className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <category.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.services.map((service) => (
                  <div key={service.name} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                      <span className="text-green-600 font-bold text-lg">{service.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="h-7 w-7 text-blue-600 mr-3" />
              Additional Services
            </h3>
            <div className="space-y-4">
              {diagnosticPricing.map((item) => (
                <div key={item.service} className="flex justify-between items-center py-3 border-b border-blue-200">
                  <div>
                    <span className="font-medium text-gray-900">{item.service}</span>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <span className="text-blue-600 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="h-7 w-7 text-green-600 mr-3" />
              Our Guarantee
            </h3>
            <div className="space-y-4">
              {warranties.map((warranty) => (
                <div key={warranty} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{warranty}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
              <p className="text-green-800 font-medium text-sm">
                <strong>Pro Tip:</strong> Regular maintenance extends equipment life by 40-60%. 
                Ask about our seasonal maintenance packages!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Emergency Repair Service Available</h3>
          <p className="text-gray-300 mb-6">
            Equipment break down at the worst time? We offer emergency repair services 
            for critical equipment during peak season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1234567890"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Emergency: Call Now
            </a>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Schedule Regular Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineRepair;