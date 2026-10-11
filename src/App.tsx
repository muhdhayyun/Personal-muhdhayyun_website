import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
