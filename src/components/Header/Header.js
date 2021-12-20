import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Logo from '../../images/icon_logo.jpg';
import DropdownJ from '../DropdownJ/DropdownJ';
import DropdownM from '../DropdownM/DropdownM';
import Hamburger from '../Hamburger/Hamburger';

const Header = (props) => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className='header'>
        <img src={Logo} className="img-logo" />
 
        <div className="navigation">
                <ul>
                    <li>
                        <DropdownM />
                    </li>
                    {/* <li>
                        <DropdownJ />
                    </li> */}
                    <li>
            
                    </li>
                    <li>
            
                    </li>
                    <li>
                        <Button destino="LogIn" url="/login" />
                    </li>
                    <li>
                        <Button destino="SingUp" url="/register" />
                    </li>
                    <li>
                        <Button destino="User" url="/profile" />
                    </li>
                </ul>
            </div>
            <div className="hamburger1" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
        </div > 
            <style jsx>{`

        .header{
        background-color:#008080;
        display: flex;
        justify-content: space-around;
        align-items: center;

        }

        .navigation{
        background-color:#008080;
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
        width: 45em;
        }
        .navigation ul li{
        list-style-type: none;
      // margin:2em;
       
        }
        
        .hamburger1{
        display: none;
        z-index: 6;
    
        } 
    @media (max-width: 923px){

        .hamburger1{
        width: 7em;
        display:flex;
        z-index: 6;
        }
       
        .navigation ul{
        display: ${hamburgerOpen ? 'flex' : 'none'};
        background-color: #008080;
        height: 100%;
        width: 8em;
        position: fixed;
        top: 0;
        right: 0;
        margin-top:1em;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        }

        .navigation ul li{
        list-style-type: none;
           margin:0.5em;
    }
`}</style>
        </div>
    )
};
export default Header;