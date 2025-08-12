// Тест расчета вознаграждений
console.log('=== ТЕСТ РАСЧЕТА ВОЗНАГРАЖДЕНИЙ ===');

// Тестовые данные
const testCases = [
  { value: 15000, reward: 5, expected: 750 },
  { value: 10000, reward: 10, expected: 1000 },
  { value: 5000, reward: 5, expected: 250 },
  { value: 1000, reward: 10, expected: 100 }
];

console.log('\n1. Метод из SliderInput.tsx:');
testCases.forEach(({ value, reward, expected }) => {
  // Метод из SliderInput.tsx
  const result1 = Math.round((Number(value) * Number(reward)) / 100 * 100) / 100;
  console.log(`${value} USDT × ${reward}% = ${result1} USDT (ожидалось: ${expected})`);
  console.log(`✓ Корректно: ${result1 === expected ? 'ДА' : 'НЕТ'}`);
});

console.log('\n2. Метод из SimpleSliderInput.tsx:');
testCases.forEach(({ value, reward, expected }) => {
  // Метод из SimpleSliderInput.tsx
  const result2 = parseFloat(((value * reward) / 100).toFixed(2));
  console.log(`${value} USDT × ${reward}% = ${result2} USDT (ожидалось: ${expected})`);
  console.log(`✓ Корректно: ${result2 === expected ? 'ДА' : 'НЕТ'}`);
});

console.log('\n3. Простой метод:');
testCases.forEach(({ value, reward, expected }) => {
  // Простой метод
  const result3 = (value * reward) / 100;
  console.log(`${value} USDT × ${reward}% = ${result3} USDT (ожидалось: ${expected})`);
  console.log(`✓ Корректно: ${result3 === expected ? 'ДА' : 'НЕТ'}`);
});

console.log('\n=== КОНЕЦ ТЕСТА ===');
