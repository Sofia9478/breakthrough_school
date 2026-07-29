import { Monitor, MessageCircle, BarChart3, UserCheck, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Крутая веб-платформа',
    description: 'Интерактивные ДЗ, мгновенная проверка AI и подробные разборы от менторов. Учись откуда угодно.',
    color: 'from-violet via-violet-light to-cyan-400',
    glow: 'hover:shadow-violet/20',
    badge: 'AI-powered',
    badgeColor: 'bg-violet/20 text-violet-light',
  },
  {
    icon: MessageCircle,
    title: 'Атмосфера и поддержка',
    description: 'Закрытые Telegram-чаты, мемы, поддержка однокурсников и кураторов. Ноль стресса.',
    color: 'from-lime via-emerald-400 to-cyan-400',
    glow: 'hover:shadow-lime/20',
    badge: 'Community',
    badgeColor: 'bg-lime/20 text-lime',
  },
  {
    icon: BarChart3,
    title: 'Реальная аналитика',
    description: 'Ежемесячные пробники с жёсткой шкалой оценивания. Видишь прогресс в цифрах.',
    color: 'from-orange via-amber-400 to-yellow-300',
    glow: 'hover:shadow-orange/20',
    badge: 'Analytics',
    badgeColor: 'bg-orange/20 text-orange',
  },
  {
    icon: UserCheck,
    title: 'Личный наставник',
    description: 'Твой бадди, который сам сдал на 95+ и ведёт тебя весь год. Отвечает за 5 минут.',
    color: 'from-pink-400 via-rose-500 to-violet',
    glow: 'hover:shadow-pink-400/20',
    badge: '24/7 Support',
    badgeColor: 'bg-pink-500/20 text-pink-300',
  },
];

export default function Features() {
  return (
    <section id="method" className="py-16 md:py-20 lg:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-lime/8 to-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-violet/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-lime/15 to-emerald-500/15 border border-lime/20 text-lime text-sm font-semibold mb-4 md:mb-5">
            <BarChart3 className="w-4 h-4" />
            Методика
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ПОЧЕМУ С НАМИ СДАЮТ НА{' '}
            <span className="text-gradient">90+</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative glass-light rounded-2xl p-6 md:p-7 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${feature.glow} overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4 md:mb-5">
                    <div className={`w-11 h-11 md:w-[52px] md:h-[52px] rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${feature.badgeColor}`}>
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-white mb-2 flex items-center gap-2">
                    {feature.title}
                    <ArrowUpRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
