import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="bg footer">
      <section className="row m-3 justify-content-around">
        <nav className="d-flex justify-content-center">
            <h6 className="text-center p-3">Check out our links!</h6>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <a href="mailto:garrettleebryan@gmail.com" target="_blank"><FontAwesomeIcon className="icon-color" icon={faEnvelope} size='2x'/></a>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <a href="https://github.com/GarrettLB" target="_blank"><FontAwesomeIcon className="icon-color" icon={faFacebook} size='2x'/></a>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <a href="https://www.linkedin.com/in/garrett-bryan-8027231b4" target="_blank"><FontAwesomeIcon className='icon-color' icon={faLinkedin} size='2x'/></a>
            </div>
        </nav>
      </section>
    </div>
  )
};

export default Footer;