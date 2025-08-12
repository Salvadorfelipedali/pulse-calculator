import React from 'react';
import { SliderInput } from './SliderInput';
import { ToggleSwitch } from './ToggleSwitch';

interface InvestmentCategoryProps {
  values: {
    level1: number;
    level2: number;
    level3: number;
  };
  onUpdate: (level: 'level1' | 'level2' | 'level3', value: number) => void;
  isEnabled: boolean;
  onToggle: () => void;
}

export const InvestmentCategory: React.FC<InvestmentCategoryProps> = ({ values, onUpdate, isEnabled, onToggle }) => {
  
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-200">
      <div className="flex items-center justify-between mb-6 pr-2">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <span className="text-xl sm:text-2xl">💰</span>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">С привлеченных инвестиций</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Комиссия с инвестиций привлечённых пользователей</p>
          </div>
        </div>
        <div className="flex-shrink-0 ml-3">
          <ToggleSwitch 
            isOn={isEnabled} 
            onToggle={onToggle}
            size="md"
          />
        </div>
      </div>

      {/* Анимированная область с ползунками */}
      <div className={`transition-all duration-300 overflow-hidden ${
        isEnabled ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="grid md:grid-cols-3 gap-6">
          <SliderInput
            key={`level1-${values.level1}`}
            label="1 ур. Новичок"
            value={values.level1}
            min={0}
            max={1000000}
            step={100}
            reward={10}
            suffix="USDT"
            onChange={(value) => onUpdate('level1', value)}
            gradientFrom="from-green-500"
            gradientTo="to-emerald-500"
          />
          
          <SliderInput
            key={`level2-${values.level2}`}
            label="2 ур. Профессионал"
            value={values.level2}
            min={0}
            max={1000000}
            step={100}
            reward={5}
            suffix="USDT"
            onChange={(value) => onUpdate('level2', value)}
            gradientFrom="from-blue-500"
            gradientTo="to-cyan-500"
          />
          
          <SliderInput
            key={`level3-${values.level3}`}
            label="3 ур. Амбассадор"
            value={values.level3}
            min={0}
            max={1000000}
            step={100}
            reward={5}
            suffix="USDT"
            onChange={(value) => onUpdate('level3', value)}
            gradientFrom="from-purple-500"
            gradientTo="to-pink-500"
          />
        </div>
      </div>
    </div>
  );
};