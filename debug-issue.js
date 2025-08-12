// Анализ проблемы с расчетом 3-го уровня

console.log('=== АНАЛИЗ КРИТИЧЕСКОЙ ОШИБКИ ===');

// Значения из тестирования
const value = 15000;  // USDT
const reward = 5;     // процент
const incorrectResult = 50;  // что показывается
const expectedResult = 750;  // что должно быть

console.log('\n--- Правильный расчет ---');
const correctCalc = (value * reward) / 100;
console.log(`${value} × ${reward}% = ${value} × ${reward} / 100 = ${correctCalc}`);

console.log('\n--- Анализ неправильного результата ---');
const actualPercent = (incorrectResult / value) * 100;
console.log(`Фактический результат: ${incorrectResult}`);
console.log(`Фактический процент: ${actualPercent.toFixed(6)}%`);

console.log('\n--- Возможные причины ошибки ---');

// Возможная ошибка 1: деление вместо умножения
const error1 = value / reward / 100;
console.log(`Ошибка 1 (деление): ${value} / ${reward} / 100 = ${error1}`);

// Возможная ошибка 2: неправильный порядок операций
const error2 = value / (reward * 100);
console.log(`Ошибка 2: ${value} / (${reward} × 100) = ${error2}`);

// Возможная ошибка 3: двойное деление на 100
const error3 = (value * reward) / 100 / 100;
console.log(`Ошибка 3 (двойное деление): ${value} × ${reward} / 100 / 100 = ${error3}`);

// Возможная ошибка 4: reward уже в процентах
const error4 = value * (reward / 100) / 100;
console.log(`Ошибка 4: ${value} × (${reward}/100) / 100 = ${error4}`);

console.log('\n--- Поиск точного соответствия ---');
if (Math.abs(error1 - incorrectResult) < 0.01) console.log('👆 Ошибка 1 - НАЙДЕНО СООТВЕТСТВИЕ!');
if (Math.abs(error2 - incorrectResult) < 0.01) console.log('👆 Ошибка 2 - НАЙДЕНО СООТВЕТСТВИЕ!');
if (Math.abs(error3 - incorrectResult) < 0.01) console.log('👆 Ошибка 3 - НАЙДЕНО СООТВЕТСТВИЕ!');
if (Math.abs(error4 - incorrectResult) < 0.01) console.log('👆 Ошибка 4 - НАЙДЕНО СООТВЕТСТВИЕ!');

console.log('\n--- Проверка других значений ---');
// Проверим для 1-го уровня (должно быть правильно)
const level1_value = 5000;
const level1_reward = 10;
const level1_expected = (level1_value * level1_reward) / 100; // 500
console.log(`1-й уровень: ${level1_value} × ${level1_reward}% = ${level1_expected}`);

// Проверим для 2-го уровня (должно быть правильно)
const level2_value = 10000;
const level2_reward = 5;
const level2_expected = (level2_value * level2_reward) / 100; // 500
console.log(`2-й уровень: ${level2_value} × ${level2_reward}% = ${level2_expected}`);
