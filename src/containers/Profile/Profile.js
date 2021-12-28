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

        <div  className="container">
        <form className='form-user'>
          <h1 className='mb-3' >Crear usuario</h1>
          <div  className="row">
            <div  className="col-40">
              <label> <i class="fa fa-user"></i>Nombre</label>
            </div>
            <div  className="col-60">
              <input  name="nombre"
                    type="text"
                    placeholder="Nombre del usuario"
                    value={userData?.nombre || ''}
                    onChange={handleChange}/>
            </div>
          </div>
          <div  className="row">
            <div  className="col-40">
              <label> <i class="fa fa-envelope"></i>Email</label>
            </div>
            <div  className="col-60">
              <input  name="email"
                    type="email"
                    placeholder="correo"
                    value={userData?.email || ''}
                    onChange={handleChange}/>
            </div>
          </div>
  
          <div  className="row">
            <div  className="col-40">
              <label> <i class="fa fa-key"></i>Contraseña</label>
            </div>
            <div  className="col-60">
            <input  name="contraseya"
                    type="text"
                    placeholder="Contraseña del usuario"
                    value={userData?.contraseya || ''}
                    onChange={handleChange}/>
            </div>
          </div>
  
  
          <div  className="basics_row_space mt-5">
          <div className="send-button" onClick={handleSubmit}>Actualizar</div>
            <div className="send-button" onClick={logOut}>Cerrar sesión</div>
          </div>
        </form>
      </div>
    )
};

export default Profile;

// export default connect((state) => ({
//     credentials: state.credentials
// }))(Profile);