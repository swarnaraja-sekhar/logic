import { useState, useEffect } from 'react';
import { 
  Search, 
  Settings2, 
  Plus, 
  Terminal, 
  MessageSquare, 
  Eye, 
  Paperclip, 
  Check, 
  X, 
  Folder, 
  ChevronRight, 
  Sparkles,
  Clock,
  AlertTriangle,
  RefreshCw,
  FileText,
  Volume2
} from 'lucide-react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const GlowCardInner = ({ 
  children, 
  className = "",
  radialRadius = 240,
  radialOpacity = 0.12
}: { 
  children: React.ReactNode; 
  className?: string;
  radialRadius?: number;
  radialOpacity?: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`bg-[#08080c] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-xl flex flex-col overflow-hidden relative select-none group/window ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover/window:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radialRadius}px circle at ${mouseX}px ${mouseY}px,
              rgba(180, 195, 251, ${radialOpacity}),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col h-full w-full">
        {children}
      </div>
    </div>
  );
};

export const FeaturesGrid = () => {
  const [pulse, setPulse] = useState(true);
  const [estimateProgress, setEstimateProgress] = useState(0);
  const [activeEstimateStep, setActiveEstimateStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Cycle estimate parsing state
  useEffect(() => {
    const interval = setInterval(() => {
      setEstimateProgress((p) => {
        if (p >= 100) {
          setTimeout(() => {
            setEstimateProgress(0);
            setActiveEstimateStep(0);
          }, 2000);
          return 100;
        }
        const next = p + 20;
        if (next >= 80) setActiveEstimateStep(2);
        else if (next >= 40) setActiveEstimateStep(1);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Stagger entrance variants for grids
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.97 },
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
    <section id="features" className="relative z-10 w-full bg-black py-24 border-t border-white/5 overflow-hidden">
      
      {/* Background radial soft light */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-900/[0.02] blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 space-y-16">
        
        {/* Two Large Top Cards (Outdated Reconstruction Software & Manual Estimate Processing) */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          
          {/* Card 1: Outdated Reconstruction Software */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.5] bg-[#b4c3fb] rounded-3xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Workspace Comparison Window */}
              <GlowCardInner className="w-[95%] h-[95%]">
                {/* Search Header Bar */}
                <div className="px-4 py-2.5 bg-[#0c0c12] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 select-none">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[9px] font-mono text-gray-500">legacy-tools vs biglogicai</span>
                  <div className="w-8 h-2 rounded-full bg-white/5" />
                </div>

                {/* Split Panel Comparison Layout */}
                <div className="flex-1 grid grid-cols-2 gap-px bg-white/5 overflow-hidden">
                  
                  {/* Left Side: Old Legacy Software */}
                  <div className="bg-[#0c0c12]/95 p-3 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center gap-1 text-[8px] font-mono text-rose-500 font-bold bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20 w-fit mb-2">
                        <AlertTriangle className="w-2.5 h-2.5" /> LEGACY SOFTWARE
                      </div>
                      <div className="text-[10px] font-bold text-gray-400 mb-2">Slow & Cryptic Interface</div>
                      <div className="space-y-1.5 text-[8px] text-gray-600 font-mono">
                        <div className="border border-red-500/10 p-1 rounded bg-red-500/[0.02]">✕ Loading time: 24.2s</div>
                        <div className="border border-red-500/10 p-1 rounded bg-red-500/[0.02]">✕ Cryptic manual inputs</div>
                        <div className="border border-red-500/10 p-1 rounded bg-red-500/[0.02]">✕ No AI extraction</div>
                        <div className="border border-red-500/10 p-1 rounded bg-red-500/[0.02]">✕ Desktop-bound app</div>
                      </div>
                    </div>
                    <span className="text-[7px] text-gray-700 font-mono">Status: Frustrating & inefficient</span>
                  </div>

                  {/* Right Side: BigLogicAI Modern Interface */}
                  <div className="bg-[#08080c]/90 p-3 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center gap-1 text-[8px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 w-fit mb-2">
                        <Sparkles className="w-2.5 h-2.5 text-emerald-400" /> BIGLOGICAI HUB
                      </div>
                      <div className="text-[10px] font-bold text-white mb-2">Modern AI-Powered OS</div>
                      <div className="space-y-1.5 text-[8px] text-emerald-400/80 font-mono">
                        <div className="border border-emerald-500/10 p-1 rounded bg-emerald-500/[0.02] flex items-center gap-1">
                          <Check className="w-2.5 h-2.5" /> Instant response (0.2s)
                        </div>
                        <div className="border border-emerald-500/10 p-1 rounded bg-emerald-500/[0.02] flex items-center gap-1">
                          <Check className="w-2.5 h-2.5" /> Automated workflows
                        </div>
                        <div className="border border-emerald-500/10 p-1 rounded bg-emerald-500/[0.02] flex items-center gap-1">
                          <Check className="w-2.5 h-2.5" /> Multi-device responsive
                        </div>
                        <div className="border border-emerald-500/10 p-1 rounded bg-emerald-500/[0.02] flex items-center gap-1">
                          <Check className="w-2.5 h-2.5" /> Natural AI chat search
                        </div>
                      </div>
                    </div>
                    <span className="text-[7px] text-emerald-500 font-mono font-bold">Status: Smooth & scaling native</span>
                  </div>

                </div>
              </GlowCardInner>
            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-xl font-bold tracking-tight text-white">1. Outdated Reconstruction Software</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Legacy tools are slow, complex, outdated, and hard to use. BigLogicAI replaces them with a modern AI-powered interface.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Manual Estimate Processing */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.5] bg-[#b4c3fb] rounded-3xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Floating Editor View Workspace */}
              <GlowCardInner className="w-[95%] h-[95%]">
                
                {/* Editor Header */}
                <div className="h-10 bg-[#0c0c12] border-b border-white/5 px-4 flex items-center justify-between text-[9px] font-mono text-gray-500 select-none">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-orange-500" />
                    <span>biglogic-parser // estimate-intake-processor</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 font-bold border border-orange-500/20">ESTIMATE PARSED</span>
                </div>

                {/* Estimate scanning preview and outputs */}
                <div className="flex-1 p-4 font-mono text-[9px] sm:text-[10px] leading-relaxed text-gray-500 space-y-2.5 relative text-left">
                  
                  {/* Parsing progressive scanner */}
                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3 space-y-2 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-white">
                      <span className="font-semibold">Maple_Ave_Estimate.pdf</span>
                      <span className="text-[#FF3B00] font-bold">{estimateProgress}%</span>
                    </div>
                    
                    <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF3B00] transition-all duration-300" style={{ width: `${estimateProgress}%` }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className={estimateProgress >= 20 ? "text-orange-400/90 font-medium" : "text-gray-700"}>
                      {estimateProgress >= 20 ? "✓ PDF Reading: File structure scanned successfully" : "▶ Reading estimate PDF..."}
                    </div>
                    <div className={estimateProgress >= 60 ? "text-orange-400/90 font-medium" : "text-gray-700"}>
                      {estimateProgress >= 60 ? "✓ Xactimate Parsing: 47 line items mapped automatically" : "▶ Parsing Xactimate estimates..."}
                    </div>
                    <div className={estimateProgress >= 100 ? "text-orange-400/90 font-medium" : "text-gray-700"}>
                      {estimateProgress >= 100 ? "✓ Schedule Gen: 4 draw milestones generated" : "▶ Generating schedules..."}
                    </div>
                  </div>

                  <div className="text-[8px] text-gray-600 border-t border-white/5 pt-2 flex justify-between select-none font-bold">
                    <span>Target: 452 Maple Ave Restoration</span>
                    <span className="text-[#FF3B00] uppercase tracking-wider">Saved 4.5 hours of typing</span>
                  </div>

                </div>

              </GlowCardInner>
            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-xl font-bold tracking-tight text-white">2. Manual Estimate Processing</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Construction companies manually type insurance estimate data for hours. BigLogicAI uses AI to read PDFs, parse Xactimate estimates, and generate schedules automatically.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Three Small Bottom Cards (Compliance, Scattered Docs, Lost Meetings) */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
          {/* Card 3: Insurance Compliance Problems */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.3] bg-[#b4c3fb] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Compliance Checker Board */}
              <GlowCardInner className="w-[95%] h-[95%] p-4 gap-3 text-left">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-white select-none">
                  <span className="text-[9px] font-bold tracking-widest font-mono text-gray-400 flex items-center gap-1 uppercase">
                    <RefreshCw className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" /> CARRIER COMPLIANCE AUDIT
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="space-y-2">
                    {[
                      { label: "Document validation", detail: "Dry logs, photos, e-signs checked", status: "Passed ✓", color: "text-emerald-400" },
                      { label: "Compliance rules audit", detail: "State Farm category 3 SLA rules", status: "Zero errors ✓", color: "text-emerald-400" },
                      { label: "Insurance requirements", detail: "Dehumidifier runtime cap check", status: "Auto-corrected ✓", color: "text-purple-400" }
                    ].map((rule, idx) => (
                      <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-lg p-2 flex items-center justify-between">
                        <div>
                          <div className="text-[9px] font-bold text-white">{rule.label}</div>
                          <div className="text-[7.5px] text-gray-500 font-mono mt-0.5">{rule.detail}</div>
                        </div>
                        <span className={`text-[8.5px] font-bold ${rule.color} font-mono shrink-0`}>{rule.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[8px] font-mono text-emerald-400 bg-emerald-400/5 border border-emerald-400/10 p-1.5 rounded text-center font-bold uppercase select-none">
                    ✓ Claim ready for carrier submission (100% compliant)
                  </div>
                </div>
              </GlowCardInner>
            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-lg font-bold text-white">3. Insurance Compliance Problems</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Insurance companies reject claims if documentation is incorrect. BigLogicAI validates documents, compliance rules, and insurance requirements using AI.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Scattered Documents */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.3] bg-[#b4c3fb] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Centralized knowledge brain directory split panel */}
              <GlowCardInner className="w-[95%] h-[95%] flex-row text-left">
                
                {/* Left File Tree Sidebar */}
                <div className="w-[45%] bg-[#0b0b0f] border-r border-white/5 p-3 flex flex-col gap-3 text-gray-500 font-mono text-[7px] shrink-0">
                  <div className="text-[8px] font-bold text-gray-400 flex items-center gap-1 uppercase">
                    <Folder className="w-3 h-3 text-purple-400" /> Company Brain
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 text-gray-300 font-medium cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5 text-purple-400" /> SOPs</div>
                    <div className="flex items-center gap-1 text-gray-300 font-medium cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5 text-purple-400" /> Contracts</div>
                    <div className="flex items-center gap-1 text-gray-300 font-medium cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5 text-purple-400" /> Legal Templates</div>
                    <div className="flex items-center gap-1 text-gray-300 font-medium cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5 text-purple-400" /> Project Files</div>
                  </div>
                </div>

                {/* Right Document Editor Viewer */}
                <div className="flex-1 p-3 flex flex-col justify-between bg-black/40">
                  <div className="space-y-2">
                    <div className="relative">
                      <Search className="w-3 h-3 text-gray-500 absolute left-2 top-1/2 -translate-y-1/2" />
                      <input 
                        disabled
                        type="text" 
                        placeholder="Search company knowledge..."
                        className="w-full bg-black/40 border border-white/5 rounded px-7 py-1 text-[8px] font-sans text-gray-400 placeholder-gray-600 outline-none"
                      />
                    </div>
                    
                    <div className="text-[7.5px] text-gray-400 font-sans leading-relaxed space-y-1">
                      <div className="font-bold text-white">SOP-Restoration-03</div>
                      <p>Drying procedures: Setup dehumidifiers for exactly 3 days. Log relative humidity daily in moisture sheets.</p>
                    </div>
                  </div>
                  
                  <span className="text-[7px] text-purple-400 font-mono font-bold select-none">AI semantic search active</span>
                </div>

              </GlowCardInner>

            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-lg font-bold text-white">4. Scattered Documents</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Companies lose track of SOPs, contracts, legal templates, and project files. BigLogicAI creates a centralized “Company Brain” where all knowledge is searchable using AI.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Lost Meeting Information */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.3] bg-[#b4c3fb] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Floating Voice to Action audio preview */}
              <div className="w-[95%] h-[95%] flex flex-col gap-3 justify-center relative z-10 select-none">
                
                <GlowCardInner className="p-3.5 flex flex-col gap-3 text-left" radialRadius={160} radialOpacity={0.08}>
                  {/* Wave audio intake */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-[8.5px] font-bold font-mono text-gray-400 flex items-center gap-1.5 uppercase">
                      <Volume2 className="w-3.5 h-3.5 text-purple-400" /> VOICE TO ACTION CONVERSION
                    </span>
                    <span className="text-[7.5px] text-[#FF3B00] font-mono font-bold animate-pulse">RECORDING</span>
                  </div>

                  {/* Pulsing visualizer wave */}
                  <div className="flex items-center justify-center gap-1 h-5 w-full py-1">
                    {[1.2, 3.5, 2.0, 4.2, 1.8, 3.0, 1.0, 3.8, 2.2, 3.5, 1.5].map((h, i) => (
                      <span 
                        key={i} 
                        className="w-[2px] bg-gradient-to-t from-purple-500 to-indigo-400 rounded-full transition-all duration-300"
                        style={{ 
                          height: pulse ? `${h * 4.5}px` : `${h * 1.5}px`
                        }} 
                      />
                    ))}
                  </div>

                  {/* Action items extracted */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[8.5px] font-bold text-white">Action items extracted automatically:</div>
                    <div className="space-y-1 text-[7.5px] text-gray-400 font-mono">
                      <div className="flex items-center gap-1.5"><Check className="w-2.5 h-2.5 text-emerald-400 shrink-0" /> Tech Lead: Setup 4 dehumidifiers in basement</div>
                      <div className="flex items-center gap-1.5"><Check className="w-2.5 h-2.5 text-emerald-400 shrink-0" /> Crew: Deliver 30 sheets drywall by Monday</div>
                      <div className="flex items-center gap-1.5"><Check className="w-2.5 h-2.5 text-emerald-400 shrink-0" /> Admin: Send signed estimate to State Farm</div>
                    </div>
                  </div>
                </GlowCardInner>

              </div>

            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-lg font-bold text-white">5. Lost Meeting Information</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Site meetings and calls often lose important action items. BigLogicAI records, transcribes, summarizes, and converts conversations into tasks automatically.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
