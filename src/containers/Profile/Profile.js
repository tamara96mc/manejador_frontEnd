import React, {useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faIdCardAlt  } from '@fortawesome/free-solid-svg-icons';

import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import { useNavigate } from 'react-router-dom';
import useForm from "../../functions/hooks/useFromRegister";
import { validateSignUp } from "../../functions/hooks/validateInput";


const Profile = (props) => {


    let navigate = useNavigate();
    const [msgError, setmsgError] = useState();

    useEffect(() => {
        
        setValues(props.credentials.user);

    }, [props.credentials]);

    useEffect(() => {

        setTimeout(() => {
            setmsgError('')
        }, 3000);

    }, [msgError]);


    const submit = async () => {

        try {
            let res = await clienteAxios.put(`/api/${props.credentials.user.id}`, values);
            props.dispatch({ type: UPDATE_USER, payload: values });
            setmsgError(`Usuario actualizado`);

        } catch (error) {
            console.log(error)
            setmsgError(`Error al actualizar el usuario`);
        }
    };
    const { handleChange, handleSubmit, values, setValues, errors } = useForm(submit, validateSignUp);


    const logOut = () => {

        props.dispatch({ type: LOGOUT });
        localStorage.clear();
        navigate("/login");
    }



    return (

        <div className="container">
            <form className='form-user'>
                <h1 className='mb-1' >Datos usuario</h1>
                <FontAwesomeIcon  icon={faIdCardAlt} size="6x"/>
                <div className="row">
                    <div className="col-40">
                        <label> <i class="fa fa-user"></i>Nombre</label>
                    </div>
                    <div className="col-60">
                        <input
                            name="nombre"
                            type="text"
                            placeholder="Nombre completo"
                            value={values.nombre || ''}
                            onChange={handleChange}
                        />
                        {errors.nombre && <p className="error">{errors.nombre}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-40">
                        <label> <i class="fa fa-envelope"></i>Email</label>
                    </div>
                    <div className="col-60">
                        <input
                            name="correo"
                            type="email"
                            placeholder="correo"
                            value={values.correo || ''}
                            onChange={handleChange}
                        />
                        {errors.correo && <p className="error">{errors.correo}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-40">
                        <label> <i class="fa fa-key"></i>Contraseña</label>
                    </div>
                    <div className="col-60">
                        <input
                            name="contraseya"
                            type="password"
                            placeholder="contraseña"
                            value={values.contraseya || ''}
                            onChange={handleChange}
                        />
                        {errors.contraseya && <p className="error">{errors.contraseya}</p>}
                    </div>
                </div>

           
                    <div className="info-update-user">{msgError}</div>
                <div className="basics_row_space row_to_column mt-2">
                    <button className="send-button" onClick={handleSubmit}>Actualizar</button>
                    <button className="send-button" onClick={logOut}>Cerrar sesión</button>
                </div>
            </form>
        </div>
    )
};


export default connect((state) => ({
    credentials: state.credentials
}))(Profile);