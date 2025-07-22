import React from 'react';
import { Target, Lightbulb, Globe, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Every solution we create is designed to solve real-world problems and make a meaningful impact.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative approaches to deliver exceptional results.'
    },
    {
      icon: Globe,
      title: 'Make in India',
      description: 'Proudly rooted in Indian values while delivering world-class solutions globally.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Every line of code we write meets the highest standards of quality and performance.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="https://res.cloudinary.com/ddo1zb8jf/image/upload/v1753205268/snl_xbktbt.png" 
              alt="Smart and Light Innovation Logo" 
              className="h-36 w-auto"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Smart and Light Innovation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering the future with intelligent, lightweight solutions that make technology work for humans
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed">
                We are a futuristic tech organization dedicated to building software that simplifies human tasks. Every line of code we write is designed for impact, innovation, and perfection.
              </p>
              <p className="leading-relaxed">
                Rooted in the spirit of <strong>Make in India</strong>, we strive to bring evergreen digital solutions to the world. Our team combines technical expertise with creative vision to deliver software that doesn't just work – it transforms how people live and work.
              </p>
              <div className="flex items-center my-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/4/46/Make_In_India.png" 
                  alt="Make in India Logo" 
                  className="h-16 w-auto mr-4"
                />
                <p className="text-sm text-gray-500">
                  Proud supporter of India's manufacturing and innovation initiative
                </p>
              </div>
              <p className="leading-relaxed">
                From AI-driven automation to custom enterprise solutions, we bridge the gap between complex technology and simple, intuitive user experiences. Our commitment to excellence drives us to continuously push the boundaries of what's possible.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
              <p className="opacity-90">
                "Creating intelligent software that empowers humans to live effortlessly, with innovation rooted in perfection and national pride."
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;