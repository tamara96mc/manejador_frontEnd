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

    //Para acultar o mostrar el menú lateral
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className='header'>
            <i className="fa fa-bars fa fa-3x" onClick={() => toggleHamburger()}></i>
            <div className="navigation">
                <ul className={` ${hamburgerOpen ? "show" : ""}`}>
{/* Dependiendo de si el usuario está logeado se muestran unos u otros elementos */}
                    <li className='img-nav'>
                        {props.credentials?.user.nombre && <img src={Logo} className="img-logo" onClick={() => goToURL('/')} />}
                    </li>
                    <li>
                        {props.credentials?.user.nombre && props.jiras.jira?.telefono && <Button destino="Clientes" url="/clientes" />}
                    </li>

                    <li>
                        {props.credentials?.user.nombre && props.jiras.jira?.telefono && <Button destino="Proyectos" url="/proyectos" />}
                    </li>
                    <li>
                        {props.credentials?.user.nombre && props.jiras.jira?.telefono && <Button destino="Campos" url="/campos" />}
                    </li>
                    <li>
                        {props.credentials?.user.nombre && !props.jiras.jira?.telefono && <p className='p-info-header'> <b>INFORMACIÓN :</b> El primer paso es configurar la conexión con Jira, después tendrá acceso a las secciones de clientes, campos, proyectos y configuración del manejador WhatsApp.</p>}
                    </li>
                    <li>
                        {!props.credentials?.user.nombre && <Button destino="LogIn" url="/login" />}
                    </li>
                    <li className='img-nav'>
                        {!props.credentials?.user.nombre && <img src={Logo} className="img-logo" />}
                    </li>
                    <li>
                        {!props.credentials?.user.nombre && <Button destino="SingUp" url="/register" />}
                    </li>
                    <li className='img-nav'>
                        {props.credentials?.user.nombre && <img src={user} className="img-user" onClick={() => goToURL('/profile')} />}
                    </li>

                </ul>
            </div>
        </div>
    )
};
export default connect((state) => ({
    credentials: state.credentials,
    jiras: state.jiras
}))(Header);