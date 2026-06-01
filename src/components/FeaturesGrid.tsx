import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

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
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-900/[0.02] blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 space-y-16">
        
        {/* Two Large Top Cards (Outdated Reconstruction Software & Manual Estimate Processing) */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          
          {/* Card 1: Outdated Reconstruction Software */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.5] bg-[#b4c3fb] rounded-3xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Workspace Comparison Window / Infographic Image */}
              <GlowCardInner className="w-[95%] h-[95%]">
                <img 
                  src="/outdated_reconstruction_workflow.jpg" 
                  alt="Outdated Reconstruction Software Diagram" 
                  className="w-full h-full object-cover sm:object-contain transition-transform duration-700 hover:scale-[1.01]"
                />
              </GlowCardInner>
            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-xl font-bold tracking-tight text-white">1. Outdated Reconstruction Software</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Legacy tools are slow, complex, outdated, and hard to use. BigLogicAI replaces them with a modern AI-powered interface.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Manual Estimate Processing */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.5] bg-[#b4c3fb] rounded-3xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Floating Editor View Workspace / Infographic Image */}
              <GlowCardInner className="w-[95%] h-[95%]">
                <img 
                  src="/manual_estimate_workflow.jpg" 
                  alt="Manual Estimate Processing Flow" 
                  className="w-full h-full object-cover sm:object-contain transition-transform duration-700 hover:scale-[1.01]"
                />
              </GlowCardInner>
            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-xl font-bold tracking-tight text-white">2. Manual Estimate Processing</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Construction companies manually type insurance estimate data for hours. BigLogicAI uses AI to read PDFs, parse Xactimate estimates, and generate schedules automatically.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Three Small Bottom Cards (Compliance, Scattered Docs, Lost Meetings) */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
          {/* Card 3: Insurance Compliance Problems */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.3] bg-[#b4c3fb] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Compliance Checker Board / Infographic Image */}
              <GlowCardInner className="w-[95%] h-[95%]">
                <img 
                  src="/insurance_compliance_workflow.jpg" 
                  alt="Insurance Compliance Problems Diagram" 
                  className="w-full h-full object-cover sm:object-contain transition-transform duration-700 hover:scale-[1.01]"
                />
              </GlowCardInner>
            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-lg font-bold text-white">3. Insurance Compliance Problems</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Insurance companies reject claims if documentation is incorrect. BigLogicAI validates documents, compliance rules, and insurance requirements using AI.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Scattered Documents */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.3] bg-[#b4c3fb] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Centralized knowledge brain directory split panel / Infographic Image */}
              <GlowCardInner className="w-[95%] h-[95%]">
                <img 
                  src="/scattered_documents_workflow.jpg" 
                  alt="Scattered Documents Diagram" 
                  className="w-full h-full object-cover sm:object-contain transition-transform duration-700 hover:scale-[1.01]"
                />
              </GlowCardInner>

            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-lg font-bold text-white">4. Scattered Documents</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Companies lose track of SOPs, contracts, legal templates, and project files. BigLogicAI creates a centralized “Company Brain” where all knowledge is searchable using AI.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Lost Meeting Information */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            {/* Soft Pastel Lavender/Indigo Backdrop Frame */}
            <div className="w-full aspect-[1.3] bg-[#b4c3fb] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(180,195,251,0.1)]">
              
              {/* Premium Laser Sweep shine effect */}
              <div className="absolute top-0 bottom-0 left-[-150%] w-[80%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[25deg] group-hover:left-[250%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-30" />

              {/* Floating Voice to Action audio preview / Infographic Image */}
              <GlowCardInner className="w-[95%] h-[95%]">
                <img 
                  src="/lost_meeting_information_workflow.jpg" 
                  alt="Meetings Information Lost Diagram" 
                  className="w-full h-full object-cover sm:object-contain transition-transform duration-700 hover:scale-[1.01]"
                />
              </GlowCardInner>

            </div>
            
            {/* Description Text */}
            <div className="px-2 space-y-2 text-left">
              <h3 className="text-lg font-bold text-white">5. Lost Meeting Information</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Site meetings and calls often lose important action items. BigLogicAI records, transcribes, summarizes, and converts conversations into tasks automatically.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
