import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">

        {/* PROFILE IMAGE */}
        <motion.div
          className="hero-image-wrap"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
  src={`${import.meta.env.BASE_URL}profile.jpg`}
  alt="Gagan Singh"
  className="hero-image"
  draggable="false"
/>

        </motion.div>

        {/* TEXT */}
        <motion.div
          className="hero-text"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <h1>Gagan Singh</h1>

          <p>
            Technical Writer · API Documentation · Product Docs · Developer
            Experience
          </p>

          <a href="/resume.pdf" className="hero-btn">
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}
