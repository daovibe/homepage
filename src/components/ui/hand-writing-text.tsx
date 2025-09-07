"use client";

import { motion } from "framer-motion";
interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}
function HandWrittenTitle({
  title = "Hand Written",
  subtitle = "Optional subtitle"
}: HandWrittenTitleProps) {
  const draw = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1
    }
  };
  return <div className="relative w-full max-w-4xl mx-auto py-24">
            <div className="absolute inset-0">
                <motion.svg width="100%" height="100%" viewBox="0 0 1200 600" initial="hidden" animate="visible" className="w-full h-full">
                    <title>KokonutUI</title>
                    <motion.path d="M 950 90 
                           C 1250 300, 1050 480, 600 520
                           C 250 520, 150 480, 150 300
                           C 150 120, 350 80, 600 80
                           C 850 80, 950 180, 950 180" fill="none" strokeWidth="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" variants={draw} transition={{
          duration: 2.5
        }} className="text-white dark:text-white opacity-90" />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5,
        duration: 0.8
      }} className="text-4xl text-white dark:text-white tracking-tighter flex items-center gap-2 md:text-5xl">
                    {title}
                </motion.h1>
                {subtitle && <motion.p className="text-xl text-white/80 dark:text-white/80" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 0.8
      }}>
                        {subtitle}
                    </motion.p>}
            </div>
        </div>;
}
export { HandWrittenTitle };