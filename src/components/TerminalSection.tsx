import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  MessageSquare, 
  Eye, 
  Paperclip, 
  ExternalLink, 
  Link2, 
  RotateCcw,
  Folder,
  FileCode2,
  GitBranch,
  CheckCircle,
  XCircle,
  Play,
  Activity
} from 'lucide-react';
import { Reveal } from './SectionReveal';

const TABS = [
  {
    id: 'tabs',
    title: 'Vertical tabs',
    description: 'Display terminal sessions as vertical tabs and configure metadata like git branch, worktrees, and pull requests.'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: "Agents notify you when they need attention — approving a command, reviewing a plan, or confirming they've finished a task."
  },
  {
    id: 'review',
    title: 'Interactive code review',
    description: 'Take agent work from 80% to 100%. Review changes, leave comments, and send them back to agents with one click.'
  }
];

export const TerminalSection = () => {
  const [activeTab, setActiveTab] = useState('tabs');
  const [isAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [agentActionStatus, setAgentActionStatus] = useState<'pending' | 'approved' | 'denied'>('pending');
  const [isSentToAgent, setIsSentToAgent] = useState(false);
  const [commentText, setCommentText] = useState('We should add coverage for .git files as well to handle worktrees');

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
            if (current === 'tabs') return 'notifications';
            if (current === 'notifications') return 'review';
            return 'tabs';
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
        <div className="max-w-3xl mb-20">
          <Reveal delay={0.1}>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#FF3B00] mb-4 uppercase block font-bold transition-all duration-300">
              ( {TABS.find((t) => t.id === activeTab)?.title.toUpperCase()} )
            </span>
          </Reveal>
          
          <Reveal delay={0.2} yOffset={25}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-sans">
              Agent workflows that feel native.
            </h2>
          </Reveal>
          
          <Reveal delay={0.3} yOffset={20}>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              Switch between assisted and manual workflows without leaving the terminal.
            </p>
          </Reveal>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Vertical Selection Tabs Card */}
          <div className="lg:col-span-5 rounded-3xl border border-purple-500/25 bg-gradient-to-br from-[#0c0814]/90 via-[#06040a]/95 to-black p-3 relative overflow-hidden shadow-2xl relative shadow-[0_0_40px_rgba(168,85,247,0.06)] z-10 space-y-1">
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

                  <div className="relative z-10 space-y-3">
                    <h3 
                      className={`text-lg font-bold tracking-tight transition-colors duration-300 font-mono ${
                        isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                      }`}
                    >
                      {tab.title}
                    </h3>
                    <p 
                      className={`text-xs leading-relaxed transition-colors duration-300 font-sans ${
                        isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'
                      }`}
                    >
                      {tab.description}
                    </p>
                    
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
                        {activeTab === 'review' && 'app/assets/bundled/bootstrap/fish.sh'}
                        {activeTab === 'notifications' && 'agent-runtime/antigravity'}
                        {activeTab === 'tabs' && 'bash (developer@logic-workspace)'}
                      </span>
                      
                      {/* Green & Red Additions Badges */}
                      {activeTab === 'review' && (
                        <div className="flex items-center gap-1 text-[9px] font-mono font-bold select-none">
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">+44</span>
                          <span className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">-0</span>
                        </div>
                      )}
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
                      
                      {/* TABS STATE 1: Vertical Tabs View */}
                      {activeTab === 'tabs' && (
                        <motion.div
                          key="tabs-mock"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex gap-5"
                        >
                          {/* Inside Mock Sidebar */}
                          <div className="w-[150px] shrink-0 border-r border-white/5 pr-4 flex flex-col gap-2.5 text-gray-500">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">WORKSPACES</span>
                            <div className="flex items-center gap-1.5 text-purple-400 font-semibold cursor-pointer">
                              <Folder className="w-3.5 h-3.5 text-purple-400" />
                              <span>logic-core</span>
                            </div>
                            <div className="pl-3 flex flex-col gap-2">
                              <div className="flex items-center gap-1.5 text-gray-300 cursor-pointer hover:text-white">
                                <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span>fish.sh</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-auto" />
                              </div>
                              <div className="flex items-center gap-1.5 text-gray-500 cursor-pointer hover:text-gray-300">
                                <FileCode2 className="w-3.5 h-3.5 text-gray-600" />
                                <span>Hero.tsx</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-gray-500 cursor-pointer hover:text-gray-300">
                                <FileCode2 className="w-3.5 h-3.5 text-gray-600" />
                                <span>auth.go</span>
                                <span className="text-[8px] px-1 bg-purple-500/20 text-purple-400 rounded-full font-bold">PR</span>
                              </div>
                            </div>
                            
                            <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-1.5">
                              <span className="text-[8px] font-semibold text-gray-600">ACTIVE BRANCH</span>
                              <div className="flex items-center gap-1 text-[10px] text-gray-400">
                                <GitBranch className="w-3 h-3 text-purple-500" />
                                <span>feature/worktree</span>
                              </div>
                            </div>
                          </div>

                          {/* Inside Mock Terminal Log */}
                          <div className="flex-1 flex flex-col justify-between py-1">
                            <div className="space-y-2">
                              <div className="flex items-center gap-1.5 text-gray-500">
                                <span>$</span>
                                <span className="text-gray-300">git status</span>
                              </div>
                              <div className="text-gray-400">On branch main</div>
                              <div className="text-gray-400">Your branch is up to date with 'origin/main'.</div>
                              <div className="text-amber-400/80">Modified file: app/assets/bundled/bootstrap/fish.sh</div>
                              
                              <div className="flex items-center gap-1.5 text-gray-500 pt-3">
                                <span>$</span>
                                <span className="text-gray-300">git worktree list</span>
                              </div>
                              <div className="text-gray-400 font-semibold text-purple-400">
                                /home/dev/logic &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8f4e2c [main]
                              </div>
                              <div className="text-gray-500">
                                /home/dev/logic-pr-42 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a9b1c3 [feature/worktree]
                              </div>
                            </div>
                            <div className="text-[10px] text-gray-600 border-t border-white/5 pt-2 flex justify-between">
                              <span>System: 3 Worktrees Mounted</span>
                              <span className="text-purple-400/80">Native Docker Session</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* TABS STATE 2: Notifications View */}
                      {activeTab === 'notifications' && (
                        <motion.div
                          key="notifications-mock"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col justify-between py-2"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                              <span className="text-[10px] font-bold text-amber-400 flex items-center gap-1">
                                <Activity className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                                PENDING AGENT ACTION REQUIRED
                              </span>
                              <span className="text-[9px] text-gray-500">2 min ago</span>
                            </div>

                            <div className="p-4 bg-[#11111a]/80 border border-white/5 rounded-xl space-y-3">
                              <div className="text-gray-300 leading-relaxed">
                                Agent <span className="text-purple-400 font-bold">Antigravity</span> is proposing to run a shell command in your workspace.
                              </div>
                              
                              <div className="p-3 bg-black border border-white/5 rounded font-mono text-[10px] text-emerald-400 relative overflow-hidden">
                                <div className="absolute top-1 right-2 text-[8px] text-gray-600">COMMAND</div>
                                <code>npm run build --workspace=packages/core</code>
                              </div>
                              
                              <div className="text-[10px] text-gray-400 flex gap-4">
                                <div><strong className="text-gray-300">Target Path:</strong> /packages/core</div>
                                <div><strong className="text-gray-300">Timeout:</strong> 30s</div>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center justify-end gap-3 border-t border-white/5 pt-4">
                            {agentActionStatus === 'pending' ? (
                              <>
                                <button 
                                  onClick={() => setAgentActionStatus('denied')}
                                  className="px-4 py-2 border border-rose-500/30 text-rose-400 rounded hover:bg-rose-500/10 transition-all font-semibold active:scale-95 cursor-pointer"
                                >
                                  Deny Execution
                                </button>
                                <button 
                                  onClick={() => setAgentActionStatus('approved')}
                                  className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold rounded shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:brightness-110 transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                                >
                                  <Play className="w-3 h-3 fill-current" /> Approve & Execute
                                </button>
                              </>
                            ) : agentActionStatus === 'approved' ? (
                              <motion.div 
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="flex items-center gap-2 text-emerald-400 text-sm font-bold w-full justify-center py-2"
                              >
                                <CheckCircle className="w-5 h-5 text-emerald-400" />
                                Action Approved! Running build tasks...
                                <span className="text-[10px] text-gray-500 font-normal ml-3 cursor-pointer underline" onClick={() => setAgentActionStatus('pending')}>Reset</span>
                              </motion.div>
                            ) : (
                              <motion.div 
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="flex items-center gap-2 text-rose-400 text-sm font-bold w-full justify-center py-2"
                              >
                                <XCircle className="w-5 h-5 text-rose-400" />
                                Command Denied. Notification marked as resolved.
                                <span className="text-[10px] text-gray-500 font-normal ml-3 cursor-pointer underline" onClick={() => setAgentActionStatus('pending')}>Reset</span>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )}

                      {/* TABS STATE 3: Code Review View */}
                      {activeTab === 'review' && (
                        <motion.div
                          key="review-mock"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col text-gray-400 relative"
                        >
                          {/* Code Lines Editor Mockup */}
                          <div className="space-y-1.5 opacity-90 select-none">
                            <div><span className="text-gray-600 inline-block w-8 text-right select-none pr-3">405</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; set py_current_dir (dirname &quot;$py_current_dir&quot;)</div>
                            <div><span className="text-gray-600 inline-block w-8 text-right select-none pr-3">406</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end</div>
                            <div><span className="text-gray-600 inline-block w-8 text-right select-none pr-3">407</span> </div>
                            
                            {/* Selected Active Line */}
                            <div className="bg-[#a855f7]/10 border-y border-purple-500/20 py-1 flex items-center relative">
                              <span className="text-purple-400/80 inline-block w-8 text-right select-none pr-3 font-semibold">408</span>
                              <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if test &quot;$found_python_marker&quot; = true</span>
                              <div className="absolute right-4 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7] animate-ping" />
                            </div>
                            
                            <div className="bg-[#a855f7]/5 py-0.5 flex items-center">
                              <span className="text-purple-400/50 inline-block w-8 text-right select-none pr-3">409</span>
                              <span className="text-white/80">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; set py_git_dir &quot;$python_marker_dir&quot;</span>
                            </div>

                            <div className="h-6" /> {/* Visual spacing gap for the overlay */}

                            <div><span className="text-gray-600 inline-block w-8 text-right select-none pr-3">415</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end</div>
                            <div><span className="text-gray-600 inline-block w-8 text-right select-none pr-3">416</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; set py_git_dir (dirname &quot;$py_git_dir&quot;)</div>
                            <div><span className="text-gray-600 inline-block w-8 text-right select-none pr-3">417</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end</div>
                            <div><span className="text-gray-600 inline-block w-8 text-right select-none pr-3">418</span> </div>
                            <div><span className="text-gray-600 inline-block w-8 text-right select-none pr-3">419</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if test &quot;$py_in_git_repo&quot; = true</div>
                            <div><span className="text-gray-600 inline-block w-8 text-right select-none pr-3">420</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; set python_ver (eval $python_cmd --version)</div>
                          </div>

                          {/* Floating Comment Dialog Overlay (Screenshot details) */}
                          <div className="absolute inset-x-0 bottom-6 flex items-center justify-center px-4 z-20">
                            <div className="w-full max-w-[480px] bg-[#14141d]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded-xl flex overflow-hidden">
                              
                              {/* Left sidebar icons inside the comment popup */}
                              <div className="w-10 bg-[#0e0e14] border-r border-white/5 flex flex-col items-center py-4 gap-3 text-gray-500">
                                <MessageSquare className="w-3.5 h-3.5 hover:text-gray-300 cursor-pointer" />
                                <Eye className="w-3.5 h-3.5 hover:text-gray-300 cursor-pointer" />
                                <Paperclip className="w-3.5 h-3.5 hover:text-gray-300 cursor-pointer" />
                              </div>

                              {/* Comment Form Content */}
                              <div className="flex-1 p-4 flex flex-col gap-3 relative justify-between">
                                {isSentToAgent ? (
                                  <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-4 text-center space-y-2"
                                  >
                                    <div className="text-purple-400 font-bold text-xs tracking-wider flex items-center justify-center gap-1.5">
                                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                                      TRANSMITTING CONTEXT TO AGENT...
                                    </div>
                                    <div className="text-[10px] text-gray-500">
                                      Prompt and selected code block sent to Antigravity runtime.
                                    </div>
                                    <button 
                                      onClick={() => setIsSentToAgent(false)}
                                      className="text-[9px] text-[#FF3B00] hover:underline pt-2 cursor-pointer font-bold uppercase tracking-wider block mx-auto"
                                    >
                                      Edit / Send another
                                    </button>
                                  </motion.div>
                                ) : (
                                  <>
                                    <textarea
                                      value={commentText}
                                      onChange={(e) => setCommentText(e.target.value)}
                                      rows={2}
                                      className="w-full bg-transparent border-0 outline-none text-xs text-gray-200 placeholder-gray-600 resize-none font-sans font-medium"
                                      placeholder="Add instructions or comments for the agent..."
                                    />
                                    <div className="flex items-center justify-end gap-3 pt-2">
                                      <button 
                                        onClick={() => setCommentText('')}
                                        className="text-[10px] text-gray-400 hover:text-white font-bold transition-colors cursor-pointer"
                                      >
                                        Cancel
                                      </button>
                                      <button 
                                        onClick={() => setIsSentToAgent(true)}
                                        className="px-3.5 py-1.5 bg-[#3e4756] hover:bg-[#4a5566] text-white text-[10px] font-bold rounded shadow-lg transition-all active:scale-95 cursor-pointer"
                                      >
                                        Send to Agent
                                      </button>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

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
