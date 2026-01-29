import { motion } from "framer-motion";
import resume from "../assets/Gagan_Singh_Resume.pdf";

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
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ maxWidth: 720 }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            marginBottom: 24,
          }}
        >
          Gagan Singh
        </h1>

        <p
          style={{
            fontSize: 18,
            marginBottom: 32,
          }}
        >
          Technical Writer focused on{" "}
          <span style={{ color: "var(--accent)" }}>
            API Documentation, Product Docs
          </span>{" "}
          and scalable developer experiences.
        </p>

        <motion.a
          href={resume}
          download
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
