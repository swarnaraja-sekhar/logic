import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import Partners from './components/Partners';
import Comparison from './components/Comparison';
import Showcase from './components/Showcase';
import { OnePlatform } from './components/OnePlatform';
import Services from './components/Services';
import Process from './components/Process';
import TerminalSection from './components/TerminalSection';
import FeaturesGrid from './components/FeaturesGrid';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 font-sans overflow-x-clip relative">
    
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="fixed top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-orange-600/20 to-transparent blur-[120px] rounded-full pointer-events-none" />
      </div>

      <Navbar />
      <Hero />
      <BrandMarquee />
      <Partners />
      <Comparison />
      <WhyUs />
      <Showcase />
      <OnePlatform />
      <Services />
      <Process />
      <TerminalSection />
      <FeaturesGrid />
      <Security />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />

    </div>
  );
}

export default App;
