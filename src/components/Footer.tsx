import { Zap, Send, Youtube, MessageSquare, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-16 md:pt-20 pb-8 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-violet/5 via-cyan-500/3 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Banner */}
        <div className="relative glass-vivid rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 md:mb-16 overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-violet/10 via-cyan-500/5 to-lime/10" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/15 rounded-full blur-[80px]" />
          <div className="relative">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3">
              Готов сдать на <span className="text-gradient">максимум</span>?
            </h3>
            <p className="text-slate-400 text-sm md:text-base mb-5 md:mb-6 max-w-md mx-auto">
              Запишись на бесплатный пробный урок и получи индивидуальный план подготовки
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-violet via-violet-light to-cyan-500 text-white text-sm md:text-base font-bold hover:shadow-lg hover:shadow-violet/30 transition-all duration-300 hover:scale-105 animate-gradient group"
            >
              Начать бесплатно
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="sm:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 md:mb-5">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-violet via-cyan-500 to-lime flex items-center justify-center shadow-lg shadow-violet/20">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" />
              </div>
              <span className="font-extrabold text-lg md:text-xl tracking-tight">
                <span className="text-gradient">BREAK</span><span className="text-white">THROUGH</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-5 md:mb-6">
              Онлайн-школа подготовки к ЕГЭ и ОГЭ. Помогаем ученикам поступать на бюджет
              в лучшие ВУЗы России с 2020 года.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Send, label: 'Telegram' },
                { icon: MessageSquare, label: 'VK' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3 md:mb-4">Навигация</h4>
            <ul className="space-y-2 md:space-y-2.5">
              {[
                { label: 'Предметы', href: '#subjects' },
                { label: 'Методика', href: '#method' },
                { label: 'Преподаватели', href: '#tutors' },
                { label: 'Тарифы', href: '#pricing' },
                { label: 'Результаты', href: '#reviews' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-slate-400 hover:text-cyan-300 transition-colors duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3 md:mb-4">Контакты</h4>
            <ul className="space-y-2.5 md:space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-violet-light flex-shrink-0" />
                <span className="text-sm text-slate-300 whitespace-nowrap">+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">hello@breakthrough.ru</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-lime flex-shrink-0" />
                <span className="text-sm text-slate-300">@breakthrough_ege</span>
              </li>
            </ul>

            <div className="mt-5 md:mt-6 p-3 md:p-4 rounded-xl glass-vivid">
              <p className="text-xs text-slate-300 font-medium mb-2.5 md:mb-3">Запишись на бесплатный урок</p>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="flex-1 min-w-0 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet/50 focus:shadow-lg focus:shadow-violet/10 transition-all"
                />
                <button className="px-3 md:px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet/20 transition-all hover:scale-105 flex-shrink-0">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2025 BREAKTHROUGH. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
