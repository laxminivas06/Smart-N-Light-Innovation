import React from 'react';
import { Users, Star } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: 'Sri Karimalesh Caterers',
      logo: 'https://res.cloudinary.com/ddo1zb8jf/image/upload/v1753205153/Logos_100_x_100_mm_oiq1mo.png',
      project: 'Invoice Maker',
      testimonial: 'Simple yet powerful invoice generation solution that saved us countless hours.',
      industry: 'Business Services'
    },
    {
      name: 'Wisdom Roots',
      logo: 'https://res.cloudinary.com/ddo1zb8jf/image/upload/v1753205187/wr_gthqqe.png',
      project: 'Resume Builder & EAPCET Rank Predictor',
      testimonial: 'Exceptional tools that helped our students with career preparation.',
      industry: 'Education'
    },
    {
      name: 'Padma Tutorials',
      logo: 'https://res.cloudinary.com/ddo1zb8jf/image/upload/v1753205211/pt_xcoiac.png',
      project: 'Exam Portal, Attendance Management System & General Event Form',
      testimonial: 'Comprehensive educational solutions that streamlined our operations.',
      industry: 'Education'
    },
    {
      name: 'Creator Club - Sphoorthy Engineering College',
      logo: 'https://res.cloudinary.com/ddo1zb8jf/image/upload/v1753205073/cc_uqi8pr.png',
      project: 'Hackathon Registration Form & Club Event Form',
      testimonial: 'Perfect solutions for managing our college events and hackathons.',
      industry: 'Education'
    }
  ];

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+919059160424';
    const message = encodeURIComponent(
      "Hello Smart & Light Innovation,\n\nI'm interested in your software development services. " +
      "I'd like to discuss creating a custom solution for my needs.\n\n" +
      "Could you please provide more information about your services and pricing?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Our Valued Clients
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to have served these distinguished institutions with customized solutions.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              {/* Client Logo and Name */}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-32 h-32 mb-3 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; 
                      target.src = 'https://via.placeholder.com/150?text=Logo+Not+Found';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.industry}</p>
              </div>

              {/* Project Details */}
              <div className="text-center">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Project Developed</h4>
                <p className="text-gray-600 text-sm mb-4">{client.project}</p>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-xs italic text-center">"{client.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Become Our Next Success Story</h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-sm">
              Let's collaborate to create solutions that drive your business forward.
            </p>
            <button 
              onClick={handleWhatsAppRedirect}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-md transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;