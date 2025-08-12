import React, { useState, useEffect } from 'react';
import { SliderInput } from './SliderInput';

interface ProfitabilityScenariosProps {
  title: string;
  multipliers: {
    pessimistic: number;
    realistic: number;
    optimistic: number;
  };
}

interface ScenarioResults {
  pessimistic: number;
  realistic: number;
  optimistic: number;
}

export const ProfitabilityScenarios: React.FC<ProfitabilityScenariosProps> = ({
  title,
  multipliers
}) => {
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [results, setResults] = useState<ScenarioResults>({
    pessimistic: 0,
    realistic: 0,
    optimistic: 0
  });

  useEffect(() => {
    setResults({
      pessimistic: inputAmount * multipliers.pessimistic,
      realistic: inputAmount * multipliers.realistic,
      optimistic: inputAmount * multipliers.optimistic
    });
  }, [inputAmount, multipliers]);

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Сумма инвестиции</h3>
          <p className="text-gray-600 text-sm">Введите сумму для расчета прогноза доходности</p>
        </div>

        <SliderInput
          label="Сумма инвестиции"
          value={inputAmount}
          min={0}
          max={1000000}
          step={100}
          reward={0} // Не используется для отображения множителя
          suffix="USDT"
          onChange={setInputAmount}
          gradientFrom="from-blue-500"
          gradientTo="to-indigo-500"
        />
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Прогноз доходности</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Pessimistic Scenario */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-200">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">Пессимистичный</h4>
              <div className="text-sm text-gray-600 mb-3">{multipliers.pessimistic}x множитель</div>
              <div className="text-2xl font-bold text-red-600">
                {formatNumber(results.pessimistic)} USDT
              </div>
            </div>
          </div>

          {/* Realistic Scenario */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-4 border border-yellow-200">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">Реалистичный</h4>
              <div className="text-sm text-gray-600 mb-3">{multipliers.realistic}x множитель</div>
              <div className="text-2xl font-bold text-yellow-600">
                {formatNumber(results.realistic)} USDT
              </div>
            </div>
          </div>

          {/* Optimistic Scenario */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">Оптимистичный</h4>
              <div className="text-sm text-gray-600 mb-3">{multipliers.optimistic}x множитель</div>
              <div className="text-2xl font-bold text-green-600">
                {formatNumber(results.optimistic)} USDT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};