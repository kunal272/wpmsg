import { Moon, Sun, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <MessageCircle className={`w-8 h-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            <span className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>WhatsApp Services</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className={`hover:text-green-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Home
            </button>
            <button onClick={() => scrollToSection('features')} className={`hover:text-green-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Features
            </button>
            <button onClick={() => scrollToSection('categories')} className={`hover:text-green-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Categories
            </button>
            <button onClick={() => scrollToSection('who-can-use')} className={`hover:text-green-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Who Can Use
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className={`text-left px-4 py-2 hover:bg-opacity-10 hover:bg-green-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Home
              </button>
              <button onClick={() => scrollToSection('features')} className={`text-left px-4 py-2 hover:bg-opacity-10 hover:bg-green-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Features
              </button>
              <button onClick={() => scrollToSection('categories')} className={`text-left px-4 py-2 hover:bg-opacity-10 hover:bg-green-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Categories
              </button>
              <button onClick={() => scrollToSection('who-can-use')} className={`text-left px-4 py-2 hover:bg-opacity-10 hover:bg-green-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Who Can Use
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
