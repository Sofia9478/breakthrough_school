import { useState } from 'react';
import { GraduationCap, TrendingUp, Sparkles, Target } from 'lucide-react';

interface UniversityTier {
  minScore: number;
  label: string;
  universities: string[];
  color: string;
  gradient: string;
}

const tiers: UniversityTier[] = [
  {
    minScore: 290,
    label: 'Топ-5 России',
    universities: ['МГУ', 'МФТИ', 'ВШЭ', 'СПбГУ', 'МГИМО'],
    color: 'text-amber-300',
    gradient: 'from-amber-400 to-orange',
  },
  {
    minScore: 270,
    label: 'Топ-15 России',
    universities: ['ИТМО', 'Бауманка', 'РАНХиГС', 'Финансовый Университет'],
    color: 'text-violet-light',
    gradient: 'from-violet to-cyan-400',
  },
  {
    minScore: 250,
    label: 'Сильные ВУЗы',
    universities: ['РУДН', 'РЭУ Плеханова', 'МИРЭА', 'МАИ'],
    color: 'text-lime',
    gradient: 'from-lime to-emerald-400',
  },
  {
    minScore: 230,
    label: 'Бюджет гарантирован',
    universities: ['Региональные ведущие ВУЗы', 'Большинство направлений'],
    color: 'text-cyan-300',
    gradient: 'from-cyan-400 to-blue-500',
  },
];

export default function Calculator() {
  const [score, setScore] = useState(270);

  const matchedTiers = tiers.filter((t) => score >= t.minScore);
  const bestTier = matchedTiers[0];
  const progressPercent = ((score - 180) / 120) * 100;

  return (
    <section id="calculator" className="py-16 md:py-20 lg:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-violet/10 to-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-orange/5 to-pink-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet/15 to-cyan-500/15 border border-violet/20 text-cyan-300 text-sm font-semibold mb-4 md:mb-5">
            <Target className="w-4 h-4" />
            Калькулятор
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            КУДА ТЫ СМОЖЕШЬ{' '}
            <span className="text-gradient">ПОСТУПИТЬ</span>?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative glass-vivid rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-cyan-500/5" />

            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Сумма баллов по 3 предметам
                </label>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet/20 to-cyan-500/20 border border-violet/30 w-fit">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-2xl font-extrabold text-gradient">{score}</span>
                </div>
              </div>

              <div className="relative mb-2">
                <input
                  type="range"
                  min={180}
                  max={300}
                  value={score}
                  onChange={(e) => setScore(Number(e.target.value))}
                  className="w-full h-2.5 rounded-full cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #6366F1 0%, #06B6D4 ${progressPercent}%, #1e293b ${progressPercent}%)`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 mb-6 md:mb-8">
                <span>180</span>
                <span>220</span>
                <span>260</span>
                <span>300</span>
              </div>

              {bestTier ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-5 md:mb-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02]">
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${bestTier.gradient} flex items-center justify-center shadow-lg`}>
                      <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div>
                      <span className={`text-base md:text-lg font-bold ${bestTier.color}`}>
                        {bestTier.label}
                      </span>
                      <p className="text-xs text-slate-400">Твой уровень с {score} баллами</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchedTiers.map((tier) => (
                      <div key={tier.label} className="glass-light rounded-xl p-3 md:p-4 hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-2 mb-2 md:mb-2.5">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${tier.gradient}`} />
                          <p className={`text-xs font-bold ${tier.color}`}>{tier.label}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {tier.universities.map((uni) => (
                            <span
                              key={uni}
                              className="px-2 md:px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300 whitespace-nowrap hover:bg-white/10 transition-colors"
                            >
                              {uni}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 md:py-10 glass-light rounded-2xl">
                  <GraduationCap className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm">
                    Набери от 230 баллов, чтобы увидеть доступные ВУЗы
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
