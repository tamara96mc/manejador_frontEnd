import React, { useState} from 'react';
import clienteAxios from '../../config/axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClipboardList } from '@fortawesome/free-solid-svg-icons';

import useForm from "../../functions/hooks/useFromRegister";
import { validateSignUp } from "../../functions/hooks/validateInput";

const Register = () => {

    const history = useNavigate();
    const [msgError, setmsgError] = useState("");

    const submit = async () => {


        try {
             let res = await clienteAxios.post("api/register", values);
            setmsgError("Usuario registrado con éxito.");
            setTimeout(() => {
                history("/login");    
            }, 2000);

        } catch (error) {
            console.log(error);
            setmsgError("El usuario no se puede registrar.");
        }
    };

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateSignUp);


    return (

        <div className="container">
            <form className='form-user' >
            
                <h1 className='mb-1'> Nuevo usuario</h1>
                <FontAwesomeIcon  icon={faClipboardList} size="6x"/>
                <div className="row">
                    <div className="col-40">
                        <label> <i class="fa fa-user"></i>Nombre</label>
                    </div>
                    <div className="col-60">
                        <input
                            className={`${errors.nombre && "inputError"}`}
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
                          className={`${errors.correo && "inputError"}`}
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
                          className={`${errors.contraseya && "inputError"}`}
                            name="contraseya"
                            type="password"
                            placeholder="contraseña"
                            value={values.contraseya || ''}
                            onChange={handleChange}
                        />
                        {errors.contraseya && <p className="error">{errors.contraseya}</p>}
                    </div>
                </div>

                <div className="basics_column mt-4">
                    <div className="info">{msgError}</div>
                    <button className="send-button" onClick={handleSubmit}>Crear usuario</button>
                </div>
    
            </form>
        </div>
    )
};

export default Register;