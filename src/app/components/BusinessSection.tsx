import { Building2 } from 'lucide-react';

interface BusinessSectionProps {
  darkMode: boolean;
}

export function BusinessSection({ darkMode }: BusinessSectionProps) {
  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Building2 className={`w-12 h-12 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
          </div>
          <h2 className={`text-3xl md:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Designed for Businesses That Serve Many Customers
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Whether you manage a CSC centre, hotel front desk, or service office, staying connected with customers is critical. Our WhatsApp messaging platform helps you send bills, invoices, updates, and promotions from one simple dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
