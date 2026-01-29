import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ maxWidth: 820 }}
      >
        <img
          src={profile}
          alt="Gagan Singh"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            marginBottom: 32,
            border: "3px solid var(--accent)",
          }}
        />

        <h1>Gagan Singh</h1>

        <p style={{ color: "var(--accent)", margin: "24px 0 40px" }}>
          Technical Writer · API Documentation · Product Docs
        </p>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          style={{
            display: "inline-block",
            padding: "16px 36px",
            background: "var(--cta)",
            color: "#000",
            borderRadius: 14,
            fontWeight: 800,
            fontSize: 16,
          }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
