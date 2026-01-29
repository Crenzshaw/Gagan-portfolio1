import Hero from "./components/Hero";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <Hero />

      <Section title="About">
        <p>
          Technical Writer with 4+ years of experience across Application
          Security, Cloud, Salesforce, Testing, and Telephony platforms.
          Specialized in API documentation, release notes, and scalable docs.
        </p>
      </Section>

      <Section title="Experience">
        <p><strong>ArmorCode</strong> — Technical Writer (2024–Present)</p>
        <p>ASPM docs, APIs, integrations, release notes.</p>

        <br />

        <p><strong>Provar Testing</strong> — Technical Writer (2022–2024)</p>
        <p>Salesforce automation, user manuals, help content.</p>

        <br />

        <p><strong>RTDS</strong> — Information Developer (2019–2022)</p>
        <p>Telephony & cloud platforms, APIs, SOPs.</p>
      </Section>

      <Section title="Skills">
        <p>
          Git · Jira · Confluence · Markdown · Zendesk · WordPress · Salesforce · API Docs
        </p>
      </Section>
    </>
  );
}
