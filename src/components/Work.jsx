import { motion } from "framer-motion";
import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";

export default function Work() {
  return (
    <section>
      <h2>My Work</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 40,
        }}
      >
        {[work1, work2].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#0d0d0d",
              borderRadius: 16,
              padding: 20,
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                borderRadius: 12,
                marginBottom: 16,
              }}
            />
            <p>
              API documentation, user guides, and knowledge bases designed for
              real developer workflows.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
