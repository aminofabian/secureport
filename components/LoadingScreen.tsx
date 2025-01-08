'use client';

import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-white dark:bg-black"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="w-16 h-16 text-emerald-600 dark:text-emerald-500" />
              </motion.div>
              <Shield className="w-16 h-16 absolute top-1 left-1 text-emerald-900/20 dark:text-emerald-400/20" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-400">
                SecurePort
              </span>
              <span className="text-sm uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
                Cybersecurity Solutions
              </span>
            </div>
            <motion.div 
              className="h-1 w-24 bg-emerald-600 dark:bg-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }} // 24rem = 96px
              transition={{ duration: 4.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 