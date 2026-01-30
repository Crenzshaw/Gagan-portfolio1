import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Scroll-based split animation
  const imageX = useTransform(scrollYProgress, [0, 0.25], [0, -180]);
  const textX = useTransform(scrollYProgress, [0, 0.25], [0, 180]);
  const fade = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);

  return (
    <section
      className="hero"
      style={{ backgroundImage: "url(/hero-bg.jpg)" }}
    >
      <div className="hero-grid">

        {/* IMAGE */}
        <motion.div
          className="hero-image-wrap"
          initial={{ x: -220, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ x: imageX, opacity: fade }}
        >
          <img
            src="/profile.jpg"
            alt="Gagan Singh"
            className="hero-image"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="hero-text"
          initial={{ x: 220, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          style={{ x: textX, opacity: fade }}
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
