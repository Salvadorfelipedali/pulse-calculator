import React, { useState, useEffect } from 'react';

interface SliderInputProps {
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

export const SliderInput: React.FC<SliderInputProps> = ({
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

  const handleSliderInput = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = Number((e.target as HTMLInputElement).value);
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
    
    // Принудительно обновляем состояние, даже если значение то же самое
    onChange(steppedValue);
    setInputValue(steppedValue.toString());
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
      // Принудительно обновляем фокус для гарантии обновления
      (e.target as HTMLInputElement).blur();
    }
  };

  // Расчет вознаграждения
  const rewardAmount = Math.round((Number(value) * Number(reward)) / 100 * 100) / 100;
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
            className="w-full pl-3 pr-16 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-right font-mono"
            placeholder={`${min}-${max}`}
          />
          <span className="absolute right-3 top-2 text-gray-500 text-xs font-medium bg-white px-1">
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
            onInput={handleSliderInput}
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