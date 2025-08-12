import React, { useState } from 'react';
import { InvestmentTab } from './components/InvestmentTab';
import { ReferralTab } from './components/ReferralTab';
import './App.css';

type Tab = 'presale' | 'referrals';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('referrals');

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pulse Calculator</h1>
          <p className="text-gray-600">Калькулятор доходности проекта Pulse</p>
        </div>

        {/* Tab Switcher */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex">
            <button
              onClick={() => setActiveTab('presale')}
              onMouseDown={(e) => e.preventDefault()}
              className={`flex-1 px-6 py-4 font-semibold text-center rounded-l-xl transition-all focus:outline-none ${
                activeTab === 'presale'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              💼 Presale
            </button>
            <button
              onClick={() => setActiveTab('referrals')}
              onMouseDown={(e) => e.preventDefault()}
              className={`flex-1 px-6 py-4 font-semibold text-center rounded-r-xl transition-all focus:outline-none ${
                activeTab === 'referrals'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              🤝 Реферальная программа
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {activeTab === 'presale' ? <InvestmentTab /> : <ReferralTab />}
        </div>
      </div>
    </div>
  );
}

export default App;