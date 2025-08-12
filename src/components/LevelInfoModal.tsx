import React from 'react';

interface LevelInfoModalProps {
  onClose: () => void;
}

export const LevelInfoModal: React.FC<LevelInfoModalProps> = ({ onClose }) => {
  const levels = [
    {
      name: 'Новичок',
      icon: '🌱',
      requirements: [
        'От 1,000 USDT собственных инвестиций',
        'ИЛИ 10+ лично приглашённых пользователей'
      ],
      benefits: [
        '10% с инвестиций 1-го уровня',
        '4% с игровой комиссии 1-го уровня',
        '10% с подписок 1-го уровня'
      ],
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800'
    },
    {
      name: 'Профессионал',
      icon: '💼',
      requirements: [
        'От 5,000 USDT собственных инвестиций',
        'ИЛИ 25+ лично приглашённых пользователей'
      ],
      benefits: [
        'Все привилегии Новичка +',
        '5% с инвестиций 2-го уровня',
        '2% с игровой комиссии 2-го уровня',
        '5% с подписок 2-го уровня'
      ],
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800'
    },
    {
      name: 'Амбассадор',
      icon: '👑',
      requirements: [
        'От 10,000 USDT собственных инвестиций',
        'ИЛИ 50+ лично приглашённых пользователей'
      ],
      benefits: [
        'Все привилегии Профессионала +',
        '5% с инвестиций 3-го уровня',
        '1% с игровой комиссии 3-го уровня',
        '5% с подписок 3-го уровня',
        'Максимальные привилегии и статус'
      ],
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            ℹ️ Условия уровней реферальной программы
          </h2>
          <button
            onClick={onClose}
            onMouseDown={(e) => e.preventDefault()}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((level, index) => (
              <div key={index} className={`${level.bgColor} ${level.borderColor} border rounded-xl p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{level.icon}</span>
                  <h3 className={`text-xl font-bold ${level.textColor}`}>
                    {level.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className={`font-semibold mb-2 ${level.textColor}`}>
                    Условия получения:
                  </h4>
                  <ul className="space-y-1">
                    {level.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`font-semibold mb-2 ${level.textColor}`}>
                    Привилегии:
                  </h4>
                  <ul className="space-y-1">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              💡 Как работает многоуровневая система:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <p className="mb-2">
                  <strong>1-й уровень:</strong> Люди, которых вы пригласили лично
                </p>
                <p className="mb-2">
                  <strong>2-й уровень:</strong> Люди, которых пригласили ваши рефералы
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong>3-й уровень:</strong> Люди, которых пригласили рефералы 2-го уровня
                </p>
                <p className="text-xs text-blue-600 mt-2">
                  Чем выше ваш статус, тем больше уровней вам доступно!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};