import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  /* -------------------------
     PARALLAX (SUBTLE)
  ------------------------- */
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  /* -------------------------
     SCROLL SPLIT (CLAMPED)
  ------------------------- */
  const imageX = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const textX = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.92]);

  /* -------------------------
     APPLE-LIKE EASING
  ------------------------- */
  const appleEase = [0.22, 1, 0.36, 1];

  return (
    <section className="hero" id="home">
      
      {/* PARALLAX BACKGROUND */}
      <motion.div
        className="hero-bg"
        style={{
          y: bgY,
          backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.jpg)`
        }}
      />

      {/* CONTENT */}
      <div className="hero-grid">
        {/* IMAGE */}
        <motion.div
          className="hero-image-wrap"
          style={{ x: imageX, opacity }}
          initial={{ x: -140, opacity: 0, scale: 0.94 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: appleEase }}
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
          style={{ x: textX, opacity }}
          initial={{ x: 140, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: appleEase,
            delay: 0.05
          }}
        >
          <h1>Gagan Singh</h1>
          <p>
            Technical Writer · API Documentation · Product Docs · Developer
            Experience
          </p>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="hero-btn"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section> 
  );
}
