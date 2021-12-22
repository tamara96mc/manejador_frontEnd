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
    }

    return (
        <div className='header'>
            <img src={Logo} className="img-logo"  onClick={() => goToURL('/jiras')}  />

            <div className="navigation">
                <ul>
                    {/*
                    <li>
                        <DropdownM />
                    </li>
                    <li>
                        <DropdownJ />
                    </li> */}
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
                  
                    <li>
                    <img src={user} className="img-user"  onClick={() => goToURL('/profile')}  />
                    </li>
                  
                </ul>
            </div>
            {/* <div className="hamburger1" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div > */}
            <style jsx>{`

        .header{
        background-color: rgb(204, 107, 107);;
        display: flex;
        justify-content: space-around;
        align-items: center;


        }

        .navigation{
        background-color: rgb(204, 107, 107);;
        width: 100%;
        height: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        }


        .navigation ul{
        margin:0;
        padding:0;
        display: flex;
       justify-content: space-between;
        align-items: center;
        overflow: hidden;
        width: 100%;
        }
        .navigation ul li{
        list-style-type: none;
      // margin:2em;
       
        }
        
        .hamburger1{
        display: none;
        z-index: 6;
    
        } 
    // @media (max-width: 923px){

    //     .hamburger1{
    //     width: 7em;
    //     display:flex;
    //     z-index: 6;
    //     }
       
    //     .navigation ul{
    //     display: ${hamburgerOpen ? 'flex' : 'none'};
    //     background-color: #008080;
    //     height: 100%;
    //     width: 8em;
    //     position: fixed;
    //     top: 0;
    //     right: 0;
    //     margin-top:1em;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;

    //     }

    //     .navigation ul li{
    //     list-style-type: none;
    //        margin:0.5em;
    // }
`}</style>
        </div>
    )
};
export default Header;