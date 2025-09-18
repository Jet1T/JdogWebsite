import React from 'react';
import { Check, Scissors, Droplets, Leaf, Flower } from 'lucide-react';

const LawnCareServices = () => {
  const services = [
    {
      icon: Scissors,
      name: 'Lawn Mowing',
      description: 'Regular grass cutting and edging',
      prices: [
        { size: 'Small Lot (Under 0.25 acres)', price: '$35-45' },
        { size: 'Medium Lot (0.25-0.5 acres)', price: '$45-60' },
        { size: 'Large Lot (0.5-1 acre)', price: '$60-85' },
        { size: 'Extra Large (Over 1 acre)', price: '$85+' }
      ]
    },
    {
      icon: Leaf,
      name: 'Leaf Removal',
      description: 'Fall cleanup and debris removal',
      prices: [
        { size: 'Basic Cleanup', price: '$50-75' },
        { size: 'Full Property Cleanup', price: '$100-150' },
        { size: 'Gutter Cleaning Add-on', price: '+$40-60' }
      ]
    },
    {
      icon: Droplets,
      name: 'Fertilization',
      description: 'Seasonal fertilizer application',
      prices: [
        { size: 'Spring Treatment', price: '$60-80' },
        { size: 'Summer Treatment', price: '$55-70' },
        { size: 'Fall Treatment', price: '$65-85' },
        { size: 'Full Season Package', price: '$180-235' }
      ]
    },
    {
      icon: Flower,
      name: 'Landscaping',
      description: 'Design and maintenance services',
      prices: [
        { size: 'Basic Bed Maintenance', price: '$40-60/hr' },
        { size: 'Mulching (per yard)', price: '$75-95' },
        { size: 'Planting Services', price: '$45-65/hr' },
        { size: 'Design Consultation', price: '$85-125' }
      ]
    }
  ];

  const features = [
    'Professional equipment used',
    'Eco-friendly products available',
    'Flexible scheduling',
    'Season-long packages available',
    'Free estimates',
    'Satisfaction guaranteed'
  ];

  return (
    <section id="lawn-care" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lawn Care Services & Pricing
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional lawn care services designed to keep your property looking pristine year-round. 
            All prices are estimates and may vary based on specific conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {service.prices.map((price, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">{price.size}</span>
                    <span className="text-green-600 font-bold text-lg">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Lawn Care Services?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <h4 className="text-lg font-semibold text-green-800 mb-2">Special Offers</h4>
            <ul className="text-green-700 space-y-1">
              <li>• 10% discount on season-long contracts</li>
              <li>• Free consultation for new customers</li>
              <li>• Bundle services for additional savings</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawnCareServices;