import React from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  isOn, 
  onToggle, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: {
      container: 'w-10 h-5',
      circle: 'w-4 h-4',
      translate: 'translate-x-5'
    },
    md: {
      container: 'w-12 h-6',
      circle: 'w-5 h-5',
      translate: 'translate-x-6'
    },
    lg: {
      container: 'w-14 h-7',
      circle: 'w-6 h-6',
      translate: 'translate-x-7'
    }
  };

  const classes = sizeClasses[size];

  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseDown={(e) => e.preventDefault()}
      className={`${classes.container} relative inline-flex items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        isOn 
          ? 'bg-green-500 hover:bg-green-600' 
          : 'bg-gray-300 hover:bg-gray-400'
      }`}
      role="switch"
      aria-checked={isOn}
    >
      <span className="sr-only">Переключить категорию</span>
      <span
        className={`${classes.circle} inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
          isOn ? classes.translate : 'translate-x-0'
        }`}
      />
    </button>
  );
};
