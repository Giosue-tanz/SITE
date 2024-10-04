import React from 'react';
import './Contact.css';
import VideoClip from '../../assets/video.mp4';
import img from '../../assets/a3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <div className='c-section'>
            <video src={VideoClip} autoPlay loop muted />
            <h1 className='title-c'>Contact</h1>
            <div className="title-line-c"></div>
        </div>
       
        <div className="contact-wrapper">
          {/* Left contact page */}
          <img src={img} alt="Profile" className='img_profile' /> {/* Correzione qui */}
          {/* End Left contact page */}

          {/* Right contact page */}
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker"><span className="contact-text place">Pisa, Italy</span></i>
              </li>

              <li className="list-item">
                <i className="fa fa-phone"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">University of Pisa</a></span></i>
              </li>

              <li className="list-item">
                <i className="fa fa-envelope"><span className="contact-text gmail"><a href="mailto:giosue.tanz@gmail.com">giosue.tanz@gmail.com</a></span></i>
              </li>
            </ul>

            <hr />

            <ul className="social-media-list">
              <li>
                <a href="https://www.facebook.com/GiosueAiello.tanz" target="_blank" rel="noopener noreferrer" className="contact-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/giosue.aie/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/giosue_aiello" target="_blank" rel="noopener noreferrer" className="contact-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/giosu%C3%A8-aiello-425474243/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>

            <hr />
          </div>
          {/* End Right contact page */}
        </div>
      </section>
    );
  }
}

export default Contact;
