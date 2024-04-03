import { motion } from "framer-motion";

export default function ButtonMotion() {
  return (
    <>
      <motion.button
        className="bg-blue-600 border rounded-md py-2 px-5 text-slate-50 "
        whileTap={{ scale: 0.7 }}
        whileHover={{ scale: 1.2 }}
      >
        Click
      </motion.button>

      <motion.button
        className="bg-blue-600 border rounded-md py-2 px-5 text-slate-50 "
        whileTap={{ scale: 0.7 }}
        whileHover={{ scale: 1.2, transition: { yoyo: Infinity } }}
      >
        Click
      </motion.button>

      <motion.input
        className="bg-yellow-500 py-3"
        type="text"
        name=""
        id=""
        whileFocus={{ scaleX: 1.2 }}
      />
    </>
  );
}
