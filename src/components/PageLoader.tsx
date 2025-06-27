
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
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          {/* Modern Loading Animation */}
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="w-20 h-20 rounded-full border-2 border-gray-200 dark:border-gray-700"></div>
            
            {/* Animated progress ring */}
            <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"></div>
            
            {/* Inner pulsing core */}
            <div className="absolute inset-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 opacity-20 animate-pulse"></div>
            
            {/* Central dot */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          </div>
          
          {/* Loading text with fade animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            <h2 className="text-xl font-light text-gray-700 dark:text-gray-300 tracking-[0.2em] uppercase">
              Loading
            </h2>
          </motion.div>
          
          {/* Elegant progress indicator */}
          <motion.div 
            className="mt-6 flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="w-16 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
          
          {/* Subtle floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + i * 8}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
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
