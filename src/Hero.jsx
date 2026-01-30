import { motion, useScroll, useTransform } from "framer-motion";
import profile from "/profile.jpg"; // from public

export default function Hero() {
  const { scrollY } = useScroll();

  // Scroll-based separation (SAFE RANGE)
  const imageX = useTransform(scrollY, [0, 300], [0, -120]);
  const textX = useTransform(scrollY, [0, 300], [0, 120]);
  const opacity = useTransform(scrollY, [0, 250], [1, 0.85]);

  return (
    <section className="hero">
      <div className="hero-grid">
        {/* IMAGE */}
        <motion.div
          className="hero-image-wrap"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ x: imageX, opacity }}
        >
          <img src={profile} alt="Gagan Singh" className="hero-image" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="hero-text"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          style={{ x: textX, opacity }}
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
