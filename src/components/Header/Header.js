import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Logo from '../../images/icon_logo.jpg';
import user from '../../images/user.png';
import { connect } from 'react-redux';
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
                    {props.credentials?.user.nombre &&    <img src={Logo} className="img-logo" onClick={() => goToURL('/jiras')} />}
                    </li>
                    <li>
                      {props.credentials?.user.nombre &&  <Button destino="Clientes" url="/clientes" />}
                    </li>

                    <li>
                     {props.credentials?.user.nombre &&   <Button destino="Proyectos" url="/proyectos" />}
                    </li>
                    <li>
                    {props.credentials?.user.nombre && <Button destino="Campos" url="/campos" />}
                    </li>

                    <li>
                       {!props.credentials?.user.nombre &&  <Button destino="LogIn" url="/login" />}
                    </li>

                    <li>
                       {!props.credentials?.user.nombre &&  <Button destino="SingUp" url="/register" />}
                    </li>
                    <li className='img-nav'>
                      {props.credentials?.user.nombre &&  <img src={user} className="img-user" onClick={() => goToURL('/profile')} />}
                    </li>

                </ul>
            </div>
        </div>
    )
};
export default connect((state) => ({
    credentials: state.credentials
}))(Header);