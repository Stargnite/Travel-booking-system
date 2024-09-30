"use client"

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";


type animationProps = {
  children: React.ReactNode,
  duration: number,
  delay: number,
  direction: string,
  reverse?: boolean
}

const Animation = ({ children, duration, delay, direction, reverse }: animationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false});

  const mainControls = useAnimation();

  useEffect(() => {
    // Activate animation
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");

    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { opacity: 0, [direction]: reverse ? -80 : 80 },
    visible: { opacity: 1, [direction]: 0 },
  };

  return (
    <div className="" ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;
