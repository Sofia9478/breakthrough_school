import { Zap, ArrowRight, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

export default function Hero() {
  const badges = [
    { icon: Award, text: '98% поступают на бюджет', color: 'from-lime to-emerald-400', glow: 'shadow-lime/20' },
    { icon: TrendingUp, text: 'Средний балл — 84+', color: 'from-violet to-cyan-400', glow: 'shadow-violet/20' },
    { icon: Users, text: '15,000+ выпускников', color: 'from-orange to-pink-500', glow: 'shadow-orange/20' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-20 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-br from-violet/30 to-cyan-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[10%] -right-20 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-br from-lime/20 to-emerald-400/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] left-[40%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-to-br from-orange/15 to-pink-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[20%] right-[20%] w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-cyan-400/10 rounded-full blur-[80px] animate-float" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] animate-spin-slow">
          <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-violet/60" />
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
          <div className="absolute top-1/2 left-0 w-1 h-1 rounded-full bg-lime/60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full glass-vivid text-xs md:text-sm font-semibold text-slate-200 mb-6 md:mb-8 animate-slide-up hover:scale-105 transition-transform cursor-default">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            Набор на 2025/2026 открыт
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-5 md:mb-7 animate-slide-up px-2 md:px-0">
            <span className="text-white">СДАЙ ЕГЭ НА </span>
            <span className="text-gradient-fire inline-block">80+ </span>
            <br className="hidden md:block" />
            <span className="text-white">БЕЗ ЗУБРЁЖКИ</span>
            <span className="text-gradient-cool inline-block ml-1 md:ml-2"> И ВЫГОРАНИЯ</span>
            <span className="inline-block ml-2 md:ml-3 animate-float">
              <Zap className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange inline drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" fill="currentColor" />
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-slide-up px-4 md:px-0" style={{ animationDelay: '0.1s' }}>
            Интерактивная платформа, топовые преподы-стобалльники и поддержка 24/7.
            <span className="text-cyan-300 font-medium"> Поступи на бюджет в ВУЗ мечты!</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-14 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-2.5 px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-violet via-violet-light to-cyan-500 text-white font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 glow-violet animate-gradient w-full sm:w-auto justify-center"
            >
              Попробовать бесплатно
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#calculator"
              className="group inline-flex items-center gap-2.5 px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-slate-500/50 text-slate-100 font-semibold text-sm md:text-base hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            >
              Рассчитать шансы
              <TrendingUp className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {badges.map((badge) => (
              <div
                key={badge.text}
                className={`flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-2.5 md:py-3 rounded-full glass-vivid shadow-lg ${badge.glow} hover:scale-105 transition-all duration-300 cursor-default`}
              >
                <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center`}>
                  <badge.icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-white whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
