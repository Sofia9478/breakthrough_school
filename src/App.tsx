import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SubjectSelector from '@/components/SubjectSelector';
import Features from '@/components/Features';
import Tutors from '@/components/Tutors';
import Calculator from '@/components/Calculator';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark font-display">
      <Header />
      <main>
        <Hero />
        <SubjectSelector />
        <Features />
        <Tutors />
        <Calculator />
        <Pricing />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
