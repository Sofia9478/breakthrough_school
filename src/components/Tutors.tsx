import { Star, Quote } from 'lucide-react';

const tutors = [
  {
    name: 'Анна Красильникова',
    subject: 'Русский язык',
    score: 100,
    university: 'МГУ, Филологический',
    quote: 'Ненавижу зубрёжку. Мы учим через логику и лайфхаки!',
    avatar: 'АК',
    gradient: 'from-violet via-violet-light to-cyan-400',
    glow: 'group-hover:shadow-violet/30',
  },
  {
    name: 'Дмитрий Соколов',
    subject: 'Профильная математика',
    score: 98,
    university: 'МФТИ, Прикладная математика',
    quote: 'Математика — это не формулы, а способ мыслить.',
    avatar: 'ДС',
    gradient: 'from-lime via-emerald-400 to-cyan-400',
    glow: 'group-hover:shadow-lime/30',
  },
  {
    name: 'Алексей Морозов',
    subject: 'Информатика',
    score: 100,
    university: 'ВШЭ, Компьютерные науки',
    quote: 'Научу решать задачи быстрее, чем ChatGPT.',
    avatar: 'АМ',
    gradient: 'from-orange via-amber-400 to-yellow-300',
    glow: 'group-hover:shadow-orange/30',
  },
  {
    name: 'Мария Волкова',
    subject: 'Обществознание',
    score: 97,
    university: 'СПбГУ, Юриспруденция',
    quote: 'Общество — это про жизнь. Сделаю понятным за месяц.',
    avatar: 'МВ',
    gradient: 'from-pink-400 via-rose-500 to-violet',
    glow: 'group-hover:shadow-pink-400/30',
  },
];

export default function Tutors() {
  return (
    <section id="tutors" className="py-16 md:py-20 lg:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-orange/8 to-pink-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange/15 to-pink-500/15 border border-orange/20 text-orange text-sm font-semibold mb-4 md:mb-5">
            <Star className="w-4 h-4" fill="currentColor" />
            Преподаватели
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ТВОИ НАСТАВНИКИ —{' '}
            <span className="text-gradient-warm">СТОБАЛЛЬНИКИ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {tutors.map((tutor) => (
            <div
              key={tutor.name}
              className={`group relative glass-light rounded-2xl p-5 md:p-6 transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl ${tutor.glow} overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tutor.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

              <div className="relative">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${tutor.gradient} flex items-center justify-center text-lg md:text-xl font-bold text-white mb-3 md:mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                  {tutor.avatar}
                </div>

                <h3 className="font-bold text-white text-sm md:text-base mb-1">{tutor.name}</h3>
                <p className="text-xs md:text-sm text-slate-400 mb-2 md:mb-3">{tutor.subject}</p>

                <div className="flex items-center gap-2 mb-2 md:mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange/10 w-fit">
                  <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
                  <span className="text-xs md:text-sm font-bold text-amber-300">{tutor.score} баллов</span>
                </div>

                <p className="text-xs text-slate-500 mb-3 md:mb-4">{tutor.university}</p>

                <div className="pt-3 md:pt-4 border-t border-white/5 relative">
                  <Quote className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600 absolute -top-2 left-0" />
                  <p className="text-xs md:text-sm text-slate-300 italic pl-1">"{tutor.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
