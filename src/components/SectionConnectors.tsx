import { motion } from 'framer-motion';

interface VerticalDividerProps {
  isActive: boolean;
}

export const VerticalDivider = ({ isActive }: VerticalDividerProps) => {
  return (
    <div className="w-[1px] h-full relative self-stretch hidden md:block shrink-0">
      {/* Background low-opacity line */}
      <div className="absolute inset-0 bg-white/5" />
      
      {/* Active Glowing Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF3B00] to-transparent"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ 
          opacity: isActive ? 1 : 0, 
          scaleY: isActive ? 1 : 0,
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        style={{ originY: 0 }}
      />
      
      {/* Glowing light bead running down when active */}
      {isActive && (
        <motion.div
          className="absolute left-[-1px] w-[3px] h-20 bg-gradient-to-b from-transparent via-[#FF3B00] to-transparent shadow-[0_0_10px_#FF3B00]"
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      )}
    </div>
  );
};

export const HorizontalConnector = () => {
  return (
    <div className="absolute top-[20%] left-0 right-0 h-[1px] z-0 pointer-events-none hidden lg:block">
      <svg className="w-full h-full overflow-visible" fill="none">
        {/* Base dim connection line */}
        <line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth="1"
        />
        
        {/* Animated glowing current pulses */}
        <motion.line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#glowingFlow)"
          strokeWidth="1.5"
          strokeDasharray="80 150"
          animate={{
            strokeDashoffset: [0, -460],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        />
        
        <defs>
          <linearGradient id="glowingFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#FF3B00" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
