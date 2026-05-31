import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-transparent'}`}>
      <div className="flex items-center justify-between px-6 py-4 max-w-[1600px] mx-auto text-sm">
        
        <div className="flex items-center">
          {scrolled && (
            <motion.h1 
              layoutId="logo-text"
              className="text-2xl font-black py-1 tracking-tighter uppercase whitespace-nowrap origin-left cursor-default flex items-center"
            >
              BIGLOGIC<span className="text-[#FF3B00] relative">
                AI
              </span>
            </motion.h1>
          )}
        </div>

        <div className="flex flex-1 items-center justify-end gap-10">
          <div className="hidden lg:flex items-center space-x-6 text-gray-300">
            <a href="#comparison" className="hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase">Comparison</a>
            <a href="#showcase" className="hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase">Showcase</a>
            <a href="#one-platform" className="hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase">Platform</a>
            <a href="#services" className="hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase">Services</a>
            <a href="#process" className="hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase">Process</a>
            <a href="#features" className="hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase">Features</a>
            <a href="#security" className="hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase">Security</a>
            <a href="#faq" className="hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase">FAQ</a>
          </div>

        <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 text-xs">
          <div className="text-gray-500 text-right">
            1:27 PM<br/>(GMT+7)
          </div>
        </div>
        <button className="hidden md:block px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors uppercase text-xs tracking-wider">
          Let's Talk
        </button>
        <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
          <Menu className="w-4 h-4" />
        </button>
      </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
