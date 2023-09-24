import ProjectContent from './ProjectContent';
import '../styles/Projects.css';

const ProjectsNew = () => {

    return (
        <div className="project-container">
            {ProjectContent.map((content) => {
                return (
                    <div className="project-card">
                        <div className="project-card-image">
                            <img src={content.image}></img>
                        </div>
                        <div className="project-card-tag">
                            {content.tag.map((tag) => {
                                return (
                                    <span className="tag tag-teal">{tag}</span>
                                )
                            })}
                        </div>
                        <div className="project-card-content">
                            <h4>{content.projectTitle}</h4>
                            <a className="logo" href={content.vercelLink} aria-label="Link Vercel" target="_blank"><img src={content.vercelLogo} /></a>
                            <a className="logo" href={content.githubLink} aria-label="Link GitHub Code" target="_blank"><img src={content.githubLogo} /></a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default ProjectsNew;