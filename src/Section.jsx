import { motion } from "framer-motion";

export default function Section({ title, index, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "120px 10vw",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr",
          gap: 40,
        }}
      >
        <div
          style={{
            color: "var(--accent)",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {String(index).padStart(2, "0")}
        </div>

        <div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              marginBottom: 24,
            }}
          >
            {title}
          </h2>

          {children}
        </div>
      </div>
    </motion.section>
  );
}
