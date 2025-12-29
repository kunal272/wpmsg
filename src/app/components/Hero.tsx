import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  const benefits = [
    'Send Bulk Messages Instantly',
    'Manage 1000+ Customers Easily',
    'Professional Communication'
  ];

  return (
    <section id="home" className={`pt-24 pb-20 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-green-50 via-white to-blue-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className={`w-10 h-10 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`px-4 py-1 rounded-full text-sm ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                #1 WhatsApp Business Solution
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Transform Customer Communication with 
              <span className="text-green-600"> WhatsApp Messaging</span>
            </h1>
            
            <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Streamline your business operations with our powerful WhatsApp platform. Send bills, invoices, updates & promotions to hundreds of customers in seconds!
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2 group">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className={`px-8 py-4 rounded-lg transition-all border-2 ${darkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-opacity-20 ${darkMode ? 'border-gray-700' : 'border-gray-300'}">
              <div>
                <p className={`text-3xl mb-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>10K+</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Active Users</p>
              </div>
              <div>
                <p className={`text-3xl mb-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>5M+</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Messages Sent</p>
              </div>
              <div>
                <p className={`text-3xl mb-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>98%</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Delivery Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'ring-2 ring-green-400/20' : 'ring-2 ring-green-600/20'}`}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Business team using WhatsApp messaging platform for customer communication"
                className="w-full h-auto"
              />
              {/* Floating Card */}
              <div className={`absolute bottom-6 left-6 right-6 p-4 rounded-lg backdrop-blur-md ${darkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/90 border border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Messages Sent Today</p>
                    <p className={`text-2xl ${darkMode ? 'text-green-400' : 'text-green-600'}`}>2,847</p>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
                    <MessageCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}