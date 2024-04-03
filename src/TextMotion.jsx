import { easeInOut, motion } from "framer-motion";

export default function TextMotion() {
  const words =
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quae facilis officiis pariatur esse vero corporis eos dignissimos nemo, possimus perferendis sit facere. Dignissimos at nobis vel et doloribus. Quis!";

  const wordsArray = words.split(" ");

  return (
    <div className="text-2xl text-center text-blue-500">
      {wordsArray.map((word, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={index}
          transition={{ ease: easeInOut, duration: 0.5, delay: index / 10 }}
          exit={{ x: "100%", opacity: 0 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
}
