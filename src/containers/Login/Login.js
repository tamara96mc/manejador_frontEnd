import React, { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from "../../functions/hooks/useFormLogin.js";
import { validateLogin } from "../../functions/hooks/validateInput";
import { LOGIN } from '../../redux/types';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';

const Login = (props) => {

    const history = useNavigate();
    const [msgError, setmsgError] = useState("");

    const submit = async () => {

        try {
            let res = await clienteAxios.post("/api/login", values);
            setmsgError(`Usuario correcto`);
            setTimeout(() => {
               props.dispatch({type:LOGIN, payload:res.data});
                history("/");   
            }, 2000);

        } catch (error) {
            console.log(error);
            setmsgError(`El usuario no es correcto`);
        }
    }

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateLogin);



    return (

        <div className="container">
            <form className='form-user' >
                <h1 className='mb-1'>LogIn</h1>
                <i class="fas fa-sign-in-alt fa-6x"></i>
                <div className="row">
                    <div className="col-40">
                   <label ><i class="fa fa-user"></i> Correo</label>
                    </div>
                    <div className="col-60">
                        <input
                            className={`${errors.correo && "inputError"}`}
                            name="correo"
                            type="email"
                            placeholder="Correo del usuario"
                            value={values.correo}
                            onChange={handleChange}
                        />
                        {errors.correo && <p className="error">{errors.correo}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-40">
                        <label > <i class="fa fa-key"></i> Contraseña</label>
                    </div>
                    <div className="col-60">
                        <input
                            className={`${errors.contraseya && "inputError"}`}
                            name="contraseya"
                            type="password"
                            placeholder="La contraseña del usuario"
                            value={values.contraseya}
                            onChange={handleChange}
                        />
                        {errors.contraseya && <p className="error">{errors.contraseya}</p>}
                    </div>
                </div>
                <div className="basics_column mt-3">
                    <div className="info">{msgError}</div>
                    <button className="send-button" onClick={handleSubmit}>Entrar</button>
                </div>
            </form>
        </div>
    );

}

export default connect()(Login);
