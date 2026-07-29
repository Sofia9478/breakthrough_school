import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Предметы', href: '#subjects' },
    { label: 'Методика', href: '#method' },
    { label: 'Преподаватели', href: '#tutors' },
    { label: 'Результаты', href: '#reviews' },
    { label: 'Тарифы', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg shadow-violet/5' : 'bg-transparent py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-violet via-cyan-500 to-lime flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-violet/30">
            <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" />
          </div>
          <span className="font-extrabold text-lg lg:text-xl tracking-tight">
            <span className="text-gradient">BREAK</span><span className="text-white">THROUGH</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 hover:text-white transition-all duration-300 relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-violet after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#pricing"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet via-violet-light to-cyan-500 text-white text-sm font-bold hover:shadow-lg hover:shadow-violet/40 transition-all duration-300 hover:scale-105 animate-gradient"
          >
            <Zap className="w-4 h-4" />
            Бесплатный урок
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-scale-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-violet to-cyan-500 text-white text-sm font-bold"
            >
              <Zap className="w-4 h-4" />
              Бесплатный урок
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
