import { useState } from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    id: "01",
    title: "Autonomous AI Agents",
    description: "Self-healing pipelines, automated reviews, and intelligent resource allocation running 24/7 without manual intervention.",
    tags: ["Auto-Healing", "Code Review", "Resource Management", "24/7 Operations"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Intelligent Workflows",
    description: "Connect APIs, webhooks, and scripts seamlessly with smart triggers designed for the most demanding enterprise deployments.",
    tags: ["API Integration", "Webhooks", "Smart Triggers", "Enterprise Scalability"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "AI-Driven Development",
    description: "Real-time context-aware autocomplete, flawless refactoring, and natural language code generation directly in your IDE.",
    tags: ["Context-Aware", "Refactoring", "Code Generation", "IDE Native"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Team Orchestration",
    description: "Standardize best practices, share environments securely, and collaborate dramatically faster without the red tape.",
    tags: ["Best Practices", "Shared Environments", "Collaboration", "Access Control"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="w-full bg-[#050505] pt-32 pb-40 border-t border-white/5 relative z-10">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex justify-center items-start mb-24 lg:mb-32 px-4 sm:px-6 w-full overflow-hidden pt-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex items-start"
          >
            <h2 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-black uppercase tracking-[0.05em] sm:tracking-[0.08em] leading-none text-[#cccccc]"
              style={{ fontFamily: "Impact, sans-serif", transform: "scaleY(1.4)", transformOrigin: "bottom" }}
            >
              HOW WE CAN HELP
            </h2>
            <span 
              className="text-[10px] sm:text-xs uppercase tracking-widest text-[#cccccc] font-medium ml-2 sm:ml-4 mt-2 sm:mt-4"
            >
              (SERVICES)
            </span>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="w-full flex flex-col border-t border-white/10 mt-12">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full grid grid-cols-1 lg:grid-cols-[150px_1fr] px-4 sm:px-12 py-10 sm:py-16 border-b border-white/10 cursor-pointer items-start lg:items-center relative overflow-hidden hover:bg-[#08080a] transition-all duration-300"
              >
                {/* ID with smooth hover white transition */}
                <div className="text-6xl sm:text-7xl font-medium flex items-end tracking-tighter w-fit select-none">
                  <motion.span
                    animate={{ color: isHovered ? "#ffffff" : "#444444" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.id}
                  </motion.span>
                  <motion.span 
                    animate={{ 
                      scale: isHovered ? 1.25 : 1, 
                      backgroundColor: isHovered ? "#ffffff" : "#FF3B00" 
                    }}
                    transition={{ duration: 0.3 }}
                    className="inline-block w-[14px] h-[14px] sm:w-4 sm:h-4 mb-[12px] sm:mb-[16px] ml-1.5"
                  />
                </div>
                
                {/* Content Wrapper */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start w-full mt-8 lg:mt-0 gap-8 xl:gap-20">
                  
                  {/* Image (Smooth sliding reveal on hover via spring) */}
                  <motion.div
                    initial={false}
                    animate={{
                      width: isHovered ? 350 : 0,
                      opacity: isHovered ? 1 : 0,
                      marginRight: isHovered ? 32 : 0
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 110,
                      damping: 20
                    }}
                    className="hidden lg:block overflow-hidden flex-shrink-0 origin-left"
                  >
                    <div className="w-[350px] h-[300px] rounded-3xl overflow-hidden object-cover bg-[#111]">
                      <motion.img 
                        src={service.image} 
                        alt={service.title} 
                        animate={{ scale: isHovered ? 1 : 1.12 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full h-full object-cover opacity-80" 
                      />
                    </div>
                  </motion.div>

                  {/* Text Info */}
                  <div className="flex-1 flex flex-col justify-center">
                    
                    {/* Smooth horizontal translate shift on hover */}
                    <motion.h3 
                      animate={{ 
                        x: isHovered ? 16 : 0,
                        color: isHovered ? "#ffffff" : "#888888" 
                      }}
                      transition={{ type: "spring", stiffness: 120, damping: 18 }}
                      className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight"
                    >
                      {service.title}
                    </motion.h3>
                    
                    {/* Expandable sub-info */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 120, 
                        damping: 20 
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pt-6 sm:pt-8 w-full max-w-3xl">
                        <p className="text-gray-400 text-lg sm:text-2xl font-medium mb-8 leading-snug">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {service.tags.map((tag, tIdx) => (
                            <motion.span 
                              key={tag} 
                              initial={{ opacity: 0, y: 10 }}
                              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                              transition={{ delay: isHovered ? tIdx * 0.05 : 0, duration: 0.3 }}
                              className="px-5 py-2.5 rounded-full border border-white/10 text-gray-500 text-sm font-medium transition-all hover:!border-[#FF3B00] hover:!text-[#FF3B00] hover:bg-[#FF3B00]/5"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;