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
          Salesforce, Testing, and Telephony platforms. I specialize in API
          documentation, release notes, and scalable product docs.
        </p>
      </Section>

      <Section title="Experience">
        <p><strong>ArmorCode</strong> — Technical Writer (2024–Present)</p>
        <p>
          Application Security Posture Management documentation, APIs,
          integrations, and release notes.
        </p>

        <br />

        <p><strong>Provar Testing</strong> — Technical Writer (2022–2024)</p>
        <p>
          Salesforce automation documentation, user manuals, installation
          guides, and help content.
        </p>

        <br />

        <p><strong>RTDS</strong> — Information Developer (2019–2022)</p>
        <p>
          Telephony and cloud platform docs, APIs, SOPs, FAQs, and LMS content.
        </p>
      </Section>

      <Section title="Skills">
        <p>
          Git · Jira · Confluence · Markdown · Zendesk · WordPress · Salesforce ·
          API Documentation
        </p>
      </Section>
    </>
  );
}
