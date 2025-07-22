import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pioneer', href: '#pioneer' },
    { name: 'Services', href: '#services' },
    { name: 'Software', href: '#software' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavigation = (href: string) => {
    // Update the URL hash
    window.location.hash = href;
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with image and text */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('#home');
              }}
              className="flex items-center focus:outline-none"
            >
              <img 
                src="https://res.cloudinary.com/ddo1zb8jf/image/upload/v1753205268/snl_xbktbt.png" 
                alt="Smart N Light Innovation Logo" 
                className="h-8 sm:h-10 w-auto"
              />
              <div className="flex flex-col ml-2 sm:ml-3">
                <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Smart N Light</span>
                <span className="text-xs sm:text-sm text-gray-600 leading-tight">Innovation</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
                className={`${
                  currentPage === item.href.substring(1) || 
                  (currentPage === 'home' && item.href === '#home')
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                } font-medium transition-colors duration-200 text-sm lg:text-base`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-sm ${
                    currentPage === item.href.substring(1) || 
                    (currentPage === 'home' && item.href === '#home')
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;