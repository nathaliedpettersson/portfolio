import './Contact.css';
import EnglishResume from '../assets/images/CV-English-Nathalie-Pettersson.pdf';
import SwedishResume from '../assets/images/CV-Nathalie-Pettersson.pdf';

const Contact = () => {

    const linkedinLink = "https://www.linkedin.com/in/nathalie-developer/";
    const githubLink = "https://github.com/nathaliedpettersson";

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Want to know more? Let's talk! 💬</h2>
                <div className="contact-card">
                    <p aria-label="Email">Mail: nathalie.pettersson90@gmail.com</p>
                </div>
                <div className="contact-card">
                    <a className="link" href={linkedinLink} target="_blank" aria-label="Linkedin"><p>Linkedin</p></a>
                </div>
                <div className="contact-card">
                    <a className="link" href={githubLink} target="_blank" aria-label="GitHuB"><p>Visit my GitHub</p></a>
                </div>
                <div className="contact-card">
                    <a className="resume" href={SwedishResume} target="_blank" aria-label="View swedish resume">Swedish CV</a>
                    <a className="resume" href={EnglishResume} target="_blank" aria-label="View english resume">English resume</a>
                </div>
            </div>
        </div>
    )
};

export default Contact;