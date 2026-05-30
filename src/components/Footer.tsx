import { motion } from 'framer-motion';
import { 
  Terminal, 
  ArrowRight, 
  Cpu, 
  Shield, 
  Layers 
} from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "AI Agents", href: "#agents" },
    { label: "Node Workflows", href: "#workflows" },
    { label: "Console Orchestration", href: "#console" },
    { label: "Integrations", href: "#services" },
    { label: "Pricing Model", href: "#pricing" }
  ];

  const platformLinks = [
    { label: "API Reference", href: "#api" },
    { label: "Developer Docs", href: "#docs" },
    { label: "System Status", href: "#status", status: "operational" },
    { label: "Security Center", href: "#security" },
    { label: "SOC 2 Framework", href: "#compliance" }
  ];

  const resourceLinks = [
    { label: "Client Stories", href: "#testimonials" },
    { label: "Research Blog", href: "#blog" },
    { label: "AI Benchmarks", href: "#benchmarks" },
    { label: "Brand Assets", href: "#brand" },
    { label: "Careers", href: "#careers", badge: "WE ARE HIRING" }
  ];

  const legalLinks = [
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Data Protection", href: "#gdpr" },
    { label: "SLA Guarantee", href: "#sla" }
  ];

  return (
    <footer className="relative z-20 w-full bg-[#030303] border-t border-white/5 pt-28 pb-12 overflow-hidden select-none">
      
      {/* Dynamic ambient grid overlay and subtle glowing meshes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40 z-0" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[350px] bg-gradient-to-tl from-[#FF3B00]/5 to-transparent blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        
        {/* Top Header section: Stark Big branding + Interactive newsletter signup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/5 items-start">
          
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-start text-left space-y-6">
            
            {/* Logo and signature tag */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center text-white font-extrabold text-sm shadow-[0_0_15px_rgba(255,59,0,0.4)]">
                <span className="transform -skew-x-[12deg]">B</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                BigLogic<span className="font-normal text-gray-400">Ai</span>
              </span>
            </div>

            {/* Stark outcomes-first headline for footer */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight max-w-lg">
              Autonomous operations. <br />
              <span className="bg-gradient-to-r from-white via-purple-300 to-[#FF3B00] bg-clip-text text-transparent">Done in seconds.</span>
            </h3>

            {/* Subtle security/tech assurance pill indicators */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.02] border border-white/5 text-[9px] font-mono font-bold tracking-wider text-gray-400 uppercase select-none">
                <Shield className="w-3 h-3 text-[#FF3B00]" />
                SOC 2 TYPE II SECURED
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.02] border border-white/5 text-[9px] font-mono font-bold tracking-wider text-gray-400 uppercase select-none">
                <Layers className="w-3 h-3 text-purple-400" />
                TLS 1.3 ENCRYPTION
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.02] border border-white/5 text-[9px] font-mono font-bold tracking-wider text-gray-400 uppercase select-none">
                <Cpu className="w-3 h-3 text-indigo-400" />
                AI-NATIVE ENGINE
              </span>
            </div>

          </div>

          <div className="col-span-1 lg:col-span-5 flex flex-col justify-start text-left lg:items-end">
            
            {/* Interactive newsletter signup capsule */}
            <div className="w-full max-w-[420px] flex flex-col gap-4">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#FF3B00] uppercase block mb-1">
                  SUBSCRIBE TO LOGS
                </span>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Get real-time updates on automated benchmarks and API release logs.
                </p>
              </div>

              <form 
                onSubmit={(e) => e.preventDefault()} 
                className="flex items-center p-1.5 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/20 focus-within:border-[#FF3B00]/40 transition-all duration-300 w-full"
              >
                <input 
                  type="email" 
                  placeholder="Enter developer email..." 
                  className="bg-transparent pl-4 pr-2 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none flex-1 min-w-0 font-mono"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#FF3B00] hover:bg-[#FF3B00]/95 text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 shrink-0 shadow-lg shadow-[#FF3B00]/10"
                >
                  SUBSCRIBE <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            </div>

          </div>

        </div>

        {/* Middle Section: Clean directory tree list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-20 border-b border-white/5 items-start">
          
          {/* Column 1: Product */}
          <div className="flex flex-col text-left space-y-5">
            <span className="text-xs font-mono font-extrabold tracking-widest text-[#FF3B00] uppercase">
              Product
            </span>
            <ul className="flex flex-col space-y-3.5">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <motion.a 
                    href={link.href}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="flex flex-col text-left space-y-5">
            <span className="text-xs font-mono font-extrabold tracking-widest text-[#FF3B00] uppercase">
              Platform
            </span>
            <ul className="flex flex-col space-y-3.5">
              {platformLinks.map((link, i) => (
                <li key={i}>
                  <motion.a 
                    href={link.href}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    {link.label}
                    {link.status === "operational" && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[7px] font-mono font-black tracking-widest text-emerald-400 uppercase select-none">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col text-left space-y-5">
            <span className="text-xs font-mono font-extrabold tracking-widest text-[#FF3B00] uppercase">
              Resources
            </span>
            <ul className="flex flex-col space-y-3.5">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <motion.a 
                    href={link.href}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#FF3B00]/10 border border-[#FF3B00]/25 text-[7px] font-mono font-black tracking-widest text-[#FF3B00] uppercase select-none">
                        {link.badge}
                      </span>
                    )}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col text-left space-y-5">
            <span className="text-xs font-mono font-extrabold tracking-widest text-[#FF3B00] uppercase">
              Legal
            </span>
            <ul className="flex flex-col space-y-3.5">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <motion.a 
                    href={link.href}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyrights, System Telemetry, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 text-xs font-mono text-gray-500 select-none">
          
          {/* Left copyright details matching developer style */}
          <div className="flex items-center gap-2 order-2 md:order-1 text-center md:text-left">
            <span>({currentYear} // BIGLOGIC_AI_CO_INC)</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-white transition-colors">ALL RIGHTS RESERVED</span>
          </div>

          {/* Center real-time simulation telemetry logs */}
          <div className="hidden lg:flex items-center gap-4 text-[10px] font-mono text-gray-500 border border-white/5 px-4 py-1.5 rounded-full bg-white/[0.01]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>CORE_GATEWAY: ONLINE</span>
            </div>
            <span className="text-gray-700">|</span>
            <span>PING: 12ms</span>
            <span className="text-gray-700">|</span>
            <span>NODES: 2,492</span>
          </div>

          {/* Right side high-end social badges */}
          <div className="flex items-center gap-3 order-1 md:order-2">
            {[
              { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
              { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
              { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/15 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
            <motion.a
              href="#console"
              whileHover={{ y: -2 }}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-mono font-bold tracking-widest text-gray-400 hover:text-[#FF3B00] hover:border-[#FF3B00]/30 transition-all flex items-center gap-1.5"
            >
              <Terminal className="w-3 h-3 text-[#FF3B00]" />
              SSH CONSOLE
            </motion.a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
