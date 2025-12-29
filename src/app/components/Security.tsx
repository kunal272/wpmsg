import { Shield, Check } from 'lucide-react';

interface SecurityProps {
  darkMode: boolean;
}

export function Security({ darkMode }: SecurityProps) {
  const securityFeatures = [
    'QR-based WhatsApp login',
    'Secure session storage',
    'Customer consent-based messaging',
    'No spam or misuse',
    'Suitable for official communication'
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className={`w-12 h-12 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
          </div>
          <h2 className={`text-3xl md:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Built for Trust, Security & Compliance
          </h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            We believe in responsible communication.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <Check className={`w-6 h-6 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
