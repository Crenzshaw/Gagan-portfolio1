import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ margin: "120px auto", maxWidth: 900, padding: "0 20px" }}
    >
      <h2 style={{ marginBottom: 16 }}>{title}</h2>
      {children}
    </motion.section>
  );
}
