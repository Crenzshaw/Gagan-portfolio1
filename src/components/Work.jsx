import { motion } from "framer-motion";

const works = [
  {
    src: "/work-1.gif",
    text: "API documentation, developer portals, and knowledge bases designed for real-world engineering workflows.",
  },
  {
    src: "/work-2.gif",
    text: "User guides, installation manuals, and product documentation built for scale and clarity.",
  },
];

export default function Work() {
  return (
    <section>
      <h2>My Work</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: 60,
        }}
      >
        {works.map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            style={{
              background: var(--card),
              padding: 28,
              borderRadius: 20,
              borderLeft: "6px solid var(--accent)",
            }}
          >
            <img
              src={w.src}
              loading="lazy"
              style={{
                width: "100%",
                borderRadius: 14,
                marginBottom: 24,
              }}
            />

            <p>{w.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
