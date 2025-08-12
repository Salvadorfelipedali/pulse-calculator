import React, { useState, useEffect } from 'react';

interface SimpleSliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  reward: number;
  suffix: string;
  onChange: (value: number) => void;
  gradientFrom: string;
  gradientTo: string;
}

export const SimpleSliderInput: React.FC<SimpleSliderInputProps> = ({
  label,
  value,
  min,
  max,
  step,
  reward,
  suffix,
  onChange,
  gradientFrom,
  gradientTo
}) => {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value.replace(/[^0-9.]/g, '');
    setInputValue(inputVal);
  };

  const handleInputBlur = () => {
    const numValue = Number(inputValue);
    if (isNaN(numValue)) {
      setInputValue(value.toString());
      return;
    }
    
    const clampedValue = Math.max(min, Math.min(max, numValue));
    const steppedValue = Math.round(clampedValue / step) * step;
    onChange(steppedValue);
    setInputValue(steppedValue.toString());
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  // ПРОСТЕЙШИЙ И НАИБОЛЕЕ НАДЕЖНЫЙ РАСЧЕТ
  const rewardAmount = parseFloat(((value * reward) / 100).toFixed(2));
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
      <div className="mb-3">
        <label className="block text-sm font-semibold text-gray-900 mb-1">
          {label}
        </label>
        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white`}>
          {reward}% вознаграждение
        </div>
      </div>

      {/* Input Field */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleInputKeyPress}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right font-mono"
            placeholder={`${min}-${max}`}
          />
          <span className="absolute right-3 top-2 text-gray-500 text-sm">
            {suffix}
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatNumber(min)} {suffix}</span>
          <span>{formatNumber(max)} {suffix}</span>
        </div>
      </div>

      {/* Result */}
      <div className="bg-gray-50 rounded-lg p-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Доход:</span>
          <span className="font-bold text-lg text-green-600">
            {formatNumber(rewardAmount)} USDT
          </span>
        </div>
      </div>
    </div>
  );
};