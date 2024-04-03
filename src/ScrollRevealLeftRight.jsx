import { motion } from "framer-motion";
import { useRef } from "react";

const ScrollRevealChild = ({ elementRef, index }) => {
  const scrollVariant = {
    initial: {
      opacity: 0,
      x: index % 2 === 0 ? "+100vh" : "-100vh",
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    viewport: {
      once: false,
    },
  };

  return (
    <motion.div
      variants={scrollVariant}
      whileInView="whileInView"
      initial="initial"
      ref={elementRef}
      className="h-60 m-4 text-center w-60 bg-purple-400 rounded-md"
    ></motion.div>
  );
};

const ScrollReveal = () => {
  const childRefs = Array.from({ length: 9 }, () => useRef());

  return (
    <div className="flex items-center justify-center flex-col">
      {Array.from({ length: 9 }, (_, index) => (
        <ScrollRevealChild
          key={index}
          index={index}
          elementRef={childRefs[index]}
        />
      ))}
    </div>
  );
};

export default ScrollReveal;
