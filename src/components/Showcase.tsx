import { useState, useEffect } from 'react';
import {
  Zap,
  Folder,
  Brain,
  ArrowRight,
  Check,
  FileText,
  Sparkles,
  Clock,
  Search,
  Volume2,
  Coins,
  Package,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mockup 1: AI Document Intelligence Dynamic Simulator
const DocIntelligenceMockup = () => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev === 0) {
          setProgress(0);
          return 1;
        }
        if (prev === 1) {
          return 1; // Handled by progress timer
        }
        if (prev === 2) {
          return 0;
        }
        return 0;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step === 1) {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep(2), 500);
            return 100;
          }
          return p + 10;
        });
      }, 120);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="showcase-inner-mockup rounded-2xl overflow-hidden shadow-2xl p-5 min-h-[300px] flex flex-col font-sans relative">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.01] to-transparent pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 select-none shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B00] animate-pulse" />
          <span className="text-[10px] font-mono text-gray-500">biglogic-intelligence // parsing-engine</span>
        </div>
        <span className="text-[8px] font-mono text-orange-400 bg-orange-400/5 px-2 py-0.5 rounded border border-orange-400/10 uppercase tracking-widest font-bold">Xactimate AI</span>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-1 flex flex-col items-center justify-center border border-dashed border-white/5 hover:border-[#FF3B00]/30 rounded-xl p-6 bg-white/[0.01] hover:bg-orange-500/[0.01] cursor-pointer transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#FF3B00] group-hover:bg-[#FF3B00]/10 transition-colors mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-xs text-white font-medium mb-1">Drag & drop your reconstruction files here</p>
              <p className="text-[10px] text-gray-500 text-center">Supports Xactimate PDF, Carrier Contracts, & SOPs</p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-1 flex flex-col justify-center"
            >
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2 text-xs text-white">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#FF3B00]" />
                    <span className="font-semibold text-[11px] truncate max-w-[185px]">Xactimate_Estimate_452Maple.pdf</span>
                  </div>
                  <span className="font-mono text-[9px] text-gray-400">{progress}%</span>
                </div>

                <div className="w-full bg-neutral-900 h-1 rounded-full overflow-hidden mb-3.5">
                  <div className="h-full bg-[#FF3B00] rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
                </div>

                {/* Diagrammatic Dynamic Parsing Block */}
                <div className="flex-1 flex flex-row items-center justify-between gap-4 relative overflow-hidden h-[155px] border border-white/5 bg-white/[0.01] rounded-xl p-3 select-none">

                  {/* Left Column: Unstructured Document representation */}
                  <div className="w-[42%] bg-neutral-950/80 border border-white/5 rounded-lg p-2.5 relative overflow-hidden flex flex-col gap-2 h-[135px] z-10">
                    <div className="absolute inset-x-0 top-0 bg-neutral-900 border-b border-white/5 px-2 py-0.5 text-[6px] font-mono text-gray-500 uppercase tracking-widest text-left">unstructured.pdf</div>

                    <div className="flex flex-col gap-1.5 mt-3.5 text-left">
                      <div className="w-[85%] h-1 bg-white/10 rounded" />
                      <div className="w-[50%] h-1 bg-white/10 rounded" />

                      {/* Target field 1: Price */}
                      <div className={`w-[95%] h-3.5 rounded flex items-center justify-between px-1.5 transition-colors duration-300 ${progress >= 30 ? 'bg-[#FF3B00]/15 border border-[#FF3B00]/30' : 'bg-white/5 border border-transparent'}`}>
                        <span className="text-[5.5px] font-mono text-gray-400">Total:</span>
                        <span className={`text-[5.5px] font-mono font-bold ${progress >= 30 ? 'text-[#FF3B00]' : 'text-gray-500'}`}>$28,450.00</span>
                      </div>

                      <div className="w-[40%] h-1 bg-white/10 rounded" />

                      {/* Target field 2: SLA rules */}
                      <div className={`w-[95%] h-3.5 rounded flex items-center justify-between px-1.5 transition-colors duration-300 ${progress >= 60 ? 'bg-emerald-500/15 border border-emerald-500/30' : 'bg-white/5 border border-transparent'}`}>
                        <span className="text-[5.5px] font-mono text-gray-400">Rules:</span>
                        <span className={`text-[5.5px] font-mono font-bold ${progress >= 60 ? 'text-emerald-400' : 'text-gray-500'}`}>SLA Pass</span>
                      </div>

                      <div className="w-[75%] h-1 bg-white/10 rounded" />
                    </div>

                    {/* Y-animated horizontal scan laser line */}
                    <motion.div
                      animate={{ y: [0, 110, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-[1.5px] bg-[#FF3B00] shadow-[0_0_6px_#FF3B00] z-20 pointer-events-none"
                      style={{ top: '15px' }}
                    />
                  </div>

                  {/* Middle Column: SVG connector lines */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
                      {/* Path 1: From left target field 1 to right database field 1 */}
                      <path
                        d="M 125 52 C 150 52, 150 48, 175 48"
                        fill="none"
                        stroke={progress >= 30 ? "#FF3B00" : "#1f1f2e"}
                        strokeWidth="1.2"
                        className="transition-colors duration-500"
                      />
                      {progress >= 30 && progress < 70 && (
                        <motion.circle
                          r="1.5"
                          fill="#FF3B00"
                          animate={{
                            cx: [125, 140, 160, 175],
                            cy: [52, 52, 48, 48]
                          }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      {/* Path 2: From left target field 2 to right database field 2 */}
                      <path
                        d="M 125 96 C 150 96, 150 80, 175 80"
                        fill="none"
                        stroke={progress >= 60 ? "#10b981" : "#1f1f2e"}
                        strokeWidth="1.2"
                        className="transition-colors duration-500"
                      />
                      {progress >= 60 && progress < 90 && (
                        <motion.circle
                          r="1.5"
                          fill="#10b981"
                          animate={{
                            cx: [125, 140, 160, 175],
                            cy: [96, 96, 80, 80]
                          }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </svg>
                  </div>

                  {/* Right Column: Structured JSON database schema */}
                  <div className="w-[45%] bg-[#0a0a0f] border border-white/5 rounded-lg p-2.5 flex flex-col gap-2 h-[135px] z-10 justify-between text-left font-mono text-[7.5px] select-text">
                    <div className="text-[6px] font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-1">structured_output.json</div>

                    <div className="flex-1 flex flex-col justify-center gap-1.5">
                      <div>
                        <span className="text-[#FF3B00]">"value":</span>
                        <span className={`ml-1 transition-colors duration-300 ${progress >= 30 ? 'text-white font-bold' : 'text-gray-600'}`}>
                          {progress >= 30 ? '"$28,450.00"' : 'null'}
                        </span>
                      </div>
                      <div>
                        <span className="text-blue-400">"status":</span>
                        <span className={`ml-1 transition-colors duration-300 ${progress >= 60 ? 'text-emerald-400 font-bold' : 'text-gray-600'}`}>
                          {progress >= 60 ? '"compliant"' : 'null'}
                        </span>
                      </div>
                      <div>
                        <span className="text-purple-400">"rules":</span>
                        <span className={`ml-1 transition-colors duration-300 ${progress >= 90 ? 'text-purple-400 font-bold' : 'text-gray-600'}`}>
                          {progress >= 90 ? '["dehumidifier_cap"]' : 'null'}
                        </span>
                      </div>
                    </div>

                    <div className="text-[6px] text-gray-500 border-t border-white/5 pt-1 flex justify-between select-none">
                      <span>Index: 47</span>
                      <span className="text-emerald-400 font-bold">✓ Parsed</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex flex-col justify-center"
            >
              {/* Outer card container with premium orange/purple glowing borders */}
              <div className="relative rounded-2xl border border-[#FF3B00]/25 bg-[#06060a]/90 p-5 shadow-[0_0_40px_rgba(255,59,0,0.08)] overflow-hidden flex flex-col md:flex-row gap-6 items-center">
                
                {/* Subtle internal glowing spots */}
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                
                {/* LEFT SIDE: Document Circle Checkmark */}
                <div className="flex-shrink-0 relative flex items-center justify-center w-32 h-32">
                  {/* Glowing orange/yellow background blob */}
                  <div className="absolute inset-2 rounded-full bg-orange-500/[0.04] blur-md" />
                  
                  {/* Outer orange track with gap */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#FF3B00" 
                      strokeWidth="2.5" 
                      fill="transparent" 
                      strokeDasharray="200 50"
                      className="opacity-90"
                      style={{ filter: 'drop-shadow(0 0 4px rgba(255,59,0,0.7))' }}
                    />
                  </svg>
                  
                  {/* Floating sparkles */}
                  <div className="absolute top-2 right-3 text-orange-400">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>

                  {/* Sleek glass document sheet */}
                  <div className="relative w-14 h-18 rounded-lg bg-neutral-900/90 border border-white/10 flex flex-col justify-between p-3 shadow-2xl">
                    <div className="w-8 h-1 bg-gray-500 rounded" />
                    <div className="w-10 h-1 bg-gray-600 rounded" />
                    <div className="w-6 h-1 bg-gray-600 rounded" />
                    
                    {/* Orange fold on the document top-right corner */}
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-orange-500/30 rounded-bl" />
                  </div>

                  {/* Bright orange checkmark badge at bottom right */}
                  <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-[#FF3B00] border-2 border-[#06060a] flex items-center justify-center text-white shadow-[0_4px_15px_rgba(255,59,0,0.5)]">
                    <Check className="w-4 h-4" strokeWidth={4} />
                  </div>
                </div>

                {/* Vertical Divider line */}
                <div className="hidden md:block w-[1px] self-stretch bg-gradient-to-b from-white/5 via-white/10 to-white/5 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-1.5px] w-[4px] h-[4px] rounded-full bg-orange-500 shadow-[0_0_6px_#FF3B00]" />
                </div>

                {/* RIGHT SIDE: Metrics & Successful label */}
                <div className="flex-1 flex flex-col justify-between gap-4 text-left w-full">
                  
                  {/* Top row of four small stats cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    
                    {/* Stat 1: Line Items */}
                    <div className="bg-[#08080c]/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-lg hover:border-purple-500/25 transition-all duration-300">
                      <div className="text-purple-400 mb-1 bg-purple-500/10 p-1.5 rounded-lg">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-sm font-extrabold text-white leading-none">156</div>
                      <div className="text-[7.5px] text-gray-500 font-mono mt-1 uppercase tracking-wider">Line Items</div>
                    </div>

                    {/* Stat 2: Total Amount */}
                    <div className="bg-[#08080c]/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-lg hover:border-orange-500/25 transition-all duration-300">
                      <div className="text-orange-400 mb-1 bg-orange-500/10 p-1.5 rounded-lg">
                        <Coins className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-sm font-extrabold text-white leading-none">$128,750</div>
                      <div className="text-[7.5px] text-gray-500 font-mono mt-1 uppercase tracking-wider">Total Amount</div>
                    </div>

                    {/* Stat 3: Materials */}
                    <div className="bg-[#08080c]/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-lg hover:border-pink-500/25 transition-all duration-300">
                      <div className="text-pink-400 mb-1 bg-pink-500/10 p-1.5 rounded-lg">
                        <Package className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-sm font-extrabold text-white leading-none">46</div>
                      <div className="text-[7.5px] text-gray-500 font-mono mt-1 uppercase tracking-wider">Materials</div>
                    </div>

                    {/* Stat 4: Labor */}
                    <div className="bg-[#08080c]/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-lg hover:border-blue-500/25 transition-all duration-300">
                      <div className="text-blue-400 mb-1 bg-blue-500/10 p-1.5 rounded-lg">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-sm font-extrabold text-white leading-none">$63,680</div>
                      <div className="text-[7.5px] text-gray-500 font-mono mt-1 uppercase tracking-wider">Labor</div>
                    </div>

                  </div>

                  {/* Bottom Success label and custom line decoration */}
                  <div className="flex flex-col gap-1.5">
                    <div>
                      <div className="text-base sm:text-lg font-bold tracking-tight text-white leading-none">
                        Document Parsed
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#FF3B00] tracking-wide leading-tight mt-0.5">
                        Successfully
                      </div>
                    </div>

                    {/* Glowing orange timeline line decoration */}
                    <div className="relative w-full h-[1px] bg-white/5 mt-1">
                      {/* Glowing orange line */}
                      <div className="absolute top-0 left-0 w-[45%] h-[1.5px] bg-[#FF3B00]" />
                      {/* Glowing orange dot */}
                      <div className="absolute top-[-2px] left-[45%] w-[5px] h-[5px] rounded-full bg-[#FF3B00] shadow-[0_0_8px_#FF3B00]" />
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-500">
          <div>EXTRACTOR: <span className="text-gray-300">BigLogicAI OCR v2</span></div>
          <div>SPEED: <span className="text-orange-500 font-bold">0.8s / page</span></div>
        </div>
      </div>
    </div>
  );
};

// Mockup 2: Workflow Automation Graph Simulator
const WorkflowAutomationMockup = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    { label: "Site Voice Memo Uploaded", detail: "Audio Intake Active", icon: Volume2, color: "text-[#FF3B00]" },
    { label: "Meeting Summary drafted", detail: "12 tasks extracted", icon: FileText, color: "text-blue-400" },
    { label: "Draw Schedule generated", detail: "4 milestones set", icon: Clock, color: "text-purple-400" },
    { label: "Material List extracted", detail: "Drywall, primer, studs", icon: Sparkles, color: "text-emerald-400" }
  ];

  return (
    <div className="showcase-inner-mockup rounded-2xl overflow-hidden shadow-2xl p-5 min-h-[300px] flex flex-col font-sans relative justify-between">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.01] to-transparent pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 select-none shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-mono text-gray-400">workflow-runner // automation-hub</span>
        </div>
        <span className="text-[8px] font-mono text-blue-400 bg-blue-400/5 px-2 py-0.5 rounded border border-blue-400/10 uppercase tracking-widest font-bold">Autopilot</span>
      </div>

      {/* Workflow nodes */}
      <div className="flex-1 flex flex-col justify-center gap-3.5 py-1">
        {nodes.map((node, index) => {
          const isActive = activeNode === index;
          const isPassed = activeNode > index;
          const Icon = node.icon;

          return (
            <div key={index} className="flex items-center gap-3 relative">
              {/* Connector line */}
              {index < nodes.length - 1 && (
                <div className={`absolute left-5 top-10 w-[1px] h-6 -z-10 ${isPassed ? 'bg-blue-500' : 'bg-neutral-800'
                  } transition-colors duration-500`} />
              )}

              {/* Node Circle */}
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-500 ${isActive
                ? 'border-blue-500 bg-blue-500/10 text-blue-400 scale-105 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                : isPassed
                  ? 'border-emerald-500/40 bg-emerald-500/5 text-emerald-400'
                  : 'border-white/5 bg-neutral-950 text-gray-600'
                }`}>
                {isPassed ? <Check className="w-4.5 h-4.5 text-emerald-400" /> : <Icon className="w-4.5 h-4.5" />}
              </div>

              {/* Node Details */}
              <div className="flex-1 text-left min-w-0">
                <div className={`text-xs font-semibold ${isActive ? 'text-blue-400' : isPassed ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>
                  {node.label}
                </div>
                <div className="text-[10px] font-mono text-gray-500 mt-0.5 truncate">
                  {isActive ? "Executing intelligent task..." : node.detail}
                </div>
              </div>

              {/* Status Badge */}
              {isActive && (
                <div className="text-[8px] font-mono font-bold text-blue-400 bg-blue-400/5 border border-blue-400/15 px-2 py-0.5 rounded animate-pulse select-none shrink-0">
                  RUNNING
                </div>
              )}
              {isPassed && (
                <div className="text-[8px] font-mono font-bold text-emerald-400 bg-emerald-400/5 border border-emerald-400/15 px-2 py-0.5 rounded select-none shrink-0">
                  DONE ✓
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-500">
        <div>PIPELINE: <span className="text-gray-300">Reconstruction Draw Schedule Gen</span></div>
        <div>TRIGGERS: <span className="text-blue-400 font-bold">Audio, PDF, Webhook</span></div>
      </div>
    </div>
  );
};

// Mockup 3: Smart Job Management Tracker
const JobManagementMockup = () => {
  return (
    <div className="showcase-inner-mockup rounded-2xl overflow-hidden shadow-2xl p-5 min-h-[300px] flex flex-col font-sans relative justify-between">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.01] to-transparent pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 select-none shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-gray-400">job-dashboard // active-projects</span>
        </div>
        <span className="text-[8px] font-mono text-emerald-400 bg-emerald-400/5 px-2 py-0.5 rounded border border-emerald-400/10 uppercase tracking-widest font-bold">452 Maple Ave</span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-3">

        {/* Real-time P&L Panel */}
        <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3 text-left">
          <div className="text-[8px] font-mono text-gray-500 uppercase mb-2 tracking-wider flex items-center justify-between">
            <span>REAL-TIME FINANCIAL P&L</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/25 px-1.5 py-0.5 rounded text-[8px]">42.4% Profit Margin</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="text-[8px] text-gray-500 font-mono">EST. REVENUE</span>
              <div className="text-sm font-bold text-white mt-0.5">$38,400</div>
            </div>
            <div>
              <span className="text-[8px] text-gray-500 font-mono">DIRECT COSTS</span>
              <div className="text-sm font-bold text-[#FF3B00] mt-0.5">$22,100</div>
            </div>
            <div>
              <span className="text-[8px] text-gray-500 font-mono">GROSS PROFIT</span>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">$16,300</div>
            </div>
          </div>
        </div>

        {/* Milestone tracking progress */}
        <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3 text-left">
          <div className="text-[8px] font-mono text-gray-500 uppercase mb-2 tracking-wider">MILESTONE PROGRESS</div>

          <div className="space-y-2">
            {[
              { name: "Mitigation & Dryout", status: "Completed", progress: 100, color: "bg-emerald-500" },
              { name: "SOP Reconstruction Phase", status: "In Progress", progress: 45, color: "bg-blue-500" },
              { name: "Carrier Final Inspection", status: "Scheduled", progress: 0, color: "bg-neutral-800" }
            ].map((milestone, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-gray-300 font-semibold">{milestone.name}</span>
                  <span className={milestone.progress === 100 ? "text-emerald-400 font-semibold" : milestone.progress > 0 ? "text-blue-400 animate-pulse font-semibold" : "text-gray-600 font-medium"}>{milestone.status}</span>
                </div>
                <div className="w-full bg-neutral-950 h-1 rounded-full overflow-hidden">
                  <div className={`h-full ${milestone.color} rounded-full`} style={{ width: `${milestone.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-500 select-none shrink-0">
        <div>FIELD CREW: <span className="text-gray-300">Alpha Restoration Team</span></div>
        <div>COORDINATION: <span className="text-emerald-400 font-bold">SMS Dispatch Active</span></div>
      </div>
    </div>
  );
};

// Mockup 4: Company Brain Chatbot and Wave Voice assistant
const CompanyBrainMockup = () => {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="showcase-inner-mockup rounded-2xl overflow-hidden shadow-2xl p-5 min-h-[300px] flex flex-col font-sans relative justify-between">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.01] to-transparent pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 select-none shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-[10px] font-mono text-gray-400">company-brain // ai-knowledge</span>
        </div>
        <span className="text-[8px] font-mono text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 uppercase tracking-widest font-bold">24/7 SOP Copilot</span>
      </div>

      {/* Main chat UI */}
      <div className="flex-1 flex flex-col justify-center gap-3">
        {/* User Search Query */}
        <div className="bg-white text-neutral-950 px-3 py-2 rounded-xl rounded-tr-none text-[10px] font-semibold text-left border border-neutral-100 flex items-start gap-2 shadow-lg self-end max-w-[90%]">
          <Search className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
          <span>"What is our SOP drying procedure for State Farm category 3 water damage?"</span>
        </div>

        {/* Brain Answer Card */}
        <div className="bg-purple-950/25 border border-purple-500/20 rounded-xl p-3 flex items-start gap-2.5 text-left max-w-[95%]">
          <div className="w-7 h-7 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[9px] font-mono text-purple-400 font-bold uppercase tracking-wider">BigLogicAI Answer</div>
            <p className="text-[10px] text-gray-300 mt-1 leading-relaxed">
              Based on standard <span className="text-white font-semibold">SOP-Restoration-03</span>:
            </p>
            <ul className="text-[9.5px] text-gray-400 mt-1 list-decimal list-inside space-y-0.5">
              <li>Deploy dehumidifiers for exactly <span className="text-white font-semibold">72 hours (3 days)</span>.</li>
              <li>Log daily relative humidity and GPP in the Moisture Journal.</li>
              <li>Extract structural standing water before placing equipment.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Voice Interaction Pulsing Visualizer */}
      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-500 select-none shrink-0">
        <div className="flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5 text-purple-400" />
          <span>VOICE ASSISTANT:</span>
          {/* Wave bars */}
          <div className="flex items-center gap-0.5 h-3.5">
            {[1.2, 2.5, 1.8, 2.8, 1.5, 2.2, 1.0].map((h, i) => (
              <span
                key={i}
                className="w-[1.5px] bg-purple-400 rounded-full transition-all duration-300"
                style={{
                  height: pulse ? `${h * 4}px` : `${h * 1.5}px`
                }}
              />
            ))}
          </div>
        </div>
        <span className="text-purple-400 font-bold">READY</span>
      </div>
    </div>
  );
};

const TABS = [
  {
    id: 'doc-intelligence',
    label: 'AI Document Intelligence',
    icon: FileText,
    title: '🧠 AI Document Intelligence',
    description: 'Upload estimates, contracts, SOPs, and insurance files. BigLogicAI automatically reads, understands, organizes, and extracts important information in seconds.',
    features: [
      'Xactimate PDF parsing',
      'AI contract analysis',
      'Compliance validation',
      'Smart document search'
    ],
    color: 'text-orange-500',
    mockup: <DocIntelligenceMockup />
  },
  {
    id: 'workflow-automation',
    label: 'Workflow Automation',
    icon: Zap,
    title: '⚡ Workflow Automation',
    description: 'Automate repetitive reconstruction workflows using AI-powered processes.',
    features: [
      'Draw schedule generation',
      'Contract creation',
      'Meeting summaries',
      'Material extraction',
      'Task automation'
    ],
    color: 'text-blue-500',
    mockup: <WorkflowAutomationMockup />
  },
  {
    id: 'job-management',
    label: 'Smart Job Management',
    icon: Folder,
    title: '📁 Smart Job Management',
    description: 'Manage reconstruction projects, teams, budgets, and milestones from one centralized platform.',
    features: [
      'Real-time P&L',
      'Milestone tracking',
      'Team coordination',
      'Progress monitoring',
      'Financial visibility'
    ],
    color: 'text-emerald-500',
    mockup: <JobManagementMockup />
  },
  {
    id: 'company-brain',
    label: 'Company Brain',
    icon: Brain,
    title: '🤖 Company Brain',
    description: 'A centralized AI-powered knowledge system for your entire reconstruction business.',
    features: [
      'Search company knowledge',
      'AI-powered answers',
      'Voice interaction',
      'SOP management',
      'Instant information retrieval'
    ],
    color: 'text-purple-500',
    mockup: <CompanyBrainMockup />
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
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/[0.02] rounded-full blur-[120px] pointer-events-none" />

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
          className="w-full lg:w-[360px] rounded-3xl border border-[#FF3B00]/10 bg-gradient-to-br from-[#120805]/90 via-[#0a0706]/95 to-black p-2.5 lg:sticky lg:top-32 relative z-10 flex flex-col shadow-2xl overflow-hidden shadow-[0_0_40px_rgba(255,59,0,0.04)]"
        >
          {/* Subtle internal gradient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,59,0,0.03)_0%,transparent_60%)] pointer-events-none z-0" />

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
                    className={`absolute inset-0 bg-white/[0.02] border-l-2 rounded-2xl z-0 ${tab.id === 'doc-intelligence' ? 'border-[#FF3B00]' :
                      tab.id === 'workflow-automation' ? 'border-blue-500' :
                        tab.id === 'job-management' ? 'border-emerald-500' :
                          'border-purple-500'
                      }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <div className={`p-2.5 rounded-xl relative z-10 ${isActive ? (
                  tab.id === 'doc-intelligence' ? 'bg-[#FF3B00]/10 text-[#FF3B00] shadow-[0_0_15px_rgba(255,59,0,0.15)]' :
                    tab.id === 'workflow-automation' ? 'bg-blue-500/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]' :
                      tab.id === 'job-management' ? 'bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]' :
                        'bg-purple-500/10 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                ) : 'bg-white/5 text-gray-500 group-hover:text-gray-300 group-hover:bg-white/10'} transition-all duration-300`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[11px] sm:text-sm font-mono font-bold tracking-widest uppercase transition-colors relative z-10 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Right Side: Flowing Stacked Content */}
        <div className="flex-1 relative flex flex-col gap-12 w-full">
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
                className="w-full rounded-3xl p-6 sm:p-10 relative overflow-hidden group/card shadow-2xl transition-all duration-500 showcase-capability-card"
              >
                {/* Subtle top-left internal theme glow */}
                <div className={`absolute -left-20 -top-20 w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-20 transition-all duration-700 ${tab.id === 'doc-intelligence' ? 'bg-[#FF3B00]' :
                  tab.id === 'workflow-automation' ? 'bg-blue-500' :
                    tab.id === 'job-management' ? 'bg-emerald-500' :
                      'bg-purple-500'
                  }`} />

                {/* Subtle dynamic backdrop glow matching the theme */}
                <div className={`absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-25 group-hover/card:opacity-45 transition-all duration-700 group-hover/card:scale-125 ${tab.id === 'doc-intelligence' ? 'bg-[#FF3B00]' :
                  tab.id === 'workflow-automation' ? 'bg-blue-500' :
                    tab.id === 'job-management' ? 'bg-emerald-500' :
                      'bg-purple-500'
                  }`} />

                {/* Subtle internal grid decoration */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none z-0" />

                {/* Content Header area */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10 w-full relative z-10 text-left">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">
                      <tab.icon className={`w-4.5 h-4.5 ${tab.id === 'doc-intelligence' ? 'text-[#FF3B00]' :
                        tab.id === 'workflow-automation' ? 'text-blue-400' :
                          tab.id === 'job-management' ? 'text-emerald-400' :
                            'text-purple-400'
                        }`} />
                      {tab.label}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
                      {tab.title}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                      {tab.description}
                    </p>

                    {/* Extracted Features List */}
                    {tab.features && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mt-8">
                        {tab.features.map((feat, index) => (
                          <div key={index} className="flex items-center gap-3.5 text-sm sm:text-base text-gray-300 font-medium">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${tab.id === 'doc-intelligence' ? 'bg-[#FF3B00]/10 text-[#FF3B00]' :
                              tab.id === 'workflow-automation' ? 'bg-blue-500/10 text-blue-400' :
                                tab.id === 'job-management' ? 'bg-emerald-500/10 text-emerald-400' :
                                  'bg-purple-500/10 text-purple-400'
                              }`}>
                              <Check className="w-3 h-3" strokeWidth={3.5} />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
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