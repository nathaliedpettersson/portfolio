import VercelLogo from '../assets/images/logo-vercel.svg';
import GithubLogo from '../assets/images/logo-github.svg';
import '../styles/Projects.css';

const Projects = () => {
    const placeholderImage = "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1";

    return (
        <div className="project-container">
            <div className="project-card">
                <div className="project-card-image">
                    <img src={placeholderImage}></img>
                </div>
                <div className="project-card-tag">
                    <span className="tag tag-teal">TYPESCRIPT</span>
                    <span className="tag tag-black">CYPRESS</span>
                    <span className="tag tag-orange">API</span>
                </div>
                <div className="project-card-content">
                    <h4>Lorem ipsum project about lorem ipsum</h4>
                    <a className="logo" href="#" aria-label="" target="_blank"><img src={VercelLogo} /></a> 
                <a className="logo" href="#" aria-label="" target="_blank"><img src={GithubLogo} /></a> 
                </div>
            </div>
            <div className="project-card">
                <div className="project-card-image">
                    <img src={placeholderImage}></img>
                </div>
                <div className="project-card-tag">
                    <span className="tag tag-purple">HTML</span>
                    <span className="tag tag-green">CSS</span>
                </div>
                <div className="project-card-content">
                    <h4>Lorem ipsum project about lorem ipsum</h4>
                    <a className="logo" href="#" aria-label="" target="_blank"><img src={VercelLogo} /></a> 
                <a className="logo" href="#" aria-label="" target="_blank"><img src={GithubLogo} /></a> 
                </div>
            </div>
            <div className="project-card">
                <div className="project-card-image">
                    <img src={placeholderImage}></img>
                </div>
                <div className="project-card-tag">
                    <span className="tag tag-coral">SVELTE</span>
                </div>
                <div className="project-card-content">
                    <h4>Lorem ipsum project about lorem ipsum</h4>
                    <a className="logo" href="#" aria-label="" target="_blank"><img src={VercelLogo} /></a> 
                <a className="logo" href="#" aria-label="" target="_blank"><img src={GithubLogo} /></a> 
                </div>
            </div>
            <div className="project-card">
                <div className="project-card-image">
                    <img src={placeholderImage}></img>
                </div>
                <div className="project-card-tag">
                    <span className="tag tag-yellow">REACT</span>
                </div>
                <div className="project-card-content">
                    <h4>Lorem ipsum project about lorem ipsum</h4>
                    <a className="logo" href="#" aria-label="" target="_blank"><img src={VercelLogo} /></a> 
                <a className="logo" href="#" aria-label="" target="_blank"><img src={GithubLogo} /></a> 
                </div>
            </div>

        </div>
    )
};

export default Projects;

