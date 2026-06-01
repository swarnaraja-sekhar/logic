import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Check,
  Bot,
  Zap,
  LayoutDashboard,
  Maximize2,
  Bell,
  DollarSign,
  Activity,
  ShieldAlert,
  Clock,
  FileText,
  ClipboardCheck
} from 'lucide-react';
import heroBg from '../assets/hero_background.png';

// Container animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    }
  }
};

const itemVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Right-side Simulation States (Customized for BigLogicAI Reconstruction Workflow)
  const [demoStep, setDemoStep] = useState(0); // 0: Typing, 1: Logs, 2: Graph, 3: Claim Result, 4: High-impact FOMO Card
  const [typedPrompt, setTypedPrompt] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const fullPrompt = "@biglogic Process incoming Xactimate estimate for 452 Maple Ave...";

  const logList = [
    "✓ Extracting line items from estimate PDF",
    "✓ Verifying State Farm SLA compliance checklist",
    "✓ Auto-correcting dehumidifier runtime to 3 days",
    "✓ Generating owner e-signature contracts",
    "✓ Scheduling restoration crew Alpha dispatch"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Right-side self-playing demo state machine (BigLogicAI Process)
  useEffect(() => {
    if (!isPlaying) return;

    if (demoStep === 0) {
      if (typedPrompt.length < fullPrompt.length) {
        const timeout = setTimeout(() => {
          setTypedPrompt(fullPrompt.slice(0, typedPrompt.length + 3)); // type 3 chars at once
        }, 8); // ultra-fast typing
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDemoStep(1);
        }, 200); // short pause after typing
        return () => clearTimeout(timeout);
      }
    }

    if (demoStep === 1) {
      if (terminalLines.length < logList.length) {
        const timeout = setTimeout(() => {
          setTerminalLines((prev) => [...prev, logList[prev.length]]);
        }, 80); // very fast log lines
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDemoStep(2);
        }, 250); // short pause before progress
        return () => clearTimeout(timeout);
      }
    }

    if (demoStep === 2) {
      if (progress < 100) {
        const timeout = setTimeout(() => {
          setProgress((prev) => Math.min(prev + 10, 100)); // jump 10% at a time
        }, 18); // very fast progress
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDemoStep(3);
        }, 300); // short pause before result card
        return () => clearTimeout(timeout);
      }
    }

    if (demoStep === 3) {
      const timeout = setTimeout(() => {
        setDemoStep(4);
      }, 4000); // show claim result card for 4s then show FOMO card
      return () => clearTimeout(timeout);
    }

    if (demoStep === 4) {
      const timeout = setTimeout(() => {
        handleReset();
      }, 7000); // show FOMO card for 7s then loop/reset
      return () => clearTimeout(timeout);
    }
  }, [demoStep, isPlaying, typedPrompt, terminalLines, progress]);

  const handleReset = () => {
    setTypedPrompt("");
    setTerminalLines([]);
    setProgress(0);
    setDemoStep(0);
  };

  return (
    <section className="relative z-20 w-full min-h-screen bg-black pt-28 pb-24 overflow-hidden select-none flex items-center">

      {/* 3D Cyber Connected Background Graphic Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src={heroBg}
          alt="Cybernetic Grid Node Connections Backdrop"
          className="w-full h-full object-cover opacity-[0.22] filter brightness-[1.05] contrast-[1.05] saturate-[1.05]"
        />
        {/* Soft fading overlays to blend perfectly into pure black transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#000_85%)] pointer-events-none hero-gradient-overlay" />
      </div>

      {/* Dynamic Background Visual Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_80%),linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 z-0 hero-grid-pattern" />

      {/* Tri-color ambient mesh spotlights */}
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#FF3B00]/5 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[45%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-950/5 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-950/5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Pulsing laser connector grid streams */}
      <div className="absolute inset-y-0 left-[8%] w-[1px] border-l border-dashed border-white/5 pointer-events-none z-0" />
      <div className="absolute inset-y-0 right-[8%] w-[1px] border-r border-dashed border-white/5 pointer-events-none z-0" />

      {/* FLOATING GLASSMORPHISM FOMO CARDS (Drifting behind text & mockup) */}

      {/* FOMO Card 3: Top-Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute right-[3%] top-[12%] z-10 hidden lg:flex items-center gap-4 p-4 rounded-2xl bg-[#08080c]/75 border border-white/10 backdrop-blur-md shadow-2xl"
      >
        <div className="w-9 h-9 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.2)]">
          <Activity className="w-5 h-5" />
        </div>
        <div className="text-left font-sans">
          <div className="text-xs font-mono font-bold text-orange-400 tracking-wider">24/7 ACTIVE COPILOT</div>
          <div className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Outbound tasks queued</div>
        </div>
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-400 border-2 border-black animate-pulse" />
      </motion.div>

      {/* FOMO Card 4: Mid-Right Lower */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute right-[4%] top-[72%] z-10 hidden lg:flex items-center gap-4 p-4 rounded-2xl bg-[#08080c]/75 border border-white/10 backdrop-blur-md shadow-2xl"
      >
        <div className="w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
          <DollarSign className="w-5 h-5" />
        </div>
        <div className="text-left font-sans">
          <div className="text-xs font-mono font-bold text-cyan-400 tracking-wider">-$9,420 DEV COSTS</div>
          <div className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">Infrastructure savings</div>
        </div>
      </motion.div>

      <div className="max-w-[1550px] mx-auto px-6 w-full relative z-10">

        {/* Core Layout Grid: Left Content, Right Copilot Simulator Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

          {/* Left Column: Authentic Brand Identity, Original Headers & Reconstruction FOMO Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col items-start text-left space-y-6 max-w-2xl w-full"
          >
            {/* Logo Header at the top left */}
            <div className="flex flex-col h-[65px] justify-center select-none">
              {!scrolled && (
                <motion.h1
                  layoutId="logo-text"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl font-black py-1 tracking-tighter uppercase whitespace-nowrap origin-left cursor-default"
                >
                  BIGLOGIC<span className="text-[#FF3B00] relative">
                    AI
                    <span className="absolute -top-2 -right-3 text-[9px] font-normal text-white pointer-events-none tracking-normal uppercase">TM</span>
                  </span>
                </motion.h1>
              )}
            </div>

            {/* Original H1 Headline with brand neon orange gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] text-white"
            >
              10 Members Worth Of Work.<br />
              Done By 1 Member. <br />
              <span className="bg-gradient-to-r from-white via-orange-400 to-[#FF3B00] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,59,0,0.15)] hero-in-seconds-text">In Seconds.</span>
            </motion.h1>

            {/* Original Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm sm:text-base leading-relaxed"
            >
              We combine artificial intelligence, automation, and world-class engineering to build systems that scale your business <span className="text-[#FF3B00] font-semibold">beyond limits.</span>
            </motion.p>

            {/* High-FOMO Reconstruction & Restoration Benefits Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-1"
            >
              {[
                { icon: Clock, label: "Massive Time Saving", desc: "AI handles hours of manual paperwork, scheduling, and compliance checks in seconds — giving your team back time to close more jobs." },
                { icon: DollarSign, label: "More Profit", desc: "Eliminate waste, reduce overhead, and capture every billable opportunity with AI-driven financial optimization across every job." },
                { icon: Zap, label: "10x Faster Operations", desc: "Automate repetitive workflows end-to-end — from intake to dispatch — so your team executes 10x more work in the same hours." },
                { icon: LayoutDashboard, label: "Centralized Company Knowledge", desc: "All estimates, SOPs, carrier rules, and crew data in one intelligent hub — accessible instantly, always up to date." },
                { icon: ShieldAlert, label: "Reduced Errors", desc: "AI cross-checks every estimate, SLA, and compliance document before submission, eliminating costly mistakes and rework." },
                { icon: Bot, label: "AI Automation", desc: "Deploy intelligent agents that run 24/7 — handling scheduling, billing, follow-ups, and reporting without human intervention." },
                { icon: Activity, label: "Business Growth", desc: "Scale operations without scaling headcount. BigLogicAI grows with your business, unlocking new revenue channels automatically." },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.015] border border-white/5 hover:border-white/10 transition-all cursor-pointer relative"
                >
                  <feat.icon className="w-4 h-4 text-gray-400 group-hover:text-[#FF3B00] transition-colors shrink-0" />
                  <span className="text-[11px] font-semibold text-gray-400 group-hover:text-white transition-colors">{feat.label}</span>

                  {/* Hover descriptor tooltip */}
                  <div className="absolute bottom-full left-4 mb-2 w-48 p-2.5 rounded-xl bg-neutral-950 border border-white/10 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 text-center shadow-xl">
                    <div className="text-[9px] font-mono text-gray-400 leading-normal">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Original START BUILDING CTA with neon styling */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 pt-3 w-full sm:w-auto"
            >
              <button className="group relative w-full sm:w-auto px-7 py-3.5 rounded-full overflow-hidden bg-gradient-to-r from-[#FF3B00] to-orange-600 font-medium text-xs tracking-wider text-white hover:shadow-[0_0_30px_rgba(255,59,0,0.35)] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_0_15px_rgba(255,59,0,0.15)] uppercase">
                START BUILDING
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] font-medium text-xs tracking-wider text-gray-300 hover:text-white active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase">
                Let's Talk
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Custom BigLogicAI Operating System Simulator Mockup */}
          <div className="lg:col-span-7 flex items-center justify-center w-full relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[760px] aspect-[16/11.2] rounded-2xl border border-white/10 bg-[#08080c]/85 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col relative group z-20 border-t-white/15"
            >
              {/* Glowing neon borders on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 blur-xl" />

              {/* macOS Chassis Window Header */}
              <div className="h-10 bg-[#0c0c12] border-b border-white/5 px-4 flex items-center justify-between select-none shrink-0">
                {/* Window dot controls */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>

                {/* Session Address Bar */}
                <div className="h-5 w-full max-w-[280px] bg-black/40 border border-white/5 rounded px-2.5 flex items-center justify-center gap-1.5 text-[9px] font-mono text-gray-500">
                  <Bot className="w-3 h-3 text-[#FF3B00]/70" />
                  <span>biglogic-operating-system // claim_intake_8f4</span>
                </div>

                {/* Active Tag */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[8px] font-mono text-orange-400 bg-orange-400/5 px-1.5 py-0.5 rounded border border-orange-400/10 font-bold uppercase tracking-wider">
                    <span className="w-1 h-1 rounded-full bg-orange-400 animate-ping inline-block" />
                    AI Engine
                  </div>
                  <Maximize2 className="w-3 h-3 text-gray-600 hover:text-gray-400 cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Dashboard Workspace */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 overflow-hidden relative">

                {/* Left Column: Interactive Chat & Live AI Terminal */}
                <div className="sm:col-span-6 border-r border-white/5 flex flex-col justify-between p-5 bg-[#0a0a0f]/40 relative overflow-y-auto">

                  <div className="space-y-5">

                    {/* Chat: User Input */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] sm:text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">RECON ENGINE</div>
                      <div className="bg-white text-neutral-900 p-3 rounded-xl rounded-tl-none font-sans text-xs sm:text-[13px] font-semibold leading-relaxed shadow-lg border border-neutral-100 flex items-start gap-2.5 relative group hover:scale-[1.01] transition-transform">
                        <Zap className="w-4 h-4 text-[#FF3B00] shrink-0 mt-0.5" />
                        <div>
                          {typedPrompt}
                          {demoStep === 0 && typedPrompt.length < fullPrompt.length && (
                            <span className="w-1.5 h-3.5 bg-orange-600 animate-pulse inline-block ml-0.5 align-middle" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Chat: Copilot Workspace Logs */}
                    <AnimatePresence>
                      {demoStep >= 1 && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-2"
                        >
                          <div className="text-[10px] sm:text-xs font-mono font-bold text-gray-400 uppercase tracking-wider flex items-center justify-between">
                            <span>OPERATING LOGS</span>
                            <span className="text-orange-400 font-bold bg-orange-400/5 border border-orange-400/10 px-2 py-0.5 rounded text-[9px]">ACTIVE</span>
                          </div>

                          <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-xl font-mono text-xs sm:text-[13px] text-neutral-100 leading-relaxed shadow-xl relative overflow-visible flex flex-col justify-start border-t-white/5 min-h-[160px]">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B00]/[0.01] to-transparent pointer-events-none" />

                            <div className="space-y-1.5 select-text pr-1 flex-1">
                              {terminalLines.map((line, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className={line.startsWith("✓") ? "text-emerald-400 font-semibold" : "text-neutral-100 font-medium"}
                                >
                                  {line}
                                </motion.div>
                              ))}
                              {demoStep === 1 && terminalLines.length < logList.length && (
                                <span className="w-1.5 h-3.5 bg-[#FF3B00]/80 animate-pulse inline-block align-middle ml-1" />
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                  {/* Bot Info Deck */}
                  <div className="pt-3.5 mt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-xs font-mono text-gray-400 select-none">
                    <div>COPILOT: <span className="text-gray-200 font-medium">@biglogic agent</span></div>
                    <div>SPEED: <span className="text-[#FF3B00] font-black">10X</span></div>
                  </div>

                </div>

                {/* Right Column: Visual Campaign Workflow Node Graph */}
                <div className="sm:col-span-6 bg-[#020204]/60 p-4 flex flex-col items-center justify-center relative overflow-hidden">

                  {/* Radial backdrop */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.03),transparent_70%)] pointer-events-none" />

                  {/* Centered Node Graph System Container */}
                  <div className="relative w-full max-w-[340px] h-[180px] flex items-center justify-center select-none z-10">

                    {/* SVG connection lines - perfectly relative to the nodes! */}
                    <div className="absolute inset-0 z-0">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        {/* Connection Scheduling -> Checkout */}
                        <path
                          d="M 60 90 L 170 90"
                          stroke={demoStep >= 2 ? "#10b981" : "#1f1f2e"}
                          strokeWidth="1.5"
                          strokeDasharray={demoStep === 2 ? "3 3" : "0"}
                          fill="none"
                          className="transition-colors duration-500"
                        />
                        {/* Connection Checkout -> Notifications */}
                        <path
                          d="M 210 90 L 320 90"
                          stroke={demoStep >= 3 ? "#FF3B00" : "#1f1f2e"}
                          strokeWidth="1.5"
                          strokeDasharray={demoStep === 2 && progress >= 50 ? "3 3" : "0"}
                          fill="none"
                          className="transition-colors duration-500"
                        />
                      </svg>

                      {/* Laser pulses traveling on SVG pathways */}
                      {isPlaying && demoStep === 2 && progress < 100 && (
                        <>
                          {/* Laser Pulse 1 */}
                          <motion.div
                            animate={{ left: ["17%", "47%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute top-[89px] w-4 h-[3px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent blur-[1px]"
                          />

                          {/* Laser Pulse 2 */}
                          {progress >= 50 && (
                            <motion.div
                              animate={{ left: ["50%", "80%"] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                              className="absolute top-[89px] w-4 h-[3px] bg-gradient-to-r from-transparent via-[#FF3B00] to-transparent blur-[1px]"
                            />
                          )}
                        </>
                      )}
                    </div>

                    {/* Node deck columns */}
                    <div className="flex items-center justify-between w-full z-10 py-6 relative">

                      {/* Node 1: Intake PDF */}
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-md transition-all duration-500 bg-black ${demoStep >= 1
                            ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.12)] scale-105'
                            : 'border-white/5 text-gray-500'
                            }`}
                        >
                          <FileText className="w-4.5 h-4.5" />
                        </div>
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-300">Intake</div>
                        <div className="text-[9px] sm:text-[10px] font-mono text-gray-500">Xactimate PDF</div>
                      </div>

                      {/* Node 2: SLA Carrier Audit Check */}
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-lg transition-all duration-500 bg-black ${demoStep === 2
                            ? 'border-purple-500 text-purple-400 bg-purple-500/10 shadow-[0_0_18px_rgba(168,85,247,0.2)] scale-110 animate-pulse'
                            : demoStep >= 3
                              ? 'border-purple-500/40 text-purple-400 bg-purple-500/5'
                              : 'border-white/5 text-gray-500'
                            }`}
                        >
                          <ClipboardCheck className="w-5 h-5" />
                        </div>
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-300">Compliance</div>
                        <div className="text-[9px] sm:text-[10px] font-mono text-gray-500">Carrier SLA</div>
                      </div>

                      {/* Node 3: Tech Dispatch and SMS alerts */}
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-md transition-all duration-500 bg-black ${demoStep >= 3
                            ? 'border-[#FF3B00] text-[#FF3B00] bg-[#FF3B00]/10 shadow-[0_0_18px_rgba(255,59,0,0.2)] scale-105'
                            : 'border-white/5 text-gray-500'
                            }`}
                        >
                          <Bell className="w-4.5 h-4.5" />
                        </div>
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-300">Dispatch</div>
                        <div className="text-[9px] sm:text-[10px] font-mono text-gray-500">Slack & SMS</div>
                      </div>

                    </div>

                  </div>

                  {/* Big Success Summary Card Overlay */}
                  <AnimatePresence>
                    {demoStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 16 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-2 z-20 bg-[#08090f]/98 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
                      >
                        {/* Card Header */}
                        <div className="px-4 py-3.5 border-b border-white/5 flex items-center justify-between bg-emerald-500/[0.04]">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                              <Check className="w-4 h-4" strokeWidth={3} />
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-black text-white tracking-tight">Restoration Dispatch Ready!</div>
                              <div className="text-[10px] sm:text-xs text-emerald-400 font-semibold mt-0.5">All systems verified · AI audit passed</div>
                            </div>
                          </div>
                          <div className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">LIVE</div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-4 gap-0 border-b border-white/5">
                          {[
                            { label: "Speed", value: "3.8s", color: "text-[#FF3B00]" },
                            { label: "Status", value: "✓ Done", color: "text-emerald-400" },
                            { label: "SLA", value: "Passed", color: "text-emerald-400" },
                            { label: "Crew", value: "Alpha", color: "text-purple-400" },
                          ].map((s, i) => (
                            <div key={i} className="flex flex-col items-center py-3 border-r border-white/5 last:border-r-0">
                              <div className={`text-xs sm:text-sm font-black ${s.color}`}>{s.value}</div>
                              <div className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-wider mt-1">{s.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Details Grid */}
                        <div className="flex-1 p-3.5 grid grid-cols-2 gap-3 overflow-hidden">
                          {/* Property */}
                          <div className="col-span-2 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-start gap-3">
                            <div className="w-6 h-6 rounded-lg bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center shrink-0 mt-0.5">
                              <FileText className="w-3.5 h-3.5 text-[#FF3B00]" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Property</div>
                              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">452 Maple Ave — Xactimate Parsed</div>
                              <div className="text-[10px] sm:text-xs text-gray-500 font-mono mt-0.5 truncate">Line items: 47 · Total: $28,400 · Carrier: State Farm</div>
                            </div>
                          </div>

                          {/* Crew Dispatch */}
                          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                            <div>
                              <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Crew Dispatch</div>
                              <div className="flex items-center gap-1.5 mb-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                                <span className="text-[10px] sm:text-xs font-bold text-white">Team Alpha · En Route</span>
                              </div>
                            </div>
                            <div className="text-[9px] sm:text-[10px] font-mono text-gray-500 mt-1">
                              <div>ETA: 18 min · 3 techs</div>
                              <div className="text-emerald-400 font-semibold mt-0.5">SMS + App notified ✓</div>
                            </div>
                          </div>

                          {/* Billing */}
                          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                            <div>
                              <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Billing Pack</div>
                              <div className="text-[10px] sm:text-xs font-bold text-emerald-400 mb-1">Auto-compiled</div>
                            </div>
                            <div className="text-[9px] sm:text-[10px] font-mono text-gray-500 mt-1">
                              <div>Proof of loss · Photo board</div>
                              <div className="text-emerald-400 font-semibold mt-0.5">Dry logs · e-Signature ✓</div>
                            </div>
                          </div>

                          {/* Compliance */}
                          <div className="col-span-2 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-center gap-3">
                            <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                              <ClipboardCheck className="w-3.5 h-3.5 text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Compliance Audit</div>
                              <div className="text-[10px] sm:text-xs font-bold text-white mt-0.5">State Farm SLA · Zero violations · Dehumidifier runtime corrected</div>
                            </div>
                            <div className="text-[10px] sm:text-xs font-mono font-black text-emerald-400 shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">100%</div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2.5 border-t border-white/5 flex items-center justify-between bg-black/[0.15]">
                          <div className="text-[9px] sm:text-[10px] font-mono text-gray-500">biglogic-operating-system · claim_intake_8f4</div>
                          <div className="text-[9px] sm:text-[10px] font-mono text-[#FF3B00] font-black tracking-wider">POWERED BY BIGLOGIC AI</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Step 4: High-Impact FOMO Card Overlay */}
                <AnimatePresence>
                  {demoStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 z-30 bg-[#060609]/98 flex items-center justify-center p-4 md:p-6"
                    >
                      {/* Card container with orange neon glow on the right, matching the image */}
                      <div className="w-full h-full rounded-2xl border border-white/10 bg-[#090a0f]/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex overflow-hidden relative">
                        {/* Neon orange gradient border glow specifically on the right side */}
                        <div className="absolute top-0 bottom-0 right-0 w-[50%] bg-[radial-gradient(ellipse_at_right,rgba(255,59,0,0.18),transparent_70%)] pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF3B00]/60 to-transparent shadow-[0_0_15px_#FF3B00]" />
                        
                        {/* Left side: FOMO Title Text (60% width) */}
                        <div className="w-[58%] h-full flex flex-col justify-center px-6 md:px-10 text-left relative z-10">
                          <h2 className="text-xl md:text-3.5xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] text-white">
                            Others are <br />
                            <span className="text-[#FF3B00]">already using.</span>
                          </h2>
                          <h2 className="text-xl md:text-3.5xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] text-white mt-4 md:mt-6">
                            You're still <br />
                            <span className="text-[#FF3B00]">behind.</span>
                          </h2>
                        </div>

                        {/* Vertical divider */}
                        <div className="w-[1px] h-[65%] bg-white/10 self-center" />

                        {/* Right side: Glowing Speedometer Dial + Done in Seconds text (42% width) */}
                        <div className="w-[42%] h-full flex flex-col items-center justify-center px-4 md:px-6 relative z-10">
                          {/* Animated SVG Speedometer Dial */}
                          <div className="relative w-28 h-20 md:w-36 md:h-24 flex items-center justify-center">
                            {/* Neon glow behind the dial */}
                            <div className="absolute w-16 h-16 bg-[#FF3B00]/10 blur-md rounded-full pointer-events-none" />
                            
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 160 100">
                              <defs>
                                <filter id="orange-glow" x="-20%" y="-20%" width="140%" height="140%">
                                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                              </defs>

                              {/* Ticked speed/motion lines trailing behind from the left */}
                              <g stroke="#FF3B00" strokeWidth="2" strokeLinecap="round" opacity="0.6">
                                {/* horizontal speed lines */}
                                <line x1="15" y1="42" x2="32" y2="42" strokeDasharray="6 3" />
                                <line x1="5" y1="50" x2="28" y2="50" strokeDasharray="8 4" />
                                <line x1="12" y1="58" x2="30" y2="58" strokeDasharray="5 3" />
                                <line x1="22" y1="66" x2="35" y2="66" strokeDasharray="4 2" />
                              </g>

                              {/* Speedometer Arc Circle (ticked/open at bottom) */}
                              <path
                                d="M 50 82 A 40 40 0 1 1 126 76"
                                fill="none"
                                stroke="#FF3B00"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                filter="url(#orange-glow)"
                              />

                              {/* Speedometer smaller inner arc */}
                              <path
                                d="M 62 76 A 28 28 0 1 1 115 72"
                                fill="none"
                                stroke="#FF3B00"
                                strokeWidth="1"
                                strokeDasharray="2 3"
                                opacity="0.4"
                              />

                              {/* Speed ticks inside the speedometer */}
                              <g stroke="#FF3B00" strokeWidth="1.5" opacity="0.6">
                                <line x1="53" y1="62" x2="59" y2="64" />
                                <line x1="61" y1="44" x2="66" y2="48" />
                                <line x1="77" y1="32" x2="80" y2="38" />
                                <line x1="97" y1="29" x2="97" y2="35" />
                                <line x1="117" y1="35" x2="114" y2="41" />
                                <line x1="131" y1="49" x2="126" y2="53" />
                                <line x1="137" y1="68" x2="131" y2="70" />
                              </g>

                              {/* Speedometer pointer (hand) pointing at 2 o'clock */}
                              <g transform="translate(93, 62)">
                                {/* Joint circle */}
                                <circle cx="0" cy="0" r="3.5" fill="#FF3B00" />
                                {/* needle */}
                                <line
                                  x1="0"
                                  y1="0"
                                  x2="28"
                                  y2="-24"
                                  stroke="#FF3B00"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  filter="url(#orange-glow)"
                                />
                                {/* Outer circle frame */}
                                <circle cx="0" cy="0" r="1.5" fill="white" />
                              </g>
                            </svg>
                          </div>

                          {/* Speed description text */}
                          <div className="text-center font-sans mt-3 md:mt-4">
                            <div className="text-[11px] md:text-sm font-semibold tracking-tight text-white leading-snug">
                              Months of work <br />
                              <span className="text-[#FF3B00] font-bold">done in seconds</span>
                            </div>
                            <div className="text-[8px] md:text-[9px] text-gray-500 font-medium font-mono mt-1">
                              by BigLogicAi
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Interactive Playback Control Footer Panel */}
              <div className="h-10 bg-[#0c0c12]/80 border-t border-white/5 px-4 flex items-center justify-between shrink-0 select-none text-[8px] font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-6.5 h-6.5 rounded-md border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                  >
                    {isPlaying ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-6.5 h-6.5 rounded-md border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                  </button>
                </div>

                {/* Real-time Loading Status updates */}
                <div className="flex items-center gap-3">
                  {demoStep === 0 && (
                    <div className="flex items-center gap-1 text-orange-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
                      <span>Prompting...</span>
                    </div>
                  )}
                  {demoStep === 1 && (
                    <div className="flex items-center gap-1 text-orange-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00] animate-pulse" />
                      <span>Orchestrating...</span>
                    </div>
                  )}
                  {demoStep === 2 && (
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-[2.5px] bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 transition-all duration-100" style={{ width: `${progress}%` }} />
                      </div>
                      <span className="text-purple-400 font-bold">{progress}% Processing</span>
                    </div>
                  )}
                  {demoStep === 3 && (
                    <div className="flex items-center gap-1 text-emerald-400 font-bold uppercase tracking-wider">
                      <Check className="w-2.5 h-2.5" strokeWidth={3.5} />
                      <span>Completed in 3.8s</span>
                    </div>
                  )}
                  {demoStep === 4 && (
                    <div className="flex items-center gap-1 text-[#FF3B00] font-bold uppercase tracking-wider">
                      <Zap className="w-2.5 h-2.5 animate-bounce" strokeWidth={3.5} />
                      <span>10x Acceleration Live</span>
                    </div>
                  )}
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
