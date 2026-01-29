import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.65),
          rgba(0,0,0,0.85)
        ), url(${BASE}hero-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <motion.img
          src={`${BASE}profile.jpg`}
          alt="Gagan Singh"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            border: "3px solid var(--secondary)",
            marginBottom: "24px",
          }}
        />

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Gagan Singh
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: "var(--secondary)",
            fontSize: "1.25rem",
            marginBottom: "32px",
          }}
        >
          Technical Writer · API Documentation · Product Docs
        </motion.p>

        <motion.a
          href={`${BASE}resume.pdf`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            background: "var(--accent)",
            color: "#000",
            padding: "14px 28px",
            borderRadius: "999px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
