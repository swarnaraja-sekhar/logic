import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
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
                
                {/* Interactive Terminal Mockup Container or Infographic Images */}
                <AnimatePresence mode="wait">
                  {activeTab === 'brain' ? (
                    <motion.div
                      key="brain-image"
                      initial={{ opacity: 0, scale: 0.96, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 5 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-[94%] h-[88%] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-purple-500/25 relative z-10 bg-[#08080c] flex items-center justify-center group/img"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none z-15" />
                      <div className="absolute top-3 right-3 bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[9px] px-2.5 py-1 rounded-md uppercase font-bold tracking-wider z-20 backdrop-blur-md select-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        Infographic Flow
                      </div>
                      <img 
                        src="/company_brain_workflow.jpg" 
                        alt="Company Brain Workflow Diagram" 
                        className="w-full h-full object-cover sm:object-contain transition-transform duration-700 group-hover/img:scale-[1.01]"
                      />
                    </motion.div>
                  ) : activeTab === 'jobs' ? (
                    <motion.div
                      key="jobs-image"
                      initial={{ opacity: 0, scale: 0.96, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 5 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-[94%] h-[88%] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-purple-500/25 relative z-10 bg-[#08080c] flex items-center justify-center group/img"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none z-15" />
                      <div className="absolute top-3 right-3 bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[9px] px-2.5 py-1 rounded-md uppercase font-bold tracking-wider z-20 backdrop-blur-md select-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        CRM & Board Flow
                      </div>
                      <img 
                        src="/job_management_workflow.jpg" 
                        alt="Job Management Workflow Diagram" 
                        className="w-full h-full object-cover sm:object-contain transition-transform duration-700 group-hover/img:scale-[1.01]"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="automation-image"
                      initial={{ opacity: 0, scale: 0.96, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 5 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-[94%] h-[88%] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] border border-purple-500/25 relative z-10 bg-[#08080c] flex items-center justify-center group/img"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none z-15" />
                      <div className="absolute top-3 right-3 bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[9px] px-2.5 py-1 rounded-md uppercase font-bold tracking-wider z-20 backdrop-blur-md select-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        Automation Engine
                      </div>
                      <img 
                        src="/ai_automation_workflow.jpg" 
                        alt="AI Automation Workflow Diagram" 
                        className="w-full h-full object-cover sm:object-contain transition-transform duration-700 group-hover/img:scale-[1.01]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TerminalSection;
