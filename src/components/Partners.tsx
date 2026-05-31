import { motion } from 'framer-motion';

const Partners = () => {
  const inlineLogos = [
    {
      name: "BELFOR",
      logo: (
        <div className="flex flex-col items-center select-none opacity-50 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-black tracking-widest text-white">BELFOR</span>
          <span className="text-[7px] font-semibold text-white/40 tracking-wider uppercase">Property Restoration</span>
        </div>
      )
    },
    {
      name: "ServiceMaster",
      logo: (
        <div className="flex flex-col items-center select-none opacity-50 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-bold tracking-tight text-white italic">ServiceMaster</span>
          <span className="text-[7px] font-semibold text-white/40 tracking-wider uppercase">Restore</span>
        </div>
      )
    },
    {
      name: "DKI",
      logo: (
        <div className="flex flex-col items-center select-none opacity-50 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-black tracking-widest text-white">DKI</span>
          <span className="text-[7px] font-semibold text-white/40 tracking-wider uppercase">Member Company</span>
        </div>
      )
    },
  ];

  const cards = [
    {
      badge: "Restoration Partner",
      logo: "BELFOR",
      sub: "PROPERTY RESTORATION",
      style: {
        background: "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.18) 0%, transparent 65%), radial-gradient(circle at 10% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 55%), #0a1115",
        borderColor: "rgba(6, 182, 212, 0.15)",
        hoverGlow: "shadow-[0_20px_50px_rgba(6,182,212,0.12)]"
      },
      badgeStyle: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
      logoStyle: "font-sans font-black tracking-widest text-white text-2xl sm:text-3xl",
      subStyle: "text-cyan-400/60",
    },
    {
      badge: "Trusted Partner",
      logo: "ServiceMaster",
      sub: "RESTORE",
      style: {
        background: "radial-gradient(circle at 75% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(217, 119, 6, 0.08) 0%, transparent 50%), #120e0a",
        borderColor: "rgba(245, 158, 11, 0.15)",
        hoverGlow: "shadow-[0_20px_50px_rgba(245,158,11,0.1)]"
      },
      badgeStyle: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
      logoStyle: "font-sans font-bold text-white text-xl sm:text-2xl tracking-tight italic",
      subStyle: "text-amber-400/60",
    },
    {
      badge: "Industry Leader",
      logo: "PAUL DAVIS",
      sub: "RECOVER · RECONSTRUCT · RESTORE",
      style: {
        background: "radial-gradient(circle at 85% 20%, rgba(139, 92, 246, 0.18) 0%, transparent 65%), radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 55%), #0f0b15",
        borderColor: "rgba(139, 92, 246, 0.15)",
        hoverGlow: "shadow-[0_20px_50px_rgba(139,92,246,0.12)]"
      },
      badgeStyle: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
      logoStyle: "font-sans font-black text-white text-2xl sm:text-3xl tracking-tighter",
      subStyle: "text-violet-400/60",
    },
    {
      badge: "Disaster Recovery",
      logo: "ATI",
      sub: "DISASTER RECOVERY SERVICES",
      style: {
        background: "radial-gradient(circle at 50% 50%, rgba(255, 59, 0, 0.12) 0%, transparent 65%), radial-gradient(circle at 80% 85%, rgba(249, 115, 22, 0.08) 0%, transparent 55%), #13090a",
        borderColor: "rgba(255, 59, 0, 0.15)",
        hoverGlow: "shadow-[0_20px_50px_rgba(255,59,0,0.1)]"
      },
      badgeStyle: "bg-[#FF3B00]/10 text-orange-300 border border-[#FF3B00]/20",
      logoStyle: "font-sans font-black text-white text-3xl sm:text-4xl tracking-[0.25em]",
      subStyle: "text-orange-400/60",
    },
    {
      badge: "Member Company",
      logo: "DKI",
      sub: "MEMBER COMPANY",
      style: {
        background: "radial-gradient(circle at 80% 25%, rgba(20, 184, 166, 0.15) 0%, transparent 65%), radial-gradient(circle at 10% 75%, rgba(6, 182, 212, 0.08) 0%, transparent 55%), #091214",
        borderColor: "rgba(20, 184, 166, 0.15)",
        hoverGlow: "shadow-[0_20px_50px_rgba(20,184,166,0.1)]"
      },
      badgeStyle: "bg-teal-500/10 text-teal-300 border border-teal-500/20",
      logoStyle: "font-sans font-black text-white text-3xl sm:text-4xl tracking-[0.3em]",
      subStyle: "text-teal-400/60",
    },
    {
      badge: "Restoration Leader",
      logo: "MAXONS",
      sub: "RESTORING YOUR WORLD",
      style: {
        background: "radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.12) 0%, transparent 65%), radial-gradient(circle at 20% 80%, rgba(161, 98, 7, 0.08) 0%, transparent 55%), #13100a",
        borderColor: "rgba(234, 179, 8, 0.12)",
        hoverGlow: "shadow-[0_20px_50px_rgba(234,179,8,0.08)]"
      },
      badgeStyle: "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20",
      logoStyle: "font-sans font-black text-white text-2xl sm:text-3xl tracking-[0.15em]",
      subStyle: "text-yellow-400/60",
    },
  ];

  // Left Column staggered entrance variants
  const leftColumnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  // Right Grid staggered entry variants
  const rightGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardEntryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section className="relative z-20 w-full bg-black py-24 sm:py-32 overflow-hidden select-none flex items-center justify-center border-b border-white/5">
      
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-[-15%] w-[600px] h-[600px] bg-purple-950/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-950/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Stark brand statements + Inline partners with column styled as a premium card background */}
          <motion.div 
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            whileHover={{ y: -4, scale: 1.005 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="col-span-1 lg:col-span-5 relative p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#08080c]/60 backdrop-blur-md overflow-hidden flex flex-col justify-center text-left shadow-[0_30px_60px_rgba(0,0,0,0.6)] group/left h-full w-full"
          >
            {/* Glowing background mesh layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF3B00]/[0.03] to-transparent pointer-events-none -z-10" />
            <div className="absolute top-[-20%] left-[-20%] w-[60%] aspect-square bg-[#FF3B00]/5 rounded-full blur-[80px] pointer-events-none -z-10" />

            {/* Laser sweep shine effect on column background */}
            <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[25deg] group-hover/left:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none -z-10" />

            {/* Glowing highlight ring */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-[#FF3B00]/10 via-transparent to-white/5 opacity-0 group-hover/left:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

            {/* Content elements relative above the background */}
            <motion.h2 
              variants={textItemVariants}
              className="text-[clamp(1.8rem,3vw,2.6rem)] font-black tracking-tight leading-[1.1] text-white relative z-10"
            >
              Proud partner of <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-[#FF3B00] bg-clip-text text-transparent partners-industry-leaders-text">industry leaders</span>
            </motion.h2>

            <motion.p 
              variants={textItemVariants}
              className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-4 max-w-sm relative z-10"
            >
              Trusted by over 800,000 developers and thousands of engineering teams at leading companies.
            </motion.p>

            {/* Micro inline logo grid - boxed capsules */}
            <motion.div 
              variants={textItemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10 relative z-10"
            >
              {inlineLogos.map((logo, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -2, scale: 1.03, filter: "brightness(1.2)" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center hover:bg-[#FF3B00]/5 hover:border-[#FF3B00]/20 transition-all duration-300 shadow-md cursor-pointer"
                >
                  {logo.logo}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: 3-2 staggered gorgeous card showcase grid */}
          <div className="col-span-1 lg:col-span-7 w-full">
            <motion.div 
              variants={rightGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-6 gap-4"
            >
              
              {cards.map((card, i) => {
                // All 6 cards span 2 columns each → 3 per row × 2 rows
                const colSpan = "sm:col-span-2";
                
                return (
                  <motion.div
                    key={i}
                    style={{
                      background: card.style.background,
                      borderColor: card.style.borderColor
                    }}
                    variants={cardEntryVariants}
                    whileHover={{ 
                      y: -6,
                      scale: 1.02,
                      borderColor: "rgba(255, 59, 0, 0.4)",
                      transition: { duration: 0.35, ease: "easeOut" }
                    }}
                    className={`col-span-1 ${colSpan} relative rounded-2xl border p-6 min-h-[170px] sm:min-h-[190px] flex flex-col justify-between items-start cursor-pointer overflow-hidden shadow-2xl group ${card.style.hoverGlow} partner-showcase-card`}
                  >
                    
                    {/* Glowing highlight ring */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-[#FF3B00]/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

                    {/* Premium Laser Sweep Shine Effect */}
                    <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none -z-10" />

                    {/* Top Left Transparent Badge */}
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-black tracking-wider uppercase backdrop-blur-md shadow-md ${card.badgeStyle}`}>
                      {card.badge}
                    </span>

                    {/* Centered Brand Logo + Tagline */}
                    <div className="w-full flex-1 flex flex-col items-center justify-center py-3 gap-1.5">
                      <span className={card.logoStyle}>{card.logo}</span>
                      <span className={`text-[7px] font-mono font-bold tracking-widest uppercase ${card.subStyle}`}>{card.sub}</span>
                    </div>

                    {/* Bottom spacer */}
                    <div className="h-1" />

                  </motion.div>
                );
              })}

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;
