import { Star, ArrowRight, TrendingUp, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Кирилл П.',
    subject: 'Информатика',
    before: 52,
    after: 92,
    text: 'Пришёл с нуля, вообще не понимал задачи 2-й части. За 7 месяцев научился решать всё. Поступил в ВШЭ!',
    gradient: 'from-violet via-violet-light to-cyan-400',
    scoreGlow: 'shadow-violet/20',
  },
  {
    name: 'Алина С.',
    subject: 'Русский язык',
    before: 64,
    after: 96,
    text: 'Анна — лучший преподаватель, что у меня был. Объяснила сочинение так, что я стала писать на максимум.',
    gradient: 'from-lime via-emerald-400 to-cyan-400',
    scoreGlow: 'shadow-lime/20',
  },
  {
    name: 'Максим Д.',
    subject: 'Профильная мат.',
    before: 48,
    after: 86,
    text: 'С 48 до 86 за 8 месяцев. Кто бы мог подумать. Менторы реально разжёвывают каждую тему.',
    gradient: 'from-orange via-amber-400 to-yellow-300',
    scoreGlow: 'shadow-orange/20',
  },
  {
    name: 'Дарья К.',
    subject: 'Обществознание',
    before: 58,
    after: 91,
    text: 'Закрытый чат — это спасение. Там всегда кто-то поможет, даже в 2 часа ночи перед пробником.',
    gradient: 'from-pink-400 via-rose-500 to-violet',
    scoreGlow: 'shadow-pink-400/20',
  },
  {
    name: 'Артём Л.',
    subject: 'Физика',
    before: 44,
    after: 82,
    text: 'Физика казалась невозможной. Но через практику и разборы реальных задач всё встало на места.',
    gradient: 'from-cyan-400 via-blue-500 to-violet',
    scoreGlow: 'shadow-cyan-400/20',
  },
  {
    name: 'София М.',
    subject: 'Литература',
    before: 70,
    after: 98,
    text: 'С Breakthrough я наконец полюбила литературу. Преподаватель объясняет так, что хочется читать ещё.',
    gradient: 'from-amber-400 via-orange to-pink-500',
    scoreGlow: 'shadow-amber-400/20',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-20 lg:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-orange/5 to-pink-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-lime/5 to-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-lime/15 to-emerald-500/15 border border-lime/20 text-lime text-sm font-semibold mb-4 md:mb-5">
            <TrendingUp className="w-4 h-4" />
            Результаты
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ИСТОРИИ{' '}
            <span className="text-gradient">УСПЕХА</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className={`group relative glass-light rounded-2xl p-5 md:p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${review.scoreGlow} overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

              <div className="relative">
                <div className="flex items-center justify-between mb-4 md:mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-xs md:text-sm font-bold text-white shadow-lg`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{review.name}</p>
                      <p className="text-xs text-slate-400">{review.subject}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 text-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.4)]" fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4 md:mb-5 p-3 md:p-3.5 rounded-xl bg-white/[0.03]">
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-lg md:text-xl font-bold text-slate-500 line-through decoration-slate-600">{review.before}</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-lime flex-shrink-0" />
                    <span className="text-xl md:text-2xl font-extrabold text-transparent bg-gradient-to-r from-lime to-cyan-400 bg-clip-text">{review.after}</span>
                    <span className="text-xs text-slate-400 ml-auto whitespace-nowrap">баллов ЕГЭ</span>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-700 absolute -top-1 -left-1" />
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed pl-4">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
