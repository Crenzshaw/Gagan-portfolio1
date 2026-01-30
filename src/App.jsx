import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      setShowTopBtn(scrollTop > 400); // 👈 show after scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 🔥 SCROLL PROGRESS BAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          width: `${scrollProgress}%`,
          backgroundColor: "#8b52ff",
          zIndex: 9999,
          transition: "width 0.15s ease-out",
        }}
      />

      {/* ⬆️ SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          right: "30px",
          bottom: "30px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "#8b52ff",
          color: "#000",
          border: "none",
          cursor: "pointer",
          fontSize: "30px",
          fontWeight: "700",
          zIndex: 9999,
          boxShadow: "0 10px 30px rgba(139,82,255,0.35)",
          opacity: showTopBtn ? 1 : 0,
          transform: showTopBtn ? "scale(1)" : "scale(0.85)",
          pointerEvents: showTopBtn ? "auto" : "none",
          transition: "all 0.25s ease",
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <Nav />
      <Hero />

      <main>
        <Work />
        <Tools />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
