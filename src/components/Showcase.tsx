import { useState } from 'react';
import { Bot, GitMerge, FileCode2, Users, UserCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TABS = [
  {
    id: 'agents',
    label: 'AUTONOMOUS AGENTS',
    icon: Bot,
    title: 'Let AI do the heavy lifting',
    description: 'Deploy autonomous AI agents that work around the clock. From analyzing code to fixing bugs and running complex deployments, our agents operate fully independent of human intervention.',
    color: 'text-orange-500',
    mockup: (
      <div className="bg-[#0D0D0D] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-[#1A1A1A] px-4 py-2 border-b border-white/5 flex items-center gap-2">
          <div className="flex gap-1.5">
             <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="mx-auto bg-black/50 px-3 py-1 rounded text-xs text-gray-400">Agent Terminal</div>
        </div>
        <div className="p-6 font-mono text-sm">
          <div className="text-gray-400 mb-2">$ biglogic-ai deploy --auto</div>
          <div className="text-blue-400 mb-1">▶ Scanning repository structure...</div>
          <div className="text-green-400 mb-1">✓ Dependencies resolved.</div>
          <div className="text-orange-400 mb-1">▶ Optimizing database queries...</div>
          <div className="text-green-400 mb-4">✓ 15 slow queries optimized.</div>
          <div className="text-blue-400 border-l-2 border-blue-500 pl-3 py-1 my-4 bg-blue-500/10">
            Agent 'Nexus' is running pre-flight checks on branch [main].
          </div>
          <div className="text-white">Autopilot deployment successful in 42s.</div>
        </div>
      </div>
    )
  },
  {
    id: 'workflows',
    label: 'INTELLIGENT WORKFLOWS',
    icon: GitMerge,
    title: 'Automate your entire pipeline',
    description: 'Connect your favorite tools and let BigLogicAI orchestrate complex, multi-step workflows automatically based on dynamic triggers and real-time project state.',
    color: 'text-blue-500',
    mockup: (
      <div className="bg-[#0D0D0D] border border-white/10 rounded-xl overflow-hidden shadow-2xl h-[300px] flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]">
         <div className="flex items-center gap-4 w-full max-w-md">
            <div className="bg-black border border-white/10 p-4 rounded-xl flex-1 text-center shadow-lg"><FileCode2 className="mx-auto w-6 h-6 text-gray-400 mb-2"/>Commit</div>
            <div className="w-8 h-[2px] bg-blue-500 relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2 border-blue-500"></div>
            </div>
            <div className="bg-black border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] p-4 rounded-xl flex-1 text-center scale-110"><Bot className="mx-auto w-6 h-6 text-blue-500 mb-2"/>AI Review</div>
            <div className="w-8 h-[2px] bg-blue-500 relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2 border-blue-500"></div>
            </div>
            <div className="bg-black border border-white/10 p-4 rounded-xl flex-1 text-center shadow-lg"><UserCircle className="mx-auto w-6 h-6 text-green-500 mb-2"/>Prod</div>
         </div>
      </div>
    )
  },
  {
    id: 'development',
    label: 'AI-DRIVEN DEVELOPMENT',
    icon: FileCode2,
    title: 'Code at the speed of thought',
    description: 'An IDE designed for the AI era. Generative tools contextually aware of your entire codebase write, refactor, and review code alongside you.',
    color: 'text-purple-500',
    mockup: (
      <div className="bg-[#0D0D0D] border border-white/10 rounded-xl overflow-hidden shadow-2xl h-[300px] flex">
         <div className="w-12 bg-[#1A1A1A] border-r border-white/10 flex flex-col items-center py-4 gap-4">
             <div className="w-6 h-6 rounded bg-white/10"></div>
             <div className="w-6 h-6 rounded bg-white/5"></div>
             <div className="w-6 h-6 rounded bg-white/5"></div>
         </div>
         <div className="flex-1 p-6 font-mono text-sm relative">
            <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-400 border border-purple-500/50 px-3 py-1 text-xs rounded-full flex items-center gap-1">
               <Bot className="w-3 h-3"/> Copilot Active
            </div>
            <div className="text-gray-400 mb-1">function calculateRevenue(data) {'{'}</div>
            <div className="text-purple-400 mb-1 pl-4 opacity-70">  // AI Generated optimization</div>
            <div className="text-white mb-1 pl-4">  return data.reduce((acc, curr) =&gt; acc + curr.val, 0);</div>
            <div className="text-gray-400 mb-1">{'}'}</div>
         </div>
      </div>
    )
  },
  {
    id: 'scale',
    label: 'SCALE ACROSS YOUR TEAM',
    icon: Users,
    title: 'Multi-player execution',
    description: 'Share agent prompts, workflow configurations, and coding contexts instantly across your organization to ensure everyone builds uniformly and efficiently.',
    color: 'text-green-500',
    mockup: (
      <div className="bg-[#0D0D0D] border border-white/10 rounded-xl overflow-hidden shadow-2xl p-6 grid grid-cols-2 gap-4 h-[300px]">
          {[1,2,3,4].map(i => (
             <div key={i} className="bg-black border border-white/10 rounded-lg p-4 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                     <Users className="w-4 h-4 text-gray-400"/>
                   </div>
                   <div>
                     <div className="text-xs text-white">Team Member {i}</div>
                     <div className="text-[10px] text-green-400">Online</div>
                   </div>
                </div>
                <div className="mt-4 text-[10px] text-gray-500 bg-white/5 p-2 rounded">Syncing context...</div>
             </div>
          ))}
      </div>
    )
  }
];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  // Stagger variants for the left tabs list
  const tabsListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const tabItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="showcase" className="relative z-10 w-full border-t border-white/5 bg-[#050505] pt-24 pb-32">
      
      {/* Dynamic backdrop glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Header section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="mb-16 max-w-[1600px] mx-auto px-4 sm:px-6"
      >
         <div className="text-[#FF3B00] text-xs font-bold tracking-[0.2em] uppercase mb-4">
           BIGLOGICAI CAPABILITIES
         </div>
         <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight text-white mb-6 max-w-5xl">
           Scale without limits. <br />Build without chaos.
         </h2>
      </motion.div>
 
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
        
          {/* Left Side: Sticky Tabs Card */}
          <motion.div 
            variants={tabsListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full lg:w-[360px] rounded-3xl border border-[#FF3B00]/20 bg-gradient-to-br from-[#120805]/90 via-[#0a0706]/95 to-black p-2.5 lg:sticky lg:top-32 relative z-10 flex flex-col shadow-2xl overflow-hidden shadow-[0_0_40px_rgba(255,59,0,0.08)]"
          >
            {/* Subtle internal gradient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,59,0,0.06)_0%,transparent_60%)] pointer-events-none z-0" />

             {TABS.map((tab) => {
               const isActive = activeTab === tab.id;
               const Icon = tab.icon;
               return (
                 <motion.button
                   key={tab.id}
                   variants={tabItemVariants}
                   onClick={() => {
                     setActiveTab(tab.id);
                     const el = document.getElementById(`content-${tab.id}`);
                     if (el) {
                       const y = el.getBoundingClientRect().top + window.scrollY - 150;
                       window.scrollTo({ top: y, behavior: 'smooth' });
                     }
                   }}
                   whileHover={{ x: 4 }}
                   whileTap={{ scale: 0.98 }}
                   className={`group flex items-center gap-4 px-5 py-5 text-left rounded-2xl hover:bg-white/[0.01] transition-all relative overflow-hidden mb-1 last:mb-0`}
                 >
                    {/* Active highlight pill */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeShowcaseTabHighlight"
                        className="absolute inset-0 bg-white/[0.02] border-l-2 border-[#FF3B00] rounded-2xl z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    <div className={`p-2.5 rounded-xl relative z-10 ${isActive ? 'bg-[#FF3B00]/10 text-[#FF3B00] shadow-[0_0_15px_rgba(255,59,0,0.15)]' : 'bg-white/5 text-gray-500 group-hover:text-gray-300 group-hover:bg-white/10'} transition-all duration-300`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase transition-colors relative z-10 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {tab.label}
                    </span>
                 </motion.button>
               );
             })}
          </motion.div>

          {/* Right Side: Flowing Stacked Content */}
          <div className="flex-1 relative flex flex-col gap-12">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                id={`content-${tab.id}`}
                className="w-full flex flex-col"
              >
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-120px" }}
                  onViewportEnter={() => setActiveTab(tab.id)}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                  className={`w-full rounded-3xl border p-6 sm:p-10 relative overflow-hidden group/card shadow-2xl transition-all duration-500 ${
                    tab.id === 'agents' ? 'border-[#FF3B00]/15 hover:border-[#FF3B00]/40 bg-gradient-to-br from-[#160804]/90 via-[#0a0604]/95 to-black shadow-[0_0_50px_rgba(255,59,0,0.03)] hover:shadow-[0_0_50px_rgba(255,59,0,0.08)]' :
                    tab.id === 'workflows' ? 'border-blue-500/15 hover:border-blue-500/40 bg-gradient-to-br from-[#040916]/90 via-[#02050b]/95 to-black shadow-[0_0_50px_rgba(59,130,246,0.03)] hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]' :
                    tab.id === 'development' ? 'border-purple-500/15 hover:border-purple-500/40 bg-gradient-to-br from-[#090416]/90 via-[#04020b]/95 to-black shadow-[0_0_50px_rgba(168,85,247,0.03)] hover:shadow-[0_0_50px_rgba(168,85,247,0.08)]' :
                    'border-green-500/15 hover:border-green-500/40 bg-gradient-to-br from-[#041609]/90 via-[#020b04]/95 to-black shadow-[0_0_50px_rgba(34,197,94,0.03)] hover:shadow-[0_0_50px_rgba(34,197,94,0.08)]'
                  }`}
                >
                  {/* Subtle top-left internal theme glow */}
                  <div className={`absolute -left-20 -top-20 w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-20 transition-all duration-700 ${
                    tab.id === 'agents' ? 'bg-[#FF3B00]' :
                    tab.id === 'workflows' ? 'bg-blue-500' :
                    tab.id === 'development' ? 'bg-purple-500' :
                    'bg-green-500'
                  }`} />

                  {/* Subtle dynamic backdrop glow matching the theme */}
                  <div className={`absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-25 group-hover/card:opacity-45 transition-all duration-700 group-hover/card:scale-125 ${
                    tab.id === 'agents' ? 'bg-[#FF3B00]' :
                    tab.id === 'workflows' ? 'bg-blue-500' :
                    tab.id === 'development' ? 'bg-purple-500' :
                    'bg-green-500'
                  }`} />
                  
                  {/* Subtle internal grid decoration */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0" />

                  {/* Content Header area */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10 w-full relative z-10">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                          <tab.icon className={`w-4 h-4 ${
                            tab.id === 'agents' ? 'text-[#FF3B00]' :
                            tab.id === 'workflows' ? 'text-blue-400' :
                            tab.id === 'development' ? 'text-purple-400' :
                            'text-green-400'
                          }`} />
                          {tab.label}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">
                        {tab.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {tab.description}
                      </p>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="whitespace-nowrap px-6 py-3 rounded bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold flex items-center gap-2 shrink-0 z-20 relative shadow-lg cursor-pointer"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Mockup area - Premium dynamic liftoff hovers */}
                  <motion.div 
                    whileHover={{ y: -6, scale: 1.005 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full mt-4 cursor-pointer relative group rounded-xl overflow-hidden z-10"
                  >
                    {/* Laser sweep shine effect */}
                    <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1000ms] ease-out pointer-events-none z-30" />
                    {tab.mockup}
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        
      </div>
    </section>
  );
};

export default Showcase;