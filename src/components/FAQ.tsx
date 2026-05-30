import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqList: FAQItem[] = [
    {
      question: "What is the typical timeline for building an automated workflow?",
      answer: "Traditional development takes months of endless planning meetings, hiring, and manual coding. With BigLogic AI, we automate the pipeline setup, code execution, and system deployments, allowing us to deliver full production-grade applications in under 48 hours."
    },
    {
      question: "How does BigLogic AI guarantee the security and privacy of my data?",
      answer: "Security is built into our core nodes. Your workflows run under bank-grade AES-256 encryption both at rest and in transit. We are fully SOC 2 Type II certified, GDPR compliant, and HIPAA aligned by default, keeping your database endpoints strictly shielded."
    },
    {
      question: "Do you support custom integrations like payment gateways and databases?",
      answer: "Yes, absolutely. BigLogic AI features built-in node connectors for modern ecosystems. We support Stripe payment integration, calendar scheduling, SSO (SAML 2.0 & OAuth), daily geographic backups, and high-performance distributed databases out of the box."
    },
    {
      question: "How do you compare to hiring a traditional development agency?",
      answer: "BigLogic AI delivers a 10x execution speedup while reducing operational costs by up to 70%. A single engineer using our AI-native flow engine can achieve the identical output of a 10-person traditional development squad without any coordination overhead."
    },
    {
      question: "How do you manage ongoing support and system updates?",
      answer: "We provide daily automated backups, real-time telemetry monitoring, and a 99.9% uptime SLA guarantee. Our autonomous agents continuously check for software anomalies, perform regular optimizations, and rotate ephemeral security keys automatically."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-20 w-full min-h-screen bg-black py-32 overflow-hidden select-none flex items-center justify-center">
      
      {/* Background neon accent glows */}
      <div className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] bg-orange-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Big stark condensed 'FAQ' typography */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-start text-left lg:sticky lg:top-32">
            
            {/* Massive condensed FAQ letters */}
            <h2 className="font-sans font-black tracking-tighter text-[10rem] sm:text-[12rem] lg:text-[14rem] leading-[0.8] text-white uppercase select-none drop-shadow-[0_10px_30px_rgba(255,255,255,0.02)]">
              FAQ
            </h2>

            {/* Subtitle got specific questions */}
            <p className="text-gray-400 text-sm sm:text-base font-semibold mt-8 tracking-wide">
              Got specific questions?
            </p>
            
            {/* Orange contact button */}
            <a 
              href="#contact" 
              className="text-[#FF3B00] text-sm sm:text-base font-extrabold mt-1 hover:text-white transition-colors duration-300 relative group self-start"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#FF3B00] group-hover:bg-white scale-x-100 group-hover:scale-x-0 origin-left transition-transform duration-300" />
            </a>

          </div>

          {/* Right Column: Interactive Accordion Cards list */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-5 w-full">
            {faqList.map((item, index) => {
              const isOpen = activeIndex === index;
              
              return (
                <div
                  key={index}
                  onClick={() => toggleAccordion(index)}
                  className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-[#09090b]/55 border border-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer backdrop-blur-md overflow-hidden select-none"
                >
                  {/* Subtle active orange glow border */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-[#FF3B00]/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 ${isOpen ? 'opacity-100' : ''}`} />

                  {/* Header row: Question text and rotating Plus symbol */}
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-sm sm:text-base md:text-[1.1rem] font-bold text-gray-200 group-hover:text-white transition-colors duration-300 leading-snug tracking-tight">
                      {item.question}
                    </h3>
                    
                    {/* Pulsing rotating Plus icon */}
                    <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-[#FF3B00]/30 transition-all duration-300">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[#FF3B00] flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded smooth content height animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: { height: { duration: 0.35, ease: "easeOut" }, opacity: { duration: 0.25, delay: 0.05 } } 
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { height: { duration: 0.3, ease: "easeIn" }, opacity: { duration: 0.15 } } 
                        }}
                        className="overflow-hidden"
                      >
                        <div className="text-gray-400 text-xs sm:text-sm md:text-[0.95rem] leading-relaxed mt-5 pt-5 border-t border-white/5 select-text font-normal font-sans">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
