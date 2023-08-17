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
    console.log(container);
  }, []);

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "ffffff",
          },
          fpsLimit: 20,
          particles: {
            shape: {
              type: "polygon",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1.4,
            },
            color: {
              value: "d2b48c",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 800,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1,
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
        </header>

        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
