import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { VerticalDivider, HorizontalConnector } from './SectionConnectors';
import { Reveal } from './SectionReveal';

const STEPS = [
  {
    num: "1",
    numText: "STEP 1",
    title1: "Damage",
    title2: "Occurs",
    description: "Property damage happens due to an unexpected event.",
    color: "#FF3B00",
    colorRgb: "255, 59, 0",
    svg: (pulse: boolean) => (
      <svg className="w-12 h-12 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M12 7l-2 4h4l-2 4" stroke="#FF3B00" strokeWidth="2" strokeLinecap="round" className={pulse ? "animate-pulse" : ""} />
      </svg>
    )
  },
  {
    num: "2",
    numText: "STEP 2",
    title1: "Project",
    title2: "Created",
    description: "The company creates a new reconstruction job workspace.",
    color: "#3b82f6",
    colorRgb: "59, 130, 246",
    svg: (pulse: boolean) => (
      <svg className="w-12 h-12 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="5" rx="1" />
        <rect x="2" y="10" width="20" height="5" rx="1" />
        <rect x="2" y="17" width="20" height="5" rx="1" />
        <circle cx="6" cy="5.5" r="1" fill="#3b82f6" className={pulse ? "animate-pulse" : ""} />
        <circle cx="6" cy="12.5" r="1" fill="#3b82f6" />
        <circle cx="6" cy="19.5" r="1" fill="#10b981" />
      </svg>
    )
  },
  {
    num: "3",
    numText: "STEP 3",
    title1: "Estimate",
    title2: "Uploaded",
    description: "Secure upload of Xactimate PDFs, photos and contracts.",
    color: "#a855f7",
    colorRgb: "168, 85, 247",
    svg: (pulse: boolean) => (
      <svg className="w-12 h-12 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18v-6M9 15l3-3 3 3" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" className={pulse ? "translate-y-[-1px] transition-transform" : ""} />
      </svg>
    )
  },
  {
    num: "4",
    numText: "STEP 4",
    title1: "AI",
    title2: "Parsed",
    description: "BigLogicAI extracts quantities, costs, and labor scopes.",
    color: "#FF3B00",
    colorRgb: "255, 59, 0",
    svg: (pulse: boolean) => (
      <svg className="w-12 h-12 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" stroke="#FF3B00" strokeWidth="1.8" className={pulse ? "animate-pulse" : ""} />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    )
  },
  {
    num: "5",
    numText: "STEP 5",
    title1: "Draw",
    title2: "Schedules",
    description: "Automatically compiles payment cash flows and milestones.",
    color: "#10b981",
    colorRgb: "16, 185, 129",
    svg: (_pulse: boolean) => (
      <svg className="w-12 h-12 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="8" cy="14" r="1.5" fill="#10b981" />
        <circle cx="16" cy="14" r="1.5" fill="#10b981" />
        <circle cx="12" cy="18" r="1.5" fill="#10b981" />
      </svg>
    )
  },
  {
    num: "6",
    numText: "STEP 6",
    title1: "AI",
    title2: "Contracts",
    description: "Branded contracts and carrier SLA agreements drafted.",
    color: "#6366f1",
    colorRgb: "99, 102, 241",
    svg: (pulse: boolean) => (
      <svg className="w-12 h-12 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#6366f1" strokeWidth="1.8" className={pulse ? "translate-x-[1px] translate-y-[-1px]" : ""} />
      </svg>
    )
  },
  {
    num: "7",
    numText: "STEP 7",
    title1: "Materials",
    title2: "Extracted",
    description: "Organizer lists isolate every item needed for the job.",
    color: "#10b981",
    colorRgb: "16, 185, 129",
    svg: (_pulse: boolean) => (
      <svg className="w-12 h-12 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" stroke="#10b981" strokeWidth="2" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    )
  }
];


const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);
  const [pulse, setPulse] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const syncTheme = () => {
      setIsLightTheme(document.documentElement.classList.contains('light'));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
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
          <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FF3B00] mb-4 uppercase block font-bold">
            ( SYSTEM PIPELINE )
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white font-sans uppercase">
            BIGLOGICAI <span className="text-[#FF3B00]">WORKFLOW.</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl font-sans font-medium">
            A fully automated reconstruction lifecycle designed to take raw carrier estimates to parsed milestone contracts in seconds. Scroll down to advance our pipeline.
          </p>
        </motion.div>

        {(() => {
          const displayStep = hoveredStepIndex !== null ? hoveredStepIndex : activeStep;
          return (
            <div className="flex items-center justify-between w-full h-[62vh] relative">
              <div className="w-[12%] lg:w-[8%] flex-shrink-0 flex flex-col justify-center h-full relative z-20 select-none border-r border-white/5 pr-6">
                <div className="flex flex-col gap-6 items-center">
                  <span className="text-xs sm:text-sm font-mono font-black tracking-widest text-[#FF3B00] uppercase block transform rotate-90 origin-center whitespace-nowrap mb-20">
                    ( TIMELINE )
                  </span>
                  <div className="flex flex-col gap-2 items-center">
                    <span className="text-5xl sm:text-6xl font-black tracking-tight text-gray-300 font-mono">
                      0{displayStep + 1}
                    </span>
                    <div className="h-20 w-[1px] bg-gradient-to-b from-purple-500 via-[#FF3B00] to-transparent my-4 shadow-[0_0_8px_rgba(255,59,0,0.5)]" />
                    <span className="text-gray-400 text-sm font-mono font-bold">/ 0{STEPS.length}</span>
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
                    <h2 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-bold leading-[0.85] tracking-tighter text-slate-300 uppercase font-sans scale-y-110 scale-x-95 origin-left">
                      HOW WE
                      <br />
                      WORK
                    </h2>
                  </div>

                  {STEPS.map((step, index) => {
                    const isCurrent = displayStep === index;
                    const isPassed = index < displayStep;

                    return (
                      <div key={index} className="flex items-center h-full shrink-0">
                        <motion.div
                          onMouseEnter={() => setHoveredStepIndex(index)}
                          onMouseLeave={() => setHoveredStepIndex(null)}
                          animate={{
                            y: isCurrent ? -8 : 0,
                            scale: isCurrent ? 1.015 : 1,
                            borderColor: isCurrent
                              ? isLightTheme
                                ? `rgba(${step.colorRgb}, 0.28)`
                                : `rgba(${step.colorRgb}, 0.35)`
                              : isPassed
                                ? isLightTheme
                                  ? "rgba(16, 185, 129, 0.14)"
                                  : "rgba(16, 185, 129, 0.16)"
                                : isLightTheme
                                  ? "rgba(148, 163, 184, 0.22)"
                                  : "rgba(255, 255, 255, 0.08)",
                            backgroundColor: isCurrent
                              ? isLightTheme
                                ? "rgba(255, 255, 255, 0.98)"
                                : "rgba(10, 10, 15, 0.98)"
                              : isPassed
                                ? isLightTheme
                                  ? "rgba(255, 255, 255, 0.92)"
                                  : "rgba(10, 10, 15, 0.9)"
                                : isLightTheme
                                  ? "rgba(248, 250, 252, 0.9)"
                                  : "rgba(8, 8, 12, 0.78)",
                            boxShadow: isCurrent
                              ? isLightTheme
                                ? `0 12px 32px rgba(${step.colorRgb}, 0.08)`
                                : `0 0 35px rgba(${step.colorRgb}, 0.18)`
                              : isPassed
                                ? isLightTheme
                                  ? "0 10px 24px rgba(15, 23, 42, 0.04)"
                                  : "0 0 20px rgba(16, 185, 129, 0.08)"
                                : "none",
                            opacity: isCurrent ? 1 : isPassed ? 0.96 : 0.82
                          }}
                          whileHover={{
                            y: -6,
                            scale: 1.01,
                            borderColor: isCurrent
                              ? isLightTheme
                                ? `rgba(${step.colorRgb}, 0.38)`
                                : `rgba(${step.colorRgb}, 0.45)`
                              : isLightTheme
                                ? "rgba(148, 163, 184, 0.3)"
                                : "rgba(255, 255, 255, 0.12)",
                            opacity: 1
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className={`process-card ${isCurrent ? 'active' : ''} w-[850px] lg:w-[960px] h-[85%] p-8 border rounded-3xl group cursor-pointer relative overflow-hidden flex flex-row items-center gap-8 backdrop-blur-2xl`}
                        >
                          <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-700 -z-10"
                            style={{
                              background: isCurrent
                                ? isLightTheme
                                  ? `radial-gradient(circle at bottom, rgba(${step.colorRgb}, 0.04) 0%, transparent 80%)`
                                  : `radial-gradient(circle at bottom, rgba(${step.colorRgb}, 0.05) 0%, transparent 80%)`
                                : 'transparent'
                            }}
                          />
                          <div className={`absolute top-0 bottom-0 left-[-150%] w-[80%] ${isLightTheme ? 'bg-gradient-to-r from-transparent via-slate-500/10 to-transparent' : 'bg-gradient-to-r from-transparent via-white/4 to-transparent'} skew-x-[25deg] group-hover:left-[250%] transition-all duration-1000 ease-out pointer-events-none -z-10`} />
                          <div
                            className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r transition-all duration-700 ${isCurrent
                              ? `from-transparent via-[${step.color}]/30 to-transparent scale-x-100 opacity-100`
                              : isPassed
                                ? 'from-transparent via-emerald-500/30 to-transparent scale-x-100 opacity-80'
                                : 'scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-40'
                              }`}
                          />

                          {/* LEFT COLUMN: Circle ring + Title + Line + Description */}
                          <div className="w-[30%] lg:w-[28%] flex flex-col justify-between h-full text-left shrink-0 relative min-w-0 select-none">
                            {/* Circle Progress Ring */}
                            <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                              <div
                                className="absolute inset-0 rounded-full border-2 transition-all duration-700"
                                style={{
                                  borderColor: isCurrent
                                    ? `rgba(${step.colorRgb}, 0.45)`
                                    : isPassed
                                      ? 'rgba(16, 185, 129, 0.3)'
                                      : 'rgba(0, 0, 0, 0.05)',
                                  boxShadow: isCurrent
                                    ? `0 0 15px rgba(${step.colorRgb}, 0.3)`
                                    : 'none'
                                }}
                              />
                              <svg className="absolute inset-[-4px] w-[120px] h-[120px] -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="44"
                                  stroke={isCurrent ? step.color : isPassed ? "#10b981" : "transparent"}
                                  strokeWidth="2"
                                  fill="transparent"
                                  strokeDasharray="280"
                                  strokeDashoffset={isCurrent ? "75" : isPassed ? "0" : "280"}
                                  className="transition-all duration-1000 ease-out"
                                />
                              </svg>
                              <div className="z-10 scale-95 select-none">
                                {step.svg(pulse && isCurrent)}
                              </div>
                              <div
                                className={`absolute bottom-1 right-1 w-7 h-7 rounded-full border flex items-center justify-center text-white font-black text-xs shadow-lg transition-all duration-500 z-20`}
                                style={{
                                  background: isCurrent
                                    ? `linear-gradient(135deg, #FF7A00, ${step.color})`
                                    : isPassed
                                      ? 'linear-gradient(135deg, #10b981, #059669)'
                                      : '#1f1f2e',
                                  borderColor: isCurrent
                                    ? `rgba(${step.colorRgb}, 0.6)`
                                    : isPassed
                                      ? 'rgba(16, 185, 129, 0.4)'
                                      : 'rgba(255, 255, 255, 0.1)',
                                  boxShadow: isCurrent
                                    ? `0 2px 10px rgba(${step.colorRgb}, 0.4)`
                                    : 'none'
                                }}
                              >
                                {isPassed ? "✓" : "!"}
                              </div>
                            </div>

                            {/* Title, Line, Description */}
                            <div className="mt-4 flex-1 flex flex-col justify-end gap-3">
                              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.05] uppercase">
                                <span className="text-white block">{step.title1} </span>
                                <span
                                  className="transition-colors duration-500 block"
                                  style={{
                                    color: isCurrent
                                      ? step.color
                                      : isPassed
                                        ? '#10b981'
                                        : '#64748b'
                                  }}
                                >
                                  {step.title2}
                                </span>
                              </h3>

                              <div className="relative w-full h-[1px] bg-slate-200 mt-1 mb-1">
                                <div
                                  className="absolute left-0 top-0 h-[1.5px] transition-all duration-1000"
                                  style={{
                                    width: isCurrent || isPassed ? '100%' : '0%',
                                    background: isCurrent
                                      ? `linear-gradient(to right, ${step.color}, rgba(${step.colorRgb}, 0.1))`
                                      : isPassed
                                        ? 'linear-gradient(to right, #10b981, rgba(16, 185, 129, 0.1))'
                                        : 'transparent'
                                  }}
                                />
                                <div
                                  className="absolute right-0 top-[-2px] w-[5px] h-[5px] rounded-full transition-all duration-700"
                                  style={{
                                    backgroundColor: isCurrent
                                      ? step.color
                                      : isPassed
                                        ? '#10b981'
                                        : 'rgba(0, 0, 0, 0.1)',
                                    boxShadow: isCurrent
                                      ? `0 0 6px ${step.color}`
                                      : isPassed
                                        ? '0 0 6px #10b981'
                                        : 'none'
                                  }}
                                />
                              </div>

                              <p
                                className="text-xs lg:text-[13px] leading-relaxed text-gray-400 font-semibold"
                                style={{
                                  color: isCurrent
                                    ? '#334155'
                                    : isPassed
                                      ? '#475569'
                                      : '#94a3b8'
                                }}
                              >
                                {step.description}
                              </p>
                            </div>
                          </div>

                          {/* MIDDLE VERTICAL DIVIDER */}
                          <div className="h-[90%] w-[1px] bg-slate-200 relative shrink-0">
                            <div
                              className="absolute top-1/2 -translate-y-1/2 left-[-1.5px] w-[4px] h-4 rounded-full transition-all duration-700"
                              style={{
                                backgroundColor: isCurrent
                                  ? step.color
                                  : isPassed
                                    ? "#10b981"
                                    : "transparent",
                                boxShadow: isCurrent
                                  ? `0 0 8px ${step.color}`
                                  : isPassed
                                    ? "0 0 8px #10b981"
                                    : "none"
                              }}
                            />
                          </div>

                          {/* RIGHT COLUMN: Interactive High-Fidelity Mockup Dashboard */}
                          <div className="flex-1 h-full overflow-hidden flex flex-col justify-between text-left min-w-0">
                            {/* RENDER MOCKUP BASED ON THE CARD INDEX */}
                            {(() => {
                              if (index === 0) {
                                // Step 1: Damage Occurs Scoper Mockup
                                return (
                                  <div className="w-full h-full flex flex-col justify-between py-1 text-left select-none relative z-10 font-sans text-xs">
                                    <div className="flex justify-between items-center select-none shrink-0 border-b border-white/5 pb-2">
                                      <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-500 text-[10px] font-black">1</div>
                                        <span className="font-extrabold text-white text-[13px] uppercase tracking-wide">Property Damage Incident Scoper</span>
                                      </div>
                                      <span className="text-[9px] font-mono font-black text-red-400 bg-red-400/5 px-2 py-0.5 border border-red-500/15 rounded uppercase tracking-wider animate-pulse">CRITICAL LOSS</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center gap-3 py-2 text-left">
                                      <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-[#0a0a0f] border border-white/5 p-2.5 rounded-xl text-left">
                                          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Incident Ref</div>
                                          <div className="text-[12px] font-extrabold text-gray-300 mt-0.5">INC-2026-9958</div>
                                        </div>
                                        <div className="bg-[#0a0a0f] border border-white/5 p-2.5 rounded-xl text-left">
                                          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Date of Loss</div>
                                          <div className="text-[12px] font-extrabold text-gray-300 mt-0.5">May 18, 2026</div>
                                        </div>
                                      </div>
                                      <div className="bg-[#0a0a0f] border border-[#FF3B00]/15 p-3 rounded-xl flex items-center justify-between text-left shadow-[0_0_12px_rgba(255,59,0,0.02)]">
                                        <div>
                                          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Loss Cause & Area</div>
                                          <div className="text-[12px] font-black text-[#FF3B00] mt-0.5">Structure Fire & Severe Water Damage</div>
                                          <div className="text-[10px] text-gray-400 mt-0.5 font-semibold">452 Maple Ave, Houston, TX 77001</div>
                                        </div>
                                        <div className="text-right">
                                          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Scoping Action</div>
                                          <div className="text-[10px] font-black text-white bg-[#FF3B00]/15 border border-[#FF3B00]/30 px-2 py-0.5 rounded uppercase mt-1 leading-none">Scoper Dispatched</div>
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2 text-left">
                                        <div className="bg-red-950/5 border border-red-500/10 rounded-xl p-2.5 text-left hover:border-red-500/20 transition-colors">
                                          <div className="text-[8.5px] font-mono font-black text-red-400 uppercase tracking-widest leading-none">Living Room Ceiling</div>
                                          <div className="text-[10px] font-semibold text-gray-400 mt-1 leading-normal">Charred drywall, complete ceiling truss collapse, wiring failure.</div>
                                        </div>
                                        <div className="bg-blue-950/5 border border-blue-500/10 rounded-xl p-2.5 text-left hover:border-blue-500/20 transition-colors">
                                          <div className="text-[8.5px] font-mono font-black text-blue-400 uppercase tracking-widest leading-none">Basement Dryout</div>
                                          <div className="text-[10px] font-semibold text-gray-400 mt-1 leading-normal">Standing water (2.5 inches), structural framing water logged.</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[9.5px] font-mono text-gray-500 select-none">
                                      <span>Hazard Level: Class 3 (Severe)</span>
                                      <span className="text-[#FF3B00] font-bold animate-pulse">● Intake Verified</span>
                                    </div>
                                  </div>
                                );
                              }

                              if (index === 1) {
                                // Step 2: Project Created Scoper Mockup
                                return (
                                  <div className="w-full h-full flex flex-col justify-between py-1 text-left select-none relative z-10 font-sans text-xs">
                                    <div className="flex justify-between items-center select-none shrink-0 border-b border-white/5 pb-2">
                                      <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 text-[10px] font-black">2</div>
                                        <span className="font-extrabold text-white text-[13px] uppercase tracking-wide">Reconstruction Workspace Initialized</span>
                                      </div>
                                      <span className="text-[9px] font-mono font-black text-blue-400 bg-blue-400/5 px-2 py-0.5 border border-blue-500/15 rounded uppercase tracking-wider">Scoping Active</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center gap-3.5 py-2 text-left">
                                      <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-[#0a0a0f] border border-white/5 p-2.5 rounded-xl text-left">
                                          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Project Workspace ID</div>
                                          <div className="text-[12px] font-extrabold text-gray-300 mt-0.5">PRJ-452MAPLE</div>
                                        </div>
                                        <div className="bg-[#0a0a0f] border border-white/5 p-2.5 rounded-xl text-left">
                                          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Assigned Coordinator</div>
                                          <div className="text-[12px] font-extrabold text-gray-300 mt-0.5">Sarah Jenkins (Director)</div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-2 bg-[#0a0a0f] border border-white/5 p-3 rounded-xl text-left">
                                        <div className="text-[9.5px] font-mono font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Onboarding Checklist Completed</div>
                                        {[
                                          "Carrier Estimate Document database slot allocated",
                                          "Site inspection & photo gallery folders mapped",
                                          "Financial ledger and billing codes established",
                                          "Emergency service dispatch packets sent to site"
                                        ].map((check, idx) => (
                                          <div key={idx} className="flex items-center gap-2 text-[10.5px] text-gray-300 font-semibold leading-none">
                                            <span className="text-blue-400 font-black">✓</span>
                                            <span>{check}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[9.5px] font-mono text-gray-500 select-none">
                                      <span>Workspace Team: Scoper + Coordinator</span>
                                      <span className="text-blue-400 font-bold">● Workspace Setup Done</span>
                                    </div>
                                  </div>
                                );
                              }

                              if (index === 2) {
                                // Step 3: Estimate Uploaded - dropzone upload (Image 2)
                                return (
                                  <div className="w-full h-full flex flex-col justify-between py-1 text-left select-none relative z-10 font-sans text-xs">
                                    <div className="flex justify-between items-center select-none shrink-0 border-b border-white/5 pb-2">
                                      <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 text-[10px] font-black">3</div>
                                        <span className="font-extrabold text-white text-[13px] uppercase tracking-wide">Insurance Estimate Upload</span>
                                      </div>
                                      <span className="text-[9px] font-mono font-black text-emerald-400 bg-emerald-400/5 px-2 py-0.5 border border-emerald-500/15 rounded uppercase tracking-wider">Secure Upload</span>
                                    </div>
                                    <div className="flex-1 flex flex-row items-center justify-between gap-4 py-3 select-none">
                                      {/* Left side: Upload Dropzone Dotted card */}
                                      <div className="w-[45%] border-2 border-dashed border-orange-500/20 hover:border-orange-500/40 bg-[#0a0a0f]/[0.01] hover:bg-orange-500/[0.01] rounded-xl p-3.5 flex flex-col items-center justify-center text-center transition-colors h-[165px] shrink-0 cursor-pointer">
                                        <div className="w-9 h-9 rounded-full bg-[#0a0a0f]/5 flex items-center justify-center text-orange-400 mb-2 shadow-inner">
                                          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5h10.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0017.25 4.5H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>
                                        </div>
                                        <span className="text-[10px] text-gray-300 font-extrabold block">Estimate_452Maple.pdf</span>
                                        <span className="text-[8.5px] text-gray-500 font-semibold block mt-1">12.4 MB • Upload Complete</span>
                                        <div className="w-full bg-neutral-900 h-1 rounded-full overflow-hidden mt-2.5">
                                          <div className="h-full bg-orange-500 rounded-full w-full" />
                                        </div>
                                      </div>

                                      {/* Right side: Sleek Glass Document representing Estimate */}
                                      <div className="flex-1 bg-[#0a0a0f] border border-white/5 rounded-xl p-4 flex flex-col justify-between h-[165px] text-left">
                                        <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2 shrink-0 select-none">
                                          <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">estimate_intake // compliance</span>
                                          <span className="text-[7.5px] font-mono text-orange-400 bg-orange-400/5 px-1.5 rounded uppercase leading-none font-bold">Xactimate</span>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center gap-2">
                                          <div className="flex items-center gap-2 select-none">
                                            <div className="w-6 h-6 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                                            </div>
                                            <div className="min-w-0">
                                              <div className="text-[10px] font-extrabold text-gray-300 leading-none">Xactimate PDF Uploaded</div>
                                              <div className="text-[8px] text-gray-500 font-mono mt-0.5 leading-none">EST-2024-0456 • Insurance Estimate</div>
                                            </div>
                                          </div>
                                          <div className="flex flex-col gap-1 text-[10px] text-gray-400 font-medium font-mono">
                                            <div>✓ SECURE 256-BIT ENCRYPTION</div>
                                            <div>✓ COMPLIANT WITH CARRIER GUIDELINES</div>
                                            <div>✓ SLA EXTRACTION PROCESS RUNNING</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[9.5px] font-mono text-gray-500 select-none">
                                      <span>Upload Server: secure-vault-18</span>
                                      <span className="text-emerald-400 font-bold">✓ Securely Synced</span>
                                    </div>
                                  </div>
                                );
                              }

                              if (index === 3) {
                                // Step 4: AI Parsed the Estimate (Image 4)
                                return (
                                  <div className="w-full h-full flex flex-col justify-between py-1 text-left select-none relative z-10 font-sans text-xs">
                                    <div className="flex justify-between items-center select-none shrink-0 border-b border-white/5 pb-2">
                                      <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 text-[10px] font-black">4</div>
                                        <span className="font-extrabold text-white text-[13px] uppercase tracking-wide">AI Parsed the Estimate</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <span className="text-[8.5px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded leading-none flex items-center gap-1 uppercase tracking-wider">
                                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" /> Extracted successfully
                                        </span>
                                      </div>
                                    </div>

                                    <div className="flex-1 flex flex-row items-stretch justify-between gap-4 py-2 min-h-0">
                                      {/* Left Column: Printed PDF document mockup */}
                                      <div className="w-[43%] bg-[#0a0a0f] rounded-xl p-2.5 flex flex-col justify-between h-[175px] text-left text-white border border-white/5 shadow-2xl relative overflow-hidden select-text shrink-0 leading-tight">
                                        <div className="border-b border-white/5 pb-1 flex justify-between items-start select-none">
                                          <div>
                                            <div className="text-[8.5px] font-black text-white leading-none">ABC RESTORATION</div>
                                            <div className="text-[6.5px] text-gray-500 font-mono tracking-widest mt-0.5 uppercase leading-none font-bold text-center">Build Back Better</div>
                                          </div>
                                          <div className="text-right">
                                            <div className="text-[8.5px] font-bold text-white leading-none font-mono">ESTIMATE</div>
                                            <div className="text-[6.5px] text-[#FF3B00] font-black font-mono tracking-wider mt-0.5 uppercase leading-none">#EST-2024-0456</div>
                                          </div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center gap-1.5 py-1 text-[7px] font-semibold text-gray-300 border-b border-white/5 select-none">
                                          <div className="flex justify-between border-b border-white/5 pb-0.5 font-bold text-white">
                                            <span>DESCRIPTION</span>
                                            <span className="w-[20%] text-right">PRICE</span>
                                          </div>
                                          <div className="flex justify-between font-medium"><span>Roof Replacement - Shingles</span><span className="w-[20%] text-right font-mono font-bold">$810.00</span></div>
                                          <div className="flex justify-between font-medium"><span>Water Damage Repair</span><span className="w-[20%] text-right font-mono font-bold">$2,450.00</span></div>
                                          <div className="flex justify-between font-medium"><span>Drywall Repair</span><span className="w-[20%] text-right font-mono font-bold">$900.00</span></div>
                                          <div className="flex justify-between font-medium"><span>Interior Painting</span><span className="w-[20%] text-right font-mono font-bold">$962.50</span></div>
                                          <div className="flex justify-between font-medium"><span>General Labor</span><span className="w-[20%] text-right font-mono font-bold">$1,300.00</span></div>
                                        </div>
                                        <div className="text-right select-none leading-normal shrink-0 mt-0.5">
                                          <div className="text-[7.5px] text-gray-400 font-bold">Subtotal: <span className="font-mono font-black text-white ml-1">$6,692.50</span></div>
                                          <div className="text-[7.5px] text-gray-400 font-bold">Tax (8.25%): <span className="font-mono font-black text-white ml-1">$552.63</span></div>
                                          <div className="text-[9px] font-black text-[#FF3B00] border-t border-dashed border-white/5 pt-0.5 mt-0.5 uppercase tracking-wide">TOTAL: <span className="font-mono font-black ml-1">$7,245.13</span></div>
                                        </div>
                                      </div>

                                      {/* Right Column: Key info extracted details */}
                                      <div className="flex-1 grid grid-cols-2 gap-2 text-left self-center">
                                        {[
                                          { label: "Estimate Number", val: "EST-2024-0456", color: "text-purple-400" },
                                          { label: "Estimate Date", val: "May 20, 2024", color: "text-blue-400" },
                                          { label: "Customer Name", val: "John Smith", color: "text-emerald-400" },
                                          { label: "Subtotal", val: "$6,692.50", color: "text-pink-400" },
                                          { label: "TOTAL ESTIMATE", val: "$7,245.13", color: "text-orange-400 font-black" },
                                          { label: "Category", val: "Water Damage", color: "text-indigo-400" }
                                        ].map((item, idx) => (
                                          <div key={idx} className="bg-[#0a0a0f] border border-white/5 rounded-xl p-2 flex flex-col justify-center text-left hover:border-purple-500/10 transition-colors">
                                            <div className="text-[8.5px] font-bold text-gray-500 uppercase tracking-wider">{item.label}</div>
                                            <div className={`text-[11px] font-extrabold mt-0.5 truncate leading-none ${item.color}`}>{item.val}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[9.5px] font-mono text-gray-500 select-none shrink-0">
                                      <span>Source: Insurance Estimate PDF</span>
                                      <span className="text-emerald-400 font-bold">✓ Parsed successfully</span>
                                    </div>
                                  </div>
                                );
                              }

                              if (index === 4) {
                                // Step 5: AI Generates Draw Schedules (Image 3)
                                return (
                                  <div className="w-full h-full flex flex-col justify-between py-1 text-left select-none relative z-10 font-sans text-xs">
                                    <div className="flex justify-between items-center select-none shrink-0 border-b border-white/5 pb-2">
                                      <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 text-[10px] font-black">5</div>
                                        <span className="font-extrabold text-white text-[13px] uppercase tracking-wide">AI Generates Draw Schedules</span>
                                      </div>
                                      <span className="text-[9px] font-mono font-black text-emerald-400 bg-emerald-400/5 px-2 py-0.5 border border-emerald-500/15 rounded uppercase tracking-wider">Draw Set Done ✓</span>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center gap-2 py-2 min-h-0">
                                      <div className="text-[9px] font-mono text-gray-400 font-bold uppercase tracking-wider mb-0.5 leading-none">Optimized Payment Cash Flow & Milestones</div>
                                      <div className="flex-1 flex flex-col gap-1.5 justify-center overflow-y-auto pr-1">
                                        {[
                                          { d: "Draw 1", m: "Initial Mobilization Deposit", p: "10%", w: "w-[25%]", color: "from-orange-500 to-amber-500" },
                                          { d: "Draw 2", m: "Demolition & Site Clearance", p: "15%", w: "w-[40%]", color: "from-orange-500 to-amber-500" },
                                          { d: "Draw 3", m: "Rough Framing Structure", p: "20%", w: "w-[60%]", color: "from-orange-500 to-amber-500" },
                                          { d: "Draw 4", m: "Mechanical/Elec/Plumbing", p: "20%", w: "w-[80%]", color: "from-orange-500 to-amber-500" },
                                          { d: "Draw 5", m: "Drywall, Primer & Finishes", p: "20%", w: "w-[92%]", color: "from-orange-500 to-amber-500" },
                                          { d: "Draw 6", m: "Final Inspections & Closing", p: "15%", w: "w-full", color: "from-orange-500 to-amber-500" }
                                        ].map((draw, idx) => (
                                          <div key={idx} className="flex items-center gap-3 bg-[#0a0a0f]/[0.01] border border-white/5 px-3 py-1.5 rounded-xl text-[10px] justify-between font-semibold leading-none shadow-sm select-none">
                                            <span className="text-orange-400 font-black w-[15%] shrink-0 text-left">{draw.d}</span>
                                            <span className="text-gray-300 flex-1 truncate text-left">{draw.m}</span>
                                            <span className="text-gray-400 font-mono font-bold w-[12%] shrink-0 text-right">{draw.p}</span>
                                            {/* Timeline Visual Slider */}
                                            <div className="w-[32%] bg-neutral-900 h-1.5 rounded-full relative overflow-hidden shrink-0 hidden sm:block">
                                              <div className={`h-full bg-gradient-to-r ${draw.color} rounded-full`} style={{ width: draw.p }} />
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[9.5px] font-mono text-gray-500 select-none shrink-0 leading-none">
                                      <div className="flex gap-4">
                                        <span>Total Draws: <strong className="text-white">6</strong></span>
                                        <span>Total Contract: <strong className="text-emerald-400">100%</strong></span>
                                      </div>
                                      <span>Duration: <strong className="text-[#FF7A00]">120 Days</strong></span>
                                    </div>
                                  </div>
                                );
                              }

                              if (index === 5) {
                                // Step 6: AI Generates Contracts (Image 5)
                                return (
                                  <div className="w-full h-full flex flex-col justify-between py-1 text-left select-none relative z-10 font-sans text-xs">
                                    <div className="flex justify-between items-center select-none shrink-0 border-b border-white/5 pb-2">
                                      <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 text-[10px] font-black">6</div>
                                        <span className="font-extrabold text-white text-[13px] uppercase tracking-wide">AI Generates Contracts</span>
                                      </div>
                                      <span className="text-[9px] font-mono font-black text-emerald-400 bg-emerald-400/5 px-2 py-0.5 border border-emerald-500/15 rounded uppercase tracking-wider">Contract Generated</span>
                                    </div>

                                    <div className="flex-1 flex flex-row items-stretch justify-between gap-4 py-2 min-h-0">
                                      {/* Left Panel: Contract Summary Details */}
                                      <div className="w-[45%] flex flex-col justify-center gap-2 shrink-0 text-left">
                                        {[
                                          { label: "Contract Type", val: "Service Agreement", color: "text-[#FF7A00]" },
                                          { label: "Project Name", val: "Water Damage Reconstruction", color: "text-white" },
                                          { label: "Client Name", val: "John Smith", color: "text-white" },
                                          { label: "Total Amount", val: "$7,245.13", color: "text-emerald-400 font-extrabold" },
                                          { label: "Payment Terms", val: "Net 30 Days", color: "text-gray-300" }
                                        ].map((item, idx) => (
                                          <div key={idx} className="bg-[#0a0a0f] border border-white/5 rounded-xl px-3 py-1.5 flex flex-col justify-center text-left hover:border-indigo-500/10 transition-colors">
                                            <div className="text-[8px] font-bold text-gray-500 uppercase tracking-wider leading-none">{item.label}</div>
                                            <div className={`text-[10.5px] font-extrabold mt-1 truncate leading-none ${item.color}`}>{item.val}</div>
                                          </div>
                                        ))}
                                      </div>

                                      {/* Right Panel: Printed SERVICE AGREEMENT sheet mockup */}
                                      <div className="flex-1 bg-[#0a0a0f] rounded-xl p-3 flex flex-col justify-between h-[175px] text-left text-white border border-white/5 shadow-2xl relative overflow-hidden select-text leading-tight font-sans">
                                        <div className="border-b border-white/5 pb-1 select-none">
                                          <div className="text-[9px] font-black text-white leading-none text-center">SERVICE AGREEMENT</div>
                                          <div className="text-[5px] text-gray-500 font-mono tracking-widest mt-0.5 uppercase leading-none font-bold text-center">Standard SLA Terms</div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center gap-1.5 py-1 select-none text-[6.5px] font-medium text-gray-300">
                                          <p>This Contract is made and entered into as of May 20, 2024, between ABC Restoration & John Smith.</p>
                                          <p><strong>1. SCOPE OF WORK:</strong> Contractor agrees to provide complete water damage restoration services.</p>
                                          <p><strong>2. PAYMENT TERMS:</strong> Client agrees to pay contract sum of $7,245.13 within 30 days of invoice.</p>
                                        </div>
                                        <div className="border-t border-white/5 pt-1.5 select-none shrink-0 flex justify-between items-center">
                                          <div>
                                            <div className="text-[9px] font-bold text-[#FF7A00] font-serif italic leading-none select-none">John Smith</div>
                                            <div className="text-[5.5px] text-gray-500 mt-0.5 leading-none font-bold uppercase select-none">Client Signature</div>
                                          </div>
                                          <div className="text-right">
                                            <div className="text-[7px] font-bold text-white font-mono leading-none select-none">May 20, 2024</div>
                                            <div className="text-[5.5px] text-gray-500 mt-0.5 leading-none font-bold uppercase select-none">Date</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[9.5px] font-mono text-gray-500 select-none shrink-0 leading-none">
                                      <span>Contract File: service_agreement.pdf</span>
                                      <button className="text-orange-400 hover:text-orange-300 font-black flex items-center gap-1 uppercase tracking-wider text-[8px] bg-orange-400/5 hover:bg-orange-400/10 border border-orange-500/20 px-2.5 py-1 rounded cursor-pointer leading-none">
                                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                                        <span>Download Contract</span>
                                      </button>
                                    </div>
                                  </div>
                                );
                              }

                              if (index === 6) {
                                // Step 7: Material Extraction (Image 1)
                                return (
                                  <div className="w-full h-full flex flex-col justify-between py-1 text-left select-none relative z-10 font-sans text-xs">
                                    <div className="flex justify-between items-center select-none shrink-0 border-b border-white/5 pb-2">
                                      <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-[10px] font-black">7</div>
                                        <span className="font-extrabold text-white text-[13px] uppercase tracking-wide">Material Extraction List</span>
                                      </div>
                                      <span className="text-[9px] font-mono font-black text-emerald-400 bg-emerald-400/5 px-2 py-0.5 border border-emerald-500/15 rounded uppercase tracking-wider">Materials Done ✓</span>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between gap-2.5 py-2.5 min-h-0">
                                      {/* Top Row: Quick stat cards */}
                                      <div className="grid grid-cols-4 gap-2 shrink-0">
                                        {[
                                          { label: "Total Materials", val: "46 Items", color: "text-[#FF3B00] border-red-500/10" },
                                          { label: "Total Cost", val: "$18,742.60", color: "text-emerald-400 border-emerald-500/10" },
                                          { label: "Categories", val: "8 Groups", color: "text-blue-400 border-blue-500/10" },
                                          { label: "Claim Source", val: "EST-2024-0456", color: "text-purple-400 border-purple-500/10" }
                                        ].map((stat, idx) => (
                                          <div key={idx} className="bg-[#0a0a0f] border border-white/5 rounded-xl px-2.5 py-1.5 text-left hover:border-white/5 transition-colors">
                                            <div className="text-[7.5px] font-bold text-gray-500 uppercase tracking-wider leading-none">{stat.label}</div>
                                            <div className={`text-[10px] font-extrabold mt-1 leading-none ${stat.color}`}>{stat.val}</div>
                                          </div>
                                        ))}
                                      </div>

                                      {/* Bottom: scrollable list of materials */}
                                      <div className="flex-1 bg-[#0a0a0f]/[0.01] border border-white/5 rounded-xl overflow-hidden flex flex-col justify-between min-h-0 select-none text-[9.5px]">
                                        <div className="flex justify-between items-center px-3.5 py-1.5 border-b border-white/5 text-gray-500 font-mono font-bold uppercase shrink-0 select-none leading-none tracking-wider text-[8px]">
                                          <span className="flex-1 text-left">Material Description</span>
                                          <span className="w-[20%] text-center">Category</span>
                                          <span className="w-[10%] text-center">Qty</span>
                                          <span className="w-[10%] text-center">Unit</span>
                                          <span className="w-[15%] text-right">Total Cost</span>
                                        </div>
                                        <div className="flex-1 overflow-y-auto px-3.5 py-1 select-none flex flex-col gap-1.5">
                                          {[
                                            { desc: "Asphalt Shingles - Premium", cat: "Roofing", qty: "18.00", unit: "SQ", price: "$810.00" },
                                            { desc: "Waterproof Underlayment Felt", cat: "Roofing", qty: "2.00", unit: "SQ", price: "$136.00" },
                                            { desc: "Plywood Sheathing 1/2\" Board", cat: "Structural", qty: "24.00", unit: "EA", price: "$780.00" },
                                            { desc: "2x4x8 Structural Studs - Wood", cat: "Structural", qty: "48.00", unit: "EA", price: "$204.00" },
                                            { desc: "Fiberglass R-13 Insulation Roll", cat: "Insulation", qty: "10.00", unit: "ROLL", price: "$587.50" },
                                            { desc: "Drywall Panel 1/2\" Standard", cat: "Drywall", qty: "30.00", unit: "EA", price: "$435.00" }
                                          ].map((mat, idx) => (
                                            <div key={idx} className="flex justify-between items-center text-gray-300 font-medium leading-none border-b border-slate-100 pb-1 hover:text-white transition-colors select-none text-[9.5px]">
                                              <span className="flex-1 text-left truncate">{mat.desc}</span>
                                              <span className="w-[20%] text-center text-gray-400 font-bold">{mat.cat}</span>
                                              <span className="w-[10%] text-center font-mono font-bold">{mat.qty}</span>
                                              <span className="w-[10%] text-center font-mono font-bold">{mat.unit}</span>
                                              <span className="w-[15%] text-right font-mono font-black text-emerald-400">{mat.price}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[9.5px] font-mono text-gray-500 select-none shrink-0 leading-none">
                                      <span>Extracted Source: Insurance Estimate</span>
                                      <button className="text-emerald-400 hover:text-emerald-300 font-black flex items-center gap-1 uppercase tracking-wider text-[8px] bg-emerald-400/5 hover:bg-emerald-400/10 border border-emerald-500/20 px-2.5 py-1 rounded cursor-pointer leading-none">
                                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                                        <span>Export to Excel</span>
                                      </button>
                                    </div>
                                  </div>
                                );
                              }

                              return null;
                            })()}
                          </div>
                        </motion.div>
                        {index < STEPS.length - 1 && (
                          <VerticalDivider isActive={isCurrent} isPassed={isPassed} />
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

const ProcessMobile = () => {
  const [pulse, setPulse] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2000); // cycle automatically every 2 seconds on mobile!
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process-mobile" className="relative z-20 w-full block md:hidden bg-black px-6 py-24 border-t border-white/5">
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF3B00] mb-3 uppercase">
            (PIPELINE)
          </span>
          <h2 className="text-5xl font-black tracking-tighter text-slate-300 uppercase font-sans leading-[0.9]">
            BIGLOGICAI WORKFLOW
          </h2>
        </div>
        <div className="flex flex-col space-y-12 pl-2 border-l border-white/5 text-left">
          {STEPS.map((step, index) => {
            const isCurrent = activeStep === index;
            const isPassed = index < activeStep;

            return (
              <div key={index} className="relative pl-6 pb-6 border-l border-white/5 text-left">
                <div
                  className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-black transition-all duration-500"
                  style={{
                    backgroundColor: isCurrent ? step.color : isPassed ? "#10b981" : "#1f1f2e"
                  }}
                />

                {/* Horizontal Card container */}
                <div
                  className="w-full p-5 rounded-2xl border bg-[#0a0a0f] flex flex-row items-center gap-4 relative overflow-hidden mt-3"
                  style={{
                    borderColor: isCurrent
                      ? `rgba(${step.colorRgb}, 0.3)`
                      : isPassed
                        ? 'rgba(16, 185, 129, 0.1)'
                        : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: isCurrent
                      ? `0 0 20px rgba(${step.colorRgb}, 0.08)`
                      : 'none'
                  }}
                >
                  {/* Left Circle */}
                  <div className="w-[30%] flex items-center justify-center shrink-0 relative">
                    <div
                      className="w-16 h-16 rounded-full border flex items-center justify-center relative transition-all duration-500"
                      style={{
                        borderColor: isCurrent
                          ? `rgba(${step.colorRgb}, 0.4)`
                          : isPassed
                            ? 'rgba(16, 185, 129, 0.3)'
                            : 'rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <div className="scale-75">
                        {step.svg(pulse && isCurrent)}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-12 w-[1px] bg-[#0a0a0f]/10" />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-[11px] font-mono font-black tracking-wider"
                        style={{
                          color: isCurrent ? step.color : isPassed ? '#10b981' : '#9ca3af'
                        }}
                      >
                        {step.numText}
                      </span>
                      {isPassed && <span className="text-[9px] font-mono font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded leading-none">DONE ✓</span>}
                      {isCurrent && <span className="text-[9px] font-mono font-black text-orange-400 bg-orange-500/10 border border-orange-500/20 px-1.5 py-0.5 rounded animate-pulse leading-none">ACTIVE</span>}
                    </div>

                    <h3 className="text-base font-extrabold text-white mt-1.5">
                      {step.title1} <span style={{ color: isCurrent ? step.color : isPassed ? '#10b981' : '#d1d5db' }}>{step.title2}</span>
                    </h3>
                    <p className="text-[12px] text-gray-400 leading-relaxed mt-2 font-medium line-clamp-3">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
