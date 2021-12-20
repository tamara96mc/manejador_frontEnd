import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
//import { LOGOUT, UPDATE_USER } from '../../redux/types';
import {useNavigate} from 'react-router-dom';


const Profile = (props) => {

    // const [userData, setUserData] = useState(props.credentials.usuario);
    const [userData, setUserData] = useState();

    let navigate = useNavigate();

    // useEffect(() => {
        
    //     setUserData(props.credentials.user);

    // }, [props.credentials]);

  
    const handleSubmit = async () => {

        // try {
        //     let res = await axios.put(`https://api-tmc-pelis.herokuapp.com/api/${userData._id}`, userData);
        //     props.dispatch({type: UPDATE_USER, payload:userData});

        // } catch (error) {
        //     console.log(error)
        // }
    };

    const logOut = () => {
    
        // props.dispatch({ type: LOGOUT });
        // localStorage.clear();
        // navigate("/login");
    }

    const handleChange = (e) => {
        //Función encargada de bindear el hook con los inputs.
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    
    return (
        <div className="basics_column">
        <div className="form">
            <h3>Perfil</h3>
            <div className="form-group">
                <input
                    name="name"
                    type="text"
                    placeholder="Nombre y apellidos"
                    value={userData?.name || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    name="email"
                    type="email"
                    placeholder="correo"
                    value={userData?.email || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    name="password"
                    type="password"
                    placeholder="contraseña"
                    value={'******' || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="basics_row">
            <div className="send-button" onClick={handleSubmit}>Actualizar</div>
            <div className="out-button" onClick={logOut}>Cerrar sesión</div>
            </div>
           
            </div>
        </div>
    )
};

export default Profile;

// export default connect((state) => ({
//     credentials: state.credentials
// }))(Profile);