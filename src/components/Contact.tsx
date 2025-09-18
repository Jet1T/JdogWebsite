import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(555) 123-LAWN',
      subtext: 'Call or text anytime',
      action: 'tel:+15551234'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@youngmanslawncare.com',
      subtext: 'We respond within 24 hours',
      action: 'mailto:info@youngmanslawncare.com'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Metro Area & Suburbs',
      subtext: 'Within 25 miles of city center'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sat: 7AM-7PM',
      subtext: 'Sunday: Emergency only'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your outdoor space or get your equipment running like new? 
            Contact us today for a free consultation and estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <info.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    </div>
                  </div>
                  {info.action ? (
                    <a href={info.action} className="text-green-600 font-medium hover:text-green-700">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium">{info.details}</p>
                  )}
                  <p className="text-gray-600 text-sm mt-1">{info.subtext}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-600 text-white rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Free estimates with no hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Licensed, bonded, and insured</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Same-day response to most inquiries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="lawn-mowing">Lawn Mowing</option>
                  <option value="fertilization">Fertilization</option>
                  <option value="leaf-removal">Leaf Removal</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="engine-repair">Engine Repair</option>
                  <option value="maintenance">Equipment Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please describe your project or repair needs, property size, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;