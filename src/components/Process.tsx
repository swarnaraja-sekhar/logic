import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { VerticalDivider, HorizontalConnector } from './SectionConnectors';
import { Reveal } from './SectionReveal';
import { 
  Flame, 
  Database, 
  UploadCloud, 
  Cpu, 
  FileCheck, 
  PenTool, 
  ListTodo
} from 'lucide-react';

const STEPS = [
  {
    num: "STEP 1",
    title: "Damage Occurs",
    description: "A property gets damaged because of fire, flood, storm, water leakage, or natural disasters. The reconstruction company receives the project.",
    icon: Flame,
    illustration: (pulse: boolean) => (
      <div className="w-full h-[120px] rounded-xl bg-rose-950/20 border border-rose-500/10 flex items-center justify-center p-3 relative overflow-hidden">
        <div className={`absolute inset-0 bg-rose-500/[0.02] transition-all duration-1000 ${pulse ? 'opacity-100' : 'opacity-30'}`} />
        <div className="flex items-center gap-3 z-10 text-left">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-500 shrink-0">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-rose-400 font-mono tracking-wider">ALERT // DISASTER INTAKE</div>
            <div className="text-[11px] font-bold text-white mt-0.5">Property Damage Incident</div>
            <div className="text-[8px] text-gray-500 font-mono mt-0.5">Incident: Fire, Flood, Storm, Leak</div>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "STEP 2",
    title: "Project is Created in BigLogicAI",
    description: "The company creates a new reconstruction job. BigLogicAI centralizes homeowner details, insurance info, estimates, photos, and crew assignments.",
    icon: Database,
    illustration: (pulse: boolean) => (
      <div className="w-full h-[120px] rounded-xl bg-blue-950/20 border border-blue-500/10 flex flex-col justify-between p-3.5 relative overflow-hidden text-left">
        <div className="flex items-center gap-2 select-none">
          <Database className="w-4 h-4 text-blue-400" />
          <span className="text-[8px] font-mono text-blue-400 font-bold uppercase tracking-wider">Centralized Workspace</span>
        </div>
        <div className="space-y-1">
          <div className="text-[11px] font-bold text-white">452 Maple Ave Restoration</div>
          <div className="grid grid-cols-3 gap-1 text-[7px] text-gray-500 font-mono">
            <span className="bg-white/[0.02] px-1 py-0.5 rounded border border-white/5 truncate">✓ John Miller</span>
            <span className="bg-white/[0.02] px-1 py-0.5 rounded border border-white/5 truncate">✓ State Farm</span>
            <span className="bg-white/[0.02] px-1 py-0.5 rounded border border-white/5 truncate">✓ Crew Alpha</span>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "STEP 3",
    title: "Insurance Estimate is Uploaded",
    description: "The reconstruction company uploads Xactimate PDF estimates, insurance papers, agreements, and damage photos into BigLogicAI.",
    icon: UploadCloud,
    illustration: (pulse: boolean) => (
      <div className="w-full h-[120px] rounded-xl bg-purple-950/20 border border-purple-500/10 flex flex-col justify-center items-center p-3 relative overflow-hidden">
        <motion.div 
          animate={{ y: pulse ? [-2, 2, -2] : 0 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 mb-2"
        >
          <UploadCloud className="w-4 h-4" />
        </motion.div>
        <span className="text-[10px] font-bold text-white">Xactimate_Estimate.pdf</span>
        <span className="text-[7.5px] text-gray-500 font-mono mt-1">Upload drag-and-drop secure</span>
      </div>
    )
  },
  {
    num: "STEP 4",
    title: "AI Parses the Estimate",
    description: "BigLogicAI parses cost list quantities, materials, labor scopes, and milestones without manual typing, replacing hours of manual work.",
    icon: Cpu,
    illustration: (pulse: boolean) => (
      <div className="w-full h-[120px] rounded-xl bg-orange-950/20 border border-orange-500/10 flex flex-col justify-between p-3.5 relative overflow-hidden text-left">
        <motion.div 
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF3B00] to-transparent shadow-[0_0_8px_rgba(255,59,0,0.4)] pointer-events-none"
        />
        <div className="flex items-center justify-between text-[8px] font-mono text-orange-400 font-bold uppercase tracking-wider">
          <span>AI Parser Engine</span>
          <span>PARSING...</span>
        </div>
        <div className="space-y-1 font-mono text-[7.5px] text-gray-500">
          <div>▶ Flooring: 320 sqft laminate <span className="text-emerald-400 font-bold">✓</span></div>
          <div>▶ Paint: 8 gals primer & latex <span className="text-emerald-400 font-bold">✓</span></div>
          <div>▶ Fixtures: 4 recessed lights <span className="text-emerald-400 font-bold">✓</span></div>
        </div>
      </div>
    )
  },
  {
    num: "STEP 5",
    title: "AI Generates Draw Schedules",
    description: "The platform automatically generates draw payment schedules, financial plans, and milestone stages based on estimate metrics.",
    icon: FileCheck,
    illustration: (pulse: boolean) => (
      <div className="w-full h-[120px] rounded-xl bg-[#0b0c10] border border-white/5 flex flex-col justify-between p-3 text-left font-mono text-[8px]">
        <span className="text-emerald-400 font-bold tracking-widest uppercase">✓ DRAW SCHEDULE COMPILED</span>
        <div className="space-y-1">
          <div className="flex items-center justify-between border-b border-white/5 pb-1">
            <span className="text-gray-400">Draw 1 (Mitigation)</span>
            <span className="text-white font-bold">$11,500.00</span>
          </div>
          <div className="flex items-center justify-between border-b border-white/5 pb-1">
            <span className="text-gray-400">Draw 2 (Drywall)</span>
            <span className="text-white font-bold">$11,500.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Draw 3 (Finish)</span>
            <span className="text-white font-bold">$15,400.00</span>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "STEP 6",
    title: "AI Generates Contracts",
    description: "BigLogicAI builds branded homeowner contracts, carrier agreements, and legal templates automatically to prevent approval chaos.",
    icon: PenTool,
    illustration: (pulse: boolean) => (
      <div className="w-full h-[120px] rounded-xl bg-purple-950/10 border border-purple-500/10 flex flex-col justify-between p-3.5 text-left relative overflow-hidden">
        <div>
          <span className="text-[7.5px] font-mono text-purple-400 font-bold uppercase tracking-wider block">CONTRACT CREATOR</span>
          <div className="text-[10px] font-bold text-white mt-1">Reconstruction Agreement</div>
          <div className="text-[7px] text-gray-500 font-mono mt-0.5">Maple_Ave_Contract_Branded.docx</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[7px] font-mono text-purple-400">Owner Signature:</span>
          <motion.div 
            animate={{ width: pulse ? [0, 60, 60] : 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-[1.5px] bg-purple-400"
          />
        </div>
      </div>
    )
  },
  {
    num: "STEP 7",
    title: "Material Extraction",
    description: "The AI isolates every material required (flooring, paint, cabinets, fixtures, supplies) and creates organized sheets automatically.",
    icon: ListTodo,
    illustration: (pulse: boolean) => (
      <div className="w-full h-[120px] rounded-xl bg-emerald-950/20 border border-emerald-500/10 flex flex-col justify-between p-3 text-left font-mono text-[8px]">
        <div className="flex items-center justify-between text-emerald-400 font-bold">
          <span>MATERIAL SHEET</span>
          <span>EXPORT .XLSX</span>
        </div>
        <div className="space-y-0.5 text-gray-400">
          <div>· 320 sqft laminate flooring</div>
          <div>· 8 gals interior primer</div>
          <div>· 48 2x4 pine studs</div>
          <div>· 12 bags joints compound</div>
        </div>
      </div>
    )
  }
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-83%"]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const stepSize = 1 / STEPS.length;
    const stepIndex = Math.min(Math.floor(latest / stepSize), STEPS.length - 1);
    setActiveStep(stepIndex);
  });

  return (
    <section 
      id="process"
      ref={containerRef} 
      className="relative z-20 w-full h-[450vh] hidden md:block bg-black border-t border-white/5"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-black px-6 lg:px-16 pt-16">
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
          className="mb-8 w-full select-none text-left"
        >
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#FF3B00] mb-4 uppercase block font-bold">
            ( SYSTEM PIPELINE )
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans uppercase">
            BIGLOGICAI <span className="text-[#FF3B00]">WORKFLOW.</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed max-w-xl font-sans font-normal">
            A fully automated reconstruction lifecycle designed to take raw carrier estimates to parsed milestone contracts in seconds. Scroll down to advance our pipeline.
          </p>
        </motion.div>

        <div className="flex items-center justify-between w-full h-[62vh] relative">
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

          <div className="w-[88%] lg:w-[92%] h-full relative overflow-hidden flex items-center pl-10 lg:pl-16">
            <HorizontalConnector />
            <motion.div 
              style={{ x }} 
              className="flex items-center h-full w-max relative z-10"
            >
              <div className="w-[450px] lg:w-[550px] shrink-0 pr-12 lg:pr-24 flex flex-col justify-center h-full relative select-none z-10 text-left">
                <Reveal delay={0.1} yOffset={20}>
                  <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#FF3B00] mb-5 uppercase block font-bold">
                    ( PIPELINE GRAPH )
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
              const StepIcon = step.icon;
              return (
                <div key={index} className="flex items-center h-full shrink-0">
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
                    className="w-[350px] lg:w-[420px] h-[80%] px-8 py-10 flex flex-col justify-between relative overflow-hidden border rounded-2xl group cursor-pointer"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-[#FF3B00]/[0.015] via-transparent to-transparent transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                        }`}
                    />
                    <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1000ms] ease-out pointer-events-none -z-10" />
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF3B00]/30 to-transparent transition-all duration-700 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-40'
                        }`}
                    />
                    <div className="flex items-center justify-between select-none">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-mono font-bold tracking-wider transition-colors duration-500 ${isActive ? 'text-[#FF3B00]' : 'text-gray-500 group-hover:text-gray-300'
                          }`}>
                          {step.num}
                        </span>
                        <span className={`w-1 h-1 rounded-full bg-[#FF3B00] transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-0'
                          }`} />
                      </div>
                      <StepIcon className={`w-4 h-4 transition-colors duration-500 ${isActive ? 'text-[#FF3B00]' : 'text-gray-600 group-hover:text-gray-400'}`} />
                    </div>
                    <div className="my-4">
                      {step.illustration(pulse)}
                    </div>
                    <div className="space-y-3 text-left">
                      <h3
                        className={`text-xl lg:text-2xl font-bold tracking-tight leading-tight transition-colors duration-500 whitespace-pre-line ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                          }`}
                      >
                        {step.title}
                      </h3>
                      <p className={`text-[11px] lg:text-xs leading-relaxed transition-colors duration-500 max-w-sm ${isActive ? 'text-gray-400' : 'text-gray-600 group-hover:text-gray-450'
                        }`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
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

const ProcessMobile = () => {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-20 w-full block md:hidden bg-black px-6 py-24 border-t border-white/5">
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-mono tracking-widest text-[#FF3B00] mb-2 uppercase">
            (PIPELINE)
          </span>
          <h2 className="text-4xl font-bold tracking-tighter text-[#D9D9D9] uppercase font-sans leading-[0.9]">
            BIGLOGICAI WORKFLOW
          </h2>
        </div>
        <div className="flex flex-col space-y-12 pl-2 border-l border-white/10 text-left">
          {STEPS.map((step, index) => (
            <div key={index} className="flex flex-col space-y-4 relative pl-6">
              <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#FF3B00] border-2 border-black" />
              <div className="text-xs font-mono font-bold tracking-wider text-[#FF3B00]">
                {step.num}
              </div>
              <Reveal yOffset={15} duration={0.6}>
                <h3 className="text-2xl font-bold tracking-tight text-white whitespace-pre-line leading-[1.1]">
                  {step.title}
                </h3>
              </Reveal>
              <div className="my-2">
                {step.illustration(pulse)}
              </div>
              <Reveal yOffset={15} duration={0.6} delay={0.1}>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
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
