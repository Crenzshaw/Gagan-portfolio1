import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/Gagan_Singh_Resume.pdf";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
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
          marginBottom: 24,
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Gagan Singh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ marginBottom: 32, opacity: 0.85 }}
      >
        Technical Writer · API Documentation · Product Docs
      </motion.p>

      <motion.a
        href={resume}
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "12px 22px",
          borderRadius: 8,
          background: "#38bdf8",
          color: "#020617",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Download Resume
      </motion.a>
    </section>
  );
}
