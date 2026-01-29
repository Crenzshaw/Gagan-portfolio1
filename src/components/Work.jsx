import { motion } from "framer-motion";

const works = [
  {
    src: "/work-1.gif",
    text:
      "API documentation, developer portals, and knowledge bases designed for real-world engineering workflows.",
  },
  {
    src: "/work-2.gif",
    text:
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
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "60px",
        }}
      >
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            style={{
              backgroundColor: "var(--card)",
              padding: "28px",
              borderRadius: "20px",
              borderLeft: "6px solid var(--accent)",
            }}
          >
            <motion.img
              src={work.src}
              alt=""
              loading="lazy"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                width: "100%",
                borderRadius: "14px",
                marginBottom: "24px",
              }}
            />

            <p>{work.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
