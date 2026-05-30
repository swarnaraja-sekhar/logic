import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { VerticalDivider, HorizontalConnector } from './SectionConnectors';
import { Reveal } from './SectionReveal';

const STEPS = [
  {
    num: "STEP 1.",
    title: "Discovery\nPhase",
    description: "Understanding your goals, pain points, audience, and what sets you apart."
  },
  {
    num: "STEP 2.",
    title: "Project\nKickoff",
    description: "Setting up projects, aligning on scope and milestones, and diving into the work."
  },
  {
    num: "STEP 3.",
    title: "Receive\n& Refine",
    description: "Sharing initial designs, gathering feedback, and tuning every detail to absolute perfection."
  },
  {
    num: "STEP 4.",
    title: "Production\nReady",
    description: "Deploying finalized systems, training your team, and scaling performance seamlessly."
  }
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Scroll tracking for horizontal slider
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Apply high-fidelity inertia spring to make the scroll sliding feel fluid and elastic
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  // Transform smooth scroll progress (0 to 1) into horizontal translation (0% to -68%)
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-68%"]);

  // Track active step based on smooth scroll progress to match visual state
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest < 0.15) {
      setActiveStep(0);
    } else if (latest < 0.45) {
      setActiveStep(1);
    } else if (latest < 0.75) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  return (
    <section 
      id="process"
      ref={containerRef} 
      className="relative z-20 w-full h-[300vh] hidden md:block bg-black"
    >
      {/* Sticky Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-black px-6 lg:px-16 pt-16">
        
        {/* Section Header (Above the sliding grid layout!) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } 
            }
          }}
          className="mb-8 w-full select-none"
        >
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#FF3B00] mb-4 uppercase block font-bold">
            ( OUR PROCESS )
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans uppercase">
            Engineered for <span className="text-[#FF3B00]">Velocity.</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed max-w-xl font-sans font-normal">
            A high-velocity, automated lifecycle designed to take raw concepts to production-grade architectures in under 48 hours. Scroll horizontally to explore our path.
          </p>
        </motion.div>

        {/* Content Layout wrapper containing the sticky progress bar + sliding steps */}
        <div className="flex items-center justify-between w-full h-[62vh] relative">
          
          {/* Left Side: Sticky Progress timeline display */}
          <div className="w-[12%] lg:w-[8%] flex-shrink-0 flex flex-col justify-center h-full relative z-20 select-none border-r border-white/5 pr-6">
            <div className="flex flex-col gap-6 items-center">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#FF3B00] uppercase block transform rotate-90 origin-center whitespace-nowrap mb-16">
                ( TIMELINE )
              </span>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white font-mono">
                  0{activeStep + 1}
                </span>
                <div className="h-16 w-[1px] bg-gradient-to-b from-purple-500 via-[#FF3B00] to-transparent my-3 shadow-[0_0_8px_rgba(255,59,0,0.5)]" />
                <span className="text-gray-600 text-xs font-mono">/ 0{STEPS.length}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Sliding steps viewport */}
          <div className="w-[88%] lg:w-[92%] h-full relative overflow-hidden flex items-center pl-10 lg:pl-16">
            
            {/* Horizontal animated line flow connector */}
            <HorizontalConnector />

            {/* Sliding container strip */}
            <motion.div 
              style={{ x }} 
              className="flex items-center h-full w-max relative z-10"
            >
              {/* Introductory Heading Block - Slides along with the steps! */}
              <div className="w-[450px] lg:w-[550px] shrink-0 pr-12 lg:pr-24 flex flex-col justify-center h-full relative select-none z-10">
                <Reveal delay={0.1} yOffset={20}>
                  <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#FF3B00] mb-5 uppercase block font-bold">
                    ( HOW WE WORK )
                  </span>
                </Reveal>
                <h2 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-bold leading-[0.85] tracking-tighter text-[#D9D9D9] uppercase font-sans scale-y-110 scale-x-95 origin-left">
                  HOW WE
                  <br />
                  WORK
                </h2>
              </div>

            {STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div key={index} className="flex items-center h-full shrink-0">
                  {/* Step Card with smooth dynamic scroll-linked lift and laser sweeps */}
                  <motion.div
                    animate={{
                      y: isActive ? -8 : 0,
                      scale: isActive ? 1.012 : 1,
                      borderColor: isActive ? "rgba(255, 59, 0, 0.25)" : "rgba(255, 255, 255, 0.05)",
                      backgroundColor: isActive ? "rgba(255, 255, 255, 0.01)" : "rgba(0, 0, 0, 0.3)"
                    }}
                    whileHover={{
                      y: isActive ? -8 : -4,
                      scale: isActive ? 1.012 : 1.004,
                      borderColor: isActive ? "rgba(255, 59, 0, 0.35)" : "rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-[350px] lg:w-[420px] h-[70%] px-10 py-12 flex flex-col justify-between relative overflow-hidden border rounded-2xl group cursor-pointer"
                  >
                    {/* Ambient subtle glow inside card when active */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-[#FF3B00]/[0.015] via-transparent to-transparent transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                        }`}
                    />

                    {/* Premium Laser Sweep shine effect */}
                    <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1000ms] ease-out pointer-events-none -z-10" />

                    {/* Card background border line indicator (left border active hover) */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF3B00]/30 to-transparent transition-all duration-700 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-40'
                        }`}
                    />

                    {/* Step label */}
                    <div className="flex items-center gap-1.5 select-none">
                      <span className={`text-xs font-mono font-bold tracking-wider transition-colors duration-500 ${isActive ? 'text-[#FF3B00]' : 'text-gray-500 group-hover:text-gray-300'
                        }`}>
                        {step.num}
                      </span>
                      <span className={`w-1 h-1 rounded-full bg-[#FF3B00] transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-0'
                        }`} />
                    </div>

                    {/* Content area */}
                    <div className="space-y-6">
                      <h3
                        className={`text-4xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.0] transition-colors duration-500 whitespace-pre-line ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-300'
                          }`}
                      >
                        {step.title}
                      </h3>
                      <p className={`text-sm lg:text-base leading-relaxed transition-colors duration-500 max-w-sm ${isActive ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-400'
                        }`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Vertical dividers separating step cards */}
                  {index < STEPS.length - 1 && (
                    <VerticalDivider isActive={isActive} />
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

// Fallback mobile responsive process view
const ProcessMobile = () => {
  return (
    <section className="relative z-20 w-full block md:hidden bg-black px-6 py-24 border-t border-white/5">
      <div className="flex flex-col space-y-16">

        {/* Mobile section header */}
        <div className="flex flex-col">
          <span className="text-[10px] font-mono tracking-widest text-[#FF3B00] mb-2 uppercase">
            (PROCESS)
          </span>
          <h2 className="text-5xl font-bold tracking-tighter text-[#D9D9D9] uppercase font-sans leading-[0.9]">
            HOW WE WORK
          </h2>
        </div>

        {/* Stacked mobile cards */}
        <div className="flex flex-col space-y-12 pl-2 border-l border-white/10">
          {STEPS.map((step, index) => (
            <div key={index} className="flex flex-col space-y-4 relative pl-6">

              {/* Active bullet point indicator on the border line */}
              <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#FF3B00] border-2 border-black" />

              <div className="text-xs font-mono font-bold tracking-wider text-[#FF3B00]">
                {step.num}
              </div>

              <Reveal yOffset={15} duration={0.6}>
                <h3 className="text-3xl font-bold tracking-tight text-white whitespace-pre-line leading-[1.1]">
                  {step.title}
                </h3>
              </Reveal>

              <Reveal yOffset={15} duration={0.6} delay={0.1}>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  {step.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Export combining desktop sticky horizontal scrolling and mobile stacked views
const ProcessCombined = () => {
  return (
    <>
      <Process />
      <ProcessMobile />
    </>
  );
};

export default ProcessCombined;
