import { Zap, Users, BarChart } from 'lucide-react';

interface FeaturesProps {
  darkMode: boolean;
}

export function Features({ darkMode }: FeaturesProps) {
  const features = [
    {
      icon: Zap,
      title: 'Smart Messaging',
      items: [
        'Send single or bulk WhatsApp messages',
        'Predefined message templates',
        'Schedule messages in advance'
      ]
    },
    {
      icon: Users,
      title: 'Customer & Contact Management',
      items: [
        'Manage multiple customers easily',
        'Import contacts via Excel/CSV',
        'Categorise customers by service type'
      ]
    },
    {
      icon: BarChart,
      title: 'Tracking & Reliability',
      items: [
        'Message delivery status',
        'Secure WhatsApp session handling',
        'Stable and fast message delivery'
      ]
    }
  ];

  return (
    <section id="features" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Powerful Features, Simple Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl text-center transition-all hover:shadow-xl ${darkMode ? 'bg-gray-900 hover:bg-gray-850' : 'bg-gray-50 hover:shadow-2xl'}`}
            >
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                  <feature.icon className={`w-8 h-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
              </div>
              <h3 className={`text-xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
