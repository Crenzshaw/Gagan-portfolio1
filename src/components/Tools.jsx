import { useEffect, useRef, useState } from "react";

const base = import.meta.env.BASE_URL;

const tools = [
  { name: "Gemini / Codex CLI", icon: `${base}tools/gemini.svg` },
  { name: "Swagger", icon: `${base}tools/swagger.svg` },
  { name: "Markdown", icon: `${base}tools/markdown.svg` },
  { name: "Postman", icon: `${base}tools/postman.svg` },
  { name: "Readme.io", icon: `${base}tools/readme.svg` },
  { name: "Git", icon: `${base}tools/git.svg` },
  { name: "Jira", icon: `${base}tools/jira.svg` },
  { name: "WordPress", icon: `${base}tools/wordpress.svg` },
  { name: "MS Office", icon: `${base}tools/office.svg` },
  { name: "Confluence", icon: `${base}tools/confluence.svg` },
];

export default function Tools() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setVisible(entry.isIntersecting);
    },
    {
      threshold: 0.35,
    }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);

  return () => observer.disconnect();
}, []);

  return (
    <section
  id="tools"
  ref={sectionRef}
  className={`tools-section ${visible ? "is-visible" : ""}`}>
      <div className="tools-wrapper">
        <div className="tools-header">
          <h2>
            Tools & <span>Workflow</span>
          </h2>
          <p>
            Platforms and tooling I use daily for API documentation,
            developer experience, and scalable content systems.
          </p>
        </div>

        <div className="tools-icons">
          {tools.map((tool) => (
            <div className="tool-circle" key={tool.name}>
              <img src={tool.icon} alt={tool.name} />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>

        <div className={`tools-bars ${visible ? "animate" : ""}`}>
          <Skill label="API & Product Documentation" value={90} />
          <Skill label="Developer Experience & DX" value={85} />
          <Skill label="Tooling & Integrations" value={80} />
        </div>
      </div>
    </section>
  );
}

function Skill({ label, value }) {
  return (
    <div className="tool-bar">
      <div className="tool-bar-meta">
        <span>{label}</span>
        <em>{value}%</em>
      </div>
      <div className="bar">
        <div className="fill" style={{ "--value": `${value}%` }} />
      </div>
    </div>
  );
}
