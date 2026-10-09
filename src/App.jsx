import "./styles/global.css";
import "./styles/animations.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Research from "./components/Research/Research";
import Labs from "./components/Labs/Labs";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import Education from "./components/Education/Education";
import Terminal from "./components/Terminal/Terminal";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Research />
        <Labs />
        <Skills />
        <Certifications />
        <Education />
        <Terminal />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
