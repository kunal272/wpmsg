import { MessageCircle, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-16 border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-900 border-gray-800 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-8 h-8 text-green-400" />
              <span className="text-xl text-white">WhatsApp Services</span>
            </div>
            <p className="text-gray-400 mb-4">
              Smart WhatsApp Messaging platform for customer-focused businesses. Send bills, invoices, updates, and promotions professionally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('categories')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Categories
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('who-can-use')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Who Can Use
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Bulk WhatsApp Messaging</li>
              <li className="text-gray-400">Contact Management</li>
              <li className="text-gray-400">Message Templates</li>
              <li className="text-gray-400">Scheduled Messages</li>
              <li className="text-gray-400">Delivery Reports</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">support@whatsappservices.com</p>
                  <p className="text-gray-400">sales@whatsappservices.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">+91 1234567890</p>
                  <p className="text-gray-400">+91 0987654321</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  123 Business Avenue,<br />
                  Tech City, India 110001
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} WhatsApp Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}