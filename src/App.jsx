import Hero from "./components/Hero";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <Hero />

      <Section title="About" index={1}>
        <p>
          I’m a Technical Writer with 4+ years of experience creating
          documentation that developers actually enjoy using. My work spans
          Application Security, Cloud, Salesforce, Testing, and Telephony
          platforms.
        </p>
      </Section>

      <Section title="Experience" index={2}>
        <p>
          <strong>ArmorCode</strong> — Technical Writer (2024–Present)
        </p>
        <p>
          Leading ASPM documentation, APIs, integrations, release notes, and
          cross-team documentation strategy.
        </p>

        <br />

        <p>
          <strong>Provar Testing</strong> — Technical Writer (2022–2024)
        </p>
        <p>
          Salesforce automation docs, installation guides, help content, and
          WordPress knowledge bases.
        </p>

        <br />

        <p>
          <strong>RTDS</strong> — Information Developer (2019–2022)
        </p>
        <p>
          Telephony and cloud platform documentation, APIs, SOPs, FAQs, and LMS
          content.
        </p>
      </Section>

      <Section title="Skills" index={3}>
        <p>
          Git · Jira · Confluence · Markdown · Zendesk · WordPress · Salesforce ·
          API Documentation · Release Notes
        </p>
      </Section>
    </>
  );
}
