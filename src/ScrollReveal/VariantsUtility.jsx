import { motion } from "framer-motion";

export default function AnimatedBox({
  variants,
  children,
  className,
  ...rest
}) {
  return (
    <motion.div
      variants={variants}
      whileInView="whileInView"
      initial="initial"
      className={`h-60 w-60 m-4 text-center bg-purple-400 rounded-md ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export const scrollVariant = {
  initial: {
    opacity: 0,
    x: "-100vh",
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  viewport: {
    once: false,
  },
};

export const rightVariant = {
  initial: {
    opacity: 0,
    x: "+100vh",
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  viewport: {
    once: false,
  },
};

export const yoyoVariant = {
  initial: {
    opacity: 0,
    x: "+100vh",
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { yoyo: Infinity },
  },
  viewport: {
    once: false,
  },
};
