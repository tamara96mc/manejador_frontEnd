import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import useForm from "../../functions/hooks/useFromRegister";
import { validateSignUp } from "../../functions/hooks/validateInput";

const Register = () => {

    const history = useNavigate();
    const [msgError, setmsgError] = useState("");

    const submit = async () => {


        // try {
        //     debugger;
        //      let res = await axios.post("https://api-tmc-pelis.herokuapp.com/api/signup", values);
        //     setmsgError("Usuario registrado con éxito.");
        //     setTimeout(() => {
        //         history("/login");    
        //     }, 2000);
            
        // } catch (error) {
        //     //console.log(res.msg);
        //     console.log(error);
        //     setmsgError("Usuario no registrado.");
        // }
    };

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateSignUp);


    return (

        <div className="basics_column">

        <div className="form">
            <h3>Registro</h3>
            <div className="form-group">

                <input
                    name="name"
                    type="text"
                    placeholder="Nombre completo"
                    value={values.name || ''}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
                <input
                    name="email"
                    type="email"
                    placeholder="correo"
                    value={values.email || ''}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
                <input
                    name="password"
                    type="password"
                    placeholder="contraseña"
                    value={values.password || ''}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="info">{msgError}</div>
            <div className="send-button" onClick={handleSubmit}>Registrar</div>

        </div>
        </div>
    )
};

export default Register;