import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Logo from '../../images/icon_logo.jpg';
import user from '../../images/user.png';
import DropdownJ from '../DropdownJ/DropdownJ';
import DropdownM from '../DropdownM/DropdownM';
import Hamburger from '../Hamburger/Hamburger';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

    const history = useNavigate();

    const goToURL = (url) => {
        history(url);
    }

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
        console.log("entra")
    }

    return (
        <div className='header'>
            <i className="fa fa-bars fa fa-3x" onClick={() => toggleHamburger()}></i>
            <div className="navigation">
                <ul className={` ${hamburgerOpen ? "show" : ""}`}>

                    <li className='img-nav'>
                        <img src={Logo} className="img-logo" onClick={() => goToURL('/jiras')} />
                    </li>
                    <li>
                        <Button destino="Clientes" url="/clientes" />
                    </li>

                    <li>
                        <Button destino="Proyectos" url="/proyectos" />
                    </li>
                    <li>
                        <Button destino="Campos" url="/campos" />
                    </li>

                    <li>
                        <Button destino="LogIn" url="/login" />
                    </li>

                    <li>
                        <Button destino="SingUp" url="/register" />
                    </li>
                    <li className='img-nav'>
                        <img src={user} className="img-user" onClick={() => goToURL('/profile')} />
                    </li>

                </ul>
            </div>

            <style jsx>{`

.fa-bars{

    display: none;
}
  
  .navigation ul.show {
    transform: translateX(-20px);

  }

            @media (max-width: 923px){
 
  .navigation ul {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: #2f3640;
    width: 40%;
    height: 100%;
    opacity: 0.9;
    padding: 2em;
    transform: translateX(-500px);
    transition: transform 0.5s ease-in-out;
  }

  .navigation ul li {
margin:auto;
    opacity: 1;
  }

  .fa-bars{

    display: block;
    position: absolute;
    top: 0.4em;
    right:0.4em;
    margin:auto;
    color: #f7f3f3;
    cursor: pointer;
}

.nav-button{

    width: 100%;
    opacity: 1;
}

.img-logo , .img-user{

    margin: 2em;

}


}

       

`}</style>
        </div>
    )
};
export default Header;