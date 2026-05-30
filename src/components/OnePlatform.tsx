import { motion } from 'framer-motion';
import { Bot, Brain, Database, ArrowRight, Shield, RefreshCw, FileText, Plus, Terminal } from 'lucide-react';
import { Reveal } from './SectionReveal';

export const OnePlatform = () => {
  return (
    <section id="one-platform" className="relative z-10 w-full bg-gradient-to-br from-[#9c84e2] via-[#C6B4F8] to-[#8269d0] py-28 overflow-hidden select-none">
      
      {/* Mesh Gradient Accent Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-40 z-0" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/10 border border-black/15 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1f1248] uppercase shadow-[0_2px_10px_rgba(0,0,0,0.02)] select-none backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1f1248] animate-pulse inline-block shadow-[0_0_8px_#1f1248]" />
              UNIFIED AGENT CORE
            </span>
          </Reveal>

          <Reveal delay={0.2} yOffset={25}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#130b2c] font-sans leading-tight">
              One Platform.<br />
              <span className="bg-gradient-to-r from-slate-900 via-[#1f1248] to-[#3b0764] bg-clip-text text-transparent">Every Tool Synchronized.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.3} yOffset={20}>
            <p className="text-[#372d5c] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Stop juggling disconnected tools and fragmented files. BigLogicAI acts as a single, unified cognitive engine that bridges shared context, key assets, and workflows across every toolchain.
            </p>
          </Reveal>
        </div>

        {/* Core Layout: Side-by-side Text & Interactive Network Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: High-value platform highlights */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1">
              <div className="w-10 h-10 rounded-xl bg-white/40 border border-white/20 flex items-center justify-center shrink-0 text-[#6320a4] shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-colors group-hover:bg-white/60">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#130b2c] tracking-tight leading-snug">
                  Shared Cognitive Memory
                </h3>
                <p className="text-xs sm:text-sm text-[#372d5c] leading-relaxed mt-2 max-w-md font-medium">
                  Establish a persistent database vault. Your code files, prompts, and past configurations are cached centrally so all tools access the identical frame of reference.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1">
              <div className="w-10 h-10 rounded-xl bg-white/40 border border-white/20 flex items-center justify-center shrink-0 text-[#6320a4] shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-colors group-hover:bg-white/60">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#130b2c] tracking-tight leading-snug">
                  Real-time Agent Bridging
                </h3>
                <p className="text-xs sm:text-sm text-[#372d5c] leading-relaxed mt-2 max-w-md font-medium">
                  Connect isolated shells, editor plugins, and compilers. Ephemeral session details, schemas, and worktrees flow dynamically across every workspace boundary.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1">
              <div className="w-10 h-10 rounded-xl bg-white/40 border border-white/20 flex items-center justify-center shrink-0 text-[#6320a4] shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-colors group-hover:bg-white/60">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#130b2c] tracking-tight leading-snug">
                  Zero Trust Isolation
                </h3>
                <p className="text-xs sm:text-sm text-[#372d5c] leading-relaxed mt-2 max-w-md font-medium">
                  All connection nodes operate under rigid AES-256 local isolation guidelines. Shared files and access tokens are strictly encrypted, rotated, and compartmentalized.
                </p>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full bg-[#130b2c] hover:bg-[#201444] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-[0_10px_30px_rgba(19,11,44,0.2)] flex items-center gap-2 cursor-pointer mt-6"
            >
              Explore Context Bridge <ArrowRight className="w-4 h-4" />
            </motion.button>

          </div>

          {/* Right Side: Interactive, Highly Aesthetic Flow Diagram Grid */}
          <div className="lg:col-span-7 w-full flex items-center justify-center relative min-h-[500px]">
            
            {/* SVG Connecting Dashed Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>{`
                  @keyframes dash {
                    to {
                      stroke-dashoffset: -20;
                    }
                  }
                  .data-line {
                    animation: dash 1.5s linear infinite;
                  }
                `}</style>
              </defs>
              {/* Warp Agent Node Path */}
              <path 
                d="M 120 120 C 180 120, 200 230, 260 230" 
                fill="none" 
                stroke="rgba(31, 18, 72, 0.22)" 
                strokeWidth="2" 
                strokeDasharray="4 6" 
                className="data-line" 
              />
              <circle cx="120" cy="120" r="4" fill="#1f1248" />
              
              {/* Claude Code Node Path */}
              <path 
                d="M 520 230 C 460 230, 440 250, 380 250" 
                fill="none" 
                stroke="rgba(31, 18, 72, 0.22)" 
                strokeWidth="2" 
                strokeDasharray="4 6" 
                className="data-line" 
              />
              <circle cx="520" cy="230" r="4" fill="#1f1248" />

              {/* Codex Node Path */}
              <path 
                d="M 190 380 C 230 380, 250 270, 280 270" 
                fill="none" 
                stroke="rgba(31, 18, 72, 0.22)" 
                strokeWidth="2" 
                strokeDasharray="4 6" 
                className="data-line" 
              />
              <circle cx="190" cy="380" r="4" fill="#1f1248" />

              {/* Additional nodes decoration matching user screenshot */}
              <path 
                d="M 330 80 L 330 180" 
                fill="none" 
                stroke="rgba(31, 18, 72, 0.15)" 
                strokeWidth="1.5" 
                strokeDasharray="3 4" 
              />
              <circle cx="330" cy="80" r="4" fill="rgba(31, 18, 72, 0.3)" />

              <path 
                d="M 380 300 L 380 390 L 450 390" 
                fill="none" 
                stroke="rgba(31, 18, 72, 0.15)" 
                strokeWidth="1.5" 
                strokeDasharray="3 4" 
              />
              <circle cx="450" cy="390" r="4" fill="rgba(31, 18, 72, 0.3)" />
            </svg>

            {/* Central Memory Store Dashboard Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="bg-black/95 border border-white/10 rounded-3xl p-6 sm:p-8 w-[320px] sm:w-[360px] shadow-[0_25px_60px_rgba(40,16,100,0.3)] backdrop-blur-md relative z-10 select-none flex flex-col gap-6"
            >
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-6 text-left font-sans flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-400" /> Memory Store
                </h3>
                
                {/* Internal dynamic memory pills */}
                <div className="flex flex-wrap gap-2.5">
                  <div className="bg-white/[0.04] border border-white/5 rounded-full px-3 py-1.5 flex items-center gap-2 text-xs text-gray-200 shadow-md">
                    <Brain className="w-3.5 h-3.5 text-purple-400" />
                    Auto-memory
                  </div>
                  <div className="bg-white/[0.04] border border-white/5 rounded-full px-3 py-1.5 flex items-center gap-2 text-xs text-gray-200 shadow-md">
                    <FileText className="w-3.5 h-3.5 text-indigo-400" />
                    memory1.md
                  </div>
                  <div className="bg-white/[0.04] border border-white/5 rounded-full px-3 py-1.5 flex items-center gap-2 text-xs text-gray-200 shadow-md">
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    memory2.md
                  </div>
                  <button className="bg-transparent border border-dashed border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs text-gray-500 hover:text-white hover:border-white/20 transition-all font-semibold cursor-pointer">
                    <Plus className="w-3.5 h-3.5" />
                    Add memory
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Warp Agent White Floating Card (Top Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute left-6 top-6 w-20 h-20 bg-white rounded-2xl flex flex-col items-center justify-center shadow-[0_15px_45px_rgba(40,16,100,0.18)] z-10 group select-none hover:scale-105 transition-all duration-300 border border-purple-500/10"
            >
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="absolute -bottom-2 px-2.5 py-0.5 bg-black rounded-md text-[8px] font-mono font-bold tracking-wider text-gray-200 uppercase border border-white/10 whitespace-nowrap shadow-md">
                Warp Agent
              </span>
            </motion.div>

            {/* Claude Code White Floating Card (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute right-6 top-[35%] w-20 h-20 bg-white rounded-2xl flex flex-col items-center justify-center shadow-[0_15px_45px_rgba(40,16,100,0.18)] z-10 group select-none hover:scale-105 transition-all duration-300 border border-purple-500/10"
            >
              {/* Claude sunburst custom spokes logo in white card */}
              <div className="w-10 h-10 rounded-xl bg-[#e05a36] flex items-center justify-center text-white font-black text-lg select-none shadow-md">
                C
              </div>
              <span className="absolute -bottom-2 px-2.5 py-0.5 bg-black rounded-md text-[8px] font-mono font-bold tracking-wider text-gray-200 uppercase border border-white/10 whitespace-nowrap shadow-md">
                Claude Code
              </span>
            </motion.div>

            {/* Codex White Floating Card (Bottom) */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute left-16 bottom-6 w-20 h-20 bg-white rounded-2xl flex flex-col items-center justify-center shadow-[0_15px_45px_rgba(40,16,100,0.18)] z-10 group select-none hover:scale-105 transition-all duration-300 border border-purple-500/10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#10a37f] flex items-center justify-center text-white font-bold text-lg select-none shadow-md">
                CX
              </div>
              <span className="absolute -bottom-2 px-2.5 py-0.5 bg-black rounded-md text-[8px] font-mono font-bold tracking-wider text-gray-200 uppercase border border-white/10 whitespace-nowrap shadow-md">
                Codex
              </span>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
