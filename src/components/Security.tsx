import { motion } from 'framer-motion';
import {
  Shield,
  CheckCircle2,
  FileText,
  Globe,
  Lock,
  Key,
  Activity,
  Database,
  Terminal,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import securityBg from '../assets/security_background.png';

// Container animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

const Security = () => {
  return (
    <section id="security" className="relative z-20 w-full min-h-screen bg-black py-24 overflow-hidden select-none flex items-center justify-center">

      {/* Background radial gradients for high-end aesthetic glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Security Principles & Text */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center text-left">

            {/* Top Capsule Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="mb-6 self-start"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#FF3B00] uppercase shadow-lg select-none relative group hover:border-[#FF3B00]/25 transition-all backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00] animate-pulse inline-block shadow-[0_0_8px_#FF3B00]" />
                Security &amp; Trust
              </span>
            </motion.div>

            {/* Headline H2 left-aligned */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-tight leading-[1.1] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] mb-6"
            >
              Enterprise Security. <br />
              <span className="bg-gradient-to-r from-white via-purple-300 to-[#FF3B00] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(255,59,0,0.15)]">Absolute Peace of Mind.</span>
            </motion.h2>

            {/* Subtitle left-aligned */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed mb-10"
            >
              We protect your data with the same bank-grade encryption standards used by global financial institutions. Your business data is encrypted, backed up, and SOC 2 Type II compliant by default.
            </motion.p>

            {/* Security Principles in Points Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-col gap-6 w-full relative z-10"
            >
              {[
                {
                  title: "SOC 2 Type II Certified",
                  desc: "Rigorous independent audits validating that our infrastructure, deployment procedures, and code engines satisfy strict compliance and trust benchmarks."
                },
                {
                  title: "Bank-Grade AES-256 Encryption",
                  desc: "All client database integrations, API parameters, and telemetry streams are encrypted at rest and in transit with highly robust hardware encryption modules."
                },
                {
                  title: "Unified Single Sign-On (SSO)",
                  desc: "Enterprise access management utilizing industry-standard SAML 2.0 and OAuth 2.0 integrations, ensuring zero persistent credentials and safe user controls."
                },
                {
                  title: "Global Compliance Benchmarks (GDPR & ISO)",
                  desc: "Full alignment with GDPR privacy mandates, HIPAA data requirements, and ISO 27001 global security standard processes by default."
                },
                {
                  title: "Secure Telemetry & Multi-Region Backups",
                  desc: "Continuous real-time anomaly detection combined with encrypted daily backups geographically distributed across resilient multi-region server zones."
                }
              ].map((point, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 group/point transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FF3B00]/10 border border-[#FF3B00]/30 flex items-center justify-center shrink-0 mt-1 transition-colors duration-300 group-hover/point:bg-[#FF3B00]/20 group-hover/point:border-[#FF3B00]/50 shadow-[0_0_10px_rgba(255,59,0,0.15)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B00]" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white tracking-tight leading-snug group-hover/point:text-[#FF3B00] transition-colors duration-300 font-sans">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-1.5 font-sans font-normal group-hover/point:text-gray-300 transition-colors duration-300">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Dynamic Security Showcase containing the padlock/columns image clearly visible */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center items-center lg:items-end">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative w-full max-w-[580px] aspect-[1.12] bg-black/40 border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(255,59,0,0.12)] backdrop-blur-md overflow-hidden flex flex-col group hover:border-[#FF3B00]/35 transition-all duration-500"
            >

              {/* Header chassis interface bar */}
              <div className="w-full h-11 bg-white/[0.02] border-b border-white/5 px-4 flex items-center justify-between shrink-0 select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#FF3B00] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400">BIGLOGIC_SHIELD_V4.2</span>
                </div>
                <div className="w-10 flex justify-end">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block shadow-[0_0_8px_#10b981]" />
                </div>
              </div>

              {/* Showcase Image container - EXTREMELY CLEAR AND HIGH VISIBILITY */}
              <div className="relative flex-1 w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={securityBg}
                  alt="BigLogic AI Padlock &amp; Columns Security Backdrop"
                  className="w-full h-full object-cover opacity-100 filter brightness-[1.05] contrast-[1.05] saturate-[1.05] scale-100 group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none"
                />

                {/* Thin overlay shadows only at the absolute edges to retain absolute image clarity in the middle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Floating telemetry pills */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/85 border border-emerald-500/35 text-[9px] font-mono font-bold tracking-wider text-emerald-400 uppercase shadow-lg select-none backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    SECURE ENGINE ACTIVE
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/85 border border-[#FF3B00]/30 text-[9px] font-mono font-bold tracking-wider text-[#FF3B00] uppercase shadow-lg select-none backdrop-blur-md">
                    <Cpu className="w-3 h-3 shrink-0" />
                    HW VALIDATED
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <div className="w-9 h-9 rounded-full bg-black/80 border border-white/15 flex items-center justify-center text-[#FF3B00] shadow-lg backdrop-blur-md">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                  </div>
                </div>

                {/* Interactive validation console log at the bottom */}
                <div className="absolute bottom-4 inset-x-4 z-10 p-3 rounded-lg bg-black/90 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-1.5 select-none font-mono">
                  <div className="flex items-center justify-between text-[8px] text-gray-500 font-bold border-b border-white/5 pb-1">
                    <span>SECURITY MONITOR</span>
                    <span className="text-[#FF3B00]">LIVE STATUS</span>
                  </div>
                  <div className="flex flex-col gap-0.5 text-[8.5px] leading-tight text-gray-300">
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-400">[ok]</span>
                      <span>TLS 1.3 Handshake handshake_ok</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-400">[ok]</span>
                      <span>AES-256-GCM hardware_aes verified</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#FF3B00]">[rotated]</span>
                      <span>Ephemereal session keys rotated</span>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Security;
