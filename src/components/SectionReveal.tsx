import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  className?: string;
}

export const Reveal = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  yOffset = 30, 
  xOffset = 0,
  className = "" 
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: yOffset, x: xOffset, opacity: 0 }}
        animate={isInView ? { y: 0, x: 0, opacity: 1 } : { y: yOffset, x: xOffset, opacity: 0 }}
        transition={{ 
          duration, 
          delay, 
          ease: [0.16, 1, 0.3, 1] as const
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export const RevealText = ({ 
  text, 
  className = "", 
  delay = 0,
  once = false 
}: RevealTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      y: "100%", 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <div ref={ref} className={`flex flex-wrap overflow-hidden ${className}`}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap"
      >
        {words.map((word, idx) => (
          <span key={idx} className="overflow-hidden inline-block mr-[0.25em] py-[0.1em] -my-[0.1em]">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
