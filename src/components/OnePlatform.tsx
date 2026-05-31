import { motion } from 'framer-motion';
import { 
  FileText, 
  Cpu, 
  Volume2, 
  Brain, 
  Shield, 
  ListTodo, 
  DollarSign, 
  Folder,
  Clock,
  TrendingUp,
  Rocket,
  ShieldAlert
} from 'lucide-react';

const MODULES = [
  {
    id: "doc-intelligence",
    icon: FileText,
    title: "AI DOCUMENT INTELLIGENCE",
    description: "Upload, read and understand estimates, contracts, SOPs and insurance documents instantly.",
    features: [
      "Xactimate PDF Parsing",
      "Contract Analysis",
      "Smart Document Search",
      "Compliance Validation"
    ],
    accent: "from-[#FF3B00]/15 to-transparent",
    gridPos: "lg:col-start-1 lg:row-start-1"
  },
  {
    id: "ai-automation",
    icon: Cpu,
    title: "AI AUTOMATION",
    description: "Automate repetitive reconstruction workflows and save hundreds of hours.",
    features: [
      "Draw Schedule Generator",
      "Contract Generation",
      "Material Extraction",
      "Meeting Summaries",
      "Workflow Automation"
    ],
    accent: "from-[#FF3B00]/15 to-transparent",
    gridPos: "lg:col-start-2 lg:row-start-1"
  },
  {
    id: "voice-action",
    icon: Volume2,
    title: "VOICE TO ACTION",
    description: "Turn conversations into clarity. AI records, transcribes and creates action items.",
    features: [
      "Audio Transcription",
      "Speaker Identification",
      "Meeting Summaries",
      "Action Items & Tasks",
      "Call & Site Meeting Logs"
    ],
    accent: "from-[#FF3B00]/15 to-transparent",
    gridPos: "lg:col-start-3 lg:row-start-1"
  },
  {
    id: "job-management",
    icon: Folder,
    title: "JOB MANAGEMENT",
    description: "Manage projects, teams, budgets and milestones in one central platform.",
    features: [
      "Project & Task Tracking",
      "Milestone Management",
      "Real-time Progress",
      "Team & Contractor Management",
      "Document & Photo Management",
      "Homeowner Portal"
    ],
    accent: "from-[#FF3B00]/15 to-transparent",
    gridPos: "lg:col-start-1 lg:row-start-2"
  },
  {
    id: "company-brain",
    icon: Brain,
    title: "COMPANY BRAIN",
    description: "Your centralized knowledge base. Search, ask and get answers from your company data.",
    features: [
      "Centralized Knowledge",
      "AI-Powered Search",
      "Ask Anything",
      "SOP & Policy Management",
      "Voice & Chat with Docs"
    ],
    accent: "from-[#FF3B00]/15 to-transparent",
    gridPos: "lg:col-start-3 lg:row-start-2"
  },
  {
    id: "financial-management",
    icon: DollarSign,
    title: "FINANCIAL MANAGEMENT",
    description: "Track financials in real-time and gain full control over your reconstruction business.",
    features: [
      "Real-time P&L",
      "Budget & Expense Tracking",
      "Invoice & Billing",
      "Draw Management",
      "Financial Reports"
    ],
    accent: "from-[#FF3B00]/15 to-transparent",
    gridPos: "lg:col-start-1 lg:row-start-3"
  },
  {
    id: "material-extraction",
    icon: ListTodo,
    title: "MATERIAL EXTRACTION",
    description: "Extract materials from estimates and generate organized Excel reports automatically.",
    features: [
      "Material Takeoff",
      "Category Breakdown",
      "Excel Export",
      "Accurate Quantities"
    ],
    accent: "from-[#FF3B00]/15 to-transparent",
    gridPos: "lg:col-start-2 lg:row-start-3"
  },
  {
    id: "compliance-qa",
    icon: Shield,
    title: "COMPLIANCE & QA VALIDATION",
    description: "AI validates documentation and ensures compliance with insurance requirements.",
    features: [
      "Insurance Compliance",
      "Document Validation",
      "Claim Rule Checks",
      "Reduce Rejections"
    ],
    accent: "from-[#FF3B00]/15 to-transparent",
    gridPos: "lg:col-start-3 lg:row-start-3"
  }
];

const HIGHLIGHTS = [
  {
    title: "SAVE TIME",
    description: "Automate repetitive tasks and save hundreds of hours.",
    icon: Clock
  },
  {
    title: "INCREASE PROFIT",
    description: "Reduce costs, improve accuracy and increase project profitability.",
    icon: TrendingUp
  },
  {
    title: "SCALE FASTER",
    description: "Handle more projects without adding more headcount.",
    icon: Rocket
  },
  {
    title: "REDUCE RISK",
    description: "Ensure compliance, reduce errors and avoid claim rejections.",
    icon: ShieldAlert
  }
];

export const OnePlatform = () => {
  return (
    <section id="one-platform" className="relative z-10 w-full bg-gradient-to-br from-[#9c84e2] via-[#C6B4F8] to-[#8269d0] py-24 overflow-hidden select-none">
      
      {/* Mesh Gradient Accent Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-45 z-0" />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 3x3 Connected Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">
          
          {/* SVG Connection Streams - Only displayed on desktop */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <style>{`
                @keyframes pulseGlow {
                  0%, 100% { opacity: 0.3; stroke-width: 1.2; }
                  50% { opacity: 0.7; stroke-width: 2.0; }
                }
                .conn-path {
                  stroke: #FF3B00;
                  stroke-dasharray: 4 4;
                  fill: none;
                  animation: pulseGlow 4s ease-in-out infinite;
                }
                .glow-node {
                  filter: drop-shadow(0 0 6px #FF3B00);
                }
              `}</style>
              
              {/* Top Row connections */}
              <line x1="16.6%" y1="16.6%" x2="50%" y2="50%" className="conn-path" />
              <line x1="50%" y1="16.6%" x2="50%" y2="50%" className="conn-path" />
              <line x1="83.3%" y1="16.6%" x2="50%" y2="50%" className="conn-path" />
              
              {/* Mid Row connections */}
              <line x1="16.6%" y1="50%" x2="50%" y2="50%" className="conn-path" />
              <line x1="83.3%" y1="50%" x2="50%" y2="50%" className="conn-path" />
              
              {/* Bottom Row connections */}
              <line x1="16.6%" y1="83.3%" x2="50%" y2="50%" className="conn-path" />
              <line x1="50%" y1="83.3%" x2="50%" y2="50%" className="conn-path" />
              <line x1="83.3%" y1="83.3%" x2="50%" y2="50%" className="conn-path" />

              {/* Glowing Dots at Card Ends */}
              <circle cx="16.6%" cy="16.6%" r="5" fill="#FF3B00" className="glow-node animate-pulse" />
              <circle cx="50%" cy="16.6%" r="5" fill="#FF3B00" className="glow-node animate-pulse" />
              <circle cx="83.3%" cy="16.6%" r="5" fill="#FF3B00" className="glow-node animate-pulse" />
              <circle cx="16.6%" cy="50%" r="5" fill="#FF3B00" className="glow-node animate-pulse" />
              <circle cx="83.3%" cy="50%" r="5" fill="#FF3B00" className="glow-node animate-pulse" />
              <circle cx="16.6%" cy="83.3%" r="5" fill="#FF3B00" className="glow-node animate-pulse" />
              <circle cx="50%" cy="83.3%" r="5" fill="#FF3B00" className="glow-node animate-pulse" />
              <circle cx="83.3%" cy="83.3%" r="5" fill="#FF3B00" className="glow-node animate-pulse" />

              {/* Glowing Dots at Central Hub Intersection */}
              <circle cx="44.4%" cy="44.4%" r="4" fill="#FF3B00" className="glow-node" />
              <circle cx="50%" cy="42%" r="4" fill="#FF3B00" className="glow-node" />
              <circle cx="55.6%" cy="44.4%" r="4" fill="#FF3B00" className="glow-node" />
              <circle cx="42%" cy="50%" r="4" fill="#FF3B00" className="glow-node" />
              <circle cx="58%" cy="50%" r="4" fill="#FF3B00" className="glow-node" />
              <circle cx="44.4%" cy="55.6%" r="4" fill="#FF3B00" className="glow-node" />
              <circle cx="50%" cy="58%" r="4" fill="#FF3B00" className="glow-node" />
              <circle cx="55.6%" cy="55.6%" r="4" fill="#FF3B00" className="glow-node" />
            </svg>
          </div>

          {/* Render all 8 modules inside their symmetric responsive cells */}
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.id}
                whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(255, 59, 0, 0.4)" }}
                className={`bg-[#08080c]/65 border border-white/10 rounded-3xl p-6.5 relative overflow-hidden backdrop-blur-3xl transition-all duration-500 group z-10 flex flex-col justify-between min-h-[320px] shadow-[0_15px_45px_rgba(0,0,0,0.35)] ${module.gridPos}`}
              >
                {/* Subtle radial card background glow */}
                <div className={`absolute -left-16 -top-16 w-32 h-32 rounded-full blur-[40px] opacity-[0.05] bg-[#FF3B00]/10 pointer-events-none`} />
                
                {/* Laser shine sweep on card hover */}
                <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-out pointer-events-none z-30" />

                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Glowing header icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#FF3B00]/15 to-transparent border border-[#FF3B00]/25 flex items-center justify-center text-[#FF3B00] shadow-[0_4px_12px_rgba(255,59,0,0.12)] relative group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                    <div className="absolute inset-0 rounded-2xl bg-[#FF3B00]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Centered, bold uppercase title */}
                  <h3 className="text-sm font-bold text-white tracking-wider uppercase leading-none">
                    {module.title}
                  </h3>

                  {/* Centered description text */}
                  <p className="text-gray-400 text-[11px] leading-relaxed max-w-[260px] font-sans">
                    {module.description}
                  </p>
                </div>

                {/* Features list bullet layout */}
                <div className="space-y-2.5 pt-4.5 mt-5 border-t border-white/5 w-full">
                  {module.features.map((feat, idx) => {
                    const isAiAutomation = module.id === "ai-automation";
                    return (
                      <div key={idx} className="flex items-center gap-2.5 text-[11px] text-gray-300">
                        {isAiAutomation ? (
                          /* Custom checkmark for AI Automation card */
                          <div className="w-3.5 h-3.5 rounded-full bg-[#FF3B00]/10 border border-[#FF3B00]/40 flex items-center justify-center text-[#FF3B00] shrink-0 shadow-[0_0_6px_rgba(255,59,0,0.1)]">
                            <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          /* Solid glowing orange dot for other cards */
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF3B00] shrink-0 shadow-[0_0_6px_#FF3B00]" />
                        )}
                        <span className="font-medium tracking-wide">{feat}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          {/* Central OS Hub Node - Beautifully centered on desktop, layered neatly on mobile */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-start-2 lg:row-start-2 flex items-center justify-center relative w-full h-full min-h-[260px] z-20 py-8 lg:py-0"
          >
            {/* Double outer pulse ring */}
            <div className="absolute w-[240px] h-[240px] rounded-full border border-[#FF3B00]/20 animate-ping opacity-30 blur-[1px] pointer-events-none" />
            <div className="absolute w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="w-[210px] h-[210px] rounded-full border border-[#FF3B00]/30 bg-black flex flex-col items-center justify-center p-5 shadow-[0_20px_50px_rgba(31,18,72,0.25)] border-t-[#FF3B00]/70 relative select-none">
              
              {/* Premium custom modern B logo */}
              <svg className="w-13 h-13 text-[#FF3B00] filter drop-shadow-[0_0_8px_rgba(255,59,0,0.7)] mb-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 24H58C67 24 73 29 73 37C73 44 67 48 58 48H32" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 48H62C71 48 77 53 77 62C77 71 71 76 62 76H32" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 20V80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>

              <h2 className="text-sm font-black uppercase text-white tracking-[0.2em] leading-none">
                BIGLOGIC<span className="text-[#FF3B00]">AI</span>
              </h2>

              <p className="text-[7.5px] font-mono font-bold tracking-widest text-gray-500 uppercase mt-3.5 text-center leading-normal max-w-[140px]">
                The Operating System for Reconstruction
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Horizontal highlights row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-24 border-t border-white/20 pt-12">
          {HIGHLIGHTS.map((hl, idx) => {
            const HlIcon = hl.icon;
            return (
              <div 
                key={idx}
                className="bg-[#08080c]/45 border border-white/10 rounded-2xl p-5 text-left flex items-start gap-4 hover:border-white/20 transition-colors duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FF3B00]/10 border border-[#FF3B00]/25 flex items-center justify-center text-[#FF3B00] shrink-0 shadow-[0_2px_8px_rgba(255,59,0,0.15)]">
                  <HlIcon className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-white uppercase tracking-wider">{hl.title}</div>
                  <p className="text-[10.5px] text-gray-400 leading-relaxed font-sans">{hl.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OnePlatform;



