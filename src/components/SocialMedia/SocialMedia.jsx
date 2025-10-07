import React from "react";
import "./SocialMedia.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiThreads } from "react-icons/si";

function SocialMedia() {
  return (
    <section id="social" className="social-section">
      <div className="social-container">
        {/* Left Side - Let's Talk */}
        <div className="talk-section">
          <h2 className="talk-title">
            Let<span>'</span>s <span>Talk</span>
          </h2>
          <p className="talk-text">
            I'm open to new opportunities and collaborations.  
            Feel free to message me about anything you'd like to discuss.
          </p>
          <div className="contact-info">
            <p>📧 <a href="mailto:arnabsenapati573@gmail.com">arnabsenapati573@gmail.com</a></p>
            <p>📞 +91 7384708532</p>
            <p>📍 West Bengal, India</p>
          </div>
        </div>

        {/* Right Side - Connect With Me */}
        <div className="connect-section">
          <h2 className="social-title">Connect With Me</h2>
          <p className="social-subtitle">
            You can find me on these platforms. Let’s connect and collaborate.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/arnab.sena.fb" target="_blank" rel="noopener noreferrer" className="icon facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/arnab.senapati__" target="_blank" rel="noopener noreferrer" className="icon instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/arnab-senapati" target="_blank" rel="noopener noreferrer" className="icon linkedin">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/arnab-senapati" target="_blank" rel="noopener noreferrer" className="icon github">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/arnab_senapati25" target="_blank" rel="noopener noreferrer" className="icon leetcode">
              <SiLeetcode />
            </a>
            <a href="https://www.threads.com/@arnab.senapati__" target="_blank" rel="noopener noreferrer" className="icon threads">
              <SiThreads />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
