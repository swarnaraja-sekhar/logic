import { AlertTriangle, CheckCircle2, ChevronRight, Clock, Code, DollarSign, Frown, Lightbulb, Rocket, Users, X, Zap, Activity, TrendingUp, Hourglass, FileText, UserPlus, Bug, Settings, Bot, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Comparison = () => {
  return (
    <section id="comparison" className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 py-24 min-h-screen flex flex-col pt-32">

      {/* Header - Staggered Mask Line Reveals */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1
            }
          }
        }}
        className="text-center space-y-6 mb-20"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" }
            }
          }}
          className="text-[#FF3B00] text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-4"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FF3B00]"></div>
          THE PRESENT PROBLEM
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FF3B00]"></div>
        </motion.div>

        {/* Title masked slide up */}
        <div className="overflow-hidden py-1">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white"
          >
            Most Companies<br />
            Are Already <span className="text-[#FF3B00]">Falling Behind.</span>
          </motion.h2>
        </div>

        {/* Description masked slide up */}
        <div className="overflow-hidden py-1">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            While teams waste weeks building manually,<br className="hidden md:block" />
            AI-native companies are shipping in hours.
          </motion.p>
        </div>
      </motion.div>

      {/* Split Comparison Section */}
      <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 mt-10">

        {/* Center VS Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.4 }}
          className="absolute left-1/2 top-1/2 z-20 hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-black border-2 border-[#FF3B00] text-[#FF3B00] font-black text-xl italic shadow-[0_0_30px_rgba(255,59,0,0.4)]"
        >
          VS
        </motion.div>

        {/* Diagonal Line */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: "100%" }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="absolute left-1/2 top-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF3B00] to-transparent -translate-x-1/2 z-10 hidden lg:block rotate-[10deg]"
        ></motion.div>

        {/* Left Side - Old Way */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex items-center justify-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 mb-12 rounded-full border border-red-500/10 bg-red-950/5 shadow-[0_0_25px_rgba(239,68,68,0.04)] backdrop-blur-md self-center mx-auto"
          >
            <span className="text-lg sm:text-2xl font-black uppercase tracking-[0.2em] bg-gradient-to-r from-red-500 via-gray-400 to-gray-500 bg-clip-text text-transparent flex items-center gap-2 font-mono">
              OLD WAY <X className="w-5 h-5 text-red-500/80 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] shrink-0" />
            </span>
          </motion.div>

          <div className="relative z-10 w-full rounded-3xl border border-red-500/10 bg-gradient-to-br from-[#0c0707]/90 via-[#070505]/95 to-black p-6 sm:p-10 flex-1 flex flex-col justify-between shadow-2xl overflow-hidden group/old shadow-[0_0_30px_rgba(239,68,68,0.02)]">
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { i: Users, t: "ENDLESS MEETINGS", d: "Too much talking. No progress." },
                { i: Hourglass, t: "SLOW DEVELOPMENT", d: "Weeks of planning. Months of execution." },
                { i: Clock, t: "CONSTANT DELAYS", d: "Projects delayed. Deadlines missed." },
                { i: Activity, t: "COMPLEX WORKFLOWS", d: "Too many steps. Too much chaos." },
                { i: DollarSign, t: "HIGHER COSTS", d: "More people. More tools. More expenses." },
                { i: Frown, t: "BURNOUT & STRESS", d: "Overworked teams. Low productivity." }
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] as const }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-red-500/10 bg-red-950/5 backdrop-blur-sm transition-all duration-300 hover:bg-red-900/10 hover:border-red-500/25 hover:translate-x-1 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgba(239,68,68,0.03)] group/item cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-950/20 border border-red-500/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover/item:bg-red-900/30 group-hover/item:border-red-500/30 shadow-[inset_0_0_10px_rgba(239,68,68,0.05)]">
                    <c.i className="w-5 h-5 text-red-500/70 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-gray-200 tracking-wider mb-1.5 font-mono uppercase group-hover/item:text-white transition-colors">{c.t}</div>
                    <div className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans group-hover/item:text-gray-400 transition-colors">{c.d}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - BigLogicAI Way */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex items-center justify-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 mb-12 rounded-full border border-green-500/20 bg-green-950/5 shadow-[0_0_30px_rgba(34,197,94,0.08)] backdrop-blur-md self-center mx-auto"
          >
            <span className="text-lg sm:text-2xl font-black uppercase tracking-[0.2em] bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent flex items-center gap-2 font-mono">
              <CheckCircle2 className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)] shrink-0" /> BIGLOGICAI WAY
            </span>
          </motion.div>

          {/* Unified Card Right */}
          <div className="relative z-10 w-full rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-[#050c08]/90 via-[#030604]/95 to-black p-6 sm:p-10 flex-1 flex flex-col justify-between shadow-2xl overflow-hidden group/new shadow-[0_0_40px_rgba(16,185,129,0.06)]">
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { i: Bot, t: "AI AGENTS", d: "Autonomous execution. Always working." },
                { i: Zap, t: "INSTANT WORKFLOWS", d: "Automate everything. No manual work." },
                { i: Code, t: "FASTER DEVELOPMENT", d: "Build & deploy in hours, not months." },
                { i: Settings, t: "SMART AUTOMATION", d: "AI handles the complex. You focus on growth." },
                { i: TrendingDown, t: "LOWER COSTS", d: "Do more with less. Maximize your ROI." },
                { i: Rocket, t: "GROWTH ON AUTOPILOT", d: "Scale faster. Stay ahead always." }
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] as const }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-emerald-500/15 bg-emerald-950/5 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-900/10 hover:border-emerald-500/30 hover:translate-x-1 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgba(16,185,129,0.04)] group/item cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover/item:bg-emerald-500/20 group-hover/item:border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <c.i className="w-5 h-5 text-emerald-400 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-white tracking-wider mb-1.5 font-mono uppercase group-hover/item:text-emerald-400 transition-colors">{c.t}</div>
                    <div className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans group-hover/item:text-white transition-colors">{c.d}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {/* Left Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.02] border border-white/5 rounded-2xl p-6"
        >
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-6 text-center lg:text-left">THE COST OF <span className="text-gray-400">DOING THINGS</span> <span className="text-red-500">THE OLD WAY</span></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center lg:text-left"><div className="text-xl font-bold flex items-center justify-center lg:justify-start gap-1"><Clock className="w-4 h-4 text-red-500" /> 1,240+</div><div className="text-[10px] text-gray-500 mt-1">Hours Wasted<br />Every Month</div></div>
            <div className="text-center lg:text-left"><div className="text-xl font-bold flex items-center justify-center lg:justify-start gap-1"><DollarSign className="w-4 h-4 text-red-500" /> $847K+</div><div className="text-[10px] text-gray-500 mt-1">Lost Revenue<br />Every Month</div></div>
            <div className="text-center lg:text-left"><div className="text-xl font-bold flex items-center justify-center lg:justify-start gap-1"><Users className="w-4 h-4 text-red-500" /> 12+</div><div className="text-[10px] text-gray-500 mt-1">Competitors Ahead<br />Every Quarter</div></div>
            <div className="text-center lg:text-left"><div className="text-xl font-bold flex items-center justify-center lg:justify-start gap-1"><TrendingUp className="w-4 h-4 text-red-500 rotate-180" /> 37%</div><div className="text-[10px] text-gray-500 mt-1">Projects Fail<br />Before Launch</div></div>
          </div>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-emerald-500/[0.03] border border-emerald-500/20 rounded-2xl p-6"
        >
          <div className="text-xs text-white uppercase tracking-wider mb-6 text-center lg:text-right">THE RESULTS WITH <span className="text-emerald-400">BIGLOGICAI</span></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center lg:text-right"><div className="text-xl font-bold text-white flex items-center justify-center lg:justify-end gap-1"><Zap className="w-4 h-4 text-emerald-400" /> 10X</div><div className="text-[10px] text-gray-400 mt-1">Faster<br />Execution</div></div>
            <div className="text-center lg:text-right"><div className="text-xl font-bold text-white flex items-center justify-center lg:justify-end gap-1"><TrendingUp className="w-4 h-4 text-emerald-400" /> 90%</div><div className="text-[10px] text-gray-400 mt-1">Time<br />Saved</div></div>
            <div className="text-center lg:text-right"><div className="text-xl font-bold text-white flex items-center justify-center lg:justify-end gap-1"><DollarSign className="w-4 h-4 text-emerald-400" /> 70%</div><div className="text-[10px] text-gray-400 mt-1">Lower<br />Costs</div></div>
            <div className="text-center lg:text-right"><div className="text-xl font-bold text-white flex items-center justify-center lg:justify-end gap-1"><Rocket className="w-4 h-4 text-emerald-400" /> 100%</div><div className="text-[10px] text-gray-400 mt-1">Focus On<br />Growth</div></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Timeline Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="mt-4 bg-white/[0.02] border border-white/5 rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-black border border-[#FF3B00]/50 text-[#FF3B00] font-black text-xs italic shadow-[0_0_15px_rgba(255,59,0,0.3)]">
          VS
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Left Timeline */}
          <div>
            <div className="text-center lg:text-left text-xs text-gray-500 uppercase tracking-widest mb-8">THE OLD WAY (6+ MONTHS)</div>
            <div className="relative flex items-center justify-between text-gray-500 px-0 sm:px-4">
              <div className="absolute left-6 right-6 top-4 h-[1px] bg-white/10 hidden sm:block"></div>
              {[
                { i: Lightbulb, t: "Idea" },
                { i: Users, t: "Meetings" },
                { i: FileText, t: "Planning" },
                { i: UserPlus, t: "Hiring" },
                { i: Code, t: "Development" },
                { i: Bug, t: "Testing" },
                { i: AlertTriangle, t: "Bugs" },
                { i: Rocket, t: "Launch" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center gap-2 relative z-10"
                >
                  <div className="w-8 h-8 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center"><item.i className="w-3 h-3" /></div>
                  <span className="text-[10px] hidden sm:block">{item.t}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-[#FF3B00] text-xs font-bold uppercase tracking-wider">SLOW. EXPENSIVE. UNPREDICTABLE.</div>
              <div className="text-gray-500 text-xs">6+ Months</div>
            </div>
          </div>

          {/* Right Timeline */}
          <div>
            <div className="text-center lg:text-right text-emerald-400 text-xs uppercase tracking-widest mb-8">THE BIGLOGICAI WAY (48 HOURS)</div>
            <div className="relative flex items-center justify-between px-0 sm:px-4">
              <div className="absolute left-6 right-6 top-4 h-[1px] bg-gradient-to-r from-emerald-500 to-green-500 hidden sm:block"></div>
              <div className="absolute left-6 right-6 top-4 h-[1px] bg-gradient-to-r from-emerald-500 to-green-500 hidden sm:block opacity-50 blur-sm"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-2 relative z-10"
              >
                <div className="w-8 h-8 rounded-full border border-white/20 bg-[#0a0a0a] flex items-center justify-center"><Lightbulb className="w-3 h-3 text-white" /></div>
                <span className="text-[10px] text-gray-400 hidden sm:block">Idea</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center relative z-10 bg-[#0a0a0a] px-4"
              >
                <div className="flex items-center gap-2 text-white font-bold text-xl">
                  <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-xs shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                    <span className="transform -skew-x-[15deg]">B</span>
                  </div>
                  <span>BigLogic<span className="font-normal text-gray-400">Ai</span></span>
                </div>
                <div className="text-[10px] text-gray-400 mt-2 hidden sm:block">AI Automates. You Scale.</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center gap-2 relative z-10"
              >
                <div className="w-8 h-8 rounded-full border border-green-500/50 bg-[#0a0a0a] flex items-center justify-center"><Rocket className="w-3 h-3 text-green-500" /></div>
                <span className="text-[10px] text-white hidden sm:block">Launch</span>
              </motion.div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-green-500 text-xs font-bold uppercase tracking-wider">FAST. SMART. UNSTOPPABLE.</div>
              <div className="text-gray-400 text-xs">48 Hours</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mt-8 flex flex-col md:flex-row items-center justify-between bg-black border border-[#FF3B00]/30 rounded-full p-2 pl-6 gap-4 max-w-4xl mx-auto w-full"
      >
        <div className="flex items-center gap-3 text-sm flex-1">
          <AlertTriangle className="w-5 h-5 text-[#FF3B00]" />
          <span className="text-gray-300">
            <strong className="text-white">Every day you wait, your competitors are getting further ahead.</strong> The future belongs to the automated.
          </span>
        </div>
        <button className="whitespace-nowrap px-6 py-3 rounded-full bg-transparent border border-[#FF3B00] text-[#FF3B00] hover:bg-[#FF3B00] hover:text-white transition-colors text-sm font-semibold uppercase tracking-wide flex items-center gap-2">
          Don't Get Left Behind <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
};

export default Comparison;
