import React from 'react';
import './FooterStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Tanz</h4>
            <ul>
              <li><a href="#">about us</a></li> {/* Correzione qui */}
              <li><a href="#">our services</a></li> {/* Correzione qui */}
              <li><a href="#">privacy policy</a></li> {/* Correzione qui */}
              <li><a href="#">affiliate program</a></li> {/* Correzione qui */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Profile</h4>
            <ul>
              <li><a href="#">about me</a></li> {/* Correzione qui */}
              <li><a href="#">school</a></li> {/* Correzione qui */}
              <li><a href="#">goals</a></li> {/* Correzione qui */}
              <li><a href="#">curriculum</a></li> {/* Correzione qui */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">T-shirts</a></li> {/* Correzione qui */}
              <li><a href="#">bag</a></li> {/* Correzione qui */}
              <li><a href="#">shoes</a></li> {/* Correzione qui */}
              <li><a href="#">band</a></li> {/* Correzione qui */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow me</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/GiosueAiello.tanz"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com/giosue_aiello"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/giosue.aie/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/in/giosu%C3%A8-aiello-425474243/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
