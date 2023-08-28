import ChatAppImage from '../assets/images/chat-app.png';
import ChuckNorrisImage from '../assets/images/chuck-norris.png';
import DogApiImage from '../assets/images/dog-directory.png';
import FridgeAppImage from '../assets/images/fridge-app.png';
import VercelLogo from '../assets/images/logo-vercel.svg';
import GithubLogo from '../assets/images/logo-github.svg';

import '../styles/Projects.css';

const Projects = () => {

    const vercelLinkCA = "https://nathaliedpettersson.github.io/Chat-App/"
    const githubLinkCA = "https://github.com/nathaliedpettersson/Chat-App"

    const vercelLinkCN = "https://chuck-norris-joke-generator.vercel.app/"
    const githubLinkCN = "https://github.com/nathaliedpettersson/Chuck-Norris-Joke-Generator"

    const vercelLinkDD = "https://dog-directory-api-with-jest.vercel.app/"
    const githubLinkDD = "https://github.com/nathaliedpettersson/DogDirectoryAPI-with-Jest"

    const vercelLinkFA = "https://fridge-app-delta.vercel.app/"
    const githubLinkFA = "https://github.com/nathaliedpettersson/Fridge-App"

    return (
        <div className="project-container">
            <div className="project-card">
                <div className="project-card-image">
                    <img src={ChatAppImage}></img>
                </div>
                <div className="project-card-tag">
                    <span className="tag tag-teal">TYPESCRIPT</span>
                    <span className="tag tag-black">FIREBASE</span>
                </div>
                <div className="project-card-content">
                    <h4>GRIT - Chat Application 💬 👋</h4>
                    <a className="logo" href={vercelLinkCA} aria-label="Link Vercel" target="_blank"><img src={VercelLogo} /></a>
                    <a className="logo" href={githubLinkCA} aria-label="Link GitHub Code" target="_blank"><img src={GithubLogo} /></a>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card-image">
                    <img src={ChuckNorrisImage}></img>
                </div>
                <div className="project-card-tag">
                    <span className="tag tag-purple">HTML</span>
                    <span className="tag tag-green">CSS</span>
                    <span className="tag tag-pink">JAVASCRIPT</span>
                    <span className="tag tag-orange">API</span>
                </div>
                <div className="project-card-content">
                    <h4>Chuck Norris Joke Generator</h4>
                    <a className="logo" href={vercelLinkCN} aria-label="Link Vercel" target="_blank"><img src={VercelLogo} /></a>
                    <a className="logo" href={githubLinkCN} aria-label="Link GitHub Code" target="_blank"><img src={GithubLogo} /></a>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card-image">
                    <img src={DogApiImage}></img>
                </div>
                <div className="project-card-tag">
                    <span className="tag tag-yellow">JEST</span>
                    <span className="tag tag-orange">API</span>
                    <span className="tag tag-coral">REACT</span>
                </div>
                <div className="project-card-content">
                    <h4>Dog Directory API with testing</h4>
                    <a className="logo" href={vercelLinkDD} aria-label="Link Vercel" target="_blank"><img src={VercelLogo} /></a>
                    <a className="logo" href={githubLinkDD} aria-label="Link GitHub Code" target="_blank"><img src={GithubLogo} /></a>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card-image">
                    <img src={FridgeAppImage}></img>
                </div>
                <div className="project-card-tag">
                    <span className="tag tag-coral">REACT</span>
                    <span className="tag tag-pink">JAVASCRIPT</span>
                </div>
                <div className="project-card-content">
                    <h4>GRIT - My Fridge Application</h4>
                    <a className="logo" href={vercelLinkFA} aria-label="Link Vercel" target="_blank"><img src={VercelLogo} /></a>
                    <a className="logo" href={githubLinkFA} aria-label="Link GitHub Code" target="_blank"><img src={GithubLogo} /></a>
                </div>
            </div>
        </div>
    )
};

export default Projects;

