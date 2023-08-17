import './Contact.css';
import EmailLogo from '../assets/images/logo-email.svg';
import LinkedinLogo from '../assets/images/logo-linkedin.svg';
import GithubLogo from '../assets/images/logo-github.svg';
import ResumeLogo from '../assets/images/logo-resume.svg';
import SwedishResume from '../assets/images/CV-Nathalie-Pettersson.pdf';

const Contact = () => {

    const linkedinLink = "https://www.linkedin.com/in/nathalie-developer/";
    const githubLink = "https://github.com/nathaliedpettersson";

    return (
        <div className="contact-container">
            <div className="contact-info">
                <div className="divider"></div>
                <h2>Want to know more? Let's talk!</h2>
                <div className="contact-card">
                    <button onClick={() => window.location.href = 'mailto: nathalie.pettersson90@gmail.com'}><img src={EmailLogo} aria-label="Email" /></button>
                </div>
                <div className="contact-card">
                    <a className="link" href={linkedinLink} target="_blank" aria-label="Linkedin"><img src={LinkedinLogo} /></a>
                </div>
                <div className="contact-card">
                    <a className="link" href={githubLink} target="_blank" aria-label="GitHuB"><img src={GithubLogo} /></a>
                </div>
                <div className="contact-card">
                    <a className="resume" href={SwedishResume} target="_blank" aria-label="View swedish resume"><img src={ResumeLogo} /></a>
                </div>
                <div className="divider"></div>
            </div>
        </div>
    )
};

export default Contact;
