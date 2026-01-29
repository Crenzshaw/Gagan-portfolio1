import { motion } from "framer-motion";

const works = [
  {
    src: "/work-1.gif",
    description:
      "API documentation, developer portals, and knowledge bases designed for real-world engineering workflows.",
  },
  {
    src: "/work-2.gif",
    description:
      "User guides, installation manuals, and product documentation built for scale and clarity.",
  },
];

export default function Work() {
  return (
    <section>
      <h2>My Work</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 48,
        }}
      >
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            style={{
              background: "#0b0b0b",
              borderRadius: 18,
              padding: 24,
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <img
              src={work.src}
              alt=""
              loading="lazy"
              style={{
                width: "100%",
                borderRadius: 12,
                marginBottom: 20,
              }}
            />

            <p>{work.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
