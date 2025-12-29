import { Building, Hotel, Stethoscope, Globe, ShoppingBag, GraduationCap, Briefcase } from 'lucide-react';

interface WhoCanUseProps {
  darkMode: boolean;
}

export function WhoCanUse({ darkMode }: WhoCanUseProps) {
  const businesses = [
    { icon: Building, name: 'CSC & Government Service Centres' },
    { icon: Hotel, name: 'Hotels & Lodges' },
    { icon: Stethoscope, name: 'Clinics & Diagnostic Centres' },
    { icon: Globe, name: 'Cyber Cafés & Online Work Centres' },
    { icon: ShoppingBag, name: 'Shops & Local Businesses' },
    { icon: GraduationCap, name: 'Educational Institutes' },
    { icon: Briefcase, name: 'Service Providers & Agencies' }
  ];

  return (
    <section id="who-can-use" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Who Can Use This Platform?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {businesses.map((business, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl text-center transition-all hover:scale-105 ${darkMode ? 'bg-gray-900 hover:bg-gray-850' : 'bg-gray-50 hover:shadow-xl'}`}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                  <business.icon className={`w-8 h-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{business.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
