import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/Gagan_Singh_Resume.pdf";

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", textAlign: "center" }}>
      <motion.img
        src={profile}
        alt="Gagan Singh"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          marginBottom: 24,
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Gagan Singh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ color: "var(--accent)", marginBottom: 32 }}
      >
        Technical Writer · API Documentation · Product Docs
      </motion.p>

      <motion.a
        href={resume}
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "inline-block",
          padding: "12px 20px",
          background: "var(--accent)",
          color: "#020617",
          borderRadius: 8,
          fontWeight: 600,
        }}
      >
        Download Resume
      </motion.a>
    </section>
  );
}
