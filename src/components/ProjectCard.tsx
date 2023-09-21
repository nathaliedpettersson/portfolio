// This file is not in use yet

const ProjectCard = (props: any) => {

    <div className="project-card">
    <div className="project-card-image">
        <img src={props.image}></img>
    </div>
    <div className="project-card-tag">
        <span className="tag tag-teal">{props.tag}</span>
        <span className="tag tag-black">{props.tag}</span>
    </div>
    <div className="project-card-content">
        <h4>{props.projectTitle}</h4>
        <a className="logo" href={props.vercelLink} aria-label="Link Vercel" target="_blank"><img src={props.vercelLogo} /></a>
        <a className="logo" href={props.githubLink} aria-label="Link GitHub Code" target="_blank"><img src={props.githubLogo} /></a>
    </div>
</div>
    
}

export default ProjectCard;