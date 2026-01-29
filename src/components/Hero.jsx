import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 10vw",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ maxWidth: 800 }}
      >
        <img
          src={profile}
          alt="Gagan Singh"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            marginBottom: 24,
          }}
        />

        <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
          Gagan Singh
        </h1>

        <p
          style={{
            margin: "20px 0",
            color: "var(--accent)",
            fontSize: 18,
          }}
        >
          Technical Writer · API Documentation · Product Docs
        </p>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "var(--cta)",
            color: "#000",
            borderRadius: 12,
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
