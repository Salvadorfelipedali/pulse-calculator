import React, { useState, useEffect } from 'react';
import { ScenarioSliderInput } from './ScenarioSliderInput';

interface SimpleCalculatorProps {
  title: string;
  inputLabel: string;
  multipliers: {
    pessimistic: number;
    realistic: number;
    optimistic: number;
  };
  maxValue?: number;
}

type ScenarioType = 'pessimistic' | 'realistic' | 'optimistic';

interface ScenarioResults {
  pessimistic: number;
  realistic: number;
  optimistic: number;
}

export const SimpleCalculator: React.FC<SimpleCalculatorProps> = ({
  title,
  inputLabel,
  multipliers,
  maxValue = 100000000
}) => {
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [selectedScenario, setSelectedScenario] = useState<ScenarioType>('realistic');
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
    if (num >= 10000000) {
      const millions = num / 1000000;
      // Если число целое, не показываем .00
      if (millions % 1 === 0) {
        return millions.toFixed(0) + ' М';
      } else {
        return millions.toFixed(2) + ' М';
      }
    }
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num).replace(/,/g, '\u2009');
  };

  const getScenarioLabel = (scenario: ScenarioType): string => {
    switch (scenario) {
      case 'pessimistic': return 'Пессимистичный';
      case 'realistic': return 'Реалистичный';
      case 'optimistic': return 'Оптимистичный';
    }
  };

  const getScenarioColor = (scenario: ScenarioType): string => {
    switch (scenario) {
      case 'pessimistic': return 'from-purple-600 to-purple-700';
      case 'realistic': return 'from-blue-500 to-blue-600';
      case 'optimistic': return 'from-green-600 to-green-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {title.replace('💼', '').replace('🤝', '').trim()}
        </h2>
      </div>

      {/* Desktop Layout - 3 Columns */}
      <div className="hidden lg:grid lg:grid-cols-5 lg:gap-6">
        {/* Column 1-2: Input (2/5 of space) */}
        <div className="lg:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <ScenarioSliderInput
            label={inputLabel}
            value={inputAmount}
            min={0}
            max={maxValue}
            step={100}
            suffix="USDT"
            onChange={setInputAmount}
          />
        </div>

        {/* Column 3: Scenario Selector (1/5 of space) */}
        <div className="lg:col-span-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Прогноз</h3>
          <div className="space-y-3">
            {(['pessimistic', 'realistic', 'optimistic'] as ScenarioType[]).map((scenario) => (
              <button
                key={scenario}
                onClick={() => setSelectedScenario(scenario)}
                onMouseDown={(e) => e.preventDefault()}
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm transition-all focus:outline-none ${
                  selectedScenario === scenario
                    ? `bg-gradient-to-r text-white ${getScenarioColor(scenario)} shadow-md scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getScenarioLabel(scenario)}
              </button>
            ))}
          </div>
        </div>

        {/* Column 4-5: Result (2/5 of space) */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <div className={`bg-gradient-to-r ${getScenarioColor(selectedScenario)} rounded-xl p-6 text-white shadow-lg`}>
            <div className="text-center">
              <h4 className="text-lg font-medium opacity-90 mb-2">Итоговая сумма дохода</h4>
              <p className="text-sm opacity-75 mb-4">Потенциальный доход</p>
              <div className="text-3xl font-bold">
                {formatNumber(results[selectedScenario])} USDT
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stacked */}
      <div className="lg:hidden space-y-6">
        {/* Input Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <ScenarioSliderInput
            label={inputLabel}
            value={inputAmount}
            min={0}
            max={maxValue}
            step={100}
            suffix="USDT"
            onChange={setInputAmount}
          />
        </div>

        {/* Scenario Selector */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Прогноз доходности</h3>
          
          <div className="flex flex-col space-y-3">
            {(['pessimistic', 'realistic', 'optimistic'] as ScenarioType[]).map((scenario) => (
              <button
                key={scenario}
                onClick={() => setSelectedScenario(scenario)}
                onMouseDown={(e) => e.preventDefault()}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all focus:outline-none text-sm ${
                  selectedScenario === scenario
                    ? `bg-gradient-to-r text-white ${getScenarioColor(scenario)} shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getScenarioLabel(scenario)}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Scenario Result */}
        <div className={`bg-gradient-to-r ${getScenarioColor(selectedScenario)} rounded-xl p-4 text-white shadow-lg`}>
          <div className="text-center">
            <h4 className="text-sm font-medium opacity-90 mb-1">Итоговая сумма дохода</h4>
            <p className="text-xs opacity-75 mb-3">Потенциальный доход</p>
            <div className="text-xl font-bold">
              {formatNumber(results[selectedScenario])} USDT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};