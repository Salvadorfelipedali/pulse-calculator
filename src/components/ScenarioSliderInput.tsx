import React, { useState, useEffect } from 'react';

interface ScenarioSliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (value: number) => void;
}

export const ScenarioSliderInput: React.FC<ScenarioSliderInputProps> = ({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange
}) => {
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num).replace(/,/g, '\u2009');
  };

  const [inputValue, setInputValue] = useState(formatNumber(value));

  useEffect(() => {
    setInputValue(formatNumber(value));
  }, [value]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onChange(newValue);
  };

  const handleSliderInput = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = Number((e.target as HTMLInputElement).value);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value.replace(/[^0-9]/g, '');
    const numValue = Number(inputVal);
    if (!isNaN(numValue)) {
      setInputValue(formatNumber(numValue));
    } else {
      setInputValue('');
    }
  };

  const handleInputBlur = () => {
    const cleanValue = inputValue.replace(/[^0-9]/g, '');
    const numValue = Number(cleanValue);
    if (isNaN(numValue)) {
      setInputValue(formatNumber(value));
      return;
    }
    
    const clampedValue = Math.max(min, Math.min(max, numValue));
    const steppedValue = Math.round(clampedValue / step) * step;
    
    // Обновляем состояние через onChange
    onChange(steppedValue);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
      (e.target as HTMLInputElement).blur();
    }
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-2">
          {label}
        </label>
      </div>

      {/* Input Field */}
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyPress={handleInputKeyPress}
          className="w-full pl-4 pr-20 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-right font-mono text-lg"
          placeholder={`${formatNumber(min)}-${formatNumber(max)}`}
        />
        <span className="absolute right-4 top-3 text-gray-500 text-sm bg-white px-2">
          {suffix}
        </span>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          onInput={handleSliderInput}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider focus:outline-none"
          style={{
            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>{formatNumber(min)} {suffix}</span>
          <span>{formatNumber(max)} {suffix}</span>
        </div>
      </div>
    </div>
  );
};

