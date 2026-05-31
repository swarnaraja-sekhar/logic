import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  duration?: number;
}

const Counter = ({ value }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 90,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const WhyUs = () => {
  return (
    <section className="relative z-10 max-w-[1600px] mx-auto px-6 py-32 min-h-screen flex flex-col justify-center select-none">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20 relative">
        <div className="flex items-start gap-4">
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#FF3B00] mt-3 md:mt-5 uppercase shrink-0">
            (WHY US)
          </span>
          <div className="flex flex-col overflow-hidden">
            <motion.h2 
              initial={{ y: "80%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-[#D9D9D9] uppercase font-sans scale-y-110 origin-bottom"
            >
              NUMBERS
            </motion.h2>
            <motion.h2 
              initial={{ y: "80%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-[#D9D9D9] uppercase font-sans scale-y-110 origin-top"
            >
              DON'T LIE
            </motion.h2>
          </div>
        </div>

        <div className="max-w-md lg:pb-4 flex flex-col justify-end">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed"
          >
            With a decade of expertise, We craft
            bold brands and high-impact automated
            systems that get results.
          </motion.p>
        </div>
      </div>

      {/* Ticker / Dashed Line Top */}
      <div className="w-full relative mb-12 border-t border-white/10">
        <div className="absolute top-[-3px] left-0 w-full h-[6px]" style={{ backgroundImage: 'linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '30px 100%' }}></div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/5">
        
        {/* Stat 1 */}
        <div className="px-8 py-16 border-l border-white/5 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
              <Counter value={30} /><span className="text-[#FF3B00]">+</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base pr-4">
              Successful projects<br/>completed
            </p>
          </motion.div>
        </div>

        {/* Stat 2 */}
        <div className="px-8 py-16 border-l border-white/5 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
              <Counter value={10} /><span className="text-[#FF3B00]">+</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base pr-4">
              Years of experience<br/>in creative industry
            </p>
          </motion.div>
        </div>

        {/* Stat 3 */}
        <div className="px-8 py-16 border-l border-white/5 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
              <Counter value={99} /><span className="text-[#FF3B00]">%</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base pr-4">
              Customer<br/>satisfaction rate
            </p>
          </motion.div>
        </div>

        {/* Stat 4 */}
        <div className="px-8 py-16 border-l border-white/5 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
              <Counter value={25} /><span className="text-[#FF3B00]">M</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base pr-4">
              In Client revenue<br/>growth
            </p>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default WhyUs;