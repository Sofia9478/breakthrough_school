import { useState } from 'react';
import { BookOpen, Calculator, Code, Users, Palette, ChevronRight, Sparkles } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  icon: React.ElementType;
  avgScore: number;
  color: string;
  glowColor: string;
  mentor: string;
  description: string;
  emoji: string;
}

const subjects: Subject[] = [
  {
    id: 'russian',
    name: 'Русский язык',
    icon: BookOpen,
    avgScore: 86,
    color: 'from-violet via-violet-light to-cyan-400',
    glowColor: 'shadow-violet/30',
    mentor: 'Анна К.',
    description: 'Сочинения, тесты и орфография без зубрёжки. Разберём все ловушки ЕГЭ.',
    emoji: '📝',
  },
  {
    id: 'math',
    name: 'Профильная математика',
    icon: Calculator,
    avgScore: 81,
    color: 'from-lime via-emerald-400 to-cyan-400',
    glowColor: 'shadow-lime/30',
    mentor: 'Дмитрий С.',
    description: 'От базовых задач до части 2. Логика, а не заучивание формул.',
    emoji: '🧮',
  },
  {
    id: 'informatics',
    name: 'Информатика / Физика',
    icon: Code,
    avgScore: 85,
    color: 'from-orange via-amber-400 to-yellow-300',
    glowColor: 'shadow-orange/30',
    mentor: 'Алексей М.',
    description: 'Программирование на Python, алгоритмы, физические задачи на понимание.',
    emoji: '💻',
  },
  {
    id: 'social',
    name: 'Обществознание / История',
    icon: Users,
    avgScore: 83,
    color: 'from-cyan-400 via-blue-500 to-violet',
    glowColor: 'shadow-cyan-400/30',
    mentor: 'Мария В.',
    description: 'Конституция, экономика, история без зубрёжки дат — через логику и связи.',
    emoji: '⚖️',
  },
  {
    id: 'literature',
    name: 'Литература / Дизайн',
    icon: Palette,
    avgScore: 88,
    color: 'from-pink-400 via-rose-500 to-orange',
    glowColor: 'shadow-pink-400/30',
    mentor: 'Елена Т.',
    description: 'Анализ текстов, творческие задания. Для тех, кто метит в гуманитарные ВУЗы.',
    emoji: '🎨',
  },
];

export default function SubjectSelector() {
  const [selected, setSelected] = useState<string>(subjects[0].id);
  const active = subjects.find((s) => s.id === selected)!;

  return (
    <section id="subjects" className="py-16 md:py-20 lg:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-violet/10 to-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-pink-500/8 to-orange/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet/15 to-cyan-500/15 border border-violet/20 text-cyan-300 text-sm font-semibold mb-4 md:mb-5">
            <Sparkles className="w-4 h-4" />
            Предметы
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ВЫБЕРИ СВОИ{' '}
            <span className="text-gradient">ПРЕДМЕТЫ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {/* Subject cards - on tablet they go 2-col, on mobile 1-col, on xl we get sidebar */}
          <div className="md:col-span-2 xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
            {subjects.map((subject) => {
              const Icon = subject.icon;
              const isActive = selected === subject.id;
              return (
                <button
                  key={subject.id}
                  onClick={() => setSelected(subject.id)}
                  className={`group relative p-4 md:p-5 rounded-2xl text-left transition-all duration-300 overflow-hidden ${
                    isActive
                      ? `glass-vivid scale-[1.02] shadow-xl ${subject.glowColor}`
                      : 'glass-light hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-[0.06]`} />
                  )}
                  <div className="relative flex items-start gap-3 md:gap-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center flex-shrink-0 shadow-lg ${isActive ? subject.glowColor : ''} transition-shadow`}>
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                        <span className="truncate">{subject.name}</span>
                        <span className="text-base flex-shrink-0">{subject.emoji}</span>
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">Ср. балл:</span>
                        <span className="text-sm font-extrabold text-transparent bg-gradient-to-r from-lime to-cyan-400 bg-clip-text">{subject.avgScore}</span>
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <div className={`absolute top-3 right-3 w-3 h-3 rounded-full bg-gradient-to-br ${subject.color} animate-pulse shadow-lg`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail panel - full width on tablet below cards, sidebar on xl */}
          <div className="md:col-span-2 xl:col-span-1 relative glass-vivid rounded-2xl p-6 md:p-7 lg:p-8 flex flex-col justify-between overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${active.color} opacity-[0.04]`} />
            <div className="relative">
              <div className="flex items-start gap-4 md:gap-0 md:flex-col">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center md:mb-5 shadow-xl ${active.glowColor} flex-shrink-0`}>
                  <active.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:w-full">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 flex items-center gap-2">
                    {active.name} <span className="text-xl">{active.emoji}</span>
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 md:mb-5">{active.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-5 md:mb-6 p-3 rounded-xl bg-white/5">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${active.color} flex items-center justify-center text-xs font-bold text-white`}>
                  {active.mentor.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{active.mentor}</p>
                  <p className="text-xs text-slate-400">Наставник | 100 баллов</p>
                </div>
              </div>
            </div>
            <a
              href="#pricing"
              className={`relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r ${active.color} text-white font-bold text-sm hover:shadow-xl ${active.glowColor} transition-all duration-300 hover:scale-[1.02] group`}
            >
              Записаться на курс
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
