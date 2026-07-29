import { useState } from 'react';
import { Check, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  popular?: boolean;
  gradient: string;
  iconGradient: string;
  buttonGradient: string;
  glow: string;
}

const plans: Plan[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: '3 990',
    period: '/ мес',
    description: 'Всё для самостоятельной подготовки',
    features: [
      'Вебинары в записи',
      'Домашние задания с автопроверкой',
      'Конспекты и шпаргалки',
      'Общий Telegram-чат',
      'Ежемесячные пробники',
    ],
    icon: Zap,
    gradient: 'from-slate-700/50 to-slate-800/50',
    iconGradient: 'from-cyan-400 to-blue-500',
    buttonGradient: 'from-cyan-500 to-blue-500',
    glow: 'hover:shadow-cyan-400/20',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '6 990',
    period: '/ мес',
    description: 'Максимум поддержки и контроля',
    features: [
      'Все вебинары + записи',
      'Личный наставник 24/7',
      'Индивидуальный разбор ошибок',
      'Пробники с подробной аналитикой',
      'Приоритетная проверка ДЗ',
      'Персональный план подготовки',
    ],
    icon: Crown,
    popular: true,
    gradient: 'from-violet/20 to-cyan-500/10',
    iconGradient: 'from-violet to-cyan-400',
    buttonGradient: 'from-violet via-violet-light to-cyan-400',
    glow: 'hover:shadow-violet/30',
  },
  {
    id: 'vip',
    name: 'VIP Premium',
    price: '14 990',
    period: '/ мес',
    description: 'Индивидуальная работа 1-на-1',
    features: [
      'Всё из тарифа Pro',
      'Индивидуальные занятия 1-на-1',
      'Персональная стратегия поступления',
      'Помощь с выбором ВУЗа и направления',
      'Связь с преподом напрямую',
      'Гарантия результата',
    ],
    icon: Sparkles,
    gradient: 'from-orange/15 to-pink-500/10',
    iconGradient: 'from-orange via-pink-500 to-violet',
    buttonGradient: 'from-orange to-pink-500',
    glow: 'hover:shadow-orange/30',
  },
];

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet/8 via-cyan-500/5 to-pink-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange/15 to-pink-500/15 border border-orange/20 text-orange text-sm font-semibold mb-4 md:mb-5">
            <Crown className="w-4 h-4" />
            Тарифы
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ВЫБЕРИ СВОЙ{' '}
            <span className="text-gradient-warm">ФОРМАТ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === plan.id;
            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative flex flex-col rounded-2xl p-6 md:p-7 lg:p-8 transition-all duration-500 overflow-hidden ${
                  plan.popular
                    ? 'glass-vivid ring-2 ring-violet/40 md:col-span-2 lg:col-span-1 lg:scale-105'
                    : 'glass-light'
                } ${plan.glow} ${isHovered ? 'scale-[1.02] shadow-2xl' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`} />

                {plan.popular && (
                  <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-violet via-cyan-400 to-lime rounded-t-2xl" />
                )}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet to-cyan-400 text-white text-xs font-bold shadow-lg glow-violet">
                    Популярный
                  </div>
                )}

                <div className="relative flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4 md:mb-5">
                    <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br ${plan.iconGradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white">{plan.name}</h3>
                  </div>

                  <div className="mb-3 md:mb-4">
                    <span className="text-2xl md:text-3xl font-extrabold text-white">{plan.price} &#8381;</span>
                    <span className="text-slate-400 text-sm ml-1">{plan.period}</span>
                  </div>

                  <p className="text-sm text-slate-400 mb-5 md:mb-6">{plan.description}</p>

                  <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.iconGradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 md:py-3.5 rounded-xl font-bold text-sm transition-all duration-300 bg-gradient-to-r ${plan.buttonGradient} text-white hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 group`}
                  >
                    Записаться
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
