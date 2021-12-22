import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from "../../functions/hooks/useFormLogin.js";
import { validateLogin } from "../../functions/hooks/validateInput";
//import { LOGIN } from '../../redux/types';
//import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';

const Login = (props) => {

    const history = useNavigate();
    const [msgError, setmsgError] = useState("");

    const submit = async () => {

        // try {
        //     let res = await clienteAxios.post("/api/signin", values);
        //     setmsgError(`Usuario correcto`);
        //     setTimeout(() => {
        //        // props.dispatch({type:LOGIN, payload:res.data});
        //         history("/");   
        //     }, 2000);

        // } catch (error) {
        //     console.log(error);
        //     setmsgError(`El usuario no es correcto`);
        // }
    }

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateLogin);



    return (

        <div className="container">
            <form className='form-user' >
                <h1 className='mb-2'>Login</h1>
                <div className="row">
                    <div className="col-40">
                        <label >Usuario</label>
                    </div>
                    <div className="col-60">
                        <input
                            className={`${errors.email && "inputError"}`}
                            name="email"
                            type="email"
                            placeholder="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-40">
                        <label >Contraseña</label>
                    </div>
                    <div className="col-60">
                        <input
                            className={`${errors.password && "inputError"}`}
                            name="password"
                            type="password"
                            placeholder="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                </div>
                <div className="basics_column mt-3">
                    <div className="info">{msgError}</div>
                    <div className="send-button" onClick={handleSubmit}>Login</div>
                </div>
            </form>
        </div>
    );

}

export default (Login);
