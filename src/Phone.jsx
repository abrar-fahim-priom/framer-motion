import { motion } from "framer-motion";
const hoverVariants = {
  hover: {
    scale: 0.7,
    borderRadius: 50,
    transition: { type: "spring", duration: 0.4 },
  },
  initial: {
    scale: 1, // Initial scale (full size)
    borderRadius: 0, // Initial borderRadius (no rounding)
  },
};
export default function Phone() {
  return (
    <div className="">
      <div className="mt-5 flex justify-around items-center flex-row">
        <div className="text-5xl font-bold text-center">iPhone</div>
        <div className="text-2xl font-light text-center">
          Designed to be loved
        </div>
      </div>
      <motion.div
        className="bg-orange-600 h-screen w-screen"
        variants={hoverVariants}
        whileHover="hover" // Trigger animation on hover
      />
    </div>
  );
}
