import React from 'react';
import { Award, Users, Clock, Wrench } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality. Every job is completed to the highest standards with attention to detail.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We listen to your needs and deliver personalized service every time.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Count on us for punctual, consistent service. We respect your time and keep our commitments.'
    },
    {
      icon: Wrench,
      title: 'Expert Repairs',
      description: 'From lawn mowers to small engines, our certified technicians handle all repairs with expertise.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Young Man's Lawn Care
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of hard work, integrity, and exceptional service, Young Man's Lawn Care 
            has been transforming outdoor spaces and providing reliable equipment repairs for years.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Young Man's Lawn Care, we believe that every property deserves to look its best. Our mission 
              is to provide comprehensive lawn care services and reliable small engine repairs that exceed 
              expectations while building lasting relationships with our customers.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We combine traditional work ethics with modern techniques and equipment to deliver results 
              that make your property stand out in the neighborhood. Whether it's maintaining your lawn 
              throughout the season or fixing your trusted equipment, we're here to help.
            </p>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-green-800 font-medium italic">
                "We don't just cut grass – we cultivate relationships and take pride in making your 
                outdoor space a place you love to call home."
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional lawn care team at work"
              className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                <value.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;