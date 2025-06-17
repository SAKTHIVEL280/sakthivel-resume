
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Start loading the website immediately while showing the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds to match the CSS animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
        >
          <style>{`
            .container {
              position: relative;
              width: 200px;
              height: 200px;
            }
            
            .loader {
              position: absolute;
              top: 50%;
              left: 50%;
              z-index: 10;
              width: 160px;
              height: 100px;
              margin-left: -80px;
              margin-top: -50px;
              border-radius: 5px;
              background: #1e3f57;
              animation: dot1_ 3s cubic-bezier(0.55,0.3,0.24,0.99) infinite;
            }

            .loader:nth-child(2) {
              z-index: 11;
              width: 150px;
              height: 90px;
              margin-top: -45px;
              margin-left: -75px;
              border-radius: 3px;
              background: #3c517d;
              animation-name: dot2_;
            }

            .loader:nth-child(3) {
              z-index: 12;
              width: 40px;
              height: 20px;
              margin-top: 50px;
              margin-left: -20px;
              border-radius: 0 0 5px 5px;
              background: #6bb2cd;
              animation-name: dot3_;
            }

            @keyframes dot1_ {
              3%,97% {
                width: 160px;
                height: 100px;
                margin-top: -50px;
                margin-left: -80px;
              }

              30%,36% {
                width: 80px;
                height: 120px;
                margin-top: -60px;
                margin-left: -40px;
              }

              63%,69% {
                width: 40px;
                height: 80px;
                margin-top: -40px;
                margin-left: -20px;
              }
            }

            @keyframes dot2_ {
              3%,97% {
                height: 90px;
                width: 150px;
                margin-left: -75px;
                margin-top: -45px;
              }

              30%,36% {
                width: 70px;
                height: 96px;
                margin-left: -35px;
                margin-top: -48px;
              }

              63%,69% {
                width: 32px;
                height: 60px;
                margin-left: -16px;
                margin-top: -30px;
              }
            }

            @keyframes dot3_ {
              3%,97% {
                height: 20px;
                width: 40px;
                margin-left: -20px;
                margin-top: 50px;
              }

              30%,36% {
                width: 8px;
                height: 8px;
                margin-left: -5px;
                margin-top: 49px;
                border-radius: 8px;
              }

              63%,69% {
                width: 16px;
                height: 4px;
                margin-left: -8px;
                margin-top: -37px;
                border-radius: 10px;
              }
            }
          `}</style>
          
          <div className="container">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
          </div>
          
          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-32 text-center"
          >
            <motion.h2
              className="text-xl font-bold text-white mb-2 tracking-wide"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading...
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
