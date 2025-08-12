import React from 'react';
import { SimpleCalculator } from './SimpleCalculator';

export const ReferralTab: React.FC = () => {
  return (
    <SimpleCalculator
      title="🤝 Прогноз доходности"
      inputLabel="Реферальный оборот"
      multipliers={{
        pessimistic: 0.05,
        realistic: 0.10,
        optimistic: 0.15
      }}
      maxValue={100000000}
    />
  );
};