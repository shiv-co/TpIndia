import { motion } from "framer-motion";

export default function TransitionOverlay() {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-[var(--accent-color)] z-[9999]"
    />
  );
}
