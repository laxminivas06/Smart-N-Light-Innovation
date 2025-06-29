import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pioneer from './components/Pioneer';
import Services from './components/Services';
import Software from './components/Software';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1).toLowerCase() || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    // Initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
            <Services />
            <Contact />
          </>
        );
      case 'about':
        return (
          <>
            <About />
            <Contact />
          </>
        );
      case 'pioneer':
        return (
          <>
            <Pioneer />
            <Contact />
          </>
        );
      case 'services':
        return (
          <>
            <Services />
            <Contact />
          </>
        );
      case 'software':
        return (
          <>
            <Software />
            <Contact />
          </>
        );
      case 'clients':
        return (
          <>
            <Clients />
            <Contact />
          </>
        );
      case 'contact':
        return (
          <>
            <Contact />
          </>
        );
      default:
        return (
          <>
            <Hero />
            <About />
            <Services />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;