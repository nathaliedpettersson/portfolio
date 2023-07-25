import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container } from 'tsparticles-engine';
import { Link } from 'react-scroll';
import './App.css';

const App = () => {

  const particlesInit = async (main: any) => {
    await loadFull(main);
  }

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  // Import logos as images in a folder later 
  const githubLogo = "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png";
  const linkedinLogo = "https://cdn-icons-png.flaticon.com/512/61/61109.png";

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "FFFFFF",
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
              value: "rgb(0,28,28)",
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
                <Link activeClass="active" smooth spy to="about">
                  About Me
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <a href="https://github.com/nathaliedpettersson" target="_blank"><img className="github-logo" src={githubLogo}></img></a>
          <a href="https://www.linkedin.com/in/nathalie-developer/" target="_blank"><img className="linkedin-logo" src={linkedinLogo}></img></a>
        </header>

        <section id="about">Hi, I am Nathalie. Portfolio is under construction but please visit my GitHub repos for now.</section>
        <section id="projects"></section>
        <section id="contact"></section>
      </div>
    </div>
  );
}

export default App;
