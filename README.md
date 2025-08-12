# Pulse Calculator

## Описание

Калькулятор доходности проекта Pulse - интерактивное веб-приложение для расчета потенциальной прибыли по двум направлениям:

- **💼 Presale** - расчет доходности от участия в пресейле (максимум 5,000,000 USDT)
- **🤝 Реферальная программа** - расчет доходности реферальной программы (максимум 100,000,000 USDT)

## Особенности

- 📱 Адаптивный дизайн для всех устройств
- 🎯 Три сценария прогноза: Пессимистичный, Реалистичный, Оптимистичный
- 💰 Автоматическое форматирование больших чисел (с суффиксом "М" для миллионов)
- 🔄 Синхронизация слайдера и поля ввода
- 🎨 Современный интерфейс с градиентами

## Технологии

- **React** 18.3.1
- **TypeScript**
- **Tailwind CSS**
- **Vite**

## Запуск проекта

1. Клонируйте репозиторий:
```bash
git clone https://github.com/Salvadorfelipedali/pulse-calculator.git
cd pulse-calculator
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите development сервер:
```bash
npm run dev
```

4. Соберите проект для продакшена:
```bash
npm run build
```

## GitHub Pages

Сайт автоматически деплоится на GitHub Pages:

🌐 **Live Demo:** [https://salvadorfelipedali.github.io/pulse-calculator/](https://salvadorfelipedali.github.io/pulse-calculator/)

## Структура проекта

```
src/
├── components/
│   ├── SimpleCalculator.tsx      # Основной компонент калькулятора
│   ├── ScenarioSliderInput.tsx    # Компонент слайдера с полем ввода
│   ├── InvestmentTab.tsx          # Вкладка Presale
│   └── ReferralTab.tsx            # Вкладка Реферальная программа
├── lib/
│   └── utils.ts                   # Утилиты
├── hooks/
│   └── use-mobile.tsx             # Хук для определения мобильных устройств
├── App.tsx                        # Главный компонент приложения
└── main.tsx                       # Точка входа
```

## Автор

Разработано с помощью MiniMax Agent для проекта Pulse.

## Лицензия

MIT License