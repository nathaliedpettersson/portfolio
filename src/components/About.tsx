import '../styles/About.css';
import ProfileImage from '../assets/images/IMG-2858.png';

const About = () => {
    return (
        <div className="container">
            <div className="about-content">
                <h1>I'm Nathalie, a frontend web developer.
                </h1>
                {/* <h4 className="about-text">Portfolio is under construction.</h4>
                <h4 className="about-text">Still curious?</h4>
                <h4 className="about-text">Check out my GitHub down below by using the link.</h4> */}
            <p className="about-text">My curiosity for tech comes from those typical scenes in a tv show or movie where they are typing fast on the keyboard, doing cool things or hacking into stuff. And yes, that's actually the truth.</p>
            <p className="about-text">I decided to do something about that and pursue a career within IT by learning Frontend development through a school in Malmö, Sweden.</p>
            </div>
            <div className="about-image">
                <img className="profile-image" src={ProfileImage} alt="Profile image" />
            </div>
        </div>
    )
}

export default About;
