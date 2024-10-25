import { motion } from "framer-motion";
import React from "react";

const Animate = ({
  children,
  tag = "div",
  delay = 2,
  duration = 0.2,
  y = 20,
  x = 0,
  ...props
}) => {
  const variants = {
    hidden: { opacity: 0, y, x },
    show: { opacity: 1, x: 0, y: 0, transition: { duration, delay: delay * 0.1 } },
  };

  // Dynamically select the motion component based on the tag
  const MotionTag = motion[tag] || motion.div;

  return (
    <MotionTag initial="hidden" animate="show" variants={variants} {...props}>
      {children}
    </MotionTag>
  );
};

export default Animate;

// Example usage
// <Animate
//   tag="div"
//   x={-50}
//   delay={4}
//   className="text-sm text-zinc-600 dark:text-zinc-400"
// >
//   Some texts
// </Animate>
