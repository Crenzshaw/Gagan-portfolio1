import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/Gagan_Singh_Resume.pdf";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <motion.img
        src={profile}
        alt="Gagan Singh"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          marginBottom: 28,
          border: "2px solid var(--border-soft)",
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ marginBottom: 12 }}
      >
        Gagan Singh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          marginBottom: 32,
          color: "var(--accent)",
          fontSize: 15,
        }}
      >
        Technical Writer · API Documentation · Product Docs
      </motion.p>

      <motion.a
        href={resume}
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        style={{
          padding: "12px 26px",
          borderRadius: 10,
          background: "var(--accent)",
          color: "#020617",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        Download Resume
      </motion.a>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        style={{
          position: "absolute",
          bottom: 30,
          fontSize: 13,
          color: "var(--text-secondary)",
        }}
      >
        ↓ scroll
      </motion.div>
    </section>
  );
}
