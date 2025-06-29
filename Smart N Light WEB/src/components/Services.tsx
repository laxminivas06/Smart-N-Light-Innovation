import React from 'react';
import { Code2, Bot, Smartphone, BarChart3, Settings, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Tailored tools for businesses and individuals that perfectly match your unique requirements and workflows.',
      features: ['Enterprise Solutions', 'Desktop Applications', 'Cloud-based Systems', 'Legacy Modernization']
    },
    {
      icon: Bot,
      title: 'AI-Driven Automation',
      description: 'Smart bots and intelligent systems that reduce manual effort and increase productivity exponentially.',
      features: ['Process Automation', 'Chatbots & Virtual Assistants', 'Machine Learning Models', 'Predictive Analytics']
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Applications',
      description: 'Scalable and secure apps for all platforms that deliver exceptional user experiences.',
      features: ['Progressive Web Apps', 'Native Mobile Apps', 'Cross-platform Solutions', 'E-commerce Platforms']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence Tools',
      description: 'Data visualization and decision-making platforms that turn your data into actionable insights.',
      features: ['Dashboard Development', 'Reporting Systems', 'Data Analytics', 'KPI Monitoring']
    },
    {
      icon: Settings,
      title: 'Tool Integrations',
      description: 'API & third-party platform synchronizations that connect your existing tools seamlessly.',
      features: ['API Development', 'System Integration', 'Data Migration', 'Workflow Automation']
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
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions that transform your ideas into powerful, scalable software systems.
          </p>
        </div>

        {/* Services Grid - Always 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              {/* Icon */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button 
                onClick={handleWhatsAppRedirect}
                className="group/btn flex items-center text-blue-600 text-sm font-medium hover:text-purple-600 transition-colors duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-4 text-sm max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your goals.
            </p>
            <button 
              onClick={handleWhatsAppRedirect}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;