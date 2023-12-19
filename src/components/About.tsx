import ProfileImage from '../assets/images/IMG-2858.png';
import '../styles/About.css';

const About = () => {
    return (
        <div className="container">
            <div className="about-content">
                <h1>I'm Nathalie, a frontend web developer.
                </h1>
                <p className="about-text">My curiosity for tech comes from those typical scenes in a TV show or movie where they are typing fast on the keyboard, doing incredible things or hacking into stuff. Yes, true story.</p>
                <p className="about-text">I'd love to put my skills to work and be a part of a team and company where we all strive together to make the world a better place. You can also find me as a volunteer at Pink Programming which is an organization encouraging women and non-binary people to get into tech. </p>
                <p className="about-text">I sampled a few projects below, but I do encourage you to check out my GitHub for more and to see what I am currently working on.</p>
            </div>
            <div className="about-image">
                <img className="profile-image" src={ProfileImage} alt="Profile image" />
            </div>

        </div>
    )
}

export default About;


