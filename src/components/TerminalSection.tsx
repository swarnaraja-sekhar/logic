import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  ExternalLink, 
  Link2, 
  RotateCcw,
  CheckCircle,
  Brain,
  Search,
  Volume2,
  Folder,
  Clock,
  Sparkles,
  FileText
} from 'lucide-react';
import { Reveal } from './SectionReveal';

const TABS = [
  {
    id: 'brain',
    emoji: '🧠',
    title: 'Company Brain',
    subtitle: 'AI-powered company knowledge system.',
    features: [
      'Upload documents',
      'Search contracts',
      'AI chat with files',
      'Voice-based queries',
      'SOP intelligence'
    ]
  },
  {
    id: 'jobs',
    emoji: '📁',
    title: 'Job Management',
    subtitle: 'Specialized reconstruction CRM.',
    features: [
      'Project tracking',
      'Real-time P&L',
      'Milestone tracking',
      'Estimate management',
      'Contractor management',
      'Homeowner tracking'
    ]
  },
  {
    id: 'automation',
    emoji: '🤖',
    title: 'AI Automation',
    subtitle: 'The automation engine.',
    features: [
      'AI PDF reading',
      'Draw schedule generation',
      'Material extraction',
      'Meeting transcription',
      'AI-generated contracts',
      'Workflow automation'
    ]
  }
];

// Mockup 1: Company Brain SOP Search
const BrainMockup = () => {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="h-full flex flex-col justify-between py-1 text-left"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-1.5 text-gray-500 font-mono">
          <span>$</span>
          <span className="text-gray-300">biglogic-brain --query "What does our contract say about payment terms?"</span>
        </div>
        <div className="text-gray-500 text-[10px] font-mono">▶ SOP Intelligence active / Searching verified contracts archive...</div>
        <div className="text-emerald-400 text-[10px] font-mono">✓ Document matches found in: standard_reconstruction_agreement_v2.pdf</div>
        
        {/* Floating Answer Box */}
        <div className="p-3.5 bg-purple-950/20 border border-purple-500/20 rounded-xl space-y-2 relative overflow-hidden">
          <div className="absolute top-1.5 right-2 px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[8px] font-bold tracking-widest font-mono uppercase select-none">SOP Verified</div>
          
          <div className="text-[10px] text-gray-300 leading-relaxed pt-1.5 font-sans">
            <strong>Payment Terms Draw Schedule:</strong> Invoices are structured in 4 draws tied directly to milestones:
            <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-gray-400 font-medium">
              <li>Draw 1 (Intake & Mitigation): 30% due on State Farm signoff.</li>
              <li>Draw 2 (Drywall & Trim): 30% due on material delivery.</li>
              <li>Draw 3 (Paint & Fixtures): 30% due on priming stage.</li>
              <li>Draw 4 (Final Inspection): 10% due on homeowner signoff.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Voice Interaction visualizer inside terminal */}
      <div className="text-[9px] font-mono text-gray-600 border-t border-white/5 pt-2.5 flex justify-between select-none">
        <div className="flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5 text-purple-400" />
          <span>VOICE INTAKE ACTIVE:</span>
          <div className="flex items-center gap-0.5 h-3">
            {[1.2, 2.5, 1.8, 2.8, 1.5, 2.2, 1.0].map((h, i) => (
              <span 
                key={i} 
                className="w-[1px] bg-purple-400 rounded-full transition-all duration-300"
                style={{ 
                  height: pulse ? `${h * 3.5}px` : `${h * 1.2}px`
                }} 
              />
            ))}
          </div>
        </div>
        <span className="text-purple-400 font-bold">AI Answer instant (0.4s)</span>
      </div>
    </motion.div>
  );
};

// Mockup 2: Job Management Specialized CRM
const JobsMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="h-full flex flex-col justify-between py-1 text-left"
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div>
            <div className="text-[11px] font-bold text-white">452 Maple Ave Restoration</div>
            <div className="text-[9px] text-gray-500 font-medium">Homeowner: John Miller · Carrier: State Farm</div>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-400/5 px-2 py-0.5 rounded border border-emerald-400/10">Active CRM Job</span>
        </div>

        {/* Financial P&L summary widget */}
        <div className="grid grid-cols-3 gap-2 bg-white/[0.01] border border-white/5 rounded-xl p-2.5">
          <div>
            <span className="text-[8px] text-gray-500 font-mono">ESTIMATED REVENUE</span>
            <div className="text-xs font-bold text-white mt-0.5">$38,400.00</div>
          </div>
          <div>
            <span className="text-[8px] text-gray-500 font-mono">DIRECT COSTS</span>
            <div className="text-xs font-bold text-[#FF3B00] mt-0.5">$22,100.00</div>
          </div>
          <div>
            <span className="text-[8px] text-gray-500 font-mono">GROSS PROFIT (42.4%)</span>
            <div className="text-xs font-bold text-emerald-400 mt-0.5">$16,300.00</div>
          </div>
        </div>

        {/* Milestone milestones */}
        <div className="space-y-1.5">
          <div className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">RECONSTRUCTION MILESTONES</div>
          <div className="grid grid-cols-4 gap-1 text-[9px] text-center select-none font-mono">
            <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-1 rounded">Intake ✓</div>
            <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-1 rounded">Dryout ✓</div>
            <div className="bg-blue-500/10 text-blue-400 border border-blue-500/20 py-1 rounded animate-pulse">Recon (45%)</div>
            <div className="bg-neutral-950 text-gray-600 border border-white/5 py-1 rounded">Inspection</div>
          </div>
        </div>
      </div>
      <div className="text-[9px] font-mono text-gray-600 border-t border-white/5 pt-2 flex justify-between select-none">
        <span>Subcontractors: Lead Tech Alpha + 2 techs</span>
        <span className="text-emerald-400">Homeowner CRM tracking enabled</span>
      </div>
    </motion.div>
  );
};

// Mockup 3: AI Automation pipeline run
const AutomationMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="h-full flex flex-col justify-between py-1 text-left font-mono text-[10px]"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-gray-500">
          <span>$</span>
          <span className="text-gray-300">biglogic-auto --pdf Maple_Ave_Estimate.pdf --trigger-workflows</span>
        </div>
        <div className="space-y-1.5 text-gray-400">
          <div>▶ <span className="text-purple-400">AI PDF reading:</span> Parsing State Farm estimate... <span className="text-emerald-400 font-bold">✓ (47 items parsed)</span></div>
          <div>▶ <span className="text-purple-400">Draw schedule generation:</span> Drafting 4 Draws... <span className="text-emerald-400 font-bold">✓ (SOP aligned)</span></div>
          <div>▶ <span className="text-purple-400">Material extraction:</span> Flooring, Paint & Supplies... <span className="text-emerald-400 font-bold">✓ (Excel synced)</span></div>
          <div>▶ <span className="text-purple-400">Meeting transcription:</span> Processing site audio note... <span className="text-emerald-400 font-bold">✓ (Action items listed)</span></div>
          <div>▶ <span className="text-purple-400">AI-generated contracts:</span> Creating owner branded contract... <span className="text-emerald-400 font-bold">✓ (e-Sign queue)</span></div>
        </div>
      </div>
      <div className="text-[9px] font-mono text-gray-600 border-t border-white/5 pt-2 flex justify-between select-none shrink-0">
        <span>Pipeline trigger status: COMPLETE</span>
        <span className="text-blue-400 font-bold">Autopilot pipeline executed in 3.8s</span>
      </div>
    </motion.div>
  );
};

export const TerminalSection = () => {
  const [activeTab, setActiveTab] = useState('brain');
  const [isAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);

  // Autoplay cycling effect with color-filling progress logic
  useEffect(() => {
    if (!isAutoplay) {
      setProgress(0);
      return;
    }

    setProgress(0); // Reset progress whenever activeTab changes!

    const intervalTime = 40; // update progress every 40ms for high smooth rate
    const totalDuration = 5000; // 5 seconds per tab
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => {
            if (current === 'brain') return 'jobs';
            if (current === 'jobs') return 'automation';
            return 'brain';
          });
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isAutoplay, activeTab]);

  return (
    <section className="relative z-20 w-full bg-black py-24 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <Reveal delay={0.1}>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#FF3B00] mb-4 uppercase block font-bold transition-all duration-300">
              ( YOUR 3 CORE MODULES )
            </span>
          </Reveal>
          
          <Reveal delay={0.2} yOffset={25}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-sans">
              Agent workflows that feel native.
            </h2>
          </Reveal>
          
          <Reveal delay={0.3} yOffset={20}>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              A fully integrated operating ecosystem designed for reconstruction business dominance.
            </p>
          </Reveal>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Vertical Selection Tabs Card */}
          <div className="lg:col-span-5 rounded-3xl border border-purple-500/25 bg-gradient-to-br from-[#0c0814]/90 via-[#06040a]/95 to-black p-3 relative overflow-hidden shadow-2xl shadow-[0_0_40px_rgba(168,85,247,0.06)] z-10 space-y-1">
            {/* Subtle internal gradient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.05)_0%,transparent_60%)] pointer-events-none z-0" />

            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id); // Dynamic selection: updates activeTab, resets loading bar, and continues autoplay
                  }}
                  className="w-full text-left p-5 sm:p-6 rounded-2xl relative overflow-hidden transition-all duration-300 group select-none block cursor-pointer z-10"
                >
                  {/* Subtle active background card highlight */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-terminal-button-bg"
                      className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-2xl z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Glowing vertical purple line for active tab */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-terminal-tab-glow"
                      className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-purple-500 rounded-r-md shadow-[0_0_12px_#a855f7] z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 space-y-3 text-left">
                    <h3 
                      className={`text-lg font-bold tracking-tight transition-colors duration-300 font-sans flex items-center gap-2.5 ${
                        isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                      }`}
                    >
                      <span className="text-xl">{tab.emoji}</span>
                      <span>{tab.title}</span>
                    </h3>
                    <p 
                      className={`text-xs leading-relaxed transition-colors duration-300 font-sans ${
                        isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'
                      }`}
                    >
                      {tab.subtitle}
                    </p>

                    {/* Features list dropdown grid when active */}
                    {isActive && (
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-2 pb-1 border-t border-white/5 mt-3">
                        {tab.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-[10px] text-gray-400">
                            <CheckCircle className="w-3 h-3 text-[#FF3B00] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Visual progress line that fills based on color filling autoplay */}
                    {isActive && (
                      <div className="w-full h-[2px] bg-white/5 mt-4 rounded-full overflow-hidden relative">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_8px_#a855f7]"
                          style={{ 
                            width: isAutoplay ? `${progress}%` : '100%',
                            transition: isAutoplay ? 'width 40ms linear' : 'width 0.4s ease-out'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visualization Panel */}
          <div className="lg:col-span-7 w-full relative">
            <Reveal delay={0.2} yOffset={35}>
              
              {/* Premium Gradient Background Board */}
              <div className="w-full aspect-[4/3] sm:aspect-[1.3] md:aspect-[1.4] rounded-[2.5rem] bg-gradient-to-br from-[#80ffdb]/40 via-[#00f5d4]/30 via-[#00bbf9]/40 to-[#7209b7]/60 p-1 flex items-center justify-center relative overflow-hidden group shadow-[0_0_50px_rgba(0,187,249,0.15)]">
                
                {/* Embedded animated radial sweep glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.25),transparent_70%)] pointer-events-none" />
                
                {/* Interactive Terminal Mockup Container */}
                <div className="w-[90%] h-[82%] bg-[#08080c]/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative z-10">
                  
                  {/* Terminal Header */}
                  <div className="h-12 bg-[#0c0c12] border-b border-white/5 px-4 flex items-center justify-between select-none">
                    
                    {/* Left Frame Header elements */}
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      
                      <div className="h-4 w-[1px] bg-white/10 mx-1" />
                      
                      {/* Active File / Tool Path */}
                      <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-gray-500" />
                        {activeTab === 'brain' && 'biglogic-brain // company-knowledge'}
                        {activeTab === 'jobs' && 'biglogic-crm // job-management'}
                        {activeTab === 'automation' && 'biglogic-autopilot // automation-engine'}
                      </span>
                    </div>

                    {/* Right Header Options (Screenshot Icons) */}
                    <div className="flex items-center gap-3 text-gray-500">
                      <Link2 className="w-3.5 h-3.5 hover:text-gray-300 cursor-pointer transition-colors" />
                      <RotateCcw className="w-3.5 h-3.5 hover:text-gray-300 cursor-pointer transition-colors" />
                      <ExternalLink className="w-3.5 h-3.5 hover:text-gray-300 cursor-pointer transition-colors" />
                    </div>
                  </div>

                  {/* Terminal Content Screen */}
                  <div className="flex-1 p-5 font-mono text-[11px] md:text-xs leading-relaxed overflow-y-auto relative select-none">
                    
                    <AnimatePresence mode="wait">
                      
                      {activeTab === 'brain' && <BrainMockup key="brain-mock" />}
                      {activeTab === 'jobs' && <JobsMockup key="jobs-mock" />}
                      {activeTab === 'automation' && <AutomationMockup key="automation-mock" />}

                    </AnimatePresence>
                  </div>
                </div>
              </div>

            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TerminalSection;
