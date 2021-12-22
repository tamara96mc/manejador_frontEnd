import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Logo from '../../images/icon_logo.jpg';
import DropdownJ from '../DropdownJ/DropdownJ';
import DropdownM from '../DropdownM/DropdownM';
import Hamburger from '../Hamburger/Hamburger';

const Footer = (props) => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
      
            <div class="footer-bottom">
                <p>Copyright &copy; <a href="#">Jira with WhatsApp</a>  </p>
                    <ul class="socials">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                    </ul>
            </div>
    )
};
export default Footer;