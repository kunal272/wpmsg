import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessSection } from './components/BusinessSection';
import { Categories } from './components/Categories';
import { Features } from './components/Features';
import { Security } from './components/Security';
import { WhoCanUse } from './components/WhoCanUse';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <BusinessSection darkMode={darkMode} />
      <Categories darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <Security darkMode={darkMode} />
      <WhoCanUse darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
