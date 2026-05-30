import { motion } from 'framer-motion';

const LOGOS = [
  {
    name: "BELFOR",
    logo: (
      <div className="flex flex-col items-center gap-0.5 select-none opacity-40 hover:opacity-90 transition-all duration-300 cursor-default">
        <span className="text-sm font-black tracking-[0.2em] text-white uppercase">BELFOR</span>
        <span className="text-[7px] font-semibold text-white/40 tracking-widest uppercase">Property Restoration</span>
      </div>
    )
  },
  {
    name: "ServiceMaster",
    logo: (
      <div className="flex flex-col items-center gap-0.5 select-none opacity-40 hover:opacity-90 transition-all duration-300 cursor-default">
        <span className="text-sm font-bold tracking-tight text-white italic">ServiceMaster</span>
        <span className="text-[7px] font-semibold text-white/40 tracking-widest uppercase">Restore</span>
      </div>
    )
  },
  {
    name: "PAUL DAVIS",
    logo: (
      <div className="flex flex-col items-center gap-0.5 select-none opacity-40 hover:opacity-90 transition-all duration-300 cursor-default">
        <span className="text-sm font-black tracking-[0.15em] text-white uppercase">PAUL DAVIS</span>
        <span className="text-[7px] font-semibold text-white/40 tracking-widest uppercase">Recover · Reconstruct · Restore</span>
      </div>
    )
  },
  {
    name: "ATI",
    logo: (
      <div className="flex flex-col items-center gap-0.5 select-none opacity-40 hover:opacity-90 transition-all duration-300 cursor-default">
        <span className="text-base font-black tracking-[0.35em] text-white uppercase">ATI</span>
        <span className="text-[7px] font-semibold text-white/40 tracking-widest uppercase">Disaster Recovery Services</span>
      </div>
    )
  },
  {
    name: "DKI",
    logo: (
      <div className="flex flex-col items-center gap-0.5 select-none opacity-40 hover:opacity-90 transition-all duration-300 cursor-default">
        <span className="text-base font-black tracking-[0.35em] text-white uppercase">DKI</span>
        <span className="text-[7px] font-semibold text-white/40 tracking-widest uppercase">Member Company</span>
      </div>
    )
  },
  {
    name: "MAXONS",
    logo: (
      <div className="flex flex-col items-center gap-0.5 select-none opacity-40 hover:opacity-90 transition-all duration-300 cursor-default">
        <span className="text-sm font-black tracking-[0.2em] text-white uppercase">MAXONS</span>
        <span className="text-[7px] font-semibold text-white/40 tracking-widest uppercase">Restoring Your World</span>
      </div>
    )
  },
];

const BrandMarquee = () => {
  // Triple the logo list to guarantee smooth continuous scroll coverage on wide displays
  const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className="w-full bg-black py-12 relative overflow-hidden select-none border-t border-b border-white/5">
      
      {/* Side Fade Gradient Masks - creates gorgeous seamless fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 mb-5 flex justify-center w-full">
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#FF3B00] uppercase font-bold text-center opacity-80">
          TRUSTED RESTORATION INDUSTRY PARTNERS
        </span>
      </div>

      <div className="w-full overflow-hidden relative flex items-center h-12">
        
        {/* Scrolling Strip */}
        <motion.div
          animate={{ x: [0, "-33.333%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear"
          }}
          className="flex items-center gap-16 sm:gap-24 whitespace-nowrap w-max pl-16 sm:pl-24"
        >
          {marqueeLogos.map((item, idx) => (
            <div key={idx} className="inline-block flex-shrink-0 cursor-pointer">
              {item.logo}
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default BrandMarquee;
