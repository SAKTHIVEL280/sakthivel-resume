
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Compact loading animation */}
          <div className="relative flex flex-col items-center space-y-4 sm:space-y-6">
            {/* Main loader */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-border"></div>
              
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Inner pulse */}
              <motion.div
                className="absolute inset-2 sm:inset-3 rounded-full bg-primary/20"
                animate={{
                  scale: [0.8, 1, 0.8],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Clean typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-center"
            >
              <h2 className="text-sm sm:text-base font-medium text-foreground/80 tracking-wider uppercase">
                Loading
              </h2>
            </motion.div>
            
            {/* Progress indicator */}
            <motion.div 
              className="w-20 sm:w-24 h-0.5 bg-border rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </div>
          
          {/* Minimal floating elements - only 2 for cleaner look */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${30 + i * 40}%`,
                  top: `${45 + i * 10}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
