// Тест расчетов калькулятора Pulse

console.log('=== Тестирование расчетов реферальной программы ===');

// Значения для тестирования
const testValues = {
  level1: 5000,
  level2: 10000,
  level3: 15000
};

// Проценты вознаграждения для инвестиций
const rewards = {
  level1: 10, // 10%
  level2: 5,  // 5%
  level3: 5   // 5%
};

console.log('\n--- Расчеты по уровням (как в SliderInput) ---');
for (const [level, value] of Object.entries(testValues)) {
  const reward = rewards[level];
  const rewardAmount = (value * reward) / 100;
  console.log(`${level}: ${value} USDT × ${reward}% = ${rewardAmount.toFixed(2)} USDT`);
}

console.log('\n--- Общий расчет (как в ResultsDisplay) ---');
const investmentIncome = (
  (testValues.level1 * 0.10) +
  (testValues.level2 * 0.05) +
  (testValues.level3 * 0.05)
);
console.log(`Общий доход с инвестиций: ${investmentIncome.toFixed(2)} USDT`);

console.log('\n--- Проверка математики ---');
console.log(`5000 × 10% = ${(5000 * 0.10).toFixed(2)} USDT`);
console.log(`10000 × 5% = ${(10000 * 0.05).toFixed(2)} USDT`);
console.log(`15000 × 5% = ${(15000 * 0.05).toFixed(2)} USDT`);
console.log(`Сумма: ${(500 + 500 + 750).toFixed(2)} USDT`);

console.log('\n--- Анализ проблемы ---');
const incorrectResult = 50;
const expectedResult = 750;
const actualPercentage = (incorrectResult / 15000) * 100;
console.log(`Если показывается ${incorrectResult} USDT при 15000 USDT:`);
console.log(`Фактический процент: ${actualPercentage.toFixed(3)}%`);
console.log(`Ожидаемый процент: 5.000%`);
console.log(`Разница: ${((expectedResult - incorrectResult) / expectedResult * 100).toFixed(1)}% недооценка`);
