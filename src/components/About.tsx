import ProfileImage from '../assets/images/IMG-2858.png';
import '../styles/About.css';

const About = () => {
    return (
        <div className="container">
            <div className="about-content">
                <h1>I'm Nathalie, a frontend web developer.
                </h1>
                <p className="about-text">My curiosity for tech comes from those typical scenes in a TV show or movie where they are typing fast on the keyboard, doing incredible things or hacking into stuff. And yes, true story.</p>
                <p className="about-text">Key values for me in a workplace are diversity, communication and always striving to improve. The tech industry is always on the move, and therefore so should our enthusiasm and learning curve.</p>
                <p className="about-text">I sampled a few projects below but I do encourage you also to check out my GitHub for more and to see what I am currently working on.</p>
            </div>
            <div className="about-image">
                <img className="profile-image" src={ProfileImage} alt="Profile image" />
            </div>

        </div>
    )
}

export default About;


