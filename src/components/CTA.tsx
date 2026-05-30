import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ctaHand from '../assets/cta_hand.png';

const CTA = () => {
  return (
    <section className="relative z-20 w-full bg-black py-36 sm:py-48 min-h-[50vh] overflow-hidden select-none border-t border-white/5 flex items-center justify-center">
      
      {/* Background soft ambient spotlight behind the hand */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#FF3B00]/5 via-purple-500/5 to-transparent blur-[150px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
          
          {/* Left Column: Towering condensed 'LET'S WORK TOGETHER' block letters */}
          <div className="col-span-1 md:col-span-5 flex flex-col justify-center text-left order-1 select-none">
            <h2 className="font-sans font-black tracking-tighter text-[clamp(3.8rem,7.5vw,6rem)] leading-[0.88] text-gray-200 uppercase">
              Let's Work <br />
              <span className="text-white">Together</span>
            </h2>
          </div>

          {/* Center Column: The premium 3D hand illustration in the spotlight */}
          <div className="col-span-1 md:col-span-3 flex items-center justify-center order-3 md:order-2 h-[300px] sm:h-[380px] relative overflow-hidden select-none">
            {/* Subtle beam of light overlay */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[140px] bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent blur-md pointer-events-none -z-10" />
            
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <img 
                src={ctaHand} 
                alt="BigLogic AI Cybernetic 3D Spotlight Hand" 
                className="h-full object-contain filter brightness-[1.05] contrast-[1.05] select-none"
              />
            </motion.div>
          </div>

          {/* Right Column: Elegant right-aligned description & capsule contact button */}
          <div className="col-span-1 md:col-span-4 flex flex-col justify-center text-left md:text-right order-2 md:order-3">
            
            <p className="text-gray-400 text-xs sm:text-sm md:text-base font-normal leading-relaxed md:max-w-sm md:ml-auto">
              Have a project in mind? We'd love to hear about it. Let's create something great together!
            </p>
            
            {/* Oblong glassmorphism orange border contact trigger */}
            <a 
              href="#contact" 
              className="w-full max-w-[280px] md:ml-auto md:mr-0 py-4 mt-8 rounded-full border border-[#FF3B00]/40 bg-[#FF3B00]/[0.02] text-[#FF3B00] hover:text-white hover:bg-[#FF3B00] hover:border-[#FF3B00] text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,59,0,0.06)] hover:shadow-[#FF3B00]/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Get In Touch 
              <ArrowUpRight className="w-4 h-4 shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
