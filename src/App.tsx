import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from 'react-scroll';
import type { Container } from 'tsparticles-engine';
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import './App.css';

const App = () => {

  const particlesInit = async (main: any) => {
    await loadFull(main);
  }

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
  }, []);

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "eeeeee",
          },
          fpsLimit: 20,
          particles: {
            shape: {
              type: ["polygon", "circle", "edge"],
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1.4,
            },
            color: {
              value: "000000",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 600,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 0.7,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true,
              },
            },
          },
        }}
      />
      <div className="wrapper">
        <header className="nav">
          <nav className="nav-container-actions">
            <ul>
              <li>
                <Link activeClass="active" smooth spy to="about" aria-label="About">
                  About
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="projects" aria-label="Projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="contact" aria-label="Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <a className="link-github" href="https://github.com/nathaliedpettersson" target="_blank" aria-label="Link to Github">Go to GitHub</a>
        </header>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
