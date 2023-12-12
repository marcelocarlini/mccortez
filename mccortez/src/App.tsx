import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
/* import { Testimonials } from "./components/Testimonials"; */
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
