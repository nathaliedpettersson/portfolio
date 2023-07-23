import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from 'react-scroll';
import './App.css';

const App = () => {

  const particlesInit = async (main:any) => {
    await loadFull(main);
  }

  return (
    <div className="App">
         <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "f1f1f1",
        },
        fpsLimit: 20,
        particles: {
          shape: {
            type: "circle",
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
              speed: 1.2,
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
      <h1>Portfolio in progress. Stay tuned for updates!</h1>
      <p>Take a look at my GitHub profile while waiting...</p>
      <div className="link-container">
      <a href="https://github.com/nathaliedpettersson" target="_blank">REPOS</a>
      </div>
      </div>
    </div>
  );
}

export default App;
