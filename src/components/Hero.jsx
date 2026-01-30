export default function Hero() {
  const BASE = import.meta.env.BASE_URL;

  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-image-wrap">
          <img
            src={`${BASE}profile.jpg`}
            alt="Gagan Singh"
            className="hero-image"
          />
        </div>

        <div className="hero-text">
          <h1>Gagan Singh</h1>

          <p>
            Technical Writer · API Documentation · Product Docs · Developer
            Experience
          </p>

          <a href={`${BASE}resume.pdf`} className="hero-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
