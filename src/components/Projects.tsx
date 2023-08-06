import './Projects.css';

const Projects = () => {
    const placeholderImage = "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1";

return (
    <div className="project-container">
        <div className="project-card">
            <div className="project-card-image">
                <img src={placeholderImage}></img>
            </div>
            <div className="project-card-content">
            <span className="tag tag-teal">TYPESCRIPT</span>
                {/* <span className="tag tag-black">CYPRESS</span> */}
                <h4>Lorem ipsum project about lorem ipsum</h4>
            </div>
        </div>
        <div className="project-card">
            <div className="project-card-image">
                <img src={placeholderImage}></img>
            </div>
            <div className="project-card-content">
                <span className="tag tag-green">CSS</span>
                <h4>Lorem ipsum project about lorem ipsum</h4>
            </div>
            </div>
            <div className="project-card">
            <div className="project-card-image">
                <img src={placeholderImage}></img>
            </div>
            <div className="project-card-content">
                <span className="tag tag-coral">SVELTE</span>
                <h4>Lorem ipsum project about lorem ipsum</h4>
            </div>
        </div>
        <div className="project-card">
            <div className="project-card-image">
                <img src={placeholderImage}></img>
            </div>
            <div className="project-card-content">
                <span className="tag tag-yellow">REACT</span>
                <h4>Lorem ipsum project about lorem ipsum</h4>
            </div>
        </div>
       
    </div>
)
};

export default Projects;

