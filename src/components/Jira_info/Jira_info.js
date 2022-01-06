import React, { useState, useEffect } from "react";
import { NEW_JIRA , UPDATE_JIRA } from '../../redux/types';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';

const Jira_info = (props) => {

  
  const [jira, setJira] = useState('');
  const [msgError, setmsgError] = useState();

 
  useEffect(() => {

    getJiraByUser();

  }, []);

  useEffect(() => {

    setTimeout(() => {
        setmsgError('')
    }, 3000);

}, [msgError]);

  useEffect(() => {

    setJira(props.jiras.jira);

  }, [props.jiras.jira]);


  const addJira = async (e) => {

    e.preventDefault();

    try {

      const new_jira = {
        "nombre": jira.nombre,
        "url_jira": jira.url_jira,
        "usuario": jira.usuario,
        "contraseya": jira.contraseya,
        "telefono": jira.telefono,
        "tipo_jira": jira.tipo_jira,
        "userId" : props.credentials.user.id
      }

      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      let res = await clienteAxios.post(`/jira`, new_jira, config);

      props.dispatch({ type: NEW_JIRA, payload: new_jira });

      // setmsgError(`Datos guardados`);

    } catch (error) {
      console.log(error)
      // setmsgError(`Error al guardar los datos`);
    }
  }

  const handleChange = (e) => {

      setJira({ ...jira, [e.target.name]: e.target.value });
  
  }


  const getJiraByUser = async () => {

    try {
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      let res = await clienteAxios.get(`/jira/userId/${props.credentials.user.id}`, config);

      props.dispatch({ type: NEW_JIRA, payload: res.data[0] });

      setJira(res.data);

    } catch (error) {
      console.log(error);
    }

  };


  const updateJira = async (e) => {

    e.preventDefault();
    try {

      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const updatedJira = {
        "nombre": jira.nombre,
        "url_jira": jira.url_jira,
        "usuario": jira.usuario,
        "contraseya": jira.contraseya,
        "telefono": jira.telefono,
        "tipo_jira": jira.tipo_jira,
        "userId" : props.credentials.user.id
      }

      debugger
      let res = await clienteAxios.put(`/jira/${props.jiras.jira.id}`, updatedJira, config);
 
      props.dispatch({ type: UPDATE_JIRA, payload: updatedJira });

      // setmsgError(`Datos actualizados`);
  
    } catch (error) {
      console.log(error);
      // setmsgError(`Error al actualizar los datos`);
    }

  }


  return (
    <div  className="container-component">
      <h1>Datos de conexión a Jira</h1>

      <p className="p-info-manejador"> Para poder vincular su instacia de Jira con un número de teléfono es necesario completar los siguiente datos conexión. </p>

      <form className="form-datos-jira">
        <div  className="row">
          <div  className="col-40">
            <label> <i class="far fa-sticky-note"></i> Nombre</label>
          </div>
          <div  className="col-60">
            <input type="text" id="nombre" name="nombre" value={jira?.nombre || ''} onChange={handleChange} placeholder="Nombre de la instancia Jira.." />
          </div>
        </div>
        <div  className="row">
          <div  className="col-40">
            <label> <i class="fa fa-server"></i>Tipo</label>
          </div>
          <div  className="col-60">
            <select  className="tipo_jira" name="tipo_jira" value={jira?.tipo_jira}  onChange={handleChange}>
              <option value="Jira Cloud">Jira Cloud</option>
              <option value="Jira Server">Jira Server</option>
              <option value="Jira Data Center">Jira Data Center</option>
            </select>
          </div>
        </div>
        <div  className="row">
          <div  className="col-40">
            <label> <i class="fa fa-link"></i>URL Base</label>
          </div>
          <div  className="col-60">
            <input type="text" id="url" name="url_jira" value={jira?.url_jira || ''} onChange={handleChange} placeholder="https://example.atlassian.net/jira" />
          </div>
        </div>
        <div  className="row">
          <div  className="col-40">
            <label> <i class="fa fa-envelope"></i>Correo</label>
          </div>
          <div  className="col-60">
            <input type="text" id="usuario" name="usuario" value={jira?.usuario || ''} onChange={handleChange} placeholder="Usuario jira.." />
          </div>
        </div>

        <div  className="row">
          <div  className="col-40">
            <label> <i class="fa fa-key"></i>API TOKEN</label>
          </div>
          <div  className="col-60">
            <input type="text"name= "contraseya" value={jira?.contraseya || ''} onChange={handleChange} placeholder="Contraseña de usuario.." />
          </div>
        </div>

        <div  className="row">
          <div  className="col-40">
          <label> <i class="fa fa-whatsapp"></i>Teléfono</label>
          </div>
          <div  className="col-60">
          <input  type="text" name="telefono" value={jira?.telefono || ''} onChange={handleChange} placeholder="645 234 567" />
          </div>
        </div>
        <div  className="mt-3 basics_row">
        
        {jira ?
               <div className="basics_column">
                <div className="info-update-jira">{msgError}</div>
                <button  className="send-button btn-jira" type="submit" onClick={e => updateJira(e)}>Actualizar</button>
                </div>
              :
              <div className="basics_column">
                <div className="info-update-jira">{msgError}</div>
                <button  className="send-button btn-jira" type="submit" onClick={e => addJira(e)}>Guardar</button>
              
              </div>
            }
        </div>
      </form>
    </div>
  )
};
export default connect((state) => ({
  credentials: state.credentials,
  jiras: state.jiras
}))(Jira_info);