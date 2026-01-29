const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)),
          url(${BASE}hero-bg.jpg)
        `
      }}
    >
      <div className="hero-grid">

        <img
          src={`${BASE}profile.jpg`}
          alt="Gagan Singh"
          className="hero-image"
        />

        <div className="hero-text">
          <h1>Gagan Singh</h1>
          <p>
            Technical Writer · API Documentation · Product Docs · Developer Experience
          </p>

          <a
            href={`${BASE}resume.pdf`}
            className="hero-btn"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
