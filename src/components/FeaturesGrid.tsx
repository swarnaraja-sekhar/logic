import { useState } from 'react';
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
  Sparkles
} from 'lucide-react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

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
  const [selectedTheme, setSelectedTheme] = useState<'solarized' | 'light' | 'sunset'>('solarized');
  const [approveNotification, setApproveNotification] = useState<'pending' | 'approved' | 'declined'>('pending');

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
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-900/[0.03] blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 space-y-16">
        
        {/* Two Large Top Cards (Vertical Tabs & Interactive Code Review) */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          
          {/* Card 1: Vertical Tabs */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender Backdrop Frame */}
            <div className="w-full aspect-[1.5] bg-[#b4c3fb] rounded-3xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Floating App Workspace Window */}
              <GlowCardInner className="w-[90%] h-[92%]">
                {/* Search Header Bar */}
                <div className="px-4 py-3 bg-[#0c0c12] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 max-w-[160px] mx-auto relative">
                    <Search className="w-3 h-3 text-gray-500 absolute left-2 top-1/2 -translate-y-1/2" />
                    <input 
                      disabled
                      type="text" 
                      placeholder="Search tabs..."
                      className="w-full bg-black/40 border border-white/5 rounded px-7 py-1 text-[9px] font-sans text-gray-400 placeholder-gray-600 outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Settings2 className="w-3.5 h-3.5" />
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Vertical Tabs List */}
                <div className="flex-1 p-3.5 flex flex-col gap-2 overflow-y-auto">
                  
                  {/* Tab Item 1 */}
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center gap-3 transition-all duration-300">
                    <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center font-bold text-xs text-gray-400 font-mono">AE</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-white truncate">Analyze Windows Autoupdate Err</div>
                      <div className="text-[8px] text-gray-500 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded bg-gray-600" /> user-retention-march
                      </div>
                    </div>
                  </div>

                  {/* Tab Item 2 */}
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center gap-3 transition-all duration-300">
                    <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center font-bold text-xs text-gray-400 font-mono">UT</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-white truncate">Add unit test coverage for multi-li</div>
                      <div className="text-[8px] text-gray-500 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded bg-gray-600" /> warp-agent/fix-skill-args-escaped-space
                      </div>
                    </div>
                  </div>

                  {/* Tab Item 3: Active with Hover Cursors */}
                  <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center gap-3 relative shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:scale-[1.01] transition-all duration-300">
                    <div className="w-7 h-7 rounded bg-purple-500/20 flex items-center justify-center font-bold text-xs text-purple-400 font-mono">SC</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-purple-300 truncate">Search the codebase for git</div>
                      <div className="text-[8px] text-purple-400/80 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded bg-purple-500" /> add-python-version-cli
                      </div>
                    </div>
                    
                    {/* Hover Pointer Hand (Screenshot Match) */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
                      <svg className="w-7 h-7 fill-white stroke-black stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 2v10a.5.5 0 0 0 1 0V3.5a1.5 1.5 0 0 1 3 0V9a.5.5 0 0 0 1 0v-4a1.5 1.5 0 0 1 3 0V9a.5.5 0 0 0 1 0V6.5a1.5 1.5 0 0 1 3 0v4.25a6.25 6.25 0 0 1-6.25 6.25h-1a6 6 0 0 1-5.7-4.14l-1.3-3.9a1.5 1.5 0 0 1 2.85-.95l.4 1.2V2.5a1.5 1.5 0 0 1 3 0Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Tab Item 4 */}
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center gap-3 transition-all duration-300">
                    <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center font-bold text-xs text-gray-400 font-mono">WD</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-white truncate">warp-docs</div>
                      <div className="text-[8px] text-gray-500 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded bg-gray-600" /> adjust-navigation-bar-alignment
                      </div>
                    </div>
                  </div>
                 </div>
              </GlowCardInner>
            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-white">Vertical Tabs</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Display terminal sessions as vertical tabs and configure metadata like git branch, worktrees, and pull-requests.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Interactive Code Review */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender Backdrop Frame */}
            <div className="w-full aspect-[1.5] bg-[#b4c3fb] rounded-3xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Floating Editor View Workspace */}
              <GlowCardInner className="w-[90%] h-[92%]">
                
                {/* Editor Header */}
                <div className="h-10 bg-[#0c0c12] border-b border-white/5 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-gray-500">
                    <Terminal className="w-3 h-3 text-gray-600" />
                    <span>app/assets/bundled/bootstrap/fish.sh</span>
                    <div className="flex items-center gap-0.5 ml-2 font-bold font-mono">
                      <span className="px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400">+44</span>
                      <span className="px-1 py-0.5 rounded bg-rose-500/10 text-rose-400">-0</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
                  </div>
                </div>

                {/* syntax preview diff lines */}
                <div className="flex-1 p-4 font-mono text-[9px] sm:text-[10px] leading-relaxed text-gray-500 space-y-1 relative">
                  <div><span className="text-gray-700 inline-block w-8 text-right pr-2 select-none">405</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; set py_current_dir (dirname &quot;$py_current_dir&quot;)</div>
                  <div><span className="text-gray-700 inline-block w-8 text-right pr-2 select-none">406</span> &nbsp; end</div>
                  <div><span className="text-gray-700 inline-block w-8 text-right pr-2 select-none">407</span> </div>
                  <div className="bg-[#a855f7]/10 border-y border-purple-500/10 py-0.5 flex items-center">
                    <span className="text-purple-400/80 inline-block w-8 text-right pr-2 select-none">408</span>
                    <span className="text-white">&nbsp; if test &quot;$found_python_marker&quot; = true</span>
                  </div>
                  <div className="bg-[#a855f7]/5 py-0.5">
                    <span className="text-purple-400/50 inline-block w-8 text-right pr-2 select-none">409</span>
                    <span className="text-white/80">&nbsp;&nbsp;&nbsp;&nbsp; set py_git_dir &quot;$python_marker_dir&quot;</span>
                  </div>
                  
                  <div className="h-4" /> {/* Gap spacer */}

                  <div><span className="text-gray-700 inline-block w-8 text-right pr-2 select-none">415</span> &nbsp;&nbsp;&nbsp;&nbsp; end</div>
                  <div><span className="text-gray-700 inline-block w-8 text-right pr-2 select-none">416</span> &nbsp;&nbsp;&nbsp;&nbsp; set py_git_dir (dirname &quot;$py_git_dir&quot;)</div>
                  <div><span className="text-gray-700 inline-block w-8 text-right pr-2 select-none">417</span> &nbsp; end</div>

                  {/* Comment Dialog Overlay */}
                  <div className="absolute inset-x-4 bottom-4 flex justify-center z-20 animate-bounce-slow">
                    <div className="w-full bg-[#121218]/95 backdrop-blur border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] rounded-xl flex overflow-hidden">
                      <div className="w-8 bg-[#0b0b0f] border-r border-white/5 flex flex-col items-center py-3 gap-2 text-gray-600">
                        <MessageSquare className="w-3 h-3" />
                        <Eye className="w-3 h-3" />
                        <Paperclip className="w-3 h-3" />
                      </div>
                      <div className="flex-1 p-3.5 flex flex-col justify-between gap-2.5">
                        <div className="text-[10px] text-gray-200 leading-normal font-sans font-medium">
                          We should add coverage for .git files as well to handle worktrees
                        </div>
                        <div className="flex items-center justify-end gap-2.5 pt-1">
                          <button className="text-[9px] text-gray-400 hover:text-white font-bold cursor-pointer">Cancel</button>
                          <button className="px-3 py-1 bg-[#3e4756] hover:bg-[#4a5566] text-white text-[9px] font-bold rounded shadow transition-all cursor-pointer">
                            Send to Agent
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </GlowCardInner>
            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-white">Interactive Code Review</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Take agent work from 80% to 100%. Review changes, leave comments, and send to agents with one click.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Three Small Bottom Cards (Appearance, Drive, Notifications) */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
          {/* Card 3: Customizable Appearance */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender Backdrop Frame */}
            <div className="w-full aspect-[1.3] bg-[#b4c3fb] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Floating Theme Switcher Board */}
              <GlowCardInner className="w-[90%] h-[92%] p-4 gap-3">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-white">
                  <span className="text-[9px] font-bold tracking-widest font-mono text-gray-400 flex items-center gap-1 uppercase">
                    <Sparkles className="w-3 h-3 text-purple-400" /> THEME PREVIEW
                  </span>
                  
                  {/* Selector Toggle */}
                  <div className="flex gap-1.5">
                    <button 
                      onClick={() => setSelectedTheme('solarized')} 
                      className={`w-3.5 h-3.5 rounded-full bg-cyan-700 border transition-all cursor-pointer ${selectedTheme === 'solarized' ? 'scale-110 border-white' : 'border-transparent opacity-60'}`} 
                    />
                    <button 
                      onClick={() => setSelectedTheme('light')} 
                      className={`w-3.5 h-3.5 rounded-full bg-gray-300 border transition-all cursor-pointer ${selectedTheme === 'light' ? 'scale-110 border-white' : 'border-transparent opacity-60'}`} 
                    />
                    <button 
                      onClick={() => setSelectedTheme('sunset')} 
                      className={`w-3.5 h-3.5 rounded-full bg-pink-700 border transition-all cursor-pointer ${selectedTheme === 'sunset' ? 'scale-110 border-white' : 'border-transparent opacity-60'}`} 
                    />
                  </div>
                </div>

                {/* Editor syntax showcase shifting columns (Screenshot details) */}
                <div className="flex-1 grid grid-cols-3 gap-2 overflow-hidden">
                  
                  {/* Column 1: Solarized Theme Preview */}
                  <div 
                    onClick={() => setSelectedTheme('solarized')}
                    className={`h-full border rounded-lg p-2.5 flex flex-col gap-1.5 font-mono text-[8px] transition-all duration-300 cursor-pointer ${
                      selectedTheme === 'solarized' ? 'bg-[#002b36] border-[#2aa198] shadow-lg scale-[1.02]' : 'bg-[#001f27] border-white/5 opacity-50'
                    }`}
                  >
                    <div className="text-[#93a1a1] border-b border-white/5 pb-1 font-bold">solarized</div>
                    <div className="text-[#859900]">class &nbsp;Core {'{'}</div>
                    <div className="text-[#2aa198] pl-2">const x = 42;</div>
                    <div className="text-[#859900]">{'}'}</div>
                  </div>

                  {/* Column 2: Minimalist Light Theme Preview */}
                  <div 
                    onClick={() => setSelectedTheme('light')}
                    className={`h-full border rounded-lg p-2.5 flex flex-col gap-1.5 font-mono text-[8px] transition-all duration-300 cursor-pointer ${
                      selectedTheme === 'light' ? 'bg-[#f6f6f9] border-black/20 text-[#1d1d1f] shadow-lg scale-[1.02]' : 'bg-[#e5e5ea] border-black/5 opacity-40'
                    }`}
                  >
                    <div className="text-gray-500 border-b border-black/5 pb-1 font-bold">light-code</div>
                    <div className="text-purple-600">class &nbsp;Core {'{'}</div>
                    <div className="text-blue-600 pl-2">const x = 42;</div>
                    <div className="text-purple-600">{'}'}</div>
                  </div>

                  {/* Column 3: Sunset Pink Theme Preview */}
                  <div 
                    onClick={() => setSelectedTheme('sunset')}
                    className={`h-full border rounded-lg p-2.5 flex flex-col gap-1.5 font-mono text-[8px] transition-all duration-300 cursor-pointer ${
                      selectedTheme === 'sunset' ? 'bg-[#1a0a2a] border-[#d946ef] shadow-lg scale-[1.02]' : 'bg-[#10051a] border-white/5 opacity-50'
                    }`}
                  >
                    <div className="text-[#c084fc] border-b border-white/5 pb-1 font-bold">sunset-sky</div>
                    <div className="text-[#ec4899]">class &nbsp;Core {'{'}</div>
                    <div className="text-[#f97316] pl-2">const x = 42;</div>
                    <div className="text-[#ec4899]">{'}'}</div>
                  </div>

                </div>
              </GlowCardInner>
            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2">
              <h3 className="text-lg font-bold text-white">Customizable Appearance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pick or create syntax themes that perfectly align with your aesthetic guides and workspace mood.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Drive */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender Backdrop Frame */}
            <div className="w-full aspect-[1.3] bg-[#b4c3fb] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Floating Drive Split-Pane Mockup */}
              <GlowCardInner className="w-[90%] h-[92%] flex-row">
                
                {/* Left File Tree Sidebar */}
                <div className="w-[42%] bg-[#0b0b0f] border-r border-white/5 p-3 flex flex-col gap-2.5 text-gray-500 font-mono text-[7px] shrink-0">
                  <div className="text-[8px] font-bold text-gray-400 flex items-center gap-1 uppercase">
                    <Folder className="w-3 h-3 text-purple-400" /> Warp Drive
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[6px] font-bold text-gray-600 tracking-wider">SHARED WITH ME</span>
                    <div className="flex items-center gap-1 text-gray-300 cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5" /> docs</div>
                    <div className="flex items-center gap-1 text-gray-300 cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5" /> notebooks</div>
                    <div className="flex items-center gap-1 text-gray-300 cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5" /> workflows</div>
                    <div className="flex items-center gap-1 text-gray-300 cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5" /> Growth Weekly</div>
                    <div className="flex items-center gap-1 text-purple-400 font-semibold cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5 text-purple-500" /> GTM Targeting</div>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1.5 border-t border-white/5">
                    <span className="text-[6px] font-bold text-gray-600 tracking-wider">PERSONAL</span>
                    <div className="flex items-center gap-1 text-gray-500 cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5" /> MCP Servers</div>
                    <div className="flex items-center gap-1 text-gray-500 cursor-pointer pl-1"><ChevronRight className="w-2.5 h-2.5" /> Rules</div>
                  </div>
                </div>

                {/* Right Document Editor Viewer */}
                <div className="flex-1 p-3.5 overflow-y-auto flex flex-col gap-2 bg-black/40">
                  <div className="text-[9px] font-sans font-bold text-white leading-tight">
                    Slack-embeddable Share Links for Seeds
                  </div>
                  
                  <div className="h-[1px] bg-white/5" />
                  
                  <div className="font-sans text-[7px] text-gray-400 space-y-1.5">
                    <div>
                      <strong className="text-gray-200">Problem</strong>
                      <p className="leading-relaxed">Sharing links via third-party web portals reduces flow rates inside active pipelines.</p>
                    </div>
                    <div>
                      <strong className="text-gray-200">Current State</strong>
                      <ul className="list-disc pl-2 space-y-0.5 leading-normal">
                        <li>System generates seed payloads automatically from files.</li>
                        <li>Integrations compile links using custom workspace webhooks.</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </GlowCardInner>

            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2">
              <h3 className="text-lg font-bold text-white">Drive</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Seamlessly store, access, share, and review all documents, specifications, and code contexts inside Drive.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Notifications */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender Backdrop Frame */}
            <div className="w-full aspect-[1.3] bg-[#b4c3fb] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Floating Notifications Alerts deck */}
              <div className="w-[90%] h-[92%] flex flex-col gap-3 justify-center relative z-10 select-none">
                
                {/* Alert Notification 1 */}
                <GlowCardInner className="p-3.5 flex flex-row items-start gap-3 transition-all duration-300 hover:scale-[1.01]" radialRadius={160} radialOpacity={0.08}>
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 mt-1.5 shrink-0 animate-ping" />
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex justify-between items-center text-[7px] font-mono">
                      <span className="text-purple-400 font-bold">refactor-api-error-handling</span>
                      <span className="text-gray-500">Just now</span>
                    </div>
                    <p className="text-[9px] font-sans font-bold text-white leading-tight">
                      Refactor the API's error handling mechanism to ensure consistent error responses and improved log...
                    </p>
                    <div className="text-[8px] text-gray-400 font-sans leading-normal">
                      Completed the refactoring, enhanced logging, and generated PR... <span className="text-purple-400 hover:underline cursor-pointer font-medium">View more</span>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-1">
                      {approveNotification === 'pending' ? (
                        <>
                          <button 
                            onClick={() => setApproveNotification('approved')}
                            className="px-2.5 py-1 bg-white text-black text-[8px] font-bold rounded flex items-center gap-1 hover:bg-gray-200 transition-all cursor-pointer active:scale-95"
                          >
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" /> Approve
                          </button>
                          <button 
                            onClick={() => setApproveNotification('declined')}
                            className="px-2.5 py-1 border border-white/10 text-gray-300 text-[8px] font-bold rounded flex items-center gap-1 hover:bg-white/5 transition-all cursor-pointer active:scale-95"
                          >
                            <X className="w-2.5 h-2.5" /> Decline
                          </button>
                        </>
                      ) : approveNotification === 'approved' ? (
                        <span className="text-[8px] text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
                          ✓ Refactoring Approved!
                        </span>
                      ) : (
                        <span className="text-[8px] text-rose-400 font-bold flex items-center gap-1 animate-pulse">
                          ✕ Refactoring Declined
                        </span>
                      )}
                    </div>
                  </div>
                </GlowCardInner>

                {/* Alert Notification 2 */}
                <GlowCardInner className="p-3.5 flex flex-row items-start gap-3 transition-all duration-300 hover:scale-[1.01]" radialRadius={160} radialOpacity={0.08}>
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1 text-white">
                    <GithubIcon className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex justify-between items-center text-[7px] font-mono">
                      <span className="text-emerald-400 font-bold">add-python-version-cli</span>
                      <span className="text-gray-500">Just now</span>
                    </div>
                    <p className="text-[9px] font-sans font-bold text-white leading-tight">
                      Fix Worktree Path & Repo Detection
                    </p>
                    <div className="text-[8px] text-gray-400 font-sans leading-normal">
                      Correct path resolution in Git worktrees and enable main repo discovery.
                    </div>
                    <div className="text-[8px] text-gray-500 font-mono flex items-center gap-1 pt-0.5">
                      <GithubIcon className="w-2.5 h-2.5" /> #3705
                    </div>
                  </div>
                </GlowCardInner>

              </div>

            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2">
              <h3 className="text-lg font-bold text-white">Notifications</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Approve workspace actions, review deployment warnings, and track agent pull-requests in real-time.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
