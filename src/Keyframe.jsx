import { easeInOut, motion } from "framer-motion";

export default function Keyframe() {
  return (
    <motion.div
      className="bg-blue-500 border w-32 h-32 m-4"
      animate={{
        borderRadius: ["20%", "30%", "80%", "30%"],
        rotate: [0, 90, 180, 270, 0],
        scale: [1, 1.5, 1],
      }}
      exit={{
        x: "-100vw",
        transition: {
          ease: easeInOut,
          duration: 2,
        },
      }}
      transition={{ duration: 1.7 }}
    />
  );
}
