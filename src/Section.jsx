import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        maxWidth: 900,
        margin: "60px auto",
        padding: "40px 28px",
        background: "var(--card-bg)",
        borderRadius: 18,
        border: "1px solid var(--border-soft)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          color: "var(--accent)",
          fontSize: 20,
        }}
      >
        {title}
      </h2>

      {children}
    </motion.section>
  );
}
