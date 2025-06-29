import  { useState, useEffect } from 'react';
import { Award, Linkedin, Mail, Star, Github, Instagram } from 'lucide-react';

const Pioneer = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  const titles = [
    'Visionary Entrepreneur',
    'Application Developer Expert',
    'Make in India Advocate',
    'Innovation Leader',
    'Tech Evangelist'
  ];

  const achievements = [
    'Founded Smart and Light Innovation',
    
    'Speaker at several tech conferences',
    'Mentored 50+ startups',
    'Advocate for ethical AI development',
    'Digital India campaign contributor'
  ];

  // Typing animation effect
  useEffect(() => {
    let timeout;
    const currentTitleText = titles[currentTitle];
    
    if (typing) {
      if (displayText.length < currentTitleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitleText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setTyping(true);
        setCurrentTitle((currentTitle + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, currentTitle]);

  return (
    <section id="pioneer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Founder
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo and Name */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden mx-auto lg:mx-0">
                <img 
                  src="https://i.postimg.cc/rsFNVLYg/nivasimg.jpg" 
                  alt="Laxminivas Morishetty - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-wider">
                LAXMINIVAS MORISHETTY
              </h3>
              <p className="text-lg text-blue-600 font-semibold h-8">
                <span className="typing-animation">{displayText}</span>
                <span className="blinking-cursor">|</span>
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/laxmi-nivas-morishetty-02468m/?originalSubdomain=in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/laxminivasmorishetty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/laxminivas06" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:smartnlightinno@gmail.com" 
                  className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Description and Achievements */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                A <strong>visionary entrepreneur</strong>, Laxminivas Morishetty leads Smart and Light Innovation with clarity, creativity, and compassion.
              </p>
              <p className="leading-relaxed mb-6">
                From idea to execution, he ensures each project is aligned with the organization's mission to empower society through seamless, scalable digital solutions. His leadership philosophy centers on innovation that serves humanity.
              </p>
              <p className="leading-relaxed">
                With a deep understanding of emerging technologies and market needs, he has successfully guided the company through multiple successful projects, always maintaining the highest standards of quality and client satisfaction.
              </p>
            </div>

            {/* Achievements - Desktop */}
            <div className="hidden sm:block bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Key Achievements
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements - Mobile */}
            <div className="sm:hidden bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Key Achievements
              </h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-600">
              "Technology should be a bridge that connects human potential with unlimited possibilities. Every solution we create must serve this greater purpose."
            </blockquote>
          </div>
        </div>
      </div>

      <style jsx>{`
        .typing-animation {
          font-weight: 600;
          color: #2563eb;
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
          color: #2563eb;
        }
        @keyframes blink {
          from, to { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </section>
  );
};

export default Pioneer;