import React from 'react';
import { SimpleCalculator } from './SimpleCalculator';

export const InvestmentTab: React.FC = () => {
  return (
    <SimpleCalculator
      title="💼 Presale"
      inputLabel="Объем покупки"
      multipliers={{
        pessimistic: 6,
        realistic: 50,
        optimistic: 250
      }}
      maxValue={5000000}
    />
  );
};