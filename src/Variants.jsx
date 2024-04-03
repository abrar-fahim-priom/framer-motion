import { motion } from "framer-motion";
import { chiVariant } from "./childVariant";
export default function Variants() {
  const variant = {
    initial: { scale: 0, opacity: 0, y: "-100vh" },
    animate: {
      transition: { type: "spring", duration: 0.5, delay: 0.5 },
      scale: 1,
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div>
      <motion.div variants={variant} animate="animate" initial="initial">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim obcaecati
        eos blanditiis voluptates labore aut porro, commodi doloremque molestias
        dicta quis odio delectus aliquid eveniet? Sed consequatur non impedit
        dolores.
      </motion.div>

      <motion.div
        variants={chiVariant} /// using variant from outside exports
        initial="initial" // if i used this childvariant from this file, dont need to write initial and animate again
        animate="animate"
        className="rounded-full bg-red-600 h-14 w-14 m-3"
      ></motion.div>
    </div>
  );
}
