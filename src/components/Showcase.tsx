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
  User,
  Mail,
  Image as ImageIcon,
  Receipt,
  Shield,
  Download,
  FileSpreadsheet,
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DocIntelligenceMockup = ({
  step,
  setStep,
  progress,
  setProgress
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}) => {

  useEffect(() => {
    if (step === 0) {
      const t = setTimeout(() => {
        setProgress(0);
        setStep(1);
      }, 5000);
      return () => clearTimeout(t);
    }
    if (step === 2) {
      const t = setTimeout(() => {
        setStep(3);
      }, 2000);
      return () => clearTimeout(t);
    }
    if (step === 3) {
      const t = setTimeout(() => {
        setStep(0);
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [step]);

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
      </div>
    </div>
  );
};// Mockup 4: AI Document Intelligence full pipeline visualizer dashboard (matches user mockup image with 100% high-fidelity accuracy)
const PipelineDashboardOverlay = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute inset-0 z-50 flex flex-col p-6 sm:p-10 rounded-3xl border font-sans text-left overflow-y-auto transition-all duration-500 ${isDark ? 'bg-[#040406]/98 border-[#FF3B00]/25 shadow-[0_0_60px_rgba(255,59,0,0.12)] text-white' : 'bg-[#FCFCFD]/99 backdrop-blur-md border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-slate-800'}`}
    >
      
      {/* Mesh Glow Background */}
      <div className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 ${isDark ? 'bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.04)_0%,transparent_70%)]' : 'bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.06)_0%,transparent_70%)]'}`} />

      {/* Theme Toggle Button */}
      <div className={`absolute top-6 right-6 z-30 flex items-center rounded-full p-1 text-[10px] font-mono font-black tracking-widest border transition-all duration-300 ${isDark ? 'bg-neutral-950/80 border-white/10 text-white' : 'bg-slate-100/90 border-slate-200 text-slate-800'}`}>
        <button
          onClick={() => setTheme('light')}
          className={`px-3 py-1 rounded-full transition-all duration-300 uppercase ${!isDark ? 'bg-white text-[#FF3B00] shadow-[0_2px_8px_rgba(0,0,0,0.08)]' : 'text-gray-500 hover:text-gray-300'}`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`px-3 py-1 rounded-full transition-all duration-300 uppercase ${isDark ? 'bg-[#FF3B00] text-white shadow-[0_2px_8px_rgba(255,59,0,0.3)]' : 'text-slate-500 hover:text-slate-705'}`}
        >
          Dark
        </button>
      </div>

      {/* Title Header Section */}
      <div className="text-center mb-6 select-none relative z-10">
        <h3 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center gap-2.5 leading-none">
          AI Document Intelligence <span className={isDark ? 'text-amber-400 text-sm animate-pulse' : 'text-orange-500 text-sm animate-pulse'}>✦✦</span>
        </h3>
        
        {/* Subtitle centered between orange thin lines */}
        <div className={`flex items-center justify-center gap-4 mt-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-800'}`}>
          <div className="w-12 h-[1px] bg-[#FF3B00]/40" />
          <p className="text-[10px] font-extrabold tracking-[0.25em] uppercase leading-none">
            Understand. Extract. Validate. Automate.
          </p>
          <div className="w-12 h-[1px] bg-[#FF3B00]/40" />
        </div>
        
        <p className={`text-[9.5px] mt-2 leading-relaxed font-semibold transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
          Transform unstructured documents into intelligent data and automated workflows.
        </p>
      </div>

      {/* 3-Column Core Grid */}
      <div className="flex-1 grid grid-cols-12 gap-5 items-center min-h-0 relative z-10">

        {/* Left Column: DOCUMENT INPUTS */}
        <div className={`col-span-3 flex flex-col gap-2 h-full justify-between py-2 rounded-2xl p-3.5 shadow-2xl relative transition-all duration-500 ${isDark ? 'bg-black/45 border-white/5' : 'bg-slate-50/90 border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)]'}`}>
          <div>
            <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none">Document Inputs</div>
            <div className={`text-[7.5px] font-mono mt-1 uppercase font-bold tracking-wider transition-colors duration-500 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>From anywhere. Any format.</div>
          </div>
          
          <div className={`flex flex-col gap-1.5 text-[8.5px] transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            {[
              { label: 'PDF Documents', icon: FileText, color: 'text-red-400 bg-red-500/10 border-red-500/20', colorLight: 'text-red-600 bg-red-500/5 border-red-200/60 hover:bg-red-500/10' },
              { label: 'Images / Scans', icon: ImageIcon, color: 'text-orange-400 bg-orange-500/10 border-orange-500/20', colorLight: 'text-orange-600 bg-orange-500/5 border-orange-200/60 hover:bg-orange-500/10' },
              { label: 'Word Files', icon: FileText, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20', colorLight: 'text-blue-600 bg-blue-500/5 border-blue-200/60 hover:bg-blue-500/10' },
              { label: 'Excel Files', icon: FileSpreadsheet, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', colorLight: 'text-emerald-600 bg-emerald-500/5 border-emerald-200/60 hover:bg-emerald-500/10' },
              { label: 'Emails', icon: Mail, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20', colorLight: 'text-purple-600 bg-purple-500/5 border-purple-200/60 hover:bg-purple-500/10' },
              { label: 'Invoices', icon: Receipt, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20', colorLight: 'text-amber-600 bg-amber-500/5 border-amber-200/60 hover:bg-amber-500/10' },
              { label: 'Contracts', icon: FileText, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20', colorLight: 'text-indigo-600 bg-indigo-500/5 border-indigo-200/60 hover:bg-indigo-500/10' },
              { label: 'Forms', icon: FileText, color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20', colorLight: 'text-yellow-600 bg-yellow-500/5 border-yellow-200/60 hover:bg-yellow-500/10' }
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className={`px-2.5 py-1.5 rounded-xl border flex items-center gap-2 font-bold leading-none shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isDark ? item.color : item.colorLight}`}>
                  <ItemIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </div>
              );
            })}
            
            {/* ... And More button to match image */}
            <div className={`px-2.5 py-1.5 rounded-xl border flex items-center gap-2 font-bold leading-none shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isDark ? 'border-white/5 bg-neutral-900/50 text-gray-400' : 'border-slate-200 bg-white text-slate-500'}`}>
              <span className="text-[10px] tracking-widest font-black">•••</span>
              <span>And More...</span>
            </div>
          </div>
        </div>

        {/* Center Column: Animated Central Processing Circle */}
        <div className="col-span-6 flex flex-col items-center justify-between h-full py-2 relative">
          
          {/* Top workflow steps (OCR, Extract, Understand, Validate, Classify) */}
          <div className="flex justify-between w-full px-1.5 gap-2 select-none relative z-10">
            {[
              { label: 'OCR Recognition', icon: Eye },
              { label: 'Data Extraction', icon: Download },
              { label: 'AI Understanding', icon: Brain },
              { label: 'Data Validation', icon: Shield },
              { label: 'Smart Classification', icon: Folder }
            ].map((proc, idx) => {
              const ProcIcon = proc.icon;
              return (
                <div key={idx} className="flex flex-col items-center group cursor-pointer">
                  <div className={`w-7 h-7 rounded-xl border flex items-center justify-center text-orange-400 group-hover:text-amber-300 transition-all duration-300 ${isDark ? 'border-orange-500/25 bg-[#0d0d14] shadow-[0_0_10px_rgba(255,59,0,0.1)]' : 'border-orange-200 bg-white shadow-sm'}`}>
                    <ProcIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[6.5px] font-extrabold font-mono mt-1.5 leading-none max-w-[50px] text-center transition-colors duration-500 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>{proc.label}</span>
                </div>
              );
            })}
          </div>

          {/* Central Animated circle with Document icon & Fiber-Optic glowing wave connections */}
          <div className="relative w-36 h-36 flex items-center justify-center select-none my-3 shrink-0 z-10">
            {/* Pulsing ring glows */}
            <div className="absolute inset-0 rounded-full border border-orange-500/15 animate-ping opacity-35" />
            <div className="absolute inset-2 rounded-full border border-orange-500/25 animate-pulse" />
            <div className={`absolute inset-4 rounded-full pointer-events-none transition-all duration-500 ${isDark ? 'bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.06)_0%,transparent_70%)]' : 'bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.1)_0%,transparent_70%)]'}`} />

            {/* Glowing electrical path svg representation */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" stroke={isDark ? "url(#orangeGlowPathCardDark)" : "url(#orangeGlowPathCardLight)"} strokeWidth="1.5" strokeDasharray="40 50" fill="transparent" />
              <defs>
                <linearGradient id="orangeGlowPathCardDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF3B00" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="orangeGlowPathCardLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF3B00" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>

            {/* Document sheet inside the glowing circle */}
            <div className={`relative w-14 h-18 rounded-xl flex flex-col justify-between p-3.5 shadow-2xl transition-all duration-500 ${isDark ? 'bg-neutral-900 border border-white/10' : 'bg-white border border-slate-200/80 shadow-lg'}`}>
              <div className={`w-6 h-0.5 rounded ${isDark ? 'bg-gray-500' : 'bg-slate-300'}`} />
              <div className={`w-8 h-0.5 rounded ${isDark ? 'bg-gray-600' : 'bg-slate-400'}`} />
              <div className={`w-5 h-0.5 rounded ${isDark ? 'bg-gray-600' : 'bg-slate-400'}`} />
              {/* Orange AI stamp */}
              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-orange-500 text-[7px] font-black text-white scale-95 origin-bottom-right leading-none">
                AI
              </div>
            </div>
          </div>

          {/* Bottom Pill */}
          <div className={`px-4 py-1.5 rounded-full border text-[9px] font-bold text-center tracking-wider select-none relative z-10 transition-all duration-500 ${isDark ? 'border-[#FF3B00]/30 bg-orange-500/5 text-gray-300 shadow-[0_0_12px_rgba(255,59,0,0.05)]' : 'border-orange-200 bg-orange-50/50 text-slate-700 shadow-sm'}`}>
            Intelligent Data. <span className="text-orange-500 font-extrabold animate-pulse">Actionable Results.</span>
          </div>

          {/* Glowing wire waves represented in background SVG */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
              {/* Left streams converging */}
              <path d="M 20 60 C 80 60, 80 100, 110 100" fill="none" stroke="#FF3B00" strokeWidth="1.2" className={`transition-opacity duration-500 ${isDark ? 'opacity-[0.25]' : 'opacity-[0.35]'}`} />
              <path d="M 20 100 C 80 100, 80 100, 110 100" fill="none" stroke="#FF3B00" strokeWidth="1.5" className={`transition-opacity duration-500 ${isDark ? 'opacity-[0.3]' : 'opacity-[0.4]'}`} />
              <path d="M 20 140 C 80 140, 80 100, 110 100" fill="none" stroke="#FF3B00" strokeWidth="1.2" className={`transition-opacity duration-500 ${isDark ? 'opacity-[0.25]' : 'opacity-[0.35]'}`} />
              
              {/* Right streams diverging */}
              <path d="M 190 100 C 220 100, 220 60, 280 60" fill="none" stroke="#FF3B00" strokeWidth="1.2" className={`transition-opacity duration-500 ${isDark ? 'opacity-[0.25]' : 'opacity-[0.35]'}`} />
              <path d="M 190 100 C 220 100, 220 100, 280 100" fill="none" stroke="#FF3B00" strokeWidth="1.5" className={`transition-opacity duration-500 ${isDark ? 'opacity-[0.3]' : 'opacity-[0.4]'}`} />
              <path d="M 190 100 C 220 100, 220 140, 280 140" fill="none" stroke="#FF3B00" strokeWidth="1.2" className={`transition-opacity duration-500 ${isDark ? 'opacity-[0.25]' : 'opacity-[0.35]'}`} />
            </svg>
          </div>

        </div>

        {/* Right Column: EXTRACTED INSIGHTS */}
        <div className={`col-span-3 flex flex-col gap-2.5 h-full justify-between py-2 rounded-2xl p-3.5 shadow-2xl relative transition-all duration-500 ${isDark ? 'bg-black/45 border-white/5' : 'bg-slate-50/90 border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)]'}`}>
          <div>
            <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none">Extracted Insights</div>
            <div className={`text-[7.5px] font-mono mt-1 uppercase font-bold tracking-wider transition-colors duration-500 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>Structured. Accurate. Ready to use.</div>
          </div>
          
          <div className="flex flex-col gap-1.5 text-[8px]">
            {[
              { key: 'Invoice Number', val: 'INV-2024-0429', icon: FileText, color: 'text-purple-400 bg-purple-500/10 border-purple-500/25', colorLight: 'text-purple-600 bg-purple-500/5 border-purple-200/60 hover:bg-purple-500/10' },
              { key: 'Total Amount', val: '$2,200.00', icon: Coins, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25', colorLight: 'text-orange-600 bg-orange-500/5 border-orange-200/60 hover:bg-orange-500/10' },
              { key: 'Invoice Date', val: 'May 20, 2024', icon: Clock, color: 'text-blue-400 bg-blue-500/10 border-blue-500/25', colorLight: 'text-blue-600 bg-blue-500/5 border-blue-200/60 hover:bg-blue-500/10' },
              { key: 'Vendor Name', val: 'ABC Restoration', icon: User, color: 'text-pink-400 bg-pink-500/10 border-pink-500/25', colorLight: 'text-pink-600 bg-pink-500/5 border-pink-200/60 hover:bg-pink-500/10' },
              { key: 'Due Date', val: 'June 20, 2024', icon: Clock, color: 'text-amber-400 bg-amber-500/10 border-amber-500/25', colorLight: 'text-amber-600 bg-amber-500/5 border-amber-200/60 hover:bg-amber-500/10' },
              { key: 'PO Number', val: 'PO-5587', icon: Package, color: 'text-indigo-400 bg-[#FF3B00]/10 border-indigo-500/25', colorLight: 'text-indigo-600 bg-indigo-500/5 border-indigo-200/60 hover:bg-indigo-500/10' }
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className={`border rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isDark ? 'bg-neutral-950/80 border-white/5' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`p-1.5 rounded-lg border shrink-0 ${isDark ? item.color : item.colorLight}`}>
                      <ItemIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 text-left">
                      <div className={`text-[6.5px] font-black uppercase leading-none tracking-wider transition-colors duration-500 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>{item.key}</div>
                      <div className={`text-[8.5px] font-extrabold leading-none mt-1 truncate max-w-[85px] transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.val}</div>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_6px_rgba(16,185,129,0.15)] ${isDark ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-400' : 'bg-emerald-500/5 border border-emerald-500/30 text-emerald-600'}`}>
                    <Check className="w-2.5 h-2.5 font-bold" strokeWidth={4} />
                  </div>
                </div>
              );
            })}
          </div>

          <button className={`w-full py-2 rounded-xl border font-extrabold text-[8px] tracking-widest uppercase shadow-md flex items-center justify-center gap-1.5 select-none transition-all duration-300 cursor-pointer ${isDark ? 'border-orange-500/35 bg-orange-500/5 hover:bg-orange-500 hover:text-black text-orange-400' : 'border-[#FF3B00] bg-[#FF3B00] text-white hover:bg-orange-600 hover:border-orange-600 shadow-sm'}`}>
            <Download className="w-3.5 h-3.5" />
            <span>Export Data</span>
          </button>
        </div>

      </div>

      {/* Bottom Highlights Row */}
      <div className={`grid grid-cols-5 gap-3 border-t pt-4 mt-3 select-none transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-slate-200/80'}`}>
        {[
          { title: 'Extract Data Instantly', desc: 'Capture data from any document in seconds.', icon: Zap, color: 'text-orange-400 bg-orange-500/10 border-orange-500/20', colorLight: 'text-orange-600 bg-orange-500/5 border-orange-200/60' },
          { title: 'Reduce Manual Work', desc: 'Eliminate repetitive tasks and human errors.', icon: User, color: 'text-pink-400 bg-pink-500/10 border-pink-500/20', colorLight: 'text-pink-600 bg-pink-500/5 border-pink-200/60' },
          { title: 'Improve Accuracy & Compliance', desc: 'Ensure data is accurate, consistent and audit-ready.', icon: Shield, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20', colorLight: 'text-blue-600 bg-blue-500/5 border-blue-200/60' },
          { title: 'Save Time & Costs', desc: 'Automate workflows and boost team productivity.', icon: Clock, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20', colorLight: 'text-purple-600 bg-purple-500/5 border-purple-200/60' },
          { title: 'Make Smarter Decisions', desc: 'Get actionable insights from your data.', icon: Brain, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', colorLight: 'text-emerald-600 bg-emerald-500/5 border-emerald-200/60' }
        ].map((hl, idx) => {
          const HlIcon = hl.icon;
          return (
            <div key={idx} className={`border rounded-xl p-2.5 flex flex-col gap-1 text-left transition-all duration-500 ${isDark ? 'bg-neutral-950/40 border-white/5' : 'bg-slate-50 border-slate-200/80 shadow-sm'}`}>
              <div className="flex items-center gap-1.5">
                <div className={`p-1 rounded border shrink-0 ${isDark ? hl.color : hl.colorLight}`}>
                  <HlIcon className="w-3.5 h-3.5" />
                </div>
                <div className={`text-[7.5px] font-bold uppercase tracking-wider leading-none transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-800'}`}>{hl.title}</div>
              </div>
              <p className={`text-[6.5px] leading-normal mt-1 transition-colors duration-500 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>{hl.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Footer Metrics / Compliance */}
      <div className={`border-t pt-3.5 mt-3 flex justify-between items-center text-[7.5px] font-mono select-none font-bold transition-all duration-500 ${isDark ? 'border-white/5 text-gray-500' : 'border-slate-200/80 text-slate-500'}`}>
        <div className="flex gap-4 uppercase tracking-wider items-center">
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#FF3B00]" /> SOC 2 Compliant</span>
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#FF3B00]" /> GDPR Compliant</span>
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#FF3B00]" /> HIPAA Ready</span>
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#FF3B00]" /> 256-bit Encryption</span>
        </div>
        <span className="text-[#FF3B00] font-extrabold uppercase tracking-widest flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00] animate-pulse" /> Secure. Reliable. Enterprise Ready.
        </span>
      </div>
    </motion.div>
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
    mockup: <div />
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
  const [docStep, setDocStep] = useState(0);
  const [docProgress, setDocProgress] = useState(0);

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
                  {tab.id === 'doc-intelligence' ? (
                    <DocIntelligenceMockup
                      step={docStep}
                      setStep={setDocStep}
                      progress={docProgress}
                      setProgress={setDocProgress}
                    />
                  ) : tab.mockup}
                </motion.div>

                {/* Full-Cover Pipeline Dashboard Overlay at Card level */}
                <AnimatePresence>
                  {tab.id === 'doc-intelligence' && docStep === 3 && (
                    <PipelineDashboardOverlay key="card-pipeline-dashboard" />
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Showcase;