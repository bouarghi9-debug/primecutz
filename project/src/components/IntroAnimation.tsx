import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="relative"
            >
              <motion.img
                src="/unnamed.jpg"
                alt="Prime Cutz"
                className="w-[500px] md:w-[700px] h-auto"
                style={{ mixBlendMode: 'screen' }}
                animate={{
                  filter: [
                    'brightness(1) drop-shadow(0 0 0px rgba(212, 175, 55, 0))',
                    'brightness(1.3) drop-shadow(0 0 40px rgba(212, 175, 55, 0.8))',
                    'brightness(1) drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))',
                    'brightness(1.3) drop-shadow(0 0 40px rgba(212, 175, 55, 0.8))',
                    'brightness(1) drop-shadow(0 0 0px rgba(212, 175, 55, 0))',
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.25, 0.5, 0.75, 1],
                }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.4, 0.2, 0.4, 0],
                  scale: [0.8, 1.1, 1, 1.1, 0.8],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.25, 0.5, 0.75, 1],
                }}
                className="absolute inset-0 bg-[#D4AF37] blur-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                transform: 'skewX(-20deg)',
                width: '200%',
                left: '-100%',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
