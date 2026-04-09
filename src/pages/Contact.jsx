import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="page">
      <div className="page-header">
        <h1><FaEnvelope /> Contact Me</h1>
        <p className="subtitle">Let's get in touch! Connect with me on social media or send a message.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Find Me Online</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem'}}>
            <a href="mailto:rebina.demo@gmail.com" className="social-link">
              <FaEnvelope className="social-icon" /> rebina.demo@gmail.com
            </a>
            <a href="https://facebook.com/rebina.demo" target="_blank" rel="noreferrer" className="social-link">
              <FaFacebook className="social-icon" /> Facebook Profile
            </a>
            <a href="https://instagram.com/rebina.demo" target="_blank" rel="noreferrer" className="social-link">
              <FaInstagram className="social-icon" /> Instagram
            </a>
            <a href="https://linkedin.com/in/rebina-demo" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin className="social-icon" /> LinkedIn Profile
            </a>
            <a href="https://github.com/rebina-demo" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub className="social-icon" /> GitHub Portfolio
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message..."></textarea>
          <button style={{marginTop: '0.5rem'}} onClick={(e) => e.preventDefault()}>
            <FaPaperPlane /> Send Message
          </button>
        </div>
      </div>
    </div>
  );
}