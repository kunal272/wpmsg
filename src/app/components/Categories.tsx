import { Receipt, Info, Megaphone, Bell } from 'lucide-react';

interface CategoriesProps {
  darkMode: boolean;
}

export function Categories({ darkMode }: CategoriesProps) {
  const categories = [
    {
      icon: Receipt,
      title: 'Bills, Invoices & Receipts',
      items: [
        'Electricity, water, internet bills',
        'Hotel invoices & payment receipts',
        'Service charges & confirmations'
      ]
    },
    {
      icon: Info,
      title: 'Informational & Service Messages',
      items: [
        'Booking confirmations (hotels)',
        'Check-in / check-out information',
        'Application or service status',
        'Document readiness alerts',
        'Office hours & holiday notices'
      ]
    },
    {
      icon: Megaphone,
      title: 'Promotional & Marketing Messages',
      items: [
        'Special hotel offers & discounts',
        'New services announcement',
        'Seasonal promotions',
        'Customer awareness campaigns'
      ]
    },
    {
      icon: Bell,
      title: 'Reminders & Alerts',
      items: [
        'Payment reminders',
        'Booking reminders',
        'Appointment alerts',
        'Service follow-ups'
      ]
    }
  ];

  return (
    <section id="categories" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Message Categories That Fit Every Business
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all hover:shadow-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-2xl'}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                  <category.icon className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <h3 className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2 ml-16">
                {category.items.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-green-600 mt-1">•</span>
                    <span>{item}</span>
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
