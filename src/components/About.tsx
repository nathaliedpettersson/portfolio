// import ReactTyped from 'react-typed';
import './About.css';
import ProfileImage from '../assets/images/IMG-3162.jpg';

const About = () => {
    return (
        <div className="container">
            <div className="about-content">
                <h1>I'm Nathalie, a frontend developer.
                    {/* <ReactTyped strings={["I'm Nathalie, a frontend developer."]} typeSpeed={60} loop={false} showCursor={false} /> */}
                </h1>
                <h4 className="about-text">Portfolio is under construction.</h4>
                <h4 className="about-text">Still curious?</h4>
                <h4 className="about-text">Check out my GitHub.</h4>
            </div>
            <div className="about-image">
                <img className="profile-image" src={ProfileImage} alt="Profile image" />
            </div>
        </div>
    )
}

export default About;
