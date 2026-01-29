import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.85)
          ),
          url(${BASE}hero-bg.jpg)
        `,
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
          padding: "0 48px",
        }}
      >
        {/* PROFILE IMAGE */}
        <motion.img
          src={`${BASE}profile.jpg`}
          alt="Gagan Singh"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            border: "4px solid var(--secondary)",
            marginBottom: "32px",
            objectFit: "cover",
          }}
        />

        {/* NAME */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: "clamp(3.8rem, 6vw, 5.2rem)",
            fontWeight: "800",
            marginBottom: "16px",
          }}
        >
          Gagan Singh
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            color: "var(--secondary)",
            fontSize: "1.4rem",
            maxWidth: "640px",
            marginBottom: "40px",
          }}
        >
          Technical Writer · API Documentation · Product Docs
        </motion.p>

        {/* CTA */}
        <motion.a
          href={`${BASE}resume.pdf`}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            background: "var(--accent)",
            color: "#000",
            padding: "18px 40px",
            borderRadius: "999px",
            fontSize: "1.1rem",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "0 12px 30px rgba(255,50,88,0.35)",
          }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
