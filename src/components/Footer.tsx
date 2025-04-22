import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p>Eva Björling</p>
          <p>073 877 41 88</p>
          <p>eva@evesteve.se</p>
        </div>
        <p>&copy; 2025 evesteve web.</p>
        <div className="socials">
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
