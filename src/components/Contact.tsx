import './Contact.css';
import SwedishResume from '../assets/images/CV-Nathalie-Pettersson.pdf';
import EnglishResume from '../assets/images/CV-English-Nathalie-Pettersson.pdf';

const Contact = () => {
return (
    <div className="contact-container">
<div className="contact-info">
<h2>Want to know more? Let's talk!</h2>
    <div className="contact-card">
<p>Email</p>
    </div>
    <div className="contact-card">
<p>Linkedin</p>
    </div>
    <div className="contact-card">
<p>Visit my GitHub</p>
    </div>
    <div className="contact-card">
<a className="resume" href={SwedishResume} target="_blank">Swedish CV</a>
<a className="resume" target="_blank" href={EnglishResume}>English resume</a>
    </div>
</div>
    </div>
)
};

export default Contact;