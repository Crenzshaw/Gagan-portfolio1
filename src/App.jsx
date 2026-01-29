import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
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
