const BASE = import.meta.env.BASE_URL;

export default function Experience() {
  const experiences = [
    {
      company: "ArmorCode Inc.",
      role: "Technical Writer",
      type: "Full-time",
      duration: "Oct 2024 – Present · 1 yr 4 mos",
      location: "Gurugram, Haryana, India",
      logo: `${BASE}armorcode.png`,
      skills: "Prompt Engineering, Large Language Models (LLM) +1 skill",
    },
    {
      company: "Provar",
      role: "Technical Writer",
      type: "Full-time",
      duration: "Oct 2022 – Oct 2024 · 2 yrs 1 mo",
      location: "Gurugram, Haryana, India",
      logo: `${BASE}provar.png`,
      skills: "Knowledge Base, WFO +15 skills",
    },
    {
      company: "Real Time Data Services",
      role: "Information Developer",
      type: "Full-time",
      duration: "Nov 2019 – Oct 2022 · 3 yrs",
      location: "Gurugram, Haryana, India · On-site",
      logo: `${BASE}rtds.png`,
      skills: "Video Creation, Video Editing +18 skills",
    },
    {
      company: "Accenture",
      role: "Application Development Associate",
      type: "Full-time",
      duration: "Apr 2019 – Sep 2019 · 6 mos",
      location: "Gurugram, Haryana, India · On-site",
      logo: `${BASE}accenture.png`,
      skills: "WFO, Java +1 skill",
    },
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <img
              src={exp.logo}
              alt={exp.company}
              className="experience-logo"
            />

            <div className="experience-content">
              <h3>{exp.role}</h3>
              <p className="company">
                {exp.company} · {exp.type}
              </p>
              <p className="muted">{exp.duration}</p>
              <p className="muted">{exp.location}</p>

              <p className="skills">◇ {exp.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
