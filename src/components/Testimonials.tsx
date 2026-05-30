import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 'microsoft',
    company: 'Microsoft',
    quote: '“Turn minutes into seconds, things that would normally take me 10 minutes instead take just a few seconds to do with BigLogic AI.”',
    author: 'Marco Casalaina',
    role: 'VP Products, Core AI and AI Futurist at Microsoft',
    logo: (
      <svg className="w-24 sm:w-28 h-6 fill-current" viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
        <text x="30" y="19" className="font-sans font-semibold text-lg tracking-tight select-none">Microsoft</text>
      </svg>
    )
  },
  {
    id: 'openai',
    company: 'OpenAI',
    quote: '“We deployed BigLogic AI’s autonomous systems across our pipelines. What took our infrastructure team three weeks now executes continuously in under an hour.”',
    author: 'Sarah Chen',
    role: 'Principal Research Lead at OpenAI',
    logo: (
      <svg className="w-24 sm:w-28 h-6 fill-current" viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg">
        {/* OpenAI abstract spiral */}
        <path d="M12.5 7.5a2.5 2.5 0 0 1 2.5-2.5h1.5a1 1 0 0 0 1-1V2.5A2.5 2.5 0 0 0 15 0h-3a5 5 0 0 0-5 5v1.5a1 1 0 0 0 1 1h1.5zm0 10a2.5 2.5 0 0 1-2.5 2.5H8.5a1 1 0 0 0-1 1v1.5A2.5 2.5 0 0 0 10 25h3a5 5 0 0 0 5-5v-1.5a1 1 0 0 0-1-1h-1.5z" opacity="0.8"/>
        <circle cx="12.5" cy="12.5" r="3.5" />
        <text x="30" y="19" className="font-sans font-semibold text-lg tracking-tight select-none">OpenAI</text>
      </svg>
    )
  },
  {
    id: 'stripe',
    company: 'Stripe',
    quote: '“BigLogic AI has transformed how we automate code reviews and database optimizations. It acts as an elite multiplier for our entire engineering staff.”',
    author: 'David O’Connor',
    role: 'Head of Platform & Infrastructure at Stripe',
    logo: (
      <svg className="w-24 sm:w-28 h-6 fill-current" viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.4 12.8c0-2 1.4-3.1 3.8-3.1 1.5 0 2.8.4 3.7.9V6.4c-.9-.4-2-.6-3.2-.6-4.5 0-7.2 2.3-7.2 6.5 0 5.4 3.7 6.4 7.4 6.4 1.3 0 2.6-.2 3.4-.6v-4.1c-.8.5-2 .7-3.4.7-2.6.2-4.5-.8-4.5-2.5zm11.3-6.6V3.8l-4 1v14h4v-7.8c0-1.8.8-2.6 2.2-2.6.3 0 .7 0 1 .1V4.4c-.4-.1-1-.2-1.5-.2-1 0-1.5.4-1.7 2zm7-2.4c0-1.1-.8-1.9-1.9-1.9-1.2 0-2 .8-2 1.9s.8 2 2 2c1.1 0 1.9-.9 1.9-2zm-3.9 4.8h4v14.4h-4zm6.5 2.5c0 1.1.4 1.7 1.4 1.7.7 0 1.2-.2 1.6-.4v3.1c-.5.2-1.5.4-2.5.4-3.1 0-4.5-1.9-4.5-4.8V6.2h-2V3.4h2V1l4-1.2v3.6h3v2.8h-3v8.8zm8.6-2.5c0-1.1-.8-1.9-1.9-1.9-1.2 0-2 .8-2 1.9s.8 2 2 2c1.1 0 1.9-.9 1.9-2zm-3.9 4.8h4v14.4h-4z" />
        <text x="50" y="19" className="font-sans font-semibold text-lg tracking-tight select-none">stripe</text>
      </svg>
    )
  }
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(TESTIMONIALS[0].id);
  const activeData = TESTIMONIALS.find(t => t.id === activeTab) || TESTIMONIALS[0];

  return (
    <section className="relative z-10 w-full min-h-[85vh] bg-[#C6B4F8] text-[#111111] flex flex-col justify-between py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Logos navigation tabs at the top */}
      <div className="max-w-[1600px] mx-auto w-full flex justify-center border-b border-black/10 pb-8">
        <div className="flex items-center gap-8 sm:gap-16 md:gap-24">
          {TESTIMONIALS.map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`transition-all duration-500 relative py-2 ${
                  isActive 
                    ? 'text-black opacity-100 scale-105' 
                    : 'text-black/40 hover:text-black/70 hover:opacity-80 scale-95'
                }`}
              >
                {t.logo}
                
                {/* Active slider bar indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-logo-line"
                    className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Quote and Profiles Display */}
      <div className="max-w-6xl mx-auto w-full my-auto flex items-center justify-center min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-12"
          >
            {/* Word-by-word sequential text reveal wrapper */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.2] md:leading-[1.15] tracking-tight max-w-5xl mx-auto font-sans text-black py-2">
              {activeData.quote}
            </h2>

            {/* Author Profile details */}
            <div className="space-y-2 select-none">
              <p className="text-base sm:text-lg font-bold tracking-tight text-black">
                {activeData.author}
                <span className="font-normal text-black/60">
                  , {activeData.role}
                </span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer background transition bleed placeholder */}
      <div className="max-w-[1600px] mx-auto w-full border-t border-black/10 pt-8 flex items-center justify-between text-xs font-mono font-bold tracking-wider text-black/50 select-none">
        <span>(01 / CLIENT STORY)</span>
        <span>BIGLOGIC AI CO.</span>
      </div>

    </section>
  );
};

export default Testimonials;
