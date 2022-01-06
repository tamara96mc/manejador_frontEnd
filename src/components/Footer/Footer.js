import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook , faTwitter , faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {

    return (
      
            <div class="footer-bottom">
                <p>Copyright &copy; <a href="#">Jira with WhatsApp</a>  </p>
                    <ul class="socials">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" className='icon-footer' /></a></li>
                        <li><a href="#"> <FontAwesomeIcon icon={faTwitter} size="2x" className='icon-footer'/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" className='icon-footer' /> </a></li>
                    </ul>
            </div>
    )
};
export default Footer;