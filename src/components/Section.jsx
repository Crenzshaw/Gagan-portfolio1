import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 style={{ color: "var(--accent)" }}>{title}</h2>
      {children}
    </motion.section>
  );
}
