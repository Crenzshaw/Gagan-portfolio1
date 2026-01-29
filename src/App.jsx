import Hero from "./components/Hero";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <Hero />

      <Section title="About">
        <p>
          Technical Writer with 4+ years of experience creating clear,
          user-centric documentation across Application Security, Cloud,
          Salesforce, Testing, and Telephony platforms.
        </p>
      </Section>

      <Section title="Experience">
        <p><strong>ArmorCode</strong> — Technical Writer (2024–Present)</p>
        <p>ASPM documentation, APIs, integrations, release notes.</p>

        <br />

        <p><strong>Provar Testing</strong> — Technical Writer (2022–2024)</p>
        <p>Salesforce automation docs, user manuals, help pages.</p>

        <br />

        <p><strong>RTDS</strong> — Information Developer (2019–2022)</p>
        <p>Telephony & cloud platforms, APIs, SOPs, LMS content.</p>
      </Section>

      <Section title="Skills">
        <p>
          Git · Jira · Confluence · Markdown · Zendesk · WordPress · Salesforce · API Documentation
        </p>
      </Section>
    </>
  );
}
