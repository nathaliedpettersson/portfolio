import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from 'react-scroll';
import './App.css';

const App = () => {

  const particlesInit = async (main:any) => {
    await loadFull(main);
  }

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  
  return (
    <div className="App">
      <h1>Portfolio in progress. Stay tuned for updates!</h1>
      <p>Take a look at my GitHub profile while waiting...</p>
      <div className="link-container">
      <a href="https://github.com/nathaliedpettersson" target="_blank">REPOS</a>
      </div>
    </div>
  );
}

export default App;
